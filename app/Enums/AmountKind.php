<?php

declare(strict_types=1);

namespace App\Enums;

enum AmountKind: string
{
    case Completed = 'completed';
    case Pending = 'pending';
}
