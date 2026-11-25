import { Phone, MessageCircle, MapPin, Clock, Navigation } from 'lucide-react'
import { clinic, waLink } from '../data/clinic'
import { InstagramIcon } from '../components/Logo'
import { BookingForm } from '../components/BookingForm'
import { Seo } from '../components/Seo'
import { useI18n } from '../i18n'

export default function Contact() {
  const { c } = useI18n()
  const t = c.contact
  return (
    <>
      <Seo path="/contact/" />
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-12 md:pt-20">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-5xl md:text-[4.2rem]">{t.h1}</h1>
        <p className="ribbon mt-7"><span>{c.home.ribbon}</span><span aria-hidden="true" /></p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-24 md:grid-cols-[1.25fr_1fr] md:gap-14">
        <div id="book" className="scroll-mt-28 rounded-[28px] border border-ink/10 bg-paper p-6 shadow-[0_30px_80px_-40px_rgba(23,21,19,.35)] sm:p-10">
          <h2 className="text-3xl md:text-4xl">{t.formH}</h2>
          <p className="mb-8 mt-2 text-ink-soft">{t.formSub}</p>
          <BookingForm />
        </div>
        <aside className="space-y-6">
          <div className="on-dark rounded-[28px] bg-ink p-7 text-ivory">
            <p className="eyebrow">{c.footer.callMsg}</p>
            <div className="mt-5 space-y-3">
              <a href={waLink(c.waHello)} target="_blank" rel="noopener noreferrer" className="btn btn-wa w-full"><MessageCircle size={18} />{t.wa}</a>
              {clinic.phones.map((p) => (<a key={p.tel} href={`tel:${p.tel}`} className="btn btn-ghost w-full"><Phone size={18} />{p.display}</a>))}
            </div>
          </div>
          <ul className="space-y-5 rounded-[28px] border border-ink/10 bg-paper p-7 text-sm">
            <li className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-bronze" size={20} aria-hidden="true" /><span><strong className="block text-base">{c.address}</strong><span className="text-ink-soft">{c.plus} {clinic.address.plusCode}</span></span></li>
            <li className="flex gap-3"><Clock className="mt-0.5 shrink-0 text-bronze" size={20} aria-hidden="true" /><span>{c.hoursNote}</span></li>
            <li className="flex gap-3"><InstagramIcon className="mt-0.5 shrink-0 text-bronze" size={20} /><a href={clinic.social.instagram} target="_blank" rel="noopener noreferrer" className="underline decoration-gold underline-offset-4">@nova.dentalcare555</a></li>
          </ul>
          <div className="overflow-hidden rounded-[28px] border border-ink/10 bg-paper">
            <iframe title={t.mapTitle} src={clinic.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-72 w-full" />
            <div className="flex flex-wrap gap-x-6 gap-y-2 p-5 text-sm font-semibold">
              <a href={clinic.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-bronze hover:text-ink"><Navigation size={16} />{c.location.directions}</a>
              <a href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-bronze underline decoration-gold underline-offset-4 hover:text-ink">{t.openMaps}</a>
            </div>
          </div>
        </aside>
      </section>
    </>
  )
}
