import { LogoMark } from './Logo'
import { useI18n } from '../i18n'

/**
 * Stand-in for an authorised clinic photograph. Never use stock photos here
 * presented as the clinic. Swap for <img> once the owner supplies images.
 */
export function PhotoSlot({ label, className = '', tone = 'mauve' }: { label: string; className?: string; tone?: 'mauve' | 'sage' | 'sand' }) {
  const { c } = useI18n()
  const bg = tone === 'sage' ? 'bg-sage text-bronze-light' : tone === 'sand' ? 'bg-sand text-bronze' : 'bg-mauve text-bronze'
  return (
    <div role="img" aria-label={label} className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden ${bg} ${className}`}>
      <LogoMark className="h-16 w-16 opacity-70" />
      <span className="px-6 text-center text-xs font-medium uppercase tracking-[0.16em] opacity-80">{c.photo}</span>
    </div>
  )
}
