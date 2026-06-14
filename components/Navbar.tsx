"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import useReservationStore from "@/store/reservationStore";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Featured", href: "/featured" },
  { label: "Location", href: "/location" },
  { label: "Reviews", href: "/reviews" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open } = useReservationStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-white/10 shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="font-serif text-xl font-semibold tracking-wide text-cream md:text-2xl">
          Bellé Bistro
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.slice(1).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-accent-light border-b-2 border-accent"
                    : "text-muted hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:03372355333"
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-cream"
          >
            <Phone className="h-4 w-4" />
            0337 2355333
          </a>
          <button
            onClick={() => open()}
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-background transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
          >
            Reserve
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-cream md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl px-6 py-8 md:hidden"
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="font-serif text-xl font-semibold tracking-wide text-cream"
              >
                Bellé Bistro
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-cream"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-4 text-lg font-medium text-cream">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-2xl px-4 py-4 transition-colors ${
                    isActive(link.href)
                      ? "bg-accent/10 text-accent-light"
                      : "text-cream hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-10 border-t border-white/10 pt-6 text-sm text-muted">
              <a href="tel:03372355333" className="flex items-center gap-2 text-cream">
                <Phone className="h-4 w-4" />
                0337 2355333
              </a>
              <button
                onClick={() => { setMobileOpen(false); open(); }}
                className="mt-4 w-full rounded-full bg-accent px-4 py-3 text-sm font-semibold text-background"
              >
                Reserve a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
