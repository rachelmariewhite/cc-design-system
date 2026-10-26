import Image from "next/image"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const sizes = {
  xs: "size-3.5",
  sm: "size-4",
  md: "size-5",
  lg: "size-8",
} as const

// The mark is wider than tall, so logo spinners need a larger box than the ring to stay legible.
const logoSizes = {
  xs: "size-5",
  sm: "size-6",
  md: "size-8",
  lg: "size-12",
} as const

export type SpinnerSize = keyof typeof sizes
export type SpinnerVariant = "ring" | "logo-pulse" | "logo-orbit"

const MARK_SRC = "/images/cerrowire-connect-mark.png"

/**
 * Brand loader. `ring` (Lucide Loader2) is the default across the Connect app.
 * `logo-pulse` and `logo-orbit` use the Cerrowire Connect mark for branded moments
 * such as sign-in, first load, and full-page waits. The mark keeps its own brand
 * colors, so use logo variants on light surfaces only. Reduced-motion users get a
 * slower animation rather than none, so progress stays visible.
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
      {variant === "logo-pulse" ? (
        <Image
          src={MARK_SRC}
          alt=""
          aria-hidden="true"
          width={192}
          height={192}
          className={cn(
            logoSizes[size],
            "object-contain motion-safe:animate-logo-breathe motion-reduce:animate-[logo-breathe_2.8s_ease-in-out_infinite]",
          )}
        />
      ) : variant === "logo-orbit" ? (
        <span aria-hidden="true" className={cn("relative inline-flex items-center justify-center", logoSizes[size])}>
          <span className="absolute inset-0 animate-spin rounded-full border-2 border-current/20 border-t-current motion-reduce:animate-[spin_1.6s_linear_infinite]" />
          <Image src={MARK_SRC} alt="" width={192} height={192} className="size-[68%] object-contain" />
        </span>
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
