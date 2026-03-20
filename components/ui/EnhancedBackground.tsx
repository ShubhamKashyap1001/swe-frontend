"use client";

import { motion } from "framer-motion";

export default function EnhancedBackground({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#050505]">

      {/* animated gradient glow */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="
        absolute inset-0
        opacity-40
        bg-[radial-gradient(circle_at_30%_20%,#16a34a33,transparent_50%),
            radial-gradient(circle_at_70%_60%,#16a34a22,transparent_60%)]
      "
      />

      {/* grid pattern */}
      <div
        className="
        absolute inset-0
        bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),
        linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]
        bg-[size:40px_40px]
        opacity-20
      "
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}