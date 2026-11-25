import logoInk from '../assets/logo-ink.png'
import logoLight from '../assets/logo-light.png'

/** The clinic's own logo mark, extracted from their flyer. `light` = for dark backgrounds. */
export function Logo({ light = false, className = 'h-11 w-auto' }: { light?: boolean; className?: string }) {
  return <img src={light ? logoLight : logoInk} alt="" width={186} height={158} className={className} />
}

// Generic line tooth, used only as a photo placeholder icon.
export function LogoMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
      <path d="M20 22c0-5 4-8 9-8 3 0 4 1 3 1s0 0 3-1c5 0 9 3 9 8 0 5-2 8-3 14-1 6-2 14-5 14-3 0-3-8-4-11-1 3-1 11-4 11-3 0-4-8-5-14-1-6-3-9-3-14z" />
      <path d="M25 38V25l14 14V25" />
    </svg>
  )
}

export function InstagramIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}
