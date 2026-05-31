import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "~/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-matte-black/95 py-4 shadow-lg backdrop-blur-md"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-luxury flex items-center justify-between px-6 md:px-12 lg:px-20">
          <a
            href="#home"
            className="font-serif text-xl tracking-widest text-ivory transition-colors hover:text-gold md:text-2xl"
          >
            Eba Sheba
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-xs tracking-widest uppercase text-ivory/70 transition-colors hover:text-gold after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="text-ivory lg:hidden"
            aria-label="Open menu"
          >
            <HiMenu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-matte-black/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between px-6 py-6">
                <span className="font-serif text-xl text-gold">Menu</span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="text-ivory"
                  aria-label="Close menu"
                >
                  <HiX className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col items-center justify-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-2xl text-ivory transition-colors hover:text-gold"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
