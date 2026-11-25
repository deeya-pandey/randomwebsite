import { Link } from 'react-router-dom'
import { Phone, MessageCircle, ArrowRight, ArrowUpRight, Clock, Quote, ScanSearch } from 'lucide-react'
import { clinic, waLink } from '../data/clinic'
import { Photo } from '../components/Photo'
import { Seo } from '../components/Seo'
import { Reveal } from '../components/Reveal'
import { ServiceIcon } from '../components/ServiceIcon'
import { LocationBlock } from '../components/LocationBlock'
import { Faq } from '../components/Faq'
import { useI18n } from '../i18n'

const trustIcons = [MessageCircle, ScanSearch, Clock]

export default function Home() {
  const { c, l, services } = useI18n()
  const h = c.home
  const wa = waLink(c.waHello)
  return (
    <>
      <Seo path="/" />

      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 pb-24 pt-10 md:grid-cols-[1.1fr_1fr] md:gap-12 md:pb-28 md:pt-16">
          <div>
            <p className="ribbon"><span>{h.ribbon}</span><span aria-hidden="true" /></p>
            <h1 className="mt-7 text-[2.7rem] sm:text-6xl lg:text-[4.4rem]">{h.h1}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{h.lead}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to={l('/contact/#book')} className="btn btn-primary">{h.request} <ArrowRight size={18} /></Link>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa"><MessageCircle size={18} />{h.wa}</a>
            </div>
            <ul className="mt-12 grid max-w-xl grid-cols-1 gap-5 border-t border-ink/10 pt-7 sm:grid-cols-3">
              {h.trust.map(([t, d], i) => {
                const Icon = trustIcons[i]
                return (
                  <li key={t} className="flex items-start gap-3">
                    <Icon size={20} strokeWidth={1.7} className="mt-0.5 shrink-0 text-bronze" aria-hidden="true" />
                    <span className="text-sm leading-snug"><strong className="block font-semibold">{t}</strong><span className="text-ink-soft">{d}</span></span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[440px]">
            {/* Offset gold arch outline: the site's one decorative motif */}
            <div aria-hidden="true" className="arch absolute inset-0 translate-x-4 -translate-y-4 border border-gold/70" />
            <Photo name="hero-smile" widths={[480, 853]} width={853} height={1067} alt={h.heroAlt} priority sizes="(min-width: 768px) 440px, 92vw" className="arch relative aspect-[4/5] w-full" />
            <div className="absolute -bottom-10 hidden rounded-2xl bg-paper p-5 shadow-[0_24px_60px_-24px_rgba(23,21,19,.45)] sm:-left-10 sm:block sm:w-72">
              <p className="font-serif text-xl">{h.cardH}</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <a href={`tel:${clinic.phones[0].tel}`} className="btn btn-primary btn-sm"><Phone size={16} />{h.cardCall}</a>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm"><MessageCircle size={16} />{h.wa}</a>
              </div>
              <p className="mt-3 text-center text-xs text-ink-soft">{clinic.phones[0].display} · {clinic.phones[1].display}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Services ───── */}
      <section className="border-t border-ink/10 bg-paper">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-[0.85fr_1.15fr] md:py-28">
          <div className="md:sticky md:top-28 md:self-start">
            <Reveal>
              <p className="eyebrow">{h.sEyebrow}</p>
              <h2 className="mt-4 text-4xl md:text-5xl">{h.sH2}</h2>
              <p className="mt-5 max-w-md text-ink-soft">{h.sLead}</p>
              <Link to={l('/services/')} className="mt-7 inline-flex items-center gap-2 font-semibold text-bronze underline decoration-gold underline-offset-[6px] hover:text-ink">{h.sAll} <ArrowRight size={16} /></Link>
              <Photo name="treatment" widths={[480, 853]} width={853} height={1067} alt={h.sAlt} sizes="(min-width: 768px) 400px, 0px" className="mt-10 hidden aspect-[5/4] w-full rounded-[28px] md:block" />
            </Reveal>
          </div>
          <ul className="border-t border-ink/15">
            {services.map((s, i) => (
              <li key={s.slug} className="border-b border-ink/15">
                <Reveal delay={i * 60}>
                  <Link to={l(`/services/#${s.slug}`)} className="group flex items-center gap-5 py-6">
                    <ServiceIcon slug={s.slug} className="transition-colors group-hover:border-bronze group-hover:bg-sand" />
                    <span className="flex-1">
                      <span className="block font-serif text-2xl transition-colors group-hover:text-bronze">{s.name}</span>
                      <span className="mt-1 block text-sm text-ink-soft">{s.short}</span>
                    </span>
                    <ArrowUpRight className="shrink-0 text-bronze transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={20} />
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───── Your visit ───── */}
      <section className="on-dark bg-ink text-ivory">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-[1fr_1.1fr] md:py-28">
          <Reveal>
            <Photo name="exam" widths={[640, 1000]} width={1000} height={795} alt={h.vAlt} sizes="(min-width: 768px) 520px, 92vw" className="aspect-[5/4] w-full rounded-[28px]" />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow">{h.vEyebrow}</p>
              <h2 className="mt-4 text-4xl md:text-5xl">{h.vH2}</h2>
            </Reveal>
            <ol className="mt-10 space-y-8">
              {h.steps.map(([t, d], i) => (
                <li key={t}>
                  <Reveal delay={i * 90} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-ivory/15 pt-6">
                    <span className="font-serif text-4xl leading-none text-bronze-light">0{i + 1}</span>
                    <div><h3 className="text-2xl">{t}</h3><p className="mt-2 text-ivory/70">{d}</p></div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───── Reviews (honest: points to the live Google profile) ───── */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <Reveal className="grid items-center gap-8 rounded-[28px] border border-gold/40 bg-paper p-8 md:grid-cols-[auto_1fr_auto] md:p-12">
          <Quote className="text-gold" size={44} strokeWidth={1.2} aria-hidden="true" />
          <div>
            <p className="eyebrow">{h.rEyebrow}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{h.rH2}</h2>
            <p className="mt-3 max-w-xl text-ink-soft">{h.rText}</p>
          </div>
          <div className="flex flex-col gap-3">
            <a href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{h.rBtn}</a>
          </div>
        </Reveal>
      </section>

      <LocationBlock />
      <Faq />

      {/* ───── Final CTA ───── */}
      <section className="on-dark bg-ribbon text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:py-20">
          <div>
            <h2 className="text-4xl md:text-5xl">{h.cta}</h2>
            <p className="mt-3 text-white/85">{h.ctaSub}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to={l('/contact/#book')} className="btn bg-white text-ink hover:bg-ink hover:text-white">{h.request} <ArrowRight size={18} /></Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-white">{h.wa}</a>
          </div>
        </div>
      </section>
    </>
  )
}
