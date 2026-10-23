import { Badge } from "@/components/ui/badge"
import { Panel, Spec } from "@/components/ds/primitives"
import { toneClasses, toneHex, type ToneName } from "@/components/ds/tones"
import { cn } from "@/lib/utils"

const statusBadges: { label: string; tone: ToneName; meaning: string; ratio: string }[] = [
  { label: "Delivered", tone: "green", meaning: "Complete, nothing to do. Also used for Accepted quotes and Approved RMAs.", ratio: "6.78:1" },
  { label: "Pending", tone: "amber", meaning: "Waiting on someone (customer or Cerrowire). Also used for Awaiting Approval.", ratio: "6.37:1" },
  { label: "In Transit", tone: "blue", meaning: "In progress, informational, no action needed. Also used for Processing.", ratio: "7.15:1" },
  { label: "Backordered", tone: "red", meaning: "Blocked or failed and needs attention. Also used for Cancelled, Rejected, and Expired.", ratio: "6.80:1" },
  { label: "Action Required", tone: "orange", meaning: "The user has to act. This is the only badge that shares the brand hue, because it is a call to action.", ratio: "6.38:1" },
  { label: "Draft", tone: "neutral", meaning: "Not submitted yet and not part of the workflow.", ratio: "11.4:1" },
]

const roleBadges = [
  { label: "Administrator", className: "bg-tone-orange-tint text-tone-orange-text", note: "#9A3412 on #FFEDD5 (6.38:1). Replaces the clone’s #F0721F text, which was 2.63:1." },
  { label: "Distributor", className: "bg-tone-neutral-tint text-tone-neutral-text", note: "Neutral tone, because a role is identity, not status." },
]

export function BadgeSystem() {
  return (
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Status badge color meanings</caption>
          <thead className="border-b border-border bg-muted">
            <tr>
              <th scope="col" className="eyebrow px-4 py-3">Badge</th>
              <th scope="col" className="eyebrow px-4 py-3">Meaning</th>
              <th scope="col" className="eyebrow hidden px-4 py-3 md:table-cell">Text / Fill</th>
              <th scope="col" className="eyebrow px-4 py-3 text-right">Contrast</th>
            </tr>
          </thead>
          <tbody>
            {statusBadges.map((b) => (
              <tr key={b.label} className="border-b border-border last:border-0">
                <td className="px-4 py-3">
                  <Badge className={cn("rounded-full", toneClasses[b.tone].badge)}>{b.label}</Badge>
                </td>
                <td className="px-4 py-3 leading-relaxed text-muted-foreground">{b.meaning}</td>
                <td className="hidden px-4 py-3 md:table-cell">
                  <Spec>
                    {toneHex[b.tone].text} / {toneHex[b.tone].tint}
                  </Spec>
                </td>
                <td className="px-4 py-3 text-right font-mono text-xs font-bold text-tone-green-text">{b.ratio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Panel className="flex flex-col gap-3 p-5">
          <p className="text-sm font-bold text-foreground">Role badges</p>
          {roleBadges.map((r) => (
            <div key={r.label} className="flex flex-col gap-1">
              <Badge className={cn("w-fit rounded-full border-transparent", r.className)}>{r.label}</Badge>
              <p className="text-xs leading-relaxed text-muted-foreground">{r.note}</p>
            </div>
          ))}
        </Panel>
        <Panel className="flex flex-col gap-3 p-5">
          <p className="text-sm font-bold text-foreground">Notification counter</p>
          <div className="flex items-center gap-4">
            <span className="flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-brand-black">
              4
            </span>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Black on #F0721F (7.13:1). The clone uses white on orange, which is only 2.94:1, so small numerals fail.
            </p>
          </div>
        </Panel>
      </div>
    </div>
  )
}
