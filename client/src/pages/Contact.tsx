/*
 * Contact — 826-inspired bold editorial contact page
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { IMAGES } from "@/lib/images";

const TORRAN_HEADSHOT = IMAGES.torranNorwayClassSelfie; // Torran's outdoor portrait headshot
const HERO_BG = IMAGES.heroWorkshop; // Workshop group photo for contact page hero

// 12-image carousel from original Contact page
const CONTACT_CAROUSEL = [
  "http://storytellinginnovation.com/wp-content/uploads/2026/01/Odin-and-Torran-photo-768x1024.jpg",
  "http://storytellinginnovation.com/wp-content/uploads/2026/01/DSC08155-1024x683.jpg",
  "http://storytellinginnovation.com/wp-content/uploads/2026/01/Monsoon-poem.png",
  "http://storytellinginnovation.com/wp-content/uploads/2026/01/chula-photo-1024x768.jpg",
  "http://storytellinginnovation.com/wp-content/uploads/2025/10/Book-Compilation2-2-1024x515.png",
  "http://storytellinginnovation.com/wp-content/uploads/2025/10/2-cli-fi-picture-2.jpg",
  "http://storytellinginnovation.com/wp-content/uploads/2025/10/Upward-Bound_2020Summer_Writing-Workshop_PinataMoon2-3-1024x744.png",
  "http://storytellinginnovation.com/wp-content/uploads/2025/10/3-earth-day-carol-2.jpg",
  "http://storytellinginnovation.com/wp-content/uploads/2025/10/cropped-personal-statements-2.jpg",
  "http://storytellinginnovation.com/wp-content/uploads/2025/10/norwegian-students-2-1024x576.jpg",
  "http://storytellinginnovation.com/wp-content/uploads/2026/01/playing-game-with-students-1024x586.png",
  "http://storytellinginnovation.com/wp-content/uploads/2026/01/Picture2.jpg",
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [newsletter, setNewsletter] = useState({ name: "", email: "" });
  const [newsletterDone, setNewsletterDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:info@storytellinginnovation.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailto);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "white" }}>
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section style={{ position: "relative", minHeight: "45vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,27,45,0.92) 0%, rgba(15,27,45,0.35) 60%, transparent 100%)" }} />
        <div className="container relative z-10 pb-14 pt-24">
          <div className="script-label mb-2" style={{ color: "#F5C842" }}>Let's connect</div>
          <h1 className="display-heading" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "white" }}>Contact</h1>
        </div>
      </section>

      {/* ── WAVE ── */}
      <div style={{ backgroundColor: "#0F1B2D", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 0 C360 60, 1080 60, 1440 0 L1440 60 L0 60 Z" fill="white" />
        </svg>
      </div>

      {/* ── CONTACT SECTION ── */}
      <section style={{ backgroundColor: "white", paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* ── LEFT: Info ── */}
            <div>
              <div className="script-label mb-2" style={{ color: "#E8531D" }}>Reach out</div>
              <h2 className="display-heading mb-5" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#0F1B2D" }}>
                Get in Touch
              </h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "rgba(15,27,45,0.75)", marginBottom: "2rem" }}>
                Whether you're interested in booking a workshop, purchasing books or games, collaborating on a project, or just want to say hello — we'd love to hear from you.
              </p>

              {/* Founder card */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", padding: "1.5rem", border: "2.5px solid #0F1B2D", boxShadow: "4px 4px 0 #E8531D", marginBottom: "1.75rem" }}>
                <img src={TORRAN_HEADSHOT} alt="Torran Anderson" style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: "2px solid #E8531D" }} />
                <div>
                  <h3 className="display-heading mb-1" style={{ fontSize: "1.5rem", color: "#0F1B2D" }}>Torran Anderson</h3>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.8rem", color: "rgba(15,27,45,0.55)", marginBottom: "0.5rem" }}>Founder, Center for Storytelling Innovation</p>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.9rem", fontStyle: "italic", color: "#0F1B2D" }}>"Let's work together to make stories accessible for everyone."</p>
                </div>
              </div>

              {/* Contact methods */}
              <div className="flex flex-col gap-3">
                {[
                  { icon: "@", label: "Email", value: "info@storytellinginnovation.com", href: "mailto:info@storytellinginnovation.com", color: "#0F1B2D" },
                  { icon: "in", label: "LinkedIn", value: "linkedin.com/in/torrananderson", href: "https://www.linkedin.com/in/torrananderson/", color: "#0F1B2D" },
                  { icon: "▶", label: "YouTube", value: "@CenterforStorytellingInnovation", href: "https://www.youtube.com/@CenterforStorytellingInnovation", color: "#E8531D" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", border: "2px solid #0F1B2D" }}>
                    <div style={{ width: "36px", height: "36px", backgroundColor: item.color, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.8rem", flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(15,27,45,0.5)", marginBottom: "0.15rem" }}>{item.label}</p>
                      <a href={item.href} target={item.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.875rem", color: "#0F1B2D", textDecoration: "none" }} className="hover:opacity-70 transition-opacity">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Donate */}
              <div style={{ marginTop: "1.75rem", padding: "1.5rem", backgroundColor: "#F5C842", border: "2.5px solid #0F1B2D", boxShadow: "4px 4px 0 #0F1B2D" }}>
                <h4 className="display-heading mb-2" style={{ fontSize: "1.5rem", color: "#0F1B2D" }}>Support the Mission</h4>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.875rem", lineHeight: 1.65, color: "rgba(15,27,45,0.8)", marginBottom: "1rem" }}>
                  Help us make storytelling accessible to everyone. Your donation supports workshops, community programs, and new creative projects.
                </p>
                <a href="https://buymeacoffee.com/storytellinginnovation" target="_blank" rel="noopener noreferrer" className="btn-pill btn-pill-navy no-underline" style={{ fontSize: "0.85rem" }}>
                  Donate Now →
                </a>
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <div>
              <div style={{ border: "2.5px solid #0F1B2D", boxShadow: "6px 6px 0 #E8531D", padding: "2.5rem" }}>
                <h3 className="display-heading mb-6" style={{ fontSize: "2rem", color: "#0F1B2D" }}>Send a Message</h3>

                {submitted ? (
                  <div style={{ textAlign: "center", padding: "3rem 0" }}>
                    <div style={{ fontSize: "3rem", color: "#1A8C7A", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, marginBottom: "1rem" }}>✓</div>
                    <h4 className="display-heading mb-2" style={{ fontSize: "2rem", color: "#0F1B2D" }}>Message Sent!</h4>
                    <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.9rem", color: "rgba(15,27,45,0.65)", marginBottom: "1.5rem" }}>Your email client should have opened. We'll get back to you soon.</p>
                    <button onClick={() => setSubmitted(false)} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "#E8531D", background: "none", border: "none", cursor: "pointer" }}>
                      Send another message →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {[
                      { label: "Name", key: "name", type: "text", required: true },
                      { label: "Email", key: "email", type: "email", required: true },
                      { label: "Subject", key: "subject", type: "text", required: false },
                    ].map((field) => (
                      <div key={field.key}>
                        <label style={{ display: "block", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(15,27,45,0.6)", marginBottom: "0.4rem" }}>
                          {field.label} {field.required && "*"}
                        </label>
                        <input
                          type={field.type}
                          required={field.required}
                          value={formData[field.key as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                          style={{ width: "100%", padding: "0.75rem 1rem", border: "2px solid #0F1B2D", fontFamily: "'Barlow', sans-serif", fontSize: "0.9rem", outline: "none", boxSizing: "border-box" }}
                        />
                      </div>
                    ))}
                    <div>
                      <label style={{ display: "block", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(15,27,45,0.6)", marginBottom: "0.4rem" }}>
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{ width: "100%", padding: "0.75rem 1rem", border: "2px solid #0F1B2D", fontFamily: "'Barlow', sans-serif", fontSize: "0.9rem", outline: "none", resize: "vertical", boxSizing: "border-box" }}
                      />
                    </div>
                    <button type="submit" className="btn-pill btn-pill-orange" style={{ fontSize: "0.9rem", width: "100%", justifyContent: "center" }}>
                      Send Message →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER SIGNUP ── */}
      <section style={{ backgroundColor: "#F5F0EB", borderTop: "2.5px solid #0F1B2D", borderBottom: "2.5px solid #0F1B2D", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="display-heading mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#0F1B2D" }}>Newsletter Signup</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", lineHeight: 1.75, color: "rgba(15,27,45,0.7)", marginBottom: "2rem" }}>
            Stay up to date with new books, workshops, games, and storytelling events.
          </p>
          {newsletterDone ? (
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "1rem", color: "#1A8C7A", fontWeight: 700 }}>✓ You're subscribed! Thank you.</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setNewsletterDone(true); }} style={{ display: "flex", flexDirection: "column", gap: "1rem", textAlign: "left" }}>
              <div>
                <label style={{ display: "block", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(15,27,45,0.6)", marginBottom: "0.4rem" }}>Name</label>
                <input type="text" value={newsletter.name} onChange={(e) => setNewsletter({ ...newsletter, name: e.target.value })} style={{ width: "100%", padding: "0.75rem 1rem", border: "2px solid #0F1B2D", fontFamily: "'Barlow', sans-serif", fontSize: "0.9rem", outline: "none", boxSizing: "border-box", backgroundColor: "white" }} />
              </div>
              <div>
                <label style={{ display: "block", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(15,27,45,0.6)", marginBottom: "0.4rem" }}>Email *</label>
                <input type="email" required value={newsletter.email} onChange={(e) => setNewsletter({ ...newsletter, email: e.target.value })} style={{ width: "100%", padding: "0.75rem 1rem", border: "2px solid #0F1B2D", fontFamily: "'Barlow', sans-serif", fontSize: "0.9rem", outline: "none", boxSizing: "border-box", backgroundColor: "white" }} />
              </div>
              <button type="submit" className="btn-pill btn-pill-orange" style={{ fontSize: "0.9rem", alignSelf: "flex-start" }}>Submit →</button>
            </form>
          )}
        </div>
      </section>

      {/* ── PHOTO CAROUSEL ── */}
      <section style={{ backgroundColor: "white", padding: "3rem 0", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: "0.75rem", animation: "scroll-left 40s linear infinite", width: "max-content" }}>
          {[...CONTACT_CAROUSEL, ...CONTACT_CAROUSEL].map((src, i) => (
            <div key={i} style={{ width: "280px", height: "200px", flexShrink: 0, overflow: "hidden", border: "2.5px solid #0F1B2D" }}>
              <img src={src} alt={`Gallery ${(i % 12) + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
            </div>
          ))}
        </div>
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      <Footer />
    </div>
  );
}
