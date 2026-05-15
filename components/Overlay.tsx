"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const roles = ["Software Engineer.", "Full-Stack Developer.", "AI Enthusiast."];

function RotatingTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 md:h-10 relative overflow-hidden mt-4">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-xl md:text-2xl text-gray-300 font-light tracking-wide absolute w-full text-center"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 25% to 50%
  const opacity2 = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4, 0.5],
    [0, 1, 1, 0]
  );
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  // Section 3: 55% to 80%
  const opacity3 = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7, 0.8],
    [0, 1, 1, 0]
  );
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

  const handleScrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-8 overflow-hidden">

        {/* Section 1 — Hero */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
              KARTHIK
            </h1>
            <RotatingTitle />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-10 pointer-events-auto"
          >
            <button
              id="hero-view-projects"
              onClick={handleScrollToWork}
              className="px-7 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors text-sm"
            >
              View Projects
            </button>
            <a
              id="hero-download-resume"
              href="/resume.pdf"
              download
              className="px-7 py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm backdrop-blur-sm"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute bottom-24 text-white/60 flex flex-col items-center gap-2 pointer-events-none"
          >
            <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className={cn(
            "absolute inset-0 flex flex-col justify-center",
            "items-start text-left px-8 md:px-24"
          )}
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-xl max-w-2xl">
            I build robust web applications.
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className={cn(
            "absolute inset-0 flex flex-col justify-center",
            "items-end text-right px-8 md:px-24"
          )}
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-xl max-w-2xl">
            Skilled in Python, PHP, JS & MySQL.
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
