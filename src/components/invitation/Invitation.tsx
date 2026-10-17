import "./invitation.css";
import { fontVariables } from "./fonts";
import { FloralCorner, SharedDefs } from "./flowers";
import { DividerOrn, FrameBorder } from "./ornaments";
import VersesColumn from "./VersesColumn";
import CoupleColumn from "./CoupleColumn";
import EventColumn from "./EventColumn";

export default function Invitation() {
  return (
    <main className={`inv-wrap ${fontVariables}`}>
      <SharedDefs />

      <article className="inv-card">
        <FloralCorner className="inv-tl" />
        <FloralCorner className="inv-tr" />
        <FloralCorner className="inv-bl" />
        <FloralCorner className="inv-br" />
        <FrameBorder className="top" />
        <FrameBorder className="bottom" />

        <div className="inv-grid">
          <VersesColumn />
          <DividerOrn className="inv-sep" />
          <CoupleColumn />
          <DividerOrn className="inv-sep" />
          <EventColumn />
        </div>
      </article>
    </main>
  );
}
