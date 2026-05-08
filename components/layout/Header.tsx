"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import MagneticButton from "@/components/aurora/MagneticButton";
import { primaryNav } from "@/lib/content/nav";
import { site } from "@/lib/content/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-ink/90 backdrop-blur-md border-b border-steel/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-content px-6 md:px-10 flex items-center justify-between h-20">
          <Link href="/" aria-label="Northern Lights Appraisals — Home">
            <Logo height={36} />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {primaryNav.map((n) => {
              const active = isActive(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={`link-aurora text-sm hover:text-frost ${
                    active ? "is-active text-frost" : "text-frost/85"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${site.phoneTel}`}
              className="font-mono text-xs text-frost/80 hover:text-aurora-green transition-colors flex items-center gap-2"
            >
              <Phone size={14} className="text-aurora-green" />
              {site.phone}
            </a>
            <MagneticButton href="/order" variant="primary" className="!py-2.5 !px-5 !text-sm">
              Get a Quote
            </MagneticButton>
          </div>

          <button
            type="button"
            className="lg:hidden text-frost p-2"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-obsidian"
          >
            <div className="absolute inset-0 bg-aurora-glow opacity-60 pointer-events-none" />
            <div className="relative h-full flex flex-col">
              <div className="flex items-center justify-between h-20 px-6 md:px-10 border-b border-steel/20">
                <Logo height={32} />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="text-frost p-2"
                >
                  <X size={22} />
                </button>
              </div>
              <nav className="flex-1 flex flex-col justify-center px-8 gap-2 max-w-xl mx-auto w-full" aria-label="Mobile">
                {primaryNav.map((n, i) => (
                  <motion.div
                    key={n.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <Link
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="block h-display text-5xl md:text-6xl text-frost py-3 hover:text-aurora-green transition-colors"
                    >
                      {n.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="px-6 md:px-10 pb-10 flex flex-col gap-3 items-start max-w-xl mx-auto w-full">
                <a href={`tel:${site.phoneTel}`} className="font-mono text-sm text-frost/80">
                  {site.phone}
                </a>
                <MagneticButton href="/order" variant="primary">
                  Request a Quote
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
