"use client"

import { useEffect, useRef } from "react"

/**
 * Decorative falling-leaf layer drawn on a single <canvas>.
 *
 *  - "drift":  leaves fall and sway through the area, then recycle at the top.
 *  - "pile":   leaves fall and come to rest along the bottom edge, building a
 *              small pile (oldest resting leaves fade out to cap the count).
 *  - "blower": like drift, but the pointer (mouse or finger) acts as a leaf
 *              blower and pushes nearby leaves away.
 *
 * Always aria-hidden and pointer-events-none (the blower listens on the
 * parent element instead, so it never blocks clicks). Pauses while off
 * screen or in a background tab, and skips animation entirely for
 * prefers-reduced-motion — a few static leaves are drawn instead.
 */

type Mode = "drift" | "pile" | "blower"

const COLORS = ["#d9480f", "#e8590c", "#f08c00", "#c92a2a", "#ffd700", "#a0522d", "#e67700"]

type Leaf = {
  x: number
  y: number
  vx: number
  vy: number
  rot: number
  vrot: number
  size: number
  swayPhase: number
  swaySpeed: number
  sprite: number
  resting: boolean
  restAge: number
  alpha: number
}

/** Pre-render each leaf shape × color once, so frames are just drawImage calls. */
function buildSprites(): HTMLCanvasElement[] {
  const sprites: HTMLCanvasElement[] = []
  const S = 64
  for (const color of COLORS) {
    for (const shape of [0, 1] as const) {
      const c = document.createElement("canvas")
      c.width = S
      c.height = S
      const g = c.getContext("2d")!
      g.translate(S / 2, S / 2)
      g.fillStyle = color
      g.strokeStyle = "rgba(60, 25, 0, 0.45)"
      g.lineWidth = 1.5
      g.beginPath()
      if (shape === 0) {
        // Simple oval leaf.
        g.moveTo(0, -26)
        g.bezierCurveTo(18, -14, 18, 12, 0, 26)
        g.bezierCurveTo(-18, 12, -18, -14, 0, -26)
      } else {
        // Five-point maple-ish leaf.
        const pts = [
          [0, -28], [6, -14], [20, -18], [14, -4], [26, 2], [12, 8],
          [14, 20], [2, 14], [0, 28], [-2, 14], [-14, 20], [-12, 8],
          [-26, 2], [-14, -4], [-20, -18], [-6, -14],
        ]
        g.moveTo(pts[0][0], pts[0][1])
        for (const [x, y] of pts.slice(1)) g.lineTo(x, y)
        g.closePath()
      }
      g.fill()
      // Midrib.
      g.beginPath()
      g.moveTo(0, -22)
      g.lineTo(0, 26)
      g.stroke()
      sprites.push(c)
    }
  }
  return sprites
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min)
}

export function FallingLeaves({
  mode = "drift",
  density = 1,
  className = "",
}: {
  mode?: Mode
  /** Multiplier on the leaf count (which already scales with area). */
  density?: number
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const host = canvas?.parentElement
    if (!canvas || !host) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const sprites = buildSprites()
    let w = 0
    let h = 0
    let leaves: Leaf[] = []
    let raf = 0
    let visible = true
    let last = performance.now()
    const pointer = { x: -9999, y: -9999, active: false }

    function spawn(startAnywhere: boolean): Leaf {
      const size = rand(14, 28)
      return {
        x: rand(-20, w + 20),
        y: startAnywhere ? rand(-h * 0.2, h) : rand(-80, -20),
        vx: rand(-0.15, 0.25),
        vy: rand(0.35, 0.9),
        rot: rand(0, Math.PI * 2),
        vrot: rand(-0.02, 0.02),
        size,
        swayPhase: rand(0, Math.PI * 2),
        swaySpeed: rand(0.01, 0.025),
        sprite: Math.floor(Math.random() * sprites.length),
        resting: false,
        restAge: 0,
        alpha: rand(0.75, 1),
      }
    }

    function targetCount() {
      // ~1 leaf per 22k px², clamped so phones stay light.
      return Math.round(Math.min(60, Math.max(10, (w * h) / 22000)) * density)
    }

    function resize() {
      const rect = host!.getBoundingClientRect()
      w = rect.width
      h = rect.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas!.width = Math.round(w * dpr)
      canvas!.height = Math.round(h * dpr)
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = targetCount()
      if (leaves.length === 0) leaves = Array.from({ length: n }, () => spawn(true))
      if (reduced) draw()
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h)
      for (const l of leaves) {
        ctx!.save()
        ctx!.globalAlpha = l.alpha
        ctx!.translate(l.x, l.y)
        ctx!.rotate(l.rot)
        // Squash on one axis as it "flips" — reads as 3D tumbling.
        ctx!.scale(1, 0.55 + 0.45 * Math.abs(Math.sin(l.swayPhase)))
        ctx!.drawImage(sprites[l.sprite], -l.size / 2, -l.size / 2, l.size, l.size)
        ctx!.restore()
      }
    }

    function step(dt: number) {
      const falling = leaves.filter((l) => !l.resting).length
      const want = targetCount()

      for (const l of leaves) {
        if (l.resting) {
          l.restAge += dt
          continue
        }
        l.swayPhase += l.swaySpeed * dt
        l.x += (l.vx + Math.sin(l.swayPhase) * 0.6) * dt
        l.y += l.vy * dt
        l.rot += l.vrot * dt

        if (mode === "blower" && pointer.active) {
          const dx = l.x - pointer.x
          const dy = l.y - pointer.y
          const d2 = dx * dx + dy * dy
          const R = 140
          if (d2 < R * R) {
            const d = Math.sqrt(d2) || 1
            const f = (1 - d / R) * 1.4
            l.vx += (dx / d) * f
            l.vy += (dy / d) * f
            l.vrot += rand(-0.02, 0.02)
          }
        }
        // Air drag pulls velocity back toward a lazy fall.
        l.vx += (rand(-0.15, 0.25) * 0.2 - l.vx) * 0.02 * dt
        l.vy += (0.6 - l.vy) * 0.02 * dt
        l.vrot *= 0.99

        if (mode === "pile" && l.y >= h - l.size * 0.35 - rand(0, 18)) {
          l.resting = true
          l.y = h - rand(2, 16)
          l.rot = rand(-0.6, 0.6) + (Math.random() < 0.5 ? 0 : Math.PI)
          l.swayPhase = Math.PI / 2
          continue
        }
        const off = l.y > h + 40 || l.y < -h || l.x < -80 || l.x > w + 80
        if (off) Object.assign(l, spawn(false))
      }

      if (mode === "pile") {
        // Keep the falling population topped up, and fade the oldest resting
        // leaves once the pile is big enough.
        if (falling < want) leaves.push(spawn(false))
        const resting = leaves.filter((l) => l.resting)
        const maxPile = Math.round(want * 2.5)
        if (resting.length > maxPile) {
          resting.sort((a, b) => b.restAge - a.restAge)
          for (const old of resting.slice(0, resting.length - maxPile)) old.alpha -= 0.02 * dt
          leaves = leaves.filter((l) => l.alpha > 0)
        }
      }
    }

    function frame(now: number) {
      // dt in 60fps frames, capped so a stalled tab doesn't teleport leaves.
      const dt = Math.min((now - last) / 16.67, 3)
      last = now
      step(dt)
      draw()
      raf = requestAnimationFrame(frame)
    }

    function start() {
      if (reduced || raf || !visible || document.hidden) return
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }
    function stop() {
      cancelAnimationFrame(raf)
      raf = 0
    }

    const ro = new ResizeObserver(resize)
    ro.observe(host)
    resize()

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
      else stop()
    })
    io.observe(host)

    const onVis = () => (document.hidden ? stop() : start())
    document.addEventListener("visibilitychange", onVis)

    // Blower input is read from the host so the canvas never blocks clicks.
    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect()
      pointer.x = e.clientX - r.left
      pointer.y = e.clientY - r.top
      pointer.active = true
    }
    const onLeave = () => {
      pointer.active = false
    }
    if (mode === "blower") {
      host.addEventListener("pointermove", onMove)
      host.addEventListener("pointerdown", onMove)
      host.addEventListener("pointerleave", onLeave)
      host.addEventListener("pointerup", onLeave)
    }

    start()

    return () => {
      stop()
      ro.disconnect()
      io.disconnect()
      document.removeEventListener("visibilitychange", onVis)
      host.removeEventListener("pointermove", onMove)
      host.removeEventListener("pointerdown", onMove)
      host.removeEventListener("pointerleave", onLeave)
      host.removeEventListener("pointerup", onLeave)
    }
  }, [mode, density])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  )
}
