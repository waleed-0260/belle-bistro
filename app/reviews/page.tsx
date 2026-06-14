"use client";

import { motion } from "framer-motion";
import Reviews from "@/components/Reviews";

export default function ReviewsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden"
    >
      <Reviews />
    </motion.div>
  );
}
