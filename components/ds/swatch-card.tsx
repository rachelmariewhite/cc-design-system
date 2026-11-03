"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

export function SwatchCard({ name, label, light, dark }: { name: string; label: string; light: string; dark?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(`var(--${name})`)
        setCopied(true)
        setTimeout(() => setCopied(false), 1200)
      }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-colors duration-200 ease-out hover:border-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span
        className="flex h-16 items-start justify-end border-b border-border p-2"
        style={{ backgroundColor: `var(--${name})` }}
      >
        <span className="rounded-full bg-card p-1 text-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          {copied ? <Check className="size-3.5" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
        </span>
      </span>
      <span className="flex flex-col gap-1 p-3">
        <span className="text-sm font-bold text-foreground">{label}</span>
        <span className="truncate font-mono text-xs text-muted-foreground">{copied ? "Copied var()" : `--${name}`}</span>
        <span className="font-mono text-xs text-muted-foreground">
          {light}
          {dark && dark !== light ? ` · dark ${dark}` : ""}
        </span>
      </span>
    </button>
  )
}
