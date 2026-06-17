import { Section } from "@/components/ds/section"
import { ColorPalette } from "@/components/ds/color-palette"
import { Typography } from "@/components/ds/typography"
import { ComponentShowcase } from "@/components/ds/component-showcase"
import { PatternShowcase } from "@/components/ds/pattern-showcase"
import { LogoShowcase } from "@/components/ds/logo-showcase"
import { RadiusShowcase } from "@/components/ds/radius-showcase"
import { ImageryShowcase } from "@/components/ds/imagery-showcase"
import { BrandLogo } from "@/components/ds/brand-logo"
import { Card } from "@/components/ui/card"

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
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid items-center gap-8 p-8 md:grid-cols-5 md:p-12">
              <div className="md:col-span-3">
                <p className="eyebrow mb-3">Cerrowire Connect</p>
                <h1 className="ds-h1 text-foreground text-balance">The Cerrowire Connect Design System</h1>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
                  The visual language behind the Cerrowire Connect ordering platform — a warm, industrial palette
                  anchored by PMS 151 orange, Pragmatica type, and clean rounded surfaces. Use these tokens and
                  patterns to build consistent, on-brand experiences.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Card className="rounded-xl px-4 py-3">
                    <p className="font-mono text-sm font-semibold text-primary">#F0721F</p>
                    <p className="text-xs text-muted-foreground">Brand orange</p>
                  </Card>
                  <Card className="rounded-xl px-4 py-3">
                    <p className="font-heading text-sm font-bold text-foreground">Pragmatica</p>
                    <p className="text-xs text-muted-foreground">Primary type</p>
                  </Card>
                  <Card className="rounded-xl px-4 py-3">
                    <p className="font-serif text-sm font-bold text-foreground">Bookmania</p>
                    <p className="text-xs text-muted-foreground">Secondary type</p>
                  </Card>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-2xl bg-sidebar p-8 md:col-span-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/cerrowire-connect-logo-white.png"
                  alt="Cerrowire Connect logo"
                  className="h-auto w-full max-w-[240px]"
                />
              </div>
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
                { t: "Confident type", d: "Pragmatica sets a clean, engineered tone; Bookmania adds editorial contrast where needed." },
                { t: "Clarity first", d: "Generous spacing, clear hierarchy, and uppercase labels make dense ordering data scannable." },
              ].map((p) => (
                <Card key={p.t} className="rounded-xl p-6">
                  <p className="font-heading text-lg font-bold text-foreground">{p.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </Card>
              ))}
            </div>
          </Section>

          <Section
            id="logo"
            eyebrow="Foundations"
            title="Logo"
            description="The Cerrowire Connect lockup combines the cerrowire wordmark, the CONNECT chain-link mark, and the Service Made Simple tagline."
          >
            <LogoShowcase />
          </Section>

          <Section
            id="colors"
            eyebrow="Foundations"
            title="Color"
            description="Black, White, and PMS 151 Orange (#F0721F) form the core brand. An expanded digital palette adds warm neutrals for on-screen range. Click any swatch to copy its value."
          >
            <ColorPalette />
          </Section>

          <Section
            id="typography"
            eyebrow="Foundations"
            title="Typography"
            description="Pragmatica is primary (Helvetica Neue fallback); Bookmania is secondary (Bookman fallback). The scale follows the Cerrowire digital style guide."
          >
            <Typography />
          </Section>

          <Section
            id="radius"
            eyebrow="Foundations"
            title="Shape & Elevation"
            description="Soft rounded corners echo the wire-inspired logo. Cards use rounded-xl; pills and primary buttons use fully rounded ends."
          >
            <RadiusShowcase />
          </Section>

          <Section
            id="components"
            eyebrow="Library"
            title="Components"
            description="Core building blocks styled to the Cerrowire theme — all-caps rounded buttons, badges, and form controls."
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

          <Section
            id="imagery"
            eyebrow="Library"
            title="In Product"
            description="The system in context across the Connect desktop dashboard and the mobile app."
          >
            <ImageryShowcase />
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
