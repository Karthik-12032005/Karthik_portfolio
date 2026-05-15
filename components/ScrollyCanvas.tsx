"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${frameIndex}_delay-0.066s.webp`;
      
      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.floor((loadedCount / FRAME_COUNT) * 100));
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          // Draw the first frame immediately
          drawFrame(loadedImages, 0);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const drawFrame = (imgArray: HTMLImageElement[], frameIndex: number) => {
    if (!canvasRef.current || imgArray.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgArray[frameIndex];
    if (!img) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // object-fit: cover logic + zoom to crop watermark
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    // Use Math.max for cover, and multiply by 1.08 to crop out the watermark at the bottom right
    const ratio = Math.max(hRatio, vRatio) * 1.08;
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    // Use requestAnimationFrame for smoother rendering
    requestAnimationFrame(() => drawFrame(images, frameIndex));
  });

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (images.length > 0) {
        const latest = scrollYProgress.get();
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(latest * FRAME_COUNT)
        );
        drawFrame(images, frameIndex);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  return (
    <>
      {loadingProgress < 100 && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121212] text-white">
          <div className="text-6xl font-bold mb-6 tracking-tighter">{loadingProgress}%</div>
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <p className="mt-4 text-sm text-gray-400 tracking-widest uppercase">Loading Assets</p>
        </div>
      )}
      <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </>
  );
}
