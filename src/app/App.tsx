import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Styleguide = lazy(() => import('@/pages/Styleguide'))

/**
 * Root route table. Public pages get wired in as they're built (Phase 4+).
 * /styleguide is an internal design-system reference, not public navigation.
 */
function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-canvas" />}>
      <Routes>
        <Route path="/styleguide" element={<Styleguide />} />
        <Route
          path="*"
          element={
            <main className="flex min-h-screen items-center justify-center bg-canvas px-6 text-center">
              <div>
                <h1 className="font-display text-heading-xl font-medium text-ink">FrameBonds</h1>
                <p className="mt-4 text-body text-ink-secondary">Foundation is wired. Pages come next.</p>
              </div>
            </main>
          }
        />
      </Routes>
    </Suspense>
  )
}

export default App
