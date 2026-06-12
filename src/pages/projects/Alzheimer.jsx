import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Alzheimer() {
  return (
    <section className="min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* HERO */}

        <div className="mb-24">
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            Deep Learning • Healthcare AI • Speech AI
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-6 leading-tight">
            Alzheimer's Disease Detection
            <span className="text-purple-600">.</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl leading-relaxed mb-8">
            AI-powered multimodal Alzheimer's detection system using speech,
            language and clinical biomarkers for early cognitive health
            screening.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <div className="bg-white border rounded-2xl px-6 py-4">
              <p className="text-3xl font-bold">89.3%</p>
              <p className="text-gray-500 text-sm">Validation Accuracy</p>
            </div>

            <div className="bg-white border rounded-2xl px-6 py-4">
              <p className="text-3xl font-bold">0.87</p>
              <p className="text-gray-500 text-sm">ROC-AUC</p>
            </div>

            <div className="bg-white border rounded-2xl px-6 py-4">
              <p className="text-3xl font-bold">3</p>
              <p className="text-gray-500 text-sm">Modalities Combined</p>
            </div>
          </div>

          <a
            href="https://github.com/VikasPatil64/alzheimers-speech-detection"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:scale-105 transition-all"
          >
            <FaGithub />
            View Source Code
          </a>
        </div>

        {/* PROBLEM */}

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-6">
            The Problem<span className="text-purple-600">.</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Early Alzheimer's diagnosis often requires extensive clinical
            evaluation, cognitive testing and specialist intervention. However,
            speech and language impairments are among the earliest observable
            indicators of cognitive decline.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mt-5">
            The challenge is that speech, language and clinical information
            exist in different formats and cannot be directly combined. This
            project explores how multimodal deep learning can fuse these
            complementary signals to support early dementia screening.
          </p>
        </div>

        {/* SOLUTION */}

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8">
            Solution<span className="text-purple-600">.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                Speech Intelligence
              </h3>
              <p className="text-gray-600">
                Whisper transcribes speech recordings while WavLM extracts rich
                acoustic representations from raw audio.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                Language Understanding
              </h3>
              <p className="text-gray-600">
                DistilBERT generates contextual language embeddings from
                transcribed speech for linguistic analysis.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                Clinical Integration
              </h3>
              <p className="text-gray-600">
                Age, MMSE score, education level and gender are incorporated as
                structured clinical indicators.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">Multimodal Fusion</h3>
              <p className="text-gray-600">
                A co-attention architecture learns interactions between speech,
                language and clinical representations before classification.
              </p>
            </div>
          </div>
        </div>

        {/* ARCHITECTURE */}

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8">
            System Architecture<span className="text-purple-600">.</span>
          </h2>

          <div className="grid md:grid-cols-5 gap-4">
            <div className="border rounded-2xl p-5 text-center">
              Audio Input
            </div>

            <div className="border rounded-2xl p-5 text-center">Whisper</div>

            <div className="border rounded-2xl p-5 text-center">
              WavLM + DistilBERT
            </div>

            <div className="border rounded-2xl p-5 text-center">
              Co-Attention Fusion
            </div>

            <div className="border rounded-2xl p-5 text-center">
              Risk Prediction
            </div>
          </div>
        </div>

        {/* ENGINEERING DECISIONS */}

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8">
            Engineering Decisions<span className="text-purple-600">.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">Why WavLM?</h3>

              <p className="text-gray-600">
                Captures richer speech representations than traditional
                handcrafted acoustic features.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">Why DistilBERT?</h3>

              <p className="text-gray-600">
                Provides contextual language understanding with lower inference
                cost than larger transformer models.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-xl mb-3">Why Co-Attention?</h3>

              <p className="text-gray-600">
                Allows speech and language modalities to learn cross-modal
                relationships before final classification.
              </p>
            </div>
          </div>
        </div>

        {/* CHALLENGES */}

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8">
            Challenges Solved<span className="text-purple-600">.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-6">
              Multimodal Fusion Across Speech, Text and Clinical Data
            </div>

            <div className="border rounded-2xl p-6">
              Handling Missing Clinical Information
            </div>

            <div className="border rounded-2xl p-6">
              Processing Long Audio Recordings
            </div>

            <div className="border rounded-2xl p-6">
              Speech Quality Variability and Noise
            </div>
          </div>
        </div>

        {/* TECH STACK */}

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-8">
            Technologies Used<span className="text-purple-600">.</span>
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "PyTorch",
              "WavLM",
              "DistilBERT",
              "Whisper",
              "Flask",
              "Pandas",
              "NumPy",
              "Scikit-Learn",
              "Healthcare AI",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* IMPACT */}

        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-6">
            Impact<span className="text-purple-600">.</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            This project demonstrates how speech biomarkers, NLP and deep
            learning can be combined to create non-invasive healthcare screening
            tools. By integrating speech acoustics, linguistic patterns and
            clinical indicators, the system provides a practical framework for
            AI-assisted dementia screening and cognitive health assessment.
          </p>
        </div>

        {/* FUTURE SCOPE */}

        <div>
          <h2 className="text-4xl font-bold mb-8">
            Future Scope<span className="text-purple-600">.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-6">
              Explainable AI visualizations to interpret model predictions.
            </div>

            <div className="border rounded-2xl p-6">
              Multi-language support for broader accessibility.
            </div>

            <div className="border rounded-2xl p-6">
              Cloud-native deployment with monitoring and analytics.
            </div>

            <div className="border rounded-2xl p-6">
              Patient history tracking and longitudinal cognitive analysis.
            </div>

            <div className="border rounded-2xl p-6">
              Integration with healthcare systems for clinical screening
              workflows.
            </div>
          </div>
        </div>
        {/* PROJECT CTA */}

        <div className="mt-24 border rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-semibold mb-8">
            Interested in this project?
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/VikasPatil64/alzheimers-speech-detection"
              target="_blank"
              rel="noreferrer"
              className="
                px-6 py-3
                border
                rounded-xl
                hover:bg-gray-50
                transition
                "
            >
              View Source Code
            </a>
          </div>
        </div>
        {/* NAVIGATION */}

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div></div>

          {/* NAVIGATION */}

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <Link
              to="/"
              className="
                border
                rounded-2xl
                p-8
                hover:border-purple-400
                transition
                "
            >
              <p className="text-sm text-gray-500 mb-2">← PREVIOUS</p>

              <h4 className="text-xl font-semibold">Portfolio Website</h4>
            </Link>

            <Link
              to="/projects/multi-agent-research"
              className="
              border
              rounded-2xl
              p-8
              hover:border-purple-400
              transition
              text-right
              "
            >
              <p className="text-sm text-gray-500 mb-2">NEXT →</p>

              <h4 className="text-xl font-semibold">
                Multi-Agent Research System
              </h4>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/#projects"
              className="
              text-gray-600
              hover:text-purple-600
              "
            >
              ← Back To All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Alzheimer;
