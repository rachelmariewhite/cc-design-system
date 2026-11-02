import { FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Panel } from "@/components/ds/primitives"
import { cn } from "@/lib/utils"

type StatusTone = "blue" | "green" | "orange" | "red" | "yellow" | "purple" | "slate" | "plain"

const statusToneClasses: Record<StatusTone, string> = {
  blue: "bg-status-blue-bg border-status-blue-border text-status-blue-text",
  green: "bg-status-green-bg border-status-green-border text-status-green-text",
  orange: "bg-status-orange-bg border-status-orange-border text-status-orange-text",
  red: "bg-status-red-bg border-status-red-border text-status-red-text",
  yellow: "bg-status-yellow-bg border-status-yellow-border text-status-yellow-text",
  purple: "bg-status-purple-bg border-status-purple-border text-status-purple-text",
  slate: "bg-status-slate-bg border-status-slate-border text-status-slate-text",
  plain: "bg-status-plain-bg border-status-plain-border text-status-plain-text",
}

type StatusRow = { label: string; tone: StatusTone; meaning: string }
type StatusGroup = { id: string; title: string; description: string; rows: StatusRow[] }

const statusGroups: StatusGroup[] = [
  {
    id: "quote",
    title: "Quote Statuses",
    description: "The lifecycle stages a quote can move through.",
    rows: [
      { label: "Requested", tone: "blue", meaning: "A quote request has been submitted by the customer or rep and is awaiting pricing." },
      { label: "Issued", tone: "green", meaning: "Pricing has been finalized and the quote has been issued to the customer for review." },
      { label: "Unsecured", tone: "orange", meaning: "The quote is still in progress and editable — pricing has not been locked or issued yet." },
      { label: "Cancelled", tone: "plain", meaning: "The quote was withdrawn or voided by the customer or rep and is no longer active." },
      { label: "Expired", tone: "red", meaning: "The quote’s validity window has passed. Pricing is no longer honored and the quote must be renewed." },
      { label: "Unqualified", tone: "orange", meaning: "The account does not currently meet credit or qualification requirements. The quote is on hold pending review." },
    ],
  },
  {
    id: "order",
    title: "Order Statuses",
    description: "The fulfillment stages a submitted order moves through.",
    rows: [
      { label: "Submitted", tone: "blue", meaning: "The order has been placed and is awaiting warehouse processing." },
      { label: "Picked", tone: "yellow", meaning: "Items have been pulled and staged at the warehouse, ready for shipment." },
      { label: "Shipped", tone: "purple", meaning: "The order has left the warehouse and is in transit to the customer." },
      { label: "Delivered", tone: "green", meaning: "The order has been received by the customer and proof of delivery is on file." },
    ],
  },
  {
    id: "tracking",
    title: "Tracking Statuses",
    description: "Carrier tracking states for shipments on the Order Tracking page.",
    rows: [
      { label: "Ordered", tone: "slate", meaning: "Shipment has been created within Echo’s system and pending booking of a carrier." },
      { label: "Booked", tone: "blue", meaning: "Carrier has been sourced on the shipment." },
      { label: "Checked In", tone: "purple", meaning: "Carrier has confirmed they are set for the pickup of the shipment." },
      { label: "Loading", tone: "yellow", meaning: "Shipment is being loaded into the carrier’s trailer." },
      { label: "Picked Up", tone: "orange", meaning: "Shipment has been picked up by carrier and is enroute to the delivery location." },
      { label: "Delivered", tone: "green", meaning: "Shipment has been delivered to the destination." },
      { label: "Cancelled", tone: "red", meaning: "The shipment has been cancelled with Echo and will not be moved by Echo." },
    ],
  },
  {
    id: "rma",
    title: "RMA / CMA Statuses",
    description: "The lifecycle of a return (RMA) or credit memo (CMA) request.",
    rows: [
      { label: "New", tone: "slate", meaning: "The return or credit request has been created and has not yet been reviewed." },
      { label: "Reviewing", tone: "yellow", meaning: "The request is under review by the sales rep or credit team." },
      { label: "Approved", tone: "blue", meaning: "The request has been approved and is waiting for the RMA or CMA document to be issued." },
      { label: "Issued", tone: "orange", meaning: "The RMA/CMA has been issued to the customer. For returns, material can now be shipped back." },
      { label: "Credit Issued", tone: "green", meaning: "Returned material has been received (or the CMA processed) and the credit has been applied to the account." },
      { label: "Cancelled", tone: "plain", meaning: "The request was withdrawn or voided and no credit will be issued." },
    ],
  },
]

const roleBadges = [
  { label: "Administrator", className: "bg-tone-orange-tint text-tone-orange-text", note: "Orange tone text #9A3412 on tint #FFEDD5." },
  { label: "Distributor", className: "bg-tone-neutral-tint text-tone-neutral-text", note: "Neutral tone, because a role is identity, not status." },
]

function StatusBadge({ label, tone }: { label: string; tone: StatusTone }) {
  return (
    <Badge
      className={cn(
        "rounded-[4px] border px-2.5 py-0.5 text-xs font-normal whitespace-nowrap",
        statusToneClasses[tone],
      )}
    >
      {label}
    </Badge>
  )
}

function StatusTable({ group }: { group: StatusGroup }) {
  const headingId = `status-${group.id}`
  return (
    <section aria-labelledby={headingId} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 id={headingId} className="text-lg font-bold text-foreground">
          {group.title}
        </h3>
        <p className="text-sm text-muted-foreground">{group.description}</p>
      </div>
      <dl className="overflow-hidden rounded-lg border border-border bg-card">
        {group.rows.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-2 border-b border-border px-4 py-4 last:border-0 sm:flex-row sm:items-start sm:gap-0"
          >
            <dt className="sm:w-32 sm:shrink-0 sm:pt-0.5">
              <StatusBadge label={row.label} tone={row.tone} />
            </dt>
            <dd className="text-sm leading-relaxed text-foreground text-pretty">{row.meaning}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export function BadgeSystem() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-tone-orange-surface text-primary">
          <FileText className="size-5" aria-hidden="true" />
        </span>
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-bold text-foreground">Status Guide</h3>
          <p className="text-sm text-muted-foreground">
            Reference for every status that can appear on a quote, order, shipment, or return.
          </p>
        </div>
      </div>

      <div className="flex max-w-3xl flex-col gap-8">
        {statusGroups.map((group) => (
          <StatusTable key={group.id} group={group} />
        ))}
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
            <span className="flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              4
            </span>
            <p className="text-xs leading-relaxed text-muted-foreground">
              White numerals on #F0721F, matching the live product. Use{" "}
              <span className="font-mono text-foreground">bg-primary text-primary-foreground</span>.
            </p>
          </div>
        </Panel>
      </div>
    </div>
  )
}
