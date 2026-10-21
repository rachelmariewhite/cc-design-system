import { DownloadButton, Eyebrow, Panel, Spec } from "@/components/ds/primitives"

interface TypeRow {
  label: string
  cls: string
  spec: string
  sample: string
}

const brandScale: TypeRow[] = [
  { label: "H1 — Page Titles", cls: "ds-h1", spec: "Pragmatica Bold · 60 / 60", sample: "Service Made Simple" },
  { label: "H2 — Main Headings", cls: "ds-h2", spec: "Pragmatica Bold · 40 / 50", sample: "Welcome back, Mike Smith" },
  { label: "H3 — Primary Subheadings & Lead-Ins", cls: "ds-h3", spec: "Pragmatica Bold · 25 / 38", sample: "Quotes & Orders Overview" },
  { label: "H4 — Secondary Subheadings", cls: "ds-h4", spec: "Pragmatica Bold · 23 / 35", sample: "Order Tracking Made Easy" },
  { label: "H6 — Sub Title / Section Labels", cls: "ds-h6", spec: "Pragmatica Bold · 15 / 19", sample: "Quick Actions" },
]

const textRoles: TypeRow[] = [
  { label: "text-display", cls: "text-display", spec: "60 / 60 · Bold · -0.02em · Brand H1 hero, marketing", sample: "Service Made Simple" },
  { label: "text-hero", cls: "text-hero", spec: "40 / 48 · Bold · -0.01em · Dashboard greeting", sample: "Welcome back, Mike" },
  { label: "text-title", cls: "text-title", spec: "30 / 36 · Bold · -0.025em · Page title desktop", sample: "Orders" },
  { label: "text-title-sm", cls: "text-title-sm", spec: "24 / 32 · Bold · -0.02em · Page title mobile, large stats", sample: "$48,250.00" },
  { label: "text-heading", cls: "text-heading", spec: "20 / 28 · Bold · -0.01em · Modal, slideover, card section titles", sample: "Order Details" },
  { label: "text-subheading", cls: "text-subheading", spec: "16 / 24 · Bold · Popover, card titles, empty states", sample: "No quotes yet" },
  { label: "text-lead", cls: "text-lead", spec: "18 / 28 · Book · Intro paragraphs (auth / landing)", sample: "Track orders, request quotes, and manage your account in one place." },
  { label: "text-body", cls: "text-body", spec: "14 / 20 · Book · Default UI text, menus, inputs, values", sample: "Ship to: 1250 Industrial Pkwy, Hartselle, AL" },
  { label: "text-table", cls: "text-table", spec: "13 / 20 · Book · Table cells, dense lists", sample: "THHN 12 AWG Black · 2,500 ft · In stock" },
  { label: "text-caption", cls: "text-caption", spec: "12 / 16 · Book · Labels, meta, helper, tooltips", sample: "Last updated 2 hours ago" },
  { label: "text-micro", cls: "text-micro", spec: "10 / 14 · Bold · 0.02em · Counter badges, row markers only", sample: "12 NEW" },
  { label: "text-eyebrow", cls: "text-eyebrow", spec: "11 / 16 · Bold · 0.08em · Uppercase section labels", sample: "Quick Actions" },
]

const buttonRoles: TypeRow[] = [
  { label: "text-btn-lg", cls: "text-btn-lg", spec: "Pragmatica Book caps · 20 / 26 · 0.025em", sample: "Request a Quote" },
  { label: "text-btn", cls: "text-btn", spec: "Pragmatica Book caps · 14 / 20 · 0.025em", sample: "View Order" },
  { label: "text-btn-sm", cls: "text-btn-sm", spec: "Pragmatica Condensed Book caps · 13 / 16 · 0.03em", sample: "Reorder" },
]

function RoleTable({ rows, sampleClassName = "text-foreground" }: { rows: TypeRow[]; sampleClassName?: string }) {
  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-card">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex flex-col gap-2 p-5 md:flex-row md:items-baseline md:justify-between md:gap-8"
        >
          <div className="md:w-72 md:shrink-0">
            <p className="font-mono text-caption font-bold text-foreground">{row.label}</p>
            <Spec>{row.spec}</Spec>
          </div>
          <p className={`${row.cls} min-w-0 flex-1 text-pretty ${sampleClassName}`}>{row.sample}</p>
        </div>
      ))}
    </div>
  )
}

export function Typography() {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid gap-4 sm:grid-cols-2">
        <Panel className="p-6">
          <div className="mb-2 flex items-center justify-between gap-2">
            <Eyebrow>Primary Typeface</Eyebrow>
            <DownloadButton href="/fonts/Pragmatica-Book.otf" download="Pragmatica-Book.otf">
              OTF
            </DownloadButton>
          </div>
          <p className="font-heading text-4xl font-bold text-foreground">Pragmatica</p>
          <p className="ds-meta">Book 400 · Bold 700 · Condensed Book. Fallback: Helvetica Neue.</p>
          <p className="mt-3 font-sans text-2xl text-foreground">AaBbCcDd 1234567890</p>
        </Panel>
        <Panel className="p-6">
          <div className="mb-2 flex items-center justify-between gap-2">
            <Eyebrow>Secondary Typeface</Eyebrow>
            <DownloadButton href="/fonts/Bookmania-Black.otf" download="Bookmania-Black.otf">
              OTF
            </DownloadButton>
          </div>
          <p className="font-serif text-4xl font-bold text-foreground">Bookmania</p>
          <p className="ds-meta">Black. Fallback: Bookman.</p>
          <p className="mt-3 font-serif text-2xl text-foreground">AaBbCcDd 1234567890</p>
        </Panel>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-subheading text-foreground">UI Text Roles</p>
          <p className="text-body text-muted-foreground">
            One class sets size, line height, tracking, and weight. Use these in product UI.
          </p>
        </div>
        <RoleTable rows={textRoles} />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-subheading text-foreground">Button Roles</p>
          <p className="text-body text-muted-foreground">Uppercase button labels in Pragmatica Book and Condensed Book.</p>
        </div>
        <RoleTable rows={buttonRoles} />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-subheading text-foreground">Brand Styleguide Scale</p>
          <p className="text-body text-muted-foreground">
            Marketing and long-form scale from the Cerrowire Digital Style Guide.
          </p>
        </div>
        <div className="divide-y divide-border rounded-xl border border-border bg-card">
          {brandScale.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-2 p-5 md:flex-row md:items-baseline md:justify-between md:gap-8"
            >
              <div className="md:w-72 md:shrink-0">
                <p className="text-body font-bold text-foreground">{row.label}</p>
                <Spec>{row.spec}</Spec>
              </div>
              <p className={`${row.cls} min-w-0 flex-1 text-foreground`}>{row.sample}</p>
            </div>
          ))}
          <div className="flex flex-col gap-2 p-5 md:flex-row md:items-baseline md:justify-between md:gap-8">
            <div className="md:w-72 md:shrink-0">
              <p className="text-body font-bold text-foreground">Body</p>
              <Spec>Pragmatica Book · 18 / 36</Spec>
            </div>
            <p className="ds-body min-w-0 flex-1 text-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur orci suscipit,
              consequat arcu a, tempor tellus. <span className="text-link font-bold underline">Text link.</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 p-5 md:flex-row md:items-baseline md:justify-between md:gap-8">
            <div className="md:w-72 md:shrink-0">
              <p className="text-body font-bold text-foreground">Meta</p>
              <Spec>Pragmatica Book · 13 / 27</Spec>
            </div>
            <p className="ds-meta min-w-0 flex-1">Small text for notes, meta, etc.</p>
          </div>
          <div className="flex flex-col gap-2 p-5 md:flex-row md:items-baseline md:justify-between md:gap-8">
            <div className="md:w-72 md:shrink-0">
              <p className="text-body font-bold text-foreground">Divider</p>
              <Spec>2px rule · border</Spec>
            </div>
            <div className="min-w-0 flex-1">
              <div className="h-0.5 w-full rounded-full bg-border" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
