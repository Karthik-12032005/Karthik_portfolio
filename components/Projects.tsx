"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Pet Adoption System",
    description:
      "A web-based platform connecting pets, adopters, and rescuers. Allows users to view available pets, request adoption, and manage details easily.",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    category: "Web App",
    accent: "from-violet-500/20 to-purple-500/5",
    border: "hover:border-violet-500/40",
    dot: "bg-violet-400",
    github: "https://github.com/Karthik-12032005",
    live: "#",
  },
  {
    title: "Gym Management System",
    description:
      "An application to manage gym members, trainers, and memberships efficiently. Helps admins track payments and manage workout schedules.",
    tags: ["JavaScript", "PHP", "MySQL"],
    category: "Full Stack",
    accent: "from-cyan-500/20 to-blue-500/5",
    border: "hover:border-cyan-500/40",
    dot: "bg-cyan-400",
    github: "https://github.com/Karthik-12032005",
    live: "#",
  },
  {
    title: "Student Attendance System",
    description:
      "A digital system for teachers to mark student attendance, store records securely, and generate accurate attendance reports easily.",
    tags: ["Python", "MySQL", "UI"],
    category: "AI / Data",
    accent: "from-emerald-500/20 to-teal-500/5",
    border: "hover:border-emerald-500/40",
    dot: "bg-emerald-400",
    github: "https://github.com/Karthik-12032005",
    live: "#",
  },
  {
    title: "Expense Tracker System",
    description:
      "An application to record daily income and expenses. Helps users track spending, categorize expenses, and view detailed financial reports.",
    tags: ["Java", "Frontend", "Database"],
    category: "Full Stack",
    accent: "from-orange-500/20 to-amber-500/5",
    border: "hover:border-orange-500/40",
    dot: "bg-orange-400",
    github: "https://github.com/Karthik-12032005",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-violet-400 mb-4">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Selected Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${project.accent} border border-white/10 ${project.border} backdrop-blur-md p-8 transition-all duration-400 flex flex-col`}
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-white/10 text-gray-300`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${project.dot}`} />
                  {project.category}
                </span>
                <div className="flex items-center gap-3 text-gray-500">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-github-${index}`}
                    className="hover:text-white transition-colors p-1"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-live-${index}`}
                    className="hover:text-white transition-colors p-1"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
