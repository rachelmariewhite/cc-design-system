"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import { Eyebrow } from "@/components/ds/primitives"

interface Swatch {
  name: string
  token: string
  value: string
  text?: string
  border?: boolean
}

const brandColors: Swatch[] = [
  { name: "PMS 151 Orange", token: "bg-primary", value: "#F0721F", text: "text-primary-foreground" },
  { name: "Black", token: "bg-foreground", value: "#000000", text: "text-background" },
  { name: "White", token: "bg-card", value: "#FFFFFF", text: "text-card-foreground", border: true },
]

const digitalPalette: Swatch[] = [
  { name: "Cream", token: "bg-brand-cream", value: "#F7F4F1", text: "text-foreground", border: true },
  { name: "Sand", token: "bg-brand-sand", value: "#F2EDE9", text: "text-foreground", border: true },
  { name: "Stone", token: "bg-brand-stone", value: "#D9D2CD", text: "text-foreground" },
  { name: "Taupe", token: "bg-brand-taupe", value: "#A19893", text: "text-background" },
  { name: "Charcoal", token: "bg-brand-charcoal", value: "#373331", text: "text-background" },
]

const semanticColors: Swatch[] = [
  { name: "Primary", token: "bg-primary", value: "#F0721F", text: "text-primary-foreground" },
  { name: "Background", token: "bg-background", value: "#F7F4F1", text: "text-foreground", border: true },
  { name: "Foreground", token: "bg-foreground", value: "#373331", text: "text-background" },
  { name: "Card", token: "bg-card", value: "#FFFFFF", text: "text-card-foreground", border: true },
  { name: "Secondary", token: "bg-secondary", value: "#F2EDE9", text: "text-secondary-foreground", border: true },
  { name: "Muted", token: "bg-muted", value: "#F2EDE9", text: "text-muted-foreground", border: true },
  { name: "Muted Fg", token: "bg-brand-taupe", value: "#A19893", text: "text-background" },
  { name: "Border", token: "bg-border", value: "#D9D2CD", text: "text-foreground" },
]

const statusColors: Swatch[] = [
  { name: "Success", token: "bg-success", value: "#2D8C5A", text: "text-success-foreground" },
  { name: "Warning", token: "bg-warning", value: "#F0721F", text: "text-warning-foreground" },
  { name: "Destructive", token: "bg-destructive", value: "#DC2626", text: "text-destructive-foreground" },
]

const sidebarColors: Swatch[] = [
  { name: "Sidebar", token: "bg-sidebar", value: "#373331", text: "text-sidebar-foreground" },
  { name: "Sidebar Accent", token: "bg-sidebar-accent", value: "#4A4543", text: "text-sidebar-accent-foreground" },
  { name: "Sidebar Primary", token: "bg-sidebar-primary", value: "#F0721F", text: "text-sidebar-primary-foreground" },
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
      className="group overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
    >
      <div
        className={cn(
          "flex h-24 items-start justify-end p-3",
          swatch.token,
          swatch.text,
          swatch.border && "border-b border-border",
        )}
      >
        <span className="rounded-full bg-black/10 p-1.5 opacity-0 transition-opacity group-hover:opacity-100">
          {copied ? <Check className="size-3.5" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
        </span>
      </div>
      <div className="flex items-center justify-between gap-2 p-3">
        <p className="text-sm font-semibold text-foreground">{swatch.name}</p>
        <p className="font-mono text-xs text-muted-foreground">{copied ? "Copied" : swatch.value}</p>
      </div>
    </button>
  )
}

function Group({ label, swatches }: { label: string; swatches: Swatch[] }) {
  return (
    <div>
      <Eyebrow className="mb-3">{label}</Eyebrow>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {swatches.map((s) => (
          <SwatchCard key={s.name} swatch={s} />
        ))}
      </div>
    </div>
  )
}

export function ColorPalette() {
  return (
    <div className="space-y-8">
      <Group label="Cerrowire Brand Colors" swatches={brandColors} />
      <Group label="Expanded Digital Palette" swatches={digitalPalette} />
      <Group label="Semantic Tokens" swatches={semanticColors} />
      <Group label="Status" swatches={statusColors} />
      <Group label="Sidebar (dark surface)" swatches={sidebarColors} />
    </div>
  )
}
