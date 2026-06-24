import type { ReactNode } from "react"
import { Eyebrow } from "@/components/ds/primitives"

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  actions?: ReactNode
  children: ReactNode
}

export function Section({ id, eyebrow, title, description, actions, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-12 first:border-t-0 first:pt-0">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <Eyebrow className="mb-2">{eyebrow}</Eyebrow>
          <h2 className="font-heading text-2xl font-bold text-foreground text-balance md:text-3xl">{title}</h2>
          {description ? <p className="ds-body mt-3 text-muted-foreground text-pretty">{description}</p> : null}
        </div>
        {actions ? <div className="flex shrink-0 flex-wrap gap-2">{actions}</div> : null}
      </div>
      {children}
    </section>
  )
}
