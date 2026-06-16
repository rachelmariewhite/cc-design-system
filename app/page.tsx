import { Section } from "@/components/ds/section"
import { ColorPalette } from "@/components/ds/color-palette"
import { Typography } from "@/components/ds/typography"
import { ComponentShowcase } from "@/components/ds/component-showcase"
import { PatternShowcase } from "@/components/ds/pattern-showcase"
import { BrandLogo } from "@/components/ds/brand-logo"
import { Card } from "@/components/ui/card"

const nav = [
  { id: "foundations", label: "Foundations" },
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "components", label: "Components" },
  { id: "patterns", label: "Patterns" },
]

export default function Page() {
  return (
    <div className="min-h-svh">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <BrandLogo />
            <span className="hidden h-5 w-px bg-border sm:block" />
            <span className="hidden text-sm font-medium text-muted-foreground sm:block">Design System</span>
          </div>
          <span className="eyebrow">Service Made Simple</span>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl gap-10 px-4 py-10 md:px-8">
        {/* Sidebar nav */}
        <aside className="sticky top-24 hidden h-fit w-44 shrink-0 lg:block">
          <p className="eyebrow mb-3">Contents</p>
          <nav className="flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1 space-y-12">
          {/* Hero */}
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <p className="eyebrow mb-3">Cerrowire Connect</p>
            <h1 className="font-heading text-4xl font-bold text-foreground text-balance md:text-5xl">
              The Cerrowire Connect Design System
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
              The visual language behind the Cerrowire Connect ordering platform — a warm, industrial palette anchored
              by Cerrowire orange, editorial Playfair Display headings, and clean Inter UI. Use these tokens and
              patterns to build consistent, on-brand experiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Card className="px-4 py-3">
                <p className="font-mono text-sm font-semibold text-primary">#e8792b</p>
                <p className="text-xs text-muted-foreground">Brand orange</p>
              </Card>
              <Card className="px-4 py-3">
                <p className="font-heading text-sm font-bold text-foreground">Playfair Display</p>
                <p className="text-xs text-muted-foreground">Headings</p>
              </Card>
              <Card className="px-4 py-3">
                <p className="text-sm font-semibold text-foreground">Inter</p>
                <p className="text-xs text-muted-foreground">Body & UI</p>
              </Card>
            </div>
          </div>

          <Section
            id="foundations"
            eyebrow="Foundations"
            title="Principles"
            description="Cerrowire Connect pairs a trustworthy, industrial identity with a friendly, approachable interface — built for distributors who need to move fast."
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { t: "Warm & industrial", d: "A cream canvas and charcoal surfaces keep the focus on product, with orange reserved for action." },
                { t: "Editorial headings", d: "Playfair Display adds a premium, considered tone to titles and product names." },
                { t: "Clarity first", d: "Generous spacing, clear hierarchy, and uppercase eyebrows make dense ordering data scannable." },
              ].map((p) => (
                <Card key={p.t} className="p-6">
                  <p className="font-heading text-lg font-semibold text-foreground">{p.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </Card>
              ))}
            </div>
          </Section>

          <Section
            id="colors"
            eyebrow="Foundations"
            title="Color"
            description="Built on semantic design tokens. Orange drives all primary actions; neutrals carry the layout; status colors communicate order state. Click any swatch to copy its value."
          >
            <ColorPalette />
          </Section>

          <Section
            id="typography"
            eyebrow="Foundations"
            title="Typography"
            description="Two families: Playfair Display for expressive headings and Inter for everything functional."
          >
            <Typography />
          </Section>

          <Section
            id="components"
            eyebrow="Library"
            title="Components"
            description="Core building blocks styled to the Cerrowire theme — buttons, badges, and form controls."
          >
            <ComponentShowcase />
          </Section>

          <Section
            id="patterns"
            eyebrow="Library"
            title="Patterns"
            description="Composite patterns lifted straight from the Connect dashboard — overview stats and quick actions."
          >
            <PatternShowcase />
          </Section>

          <footer className="border-t border-border pt-8 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <BrandLogo />
              <a href="mailto:support@cerrowire.com" className="font-medium text-primary hover:underline">
                support@cerrowire.com
              </a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
