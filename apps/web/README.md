# web

Next.js 16 (App Router, Turbopack) app.

```bash
cp .env.example .env
pnpm --filter web dev   # http://localhost:3000
```

Env vars read at build time must also be declared in the `build` task `env`
array in the root `turbo.json` (Turborepo runs in strict env mode).
