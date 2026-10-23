"use client"

import { useEffect, useRef, useState } from "react"
import { Check, RefreshCw, Truck } from "lucide-react"
import { Spinner } from "@/components/ds/spinner"
import { LabeledBlock, Panel, Spec } from "@/components/ds/primitives"
import { cn } from "@/lib/utils"

const motionTokens = [
  { cls: "duration-200 ease-out", use: "Hover, color, and focus changes", where: "Buttons, nav items, links" },
  { cls: "duration-300 ease-out", use: "Expand and collapse", where: "Accordions, order rows, menus" },
  { cls: "duration-500 ease-out", use: "Entrances", where: "Dialogs, toasts, page sections" },
  { cls: "animate-spin", use: "Indeterminate loading", where: "Buttons, tables, full-panel loads" },
  { cls: "animate-pulse", use: "Content placeholders", where: "Skeleton stat cards and rows" },
  { cls: "animate-ping", use: "Live status only", where: "In-transit tracking dot" },
]

const sizes = [
  { size: "xs", label: "14px", use: "Inline in pills" },
  { size: "sm", label: "16px", use: "Buttons" },
  { size: "md", label: "20px", use: "Table rows" },
  { size: "lg", label: "32px", use: "Panel loads" },
] as const

type SaveState = "idle" | "loading" | "done"

function useTimedState() {
  const [state, setState] = useState<SaveState>("idle")
  const timers = useRef<number[]>([])
  useEffect(() => () => timers.current.forEach(clearTimeout), [])
  const run = () => {
    if (state !== "idle") return
    setState("loading")
    timers.current.push(
      window.setTimeout(() => setState("done"), 1600),
      window.setTimeout(() => setState("idle"), 3200),
    )
  }
  return [state, run] as const
}

function LoadingButtons() {
  const [submit, runSubmit] = useTimedState()
  const [refresh, runRefresh] = useTimedState()

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={runSubmit}
        aria-busy={submit === "loading"}
        disabled={submit === "loading"}
        className="inline-flex h-11 min-w-44 items-center justify-center gap-2 rounded-full bg-primary px-6 text-btn text-primary-foreground transition-colors duration-200 ease-out hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] disabled:cursor-wait"
      >
        {submit === "loading" ? (
          <>
            <Spinner size="sm" label="Submitting order" className="text-primary-foreground" />
            Submitting
          </>
        ) : submit === "done" ? (
          <>
            <Check className="size-4" aria-hidden="true" />
            Submitted
          </>
        ) : (
          "Submit Order"
        )}
      </button>

      <button
        type="button"
        onClick={runRefresh}
        aria-busy={refresh === "loading"}
        disabled={refresh === "loading"}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-5 text-btn text-foreground transition-colors duration-200 ease-out hover:border-link hover:text-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-wait"
      >
        <RefreshCw
          aria-hidden="true"
          className={cn("size-4", refresh === "loading" && "animate-spin motion-reduce:animate-[spin_1.6s_linear_infinite]")}
        />
        {refresh === "loading" ? "Refreshing" : refresh === "done" ? "Up to date" : "Refresh"}
      </button>
      <span aria-live="polite" className="sr-only">
        {submit === "done" ? "Order submitted" : ""}
        {refresh === "done" ? "Orders up to date" : ""}
      </span>
    </div>
  )
}

function SkeletonBlock({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("rounded-md bg-muted motion-safe:animate-pulse", className)} />
}

function InteractionStates() {
  const states = [
    { label: "Default", cls: "bg-primary" },
    { label: "Hover", cls: "bg-primary/90" },
    { label: "Focus", cls: "bg-primary ring-2 ring-ring ring-offset-2 ring-offset-card" },
    { label: "Pressed", cls: "bg-primary scale-[0.98]" },
    { label: "Disabled", cls: "bg-primary opacity-50" },
  ]
  return (
    <div className="flex flex-wrap gap-4">
      {states.map((s) => (
        <div key={s.label} className="flex flex-col items-center gap-2">
          <span
            className={cn(
              "inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full px-4 text-btn-sm text-primary-foreground",
              s.cls,
            )}
          >
            Track It
          </span>
          <span className="text-caption text-muted-foreground">{s.label}</span>
        </div>
      ))}
    </div>
  )
}

export function MotionShowcase() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel className="flex flex-col gap-5 p-6">
          <LabeledBlock label="Spinner sizes">
            <div className="grid grid-cols-4 gap-3">
              {sizes.map((s) => (
                <div key={s.size} className="flex flex-col items-center gap-2 rounded-lg bg-muted/50 p-4">
                  <div className="flex h-8 items-center">
                    <Spinner size={s.size} />
                  </div>
                  <p className="text-caption font-bold text-foreground">{s.label}</p>
                  <p className="text-center text-caption text-muted-foreground">{s.use}</p>
                </div>
              ))}
            </div>
          </LabeledBlock>
          <LabeledBlock label="On dark surfaces">
            <div className="flex items-center gap-3 rounded-lg bg-sidebar px-4 py-3">
              <Spinner size="md" className="text-sidebar-primary" label="Loading account" />
              <p className="text-body text-sidebar-foreground">Loading your account…</p>
            </div>
          </LabeledBlock>
          <Spec>{'<Spinner size="sm" label="Loading orders" />'}</Spec>
        </Panel>

        <Panel className="flex flex-col gap-5 p-6">
          <LabeledBlock label="Loading buttons — click to try">
            <LoadingButtons />
          </LabeledBlock>
          <LabeledBlock label="Inline loading">
            <div className="flex items-center gap-3 rounded-lg border border-border px-4 py-3">
              <Spinner size="md" label="Loading open orders" />
              <p className="text-body text-muted-foreground">Loading open orders…</p>
            </div>
          </LabeledBlock>
          <LabeledBlock label="Live tracking status">
            <div className="flex items-center gap-3">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full rounded-full bg-tone-green-icon opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex size-2.5 rounded-full bg-tone-green-icon" />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-tone-green-tint px-2.5 py-1 text-caption font-bold text-tone-green-text">
                <Truck className="size-3.5" aria-hidden="true" />
                In transit
              </span>
            </div>
          </LabeledBlock>
        </Panel>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel className="flex flex-col gap-4 p-6">
          <LabeledBlock label="Skeleton — stat cards and order rows">
            <div className="flex flex-col gap-3" aria-busy="true" aria-label="Loading overview">
              <div className="grid grid-cols-3 gap-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex flex-col gap-2 rounded-lg border border-border p-3">
                    <SkeletonBlock className="h-3 w-2/3" />
                    <SkeletonBlock className="h-6 w-1/2" />
                  </div>
                ))}
              </div>
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <SkeletonBlock className="h-4 w-20" />
                  <SkeletonBlock className="h-4 flex-1" />
                  <SkeletonBlock className="h-6 w-20 rounded-full" />
                </div>
              ))}
            </div>
          </LabeledBlock>
          <Spec>Use skeletons for loads over 300ms where the layout is known; use a spinner when it isn&apos;t.</Spec>
        </Panel>

        <Panel className="flex flex-col gap-4 p-6">
          <LabeledBlock label="Interaction states">
            <InteractionStates />
          </LabeledBlock>
          <Spec>hover:bg-primary/90 · focus-visible:ring-2 ring-ring · active:scale-[0.98] · disabled:opacity-50</Spec>
        </Panel>
      </div>

      <Panel className="overflow-hidden">
        <div className="border-b border-border px-5 py-3">
          <p className="ds-label">Motion tokens</p>
        </div>
        <ul className="divide-y divide-border">
          {motionTokens.map((t) => (
            <li key={t.cls} className="grid gap-1 px-5 py-3 sm:grid-cols-3 sm:items-center sm:gap-4">
              <code className="font-mono text-caption font-bold text-link">{t.cls}</code>
              <span className="text-body text-foreground">{t.use}</span>
              <span className="text-caption text-muted-foreground">{t.where}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  )
}
