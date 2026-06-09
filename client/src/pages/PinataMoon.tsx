/*
 * Piñata Moon — Individual book detail page
 * Content sourced from storytellinginnovation.com/pinata-moon/
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IMAGES } from "@/lib/images";

const HERO_BG = IMAGES.pinataMoonBanner;

const reviews = [
  {
    quote: `"It's just a phase they say of me," tweets @themoonforreal, winking. "But, it's true. Don't give up." In this original, thoughtful YA novel in verse, by Tucsonan Torran Anderson, a tweeting moon is the most consistent comfort for a despairing high school senior. Enzo's life-long friend J. has recently committed suicide, and he and buddies Matas and Sci-fi are driving around town, in time-honored Tucson fashion. Matas and Sci-fi are looking for parties; Enzo is looking to make sense of J.'s death. The action takes place in one night. From sunset on Gates Pass, through midtown, to Sabino Canyon in the east, and finally to early morning high in the northern Foothills, the boys cruise, party, hike, and kibitz. Enzo, however, feels apart. His mind and imagination manifest in individual strands: poems contemplate life and death; the moon tweets; a visceral yearning imagines a violent tribal rite of passage into adulthood; and a tempering, calming ongoing list of "tiny moments" argues to make life worthwhile. (Think "mom's mac and cheese"; the Rillito River with running water). It's not only young adults who can be touched by this affecting book.`,
    attribution: "— Christine Wald-Hopkins, Arizona Daily Star",
  },
  {
    quote: `"You get drunk and it wears off, you fall in love and quickly climb out of it." Enzo Jones has lost a friend, maybe even more. He'll never know because that part of his life is gone now—forever—and the endless nights cruising with his buddies and looking for parties isn't enough to fill the hole that J's suicide has left. With no one but the moon to guide him through his grief, the desert night stretches on in an endless sea of lost souls and unsung potential. Why did she do it? Could he have made a difference? Some questions may never have answers, but life will go on without them. Using poetic verse and conjectural lists, as well as a voyeuristic—and sometimes cryptic—social media feed from the perspective of the moon, Piñata Moon deftly explores the complex issues of teen suicide and the effects it can have on the people it leaves behind. Seen through the lens of a Tucson teenager, Anderson's narrative considers the value of life and its potential, as well as the questions left unanswered after the sudden, jarring absence of a loved one. Partly an ode to the desert landscape, the striking imagery and poetic language serves as a warm background for a cold subject, creating a juxtaposition that fuels the piecemeal story toward a daring conclusion that pushes the reader into existential reflection. Edgy, inventive, and sincere, Anderson gives the reader a new look at an old medium, creating a unique experience that keeps hold of the reader long after the last page has been turned.`,
    attribution: "— Joe Buckler, Pine Reads Review",
  },
  {
    quote: `"THIS BOOK IS ABSOLUTELY BEAUTIFUL!! Written in verse, interspersed with tweets from the Moon, Piñata Moon gracefully illustrates the struggle teenagers go through as they approach the precipice of adulthood. All the while taking you on a tour of Tucson on which only a soul-searching adolescent could be your docent." #torrananderson #tucsonauthor #readlocal #shoplocal #booksellerrecommends`,
    attribution: "— Bookseller Nadia",
  },
];

export default function PinataMoon() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "white" }}>
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section style={{ position: "relative", minHeight: "45vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,27,45,0.95) 0%, rgba(15,27,45,0.4) 60%, transparent 100%)" }} />
        <div className="container relative z-10 pb-14 pt-24">
          <div className="script-label mb-2" style={{ color: "#F5C842" }}>YA Novel in Verse</div>
          <h1 className="display-heading" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "white" }}>Piñata Moon</h1>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.75)", marginTop: "0.5rem" }}>
            Winner of the Paterson Prize Books for Young People and NM-AZ Book Prize for Poetry
          </p>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "#0F1B2D", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 0 C360 60, 1080 60, 1440 0 L1440 60 L0 60 Z" fill="white" />
        </svg>
      </div>

      {/* ── BOOK SUMMARY + COVER ── */}
      <section style={{ backgroundColor: "white", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Cover */}
            <div style={{ flex: "0 0 auto", width: "260px", maxWidth: "100%" }}>
              <div style={{ border: "2.5px solid #0F1B2D", boxShadow: "6px 6px 0 #F5C842", overflow: "hidden", backgroundColor: "#F5F0EB" }}>
                <img
                  src={IMAGES.pinataMoonCover}
                  alt="Piñata Moon book cover"
                  style={{ width: "100%", display: "block", objectFit: "contain" }}
                />
              </div>
              {/* Buy buttons */}
              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a
                  href="https://bookshop.org/p/books/pi-ata-moon-torran-anderson/8e509fa0097a1751?ean=9781733780902&next=t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-orange no-underline text-center"
                  style={{ fontSize: "0.85rem" }}
                >
                  IndieBound.org
                </a>
                <a
                  href="http://storytellinginnovation.com/wp-content/uploads/2025/12/Pinata-Moon-Reader-Questions-V3.docx.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-navy no-underline text-center"
                  style={{ fontSize: "0.85rem" }}
                >
                  Download Reader Guide
                </a>
                <a
                  href="https://www.amazon.com/Pi%C3%B1ata-Moon-Torran-Anderson/dp/1733780904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill no-underline text-center"
                  style={{ fontSize: "0.85rem", backgroundColor: "#F5C842", color: "#0F1B2D", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.65rem 1.5rem", display: "block" }}
                >
                  Buy Online
                </a>
              </div>
            </div>

            {/* Summary */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "#E8531D",
                  color: "white",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.3rem 0.75rem",
                  marginBottom: "1.25rem",
                }}
              >
                Book Summary
              </div>
              <h2 className="display-heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#0F1B2D", marginBottom: "1.25rem" }}>
                About the Book
              </h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(15,27,45,0.8)", marginBottom: "1rem" }}>
                When Envo's friend, J., commits suicide, he's caught between his regular routine of driving around looking for parties and his own struggles with depression. Told over the course of one night in Tucson, Arizona, Enzo searches for a rite of passage that will help him confront J.'s death. As Enzo wrestles with his complicated history with J., he struggles to communicate with his friends, Matas and Sci-fi, and imagines the moon is his only confidant.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(15,27,45,0.8)", marginBottom: "1rem" }}>
                Enzo keeps a running list of the tiny things he enjoys about living to combat his urge to follow in J.'s footsteps, and he receives tweets from the moon that give him the guidance he craves. This YA Novel in Verse explores how we navigate the delicate balance between loss and persistence.
              </p>
              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1rem 1.25rem",
                  backgroundColor: "#F5F0EB",
                  border: "2px solid #0F1B2D",
                  borderLeft: "5px solid #F5C842",
                }}
              >
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#E8531D", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                  Award Winner
                </p>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.95rem", color: "#0F1B2D", lineHeight: 1.6 }}>
                  Winner of the <strong>Paterson Prize Books for Young People</strong> and <strong>NM-AZ Book Prize for Poetry</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "white", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 60 C360 0, 1080 0, 1440 60 L1440 60 L0 60 Z" fill="#0F1B2D" />
        </svg>
      </div>

      {/* ── REVIEWS ── */}
      <section style={{ backgroundColor: "#0F1B2D", paddingTop: "1rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="script-label mb-2" style={{ color: "#F5C842" }}>What readers are saying</div>
          <h2 className="display-heading" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white", marginBottom: "3rem" }}>Reviews</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {reviews.map((review, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1.5px solid rgba(255,255,255,0.12)",
                  borderLeft: "4px solid #F5C842",
                  padding: "1.75rem 2rem",
                }}
              >
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.975rem", lineHeight: 1.8, color: "rgba(255,255,255,0.85)", marginBottom: "1rem", fontStyle: "italic" }}>
                  {review.quote}
                </p>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#F5C842", letterSpacing: "0.05em" }}>
                  {review.attribution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: "#E8531D", paddingTop: "3.5rem", paddingBottom: "3.5rem", textAlign: "center" }}>
        <div className="container">
          <h2 className="display-heading" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "white", marginBottom: "1rem" }}>
            Ready to Read?
          </h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.85)", marginBottom: "2rem" }}>
            Order your copy today and experience this award-winning YA novel in verse.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://www.amazon.com/Pi%C3%B1ata-Moon-Torran-Anderson/dp/1733780904"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "white",
                color: "#E8531D",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.85rem 2rem",
                textDecoration: "none",
                display: "inline-block",
                border: "2.5px solid white",
                boxShadow: "4px 4px 0 rgba(0,0,0,0.2)",
              }}
            >
              Buy on Amazon
            </a>
            <a
              href="/books"
              style={{
                backgroundColor: "transparent",
                color: "white",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.85rem 2rem",
                textDecoration: "none",
                display: "inline-block",
                border: "2.5px solid white",
              }}
            >
              ← Back to All Books
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
