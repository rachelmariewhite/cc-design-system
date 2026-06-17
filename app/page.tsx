import { Section } from "@/components/ds/section"
import { ColorPalette } from "@/components/ds/color-palette"
import { Typography } from "@/components/ds/typography"
import { ComponentShowcase } from "@/components/ds/component-showcase"
import { PatternShowcase } from "@/components/ds/pattern-showcase"
import { LogoShowcase } from "@/components/ds/logo-showcase"
import { RadiusShowcase } from "@/components/ds/radius-showcase"
import { ImageryShowcase } from "@/components/ds/imagery-showcase"
import { Logo, LogoPlate } from "@/components/ds/logo"
import { Eyebrow, Panel } from "@/components/ds/primitives"

const nav = [
  { id: "foundations", label: "Foundations" },
  { id: "logo", label: "Logo" },
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "radius", label: "Shape & Elevation" },
  { id: "components", label: "Components" },
  { id: "patterns", label: "Patterns" },
  { id: "imagery", label: "In Product" },
]

const heroFacts = [
  { value: "#F0721F", label: "PMS 151 Orange", className: "font-mono text-primary" },
  { value: "Pragmatica", label: "Primary type", className: "font-heading text-foreground" },
  { value: "Bookmania", label: "Secondary type", className: "font-serif text-foreground" },
]

const principles = [
  { t: "Warm & Industrial", d: "A cream canvas and charcoal surfaces keep the focus on product, with orange reserved for action." },
  { t: "Confident Type", d: "Pragmatica sets a clean, engineered tone; Bookmania adds editorial contrast where needed." },
  { t: "Clarity First", d: "Generous spacing, clear hierarchy, and uppercase labels make dense ordering data scannable." },
]

const sections = [
  { id: "foundations", eyebrow: "Foundations", title: "Principles", description: "Cerrowire Connect pairs a trustworthy, industrial identity with a friendly, approachable interface — built for distributors who need to move fast.", node: <PrinciplesGrid /> },
  { id: "logo", eyebrow: "Foundations", title: "Logo", description: "The Cerrowire Connect lockup combines the Cerrowire wordmark, the Connect chain-link mark, and the Service Made Simple tagline.", node: <LogoShowcase /> },
  { id: "colors", eyebrow: "Foundations", title: "Color", description: "Black, White, and PMS 151 Orange (#F0721F) form the core brand. An expanded digital palette adds warm neutrals for on-screen range. Click any swatch to copy its value.", node: <ColorPalette /> },
  { id: "typography", eyebrow: "Foundations", title: "Typography", description: "Pragmatica is primary (Helvetica Neue fallback); Bookmania is secondary (Bookman fallback). The scale follows the Cerrowire digital style guide.", node: <Typography /> },
  { id: "radius", eyebrow: "Foundations", title: "Shape & Elevation", description: "Soft rounded corners echo the wire-inspired logo. Cards use rounded-xl; pills and primary buttons use fully rounded ends.", node: <RadiusShowcase /> },
  { id: "components", eyebrow: "Library", title: "Components", description: "Core building blocks styled to the Cerrowire theme — all-caps rounded buttons, badges, and form controls.", node: <ComponentShowcase /> },
  { id: "patterns", eyebrow: "Library", title: "Patterns", description: "Composite patterns lifted straight from the Connect dashboard — overview stats and quick actions.", node: <PatternShowcase /> },
  { id: "imagery", eyebrow: "Library", title: "In Product", description: "The system in context across the Connect desktop dashboard and the mobile app.", node: <ImageryShowcase /> },
]

function PrinciplesGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {principles.map((p) => (
        <Panel key={p.t} className="p-6">
          <p className="font-heading text-lg font-bold text-foreground">{p.t}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
        </Panel>
      ))}
    </div>
  )
}

export default function Page() {
  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <Logo className="h-7" />
            <span className="hidden h-5 w-px bg-border sm:block" />
            <span className="hidden text-sm font-medium text-muted-foreground sm:block">Design System</span>
          </div>
          <Eyebrow className="hidden sm:block">Service Made Simple</Eyebrow>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl gap-10 px-4 py-10 md:px-8">
        <aside className="sticky top-24 hidden h-fit w-44 shrink-0 lg:block">
          <Eyebrow className="mb-3">Contents</Eyebrow>
          <nav className="flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 flex-1 space-y-12">
          <Panel className="overflow-hidden border-0 bg-card shadow-sm">
            <div className="grid items-center gap-8 p-8 md:grid-cols-5 md:p-12">
              <div className="md:col-span-3">
                <Eyebrow className="mb-3">Cerrowire Connect</Eyebrow>
                <h1 className="ds-h1 text-balance text-foreground">The Cerrowire Connect Design System</h1>
                <p className="mt-4 max-w-2xl leading-relaxed text-pretty text-muted-foreground">
                  The visual language behind the Cerrowire Connect ordering platform — a warm, industrial palette
                  anchored by PMS 151 orange, Pragmatica type, and clean rounded surfaces.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {heroFacts.map((f) => (
                    <Panel key={f.label} className="px-4 py-3">
                      <p className={`text-sm font-bold ${f.className}`}>{f.value}</p>
                      <p className="text-xs text-muted-foreground">{f.label}</p>
                    </Panel>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center rounded-2xl bg-sidebar p-8 md:col-span-2">
                <LogoPlate className="px-6 py-5" logoClassName="h-auto w-full max-w-[220px]" />
              </div>
            </div>
          </Panel>

          {sections.map((s) => (
            <Section key={s.id} id={s.id} eyebrow={s.eyebrow} title={s.title} description={s.description}>
              {s.node}
            </Section>
          ))}

          <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-8 text-sm text-muted-foreground">
            <Logo className="h-7" />
            <a href="mailto:support@cerrowire.com" className="font-medium text-primary hover:underline">
              support@cerrowire.com
            </a>
          </footer>
        </main>
      </div>
    </div>
  )
}
