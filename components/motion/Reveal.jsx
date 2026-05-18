"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: 0.12, margin: "-0px 0px -10% 0px" });

  const instant = { opacity: 1, y: 0 };
  const off = { opacity: 0, y: 20 };

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? instant : off}
      animate={isInView || reduceMotion ? instant : off}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.48, delay, ease: [0.22, 1, 0.36, 1] }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
