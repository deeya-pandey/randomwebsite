import { useEffect } from 'react'
import { routes } from '../data/seo'
import { useI18n } from '../i18n'

export function Seo({ path }: { path: string }) {
  const { lang, l } = useI18n()
  useEffect(() => {
    const m = routes.find((r) => r.path === l(path))
    document.documentElement.lang = lang
    if (!m) return
    document.title = m.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', m.description)
  }, [path, lang])
  return null
}
