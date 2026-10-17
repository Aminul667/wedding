import { DividerOrn } from "./ornaments";
import { Spray } from "./flowers";

export default function CoupleColumn() {
  return (
    <section className="inv-col">
      <p className="inv-caps">With the blessings of</p>
      <p className="inv-red">Late Md. Nurul Islam &amp; Khaleda Begum</p>
      <p className="inv-caps">Parents of the groom</p>
      <DividerOrn />

      <p className="inv-caps">
        Request the honour of your presence
        <br />
        at the wedding / walima of
        <br />
        their beloved youngest son
      </p>

      <p className="inv-script">Mohammed Numan</p>
      <p className="inv-with">with</p>
      <p className="inv-script">Saima Nahar</p>

      <div className="inv-gap" />
      <p className="inv-caps">Daughter of</p>
      <p className="inv-red">Zaman Miah &amp; Sumsunnahar Begum</p>
      <Spray />
    </section>
  );
}
