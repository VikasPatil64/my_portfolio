import { motion } from "framer-motion";
import { FaGraduationCap, FaBook, FaCode, FaDatabase, FaCalculator, FaTerminal } from "react-icons/fa";
import { education } from "../../data/education";

export default function Education() {
  // Map icons to subject titles dynamically
  const getSubjectIcon = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("machine learning") || lowerTitle.includes("ml")) {
      return <FaCode />;
    } else if (lowerTitle.includes("database") || lowerTitle.includes("dbms")) {
      return <FaDatabase />;
    } else if (lowerTitle.includes("probability") || lowerTitle.includes("statistics")) {
      return <FaCalculator />;
    } else {
      return <FaTerminal />;
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-16 md:py-24 border-t border-neutral-100 dark:border-neutral-900 bg-white dark:bg-black transition-colors duration-300" id="Education">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div 
          className="flex mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-neutral-950 dark:text-white">Education</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary">.</h1>
        </motion.div>

        {/* Institutions Timeline */}
        <div className="space-y-6 mb-16 max-w-4xl">
          {education.institutions.map((inst, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 border-l-4"
              style={{ borderLeftColor: inst.color }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light text-xl mt-1 md:mt-0">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-extrabold text-neutral-950 dark:text-white">
                    {inst.name}
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm font-semibold mt-1">
                    {inst.degree}
                  </p>
                </div>
              </div>

              <div className="text-left md:text-right shrink-0">
                <p className="text-neutral-400 dark:text-neutral-500 text-xs font-semibold tracking-wider uppercase">
                  {inst.period}
                </p>
                <span className="inline-block mt-2 px-2.5 py-0.5 text-xs font-bold bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light rounded-full">
                  {inst.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Subjects */}
        <div>
          <motion.h2 
            className="text-2xl sm:text-3xl font-extrabold mb-8 tracking-tight text-neutral-950 dark:text-white flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FaBook className="text-primary text-xl" /> Key Subjects Studied
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {education.subjects.map((sub, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/30 dark:bg-neutral-900/20 p-6 shadow-sm hover:shadow-md hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light text-base">
                      {getSubjectIcon(sub.title)}
                    </div>
                    <h3 className="text-base md:text-lg font-extrabold text-neutral-950 dark:text-white">
                      {sub.title}
                    </h3>
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {sub.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">COMPLETION</span>
                    <span className="text-primary">{sub.score}</span>
                  </div>
                  <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${sub.progress}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
