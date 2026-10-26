<?php

declare(strict_types=1);

namespace App\Enums;

enum PullSource: string
{
    case Scheduled = 'scheduled';
    case Manual = 'manual';
}
