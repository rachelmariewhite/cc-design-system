import { Card } from "@/components/ui/card"

const typeScale = [
  { label: "Display", className: "font-heading text-5xl font-bold", sample: "Service Made Simple", meta: "Playfair Display · 48px · 700" },
  { label: "Heading 1", className: "font-heading text-3xl font-bold", sample: "Welcome back, Mike Smith", meta: "Playfair Display · 30px · 700" },
  { label: "Heading 2", className: "font-heading text-2xl font-bold", sample: "Featured Products", meta: "Playfair Display · 24px · 700" },
  { label: "Heading 3", className: "font-heading text-xl font-semibold", sample: "AC MC Cable", meta: "Playfair Display · 20px · 600" },
  { label: "Body Large", className: "text-lg", sample: "Upload your BOM CSV and instantly match with our catalog.", meta: "Inter · 18px · 400" },
  { label: "Body", className: "text-base leading-relaxed", sample: "Track and manage your active orders, quotes, and deliveries in one place.", meta: "Inter · 16px · 400" },
  { label: "Small", className: "text-sm text-muted-foreground", sample: "View all requested quotes", meta: "Inter · 14px · 400" },
]

export function Typography() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="p-6">
          <p className="eyebrow mb-2">Headings</p>
          <p className="font-heading text-4xl font-bold text-foreground">Aa</p>
          <p className="mt-2 text-sm text-muted-foreground">Playfair Display — used for page titles, section headers, and product names.</p>
        </Card>
        <Card className="p-6">
          <p className="eyebrow mb-2">Body & UI</p>
          <p className="text-4xl font-semibold text-foreground">Aa</p>
          <p className="mt-2 text-sm text-muted-foreground">Inter — used for body copy, labels, buttons, and uppercase eyebrows.</p>
        </Card>
      </div>
      <Card className="divide-y divide-border p-0">
        {typeScale.map((t) => (
          <div key={t.label} className="flex flex-col gap-2 p-5 md:flex-row md:items-baseline md:justify-between">
            <div className="min-w-0">
              <p className={`${t.className} truncate text-foreground`}>{t.sample}</p>
            </div>
            <div className="flex shrink-0 flex-col md:items-end">
              <span className="text-sm font-medium text-foreground">{t.label}</span>
              <span className="font-mono text-xs text-muted-foreground">{t.meta}</span>
            </div>
          </div>
        ))}
      </Card>
    </div>
  )
}
