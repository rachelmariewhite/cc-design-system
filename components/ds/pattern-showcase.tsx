import { Card } from "@/components/ui/card"
import { FileText, ShoppingCart, Bell, Truck, Upload, Grid3x3, Layers, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  { icon: FileText, count: "4", unit: "requested", title: "Quotes", desc: "View all requested quotes", tint: "bg-primary/10 text-primary" },
  { icon: ShoppingCart, count: "4", unit: "active", title: "Open Orders", desc: "Track and manage active orders", tint: "bg-chart-3/10 text-chart-3" },
  { icon: Bell, count: "5", unit: "unread", title: "Notifications", desc: "Updates and alerts", tint: "bg-destructive/10 text-destructive" },
  { icon: Truck, count: "4", unit: "in transit", title: "Delivery Tracking", desc: "Live tracking for in-transit orders", tint: "bg-warning/15 text-warning" },
]

const actions = [
  { icon: Upload, title: "BOM Upload & Match", desc: "Upload your BOM CSV and instantly match with our catalog", cta: "Drop CSV or click", featured: true },
  { icon: Grid3x3, title: "New Matrix Quote", desc: "Request a standard price matrix quote", cta: "Start request" },
  { icon: Layers, title: "New Blanket Request", desc: "Create a blanket purchase agreement", cta: "Start request" },
  { icon: RotateCcw, title: "RMA / CMA", desc: "Return merchandise or credit memo authorization", cta: "Start request" },
]

export function PatternShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <p className="eyebrow mb-3">Overview stat card</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.title} className="p-5">
              <div className={cn("mb-4 flex size-10 items-center justify-center rounded-lg", s.tint)}>
                <s.icon className="size-5" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-3xl font-bold text-foreground">{s.count}</span>
                <span className="text-sm text-muted-foreground">{s.unit}</span>
              </div>
              <p className="mt-1 font-semibold text-foreground">{s.title}</p>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <p className="eyebrow mb-3">Quick action card</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map((a) => (
            <Card
              key={a.title}
              className={cn(
                "p-5 transition-colors hover:border-primary/50",
                a.featured && "border-dashed border-primary/50 bg-primary/5",
              )}
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-muted text-foreground">
                <a.icon className="size-5" />
              </div>
              {a.featured ? <span className="eyebrow text-primary">New</span> : null}
              <p className="mt-1 font-semibold text-foreground">{a.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
              <p className="mt-4 text-sm font-medium text-primary">{a.cta} &rarr;</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
