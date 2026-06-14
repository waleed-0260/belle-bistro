"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import { featuredDishes } from "@/data/menuData";
import { formatPrice } from "@/lib/formatPrice";
import Location from "@/components/Location";
import About from "@/components/About";

const stats = [
  { label: "Rating", value: "4.4★" },
  { label: "Reviews", value: "190+" },
  { label: "Open Till", value: "2 AM" },
  { label: "Price Range", value: "PKR 1,000–6,000" },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden"
    >
      <Hero />

      <section className="border-t border-white/5 bg-surface/50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-4 rounded-3xl bg-background/80 p-6 shadow-[0_0_120px_rgba(0,0,0,0.10)] sm:grid-cols-4 sm:p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl font-bold text-cream md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <About/>


      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Signature Picks</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-cream md:text-5xl">Featured dishes handpicked for you</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Try the most-loved plates at Bellé Bistro, then explore the full collection on the featured page.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredDishes.map((dish) => (
              <Link
                key={dish.id}
                href="/featured"
                className="group overflow-hidden rounded-3xl border border-white/5 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="relative mb-5 h-64 overflow-hidden rounded-3xl">
                  <Image
                    src={dish.imageUrl}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-cream">
                    <p className="text-sm uppercase tracking-[0.18em] text-accent-light">Featured</p>
                    <h3 className="mt-2 text-2xl font-bold">{dish.name}</h3>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted">{dish.description}</p>
                <span className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background">
                  {formatPrice(dish.price)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.5rem] px-6 py-20 sm:px-10 sm:py-24">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80"
          alt="Full menu and food spread at Belle Bistro"
          fill
          className="absolute inset-0 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-3xl text-center text-cream">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Taste the full menu</p>
          <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">See every dish the kitchen is cooking</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            From appetizers to desserts, the full menu brings bold steakhouse flavor, seafood, pasta, and more.
          </p>
          <Link
            href="/menu"
            className="mt-10 inline-flex rounded-full bg-accent px-8 py-4 text-sm font-semibold text-background transition hover:bg-accent-light"
          >
            View Full Menu
          </Link>
        </div>
      </section>
      <section>
        <Location/>
      </section>
    </motion.div>
  );
}
