"use client"

import { useState } from "react"
import { Calculator, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CalculatorSection() {
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
    <section id="calculator" className="bg-muted px-4 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left copy */}
          <div>
            <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue-dark uppercase">
              Mulch Calculator
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-vm-navy md:text-4xl lg:text-5xl text-balance">
              How Much Do You Need?
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Plug in your measurements and we'll give you an instant estimate. 
              No guesswork, no wasted material, no surprise costs.
            </p>
            {result !== null && (
              <div className="mt-8 rounded-2xl border border-vm-blue/30 bg-white p-6 shadow-md">
                <p className="text-sm font-medium text-muted-foreground">
                  You need approximately
                </p>
                <p className="mt-1 font-serif text-4xl font-bold text-vm-navy">
                  {result}{" "}
                  <span className="text-lg font-sans font-medium text-muted-foreground">
                    cubic yards
                  </span>
                </p>
                <Link
                  href="#quote"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg"
                >
                  Get a Quote for This
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>

          {/* Right calculator */}
          <div className="rounded-2xl border border-border bg-white p-6 shadow-lg md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-vm-blue/15 p-2.5 text-vm-navy">
                <Calculator className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-vm-navy">Quick Calculator</h3>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="length"
                  className="mb-1.5 block text-sm font-medium text-vm-navy"
                >
                  Length (feet)
                </label>
                <input
                  id="length"
                  type="number"
                  placeholder="e.g. 20"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-vm-blue focus:ring-2 focus:ring-vm-blue/30 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="width"
                  className="mb-1.5 block text-sm font-medium text-vm-navy"
                >
                  Width (feet)
                </label>
                <input
                  id="width"
                  type="number"
                  placeholder="e.g. 10"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-vm-blue focus:ring-2 focus:ring-vm-blue/30 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="depth"
                  className="mb-1.5 block text-sm font-medium text-vm-navy"
                >
                  Depth (inches)
                </label>
                <select
                  id="depth"
                  value={depth}
                  onChange={(e) => setDepth(e.target.value)}
                  className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground focus:border-vm-blue focus:ring-2 focus:ring-vm-blue/30 focus:outline-none"
                >
                  <option value="2">2 inches</option>
                  <option value="3">3 inches (recommended)</option>
                  <option value="4">4 inches</option>
                  <option value="6">6 inches</option>
                </select>
              </div>

              <button
                onClick={calculate}
                className="w-full rounded-xl bg-vm-blue px-6 py-3.5 text-sm font-semibold text-vm-navy transition-all hover:bg-vm-blue-dark hover:shadow-md"
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
