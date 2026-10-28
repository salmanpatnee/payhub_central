<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\Deployments\BuildDeploymentDetail;
use App\Http\Requests\StoreDeploymentRequest;
use App\Models\Deployment;
use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class DeploymentController extends Controller
{
    /**
     * Show the add form. It gets no deployment data, so no token can reach the browser.
     */
    public function create(): Response
    {
        return Inertia::render('deployments/Create');
    }

    /**
     * Show one deployment. Found by slug text, not model binding, so the token is never loaded.
     */
    public function show(string $deployment, BuildDeploymentDetail $detail): Response
    {
        return Inertia::render('deployments/Show', [
            'deployment' => $detail->handle($deployment),
        ]);
    }

    /**
     * Save a new deployment. This never calls PayHub (that is feature 7).
     */
    public function store(StoreDeploymentRequest $request): RedirectResponse
    {
        try {
            Deployment::create($request->validated());
        } catch (UniqueConstraintViolationException) {
            // Two saves raced and the database key fired: show the normal key error.
            throw ValidationException::withMessages(['slug' => StoreDeploymentRequest::KEY_TAKEN]);
        }

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Deployment added.')]);

        return to_route('dashboard');
    }
}
