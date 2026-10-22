# @vunesp/typescript-config

Shared `tsconfig` bases.

| File           | Use for                                                       |
| -------------- | ------------------------------------------------------------- |
| `base.json`    | Strict ESM + bundler resolution; everything extends this      |
| `react.json`   | React code (DOM libs, `react-jsx`) — `apps/web`, `@vunesp/ui` |
| `library.json` | Built (tsup) Node/isomorphic libraries — emits declarations   |
