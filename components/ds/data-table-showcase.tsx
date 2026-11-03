import { ArrowUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Eyebrow, Panel, Spec } from "./primitives"

type Align = "left" | "center" | "right"

const columns: { key: string; label: string; align: Align }[] = [
  { key: "part", label: "Part Number", align: "left" },
  { key: "description", label: "Part Description", align: "left" },
  { key: "category", label: "Part Category", align: "left" },
  { key: "uom", label: "UOM", align: "center" },
  { key: "stock", label: "Stock Available", align: "right" },
  { key: "ft", label: "FT Available", align: "right" },
]

const rows = [
  { part: "050-1600S", gauge: "12 BARE", rest: "CU SOL SD 1250FT RL", uom: "rl", stock: 62, ft: 77500 },
  { part: "050-1800M", gauge: "10 BARE", rest: "CU SOL SD 2500FT RL", uom: "rl", stock: 0, ft: 0 },
  { part: "050-1800S", gauge: "10 BARE", rest: "CU SOL SD 800FT RL", uom: "rl", stock: 69, ft: 55200 },
  { part: "050-2000A", gauge: "8 BARE", rest: "CU SOL SD 25FT COIL", uom: "ctn", stock: 792, ft: 19800 },
  { part: "050-2000A3", gauge: "8 BARE", rest: "CU SOL SD 15FT COIL", uom: "ctn", stock: 330, ft: 4950 },
  { part: "050-2000B", gauge: "8 BARE", rest: "CU SOL SD 50FT COIL", uom: "ctn", stock: 315, ft: 15750 },
  { part: "050-2000J", gauge: "8 BARE", rest: "CU SOL SD 500FT RL", uom: "rl", stock: 33, ft: 16500 },
  { part: "050-2000K", gauge: "8 BARE", rest: "CU SOL SD 1000FT RL", uom: "rl", stock: -2, ft: -2000 },
  { part: "050-2000M", gauge: "8 BARE", rest: "CU SOL SD 2500FT RL", uom: "rl", stock: -2, ft: -5000 },
  { part: "050-2000P", gauge: "8 BARE", rest: "CU SOL SD 5000FT RL", uom: "rl", stock: 2, ft: 10000 },
]

const alignClass: Record<Align, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
}

const justifyClass: Record<Align, string> = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
}

const number = new Intl.NumberFormat("en-US")

const rules = [
  { label: "Left", detail: "Part Number, Part Description, Part Category. Text reads left to right, so it scans from the left edge." },
  { label: "Center", detail: "UOM. Short fixed-width codes (rl, ctn) sit centered in a chip." },
  { label: "Right", detail: "Stock Available, FT Available. Numbers align on the ones digit so magnitudes compare at a glance." },
  { label: "Negative", detail: "Backordered quantities use text-destructive with a leading minus. Never color alone." },
]

function Quantity({ value, unit }: { value: number; unit?: string }) {
  return (
    <span className={cn("tabular-nums", value < 0 ? "text-destructive" : "text-foreground")}>
      {number.format(value)}
      {unit ? ` ${unit}` : ""}
    </span>
  )
}

export function DataTableShowcase() {
  return (
    <div className="flex flex-col gap-8">
      <Panel className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[56rem] border-collapse text-sm">
            <caption className="sr-only">Product search results, Bare Copper</caption>
            <thead>
              <tr className="bg-action text-action-foreground">
                {columns.map((col) => (
                  <th key={col.key} scope="col" className={cn("h-11 px-4 font-bold whitespace-nowrap", alignClass[col.align])}>
                    <span className={cn("inline-flex w-full items-center gap-1.5", justifyClass[col.align])}>
                      {col.align === "right" && <ArrowUpDown className="size-3.5" aria-hidden="true" />}
                      {col.label}
                      {col.align !== "right" && <ArrowUpDown className="size-3.5" aria-hidden="true" />}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.part} className="h-11 border-b border-border last:border-b-0 even:bg-background">
                  <td className="px-4 text-left font-bold whitespace-nowrap text-link">{row.part}</td>
                  <td className="px-4 text-left whitespace-nowrap text-foreground">
                    <span className="font-bold text-link">{row.gauge}</span> {row.rest}
                  </td>
                  <td className="px-4 text-left whitespace-nowrap text-muted-foreground">Bare Copper</td>
                  <td className="px-4 text-center">
                    <span className="inline-flex min-w-8 justify-center rounded-[4px] border border-border bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                      {row.uom}
                    </span>
                  </td>
                  <td className="px-4 text-right whitespace-nowrap">
                    <Quantity value={row.stock} />
                  </td>
                  <td className="px-4 text-right whitespace-nowrap">
                    <Quantity value={row.ft} unit="ft" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {rules.map((rule) => (
          <Panel key={rule.label} className="flex flex-col gap-2 p-6">
            <Eyebrow>{rule.label}</Eyebrow>
            <p className="text-sm leading-relaxed text-foreground text-pretty">{rule.detail}</p>
          </Panel>
        ))}
      </div>

      <Panel className="flex flex-col gap-2 p-6">
        <Eyebrow>Spec from Figma, Product Search</Eyebrow>
        <Spec>{"header: h-11 (44px) · bg-action · text-action-foreground · font-bold · sort icon on the outer edge"}</Spec>
        <Spec>{"row: h-11 (44px) · px-4 (16px) cells · border-b border-border · even:bg-background zebra"}</Spec>
        <Spec>{"part number + gauge: text-link font-bold · category: text-muted-foreground · numbers: tabular-nums"}</Spec>
      </Panel>
    </div>
  )
}
