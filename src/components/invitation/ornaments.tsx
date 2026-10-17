const GOLD = "#a8864f";

export function FrameBorder({ className }: { className: string }) {
  return (
    <svg className={`inv-border ${className}`} viewBox="0 0 600 60" aria-hidden="true">
      <g stroke="url(#inv-gold)" fill="none" strokeWidth={1.3}>
        <line x1={40} y1={34} x2={250} y2={34} />
        <line x1={350} y1={34} x2={560} y2={34} />
        <path d="M40 34 C 30 26 18 30 20 37 C 22 43 31 41 29 35" />
        <path d="M560 34 C 570 26 582 30 580 37 C 578 43 569 41 571 35" />
        <path d="M300 34 C 285 22 262 22 258 32 C 255 40 268 42 270 34" />
        <path d="M300 34 C 315 22 338 22 342 32 C 345 40 332 42 330 34" />
        <path d="M300 34 C 288 40 276 46 266 44" />
        <path d="M300 34 C 312 40 324 46 334 44" />
      </g>
      <g fill="url(#inv-gold)">
        <path d="M300 6 C 291 14 291 25 300 32 C 309 25 309 14 300 6Z" />
        <path d="M300 54 C 295 48 295 42 300 38 C 305 42 305 48 300 54Z" />
        <path d="M286 18 C 282 22 284 28 292 30 C 290 24 290 20 286 18Z" />
        <path d="M314 18 C 318 22 316 28 308 30 C 310 24 310 20 314 18Z" />
        <circle cx={252} cy={34} r={2} />
        <circle cx={348} cy={34} r={2} />
        <path d="M60 34 L64 31 L68 34 L64 37Z M532 34 L536 31 L540 34 L536 37Z" />
      </g>
    </svg>
  );
}

export function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg className={`inv-flourish ${className}`} viewBox="0 0 240 16" aria-hidden="true">
      <g stroke={GOLD} fill="none" strokeWidth={0.9}>
        <line x1={4} y1={8} x2={96} y2={8} />
        <line x1={144} y1={8} x2={236} y2={8} />
        <path d="M112 8 C 108 2 100 2 100 8 C 100 12 106 12 106 8" />
        <path d="M128 8 C 132 2 140 2 140 8 C 140 12 134 12 134 8" />
      </g>
      <path d="M120 1 C 117 4 117 6 120 8 C 123 6 123 4 120 1Z M120 15 C 117 12 117 10 120 8 C 123 10 123 12 120 15Z" fill={GOLD} />
      <path d="M120 4 L124 8 L120 12 L116 8Z" fill={GOLD} />
      <circle cx={2} cy={8} r={1.4} fill={GOLD} />
      <circle cx={238} cy={8} r={1.4} fill={GOLD} />
    </svg>
  );
}

export function DividerOrn({ className = "" }: { className?: string }) {
  return (
    <svg className={`inv-divorn ${className}`} viewBox="0 0 300 14" aria-hidden="true">
      <g stroke={GOLD} fill="none" strokeWidth={1}>
        <line x1={0} y1={7} x2={136} y2={7} />
        <line x1={164} y1={7} x2={300} y2={7} />
        <path d="M144 7 C 140 1 133 3 136 7 M156 7 C 160 1 167 3 164 7" />
        <path d="M144 7 C 140 13 133 11 136 7 M156 7 C 160 13 167 11 164 7" />
      </g>
      <path d="M150 1 L155 7 L150 13 L145 7Z" fill={GOLD} />
    </svg>
  );
}

export function OrnRule({ flip = false }: { flip?: boolean }) {
  return (
    <svg className="inv-ornrule" viewBox="0 0 200 12" aria-hidden="true" style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <line x1={8} y1={6} x2={192} y2={6} stroke={GOLD} strokeWidth={0.9} />
      <path d="M0 6 L5 3 L10 6 L5 9Z" fill={GOLD} />
      <path d="M100 2 L104 6 L100 10 L96 6Z" fill={GOLD} />
      <path d="M90 6 C 93 2 96 3 96 6 M110 6 C 107 2 104 3 104 6" stroke={GOLD} fill="none" strokeWidth={0.8} />
    </svg>
  );
}

export function Scroll({ flip = false }: { flip?: boolean }) {
  return (
    <svg className="inv-scroll" viewBox="0 0 70 24" aria-hidden="true" style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <g stroke={GOLD} fill="none" strokeWidth={1.1}>
        <line x1={28} y1={12} x2={70} y2={12} />
        <path d="M28 12 C 22 12 18 5 11 6 C 4 7 4 16 10 16 C 14 16 15 11 11 11" />
        <path d="M28 12 C 22 12 18 19 11 18" />
      </g>
      <path d="M32 12 L35 9.5 L38 12 L35 14.5Z" fill={GOLD} />
    </svg>
  );
}

export function DoubleDivider() {
  return (
    <svg className="inv-dbl" viewBox="0 0 380 20" aria-hidden="true">
      <g stroke={GOLD} fill="none">
        <line x1={20} y1={7} x2={174} y2={7} strokeWidth={1} />
        <line x1={206} y1={7} x2={360} y2={7} strokeWidth={1} />
        <line x1={4} y1={14} x2={376} y2={14} strokeWidth={0.7} />
        <path d="M182 7 C 178 2 172 4 174 7 M198 7 C 202 2 208 4 206 7" strokeWidth={0.9} />
        <path d="M4 14 C 0 10 -2 18 4 18 M376 14 C 380 10 382 18 376 18" strokeWidth={0.8} />
      </g>
      <path d="M190 1 L195 7 L190 13 L185 7Z" fill={GOLD} />
    </svg>
  );
}
