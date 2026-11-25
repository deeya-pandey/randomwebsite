import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
export default function NotFound() {
  const { c, l } = useI18n()
  return (
    <section className="mx-auto max-w-3xl px-5 py-32 text-center">
      <h1 className="text-5xl">{c.notFound.h1}</h1>
      <p className="mt-4 text-ink-soft">{c.notFound.text}</p>
      <Link to={l('/')} className="btn btn-primary mt-8">{c.notFound.back}</Link>
    </section>
  )
}
