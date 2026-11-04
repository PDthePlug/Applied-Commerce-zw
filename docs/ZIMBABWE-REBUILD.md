# Zimbabwe rebuild verification

ZA source commit: `b20395c1469354f4f97713c1d683533f61815d09`.
Exact baseline tree: `9318dbe6b29412ddaa94f34dc119a0b8511d5c06`.
Zimbabwe content commit: `bb1e0664c92ebf2d0363f58d91a935b75367c311`.

The destination is the new `PDthePlug/Applied-Commerce-zw` repository. Neither source repository nor existing production deployment has been changed.

## Findings and resolution

| Finding | Severity | Resolution |
| --- | --- | --- |
| The older Zimbabwe application differs substantially from current ZA | P1 | Copy the full current ZA tree, then apply a content/delivery adapter |
| Existing Zimbabwe Lessons 70–74 range has zero authored blocks | P1 | Restore all five current ZA workshops inside the existing range; preserve unit identity and content allocation |
| Source years/terms differ from four Zimbabwe Forms / three terms | P1 | Compile all 385 units into 12 delivery terms; retain original provenance and stable unit IDs |
| ZA teacher plans are bound to different source blocks | P1 | Retain infrastructure and encrypted baseline; require a localised source-bound release before exposing teacher prose |
| Older Zimbabwe backend is not the current ZA schema | Release blocker | Keep local mode; reconcile schema and learner-state migration before backend activation |

## Validation

- Unchanged baseline: all 245 existing Node tests passed before adaptation.
- Baseline regression tests continue to use the retained ZA curriculum.
- New edition tests validate all 382 lessons and three assessments, 12 term allocations, source provenance, stable answer identities, current renderer compatibility and reproducible compilation.
- Type checking, lint and production build are run locally; the GitHub edition suite supplies browser acceptance at 320, 360, 430, 768, 1280 and 1920 CSS pixels.
- Workspace browser QA is unavailable: the managed preview injects Vite-specific flags into the existing Next.js dev command. The application command was not rewritten to accommodate that preview limitation.

| Flow | Role | Widths | Evidence |
| --- | --- | --- | --- |
| Library, Form maps and profile selection | Local learner | Six widths | Edition browser suite |
| All 12 Form/term reader samples | Local learner | Six widths | Edition browser suite |
| Grade 11 source → Form 4 bridge; saved answers, notes, progress, resume, portfolio | Local learner | Six widths | Edition browser suite |
| Installation UI, manifest/icons, offline recovery and cache boundaries | Local learner | Six widths | Copied ZA PWA acceptance with Zimbabwe manifest identity |
| Classroom private API denial | Signed out | Six widths | Edition browser suite |
| Live login, account sync, conflicts and real facilitator/institution permissions | Authenticated | NOT TESTED | Backend activation and dedicated fixtures required |
| Localised private teacher guidance | Staff | NOT RELEASED | Source-bound Zimbabwe teaching release required |
| Physical Android/iOS installation | Learner | NOT TESTED | Actual-device check required |

No production-readiness or live-deployment claim is made by this repository import.
