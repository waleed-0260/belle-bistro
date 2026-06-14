"use client";

import { motion } from "framer-motion";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden"
    >
      <About />
    </motion.div>
  );
}
