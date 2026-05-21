# Closer

A Progressive Web App for couples — a redirect tool. When one partner feels the
pull toward porn, they open Closer instead and get routed toward intimacy with
their actual partner.

**Toward her, not away.**

## Stack

- Next.js (App Router) · TypeScript · Tailwind CSS
- Supabase — auth, Postgres + RLS, storage, realtime
- Vercel — hosting & auto-deploy
- PWA — installable, full-screen on iOS

## Local development

```bash
npm install
cp .env.local.example .env.local   # then fill in the Supabase values
npm run dev
```

The app runs at http://localhost:3000.

## Supabase setup

1. Create a project at https://supabase.com/dashboard.
2. In **Project Settings → API**, copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon / public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Paste both into `.env.local`.
4. Schema is managed by migration files in `supabase/migrations/` (added in
   PR #2 onward). Never edit the schema via the dashboard.

The landing page builds and deploys without Supabase configured. Auth and data
features (PR #2 onward) require the env vars above.

## Vercel setup

1. Import the GitHub repo at https://vercel.com/new.
2. Framework preset: **Next.js** (auto-detected).
3. Add the same two environment variables under **Settings → Environment
   Variables** for Production and Preview.
4. Deploy. Every push to `main` auto-deploys; PRs get preview URLs.

## Add to Home Screen (iOS)

1. Open the deployed URL in **Safari**.
2. Tap **Share → Add to Home Screen**.
3. Launch from the home screen — it opens full-screen, with no browser chrome.

## Workflow

- Feature branch → PR → `main` → Vercel auto-deploy.
- One feature per PR; merge frequently.
- `main` is protected.
- Migrations are files only — never the Supabase dashboard.

## Build roadmap

| PR | Scope |
| -- | ----- |
| 1  | Skeleton — Next.js, Tailwind, Supabase client, PWA, landing page |
| 2  | Schema + auth, couple pairing, agreement screen |
| 3  | Content libraries (her dashboard) |
| 4  | His home + Pull button |
| 5  | Wildfire flow |
| 6  | Pause flow |
| 7  | Her dashboard |
| 8  | Notifications + design polish |

## Scripts

| Command         | Description                 |
| --------------- | --------------------------- |
| `npm run dev`   | Start the dev server        |
| `npm run build` | Production build            |
| `npm run lint`  | Lint                        |
| `npm run icons` | Regenerate the PWA icon set |
