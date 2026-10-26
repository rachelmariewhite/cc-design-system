import { Download } from "lucide-react"
import { CopyButton } from "@/components/ds/copy-button"
import { DownloadButton, Panel, Spec } from "@/components/ds/primitives"

type FontFile = { name: string; file: string; weight: string; use: string; sample: string }

const families: { family: string; role: string; cssClass: string; files: FontFile[] }[] = [
  {
    family: "Pragmatica",
    role: "Primary · all UI text",
    cssClass: "font-sans",
    files: [
      { name: "Book", file: "Pragmatica-Book", weight: "400", use: "Body, table cells, inputs", sample: "font-sans font-normal" },
      { name: "Bold", file: "Pragmatica-Bold", weight: "700", use: "Headings, buttons", sample: "font-sans font-bold" },
      { name: "Condensed Book", file: "Pragmatica-Condensed-Book", weight: "400", use: "Dense data, eyebrows", sample: "font-condensed" },
    ],
  },
  {
    family: "Bookmania",
    role: "Secondary · display only",
    cssClass: "font-serif",
    files: [
      { name: "Regular", file: "Bookmania-Regular", weight: "400", use: "Pull quotes, long-form serif", sample: "font-serif font-normal" },
      { name: "Bold", file: "Bookmania-Bold", weight: "700", use: "Marketing subheads", sample: "font-serif font-bold" },
      { name: "Black", file: "Bookmania-Black", weight: "900", use: "Display headlines", sample: "font-serif font-black" },
    ],
  },
]

export function FontDownloads() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="ds-h5 text-foreground">Font downloads</h3>
          <p className="text-body text-muted-foreground">
            Every face used in the Figma file. OTF for design tools, WOFF2 for the web.
          </p>
        </div>
        <a
          href="/fonts/Cerrowire-Fonts.zip"
          download="Cerrowire-Fonts.zip"
          className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-btn-sm text-primary-foreground transition-colors duration-200 ease-out hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Download className="size-4" aria-hidden="true" />
          Download all (.zip)
        </a>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {families.map((fam) => (
          <Panel key={fam.family} className="flex flex-col overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-5 py-4">
              <div className="flex flex-col gap-0.5">
                <p className="ds-h6 text-foreground">{fam.family}</p>
                <p className="text-caption text-muted-foreground">{fam.role}</p>
              </div>
              <CopyButton value={fam.cssClass} />
            </div>
            <ul className="flex flex-col divide-y divide-border">
              {fam.files.map((f) => (
                <li key={f.file} className="flex flex-wrap items-center justify-between gap-3 px-5 py-3">
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <p className={`text-lg leading-tight text-foreground ${f.sample}`}>
                      {fam.family} {f.name}
                    </p>
                    <p className="text-caption text-muted-foreground">
                      <span className="font-mono">{f.weight}</span> · {f.use}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <DownloadButton href={`/fonts/${f.file}.otf`} download={`${f.file}.otf`}>
                      OTF
                    </DownloadButton>
                    <DownloadButton href={`/fonts/${f.file}.woff2`} download={`${f.file}.woff2`}>
                      WOFF2
                    </DownloadButton>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>

      <Spec>
        Install the OTFs locally to match Figma. In code, fonts load from /public/fonts via next/font/local in
        app/layout.tsx, so use font-sans or font-serif and never set a font-family by hand.
      </Spec>
    </div>
  )
}
