/**
 * Air / ground / ocean “3D” stage — CSS perspective + SVG, no WebGL (keeps bundle light).
 */
export default function LogisticsVisual({ compact = false }) {
  return (
    <div className={`logistics-visual${compact ? ' logistics-visual--compact' : ''}`} aria-hidden>
      <div className="logistics-visual__glow" />
      <div className="logistics-visual__stage">
        <div className="logistics-visual__pedestal logistics-visual__pedestal--air">
          <div className="logistics-visual__orbit">
            <div className="logistics-visual__mesh logistics-visual__mesh--air">
              <svg viewBox="0 0 120 100" className="logistics-visual__svg" fill="none">
                <path
                  d="M60 8 L95 48 L75 52 L85 72 L60 58 L35 72 L45 52 L25 48 Z"
                  fill="url(#wingGrad)"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="1"
                />
                <ellipse cx="60" cy="48" rx="28" ry="8" fill="#f23e32" opacity="0.9" />
                <defs>
                  <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#7f94a2" stopOpacity="0.85" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <span className="logistics-visual__label">Air</span>
        </div>

        <div className="logistics-visual__pedestal logistics-visual__pedestal--ground">
          <div className="logistics-visual__orbit logistics-visual__orbit--delay">
            <div className="logistics-visual__mesh logistics-visual__mesh--truck">
              <svg viewBox="0 0 120 90" className="logistics-visual__svg" fill="none">
                <rect x="12" y="38" width="72" height="28" rx="3" fill="#002946" stroke="rgba(255,255,255,0.2)" />
                <rect x="78" y="28" width="32" height="38" rx="2" fill="#f23e32" opacity="0.95" />
                <circle cx="32" cy="72" r="10" fill="#1a1a1a" stroke="#444" strokeWidth="2" />
                <circle cx="88" cy="72" r="10" fill="#1a1a1a" stroke="#444" strokeWidth="2" />
                <rect x="22" y="42" width="18" height="12" rx="1" fill="rgba(255,255,255,0.25)" />
              </svg>
            </div>
          </div>
          <span className="logistics-visual__label">Ground</span>
        </div>

        <div className="logistics-visual__pedestal logistics-visual__pedestal--sea">
          <div className="logistics-visual__orbit logistics-visual__orbit--delay2">
            <div className="logistics-visual__mesh logistics-visual__mesh--ship">
              <svg viewBox="0 0 120 90" className="logistics-visual__svg" fill="none">
                <path
                  d="M8 58 L112 58 L100 78 L20 78 Z"
                  fill="#002946"
                  stroke="rgba(255,255,255,0.2)"
                />
                <rect x="38" y="22" width="14" height="36" fill="#f23e32" opacity="0.85" rx="1" />
                <rect x="56" y="30" width="14" height="28" fill="#7f94a2" opacity="0.9" rx="1" />
                <rect x="74" y="26" width="14" height="32" fill="#f23e32" opacity="0.7" rx="1" />
                <path d="M0 58 Q60 48 120 58" stroke="rgba(127,148,162,0.5)" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
          <span className="logistics-visual__label">Ocean</span>
        </div>
      </div>
    </div>
  )
}
