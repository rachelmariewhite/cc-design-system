/* eslint-disable @next/next/no-img-element */
import { DownloadButton, Panel } from "@/components/ds/primitives"

function Caption({ title, note, file, download }: { title: string; note: string; file?: string; download?: string }) {
  return (
    <figcaption className="flex items-start justify-between gap-3 border-t border-border p-4">
      <div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="ds-meta">{note}</p>
      </div>
      {file ? (
        <DownloadButton href={file} download={download} className="mt-0.5 shrink-0">
          PNG
        </DownloadButton>
      ) : null}
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
          file="/images/cerrowire-connect-hero.png"
          download="cerrowire-connect-hero.png"
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
