import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Eyebrow } from "@/components/ds/primitives"
import { cn } from "@/lib/utils"
import { Truck } from "lucide-react"
import type { ReactNode } from "react"

/** Reusable primary CTA — Pragmatica, all caps, fully rounded. */
export function PrimaryButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  return <Button className={cn("rounded-full px-6 uppercase tracking-wide", className)} {...props} />
}

/** Reusable secondary CTA — outlined orange pill that fills on hover. */
export function SecondaryButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button
      variant="outline"
      className={cn(
        "rounded-full border-2 border-primary px-6 uppercase tracking-wide text-primary hover:bg-primary hover:text-primary-foreground",
        className,
      )}
      {...props}
    />
  )
}

/**
 * Order-tracking table action, matched to the Cerrowire Connect Orders page.
 * The label uses tone-orange-text instead of brand orange so 12px text passes AA.
 */
export function TrackItButton({ className, disabled, children, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        disabled
          ? "cursor-not-allowed border-border bg-transparent text-muted-foreground"
          : "border-primary/25 bg-primary/10 text-tone-orange-text hover:bg-primary/15",
        className,
      )}
      {...props}
    >
      {!disabled && <Truck className="size-3.5 text-primary" aria-hidden="true" />}
      {children ?? (disabled ? "Unavailable" : "Track it")}
    </button>
  )
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card className="p-6">
      <Eyebrow className="mb-4">{title}</Eyebrow>
      {children}
    </Card>
  )
}

export function ComponentShowcase() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Block title="Buttons">
        <p className="ds-meta mb-3">Main buttons — Pragmatica, all caps, rounded-full.</p>
        <div className="flex flex-wrap items-center gap-3">
          <PrimaryButton>Primary Button</PrimaryButton>
          <SecondaryButton>Secondary Button</SecondaryButton>
        </div>
        <Separator className="my-4" />
        <p className="ds-meta mb-3">Variants &amp; sizes.</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button>Start request</Button>
          <Button variant="secondary">View all</Button>
          <Button variant="ghost">Skip</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="link">Learn more</Button>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm" className="uppercase">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
        <Separator className="my-4" />
        <p className="ds-meta mb-3">
          Order tracking — table action pill. Shows a truck icon when a shipment can be tracked; falls back to a
          disabled &ldquo;Unavailable&rdquo; state.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <TrackItButton aria-label="Track order CW100749" />
          <TrackItButton disabled />
        </div>
      </Block>

      <Block title="Badges">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="rounded-full border-transparent bg-tone-blue-tint text-tone-blue-text">In Transit</Badge>
          <Badge className="rounded-full border-transparent bg-tone-green-tint text-tone-green-text">Delivered</Badge>
          <Badge className="rounded-full border-transparent bg-tone-amber-tint text-tone-amber-text">Pending</Badge>
          <Badge className="rounded-full border-transparent bg-tone-red-tint text-tone-red-text">Backordered</Badge>
          <Badge className="rounded-full border-transparent bg-tone-orange-tint text-tone-orange-text">Action Required</Badge>
          <Badge className="rounded-full border-transparent bg-tone-neutral-tint text-tone-neutral-text">Draft</Badge>
        </div>
        <p className="ds-meta mt-3">
          Full meanings are in <a href="#badges" className="font-medium text-link hover:underline">Badges</a>.
        </p>
      </Block>

      <Block title="Form fields">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="po">Purchase order</Label>
            <Input id="po" placeholder="PO-100482" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="line">Product line</Label>
            <Select>
              <SelectTrigger id="line">
                <SelectValue placeholder="Select a line" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ac">AC MC Cable</SelectItem>
                <SelectItem value="hc">Healthcare MC Cable</SelectItem>
                <SelectItem value="fa">Fire Alarm MC Cable</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" placeholder="Add delivery instructions…" />
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border p-3">
            <Label htmlFor="rush" className="cursor-pointer">Rush delivery</Label>
            <Switch id="rush" />
          </div>
        </div>
      </Block>

      <Block title="Inputs · states">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="ok">Default</Label>
            <Input id="ok" defaultValue="THHN-12-BLK" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="dis">Disabled</Label>
            <Input id="dis" disabled defaultValue="Locked field" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="err" className="text-destructive">With error</Label>
            <Input id="err" aria-invalid defaultValue="Invalid SKU" />
            <p className="text-xs text-destructive">This SKU could not be matched.</p>
          </div>
        </div>
      </Block>
    </div>
  )
}
