import type { ReactNode } from "react"
import { CopyButton } from "@/components/ds/copy-button"
import { DownloadButton, Eyebrow, Panel, Spec } from "@/components/ds/primitives"
import { cn } from "@/lib/utils"

interface ScaleRow {
  label: string
  cls: string
  sample: string
  spec: string
  use: string
  sampleClassName?: string
}

/* Mirrors Figma "2. TYPOGRAPHY" (213:2866) row for row. */
const contentScale: ScaleRow[] = [
  { label: "H1 / 44", cls: "ds-h1", sample: "Aa Cerrowire", spec: "44 / 44 · Black 900 · -0.02em", use: "One per page. Marketing hero, page title." },
  { label: "H2 / 32", cls: "ds-h2", sample: "Aa Cerrowire", spec: "32 / 35.2 · Black 900 · -0.01em", use: "Section titles, dashboard greeting." },
  { label: "H3 / 24", cls: "ds-h3", sample: "Aa Cerrowire", spec: "24 / 31.2 · Black 900", use: "Card group titles, modal titles." },
  { label: "H4 / 18", cls: "ds-h4", sample: "Aa Cerrowire", spec: "18 / 23.4 · Black 900 · 0.05em · Upper", use: "Panel headers, stat labels." },
  { label: "H5 / 16", cls: "ds-h5", sample: "Aa Cerrowire", spec: "16 / 22.4 · Black 900", use: "Card titles, list item titles." },
  { label: "H6 / 13", cls: "ds-h6", sample: "Aa Cerrowire", spec: "13 / 16.9 · Black 900 · 0.08em · Upper", use: "Table group headers, small section labels." },
  { label: "Body / 16", cls: "ds-body", sample: "The quick brown fox jumps over the lazy dog.", spec: "16 / 27.2 · Book 400", use: "Paragraphs, descriptions, long-form copy." },
  { label: "Subtitle", cls: "ds-subtitle", sample: "Order Status", spec: "13 / 18.2 · Black 900 · 0.08em · Upper", use: "Kicker above a heading. text-link on light, text-primary on dark.", sampleClassName: "text-link dark:text-primary" },
  { label: "Meta / 12", cls: "ds-meta", sample: "Updated 03/18/26 · 11:58 AM", spec: "12 / 19.2 · Book 400 · muted", use: "Timestamps, helper text, footnotes." },
  { label: "Label / 11", cls: "ds-label", sample: "Light", spec: "11 / 15.4 · Black 900 · 0.06em · Upper · muted", use: "Row labels, frame labels, form group labels." },
]

const textRoles: ScaleRow[] = [
  { label: "text-title", cls: "text-title", sample: "Orders", spec: "30 / 36 · Bold · -0.025em", use: "App page title, desktop." },
  { label: "text-title-sm", cls: "text-title-sm", sample: "$48,250.00", spec: "24 / 32 · Bold · -0.02em", use: "Page title on mobile, large stats." },
  { label: "text-heading", cls: "text-heading", sample: "Order Details", spec: "20 / 28 · Bold · -0.01em", use: "Modal, slideover, and card section titles." },
  { label: "text-subheading", cls: "text-subheading", sample: "No quotes yet", spec: "16 / 24 · Bold", use: "Popover titles, card titles, empty states." },
  { label: "text-lead", cls: "text-lead", sample: "Track orders and request quotes in one place.", spec: "18 / 28 · Book", use: "Intro paragraphs on auth and landing screens." },
  { label: "text-body", cls: "text-body", sample: "Ship to: 1250 Industrial Pkwy, Hartselle, AL", spec: "14 / 20 · Book", use: "Default UI text, menus, inputs, values." },
  { label: "text-table", cls: "text-table", sample: "THHN 12 AWG Black · 2,500 ft · In stock", spec: "13 / 20 · Book", use: "Table cells and dense lists." },
  { label: "text-caption", cls: "text-caption", sample: "Last updated 2 hours ago", spec: "12 / 16 · Book", use: "Field labels, tooltips, helper text." },
  { label: "text-eyebrow", cls: "text-eyebrow", sample: "Quick Actions", spec: "11 / 16 · Bold · 0.08em · Upper", use: "Menu group labels inside the app." },
  { label: "text-micro", cls: "text-micro", sample: "12 NEW", spec: "10 / 14 · Bold · 0.02em", use: "Counter badges and row markers only." },
]

const buttonRoles: ScaleRow[] = [
  { label: "text-btn-lg", cls: "text-btn-lg", sample: "Request a Quote", spec: "Book · 20 / 26 · 0.025em · Upper", use: "Hero and single primary actions." },
  { label: "text-btn", cls: "text-btn", sample: "View Order", spec: "Book · 14 / 20 · 0.025em · Upper", use: "Default button label." },
  { label: "text-btn-sm", cls: "text-btn-sm", sample: "Reorder", spec: "Condensed Book · 13 / 16 · 0.03em · Upper", use: "Compact buttons in tables and cards." },
]

function SpecimenPanel({ theme }: { theme: "light" | "dark" }) {
  const dark = theme === "dark"
  return (
    <div className={cn("flex min-w-0 flex-col gap-2.5", dark && "dark")}>
      <p className="ds-label">{dark ? "Dark" : "Light"}</p>
      <div
        className={cn(
          "flex flex-col rounded-2xl p-6 md:p-10",
          dark ? "bg-sidebar text-foreground" : "border border-border bg-brand-cream text-brand-charcoal",
        )}
      >
        {contentScale.map((row, i) => (
          <div
            key={row.cls}
            className={cn(
              "flex items-center gap-5 py-3.5",
              i < contentScale.length - 1 && (dark ? "border-b border-sidebar-border" : "border-b border-border"),
            )}
          >
            <p className="ds-label w-20 shrink-0 md:w-24">{row.label}</p>
            <p className={cn(row.cls, "min-w-0 flex-1 text-pretty", row.sampleClassName)}>{row.sample}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function RoleTable({ rows }: { rows: ScaleRow[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="hidden grid-cols-12 gap-6 border-b border-border bg-muted/50 px-5 py-2.5 md:grid">
        <p className="ds-label col-span-3">Class</p>
        <p className="ds-label col-span-5">Sample</p>
        <p className="ds-label col-span-4">Spec · When to use</p>
      </div>
      <div className="divide-y divide-border">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-3 px-5 py-4 md:grid-cols-12 md:items-center md:gap-6">
            <div className="md:col-span-3">
              <CopyButton value={row.cls} />
            </div>
            <p className={cn(row.cls, "min-w-0 text-pretty text-foreground md:col-span-5", row.sampleClassName)}>
              {row.sample}
            </p>
            <div className="flex flex-col gap-1 md:col-span-4">
              <Spec>{row.spec}</Spec>
              <p className="text-caption text-muted-foreground">{row.use}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Group({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="ds-h5 text-foreground">{title}</h3>
        <p className="text-body text-muted-foreground text-pretty">{description}</p>
      </div>
      {children}
    </div>
  )
}

export function Typography() {
  return (
    <div className="flex flex-col gap-12">
      <div className="grid gap-4 sm:grid-cols-2">
        <Panel className="flex flex-col gap-2 p-6">
          <div className="flex items-center justify-between gap-2">
            <Eyebrow>Primary Typeface</Eyebrow>
            <DownloadButton href="/fonts/Pragmatica-Book.otf" download="Pragmatica-Book.otf">
              OTF
            </DownloadButton>
          </div>
          <p className="font-heading text-4xl font-black text-foreground">Pragmatica</p>
          <p className="ds-meta">Black 900 for headings · Book 400 for text · Condensed Book for small buttons.</p>
          <div className="mt-2 flex flex-col gap-1 text-foreground">
            <p className="font-sans text-2xl font-black">AaBbCc 0123456789</p>
            <p className="font-sans text-2xl font-normal">AaBbCc 0123456789</p>
          </div>
          <Spec>font-sans · font-heading · fallback Helvetica Neue</Spec>
        </Panel>
        <Panel className="flex flex-col gap-2 p-6">
          <div className="flex items-center justify-between gap-2">
            <Eyebrow>Secondary Typeface</Eyebrow>
            <DownloadButton href="/fonts/Bookmania-Black.otf" download="Bookmania-Black.otf">
              OTF
            </DownloadButton>
          </div>
          <p className="font-serif text-4xl font-black text-foreground">Bookmania</p>
          <p className="ds-meta">Black. Marketing and editorial accents only — never in product UI.</p>
          <div className="mt-2 flex flex-col gap-1 text-foreground">
            <p className="font-serif text-2xl font-black">AaBbCc 0123456789</p>
            <p className="font-serif text-2xl font-normal">AaBbCc 0123456789</p>
          </div>
          <Spec>font-serif · fallback Bookman Old Style</Spec>
        </Panel>
      </div>

      <Group
        title="Content Scale"
        description="Matches the Figma Typography frame (CerrowireConnect-V3 · 2. TYPOGRAPHY). Use these for page content, marketing, and headings. Shown on both themes."
      >
        <div className="grid gap-6 xl:grid-cols-2">
          <SpecimenPanel theme="light" />
          <SpecimenPanel theme="dark" />
        </div>
        <RoleTable rows={contentScale} />
      </Group>

      <Group
        title="App UI Roles"
        description="Denser sizes for product screens — tables, forms, menus, and overlays. Each class sets size, line height, tracking, and weight together."
      >
        <RoleTable rows={textRoles} />
      </Group>

      <Group title="Button Labels" description="Uppercase button labels. Buttons already apply these, so you only need them for custom controls.">
        <RoleTable rows={buttonRoles} />
      </Group>

      <Group title="Rules" description="Keep text consistent across every screen.">
        <ul className="grid gap-3 md:grid-cols-2">
          {[
            "Use one class per text element. Don't stack text-*, font-*, and leading-* by hand.",
            "Use one H1 per page. Don't skip heading levels for visual size — pick the class instead.",
            "Pragmatica Black is for headings only. Body copy is always Book.",
            "Keep body text at 14px or larger. Meta (12) and Label (11) are for short strings only.",
            "Uppercase is set by the class (H4, H6, Subtitle, Label). Write content in sentence case.",
            "Bookmania is never used inside the app — marketing and print only.",
          ].map((rule) => (
            <li key={rule} className="flex gap-3 rounded-xl border border-border bg-card p-4">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <p className="text-body text-foreground text-pretty">{rule}</p>
            </li>
          ))}
        </ul>
      </Group>
    </div>
  )
}
