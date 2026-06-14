"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import useReservationStore from "@/store/reservationStore";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
        alt="Moody restaurant interior at Belle Bistro"
        fill
        className="object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(76,175,80,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,213,163,0.05),transparent_50%)]" />

      <div className="relative z-5 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/40 px-4 py-2 backdrop-blur-sm"
        >
          <Star className="h-4 w-4 fill-gold text-gold" />
          <span className="text-sm text-cream">4.4 — 190 Google Reviews</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-serif text-4xl font-bold leading-tight tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl text-balance"
        >
          Where Every Bite
          <br />
          <span className="text-accent-light">Tells a Story</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-xl text-lg text-muted md:text-xl"
        >
          Cravings calling? We&apos;ve got you sorted with the best sounds, tastes, and late-night energy in Multan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/menu"
            className="w-full rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-background transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25 sm:w-auto"
          >
            Explore Menu
          </Link>
          <button
            onClick={() => useReservationStore.getState().open()}
            className="w-full rounded-full border border-cream/30 px-8 py-3.5 text-sm font-semibold text-cream transition-all hover:border-accent hover:text-accent-light sm:w-auto"
          >
            Reserve a Table
          </button>
        </motion.div>
      </div>
    </section>
  );
}
