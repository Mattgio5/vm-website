"use client"

import { useState } from "react"

export function MulchCalculator() {
  const [length, setLength] = useState("")
  const [width, setWidth] = useState("")
  const [depth, setDepth] = useState("3")
  const [result, setResult] = useState<number | null>(null)

  function calculate() {
    const l = parseFloat(length)
    const w = parseFloat(width)
    const d = parseFloat(depth)
    if (isNaN(l) || isNaN(w) || isNaN(d)) return
    const cubicYards = (l * w * (d / 12)) / 27
    setResult(Math.ceil(cubicYards * 10) / 10)
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <h3 className="text-base font-bold text-vm-navy">Mulch Calculator</h3>
      <p className="mt-1 text-xs text-muted-foreground">
        Estimate how much mulch you need
      </p>

      <div className="mt-4 flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="calc-length"
              className="mb-1 block text-xs font-medium text-vm-navy"
            >
              Length (ft)
            </label>
            <input
              id="calc-length"
              type="number"
              placeholder="20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full rounded-lg border border-border bg-muted px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-vm-blue focus:ring-1 focus:ring-vm-blue/30 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="calc-width"
              className="mb-1 block text-xs font-medium text-vm-navy"
            >
              Width (ft)
            </label>
            <input
              id="calc-width"
              type="number"
              placeholder="10"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full rounded-lg border border-border bg-muted px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-vm-blue focus:ring-1 focus:ring-vm-blue/30 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="calc-depth"
            className="mb-1 block text-xs font-medium text-vm-navy"
          >
            Depth (inches)
          </label>
          <select
            id="calc-depth"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            className="w-full rounded-lg border border-border bg-muted px-3 py-2 text-sm text-foreground focus:border-vm-blue focus:ring-1 focus:ring-vm-blue/30 focus:outline-none"
          >
            <option value="2">2 inches</option>
            <option value="3">3 inches (recommended)</option>
            <option value="4">4 inches</option>
            <option value="6">6 inches</option>
          </select>
        </div>

        <button
          onClick={calculate}
          className="w-full rounded-lg bg-vm-blue px-4 py-2.5 text-sm font-semibold text-vm-navy transition-colors hover:bg-vm-blue-dark"
        >
          Calculate
        </button>

        {result !== null && (
          <div className="rounded-lg bg-vm-blue/10 p-3 text-center">
            <p className="text-xs text-muted-foreground">You need approximately</p>
            <p className="text-xl font-bold text-vm-navy">
              {result}{" "}
              <span className="text-sm font-medium text-muted-foreground">
                cubic yards
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
