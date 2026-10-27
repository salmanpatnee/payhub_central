<?php

declare(strict_types=1);

namespace App\Actions\Pulls;

use RuntimeException;

/**
 * A pull that was not started (or not saved). The message is a fixed plain sentence.
 */
class PullRefused extends RuntimeException {}
