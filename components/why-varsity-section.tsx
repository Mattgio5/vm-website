'use client'

import Link from 'next/link'

export function WhyVarsitySection() {
  return (
    <section className="relative space-y-20 md:space-y-28 bg-background">
      {/* ═══════════════════════════════════════════ */}
      {/* SUBSECTION 1: Competitive Comparison       */}
      {/* ═══════════════════════════════════════════ */}
      <div className="relative bg-muted/40 px-4 py-20 md:px-12 md:py-28 lg:px-20">
        {/* Varsity stripes */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>

        <div className="mx-auto max-w-7xl">
          {/* Main heading */}
          <div className="mb-12 max-w-3xl md:mb-16">
            <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
              Why Choose Varsity Mulching
            </p>
            <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl lg:text-5xl text-balance uppercase">
              Expert Level Mulching Without the Expert Level Price Tag
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              We chose to master mulching. Now we compete with the best on quality but still charge the fair rate.
            </p>
          </div>

          {/* Subtitle for comparison section */}
          <div className="mb-10 flex items-center justify-between">
            <h3 className="font-varsity text-xl tracking-wide text-vm-navy md:text-2xl uppercase">
              Who We&apos;re Up Against
            </h3>
            <p className="text-sm text-muted-foreground italic">Check out your options for mulching</p>
          </div>

          {/* Comparison cards grid */}
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8 auto-rows-fr">

            {/* ── LEFT: The Budget Crew ── old-school 2010s HTML feel ── */}
            <div
              style={{
                background: "#f0f0f0",
                border: "2px solid #aaa",
                borderRadius: "4px",
                padding: "24px",
                fontFamily: "Arial, Helvetica, sans-serif",
                boxShadow: "3px 3px 0 #999",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div
                style={{
                  background: "#336699",
                  margin: "-24px -24px 16px -24px",
                  padding: "10px 16px",
                  borderRadius: "2px 2px 0 0",
                }}
              >
                <h3 style={{ color: "#fff", fontSize: "20px", fontWeight: "bold", margin: 0 }}>
                  The Budget Crew
                </h3>
              </div>

              <p
                style={{
                  fontSize: "13px",
                  color: "#555",
                  fontStyle: "italic",
                  borderBottom: "1px dotted #bbb",
                  paddingBottom: "12px",
                  marginBottom: "12px",
                }}
              >
                Fairly priced&hellip; but you can tell.
              </p>

              <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
                <tbody>
                  <tr>
                    <td style={{ padding: "4px 0", color: "#333", fontWeight: "bold" }}>Price:</td>
                    <td style={{ padding: "4px 0", color: "#336699", fontSize: "16px" }}>$</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "4px 0", color: "#333", fontWeight: "bold" }}>Quality:</td>
                    <td style={{ padding: "4px 0", color: "#f0a500", fontSize: "16px" }}>&#9733;&#9733;&#9734;&#9734;&#9734;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ── MIDDLE: Varsity Mulching ── our brand styling ── */}
            <div className="h-full">
              <div className="relative rounded-2xl border-2 border-vm-blue-dark bg-white shadow-xl flex flex-col overflow-hidden pt-10 h-full">
                {/* Trophy badge at top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-vm-blue-dark px-4 py-2 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.166 3h13.668A2.25 2.25 0 0121 5.25v.113c0 .812-.435 1.56-1.142 1.965l-1.22.698A2.25 2.25 0 0116.5 9.96v.563c0 .54.192 1.06.537 1.47l.857 1.015a4.5 4.5 0 01.985 2.83V18a2.25 2.25 0 01-2.25 2.25H7.371A2.25 2.25 0 015.121 18v-2.162a4.5 4.5 0 01.985-2.83l.857-1.015A2.25 2.25 0 007.5 10.523V9.96a2.25 2.25 0 00-2.138-2.244l-1.22-.697A2.25 2.25 0 013 5.363V5.25A2.25 2.25 0 015.166 3z" clipRule="evenodd" />
                  </svg>
                  <span className="font-varsity text-xs tracking-widest text-white uppercase whitespace-nowrap">The Sweet Spot</span>
                </div>

                <div className="px-8 pb-8 flex flex-col flex-1">
                  <div className="mb-6 text-center border-b border-vm-blue/40 pb-6">
                    <h3 className="font-varsity text-2xl tracking-wide text-vm-navy uppercase">
                      Varsity Mulching
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Skilled enough to do anything &mdash; but chose to perfect mulching. Get top-tier quality at the going rate.
                    </p>
                    <p className="mt-3 text-sm font-semibold text-vm-navy uppercase tracking-wide">
                      Your go-to for mulching. It&apos;s what we do.
                    </p>
                  </div>

                  <div className="flex justify-around mb-8">
                    <div className="text-center">
                      <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-2">Price</p>
                      <p className="text-3xl text-vm-navy leading-none font-bold">$$</p>
                    </div>
                    <div className="w-px bg-vm-blue/40" />
                    <div className="text-center">
                      <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-2">Quality</p>
                      <p className="text-2xl text-vm-gold-dark leading-none">★★★★★</p>
                    </div>
                  </div>

                  {/* Services link in bottom right */}
                  <div className="mt-auto pt-6 border-t border-vm-blue/40">
                    <Link href="/services" className="inline-block text-sm font-semibold text-vm-navy hover:text-vm-blue-dark transition-colors">
                      View Our Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: The Overqualified Crew ── Yardzen premium feel ── */}
            <div
              style={{
                background: "#f5f2ec",
                borderRadius: "16px",
                padding: "32px",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                border: "1px solid #ddd8ce",
                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#2d4a2d",
                  color: "#f5f2ec",
                  fontSize: "10px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  padding: "5px 12px",
                  borderRadius: "99px",
                  marginBottom: "20px",
                  alignSelf: "flex-start",
                }}
              >
                Premium Tier
              </div>

              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "400",
                  color: "#2d4a2d",
                  margin: "0 0 8px",
                  letterSpacing: "-0.3px",
                  lineHeight: "1.3",
                }}
              >
                The Overqualified Crew
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  color: "#7a7267",
                  lineHeight: "1.7",
                  margin: "0 0 24px",
                }}
              >
                Full-service landscapers who can mulch &mdash; but charge a premium because every hour on mulch is an hour off a bigger job.
              </p>

              <div
                style={{
                  background: "#ede9e0",
                  borderRadius: "12px",
                  padding: "16px 20px",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#a09888", margin: "0 0 6px" }}>Price</p>
                  <p style={{ fontSize: "22px", color: "#2d4a2d", margin: 0, fontWeight: "600" }}>$$$</p>
                </div>
                <div style={{ width: "1px", background: "#d4cfc5" }} />
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#a09888", margin: "0 0 6px" }}>Quality</p>
                  <p style={{ fontSize: "18px", color: "#2d4a2d", margin: 0 }}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* SUBSECTION 2: The Kid Next Door          */}
      {/* ═══════════════════════════════════════════ */}
      <div className="relative px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Section label and headline */}
          <div className="mb-12 md:mb-16">
            <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
              The Kid Next Door
            </p>
            <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl lg:text-5xl text-balance uppercase">
              Good Lawns Start with Good Neighbors
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg max-w-3xl">
              Everyone&apos;s hired the neighbor&apos;s kid to spread some mulch. Varsity is that kid — just with better equipment and a system that actually works. Our crews are college kids from the area. You&apos;ve probably seen them around. They&apos;re local, they show up, and they do the job right.
            </p>
          </div>

          {/* Founder quote block */}
          <div className="mb-16 border-l-4 border-vm-gold pl-6 md:pl-8 py-4">
            <blockquote className="text-base md:text-lg leading-relaxed text-muted-foreground italic">
              &ldquo;My first job was my next-door neighbor&apos;s yard — just me, a wheelbarrow, and a lot of mulch. The operation has grown since then, but the mentality hasn&apos;t. We&apos;re still the kids next door. We just got a lot better at it.&rdquo;
            </blockquote>
            <p className="mt-4 font-semibold text-vm-navy">
              — Matt, Founder, Varsity Mulching
            </p>
          </div>

          {/* Two cards side by side */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Meet the Crew */}
            <div className="rounded-2xl overflow-hidden border-2 border-vm-blue/40 shadow-lg">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Placeholder</p>
                  <p className="text-xs text-muted-foreground mt-1">Team Photo</p>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="mb-2 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">Meet the Crew</p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Local college students with the equipment and systems to get it done right. No shortcuts, just solid work.
                </p>
              </div>
            </div>

            {/* Card 2: Where We're From */}
            <div className="rounded-2xl overflow-hidden border-2 border-vm-blue/40 shadow-lg">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Placeholder</p>
                  <p className="text-xs text-muted-foreground mt-1">Service Area Map</p>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="mb-2 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">Where We're From</p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We serve neighborhoods across the area. Close enough to know your yard, far enough to have perspective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
