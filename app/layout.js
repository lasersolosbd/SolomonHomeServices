import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Mark Solomon | Real Estate Expert | Colorado Front Range",
  description:
    "Mark Solomon is a Real Estate Broker with over 20 years of experience serving the Colorado Front Range. Expect tactical strategy, relentless negotiation, and a clear path home.",
  keywords:
    "Colorado Real Estate, Front Range Realtor, Mark Solomon, Military Relocation, Real Broker LLC, sell your home, Colorado Springs, Fort Collins, Denver",
  openGraph: {
    title: "Mark Solomon | Real Estate Expert | Colorado Front Range",
    description:
      "Mark Solomon is a Real Estate Broker with over 20 years of experience serving the Colorado Front Range. Expect tactical strategy and relentless negotiation.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-stone-50 text-slate-800 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        
        {/* Vercel Analytics */}
        <Analytics />

        {/* GoHighLevel Chat Widget */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69ed3dc6cbb9f4525936f30f"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
