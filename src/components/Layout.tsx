import { useState, type ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Phone, MessageCircle, Menu, X, MapPin, Clock } from 'lucide-react'
import { clinic, waLink } from '../data/clinic'
import { Logo, LogoMark, InstagramIcon } from './Logo'
import { useI18n } from '../i18n'


export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const { lang, c, l, otherPath } = useI18n()
  const nav = [
    { to: l('/services/'), label: c.nav.services },
    { to: l('/about/'), label: c.nav.about },
    { to: l('/team/'), label: c.nav.team },
    { to: l('/testimonials/'), label: c.nav.testimonials },
    { to: l('/contact/'), label: c.nav.contact },
  ]
  const wa = waLink(c.waHello)
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory">{c.nav.skip}</a>
      <div className="on-dark hidden bg-ink text-xs text-ivory/85 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">
          <p className="flex items-center gap-2"><MapPin size={14} className="text-bronze-light" />{c.address}</p>
          <p className="flex items-center gap-2"><Clock size={14} className="text-bronze-light" />{c.hoursShort}</p>
          <a href={`tel:${clinic.phones[0].tel}`} className="flex items-center gap-2 hover:text-bronze-light"><Phone size={14} className="text-bronze-light" />{clinic.phones[0].display} · {clinic.phones[1].display}</a>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-gold/30 bg-ivory/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link to={l('/')} className="flex items-center gap-2.5" aria-label={c.nav.homeAria}>
            <Logo className="h-[52px] w-auto" />
            <span className="border-l border-gold/50 pl-3 font-serif text-[1.15rem] leading-tight text-ink">Dental Care<span className="block font-sans text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-bronze">Pvt. Ltd. · Kathmandu</span></span>
          </Link>
          <nav aria-label={lang === 'ne' ? 'मुख्य' : 'Main'} className="hidden items-center gap-4 lg:gap-6 xl:gap-8 lg:flex">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} className={({ isActive }) => `whitespace-nowrap text-sm font-medium hover:text-bronze ${isActive ? 'text-bronze' : 'text-ink'}`}>{n.label}</NavLink>
            ))}
            <Link to={otherPath} hrefLang={lang === 'ne' ? 'en' : 'ne'} lang={lang === 'ne' ? 'en' : 'ne'} aria-label={c.nav.switchAria} className="rounded-full border border-ink/25 px-3 py-1.5 text-sm font-medium hover:border-bronze hover:text-bronze">{c.nav.switchLabel}</Link>
            <Link to={l('/contact/#book')} className="btn btn-gold btn-sm">{c.nav.book}</Link>
          </nav>
          <button className="rounded p-2 lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? c.nav.closeMenu : c.nav.openMenu} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav id="mobile-nav" aria-label={lang === 'ne' ? 'मोबाइल' : 'Mobile'} className="border-t border-ink/10 bg-ivory px-5 pb-5 lg:hidden">
            {[{ to: l('/'), label: c.nav.home }, ...nav].map((n) => (
              <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className="block border-b border-ink/10 py-4 font-serif text-2xl">{n.label}</NavLink>
            ))}
            <Link to={otherPath} onClick={() => setOpen(false)} hrefLang={lang === 'ne' ? 'en' : 'ne'} lang={lang === 'ne' ? 'en' : 'ne'} aria-label={c.nav.switchAria} className="block border-b border-ink/10 py-4 text-xl">{c.nav.switchLabel}</Link>
            <Link to={l('/contact/#book')} onClick={() => setOpen(false)} className="btn btn-primary mt-5 w-full">{c.nav.book}</Link>
          </nav>
        )}
      </header>

      <main id="main">{children}</main>

      <footer className="on-dark bg-ink text-ivory">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3"><Logo light className="h-14 w-auto" /><span className="font-serif text-2xl text-ivory">Dental Care</span></div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/70">{c.footer.blurb}</p>
            <div className="mt-6 flex gap-3">
              <a href={clinic.social.instagram} target="_blank" rel="noopener noreferrer" aria-label={c.footer.ig} className="rounded-full border border-ivory/25 p-2.5 hover:border-bronze-light hover:text-bronze-light"><InstagramIcon /></a>
              <a href={clinic.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label={c.footer.tt} className="rounded-full border border-ivory/25 px-3.5 py-2.5 text-xs font-semibold hover:border-bronze-light hover:text-bronze-light">TikTok</a>
            </div>
          </div>
          <div>
            <h2 className="!font-sans text-xs font-semibold uppercase tracking-[0.16em] text-bronze-light">{c.footer.visit}</h2>
            <p className="mt-4 flex gap-2 text-sm text-ivory/80"><MapPin size={16} className="mt-0.5 shrink-0" />{c.address}</p>
            <p className="mt-3 text-sm text-ivory/60">{c.hoursNote}</p>
            <a href={clinic.directionsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm underline underline-offset-4 hover:text-bronze-light">{c.footer.directions}</a>
          </div>
          <div>
            <h2 className="!font-sans text-xs font-semibold uppercase tracking-[0.16em] text-bronze-light">{c.footer.callMsg}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {clinic.phones.map((p) => (<li key={p.tel}><a href={`tel:${p.tel}`} className="hover:text-bronze-light">{p.display}</a></li>))}
              <li><a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-bronze-light">{c.footer.wa}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-ivory/10 py-5 text-center text-xs text-ivory/50">© {new Date().getFullYear()} {clinic.legalName} · {c.footer.photoNote}</div>
      </footer>

      {/* Mobile sticky action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-ink/10 bg-ivory p-2.5 md:hidden">
        <a href={`tel:${clinic.phones[0].tel}`} className="btn btn-primary"><Phone size={18} />{c.footer.call}</a>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa"><MessageCircle size={18} />{c.footer.waShort}</a>
      </div>
      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  )
}
