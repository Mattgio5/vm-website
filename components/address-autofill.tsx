"use client"

import dynamic from "next/dynamic"
import type { ComponentType, ReactNode } from "react"

export type AddressParts = {
  street_address: string
  city: string
  state: string
  zip: string
  full_address: string
}

type RetrieveResponse = {
  features?: Array<{
    properties?: Record<string, unknown>
  }>
}

type MapboxTheme = {
  variables?: Record<string, string>
  cssText?: string
}

type AddressAutofillProps = {
  accessToken: string
  onRetrieve?: (res: RetrieveResponse) => void
  options?: { country?: string; language?: string }
  theme?: MapboxTheme
  children: ReactNode
}

// Theme tokens that match the navy hero card so the suggestions dropdown
// doesn't show up as a stark white block on the dark backdrop.
const DARK_THEME: MapboxTheme = {
  variables: {
    colorBackground: "#0b1d3a",
    colorBackgroundHover: "rgba(255,255,255,0.08)",
    colorBackgroundActive: "rgba(255,215,0,0.15)",
    colorText: "#ffffff",
    colorTextSecondary: "rgba(255,255,255,0.65)",
    colorBorder: "rgba(255,255,255,0.18)",
    colorPrimary: "#ffd700",
    colorShadow: "rgba(0,0,0,0.4)",
  },
}

// @mapbox/search-js-web references `document` at module-load time, so the
// import has to be deferred to the client. `ssr: false` keeps it out of the
// server bundle entirely.
const AddressAutofill = dynamic<AddressAutofillProps>(
  () =>
    import("@mapbox/search-js-react").then(
      (mod) => mod.AddressAutofill as unknown as ComponentType<AddressAutofillProps>,
    ),
  { ssr: false },
)

type Props = {
  onSelect: (parts: AddressParts) => void
  /** Use "dark" on the navy hero card; defaults to Mapbox's light theme. */
  variant?: "light" | "dark"
  children: ReactNode
}

/**
 * Wraps an input with Mapbox address autocomplete. When the user picks a
 * suggestion, the onSelect callback fires with the structured address parts.
 *
 * Graceful degradation: if NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN isn't set, the
 * children are rendered as a plain input — the form still works, just without
 * suggestions.
 */
export function AddressAutofillWrapper({
  onSelect,
  variant = "light",
  children,
}: Props) {
  const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

  if (!token) return <>{children}</>

  return (
    <AddressAutofill
      accessToken={token}
      options={{ country: "us" }}
      theme={variant === "dark" ? DARK_THEME : undefined}
      onRetrieve={(res) => {
        const feature = res.features?.[0]
        const props = feature?.properties
        if (!props) return

        const get = (k: string): string =>
          typeof props[k] === "string" ? (props[k] as string) : ""

        onSelect({
          street_address: get("address_line1") || get("feature_name"),
          city: get("address_level2"),
          state: get("address_level1").toUpperCase(),
          zip: get("postcode"),
          full_address: get("full_address") || get("place_formatted"),
        })
      }}
    >
      {children}
    </AddressAutofill>
  )
}
