import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
export { routes } from './data/seo'
export { jsonLd } from './data/seo'

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
}
export { copy } from './i18n/copy'
