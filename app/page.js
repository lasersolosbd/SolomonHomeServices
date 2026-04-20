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
  Home,
  Users,
  Heart,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Send,
  Search,
  DollarSign,
  Target,
  Medal,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   TESTIMONIALS DATA
───────────────────────────────────────────────────────────── */
const testimonials = [
  {
    name: "Sarah & James T.",
    location: "Longmont, CO",
    stars: 5,
    text: "Mark sold our home in 9 days — $22,000 over asking price. His military background comes through in everything: disciplined strategy, zero wasted moves, and a negotiation style that made the other side blink first. We're convinced he could negotiate a cease-fire if needed.",
  },
  {
    name: "Lt. Col. David R. (Ret.)",
    location: "Fort Collins, CO",
    stars: 5,
    text: "PCS moves are chaos by definition. Mark made ours feel like a precision operation. He understood our timeline, knew the VA loan process cold, and found us a home before I even finished clearing my last duty station. This is the agent you want if you're military.",
  },
  {
    name: "Monica & Paul S.",
    location: "Broomfield, CO",
    stars: 5,
    text: "We interviewed four agents. Mark was the only one who came with a written market strategy and an actual plan to maximize our sale price — not just a number pulled from thin air. We netted more than we expected and closed on our timeline. Exceptional.",
  },
  {
    name: "The Nguyen Family",
    location: "Loveland, CO",
    stars: 5,
    text: "As first-generation homeowners, we were nervous about every step. Mark was patient, educational, and never made us feel rushed. He explained everything clearly, protected our interests fiercely, and celebrated with us at closing like it was his own win. Highly recommend.",
  },
  {
    name: "Capt. Renée M.",
    location: "Colorado Springs, CO",
    stars: 5,
    text: "Mark got our home under contract in 4 days during a market that scared other sellers. His pricing strategy was surgical. He knew exactly where to position us and exactly how to handle competing dynamics. Former Navy, but his real estate game is next-level.",
  },
];

/* ─────────────────────────────────────────────────────────────
   STATS
───────────────────────────────────────────────────────────── */
const stats = [
  { value: "20+", label: "Years of Experience", icon: Award },
  { value: "$1.5M", label: "Raised for VCP Veterans Housing", icon: Heart },
  { value: "22+", label: "Years Serving Colorado Families", icon: Home },
  { value: "O-5", label: "Commander, U.S. Navy Reserves", icon: Medal },
];

/* ─────────────────────────────────────────────────────────────
   SELLER VALUE PROPS
───────────────────────────────────────────────────────────── */
const sellerProps = [
  {
    icon: TrendingUp,
    title: "Tactical Pricing Strategy",
    desc: "Every listing is priced with military precision — not wishful thinking. We analyze the micro-market, position you competitively, and go to market with a plan designed to attract the strongest offers.",
  },
  {
    icon: Target,
    title: "Maximum Market Exposure",
    desc: "Your home reaches buyers across the MLS, premium real estate portals, targeted social campaigns, and a curated network of pre-qualified buyers — because the right buyer may not be looking where everyone else is advertising.",
  },
  {
    icon: DollarSign,
    title: "Elite Negotiation",
    desc: "Two decades of high-stakes experience — in real estate and in service — means I don't flinch when things get complex. I negotiate your equity like it's a mission objective. Because it is.",
  },
  {
    icon: Shield,
    title: "Military Relocation Expertise",
    desc: "PCS orders don't wait for perfect market timing. I know VA loans, DOD timelines, and what it means to move a family on short notice. We make it work — and we make it profitable.",
  },
];

/* ─────────────────────────────────────────────────────────────
   HERO SECTION (High-End Editorial)
───────────────────────────────────────────────────────────── */
function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-stone-50 overflow-hidden pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content Area */}
        <div className="lg:col-span-6 z-20">
          <div
            className={`inline-flex items-center gap-3 mb-6 transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="h-px w-12 bg-[#c9a84c]" />
            <span className="text-slate-500 text-xs font-semibold tracking-[0.2em] uppercase">
              Colorado Front Range
            </span>
          </div>

          <h1
            className={`text-5xl md:text-6xl lg:text-7xl text-[#1a2332] leading-[1.1] mb-8 text-balance transition-all duration-1000 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            Experience & Precision in Every <i className="text-[#1e3a2f]">Detail.</i>
          </h1>

          <p
            className={`text-lg text-slate-600 max-w-lg leading-relaxed mb-10 transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Over two decades of mastery in Colorado real estate. No guesswork, no algorithms—just tactical strategy and relentless negotiation to protect your equity.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center gap-6 transition-all duration-1000 delay-400 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* Primary CTA */}
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#1e3a2f] text-white text-sm font-semibold tracking-widest uppercase hover:bg-[#c9a84c] transition-colors duration-300 flex items-center justify-center gap-3 group"
            >
              Request Strategic Valuation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            {/* Secondary CTA */}
            <a
              href="#idx-listings"
              className="text-[#1a2332] text-sm font-semibold tracking-widest uppercase hover:text-[#c9a84c] transition-colors flex items-center gap-2"
            >
              Search Properties
            </a>
          </div>
        </div>

        {/* Right Image/Visual Area - Offset Design */}
        <div className={`lg:col-span-6 relative transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}>
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto">
            {/* Placeholder for a high-end architectural photo of a home */}
            <div className="absolute inset-0 bg-stone-200 shadow-floating rounded-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000" 
                  alt="Luxury Colorado Home" 
                  className="w-full h-full object-cover"
                />
            </div>
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-editorial rounded-sm flex items-start gap-4 max-w-[200px]">
              <Award size={24} className="text-[#c9a84c] shrink-0" />
              <div>
                <p className="font-display text-2xl text-[#1a2332] mb-1">20+</p>
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
   IDX LISTINGS SECTION (Tabbed Interface)
───────────────────────────────────────────────────────────── */
function IdxSection() {
  const [activeTab, setActiveTab] = useState('search');

  return (
    <section id="idx-listings" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase block mb-3">
              Property Portfolio
            </span>
            <h2
              className="text-4xl md:text-5xl text-[#1a2332] leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Discover the <i className="text-[#1e3a2f]">Front Range.</i>
            </h2>
          </div>
          
          {/* Custom Tabs */}
          <div className="flex bg-stone-50 p-1 rounded-sm border border-stone-200">
            <button 
              onClick={() => setActiveTab('search')}
              className={`px-6 py-3 text-sm font-semibold tracking-wider uppercase transition-all ${
                activeTab === 'search' ? 'bg-white shadow-sm text-[#1a2332]' : 'text-slate-500 hover:text-[#1a2332]'
              }`}
            >
              MLS Search
            </button>
            <button 
              onClick={() => setActiveTab('featured')}
              className={`px-6 py-3 text-sm font-semibold tracking-wider uppercase transition-all ${
                activeTab === 'featured' ? 'bg-white shadow-sm text-[#1a2332]' : 'text-slate-500 hover:text-[#1a2332]'
              }`}
            >
              My Listings
            </button>
          </div>
        </div>

        {/* IDX Container */}
        <div className="w-full h-[600px] bg-stone-50 rounded-sm shadow-editorial border border-stone-100 overflow-hidden relative">
          
          {/* Tab 1: Full MLS Search */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${activeTab === 'search' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
             <iframe src="https://matrix.recolorado.com/Matrix/public/IDX.aspx?idx=3b013217" width="100%" height="100%" frameBorder="0" marginWidth="0" marginHeight="0"></iframe>
          </div>

          {/* Tab 2: User's Own Listings */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${activeTab === 'featured' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
             <iframe src="https://matrix.recolorado.com/Matrix/public/IDX.aspx?idx=223b3218" width="100%" height="100%" frameBorder="0" marginWidth="0" marginHeight="0"></iframe>
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
    <section className="bg-[#1a2332] border-y border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center text-center group">
            <s.icon
              size={22}
              className="text-[#c9a84c] mb-2 transition-transform duration-300 group-hover:scale-110"
            />
            <span
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {s.value}
            </span>
            <span className="text-stone-500 text-xs mt-1 tracking-wide leading-snug max-w-[120px]">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SELLER VALUE PROPS
───────────────────────────────────────────────────────────── */
function SellerValueProps() {
  return (
    <section id="sellers" className="py-24 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase block mb-3">
            For Sellers
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1a2332] leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A Different Kind of{" "}
            <span className="text-[#1e3a2f]">Strategy.</span>
          </h2>
          <span
            className="block w-14 h-0.5 mb-5"
            style={{ background: "linear-gradient(90deg, #c9a84c, #d4a574)" }}
          />
          <p className="text-stone-600 text-base leading-relaxed">
            Selling your home isn't a transaction — it's one of the largest
            financial decisions you'll make. I bring the same strategic
            discipline that governs military operations to every listing: clear
            objectives, precise execution, and an unwillingness to accept
            anything less than the best possible outcome for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sellerProps.map((prop) => (
            <div
              key={prop.title}
              className="bg-white rounded-2xl p-8 border border-stone-100 hover:border-[#c9a84c]/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "rgba(30,58,47,0.08)" }}
              >
                <prop.icon size={22} className="text-[#1e3a2f]" />
              </div>
              <h3
                className="text-xl font-bold text-[#1a2332] mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {prop.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">{prop.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #1e3a2f, #2d5a42)",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(30,58,47,0.25)",
            }}
          >
            Start Your Selling Strategy
            <ArrowRight size={16} />
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
  return (
    <section id="idx-listings" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase block mb-3">
            Browse Properties
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1a2332] leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Homes for Sale on the{" "}
            <span className="text-[#1e3a2f]">Front Range</span>
          </h2>
          <span
            className="block w-14 h-0.5 mx-auto mb-5"
            style={{ background: "linear-gradient(90deg, #c9a84c, #d4a574)" }}
          />
          <p className="text-stone-600 text-base leading-relaxed">
            Live MLS listings updated in real time. Whether you're relocating,
            upsizing, or finding your first Colorado home — the right property
            is here.
          </p>
        </div>

        {/* IDX Container */}
        <div
          className="rounded-2xl overflow-hidden border border-stone-100"
          style={{ boxShadow: "0 8px 48px rgba(26,35,50,0.08)" }}
        >
          {/* Search bar UI chrome */}
          <div className="bg-[#1a2332] px-6 py-4 flex items-center gap-4">
            <div className="flex items-center gap-3 flex-1 bg-white/10 rounded-lg px-4 py-2.5">
              <Search size={16} className="text-[#c9a84c]" />
              <span className="text-stone-400 text-sm">
                Search by city, zip code, or neighborhood...
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-stone-500 text-xs border border-white/10 rounded-lg px-3 py-2">
              <Home size={12} className="text-[#c9a84c]" />
              <span>All Types</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-stone-500 text-xs border border-white/10 rounded-lg px-3 py-2">
              <DollarSign size={12} className="text-[#c9a84c]" />
              <span>Any Price</span>
            </div>
          </div>

          {/* ── IDX SCRIPT CONTAINER ── */}
          {/* PASTE YOUR LOCAL MLS IDX SCRIPT INSIDE THE div BELOW */}
          {/* Example: <script src="https://your-idx-provider.com/widget.js"></script> */}
          <div
            id="idx-script-container"
            className="bg-stone-50 min-h-[480px] w-full"
          >
            {/* YOUR IDX PROVIDER SCRIPT TAG GOES HERE */}

            {/* ── REMOVE THIS PLACEHOLDER BLOCK WHEN YOUR IDX SCRIPT IS ADDED ── */}
            <div className="flex flex-col items-center justify-center h-full min-h-[480px] opacity-40 select-none pointer-events-none">
              <Search size={40} className="text-stone-400 mx-auto mb-3" />
              <p className="text-stone-500 text-sm font-medium">
                MLS Listing Search
              </p>
              <p className="text-stone-400 text-xs mt-1">
                Your IDX script loads here
              </p>
            </div>
            {/* ── END PLACEHOLDER ── */}
          </div>
          {/* ── END IDX SCRIPT CONTAINER ── */}
        </div>

        <p className="text-center text-stone-400 text-xs mt-4 leading-relaxed max-w-2xl mx-auto">
          Listing information is deemed reliable but not guaranteed. All
          properties are subject to prior sale, change, or withdrawal. Data
          provided by the local MLS via IDX. © MLS. All rights reserved.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   ABOUT MARK SECTION
───────────────────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#1a2332] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 900' preserveAspectRatio='xMidYMid slice'%3E%3Cpolygon fill='%231e3a2f' opacity='0.6' points='0,900 400,400 700,700 1000,300 1440,600 1440,900'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual card */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden bg-[#1e3a2f] border border-white/10 p-10 relative"
              style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.4)" }}
            >
              <div
                className="absolute top-0 left-0 w-24 h-1 rounded-br-sm"
                style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }}
              />
              {/* Credential badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Medal, label: "CDR, U.S. Navy Reserves" },
                  { icon: Shield, label: "Iraq · Djibouti Veteran" },
                  { icon: Award, label: "20+ Years Real Estate" },
                  { icon: Users, label: "VCP Co-Founder" },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5"
                  >
                    <badge.icon size={12} className="text-[#c9a84c]" />
                    <span className="text-stone-300 text-xs font-medium">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>

              <blockquote className="mb-6">
                <p
                  className="text-2xl font-bold text-white leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  "Real estate is a negotiation. And I've negotiated in rooms
                  where the stakes were considerably higher than a closing table."
                </p>
              </blockquote>
              <p className="text-[#c9a84c] text-sm font-semibold">
                — Mark Solomon, CDR USN (Reserve)
              </p>
              <p className="text-stone-500 text-xs mt-1">
                REALTOR® · REAL Broker, LLC · Colorado
              </p>

              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                {[
                  { val: "$1.5M", sub: "Raised for VCP" },
                  { val: "22+", sub: "Married to Chasity" },
                  { val: "U.S.", sub: "Citizen since 1995" },
                ].map((item) => (
                  <div key={item.sub}>
                    <div
                      className="text-2xl font-bold text-[#c9a84c]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.val}
                    </div>
                    <div className="text-stone-500 text-xs mt-0.5 leading-snug">
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating VCP badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#c9a84c] rounded-xl px-4 py-3 text-[#1a2332] shadow-xl">
              <p className="font-bold text-xs uppercase tracking-wider">
                VCP Co-Founder
              </p>
              <p className="text-[10px] mt-0.5 opacity-75">Housing Homeless Veterans</p>
            </div>
          </div>

          {/* Right — Narrative */}
          <div>
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase block mb-3">
              About Mark
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built Different.
              <span
                className="block"
                style={{
                  background: "linear-gradient(90deg, #c9a84c, #d4a574)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                For Good Reason.
              </span>
            </h2>
            <span
              className="block w-14 h-0.5 mb-7"
              style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }}
            />

            <div className="space-y-5 text-stone-300 text-sm leading-relaxed">
              <p>
                Mark Solomon arrived in the United States as an immigrant with
                something most people spend a lifetime trying to earn: a genuine
                appreciation for what this country offers. He became a U.S.
                citizen in 1995 and hasn't wasted a day since.
              </p>
              <p>
                Today, he holds the rank of Commander (O-5) in the United States
                Navy Reserves — a distinction earned through deployments to{" "}
                <strong className="text-stone-200">Iraq</strong> and{" "}
                <strong className="text-stone-200">Djibouti, Africa</strong>, and
                more than two decades of military service. His two sons currently
                serve in the Navy and are training for Air Force Special Forces.
                Service isn't just a value in the Solomon household — it's the
                baseline.
              </p>
              <p>
                In real estate, Mark channels that same standard. Over 20 years
                in the Colorado market have sharpened his instincts for pricing,
                negotiation, and market timing into something approaching
                clairvoyance — though he'd say it's just preparation meeting
                opportunity. (Repeatedly. For two decades.)
              </p>
              <p>
                His work extends well beyond the closing table. As a co-founder
                of the{" "}
                <strong className="text-stone-200">
                  Veterans Community Project (VCP)
                </strong>
                , Mark helped raise{" "}
                <strong className="text-[#c9a84c]">$1.5 million</strong>{" "}
                specifically to house homeless veterans across Colorado — because
                the people who defended this country's neighborhoods deserve to
                live in one.
              </p>
              <p>
                He is married to his wife,{" "}
                <strong className="text-stone-200">Chasity</strong>, for over 22
                years — a partnership that, by all available evidence, required
                the exact same negotiation skills he brings to real estate. He
                credits her entirely.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #b8965e)",
                  color: "#1a2332",
                  boxShadow: "0 4px 20px rgba(201,168,76,0.3)",
                }}
              >
                Work With Mark
                <ArrowRight size={14} />
              </a>
              <a
                href="https://vcpkc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/20 text-white text-sm font-semibold tracking-wider uppercase hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Learn About VCP
                <Users size={14} />
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
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[active];

  return (
    <section id="reviews" className="py-24 bg-[#f8f5f0] relative overflow-hidden">
      {/* Decorative large quote mark */}
      <div
        className="absolute top-8 left-8 text-[#1e3a2f] select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "20rem",
          lineHeight: 1,
          opacity: 0.04,
        }}
      >
        "
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase block mb-3">
          Client Stories
        </span>
        <h2
          className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Results That Speak.
        </h2>
        <span
          className="block w-14 h-0.5 mx-auto mb-16"
          style={{ background: "linear-gradient(90deg, #c9a84c, #d4a574)" }}
        />

        <div
          key={active}
          className="bg-white rounded-2xl p-10 md:p-14 shadow-xl border border-stone-100"
          style={{ animation: "fadeInUp 0.5s ease forwards" }}
        >
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.stars }).map((_, i) => (
              <Star key={i} size={18} className="text-[#c9a84c]" fill="#c9a84c" />
            ))}
          </div>
          <p
            className="text-stone-700 text-lg md:text-xl leading-relaxed mb-8 italic"
            style={{ fontFamily: "var(--font-display)" }}
          >
            "{t.text}"
          </p>
          <div className="flex flex-col items-center gap-1">
            <p className="font-bold text-[#1a2332] text-sm tracking-wide">{t.name}</p>
            <p className="text-stone-400 text-xs flex items-center gap-1">
              <MapPin size={11} />
              {t.location}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 h-2 bg-[#c9a84c]"
                    : "w-2 h-2 bg-stone-300 hover:bg-stone-400"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONTACT / GHL FORM SECTION
───────────────────────────────────────────────────────────── */
function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    message: "",
    smsConsent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "A valid email is required.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.serviceType) e.serviceType = "Please select a service type.";
    if (!form.smsConsent)
      e.smsConsent = "SMS consent is required to submit this form.";
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
      // ── GHL WEBHOOK ENDPOINT ──
      // Replace the URL below with your GoHighLevel webhook URL.
      // Example: https://services.leadconnectorhq.com/hooks/YOUR-HOOK-ID/webhook-trigger
      const GHL_WEBHOOK_URL = "YOUR_GHL_WEBHOOK_URL_HERE";

      if (GHL_WEBHOOK_URL !== "YOUR_GHL_WEBHOOK_URL_HERE") {
        await fetch(GHL_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: form.firstName,
            last_name: form.lastName,
            email: form.email,
            phone: form.phone,
            address: form.address,
            service_type: form.serviceType,
            message: form.message,
            sms_consent: form.smsConsent,
            source: "Solomon Home Services Website",
          }),
        });
      } else {
        // Simulated delay until webhook is configured
        await new Promise((r) => setTimeout(r, 1200));
      }
      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full bg-white border rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-stone-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
      errors[field]
        ? "border-red-300 focus:ring-red-200"
        : "border-stone-200 focus:ring-[#c9a84c]/30 focus:border-[#c9a84c]"
    }`;

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f8f5f0 0%, #ede8e0 100%)" }}
    >
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#c9a84c" }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: "#1e3a2f" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Copy */}
          <div className="lg:pt-4">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase block mb-3">
              Let's Connect
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1a2332] leading-tight mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get Your Home's{" "}
              <span className="text-[#1e3a2f]">True Value.</span>
            </h2>
            <span
              className="block w-14 h-0.5 mb-7"
              style={{ background: "linear-gradient(90deg, #c9a84c, #d4a574)" }}
            />
            <p className="text-stone-600 text-base leading-relaxed mb-8">
              No pressure. No algorithms. Just an honest assessment of your
              home's value in today's market — backed by 20+ years of Front
              Range experience and the kind of precision that comes from a
              career spent not leaving things to chance.
            </p>

            <div className="space-y-4">
              {[
                "Complimentary Comparative Market Analysis (CMA)",
                "Custom selling strategy for your home and timeline",
                "Straight talk — no fluff, no overselling, no surprises",
                "Military relocation support available (VA loans welcome)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#1e3a2f] shrink-0 mt-0.5" />
                  <span className="text-stone-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Direct contact info — real data */}
            <div className="mt-10 p-6 bg-[#1a2332] rounded-2xl space-y-3">
              <p
                className="text-white font-semibold text-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Prefer to reach out directly?
              </p>
              <a
                href="tel:+18168535467"
                className="flex items-center gap-3 text-stone-300 hover:text-[#c9a84c] text-sm transition-colors"
              >
                <Phone size={15} className="text-[#c9a84c]" />
                (816) 853-5467
              </a>
              <a
                href="mailto:mark@solomonhomeservices.com"
                className="flex items-center gap-3 text-stone-300 hover:text-[#c9a84c] text-sm transition-colors"
              >
                <Mail size={15} className="text-[#c9a84c]" />
                mark@solomonhomeservices.com
              </a>
              <div className="flex items-center gap-3 text-stone-500 text-sm">
                <MapPin size={15} className="text-[#c9a84c]" />
                Colorado Front Range
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-xl border border-stone-100 flex flex-col items-center justify-center min-h-[500px]">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "rgba(30,58,47,0.1)" }}
                >
                  <CheckCircle size={32} className="text-[#1e3a2f]" />
                </div>
                <h3
                  className="text-2xl font-bold text-[#1a2332] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Message Received.
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
                  Mark will be in touch within 24 hours. In the meantime, feel
                  free to browse current listings above.
                </p>
                <a
                  href="#idx-listings"
                  className="mt-8 inline-flex items-center gap-2 text-[#1e3a2f] text-sm font-semibold hover:text-[#c9a84c] transition-colors"
                >
                  Browse Listings <ArrowRight size={14} />
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-stone-100"
              >
                <h3
                  className="text-xl font-bold text-[#1a2332] mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Request a Free Home Valuation
                </h3>

                {/* Name row */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Mark"
                      className={inputClass("firstName")}
                      autoComplete="given-name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Solomon"
                      className={inputClass("lastName")}
                      autoComplete="family-name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass("email")}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(816) 555-0100"
                    className={inputClass("phone")}
                    autoComplete="tel"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Property Address */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                    Property Address{" "}
                    <span className="text-stone-400 font-normal normal-case">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="123 Front Range Way, Longmont, CO"
                    className={inputClass("address")}
                    autoComplete="street-address"
                  />
                </div>

                {/* Service Type */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                    I'm Looking To… <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="serviceType"
                    value={form.serviceType}
                    onChange={handleChange}
                    className={`${inputClass("serviceType")} cursor-pointer`}
                  >
                    <option value="">Select a service…</option>
                    <option value="sell">Sell My Home</option>
                    <option value="buy">Buy a Home</option>
                    <option value="sell-buy">Sell &amp; Buy</option>
                    <option value="military">Military Relocation (PCS)</option>
                    <option value="value">Get a Home Valuation</option>
                    <option value="other">Other / Just Exploring</option>
                  </select>
                  {errors.serviceType && (
                    <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>
                  )}
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                    Message{" "}
                    <span className="text-stone-400 font-normal normal-case">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell me a bit about your situation, timeline, or any questions you have…"
                    className={`${inputClass("message")} resize-none`}
                  />
                </div>

                {/* ── A2P 10DLC SMS CONSENT — REQUIRED ── */}
                <div
                  className={`mb-6 p-4 rounded-xl border ${
                    errors.smsConsent
                      ? "border-red-300 bg-red-50"
                      : "border-stone-200 bg-stone-50"
                  }`}
                >
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        name="smsConsent"
                        checked={form.smsConsent}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                          form.smsConsent
                            ? "bg-[#1e3a2f] border-[#1e3a2f]"
                            : "bg-white border-stone-300 group-hover:border-[#1e3a2f]"
                        }`}
                        onClick={() =>
                          setForm((f) => ({ ...f, smsConsent: !f.smsConsent }))
                        }
                      >
                        {form.smsConsent && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path
                              d="M1 4L3.5 6.5L9 1"
                              stroke="white"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-stone-600 leading-relaxed">
                      <span className="font-semibold text-slate-700">
                        SMS Consent (Required):
                      </span>{" "}
                      By providing your phone number, you agree to receive text
                      messages from Solomon Home Services regarding your inquiry.
                      Reply STOP to opt-out. Message/data rates apply.
                    </span>
                  </label>
                  {errors.smsConsent && (
                    <p className="text-red-500 text-xs mt-2 ml-8">
                      {errors.smsConsent}
                    </p>
                  )}
                </div>
                {/* ── END SMS CONSENT ── */}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-lg font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-px hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                  style={{
                    background: loading
                      ? "#8c7a65"
                      : "linear-gradient(135deg, #1e3a2f, #2d5a42)",
                    color: "#fff",
                    boxShadow: loading ? "none" : "0 4px 20px rgba(30,58,47,0.3)",
                  }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeOpacity="0.3" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Get My Free Home Valuation
                      <Send size={14} />
                    </>
                  )}
                </button>

                {/* Privacy / Terms */}
                <p className="text-center text-xs text-stone-400 mt-4 leading-relaxed">
                  By submitting, you agree to our{" "}
                  <Link
                    href="/privacy"
                    className="text-[#1e3a2f] font-medium underline hover:text-[#c9a84c] transition-colors"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms"
                    className="text-[#1e3a2f] font-medium underline hover:text-[#c9a84c] transition-colors"
                  >
                    Terms of Service
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   HOME PAGE — COMPOSED
───────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBand />
      <SellerValueProps />
      <IdxSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
