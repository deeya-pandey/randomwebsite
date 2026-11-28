import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PhotoSlot } from '../components/PhotoSlot'
import { Photo } from '../components/Photo'
import { Seo } from '../components/Seo'
import { Reveal } from '../components/Reveal'
import { Logo } from '../components/Logo'
import { LocationBlock } from '../components/LocationBlock'
import { useI18n } from '../i18n'

export default function About() {
  const { c, l } = useI18n()
  const t = c.about
  return (
    <>
      <Seo path="/about/" />
      <section className="mx-auto grid max-w-6xl items-center gap-16 px-5 pb-20 pt-12 md:grid-cols-[1.15fr_1fr] md:pt-20">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="mt-5 text-5xl md:text-[4.2rem]">{t.h1}</h1>
          <p className="mt-7 text-lg leading-relaxed text-ink-soft">{t.p1(t.legal)}</p>
          <p className="mt-4 leading-relaxed text-ink-soft">{t.p2}</p>
          <p className="ribbon mt-8"><span>{c.home.ribbon}</span><span aria-hidden="true" /></p>
        </div>
        <div className="relative mx-auto w-full max-w-[420px]">
          <div aria-hidden="true" className="arch absolute inset-0 -translate-x-4 -translate-y-4 border border-gold/70" />
          <Photo name="care" widths={[480, 853]} width={853} height={1067} alt={t.roomAlt} priority sizes="(min-width: 768px) 420px, 92vw" className="arch relative aspect-[4/5] w-full" />
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow">{t.vEyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">{t.vH2}</h2>
          </Reveal>
          <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {t.values.map(([h, d], i) => (
              <li key={h}>
                <Reveal delay={i * 90}>
                  <span className="font-serif text-6xl leading-none text-gold">{i + 1}</span>
                  <div className="rule mt-5" />
                  <h3 className="mt-5 text-2xl">{h}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{d}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="on-dark bg-ink text-ivory">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1fr_1.4fr] md:py-24">
          <Reveal className="flex items-center gap-6">
            <PhotoSlot label={t.tAlt} tone="sage" className="aspect-square w-40 shrink-0 rounded-full md:w-52" />
            <Logo light className="hidden h-20 w-auto opacity-80 lg:block" />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">{t.tEyebrow}</p>
            <h2 className="mt-4 text-4xl">{t.tH2}</h2>
            <p className="mt-4 max-w-xl text-ivory/75">{t.tText}</p>
            <Link to={l('/team/')} className="btn btn-ghost mt-7">{c.nav.team} <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      <LocationBlock />
    </>
  )
}
