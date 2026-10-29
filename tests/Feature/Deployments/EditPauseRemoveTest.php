<?php

declare(strict_types=1);

namespace Tests\Feature\Deployments;

use App\Models\Deployment;
use App\Models\Pull;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Queue;
use Inertia\Testing\AssertableInertia as Assert;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

class EditPauseRemoveTest extends TestCase
{
    use RefreshDatabase;

    private const TOKEN = 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2';

    private User $admin;

    private Deployment $deployment;

    protected function setUp(): void
    {
        parent::setUp();

        $this->admin = User::factory()->create();
        $this->deployment = Deployment::factory()->create([
            'slug' => 'payhub1',
            'name' => 'PayHub One',
            'base_url' => 'https://one.example.test',
            'token' => str_repeat('t', 64),
        ]);
    }

    /**
     * @param  array<string, mixed>  $overrides
     * @return array<string, mixed>
     */
    private function input(array $overrides = []): array
    {
        return $overrides + ['name' => 'PayHub One', 'base_url' => 'https://one.example.test', 'token' => ''];
    }

    private function rawToken(): ?string
    {
        $raw = DB::table('deployments')->where('id', $this->deployment->id)->value('token');

        return is_string($raw) ? $raw : null;
    }

    private function waitUntil(): ?string
    {
        $value = DB::table('deployments')->where('id', $this->deployment->id)->value('do_not_pull_before');

        return is_string($value) ? $value : null;
    }

    // covers: AC-1, AC-10
    public function test_guests_are_sent_to_login_on_every_new_route(): void
    {
        $this->get('/deployments/payhub1/edit')->assertRedirect(route('login'));
        $this->patch('/deployments/payhub1', $this->input())->assertRedirect(route('login'));
        $this->patch('/deployments/payhub1/active', ['is_active' => false])->assertRedirect(route('login'));
        $this->delete('/deployments/payhub1')->assertRedirect(route('login'));
    }

    // covers: AC-1, AC-9
    public function test_the_edit_page_holds_only_the_key_name_and_url(): void
    {
        $body = $this->actingAs($this->admin)->get('/deployments/payhub1/edit');

        $body->assertInertia(fn (Assert $page) => $page
            ->component('deployments/Edit')
            ->where('deployment', ['key' => 'payhub1', 'name' => 'PayHub One', 'baseUrl' => 'https://one.example.test']));

        $this->assertStringNotContainsString(str_repeat('t', 64), (string) $body->getContent());
        $this->assertStringNotContainsString((string) $this->rawToken(), (string) $body->getContent());
    }

    // covers: AC-1, AC-8
    public function test_an_unknown_key_gives_a_404_on_every_route(): void
    {
        $this->actingAs($this->admin);

        $this->get('/deployments/nope/edit')->assertNotFound();
        $this->patch('/deployments/nope', $this->input())->assertNotFound();
        $this->patch('/deployments/nope/active', ['is_active' => false])->assertNotFound();
        $this->delete('/deployments/nope')->assertNotFound();
    }

    // covers: AC-2
    public function test_a_good_save_updates_the_row_and_goes_to_the_deployment_page(): void
    {
        $this->actingAs($this->admin)
            ->patch('/deployments/payhub1', $this->input(['name' => '  Renamed ', 'base_url' => 'https://moved.example.test///']))
            ->assertRedirect(route('deployments.show', 'payhub1'));

        $this->deployment->refresh();
        $this->assertSame('Renamed', $this->deployment->name);
        $this->assertSame('https://moved.example.test', $this->deployment->base_url);
    }

    // covers: AC-2
    public function test_a_save_that_changes_nothing_still_succeeds(): void
    {
        $this->actingAs($this->admin)
            ->patch('/deployments/payhub1', $this->input())
            ->assertRedirect(route('deployments.show', 'payhub1'))
            ->assertSessionHasNoErrors();
    }

    // covers: AC-2
    public function test_a_key_sent_in_the_request_is_ignored(): void
    {
        $this->actingAs($this->admin)
            ->patch('/deployments/payhub1', $this->input(['slug' => 'hacked', 'is_active' => false]))
            ->assertRedirect();

        $this->deployment->refresh();
        $this->assertSame('payhub1', $this->deployment->slug);
        $this->assertTrue($this->deployment->is_active);
    }

    /**
     * @return array<string, array{array<string, mixed>, string}>
     */
    public static function badEditInput(): array
    {
        return [
            'empty name' => [['name' => ''], 'name'],
            'name over 255' => [['name' => str_repeat('a', 256)], 'name'],
            'empty url' => [['base_url' => ''], 'base_url'],
            'http url' => [['base_url' => 'http://one.example.test'], 'base_url'],
            'url with username' => [['base_url' => 'https://user@one.example.test'], 'base_url'],
            'url with password' => [['base_url' => 'https://user:pw@one.example.test'], 'base_url'],
            'url with query' => [['base_url' => 'https://one.example.test?x=1'], 'base_url'],
            'url with fragment' => [['base_url' => 'https://one.example.test#top'], 'base_url'],
            'not a url' => [['base_url' => 'one.example.test'], 'base_url'],
            'token too short' => [['token' => 'short'], 'token'],
            'token too long' => [['token' => str_repeat('x', 65)], 'token'],
        ];
    }

    /**
     * @param  array<string, mixed>  $override
     */
    // covers: AC-2, AC-3
    #[DataProvider('badEditInput')]
    public function test_bad_input_is_refused_and_changes_nothing(array $override, string $field): void
    {
        $this->actingAs($this->admin)
            ->patch('/deployments/payhub1', $this->input($override))
            ->assertSessionHasErrors($field);

        $this->deployment->refresh();
        $this->assertSame('PayHub One', $this->deployment->name);
        $this->assertSame('https://one.example.test', $this->deployment->base_url);
        $this->assertSame(str_repeat('t', 64), $this->deployment->token);
    }

    // covers: AC-3
    public function test_a_blank_token_keeps_the_stored_one(): void
    {
        $before = $this->rawToken();

        $this->actingAs($this->admin)->patch('/deployments/payhub1', $this->input(['token' => '']))->assertRedirect();

        $this->assertSame($before, $this->rawToken());
    }

    // covers: AC-3
    public function test_a_64_character_token_replaces_the_stored_one_encrypted(): void
    {
        $this->actingAs($this->admin)
            ->patch('/deployments/payhub1', $this->input(['token' => '  '.self::TOKEN.'  ']))
            ->assertRedirect();

        $raw = (string) $this->rawToken();
        $this->assertStringNotContainsString(self::TOKEN, $raw);
        $this->assertSame(self::TOKEN, Crypt::decryptString($raw));
        $this->assertSame(self::TOKEN, $this->deployment->refresh()->token);
    }

    // covers: AC-3, AC-9
    public function test_a_refused_token_message_never_repeats_what_was_typed(): void
    {
        $response = $this->actingAs($this->admin)
            ->patch('/deployments/payhub1', $this->input(['token' => 'secret-typed-value']));

        $response->assertSessionHasErrors('token');
        $response->assertSessionHasErrors(['token' => 'The token must be exactly 64 characters.']);
    }

    // covers: AC-9
    public function test_a_refused_save_does_not_flash_the_token_back(): void
    {
        $this->actingAs($this->admin)
            ->patch('/deployments/payhub1', $this->input(['name' => '', 'token' => self::TOKEN]));

        $old = session()->get('_old_input', []);
        $this->assertIsArray($old);
        $this->assertArrayNotHasKey('token', $old);
    }

    // covers: AC-4
    public function test_a_new_url_or_a_token_clears_the_wait(): void
    {
        $changes = [
            'new url' => ['base_url' => 'https://other.example.test'],
            'url letter case' => ['base_url' => 'https://ONE.example.test'],
            'any token' => ['token' => self::TOKEN],
        ];

        foreach ($changes as $label => $change) {
            DB::table('deployments')->where('id', $this->deployment->id)->update(['do_not_pull_before' => now()->addHour()]);

            $this->actingAs($this->admin)->patch('/deployments/payhub1', $this->input($change))->assertRedirect();

            $this->assertNull($this->waitUntil(), "The wait should clear for: {$label}");
            $this->deployment->refresh();
            $this->patch('/deployments/payhub1', $this->input(['base_url' => 'https://one.example.test']));
        }
    }

    // covers: AC-4
    public function test_the_same_token_typed_again_still_clears_the_wait(): void
    {
        $this->actingAs($this->admin)->patch('/deployments/payhub1', $this->input(['token' => self::TOKEN]));
        DB::table('deployments')->where('id', $this->deployment->id)->update(['do_not_pull_before' => now()->addHour()]);

        $this->patch('/deployments/payhub1', $this->input(['token' => self::TOKEN]))->assertRedirect();

        $this->assertNull($this->waitUntil());
    }

    // covers: AC-4
    public function test_a_name_only_or_trailing_slash_only_change_keeps_the_wait(): void
    {
        DB::table('deployments')->where('id', $this->deployment->id)->update(['do_not_pull_before' => now()->addHour()]);

        $this->actingAs($this->admin)->patch('/deployments/payhub1', $this->input(['name' => 'Only the name']));
        $this->assertNotNull($this->waitUntil());

        $this->patch('/deployments/payhub1', $this->input(['name' => 'Only the name', 'base_url' => 'https://one.example.test/']));
        $this->assertNotNull($this->waitUntil());
    }

    // covers: AC-4, AC-5
    public function test_edit_pause_and_resume_make_no_call_to_payhub_and_queue_no_job(): void
    {
        Http::fake();
        Queue::fake();

        $this->actingAs($this->admin);
        $this->patch('/deployments/payhub1', $this->input(['token' => self::TOKEN, 'base_url' => 'https://other.example.test']));
        $this->patch('/deployments/payhub1/active', ['is_active' => false]);
        $this->patch('/deployments/payhub1/active', ['is_active' => true]);

        Http::assertNothingSent();
        Queue::assertNothingPushed();
    }

    // covers: AC-5
    public function test_pause_and_resume_set_the_wanted_state_and_a_repeat_changes_nothing_more(): void
    {
        $this->actingAs($this->admin);

        $this->patch('/deployments/payhub1/active', ['is_active' => false])->assertRedirect(route('deployments.show', 'payhub1'));
        $this->assertFalse($this->deployment->refresh()->is_active);

        $this->patch('/deployments/payhub1/active', ['is_active' => false])->assertRedirect();
        $this->assertFalse($this->deployment->refresh()->is_active);

        $this->patch('/deployments/payhub1/active', ['is_active' => true])->assertRedirect();
        $this->assertTrue($this->deployment->refresh()->is_active);
    }

    // covers: AC-5
    public function test_a_missing_or_odd_switch_value_gives_a_422(): void
    {
        $this->actingAs($this->admin);

        $this->patch('/deployments/payhub1/active', [])->assertSessionHasErrors('is_active');
        $this->patch('/deployments/payhub1/active', ['is_active' => 'maybe'])->assertSessionHasErrors('is_active');
        $this->assertTrue($this->deployment->refresh()->is_active);
    }

    // covers: AC-5, AC-11
    public function test_pause_from_the_list_goes_back_to_the_list(): void
    {
        $this->actingAs($this->admin)
            ->withHeader('referer', url('/deployments'))
            ->patch('/deployments/payhub1/active', ['is_active' => false])
            ->assertRedirect(route('deployments.index'));

        $this->actingAs($this->admin)
            ->withHeader('referer', 'https://evil.example/elsewhere')
            ->patch('/deployments/payhub1/active', ['is_active' => true])
            ->assertRedirect(route('deployments.show', 'payhub1'));
    }

    // covers: AC-6
    public function test_pause_changes_only_the_switch_and_edit_never_changes_it(): void
    {
        DB::table('deployments')->where('id', $this->deployment->id)->update(['do_not_pull_before' => now()->addHour()]);
        $before = $this->rawToken();
        $wait = $this->waitUntil();

        $this->actingAs($this->admin)->patch('/deployments/payhub1/active', ['is_active' => false]);

        $this->deployment->refresh();
        $this->assertSame('PayHub One', $this->deployment->name);
        $this->assertSame('https://one.example.test', $this->deployment->base_url);
        $this->assertSame($before, $this->rawToken());
        $this->assertSame($wait, $this->waitUntil());

        $this->patch('/deployments/payhub1', $this->input(['name' => 'Edited while paused']));
        $this->assertFalse($this->deployment->refresh()->is_active);
    }

    // covers: AC-7
    public function test_remove_wipes_the_token_soft_deletes_and_goes_to_the_list(): void
    {
        $this->actingAs($this->admin)
            ->delete('/deployments/payhub1')
            ->assertRedirect(route('deployments.index'));

        $this->assertNull($this->rawToken());
        $this->assertNull(Deployment::query()->where('slug', 'payhub1')->first());
        $this->assertNotNull(Deployment::withTrashed()->where('slug', 'payhub1')->first()?->deleted_at);
    }

    // covers: AC-8
    public function test_a_removed_deployment_gives_a_404_everywhere_and_keeps_its_pulls_and_key(): void
    {
        Pull::factory()->for($this->deployment)->create();

        $this->actingAs($this->admin)->delete('/deployments/payhub1')->assertRedirect();

        $this->get('/deployments/payhub1')->assertNotFound();
        $this->get('/deployments/payhub1/edit')->assertNotFound();
        $this->patch('/deployments/payhub1', $this->input())->assertNotFound();
        $this->patch('/deployments/payhub1/active', ['is_active' => true])->assertNotFound();
        $this->delete('/deployments/payhub1')->assertNotFound();

        $this->assertSame(1, Pull::query()->count());
        $this->post('/deployments', [
            'slug' => 'payhub1', 'name' => 'Again', 'base_url' => 'https://again.example.test', 'token' => self::TOKEN,
        ])->assertSessionHasErrors('slug');
    }

    // covers: AC-8
    public function test_a_removed_deployment_is_gone_from_the_list_page_data(): void
    {
        $this->actingAs($this->admin)->delete('/deployments/payhub1')->assertRedirect();

        $this->get('/deployments')->assertInertia(fn (Assert $page) => $page
            ->component('deployments/Index')
            ->has('deployments', 0));
    }
}
