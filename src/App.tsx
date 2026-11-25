import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <Layout>
      <ScrollManager />
      <Routes>
        {['', '/ne'].map((p) => [
          <Route key={p + 'h'} path={p || '/'} element={<Home />} />,
          <Route key={p + 's'} path={`${p}/services/*`} element={<Services />} />,
          <Route key={p + 'a'} path={`${p}/about/*`} element={<About />} />,
          <Route key={p + 'c'} path={`${p}/contact/*`} element={<Contact />} />,
        ])}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
