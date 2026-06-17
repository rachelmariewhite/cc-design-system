/* eslint-disable @next/next/no-img-element */

export function ImageryShowcase() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <figure className="lg:col-span-2 overflow-hidden rounded-xl border border-border bg-card">
        <img
          src="/images/ref-desktop-dashboard.png"
          alt="Cerrowire Connect desktop dashboard showing the home overview, quick actions, and product categories"
          className="h-auto w-full"
        />
        <figcaption className="border-t border-border p-4">
          <p className="text-sm font-semibold text-foreground">Desktop — Dashboard</p>
          <p className="ds-meta">Sidebar nav, overview stat cards, quick actions, category grid.</p>
        </figcaption>
      </figure>
      <figure className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="flex items-center justify-center bg-secondary p-6">
          <img
            src="/images/ref-mobile-home.png"
            alt="Cerrowire Connect mobile welcome screen with the logo and a login button"
            className="h-auto w-full max-w-[220px] rounded-2xl border border-border shadow-md"
          />
        </div>
        <figcaption className="border-t border-border p-4">
          <p className="text-sm font-semibold text-foreground">Mobile — Welcome</p>
          <p className="ds-meta">Centered logo, pill login button, support footer.</p>
        </figcaption>
      </figure>
    </div>
  )
}
