import { useState } from 'react'

function IconAirFrom({ className }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10.5 4L8 9l-4 2 4 2 2.5 5 1.5-5.5L18 14l2-2-6-1.5L10.5 4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconAirTo({ className }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13.5 20L16 15l4-2-4-2-2.5-5L12 11.5 6 10l-2 2 6 1.5L13.5 20z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconTruck({ className }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M1 16h14v-9H1v9zm14 0h4l3-4v-5h-7v9z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function IconPlaneTab({ className }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 8l-8 5V3l-2 2v8l-8 5v-3l6-3.5L5 8V5l6 3V3l2-2v5l6-3v3z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ShipmentQuoteForm() {
  const [mode, setMode] = useState('air')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const swap = () => {
    const a = from
    setFrom(to)
    setTo(a)
  }

  const FromIcon = mode === 'air' ? IconAirFrom : IconTruck
  const ToIcon = mode === 'air' ? IconAirTo : IconTruck

  return (
    <form
      className="shipment-card"
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <div className="shipment-card__tabs" role="tablist" aria-label="Shipment mode">
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'air'}
          className={`shipment-tab${mode === 'air' ? ' shipment-tab--active' : ''}`}
          onClick={() => setMode('air')}
        >
          <IconPlaneTab />
          Air
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'truck'}
          className={`shipment-tab${mode === 'truck' ? ' shipment-tab--active' : ''}`}
          onClick={() => setMode('truck')}
        >
          <IconTruck />
          Truck
        </button>
      </div>

      <div className="shipment-card__fields">
        <div className="shipment-stack">
          <button
            type="button"
            className="shipment-swap"
            onClick={swap}
            aria-label="Swap origin and destination"
          >
            <svg width="14" height="18" viewBox="0 0 24 32" fill="none" aria-hidden>
              <path
                d="M12 4v22M12 4l-4 4M12 4l4 4M12 26l-4-4M12 26l4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="shipment-row">
            <div className="shipment-row__icon" aria-hidden>
              <FromIcon />
            </div>
            <div className="shipment-row__inputs">
              <label htmlFor="ship-from">From</label>
              <input
                id="ship-from"
                type="text"
                name="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="City, Port, Zip Code"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="shipment-row">
            <div className="shipment-row__icon" aria-hidden>
              <ToIcon />
            </div>
            <div className="shipment-row__inputs">
              <label htmlFor="ship-to">To</label>
              <input
                id="ship-to"
                type="text"
                name="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="City, Port, Zip Code"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </div>

      <button type="submit" className="shipment-card__submit">
        Add Shipment Details
      </button>
    </form>
  )
}
