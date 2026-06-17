import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Uppercase tracked label used above section titles and card groups. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow", className)}>{children}</p>
}

/** Standard rounded surface used across the design system. */
export function Panel({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode
  className?: string
  as?: "div" | "figure" | "section"
}) {
  return <Tag className={cn("rounded-xl border border-border bg-card", className)}>{children}</Tag>
}

/** Labelled block: an eyebrow heading followed by content. */
export function LabeledBlock({
  label,
  children,
  className,
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <Eyebrow className="mb-3">{label}</Eyebrow>
      {children}
    </div>
  )
}

/** Mono spec text, e.g. "Pragmatica Bold · 60 / 60". */
export function Spec({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("font-mono text-xs text-muted-foreground", className)}>{children}</p>
}
