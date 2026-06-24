import { DownloadButton, Eyebrow, Panel, Spec } from "@/components/ds/primitives"

interface TypeRow {
  label: string
  cls: string
  spec: string
  sample: string
}

const scale: TypeRow[] = [
  { label: "H1 — Page Titles", cls: "ds-h1", spec: "Pragmatica Bold · 60 / 60", sample: "Service Made Simple" },
  { label: "H2 — Main Headings", cls: "ds-h2", spec: "Pragmatica Bold · 40 / 50", sample: "Welcome back, Mike Smith" },
  { label: "H3 — Primary Subheadings & Lead-Ins", cls: "ds-h3", spec: "Pragmatica Bold · 25 / 38", sample: "Quotes & Orders Overview" },
  { label: "H4 — Secondary Subheadings", cls: "ds-h4", spec: "Pragmatica Bold · 23 / 35", sample: "Order Tracking Made Easy" },
  { label: "H6 — Sub Title / Section Labels", cls: "ds-h6", spec: "Pragmatica Bold · 15 / 19", sample: "Quick Actions" },
]

export function Typography() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Panel className="p-6">
          <div className="mb-2 flex items-center justify-between gap-2">
            <Eyebrow>Primary Typeface</Eyebrow>
            <DownloadButton href="/fonts/Pragmatica.ttf" download="Pragmatica.ttf">
              TTF
            </DownloadButton>
          </div>
          <p className="font-heading text-4xl font-bold text-foreground">Pragmatica</p>
          <p className="ds-meta">Book · Condensed Book · Bold. Fallback: Helvetica Neue.</p>
          <p className="mt-3 font-sans text-2xl text-foreground">AaBbCcDd 1234567890</p>
        </Panel>
        <Panel className="p-6">
          <Eyebrow className="mb-2">Secondary Typeface</Eyebrow>
          <p className="font-serif text-4xl font-bold text-foreground">Bookmania</p>
          <p className="ds-meta">Black. Fallback: Bookman.</p>
          <p className="mt-3 font-serif text-2xl text-foreground">AaBbCcDd 1234567890</p>
        </Panel>
      </div>

      <div className="divide-y divide-border rounded-xl border border-border bg-card">
        {scale.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-2 p-5 md:flex-row md:items-baseline md:justify-between md:gap-8"
          >
            <div className="md:w-64 md:shrink-0">
              <p className="text-sm font-semibold text-foreground">{row.label}</p>
              <Spec>{row.spec}</Spec>
            </div>
            <p className={`${row.cls} min-w-0 flex-1 text-foreground`}>{row.sample}</p>
          </div>
        ))}
        <div className="flex flex-col gap-2 p-5 md:flex-row md:items-baseline md:justify-between md:gap-8">
          <div className="md:w-64 md:shrink-0">
            <p className="text-sm font-semibold text-foreground">Body</p>
            <Spec>Pragmatica Book · 18 / 36</Spec>
          </div>
          <p className="ds-body min-w-0 flex-1 text-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur orci suscipit,
            consequat arcu a, tempor tellus. <span className="text-primary underline">Text link.</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 p-5 md:flex-row md:items-baseline md:justify-between md:gap-8">
          <div className="md:w-64 md:shrink-0">
            <p className="text-sm font-semibold text-foreground">Meta</p>
            <Spec>Pragmatica Book · 13 / 27</Spec>
          </div>
          <p className="ds-meta min-w-0 flex-1">Small text for notes, meta, etc.</p>
        </div>
        <div className="flex flex-col gap-2 p-5 md:flex-row md:items-baseline md:justify-between md:gap-8">
          <div className="md:w-64 md:shrink-0">
            <p className="text-sm font-semibold text-foreground">Main Button</p>
            <Spec>Pragmatica Book caps · 20 / 26</Spec>
          </div>
          <p className="min-w-0 flex-1 text-[20px] font-normal uppercase leading-[26px] tracking-wide text-primary">
            Primary Button
          </p>
        </div>
        <div className="flex flex-col gap-2 p-5 md:flex-row md:items-baseline md:justify-between md:gap-8">
          <div className="md:w-64 md:shrink-0">
            <p className="text-sm font-semibold text-foreground">Small Button</p>
            <Spec>Pragmatica Condensed Book caps · 15 / 30</Spec>
          </div>
          <p className="min-w-0 flex-1 text-[15px] font-normal uppercase leading-[30px] tracking-wide text-primary">
            Secondary Button
          </p>
        </div>
        <div className="flex flex-col gap-2 p-5 md:flex-row md:items-baseline md:justify-between md:gap-8">
          <div className="md:w-64 md:shrink-0">
            <p className="text-sm font-semibold text-foreground">Divider</p>
            <Spec>2px rule · border</Spec>
          </div>
          <div className="min-w-0 flex-1">
            <div className="h-0.5 w-full rounded-full bg-border" />
          </div>
        </div>
      </div>
    </div>
  )
}
