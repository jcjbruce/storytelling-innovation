/*
 * Games — 826-inspired bold editorial games page
 * Real images from storytellinginnovation.com
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IMAGES } from "@/lib/images";

const HERO_BG = IMAGES.upwardBoundWorkshop;
const STORYGROW_LOGO = IMAGES.germinationGamesLogo;
const STORYGROW_CARDS = IMAGES.storygrowCards;
const STORYGROW_CARDS2 = IMAGES.tinythingsCard;
const COMMUNITY_ACTION = IMAGES.communityActionDeck;
const COMMUNITY_ACTION2 = IMAGES.storygrowCards;
const WORKSHOP1 = IMAGES.heroWorkshop;
const PICTURE1_5 = IMAGES.writingHand;
const PICTURE2_7 = IMAGES.norwegianStudents;
const PICTURE1_8 = IMAGES.pinataEvent;

export default function Games() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "white" }}>
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section style={{ position: "relative", minHeight: "45vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,27,45,0.92) 0%, rgba(15,27,45,0.35) 60%, transparent 100%)" }} />
        <div className="container relative z-10 pb-14 pt-24">
          <div className="script-label mb-2" style={{ color: "#F5C842" }}>Play & create</div>
          <h1 className="display-heading" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "white" }}>Games</h1>
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
          <div className="script-label mb-2" style={{ color: "#E8531D" }}>Germination Games</div>
          <h2 className="display-heading mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0F1B2D" }}>Stories Through Play</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(15,27,45,0.75)", marginBottom: "1rem" }}>
            We believe stories can inspire creativity, spark curiosity, and strengthen connection. Through interactive apps and thoughtful games, we bring storytelling to life in playful, accessible ways.
          </p>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(15,27,45,0.75)" }}>
            Every project we create is guided by respect, collaboration, and the belief that great stories should be experienced, not just told. Our goal is to offer tools that connect people, inspire learning, and build meaningful shared experiences.
          </p>
        </div>
      </section>

      {/* ── STORYGROW ── */}
      <section style={{ backgroundColor: "white", paddingTop: "2rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div style={{ display: "inline-block", backgroundColor: "#F5C842", color: "#0F1B2D", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.4rem 0.9rem", transform: "rotate(-2deg)", boxShadow: "3px 3px 0 #0F1B2D", marginBottom: "1.25rem" }}>
                Germination Game #1
              </div>
              <h2 className="display-heading mb-5" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#0F1B2D" }}>StoryGrow</h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(15,27,45,0.75)", marginBottom: "1rem" }}>
                StoryGrow is a collaborative card game that helps players build stories together. Using a deck of illustrated prompt cards, players take turns growing a shared narrative — building vocabulary, creativity, and connection along the way.
              </p>
              <blockquote style={{ borderLeft: "4px solid #E8531D", paddingLeft: "1.25rem", marginBottom: "1.75rem" }}>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.95rem", fontStyle: "italic", color: "#0F1B2D", lineHeight: 1.65, marginBottom: "0.5rem" }}>
                  "StoryGrow is a great game to get students engaged with their creativity, one another, and the world around them through writing (and occasionally drawing)."
                </p>
                <footer style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#E8531D" }}>
                  — Maia Schneider, Environmental Education Program Coordinator, University of Arizona
                </footer>
              </blockquote>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.thegamecrafter.com/games/story-grow" target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-orange no-underline">Buy StoryGrow →</a>
                <a href="https://www.thegamecrafter.com/games/story-grow" target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-outline no-underline">The Game Crafter</a>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ border: "2.5px solid #0F1B2D", boxShadow: "8px 8px 0 #E8531D", overflow: "hidden", height: "340px", backgroundColor: "#f5f0e8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={STORYGROW_CARDS} alt="StoryGrow Cards" className="w-full h-full object-contain" style={{ display: "block", padding: "1rem" }} />
              </div>
              <div style={{ position: "absolute", bottom: "-1rem", right: "1rem", overflow: "hidden", width: "90px", height: "90px", border: "2.5px solid #0F1B2D", boxShadow: "3px 3px 0 #0F1B2D" }}>
                <img src={STORYGROW_LOGO} alt="StoryGrow Logo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "white", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 60 C360 0, 1080 0, 1440 60 L1440 60 L0 60 Z" fill="#E8531D" />
        </svg>
      </div>

      {/* ── COMMUNITY ACTION DECK ── */}
      <section style={{ backgroundColor: "#E8531D", paddingTop: "1rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div style={{ position: "relative" }}>
              <div style={{ border: "2.5px solid white", boxShadow: "8px 8px 0 #0F1B2D", overflow: "hidden", height: "340px", backgroundColor: "#fff8e8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={COMMUNITY_ACTION} alt="Community Action Deck" className="w-full h-full object-contain" style={{ display: "block", padding: "1rem" }} />
              </div>
            </div>
            <div>
              <div style={{ display: "inline-block", backgroundColor: "#F5C842", color: "#0F1B2D", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.4rem 0.9rem", transform: "rotate(2deg)", boxShadow: "3px 3px 0 #0F1B2D", marginBottom: "1.25rem" }}>
                Germination Game #2
              </div>
              <h2 className="display-heading mb-5" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "white" }}>Community<br />Action Deck</h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.9)", marginBottom: "1rem" }}>
                The Community Action Deck is a storytelling card game designed to spark conversations about community, belonging, and collective action. Players use the cards to build stories that connect personal experience with broader social themes.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.9)", marginBottom: "1.75rem" }}>
                Perfect for community organizations, classrooms, and workshops — this game bridges individual storytelling with collective meaning-making.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.thegamecrafter.com/games/community-action-deck" target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-yellow no-underline">Buy the Deck →</a>
                <a href="https://www.thegamecrafter.com/games/community-action-deck" target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-outline-white no-underline">The Game Crafter</a>
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

      {/* ── GAMES IN ACTION ── */}
      <section style={{ backgroundColor: "white", paddingTop: "2rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="text-center mb-10">
            <div className="script-label mb-2" style={{ color: "#E8531D" }}>See them in action</div>
            <h2 className="display-heading" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#0F1B2D" }}>Games in the Wild</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { img: STORYGROW_CARDS2, title: "StoryGrow Cards", desc: "The full StoryGrow deck laid out — each card a prompt, a possibility, a story waiting to happen.", fit: "object-contain", bg: "#f5f0e8", link: "https://www.thegamecrafter.com/games/story-grow" },
              { img: COMMUNITY_ACTION2, title: "Community Action Deck", desc: "The Community Action Deck in use during a workshop session — sparking conversations and connections.", fit: "object-contain", bg: "#fff8e8", link: "https://www.thegamecrafter.com/games/community-action-deck" },
              { img: IMAGES.earthDayCarolCover, title: "Earth Day Carol", desc: "Earth Day Carol — a game that brings environmental storytelling to life for all ages.", fit: "object-contain", bg: "#f0f8f0", link: "https://www.amazon.com/Zippy-Brain-Inc-Earth-Carol/dp/B00BQ0ZQ70" },
            ].map((item) => (
              <div key={item.title} style={{ border: "2.5px solid #0F1B2D", boxShadow: "4px 4px 0 #E8531D", overflow: "hidden" }}>
                <div style={{ height: "200px", overflow: "hidden", borderBottom: "2.5px solid #0F1B2D", backgroundColor: item.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={item.img} alt={item.title} className={`w-full h-full ${item.fit} hover:scale-105 transition-transform duration-500`} style={{ padding: item.fit.includes("contain") ? "0.75rem" : "0" }} />
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <h3 className="display-heading mb-2" style={{ fontSize: "1.5rem", color: "#0F1B2D" }}>{item.title}</h3>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.875rem", lineHeight: 1.65, color: "rgba(15,27,45,0.7)", marginBottom: "0.75rem" }}>{item.desc}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#E8531D", textDecoration: "none" }} className="hover:opacity-70 transition-opacity">Buy Online →</a>
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

      {/* ── RIDERS & WALKERS ── */}
      <section style={{ backgroundColor: "#0F1B2D", paddingTop: "1rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div style={{ display: "inline-block", backgroundColor: "#1A8C7A", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.4rem 0.9rem", transform: "rotate(-2deg)", boxShadow: "3px 3px 0 rgba(255,255,255,0.3)", marginBottom: "1.25rem" }}>
                Game Development
              </div>
              <h2 className="display-heading mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}>Riders &amp; Walkers Safety Game</h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.85)", marginBottom: "1rem" }}>
                <strong style={{ color: "white" }}>Riders and Walkers</strong> is an interactive, multi-media presentation created by Torran Anderson and the <a href="http://www.eeexchange.org/rwprogram" target="_blank" rel="noopener noreferrer" style={{ color: "#F5C842", textDecoration: "underline" }}>Environmental Education Exchange</a> for third-grade classrooms across Pima County. During this 60-minute presentation, student teams help Sofia and Santiago safely navigate their route to school by bike and on foot.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.85)", marginBottom: "1.5rem" }}>
                The presenter guides students through a Chutes &amp; Ladders-inspired game that reviews pedestrian and bicycle safety skills and builds enthusiasm to get students ready to ride and walk.
              </p>
              <div className="flex flex-wrap gap-3" style={{ marginBottom: "1.5rem" }}>
                <a href="https://saferoutestucson.org/riders-walkers-program/" target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-orange no-underline">View Program →</a>
                <a href="http://www.eeexchange.org/rwprogram" target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-outline-white no-underline">EE Exchange</a>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { title: "It's interactive.", desc: "The presenter covers content in an engaging and relatable way through a large magnetic game board, videos and photos featuring Tucson-area neighborhoods, and team exercises." },
                  { title: "It's curriculum-based.", desc: "Created to meet Arizona Department of Education standards for third-grade students. Teachers receive pre-visit activity ideas and vocabulary lists." },
                  { title: "It promotes walking and biking.", desc: "Presentations encourage students to consider the joys of foot-powered travel while focusing on key, age-appropriate safety messages." },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#E8531D", marginTop: "0.4rem", flexShrink: 0 }} />
                    <div>
                      <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.04em", color: "white", marginBottom: "0.2rem" }}>{item.title}</p>
                      <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.875rem", lineHeight: 1.65, color: "rgba(255,255,255,0.65)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div style={{ height: "220px", overflow: "hidden", border: "2.5px solid rgba(255,255,255,0.2)" }}>
                <img src={PICTURE1_5} alt="Riders and Walkers game" className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div style={{ height: "160px", overflow: "hidden", border: "2.5px solid rgba(255,255,255,0.2)" }}>
                  <img src={PICTURE2_7} alt="Game in action" className="w-full h-full object-cover" />
                </div>
                <div style={{ height: "160px", overflow: "hidden", border: "2.5px solid rgba(255,255,255,0.2)" }}>
                  <img src={PICTURE1_8} alt="Students playing" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "#0F1B2D", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 0 C360 60, 1080 60, 1440 0 L1440 60 L0 60 Z" fill="white" />
        </svg>
      </div>

      {/* ── VIDEO DEMOS ── */}
      <section style={{ backgroundColor: "white", paddingTop: "2rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="text-center mb-10">
            <div className="script-label mb-2" style={{ color: "#E8531D" }}>Watch them in action</div>
            <h2 className="display-heading" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#0F1B2D" }}>Video Demos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Community Action Deck video */}
            <div style={{ border: "2.5px solid #0F1B2D", boxShadow: "5px 5px 0 #E8531D", overflow: "hidden" }}>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                <iframe
                  src="https://www.youtube.com/embed/zzlzqW9ddSE"
                  title="Community Action Deck Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                />
              </div>
              <div style={{ padding: "1.25rem", borderTop: "2.5px solid #0F1B2D" }}>
                <h3 className="display-heading mb-1" style={{ fontSize: "1.5rem", color: "#0F1B2D" }}>Community Action Deck</h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.875rem", lineHeight: 1.65, color: "rgba(15,27,45,0.7)" }}>See the Community Action Deck in action — a storytelling card game designed to spark conversations about community, belonging, and collective action.</p>
              </div>
            </div>
            {/* StoryGrow video */}
            <div style={{ border: "2.5px solid #0F1B2D", boxShadow: "5px 5px 0 #0F1B2D", overflow: "hidden" }}>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                <iframe
                  src="https://www.youtube.com/embed/QRk66DYpmcs"
                  title="StoryGrow Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                />
              </div>
              <div style={{ padding: "1.25rem", borderTop: "2.5px solid #0F1B2D" }}>
                <h3 className="display-heading mb-1" style={{ fontSize: "1.5rem", color: "#0F1B2D" }}>StoryGrow</h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.875rem", lineHeight: 1.65, color: "rgba(15,27,45,0.7)" }}>Watch StoryGrow being played in a workshop setting — a collaborative card game that helps players build stories together through illustrated prompt cards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "white", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 60 C360 0, 1080 0, 1440 60 L1440 60 L0 60 Z" fill="#F5C842" />
        </svg>
      </div>

      {/* ── CTA BAND ── */}
      <section style={{ backgroundColor: "#F5C842", borderBottom: "2.5px solid #0F1B2D", padding: "3rem 0" }}>
        <div className="container text-center">
          <div className="script-label mb-2" style={{ color: "#E8531D" }}>Bring it to your community</div>
          <h2 className="display-heading mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0F1B2D" }}>Want to Use These Games<br />in Your Workshop?</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/workshops" className="btn-pill btn-pill-navy no-underline">Explore Workshops</a>
            <a href="/contact" className="btn-pill btn-pill-outline no-underline">Get in Touch</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
