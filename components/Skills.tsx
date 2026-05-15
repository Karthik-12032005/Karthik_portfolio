"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Category = "Frontend" | "Backend" | "Database" | "Tools";

const skillsData: Record<Category, { name: string; level: number }[]> = {
  Frontend: [
    { name: "HTML & CSS", level: 92 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 75 },
    { name: "Tailwind CSS", level: 82 },
  ],
  Backend: [
    { name: "PHP", level: 80 },
    { name: "Python", level: 75 },
    { name: "Node.js", level: 65 },
    { name: "Flask", level: 70 },
    { name: "Java", level: 62 },
  ],
  Database: [
    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 65 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 82 },
    { name: "VS Code", level: 92 },
    { name: "Linux / CLI", level: 65 },
  ],
};

const categories: Category[] = ["Frontend", "Backend", "Database", "Tools"];

const categoryGradients: Record<Category, string> = {
  Frontend: "from-violet-500 to-purple-400",
  Backend: "from-cyan-500 to-blue-400",
  Database: "from-emerald-500 to-teal-400",
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
      id="skills"
      className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/10 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-4">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Skills & Technologies
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
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {skillsData[active].map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  gradient={categoryGradients[active]}
                  delay={i * 0.08}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
