/*
 * FeaturedProjects — Coming soon page matching the site's editorial design
 * 826-inspired bold typography, orange/navy palette
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IMAGES } from "@/lib/images";

const HERO_BG = IMAGES.pinataMoonCover;

export default function FeaturedProjects() {
  return (
    <div style={{ fontFamily: "'Lora', serif", backgroundColor: "#FAF8F5", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          position: "relative",
          height: "340px",
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(15,27,45,0.55) 0%, rgba(15,27,45,0.75) 100%)",
          }}
        />
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingBottom: "2.5rem",
          }}
        >
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#E8531D",
              color: "white",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.25rem 0.75rem",
              marginBottom: "0.75rem",
            }}
          >
            Coming Soon
          </div>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "white",
              lineHeight: 1,
              margin: 0,
            }}
          >
            Featured Projects
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container" style={{ paddingTop: "5rem", paddingBottom: "6rem", maxWidth: "760px", margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            padding: "4rem 2rem",
            border: "2px solid #0F1B2D",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "4px",
              backgroundColor: "#E8531D",
              margin: "0 auto 2rem",
            }}
          />
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "2.25rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#0F1B2D",
              marginBottom: "1.25rem",
            }}
          >
            Something exciting is on the way
          </h2>
          <p
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "#4A5568",
              maxWidth: "520px",
              margin: "0 auto 2rem",
            }}
          >
            We are curating a showcase of our most impactful storytelling projects — from community workshops and book launches to games and digital experiences. Check back soon to explore the full collection.
          </p>
          <p
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: "#718096",
              maxWidth: "520px",
              margin: "0 auto 2.5rem",
            }}
          >
            In the meantime, explore our books, games, and workshops to see the work we are doing to make storytelling accessible to everyone.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/books"
              style={{
                display: "inline-block",
                backgroundColor: "#0F1B2D",
                color: "white",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.75rem 2rem",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
            >
              Explore Books
            </a>
            <a
              href="/games"
              style={{
                display: "inline-block",
                backgroundColor: "#E8531D",
                color: "white",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.75rem 2rem",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
            >
              Explore Games
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
