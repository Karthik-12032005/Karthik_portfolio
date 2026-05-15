"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// The core 3D Block component
const Block = ({
  x,
  y,
  z = 0,
  w,
  d,
  h,
  topColor,
  rightColor,
  leftColor,
  children,
}: {
  x: number;
  y: number;
  z?: number;
  w: number;
  d: number;
  h: number;
  topColor: string;
  rightColor: string;
  leftColor: string;
  children?: { top?: ReactNode; right?: ReactNode; left?: ReactNode };
}) => {
  return (
    <motion.div
      className="absolute"
      style={{
        left: x,
        top: y,
        width: w,
        height: d,
        transformStyle: "preserve-3d",
      }}
      variants={{
        hidden: { z: z - h - 200, opacity: 0 },
        visible: { z, opacity: 1, transition: { duration: 1.2, type: "spring", bounce: 0.3 } }
      }}
    >
      {/* TOP FACE */}
      <div
        className="absolute border border-white/10 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]"
        style={{
          width: w,
          height: d,
          left: 0,
          top: 0,
          transformOrigin: "top left",
          transform: `translateZ(${h}px)`,
          backgroundColor: topColor,
          transformStyle: "preserve-3d",
        }}
      >
        {children?.top}
      </div>

      {/* RIGHT FACE (Faces +Y) */}
      <div
        className="absolute border-r border-b border-white/10 overflow-hidden"
        style={{
          width: w,
          height: h,
          left: 0,
          top: 0,
          transformOrigin: "top left",
          transform: `translate3d(0px, ${d}px, ${h}px) rotateX(-90deg)`,
          backgroundColor: rightColor,
          transformStyle: "preserve-3d",
        }}
      >
        {children?.right}
      </div>

      {/* LEFT FACE (Faces -X) */}
      <div
        className="absolute border-l border-b border-white/10 overflow-hidden"
        style={{
          width: d,
          height: h,
          left: 0,
          top: 0,
          transformOrigin: "top left",
          transform: `translate3d(0px, 0px, ${h}px) rotateX(-90deg) rotateY(-90deg)`,
          backgroundColor: leftColor,
          transformStyle: "preserve-3d",
        }}
      >
        {children?.left}
      </div>
    </motion.div>
  );
};

const SkillTag = ({ text, color = "fuchsia" }: { text: string; color?: string }) => {
  const isPurple = color === "purple";
  return (
    <div
      className={`px-3 py-1.5 border-2 rounded-lg text-xs md:text-sm font-black tracking-tight whitespace-nowrap
      ${isPurple
          ? "border-purple-400 text-purple-100 shadow-[0_0_15px_rgba(168,85,247,0.7)] bg-purple-900/70"
          : "border-fuchsia-400 text-fuchsia-100 shadow-[0_0_15px_rgba(217,70,239,0.7)] bg-fuchsia-900/60"
        }`}
    >
      {text}
    </div>
  );
};

const NeonSign = ({ text, facing }: { text: string; facing: "-X" | "+Y" }) => {
  const transform =
    facing === "-X"
      ? "rotateX(-90deg) rotateY(-90deg)" // Faces Left
      : "rotateX(-90deg)"; // Faces Right

  return (
    <div
      className="absolute flex flex-col items-center justify-center pointer-events-none"
      style={{
        left: "50%",
        top: "50%",
        transformOrigin: "center bottom",
        transform: `translate(-50%, -50%) ${transform} translateZ(40px)`,
      }}
    >
      <div
        className="text-fuchsia-400 font-black text-3xl md:text-5xl leading-none text-center whitespace-nowrap"
        style={{
          textShadow: "0 0 15px #d946ef, 0 0 30px #d946ef, 0 0 60px #c026d3",
        }}
      >
        {text.split(" ").map((w, i) => (
          <div key={i}>{w}</div>
        ))}
      </div>
    </div>
  );
};

const Tree = ({ x, y }: { x: number; y: number }) => (
  <div
    className="absolute pointer-events-none"
    style={{ left: x, top: y, transformStyle: "preserve-3d" }}
  >
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2"
      style={{
        transformOrigin: "bottom center",
        transform: "rotateZ(45deg) rotateX(-60deg)",
      }}
    >
      <div className="w-[8px] h-[25px] bg-[#3b0764] mx-auto rounded-t-full shadow-[0_0_15px_rgba(0,0,0,0.6)]" />
      <div className="absolute bottom-[15px] left-1/2 -translate-x-1/2 w-[55px] h-[55px] bg-fuchsia-700/80 rounded-full blur-[1px] shadow-[inset_-5px_-5px_20px_rgba(0,0,0,0.6),0_0_20px_rgba(217,70,239,0.5)] border border-fuchsia-500/30" />
      <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 -translate-y-2 w-[45px] h-[45px] bg-purple-500/90 rounded-full blur-[1px] shadow-[inset_-3px_-3px_15px_rgba(0,0,0,0.5),0_0_15px_rgba(168,85,247,0.5)] border border-purple-400/30" />
    </div>
  </div>
);

const Car = ({ initialX, initialY, axis }: { initialX: number, initialY: number, axis: 'x' | 'y' }) => {
    return (
        <motion.div
            className="absolute w-12 h-6 bg-purple-600 rounded-sm shadow-[0_0_10px_rgba(168,85,247,0.5)]"
            style={{ 
                left: initialX, 
                top: initialY, 
                transformStyle: "preserve-3d",
                transform: "translateZ(2px)" 
            }}
            animate={axis === 'x' ? { x: [0, 1200] } : { y: [0, 1200] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
        >
            <div className="absolute top-0 right-0 w-2 h-full flex flex-col justify-around py-1">
                <div className="w-1.5 h-1.5 bg-white blur-[1px] shadow-[0_0_5px_white]" />
                <div className="w-1.5 h-1.5 bg-white blur-[1px] shadow-[0_0_5px_white]" />
            </div>
        </motion.div>
    );
};

export default function IsometricSkills() {
  return (
    <section
      id="skills"
      className="relative z-20 bg-[#07020a] pt-12 pb-24 border-t border-white/10 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] bg-purple-800/10 rounded-full blur-[300px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 mb-16 text-center relative z-30">
        <p className="text-sm font-semibold tracking-[0.3em] uppercase text-purple-400 mb-4 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">
          Tech Stack
        </p>
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          Skills City
        </h2>
      </div>

      <div
        className="w-full h-[900px] md:h-[1100px] flex items-center justify-center relative"
        style={{ perspective: "4000px" }}
      >
        {/* 3D Rotation Wrapper */}
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(60deg) rotateZ(-45deg)",
          }}
        >
          {/* The 3D World */}
          <motion.div
            className="relative w-[1200px] h-[1200px]"
            style={{ transformStyle: "preserve-3d" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { duration: 1.5, ease: "easeOut", staggerChildren: 0.1 } }
            }}
          >
            {/* Ground */}
            <div
              className="absolute inset-0 bg-[#07020a]"
              style={{
                transform: "translateZ(0)",
                backgroundImage:
                  "linear-gradient(rgba(168,85,247,0.2) 2px, transparent 2px), linear-gradient(90deg, rgba(168,85,247,0.2) 2px, transparent 2px)",
                backgroundSize: "60px 60px",
                boxShadow: "inset 0 0 400px rgba(0,0,0,1)",
              }}
            />

            {/* Roads */}
            <div className="absolute left-0 top-[600px] w-full h-[80px] bg-black/80 flex items-center justify-center">
              <div className="w-full border-t-8 border-dashed border-white/20" />
            </div>
            <div className="absolute left-[600px] top-0 w-[80px] h-full bg-black/80 flex items-center justify-center">
              <div className="h-full border-l-8 border-dashed border-white/20" />
            </div>

            {/* Center Roundabout */}
            <div
              className="absolute left-[540px] top-[540px] w-[160px] h-[160px] rounded-full bg-[#120524] border-[12px] border-purple-900/60 shadow-[0_0_60px_rgba(168,85,247,0.5)] flex items-center justify-center"
              style={{ transform: "translateZ(2px)" }}
            >
              <Tree x={45} y={35} />
            </div>

            {/* Cars on the roads */}
            <Car initialX={0} initialY={620} axis="x" />
            <Car initialX={0} initialY={640} axis="x" />
            <Car initialX={620} initialY={0} axis="y" />
            <Car initialX={640} initialY={0} axis="y" />

            {/* Many More Trees */}
            <Tree x={100} y={100} /><Tree x={200} y={100} /><Tree x={300} y={100} />
            <Tree x={1000} y={100} /><Tree x={1100} y={100} />
            <Tree x={100} y={1100} /><Tree x={200} y={1100} /><Tree x={300} y={1100} />
            <Tree x={900} y={1100} /><Tree x={1000} y={1100} /><Tree x={1100} y={1100} />
            <Tree x={500} y={450} /><Tree x={700} y={450} /><Tree x={450} y={700} /><Tree x={700} y={700} />

            {/* ========================================================= */}
            {/* BUILDINGS */}
            {/* ========================================================= */}

            {/* 1. FRONT END BUILDING (Box 1 - Back-Left) */}
            <Block
              x={200} y={200} w={150} d={150} h={450}
              topColor="#831843" rightColor="#4c0519" leftColor="#881337"
              children={{
                top: <NeonSign text="FRONT END" facing="-X" />,
                right: (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8">
                    <SkillTag text="HTML" color="pink" />
                    <SkillTag text="CSS" color="pink" />
                    <SkillTag text="JavaScript" color="pink" />
                    <SkillTag text="React.js" color="pink" />
                    <SkillTag text="Tailwind CSS" color="pink" />
                  </div>
                ),
                left: (
                  <div className="w-full h-full grid grid-cols-4 grid-rows-6 gap-2 p-4 opacity-40">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="bg-pink-500 border border-pink-400 shadow-[0_0_12px_rgba(244,63,94,0.5)]" />
                    ))}
                  </div>
                )
              }}
            />

            {/* 2. FULL STACK BUILDING (Box 2 - Back-Right - Tallest) */}
            <Block
              x={800} y={200} w={180} d={180} h={700}
              topColor="#1e1b4b" rightColor="#17143a" leftColor="#1e1b4b"
              children={{
                top: (
                  <div className="w-full h-full relative">
                    <NeonSign text="FULL STACK" facing="+Y" />
                    <div className="absolute right-6 top-6 w-16 h-16 rounded-full border-4 border-indigo-400/50 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.6)]">
                      <span className="text-indigo-200 font-black text-2xl" style={{ transform: "rotateZ(45deg)" }}>H</span>
                    </div>
                  </div>
                ),
                right: (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-6 mt-16">
                    <p className="text-sm text-indigo-300 font-black uppercase tracking-[0.4em] mb-2 border-b-2 border-indigo-500/50">Tools</p>
                    <div className="flex flex-col gap-3 items-center">
                      <SkillTag text="Git" color="purple" />
                      <SkillTag text="GitHub" color="purple" />
                      <SkillTag text="VS Code" color="purple" />
                      <SkillTag text="Vercel" color="purple" />
                      <SkillTag text="Render" color="purple" />
                    </div>
                  </div>
                ),
                left: (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-6 mt-16">
                    <p className="text-sm text-indigo-300 font-black uppercase tracking-[0.4em] mb-2 border-b-2 border-indigo-500/50">Android</p>
                    <div className="flex flex-col gap-3 items-center">
                      <SkillTag text="Android Studio" color="purple" />
                      <SkillTag text="Java" color="purple" />
                      <SkillTag text="XML" color="purple" />
                      <SkillTag text="Firebase" color="purple" />
                    </div>
                  </div>
                )
              }}
            />

            {/* 3. BACK END BUILDING (Box 4 - Front-Right) */}
            <Block
              x={800} y={800} w={150} d={150} h={400}
              topColor="#4c1d95" rightColor="#2e1065" leftColor="#4c1d95"
              children={{
                top: <NeonSign text="BACK END" facing="-X" />,
                right: (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-5 p-6">
                    <p className="text-xs text-purple-300 font-bold uppercase tracking-widest opacity-60">Backend</p>
                    <div className="flex flex-col gap-3 items-center">
                      <SkillTag text="Node.js" />
                      <SkillTag text="Express.js" />
                      <SkillTag text="PHP" />
                      <SkillTag text="Python" />
                      <SkillTag text="Java" />
                      <SkillTag text="C#" />
                    </div>
                  </div>
                ),
                left: (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-5 p-6">
                    <p className="text-xs text-purple-300 font-bold uppercase tracking-widest opacity-60">Database</p>
                    <div className="flex flex-col gap-3 items-center">
                      <SkillTag text="MongoDB" />
                      <SkillTag text="MySQL" />
                      <SkillTag text="Firebase" />
                    </div>
                  </div>
                )
              }}
            />

            {/* ========================================================= */}
            {/* 4. MASTERPIECE BLIMP (Left to Right) */}
            {/* ========================================================= */}
            <motion.div
              className="absolute w-[350px] h-[120px] pointer-events-none"
              style={{ transformStyle: "preserve-3d" }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              animate={{
                x: [-600, 1500],
                y: [100, 600],
                z: [450, 450],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                className="w-full h-full bg-purple-500 rounded-full shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.6),_0_0_60px_rgba(168,85,247,0.7)] border-2 border-purple-400/30 relative flex items-center justify-center"
                style={{ 
                    transform: "rotateZ(-135deg) rotateX(-60deg)",
                    backgroundImage: "linear-gradient(transparent 30%, rgba(250,204,21,0.5) 30%, rgba(250,204,21,0.5) 45%, transparent 45%, transparent 55%, rgba(250,204,21,0.5) 55%, rgba(250,204,21,0.5) 70%, transparent 70%)"
                }}
              >
                {/* Fins */}
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-20 h-32 bg-purple-600 shadow-[0_0_30px_rgba(168,85,247,0.6)] [clip-path:polygon(0_20%,_100%_0,_100%_100%,_0_80%)]" />
                <div className="absolute -left-5 top-0 w-20 h-20 bg-purple-600 [clip-path:polygon(50%_0,_100%_100%,_0_100%)]" style={{ transform: "translateZ(30px) rotateX(-90deg)" }} />
                <div className="absolute -left-5 bottom-0 w-20 h-20 bg-purple-600 [clip-path:polygon(50%_100%,_100%_0,_0_0)]" style={{ transform: "translateZ(30px) rotateX(-90deg)" }} />

                {/* Gondola */}
                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80px] h-[30px] bg-purple-900/90 rounded-md border border-purple-400/50 flex gap-2 items-center justify-center px-2 shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                    <div className="w-3 h-3 bg-fuchsia-300 rounded-full shadow-[0_0_8px_#d946ef]" />
                    <div className="w-3 h-3 bg-fuchsia-300 rounded-full shadow-[0_0_8px_#d946ef]" />
                    <div className="w-3 h-3 bg-fuchsia-300 rounded-full shadow-[0_0_8px_#d946ef]" />
                </div>
              </div>
              
              <div
                className="absolute left-0 w-[200px] h-[60px] bg-black/60 blur-[40px] rounded-full"
                style={{ transform: "translateZ(-450px)" }}
              />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
