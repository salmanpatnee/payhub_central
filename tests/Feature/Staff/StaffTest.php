<?php

declare(strict_types=1);

namespace Tests\Feature\Staff;

use App\Actions\Staff\RemoveStaff;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Inertia\Testing\AssertableInertia as Assert;
use PHPUnit\Framework\Attributes\DataProvider;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Tests\TestCase;

class StaffTest extends TestCase
{
    use RefreshDatabase;

    private const STRONG_PASSWORD = 'Str0ng-Passw0rd-xyz!';

    private const EMAIL_TAKEN = 'That email is already used by another login.';

    private User $admin;

    protected function setUp(): void
    {
        parent::setUp();

        $this->admin = User::factory()->create(['name' => 'Admin', 'email' => 'admin@example.test']);
    }

    private function addSession(User $user): void
    {
        DB::table('sessions')->insert([
            'id' => 'sess-'.$user->id.'-'.bin2hex(random_bytes(4)),
            'user_id' => $user->id,
            'ip_address' => '127.0.0.1',
            'user_agent' => 'test',
            'payload' => '',
            'last_activity' => time(),
        ]);
    }

    private function sessionCount(User $user): int
    {
        return DB::table('sessions')->where('user_id', $user->id)->count();
    }

    // covers: AC-1
    public function test_a_logged_out_visitor_is_redirected_to_login_on_every_staff_route(): void
    {
        $other = User::factory()->create();

        $this->get(route('staff.index'))->assertRedirect(route('login'));
        $this->get(route('staff.create'))->assertRedirect(route('login'));
        $this->post(route('staff.store'), [])->assertRedirect(route('login'));
        $this->get(route('staff.edit', $other))->assertRedirect(route('login'));
        $this->patch(route('staff.update', $other), [])->assertRedirect(route('login'));
        $this->put(route('staff.password', $other), [])->assertRedirect(route('login'));
        $this->delete(route('staff.destroy', $other))->assertRedirect(route('login'));
    }

    // covers: AC-1
    public function test_the_list_is_ordered_by_name_and_marks_only_the_logged_in_admin_as_you(): void
    {
        User::factory()->create(['name' => 'Zed']);
        User::factory()->create(['name' => 'Amy']);

        $this->actingAs($this->admin)
            ->get(route('staff.index'))
            ->assertInertia(fn (Assert $page) => $page
                ->component('staff/Index')
                ->has('staff', 3)
                ->where('staff.0.name', 'Admin')
                ->where('staff.0.isYou', true)
                ->where('staff.1.name', 'Amy')
                ->where('staff.1.isYou', false)
                ->where('staff.2.name', 'Zed'));
    }

    // covers: AC-2
    public function test_adding_a_login_verifies_it_sends_no_email_and_lets_the_person_sign_in(): void
    {
        Notification::fake();

        $this->actingAs($this->admin)
            ->post(route('staff.store'), [
                'name' => 'New Person',
                'email' => '  New.Person@Example.TEST ',
                'password' => self::STRONG_PASSWORD,
            ])
            ->assertRedirect(route('staff.index'));

        $user = User::where('email', 'new.person@example.test')->firstOrFail();
        $this->assertNotNull($user->email_verified_at);
        $this->assertTrue(Hash::check(self::STRONG_PASSWORD, $user->password));
        Notification::assertNothingSent();

        auth()->logout();
        $this->post(route('login.store'), ['email' => 'new.person@example.test', 'password' => self::STRONG_PASSWORD])
            ->assertRedirect();
        $this->assertAuthenticatedAs($user);
    }

    /**
     * @return array<string, array{array<string, string>, string}>
     */
    public static function badAddInput(): array
    {
        return [
            'empty name' => [['name' => ''], 'name'],
            'empty email' => [['email' => ''], 'email'],
            'badly formed email' => [['email' => 'not-an-email'], 'email'],
            'weak password' => [['password' => 'short'], 'password'],
            'missing password' => [['password' => ''], 'password'],
        ];
    }

    /**
     * @param  array<string, string>  $input
     */
    // covers: AC-3
    #[DataProvider('badAddInput')]
    public function test_bad_add_input_is_refused_and_creates_nothing(array $input, string $field): void
    {
        $this->actingAs($this->admin)
            ->from(route('staff.create'))
            ->post(route('staff.store'), $input + ['name' => 'X', 'email' => 'x@example.test', 'password' => self::STRONG_PASSWORD])
            ->assertSessionHasErrors($field);

        $this->assertSame(1, User::count());
    }

    // covers: AC-3, AC-8
    public function test_a_taken_email_is_refused_whatever_its_case_or_spacing(): void
    {
        $this->actingAs($this->admin)
            ->post(route('staff.store'), [
                'name' => 'Copy',
                'email' => ' ADMIN@example.test ',
                'password' => self::STRONG_PASSWORD,
            ])
            ->assertSessionHasErrors(['email' => self::EMAIL_TAKEN]);

        $this->assertSame(1, User::count());
    }

    // covers: AC-4
    public function test_editing_changes_name_and_email_without_touching_password_or_sessions(): void
    {
        $person = User::factory()->create();
        $hash = $person->password;
        $this->addSession($person);

        $this->actingAs($this->admin)
            ->patch(route('staff.update', $person), ['name' => 'Renamed', 'email' => 'Renamed@Example.test'])
            ->assertRedirect(route('staff.index'));

        $person->refresh();
        $this->assertSame('Renamed', $person->name);
        $this->assertSame('renamed@example.test', $person->email);
        $this->assertSame($hash, $person->password);
        $this->assertSame(1, $this->sessionCount($person));
    }

    // covers: AC-4
    public function test_editing_sets_email_verified_when_empty_and_keeps_it_when_set(): void
    {
        $unverified = User::factory()->unverified()->create();
        $verifiedAt = now()->subYear()->startOfSecond();
        $verified = User::factory()->create(['email_verified_at' => $verifiedAt]);

        $this->actingAs($this->admin)
            ->patch(route('staff.update', $unverified), ['name' => 'A', 'email' => $unverified->email]);
        $this->actingAs($this->admin)
            ->patch(route('staff.update', $verified), ['name' => 'B', 'email' => $verified->email]);

        $this->assertNotNull($unverified->refresh()->email_verified_at);
        $this->assertTrue($verified->refresh()->email_verified_at?->equalTo($verifiedAt) ?? false);
    }

    // covers: AC-4
    public function test_edit_refuses_an_email_used_by_another_login_but_allows_keeping_your_own(): void
    {
        $person = User::factory()->create(['email' => 'p@example.test']);

        $this->actingAs($this->admin)
            ->patch(route('staff.update', $person), ['name' => 'P', 'email' => 'admin@example.test'])
            ->assertSessionHasErrors(['email' => self::EMAIL_TAKEN]);

        $this->actingAs($this->admin)
            ->patch(route('staff.update', $person), ['name' => 'P2', 'email' => 'p@example.test'])
            ->assertSessionHasNoErrors();
    }

    // covers: AC-5
    public function test_a_new_password_ends_every_session_and_replaces_the_remember_token(): void
    {
        $person = User::factory()->withTwoFactor()->create();
        $oldToken = $person->remember_token;
        $secret = $person->two_factor_secret;
        $this->addSession($person);
        $this->addSession($person);
        $this->addSession($this->admin);

        $this->actingAs($this->admin)
            ->put(route('staff.password', $person), ['password' => self::STRONG_PASSWORD])
            ->assertRedirect(route('staff.index'));

        $person->refresh();
        $this->assertTrue(Hash::check(self::STRONG_PASSWORD, $person->password));
        $this->assertFalse(Hash::check('password', $person->password));
        $this->assertNotSame($oldToken, $person->remember_token);
        $this->assertSame($secret, $person->two_factor_secret);
        $this->assertSame(0, $this->sessionCount($person));
        $this->assertSame(1, $this->sessionCount($this->admin));
    }

    // covers: AC-5
    public function test_a_weak_new_password_is_refused_and_the_old_one_stays(): void
    {
        $person = User::factory()->create();
        $hash = $person->password;

        $this->actingAs($this->admin)
            ->put(route('staff.password', $person), ['password' => 'short'])
            ->assertSessionHasErrors('password');

        $this->assertSame($hash, $person->refresh()->password);
    }

    // covers: AC-6
    public function test_removing_deletes_the_login_and_sessions_and_the_person_can_no_longer_sign_in(): void
    {
        $person = User::factory()->create(['email' => 'gone@example.test']);
        $this->addSession($person);

        $this->actingAs($this->admin)
            ->delete(route('staff.destroy', $person))
            ->assertRedirect(route('staff.index'));

        $this->assertNull(User::find($person->id));
        $this->assertSame(0, $this->sessionCount($person));

        auth()->logout();
        $this->post(route('login.store'), ['email' => 'gone@example.test', 'password' => 'password'])
            ->assertSessionHasErrors();
        $this->assertGuest();
    }

    // covers: AC-7
    public function test_every_action_on_your_own_login_returns_403_and_changes_nothing(): void
    {
        $hash = $this->admin->password;
        $this->actingAs($this->admin);

        $this->get(route('staff.edit', $this->admin))->assertForbidden();
        $this->patch(route('staff.update', $this->admin), ['name' => 'Hacked', 'email' => 'h@example.test'])->assertForbidden();
        $this->put(route('staff.password', $this->admin), ['password' => self::STRONG_PASSWORD])->assertForbidden();
        $this->delete(route('staff.destroy', $this->admin))->assertForbidden();

        $this->admin->refresh();
        $this->assertSame('Admin', $this->admin->name);
        $this->assertSame($hash, $this->admin->password);
        $this->assertSame(1, User::count());
    }

    // covers: AC-7
    public function test_remove_is_refused_when_the_acting_admin_is_already_gone(): void
    {
        $target = User::factory()->create();

        try {
            app(RemoveStaff::class)->handle(999999, $target->id);
            $this->fail('Expected the removal to be refused.');
        } catch (HttpException $e) {
            $this->assertSame(403, $e->getStatusCode());
        }

        $this->assertNotNull(User::find($target->id));
    }

    // covers: AC-7
    public function test_two_admins_removing_each_other_never_leave_zero_logins(): void
    {
        $other = User::factory()->create();

        app(RemoveStaff::class)->handle($this->admin->id, $other->id);

        try {
            app(RemoveStaff::class)->handle($other->id, $this->admin->id);
            $this->fail('Expected the second removal to be refused.');
        } catch (HttpException $e) {
            $this->assertSame(403, $e->getStatusCode());
        }

        $this->assertSame([$this->admin->id], User::pluck('id')->all());
    }

    // covers: AC-8
    public function test_a_login_that_was_already_removed_returns_404(): void
    {
        $person = User::factory()->create();
        $id = $person->id;

        $this->actingAs($this->admin)->delete(route('staff.destroy', $person))->assertRedirect();

        $this->delete("/staff/{$id}")->assertNotFound();
        $this->get("/staff/{$id}/edit")->assertNotFound();
        $this->patch("/staff/{$id}", ['name' => 'x', 'email' => 'x@example.test'])->assertNotFound();
        $this->put("/staff/{$id}/password", ['password' => self::STRONG_PASSWORD])->assertNotFound();
    }

    // covers: AC-8
    public function test_the_remove_action_returns_404_when_the_target_is_already_gone(): void
    {
        try {
            app(RemoveStaff::class)->handle($this->admin->id, 999999);
            $this->fail('Expected the removal to be refused.');
        } catch (HttpException $e) {
            $this->assertSame(404, $e->getStatusCode());
        }
    }

    // covers: AC-9
    public function test_no_password_hash_or_remember_token_appears_in_page_data(): void
    {
        $person = User::factory()->create();

        foreach ([route('staff.index'), route('staff.create'), route('staff.edit', $person)] as $url) {
            $body = (string) $this->actingAs($this->admin)->get($url)->getContent();

            $this->assertStringNotContainsString($person->password, $body);
            $this->assertStringNotContainsString((string) $person->remember_token, $body);
            $this->assertStringNotContainsString($this->admin->password, $body);
        }
    }
}
