import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const sizes = {
  xs: "size-3.5",
  sm: "size-4",
  md: "size-5",
  lg: "size-8",
} as const

/**
 * Brand loader — the Lucide Loader2 ring used in the Connect app.
 * Reduced-motion users get a slower spin rather than none, so progress stays visible.
 */
export function Spinner({
  size = "sm",
  label = "Loading",
  className,
}: {
  size?: keyof typeof sizes
  label?: string
  className?: string
}) {
  return (
    <span role="status" className="inline-flex">
      <Loader2
        aria-hidden="true"
        className={cn(
          sizes[size],
          "animate-spin text-primary motion-reduce:animate-[spin_1.6s_linear_infinite]",
          className,
        )}
      />
      <span className="sr-only">{label}</span>
    </span>
  )
}
