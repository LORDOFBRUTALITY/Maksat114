"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

const variants: Record<Direction, Variants> = {
  up: { hidden: { opacity: 0, y: 44 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -44 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 44 }, visible: { opacity: 1, x: 0 } },
  none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants[direction]}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
