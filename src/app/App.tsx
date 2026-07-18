import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageLayout } from '@/components/layout/PageLayout'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

const Styleguide = lazy(() => import('@/pages/Styleguide'))
const Home = lazy(() => import('@/pages/Home'))
const Portfolio = lazy(() => import('@/pages/Portfolio'))
const CaseStudy = lazy(() => import('@/pages/CaseStudy'))
const Services = lazy(() => import('@/pages/Services'))
const About = lazy(() => import('@/pages/About'))
const AgencyPartners = lazy(() => import('@/pages/AgencyPartners'))

/** Temporary stand-in while remaining pages are built out phase by phase. */
function ComingSoon({ name }: { name: string }) {
  return (
    <Section spacing="hero">
      <Container>
        <h1 className="font-display text-display-l font-medium text-ink">{name}</h1>
        <p className="mt-6 text-body-l text-ink-secondary">This page is being crafted.</p>
      </Container>
    </Section>
  )
}

function App() {
  return (
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
          <Route path="contact" element={<ComingSoon name="Contact" />} />
          <Route path="*" element={<ComingSoon name="Not Found" />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
