<?php

declare(strict_types=1);

namespace App\Enums;

enum WindowName: string
{
    case AllTime = 'all_time';
    case Today = 'today';
    case ThisMonth = 'this_month';
    case Last30Days = 'last_30_days';
}
