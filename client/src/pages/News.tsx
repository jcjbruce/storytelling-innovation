/*
 * News — 826-inspired bold editorial news page
 * Real images from storytellinginnovation.com
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IMAGES } from "@/lib/images";

const HERO_BG = IMAGES.groupOutdoor;
const CLI_FI = IMAGES.torranNorwayClassSelfie;
const EARTH_DAY_CAROL_3 = IMAGES.earthDayCarolCover;
const UPWARD_BOUND = IMAGES.upwardBoundWorkshop;
const JUNE_WORKSHOP = IMAGES.teachersWorkshopCooper;
const INTERVIEW_LEGACY = IMAGES.interviewLegacy;
const IMG_7640 = IMAGES.groupOutdoor;
const PINATA_MOON = IMAGES.pinataMoonCover;
const PICTURE1_JAN = IMAGES.pinataEvent;
const SONGCOMING = IMAGES.songcomingCover;
const NORWEGIAN = IMAGES.norwegianStudents;

const newsItems = [
  {
    date: "February 4, 2026",
    category: "Uncategorized",
    categoryColor: "#1A8C7A",
    title: "Fellowships Across the Globe: Torran Anderson's Path to Creative Storytelling",
    excerpt: "Fellowships have a way of opening doors you did not even know existed. They lead across continents, into classrooms and communities, and toward entirely new ways of seeing the world. For Torran Anderson, fellowships became catalysts for creativity, storytelling, and connection. As a multi-fellowship winner — including the Mira, Rotary Peace, and Fulbright — Torran's journey spans the globe.",
    img: "https://storytellinginnovation.com/wp-content/uploads/2026/02/Torran-5-768x513.jpg",
    link: "https://storytellinginnovation.com/2026/02/04/fellowships-across-the-globe-torran-andersons-path-to-creative-storytelling/",
    featured: true,
  },
  {
    date: "February 4, 2026",
    category: "Uncategorized",
    categoryColor: "#1A8C7A",
    title: "Pine Reads – Interview with Torran Anderson",
    excerpt: "About the Author: Torran Anderson is from the desert town of Tucson, Arizona. He has published over 50 books and loves doing writing workshops with schools and community groups. Torran is currently working on his Tiny Things project as part of the Piñata Moon book. You can send him the \"tiny things\" you find meaningful.",
    img: "https://storytellinginnovation.com/wp-content/uploads/2026/02/image-768x513.png",
    link: "https://storytellinginnovation.com/2026/02/04/pine-reads-interview-with-torran-anderson/",
    featured: false,
  },
  {
    date: "February 4, 2026",
    category: "Uncategorized",
    categoryColor: "#1A8C7A",
    title: "JV Club Podcast – Torran Anderson",
    excerpt: "Episode #422: Torran Anderson — Our first official Boy of Summer is JV's wonderful and dear lifelong (from 4th grade onward!) friend, author Torran Anderson (Piñata Moon). Hear about the amazing work Torran is doing in partnership with the Navajo nation, and of course, memories that Torran and JV share from their own teen years.",
    img: "https://storytellinginnovation.com/wp-content/uploads/2026/02/Collages-768x512.jpg",
    link: "https://storytellinginnovation.com/2026/02/04/jv-club-podcast-torran-anderson/",
    featured: false,
  },
  {
    date: "May 9, 2026",
    category: "Review",
    categoryColor: "#0F1B2D",
    title: "School Library Journal Review of Songcoming",
    excerpt: "Songcoming by Torran Anderson — Rosen/West 44. Jun. 2026. A beautiful cross between a romance and fantasy story. Eve happens upon a merman named Oorin by chance at the river. Both characters are struggling to accept life's fate: Eve, a hideous betrothal; and Oorin, a lost rite of passage. Gr 8 Up.",
    img: "https://storytellinginnovation.com/wp-content/uploads/2025/12/Songcoming.png",
    link: "https://storytellinginnovation.com/2026/05/09/school-library-journal-review-of-songcoming/",
    featured: false,
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Uncategorized": "#1A8C7A",
  "Review": "#0F1B2D",
  "Songcoming": "#E8531D",
};

export default function News() {
  const featured = newsItems.find((n) => n.featured);
  const rest = newsItems.filter((n) => !n.featured);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "white" }}>
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section style={{ position: "relative", minHeight: "45vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,27,45,0.92) 0%, rgba(15,27,45,0.35) 60%, transparent 100%)" }} />
        <div className="container relative z-10 pb-14 pt-24">
          <div className="script-label mb-2" style={{ color: "#F5C842" }}>What's happening</div>
          <h1 className="display-heading" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "white" }}>News</h1>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "#0F1B2D", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 0 C360 60, 1080 60, 1440 0 L1440 60 L0 60 Z" fill="white" />
        </svg>
      </div>

      {/* ── FEATURED STORY ── */}
      {featured && (
        <section style={{ backgroundColor: "white", paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div className="container">
            <div className="script-label mb-2" style={{ color: "#E8531D" }}>Latest story</div>
            <div style={{ border: "2.5px solid #0F1B2D", boxShadow: "6px 6px 0 #E8531D", overflow: "hidden" }}>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div style={{ height: "360px", overflow: "hidden", borderRight: "2.5px solid #0F1B2D" }}>
                  <img src={featured.img} alt={featured.title} className="w-full h-full object-cover" />
                </div>
                <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <span style={{ backgroundColor: featured.categoryColor, color: featured.categoryColor === "#F5C842" ? "#0F1B2D" : "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.3rem 0.7rem" }}>
                      {featured.category}
                    </span>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(15,27,45,0.5)" }}>
                      {featured.date}
                    </span>
                  </div>
                  <h2 className="display-heading mb-4" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#0F1B2D" }}>{featured.title}</h2>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.75, color: "rgba(15,27,45,0.75)", marginBottom: "1.75rem" }}>{featured.excerpt}</p>
                  <a href={featured.link} target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-orange no-underline" style={{ alignSelf: "flex-start", fontSize: "0.85rem" }}>
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ALL NEWS ── */}
      <section style={{ backgroundColor: "white", paddingTop: "1rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="script-label mb-1" style={{ color: "#E8531D" }}>All updates</div>
              <h2 className="display-heading" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#0F1B2D" }}>Recent Stories</h2>
            </div>
            {/* Category legend */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
                <span key={cat} style={{ backgroundColor: color, color: color === "#F5C842" ? "#0F1B2D" : "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.25rem 0.6rem" }}>
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((item) => (
              <div key={item.title} style={{ border: "2.5px solid #0F1B2D", boxShadow: "3px 3px 0 #E8531D", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ height: "180px", overflow: "hidden", borderBottom: "2.5px solid #0F1B2D" }}>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ backgroundColor: item.categoryColor, color: item.categoryColor === "#F5C842" ? "#0F1B2D" : "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.2rem 0.5rem" }}>
                      {item.category}
                    </span>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(15,27,45,0.45)" }}>
                      {item.date}
                    </span>
                  </div>
                  <h3 className="display-heading" style={{ fontSize: "1.4rem", color: "#0F1B2D", lineHeight: 1.2 }}>{item.title}</h3>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.85rem", lineHeight: 1.65, color: "rgba(15,27,45,0.7)", flex: 1 }}>{item.excerpt}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#E8531D", textDecoration: "none", marginTop: "0.5rem" }} className="hover:opacity-70 transition-opacity">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ backgroundColor: "#0F1B2D", borderTop: "2.5px solid #0F1B2D", padding: "3rem 0" }}>
        <div className="container text-center">
          <div className="script-label mb-2" style={{ color: "#F5C842" }}>Stay in the loop</div>
          <h2 className="display-heading mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "white" }}>Want to Collaborate<br />or Stay Connected?</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/contact" className="btn-pill btn-pill-orange no-underline">Get in Touch →</a>
            <a href="https://www.youtube.com/@CenterforStorytellingInnovation" target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-outline-white no-underline">Follow on YouTube</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
