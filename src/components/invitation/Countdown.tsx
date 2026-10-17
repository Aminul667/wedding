// src/components/invitation/Countdown.tsx
"use client";

import { Fragment, useEffect, useState } from "react";

/**
 * Converts a UK wall-clock time (Europe/London) to an exact moment, handling
 * GMT/BST automatically. The countdown then shows the same remaining time
 * for every guest, wherever they are (UK, Bangladesh, anywhere).
 */
function ukTime(year: number, month: number, day: number, hour: number, minute = 0): number {
  const guess = Date.UTC(year, month - 1, day, hour, minute);
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  }).formatToParts(new Date(guess));
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  const londonAsUtc = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour"), get("minute"));
  return guess - (londonAsUtc - guess); // subtract London's offset from UTC at that moment
}

// Sunday 25 October 2026, 12:00pm UK time (guest arrival) at Pearl Banqueting Suite, Bradford.
const TARGET = ukTime(2026, 10, 25, 12, 0);

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function getParts(now: number): Parts {
  const diff = Math.max(0, TARGET - now);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

function Frame() {
  return (
    <svg className="inv-cd-frame" viewBox="0 0 76 66" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M11 2 H65 Q65 10 74 11 V55 Q65 56 65 64 H11 Q11 56 2 55 V11 Q11 10 11 2Z"
        fill="rgba(255,252,244,0.45)"
        stroke="#b08d57"
        strokeWidth={1.2}
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M14 5 H62 Q62 12 71 14 V52 Q62 54 62 61 H14 Q14 54 5 52 V14 Q14 12 14 5Z"
        fill="none"
        stroke="#b08d57"
        strokeOpacity={0.45}
        strokeWidth={0.6}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function Countdown() {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    const tick = () => setParts(getParts(Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const done = parts !== null && parts.days + parts.hours + parts.minutes + parts.seconds === 0;

  const units: { label: string; value: string }[] = [
    { label: "Days", value: parts ? pad(parts.days) : "--" },
    { label: "Hours", value: parts ? pad(parts.hours) : "--" },
    { label: "Minutes", value: parts ? pad(parts.minutes) : "--" },
    { label: "Seconds", value: parts ? pad(parts.seconds) : "--" },
  ];

  return (
    <div className="inv-cd-wrap" aria-live="polite">
      <div className="inv-cd">
        {units.map((u, i) => (
          <Fragment key={u.label}>
            {i > 0 && <span className="inv-cd-colon">:</span>}
            <div className="inv-cd-unit">
              <div className="inv-cd-box">
                <Frame />
                <span className="inv-cd-num">{u.value}</span>
              </div>
              <span className="inv-cd-lbl">{u.label}</span>
            </div>
          </Fragment>
        ))}
      </div>
      {done && <p className="inv-cd-done">The celebration has begun</p>}
    </div>
  );
}
