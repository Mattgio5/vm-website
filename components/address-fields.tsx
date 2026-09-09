"use client"

import { AddressAutofillWrapper } from "@/components/address-autofill"
import { US_STATE_OPTIONS, toStateAbbr } from "@/lib/quote-intake"

export type AddressValue = {
  street_address: string
  city: string
  state: string
  zip: string
  /** "autofill" when the parts came from a Mapbox pick, "manual" when typed. */
  address_source: "autofill" | "manual"
}

export const EMPTY_ADDRESS: AddressValue = {
  street_address: "",
  city: "",
  state: "PA",
  zip: "",
  address_source: "manual",
}

type Props = {
  value: AddressValue
  onChange: (next: AddressValue) => void
  /** Prefix for input ids so multiple forms can coexist on one page. */
  idPrefix: string
  /** Mapbox dropdown theme. All the cards on this site are navy. */
  variant?: "light" | "dark"
  disabled?: boolean
  /** Form-specific input styling (.hero-input, .offer-input, …). */
  inputClassName: string
  /** Appended to inputClassName on the <select>. */
  selectClassName?: string
  /** Wrapper that renders the label for one field. */
  renderField: (args: {
    label: string
    htmlFor: string
    children: React.ReactNode
  }) => React.ReactNode
}

/**
 * Street + City + State + ZIP, with Mapbox autocomplete on the street line
 * that fills the other three.
 *
 * Every field is a real, required, individually-editable input: a missed or
 * ignored autocomplete suggestion can no longer produce a lead with a bare
 * street line and no city/state/zip. Autofill is a convenience on top, not
 * the only path to structured data.
 */
export function AddressFields({
  value,
  onChange,
  idPrefix,
  variant = "dark",
  disabled,
  inputClassName,
  selectClassName = "",
  renderField,
}: Props) {
  const set = (patch: Partial<AddressValue>) =>
    onChange({ ...value, ...patch })

  const streetId = `${idPrefix}-street`
  const cityId = `${idPrefix}-city`
  const stateId = `${idPrefix}-state`
  const zipId = `${idPrefix}-zip`

  return (
    <div className="grid gap-2.5">
      {renderField({
        label: "Street address",
        htmlFor: streetId,
        children: (
          <AddressAutofillWrapper
            variant={variant}
            onSelect={(parts) => {
              onChange({
                street_address: parts.street_address || value.street_address,
                city: parts.city || value.city,
                state:
                  toStateAbbr(parts.state) || parts.state || value.state,
                zip: parts.zip || value.zip,
                address_source: "autofill",
              })
            }}
          >
            <input
              id={streetId}
              type="text"
              name="street_address"
              required
              autoComplete="address-line1"
              placeholder="123 Main St"
              className={inputClassName}
              value={value.street_address}
              onChange={(e) =>
                set({ street_address: e.target.value, address_source: "manual" })
              }
              disabled={disabled}
            />
          </AddressAutofillWrapper>
        ),
      })}

      <div className="grid gap-2.5 sm:grid-cols-[1fr_auto_auto]">
        {renderField({
          label: "City",
          htmlFor: cityId,
          children: (
            <input
              id={cityId}
              type="text"
              name="city"
              required
              autoComplete="address-level2"
              placeholder="Doylestown"
              className={inputClassName}
              value={value.city}
              onChange={(e) => set({ city: e.target.value })}
              disabled={disabled}
            />
          ),
        })}

        {renderField({
          label: "State",
          htmlFor: stateId,
          children: (
            <select
              id={stateId}
              name="state"
              required
              autoComplete="address-level1"
              className={`${inputClassName} ${selectClassName}`.trim()}
              value={value.state}
              onChange={(e) => set({ state: e.target.value })}
              disabled={disabled}
            >
              <option value="">State…</option>
              {US_STATE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          ),
        })}

        {renderField({
          label: "ZIP",
          htmlFor: zipId,
          children: (
            <input
              id={zipId}
              type="text"
              name="zip"
              required
              autoComplete="postal-code"
              inputMode="numeric"
              pattern="\d{5}(-\d{4})?"
              title="Enter a 5-digit ZIP code"
              placeholder="18901"
              maxLength={10}
              className={inputClassName}
              value={value.zip}
              onChange={(e) =>
                set({ zip: e.target.value.replace(/[^\d-]/g, "").slice(0, 10) })
              }
              disabled={disabled}
            />
          ),
        })}
      </div>
    </div>
  )
}
