# @vunesp/eslint-config

Shared ESLint 9 flat configs.

- `base` — `typescript-eslint` recommended, React hooks, Turborepo env-var checks,
  named exports only (`import-x/no-default-export`).
- `nextjs` — `eslint-config-next` (core web vitals + TypeScript) with the same
  repo rules. Default exports are allowed only where Next.js or tooling requires
  them (pages, layouts, `*.config.*`, …).

```js
// eslint.config.js
import { base } from '@vunesp/eslint-config'
export default base
```

> TypeScript is pinned to `~6.0` because `typescript-eslint` doesn't support
> TypeScript 7 yet.
