import { Routes, Route } from 'react-router-dom'

/**
 * Root route table — placeholder only. Real page components get built
 * (and wired in here) starting in Phase 4+. This just proves the
 * foundation (routing, providers, Tailwind, fonts) actually works.
 */
function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <main className="flex min-h-screen items-center justify-center bg-bg-primary px-6 text-center">
            <div>
              <h1 className="font-display text-heading-xl text-text-primary">
                FrameBonds
              </h1>
              <p className="mt-4 font-body text-body text-text-secondary">
                Foundation is wired. Pages come next.
              </p>
            </div>
          </main>
        }
      />
    </Routes>
  )
}

export default App
