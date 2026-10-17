import { Flourish, OrnRule } from "./ornaments";

export default function VersesColumn() {
  return (
    <section className="inv-col">
      <p className="inv-bism" lang="ar">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
      <Flourish />
      <p className="inv-en">
        In the name of Allah, the Most Gracious,
        <br />
        the Most Merciful
      </p>

      <p className="inv-ar" lang="ar">
        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
        <br />
        وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
      </p>
      <p className="inv-en">
        And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and
        He placed between you affection and mercy. Indeed in that are signs for a people who give thought.
      </p>
      <p className="inv-ref">
        <OrnRule /> Surah Ar-Rum — 30:21 <OrnRule flip />
      </p>

      <p className="inv-ar big" lang="ar">وَخَلَقْنَاكُمْ أَزْوَاجًا</p>
      <p className="inv-en">And We created you in pairs</p>
      <p className="inv-ref tight">
        <OrnRule /> Surah An-Naba — 78:8 <OrnRule flip />
      </p>
    </section>
  );
}
