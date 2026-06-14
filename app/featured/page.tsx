"use client";

import { motion } from "framer-motion";
import Featured from "@/components/Featured";

export default function FeaturedPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden"
    >
      <Featured />
    </motion.div>
  );
}
