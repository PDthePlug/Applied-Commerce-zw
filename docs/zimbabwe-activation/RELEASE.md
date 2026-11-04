# Zimbabwe release activation — 4 November 2026

Target repository: `PDthePlug/Applied-Commerce-zw`.
New Vercel project: `applied-commerce-zw` (`prj_rwgeliQv73iJ8LfwlHFSTlk0bvow`).
Zimbabwe Supabase: `hkarxzjmttjetotduvyx`, Primary account connection.

## Database status and prepared reconciliation

Zimbabwe `hkarxzjmttjetotduvyx` is ACTIVE_HEALTHY. It remains the intended backend; South Africa staging is unchanged. Read-only live inspection confirmed the ten original Zimbabwe migrations, five Auth/profile accounts, two cohorts, one learner profile, one evidence record and one review. There are no cloud prompt responses, notes or lesson-progress rows. No learner answers or private account details were exported.

The deployment has the correct Zimbabwe URL/public key but stays in explicit local mode until the migration is applied and verified. Two Supabase migration confirmation requests expired without running. A follow-up query confirmed that the account-bound save RPC is still absent and the existing record counts are unchanged.

The reviewed migration is `supabase/zimbabwe-reconciliation/migrations/20261104065807_reconcile_zimbabwe_rebuild.sql`, generated into a CLI-created file by `scripts/prepare-zimbabwe-reconciliation.mjs`. It:

- Preserves accounts, institutions, cohorts, evidence, reviews and the original `ac-zw-forms-1-4` release.
- Adds a separate Zimbabwe `ac-runtime-3` release for the copied application contract; it does not rename the original release or reinterpret historical rows.
- Reuses the current ZA pending-role, review protection, revision/session, account-bound save and settings contracts.
- Registers all 385 Zimbabwe units in a private delivery catalogue. Saves use actual delivery coordinates, including source Grade 11 split across Forms 3 and 4, while retaining original unit IDs.
- Keeps old `current_form` and `zimbabwe_form` fields consistent when current clients save their numeric Form keys.
- Leaves old evidence reviews without an invented historical answer snapshot.

The data-free historical schema fixture is pinned to `PDthePlug/Applied-Commerce-Za` commit `bb1e0664c92ebf2d0363f58d91a935b75367c311`. Disposable PostgreSQL tests replay that original schema, insert synthetic historical evidence/review records, apply the new migration, verify preservation, then exercise mapped bridge saves, profile Form consistency, stale conflicts, account isolation and revoked-session denial. The full 256-test suite, typecheck and lint pass. These tests do not represent live Supabase Auth certification.

Release sequence after explicit confirmation of the prepared migration:

1. Apply the migration to the existing Zimbabwe project through Supabase. Do not replay the ZA baseline or repair the original history.
2. Verify function/column presence, delivery catalogue count, retained original record counts, grants and RLS; run advisors. Record the provider-assigned migration version and align the repository filename with it.
3. Verify Auth Site URL and callback/recovery allowlist for the new deployment. The connector lacks Auth configuration operations and the dashboard currently requires sign-in in the agent browser, so this has not been verified or changed.
4. Switch the new Vercel project's backend mode to `supabase`, rebuild and verify the exact commit, Auth and Data API health. Test account workflows using an explicitly approved isolated fixture environment.
5. Retain the local-mode deployment for frontend rollback. Preserve the new schema protections and recovery data. Older clients using unconditional writes will need to move to the rebuilt app; their device-local edits remain intact.

The existing Supabase security advisor reports leaked-password protection disabled; see [Supabase password security](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection). It also reports a redundant evidence-review index and unused indexes after restoration. No indexes were removed based on reset usage statistics.

## Teacher-guide blocker and adaptation tooling

All 382 Zimbabwe lessons have corresponding ZA plan metadata. The complete prose is encrypted in `content/instructional/teaching-plans.v2.enc.json`. The Vercel `AC_CLASSROOM_CONTENT_KEY` is sensitive; the API returns metadata but no value. No private source has been decrypted or educationally adapted in this session.

`teacher-binding-inventory.json` records each lesson's Form/term and original-plan coverage. It is metadata, not adapted guidance. 381 lessons reference at least one source block identity absent from the localised unit. Unchanged positions are not sufficient evidence for remapping.

`scripts/adapt-zimbabwe-teaching.mjs` prepares an encrypted Zimbabwe release from an authorised original-plan export and explicit review decisions. It requires a matching original plan hash, current Zimbabwe source hash, reviewer, context review, keep/replacement decision for every field and explicit mappings for changed anchors. It validates all placements, task coverage and 45-minute timings before writing the complete 382-plan release. Missing reviews or mappings stop publication. It retains the existing teaching model and layout; it does not generate generic plans from lesson titles.

Run from the repository with private paths:

```sh
node scripts/adapt-zimbabwe-teaching.mjs \
  --source-payload /private/authorised-za-plans.json \
  --reviews /private/zimbabwe-field-reviews.json \
  --key-file /private/zimbabwe.classroom-key \
  --output /private/zimbabwe-release
```

Each review has `lessonId`, `sourcePlanSHA256`, `targetUnitSHA256`, `reviewer`, `contextReviewed: true`, `fields` (path → `{action:"keep"}` or `{action:"replace",value:"…"}`), and `blockMap` (old ID → verified new ID).

Obtain an authorised staff export or the original content key through a secure channel, then read/adapt the instructional fields using Zimbabwe's actual learner sources and existing reviewed localisation rules. Review currency amounts, savings groups, transport, regulatory examples and Form/term continuity individually. No blanket currency conversion or country-name replacement is authorised by the adapter. Encrypt with a Zimbabwe-specific server-only key, integrate its validated manifest with the private loader, and publish availability only after successful checks. Keep teacher guidance gated until this is done.

## Validation boundaries

256 unit/database tests, typecheck and lint passed. Standard Chromium downloads failed; a reputable registry distribution of Chromium 153 provided a working browser. The full 144-check run passed 143 checks and exposed a two-pixel Form-map overflow at 320px. A narrow-screen term-title fix was added and is covered by the existing failing acceptance check; final rerun results are recorded in the PR. The earlier 24-check 360px run passed in full. Production learner landing returned HTTP 200.

Live migrations, authenticated cross-device saves, staff RLS HTTP sessions, account recovery callbacks and private teacher content remain NOT TESTED until the pending migration, dashboard authentication and authorised teacher source are available. No production-ready claim is made.
