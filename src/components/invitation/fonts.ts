import { Great_Vibes, Cormorant_Garamond, Amiri, Cinzel } from "next/font/google";

export const fScript = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--inv-script" });
export const fSerif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--inv-serif" });
export const fArabic = Amiri({ subsets: ["arabic"], weight: ["400", "700"], variable: "--inv-arabic" });
export const fCaps = Cinzel({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--inv-caps" });

export const fontVariables = `${fScript.variable} ${fSerif.variable} ${fArabic.variable} ${fCaps.variable}`;
