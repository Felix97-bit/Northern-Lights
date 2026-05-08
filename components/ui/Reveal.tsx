"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  as?: "div" | "section" | "article" | "header" | "li" | "ul" | "p" | "span";
};

export default function Reveal({ children, delay = 0, className = "", y = 30, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
