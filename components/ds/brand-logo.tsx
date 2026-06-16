export function BrandLogo({ className }: { className?: string }) {
  return (
    <span className={`font-heading text-xl font-bold tracking-tight ${className ?? ""}`}>
      <span className="text-foreground">cerro</span>
      <span className="text-primary">wire</span>
    </span>
  )
}
