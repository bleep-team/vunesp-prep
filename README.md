# Vunesp Prep

Study platform for Vunesp public-exam (concurso) preparation.

## Stack

| Layer    | Choice                                       |
| -------- | -------------------------------------------- |
| Monorepo | pnpm workspaces + Turborepo                  |
| Frontend | Next.js 16 (App Router, Turbopack), React 19 |
| UI       | Tailwind CSS v4 + shadcn/ui                  |
| Language | TypeScript (strict)                          |
| Tests    | Vitest + Testing Library                     |
| CI/CD    | GitHub Actions + Vercel                      |

## Repo structure

```
apps/
  web/                      # Next.js app
packages/
  typescript-config/        # Shared tsconfig bases (base, react, library)
  eslint-config/            # Shared ESLint flat configs (base, nextjs)
  ui/                       # shadcn/ui design system (Tailwind v4)
docs/
  adr/                      # Architecture decision records
```

## Getting started

Prerequisites: Node.js 24 (`.nvmrc`), pnpm 10 (`corepack enable`).

```bash
pnpm install
cp apps/web/.env.example apps/web/.env
pnpm dev                    # http://localhost:3000
```

## Commands

| Command          | What it does                           |
| ---------------- | -------------------------------------- |
| `pnpm dev`       | Run all apps in dev mode               |
| `pnpm build`     | Build everything (cached by Turborepo) |
| `pnpm lint`      | ESLint                                 |
| `pnpm typecheck` | TypeScript                             |
| `pnpm test`      | Vitest                                 |
| `pnpm format`    | Prettier                               |

Run a task in a single package with `pnpm --filter <name> <task>`, e.g.
`pnpm --filter web dev`.

## Git hooks

- **pre-commit** — Prettier on staged files (lint-staged)
- **commit-msg** — Conventional Commits with a scope (`feat(web): …`), see `commitlint.config.js`
- **pre-push** — lint + typecheck on packages affected since `origin/main`
