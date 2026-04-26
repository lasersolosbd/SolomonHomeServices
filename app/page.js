"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Star,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Target,
  Key,
  Map,
  Search,
  ChevronDown
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   SCHEMA MARKUP DATA
───────────────────────────────────────────────────────────── */
const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Mark Solomon",
  "jobTitle": "REALTOR®",
  "worksFor": {
    "@type": "RealEstateAgent",
    "name": "REAL Broker LLC"
  },
  "url": "https://www.solomonhomeservices.com",
  "telephone": "+18168535467",
  "email": "mark@solomonhomeservices.com",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "CO",
    "addressCountry": "US"
  },
  "areaServed": [
    "Fort Collins, CO",
    "Loveland, CO",
    "Longmont, CO",
    "Boulder, CO",
    "Denver, CO",
    "Colorado Front Range"
  ],
  "description": "Military veteran REALTOR® with 20+ years of experience serving buyers and sellers across the Colorado Front Range. Precision pricing, expert negotiation, and relentless client advocacy.",
  "knowsAbout": ["Real Estate", "Home Selling", "Home Buying", "VA Loans", "PCS Relocation", "Colorado Front Range Real Estate"],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "REALTOR®"
  }
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why should I work with a military veteran real estate agent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A military veteran real estate agent brings discipline, mission-focus, and negotiation precision that directly benefits your transaction. Mark Solomon's 20+ years of military leadership translates to clear communication, unwavering advocacy, and the ability to execute under pressure — qualities that protect your interests whether you're buying or selling in any market condition."
      }
    },
    {
      "@type": "Question",
      "name": "How do you maximize my home's selling price in Colorado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Maximizing your sale price starts with precision pricing based on micro-market data, not broad averages. Mark uses a tactical pricing strategy backed by hyperlocal comparable analysis, positions your listing with maximum exposure across the MLS and premium portals, and leverages 20+ years of negotiation experience to attract and close the strongest possible offer."
      }
    },
    {
      "@type": "Question",
      "name": "What areas of the Front Range do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mark Solomon serves the entire Colorado Front Range corridor. Primary service areas include Fort Collins, Loveland, Longmont, Boulder, Broomfield, Westminster, Thornton, and the greater Denver metro. He also specializes in military PCS relocations and out-of-state buyer transactions throughout Northern Colorado."
      }
    },
    {
      "@type": "Question",
      "name": "What awards and credentials does Mark Solomon hold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mark Solomon is a Business Strategy Advisor, negotiation instructor, and public speaker. He is a two-time Good Neighbor Award winner (Missouri Association of Realtors in 2017, National Association of Realtors in 2019) for his work co-founding the Veterans Community Project."
      }
    }
  ]
};

/* ─────────────────────────────────────────────────────────────
   TESTIMONIALS DATA
───────────────────────────────────────────────────────────── */
const testimonials = [
  {
    stars: 5,
    text: "I lived in the Southeast region and had an investment property in Kansas City... I told him my concern that I needed the property sold before wintertime. Well, before the end of October he was able to find an investor. I can't thank him enough for going above and beyond. He treats me like a very important client even though my property was just a small house. I assure you he is one of a kind. If I have to rate Mark on a scale of 1 to 10... I would give him an 11.",
  },
  {
    stars: 5,
    text: "Mark, Amanda, Chasity, and the entire Solomon team are first rate. I can be a difficult customer at times and they quickly and skillfully answered all my questions and handled any issues. Mark is calm and reasoned, but he's not a pushover. He is a strong and savvy advocate for his clients. Buying or selling, you'll be taken care of by these guys.",
  },
  {
    stars: 5,
    text: "My wife and I worked with Mark to sell our prior house, and to purchase our new home. We really can't say enough good things about Mark. Mark is knowledgeable, personable, endlessly patient, and incredibly generous with his time. Buying a home in this market is challenging and stressful but working with Mark made it as painless and straightforward as possible.",
  },
  {
    stars: 5,
    text: "This is the second time we have used Mark for our Real Estate needs. Great to work with, very responsive and excellent knowledge of the business. Mark listed, showed and received an offer on the house within 2 days. Very pleased to work with him.",
  },
  {
    stars: 5,
    text: "Mark went above and beyond to get us into the right home! Always responsive to phone calls, requests to see yet another house, and putting up with my entire huge family tagging along. Very positive experience all the way around!",
  },
  {
    stars: 5,
    text: "Very knowledgeable and honest. Cared more about my family's needs, than making money off of the sale. Helped us with any and all questions we had, so we never felt like we were being left in the dark.",
  },
  {
    stars: 5,
    text: "Mark is the best realtor in KC. His team is professional and the process of buying our first home was so easy! You hear stories of how much work it is to buy a home, but we didn't experience any problems thanks to Mark and his team! Everyone was easy to work with and they made it FUN!",
  },
  {
    stars: 5,
    text: "As first time home buyers, we were very glad to have such a patient professional! We had a wonderful experience with Mark, he explained everything very thoroughly and answered our endless questions.",
  },
];

/* ─────────────────────────────────────────────────────────────
   HERO SECTION — Refined Asymmetric Layout
───────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-[#f5f1eb] overflow-hidden pt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center relative z-10">

          {/* LEFT: Headline block */}
          <div className="lg:col-span-6 xl:col-span-5 relative z-20 pb-12 lg:pb-0 lg:pr-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#c9a84c]" />
              <span className="text-slate-500 text-[11px] font-bold tracking-[0.2em] uppercase">
                Colorado Front Range · REALTOR®
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-[4.5rem] text-[#0f172a] leading-[1.05] mb-8 font-black"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
            >
              Experience<br />
              &amp; Precision<br />
              <span className="relative inline-block">
                in Every
                <span
                  className="block absolute -bottom-1 left-0 h-1.5 w-full"
                  style={{ background: "linear-gradient(90deg, #c9a84c, #d4a574, transparent)" }}
                />
              </span>
              <span className="block mt-2 italic font-light text-[#c9a84c]">Detail.</span>
            </h1>

            <p className="text-sm md:text-base text-slate-600 max-w-md leading-relaxed mb-10">
              Over two decades of mastery in real estate. No guesswork — just tactical strategy and relentless negotiation to make selling or buying a great experience.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-5">
              <a
                href="#contact"
                className="px-8 py-3.5 bg-[#0f172a] text-white text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-3 group hover:bg-[#c9a84c] hover:text-[#0f172a] transition-colors duration-300 rounded-sm"
              >
                Start The Process
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#idx-listings"
                className="text-[#0f172a] text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2 hover:text-[#c9a84c] transition-colors pt-4 sm:pt-0 self-center"
              >
                Search Properties
              </a>
            </div>

            {/* Credential strip */}
            <div className="mt-12 pt-6 border-t border-stone-300/50 flex items-center gap-8">
              <div>
                <p className="text-[#0f172a] font-black text-2xl" style={{ fontFamily: "var(--font-display)" }}>20+</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Years Licensed</p>
              </div>
              <div className="w-px h-8 bg-stone-300" />
              <div>
                <p className="text-[#0f172a] font-black text-2xl" style={{ fontFamily: "var(--font-display)" }}>5★</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Client Rated</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Mountain Image with Michigan-style Border */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div className="relative w-full lg:ml-8 mt-8 lg:mt-0 max-w-2xl ml-auto">
              
              {/* The "Michigan" Border accents */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-[#c9a84c]/60 hidden lg:block z-20 pointer-events-none" />
              <div className="absolute -top-10 right-4 text-[#0f172a] text-[10px] font-bold tracking-[0.3em] uppercase hidden lg:block z-20">
                Colorado Front Range
              </div>

              {/* Main image container */}
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] shadow-2xl rounded-sm overflow-hidden z-10">
                <img
                  src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80&w=1200"
                  alt="Colorado Front Range Mountains"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating award card */}
              <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white px-6 py-4 flex items-center gap-4 z-30 shadow-xl rounded-sm">
                <Award size={20} className="text-[#c9a84c] shrink-0" />
                <div>
                  <p className="font-black text-lg text-[#0f172a] leading-none" style={{ fontFamily: "var(--font-display)" }}>20+</p>
                  <p className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold mt-1">Years of Excellence</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   STATS BAND
───────────────────────────────────────────────────────────── */
function StatsBand() {
  const pillars = ["Precision", "Expert Negotiation", "Unmatched Market Insight"];
  return (
    <section className="bg-[#0f172a] border-y border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10">
        {pillars.map((p, i) => (
          <div key={i} className="flex-1 flex items-center justify-center py-3 md:py-0 first:pt-0 last:pb-0 gap-3">
            <span className="w-1 h-4 bg-[#c9a84c]" />
            <h3 className="text-white font-bold text-xs md:text-sm tracking-[0.15em] uppercase">{p}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   VALUE PROPS — Scaled-down Bento Grid
───────────────────────────────────────────────────────────── */
function ValueProps() {
  return (
    <section id="strategy" className="py-24 bg-[#f5f1eb]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

        <div className="mb-12 max-w-xl">
          <span className="text-[#c9a84c] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">The Approach</span>
          <h2
            className="text-4xl md:text-5xl text-[#0f172a] leading-[1.05] font-black mb-0"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
          >
            A Different Kind<br />
            <span className="italic font-light text-slate-500">of Strategy.</span>
          </h2>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* BLOCK 1 — Dark full-width intro */}
          <div className="md:col-span-12 bg-[#0f172a] px-8 py-10 relative overflow-hidden rounded-sm">
            <div className="absolute top-0 left-0 w-32 h-1" style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
            <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-4xl">
              Buying or selling real estate isn't a simple transaction — it's one of the largest financial decisions you'll make. I bring clear objectives, precise execution, and an unwillingness to accept anything less than the best possible outcome for you.
            </p>
          </div>

          {/* BLOCK 2 — Seller: Tactical Pricing */}
          <div className="md:col-span-7 bg-[#0f172a] px-8 py-10 flex flex-col justify-between relative overflow-hidden rounded-sm min-h-[260px]">
            <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full border border-[#c9a84c]/20 pointer-events-none" />
            <div>
              <span className="text-[#c9a84c] text-[9px] font-bold tracking-[0.25em] uppercase block mb-4">For Sellers · 01</span>
              <h3 className="text-white font-black leading-tight mb-4 text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                Tactical<br />Pricing Strategy
              </h3>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Every listing is priced with precision. We analyze the micro-market, position you competitively, and go to market with a plan designed to attract the strongest offers.
            </p>
          </div>

          {/* BLOCK 3 — Forest green accent tile */}
          <div className="md:col-span-5 bg-[#1a3a2e] px-8 py-10 flex flex-col justify-between relative overflow-hidden rounded-sm min-h-[260px]">
            <div>
              <span className="text-[#a3c9a8]/80 text-[9px] font-bold tracking-[0.25em] uppercase block mb-4">For Sellers · 02</span>
              <h3 className="text-white font-black leading-tight mb-4 text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                Maximum<br />Market Exposure
              </h3>
            </div>
            <p className="text-[#a3c9a8]/90 text-sm leading-relaxed">
              Your home reaches buyers across the MLS, premium portals, and targeted campaigns — because the right buyer may not be looking where everyone else advertises.
            </p>
          </div>

          {/* BLOCK 4 — Stone buyer tile */}
          <div className="md:col-span-5 bg-stone-900 px-8 py-10 flex flex-col justify-between relative overflow-hidden rounded-sm min-h-[260px]">
            <div>
              <span className="text-[#c9a84c] text-[9px] font-bold tracking-[0.25em] uppercase block mb-4">For Buyers · 01</span>
              <h3 className="text-white font-black leading-tight mb-4 text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                Strategic<br />Acquisitions
              </h3>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              We don't just "look at houses." We hunt for the right property, analyzing value, neighborhood trends, and future equity potential to ensure a smart investment.
            </p>
          </div>

          {/* BLOCK 5 — PCS/Relocation */}
          <div className="md:col-span-7 bg-[#0f172a] border border-[#c9a84c]/20 px-8 py-10 flex flex-col justify-between relative overflow-hidden rounded-sm min-h-[260px]">
            <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5 pointer-events-none" style={{
              background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)"
            }} />
            <div>
              <span className="text-[#c9a84c] text-[9px] font-bold tracking-[0.25em] uppercase block mb-4">For Buyers · 02</span>
              <h3 className="text-white font-black leading-tight mb-4 text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                Relocation &amp;<br />PCS Expertise
              </h3>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Moving across the country or handling a short-notice PCS? I know timelines, VA loan nuances, and how to execute a seamless transition from afar.
            </p>
          </div>

        </div>

        <div className="mt-12 text-center md:text-left">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#0f172a] text-white text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#c9a84c] hover:text-[#0f172a] transition-colors duration-300 rounded-sm group"
          >
            Start Your Strategy
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   IDX LISTINGS SECTION — Scaled Height
───────────────────────────────────────────────────────────── */
function IdxSection() {
  const [activeTab, setActiveTab] = useState('search');
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section id="idx-listings" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#c9a84c] text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">
              Property Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl text-[#0f172a] leading-tight font-black" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
              Discover the <i className="text-[#1e293b] font-light">Front Range.</i>
            </h2>
          </div>

          <div className="flex bg-stone-50 p-1 border border-stone-200 rounded-sm">
            <button
              onClick={() => setActiveTab('search')}
              className={`px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-all rounded-sm ${activeTab === 'search' ? 'bg-white shadow-sm text-[#0f172a]' : 'text-slate-500 hover:text-[#0f172a]'}`}
            >
              MLS Search
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-all rounded-sm ${activeTab === 'featured' ? 'bg-white shadow-sm text-[#0f172a]' : 'text-slate-500 hover:text-[#0f172a]'}`}
            >
              My Listings
            </button>
          </div>
        </div>

        <p className="text-[11px] text-stone-500 italic mb-4 text-right">
          Note: If no properties appear in "My Listings", inventory is currently sold out. Please use "MLS Search".
        </p>

        {/* Shrunk height from 600px to 500px */}
        <div className="w-full h-[500px] bg-stone-50 border border-stone-200 overflow-hidden relative flex items-center justify-center rounded-sm">
          {!iframeLoaded ? (
            <div className="text-center p-8 z-20 flex flex-col items-center bg-white border border-stone-200 max-w-md rounded-sm">
              <Search size={32} className="text-[#c9a84c] mb-4" />
              <h3 className="text-xl font-black text-[#0f172a] mb-2" style={{ fontFamily: "var(--font-display)" }}>Live MLS Connection</h3>
              <p className="text-stone-500 mb-6 leading-relaxed text-sm">
                Connect directly to the REcolorado live database to explore current active properties across the Front Range.
              </p>
              <button
                onClick={() => setIframeLoaded(true)}
                className="px-6 py-3 bg-[#0f172a] text-white text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#c9a84c] hover:text-[#0f172a] transition-colors flex items-center gap-2 rounded-sm"
              >
                Load Live Database <ArrowRight size={14} />
              </button>
            </div>
          ) : (
            <>
              <div className={`absolute inset-0 ${activeTab === 'search' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                <iframe loading="lazy" src="https://matrix.recolorado.com/Matrix/public/IDX.aspx?idx=3b013217" width="100%" height="100%" frameBorder="0" marginWidth="0" marginHeight="0"></iframe>
              </div>
              <div className={`absolute inset-0 ${activeTab === 'featured' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                <iframe loading="lazy" src="https://matrix.recolorado.com/Matrix/public/IDX.aspx?idx=223b3218" width="100%" height="100%" frameBorder="0" marginWidth="0" marginHeight="0"></iframe>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   ABOUT SECTION — Scaled Down Font
───────────────────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section id="about" className="relative bg-white overflow-hidden">
      <div className="relative w-full h-[50vw] max-h-[600px] min-h-[350px] overflow-hidden">
        {/* Fixed broken image link with reliable high-res mountain shot */}
        <img
          src="https://images.unsplash.com/photo-1629130713791-c67d307d0d0e?auto=format&fit=crop&q=80&w=2000"
          alt="Colorado Front Range Living"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.4) 55%, rgba(15,23,42,0.05) 100%)" }} />

        <div className="absolute inset-0 flex items-end pb-16 lg:pb-20">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-xl">
              <span className="text-[#c9a84c] text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">About Mark</span>
              <h2
                className="font-black text-white leading-[1.05] mb-0 text-5xl md:text-6xl"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
              >
                Masterclass<br />
                Level of<br />
                <span className="italic font-light" style={{ color: "#c9a84c" }}>Service.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-1 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-4">
              <div className="bg-[#0f172a] px-8 py-10 relative overflow-hidden rounded-sm">
                <div className="absolute top-0 left-0 w-24 h-1" style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }} />

                <div className="mb-6 w-24 h-24 overflow-hidden border-2 border-[#c9a84c] rounded-sm">
                  <img src="/Mark-headshot.JPG" alt="Mark Solomon Headshot" className="w-full h-full object-cover object-center" />
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { icon: Shield, label: "Iraq Veteran" },
                    { icon: Award, label: "20+ Yrs REALTOR®" },
                    { icon: Users, label: "Charity Co-Founder" },
                  ].map((badge) => (
                    <div key={badge.label} className="flex items-center gap-2 px-3 py-1.5 border border-white/15 bg-white/5 rounded-sm">
                      <badge.icon size={11} className="text-[#c9a84c]" />
                      <span className="text-stone-300 text-[9px] font-semibold uppercase tracking-wider">{badge.label}</span>
                    </div>
                  ))}
                </div>

                <blockquote>
                  <p className="text-lg font-bold text-white leading-snug mb-6" style={{ fontFamily: "var(--font-display)" }}>
                    "The process of selling or buying a home should be precise, streamlined, and — above all — enjoyable."
                  </p>
                </blockquote>

                <div className="pt-5 border-t border-white/10">
                  <p className="text-[#c9a84c] text-[10px] font-bold tracking-widest uppercase">— Mark Solomon</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
                <p>With over two decades of real estate mastery, Mark has negotiated deals so tight they squeak. He brings precision, relentless advocacy, and a caffeine-fueled passion to every single transaction. When he isn't closing complex deals or teaching others how to dominate the market, he's likely thinking about closing deals — or trying to convince his family that "comparative market analysis" is a perfectly normal dinner table topic.</p>
                <p>Commander Mark Solomon, United States Navy Reserve, arrived in the United States as an immigrant with something most people spend a lifetime trying to earn: a genuine appreciation for what this country offers. He became a U.S. citizen in 1995 and hasn't wasted a day since.</p>
                <p>Today, after over two decades of military experience — including a combat deployment to Iraq — he continues his service in the military. His two sons also joined the military. Service isn't just a value in the Solomon household; it's the baseline expectation.</p>
                <p>In real estate, Mark channels that same standard. Licensed for over 20 years, he's survived enough market cycles to know that "timing the market" usually just means "being ready when everyone else panics." His instincts for pricing and negotiation come from repetition, pattern recognition, and a healthy disrespect for conventional wisdom.</p>
                <p>His work extends well beyond the closing table. As a co-founder of Veterans Community Project (VCP.org), a 501(c)(3) charity, Mark helped raise over $1.5 million to house homeless Veterans across six cities and five states — because the people who defended this country's neighborhoods deserve to live in one.</p>
                <p>He's been married to his wife, Chasity, for over 23 years — a partnership that, by all available evidence, requires the exact same negotiation skills he brings to real estate. He credits her entirely for the outcome and acknowledges that she wins every negotiation at home.</p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0f172a] text-white text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#c9a84c] hover:text-[#0f172a] transition-colors duration-300 rounded-sm"
                >
                  Work With Mark <ArrowRight size={13} />
                </a>
                <a
                  href="https://www.vcp.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone-100 text-[#0f172a] text-xs font-bold tracking-[0.15em] uppercase hover:bg-stone-200 transition-colors duration-300 border border-stone-200 rounded-sm"
                >
                  Learn About VCP <Users size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   TESTIMONIALS SECTION
───────────────────────────────────────────────────────────── */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  useEffect(() => {
    const interval = setInterval(next, 9000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[active];

  return (
    <section id="reviews" className="py-24 bg-stone-50 relative overflow-hidden">
      <div className="absolute top-8 left-8 text-stone-200 select-none pointer-events-none" style={{ fontFamily: "var(--font-display)", fontSize: "16rem", lineHeight: 1 }}>
        "
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <span className="text-[#c9a84c] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">Client Stories</span>
        <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-4" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
          Results That Speak.
        </h2>
        <span className="block w-12 h-0.5 mx-auto mb-12" style={{ background: "linear-gradient(90deg, #c9a84c, #d4a574)" }} />

        <div
          key={active}
          className="bg-white p-8 md:p-12 border border-stone-100 min-h-[350px] flex flex-col justify-center items-center rounded-sm"
          style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.04)", animation: "fadeInUp 0.4s ease forwards" }}
        >
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.stars }).map((_, i) => (
              <Star key={i} size={14} className="text-[#c9a84c]" fill="#c9a84c" />
            ))}
          </div>
          <p className="text-stone-700 text-base md:text-lg leading-relaxed italic" style={{ fontFamily: "var(--font-display)" }}>
            "{t.text}"
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={prev} className="w-10 h-10 border border-stone-200 bg-white flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-200 rounded-full">
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2 flex-wrap justify-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${i === active ? "w-6 h-1.5 bg-[#c9a84c]" : "w-1.5 h-1.5 bg-stone-300 hover:bg-stone-400"}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 border border-stone-200 bg-white flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-200 rounded-full">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   AEO FAQ SECTION
───────────────────────────────────────────────────────────── */
const faqItems = [
  {
    question: "Why should I work with a military veteran real estate agent?",
    answer: "A military veteran real estate agent brings unmatched discipline, mission-focus, and negotiation precision to your transaction. Mark Solomon's 20+ years of Navy leadership translates directly into clear communication, unwavering client advocacy, and the ability to execute flawlessly under pressure — qualities that protect your interests whether you're buying or selling in any market condition. Veterans operate by a code of service: your outcome is the mission, and the mission doesn't fail.",
  },
  {
    question: "How do you maximize my home's selling price in Colorado?",
    answer: "Maximizing your sale price starts with precision pricing driven by micro-market data — not broad averages. Mark uses a tactical pricing strategy backed by hyperlocal comparable analysis, positions your listing with maximum exposure across the MLS and premium buyer channels, and leverages two decades of negotiation experience to attract and close the strongest possible offer. Every decision from staging guidance to offer review is filtered through one question: what is objectively best for your bottom line.",
  },
  {
    question: "What areas of the Front Range do you serve?",
    answer: "Mark Solomon serves the entire Colorado Front Range corridor. Primary service areas include Fort Collins, Loveland, Longmont, Boulder, Broomfield, Westminster, Thornton, and the greater Denver metro area. He also specializes in military PCS relocations and out-of-state buyer transactions throughout Northern Colorado — with a deep understanding of VA loan timelines and remote transaction management.",
  },
  {
    question: "What awards and credentials does Mark Solomon hold?",
    answer: "Mark Solomon is a Business Strategy Advisor, negotiation instructor, and public speaker. He is a two-time Good Neighbor Award winner (Missouri Association of Realtors in 2017, National Association of Realtors in 2019) for his work co-founding the Veterans Community Project.",
  }
];

function AEO_FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div
        className="absolute bottom-0 right-0 text-white select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(60px, 10vw, 140px)", opacity: 0.03, fontFamily: "var(--font-display)", lineHeight: 1 }}
      >
        FAQ
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-4">
            <span className="text-[#c9a84c] text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">Common Questions</span>
            <h2
              className="font-black text-white leading-[1.05] mb-6 text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
            >
              Answers<br />
              <span className="italic font-light text-stone-400">You Need.</span>
            </h2>
            <p className="text-stone-400 text-sm leading-relaxed">
              Real answers to the questions that matter most. No fluff — just the straight information you need to make a confident decision.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-0 divide-y divide-white/10">
            {faqItems.map((item, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-6 text-left group"
                  aria-expanded={openIndex === i}
                >
                  <span
                    className="text-white font-bold text-sm md:text-base leading-snug group-hover:text-[#c9a84c] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-[#c9a84c] shrink-0 mt-0.5 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === i && (
                  <div className="mt-4 pr-8">
                    <p className="text-stone-400 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONTACT / GHL FORM SECTION 
───────────────────────────────────────────────────────────── */
function ContactSection() {
  const [formType, setFormType] = useState('seller');

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", state: "", zip: "",
    timeframe: "", movingTo: "", workingWithAgent: "",
    rentOrOwn: "", buyTimeframe: "", firstTimeBuyer: "", lastBought: "",
    message: "", smsConsent: false, voiceConsent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required.";
    if (!form.lastName.trim()) e.lastName = "Required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required.";
    if (!form.phone.trim()) e.phone = "Required.";

    if (formType === 'seller') {
      if (!form.address.trim()) e.address = "Required.";
      if (!form.city.trim()) e.city = "Required.";
      if (!form.state.trim()) e.state = "Required.";
      if (!form.zip.trim()) e.zip = "Required.";
      if (!form.timeframe.trim()) e.timeframe = "Timeframe is required.";
      if (!form.movingTo.trim()) e.movingTo = "Required.";
      if (!form.workingWithAgent) e.workingWithAgent = "Required.";
    } else {
      if (!form.rentOrOwn) e.rentOrOwn = "Required.";
      if (!form.buyTimeframe.trim()) e.buyTimeframe = "Required.";
      if (!form.firstTimeBuyer) e.firstTimeBuyer = "Required.";
    }
    return e;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    try {
      const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/rumk9zv94kRQ5xe7zqjO/webhook-trigger/cd4d26aa-594c-4d13-93a5-94f0cfab018c";
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          service_type: formType,
          source: "Solomon Home Services Website",
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full bg-white border px-4 py-3 text-sm text-slate-800 placeholder-stone-400 focus:outline-none focus:ring-1 transition-all duration-200 rounded-sm ${
      errors[field] ? "border-red-400 focus:ring-red-200" : "border-stone-200 focus:ring-[#c9a84c]/50 focus:border-[#c9a84c]"
    }`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <div className="lg:pt-4">
            <span className="text-[#c9a84c] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">Let's Connect</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] leading-[1.05] mb-5" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
              Start The <span className="italic font-light">Conversation.</span>
            </h2>
            <span className="block w-12 h-0.5 mb-6" style={{ background: "linear-gradient(90deg, #c9a84c, #d4a574)" }} />
            <p className="text-stone-600 text-sm leading-relaxed mb-8 max-w-md">
              No pressure. Just an honest assessment of your home's value or your buying potential in today's market — backed by 20+ years of experience.
            </p>
            <div className="space-y-3">
              {[
                "Complimentary Comparative Market Analysis (CMA) for sellers",
                "Strategic buyer education and clear path home",
                "Custom selling or acquisition strategy for your timeline",
                "Expert negotiation to protect your equity and investment"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-[#0f172a] shrink-0 mt-0.5" />
                  <span className="text-stone-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-stone-50 border border-stone-200 space-y-3 rounded-sm max-w-md">
              <p className="text-[#0f172a] font-bold text-sm" style={{ fontFamily: "var(--font-display)" }}>Prefer to reach out directly?</p>
              <a href="tel:+18168535467" className="flex items-center gap-3 text-stone-600 hover:text-[#c9a84c] text-sm transition-colors"><Phone size={14} className="text-[#c9a84c]" />(816) 853-5467</a>
              <a href="mailto:mark@solomonhomeservices.com" className="flex items-center gap-3 text-stone-600 hover:text-[#c9a84c] text-sm transition-colors"><Mail size={14} className="text-[#c9a84c]" />mark@solomonhomeservices.com</a>
              <div className="flex items-center gap-3 text-stone-500 text-sm"><MapPin size={14} className="text-[#c9a84c]" />Colorado Front Range</div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-white p-12 text-center border border-stone-100 flex flex-col items-center justify-center min-h-[500px] rounded-sm" style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.04)" }}>
                <div className="w-16 h-16 flex items-center justify-center mb-6 bg-[#0f172a]/5 rounded-full">
                  <CheckCircle size={28} className="text-[#0f172a]" />
                </div>
                <h3 className="text-2xl font-black text-[#0f172a] mb-2" style={{ fontFamily: "var(--font-display)" }}>Message Received.</h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-xs">Mark will be in touch within 24 hours. In the meantime, feel free to browse current listings above.</p>
              </div>
            ) : (
              <div className="bg-white border border-stone-100 overflow-hidden rounded-sm" style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.04)" }}>
                <div className="flex border-b border-stone-100">
                  <button
                    onClick={() => { setFormType('seller'); setErrors({}); }}
                    className={`flex-1 py-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors ${formType === 'seller' ? 'bg-[#0f172a] text-white' : 'bg-stone-50 text-slate-500 hover:bg-stone-100'}`}
                  >
                    I'm Selling
                  </button>
                  <button
                    onClick={() => { setFormType('buyer'); setErrors({}); }}
                    className={`flex-1 py-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors ${formType === 'buyer' ? 'bg-[#0f172a] text-white' : 'bg-stone-50 text-slate-500 hover:bg-stone-100'}`}
                  >
                    I'm Buying
                  </button>
                </div>

                <form onSubmit={handleSubmit} noValidate className="p-8">
                  <h3 className="text-lg font-black text-[#0f172a] mb-5" style={{ fontFamily: "var(--font-display)" }}>
                    {formType === 'seller' ? "Request a Free Home Valuation" : "Start Your Home Search"}
                  </h3>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">First Name <span className="text-red-500 ml-1">{errors.firstName || "*"}</span></label>
                      <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className={inputClass("firstName")} />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Last Name <span className="text-red-500 ml-1">{errors.lastName || "*"}</span></label>
                      <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className={inputClass("lastName")} />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email Address <span className="text-red-500 ml-1">{errors.email || "*"}</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass("email")} />
                  </div>

                  <div className="mb-3">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Phone Number <span className="text-red-500 ml-1">{errors.phone || "*"}</span></label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass("phone")} />
                  </div>

                  {/* SELLER FIELDS */}
                  {formType === 'seller' && (
                    <>
                      <div className="mb-3">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Street Address <span className="text-red-500 ml-1">{errors.address || "*"}</span></label>
                        <input type="text" name="address" value={form.address} onChange={handleChange} className={inputClass("address")} />
                      </div>

                      <div className="grid grid-cols-3 gap-3 mb-3">
                        <div className="col-span-1">
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">City <span className="text-red-500 ml-1">{errors.city || "*"}</span></label>
                          <input type="text" name="city" value={form.city} onChange={handleChange} className={inputClass("city")} />
                        </div>
                        <div className="col-span-1">
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">State <span className="text-red-500 ml-1">{errors.state || "*"}</span></label>
                          <input type="text" name="state" value={form.state} onChange={handleChange} className={inputClass("state")} />
                        </div>
                        <div className="col-span-1">
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Zip <span className="text-red-500 ml-1">{errors.zip || "*"}</span></label>
                          <input type="text" name="zip" value={form.zip} onChange={handleChange} className={inputClass("zip")} />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Timeframe <span className="text-red-500 ml-1">{errors.timeframe || "*"}</span></label>
                          <input type="text" name="timeframe" value={form.timeframe} onChange={handleChange} placeholder="e.g. ASAP, 3 mos" className={inputClass("timeframe")} />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Moving To <span className="text-red-500 ml-1">{errors.movingTo || "*"}</span></label>
                          <input type="text" name="movingTo" value={form.movingTo} onChange={handleChange} placeholder="City, State" className={inputClass("movingTo")} />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Currently working with an Agent? <span className="text-red-500 ml-1">{errors.workingWithAgent || "*"}</span></label>
                        <div className="flex gap-4 mt-1">
                          <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer"><input type="radio" name="workingWithAgent" value="yes" checked={form.workingWithAgent === "yes"} onChange={handleChange} className="w-3.5 h-3.5 text-[#0f172a] focus:ring-[#c9a84c]" /> Yes</label>
                          <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer"><input type="radio" name="workingWithAgent" value="no" checked={form.workingWithAgent === "no"} onChange={handleChange} className="w-3.5 h-3.5 text-[#0f172a] focus:ring-[#c9a84c]" /> No</label>
                        </div>
                      </div>
                    </>
                  )}

                  {/* BUYER FIELDS */}
                  {formType === 'buyer' && (
                    <>
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Current Residence <span className="text-red-500 ml-1">{errors.rentOrOwn || "*"}</span></label>
                          <select name="rentOrOwn" value={form.rentOrOwn} onChange={handleChange} className={inputClass("rentOrOwn")}>
                            <option value="">Select...</option><option value="rent">Rent</option><option value="own">Own</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Move Timeframe <span className="text-red-500 ml-1">{errors.buyTimeframe || "*"}</span></label>
                          <input type="text" name="buyTimeframe" value={form.buyTimeframe} onChange={handleChange} placeholder="e.g. ASAP, 6 mos" className={inputClass("buyTimeframe")} />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">First time home purchase? <span className="text-red-500 ml-1">{errors.firstTimeBuyer || "*"}</span></label>
                        <div className="flex gap-4 mt-1">
                          <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer"><input type="radio" name="firstTimeBuyer" value="yes" checked={form.firstTimeBuyer === "yes"} onChange={handleChange} className="w-3.5 h-3.5 text-[#0f172a] focus:ring-[#c9a84c]" /> Yes</label>
                          <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer"><input type="radio" name="firstTimeBuyer" value="no" checked={form.firstTimeBuyer === "no"} onChange={handleChange} className="w-3.5 h-3.5 text-[#0f172a] focus:ring-[#c9a84c]" /> No</label>
                        </div>
                      </div>

                      {form.firstTimeBuyer === "no" && (
                        <div className="mb-3">
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Last time you bought/sold? <span className="text-red-500 ml-1">{errors.lastBought || "*"}</span></label>
                          <select name="lastBought" value={form.lastBought} onChange={handleChange} className={inputClass("lastBought")}>
                            <option value="">Select...</option>
                            <option value="0-3">0-3 years ago</option>
                            <option value="4-6">4-6 years ago</option>
                            <option value="7+">7+ years ago</option>
                          </select>
                        </div>
                      )}
                    </>
                  )}

                  <div className="mb-5 mt-4">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Message <span className="text-stone-400 font-normal normal-case">(optional)</span>
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={2} placeholder="How can I be of assistance?" className={`${inputClass("message")} resize-none`} />
                  </div>

                  <div className="mb-3 p-3 border border-stone-200 bg-stone-50 rounded-sm">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative mt-0.5 shrink-0">
                        <input type="checkbox" name="smsConsent" checked={form.smsConsent} onChange={handleChange} className="sr-only" />
                        <div className={`w-4 h-4 border flex items-center justify-center transition-all duration-200 ${form.smsConsent ? "bg-[#0f172a] border-[#0f172a]" : "bg-white border-stone-300"}`}>
                          {form.smsConsent && (<svg width="8" height="6" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>)}
                        </div>
                      </div>
                      <span className="text-[10px] text-stone-500 leading-relaxed">
                        By providing your phone number, you consent to receive marketing text messages from Solomon Home Services. Consent is not a condition of purchase. Message & data rates may apply. Reply STOP to opt out.
                      </span>
                    </label>
                  </div>

                  <div className="mb-5 p-3 border border-stone-200 bg-stone-50 rounded-sm">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative mt-0.5 shrink-0">
                        <input type="checkbox" name="voiceConsent" checked={form.voiceConsent} onChange={handleChange} className="sr-only" />
                        <div className={`w-4 h-4 border flex items-center justify-center transition-all duration-200 ${form.voiceConsent ? "bg-[#0f172a] border-[#0f172a]" : "bg-white border-stone-300"}`}>
                          {form.voiceConsent && (<svg width="8" height="6" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>)}
                        </div>
                      </div>
                      <span className="text-[10px] text-stone-500 leading-relaxed">
                        I consent to receive phone calls from Solomon Home Services, which may include automated, pre-recorded, or AI voice assistant communications. I understand I can opt out of future calls by requesting to be placed on the do-not-call list.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 font-bold text-[11px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0f172a] hover:bg-[#b8965e] transition-colors duration-300 disabled:opacity-60 rounded-sm"
                  >
                    {loading ? "Sending..." : (formType === 'seller' ? "Get My Free Valuation" : "Let's Get Started")}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE ROOT
───────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Script
        id="schema-real-estate-agent"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentSchema) }}
      />
      <Script
        id="schema-faq-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      <HeroSection />
      <StatsBand />
      <ValueProps />
      <IdxSection />
      <AboutSection />
      <TestimonialsSection />
      <AEO_FAQSection />
      <ContactSection />
    </>
  );
}
