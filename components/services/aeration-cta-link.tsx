"use client"

/**
 * CTA that smooth-scrolls to the embedded aeration quote form (#aeration-quote)
 * instead of navigating to the general service-selection form.
 */
export function AerationCtaLink({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      href="#aeration-quote"
      className={className}
      onClick={(e) => {
        const target = document.getElementById("aeration-quote")
        if (!target) return
        e.preventDefault()
        target.scrollIntoView({ behavior: "smooth", block: "start" })
        window.setTimeout(() => {
          target.querySelector<HTMLInputElement>("input")?.focus({ preventScroll: true })
        }, 450)
      }}
    >
      {children}
    </a>
  )
}
