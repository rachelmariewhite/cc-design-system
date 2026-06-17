import { Logo, LogoPlate } from "@/components/ds/logo"
import { Eyebrow, Panel } from "@/components/ds/primitives"

const usage = [
  {
    title: "About the mark",
    body: "Fewer hard edges and subtle bends mimic actual wire. The distinctive \u201Co\u201D represents a cross-section of wrapped copper wire.",
  },
  {
    title: "Clear space",
    body: "Keep clear space around the lockup equal to the height of the \u201Cc\u201D in cerrowire. Never crowd it with other elements.",
  },
  {
    title: "Misuse",
    body: "Never stretch, squash, rotate, recolor, or add effects to the logo. Use only the approved artwork and brand colors.",
  },
]

export function LogoShowcase() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-3">
        <Panel className="flex items-center justify-center p-12 lg:col-span-2">
          <Logo className="h-auto w-full max-w-md" />
        </Panel>
        <div className="flex items-center justify-center rounded-xl border border-border bg-sidebar p-10">
          <LogoPlate className="px-6 py-5" logoClassName="h-auto w-full max-w-[200px]" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {usage.map((u) => (
          <Panel key={u.title} className="p-5">
            <Eyebrow className="mb-2">{u.title}</Eyebrow>
            <p className="text-sm leading-relaxed text-muted-foreground">{u.body}</p>
          </Panel>
        ))}
      </div>
    </div>
  )
}
