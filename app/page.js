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
  Send,
  Target,
  Key,
  Map
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

        {/* CTA added to section */}
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
   IDX LISTINGS SECTION (Disclaimer Removed)
───────────────────────────────────────────────────────────── */
function IdxSection() {
  const [activeTab, setActiveTab] = useState('search');

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

        <div className="w-full h-[600px] bg-stone-50 rounded-sm shadow-editorial border border-stone-100 overflow-hidden relative">
          <div className={`absolute inset-0 transition-opacity duration-500 ${activeTab === 'search' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
             <iframe src="https://matrix.recolorado.com/Matrix/public/IDX.aspx?idx=3b013217" width="100%" height="100%" frameBorder="0" marginWidth="0" marginHeight="0"></iframe>
          </div>
          <div className={`absolute inset-0 transition-opacity duration-500 ${activeTab === 'featured' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
             <iframe src="https://matrix.recolorado.com/Matrix/public/IDX.aspx?idx=223b3218" width="100%" height="100%" frameBorder="0" marginWidth="0" marginHeight="0"></iframe>
          </div>
        </div>

        {/* CTA added to section */}
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#0f172a] text-white text-sm font-semibold tracking-widest uppercase hover:bg-[#c9a84c] transition-all duration-300 group">
            Discuss Your Property Needs
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
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
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1613490908592-5d97f2677118?auto=format&fit=crop&q=80&w=2000")`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-xl overflow-hidden bg-[#0f172a] border border-stone-200 p-8 md:p-10 relative" style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.15)" }}>
              <div className="absolute top-0 left-0 w-24 h-1 rounded-br-sm" style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
              <div className="mb-8 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-[#c9a84c] shadow-inner relative">
                <img src="/Mark-headshot.JPG" alt="Commander Mark Solomon" className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex flex-wrap gap-3 mb-8">
                {[{ icon: Shield, label: "Iraq Veteran" }, { icon: Award, label: "20+ Years Real Estate Experience" }, { icon: Users, label: "Charity Co-Founder" }].map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5">
                    <badge.icon size={12} className="text-[#c9a84c]" />
                    <span className="text-stone-300 text-xs font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>
              <blockquote>
                <p className="text-2xl font-bold text-white leading-snug mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  "The process of selling or buying a home should be precise, streamlined, and—above all—enjoyable. With 20+ years of experience and a background in real estate coaching, I will provide you with a masterclass level of service and a clear path home."
                </p>
              </blockquote>
              <p className="text-[#c9a84c] text-sm font-semibold">— Mark Solomon, REALTOR®</p>
            </div>
          </div>

          <div>
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase block mb-3">About Mark</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>
              Masterclass Level of
              <span className="block" style={{ background: "linear-gradient(90deg, #c9a84c, #b8865a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Service.
              </span>
            </h2>
            <span className="block w-14 h-0.5 mb-7" style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }} />

            <div className="space-y-5 text-stone-600 text-sm leading-relaxed">
              <p>With over two decades of real estate mastery, Mark has negotiated deals so tight they squeak. He brings precision, relentless advocacy, and a caffeine-fueled passion to every single transaction. When he isn’t closing complex deals or teaching others how to dominate the market, he’s likely thinking about closing deals—or trying to convince his family that "comparative market analysis" is a perfectly normal dinner table topic.</p>
              <p>Commander Mark Solomon, United States Navy Reserve, arrived in the United States as an immigrant with something most people spend a lifetime trying to earn: a genuine appreciation for what this country offers. He became a U.S. citizen in 1995 and hasn't wasted a day since.</p>
              <p>Today, after over two decades of military experience — including a combat deployment to Iraq — he continues his service in the military. His two sons also joined the military. Service isn't just a value in the Solomon household; it's the baseline expectation. (Also, there's no getting out of it at this point.)</p>
              <p>In real estate, Mark channels that same standard. Licensed for over 20 years, he's survived enough market cycles to know that "timing the market" usually just means "being ready when everyone else panics." His instincts for pricing and negotiation come from repetition, pattern recognition, and a healthy disrespect for conventional wisdom.</p>
              <p>His work extends well beyond the closing table. As a co-founder of Veterans Community Project (VCP.org), a 501(c)(3) charity, Mark helped raise over $1.5 million to house homeless Veterans across six cities and five states — because the people who defended this country's neighborhoods deserve to live in one.</p>
              <p>He's been married to his wife, Chasity, for over 23 years — a partnership that, by all available evidence, requires the exact same negotiation skills he brings to real estate. Possibly more. He credits her entirely for the outcome and acknowledges that she wins every negotiation at home.</p>
            </div>

            {/* CTA added to section */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0f172a] text-white text-sm font-semibold tracking-wider uppercase hover:bg-[#c9a84c] transition-all duration-300 shadow-md">
                Work With Mark <ArrowRight size={14} />
              </a>
              <a href="https://www.vcp.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-stone-100 text-[#0f172a] text-sm font-semibold tracking-wider uppercase hover:bg-stone-200 transition-all duration-300 border border-stone-200">
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
    <section id="reviews" className="py-24 bg-stone-50 relative overflow-hidden">
      <div className="absolute top-8 left-8 text-stone-200 select-none pointer-events-none" style={{ fontFamily: "var(--font-display)", fontSize: "20rem", lineHeight: 1 }}>
        "
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase block mb-3">Client Stories</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Results That Speak.
        </h2>
        <span className="block w-14 h-0.5 mx-auto mb-16" style={{ background: "linear-gradient(90deg, #c9a84c, #d4a574)" }} />

        <div key={active} className="bg-white rounded-2xl p-8 md:p-14 shadow-editorial border border-stone-100 min-h-[550px] md:min-h-[400px] flex flex-col justify-center items-center" style={{ animation: "fadeInUp 0.5s ease forwards" }}>
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.stars }).map((_, i) => (
              <Star key={i} size={18} className="text-[#c9a84c]" fill="#c9a84c" />
            ))}
          </div>
          <p className="text-stone-700 text-lg md:text-xl leading-relaxed italic" style={{ fontFamily: "var(--font-display)" }}>
            "{t.text}"
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-200">
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2 flex-wrap justify-center">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className={`rounded-full transition-all duration-300 ${i === active ? "w-6 h-2 bg-[#c9a84c]" : "w-2 h-2 bg-stone-300 hover:bg-stone-400"}`} />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-200">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONTACT / GHL FORM SECTION (Asterisks fixed)
───────────────────────────────────────────────────────────── */
function ContactSection() {
  const [formType, setFormType] = useState('seller'); 
  
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", address: "",
    timeframe: "", movingTo: "", workingWithAgent: "",
    rentOrOwn: "", buyTimeframe: "", firstTimeBuyer: "", lastBought: "",
    message: "", smsConsent: false,
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
    if (!form.smsConsent) e.smsConsent = "SMS consent is required to submit.";

    if (formType === 'seller') {
      if (!form.address.trim()) e.address = "Property address is required.";
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
      const GHL_WEBHOOK_URL = "YOUR_GHL_WEBHOOK_URL_HERE";
      if (GHL_WEBHOOK_URL !== "YOUR_GHL_WEBHOOK_URL_HERE") {
        await fetch(GHL_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            service_type: formType,
            source: "Solomon Home Services Website",
          }),
        });
      } else {
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
      errors[field] ? "border-red-400 focus:ring-red-200" : "border-stone-200 focus:ring-[#c9a84c]/30 focus:border-[#c9a84c]"
    }`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="lg:pt-4">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase block mb-3">Let's Connect</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>
              Start The <span className="text-[#1e293b]">Conversation.</span>
            </h2>
            <span className="block w-14 h-0.5 mb-7" style={{ background: "linear-gradient(90deg, #c9a84c, #d4a574)" }} />
            <p className="text-stone-600 text-base leading-relaxed mb-8">
              No pressure. Just an honest assessment of your home's value or your buying potential in today's market — backed by 20+ years of experience and the kind of precision that comes from a career spent not leaving things to chance.
            </p>
            <div className="space-y-4">
              {["Complimentary Comparative Market Analysis (CMA) for sellers", "Strategic buyer education and clear path home", "Custom selling or acquisition strategy for your timeline", "Expert negotiation to protect your equity and investment"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#0f172a] shrink-0 mt-0.5" />
                  <span className="text-stone-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-stone-50 border border-stone-200 rounded-xl space-y-3">
              <p className="text-[#0f172a] font-semibold text-sm font-display">Prefer to reach out directly?</p>
              <a href="tel:+18168535467" className="flex items-center gap-3 text-stone-600 hover:text-[#c9a84c] text-sm transition-colors"><Phone size={15} className="text-[#c9a84c]" />(816) 853-5467</a>
              <a href="mailto:mark@solomonhomeservices.com" className="flex items-center gap-3 text-stone-600 hover:text-[#c9a84c] text-sm transition-colors"><Mail size={15} className="text-[#c9a84c]" />mark@solomonhomeservices.com</a>
              <div className="flex items-center gap-3 text-stone-500 text-sm"><MapPin size={15} className="text-[#c9a84c]" />Colorado Front Range</div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-editorial border border-stone-100 flex flex-col items-center justify-center min-h-[500px]">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[#0f172a]/10">
                  <CheckCircle size={32} className="text-[#0f172a]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-3 font-display">Message Received.</h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-xs">Mark will be in touch within 24 hours. In the meantime, feel free to browse current listings above.</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-editorial border border-stone-100 overflow-hidden">
                <div className="flex border-b border-stone-100">
                  <button onClick={() => { setFormType('seller'); setErrors({}); }} className={`flex-1 py-4 text-sm font-semibold tracking-wider uppercase transition-colors ${formType === 'seller' ? 'bg-[#0f172a] text-white' : 'bg-stone-50 text-slate-500 hover:bg-stone-100'}`}>I'm Selling</button>
                  <button onClick={() => { setFormType('buyer'); setErrors({}); }} className={`flex-1 py-4 text-sm font-semibold tracking-wider uppercase transition-colors ${formType === 'buyer' ? 'bg-[#0f172a] text-white' : 'bg-stone-50 text-slate-500 hover:bg-stone-100'}`}>I'm Buying</button>
                </div>

                <form onSubmit={handleSubmit} noValidate className="p-8 md:p-10">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-6 font-display">
                    {formType === 'seller' ? "Request a Free Home Valuation" : "Start Your Home Search"}
                  </h3>

                  {/* STANDARD FIELDS - Justify removed to fix asterisks */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">First Name <span className="text-red-400 ml-1">{errors.firstName || "*"}</span></label>
                      <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className={inputClass("firstName")} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Last Name <span className="text-red-400 ml-1">{errors.lastName || "*"}</span></label>
                      <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className={inputClass("lastName")} />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Email Address <span className="text-red-400 ml-1">{errors.email || "*"}</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass("email")} />
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Phone Number <span className="text-red-400 ml-1">{errors.phone || "*"}</span></label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass("phone")} />
                  </div>

                  {/* SELLER FIELDS */}
                  {formType === 'seller' && (
                    <>
                      <div className="mb-4">
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Property Address <span className="text-red-400 ml-1">{errors.address || "*"}</span></label>
                        <input type="text" name="address" value={form.address} onChange={handleChange} className={inputClass("address")} />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                           <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Timeframe <span className="text-red-400 ml-1">{errors.timeframe || "*"}</span></label>
                           <input type="text" name="timeframe" value={form.timeframe} onChange={handleChange} placeholder="e.g. ASAP, 3 months" className={inputClass("timeframe")} />
                        </div>
                        <div>
                           <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Moving To <span className="text-red-400 ml-1">{errors.movingTo || "*"}</span></label>
                           <input type="text" name="movingTo" value={form.movingTo} onChange={handleChange} placeholder="City, State" className={inputClass("movingTo")} />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Are you currently working with an Agent? <span className="text-red-400 ml-1">{errors.workingWithAgent || "*"}</span></label>
                        <div className="flex gap-4 mt-2">
                          <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer"><input type="radio" name="workingWithAgent" value="yes" checked={form.workingWithAgent === "yes"} onChange={handleChange} className="w-4 h-4 text-[#0f172a] focus:ring-[#c9a84c]" /> Yes</label>
                          <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer"><input type="radio" name="workingWithAgent" value="no" checked={form.workingWithAgent === "no"} onChange={handleChange} className="w-4 h-4 text-[#0f172a] focus:ring-[#c9a84c]" /> No</label>
                        </div>
                      </div>
                    </>
                  )}

                  {/* BUYER FIELDS */}
                  {formType === 'buyer' && (
                    <>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                           <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Current Residence <span className="text-red-400 ml-1">{errors.rentOrOwn || "*"}</span></label>
                           <select name="rentOrOwn" value={form.rentOrOwn} onChange={handleChange} className={inputClass("rentOrOwn")}>
                             <option value="">Select...</option><option value="rent">Rent</option><option value="own">Own</option>
                           </select>
                        </div>
                        <div>
                           <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Move Timeframe <span className="text-red-400 ml-1">{errors.buyTimeframe || "*"}</span></label>
                           <input type="text" name="buyTimeframe" value={form.buyTimeframe} onChange={handleChange} placeholder="e.g. ASAP, 6 months" className={inputClass("buyTimeframe")} />
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">First time home purchase? <span className="text-red-400 ml-1">{errors.firstTimeBuyer || "*"}</span></label>
                        <div className="flex gap-4 mt-2">
                          <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer"><input type="radio" name="firstTimeBuyer" value="yes" checked={form.firstTimeBuyer === "yes"} onChange={handleChange} className="w-4 h-4 text-[#0f172a] focus:ring-[#c9a84c]" /> Yes</label>
                          <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer"><input type="radio" name="firstTimeBuyer" value="no" checked={form.firstTimeBuyer === "no"} onChange={handleChange} className="w-4 h-4 text-[#0f172a] focus:ring-[#c9a84c]" /> No</label>
                        </div>
                      </div>

                      {form.firstTimeBuyer === "no" && (
                        <div className="mb-4">
                          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Last time you bought/sold? <span className="text-red-400 ml-1">{errors.lastBought || "*"}</span></label>
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

                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Message <span className="text-stone-400 font-normal normal-case">(optional)</span>
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Please tell me the best way I can be of assistance." className={`${inputClass("message")} resize-none`} />
                  </div>

                  <div className={`mb-6 p-4 rounded-xl border ${errors.smsConsent ? "border-red-400 bg-red-50" : "border-stone-200 bg-stone-50"}`}>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative mt-0.5 shrink-0">
                        <input type="checkbox" name="smsConsent" checked={form.smsConsent} onChange={handleChange} className="sr-only" />
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${form.smsConsent ? "bg-[#0f172a] border-[#0f172a]" : "bg-white border-stone-300"}`} onClick={() => setForm((f) => ({ ...f, smsConsent: !f.smsConsent }))}>
                          {form.smsConsent && (<svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>)}
                        </div>
                      </div>
                      <span className="text-xs text-stone-600 leading-relaxed">
                        <span className="font-semibold text-slate-700">SMS Consent (Required):</span> By providing your phone number, you agree to receive text messages regarding your inquiry. Reply STOP to opt-out. Msg/data rates apply.
                      </span>
                    </label>
                  </div>

                  <button type="submit" disabled={loading} className="w-full py-4 rounded-lg font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0f172a] hover:bg-[#b8965e] transition-colors duration-300 disabled:opacity-60">
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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBand />
      <ValueProps />
      <IdxSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
