"use client";

export default function BackToTop() {
  return (
    <button
      id="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="text-sm text-gray-500 hover:text-white transition-colors"
    >
      ↑ Back to top
    </button>
  );
}
