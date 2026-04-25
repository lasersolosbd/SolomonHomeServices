"use client";

import { useState, useEffect } from "react";
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
  Search
} from "lucide-react";

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
    text: "My wife and I worked with Mark to sell our prior house, and to purchase our new home. We really can’t say enough good things about Mark. Mark is knowledgeable, personable, endlessly patient, and incredibly generous with his time. Buying a home in this market is challenging and stressful but working with Mark made it as painless and straightforward as possible.",
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
    text: "Mark is the best realtor in KC. His team is professional and the process of buying our first home was so easy! You hear stories of how much work it is to buy a home, but we didn’t experience any problems thanks to Mark and his team! Everyone was easy to work with and they made it FUN!",
  },
  {
    stars: 5,
    text: "As first time home buyers, we were very glad to have such a patient professional! We had a wonderful experience with Mark, he explained everything very thoroughly and answered our endless questions.",
  },
];

/* ─────────────────────────────────────────────────────────────
   STATS BAND DATA
───────────────────────────────────────────────────────────── */
const pillars = [
  { title: "Precision" },
  { title: "Expert Negotiation" },
  { title: "Unmatched Market Insight" }
];

/* ─────────────────────────────────────────────────────────────
   VALUE PROPS
───────────────────────────────────────────────────────────── */
const sellerProps = [
  {
    icon: TrendingUp,
    title: "Tactical Pricing Strategy",
    desc: "Every listing is priced with precision. We analyze the micro-market, position you competitively, and go to market with a plan designed to attract the strongest offers.",
  },
  {
    icon: Target,
    title: "Maximum Market Exposure",
    desc: "Your home reaches buyers across the MLS, premium portals, and targeted campaigns — because the right buyer may not be looking where everyone else is advertising.",
  },
];

const buyerProps = [
  {
    icon: Key,
    title: "Strategic Acquisitions",
    desc: "We don't just 'look at houses.' We hunt for the right property, analyzing value, neighborhood trends, and future equity potential to ensure a smart investment.",
  },
  {
    icon: Map,
    title: "Relocation & PCS Expertise",
    desc: "Moving across the country or handling a short-notice PCS? I know timelines, VA loan nuances, and how to execute a seamless transition from afar.",
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
    <section id="home" className="relative min-h-screen flex items-center bg-stone-50 overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-6 z-20">
          <div className={`inline-flex items-center gap-3 mb-6 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="h-px w-12 bg-[#c9a84c]" />
            <span className="text-slate-500 text-xs font-semibold tracking-[0.2em] uppercase">
              Colorado Front Range
            </span>
          </div>
          <h1 className={`text-5xl md:text-6xl lg:text-7xl text-[#0f172a] leading-[1.1] mb-8 text-balance transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ fontFamily: "var(--font-display)" }}>
            Experience & Precision in Every <i className="text-[#1e293b]">Detail.</i>
          </h1>
          <p className={`text-lg text-slate-600 max-w-lg leading-relaxed mb-10 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Over two decades of mastery in real estate. No guesswork, no algorithms (maybe a little bit of AI - since everyone is doing it) - just tactical strategy and relentless negotiation to make selling or buying a great experience.
          </p>
          <div className={`flex flex-col sm:flex-row items-center gap-6 transition-all duration-1000 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-[#0f172a] text-white text-sm font-semibold tracking-widest uppercase hover:bg-[#c9a84c] transition-colors duration-300 flex items-center justify-center gap-3 group">
              Start The Process
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#idx-listings" className="text-[#0f172a] text-sm font-semibold tracking-widest uppercase hover:text-[#c9a84c] transition-colors flex items-center gap-2">
              Search Properties
            </a>
          </div>
        </div>
        <div className={`lg:col-span-6 relative transition-all duration-1000 delay-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto">
            <div className="absolute inset-0 bg-stone-200 shadow-floating rounded-sm overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000" alt="Luxury Colorado Home" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-editorial rounded-sm flex items-start gap-4 max-w-[200px]">
              <Award size={24} className="text-[#c9a84c] shrink-0" />
              <div>
                <p className="font-display text-2xl text-[#0f172a] mb-1">20+</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold leading-tight">Years of Excellence</p>
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
  return (
    <section className="bg-[#0f172a] border-y border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
        {pillars.map((pillar, index) => (
          <div key={index} className="pt-4 md:pt-0 first:pt-0 flex items-center justify-center">
            <h3 className="text-white font-bold text-lg md:text-xl tracking-wide uppercase flex items-center gap-3">
              <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              {pillar.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SELLER & BUYER VALUE PROPS
───────────────────────────────────────────────────────────── */
function ValueProps() {
  return (
    <section id="strategy" className="py-24 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase block mb-3">
            The Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
            A Different Kind of <span className="text-[#1e293b]">Strategy.</span>
          </h2>
          <span className="block w-14 h-0.5 mb-5" style={{ background: "linear-gradient(90deg, #c9a84c, #d4a574)" }} />
          <p className="text-stone-600 text-base leading-relaxed">
            Buying or selling real estate isn't a simple transaction — it's one of the largest financial decisions you'll make. I bring clear objectives, precise execution, and an unwillingness to accept anything less than the best possible outcome for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sellers Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-display text-[#0f172a] border-b border-stone-200 pb-3 mb-6">For Sellers</h3>
            {sellerProps.map((prop) => (
              <div key={prop.title} className="bg-white rounded-xl p-8 shadow-sm border border-stone-100 hover:border-[#c9a84c]/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#0f172a]/5">
                    <prop.icon size={20} className="text-[#0f172a]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0f172a] font-display">{prop.title}</h4>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>

          {/* Buyers Column */}
          <div className="space-y-6">
             <h3 className="text-xl font-display text-[#0f172a] border-b border-stone-200 pb-3 mb-6">For Buyers</h3>
            {buyerProps.map((prop) => (
              <div key={prop.title} className="bg-white rounded-xl p-8 shadow-sm border border-stone-100 hover:border-[#c9a84c]/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#0f172a]/5">
                    <prop.icon size={20} className="text-[#0f172a]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0f172a] font-display">{prop.title}</h4>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#0f172a] text-white text-sm font-semibold tracking-widest uppercase hover:bg-[#c9a84c] transition-all duration-300 group">
            Start Your Strategy
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
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
    <section id="idx-listings" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
              Property Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl text-[#0f172a] leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Discover the <i className="text-[#1e293b]">Front Range.</i>
            </h2>
          </div>
          
          <div className="flex bg-stone-50 p-1 rounded-sm border border-stone-200">
            <button 
              onClick={() => setActiveTab('search')}
              className={`px-6 py-3 text-sm font-semibold tracking-wider uppercase transition-all ${activeTab === 'search' ? 'bg-white shadow-sm text-[#0f172a]' : 'text-slate-500 hover:text-[#0f172a]'}`}
            >
              MLS Search
            </button>
            <button 
              onClick={() => setActiveTab('featured')}
              className={`px-6 py-3 text-sm font-semibold tracking-wider uppercase transition-all ${activeTab === 'featured' ? 'bg-white shadow-sm text-[#0f172a]' : 'text-slate-500 hover:text-[#0f172a]'}`}
            >
              My Listings
            </button>
          </div>
        </div>

        <p className="text-xs text-stone-500 italic mb-4 text-right">
          Note: If no properties appear in "My Listings", inventory is currently sold out. Please use "MLS Search".
        </p>

        <div className="w-full h-[600px] bg-stone-50 rounded-sm shadow-editorial border border-stone-100 overflow-hidden relative flex items-center justify-center">
          {!iframeLoaded ? (
            <div className="text-center p-8 z-2
