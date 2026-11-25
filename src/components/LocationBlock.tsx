import { MapPin, Clock, Phone, MessageCircle, Navigation } from 'lucide-react'
import { clinic, waLink } from '../data/clinic'
import { useI18n } from '../i18n'
import { Reveal } from './Reveal'

export function LocationBlock() {
  const { c } = useI18n()
  const t = c.location
  return (
    <section className="bg-sand">
      <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-5 py-20 md:grid-cols-[1fr_1.15fr] md:py-28">
        <Reveal className="flex flex-col">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="mt-4 text-4xl md:text-5xl">{t.h2}</h2>
          <p className="mt-4 max-w-md text-ink-soft">{t.text}</p>
          <dl className="mt-10 space-y-6">
            <div className="flex gap-4">
              <dt><MapPin className="mt-1 text-bronze" size={20} aria-label={t.addressH} /></dt>
              <dd><strong className="block font-semibold">{c.address}</strong><span className="text-sm text-ink-soft">{c.plus} {clinic.address.plusCode}</span></dd>
            </div>
            <div className="flex gap-4">
              <dt><Clock className="mt-1 text-bronze" size={20} aria-label={t.hoursH} /></dt>
              <dd className="max-w-sm">{c.hoursNote}</dd>
            </div>
            <div className="flex gap-4">
              <dt><Phone className="mt-1 text-bronze" size={20} aria-label={t.phonesH} /></dt>
              <dd className="flex flex-wrap gap-x-4 gap-y-1">{clinic.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`} className="font-semibold underline decoration-gold underline-offset-4 hover:text-bronze">{p.display}</a>)}</dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={clinic.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><Navigation size={18} />{t.directions}</a>
            <a href={waLink(c.waHello)} target="_blank" rel="noopener noreferrer" className="btn btn-wa"><MessageCircle size={18} />WhatsApp</a>
          </div>
        </Reveal>
        <Reveal delay={120} className="min-h-[360px] overflow-hidden rounded-[28px] border border-ink/10 bg-paper">
          <iframe title={c.contact.mapTitle} src={clinic.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[360px] w-full" />
        </Reveal>
      </div>
    </section>
  )
}
