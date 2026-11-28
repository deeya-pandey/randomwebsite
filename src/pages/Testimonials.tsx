import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Quote, Star } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Reveal } from '../components/Reveal'
import { LocationBlock } from '../components/LocationBlock'
import { clinic } from '../data/clinic'
import { useI18n } from '../i18n'

export default function Testimonials() {
  const { c, l } = useI18n()
  const t = c.testimonials
  return (
    <>
      <Seo path="/testimonials/" />
      <section className="mx-auto grid max-w-6xl items-end gap-12 px-5 pb-16 pt-12 md:grid-cols-[1.25fr_.75fr] md:pb-24 md:pt-20">
        <Reveal>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-5xl md:text-[4.2rem]">{t.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{t.lead}</p>
        </Reveal>
        <Reveal delay={100} className="border-l border-gold/70 pl-6">
          <Quote size={40} strokeWidth={1.1} className="text-gold" aria-hidden="true" />
          <p className="mt-5 font-serif text-2xl leading-snug">{t.verified}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.verifiedText}</p>
        </Reveal>
      </section>

      <section className="border-y border-ink/10 bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <Reveal className="on-dark overflow-hidden rounded-[28px] bg-ink p-8 text-ivory md:p-12">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="flex gap-1 text-bronze-light" aria-label="Google reviews"><Star size={19} fill="currentColor" /><Star size={19} fill="currentColor" /><Star size={19} fill="currentColor" /><Star size={19} fill="currentColor" /><Star size={19} fill="currentColor" /></div>
                <p className="mt-6 max-w-2xl font-serif text-3xl leading-tight md:text-4xl">{t.verified}</p>
                <p className="mt-4 max-w-xl leading-relaxed text-ivory/70">{t.verifiedText}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <a href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn bg-ivory text-ink hover:bg-bronze-light"><ExternalLink size={18} />{t.read}</a>
                <a href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Star size={18} />{t.write}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-2 md:py-28">
        <Reveal>
          <p className="eyebrow">{t.noteEyebrow}</p>
          <h2 className="mt-4 max-w-md text-4xl">{t.noteH2}</h2>
          <p className="mt-5 max-w-md leading-relaxed text-ink-soft">{t.noteText}</p>
          <a href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 font-semibold text-bronze underline decoration-gold underline-offset-[6px] hover:text-ink">{t.write}<ExternalLink size={16} /></a>
        </Reveal>
        <Reveal delay={100} className="border-l border-gold/70 pl-7 md:pt-1">
          <p className="eyebrow">{t.careEyebrow}</p>
          <h2 className="mt-4 max-w-md text-4xl">{t.careH2}</h2>
          <p className="mt-5 max-w-md leading-relaxed text-ink-soft">{t.careText}</p>
          <Link to={l('/about/')} className="btn btn-primary mt-7">{t.careBtn}<ArrowRight size={18} /></Link>
        </Reveal>
      </section>
      <LocationBlock />
    </>
  )
}
