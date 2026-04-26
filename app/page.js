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
  "description": "Military Veteran REALTOR® with 20+ years of experience serving buyers and sellers across the Colorado Front Range. Precision pricing, expert negotiation, and relentless client advocacy.",
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
      "name": "Why should I work with a military Veteran real estate agent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A military Veteran real estate agent brings discipline, mission-focus, and negotiation precision that directly benefits your transaction. Mark Solomon's 20+ years of military leadership translates to clear communication, unwavering advocacy, and the ability to execute under pressure — qualities that protect your interests whether you're buying or selling in any market condition."
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
   HERO SECTION
───────────────────────────────────────────────────────────── */
function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#f5f1eb] overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT: Headline block */}
        <div className="lg:col-span-6 z-20">
          <div className={`inline-flex items-center gap-3 mb-6 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="h-px w-12 bg-[#c9a84c]" />
            <span className="text-slate-500 text-xs font-semibold tracking-[0.2em] uppercase">
              Colorado Front Range
            </span>
          </div>
          
          <h1 className={`text-5xl md:text-6xl lg:text-7xl text-[#0f172a] leading-[1.1] mb-8 text-balance transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ fontFamily: "var(--font-display)" }}>
            Experience & Precision in Every <i className="text-[#c9a84c] font-light">Detail.</i>
          </h1>
          
          <p className={`text-lg text-slate-600 max-w-lg leading-relaxed mb-10 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Over two decades of mastery in real estate. No guesswork, no algorithms (maybe a little bit of AI - since everyone is doing it) - just tactical strategy and relentless negotiation to make selling or buying a great experience.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center gap-6 transition-all duration-1000 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-[#0f172a] text-white text-sm font-semibold tracking-widest uppercase hover:bg-[#c9a84c] hover:text-[#0f172a] transition-colors duration-300 flex items-center justify-center gap-3 group rounded-sm">
              Start The Process
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#idx-listings" className="text-[#0f172a] text-sm font-semibold tracking-widest uppercase hover:text-[#c9a84c] transition-colors flex items-center gap-2">
              Search Properties
            </a>
          </div>
        </div>

        {/* RIGHT: Image Container */}
        <div className={`lg:col-span-6 relative transition-all duration-1000 delay-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto mt-12 lg:mt-0">
            
            {/* Top Right Bracket */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-[#c9a84c]/60 hidden lg:block z-20 pointer-events-none" />

            {/* Bottom Left Bracket */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[#c9a84c]/60 hidden lg:block z-20 pointer-events-none" />

            {/* Colorado Front Range Text */}
            <div className="absolute -bottom-10 left-4 text-[#0f172a] text-[10px] font-bold tracking-[0.3em] uppercase hidden lg:block z-20">
              Colorado Front Range
            </div>

            {/* Main Image */}
            <div className="absolute inset-0 shadow-floating rounded-sm overflow-hidden z-10 bg-stone-200">
                <img src="/ryan-hoffman-hero-mountain.jpg" alt="Colorado Mountains" className="w-full h-full object-cover" />
                
                {/* Photo Credit Overlay */}
                <div className="absolute bottom-2 right-2 z-40 bg-black/40 px-2 py-1 rounded-sm backdrop-blur-[2px]">
                  <a 
                    href="https://unsplash.com/@ryanhoffman007?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[9px] text-white/80 hover:text-white transition-colors"
                  >
                    Photo by Ryan Hoffman on Unsplash
                  </a>
                </div>
            </div>
            
            {/* Badge moved to top right overlapping bracket */}
            <div className="absolute -top-6 -right-6 lg:-right-12 bg-white px-6 py-5 shadow-editorial rounded-sm flex items-start gap-4 max-w-[200px] z-30 border border-stone-100">
              <Award size={24} className="text-[#c9a84c] shrink-0" />
              <div>
                <p className="font-display text-2xl text-[#0f172a] mb-1 leading-none">20+</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold leading-tight">Years Licensed</p>
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
    <section className="bg-[#0f172a] border-y border-white/10 py-7">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
        {pillars.map((p, i) => (
          <div key={i} className="flex-1 flex items-center justify-center py-3 md:py-0 first:pt-0 last:pb-0 gap-3">
            <span className="w-1 h-5 bg-[#c9a84c]" />
            <h3 className="text-white font-bold text-sm md:text-base tracking-[0.15em] uppercase">{p}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   VALUE PROPS
───────────────────────────────────────────────────────────── */
function ValueProps() {
  return (
    <section id="strategy" className="py-24 bg-[#f5f1eb]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-14 max-w-xl">
          <span className="text-[#c9a84c] text-[10px] font-bold tracking-[0.35em] uppercase block mb-4">The Approach</span>
          <h2 className="text-[clamp(42px,5vw,72px)] text-[#0f172a] leading-[0.95] font-black mb-0" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
            A Different Kind<br /><span className="italic font-light text-slate-500">of Strategy.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">
          <div className="md:col-span-12 bg-[#0f172a] px-10 py-12 relative overflow-hidden rounded-sm">
            <div className="absolute top-0 left-0 w-40 h-1" style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
            <p className="text-stone-300 text-base leading-relaxed max-w-3xl">
              Buying or selling real estate isn't a simple transaction — it's one of the largest financial decisions you'll make. I bring clear objectives, precise execution, and an unwillingness to accept anything less than the best possible outcome for you.
            </p>
          </div>
          <div className="md:col-span-7 bg-[#0f172a] px-10 py-14 flex flex-col justify-between relative overflow-hidden min-h-[300px] rounded-sm">
            <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full border border-[#c9a84c]/20" />
            <div>
              <span className="text-[#c9a84c] text-[9px] font-bold tracking-[0.3em] uppercase block mb-5">For Sellers · 01</span>
              <h3 className="text-white font-black leading-none mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,4vw,56px)", letterSpacing: "-0.02em" }}>
                Tactical<br />Pricing<br />Strategy
              </h3>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Every listing is priced with precision. We analyze the micro-market, position you competitively, and go to market with a plan designed to attract the strongest offers.
            </p>
          </div>
          <div className="md:col-span-5 bg-[#1a3a2e] px-10 py-14 flex flex-col justify-between relative overflow-hidden min-h-[300px] rounded-sm">
            <div>
              <span className="text-[#a3c9a8]/80 text-[9px] font-bold tracking-[0.3em] uppercase block mb-5">For Sellers · 02</span>
              <h3 className="text-white font-black leading-none mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,3.5vw,48px)", letterSpacing: "-0.02em" }}>
                Maximum<br />Market<br />Exposure
              </h3>
            </div>
            <p className="text-[#a3c9a8]/80 text-sm leading-relaxed">
              Your home reaches buyers across the MLS, premium portals, and targeted campaigns — because the right buyer may not be looking where everyone else advertises.
            </p>
          </div>
          <div className="md:col-span-5 bg-stone-900 px-10 py-14 flex flex-col justify-between relative overflow-hidden min-h-[280px] rounded-sm">
            <div>
              <span className="text-[#c9a84c] text-[9px] font-bold tracking-[0.3em] uppercase block mb-5">For Buyers · 01</span>
              <h3 className="text-white font-black leading-none mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,3.5vw,48px)", letterSpacing: "-0.02em" }}>Strategic<br />Acquisitions</h3>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              We don't just "look at houses." We hunt for the right property, analyzing value, neighborhood trends, and future equity potential to ensure a smart investment.
            </p>
          </div>
          <div className="md:col-span-7 bg-[#0f172a] border border-[#c9a84c]/20 px-10 py-14 flex flex-col justify-between relative overflow-hidden min-h-[280px] rounded-sm">
            <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5" style={{ background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)" }} />
            <div>
              <span className="text-[#c9a84c] text-[9px] font-bold tracking-[0.3em] uppercase block mb-5">For Buyers · 02</span>
              <h3 className="text-white font-black leading-none mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,4vw,56px)", letterSpacing: "-0.02em" }}>Relocation &amp;<br />PCS Expertise</h3>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Moving across the country or handling a short-notice PCS? I know timelines, VA loan nuances, and how to execute a seamless transition from afar.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#0f172a] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#c9a84c] hover:text-[#0f172a] transition-colors duration-300 group rounded-sm">
            Start Your Strategy <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
/* ─────────────────────────────────────────────────────────────
   IDX LISTINGS SECTION
───────────────────────────────────────────────────────────── */
function IdxSection() {
  const [activeTab, setActiveTab] = useState('search');
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section id="idx-listings" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div>
            <span className="text-[#c9a84c] text-[10px] tracking-[0.2em] font-bold uppercase block mb-3">Property Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] font-display leading-none">Discover the <i className="font-light text-[#c9a84c]">Front Range.</i></h2>
          </div>
          <div className="flex bg-stone-50 p-1 border border-stone-200 rounded-sm">
            <button onClick={() => setActiveTab('search')} className={`px-6 py-3 text-xs font-bold tracking-wider uppercase transition-all rounded-sm ${activeTab === 'search' ? 'bg-white shadow-sm text-[#0f172a]' : 'text-slate-500 hover:text-[#0f172a]'}`}>MLS Search</button>
            <button onClick={() => setActiveTab('featured')} className={`px-6 py-3 text-xs font-bold tracking-wider uppercase transition-all rounded-sm ${activeTab === 'featured' ? 'bg-white shadow-sm text-[#0f172a]' : 'text-slate-500 hover:text-[#0f172a]'}`}>My Listings</button>
          </div>
        </div>
        
        <div className="w-full h-[600px] bg-stone-50 border border-stone-200 relative flex items-center justify-center rounded-sm overflow-hidden mb-12">
          {!iframeLoaded ? (
            <button onClick={() => setIframeLoaded(true)} className="px-8 py-4 bg-[#0f172a] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-[#c9a84c] hover:text-[#0f172a] transition-colors duration-300 flex items-center gap-3">
              Load Live Database <ArrowRight size={14} />
            </button>
          ) : (
            <iframe src={activeTab === 'search' ? "https://matrix.recolorado.com/Matrix/public/IDX.aspx?idx=3b013217" : "https://matrix.recolorado.com/Matrix/public/IDX.aspx?idx=223b3218"} width="100%" height="100%" frameBorder="0" />
          )}
        </div>

        {/* RESTORED CTA BUTTON */}
        <div className="text-center">
          <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#0f172a] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#c9a84c] hover:text-[#0f172a] transition-colors duration-300 group rounded-sm shadow-md">
            Discuss Your Property Needs <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
/* ─────────────────────────────────────────────────────────────
   ABOUT MARK SECTION
───────────────────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white border-t border-stone-200">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("/about-home.jpg")`, backgroundSize: "cover", backgroundPosition: "center" }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="rounded-sm overflow-hidden bg-[#0f172a] border border-stone-200 p-8 md:p-10 relative" style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.15)" }}>
              <div className="absolute top-0 left-0 w-24 h-1 rounded-br-sm" style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
              
              <div className="mb-8 w-32 h-32 md:w-40 md:h-40 rounded-sm overflow-hidden border-2 border-[#c9a84c] shadow-inner relative">
                <img src="/Mark-headshot.JPG" alt="Commander Mark Solomon" className="w-full h-full object-cover object-center" />
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Shield, label: "Iraq Veteran" },
                  { icon: Award, label: "20+ Years as a REALTOR®" }, 
                  { icon: Users, label: "Charity Co-Founder" },
                ].map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5">
                    <badge.icon size={12} className="text-[#c9a84c]" />
                    <span className="text-stone-300 text-xs font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>

              <blockquote>
                <p className="text-2xl font-bold text-white leading-snug mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  "The process of selling or buying a home should be precise, streamlined, and—above all—enjoyable."
                </p>
              </blockquote>

              <div className="flex items-end justify-between gap-6 pt-6 mt-6 border-t border-white/10">
                <p className="text-[#c9a84c] text-sm font-semibold shrink">
                  — Mark Solomon, REALTOR®
                </p>
                <img src="/nar_membershipmark_white.png" alt="REALTOR® membership mark" className="h-12 w-auto shrink-0 mb-[-6px]" />
              </div>
            </div>
          </div>

          <div>
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase block mb-3">About Mark</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>
              Masterclass Level of
              <span className="block italic font-light" style={{ color: "#c9a84c" }}>
                Service.
              </span>
            </h2>
            <span className="block w-14 h-0.5 mb-7" style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }} />

            <div className="space-y-5 text-stone-600 text-sm leading-relaxed">
              <p>With over two decades of real estate mastery, Mark has negotiated deals so tight they squeak. He brings precision, relentless advocacy, and a caffeine-fueled passion to every single transaction. When he isn't closing complex deals or teaching others how to dominate the market, he's likely thinking about closing deals—or trying to convince his family that "comparative market analysis" is a perfectly normal dinner table topic.</p>
              <p>Commander Mark Solomon, United States Navy Reserve, arrived in the United States as an immigrant with something most people spend a lifetime trying to earn: a genuine appreciation for what this country offers. He became a U.S. citizen in 1995 and hasn't wasted a day since.</p>
              <p>Today, after over two decades of military experience — including a combat deployment to Iraq — he continues his service in the military. His two sons also joined the military. Service isn't just a value in the Solomon household; it's the baseline expectation.</p>
              <p>In real estate, Mark channels that same standard. Licensed for over 20 years, he's survived enough market cycles to know that "timing the market" usually just means "being ready when everyone else panics." His instincts for pricing and negotiation come from repetition, pattern recognition, and a healthy disrespect for conventional wisdom.</p>
              <p>His work extends well beyond the closing table. As a co-founder of Veterans Community Project (<a href="https://www.vcp.org" target="_blank" rel="noopener noreferrer" className="text-[#c9a84c] font-semibold hover:underline">VCP.org</a>), a 501(c)(3) charity, Mark helped raise over $1.5 million to house homeless Veterans across six cities and five states — because the people who defended this country's neighborhoods deserve to live in one.</p>
              <p>He's been married to his wife, Chasity, for over 23 years — a partnership that, by all available evidence, requires the exact same negotiation skills he brings to real estate. He credits her entirely for the outcome and acknowledges that she wins every negotiation at home.</p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#0f172a] text-white text-sm font-semibold tracking-wider uppercase hover:bg-[#c9a84c] hover:text-[#0f172a] transition-all duration-300 shadow-md">
                Work With Mark <ArrowRight size={14} />
              </a>
              <a href="https://www.vcp.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-stone-100 text-[#0f172a] text-sm font-semibold tracking-wider uppercase hover:bg-stone-200 transition-all duration-300 border border-stone-200">
                Learn About VCP <Users size={14} />
              </a>
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
    <section id="reviews" className="py-24 bg-white relative overflow-hidden border-t border-stone-200">
      <div className="absolute top-8 left-8 text-stone-100 select-none pointer-events-none" style={{ fontFamily: "var(--font-display)", fontSize: "20rem", lineHeight: 1 }}>
        "
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-[#c9a84c] text-[10px] font-bold tracking-[0.35em] uppercase block mb-3">Client Stories</span>
        <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-4" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
          Results That Speak.
        </h2>
        <span className="block w-14 h-0.5 mx-auto mb-16" style={{ background: "linear-gradient(90deg, #c9a84c, #d4a574)" }} />

        <div
          key={active}
          className="bg-[#fcfaf7] p-8 md:p-14 border border-stone-100 min-h-[400px] flex flex-col justify-center items-center rounded-sm shadow-sm"
          style={{ animation: "fadeInUp 0.4s ease forwards" }}
        >
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.stars }).map((_, i) => (
              <Star key={i} size={16} className="text-[#c9a84c]" fill="#c9a84c" />
            ))}
          </div>
          <p className="text-stone-700 text-lg md:text-xl leading-relaxed italic" style={{ fontFamily: "var(--font-display)" }}>
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
                className={`transition-all duration-300 rounded-full ${i === active ? "w-6 h-2 bg-[#c9a84c]" : "w-2 h-2 bg-stone-300 hover:bg-stone-400"}`}
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
  { question: "Why should I work with a military Veteran real estate agent?", answer: "A military Veteran real estate agent brings unmatched discipline, mission-focus, and negotiation precision to your transaction. Mark Solomon's 20+ years of Navy leadership translates directly into clear communication, unwavering client advocacy, and the ability to execute flawlessly under pressure." },
  { question: "How do you maximize my home's selling price in Colorado?", answer: "Maximizing your sale price starts with precision pricing driven by micro-market data — not broad averages. Mark uses a tactical pricing strategy backed by hyperlocal comparable analysis, positions your listing with maximum exposure, and leverages two decades of negotiation experience to close the strongest offer." },
  { question: "What areas of the Front Range do you serve?", answer: "Mark Solomon serves the entire Colorado Front Range corridor, including Fort Collins, Loveland, Longmont, Boulder, and the greater Denver metro area. He also specializes in military PCS relocations and out-of-state buyer transactions throughout Northern Colorado." },
  { question: "What awards and credentials does Mark Solomon hold?", answer: "Mark Solomon is a Business Strategy Advisor and two-time Good Neighbor Award winner (Missouri 2017, NAR 2019) for his work co-founding the Veterans Community Project." }
];

function AEO_FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);
  return (
    <section id="faq" className="py-24 bg-[#0f172a] relative overflow-hidden text-left">
      <div className="absolute bottom-0 right-0 text-white select-none pointer-events-none leading-none" style={{ fontSize: "clamp(80px, 12vw, 180px)", opacity: 0.03, fontFamily: "var(--font-display)", lineHeight: 1 }}>FAQ</div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start text-left">
          <div className="lg:col-span-4 text-left">
            <span className="text-[#c9a84c] text-[10px] font-bold tracking-[0.35em] uppercase block mb-5">Common Questions</span>
            <h2 className="font-black text-white leading-[0.92] mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,4vw,60px)", letterSpacing: "-0.02em" }}>Answers<br /><span className="italic font-light text-stone-400">You Need.</span></h2>
          </div>
          <div className="lg:col-span-8 space-y-0 divide-y divide-white/10 text-left">
            {faqItems.map((item, i) => (
              <div key={i} className="py-6 text-left">
                <button onClick={() => toggle(i)} className="w-full flex items-start justify-between gap-6 text-left group" aria-expanded={openIndex === i}>
                  <span className="text-white font-bold text-base md:text-lg leading-snug group-hover:text-[#c9a84c] transition-colors" style={{ fontFamily: "var(--font-display)" }}>{item.question}</span>
                  <ChevronDown size={18} className={`text-[#c9a84c] shrink-0 mt-1 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
                </button>
                {openIndex === i && <div className="mt-4 pr-8 text-left"><p className="text-stone-400 text-sm leading-relaxed">{item.answer}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONTACT SECTION
───────────────────────────────────────────────────────────── */
function ContactSection() {
  const [formType, setFormType] = useState('seller');
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", address: "", city: "", state: "", zip: "", timeframe: "", movingTo: "", workingWithAgent: "", rentOrOwn: "", buyTimeframe: "", firstTimeBuyer: "", lastBought: "", message: "", smsConsent: false, voiceConsent: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required.";
    if (!form.lastName.trim()) e.lastName = "Required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required.";
    if (!form.phone.trim()) e.phone = "Required.";
    if (formType === 'seller' && !form.address.trim()) e.address = "Required.";
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
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    try {
      await fetch("https://services.leadconnectorhq.com/hooks/rumk9zv94kRQ5xe7zqjO/webhook-trigger/cd4d26aa-594c-4d13-93a5-94f0cfab018c", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, service_type: formType, source: "Solomon Home Services Website" }) });
      setSubmitted(true);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const inputClass = (field) => `w-full bg-white border px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 rounded-sm transition-all ${errors[field] ? "border-red-400 focus:ring-red-200" : "border-stone-200 focus:ring-[#c9a84c]/30"}`;

  return (
    <section id="contact" className="py-24 bg-white text-left">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:pt-4 text-left">
            <span className="text-[#c9a84c] text-[10px] font-bold tracking-[0.35em] uppercase block mb-3">Let's Connect</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] leading-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>Start The Conversation.</h2>
            <span className="block w-14 h-0.5 mb-7" style={{ background: "linear-gradient(90deg, #c9a84c, #d4a574)" }} />
            <p className="text-stone-600 text-base leading-relaxed mb-8">No pressure. Just an honest assessment of your home's value or your buying potential in today's market — backed by 20+ years of experience.</p>
          </div>
          <div className="text-left w-full">
            {submitted ? (
              <div className="bg-white p-12 text-center border border-stone-100 min-h-[500px] rounded-sm flex flex-col items-center justify-center shadow-sm"><CheckCircle size={32} className="text-[#0f172a] mb-6" /><h3 className="text-2xl font-black text-[#0f172a] mb-3 font-display">Message Received.</h3><p className="text-stone-500 text-sm">Mark will be in touch within 24 hours.</p></div>
            ) : (
              <div className="bg-white border border-stone-100 overflow-hidden rounded-sm shadow-editorial">
                <div className="flex border-b border-stone-100">
                  <button onClick={() => setFormType('seller')} className={`flex-1 py-4 text-xs font-bold tracking-[0.15em] uppercase transition-colors ${formType === 'seller' ? 'bg-[#0f172a] text-white' : 'bg-stone-50 text-slate-500 hover:bg-stone-100'}`}>I'm Selling</button>
                  <button onClick={() => setFormType('buyer')} className={`flex-1 py-4 text-xs font-bold tracking-[0.15em] uppercase transition-colors ${formType === 'buyer' ? 'bg-[#0f172a] text-white' : 'bg-stone-50 text-slate-500 hover:bg-stone-100'}`}>I'm Buying</button>
                </div>
                <form onSubmit={handleSubmit} noValidate className="p-8 md:p-10 text-left">
                  <div className="grid grid-cols-2 gap-4 mb-4"><input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className={inputClass("firstName")} /><input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className={inputClass("lastName")} /></div>
                  <div className="mb-4"><input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className={inputClass("email")} /></div>
                  <div className="mb-4"><input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className={inputClass("phone")} /></div>
                  {formType === 'seller' && <div className="mb-4"><input type="text" name="address" placeholder="Street Address" value={form.address} onChange={handleChange} className={inputClass("address")} /></div>}
                  <div className="mb-4 p-4 border border-stone-200 bg-stone-50 text-[10px] text-stone-500 leading-relaxed">By submitting, you consent to receive communications from Solomon Home Services regarding your inquiry. Msg/data rates apply. Reply STOP to opt out.</div>
                  <button type="submit" disabled={loading} className="w-full py-4 font-bold text-xs tracking-[0.2em] uppercase bg-[#c9a84c] text-[#0f172a] hover:bg-[#b8965e] transition-colors rounded-sm disabled:opacity-60">{loading ? "Sending..." : "Submit Inquiry"}</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Script id="schema-agent" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentSchema) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
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
} // End of file
