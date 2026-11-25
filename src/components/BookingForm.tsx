import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { clinic, waLink } from '../data/clinic'
import { useI18n } from '../i18n'

const KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined
type Status = 'idle' | 'sending' | 'done' | 'error'

/**
 * Submits through Web3Forms when VITE_WEB3FORMS_KEY is configured.
 * Without a key, it honestly hands the details to WhatsApp instead (nothing is "sent" silently).
 */
export function BookingForm() {
  const { c, services } = useI18n()
  const t = c.form
  const [status, setStatus] = useState<Status>('idle')
  const [errs, setErrs] = useState<Record<string, string>>({})

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const name = String(f.get('name') || '').trim()
    const phone = String(f.get('phone') || '').trim()
    const next: Record<string, string> = {}
    if (name.length < 2) next.name = t.eName
    if (!/^[+\d][\d\s-]{6,}$/.test(phone)) next.phone = t.ePhone
    setErrs(next)
    if (Object.keys(next).length) return
    if (f.get('botcheck')) return // honeypot

    const S = t.summary
    const summary = [
      `${S.title}`,
      `${S.name}: ${name}`,
      `${S.phone}: ${phone}`,
      `${S.date}: ${f.get('date') || S.any}`,
      `${S.time}: ${f.get('time') || S.any}`,
      `${S.reason}: ${f.get('reason') || S.none}`,
      f.get('message') ? `${S.message}: ${f.get('message')}` : '',
    ].filter(Boolean).join('\n')

    if (!KEY) {
      window.open(waLink(summary), '_blank', 'noopener')
      setStatus('done')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: KEY, subject: `${t.summary.title}: ${name}`, from_name: clinic.name, message: summary, name, phone }),
      })
      const data = await res.json()
      setStatus(data.success ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div role="status" className="rounded-2xl bg-sage p-8 text-ivory">
        <h3 className="text-2xl">{t.doneH}</h3>
        <p className="mt-3 text-ivory/85">{KEY ? t.doneKey : t.doneWa} {t.doneNote}</p>
      </div>
    )
  }

  const field = 'mt-1.5 w-full rounded-lg border border-ink/25 bg-white px-4 py-3 text-base focus:border-bronze'
  const label = 'block text-sm font-semibold'
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>{t.name}</label>
          <input id="name" name="name" required autoComplete="name" className={field} aria-invalid={!!errs.name} aria-describedby={errs.name ? 'name-e' : undefined} />
          {errs.name && <p id="name-e" className="mt-1 text-sm text-red-700">{errs.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={label}>{t.phone}</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} aria-invalid={!!errs.phone} aria-describedby={errs.phone ? 'phone-e' : undefined} />
          {errs.phone && <p id="phone-e" className="mt-1 text-sm text-red-700">{errs.phone}</p>}
        </div>
        <div>
          <label htmlFor="date" className={label}>{t.date}</label>
          <input id="date" name="date" type="date" className={field} />
        </div>
        <div>
          <label htmlFor="time" className={label}>{t.time}</label>
          <select id="time" name="time" className={field} defaultValue="">
            <option value="">{t.anyTime}</option>
            {t.times.map((x) => <option key={x}>{x}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="reason" className={label}>{t.reason}</label>
        <select id="reason" name="reason" className={field} defaultValue="">
          <option value="">{t.general}</option>
          {services.map((s) => <option key={s.slug}>{s.name}</option>)}
          <option>{t.emergency}</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className={label}>{t.msg} <span className="font-normal text-ink-soft">{t.optional}</span></label>
        <textarea id="message" name="message" rows={3} className={field} />
        <p className="mt-1 text-xs text-ink-soft">{t.privacy}</p>
      </div>
      {status === 'error' && <p role="alert" className="text-sm text-red-700">{t.error}</p>}
      <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full sm:w-auto"><Send size={18} />{status === 'sending' ? t.sending : KEY ? t.send : t.sendWa}</button>
      <p className="text-sm text-ink-soft">{t.disclaimer}</p>
    </form>
  )
}
