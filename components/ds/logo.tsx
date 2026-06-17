/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"

interface LogoProps {
  /** Tailwind height class, e.g. "h-10". Width scales automatically. */
  className?: string
}

/**
 * Official Cerrowire Connect lockup. The artwork is dark, so place it on
 * light surfaces (card, cream, white). For dark surfaces, wrap it in a
 * light container or use the `LogoPlate` helper below.
 */
export function Logo({ className }: LogoProps) {
  return (
    <img
      src="/images/cerrowire-connect-logo.png"
      alt="Cerrowire Connect — Service Made Simple"
      className={cn("w-auto", className ?? "h-10")}
    />
  )
}

/** Logo on a light rounded plate — safe to drop on any background. */
export function LogoPlate({ className, logoClassName }: { className?: string; logoClassName?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-xl bg-card px-4 py-3", className)}>
      <Logo className={logoClassName ?? "h-9"} />
    </span>
  )
}
