interface TypeRow {
  label: string
  cls: string
  spec: string
  sample: string
}

const scale: TypeRow[] = [
  { label: "H1 — Page Titles", cls: "ds-h1", spec: "Pragmatica Bold · 60 / 60", sample: "Service Made Simple" },
  { label: "H2 — Main Headings", cls: "ds-h2", spec: "Pragmatica Bold · 40 / 50", sample: "Welcome back, Mike Smith" },
  { label: "H3 — Primary Subheadings", cls: "ds-h3", spec: "Pragmatica Bold · 25 / 38", sample: "Quotes & Orders Overview" },
  { label: "H4 — Secondary Subheadings", cls: "ds-h4", spec: "Pragmatica Bold · 23 / 35", sample: "Order tracking made easy" },
  { label: "H5 — Lead-Ins", cls: "ds-h5", spec: "Pragmatica Book · 20 / 26", sample: "Request a standard price matrix quote" },
  { label: "H6 — Section Labels", cls: "ds-h6", spec: "Pragmatica Bold caps · 15 / 19", sample: "Quick Actions" },
]

export function Typography() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <p className="eyebrow mb-2">Primary Typeface</p>
          <p className="font-heading text-4xl font-bold text-foreground">Pragmatica</p>
          <p className="ds-meta">Book · Condensed Book · Bold. Fallback: Helvetica Neue.</p>
          <p className="mt-3 font-sans text-2xl text-foreground">AaBbCcDd 1234567890</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <p className="eyebrow mb-2">Secondary Typeface</p>
          <p className="font-serif text-4xl font-bold text-foreground">Bookmania</p>
          <p className="ds-meta">Black. Fallback: Bookman.</p>
          <p className="mt-3 font-serif text-2xl text-foreground">AaBbCcDd 1234567890</p>
        </div>
      </div>

      <div className="divide-y divide-border rounded-xl border border-border bg-card">
        {scale.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-2 p-5 md:flex-row md:items-baseline md:justify-between md:gap-8"
          >
            <div className="md:w-64 md:shrink-0">
              <p className="text-sm font-semibold text-foreground">{row.label}</p>
              <p className="font-mono text-xs text-muted-foreground">{row.spec}</p>
            </div>
            <p className={`${row.cls} min-w-0 flex-1 text-foreground`}>{row.sample}</p>
          </div>
        ))}
        <div className="flex flex-col gap-2 p-5 md:flex-row md:items-baseline md:justify-between md:gap-8">
          <div className="md:w-64 md:shrink-0">
            <p className="text-sm font-semibold text-foreground">Body</p>
            <p className="font-mono text-xs text-muted-foreground">Pragmatica Book · 18 / 36</p>
          </div>
          <p className="ds-body min-w-0 flex-1 text-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur orci suscipit,
            consequat arcu a, tempor tellus. <span className="text-primary underline">Text link.</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 p-5 md:flex-row md:items-baseline md:justify-between md:gap-8">
          <div className="md:w-64 md:shrink-0">
            <p className="text-sm font-semibold text-foreground">Meta</p>
            <p className="font-mono text-xs text-muted-foreground">Pragmatica Book · 13 / 27</p>
          </div>
          <p className="ds-meta min-w-0 flex-1">Small text for notes, meta, etc.</p>
        </div>
      </div>
    </div>
  )
}
