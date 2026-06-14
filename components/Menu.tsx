"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { menuCategories } from "@/data/menuData";
import MenuCard from "./MenuCard";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);

  const currentCategory = menuCategories.find((cat) => cat.id === activeCategory)!;

  const handleTabClick = (id: string) => {
    setActiveCategory(id);
  };

  return (
    <section id="menu" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-black/10">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80"
            alt="Food spread banner for menu page"
            fill
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative space-y-4 px-6 py-14 text-center text-cream sm:px-12 sm:py-20">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Full Menu</p>
            <h2 className="font-serif text-4xl font-bold md:text-5xl">Discover every category</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Choose a category tab to explore our appetizers, steaks, seafood, pasta, and all your favorites.
            </p>
          </div>
        </div>

        <div className="sticky top-[72px] z-40 -mx-6 mb-10 border-b border-white/5 bg-background/90 px-6 py-4 backdrop-blur-md lg:-mx-8 lg:px-8">
          <div
            ref={tabsRef}
            className="scrollbar-hide flex gap-2 overflow-x-auto pb-1"
          >
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleTabClick(cat.id)}
                className={`relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "text-accent-light"
                    : "text-muted hover:text-cream"
                }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute bottom-0 left-1/2 h-0.5 w-10 -translate-x-1/2 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-8">
              <h3 className="font-serif text-2xl font-semibold text-cream">{currentCategory.label}</h3>
              {currentCategory.note && (
                <p className="mt-1 text-sm italic text-muted">{currentCategory.note}</p>
              )}
            </div>

            <motion.div
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.05 },
                },
              }}
            >
              {currentCategory.items.map((item) => (
                <motion.div
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <MenuCard item={item} imageUrl={currentCategory.imageUrl} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
