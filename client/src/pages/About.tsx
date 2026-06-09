/*
 * About — 826-inspired bold editorial about page
 * Real images from storytellinginnovation.com
 * Bold display type, color blocks, wave dividers
 */
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IMAGES } from "@/lib/images";

const TORRAN_HEADSHOT = "https://storytellinginnovation.com/wp-content/uploads/2025/12/Torran-Headshot-uncropped-150x150.jpg";

// Original site carousel images (11 photos from WordPress CDN)
const CAROUSEL_IMAGES = [
  { src: "https://storytellinginnovation.com/wp-content/uploads/2025/12/Story-Grow-Logo.jpg", alt: "StoryGrow Logo" },
  { src: "https://storytellinginnovation.com/wp-content/uploads/2025/10/Upward-Bound_2020Summer_Writing-Workshop_PinataMoon2-2-1024x744.png", alt: "Upward Bound Writing Workshop" },
  { src: "https://storytellinginnovation.com/wp-content/uploads/2025/12/371777416_2158395377664161_6200038757722491551_n-1-1024x586.jpg", alt: "Community event" },
  { src: "https://storytellinginnovation.com/wp-content/uploads/2025/10/norwegian-students-1-1024x576.jpg", alt: "Norwegian students" },
  { src: "https://storytellinginnovation.com/wp-content/uploads/2025/12/ChatGPT-Image-Dec-22-2025-11_09_22-AM-1024x683.png", alt: "Storytelling community" },
  { src: "https://storytellinginnovation.com/wp-content/uploads/2025/10/Book-Compilation2-1-1024x515.png", alt: "Book compilation" },
  { src: "https://storytellinginnovation.com/wp-content/uploads/2025/12/Picture1-9.jpg", alt: "Workshop photo" },
  { src: "https://storytellinginnovation.com/wp-content/uploads/2025/12/2-compilation-photo-1024x683.png", alt: "Compilation photo" },
  { src: "https://storytellinginnovation.com/wp-content/uploads/2026/05/1-song-of-the-santa-cruz-river-cover-1024x796.jpg", alt: "Song of the Santa Cruz River" },
  { src: "https://storytellinginnovation.com/wp-content/uploads/2025/12/Picture7.png", alt: "Community storytelling" },
  { src: "https://storytellinginnovation.com/wp-content/uploads/2025/12/black-text-for-Center-for-Storytelling-Innovation-1024x683.png", alt: "Center for Storytelling Innovation" },
];
const PERSONAL_STATEMENTS = IMAGES.torranClassroomSelfie;
const CLI_FI = IMAGES.torranNorwayClassSelfie;
const NORWEGIAN = IMAGES.norwegianStudents;
const UPWARD_BOUND = IMAGES.upwardBoundWorkshop;
const COMPILATION_1 = IMAGES.pinataMoonBanner;
const COMPILATION_2 = IMAGES.writingHand;
const CHATGPT_IMG = IMAGES.groupOutdoor;
const PICTURE7 = IMAGES.interviewLegacy;
const PICTURE1_9 = IMAGES.workshopKautz;
const BLACK_TEXT_LOGO = IMAGES.csiLogo;
const HERO_BG = IMAGES.torranTeachingCsi;

function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 3000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden", border: "2.5px solid #0F1B2D", boxShadow: "4px 4px 0 #E8531D" }}>
      <div
        style={{
          display: "flex",
          transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {CAROUSEL_IMAGES.map((img, i) => (
          <div key={i} style={{ minWidth: "100%", height: "420px", flexShrink: 0 }}>
            <img
              src={img.src}
              alt={img.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
            />
          </div>
        ))}
      </div>
      {/* Dot indicators */}
      <div style={{ position: "absolute", bottom: "0.75rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "0.4rem" }}>
        {CAROUSEL_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? "1.5rem" : "0.5rem",
              height: "0.5rem",
              borderRadius: "9999px",
              backgroundColor: i === current ? "#E8531D" : "rgba(255,255,255,0.6)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
              padding: 0,
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "white" }}>
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section style={{ position: "relative", minHeight: "45vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center 15%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,27,45,0.92) 0%, rgba(15,27,45,0.35) 60%, transparent 100%)" }} />
        <div className="container relative z-10 pb-14 pt-24">
          <div className="script-label mb-2" style={{ color: "#F5C842" }}>Get to know us</div>
          <h1 className="display-heading" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "white" }}>About Us</h1>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "#0F1B2D", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 0 C360 60, 1080 60, 1440 0 L1440 60 L0 60 Z" fill="white" />
        </svg>
      </div>

      {/* ── OUR STORY ── */}
      <section style={{ backgroundColor: "white", paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
            <div>
              <div className="script-label mb-2" style={{ color: "#E8531D" }}>Our mission</div>
              <h2 className="display-heading mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#0F1B2D" }}>
                Making Stories<br />Accessible<br />For Everyone
              </h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(15,27,45,0.75)", marginBottom: "1rem" }}>
                At the <strong>Center for Storytelling Innovation</strong>, we believe stories shape how we learn, connect, and imagine. Whether in the pages of a book, gathered around a game, or inside a creative workshop — stories help us see ourselves and each other in new ways.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(15,27,45,0.75)", marginBottom: "1rem" }}>
                Founded by <strong>Torran Anderson</strong>, the Center began with a vision to bring meaningful storytelling into everyday life. What started as a small idea has grown into a curated collection that sparks curiosity, connection, and creativity for people of all ages.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(15,27,45,0.75)", marginBottom: "1.75rem" }}>
                The Center is an online hub for books, games, workshops, and projects — making storytelling accessible to everyone through Germination Games like StoryGrow, novels-in-verse, and community action activities.
              </p>
              <blockquote style={{ borderLeft: "4px solid #E8531D", paddingLeft: "1.25rem", marginBottom: "2rem" }}>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.1rem", fontStyle: "italic", color: "#0F1B2D", lineHeight: 1.65 }}>
                  "Let's work together to make stories accessible for everyone."
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "0.75rem" }}>
                  <img src={TORRAN_HEADSHOT} alt="Torran Anderson" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", border: "2px solid #E8531D" }} />
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#0F1B2D" }}>Torran Anderson</div>
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.75rem", color: "rgba(15,27,45,0.55)" }}>Founder</div>
                  </div>
                </div>
              </blockquote>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { num: "25+", label: "Books Published" },
                  { num: "100+", label: "Workshops" },
                  { num: "3", label: "Continents" },
                ].map((stat) => (
                  <div key={stat.label} style={{ backgroundColor: "#0F1B2D", padding: "1.25rem 0.75rem", textAlign: "center", border: "2.5px solid #0F1B2D", boxShadow: "3px 3px 0 #E8531D" }}>
                    <div className="display-heading" style={{ fontSize: "2rem", color: "#F5C842" }}>{stat.num}</div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginTop: "0.2rem" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Auto-scrolling photo carousel — 11 images from original site */}
            <PhotoCarousel />
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "white", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 60 C360 0, 1080 0, 1440 60 L1440 60 L0 60 Z" fill="#0F1B2D" />
        </svg>
      </div>

      {/* ── CORE VALUES ── */}
      <section style={{ backgroundColor: "#0F1B2D", paddingTop: "1rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="text-center mb-10">
            <div className="script-label mb-2" style={{ color: "#F5C842" }}>What drives us</div>
            <h2 className="display-heading" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "white" }}>Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              { title: "Imagination", desc: "Storytelling has the power to create lasting impact. We value imagination that sparks new ideas and opens new worlds.", color: "#E8531D" },
              { title: "Connection", desc: "Connection that brings people together. We are committed to making storytelling accessible to everyone, everywhere.", color: "#1A8C7A" },
              { title: "Integrity", desc: "Integrity that honors authentic voices. Care and respect for the communities and creators behind every narrative.", color: "#F5C842" },
            ].map((v) => (
              <div key={v.title} style={{ backgroundColor: v.color, padding: "1.75rem", border: "2.5px solid rgba(255,255,255,0.2)", boxShadow: "4px 4px 0 rgba(255,255,255,0.15)", overflow: "hidden" }}>
                <h3 className="display-heading mb-3" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: v.color === "#F5C842" ? "#0F1B2D" : "white", wordBreak: "break-word", lineHeight: 1.1 }}>{v.title}</h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.9rem", lineHeight: 1.7, color: v.color === "#F5C842" ? "rgba(15,27,45,0.8)" : "rgba(255,255,255,0.88)" }}>{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div style={{ height: "240px", overflow: "hidden", border: "2.5px solid rgba(255,255,255,0.2)" }}>
              <img src={UPWARD_BOUND} alt="Upward Bound workshop" className="w-full h-full object-cover" />
            </div>
            <div style={{ height: "240px", overflow: "hidden", border: "2.5px solid rgba(255,255,255,0.2)" }}>
              <img src={COMPILATION_2} alt="Community compilation" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "#0F1B2D", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 0 C360 60, 1080 60, 1440 0 L1440 60 L0 60 Z" fill="#E8531D" />
        </svg>
      </div>

      {/* ── FOUNDER ── */}
      <section style={{ backgroundColor: "#E8531D", paddingTop: "1rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div style={{ position: "relative" }}>
              <div style={{ width: "100%", maxWidth: "420px", aspectRatio: "4/3", overflow: "hidden", border: "2.5px solid white", boxShadow: "8px 8px 0 #0F1B2D", margin: "0 auto" }}>
                <img src={TORRAN_HEADSHOT} alt="Torran Anderson" className="w-full h-full object-cover object-center" />
              </div>
              <div style={{ position: "absolute", bottom: "-1rem", left: "1rem", backgroundColor: "#F5C842", color: "#0F1B2D", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.5rem 1rem", transform: "rotate(2deg)", boxShadow: "3px 3px 0 #0F1B2D" }}>
                Author & Educator
              </div>
            </div>
            <div>
              <div className="script-label mb-2" style={{ color: "#F5C842" }}>Meet the founder</div>
              <h2 className="display-heading mb-5" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "white" }}>Torran Anderson</h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.92)", marginBottom: "1rem" }}>
                Torran Anderson is an author, educator, and community storyteller based in Tucson, Arizona. His debut novel, <em>Songcoming</em>, was praised by Pine Reads Review as "edgy, inventive, and sincere" — a novel that "gives the reader a new look at an old medium."
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.92)", marginBottom: "1rem" }}>
                His upcoming YA novel-in-verse, <em>Piñata Moon</em>, is set in Tucson and explores teen grief, the desert night, and the will to keep living. It has already received early praise from the Arizona Daily Star.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.92)", marginBottom: "1.75rem" }}>
                Beyond books, Torran creates storytelling games like StoryGrow, leads workshops globally (including Norway and Tucson's Upward Bound program), and publishes educational books through Reading A-Z.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.linkedin.com/in/torrananderson/" target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-yellow no-underline" style={{ fontSize: "0.85rem" }}>LinkedIn →</a>
                <a href="/books" className="btn-pill btn-pill-outline-white no-underline" style={{ fontSize: "0.85rem" }}>See His Books</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "#E8531D", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 0 C360 60, 1080 60, 1440 0 L1440 60 L0 60 Z" fill="white" />
        </svg>
      </div>

      {/* ── COMMUNITY ── */}
      <section style={{ backgroundColor: "white", paddingTop: "2rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div className="grid grid-cols-2 gap-3">
              <div style={{ gridColumn: "span 2", height: "220px", overflow: "hidden", border: "2.5px solid #0F1B2D", boxShadow: "4px 4px 0 #E8531D" }}>
                <img src={CHATGPT_IMG} alt="Storytelling community" className="w-full h-full object-cover object-center" />
              </div>
              <div style={{ height: "180px", overflow: "hidden", border: "2.5px solid #0F1B2D", boxShadow: "3px 3px 0 #0F1B2D" }}>
                <img src={PICTURE7} alt="Community event" className="w-full h-full object-cover object-center" />
              </div>
              <div style={{ height: "180px", overflow: "hidden", border: "2.5px solid #0F1B2D", boxShadow: "3px 3px 0 #E8531D" }}>
                <img src={PICTURE1_9} alt="Workshop" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div>
              <div className="script-label mb-2" style={{ color: "#E8531D" }}>Our community</div>
              <h2 className="display-heading mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#0F1B2D" }}>
                Built Around<br />Shared Imagination
              </h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(15,27,45,0.75)", marginBottom: "1rem" }}>
                Storytelling Innovation is more than a storefront — it's a space built around shared imagination and connection. Our community includes readers, players, educators, and community members who believe in the power of storytelling to inspire and unite.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(15,27,45,0.75)", marginBottom: "1.75rem" }}>
                Whether exploring a book, playing a game, or attending a workshop — we celebrate creativity, learning, and the joy of stories. Together, we keep storytelling alive, relevant, and full of possibility.
              </p>
              <img src={BLACK_TEXT_LOGO} alt="Center for Storytelling Innovation" style={{ maxWidth: "280px", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOK COMPILATION BANNER ── */}
      <section style={{ backgroundColor: "#F5F0EB", borderTop: "2.5px solid #0F1B2D", borderBottom: "2.5px solid #0F1B2D", padding: "2rem 0" }}>
        <div className="container">
          <img src={COMPILATION_1} alt="Book compilation" style={{ width: "100%", maxHeight: "320px", objectFit: "contain", objectPosition: "center", display: "block", background: "#F5F0EB" }} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
