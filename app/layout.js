import { Playfair_Display, DM_Sans } from "next/font/google";
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
  title: "Solomon Home Services | Colorado Front Range Real Estate",
  description:
    "Mark Solomon, REALTOR® — REAL Broker, LLC. Expert real estate services across the Colorado Front Range. Specializing in maximizing home value for sellers and seamless military relocations.",
  keywords:
    "Colorado real estate, Front Range homes, sell your home, military relocation, REALTOR, Mark Solomon, REAL Broker LLC",
  openGraph: {
    title: "Solomon Home Services | Colorado Front Range Real Estate",
    description:
      "Mark Solomon, REALTOR® — Expert real estate services across the Colorado Front Range.",
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
      </body>
    </html>
  );
}
