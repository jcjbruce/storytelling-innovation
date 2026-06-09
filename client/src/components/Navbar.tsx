/*
 * Navbar — 826-inspired bold editorial nav
 * Announcement bar (orange) + white sticky nav
 * Barlow Condensed bold caps nav links, orange Donate pill
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { IMAGES } from "@/lib/images";

const LOGO = IMAGES.userLogo;

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Books", href: "/books" },
  { label: "Games", href: "/games" },
  { label: "Workshops", href: "/workshops" },
  { label: "Featured Projects", href: "/featured-projects" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div
        style={{
          backgroundColor: "#E8531D",
          color: "white",
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 600,
          fontSize: "0.85rem",
          letterSpacing: "0.04em",
          textAlign: "center",
          padding: "0.45rem 1rem",
        }}
      >
        ⚡ Piñata Moon is available for preorder —{" "}
        <a
          href="/pinata-moon"
          style={{ color: "white", fontWeight: 800, textDecoration: "underline" }}
        >
          Order now →
        </a>
      </div>

      {/* Main nav */}
      <nav
        style={{
          backgroundColor: "white",
          borderBottom: "2px solid #0F1B2D",
          boxShadow: "0 2px 0 #0F1B2D",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between" style={{ height: "80px" }}>
            {/* Logo — user-provided book+lightbulb icon + site name */}
            <Link href="/" className="flex items-center gap-3 no-underline flex-shrink-0">
              <img
                src={LOGO}
                alt="Center for Storytelling Innovation"
                className="object-contain flex-shrink-0"
                style={{ height: "60px", width: "60px" }}
              />
              <div className="hidden sm:flex flex-col leading-tight">
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "1rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#0F1B2D",
                    lineHeight: 1.1,
                  }}
                >
                  Center for
                </span>
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "1.15rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#E8531D",
                    lineHeight: 1.1,
                  }}
                >
                  Storytelling
                </span>
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "1rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#0F1B2D",
                    lineHeight: 1.1,
                  }}
                >
                  Innovation
                </span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-2" style={{ marginLeft: "2rem" }}>
              {navLinks.map((link) => {
                const active = location === link.href || location.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="no-underline px-4 py-2 transition-colors relative"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: active ? "#E8531D" : "#0F1B2D",
                    }}
                  >
                    {link.label}
                    {active && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: "0.75rem",
                          right: "0.75rem",
                          height: "2.5px",
                          backgroundColor: "#E8531D",
                          borderRadius: "2px",
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Donate pill */}
            <div className="hidden md:flex items-center">
              <a
                href="https://buymeacoffee.com/storytellinginnovation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-orange"
                style={{ fontSize: "0.85rem", padding: "0.55rem 1.4rem" }}
              >
                Donate
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X size={22} color="#0F1B2D" />
              ) : (
                <Menu size={22} color="#0F1B2D" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ backgroundColor: "white", borderTop: "1px solid #E8E0D8" }}>
            <div className="container py-4 flex flex-col gap-0">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="no-underline py-3 px-1"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: location === link.href ? "#E8531D" : "#0F1B2D",
                    borderBottom: "1px solid #F0EAE2",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://buymeacoffee.com/storytellinginnovation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-orange mt-4 text-center"
              >
                Donate
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
