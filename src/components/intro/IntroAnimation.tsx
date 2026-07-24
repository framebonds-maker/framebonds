import { useEffect, useRef } from 'react'

/**
 * Full-screen pre-loader — plays once before the site reveals itself.
 * Ported from a Claude Design prototype into a plain React component (the
 * original was built against Design's own preview framework, not usable
 * as-is). Physics, timing and markup are kept faithful to that prototype;
 * only the reveal target changed — it now calls `onComplete` instead of
 * animating a hardcoded mock homepage underneath it.
 */
type Negative = {
  el: HTMLDivElement
  pos: HTMLDivElement
  t: number
  frac: { x: number; y: number; rot: number; scale: number }
  lock: { cx: number; cy: number }
  sc: { cx: number; cy: number; rot: number; scale: number }
  v: number
  vel: number
  latched: boolean
}

type Dust = { x: number; y: number; r: number; vx: number; vy: number; a: number }

const ACCENT = '#c9a05c'
const CANVAS_BG = '#0d0e10'
const INK = '#f4f3f0'
const TAGLINE = 'We shape footage into story.'
const NEGATIVE_COUNT = 15
const GRAIN_AMOUNT = 0.05

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const filmRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const dustCanvasRef = useRef<HTMLCanvasElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const playheadRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const tcRef = useRef<HTMLSpanElement>(null)
  const tagRef = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLSpanElement>(null)
  const handleRef = useRef<HTMLDivElement>(null)
  const skipRef = useRef<HTMLDivElement>(null)
  const grainRef = useRef<SVGSVGElement>(null)

  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    const film = filmRef.current
    const intro = introRef.current
    const dcanvas = dustCanvasRef.current
    const track = trackRef.current
    if (!film || !intro || !dcanvas || !track) return

    const dctx = dcanvas.getContext('2d')
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v)
    const rand = (a: number, b: number) => a + Math.random() * (b - a)

    let W = 0
    let H = 0
    let fw = 0
    let fh = 0
    const gap = 3
    let p = 0
    let done = false
    let interacted = false
    let raf = 0
    let last = performance.now()
    let dust: Dust[] = []
    const negs: Negative[] = []

    function buildNegatives() {
      film!.innerHTML = ''
      negs.length = 0
      for (let i = 0; i < NEGATIVE_COUNT; i++) {
        const h = Math.round(18 + i * (320 / NEGATIVE_COUNT)) % 360
        const el = document.createElement('div')
        el.style.cssText =
          'position:absolute;left:0;top:0;border-radius:2px;overflow:hidden;will-change:transform,opacity;box-shadow:0 12px 34px rgba(0,0,0,0.55);'
        const base = 'position:absolute;inset:0;'
        const neg = document.createElement('div')
        neg.style.cssText = base + `background:linear-gradient(140deg,hsl(${h} 8% 26%),hsl(${h} 6% 7%));`
        const pos = document.createElement('div')
        pos.style.cssText =
          base + `opacity:0;background:linear-gradient(140deg,hsl(${h} 44% 54%),hsl(${(h + 42) % 360} 46% 26%));`
        const vig = document.createElement('div')
        vig.style.cssText = base + 'background:radial-gradient(130% 120% at 50% 32%,transparent 42%,rgba(0,0,0,0.6));'
        const spT = document.createElement('div')
        spT.style.cssText =
          'position:absolute;left:2px;right:2px;top:2px;height:13%;background:repeating-linear-gradient(90deg,rgba(245,243,239,0.4) 0 3px,transparent 3px 9px);opacity:0.5;'
        const spB = spT.cloneNode() as HTMLDivElement
        spB.style.top = 'auto'
        spB.style.bottom = '2px'
        el.append(neg, pos, vig, spT, spB)
        film!.append(el)
        negs.push({
          el,
          pos,
          t: (i + 0.6) / NEGATIVE_COUNT,
          frac: { x: rand(0.06, 0.9), y: rand(0.1, 0.62), rot: rand(-24, 24), scale: rand(0.75, 1.35) },
          lock: { cx: 0, cy: 0 },
          sc: { cx: 0, cy: 0, rot: 0, scale: 1 },
          v: 0,
          vel: 0,
          latched: false,
        })
      }
    }

    function applyNeg(n: Negative) {
      const e = n.v
      const ec = clamp(e, 0, 1)
      const cx = n.sc.cx + (n.lock.cx - n.sc.cx) * e
      const cy = n.sc.cy + (n.lock.cy - n.sc.cy) * e
      const rot = n.sc.rot * (1 - ec)
      const scale = n.sc.scale + (1 - n.sc.scale) * e
      n.el.style.transform = `translate(${cx - fw / 2}px,${cy - fh / 2}px) rotate(${rot}deg) scale(${scale})`
      n.el.style.opacity = (0.4 + 0.6 * ec).toFixed(3)
      n.pos.style.opacity = ec.toFixed(3)
    }

    function layout() {
      W = rootRef.current!.clientWidth
      H = rootRef.current!.clientHeight
      let f = Math.min(88, (W * 0.9 - (NEGATIVE_COUNT - 1) * gap) / NEGATIVE_COUNT)
      f = Math.max(40, f)
      fw = f
      fh = Math.round(f / 1.5)
      const stripW = NEGATIVE_COUNT * fw + (NEGATIVE_COUNT - 1) * gap
      const stripLeft = (W - stripW) / 2
      const cy = H * 0.4
      negs.forEach((n, i) => {
        n.el.style.width = fw + 'px'
        n.el.style.height = fh + 'px'
        n.lock = { cx: stripLeft + i * (fw + gap) + fw / 2, cy }
        n.sc = { cx: n.frac.x * W, cy: n.frac.y * H, rot: n.frac.rot, scale: n.frac.scale }
        applyNeg(n)
      })
      resizeDust()
    }

    function setupDust() {
      const count = Math.min(70, Math.round((rootRef.current!.clientWidth * rootRef.current!.clientHeight) / 26000))
      dust = []
      for (let i = 0; i < count; i++) {
        dust.push({
          x: Math.random(),
          y: Math.random(),
          r: rand(0.6, 1.9),
          vx: reduced ? 0 : rand(-0.14, 0.14),
          vy: reduced ? 0 : rand(-0.09, 0.09),
          a: rand(0.05, 0.2),
        })
      }
    }

    function resizeDust() {
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      dcanvas!.width = W * dpr
      dcanvas!.height = H * dpr
      dctx?.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function drawDust(dt: number) {
      if (!dctx) return
      dctx.clearRect(0, 0, W, H)
      dctx.fillStyle = INK
      const f = dt * 60
      for (const d of dust) {
        d.x += (d.vx * f) / W
        d.y += (d.vy * f) / H
        if (d.x < -0.02) d.x = 1.02
        if (d.x > 1.02) d.x = -0.02
        if (d.y < -0.02) d.y = 1.02
        if (d.y > 1.02) d.y = -0.02
        dctx.globalAlpha = d.a
        dctx.beginPath()
        dctx.arc(d.x * W, d.y * H, d.r, 0, 6.29)
        dctx.fill()
      }
      dctx.globalAlpha = 1
    }

    function updateScrub() {
      const pc = (p * 100).toFixed(3) + '%'
      if (playheadRef.current) playheadRef.current.style.left = pc
      if (fillRef.current) fillRef.current.style.width = pc
      const fr = Math.round(p * 240)
      const ss = Math.floor(fr / 24)
      const ff = fr % 24
      if (tcRef.current) tcRef.current.textContent = `00:00:${String(ss).padStart(2, '0')}:${String(ff).padStart(2, '0')}`
    }

    function hideHint() {
      if (hintRef.current) hintRef.current.style.opacity = '0'
      if (handleRef.current) handleRef.current.style.animation = 'none'
    }

    function finish() {
      if (done) return
      done = true
      film!.style.transition = 'transform .5s cubic-bezier(.34,1.4,.5,1)'
      film!.style.transform = 'scale(1.028)'
      setTimeout(() => {
        film!.style.transform = 'scale(1)'
      }, 260)
      const tag = tagRef.current
      setTimeout(() => {
        if (tag) {
          tag.style.opacity = '1'
          tag.style.transform = 'translateY(0)'
        }
      }, 400)
      setTimeout(() => swing(), 1550)
    }

    function swing() {
      intro!.style.transition = 'transform .78s cubic-bezier(.7,0,.25,1),opacity .78s ease'
      intro!.style.transform = 'translateY(-120%) rotate(-5deg)'
      intro!.style.opacity = '0.35'
      setTimeout(() => {
        onCompleteRef.current()
      }, 820)
    }

    function skip() {
      if (done) return
      done = true
      hideHint()
      swing()
    }

    function assembleInstant() {
      hideHint()
      negs.forEach((n) => {
        n.latched = true
        n.v = 1
        n.vel = 0
        applyNeg(n)
      })
      p = 1
      updateScrub()
      if (grainRef.current) grainRef.current.style.animation = 'none'
      setTimeout(() => {
        if (tagRef.current) {
          tagRef.current.style.opacity = '1'
          tagRef.current.style.transform = 'translateY(0)'
        }
      }, 600)
      setTimeout(() => {
        done = true
        swing()
      }, 1900)
    }

    function loop(now: number) {
      let dt = (now - last) / 1000
      last = now
      if (dt > 0.05) dt = 0.05
      const steps = Math.max(1, Math.ceil(dt / 0.008))
      const h = dt / steps
      const stiff = 120
      const damp = 13
      let allLatched = true
      let settled = true
      for (const n of negs) {
        n.latched = p >= n.t
        if (!n.latched) allLatched = false
        const target = n.latched ? 1 : 0
        for (let s = 0; s < steps; s++) {
          const a = stiff * (target - n.v) - damp * n.vel
          n.vel += a * h
          n.v += n.vel * h
        }
        if (Math.abs(n.v - 1) > 0.03 || Math.abs(n.vel) > 0.05) settled = false
        applyNeg(n)
      }
      drawDust(dt)
      if (!done && !reduced && interacted && p >= 0.992 && allLatched && settled) finish()
      raf = requestAnimationFrame(loop)
    }

    let dragging = false
    function setP(clientX: number) {
      const r = track!.getBoundingClientRect()
      p = clamp((clientX - r.left) / r.width, 0, 1)
      updateScrub()
    }
    function onPointerDown(e: PointerEvent) {
      if (done) return
      dragging = true
      interacted = true
      hideHint()
      track!.style.cursor = 'grabbing'
      try {
        track!.setPointerCapture(e.pointerId)
      } catch {
        /* noop */
      }
      setP(e.clientX)
      e.preventDefault()
    }
    function onPointerMove(e: PointerEvent) {
      if (dragging) setP(e.clientX)
    }
    function onPointerUp() {
      dragging = false
      track!.style.cursor = 'grab'
    }
    function onKeyDown(e: KeyboardEvent) {
      if (done) return
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        interacted = true
        hideHint()
        p = clamp(p + (e.key === 'ArrowRight' ? 0.03 : -0.03), 0, 1)
        updateScrub()
      }
    }
    function onSkipClick() {
      skip()
    }
    function onResize() {
      layout()
    }

    buildNegatives()
    setupDust()
    layout()
    updateScrub()

    track.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    skipRef.current?.addEventListener('click', onSkipClick)

    const skipTimer = setTimeout(() => {
      if (skipRef.current) skipRef.current.style.opacity = '0.5'
    }, 1500)

    last = performance.now()
    raf = requestAnimationFrame(loop)

    if (reduced) assembleInstant()

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(skipTimer)
      track.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
      skipRef.current?.removeEventListener('click', onSkipClick)
    }
  }, [])

  return (
    <div
      ref={rootRef}
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        background: CANVAS_BG,
        color: INK,
        fontFamily: 'var(--font-body)',
        zIndex: 9999,
      }}
    >
      <style>{`
        @keyframes fbRecBlink{0%,48%{opacity:1}52%,100%{opacity:0.12}}
        @keyframes fbGrainShift{0%{transform:translate(0,0)}20%{transform:translate(-2%,1%)}40%{transform:translate(1.5%,-1.5%)}60%{transform:translate(-1%,2%)}80%{transform:translate(2%,-1%)}100%{transform:translate(0,0)}}
        @keyframes fbHandleGlow{0%,100%{box-shadow:0 0 10px 1px rgba(201,160,92,0.35)}50%{box-shadow:0 0 0 6px rgba(201,160,92,0.08),0 0 22px 5px rgba(201,160,92,0.65)}}
        @keyframes fbHint{0%,100%{opacity:0.32}50%{opacity:0.72}}
        .fb-skip:hover{color:${INK} !important}
      `}</style>

      <div ref={introRef} style={{ position: 'absolute', inset: 0, overflow: 'hidden', transformOrigin: '50% -30%' }}>
        <canvas
          ref={dustCanvasRef}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 12, pointerEvents: 'none' }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 15,
            fontSize: 11,
            letterSpacing: '0.22em',
            color: 'rgba(244,243,240,0.28)',
            textTransform: 'uppercase',
            fontFamily: 'ui-monospace, "SF Mono", monospace',
          }}
        >
          <div style={{ position: 'absolute', top: '3vh', left: '5vw', display: 'flex', alignItems: 'center', gap: 9 }}>
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: '50%',
                background: ACCENT,
                display: 'inline-block',
                animation: 'fbRecBlink 1.5s steps(1) infinite',
              }}
            />
            REC
          </div>
          <div style={{ position: 'absolute', top: '3vh', right: '5vw' }}>Roll A · 24 fps</div>
          <div style={{ position: 'absolute', bottom: '24vh', left: '5vw' }}>Scene 01 / Take 03</div>
          <div style={{ position: 'absolute', bottom: '24vh', right: '5vw' }}>Dailies · 2.39:1</div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '2.2vw',
              width: 6,
              background: 'repeating-linear-gradient(0deg,rgba(244,243,240,0.16) 0 1px,transparent 1px 22px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: '2vh',
              height: 6,
              background: 'repeating-linear-gradient(90deg,rgba(244,243,240,0.10) 0 1px,transparent 1px 40px)',
            }}
          />
        </div>

        <div ref={filmRef} style={{ position: 'absolute', inset: 0, zIndex: 14 }} />

        <div
          ref={tagRef}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '52%',
            textAlign: 'center',
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: 'clamp(30px,6vw,84px)',
            letterSpacing: '0.01em',
            lineHeight: 1.05,
            opacity: 0,
            transform: 'translateY(16px)',
            transition: 'opacity .9s ease, transform .9s cubic-bezier(.2,.7,.2,1)',
            zIndex: 25,
            pointerEvents: 'none',
            padding: '0 6vw',
          }}
        >
          {TAGLINE}
        </div>

        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: '6vh',
            padding: '0 6vw',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            zIndex: 20,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              fontSize: 12,
              letterSpacing: '0.16em',
              color: 'rgba(244,243,240,0.5)',
              textTransform: 'uppercase',
              gap: 12,
              fontFamily: 'ui-monospace, "SF Mono", monospace',
            }}
          >
            <span>
              TC&nbsp;&nbsp;
              <span ref={tcRef} style={{ color: INK, fontSize: 20, letterSpacing: '0.06em' }}>
                00:00:00:00
              </span>
            </span>
            <span
              ref={hintRef}
              style={{ animation: 'fbHint 2.4s ease-in-out infinite', textAlign: 'center' }}
            >
              drag to assemble the reel
            </span>
            <span style={{ textAlign: 'right' }}>Master · 24 fps</span>
          </div>
          <div ref={trackRef} style={{ position: 'relative', height: 36, cursor: 'grab', touchAction: 'none' }}>
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: '50%',
                height: 2,
                transform: 'translateY(-50%)',
                background: 'rgba(244,243,240,0.14)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: '50%',
                height: 14,
                transform: 'translateY(-50%)',
                background: 'repeating-linear-gradient(90deg,rgba(244,243,240,0.20) 0 1px,transparent 1px 30px)',
              }}
            />
            <div
              ref={fillRef}
              style={{ position: 'absolute', left: 0, top: '50%', height: 2, width: 0, transform: 'translateY(-50%)', background: ACCENT }}
            />
            <div
              ref={playheadRef}
              style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: ACCENT, transform: 'translateX(-1px)' }}
            >
              <div
                ref={handleRef}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: 16,
                  height: 24,
                  transform: 'translate(-50%,-50%)',
                  background: ACCENT,
                  borderRadius: 3,
                  animation: 'fbHandleGlow 2s ease-in-out infinite',
                }}
              />
            </div>
          </div>
        </div>

        <div
          ref={skipRef}
          className="fb-skip"
          style={{
            position: 'absolute',
            right: '5vw',
            bottom: '2.4vh',
            fontSize: 13,
            letterSpacing: '0.14em',
            color: 'rgba(244,243,240,0.4)',
            cursor: 'pointer',
            opacity: 0,
            transition: 'opacity .6s ease, color .3s',
            zIndex: 30,
          }}
        >
          Skip intro →
        </div>

        <svg
          ref={grainRef}
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 40,
            pointerEvents: 'none',
            opacity: GRAIN_AMOUNT,
            mixBlendMode: 'overlay',
            animation: 'fbGrainShift 0.8s steps(1) infinite',
          }}
        >
          <filter id="fb-grain-f">
            <feTurbulence type="fractalNoise" baseFrequency={0.82} numOctaves={2} stitchTiles="stitch" />
          </filter>
          <rect width="140%" height="140%" x="-20%" y="-20%" filter="url(#fb-grain-f)" />
        </svg>
      </div>
    </div>
  )
}
