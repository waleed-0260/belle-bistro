"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { featuredDishes } from "@/data/menuData";
import { formatPrice } from "@/lib/formatPrice";

export default function Featured() {
  return (
    <section id="featured" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(76,175,80,0.04),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent">Chef&apos;s Picks</p>
          <h2 className="font-serif text-4xl font-bold text-cream md:text-5xl">
            Signature Dishes
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredDishes.map((dish, index) => (
            <motion.article
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group overflow-hidden rounded-3xl border border-white/5 bg-surface/90 shadow-xl shadow-black/20 transition-all duration-300 hover:border-accent/30"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={dish.imageUrl}
                  alt={dish.name}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              <div className="space-y-4 p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-gold text-gold" />
                    <span className="text-xs font-medium uppercase tracking-widest text-gold">
                      Signature
                    </span>
                  </div>
                  <span className="rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-background">
                    {formatPrice(dish.price)}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-cream md:text-3xl">
                  {dish.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{dish.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
