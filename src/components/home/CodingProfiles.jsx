import { motion } from "framer-motion";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { codingProfiles } from "../../data/codingProfiles";

export default function CodingProfiles() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-16 md:py-24 border-t border-neutral-100 dark:border-neutral-900 bg-white dark:bg-black transition-colors duration-300" id="Coding Profiles">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div 
          className="flex mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-neutral-950 dark:text-white">Coding Profiles</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary">.</h1>
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid sm:grid-cols-2 gap-6 w-full">
          {codingProfiles.map((profile, idx) => {
            const Icon = profile.name === "LeetCode" ? SiLeetcode : SiGithub;
            
            return (
              <motion.a
                key={idx}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/2 transition-all duration-300 block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-2xl ${profile.accent} group-hover:bg-primary group-hover:text-white transition-colors duration-300`}>
                      <Icon />
                    </div>
                    <h3 className="text-xl font-extrabold text-neutral-950 dark:text-white group-hover:text-primary transition-colors duration-300">
                      {profile.name}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    View Profile ↗
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 border-t border-neutral-100 dark:border-neutral-800 pt-4">
                  {profile.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="text-center sm:text-left">
                      <p className="text-lg font-black text-neutral-900 dark:text-white">
                        {stat.value}
                      </p>
                      <p className="text-[10px] sm:text-xs text-neutral-400 dark:text-neutral-500 font-medium mt-1 uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
