"use client";

import { useState } from "react";
import { ChevronDown, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { TeamMember } from "@/lib/content/team";
import TeamPortrait from "./TeamPortrait";

export default function TeamCard({ member, large = false }: { member: TeamMember; large?: boolean }) {
  const [open, setOpen] = useState(large);
  return (
    <article className={`card-surface p-6 md:p-8 ${large ? "lg:col-span-7" : ""}`}>
      <div className={`flex ${large ? "flex-col md:flex-row gap-8" : "flex-col gap-6"}`}>
        <div className={`relative overflow-hidden rounded-2xl ${large ? "md:w-1/2 aspect-square" : "aspect-square"}`}>
          <TeamPortrait name={member.name} />
          {member.awards && (
            <div className="absolute top-3 left-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian/80 backdrop-blur border border-aurora-green/40">
              <Award size={12} className="text-aurora-green shrink-0" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-aurora-green truncate">
                {member.awards}
              </span>
            </div>
          )}
        </div>
        <div className="flex-1 flex flex-col">
          <h3 className="h-sub text-2xl md:text-3xl text-frost">{member.name}</h3>
          <p className="mono-label mt-1 text-aurora-green">{member.role}</p>
          <p className="mono-label mt-2 text-mist normal-case tracking-normal" style={{ letterSpacing: "0.05em" }}>
            {member.designations}
          </p>

          <div className={`mt-5 ${large ? "" : "flex-1"}`}>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.p
                  key="full"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-mist leading-relaxed text-sm md:text-base overflow-hidden"
                >
                  {member.bio}
                </motion.p>
              ) : (
                <motion.p
                  key="short"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-mist leading-relaxed text-sm line-clamp-3"
                >
                  {member.bio}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {!large && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="mt-5 self-start inline-flex items-center gap-2 text-aurora-green text-xs mono-label hover:gap-3 transition-all"
              aria-expanded={open}
            >
              {open ? "Show less" : "Read more"}
              <ChevronDown
                size={14}
                className="transition-transform"
                style={{ transform: open ? "rotate(180deg)" : "none" }}
              />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
