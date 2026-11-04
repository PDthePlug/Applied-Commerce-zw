# Applied Commerce Zimbabwe

The current South African Applied Commerce application, with Zimbabwe's existing Forms 1–4 curriculum and three terms per Form.

## Source and application parity

- Application baseline: `PDthePlug/Applied-Commerce-`, commit `b20395c1469354f4f97713c1d683533f61815d09`.
- The `baseline/south-africa` branch preserves its exact tree: `9318dbe6b29412ddaa94f34dc119a0b8511d5c06`.
- Zimbabwe content: `PDthePlug/Applied-Commerce-Za`, commit `bb1e0664c92ebf2d0363f58d91a935b75367c311`.
- The shared CSS, typography, layout, icons, menus, native response controls, account/session handling, persistence, portfolio, reporting infrastructure and PWA installation controls are retained from ZA. Edition labels and curriculum routing are adapted.

## Zimbabwe delivery

| Form | Term 1 | Term 2 | Term 3 | Lesson units |
| --- | ---: | ---: | ---: | ---: |
| 1 | 26 | 26 | 27 | 79 |
| 2 | 34 | 20 | 21 | 75 |
| 3 | 36 | 40 | 40 | 116 |
| 4 | 40 | 40 | 32 | 112 |

The existing 382 lesson units and three assessments retain their identities. A source range may span several workshop sessions; lesson units are not a promise about classroom periods. Forms 5–6 are excluded.

Internal delivery keys remain 8, 9, 10 and 12 to preserve the ZA schema contracts; the interface labels these Form 1, 2, 3 and 4. Each unit also retains `sourceGrade` and `sourceTerm`, including Grade 11 material split across Forms 3 and 4. Evidence interpretation uses the original source stage.

`content/zimbabwe/` contains the pinned source bundles, explicit existing localisation rules and term allocation. `npm run compile:zimbabwe` builds `public/zimbabwe-curriculum/` and its provenance record. All localised blocks receive the ZA stable block identities. Lesson Wrap uses the same presentation component, with localised learning outcomes, current source bindings and the correct next lesson.

One existing Zimbabwe range, Lessons 70–74, was completely empty. `workshop-repair.json` restores the five current ZA workshops inside that existing unit, retaining its range identity and allocation. The only wording adaptation is “this grade” → “Form 3”; the workshops contain no country-specific financial rules.

The original ZA source books, runtime, private encrypted release and regression fixtures remain as the preserved baseline. They are not the active learner catalogue.

## Development and checks

Use Node >=22.13, npm and Python 3. No new package dependencies are required.

```sh
npm ci
npm run compile:zimbabwe
npm run dev
npm test
npm run typecheck
npm run lint
npm run build
npm run test:browser:zimbabwe
```

The existing ZA regression tests still run against the archived ZA content. Edition tests additionally load the active Zimbabwe release, render every lesson and assessment through the shared renderer, check allocation/provenance/answer persistence and prove deterministic compilation. The Zimbabwe browser suite covers all 12 Form/term combinations, six widths, saved work, home resume, progress, route rejection, signed-out classroom gates and the unchanged ZA PWA experience.

## Backend and teacher-content activation

The new Vercel project is `applied-commerce-zw`, configured with the existing Zimbabwe project's public connection details and explicit **local backend mode**. Supabase `hkarxzjmttjetotduvyx` is paused; its restoration was refused because the account has reached its active-free-project limit. Its schema must be reconciled with the current ZA contracts before enabling account sync. See [activation status and remaining work](docs/zimbabwe-activation/RELEASE.md). No live learner records have been migrated.

The classroom workspace, permissions and private-content infrastructure are copied. ZA teacher prose is source-bound to the ZA manuscripts. It must be localised and rebound before publication against the Zimbabwe curriculum; the active Zimbabwe teacher availability is deliberately empty. No South African guide is presented as approved Zimbabwe guidance. The learner curriculum remains available.

Existing Zimbabwe accounts, answers and older positional response keys require a reviewed migration before moving the existing live Zimbabwe deployment to this repository. No learner state has been deleted or automatically reinterpreted.
