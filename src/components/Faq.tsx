import { Plus } from 'lucide-react'
import { useI18n } from '../i18n'
import { Reveal } from './Reveal'

export function Faq() {
  const { c } = useI18n()
  const f = c.faq
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
      <Reveal>
        <p className="eyebrow">{f.eyebrow}</p>
        <h2 className="mt-4 text-4xl md:text-5xl">{f.h2}</h2>
        <p className="mt-5 max-w-sm text-ink-soft">{f.lead}</p>
      </Reveal>
      <Reveal delay={100}>
        <div className="border-t border-ink/15">
          {f.items.map((it) => (
            <details key={it.q} className="faq group border-b border-ink/15">
              <summary className="flex items-center justify-between gap-6 py-5 font-serif text-xl hover:text-bronze md:text-2xl">
                {it.q}
                <Plus className="shrink-0 text-bronze" size={22} aria-hidden="true" />
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-ink-soft">{it.a}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
