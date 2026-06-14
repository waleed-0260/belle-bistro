"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatProps {
  label: string;
  value: string;
  numericValue?: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedStat({ label, value, numericValue, suffix = "", prefix = "" }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView || numericValue === undefined) return;

    const isDecimal = !Number.isInteger(numericValue);
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * numericValue;

      setDisplay(
        isDecimal
          ? `${prefix}${current.toFixed(1)}${suffix}`
          : `${prefix}${Math.floor(current)}${suffix}`
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue, value, suffix, prefix]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-serif text-2xl font-bold text-cream md:text-3xl">{display}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-muted">{label}</p>
    </div>
  );
}

const stats: StatProps[] = [
  { label: "Rating", value: "4.4★", numericValue: 4.4, suffix: "★" },
  { label: "Reviews", value: "190+", numericValue: 190, suffix: "+" },
  { label: "Hours", value: "Open Till 2 AM" },
  { label: "Price Range", value: "PKR 1,000–6,000" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] bg-black/10"
          >
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
              alt="Elegant plated food at Belle Bistro"
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent">Our Story</p>
              <h2 className="font-serif text-4xl font-bold leading-tight text-cream md:text-5xl lg:text-6xl text-balance">
                Born in Multan.
                <br />
                <span className="text-accent-light">Built for flavor.</span>
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-muted">
              Bellé Bistro is where bold steaks, coastal seafood, handcrafted pasta, and late-night energy collide. Nestled in Wapda Town, we are Multan&apos;s favorite spot for sizzling steaks, loaded bites, and late-night cravings.
            </p>
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80"
                alt="Steak close-up at Belle Bistro"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-8 rounded-2xl border border-white/5 bg-surface/50 p-8 md:grid-cols-4 md:p-12"
        >
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
