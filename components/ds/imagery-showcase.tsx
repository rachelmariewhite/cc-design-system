/* eslint-disable @next/next/no-img-element */
import { Panel } from "@/components/ds/primitives"

function Caption({ title, note }: { title: string; note: string }) {
  return (
    <figcaption className="border-t border-border p-4">
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <p className="ds-meta">{note}</p>
    </figcaption>
  )
}

export function ImageryShowcase() {
  return (
    <div className="space-y-4">
      <Panel as="figure" className="overflow-hidden">
        <img
          src="/images/cerrowire-connect-hero.png"
          alt="Cerrowire Connect marketing key art — the logo over a dark photograph of coiled copper wire on a factory floor"
          className="h-auto w-full"
        />
        <Caption
          title="Brand key art — Service Made Simple"
          note="Logo reversed over a dark, dramatically lit copper-wire photograph. Use for hero banners and campaign headers."
        />
      </Panel>
      <div className="grid gap-4 lg:grid-cols-3">
        <Panel as="figure" className="overflow-hidden lg:col-span-2">
          <img
            src="/images/ref-desktop-dashboard.png"
            alt="Cerrowire Connect desktop dashboard showing the home overview, quick actions, and product categories"
            className="h-auto w-full"
          />
          <Caption title="Desktop — Dashboard" note="Sidebar nav, overview stat cards, quick actions, category grid." />
        </Panel>
        <Panel as="figure" className="overflow-hidden">
          <div className="flex items-center justify-center bg-secondary p-6">
            <img
              src="/images/ref-mobile-home.png"
              alt="Cerrowire Connect mobile welcome screen with the logo and a login button"
              className="h-auto w-full max-w-[220px] rounded-2xl border border-border shadow-md"
            />
          </div>
          <Caption title="Mobile — Welcome" note="Centered logo, pill login button, support footer." />
        </Panel>
      </div>
    </div>
  )
}
