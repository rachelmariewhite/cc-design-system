import { Badge } from "@/components/ui/badge"
import { toneClasses } from "@/components/ds/tones"
import { cn } from "@/lib/utils"

type Severity = "Fail" | "Conflict" | "Consider"

const severityTone = { Fail: "red", Conflict: "amber", Consider: "blue" } as const

const issues: { area: string; issue: string; found: string; fix: string; severity: Severity }[] = [
  { area: "Color", severity: "Fail", issue: "Muted text on cream", found: "#A19893 on #F7F4F1, 2.58:1", fix: "Use muted-foreground #4A4543 (8.62:1)." },
  { area: "Color", severity: "Fail", issue: "Administrator role badge", found: "#F0721F on #FFEFE5, 2.63:1", fix: "Use tone-orange-text #9A3412 on tint (6.38:1)." },
  { area: "Color", severity: "Fail", issue: "Notification counter", found: "White on #F0721F, 2.94:1", fix: "Use black numerals on orange (7.13:1)." },
  { area: "Color", severity: "Fail", issue: "Active nav label", found: "#F0721F on #4A4543, 3.21:1", fix: "Keep the label cream (#F7F4F1) and show the active state with an orange bar or icon." },
  { area: "Color", severity: "Fail", issue: "Quotes quick-link icon", found: "#D97706 on #FEF3C7, 2.86:1", fix: "Darken the amber icon to #B45309 (4.55:1)." },
  { area: "Color", severity: "Conflict", issue: "Warning shares the brand hue", found: "Warning uses #F0721F, the same as the primary CTA", fix: "Warning becomes amber #B45309, so orange is reserved for action." },
  { area: "Color", severity: "Conflict", issue: "Hard-coded Tailwind palette", found: "Quick links use raw emerald, amber, blue, red, and orange classes", fix: "Replace them with the tone-* tokens so light and dark mode stay in sync." },
  { area: "Color", severity: "Consider", issue: "Red on Product Search", found: "Red usually signals an error", fix: "Keep it for parity with the clone, but never pair it with alert copy. You could switch it to neutral." },
  { area: "Text", severity: "Conflict", issue: "Inconsistent label casing", found: "“QUICK LINKS” and “ADMIN” are uppercase, but other section labels are title case", fix: "Use the eyebrow style (uppercase, tracked) for every group label." },
  { area: "Text", severity: "Conflict", issue: "Repeated name in header", found: "“Welcome back, Mike Smith” sits next to the “Mike Smith” avatar label", fix: "Use the first name only: “Welcome back, Mike”." },
  { area: "Text", severity: "Consider", issue: "Slash label spacing", found: "“RMA / CMA” uses spaced slashes, while other labels have no separators", fix: "Standardize on “RMA/CMA” or spell out the label in the page title." },
  { area: "Type", severity: "Conflict", issue: "Fallback type in the clone", found: "The clone renders in a system sans", fix: "Load Pragmatica with Helvetica Neue as the fallback, as specified in the styleguide." },
]

export function BrandAudit() {
  const counts = issues.reduce<Record<Severity, number>>(
    (acc, i) => ({ ...acc, [i.severity]: acc[i.severity] + 1 }),
    { Fail: 0, Conflict: 0, Consider: 0 },
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {(Object.keys(counts) as Severity[]).map((s) => (
          <Badge key={s} className={cn("rounded-full", toneClasses[severityTone[s]].badge)}>
            {counts[s]} {s}
          </Badge>
        ))}
        <span className="ds-meta self-center">Checked against WCAG 2.1 AA: 4.5:1 for text, 3:1 for icons.</span>
      </div>
      <div className="overflow-x-auto rounded-xl border border-border bg-card">
        <table className="w-full min-w-[720px] text-left text-sm">
          <caption className="sr-only">Audit of the Cerrowire Connect clone against brand guidelines</caption>
          <thead className="border-b border-border bg-muted">
            <tr>
              <th scope="col" className="eyebrow px-4 py-3">Severity</th>
              <th scope="col" className="eyebrow px-4 py-3">Issue</th>
              <th scope="col" className="eyebrow px-4 py-3">Found on clone</th>
              <th scope="col" className="eyebrow px-4 py-3">Resolution in DS</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((i) => (
              <tr key={i.issue} className="border-b border-border align-top last:border-0">
                <td className="px-4 py-3">
                  <Badge className={cn("rounded-full", toneClasses[severityTone[i.severity]].badge)}>{i.severity}</Badge>
                </td>
                <td className="px-4 py-3">
                  <p className="font-bold text-foreground">{i.issue}</p>
                  <p className="text-xs text-muted-foreground">{i.area}</p>
                </td>
                <td className="px-4 py-3 font-mono text-xs leading-relaxed text-muted-foreground">{i.found}</td>
                <td className="px-4 py-3 leading-relaxed text-foreground">{i.fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
