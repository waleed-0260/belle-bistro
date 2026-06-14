"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Wallet } from "lucide-react";

const infoItems = [
  {
    icon: MapPin,
    label: "Address",
    value:
      "Model Town Blvd, Wapda Town Phase 1, Multan (Tabarak-Mubeen Arcade, Northern Bypass, Opp Wapda Town Phase 1)",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0337 2355333",
    href: "tel:03372355333",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Open daily, closes 2 AM",
    note: "Usually 30 min – 1.5 hr visit",
  },
  {
    icon: Wallet,
    label: "Price Range",
    value: "PKR 1,000 – 6,000 per person",
  },
];

export default function Location() {
  return (
    <section id="location" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent">Find Us</p>
          <h2 className="font-serif text-4xl font-bold text-cream md:text-5xl">
            Location & Hours
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {infoItems.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block text-cream transition-colors hover:text-accent-light"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-cream">{item.value}</p>
                  )}
                  {item.note && (
                    <p className="mt-1 text-sm text-muted">{item.note}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative overflow-hidden rounded-3xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1200&q=80"
                alt="Restaurant exterior street view ambiance"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="overflow-hidden rounded-3xl border border-white/5"
            >
              <iframe
                title="Bellé Bistro Multan Location"
                src="https://maps.google.com/maps?q=Belle+Bistro+Multan+Wapda+Town&ll=30.2417532,71.5045103&z=16&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, filter: "grayscale(30%) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
