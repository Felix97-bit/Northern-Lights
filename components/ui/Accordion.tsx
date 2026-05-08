"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export type AccordionItem = {
  title: string;
  content: React.ReactNode;
  meta?: string;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-steel/30 border-y border-steel/30">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-6 py-6 text-left group"
              aria-expanded={isOpen}
            >
              <div className="flex-1">
                {item.meta && (
                  <span className="mono-label text-aurora-green block mb-2">{item.meta}</span>
                )}
                <span className="h-sub text-frost text-xl md:text-2xl group-hover:text-aurora-green transition-colors">
                  {item.title}
                </span>
              </div>
              <span className="mt-1 shrink-0 w-8 h-8 rounded-full border border-steel/40 flex items-center justify-center text-frost group-hover:border-aurora-green group-hover:text-aurora-green transition-colors">
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pr-12 text-mist leading-relaxed">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
