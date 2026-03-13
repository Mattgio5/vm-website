export function CompetitiveSection() {
  return (
    <section className="relative bg-muted/40 px-4 py-20 md:px-12 md:py-28 lg:px-20">
      {/* Varsity stripes */}
      <div className="absolute top-0 left-0 right-0 flex flex-col">
        <div className="h-2.5 w-full bg-vm-gold" />
        <div className="h-2.5 w-full bg-vm-navy" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-4 max-w-3xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
            The Sweet Spot
          </p>
          <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl lg:text-5xl text-balance uppercase">
            Expert-level mulching without the expert-level price tag
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            We chose to master mulching. Now we compete with the best on quality — but still charge the fair rate.
          </p>
        </div>

        {/* Sub-header */}
        <p className="mb-10 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          Who we&apos;re up against
        </p>

        {/* Three-column comparison */}
        <div className="grid gap-6 md:grid-cols-3">

          {/* LEFT: The Budget Crew — styled like a 2010s basic site */}
          <div
            style={{
              background: "#f0f0f0",
              border: "2px solid #cccccc",
              borderRadius: "4px",
              padding: "24px",
              fontFamily: "Arial, Helvetica, sans-serif",
              color: "#333333",
            }}
          >
            <div
              style={{
                background: "#336699",
                color: "#ffffff",
                padding: "8px 12px",
                marginBottom: "16px",
                fontSize: "14px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "1px",
                borderRadius: "2px",
              }}
            >
              The Budget Crew
            </div>
            <p
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#336699",
                marginBottom: "8px",
              }}
            >
              Local Lawn &amp; More
            </p>
            <p style={{ fontSize: "13px", color: "#666666", marginBottom: "16px", lineHeight: "1.5" }}>
              Fairly priced&hellip; but you can tell.
            </p>

            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", marginBottom: "16px" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "6px 0", borderBottom: "1px solid #dddddd", color: "#555" }}>Price</td>
                  <td style={{ padding: "6px 0", borderBottom: "1px solid #dddddd", color: "#336699", fontWeight: "bold", fontSize: "16px" }}>$$</td>
                </tr>
                <tr>
                  <td style={{ padding: "6px 0", color: "#555" }}>Quality</td>
                  <td style={{ padding: "6px 0", color: "#f4a428", fontWeight: "bold", fontSize: "18px" }}>&#9733;&#9733;<span style={{ color: "#cccccc" }}>&#9733;&#9733;&#9733;</span></td>
                </tr>
              </tbody>
            </table>

            <a
              href="#"
              style={{
                display: "inline-block",
                background: "#336699",
                color: "#ffffff",
                padding: "8px 16px",
                fontSize: "12px",
                fontWeight: "bold",
                textDecoration: "none",
                borderRadius: "2px",
                textTransform: "uppercase",
              }}
            >
              Request a Quote
            </a>
          </div>

          {/* MIDDLE: Varsity Mulching — our own styling */}
          <div className="relative flex flex-col rounded-2xl border-2 border-vm-navy bg-vm-navy overflow-hidden shadow-xl">
            {/* Gold top accent */}
            <div className="flex flex-col">
              <div className="h-1.5 w-full bg-vm-gold" />
            </div>

            {/* Trophy banner */}
            <div className="flex items-center justify-center gap-2 bg-vm-gold px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-vm-navy shrink-0">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
              <span className="font-varsity text-sm tracking-widest text-vm-navy uppercase">
                The Sweet Spot
              </span>
            </div>

            <div className="flex flex-col flex-1 p-6 md:p-8">
              <h3 className="font-varsity text-2xl tracking-wide text-white uppercase">
                Varsity Mulching
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-vm-blue/90">
                Skilled enough to do anything — but chose to perfect mulching. Get top-tier quality at the going rate.
              </p>

              <div className="mt-6 space-y-3 border-t border-white/20 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60 uppercase tracking-wider">Price</span>
                  <span className="font-varsity text-xl text-vm-gold tracking-widest">$$</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60 uppercase tracking-wider">Quality</span>
                  <span className="text-vm-gold text-xl tracking-wider">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                </div>
              </div>

              <a
                href="/quote"
                className="mt-8 block rounded-full bg-vm-gold px-6 py-3 text-center font-varsity text-sm tracking-widest text-vm-navy uppercase hover:bg-vm-gold-dark transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>

          {/* RIGHT: The Overqualified Crew — Yardzen-style premium feel */}
          <div
            style={{
              background: "#f7f6f2",
              border: "1px solid #e0ddd5",
              borderRadius: "12px",
              padding: "0",
              overflow: "hidden",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              color: "#2c2c2c",
            }}
          >
            {/* Sage green top bar */}
            <div style={{ background: "#6b7c5c", padding: "10px 24px" }}>
              <span style={{ color: "#f0ece4", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "Georgia, serif" }}>
                Premium Services
              </span>
            </div>

            <div style={{ padding: "24px" }}>
              <p style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#8a8478", marginBottom: "10px", fontFamily: "Arial, sans-serif" }}>
                Full-Service Landscaping
              </p>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "300",
                  color: "#2c2c2c",
                  marginBottom: "12px",
                  lineHeight: "1.3",
                  letterSpacing: "-0.5px",
                }}
              >
                The Overqualified Crew
              </h3>
              <p style={{ fontSize: "13px", color: "#6b6560", lineHeight: "1.7", marginBottom: "20px", fontFamily: "Arial, sans-serif" }}>
                Full-service landscapers who can mulch — but charge a premium because every hour on mulch is an hour off a bigger job.
              </p>

              <div style={{ borderTop: "1px solid #e0ddd5", paddingTop: "20px", marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#8a8478", fontFamily: "Arial, sans-serif" }}>Price</span>
                  <span style={{ fontSize: "18px", color: "#6b7c5c", letterSpacing: "4px" }}>$$$</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#8a8478", fontFamily: "Arial, sans-serif" }}>Quality</span>
                  <span style={{ fontSize: "18px", color: "#6b7c5c", letterSpacing: "2px" }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                </div>
              </div>

              <a
                href="#"
                style={{
                  display: "block",
                  border: "1px solid #6b7c5c",
                  color: "#6b7c5c",
                  padding: "12px 20px",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  textAlign: "center",
                  borderRadius: "4px",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Schedule a Consultation
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
