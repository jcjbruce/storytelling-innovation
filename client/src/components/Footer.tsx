/*
 * Footer — 826-inspired bold editorial footer
 * Dark navy background, white text, orange accents
 * Wave top divider, bold display heading, nav links
 */
import { Link } from "wouter";
import { IMAGES } from "@/lib/images";

const LOGO = IMAGES.userLogo;

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F1B2D", color: "white" }}>
      {/* Wave top divider */}
      <div style={{ backgroundColor: "white", lineHeight: 0, marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 60 C360 0, 1080 0, 1440 60 L1440 60 L0 60 Z" fill="#0F1B2D" />
        </svg>
      </div>

      <div className="container pt-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4" style={{ lineHeight: 1.15 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.1rem", color: "white", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Center for
              </div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.1rem", color: "#E8531D", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Storytelling Innovation
              </div>
            </div>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.65, maxWidth: "260px", marginBottom: "1.25rem" }}>
              Making storytelling accessible to everyone — through books, games, workshops, and community.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/torrananderson/" target="_blank" rel="noopener noreferrer" className="no-underline" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.7rem" }}>
                in
              </a>
              <a href="https://www.youtube.com/@CenterforStorytellingInnovation" target="_blank" rel="noopener noreferrer" className="no-underline" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.65rem" }}>
                YT
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#E8531D", marginBottom: "1.25rem" }}>
              Navigation
            </div>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Books", href: "/books" },
                { label: "Games", href: "/games" },
                { label: "Workshops", href: "/workshops" },
                { label: "News", href: "/news" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="no-underline transition-opacity hover:opacity-100" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.95rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#E8531D", marginBottom: "1.25rem" }}>
              Support the Mission
            </div>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
              Your support helps us bring storytelling workshops, books, and games to communities that need them most.
            </p>
            <a href="https://buymeacoffee.com/storytellinginnovation" target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-orange no-underline" style={{ fontSize: "0.85rem", padding: "0.55rem 1.4rem" }}>
              Donate Now
            </a>
            <div className="mt-6">
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#E8531D", marginBottom: "0.6rem" }}>
                Contact
              </div>
              <a href="mailto:info@storytellinginnovation.com" className="no-underline" style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.65)" }}>
                info@storytellinginnovation.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.25rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
            © {new Date().getFullYear()} Center for Storytelling Innovation · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
