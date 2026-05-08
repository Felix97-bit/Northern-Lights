"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="pt-20"
      >
        {!reduce && (
          <motion.div
            key={pathname + "-wipe"}
            initial={{ scaleY: 1, originY: 0 }}
            animate={{ scaleY: 0, originY: 1 }}
            transition={{ duration: 0.7, ease: [0.85, 0, 0.15, 1] }}
            className="fixed top-0 left-0 right-0 z-[55] pointer-events-none"
            style={{
              height: "100vh",
              background:
                "linear-gradient(180deg, rgba(0,229,160,0) 0%, rgba(0,229,160,0.5) 30%, rgba(91,141,239,0.4) 70%, rgba(0,229,160,0) 100%)",
              mixBlendMode: "screen"
            }}
            aria-hidden
          />
        )}
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
