import { CopyButton } from "@/components/ds/copy-button"
import { FontDownloads } from "@/components/ds/font-downloads"
import { Panel, Spec } from "@/components/ds/primitives"

const tokenGroups = [
  {
    title: "Surfaces",
    tokens: [
      { cls: "bg-background", use: "Page canvas" },
      { cls: "bg-card", use: "Cards, panels, tables" },
      { cls: "bg-muted", use: "Hover rows, subtle fills" },
      { cls: "bg-sidebar", use: "App shell / navigation" },
    ],
  },
  {
    title: "Text",
    tokens: [
      { cls: "text-foreground", use: "Primary text" },
      { cls: "text-muted-foreground", use: "Secondary text, meta" },
      { cls: "text-link", use: "Links, orange text on light" },
      { cls: "text-action-foreground", use: "Text on primary buttons" },
    ],
  },
  {
    title: "Brand & action",
    tokens: [
      { cls: "bg-action hover:bg-action-hover", use: "Primary button fill, #B9500F (4.98:1 with white)" },
      { cls: "bg-primary", use: "Brand orange #F0721F: logo, active nav, rings. Never behind text" },
      { cls: "border-border", use: "All dividers and outlines" },
      { cls: "ring-ring", use: "Focus rings" },
      { cls: "bg-destructive", use: "Destructive actions" },
    ],
  },
  {
    title: "Status tones",
    tokens: [
      { cls: "status-draft", use: "Created, not yet acted on" },
      { cls: "status-submitted", use: "Waiting on Cerrowire or the carrier" },
      { cls: "status-progress", use: "Being worked on" },
      { cls: "status-transit", use: "Moving to the customer" },
      { cls: "status-action", use: "Customer needs to act" },
      { cls: "status-complete", use: "Done, successfully" },
      { cls: "status-problem", use: "Blocked or lapsed" },
      { cls: "status-closed", use: "Cancelled or voided" },
    ],
  },
]

const snippets = [
  {
    title: "Page header",
    code: `<header className="flex flex-col gap-1">
  <p className="ds-subtitle text-link">Orders</p>
  <h1 className="ds-h2 text-foreground">Order #48213</h1>
  <p className="ds-meta">Updated 03/18/26 · 11:58 AM</p>
</header>`,
  },
  {
    title: "Card",
    code: `<div className="rounded-xl border border-border bg-card p-6">
  <h3 className="ds-h5 text-foreground">Open Quotes</h3>
  <p className="text-body text-muted-foreground">3 awaiting approval</p>
</div>`,
  },
  {
    title: "Status badge",
    code: `<StatusBadge label="Shipped" meaning="transit" />
// bg-status-transit-bg border-status-transit-border
// text-status-transit-text`,
  },
  {
    title: "Loading button",
    code: `<button aria-busy={loading} disabled={loading}
  className="inline-flex h-11 items-center gap-2 rounded-full
    bg-action px-6 text-btn text-action-foreground
    transition-colors duration-200 ease-out hover:bg-action-hover">
  {loading && <Spinner size="sm" label="Submitting"
    className="text-action-foreground" />}
  {loading ? "Submitting" : "Submit Order"}
</button>`,
  },
  {
    title: "Skeleton row",
    code: `<div aria-busy="true" className="flex items-center gap-3">
  <div className="h-4 w-20 rounded-md bg-muted motion-safe:animate-pulse" />
  <div className="h-4 flex-1 rounded-md bg-muted motion-safe:animate-pulse" />
</div>`,
  },
]

const checklist = [
  "Text uses one type class (ds-* or text-*) per element.",
  "Primary buttons use bg-action with text-action-foreground. Never put text on brand #F0721F; use text-link for orange text on light surfaces.",
  "Status badges pick a meaning (draft, submitted, progress, transit, action, complete, problem, closed), never a color.",
  "Cards use rounded-xl with border-border. Buttons and pills use rounded-full.",
  "Every interactive element has a visible focus ring and an accessible name.",
  "Async actions show a Spinner and set aria-busy. Use skeletons when the layout is known.",
  "Hover and color changes use transition-colors duration-200 ease-out. Decorative motion is motion-safe.",
]

export function DeveloperReference() {
  return (
    <div className="flex flex-col gap-10">
      <FontDownloads />

      <div className="grid gap-4 md:grid-cols-2">
        {tokenGroups.map((group) => (
          <Panel key={group.title} className="flex flex-col gap-3 p-5">
            <h3 className="ds-h6 text-foreground">{group.title}</h3>
            <ul className="flex flex-col divide-y divide-border">
              {group.tokens.map((t) => (
                <li key={t.cls} className="flex flex-wrap items-center justify-between gap-2 py-2.5">
                  <CopyButton value={t.cls} />
                  <span className="text-caption text-muted-foreground">{t.use}</span>
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="ds-h5 text-foreground">Copy-paste patterns</h3>
          <p className="text-body text-muted-foreground">Starting points that already follow the type and color rules.</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {snippets.map((s) => (
            <Panel key={s.title} className="flex min-w-0 flex-col overflow-hidden">
              <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-2.5">
                <p className="ds-label">{s.title}</p>
                <CopyButton value={s.code} label="Copy" />
              </div>
              <pre className="overflow-x-auto bg-muted/50 p-4 font-mono text-caption leading-relaxed text-foreground">
                <code>{s.code}</code>
              </pre>
            </Panel>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="ds-h5 text-foreground">Pre-merge checklist</h3>
          <p className="text-body text-muted-foreground">Review every UI pull request against these before merging.</p>
        </div>
        <Panel className="p-2">
          <ol className="grid md:grid-cols-2">
            {checklist.map((item, i) => (
              <li key={item} className="flex gap-3 rounded-lg p-3">
                <span className="mt-0.5 w-5 shrink-0 font-mono text-caption font-bold text-link">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-body text-foreground text-pretty">{item}</p>
              </li>
            ))}
          </ol>
        </Panel>
        <Spec>
          Source of truth: Figma CerrowireConnect-V3 for type and layout · app/globals.css for tokens · components/ds/spinner.tsx
          for loaders. Where cdeweb.cerrowire.com differs, these Guidelines win (see In Product).
        </Spec>
      </div>
    </div>
  )
}
