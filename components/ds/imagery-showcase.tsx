/* eslint-disable @next/next/no-img-element */
import { DownloadButton, Eyebrow, Panel } from "@/components/ds/primitives"
import { LoginPreview } from "@/components/ds/login-preview"

const parity = [
  { item: "Typeface", live: "Pragmatica TTF fails to decode; one 400 weight declared", spec: "Pragmatica Book + Black WOFF2 (/fonts)" },
  { item: "Orange", live: "#FF6900 (Tailwind orange-500)", spec: "#F0721F · bg-primary" },
  { item: "Heading color", live: "#101828 (Tailwind gray-900)", spec: "#373331 · text-foreground" },
  { item: "Help text", live: "#99A1AF gray-400 (2.6:1, fails AA)", spec: "text-muted-foreground" },
  { item: "Button label", live: "18px Medium, sentence case", spec: "text-btn-lg · Bold caps" },
  { item: "Focus ring", live: "focus:ring (shows on mouse click)", spec: "focus-visible:ring-ring" },
  { item: "Submit state", live: "No loading feedback", spec: "Spinner + aria-busy" },
]

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
    <div className="flex flex-col gap-4">
      <Panel as="figure" className="overflow-hidden">
        <LoginPreview />
        <Caption
          title="Login — built from tokens"
          note="The new cdeweb.cerrowire.com login, rebuilt with Guidelines tokens. Click Login to see the loading state."
        />
      </Panel>

      <div className="grid gap-4 lg:grid-cols-3 lg:items-start">
        <Panel as="figure" className="overflow-hidden lg:col-span-2">
          <img
            src="/images/product-login-desktop.png"
            alt="Live Cerrowire Connect login on desktop: copper-wire photo with the logo on the left, Welcome Back and an orange Login button on the right"
            className="h-auto w-full"
          />
          <Caption
            title="Live — Login, desktop"
            note="Captured from cdeweb.cerrowire.com. Text renders in a fallback font because Pragmatica fails to load."
            file="/images/product-login-desktop.png"
            download="product-login-desktop.png"
          />
        </Panel>
        <Panel as="figure" className="overflow-hidden">
          <div className="flex items-center justify-center bg-secondary p-6">
            <img
              src="/images/product-login-mobile.png"
              alt="Live Cerrowire Connect login on mobile: Welcome Back heading, full-width orange Login button, support email"
              className="h-auto w-full max-w-[200px] rounded-2xl border border-border shadow-md"
            />
          </div>
          <Caption title="Live — Login, mobile" note="Photo panel is hidden under 768px; the button goes full width." />
        </Panel>
      </div>

      <Panel className="overflow-hidden">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-5 py-3">
          <p className="ds-label">Live vs. spec — fix in product</p>
          <p className="text-caption text-muted-foreground">Spec column is the source of truth</p>
        </div>
        <div className="hidden grid-cols-[9rem_1fr_1fr] gap-4 border-b border-border bg-muted/50 px-5 py-2 sm:grid">
          <Eyebrow>Item</Eyebrow>
          <Eyebrow>Live product</Eyebrow>
          <Eyebrow>Spec</Eyebrow>
        </div>
        <ul className="divide-y divide-border">
          {parity.map((p) => (
            <li key={p.item} className="grid gap-1 px-5 py-3 sm:grid-cols-[9rem_1fr_1fr] sm:items-center sm:gap-4">
              <span className="text-body font-bold text-foreground">{p.item}</span>
              <span className="text-body text-muted-foreground">{p.live}</span>
              <code className="font-mono text-caption font-bold text-link">{p.spec}</code>
            </li>
          ))}
        </ul>
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
          <img
            src="/images/cerrowire-connect-hero.png"
            alt="Cerrowire Connect key art: the logo over a dark photograph of coiled copper wire"
            className="h-full w-full object-cover"
          />
          <Caption
            title="Key art — Service Made Simple"
            note="Login photo panel and campaign headers."
            file="/images/cerrowire-connect-hero.png"
            download="cerrowire-connect-hero.png"
          />
        </Panel>
      </div>
    </div>
  )
}
