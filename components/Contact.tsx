"use client";

import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mbdwvbpz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormState("success");
        form.reset();
        setTimeout(() => setFormState("idle"), 5000);
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 4000);
      }
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/10 overflow-hidden"
    >
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[350px] bg-violet-600/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-3">
            Let&apos;s work together?
          </h2>
          {/* Red underline accent */}
          <div className="flex justify-center mb-6">
            <span className="block w-12 h-1 rounded-full bg-red-500" />
          </div>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            I&apos;m currently available for new opportunities. Whether you have a project in
            mind or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

          {/* LEFT — Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md p-10 md:p-14"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>

            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                <p className="text-gray-400">Thanks for reaching out. I'll reply soon.</p>
              </motion.div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      placeholder="Enter Name..."
                      className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/60 focus:bg-white/5 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      placeholder="Enter Email..."
                      className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/60 focus:bg-white/5 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  placeholder="Enter Subject..."
                  className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/60 focus:bg-white/5 transition-all text-sm"
                />

                {/* Message */}
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Enter Comment..."
                  className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/60 focus:bg-white/5 transition-all text-sm resize-none"
                />

                {formState === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                {/* Send button — red like the reference */}
                <div>
                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={formState === "loading"}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Me
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* RIGHT — Info panel (dark) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0e0e0e] border-l border-white/10 p-10 md:p-14 flex flex-col justify-between gap-10"
          >
            <div className="flex flex-col gap-8">
              {/* Email */}
              <div>
                <p className="text-white font-bold mb-2 tracking-wide">
                  E-Mail :
                </p>
                <a
                  href="mailto:karthik12032005@gmail.com"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  karthik12032005@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="text-white font-bold mb-2 tracking-wide">
                  Phone :
                </p>
                <a
                  href="tel:+916360001862"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  +91 6360001862
                </a>
              </div>

              {/* Location */}
              <div>
                <p className="text-white font-bold mb-2 tracking-wide">
                  Location :
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Mangaluru, Karnataka,<br />India — 574153
                </p>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* GitHub */}
              <a
                id="contact-social-github"
                href="https://github.com/Karthik-12032005"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                id="contact-social-linkedin"
                href="https://www.linkedin.com/in/karthik-kk-b99ba937a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                id="contact-social-instagram"
                href="https://instagram.com/karthi._.k12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>

              {/* Email shortcut */}
              <a
                id="contact-social-email"
                href="mailto:karthik12032005@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
