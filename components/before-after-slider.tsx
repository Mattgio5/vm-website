"use client"

import { useCallback, useEffect, useRef, useState } from "react"

type Props = {
  beforeSrc: string
  afterSrc: string
  beforeAlt?: string
  afterAlt?: string
  initialPosition?: number
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
  initialPosition = 50,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(initialPosition)
  const [dragging, setDragging] = useState(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, pct)))
  }, [])

  useEffect(() => {
    if (!dragging) return
    const onMove = (e: MouseEvent | TouchEvent) => {
      const clientX =
        "touches" in e ? e.touches[0]?.clientX : (e as MouseEvent).clientX
      if (typeof clientX === "number") updateFromClientX(clientX)
    }
    const onUp = () => setDragging(false)
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
    window.addEventListener("touchmove", onMove, { passive: true })
    window.addEventListener("touchend", onUp)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
      window.removeEventListener("touchmove", onMove)
      window.removeEventListener("touchend", onUp)
    }
  }, [dragging, updateFromClientX])

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2))
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2))
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted select-none"
      onMouseDown={(e) => {
        setDragging(true)
        updateFromClientX(e.clientX)
      }}
      onTouchStart={(e) => {
        setDragging(true)
        const t = e.touches[0]
        if (t) updateFromClientX(t.clientX)
      }}
    >
      {/* After image (full) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      {/* "After" label — sits on the right, hidden when slider covers it */}
      {position < 80 && (
        <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-vm-gold px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-vm-navy shadow md:right-3 md:top-3 md:px-3 md:py-1 md:text-xs">
          After
        </span>
      )}

      {/* Before image (clipped from the left) */}
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${(100 / Math.max(position, 0.0001)) * 100}%`, maxWidth: "none" }}
          draggable={false}
        />
        {/* "Before" label — clipped along with the before image */}
        {position > 20 && (
          <span className="pointer-events-none absolute left-2 top-2 rounded-full bg-vm-navy/85 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow md:left-3 md:top-3 md:px-3 md:py-1 md:text-xs">
            Before
          </span>
        )}
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]" />
        <button
          type="button"
          aria-label="Drag to compare before and after"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          role="slider"
          tabIndex={0}
          onKeyDown={onKey}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-vm-navy bg-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-vm-gold cursor-ew-resize"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-vm-navy" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 3 12 9 18" />
            <polyline points="15 6 21 12 15 18" />
          </svg>
        </button>
      </div>
    </div>
  )
}
