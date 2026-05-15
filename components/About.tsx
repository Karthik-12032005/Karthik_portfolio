"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 5, suffix: "+", label: "Certifications" },
  { value: 8, suffix: ".51", label: "BCA CGPA" },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/10 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-violet-400 mb-4">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Turning ideas into{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                real-world
              </span>{" "}
              software.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm Karthik, a MCA student and passionate software engineer based
              in Mangaluru, India. I love building clean, performant web
              applications and exploring how AI can power the next generation of
              products.
            </p>
            <p className="text-gray-500 leading-relaxed">
              With a strong foundation in full-stack development — from crafting
              intuitive frontends with React and Tailwind to building reliable
              backends with PHP, Python, and MySQL — I aim to write software
              that is both elegant and purposeful.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors text-sm"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                viewport={{ once: true }}
                className="group bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-8"
              >
                <p className="text-5xl md:text-6xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent tabular-nums">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-gray-300 text-lg font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
