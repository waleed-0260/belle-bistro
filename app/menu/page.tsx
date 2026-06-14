"use client";

import { motion } from "framer-motion";
import Menu from "@/components/Menu";

export default function MenuPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden"
    >
      <Menu />
    </motion.div>
  );
}
