import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Link-preview image shown when the invitation is shared (WhatsApp, Facebook, iMessage, etc.).
export const alt =
  "Wedding / Walima invitation — Mohammed Numan & Saima Nahar, Sunday 25th October 2026, Pearl Banqueting Suite, Bradford";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const RED = "#7b1e24";
const INK = "#3f3024";
const GOLD = "#a8864f";

const font = (file: string) => readFile(join(process.cwd(), "assets", file));

// Great Vibes' space glyph is too narrow to read, so names are laid out word by word.
function ScriptName({ text, marginTop = 0 }: { text: string; marginTop?: number }) {
  return (
    <div style={{ display: "flex", gap: 30, fontFamily: "Great Vibes", fontSize: 112, color: RED, lineHeight: 1.15, marginTop }}>
      {text.split(" ").map((word) => (
        <span key={word}>{word}</span>
      ))}
    </div>
  );
}

function Rule({ width = 90 }: { width?: number }) {
  return <div style={{ width, height: 1, background: GOLD }} />;
}

export default async function Image() {
  const [script, caps, serif] = await Promise.all([
    font("GreatVibes-Regular.ttf"),
    font("Cinzel-Bold.ttf"),
    font("CormorantGaramond-SemiBold.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 28,
          background: "#e6d7bb",
          fontFamily: "Cormorant",
          color: INK,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            padding: 10,
            border: `2px solid ${GOLD}`,
            background:
              "radial-gradient(ellipse at 50% 45%, #fffbf0 0%, #f3e8d3 60%, #e9d8b8 100%)",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: `1px solid ${GOLD}`,
            }}
          >
            <div style={{ fontSize: 26, letterSpacing: 6, textTransform: "uppercase" }}>
              You are invited to the wedding / walima of
            </div>

            <ScriptName text="Mohammed Numan" marginTop={14} />
            <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 24, letterSpacing: 5 }}>
              <Rule />
              WITH
              <Rule />
            </div>
            <ScriptName text="Saima Nahar" />

            <div style={{ display: "flex", alignItems: "center", gap: 22, marginTop: 22 }}>
              <Rule width={70} />
              <div style={{ fontFamily: "Cinzel", fontSize: 32, color: RED, letterSpacing: 2 }}>
                Sunday 25th October 2026
              </div>
              <Rule width={70} />
            </div>
            <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", marginTop: 10 }}>
              12:00pm · Pearl Banqueting Suite, Bradford
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Great Vibes", data: script, style: "normal", weight: 400 },
        { name: "Cinzel", data: caps, style: "normal", weight: 700 },
        { name: "Cormorant", data: serif, style: "normal", weight: 600 },
      ],
    },
  );
}
