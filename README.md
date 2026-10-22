# Woodeck — Space, considered

Independent, uncommissioned React furniture website concept for a technology content series. **Not affiliated with, approved by, or operated by Woodeck Company Limited.** No online orders or payments are accepted.

## Run

Node 22 or newer. `npm ci`, then `npm run dev`. `npm run build` generates `dist/`; `npm run preview` previews the production build. Deploy using Vercel's Vite preset, build `npm run build`, output `dist`.

## What works

- True WebGL lounge chair built from original procedural geometry, scroll rotation and drag interaction. Three finish directions update the model live.
- Responsive editorial showroom with genuine public business media and separately labelled generated imagery.
- Structured furniture project brief: category, approximate width, finish and notes. Downloadable plain-text brief.
- Browser-local project workspace with status transitions, filtered records, live counts and JSON export. Starts empty; no fabricated analytics.
- Native modal focus handling, keyboard navigation, reduced-motion support, lazy scene loading, capped pixel ratio and offscreen rendering suspension.

## Operational limits

The workspace is **local storage, not a secure shared admin dashboard**. The local planner has no shared access. A separate authenticated concept inbox is described below. Do not store confidential information. Save backups using export. The planner creates briefs, not orders. Confirm actual products, dimensions, prices, feasibility and lead times with the business.

Before use as the official business website: obtain owner approval and image rights; replace illustrative products with an approved catalogue; confirm current details; connect authenticated server-side storage and notifications if needed; add actual business policies and domain. No credentials are included.

## Sources and assets

Checked 21 October 2026:

- Public company page and photo gallery: https://www.facebook.com/Woodeck/
- Public kitchen photo: https://www.facebook.com/photo.php?fbid=1679093917553142 — retained company branding, not represented as our photography.
- BusinessGhana profile: https://www.businessghana.com/site/directory/wood-products/484904/Woodeck-Company-Limited
- Background: https://www.myjoyonline.com/photos-woodeck-company-limited-commissions-factory-showroom/ — 2021 report; historical headcount is not used as a current claim.
- The Facebook-linked `woodeck.net` failed DNS resolution in Chrome during research. This does not prove permanent closure or lack of all websites.
- `public/woodeck-kitchen.jpg` and `public/woodeck-cover.jpg`: from the public business Facebook gallery. Rights remain with respective owners; reuse permission is not established.
- `public/editorial.webp`: original built-in imagegen output. Prompt: “Exquisite photorealistic wide interior photograph of a sculptural dark walnut lounge chair with creamy boucle seat, low walnut side table, warm textured plaster walls and long late afternoon shadows in a modern West African inspired interior, pale travertine floor, a single tropical leaf. Restrained architectural luxury, earthy ochre and walnut palette, real material texture, high-end furniture campaign. No text, no logos, no claims this is any existing manufacturer's product.” Encoding optimised to WebP.
- `src/scene.js`: original illustrative model, not a manufacturer's product model.

## Validation

Production build and dependency audit run before publication. Browser verification results are recorded in the series' content document. Always distinguish verified checks from any untested functionality.

## Shared concept inbox

The public planner can optionally send a copy to the creator’s demonstration inbox after an explicit consent checkbox. This does not send anything to the real business. A shared Supabase backend provides bounded, validated submissions; anonymous users cannot read private records. Approved verified accounts can read their assigned sites, update statuses and internal notes, search, paginate and export records. Database policies enforce site membership; browser filtering alone is not trusted. The frontend includes only a publishable key. No service-role key is present.

Creator onboarding: open Dashboard, choose Register, create a password yourself, verify the account email, then sign in. The specifically approved creator email has been allowlisted privately. Other accounts receive no access by registering. The database isolation checks passed, but the creator’s email/password onboarding cannot be completed or verified until the user performs it. All sites remain uncommissioned concepts pending owner approval and operational handover.

Schema and rollback-based security tests are retained in the main workspace backend folder. The backend project was quoted at $0/month; no paid plan was selected. Usage limits and provider policies still apply.


## Multi-page redesign — 22 October 2026

Seven pages: home, collection, gallery, material lab, workshop/story, project brief and workspace. Architectural charcoal/copper portfolio layout, original finish-responsive 3D chair on its own material-lab page, 41 source social images. Finish, width and category persist between pages.

Direct HTML entrypoints are included in Vite’s production build, supporting direct navigation on static hosting. Source credits and image dimensions are retained in src/gallery.json. Public source images may include business marketing renders; publication by the business does not independently verify completed work. The workspace route offers both local drafts and the authenticated shared creator inbox. Creator email/password onboarding still requires the user to register, verify email and sign in.
