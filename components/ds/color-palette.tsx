import { getColorTokens, type ColorToken } from "@/lib/design-tokens"
import { Eyebrow, Spec } from "@/components/ds/primitives"
import { SwatchCard } from "@/components/ds/swatch-card"

const figmaNames: Record<string, string> = {
  primary: "PMS 151 Orange",
  "brand-black": "Black",
  "brand-cream": "Cream",
  "brand-sand": "Sand",
  "brand-stone": "Stone",
  "brand-taupe": "Taupe",
  "brand-charcoal": "Charcoal",
}

const groups: { label: string; note?: string; match: (n: string) => boolean }[] = [
  { label: "Figma brand palette", match: (n) => n === "primary" || n.startsWith("brand-") },
  {
    label: "Action & links",
    note: "Buttons use --action, not brand orange, so white button text passes AA.",
    match: (n) => n.startsWith("action") || n === "link",
  },
  { label: "Status", match: (n) => n.startsWith("status-") },
  { label: "Tones", note: "Quick-link cards and icon chips.", match: (n) => n.startsWith("tone-") },
  { label: "Sidebar", match: (n) => n.startsWith("sidebar") },
  { label: "Charts", match: (n) => n.startsWith("chart-") },
  { label: "Semantic surfaces & text", match: () => true },
]

const toLabel = (name: string) =>
  figmaNames[name] ?? name.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase())

function grouped(tokens: ColorToken[]) {
  const buckets = groups.map((g) => ({ ...g, tokens: [] as ColorToken[] }))
  for (const t of tokens) buckets.find((b) => b.match(t.name))!.tokens.push(t)
  const semantic = buckets.pop()!
  return [buckets[0], buckets[1], semantic, ...buckets.slice(2)].filter((b) => b.tokens.length)
}

function StatusRow({ tokens }: { tokens: ColorToken[] }) {
  const meanings = [...new Set(tokens.map((t) => t.name.replace(/^status-|-(bg|border|text)$/g, "")))]
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {meanings.map((m) => {
        const hex = (part: string) => tokens.find((t) => t.name === `status-${m}-${part}`)?.light
        return (
          <div key={m} className="flex flex-col gap-2 rounded-xl border border-border bg-card p-3">
            <span
              className="w-fit rounded border px-2 py-0.5 text-xs font-medium capitalize"
              style={{
                backgroundColor: `var(--status-${m}-bg)`,
                borderColor: `var(--status-${m}-border)`,
                color: `var(--status-${m}-text)`,
              }}
            >
              {m}
            </span>
            <span className="font-mono text-xs text-muted-foreground">--status-{m}-*</span>
            <span className="font-mono text-xs text-muted-foreground">
              {hex("bg")} / {hex("border")} / {hex("text")}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export function ColorPalette() {
  const tokens = getColorTokens()
  return (
    <div className="flex flex-col gap-8">
      {grouped(tokens).map((g) => (
        <div key={g.label} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <Eyebrow>{g.label}</Eyebrow>
            {g.note && <p className="text-sm text-muted-foreground">{g.note}</p>}
          </div>
          {g.label === "Status" ? (
            <StatusRow tokens={g.tokens} />
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {g.tokens.map((t) => (
                <SwatchCard key={t.name} name={t.name} label={toLabel(t.name)} light={t.light} dark={t.dark} />
              ))}
            </div>
          )}
        </div>
      ))}
      <Spec>
        Generated at build time from app/globals.css ({tokens.length} color tokens). Swatches render the live CSS
        variable, so the docs can&apos;t drift from the code. Click a swatch to copy its var().
      </Spec>
    </div>
  )
}
