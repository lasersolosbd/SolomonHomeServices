import Link from "next/link";
import { Mountain, Phone, Mail, MapPin, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111b28] text-stone-400">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <Mountain size={26} className="text-[#c9a84c]" strokeWidth={1.5} />
            <div className="flex flex-col leading-none">
              <span
                className="text-white text-lg font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Solomon Home Services
              </span>
              <span className="text-[#c9a84c] text-xs tracking-[0.2em] uppercase font-medium">
                Colorado Front Range
              </span>
            </div>
          </div>
          <p className="text-stone-500 text-sm leading-relaxed max-w-sm mb-6">
            Tactical precision. Tenacious negotiation. Nearly 20 years of real
            estate expertise serving the Colorado Front Range — from Fort Collins
            to Colorado Springs and everywhere the mountains meet the plains.
          </p>
          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <a
              href="tel:+18168535467"
              className="flex items-center gap-2 text-sm text-stone-400 hover:text-[#c9a84c] transition-colors duration-200"
            >
              <Phone size={14} className="text-[#c9a84c]" />
              (816) 853-5467
            </a>
            <a
              href="mailto:mark@solomonhomeservices.com"
              className="flex items-center gap-2 text-sm text-stone-400 hover:text-[#c9a84c] transition-colors duration-200"
            >
              <Mail size={14} className="text-[#c9a84c]" />
              mark@solomonhomeservices.com
            </a>
            <span className="flex items-center gap-2 text-sm text-stone-500">
              <MapPin size={14} className="text-[#c9a84c]" />
              Colorado Front Range
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="text-white text-sm font-semibold tracking-widest uppercase mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Navigate
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { href: "/", label: "Home" },
              { href: "/sellers", label: "Sellers" },
              { href: "/about", label: "About Mark" },
              { href: "/contact", label: "Contact" },
              { href: "/#home-value", label: "Get Your Home's Value" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-stone-400 hover:text-[#c9a84c] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links + SMS Disclosure */}
        <div>
          <h4
            className="text-white text-sm font-semibold tracking-widest uppercase mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Legal
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Service" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-stone-400 hover:text-[#c9a84c] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* SMS Compliance Note */}
          <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-lg">
            <div className="flex items-start gap-2 mb-2">
              <Shield size={14} className="text-[#c9a84c] mt-0.5 shrink-0" />
              <span className="text-[#c9a84c] text-xs font-semibold uppercase tracking-wider">
                SMS Disclosure
              </span>
            </div>
            <p className="text-stone-500 text-xs leading-relaxed">
              By submitting your phone number, you consent to receive text
              messages from Solomon Home Services. Reply STOP to opt-out.
              Message/data rates may apply.
            </p>
          </div>
        </div>
      </div>

      {/* CREC Compliance Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Brokerage Disclosure — CREC Required */}
          <div className="bg-white/5 border border-[#c9a84c]/20 rounded-lg px-5 py-4 mb-5">
            <p className="text-center text-xs text-stone-400 leading-relaxed">
              <span className="text-[#c9a84c] font-semibold">
                CREC Disclosure:
              </span>{" "}
              <strong className="text-stone-300">Mark Solomon</strong> is a
              licensed Colorado Real Estate Broker operating under{" "}
              <strong className="text-stone-300">REAL Broker, LLC</strong> — a
              licensed Colorado real estate brokerage. All real estate
              transactions are conducted in accordance with the Colorado Real
              Estate Commission (CREC) rules and regulations.
            </p>
          </div>

          {/* Equal Housing + Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-600">
            <div className="flex items-center gap-3">
              <span className="border border-stone-600 px-2 py-1 rounded text-stone-500 text-xs font-bold tracking-widest">
                EHO
              </span>
              <span>Equal Housing Opportunity</span>
            </div>
            <p className="text-center">
              © {currentYear} Solomon Home Services. All rights reserved.{" "}
              <span className="text-stone-700">|</span> Mark Solomon, REALTOR® —
              REAL Broker, LLC
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-stone-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-stone-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
