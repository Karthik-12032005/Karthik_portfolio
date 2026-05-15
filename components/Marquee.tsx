"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  "Python", "PHP", "JavaScript", "Flask", "React.js", "Java",
  "Node.js", "Tailwind CSS", "MySQL", "MongoDB", "Git", "GitHub"
];

export default function Marquee() {
  return (
    <section className="bg-[#121212] py-20 border-t border-white/5 overflow-hidden flex relative z-20">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none"></div>

      <motion.div
        className="flex gap-16 whitespace-nowrap px-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
          <span
            key={idx}
            className="text-5xl md:text-8xl font-black text-white/5 hover:text-white/20 transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
