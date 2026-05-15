"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Introduction to AI",
    issuer: "Infosys Springboard",
  },
  {
    title: "Generative AI for All",
    issuer: "Infosys Springboard",
  },
  {
    title: "Artificial Intelligence for All",
    issuer: "Infosys Springboard",
  },
  {
    title: "AI in Practice",
    issuer: "National workshop on Data-driven cardiology and Gen AI models",
  },
  {
    title: "Ideathon",
    issuer: "Innovision 2026 conducted in AIMIT",
  },
  {
    title: "Basics of Python",
    issuer: "Infosys Springboard",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white text-center">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl flex items-start gap-4 hover:bg-white/10 transition-colors"
            >
              <div className="bg-white/10 p-3 rounded-full text-white">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
