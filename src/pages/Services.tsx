import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Photo } from '../components/Photo'
import { Reveal } from '../components/Reveal'
import { ServiceIcon } from '../components/ServiceIcon'
import { waLink } from '../data/clinic'
import { useI18n } from '../i18n'

export default function Services() {
  const { c, l, services } = useI18n()
  const t = c.services
  const pending = services.some((s) => !s.confirmed)
  return (
    <>
      <Seo path="/services/" />
      <section className="mx-auto grid max-w-6xl items-end gap-12 px-5 pb-14 pt-12 md:grid-cols-[1.3fr_1fr] md:pt-20">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-5xl md:text-[4.2rem]">{t.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{t.lead}</p>
          {pending && <p className="mt-7 max-w-2xl border-l-2 border-gold bg-sand/70 px-4 py-3 text-sm text-ink-soft"><strong className="text-ink">{t.noteLabel}</strong> {t.note}</p>}
        </div>
        <Photo name="exam" widths={[640, 1000]} width={1000} height={795} alt={t.heroAlt} priority sizes="(min-width: 768px) 440px, 92vw" className="aspect-[5/4] w-full rounded-[28px]" />
      </section>

      <section className="border-t border-ink/10 bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[220px_1fr] md:py-20">
          <nav aria-label={t.onPage} className="hidden md:block">
            <div className="sticky top-28">
              <p className="eyebrow">{t.onPage}</p>
              <ul className="mt-5 space-y-3 text-sm">
                {services.map((s) => <li key={s.slug}><a href={`#${s.slug}`} className="text-ink-soft hover:text-bronze">{s.name}</a></li>)}
              </ul>
            </div>
          </nav>
          <div>
            {services.map((s, i) => (
              <article id={s.slug} key={s.slug} className="scroll-mt-28 border-b border-ink/15 py-12 first:pt-0">
                <Reveal>
                  <div className="flex items-center gap-5">
                    <ServiceIcon slug={s.slug} />
                    <div>
                      <span className="font-serif text-sm text-bronze">0{i + 1}</span>
                      <h2 className="text-3xl md:text-4xl">{s.name}</h2>
                    </div>
                  </div>
                  <p className="mt-5 max-w-2xl text-lg text-ink-soft">{s.short}</p>
                  <dl className="mt-8 grid gap-8 sm:grid-cols-3">
                    {[[t.what, s.what], [t.who, s.who], [t.involves, s.involves]].map(([hd, x]) => (
                      <div key={hd} className="border-t border-gold/50 pt-4">
                        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-bronze">{hd}</dt>
                        <dd className="mt-2 leading-relaxed text-ink-soft">{x}</dd>
                      </div>
                    ))}
                  </dl>
                  <a href={waLink(`${c.waHello} (${s.name})`)} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-bronze underline decoration-gold underline-offset-[6px] hover:text-ink"><MessageCircle size={16} />{t.btn}</a>
                </Reveal>
              </article>
            ))}
            <div className="pt-12">
              <p className="max-w-xl text-ink-soft">{t.foot}</p>
              <Link to={l('/contact/#book')} className="btn btn-primary mt-6">{c.home.request} <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
