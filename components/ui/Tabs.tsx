"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Tab = { label: string; content: React.ReactNode };

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-steel/30 mb-8">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            className={`relative px-4 py-3 text-sm font-medium transition-colors ${
              active === i ? "text-aurora-green" : "text-mist hover:text-frost"
            }`}
          >
            <span className="mono-label" style={{ color: "inherit" }}>
              {t.label}
            </span>
            {active === i && (
              <motion.span
                layoutId="tab-underline"
                className="absolute left-0 right-0 -bottom-px h-px"
                style={{ background: "var(--aurora-gradient)" }}
              />
            )}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {tabs[active].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
