<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\Staff\BuildStaffList;
use App\Actions\Staff\CreateStaff;
use App\Actions\Staff\RemoveStaff;
use App\Actions\Staff\SetStaffPassword;
use App\Actions\Staff\UpdateStaff;
use App\Http\Requests\SetStaffPasswordRequest;
use App\Http\Requests\StoreStaffRequest;
use App\Http\Requests\UpdateStaffRequest;
use App\Models\User;
use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class StaffController extends Controller
{
    /**
     * Show every login as a table row. Plain arrays, never models.
     */
    public function index(Request $request, BuildStaffList $list): Response
    {
        return Inertia::render('staff/Index', [
            'staff' => $list->handle((int) $request->user()?->id),
        ]);
    }

    /**
     * Show the add form. It gets no person data, only the password rule hint.
     */
    public function create(): Response
    {
        return Inertia::render('staff/Create', [
            'passwordRules' => Password::defaults()->toPasswordRulesString(),
        ]);
    }

    /**
     * Add a login. No email is sent.
     */
    public function store(StoreStaffRequest $request, CreateStaff $create): RedirectResponse
    {
        /** @var array{name: string, email: string, password: string} $data */
        $data = $request->validated();

        try {
            $create->handle($data);
        } catch (UniqueConstraintViolationException) {
            // Two saves raced and the database key fired: show the normal email error.
            throw ValidationException::withMessages(['email' => StoreStaffRequest::EMAIL_TAKEN]);
        }

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Staff added.')]);

        return to_route('staff.index');
    }

    /**
     * Show the edit page. An explicit array, never the model.
     */
    public function edit(Request $request, User $user): Response
    {
        abort_if($user->is($request->user()), 403);

        return Inertia::render('staff/Edit', [
            'person' => ['id' => $user->id, 'name' => $user->name, 'email' => $user->email],
            'passwordRules' => Password::defaults()->toPasswordRulesString(),
        ]);
    }

    /**
     * Change a name and email.
     */
    public function update(UpdateStaffRequest $request, User $user, UpdateStaff $update): RedirectResponse
    {
        /** @var array{name: string, email: string} $data */
        $data = $request->validated();

        try {
            $update->handle($user, $data);
        } catch (UniqueConstraintViolationException) {
            throw ValidationException::withMessages(['email' => StoreStaffRequest::EMAIL_TAKEN]);
        }

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Staff saved.')]);

        return to_route('staff.index');
    }

    /**
     * Set a new password and end the person's sessions.
     */
    public function password(SetStaffPasswordRequest $request, User $user, SetStaffPassword $set): RedirectResponse
    {
        $set->handle($user, (string) $request->validated('password'));

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Password changed.')]);

        return to_route('staff.index');
    }

    /**
     * Remove a login and its sessions.
     */
    public function destroy(Request $request, User $user, RemoveStaff $remove): RedirectResponse
    {
        abort_if($user->is($request->user()), 403);

        $remove->handle((int) $request->user()?->id, $user->id);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Staff removed.')]);

        return to_route('staff.index');
    }
}
