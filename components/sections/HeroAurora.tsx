"use client";

import AuroraCanvas from "@/components/aurora/AuroraCanvas";
import MagneticButton from "@/components/aurora/MagneticButton";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const wordReveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

export default function HeroAurora() {
  const reduce = useReducedMotion();
  const headlineWords = ["Smart", "real", "estate", "decisions", "begin", "with"];

  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <AuroraCanvas />
      </div>

      <div className="relative z-10 mx-auto max-w-content px-6 md:px-10 pt-32 pb-24 w-full">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="eyebrow">EST. 2012 — EDMONTON, ALBERTA</span>
        </motion.div>

        <h1 className="h-display text-frost text-[clamp(3rem,8vw,7rem)] max-w-5xl mb-8">
          {headlineWords.map((word, i) => (
            <motion.span
              key={word + i}
              custom={i}
              variants={wordReveal}
              initial={reduce ? "show" : "hidden"}
              animate="show"
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            custom={headlineWords.length}
            variants={wordReveal}
            initial={reduce ? "show" : "hidden"}
            animate="show"
            className="inline-block aurora-text"
          >
            certainty.
          </motion.span>
        </h1>

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-mist text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
        >
          Fast, accurate, reliable property valuations across Alberta and British Columbia.
          Trusted by Canada&apos;s largest banks, lenders, and law firms for over a decade.
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <MagneticButton href="/order">
            Request a Quote <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton href="/services" variant="ghost">
            Explore Services
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mist"
          aria-hidden
        >
          <span className="mono-label text-[10px]">SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            className="text-aurora-green"
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
