<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\Home\BuildDeploymentCards;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Show one card per deployment. The cards are plain display arrays, never models.
     */
    public function __invoke(BuildDeploymentCards $cards): Response
    {
        return Inertia::render('Dashboard', [
            'deployments' => $cards->handle(),
        ]);
    }
}
