<?php

declare(strict_types=1);

namespace Tests\Feature\Deployments;

use App\Actions\Deployments\BuildDeploymentList;
use App\Models\Deployment;
use App\Models\Pull;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class DeploymentListTest extends TestCase
{
    use RefreshDatabase;

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();

        $this->admin = User::factory()->create();
    }

    // covers: AC-1
    public function test_a_guest_is_sent_to_login(): void
    {
        $this->get('/deployments')->assertRedirect(route('login'));
    }

    // covers: AC-1, AC-6
    public function test_an_empty_list_gives_the_page_no_rows(): void
    {
        $this->actingAs($this->admin)->get('/deployments')->assertOk()->assertInertia(fn (Assert $page) => $page
            ->component('deployments/Index')
            ->has('deployments', 0));
    }

    // covers: AC-2
    public function test_rows_are_ordered_by_name_then_id_and_include_paused_but_not_removed(): void
    {
        $b2 = Deployment::factory()->create(['slug' => 'b-two', 'name' => 'Bravo']);
        $b1 = Deployment::factory()->create(['slug' => 'b-one', 'name' => 'Bravo']);
        Deployment::factory()->paused()->create(['slug' => 'alpha', 'name' => 'Alpha']);
        Deployment::factory()->create(['slug' => 'gone', 'name' => 'Aaa removed'])->delete();

        $this->actingAs($this->admin)->get('/deployments')->assertInertia(fn (Assert $page) => $page
            ->has('deployments', 3)
            ->where('deployments.0.name', 'Alpha')
            ->where('deployments.1.id', $b2->id)
            ->where('deployments.2.id', $b1->id));
    }

    // covers: AC-2
    public function test_state_is_paused_new_live_or_unavailable(): void
    {
        $paused = Deployment::factory()->paused()->create(['name' => 'A paused']);
        Pull::factory()->failed()->for($paused)->create();
        Deployment::factory()->create(['name' => 'B new']);
        $live = Deployment::factory()->create(['name' => 'C live']);
        Pull::factory()->for($live)->create();
        $down = Deployment::factory()->create(['name' => 'D down']);
        Pull::factory()->for($down)->create();
        Pull::factory()->failed()->for($down)->create();

        $rows = array_column(app(BuildDeploymentList::class)->handle(), 'state', 'name');

        $this->assertSame(['A paused' => 'paused', 'B new' => 'new', 'C live' => 'live', 'D down' => 'unavailable'], $rows);
    }

    // covers: AC-2, AC-9
    public function test_the_domain_is_the_lowercase_host_only(): void
    {
        Deployment::factory()->create(['name' => 'A', 'base_url' => 'https://Pay.Example.TEST:8443/app/path']);
        Deployment::factory()->create(['name' => 'B', 'base_url' => 'not a url']);

        $rows = app(BuildDeploymentList::class)->handle();

        $this->assertSame('pay.example.test', $rows[0]['domain']);
        $this->assertNull($rows[1]['domain']);
    }

    // covers: AC-9
    public function test_a_row_holds_only_safe_fields_and_ready_made_paths(): void
    {
        $deployment = Deployment::factory()->create(['slug' => 'payhub1', 'base_url' => 'https://one.example.test/secret-path']);

        $row = app(BuildDeploymentList::class)->handle()[0];

        $this->assertSame(['id', 'name', 'domain', 'state', 'href', 'editHref', 'activeHref'], array_keys($row));
        $this->assertSame('/deployments/payhub1', $row['href']);
        $this->assertSame('/deployments/payhub1/edit', $row['editHref']);
        $this->assertSame('/deployments/payhub1/active', $row['activeHref']);

        $json = (string) json_encode($row);
        $this->assertStringNotContainsString((string) $deployment->token, $json);
        $this->assertStringNotContainsString('secret-path', $json);
        $this->assertStringNotContainsString('https://', $json);
    }

    // covers: AC-9
    public function test_the_page_response_never_contains_a_token(): void
    {
        $deployment = Deployment::factory()->create();

        $body = (string) $this->actingAs($this->admin)->get('/deployments')->getContent();

        $this->assertStringNotContainsString((string) $deployment->token, $body);
    }

    // covers: AC-9
    public function test_the_list_runs_two_queries_whatever_the_row_count_and_never_selects_the_token(): void
    {
        $queriesAfterAdding = function (int $rows): array {
            Deployment::factory()->count($rows)->create()->each(fn (Deployment $d) => Pull::factory()->for($d)->create());

            DB::flushQueryLog();
            DB::enableQueryLog();
            app(BuildDeploymentList::class)->handle();
            $queries = array_column(DB::getQueryLog(), 'query');
            DB::disableQueryLog();

            return $queries;
        };

        $few = $queriesAfterAdding(2);
        $many = $queriesAfterAdding(7);

        $this->assertCount(2, $few);
        $this->assertCount(2, $many);
        foreach (array_merge($few, $many) as $sql) {
            $this->assertStringNotContainsString('token', $sql);
            $this->assertStringNotContainsString('select *', strtolower($sql));
        }
    }

    // covers: AC-5
    public function test_pause_goes_back_to_the_list_only_for_the_exact_list_path(): void
    {
        Deployment::factory()->create(['slug' => 'payhub1']);
        $this->actingAs($this->admin);
        $show = route('deployments.show', 'payhub1');

        $this->withHeader('referer', url('/deployments/'))->patch('/deployments/payhub1/active', ['is_active' => false])
            ->assertRedirect(route('deployments.index'));
        $this->withHeader('referer', url('/deployments?page=2'))->patch('/deployments/payhub1/active', ['is_active' => true])
            ->assertRedirect(route('deployments.index'));
        $this->withHeader('referer', url('/deployments/create'))->patch('/deployments/payhub1/active', ['is_active' => false])
            ->assertRedirect($show);
        $this->patch('/deployments/payhub1/active', ['is_active' => true])->assertRedirect($show);
    }

    // covers: AC-12
    public function test_saving_a_new_deployment_lands_on_the_list(): void
    {
        $this->actingAs($this->admin)
            ->post('/deployments', [
                'slug' => 'fresh',
                'name' => 'Fresh',
                'base_url' => 'https://fresh.example.test',
                'token' => str_repeat('f', 64),
                'is_active' => true,
            ])
            ->assertRedirect(route('deployments.index'));

        $this->assertNotNull(Deployment::query()->where('slug', 'fresh')->first());
    }
}
