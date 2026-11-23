# AGENTS.md — phanvugiap.com

Personal site of Phan Vu Giap (Phan Vũ Giáp), founder & CEO of Beehexa. English only (`lang="en"`).
Repo `giappv/giappv.github.io`. `master` still holds the old GitHub Pages site (kept in `legacy/` on this branch).

## Stack
- Astro static, near-zero JS (theme switch only). Same setup as 4ptransform.org.
- Beehexa Design System: `@beehexa/design-tokens` + `@beehexa/design-rules`, same exact pinned version.
  Every colour, space, radius, font and duration is a `--bh-*` token. No raw hex/px/ms in CSS.
- Hosting: Cloudflare Workers static assets (`wrangler.jsonc`), account "Giapps@gmail.com's Account".

## Content
- All copy lives in `src/data/profile.ts`. Don't add claims (numbers, clients, awards) without the Product Owner.
- 4ptransform.org `src/data/author.ts` copies roles and talks from here: update here first, then there.
- `/cv/` and `/resume/` are Canva exports from the old site, kept as-is in `public/` and left out of the sitemap.
  `/pk/id_rsa.txt` is a public SSH key kept at its old URL. `/about/` redirects to `/` (`public/_redirects`).

## Commands
- `npm run dev`, `npm run build`
- `npm run deploy:preview` — review copy on https://preview.phanvugiap.com (Worker `phanvugiap-com-preview`, noindex).
  Every change goes here for Product Owner review before production. Needs `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID`.
- `npx wrangler deploy` — production (phanvugiap.com + www).
