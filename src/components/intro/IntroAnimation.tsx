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
  phase: number
  magX: number
  magY: number
}

// Words no longer float as separate scattered pieces — each rests at a
// fixed point along the reel (its t-position along the strip) and comes
// into focus with a blur/fade as the playhead reaches it, like a rack
// focus landing on the frame it belongs to. Reversing the scrub reverses
// the same blur/fade automatically, since it's driven by the same `v`.
type Word = {
  el: HTMLSpanElement
  t: number
  anchorX: number
  anchorY: number
  width: number
  height: number
  v: number
  vel: number
  latched: boolean
}

type Dust = { x: number; y: number; r: number; vx: number; vy: number; a: number }

const ACCENT = '#c9a05c'
const CANVAS_BG = '#0d0e10'
const INK = '#f4f3f0'
const SENTENCES = [
  "Every story starts with one frame. Let's find yours.",
  "There's more behind every reel. Come see how it's made.",
  "Some stories are worth staying for. This is one of them.",
]
const NEGATIVE_COUNT = 15
const GRAIN_AMOUNT = 0.05

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const sentenceRef = useRef(SENTENCES[Math.floor(Math.random() * SENTENCES.length)])
  const rootRef = useRef<HTMLDivElement>(null)
  const filmRef = useRef<HTMLDivElement>(null)
  const wordsRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const dustCanvasRef = useRef<HTMLCanvasElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const playheadRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const tcRef = useRef<HTMLSpanElement>(null)
  const hintRef = useRef<HTMLSpanElement>(null)
  const handleRef = useRef<HTMLDivElement>(null)
  const skipRef = useRef<HTMLDivElement>(null)
  const fpsRef = useRef<HTMLSpanElement>(null)
  const grainRef = useRef<SVGSVGElement>(null)

  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    const film = filmRef.current
    const wordsLayer = wordsRef.current
    const intro = introRef.current
    const dcanvas = dustCanvasRef.current
    const track = trackRef.current
    if (!film || !wordsLayer || !intro || !dcanvas || !track) return

    const dctx = dcanvas.getContext('2d')
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    // Mobile-only branch — desktop keeps its original count/floor untouched.
    // Desktop's 40px floor never binds (natural width sits well above it),
    // but on a phone-width viewport it forces 15 frames into a strip wider
    // than the screen itself, which is what was overflowing.
    const isMobile = matchMedia('(max-width: 767px)').matches
    const negativeCount = isMobile ? 8 : NEGATIVE_COUNT
    const minFrameWidth = isMobile ? 20 : 40
    const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v)
    const rand = (a: number, b: number) => a + Math.random() * (b - a)

    let W = 0
    let H = 0
    let fw = 0
    let fh = 0
    let frameNow = performance.now()
    let wordShrink = 1
    let mouseX = -9999
    let mouseY = -9999
    const gap = isMobile ? 2 : 3
    let p = 0
    let done = false
    let interacted = false
    let raf = 0
    let last = performance.now()
    let dust: Dust[] = []
    const negs: Negative[] = []
    const words: Word[] = []
    const sentence = sentenceRef.current

    function buildNegatives() {
      film!.innerHTML = ''
      negs.length = 0
      // Evenly-spaced grid with jitter inside each cell, instead of pure
      // randomness — pure random scatter clumps pieces together and leaves
      // empty gaps; a jittered grid spreads them out properly while still
      // looking loose and unplanned.
      const cols = Math.max(1, Math.ceil(Math.sqrt(negativeCount * 1.7)))
      const rows = Math.max(1, Math.ceil(negativeCount / cols))
      const order = Array.from({ length: negativeCount }, (_, i) => i)
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[order[i], order[j]] = [order[j], order[i]]
      }
      for (let i = 0; i < negativeCount; i++) {
        const h = Math.round(18 + i * (320 / negativeCount)) % 360
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

        const cell = order[i]
        const col = cell % cols
        const row = Math.floor(cell / cols)
        const cellW = 1 / cols
        const cellH = 0.56 / rows
        const jx = rand(-0.32, 0.32) * cellW
        const jy = rand(-0.32, 0.32) * cellH

        negs.push({
          el,
          pos,
          t: (i + 0.6) / negativeCount,
          frac: {
            x: clamp((col + 0.5) * cellW + jx, 0.04, 0.96),
            y: clamp(0.08 + (row + 0.5) * cellH + jy, 0.06, 0.66),
            rot: rand(-24, 24),
            scale: rand(0.75, 1.35),
          },
          lock: { cx: 0, cy: 0 },
          sc: { cx: 0, cy: 0, rot: 0, scale: 1 },
          v: 0,
          vel: 0,
          latched: false,
          phase: rand(0, Math.PI * 2),
          magX: 0,
          magY: 0,
        })
      }
    }

    function buildWords() {
      wordsLayer!.innerHTML = ''
      words.length = 0
      const tokens = sentence.split(' ')
      tokens.forEach((token, i) => {
        const el = document.createElement('span')
        el.textContent = token
        el.style.cssText =
          'position:absolute;left:0;top:0;white-space:nowrap;will-change:transform,opacity,filter;' +
          `font-family:var(--font-display);font-weight:500;font-size:${isMobile ? 20 : 30}px;color:${INK};` +
          'text-shadow:0 2px 14px rgba(0,0,0,0.9),0 0 34px rgba(0,0,0,0.7);'
        wordsLayer!.append(el)
        words.push({
          el,
          t: (i + 0.5) / tokens.length,
          anchorX: 0,
          anchorY: 0,
          width: 0,
          height: 0,
          v: 0,
          vel: 0,
          latched: false,
        })
      })
    }

    // Gentle idle drift while a piece is still loose — settles to zero as
    // it locks into place (scaled by 1-ec), so nothing ever looks frozen
    // before the visitor starts scrubbing, but locked pieces hold still.
    function drift(phase: number, ec: number, ampX: number, ampY: number) {
      if (reduced) return { dx: 0, dy: 0 }
      const settle = 1 - ec
      return {
        dx: Math.sin(frameNow * 0.0006 + phase) * ampX * settle,
        dy: Math.cos(frameNow * 0.0005 + phase * 1.3) * ampY * settle,
      }
    }

    // A localized magnetic pull — only pieces within `radius` of the cursor
    // feel it at all, falling off smoothly with distance (not a flat pull
    // toward the cursor from anywhere on screen, which read as unnatural).
    // The pull itself is smoothed/lerped onto n.magX/Y frame to frame, so it
    // has real inertia — it eases toward the cursor and eases back out,
    // rather than snapping straight to a computed offset.
    function updateMagnet(n: Negative, baseX: number, baseY: number, ec: number) {
      if (reduced || mouseX < 0) {
        n.magX += (0 - n.magX) * 0.1
        n.magY += (0 - n.magY) * 0.1
        return
      }
      const radius = 220
      const toX = mouseX - baseX
      const toY = mouseY - baseY
      const dist = Math.hypot(toX, toY)
      const strength = Math.max(0, 1 - dist / radius)
      const eased = strength * strength * (3 - 2 * strength) // smoothstep — no hard edge at the radius
      const settle = 1 - ec
      const targetX = toX * eased * 0.3 * settle
      const targetY = toY * eased * 0.3 * settle
      n.magX += (targetX - n.magX) * 0.07
      n.magY += (targetY - n.magY) * 0.07
    }

    function applyNeg(n: Negative) {
      const e = n.v
      const ec = clamp(e, 0, 1)
      const { dx, dy } = drift(n.phase, ec, 9, 7)
      updateMagnet(n, n.sc.cx, n.sc.cy, ec)
      const cx = n.sc.cx + (n.lock.cx - n.sc.cx) * e + dx + n.magX
      const cy = n.sc.cy + (n.lock.cy - n.sc.cy) * e + dy + n.magY
      const rot = n.sc.rot * (1 - ec)
      const scale = n.sc.scale + (1 - n.sc.scale) * e
      n.el.style.transform = `translate(${cx - fw / 2}px,${cy - fh / 2}px) rotate(${rot}deg) scale(${scale})`
      n.el.style.opacity = (0.4 + 0.6 * ec).toFixed(3)
      n.pos.style.opacity = ec.toFixed(3)
    }

    // Words rest at a fixed point along the reel and rack into focus rather
    // than travel — blur + fade + a small settle in Y, no position drift.
    function applyWord(w: Word) {
      const ec = clamp(w.v, 0, 1)
      const blur = (1 - ec) * 9
      const lift = (1 - ec) * 16
      const scale = (0.94 + 0.06 * ec) * wordShrink
      w.el.style.transform = `translate(${w.anchorX - w.width / 2}px,${w.anchorY - w.height / 2 + lift}px) scale(${scale})`
      w.el.style.filter = `blur(${blur.toFixed(2)}px)`
      w.el.style.opacity = ec.toFixed(3)
    }

    function layout() {
      W = rootRef.current!.clientWidth
      H = rootRef.current!.clientHeight
      let f = Math.min(88, (W * 0.9 - (negativeCount - 1) * gap) / negativeCount)
      f = Math.max(minFrameWidth, f)
      fw = f
      fh = Math.round(f / 1.5)
      const stripW = negativeCount * fw + (negativeCount - 1) * gap
      const stripLeft = (W - stripW) / 2
      const cy = H * 0.48
      negs.forEach((n, i) => {
        n.el.style.width = fw + 'px'
        n.el.style.height = fh + 'px'
        n.lock = { cx: stripLeft + i * (fw + gap) + fw / 2, cy }
        n.sc = { cx: n.frac.x * W, cy: n.frac.y * H, rot: n.frac.rot, scale: n.frac.scale }
        applyNeg(n)
      })

      // Sentence sits as one tight row above the filmstrip (not overlapping
      // it) — words packed close together by their real measured width,
      // not spread across the full reel width, so there's no ugly gap
      // between them.
      const wordGap = isMobile ? 5 : 8
      const widths = words.map((w) => w.el.offsetWidth)
      const heights = words.map((w) => w.el.offsetHeight)
      const totalWordsWidth = widths.reduce((a, b) => a + b, 0) + wordGap * Math.max(0, words.length - 1)
      // If the assembled sentence would be wider than the screen (phones,
      // mostly), shrink the whole row uniformly to fit instead of letting
      // it run off both edges.
      const maxRowWidth = (isMobile ? 0.94 : 0.88) * W
      wordShrink = clamp(maxRowWidth / Math.max(1, totalWordsWidth), 0.001, 1)
      const scaledGap = wordGap * wordShrink
      const scaledTotal = totalWordsWidth * wordShrink
      let cursor = (W - scaledTotal) / 2
      const wordCy = H * (isMobile ? 0.26 : 0.28)
      words.forEach((w, i) => {
        w.width = widths[i]
        w.height = heights[i]
        const sw = w.width * wordShrink
        w.anchorX = cursor + sw / 2
        w.anchorY = wordCy
        cursor += sw + scaledGap
        applyWord(w)
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
      setTimeout(() => swing(), 1400)
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
      words.forEach((w) => {
        w.latched = true
        w.v = 1
        w.vel = 0
        applyWord(w)
      })
      p = 1
      updateScrub()
      if (grainRef.current) grainRef.current.style.animation = 'none'
      setTimeout(() => {
        done = true
        swing()
      }, 1300)
    }

    function loop(now: number) {
      frameNow = now
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
      for (const w of words) {
        w.latched = p >= w.t
        if (!w.latched) allLatched = false
        const target = w.latched ? 1 : 0
        for (let s = 0; s < steps; s++) {
          const a = stiff * (target - w.v) - damp * w.vel
          w.vel += a * h
          w.v += w.vel * h
        }
        if (Math.abs(w.v - 1) > 0.03 || Math.abs(w.vel) > 0.05) settled = false
        applyWord(w)
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
      mouseX = e.clientX
      mouseY = e.clientY
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
    let fpsResetTimer: ReturnType<typeof setTimeout> | undefined
    function onWheel(e: WheelEvent) {
      if (done) return
      e.preventDefault()
      interacted = true
      hideHint()
      const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX
      p = clamp(p + delta * 0.0009, 0, 1)
      updateScrub()

      // The fps readout flickers up and down while actively scrolling,
      // settling back to a steady 24 a moment after the scroll stops.
      if (fpsRef.current) {
        const jitter = Math.round(clamp(24 + delta * 0.02 + rand(-3, 3), 14, 34))
        fpsRef.current.textContent = `${jitter} fps`
      }
      clearTimeout(fpsResetTimer)
      fpsResetTimer = setTimeout(() => {
        if (fpsRef.current) fpsRef.current.textContent = '24 fps'
      }, 260)
    }
    function onSkipClick() {
      skip()
    }
    function onResize() {
      layout()
    }

    buildNegatives()
    buildWords()
    setupDust()
    layout()
    updateScrub()

    track.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    intro.addEventListener('wheel', onWheel, { passive: false })
    skipRef.current?.addEventListener('click', onSkipClick)

    const skipTimer = setTimeout(() => {
      if (skipRef.current) skipRef.current.style.opacity = '0.85'
    }, 1500)

    last = performance.now()
    raf = requestAnimationFrame(loop)

    if (reduced) assembleInstant()

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(skipTimer)
      clearTimeout(fpsResetTimer)
      track.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
      intro.removeEventListener('wheel', onWheel)
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
                background: '#e0413a',
                display: 'inline-block',
                animation: 'fbRecBlink 1.5s steps(1) infinite',
              }}
            />
            REC
          </div>
          <div style={{ position: 'absolute', top: '3vh', right: '5vw' }}>
            Roll A · <span ref={fpsRef}>24 fps</span>
          </div>
          <div style={{ position: 'absolute', bottom: '24vh', left: '5vw' }}>Shot on 35mm film</div>
          <div style={{ position: 'absolute', bottom: '24vh', right: '5vw' }}>Scene 01 / Take 03</div>
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
        <div ref={wordsRef} style={{ position: 'absolute', inset: 0, zIndex: 16, pointerEvents: 'none' }} />

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
          </div>
          <span
            ref={hintRef}
            style={{
              display: 'block',
              textAlign: 'center',
              fontSize: 12,
              letterSpacing: '0.16em',
              color: 'rgba(244,243,240,0.5)',
              textTransform: 'uppercase',
              fontFamily: 'ui-monospace, "SF Mono", monospace',
              animation: 'fbHint 2.4s ease-in-out infinite',
            }}
          >
            scrub to assemble the reel
          </span>
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
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: '0.14em',
            color: 'rgba(244,243,240,0.8)',
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
