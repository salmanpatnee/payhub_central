# 0006. Pull a summary by hand: rationale

## Context

Scope feature 7 is the second step of Slice 1 (the thin first thread). Feature 6 can now create a deployment with an encrypted token. Spec 0002 already built the tables, the five enums, and `SaveGoodPull`, the one class that writes a good pull, its four windows and its money rows in one transaction. It also left this feature three jobs: map every HTTP status and failure to a failure code, check that link counts add up, and cap `Retry-After`.

The agreement with PayHub is `docs/central-dashboard-api.md` (contract v1). It says any non 200 reply means "unavailable", unknown keys and currencies must be accepted, a `contract_version` other than `v1` is an error, PayHub allows 6 calls a minute per token, and the token is never to be logged. The sample reply is `docs/central-dashboard-sample.json`.

The main risk is the token. It is sent in a request header to whatever host was saved in feature 6, and an error message from the HTTP library can contain the URL. Nothing from an exception may reach the database, a log or the screen. The second risk is the rate limit: two pulls at the same moment could use up the 6 calls a minute.

No scheduler or queue exists yet (feature 9). Retries, queued jobs and the 5 minute cycle are out of scope here.

## Options considered

### Option 1: An Artisan command over one pull action

A command `pulls:run {key}` calls an action class that does the whole pull. Feature 8 and 10 add a button later that calls the same action, and feature 9 calls it from a queued job.

**Pros**:
- Smallest change, and no screen is needed. It fits the Tracer Bullet slice.
- One action is reused by the button and the job later, so nothing is built twice.
- Easy to test with faked replies built from the sample JSON.

**Cons**:
- Only someone with server access can run it until feature 8 or 10 adds a button.

### Option 2: A "Pull now" button on Home

A POST route and a button in the browser.

**Pros**:
- Usable without a terminal.

**Cons**:
- Home has no deployment list until feature 8, so the button has nowhere sensible to sit.
- Adds a web route that spends a live token on request, which needs CSRF, throttling and a result screen decided now.

### Option 3: Queue a job per pull now

Dispatch a queued job so the pull runs in the background.

**Pros**:
- Matches how feature 9 will work.

**Cons**:
- Feature 9 owns the queue, retries and `Retry-After` handling, so this builds it twice.
- Adds a worker that must be running just to test one call.

## Rationale

The scope says feature 7 is the first call and the place where every failure code lives. The slice only needs a way to make that call work and be seen. A command does that with the least code, and it keeps the action free of any web or queue detail, so feature 8, 10 and 9 can each call it as they arrive. A button now (Option 2) would need a place to sit and a result screen that feature 8 will design. A queued job now (Option 3) would pull feature 9's work forward.

The strict number check was chosen because spec 0002 leaves it to this feature, and a reply whose links do not add up should never become the "last good" reply that feature 8 shows. Redirects are never followed because the token is in the request header, and a redirect could send it to another host. Paused deployments are refused even for a manual pull, so "paused" has one meaning everywhere.
