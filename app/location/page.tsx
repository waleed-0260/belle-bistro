"use client";

import { motion } from "framer-motion";
import Location from "@/components/Location";

export default function LocationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden"
    >
      <Location />
    </motion.div>
  );
}
