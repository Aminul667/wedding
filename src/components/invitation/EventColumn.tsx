import { DividerOrn, DoubleDivider, Scroll } from "./ornaments";
import Countdown from "./Countdown";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1" +
  "&destination=" + encodeURIComponent("Pearl Banqueting Suite, 38 Manningham Lane, Bradford BD1 3EA") +
  "&destination_place_id=ChIJ16aFhk3he0gRgHEsbWGoARY";

export default function EventColumn() {
  return (
    <section className="inv-col">
      <DividerOrn className="r" />
      <p className="inv-day">Sunday</p>
      <div className="inv-datebig">
        <Scroll />
        <span className="inv-dnum">
          25<sup>th</sup>
        </span>
        <Scroll flip />
      </div>
      <p className="inv-month">October, 2026</p>
      <DividerOrn className="r" />

      <p className="inv-time">Guest arrival - 12:00pm</p>
      <p className="inv-time">Food served - 12:30pm</p>
      <p className="inv-at">AT</p>

      <p className="inv-venue">Pearl Banqueting Suite</p>
      <p className="inv-addr">
        38 Manningham Lane,
        <br />
        Bradford, BD1 3EA
      </p>
      <a className="inv-dir" href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
        </svg>
        Get directions
      </a>

      <DoubleDivider />
      <p className="inv-cdtitle">Countdown to the wedding</p>
      <Countdown />
    </section>
  );
}
