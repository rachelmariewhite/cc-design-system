"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface Swatch {
  name: string
  token: string
  value: string
  text?: string
  border?: boolean
}

const coreColors: Swatch[] = [
  { name: "Primary", token: "bg-primary", value: "#e8792b", text: "text-primary-foreground" },
  { name: "Background", token: "bg-background", value: "#f8f6f3", text: "text-foreground", border: true },
  { name: "Foreground", token: "bg-foreground", value: "#1a1a1a", text: "text-background" },
  { name: "Card", token: "bg-card", value: "#ffffff", text: "text-card-foreground", border: true },
  { name: "Secondary", token: "bg-secondary", value: "#f0ede8", text: "text-secondary-foreground", border: true },
  { name: "Muted", token: "bg-muted", value: "#f0ede8", text: "text-muted-foreground", border: true },
  { name: "Accent", token: "bg-accent", value: "#f5f3f0", text: "text-accent-foreground", border: true },
  { name: "Border", token: "bg-border", value: "#e8e4df", text: "text-foreground" },
]

const statusColors: Swatch[] = [
  { name: "Success", token: "bg-success", value: "#22c55e", text: "text-success-foreground" },
  { name: "Warning", token: "bg-warning", value: "#f59e0b", text: "text-warning-foreground" },
  { name: "Destructive", token: "bg-destructive", value: "#dc2626", text: "text-destructive-foreground" },
]

const sidebarColors: Swatch[] = [
  { name: "Sidebar", token: "bg-sidebar", value: "#2d2d2d", text: "text-sidebar-foreground" },
  { name: "Sidebar Accent", token: "bg-sidebar-accent", value: "#3d3d3d", text: "text-sidebar-accent-foreground" },
  { name: "Sidebar Primary", token: "bg-sidebar-primary", value: "#e8792b", text: "text-sidebar-primary-foreground" },
]

function SwatchCard({ swatch }: { swatch: Swatch }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(swatch.value)
        setCopied(true)
        setTimeout(() => setCopied(false), 1200)
      }}
      className="group overflow-hidden rounded-lg border border-border bg-card text-left transition-shadow hover:shadow-md"
    >
      <div
        className={cn(
          "flex h-24 items-end p-3",
          swatch.token,
          swatch.text,
          swatch.border && "border-b border-border",
        )}
      >
        <span className="text-xs font-medium opacity-80 group-hover:opacity-100">{copied ? "Copied!" : "Click to copy"}</span>
      </div>
      <div className="p-3">
        <p className="text-sm font-semibold text-foreground">{swatch.name}</p>
        <p className="font-mono text-xs text-muted-foreground">{swatch.value}</p>
      </div>
    </button>
  )
}

export function ColorPalette() {
  return (
    <div className="space-y-8">
      <div>
        <p className="eyebrow mb-3">Core</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {coreColors.map((s) => (
            <SwatchCard key={s.name} swatch={s} />
          ))}
        </div>
      </div>
      <div>
        <p className="eyebrow mb-3">Status</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {statusColors.map((s) => (
            <SwatchCard key={s.name} swatch={s} />
          ))}
        </div>
      </div>
      <div>
        <p className="eyebrow mb-3">Sidebar (dark surface)</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {sidebarColors.map((s) => (
            <SwatchCard key={s.name} swatch={s} />
          ))}
        </div>
      </div>
    </div>
  )
}
