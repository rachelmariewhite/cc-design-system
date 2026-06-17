import { LabeledBlock, Panel, Spec } from "@/components/ds/primitives"

const radii = [
  { name: "sm", cls: "rounded-sm", note: "Badges, tags" },
  { name: "md", cls: "rounded-md", note: "Inputs, small buttons" },
  { name: "lg", cls: "rounded-lg", note: "Buttons, list rows" },
  { name: "xl", cls: "rounded-xl", note: "Cards" },
  { name: "2xl", cls: "rounded-2xl", note: "Feature panels" },
  { name: "full", cls: "rounded-full", note: "Pills, avatars" },
]

const shadows = [
  { name: "border", cls: "border border-border", note: "Resting card" },
  { name: "shadow-sm", cls: "border border-border shadow-sm", note: "Subtle lift" },
  { name: "shadow-md", cls: "border border-border shadow-md", note: "Hover state" },
  { name: "shadow-lg", cls: "border border-border shadow-lg", note: "Overlays, popovers" },
]

export function RadiusShowcase() {
  return (
    <div className="space-y-8">
      <LabeledBlock label="Corner radius — base 0.75rem">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {radii.map((r) => (
            <Panel key={r.name} className="flex flex-col items-center gap-3 p-4">
              <div className={`size-16 bg-primary/15 ${r.cls}`} />
              <div className="text-center">
                <Spec className="font-semibold text-foreground">{r.cls}</Spec>
                <p className="text-xs text-muted-foreground">{r.note}</p>
              </div>
            </Panel>
          ))}
        </div>
      </LabeledBlock>

      <LabeledBlock label="Elevation">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {shadows.map((s) => (
            <div key={s.name} className={`rounded-xl bg-card p-5 ${s.cls}`}>
              <Spec className="font-semibold text-foreground">{s.name}</Spec>
              <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>
      </LabeledBlock>
    </div>
  )
}
