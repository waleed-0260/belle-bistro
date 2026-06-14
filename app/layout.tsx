import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bellé Bistro | Multan's Favorite Bistro",
  description:
    "Cravings calling? We've got you sorted. Bold steaks, coastal seafood, handcrafted pasta & late-night vibes in Wapda Town, Multan. Open till 2 AM.",
  keywords: ["Bellé Bistro", "Multan", "restaurant", "steakhouse", "bistro", "Wapda Town"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background font-sans text-cream">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ReservationModal />
      </body>
    </html>
  );
}
