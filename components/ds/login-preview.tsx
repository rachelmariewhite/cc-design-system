"use client"

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react"
import { Spinner } from "@/components/ds/spinner"

export function LoginPreview() {
  const [loading, setLoading] = useState(false)
  const timer = useRef<number>(undefined)
  useEffect(() => () => clearTimeout(timer.current), [])

  const signIn = () => {
    if (loading) return
    setLoading(true)
    timer.current = window.setTimeout(() => setLoading(false), 1800)
  }

  return (
    <div className="grid overflow-hidden bg-card md:grid-cols-2">
      <img
        src="/images/cerrowire-connect-hero.png"
        alt="Cerrowire Connect logo over a photograph of coiled copper wire"
        className="hidden h-full min-h-72 w-full object-cover md:block"
      />
      <div className="flex flex-col justify-center gap-6 px-8 py-12 md:px-12">
        <h3 className="ds-h3 text-foreground">Welcome Back.</h3>
        <button
          type="button"
          onClick={signIn}
          aria-busy={loading}
          disabled={loading}
          className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-primary text-btn-lg text-primary-foreground transition-colors duration-200 ease-out hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card active:scale-[0.98] disabled:cursor-wait"
        >
          {loading ? (
            <>
              <Spinner size="sm" label="Signing in" className="text-primary-foreground" />
              Signing In
            </>
          ) : (
            "Login"
          )}
        </button>
        <p className="text-body text-muted-foreground">
          Need help? Send us a note at{" "}
          <a href="mailto:support@cerrowire.com" className="font-bold text-link hover:underline">
            support@cerrowire.com
          </a>
          .
        </p>
      </div>
    </div>
  )
}
