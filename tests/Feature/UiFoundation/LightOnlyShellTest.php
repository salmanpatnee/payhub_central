<?php

declare(strict_types=1);

namespace Tests\Feature\UiFoundation;

use App\Models\User;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class LightOnlyShellTest extends TestCase
{
    public function test_home_page_renders_in_the_shell_for_a_logged_in_user(): void
    {
        $this->actingAs(User::factory()->create())
            ->get(route('dashboard'))
            ->assertOk()
            ->assertInertia(fn (AssertableInertia $page) => $page->component('Dashboard'));
    }

    public function test_logged_out_visitor_is_sent_to_login(): void
    {
        $this->get(route('dashboard'))->assertRedirect(route('login'));
    }

    public function test_appearance_settings_page_is_gone(): void
    {
        $this->actingAs(User::factory()->create())
            ->get('/settings/appearance')
            ->assertNotFound();
    }

    public function test_dark_class_is_never_set_even_with_an_appearance_cookie(): void
    {
        $html = $this->actingAs(User::factory()->create())
            ->withUnencryptedCookie('appearance', 'dark')
            ->get(route('dashboard'))
            ->assertOk()
            ->getContent();

        $this->assertIsString($html);
        $this->assertDoesNotMatchRegularExpression('/<html[^>]*class="[^"]*dark/', $html);
        $this->assertStringNotContainsString('prefers-color-scheme', $html);
    }

    public function test_app_is_named_payhub_central(): void
    {
        $this->assertSame('PayHub Central', config('app.name'));
    }
}
