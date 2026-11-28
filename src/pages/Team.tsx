import { MessageCircle, Stethoscope, HeartHandshake, UserRound } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Reveal } from '../components/Reveal'
import { LocationBlock } from '../components/LocationBlock'
import { waLink } from '../data/clinic'
import { useI18n } from '../i18n'

const icons = [Stethoscope, HeartHandshake, UserRound]

export default function Team() {
  const { c } = useI18n()
  const t = c.team
  return (
    <>
      <Seo path="/team/" />
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-12 md:pb-24 md:pt-20">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="mt-5 text-5xl md:text-[4.2rem]">{t.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{t.lead}</p>
        </Reveal>
      </section>

      <section className="border-y border-ink/10 bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <Reveal className="flex flex-col gap-4 border-l-2 border-gold bg-sand/60 px-5 py-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-serif text-2xl">{t.status}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">{t.statusText}</p>
            </div>
            <span className="shrink-0 font-serif text-5xl text-gold" aria-hidden="true">01</span>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.cards.map((title, i) => {
              const Icon = icons[i]
              return (
                <Reveal key={title} delay={i * 90} className="group border border-ink/10 bg-ivory p-7 transition-colors hover:border-gold">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 bg-paper text-bronze"><Icon size={25} strokeWidth={1.4} /></div>
                  <span className="mt-10 block font-serif text-3xl leading-tight">{title}</span>
                  <div className="rule mt-5" />
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">{t.cardText}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="on-dark bg-ink text-ivory">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[.8fr_1.2fr] md:items-center md:py-24">
          <Reveal><span className="font-serif text-8xl text-bronze-light">?</span></Reveal>
          <Reveal delay={90}>
            <p className="eyebrow">{t.askEyebrow}</p>
            <h2 className="mt-4 max-w-xl text-4xl md:text-5xl">{t.askH2}</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-ivory/75">{t.askText}</p>
            <a href={waLink(c.waHello)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-7"><MessageCircle size={18} />{t.askBtn}</a>
          </Reveal>
        </div>
      </section>
      <LocationBlock />
    </>
  )
}
