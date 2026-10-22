# 0001 — Monorepo with pnpm workspaces + Turborepo

- **Status:** Accepted
- **Date:** 2026-10-22

## Context

Vunesp Prep starts as a single Next.js web app, but we expect shared code
(design system, domain types, database access, content tooling) to grow around
it. We already run this layout in `bleep` and `decade-case` and want the same
ergonomics here.

## Decision

- **pnpm workspaces** (`apps/*`, `packages/*`) for dependency management, with
  `workspace:*` links between packages.
- **Turborepo** for task orchestration and caching (`build`, `dev`, `lint`,
  `typecheck`, `test`), with `--filter='...[origin/main]'` for affected-only runs
  in CI and the pre-push hook.
- **Next.js 16** (App Router, Turbopack) in `apps/web`.
- Shared config packages: `@vunesp/typescript-config`, `@vunesp/eslint-config`.
- **Source packages by default** — internal packages export TypeScript source and
  are compiled by Next via `transpilePackages`; add a build step (tsup) only when
  a non-Next consumer needs one.

## Consequences

- One lockfile and one install; consistent tool versions across packages.
- Package boundaries are explicit (`exports` maps) and enforced by imports by
  package name.
- Turborepo runs in strict env mode: build-time env vars must be declared in
  `turbo.json`, or they're invisible to the build.
- TypeScript is pinned to `~6.0` until `typescript-eslint` supports TypeScript 7.
