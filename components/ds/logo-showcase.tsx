import { Logo } from "@/components/ds/logo"
import { Eyebrow, Panel } from "@/components/ds/primitives"

const variants = [
  {
    label: "Full color",
    note: "Primary lockup. Use on white and light surfaces.",
    variant: "4c" as const,
    surface: "border border-border bg-card",
  },
  {
    label: "One color — black",
    note: "For single-color light backgrounds and print.",
    variant: "black" as const,
    surface: "border border-border bg-background",
  },
  {
    label: "One color — white",
    note: "Reversed mark for dark surfaces and photography.",
    variant: "white" as const,
    surface: "bg-foreground",
  },
]

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
      <div className="grid gap-4 sm:grid-cols-3">
        {variants.map((v) => (
          <div key={v.label} className="flex flex-col gap-3">
            <div className={`flex h-44 items-center justify-center rounded-xl p-8 ${v.surface}`}>
              <Logo variant={v.variant} className="h-auto w-full max-w-[200px]" />
            </div>
            <div>
              <Eyebrow className="mb-1">{v.label}</Eyebrow>
              <p className="text-sm leading-relaxed text-muted-foreground">{v.note}</p>
            </div>
          </div>
        ))}
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
