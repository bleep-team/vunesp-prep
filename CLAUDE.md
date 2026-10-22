# Vunesp Prep — Monorepo

## Project Overview

A study platform for Vunesp public-exam (concurso) preparation. Next.js web app
plus shared packages in a pnpm + Turborepo monorepo.

Apps live in `apps/<name>/`; packages live in `packages/<name>/` and are named `@vunesp/<name>`.

## Stack

| Layer       | Choice                                       |
| ----------- | -------------------------------------------- |
| Monorepo    | pnpm workspaces + Turborepo                  |
| Frontend    | Next.js 16 (App Router, Turbopack), React 19 |
| UI          | Tailwind CSS v4 + shadcn/ui (`@vunesp/ui`)   |
| Language    | TypeScript 6 (strict)                        |
| Lint/format | ESLint 9 (flat config) + Prettier            |
| Tests       | Vitest + Testing Library (happy-dom)         |
| CI/CD       | GitHub Actions + Vercel                      |

## Packages

| Package                     | Description                                        |
| --------------------------- | -------------------------------------------------- |
| `@vunesp/typescript-config` | Shared tsconfig bases (base, react, library)       |
| `@vunesp/eslint-config`     | Shared ESLint flat configs (`base`, `nextjs`)      |
| `@vunesp/ui`                | shadcn/ui design system (Tailwind v4), source-only |
| `web` (apps/web)            | Next.js app                                        |

## Conventions

- Cross-package imports use package names, never relative paths across boundaries.
- Named exports; default exports only where Next.js/tooling requires them.
- No `any` without a justification comment. Files under ~300 lines.
- Server Components by default; `'use client'` only at the leaf that needs it.
- Internal packages are consumed as source via `transpilePackages` (no build step)
  unless a non-Next consumer needs a build — see `.claude/rules/monorepo.md`.
- Tests: Vitest, colocated `*.test.ts(x)`.
- Commits: Conventional Commits with a scope from `commitlint.config.js`
  (e.g. `feat(web): …`, `chore(deps): …`).

## Commands

| Command                       | What it does                                        |
| ----------------------------- | --------------------------------------------------- |
| `pnpm dev`                    | Run every app in dev mode (web on :3000)            |
| `pnpm build`                  | Build everything (Turborepo-cached)                 |
| `pnpm lint`                   | ESLint across the workspace                         |
| `pnpm typecheck`              | `tsc --noEmit` across the workspace                 |
| `pnpm test`                   | Vitest across the workspace                         |
| `pnpm format`                 | Prettier write                                      |
| `pnpm --filter <name> <task>` | Run a task in one package (e.g. `--filter web dev`) |

## Gotchas

- **Turborepo strict env mode**: env vars read during `next build` must be listed
  in `turbo.json` → `tasks.build.env`, otherwise they're stripped.
- `web#typecheck` runs `next typegen` first (for `PageProps`/`LayoutProps` and
  typed routes); `apps/web/turbo.json` makes `build` wait on it because both write `.next/`.
- TypeScript is pinned to `~6.0` — `typescript-eslint` doesn't support TS 7 yet.
- Add shadcn components from `packages/ui` (`pnpm dlx shadcn@latest add <name>`).

## Rules & skills

- `.claude/rules/` — monorepo (new packages) and code-review conventions.
- `.agents/skills/` (symlinked into `.claude/skills/`) — engineering: turborepo,
  monorepo-management, shadcn, tdd, next-dev-loop; design &
  visuals: ui-ux-pro-max, web-design-guidelines, baoyu-infographic,
  baoyu-diagram, diagram-creator, html-diagram. Third-party skills are tracked in
  `skills-lock.json` — update with `npx skills update -p`.
- Next.js guidance: `apps/web/AGENTS.md` (written by `next dev`) points at the
  version-matched docs in `node_modules/next/dist/docs/` — read those before
  writing Next.js code.
- `docs/adr/` — architecture decisions.
