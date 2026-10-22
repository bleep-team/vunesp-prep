# @vunesp/ui

shadcn/ui design system (Tailwind CSS v4). Consumed as source through Next's
`transpilePackages` — there is no build step, so internal imports are extensionless.

```tsx
import { Button } from '@vunesp/ui/components/button'
import { cn } from '@vunesp/ui/lib/utils'
```

```css
/* apps/<app>/src/app/globals.css */
@import '@vunesp/ui/styles/globals.css';
```

Add components with the shadcn CLI from this directory:

```bash
pnpm dlx shadcn@latest add dialog
```
