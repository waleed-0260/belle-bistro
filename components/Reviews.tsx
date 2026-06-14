"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Instagram } from "lucide-react";

const reviews = [
  {
    id: 1,
    text: "Absolutely loved the steaks here! The Belle Surf & Turf is a must-try. Great ambiance and open till 2 AM — perfect for late-night cravings.",
    author: "Ahmed K.",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/60?img=1",
  },
  {
    id: 2,
    text: "Best loaded fries in Multan, hands down. The vibe is so aesthetic — dark, moody, and perfect for Instagram. Staff is super friendly too.",
    author: "Sara M.",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/60?img=5",
  },
  {
    id: 3,
    text: "Came here with friends and we tried the pasta and wings. Everything was fresh and flavorful. Will definitely be back for the stuffed chicken!",
    author: "Hassan R.",
    rating: 4,
    avatarUrl: "https://i.pravatar.cc/60?img=12",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(232,213,163,0.03),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative mb-16 overflow-hidden rounded-[2rem] bg-black/10"
        >
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80"
            alt="Cozy restaurant interior with warm lights"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative px-6 py-16 text-center text-cream sm:px-12 sm:py-24">
            <div className="mb-4 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${i < 4 ? "fill-gold text-gold" : "fill-gold/40 text-gold/40"}`}
                />
              ))}
            </div>
            <p className="font-serif text-6xl font-bold text-cream md:text-7xl">4.4</p>
            <p className="mt-2 text-muted">Based on 190 Google Reviews</p>

            <a
              href="https://instagram.com/bellebistromux"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/80 px-5 py-2.5 text-sm transition-all hover:border-accent/30 hover:bg-accent/10"
            >
              <Instagram className="h-4 w-4 text-accent" />
              <span className="text-cream">@bellebistromux</span>
              <span className="text-muted">· 10.2K followers</span>
            </a>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-3xl border border-white/5 bg-surface p-8"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10 bg-zinc-950">
                  <Image
                    src={review.avatarUrl}
                    alt={review.author}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-cream">{review.author}</p>
                  <div className="mt-1 flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>

              <span className="absolute left-6 top-4 font-serif text-5xl leading-none text-accent/20">&ldquo;</span>
              <p className="mt-8 text-sm leading-relaxed text-muted">{review.text}</p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
