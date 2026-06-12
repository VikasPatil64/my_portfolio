import { motion } from "framer-motion";
import { personal } from "../../data/personal";

// Helper component for the corner-pulse highlight keywords
function HighlightKeyword({ text }) {
  return (
    <span className="relative hover:bg-neutral-900 dark:hover:bg-white group/cover inline-block dark:bg-neutral-900/60 bg-neutral-200/80 px-1.5 mx-1 py-0.5 rounded-sm transition-all duration-100 cursor-default">
      <span className="dark:text-white inline-block text-neutral-900 relative z-20 group-hover/cover:text-white dark:group-hover/cover:text-neutral-900 transition duration-200 font-bold">
        {text}
      </span>
      {/* 4 corner pulsing dots */}
      <span className="pointer-events-none animate-pulse group-hover/cover:opacity-100 group h-1.5 w-1.5 rounded-full bg-neutral-600 dark:bg-white opacity-20 absolute -right-[2px] -top-[2px]"></span>
      <span className="pointer-events-none animate-pulse group-hover/cover:opacity-100 group h-1.5 w-1.5 rounded-full bg-neutral-600 dark:bg-white opacity-20 absolute -bottom-[2px] -right-[2px]"></span>
      <span className="pointer-events-none animate-pulse group-hover/cover:opacity-100 group h-1.5 w-1.5 rounded-full bg-neutral-600 dark:bg-white opacity-20 absolute -left-[2px] -top-[2px]"></span>
      <span className="pointer-events-none animate-pulse group-hover/cover:opacity-100 group h-1.5 w-1.5 rounded-full bg-neutral-600 dark:bg-white opacity-20 absolute -bottom-[2px] -left-[2px]"></span>
    </span>
  );
}

export default function Hero() {
  return (
    <section 
      className="h-screen w-screen bg-white dark:bg-black bg-grid-pattern relative flex flex-col justify-center overflow-hidden transition-colors duration-300"
      id="basic-info"
    >
      {/* Vignette mask overlay */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-black vignette-mask z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full flex flex-col md:flex-row items-center justify-between gap-12 pt-16">
        {/* Left Side Content */}
        <div className="flex flex-col items-start w-full md:w-[60%] lg:w-3/5 text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black relative z-20 text-transparent bg-clip-text bg-gradient-to-b from-neutral-500 to-neutral-800 dark:from-neutral-100 dark:to-neutral-500 py-3 lg:py-6 tracking-tight leading-none">
              Hi, I'm Vikas
              <span className="text-primary font-black">.</span>
            </p>
          </motion.div>

          <motion.p
            className="text-neutral-800 dark:text-neutral-200 text-base sm:text-lg lg:text-2xl mt-4 font-semibold tracking-tight leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            AI & Data Science student at CSMSS Chh. Shahu College of Engineering.
          </motion.p>

          <motion.p
            className="mt-4 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl text-neutral-600 dark:text-neutral-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Over the past years, I've excelled in
            <HighlightKeyword text="AI/ML models" />
            ,
            <HighlightKeyword text="NLP applications" />
            ,
            <HighlightKeyword text="transformer pipelines" />
            , and
            <HighlightKeyword text="full-stack interfaces" />
            , showcasing expertise through coding profiles and building practical, data-driven projects.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href="#Contact" className="block">
              <div className="relative flex border border-neutral-300 dark:border-neutral-800 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900/60 dark:hover:bg-neutral-900 transition duration-500 items-center justify-center p-px rounded-full shadow-sm hover:scale-[1.02] transform">
                <div className="px-6 py-2.5 rounded-full dark:bg-black bg-white text-black dark:text-white text-sm font-bold tracking-tight">
                  Contact Me
                </div>
              </div>
            </a>
            
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative flex border border-neutral-300 dark:border-neutral-800 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900/60 dark:hover:bg-neutral-900 transition duration-500 items-center justify-center p-px rounded-full shadow-sm hover:scale-[1.02] transform">
                <div className="px-6 py-2.5 rounded-full dark:bg-black bg-white text-black dark:text-white text-sm font-bold tracking-tight">
                  View Resume
                </div>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Right Side Image (Avatar) */}
        <motion.div
          className="w-full md:w-[40%] lg:w-2/5 flex justify-center items-center mt-6 md:mt-0 z-40"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-[6px] border-neutral-100 dark:border-neutral-900 shadow-2xl group transition-all duration-300 hover:shadow-primary/5">
            <img
              src="/profile.jpeg"
              alt={personal.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}