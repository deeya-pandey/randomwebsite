import { ScanSearch, ShieldCheck, Activity, Sparkles, CircleMinus, Crown, type LucideIcon } from 'lucide-react'

const icons: Record<string, LucideIcon> = {
  'check-ups-and-cleaning': ScanSearch,
  fillings: ShieldCheck,
  'root-canal-treatment': Activity,
  'teeth-whitening': Sparkles,
  extractions: CircleMinus,
  'crowns-and-dentures': Crown,
}

export function ServiceIcon({ slug, className = '' }: { slug: string; className?: string }) {
  const Icon = icons[slug] ?? ScanSearch
  return (
    <span className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-paper text-bronze ${className}`}>
      <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
    </span>
  )
}
