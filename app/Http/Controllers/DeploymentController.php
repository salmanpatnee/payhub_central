<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\Deployments\BuildDeploymentDetail;
use App\Actions\Deployments\BuildDeploymentList;
use App\Actions\Deployments\BuildRecentPulls;
use App\Actions\Deployments\RemoveDeployment;
use App\Actions\Deployments\UpdateDeployment;
use App\Http\Requests\StoreDeploymentRequest;
use App\Http\Requests\UpdateDeploymentRequest;
use App\Models\Deployment;
use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class DeploymentController extends Controller
{
    /**
     * Show every deployment as a table row. Plain arrays, never models.
     */
    public function index(BuildDeploymentList $list): Response
    {
        return Inertia::render('deployments/Index', [
            'deployments' => $list->handle(),
        ]);
    }

    /**
     * Show the add form. It gets no deployment data, so no token can reach the browser.
     */
    public function create(): Response
    {
        return Inertia::render('deployments/Create');
    }

    /**
     * Show one deployment. Found by slug text, not model binding, so the token is never loaded.
     * The pull list is a closure, so the page poll (which asks only for `deployment`) never runs its query.
     */
    public function show(string $deployment, BuildDeploymentDetail $detail, BuildRecentPulls $recent): Response
    {
        return Inertia::render('deployments/Show', [
            'deployment' => $detail->handle($deployment),
            'pulls' => fn () => $recent->handle($deployment),
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

        return to_route('deployments.index');
    }

    /**
     * Show the edit form. Only the key, name and URL are selected, so the token is never loaded.
     */
    public function edit(string $deployment): Response
    {
        $row = Deployment::query()->select(['slug', 'name', 'base_url'])->where('slug', $deployment)->firstOrFail();

        return Inertia::render('deployments/Edit', [
            'deployment' => ['key' => $row->slug, 'name' => $row->name, 'baseUrl' => $row->base_url],
        ]);
    }

    /**
     * Save an edit. This never calls PayHub and never queues a job.
     */
    public function update(UpdateDeploymentRequest $request, string $deployment, UpdateDeployment $update): RedirectResponse
    {
        /** @var array{name: string, base_url: string, token?: string|null} $data */
        $data = $request->validated();
        $update->handle($deployment, $data);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Deployment saved.')]);

        return to_route('deployments.show', $deployment);
    }

    /**
     * Pause or resume. The wanted state is sent, not flipped, so a double click changes nothing more.
     */
    public function active(Request $request, string $deployment): RedirectResponse
    {
        $request->validate(['is_active' => ['required', 'boolean']]);
        $active = $request->boolean('is_active');

        $id = Deployment::query()->select('id')->where('slug', $deployment)->firstOrFail()->id;
        Deployment::query()->whereKey($id)->update(['is_active' => $active]);

        Inertia::flash('toast', [
            'type' => 'success',
            'message' => $active ? __('Deployment resumed.') : __('Deployment paused.'),
        ]);

        // Back to the list when the click came from the list, else the Deployment page. Only these two targets.
        $from = rtrim((string) parse_url((string) $request->headers->get('referer'), PHP_URL_PATH), '/');

        return $from === route('deployments.index', absolute: false)
            ? to_route('deployments.index')
            : to_route('deployments.show', $deployment);
    }

    /**
     * Remove: wipes the token and soft deletes the row. The saved pulls stay.
     */
    public function destroy(string $deployment, RemoveDeployment $remove): RedirectResponse
    {
        $remove->handle($deployment);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Deployment removed.')]);

        return to_route('deployments.index');
    }
}
