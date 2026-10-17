const PETAL = "M0 0 C -30 -8 -40 -44 0 -52 C 40 -44 30 -8 0 0Z";

export function Rose({ x, y, r, tone }: { x: number; y: number; r: number; tone: "red" | "cream" }) {
  const s = r / 52;
  const g =
    tone === "red"
      ? { a: "url(#inv-rRed1)", b: "url(#inv-rRed2)", c: "url(#inv-rRed3)", line: "#4a0a12" }
      : { a: "url(#inv-rCr1)", b: "url(#inv-rCr2)", c: "url(#inv-rCr3)", line: "#a9806a" };
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <path key={`o${a}`} d={PETAL} transform={`rotate(${a})`} fill={g.a} stroke={g.line} strokeWidth={0.8} strokeOpacity={0.45} />
      ))}
      {[30, 102, 174, 246, 318].map((a) => (
        <path key={`m${a}`} d={PETAL} transform={`rotate(${a}) scale(0.72)`} fill={g.b} stroke={g.line} strokeWidth={1} strokeOpacity={0.45} />
      ))}
      {[15, 105, 195, 285].map((a) => (
        <path key={`i${a}`} d={PETAL} transform={`rotate(${a}) scale(0.46)`} fill={g.c} stroke={g.line} strokeWidth={1.4} strokeOpacity={0.5} />
      ))}
      <circle r={9} fill={g.b} />
      <path d="M-7 1 C -7 -8 7 -9 8 -1 C 8 6 -3 8 -4 1 C -4 -4 4 -4 3 1" fill="none" stroke={g.line} strokeWidth={1.4} strokeOpacity={0.7} />
    </g>
  );
}

export function Leaf({ x, y, a, l }: { x: number; y: number; a: number; l: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${a})`}>
      <path
        d={`M0 0 C ${l * 0.25} ${-l * 0.3} ${l * 0.7} ${-l * 0.32} ${l} 0 C ${l * 0.7} ${l * 0.32} ${l * 0.25} ${l * 0.3} 0 0Z`}
        fill="url(#inv-leaf)"
        stroke="#4b5c34"
        strokeWidth={0.5}
        strokeOpacity={0.6}
      />
      <path d={`M1 0 L ${l * 0.9} 0`} stroke="#4b5c34" strokeWidth={0.7} strokeOpacity={0.8} />
    </g>
  );
}

export function Bud({ x, y, a = 0 }: { x: number; y: number; a?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${a})`}>
      <path d="M0 0 C -4 -4 -4 -10 0 -13 C 4 -10 4 -4 0 0Z" fill="#8a2430" />
      <path d="M0 0 C -3 -3 -4 -6 -3 -8 M0 0 C 3 -3 4 -6 3 -8" stroke="#5f7240" strokeWidth={1} fill="none" />
    </g>
  );
}

export function Blossom({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {[0, 72, 144, 216, 288].map((a) => (
        <circle key={a} cx={0} cy={-4.5} r={3.8} transform={`rotate(${a})`} fill="#f8eedf" stroke="#dcc2a0" strokeWidth={0.5} />
      ))}
      <circle r={2} fill="#d4a24c" />
    </g>
  );
}

const C_LEAVES: [number, number, number, number][] = [
  [160, 20, -20, 55], [175, 95, 20, 50], [150, 150, 60, 45], [20, 140, 120, 45], [-10, 60, 200, 45], [60, -5, -70, 40],
  [270, 25, -30, 45], [275, 80, 15, 42], [200, 105, 80, 38],
  [85, 220, 50, 40], [-5, 240, 150, 38], [75, 170, 10, 35],
  [195, 160, 30, 30], [150, 175, 100, 28],
  [320, 30, -25, 30], [350, 42, 20, 28], [390, 30, -30, 26], [420, 36, 15, 24], [460, 22, -20, 22], [490, 22, 10, 18],
  [42, 265, 40, 28], [25, 295, 160, 26], [36, 330, 30, 24], [20, 365, 170, 22], [30, 395, 30, 20],
  [88, 255, -10, 22], [96, 290, 30, 20],
];
const C_BUDS: [number, number, number][] = [
  [340, 36, 30], [405, 30, 50], [445, 30, 60], [505, 18, 70], [47, 280, 30], [18, 340, -30],
  [38, 380, 25], [100, 320, 20], [232, 112, 40], [300, 70, 50],
];

export function FloralCorner({ className }: { className: string }) {
  return (
    <svg className={`inv-corner ${className}`} viewBox="0 0 520 420" aria-hidden="true">
      <g stroke="#5f7240" fill="none">
        <path d="M230 40 C 300 30 380 45 520 18" strokeWidth={1.4} />
        <path d="M280 60 C 300 70 315 75 330 80" strokeWidth={1.1} />
        <path d="M35 230 C 60 300 10 360 30 420" strokeWidth={1.6} />
        <path d="M60 200 C 90 250 100 300 95 340" strokeWidth={1.1} />
        <path d="M190 130 C 210 120 225 115 235 112" strokeWidth={1.1} />
      </g>
      {C_LEAVES.map(([x, y, a, l], i) => <Leaf key={i} x={x} y={y} a={a} l={l} />)}
      {C_BUDS.map(([x, y, a], i) => <Bud key={i} x={x} y={y} a={a} />)}
      <Rose x={40} y={190} r={48} tone="cream" />
      <Rose x={225} y={55} r={50} tone="cream" />
      <Rose x={95} y={80} r={75} tone="red" />
      <Rose x={175} y={140} r={26} tone="red" />
      <Blossom x={300} y={52} />
      <Blossom x={255} y={110} s={1.1} />
      <Blossom x={120} y={215} />
      <Blossom x={370} y={50} s={0.9} />
    </svg>
  );
}

export function Spray() {
  const leaves: [number, number, number, number][] = [
    [178, 45, 170, 42], [182, 40, 200, 36], [242, 45, 10, 42], [238, 50, -20, 36],
    [190, 58, 140, 30], [230, 58, 40, 30], [195, 32, -140, 28], [225, 32, -40, 28],
  ];
  return (
    <svg className="inv-spray" viewBox="0 0 420 90" aria-hidden="true">
      <g stroke="#a8864f" fill="none" strokeWidth={1}>
        <line x1={22} y1={45} x2={130} y2={45} />
        <line x1={290} y1={45} x2={398} y2={45} />
        <path d="M22 45 C 14 38 6 42 8 48 C 10 53 17 51 15 46" />
        <path d="M398 45 C 406 38 414 42 412 48 C 410 53 403 51 405 46" />
      </g>
      <path d="M40 45 L44 42 L48 45 L44 48Z M372 45 L376 42 L380 45 L376 48Z" fill="#a8864f" />
      {leaves.map(([x, y, a, l], i) => <Leaf key={i} x={x} y={y} a={a} l={l} />)}
      <Bud x={150} y={44} a={-70} />
      <Bud x={270} y={44} a={70} />
      <Rose x={180} y={48} r={16} tone="cream" />
      <Rose x={240} y={48} r={16} tone="cream" />
      <Rose x={210} y={45} r={22} tone="red" />
      <Blossom x={196} y={70} s={0.8} />
      <Blossom x={224} y={70} s={0.8} />
    </svg>
  );
}

/** Gradients used by every flower and ornament. Render once per page. */
export function SharedDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <linearGradient id="inv-rRed1" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#3f0710" /><stop offset="0.6" stopColor="#7a1622" /><stop offset="1" stopColor="#9c2c36" />
        </linearGradient>
        <linearGradient id="inv-rRed2" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#4d0a14" /><stop offset="0.6" stopColor="#8c1e2b" /><stop offset="1" stopColor="#b2414a" />
        </linearGradient>
        <linearGradient id="inv-rRed3" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#3a050c" /><stop offset="1" stopColor="#a3333d" />
        </linearGradient>
        <linearGradient id="inv-rCr1" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#c99a7e" /><stop offset="0.6" stopColor="#ead0b8" /><stop offset="1" stopColor="#f8eadb" />
        </linearGradient>
        <linearGradient id="inv-rCr2" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#d2a588" /><stop offset="0.6" stopColor="#f0d9c3" /><stop offset="1" stopColor="#fcf3e8" />
        </linearGradient>
        <linearGradient id="inv-rCr3" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#c08a6c" /><stop offset="1" stopColor="#f3dcc6" />
        </linearGradient>
        <linearGradient id="inv-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#56693c" /><stop offset="0.5" stopColor="#7b8f5c" /><stop offset="1" stopColor="#5f7244" />
        </linearGradient>
        <linearGradient id="inv-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8c6a32" /><stop offset="0.5" stopColor="#c9a564" /><stop offset="1" stopColor="#8c6a32" />
        </linearGradient>
      </defs>
    </svg>
  );
}
