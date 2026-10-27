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
     * The fixed text saved for each code. Never built from a response, header, URL or exception.
     */
    public function message(): string
    {
        return match ($this) {
            self::Unauthenticated => 'PayHub rejected the token (401).',
            self::HttpsRequired => 'PayHub refused the request (HTTPS required).',
            self::NotFound => 'The summary endpoint was not found (404). It may not be turned on for this deployment.',
            self::RateLimited => 'PayHub said too many calls (429). Pulls wait before the next try.',
            self::Unavailable => 'PayHub could not give a summary right now.',
            self::Redirect => 'PayHub answered with a redirect. Redirects are not followed.',
            self::Timeout => 'PayHub did not answer within 10 seconds.',
            self::Network => 'Could not connect to PayHub.',
            self::BadVersion => 'The reply is not contract version v1.',
            self::KeyMismatch => "The key in the reply does not match this deployment's key.",
            self::InvalidReply => 'The reply could not be read, or its numbers do not add up.',
            self::TokenUnreadable => 'The saved token could not be read.',
        };
    }

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
