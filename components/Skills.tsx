"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Category = "Frontend" | "Backend" | "Database" | "Android" | "Tools";

const skillsData: Record<Category, { name: string; level: number }[]> = {
  Frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Tailwind CSS", level: 88 },
  ],
  Backend: [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 70 },
    { name: "PHP", level: 80 },
    { name: "C#", level: 65 },
    { name: "Java", level: 70 },
    { name: "Python", level: 75 },
  ],
  Database: [
    { name: "MongoDB", level: 70 },
    { name: "MySQL", level: 85 },
    { name: "Firebase", level: 80 },
  ],
  Android: [
    { name: "Android Studio", level: 85 },
    { name: "Java", level: 75 },
    { name: "XML", level: 90 },
    { name: "Firebase", level: 80 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "Vercel", level: 80 },
    { name: "Render", level: 75 },
  ],
};

const categories: Category[] = ["Frontend", "Backend", "Database", "Android", "Tools"];

const categoryGradients: Record<Category, string> = {
  Frontend: "from-violet-500 to-purple-400",
  Backend: "from-cyan-500 to-blue-400",
  Database: "from-emerald-500 to-teal-400",
  Android: "from-fuchsia-500 to-pink-400",
  Tools: "from-orange-500 to-amber-400",
};

function SkillBar({
  name,
  level,
  gradient,
  delay,
}: {
  name: string;
  level: number;
  gradient: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, delay }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-200 font-medium">{name}</span>
        <span className="text-sm text-gray-500 tabular-nums">{level}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: delay + 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState<Category>("Frontend");

  return (
    <section
      className="relative z-20 bg-[#0a0a0a] py-24 px-8 md:px-24 border-t border-white/5 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-purple-400 mb-4">
            Proficiency
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Detailed Breakdown
          </h2>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`skill-tab-${cat.toLowerCase()}`}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? `bg-gradient-to-r ${categoryGradients[cat]} text-white shadow-lg`
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                {skillsData[active].map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    gradient={categoryGradients[active]}
                    delay={i * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
