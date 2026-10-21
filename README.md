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

The workspace is **local storage, not a secure shared admin dashboard**. It has no accounts, server persistence, team synchronisation or automatic business notifications. Do not store confidential information. Save backups using export. The planner creates briefs, not orders. Confirm actual products, dimensions, prices, feasibility and lead times with the business.

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
