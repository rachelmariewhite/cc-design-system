/* eslint-disable @next/next/no-img-element */

export function LogoShowcase() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 flex items-center justify-center rounded-xl border border-border bg-card p-10">
          <img
            src="/images/cerrowire-connect-logo.png"
            alt="Cerrowire Connect primary logo with the tagline Service Made Simple"
            className="h-auto w-full max-w-md"
          />
        </div>
        <div className="flex items-center justify-center rounded-xl border border-border bg-sidebar p-10">
          <img
            src="/images/cerrowire-connect-logo-white.png"
            alt="Cerrowire Connect logo reversed on a dark charcoal background"
            className="h-auto w-full max-w-xs"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5">
          <p className="eyebrow mb-2">About the mark</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Fewer hard edges and subtle bends mimic actual wire. The distinctive
            {" "}&ldquo;o&rdquo; represents a cross-section of wrapped copper wire.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <p className="eyebrow mb-2">Wordmark</p>
          <span className="font-heading text-2xl font-bold tracking-tight">
            <span className="text-foreground">cerro</span>
            <span className="text-primary">wire</span>
          </span>
          <p className="mt-2 text-sm text-muted-foreground">
            Compact lockup for app headers and nav.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <p className="eyebrow mb-2">Clear space &amp; usage</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Never stretch, squash, or recolor the logo. Maintain clear space and
            use only approved brand colors.
          </p>
        </div>
      </div>
    </div>
  )
}
