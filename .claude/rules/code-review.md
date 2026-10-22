> **Skills:** Use `/tdd` when writing tests, `/next-best-practices` for App Router code.

When reviewing or writing code:

- TypeScript strict mode; no `any` without a justifying comment
- Named exports only (default exports only where Next.js or tooling requires them:
  pages, layouts, route segment files, `*.config.*`)
- Cross-package imports use package names (`@vunesp/ui/...`), never relative
  paths across package boundaries
- Server Components by default; add `'use client'` only at the leaf that needs it
- Shared UI goes in `@vunesp/ui`; app-specific components stay in `apps/web/src/components`
- Verify tests exist for new functionality; test names read as sentences
- Env vars used at build time must be listed in `turbo.json` → `build.env`
