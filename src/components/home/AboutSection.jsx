import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import { personal } from "../../data/personal";
import { skillGroups } from "../../data/skills";

export default function AboutSection() {
  // Flatten skills for display
  const allSkills = skillGroups.flatMap((group) => group.skills);

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-16 md:py-24 border-t border-neutral-100 dark:border-neutral-900 bg-white dark:bg-black transition-colors duration-300" id="About">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div 
          className="flex mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-neutral-950 dark:text-white">About</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary">.</h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Bio Description (Left Column) */}
          <div className="w-full lg:w-3/5">
            <motion.div 
              className="space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm md:text-base font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p>
                Hey, I'm Vikas, an Artificial Intelligence and Data Science student at CSMSS Chh. Shahu College of Engineering. I focus on developing practical deep learning, natural language processing, and full-stack solutions.
              </p>
              <p>
                My technical foundation includes training transformer models (like BERT and WavLM), designing co-attention neural networks, and building speech analysis tools for clinical diagnostics. I enjoy turning complex research ideas into usable applications.
              </p>
              <p>
                On the backend, I write APIs in Python using Flask and FastAPI. On the frontend, I create interactive dashboards in Streamlit and React, styling them with Tailwind CSS and adding clean, responsive interfaces.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex mt-8 md:mt-12 items-center gap-3 sm:gap-4 text-neutral-700 dark:text-neutral-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold tracking-wider uppercase">My Links</p>
              <span className="text-primary font-bold">➔</span>
              
              <div className="flex gap-4">
                <a 
                  href={personal.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors p-1"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href={personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors p-1"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href={personal.leetcode} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors p-1"
                  aria-label="LeetCode"
                >
                  <FaCode size={20} />
                </a>
                <a 
                  href={`mailto:${personal.email}`} 
                  className="hover:text-primary transition-colors p-1"
                  aria-label="Email"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Skills Badges (Right Column) */}
          <motion.div 
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 tracking-tight text-neutral-950 dark:text-white">Skills</h2>
            
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              {allSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/80 px-3 py-1.5 rounded-md text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-semibold cursor-default hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white hover:border-primary dark:hover:border-primary transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
