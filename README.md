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

## Local dev + Fast Refresh notes

In `next dev`, occasional requests for `/_next/static/webpack/*.hot-update.json` can return `404` during rebuild windows. This is typically a harmless Fast Refresh artifact (the browser requested an older hot-update chunk after a new compilation invalidated it).

If local HMR ever feels "stuck" after larger refactors, restart the dev server. You can also run:

```bash
npm run dev:reset
```

This clears `.next` and starts a fresh dev session.
