/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"

type LogoVariant = "4c" | "black" | "white"

const VARIANT_SRC: Record<LogoVariant, string> = {
  "4c": "/images/cerrowire-connect-4c.png",
  black: "/images/cerrowire-connect-black.png",
  white: "/images/cerrowire-wordmark-white.png",
}

interface LogoProps {
  /** Tailwind height class, e.g. "h-10". Width scales automatically. */
  className?: string
  /**
   * Which official artwork to render:
   * - `4c` full color (orange + black) — for light surfaces
   * - `black` all-black — for light surfaces
   * - `white` reversed — for dark surfaces
   */
  variant?: LogoVariant
}

/**
 * Official Cerrowire Connect lockup. Pick the variant that fits the surface:
 * use `4c` or `black` on light backgrounds and `white` on dark backgrounds.
 * When in doubt, use the `LogoPlate` helper below to drop the mark on any background.
 */
export function Logo({ className, variant = "4c" }: LogoProps) {
  return (
    <img
      src={VARIANT_SRC[variant] || "/placeholder.svg"}
      alt="Cerrowire Connect — Service Made Simple"
      className={cn("w-auto", className ?? "h-10")}
    />
  )
}

/** Logo on a light rounded plate — safe to drop on any background. */
export function LogoPlate({ className, logoClassName }: { className?: string; logoClassName?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-xl bg-card px-4 py-3", className)}>
      <Logo variant="4c" className={logoClassName ?? "h-9"} />
    </span>
  )
}
