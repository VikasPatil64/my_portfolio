import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiInfo } from "react-icons/fi";
import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import ProjectsGrid from "../components/Projects/ProjectsGrid";
import CodingProfiles from "../components/home/CodingProfiles";
import Education from "../components/home/Education";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (searchParams.get("msg") === "already-here" && !showToast) {
      // Defer state update to avoid synchronous cascading renders
      const renderTimer = setTimeout(() => {
        setShowToast(true);
      }, 50);

      const dismissTimer = setTimeout(() => {
        setShowToast(false);
        setSearchParams({}, { replace: true });
      }, 3050);

      return () => {
        clearTimeout(renderTimer);
        clearTimeout(dismissTimer);
      };
    }
  }, [searchParams, setSearchParams, showToast]);

  return (
    <div className="flex flex-col w-full overflow-x-hidden relative">
      {/* Hero Intro Section */}
      <Hero />

      {/* About & Skills Section */}
      <AboutSection />

      {/* Projects Filter Grid */}
      <ProjectsGrid />

      {/* Coding Profiles Stats */}
      <CodingProfiles />

      {/* Education Timeline & Grades */}
      <Education />

      {/* Contact Form Formats */}
      <ContactSection />

      {/* Premium Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[9999] flex items-center gap-3 px-6 py-4 rounded-2xl bg-neutral-900/90 text-white dark:bg-white/90 dark:text-neutral-900 border border-neutral-200/50 dark:border-neutral-800 shadow-2xl backdrop-blur-md"
          >
            <FiInfo className="text-primary animate-bounce" size={20} />
            <span className="font-bold text-sm">You are already viewing my portfolio!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}