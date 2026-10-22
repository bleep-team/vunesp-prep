import { Button } from '@vunesp/ui/components/button'

export default function HomePage() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-semibold tracking-tight">Vunesp Prep</h1>
      <p className="text-muted-foreground">Next.js + Turborepo + pnpm</p>
      <Button>Começar</Button>
    </main>
  )
}
