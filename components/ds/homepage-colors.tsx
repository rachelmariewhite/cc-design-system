import { Calculator, FileText, Package, Search, Truck, type LucideIcon } from "lucide-react"
import { LabeledBlock, Panel, Spec } from "@/components/ds/primitives"
import { toneClasses, toneHex, type ToneName } from "@/components/ds/tones"
import { cn } from "@/lib/utils"

const shellColors = [
  { name: "Canvas", hex: "#F7F4F1", token: "bg-background", swatch: "bg-background", why: "Warm cream page background. Softer than white, so long ordering sessions are easier on the eyes." },
  { name: "Card", hex: "#FFFFFF", token: "bg-card", swatch: "bg-card", why: "White lifts cards and tables off the cream canvas without needing heavy shadows." },
  { name: "Sidebar", hex: "#373331", token: "bg-sidebar", swatch: "bg-sidebar", why: "Charcoal anchors navigation and reads as industrial and trustworthy. It also frames the orange brand mark." },
  { name: "Sidebar active", hex: "#4A4543", token: "bg-sidebar-accent", swatch: "bg-sidebar-accent", why: "One step lighter than the sidebar, so the selected item stands out without adding a new hue." },
  { name: "Brand orange", hex: "#F0721F", token: "bg-primary", swatch: "bg-primary", why: "PMS 151. Used only for primary actions, the active indicator, and the logo, so it always means “act here.”" },
]

const quickLinks: { title: string; desc: string; tone: ToneName; icon: LucideIcon; why: string }[] = [
  { title: "CQS", desc: "Cerrowire Quoting System", tone: "green", icon: Calculator, why: "Green means “start / go”. CQS is where every new deal begins." },
  { title: "Quotes", desc: "Manage all your quotes", tone: "amber", icon: FileText, why: "Amber means “awaiting a decision”. Quotes are open until they’re accepted." },
  { title: "Orders", desc: "Manage all your orders", tone: "blue", icon: Package, why: "Blue means “system of record”. Orders are confirmed, informational data." },
  { title: "Product Search", desc: "Browse and check inventory", tone: "red", icon: Search, why: "Red draws attention to live inventory. Never use it for warnings on this card, because that clashes with error meaning (see Audit)." },
  { title: "Order Tracking", desc: "View your shipments", tone: "orange", icon: Truck, why: "Orange means motion and delivery. It uses the deeper #EA580C, not brand #F0721F, so it isn’t mistaken for a CTA." },
]

export function HomepageColors() {
  return (
    <div className="flex flex-col gap-10">
      <LabeledBlock label="App shell">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {shellColors.map((c) => (
            <Panel key={c.name} className="overflow-hidden">
              <div className={cn("h-16 border-b border-border", c.swatch)} />
              <div className="flex flex-col gap-1 p-3">
                <p className="text-sm font-bold text-foreground">{c.name}</p>
                <Spec>
                  {c.hex} · {c.token}
                </Spec>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.why}</p>
              </div>
            </Panel>
          ))}
        </div>
      </LabeledBlock>

      <LabeledBlock label="Quick link tones">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {quickLinks.map((q) => {
            const t = toneClasses[q.tone]
            const Icon = q.icon
            return (
              <div key={q.title} className="flex flex-col gap-3">
                <div className={cn("flex flex-col gap-3 rounded-xl border border-border p-4", t.surface)}>
                  <span className={cn("flex size-10 items-center justify-center rounded-lg", t.tint)}>
                    <Icon className={cn("size-5", t.icon)} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground">{q.title}</p>
                    <p className="text-xs text-muted-foreground">{q.desc}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <Spec>
                    surface {toneHex[q.tone].surface} · tint {toneHex[q.tone].tint}
                  </Spec>
                  <Spec>icon {toneHex[q.tone].icon}</Spec>
                  <p className="text-xs leading-relaxed text-muted-foreground">{q.why}</p>
                </div>
              </div>
            )
          })}
        </div>
      </LabeledBlock>

      <Panel className="p-5">
        <p className="text-sm font-bold text-foreground">How a tone is built</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          Each tone has four steps: <span className="font-mono text-foreground">surface</span> (card fill),{" "}
          <span className="font-mono text-foreground">tint</span> (icon box and badge fill),{" "}
          <span className="font-mono text-foreground">icon</span> (glyphs), and{" "}
          <span className="font-mono text-foreground">text</span> (labels on the tint). Card titles and
          descriptions always stay in neutral foreground colors, so the tone tells you the category without making
          text harder to read.
        </p>
      </Panel>
    </div>
  )
}
