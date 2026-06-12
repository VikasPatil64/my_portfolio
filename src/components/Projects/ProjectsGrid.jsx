import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Dynamically calculate categories and project counts
  const categories = useMemo(() => {
    const counts = {};
    projects.forEach((project) => {
      counts[project.category] = (counts[project.category] || 0) + 1;
    });

    // Create array: [{ name: 'All', count: X }, { name: 'Cat1', count: Y }, ...]
    const categoryList = [{ name: "All", count: projects.length }];
    Object.keys(counts).forEach((cat) => {
      categoryList.push({ name: cat, count: counts[cat] });
    });

    return categoryList;
  }, []);

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-16 md:py-24 border-t border-neutral-100 dark:border-neutral-900 bg-white dark:bg-black transition-colors duration-300" id="Projects">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <motion.div 
          className="flex mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-neutral-950 dark:text-white">Projects</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary">.</h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base mb-10 max-w-2xl font-medium"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          A curated selection of projects spanning machine learning pipelines, natural language processing, and interactive full-stack dashboards.
        </motion.p>

        {/* Categories Filter Pills */}
        <motion.div
          className="flex flex-wrap gap-2.5 mb-10 overflow-x-auto pb-2 no-scrollbar"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`relative px-4 py-2 rounded-full text-xs font-extrabold tracking-wide uppercase transition-all duration-300 flex items-center gap-2 border cursor-pointer ${
                  isActive
                    ? "bg-primary text-white border-primary"
                    : "bg-white dark:bg-neutral-900/40 text-neutral-500 dark:text-neutral-400 border-neutral-200 dark:border-neutral-850 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </div>
  );
}