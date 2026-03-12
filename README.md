# Fieldvance Landing (Initial Structure)

Lightweight Next.js App Router starter structure for a multilingual one-page marketing website.

## Getting started

```bash
npm install
npm run dev
```

## Language routes

- `/en`
- `/es`
- `/ru`

The `/` route redirects to `/en`.

## Metadata and indexing behavior

This project stays domain-agnostic by default:

- Set `NEXT_PUBLIC_SITE_URL` (or `SITE_URL`) only when you have a real public origin.
- If no real site URL is configured, canonical URLs and absolute Open Graph URLs are not emitted.
- If no real site URL is configured, `robots.txt` disallows indexing and `sitemap.xml` returns no URLs.

## Release-readiness quick checklist

- [ ] Configure `NEXT_PUBLIC_SITE_URL` to your real production domain.
- [ ] Confirm `/en`, `/es`, `/ru` render correctly.
- [ ] Confirm legal pages load: `/:lang/privacy` and `/:lang/terms`.
- [ ] Confirm contact form submits to `/api/contact` and shows success/error messages.
- [ ] Confirm unknown routes render the custom 404 page.
- [ ] Recheck `robots.txt` and `sitemap.xml` after site URL is configured.

## Local dev + Fast Refresh notes

In `next dev`, occasional requests for `/_next/static/webpack/*.hot-update.json` can return `404` during rebuild windows. This is typically a harmless Fast Refresh artifact (the browser requested an older hot-update chunk after a new compilation invalidated it).

If local HMR ever feels "stuck" after larger refactors, restart the dev server. You can also run:

```bash
npm run dev:reset
```

This clears `.next` and starts a fresh dev session.
