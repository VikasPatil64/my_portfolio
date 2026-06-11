import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <p className="text-2xl md:text-3xl text-gray-500 mb-2">
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold leading-none text-slate-700 mb-6">
            Vikas<span className="text-purple-600">.</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-medium mb-5">
            AI & Data Science Student
          </h2>

          {/* Tech Line */}
          <p className="text-purple-600 font-medium mb-5">
            Machine Learning • Deep Learning • NLP • Generative AI
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            Passionate about building intelligent systems using AI and Data
            Science. Focused on creating real-world machine learning and
            generative AI applications while preparing for internships and
            software engineering roles.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-10 flex-wrap">

            <button
              className="
              px-8 py-3
              bg-black
              text-white
              rounded-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              "
            >
              View Resume
            </button>

            <button
              className="
              px-8 py-3
              border
              border-gray-300
              rounded-xl
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
              hover:-translate-y-1
              "
            >
              Contact Me
            </button>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">

            {/* Glow */}
            <div
              className="
              absolute
              inset-0
              bg-purple-400
              opacity-20
              blur-3xl
              rounded-full
              "
            />

            <img
              src="/profile.jpeg"
              alt="Vikas Pathade"
              className="
              relative
              w-64
              h-64
              md:w-80
              md:h-80
              lg:w-[420px]
              lg:h-[420px]
              rounded-full
              object-cover
              border-4
              border-white
              shadow-2xl
              transition-all
              duration-500
              hover:scale-105
              "
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;