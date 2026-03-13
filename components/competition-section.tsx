export function CompetitionSection() {
  return (
    <section className="relative bg-muted/40 px-4 py-20 md:px-12 md:py-28 lg:px-20">
      {/* Varsity stripes */}
      <div className="absolute top-0 left-0 right-0 flex flex-col">
        <div className="h-2.5 w-full bg-vm-gold" />
        <div className="h-2.5 w-full bg-vm-navy" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
            The Market
          </p>
          <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl lg:text-5xl text-balance uppercase">
            Who We&apos;re Up Against
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            We know where we fit. And so should you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* ── LEFT: The Budget Crew ── old-school 2010s HTML feel ── */}
          <div
            style={{
              background: "#f0f0f0",
              border: "2px solid #aaa",
              borderRadius: "4px",
              padding: "24px",
              fontFamily: "Arial, Helvetica, sans-serif",
              boxShadow: "3px 3px 0 #999",
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
                  <td style={{ padding: "4px 0", color: "#336699", fontSize: "16px" }}>$$</td>
                </tr>
                <tr>
                  <td style={{ padding: "4px 0", color: "#333", fontWeight: "bold" }}>Quality:</td>
                  <td style={{ padding: "4px 0", color: "#f0a500", fontSize: "16px" }}>&#9733;&#9733;&#9734;&#9734;&#9734;</td>
                </tr>
              </tbody>
            </table>

            <div
              style={{
                marginTop: "16px",
                padding: "10px",
                background: "#fffbe6",
                border: "1px solid #e0c040",
                borderRadius: "2px",
                fontSize: "12px",
                color: "#666",
              }}
            >
              <strong style={{ color: "#333" }}>Note:</strong> Results may vary. Check references.
            </div>
          </div>

          {/* ── MIDDLE: Varsity Mulching ── our brand, lighter palette ── */}
          <div className="relative rounded-2xl border-2 border-vm-blue-dark bg-white shadow-xl flex flex-col overflow-hidden">
            {/* Trophy badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-vm-blue-dark px-4 py-1.5 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white" aria-hidden="true">
                <path fillRule="evenodd" d="M5.166 3h13.668A2.25 2.25 0 0121 5.25v.113c0 .812-.435 1.56-1.142 1.965l-1.22.698A2.25 2.25 0 0016.5 9.96v.563c0 .54.192 1.06.537 1.47l.857 1.015a4.5 4.5 0 01.985 2.83V18a2.25 2.25 0 01-2.25 2.25H7.371A2.25 2.25 0 015.121 18v-2.162a4.5 4.5 0 01.985-2.83l.857-1.015A2.25 2.25 0 007.5 10.523V9.96a2.25 2.25 0 00-2.138-2.244l-1.22-.697A2.25 2.25 0 013 5.363V5.25A2.25 2.25 0 015.166 3z" clipRule="evenodd" />
              </svg>
              <span className="font-varsity text-xs tracking-widest text-white uppercase">The Sweet Spot</span>
            </div>

            <div className="mt-8 px-8 pb-8 pt-2 flex flex-col flex-1">
              <div className="mb-6 text-center border-b border-vm-blue/40 pb-6">
                <h3 className="font-varsity text-2xl tracking-wide text-vm-navy uppercase">
                  Varsity Mulching
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Skilled enough to do anything &mdash; but chose to perfect mulching. Get top-tier quality at the going rate.
                </p>
              </div>

              <div className="flex justify-around">
                <div className="text-center">
                  <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-1">Price</p>
                  <p className="font-varsity text-2xl text-vm-navy">$$</p>
                </div>
                <div className="w-px bg-vm-blue/40" />
                <div className="text-center">
                  <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-1">Quality</p>
                  <p className="text-xl text-vm-gold-dark">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
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
    </section>
  )
}
