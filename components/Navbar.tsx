"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-[#121212]/85 backdrop-blur-md py-3 border-b border-white/10"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="text-xl font-bold tracking-tighter text-white"
          >
            KARTHIK <span className="text-gray-400"></span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume button + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              download
              id="nav-resume-download"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-black bg-white rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>

            {/* Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 w-full h-full bg-[#0e0e0e]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-3xl font-bold text-white hover:text-gray-400 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
