import { Eyebrow, Panel, Spec } from "./primitives"

const scale = [
  { token: "1", px: 4, use: "Icon to label inside a chip" },
  { token: "2", px: 8, use: "Icon to text in buttons, badge padding" },
  { token: "3", px: 12, use: "Avatar to name, filter list items" },
  { token: "4", px: 16, use: "Table cell padding, top bar gap" },
  { token: "6", px: 24, use: "Page gutter, rail to table gap, card padding" },
  { token: "8", px: 32, use: "Top bar side padding, section blocks" },
  { token: "12", px: 48, use: "Between page sections" },
  { token: "16", px: 64, use: "Top bar height" },
]

const layout = [
  { name: "Top bar", spec: "h-16 (64px) · px-8 (32px) · gap-4 · border-b border-border · bg-card" },
  { name: "Page gutter", spec: "p-6 (24px) around page content" },
  { name: "Page header", spec: "title + subtitle gap-1 · then search row mt-6" },
  { name: "Filter rail", spec: "w-68 (272px) · rounded-xl border · p-6 · collapsible" },
  { name: "Rail to table", spec: "gap-6 (24px) · table fills remaining width" },
  { name: "Table rows", spec: "h-11 (44px) header and rows · px-4 cells" },
]

export function SpacingLayout() {
  return (
    <div className="flex flex-col gap-8">
      <Panel className="flex flex-col gap-4 p-6">
        <Eyebrow>Spacing scale, 4px base</Eyebrow>
        <ul className="flex flex-col">
          {scale.map((s) => (
            <li
              key={s.token}
              className="grid grid-cols-[6rem_1fr] items-center gap-4 border-b border-border py-3 last:border-b-0 md:grid-cols-[6rem_10rem_1fr]"
            >
              <span className="font-mono text-sm whitespace-nowrap text-foreground">
                {s.token}
                <span className="text-muted-foreground"> · {s.px}px</span>
              </span>
              <span aria-hidden="true" className="hidden h-3 rounded-sm bg-primary md:block" style={{ width: s.px * 2 }} />
              <span className="text-sm text-muted-foreground">{s.use}</span>
            </li>
          ))}
        </ul>
      </Panel>

      <Panel className="flex flex-col gap-4 p-6">
        <Eyebrow>Page layout, from Figma Product Search</Eyebrow>
        <div aria-hidden="true" className="flex flex-col overflow-hidden rounded-lg border border-border bg-background">
          <div className="flex h-10 items-center gap-2 border-b border-border bg-card px-4">
            <span className="h-2 w-16 rounded-sm bg-foreground/70" />
            <span className="ml-auto size-5 rounded-full bg-primary" />
          </div>
          <div className="flex flex-col gap-3 p-4">
            <span className="h-3 w-40 rounded-sm bg-foreground/70" />
            <span className="h-6 w-2/3 rounded-md border border-border bg-card" />
            <div className="flex gap-3">
              <span className="hidden h-32 w-1/5 rounded-md border border-border bg-card sm:block" />
              <div className="flex flex-1 flex-col overflow-hidden rounded-md border border-border bg-card">
                <span className="h-5 bg-action" />
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} className="h-5 border-b border-border last:border-b-0 even:bg-background" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
          {layout.map((l) => (
            <div key={l.name} className="flex flex-col gap-0.5">
              <dt className="text-sm font-bold text-foreground">{l.name}</dt>
              <dd>
                <Spec>{l.spec}</Spec>
              </dd>
            </div>
          ))}
        </dl>
      </Panel>
    </div>
  )
}
