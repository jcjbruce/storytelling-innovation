/*
 * Books — 826-inspired bold editorial books page
 * Real book cover images from storytellinginnovation.com
 * Bold display type, color blocks, wave dividers
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IMAGES } from "@/lib/images";

const BASE = "https://storytellinginnovation.com/wp-content/uploads/2025/12/";
const BASE2 = "https://storytellinginnovation.com/wp-content/uploads/2025/10/";
const HERO_BG = IMAGES.workshopKautz;
const COMPILATION = IMAGES.pinataMoonBanner;

const featuredBooks = [
  {
    title: "Piñata Moon",
    img: IMAGES.pinataMoonCover,
    buyUrl: "/pinata-moon",
    badge: "Preorder Now",
    badgeBg: "#F5C842",
    badgeColor: "#0F1B2D",
    desc: "A YA novel-in-verse set in Tucson, Arizona — exploring teen grief, the desert night, and the will to keep living.",
    review: "★★★★★ Arizona Daily Star",
  },
  {
    title: "Songcoming",
    img: IMAGES.songcomingCover,
    buyUrl: "/songcoming",
    badge: "Novel-in-Verse",
    badgeBg: "#0F1B2D",
    badgeColor: "white",
    desc: "A lyrical novel-in-verse that gives the reader a new look at an old medium — an experience that keeps hold long after the last page.",
    review: "★★★★★ Pine Reads Review",
  },
  {
    title: "Earth Day Carol",
    img: IMAGES.earthDayCarolCover,
    buyUrl: "https://storytellinginnovation.com/books/",
    badge: "Picture Book",
    badgeBg: "#1A8C7A",
    badgeColor: "white",
    desc: "A heartfelt picture book celebrating Earth Day and environmental stewardship for classrooms and families.",
    review: "Available now",
  },
];

const readingAZBooks = [
  { title: "Sister Daisy, Sister Rose", img: `${BASE}Sister-Daisy-Sister-Rose.png` },
  { title: "Roadside Oddities", img: `${BASE}Roadside-Oddities.png` },
  { title: "Noni's Newspaper", img: `${BASE}Nonis-Newspaper.png` },
  { title: "Mongo's Migration", img: `${BASE}Mongos-Migration.png` },
  { title: "Luna Has Nothing to Wear", img: `${BASE}Luna-Has-Nothing-to-Wear.png` },
  { title: "Lost Cities", img: `${BASE}Lost-Cities.png` },
  { title: "Looking for Bigfoot", img: `${BASE}Looking-for-Bigfoot.png` },
  { title: "Landfills", img: `${BASE}Landfills.png` },
  { title: "Grounded to Earth", img: `${BASE}Grounded-to-Earth.png` },
  { title: "Brother Messy, Brother Neat", img: `${BASE}Brother-Messy-Brother-Neat.png` },
  { title: "Broken Arm Blues", img: `${BASE}Broken-Arm-Blues.jpg` },
  { title: "Amazing Beaches", img: `${BASE}Amazing-Beaches.png` },
  { title: "Alia & the Furniture Troll", img: `${BASE}Alia-the-Furniture-Troll.png` },
  { title: "Why I'm Late Today", img: `${BASE}Why-Im-Late-Today.png` },
  { title: "Where's the Joey?", img: `${BASE}Wheres-the-Joey_.png` },
  { title: "Vampire Dentist", img: `${BASE}Vampire-Dentist.png` },
  { title: "Two", img: `${BASE}Two.png` },
  { title: "Tiny Tugboat", img: `${BASE}Tiny-Tugboat.png` },
  { title: "The Pirate Substitute", img: `${BASE}The-Pirate-Substitute.png` },
  { title: "The Legend of Sleepy Hollow", img: `${BASE}The-Legend-of-Sleepy-Hollow.png` },
  { title: "The Parade", img: `${BASE}The-Parade.png` },
  { title: "The Creature Constitution", img: `${BASE}The-Creature-Constitution.png` },
  { title: "The Butterfly Life Cycle", img: `${BASE}The-Butterfly-Life-Cycle.png` },
  { title: "Statues in the Sand", img: `${BASE}Statues-in-the-Sand.png` },
  { title: "Statues in the Ice", img: `${BASE}Statues-in-the-Ice.png` },
];

export default function Books() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "white" }}>
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section style={{ position: "relative", minHeight: "45vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center 50%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,27,45,0.92) 0%, rgba(15,27,45,0.35) 60%, transparent 100%)" }} />
        <div className="container relative z-10 pb-14 pt-24">
          <div className="script-label mb-2" style={{ color: "#F5C842" }}>Read something great</div>
          <h1 className="display-heading" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "white" }}>Books</h1>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "#0F1B2D", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 0 C360 60, 1080 60, 1440 0 L1440 60 L0 60 Z" fill="white" />
        </svg>
      </div>

      {/* ── INTRO ── */}
      <section style={{ backgroundColor: "white", paddingTop: "3rem", paddingBottom: "2rem" }}>
        <div className="container" style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.1rem", lineHeight: 1.8, color: "rgba(15,27,45,0.75)" }}>
            We believe stories can inspire creativity, spark curiosity, and strengthen connection. Through beautifully crafted books, we bring storytelling to life in ways that invite reflection, imagination, and shared experience.
          </p>
        </div>
      </section>

      {/* ── FEATURED BOOKS ── */}
      <section style={{ backgroundColor: "white", paddingTop: "2rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="script-label mb-1" style={{ color: "#E8531D" }}>Handpicked favorites</div>
              <h2 className="display-heading" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#0F1B2D" }}>Featured Titles</h2>
            </div>
            <a href="https://storytellinginnovation.com/books/" target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-orange no-underline flex-shrink-0" style={{ fontSize: "0.85rem" }}>
              View on original site →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBooks.map((book) => (
              <div
                key={book.title}
                className="card-lift"
                style={{ backgroundColor: "white", display: "flex", flexDirection: "column", border: "2.5px solid #0F1B2D", boxShadow: "4px 4px 0 #0F1B2D" }}
              >
                <div style={{ position: "relative", height: "300px", overflow: "hidden", borderBottom: "2.5px solid #0F1B2D", backgroundColor: "#F5F0EB" }}>
                  <img src={book.img} alt={book.title} className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500" />
                  <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", backgroundColor: book.badgeBg, color: book.badgeColor, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.3rem 0.7rem", transform: "rotate(-2deg)" }}>
                    {book.badge}
                  </div>
                </div>
                <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <h3 className="display-heading" style={{ fontSize: "1.75rem", color: "#0F1B2D" }}>{book.title}</h3>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.875rem", color: "rgba(15,27,45,0.7)", lineHeight: 1.6 }}>{book.desc}</p>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem", color: "#E8531D", letterSpacing: "0.04em" }}>{book.review}</p>
                  <a href={book.buyUrl} className="btn-pill btn-pill-navy no-underline mt-auto text-center" style={{ fontSize: "0.8rem", padding: "0.55rem 1.25rem" }}>
                    {book.title === "Piñata Moon" ? "Preorder Now" : book.title === "Songcoming" ? "Pre-Order Now" : "Buy Online"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "white", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 60 C360 0, 1080 0, 1440 60 L1440 60 L0 60 Z" fill="#0F1B2D" />
        </svg>
      </div>

      {/* ── READING A-Z ── */}
      <section style={{ backgroundColor: "#0F1B2D", paddingTop: "1rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="script-label mb-1" style={{ color: "#F5C842" }}>Educational series</div>
              <h2 className="display-heading" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white" }}>Reading A-Z Collection</h2>
            </div>
            <div
              style={{
                backgroundColor: "#E8531D",
                color: "white",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.5rem 1rem",
                transform: "rotate(-2deg)",
                boxShadow: "3px 3px 0 rgba(255,255,255,0.3)",
                flexShrink: 0,
              }}
            >
              {readingAZBooks.length} Titles
            </div>
          </div>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: "600px", marginBottom: "2.5rem" }}>
            A comprehensive collection of educational books published through Reading A-Z — covering science, nature, history, and imagination for young readers.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {readingAZBooks.map((book) => (
              <div
                key={book.title}
                className="card-lift"
                style={{ backgroundColor: "white", border: "2px solid rgba(255,255,255,0.15)", overflow: "hidden" }}
              >
                <div style={{ height: "160px", backgroundColor: "#F5F0EB", overflow: "hidden", borderBottom: "2px solid rgba(0,0,0,0.1)" }}>
                  <img src={book.img} alt={book.title} className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-500" />
                </div>
                <div style={{ padding: "0.6rem 0.75rem" }}>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.02em", color: "#0F1B2D", lineHeight: 1.3 }}>{book.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "#0F1B2D", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 0 C360 60, 1080 60, 1440 0 L1440 60 L0 60 Z" fill="#F5F0EB" />
        </svg>
      </div>

      {/* ── COMPILATION BANNER ── */}
      <section style={{ backgroundColor: "#F5F0EB", paddingTop: "2rem", paddingBottom: "4rem", borderBottom: "2.5px solid #0F1B2D" }}>
        <div className="container">
          <img src={COMPILATION} alt="Book compilation" style={{ width: "100%", maxHeight: "280px", objectFit: "cover", display: "block", border: "2.5px solid #0F1B2D", boxShadow: "5px 5px 0 #E8531D" }} />
        </div>
      </section>

      {/* ── SONG OF THE SANTA CRUZ RIVER ── */}
      <section style={{ backgroundColor: "white", paddingTop: "5rem", paddingBottom: "5rem", borderTop: "2.5px solid #0F1B2D" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Book cover */}
            <div style={{ flex: "0 0 auto", width: "260px", maxWidth: "100%" }}>
              <div style={{ border: "2.5px solid #0F1B2D", boxShadow: "6px 6px 0 #1A8C7A", overflow: "hidden", backgroundColor: "#F5F0EB" }}>
                <img
                  src="https://storytellinginnovation.com/wp-content/uploads/2025/12/Song-of-the-Santa-Cruz-River-Cover.png"
                  alt="Song of the Santa Cruz River"
                  style={{ width: "100%", display: "block", objectFit: "contain" }}
                  onError={(e) => { (e.target as HTMLImageElement).src = IMAGES.pinataMoonBanner; }}
                />
              </div>
            </div>
            {/* Text */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "#1A8C7A",
                  color: "white",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.3rem 0.75rem",
                  marginBottom: "1rem",
                }}
              >
                Trilingual Children's Book
              </div>
              <h2
                className="display-heading"
                style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", color: "#0F1B2D", marginBottom: "1rem" }}
              >
                Song of the Santa Cruz River
              </h2>
              <p
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "#1A8C7A",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                By Torran Anderson &amp; Mabel Rivera · Illustrated by Bill Singleton
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.75, color: "rgba(15,27,45,0.8)", marginBottom: "1rem" }}>
                A beautifully illustrated trilingual children's book that explores the river at the heart of Tucson, highlighting its wildlife and importance to the region. The story follows the river's history — from the first O'odham communities, through Spanish settlement and later water depletion, to today's community efforts to restore and revitalize the river.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(15,27,45,0.65)", marginBottom: "1.75rem" }}>
                All proceeds go to providing free copies of this book to the community.
              </p>
              <a
                href="https://storytellinginnovation.com/books/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-orange no-underline"
                style={{ fontSize: "0.85rem" }}
              >
                Preorder Now →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
