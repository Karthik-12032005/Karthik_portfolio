import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import IsometricSkills from "@/components/IsometricSkills";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white">
      {/* Scroll progress bar */}
      <ScrollProgress />

      <Navbar />

      {/* Scrollytelling Hero */}
      <div id="home" className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Tech Stack Marquee */}
      <Marquee />

      {/* About Me */}
      <About />

      {/* Projects */}
      <Projects />

      {/* 3D Isometric Skills City */}
      <IsometricSkills />

      {/* Education */}
      <Education />

      {/* Certifications */}
      <Certifications />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="relative z-20 bg-[#0e0e0e] border-t border-white/10 py-12 px-8 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold tracking-tighter text-white">
            K.<span className="text-gray-500">DEV</span>
          </a>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              id="footer-github"
              href="https://github.com/Karthik-12032005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              id="footer-linkedin"
              href="https://www.linkedin.com/in/karthik-kk-b99ba937a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              id="footer-email"
              href="mailto:karthik12032005@gmail.com"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Back to top + copyright */}
          <div className="flex items-center gap-6">
            <BackToTop />
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Karthik
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
