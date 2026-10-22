> **Skills:** Use `/monorepo-management` and `/turborepo` when creating or restructuring packages.

When creating a new package:

1. Create it under `packages/<name>/`
2. Initialize `package.json` with name `@vunesp/<name>`, `"private": true`, `"type": "module"`
3. Add `tsconfig.json` extending `@vunesp/typescript-config/library.json`
   (or `react.json` for React code)
4. Add `eslint.config.js` re-exporting `base` from `@vunesp/eslint-config`
5. Add `README.md` with a brief description
6. Create `src/index.ts` as the entry point (named exports only)
7. Create `src/index.test.ts` with at least one Vitest test
8. Add `lint`, `typecheck`, `test` (and `build` if built) scripts — Turborepo
   picks them up by name
9. Run `pnpm install` — the package is auto-detected by workspace globs
10. Add the package directory name to `commitlint.config.js` → `scope-enum`

Two ways to ship a package:

- **Source package (default)** — `exports` point at `.ts`/`.tsx` files and the
  app lists it in `transpilePackages` in `apps/web/next.config.ts`. No build
  step; internal imports are extensionless. `@vunesp/ui` works this way.
- **Built package** — when something outside Next consumes it (scripts, workers).
  Build with tsup (`tsup src/index.ts --format esm --dts`), point `exports` at
  `dist/`, use `.js` import specifiers.
