import type { Metadata } from "next";
import Invitation from "@/components/invitation/Invitation";

export const metadata: Metadata = {
  title: "Mohammed Numan & Saima Nahar — Walima",
  description:
    "Wedding / Walima invitation — Sunday 25th October 2026, Pearl Banqueting Suite, Bradford",
};

export default function Page() {
  return <Invitation />;
}
