/*
 * Home — 826-inspired bold editorial homepage
 * Design: Big condensed type, solid color blocks, wave dividers, real CSI photos
 * Colors: Navy #0A1628, Yellow #FFD600, Coral #FF5A36, White #FFFFFF
 * Fonts: Barlow Condensed (display), Barlow (body), Caveat (script accents)
 */
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IMAGES } from "@/lib/images";
import { ArrowRight, Star, Play } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-barlow">
      {/* Announcement Bar */}
      <div className="bg-[#FFD600] text-[#0A1628] text-center py-2 px-4 font-barlow-condensed font-bold text-sm tracking-wide uppercase">
        ⚡ Piñata Moon is available for preorder —{" "}
        <a
          href="https://www.amazon.com/dp/B0DQZWJZ8X"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          Order now →
        </a>
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative bg-[#0A1628] overflow-hidden min-h-[88vh] flex items-center">
        {/* Real CSI workshop photo — participants proudly holding their writing */}
        <img
          src={IMAGES.heroWorkshop}
          alt="Center for Storytelling Innovation — workshop classroom with students"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: 0.85 }}
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(10,22,40,0.82) 0%, rgba(10,22,40,0.55) 55%, rgba(10,22,40,0.2) 100%)" }} />
        {/* Subtle yellow accent stripe on right */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/4 bg-[#FFD600] opacity-10"
          style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="relative container mx-auto px-6 py-24 z-10">
          <div className="max-w-3xl">
            <p className="font-caveat text-[#FFD600] text-2xl mb-3">
              Welcome to
            </p>
            <h1 className="font-barlow-condensed font-black text-white text-7xl md:text-9xl leading-none uppercase tracking-tight mb-6">
              Stories<br />
              <span className="text-[#FFD600]">Connect</span><br />
              Us.
            </h1>
            <p className="text-white/80 text-xl max-w-xl mb-10 font-barlow">
              Books, games, and workshops that inspire learning, play, and
              community — for readers and creators of all ages.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/books">
                <button className="bg-[#FFD600] text-[#0A1628] font-barlow-condensed font-black text-xl uppercase tracking-wide px-8 py-4 hover:bg-white transition-colors">
                  Explore Books
                </button>
              </Link>
              <Link href="/about">
                <button className="border-2 border-white text-white font-barlow-condensed font-black text-xl uppercase tracking-wide px-8 py-4 hover:bg-white hover:text-[#0A1628] transition-colors">
                  Our Story
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* WHAT WE DO — 3 pillars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <p className="font-caveat text-[#FF5A36] text-2xl text-center mb-2">What we do</p>
          <h2 className="font-barlow-condensed font-black text-[#0A1628] text-6xl md:text-7xl uppercase text-center mb-16">
            Our Collection
          </h2>
          <div className="grid md:grid-cols-3 gap-0 border-2 border-[#0A1628]">
            {[
              {
                label: "BOOKS",
                color: "#FFD600",
                img: IMAGES.pinataMoonCover,
                desc: "Novels-in-verse, picture books, and educational titles that spark curiosity and connection.",
                href: "/books",
              },
              {
                label: "GAMES",
                color: "#FF5A36",
                img: IMAGES.storygrowCards,
                desc: "Interactive card games and apps that bring storytelling to life through collaborative play.",
                href: "/games",
              },
              {
                label: "WORKSHOPS",
                color: "#0A1628",
                img: IMAGES.torranNorwayClassSelfie,
                desc: "Community-centered storytelling workshops for schools, organizations, and creative groups.",
                href: "/workshops",
              },
            ].map((item) => (
              <Link key={item.label} href={item.href}>
                <div className="group border-r-2 border-[#0A1628] last:border-r-0 cursor-pointer overflow-hidden">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div
                    className="p-8"
                    style={{ backgroundColor: item.color }}
                  >
                    <h3
                      className="font-barlow-condensed font-black text-4xl uppercase mb-3"
                      style={{ color: item.color === "#0A1628" ? "white" : "#0A1628" }}
                    >
                      {item.label}
                    </h3>
                    <p
                      className="font-barlow text-base mb-4"
                      style={{ color: item.color === "#0A1628" ? "rgba(255,255,255,0.8)" : "#0A1628" }}
                    >
                      {item.desc}
                    </p>
                    <span
                      className="font-barlow-condensed font-bold uppercase text-sm tracking-widest flex items-center gap-2"
                      style={{ color: item.color === "#0A1628" ? "#FFD600" : "#0A1628" }}
                    >
                      Learn More → 
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BOOKS */}
      <section className="bg-[#F5F0E8] py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-caveat text-[#FF5A36] text-2xl mb-1">Handpicked favorites</p>
              <h2 className="font-barlow-condensed font-black text-[#0A1628] text-6xl uppercase">
                Featured Books
              </h2>
            </div>
            <Link href="/books">
              <button className="hidden md:flex items-center gap-2 font-barlow-condensed font-bold text-[#0A1628] uppercase tracking-wide text-lg border-b-2 border-[#0A1628] pb-1 hover:text-[#FF5A36] hover:border-[#FF5A36] transition-colors">
                View all books <ArrowRight size={18} />
              </button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Piñata Moon */}
            <div className="bg-white group overflow-hidden">
              <div className="relative overflow-hidden h-80 bg-[#f5ede0] flex items-center justify-center">
                <img
                  src={IMAGES.pinataMoonCover}
                  alt="Piñata Moon"
                  className="h-full w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#FF5A36] text-white font-barlow-condensed font-black text-xs uppercase tracking-widest px-3 py-1">
                  Preorder Now
                </div>
              </div>
              <div className="p-6 border-t-4 border-[#FF5A36]">
                <div className="flex text-[#FFD600] mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="font-barlow text-xs text-[#0A1628]/50 uppercase tracking-widest mb-1">Novel-in-Verse</p>
                <h3 className="font-barlow-condensed font-black text-[#0A1628] text-3xl uppercase mb-2">
                  Piñata Moon
                </h3>
                <p className="font-barlow text-[#0A1628]/70 text-sm mb-4">
                  A YA novel-in-verse set in Tucson, Arizona — exploring teen grief, the desert night, and the will to keep living.
                </p>
                <p className="font-barlow italic text-xs text-[#0A1628]/50 mb-4">★★★★★ Arizona Daily Star</p>
                <a
                  href="https://www.amazon.com/dp/B0DQZWJZ8X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#0A1628] text-white font-barlow-condensed font-black uppercase tracking-wide py-3 hover:bg-[#FF5A36] transition-colors"
                >
                  Preorder Now
                </a>
              </div>
            </div>

            {/* Songcoming */}
            <div className="bg-white group overflow-hidden">
              <div className="relative overflow-hidden h-80 bg-[#e8f0f5] flex items-center justify-center">
                <img
                  src={IMAGES.songcomingCover}
                  alt="Songcoming"
                  className="h-full w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#0A1628] text-white font-barlow-condensed font-black text-xs uppercase tracking-widest px-3 py-1">
                  Novel-in-Verse
                </div>
              </div>
              <div className="p-6 border-t-4 border-[#0A1628]">
                <div className="flex text-[#FFD600] mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="font-barlow text-xs text-[#0A1628]/50 uppercase tracking-widest mb-1">Novel-in-Verse</p>
                <h3 className="font-barlow-condensed font-black text-[#0A1628] text-3xl uppercase mb-2">
                  Songcoming
                </h3>
                <p className="font-barlow text-[#0A1628]/70 text-sm mb-4">
                  A lyrical novel-in-verse that gives the reader a new look at an old medium — an experience that keeps hold long after the last page.
                </p>
                <p className="font-barlow italic text-xs text-[#0A1628]/50 mb-4">★★★★★ Pine Reads Review</p>
                <a
                  href="https://www.amazon.com/Songcoming-Torran-Anderson/dp/1952483085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#0A1628] text-white font-barlow-condensed font-black uppercase tracking-wide py-3 hover:bg-[#FF5A36] transition-colors"
                >
                  Buy Online
                </a>
              </div>
            </div>

            {/* Earth Day Carol */}
            <div className="bg-white group overflow-hidden">
              <div className="relative overflow-hidden h-80">
                <img
                  src={IMAGES.earthDayCarolCover}
                  alt="Earth Day Carol"
                  className="w-full h-full object-contain bg-[#e8f4e8] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#FFD600] text-[#0A1628] font-barlow-condensed font-black text-xs uppercase tracking-widest px-3 py-1">
                  Picture Book
                </div>
              </div>
              <div className="p-6 border-t-4 border-[#FFD600]">
                <p className="font-barlow text-xs text-[#0A1628]/50 uppercase tracking-widest mb-1">Picture Book</p>
                <h3 className="font-barlow-condensed font-black text-[#0A1628] text-3xl uppercase mb-2">
                  Earth Day Carol
                </h3>
                <p className="font-barlow text-[#0A1628]/70 text-sm mb-4">
                  A heartfelt picture book celebrating Earth Day and environmental stewardship for classrooms and families.
                </p>
                <p className="font-barlow italic text-xs text-[#0A1628]/50 mb-4">Available now</p>
                <a
                  href="https://www.amazon.com/Earth-Day-Carol-Torran-Anderson/dp/1952483069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#0A1628] text-white font-barlow-condensed font-black uppercase tracking-wide py-3 hover:bg-[#FF5A36] transition-colors"
                >
                  Buy Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="bg-[#0A1628] py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${IMAGES.torranTeachingCsi})` }}
        />
        <div className="relative container mx-auto px-6 text-center">
          <p className="font-caveat text-[#FFD600] text-2xl mb-3">In action</p>
          <h2 className="font-barlow-condensed font-black text-white text-6xl md:text-7xl uppercase mb-10">
            Storytelling<br />
            <span className="text-[#FFD600]">That Moves People</span>
          </h2>
          <button
            onClick={() => setVideoOpen(true)}
            className="group inline-flex items-center gap-4 bg-[#FFD600] text-[#0A1628] font-barlow-condensed font-black text-xl uppercase tracking-wide px-8 py-5 hover:bg-white transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-[#0A1628] flex items-center justify-center group-hover:bg-[#FF5A36] transition-colors">
              <Play size={16} fill="white" className="text-white ml-0.5" />
            </div>
            Watch Our Story
          </button>
        </div>
        {/* Video modal */}
        {videoOpen && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setVideoOpen(false)}
          >
            <div
              className="w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="https://www.youtube.com/embed/2XLZ4Z8sTtA?autoplay=1"
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <p className="font-caveat text-[#FF5A36] text-2xl text-center mb-2">What people say</p>
          <h2 className="font-barlow-condensed font-black text-[#0A1628] text-6xl uppercase text-center mb-16">
            Community<br />Voices
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Edgy, inventive, and sincere, Anderson gives the reader a new look at an old medium, creating a unique experience that keeps hold of the reader long after the last page has been turned.",
                name: "Joe Buckler",
                role: "Pine Reads Review",
                color: "#FFD600",
              },
              {
                quote: "StoryGrow is a great game to get students engaged with their creativity, one another, and the world around them through writing (and occasionally drawing).",
                name: "Maia Schneider",
                role: "Environmental Education Program Coordinator, University of Arizona",
                color: "#FF5A36",
              },
              {
                quote: "It's not only young adults who can be touched by this affecting book.",
                name: "Christine Wald-Hopkins",
                role: "Arizona Daily Star",
                color: "#0A1628",
              },
            ].map((t, i) => (
              <div key={i} className="border-t-4 pt-8" style={{ borderColor: t.color }}>
                <p className="font-barlow text-[#0A1628]/80 text-lg italic mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-barlow-condensed font-black text-[#0A1628] text-xl uppercase">{t.name}</p>
                  <p className="font-barlow text-[#0A1628]/50 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="bg-[#F5F0E8] py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#FFD600] -z-10" />
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src={IMAGES.torranHeadshot}
                  alt="Torran Anderson"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div>
              <p className="font-caveat text-[#FF5A36] text-2xl mb-2">Our founder</p>
              <h2 className="font-barlow-condensed font-black text-[#0A1628] text-6xl uppercase mb-6">
                Torran<br />Anderson
              </h2>
              <p className="font-barlow text-[#0A1628]/80 text-lg mb-6 leading-relaxed">
                Torran Anderson is an author, educator, and community storyteller based in Tucson, Arizona. He founded the Center for Storytelling Innovation to make meaningful storytelling accessible to everyone — through books, games, workshops, and creative projects.
              </p>
              <blockquote className="border-l-4 border-[#FF5A36] pl-6 mb-8">
                <p className="font-caveat text-[#0A1628] text-2xl">
                  "Let's work together to make stories accessible for everyone."
                </p>
              </blockquote>
              <Link href="/about">
                <button className="bg-[#0A1628] text-white font-barlow-condensed font-black text-xl uppercase tracking-wide px-8 py-4 hover:bg-[#FF5A36] transition-colors">
                  Our Story →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO MOSAIC */}
      <section className="py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            IMAGES.pinataMoonBanner,
            IMAGES.upwardBoundWorkshop,
            IMAGES.writingHand,
            IMAGES.groupOutdoor,
          ].map((img, i) => (
            <div key={i} className="relative overflow-hidden h-48 md:h-64 group">
              <img
                src={img}
                alt="CSI community"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0A1628]/0 group-hover:bg-[#0A1628]/40 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FF5A36] py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="font-caveat text-white text-2xl mb-3">Ready to begin?</p>
          <h2 className="font-barlow-condensed font-black text-white text-6xl md:text-7xl uppercase mb-6">
            Let's Create Something<br />Meaningful Together
          </h2>
          <p className="font-barlow text-white/80 text-xl max-w-2xl mx-auto mb-10">
            Whether you're an educator, a reader, or a community organizer — there's a story waiting for you here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/workshops">
              <button className="bg-white text-[#FF5A36] font-barlow-condensed font-black text-xl uppercase tracking-wide px-8 py-4 hover:bg-[#0A1628] hover:text-white transition-colors">
                Explore Workshops
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white font-barlow-condensed font-black text-xl uppercase tracking-wide px-8 py-4 hover:bg-white hover:text-[#FF5A36] transition-colors">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
