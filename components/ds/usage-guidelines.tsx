import type { ReactNode } from "react"
import { Check, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Logo } from "@/components/ds/logo"
import { cn } from "@/lib/utils"

type Rule = { title: string; doText: string; dontText: string; doDemo: ReactNode; dontDemo: ReactNode }

const pill = "inline-flex items-center rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide"

const rules: Rule[] = [
  {
    title: "Orange is for action",
    doText: "Use PMS 151 orange for the one primary action in a view.",
    dontText: "Don’t use orange for warnings, decoration, or more than one competing CTA.",
    doDemo: (
      <div className="flex gap-2">
        <span className={cn(pill, "bg-primary text-primary-foreground")}>Submit order</span>
        <span className={cn(pill, "border border-border text-foreground")}>Cancel</span>
      </div>
    ),
    dontDemo: (
      <div className="flex gap-2">
        <span className={cn(pill, "bg-primary text-primary-foreground")}>Submit</span>
        <span className={cn(pill, "bg-primary text-primary-foreground")}>Save</span>
        <span className={cn(pill, "bg-primary text-primary-foreground")}>Low stock</span>
      </div>
    ),
  },
  {
    title: "Pair tones correctly",
    doText: "Use tone text on its own tint. Each text and tint pair is built to go together.",
    dontText: "Don’t use the icon or brand color as text on a light tint.",
    doDemo: <Badge className="rounded-full border-transparent bg-tone-orange-tint text-tone-orange-text">Administrator</Badge>,
    dontDemo: <Badge className="rounded-full border-transparent bg-tone-orange-tint text-primary">Administrator</Badge>,
  },
  {
    title: "Keep body text legible",
    doText: "Use muted-foreground #4A4543 for secondary copy on cream.",
    dontText: "Don’t use light stone grays (like #A19893) for readable text.",
    doDemo: <p className="text-sm text-muted-foreground">Manage all your orders</p>,
    dontDemo: <p className="text-sm text-[#A19893]">Manage all your orders</p>,
  },
  {
    title: "Respect the logo",
    doText: "Place the full-color lockup on white or cream with clear space around it.",
    dontText: "Don’t place the color lockup on orange or busy backgrounds.",
    doDemo: (
      <div className="rounded-lg bg-card px-4 py-3">
        <Logo className="h-6" />
      </div>
    ),
    dontDemo: (
      <div className="rounded-lg bg-primary px-4 py-3">
        <Logo className="h-6" />
      </div>
    ),
  },
  {
    title: "Uppercase is for labels",
    doText: "Use the uppercase eyebrow style for group labels and buttons only.",
    dontText: "Don’t set headings or sentences in all caps.",
    doDemo: (
      <div>
        <p className="eyebrow">Quick links</p>
        <p className="font-heading text-lg font-bold text-foreground">Welcome back, Mike</p>
      </div>
    ),
    dontDemo: <p className="font-heading text-lg font-bold uppercase text-foreground">Welcome back, Mike Smith</p>,
  },
  {
    title: "One meaning per color",
    doText: "Map each status to a single tone (green = done, amber = waiting, red = blocked).",
    dontText: "Don’t give the same status different colors on different screens.",
    doDemo: (
      <div className="flex gap-2">
        <Badge className="rounded-full border-transparent bg-tone-green-tint text-tone-green-text">Delivered</Badge>
        <Badge className="rounded-full border-transparent bg-tone-amber-tint text-tone-amber-text">Pending</Badge>
      </div>
    ),
    dontDemo: (
      <div className="flex gap-2">
        <Badge className="rounded-full border-transparent bg-tone-blue-tint text-tone-blue-text">Delivered</Badge>
        <Badge className="rounded-full border-transparent bg-tone-green-tint text-tone-green-text">Pending</Badge>
      </div>
    ),
  },
]

function Example({ kind, demo, text }: { kind: "do" | "dont"; demo: ReactNode; text: string }) {
  const isDo = kind === "do"
  return (
    <figure className="flex flex-col overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex min-h-28 items-center justify-center bg-background p-6">{demo}</div>
      <figcaption
        className={cn(
          "flex items-start gap-2 border-t-4 p-4 text-sm leading-relaxed text-foreground",
          isDo ? "border-tone-green-icon" : "border-tone-red-icon",
        )}
      >
        {isDo ? (
          <Check className="mt-0.5 size-4 shrink-0 text-tone-green-icon" aria-hidden="true" />
        ) : (
          <X className="mt-0.5 size-4 shrink-0 text-tone-red-icon" aria-hidden="true" />
        )}
        <span>
          <span className="font-bold">{isDo ? "Do. " : "Don’t. "}</span>
          {text}
        </span>
      </figcaption>
    </figure>
  )
}

export function UsageGuidelines() {
  return (
    <div className="flex flex-col gap-10">
      {rules.map((r) => (
        <div key={r.title} className="flex flex-col gap-3">
          <h3 className="ds-h5 text-foreground">{r.title}</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Example kind="do" demo={r.doDemo} text={r.doText} />
            <Example kind="dont" demo={r.dontDemo} text={r.dontText} />
          </div>
        </div>
      ))}
    </div>
  )
}
