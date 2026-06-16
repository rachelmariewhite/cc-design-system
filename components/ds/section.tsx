import type { ReactNode } from "react"

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-12 first:border-t-0 first:pt-0">
      <div className="mb-8 max-w-2xl">
        <p className="eyebrow mb-2">{eyebrow}</p>
        <h2 className="font-heading text-2xl font-bold text-foreground text-balance md:text-3xl">{title}</h2>
        {description ? <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">{description}</p> : null}
      </div>
      {children}
    </section>
  )
}
