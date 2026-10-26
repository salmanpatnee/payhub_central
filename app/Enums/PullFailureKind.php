<?php

declare(strict_types=1);

namespace App\Enums;

enum PullFailureKind: string
{
    case Unauthenticated = 'unauthenticated';
    case HttpsRequired = 'https_required';
    case NotFound = 'not_found';
    case RateLimited = 'rate_limited';
    case Unavailable = 'unavailable';
    case Redirect = 'redirect';
    case Timeout = 'timeout';
    case Network = 'network';
    case BadVersion = 'bad_version';
    case KeyMismatch = 'key_mismatch';
    case InvalidReply = 'invalid_reply';
    case TokenUnreadable = 'token_unreadable';

    /**
     * Only these failures keep a cut down copy of the response body.
     */
    public function keepsBody(): bool
    {
        return match ($this) {
            self::BadVersion, self::KeyMismatch, self::InvalidReply => true,
            default => false,
        };
    }
}
