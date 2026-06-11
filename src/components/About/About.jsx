import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-[1.4fr_0.8fr] gap-20">
        {/* LEFT */}

        <div>
          <h2 className="text-5xl font-bold mb-8">
            About<span className="text-purple-600">.</span>
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            I'm Vikas Pathade, a B.Tech Artificial Intelligence & Data Science
            student at CSMSS CSCOE with a strong interest in Machine Learning,
            Deep Learning, Natural Language Processing and Generative AI.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I enjoy building AI-powered applications that solve real-world
            problems, ranging from sentiment analysis and speech processing to
            computer vision, predictive analytics and intelligent automation
            systems.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Through hands-on projects, I have worked with technologies such as
            TensorFlow, PyTorch, Scikit-Learn, Flask and React while
            continuously improving my software development and AI engineering
            skills.
          </p>

          <p className="text-lg leading-relaxed">
            Currently focused on placements, internships and exploring advanced
            AI technologies including LLMs, RAG systems and Generative AI
            applications.
          </p>

          <div className="flex items-center gap-5 mt-12">
            <span className="font-medium">Connect With Me →</span>

            <a
              href="https://github.com/VikasPatil64"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/vikaspathade"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:pathadevikas54@gmail.com"
              className="hover:scale-110 transition-transform"
            >
              <FaEnvelope size={24} />
            </a>

            <a
              href="https://leetcode.com/u/vikas_pathade04/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <SiLeetcode size={24} />
            </a>
            <a
              href="https://www.instagram.com/vikaspathade_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* RIGHT */}

        <div>
          <h3 className="text-5xl font-bold mb-8">Skills</h3>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              Python
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              SQL
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              C
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              NumPy
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              Pandas
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              Matplotlib
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              Seaborn
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              Scikit-Learn
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              TensorFlow
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              PyTorch
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              Machine Learning
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              Deep Learning
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              NLP
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              Computer Vision
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              LLMs
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              Prompt Engineering
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              BERT
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              Whisper
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              WavLM
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              Flask
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              FastAPI
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              React
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              Git
            </span>

            <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-sm hover:bg-purple-100 hover:border-purple-300 transition-all duration-300">
              GitHub
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
