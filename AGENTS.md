# Vunesp Prep — Agent Instructions

Study platform for Vunesp public-exam preparation. pnpm + Turborepo monorepo:
Next.js 16 app in `apps/web`, shared packages in `packages/<name>` named `@vunesp/<name>`.

## Stack

pnpm + Turborepo · Next.js 16 (App Router, Turbopack) · React 19 · Tailwind v4 +
shadcn/ui · TypeScript 6 (strict) · ESLint 9 + Prettier · Vitest.

## Packages

| Package                     | Description                                   |
| --------------------------- | --------------------------------------------- |
| `@vunesp/typescript-config` | Shared tsconfig bases                         |
| `@vunesp/eslint-config`     | Shared ESLint flat configs (`base`, `nextjs`) |
| `@vunesp/ui`                | shadcn/ui design system (source-only)         |
| `web`                       | Next.js app                                   |

## Conventions

- Named exports; default exports only where Next.js/tooling requires them.
- Cross-package imports use package names, not relative paths.
- No `any` without justification; files under ~300 lines.
- Tests: Vitest, colocated `*.test.ts(x)`. Every package has tests.
- Build-time env vars must be declared in `turbo.json` → `tasks.build.env`.

## Commands

`pnpm dev` · `pnpm build` · `pnpm lint` · `pnpm typecheck` · `pnpm test` ·
`pnpm --filter <name> <task>`

See `CLAUDE.md` for details and `.claude/rules/` for package/code-review rules.
