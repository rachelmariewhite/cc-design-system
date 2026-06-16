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

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="p-6">
      <p className="eyebrow mb-4">{title}</p>
      {children}
    </Card>
  )
}

export function ComponentShowcase() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Block title="Buttons">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Start request</Button>
          <Button variant="secondary">View all</Button>
          <Button variant="outline">Cancel</Button>
          <Button variant="ghost">Skip</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="link">Learn more</Button>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Block>

      <Block title="Badges">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>In transit</Badge>
          <Badge variant="secondary">Requested</Badge>
          <Badge variant="outline">Draft</Badge>
          <Badge className="bg-success text-success-foreground">Delivered</Badge>
          <Badge className="bg-warning text-warning-foreground">Pending</Badge>
          <Badge variant="destructive">Backordered</Badge>
        </div>
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
