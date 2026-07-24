import { lazy, Suspense, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageLayout } from '@/components/layout/PageLayout'
import { IntroAnimation } from '@/components/intro/IntroAnimation'

const Styleguide = lazy(() => import('@/pages/Styleguide'))
const Home = lazy(() => import('@/pages/Home'))
const Portfolio = lazy(() => import('@/pages/Portfolio'))
const CaseStudy = lazy(() => import('@/pages/CaseStudy'))
const Services = lazy(() => import('@/pages/Services'))
const About = lazy(() => import('@/pages/About'))
const AgencyPartners = lazy(() => import('@/pages/AgencyPartners'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const INTRO_SEEN_KEY = 'fb-intro-seen'

function App() {
  const [introDone, setIntroDone] = useState(() => sessionStorage.getItem(INTRO_SEEN_KEY) === '1')

  function handleIntroComplete() {
    sessionStorage.setItem(INTRO_SEEN_KEY, '1')
    setIntroDone(true)
  }

  return (
    <>
      {!introDone && <IntroAnimation onComplete={handleIntroComplete} />}
      <Suspense fallback={<div className="min-h-screen bg-canvas" />}>
        <Routes>
          <Route path="/styleguide" element={<Styleguide />} />
          <Route element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="work" element={<Portfolio />} />
            <Route path="work/:slug" element={<CaseStudy />} />
            <Route path="services" element={<Services />} />
            <Route path="agency-partners" element={<AgencyPartners />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
