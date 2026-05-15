"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "St. Aloysius (Deemed to be University), Mangaluru",
    year: "2025 - 2027",
    details: "Pursuing",
  },
  {
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Canara College, Mangaluru",
    year: "2022 - 2025",
    details: "CGPA: 8.51",
  },
  {
    degree: "PUC (Pre-University Course)",
    institution: "SVS PU College, Bantwal",
    year: "2020 - 2022",
    details: "Percentage: 89.5%",
  },
  {
    degree: "SSLC",
    institution: "VishwaMangala High School, Konaje",
    year: "2018 - 2020",
    details: "Percentage: 75.2%",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-white text-center">
            Education
          </h2>
        </motion.div>

        <div className="relative border-l border-white/20 ml-4 md:ml-0">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 ml-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-gray-400 border-4 border-[#121212]" />

              <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                <span className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-2 block">
                  {edu.year}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {edu.degree}
                </h3>
                <h4 className="text-lg text-gray-300 mb-2">
                  {edu.institution}
                </h4>
                <p className="text-gray-400">
                  {edu.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
