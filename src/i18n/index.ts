import { useLocation } from 'react-router'
import { copy, serviceNe } from './copy'
import { services as enServices } from '../data/clinic'

export type Lang = 'en' | 'ne'

export const langOf = (pathname: string): Lang => (pathname === '/ne' || pathname.startsWith('/ne/') ? 'ne' : 'en')

export function useI18n() {
  const { pathname } = useLocation()
  const lang = langOf(pathname)
  const l = (p: string) => (lang === 'ne' ? '/ne' + p : p) // '/contact/#book' -> '/ne/contact/#book'
  const services = enServices.map((s) => (lang === 'ne' ? { ...s, ...serviceNe[s.slug] } : s))
  const other = lang === 'ne' ? pathname.replace(/^\/ne/, '') || '/' : '/ne' + (pathname === '/' ? '/' : pathname)
  return { lang, c: copy[lang], l, services, otherPath: other }
}
