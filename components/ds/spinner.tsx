import { Loader, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const sizes = {
  xs: "size-3.5",
  sm: "size-4",
  md: "size-5",
  lg: "size-8",
} as const

const dotSizes = {
  xs: "size-1",
  sm: "size-1.5",
  md: "size-2",
  lg: "size-3",
} as const

export type SpinnerSize = keyof typeof sizes
export type SpinnerVariant = "ring" | "rays" | "dots"

/**
 * Brand loader. `ring` (Lucide Loader2) is the default used across the Connect app;
 * `rays` suits dense toolbars and `dots` suits chat/typing or AI responses.
 * Reduced-motion users get a slower spin (or a pulse for dots) rather than none,
 * so progress stays visible.
 */
export function Spinner({
  size = "sm",
  variant = "ring",
  label = "Loading",
  className,
}: {
  size?: SpinnerSize
  variant?: SpinnerVariant
  label?: string
  className?: string
}) {
  return (
    <span role="status" className={cn("inline-flex items-center text-primary", className)}>
      {variant === "dots" ? (
        <span aria-hidden="true" className="inline-flex items-center gap-1">
          {[0, 150, 300].map((delay) => (
            <span
              key={delay}
              style={{ animationDelay: `${delay}ms` }}
              className={cn(dotSizes[size], "rounded-full bg-current motion-safe:animate-bounce motion-reduce:animate-pulse")}
            />
          ))}
        </span>
      ) : variant === "rays" ? (
        <Loader
          aria-hidden="true"
          className={cn(sizes[size], "animate-spin motion-reduce:animate-[spin_1.6s_linear_infinite]")}
        />
      ) : (
        <Loader2
          aria-hidden="true"
          className={cn(sizes[size], "animate-spin motion-reduce:animate-[spin_1.6s_linear_infinite]")}
        />
      )}
      <span className="sr-only">{label}</span>
    </span>
  )
}
