export type ToneName = "green" | "amber" | "blue" | "red" | "orange" | "neutral"

/** Literal class strings per tone so Tailwind can detect them at build time. */
export const toneClasses: Record<ToneName, { surface: string; tint: string; icon: string; text: string; badge: string }> = {
  green: {
    surface: "bg-tone-green-surface",
    tint: "bg-tone-green-tint",
    icon: "text-tone-green-icon",
    text: "text-tone-green-text",
    badge: "bg-tone-green-tint text-tone-green-text border-transparent",
  },
  amber: {
    surface: "bg-tone-amber-surface",
    tint: "bg-tone-amber-tint",
    icon: "text-tone-amber-icon",
    text: "text-tone-amber-text",
    badge: "bg-tone-amber-tint text-tone-amber-text border-transparent",
  },
  blue: {
    surface: "bg-tone-blue-surface",
    tint: "bg-tone-blue-tint",
    icon: "text-tone-blue-icon",
    text: "text-tone-blue-text",
    badge: "bg-tone-blue-tint text-tone-blue-text border-transparent",
  },
  red: {
    surface: "bg-tone-red-surface",
    tint: "bg-tone-red-tint",
    icon: "text-tone-red-icon",
    text: "text-tone-red-text",
    badge: "bg-tone-red-tint text-tone-red-text border-transparent",
  },
  orange: {
    surface: "bg-tone-orange-surface",
    tint: "bg-tone-orange-tint",
    icon: "text-tone-orange-icon",
    text: "text-tone-orange-text",
    badge: "bg-tone-orange-tint text-tone-orange-text border-transparent",
  },
  neutral: {
    surface: "bg-tone-neutral-surface",
    tint: "bg-tone-neutral-tint",
    icon: "text-tone-neutral-icon",
    text: "text-tone-neutral-text",
    badge: "bg-tone-neutral-tint text-tone-neutral-text border-transparent",
  },
}

export const toneHex: Record<ToneName, { surface: string; tint: string; icon: string; text: string }> = {
  green: { surface: "#ECFDF5", tint: "#D1FAE5", icon: "#059669", text: "#065F46" },
  amber: { surface: "#FFFBEB", tint: "#FEF3C7", icon: "#B45309", text: "#92400E" },
  blue: { surface: "#EFF6FF", tint: "#DBEAFE", icon: "#1D4ED8", text: "#1E40AF" },
  red: { surface: "#FEF2F2", tint: "#FEE2E2", icon: "#DC2626", text: "#991B1B" },
  orange: { surface: "#FFF7ED", tint: "#FFEDD5", icon: "#EA580C", text: "#9A3412" },
  neutral: { surface: "#F7F4F1", tint: "#F2EDE9", icon: "#4A4543", text: "#373331" },
}
