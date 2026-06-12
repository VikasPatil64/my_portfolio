export const projects = [
  {
    id: "portfolio",
    title: "My Portfolio Website",
    slug: "portfolio",
    category: "Web Development",
    shortDesc: "Personal developer portfolio inspired by Tushar's structure, built with React, Tailwind, and Framer Motion.",
    description:
      "A recruiter-friendly developer portfolio with animated sections, project cards, coding profiles, education details, and a contact form.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "EmailJS", "Vite"],
    githubUrl: "https://github.com/VikasPatil64/my_portfolio",
    liveDemoUrl: null,
    featured: true,
    metrics: ["Responsive UI", "Single-page flow", "Dynamic detail routing"],
    features: [
      "Tushar-inspired section structure without Experience, Achievements, or POR.",
      "Clean data-driven project cards and detail pages.",
      "Contact form prepared for EmailJS deployment.",
    ],
    architecture: [
      "React Router handles the home route and dynamic project detail route.",
      "Portfolio content is centralized in src/data for easier maintenance.",
      "Reusable section, card, and layout components keep the UI consistent.",
    ],
    future: ["Add final resume content.", "Add project screenshots.", "Deploy and connect EmailJS keys."],
  },
  {
    id: "alzheimers",
    title: "Speech-based Alzheimer's Disease Detection",
    slug: "alzheimers-detection",
    category: "AI / Healthcare",
    shortDesc: "Multimodal deep learning system for Alzheimer's risk detection from speech, text, and clinical signals.",
    description:
      "A healthcare AI project exploring how speech, language, and clinical signals can help screen for cognitive decline using a co-attention fusion network.",
    techStack: ["Python", "PyTorch", "BERT", "WavLM", "Co-attention", "Librosa", "Flask", "Whisper"],
    githubUrl: "https://github.com/VikasPatil64/alzheimers-speech-detection",
    liveDemoUrl: null,
    featured: true,
    metrics: ["89.3% accuracy", "0.87 ROC-AUC", "83.4% 5-fold CV", "3 Modalities Combined"],
    features: [
      "Fused WavLM (512-d), BERT (768-d) & 4 clinical features using co-attention.",
      "Designed co-attention network with 2 transformer blocks and 5.7M parameters.",
      "Built Flask web app with Whisper transcription, extracting disfluency biomarkers (pause count, filler rate, pitch variability) for real-time predictions.",
    ],
    architecture: [
      "Audio input is processed into acoustic features using WavLM.",
      "Transcribed text is converted into language embeddings using DistilBERT.",
      "Model combines modalities before final risk prediction using co-attention.",
    ],
    future: ["Add a public demo.", "Improve explainability.", "Add clinical validation notes."],
    
    // Rich details for Tushar-style project page
    problem: "Early Alzheimer's diagnosis often requires extensive clinical evaluation, cognitive testing, and specialist intervention. However, speech and language impairments are among the earliest observable indicators of cognitive decline. The challenge is that speech, language, and clinical information exist in different formats and cannot be directly combined. This project explores how multimodal deep learning can fuse these complementary signals to support early dementia screening.",
    solutionDetails: [
      { title: "Speech Intelligence", desc: "Whisper transcribes speech recordings while WavLM extracts rich acoustic representations from raw audio." },
      { title: "Language Understanding", desc: "DistilBERT generates contextual language embeddings from transcribed speech for linguistic analysis." },
      { title: "Clinical Integration", desc: "Age, MMSE score, education level, and gender are incorporated as structured clinical indicators." },
      { title: "Multimodal Fusion", desc: "A co-attention architecture learns interactions between speech, language, and clinical representations before classification." }
    ],
    architectureSteps: ["Audio Input", "Whisper", "WavLM + DistilBERT", "Co-Attention Fusion", "Risk Prediction"],
    engineeringDecisions: [
      { title: "Why WavLM?", desc: "Captures richer speech representations than traditional handcrafted acoustic features." },
      { title: "Why DistilBERT?", desc: "Provides contextual language understanding with lower inference cost than larger transformer models." },
      { title: "Why Co-Attention?", desc: "Allows speech and language modalities to learn cross-modal relationships before final classification." }
    ],
    challengesSolved: [
      "Multimodal Fusion Across Speech, Text, and Clinical Data",
      "Handling Missing Clinical Information",
      "Processing Long Audio Recordings",
      "Speech Quality Variability and Noise"
    ],
    impact: "This project demonstrates how speech biomarkers, NLP, and deep learning can be combined to create non-invasive healthcare screening tools. By integrating speech acoustics, linguistic patterns, and clinical indicators, the system provides a practical framework for AI-assisted dementia screening and cognitive health assessment.",
    futureScope: [
      "Explainable AI visualizations to interpret model predictions.",
      "Multi-language support for broader accessibility.",
      "Cloud-native deployment with monitoring and analytics.",
      "Patient history tracking and longitudinal cognitive analysis.",
      "Integration with healthcare systems for clinical screening workflows."
    ]
  },
  {
    id: "multiagent",
    title: "Multi-Agent Research System",
    slug: "multi-agent-system",
    category: "AI Agents",
    shortDesc: "Four AI agents collaborate to search, read, write and critique research.",
    description:
      "An agentic research workflow where specialized agents work together to produce structured research outputs.",
    techStack: ["LangChain", "Gemini API", "Streamlit", "Tavily", "BeautifulSoup"],
    githubUrl: "https://github.com/VikasPatil64/multi-agent-research-system",
    liveDemoUrl: "https://multi-agent-research-system-qdoyjgqgemonvxswd6ejwh.streamlit.app",
    featured: true,
    metrics: ["4 agents", "Research workflow", "Live Streamlit demo"],
    features: [
      "Search agent collects relevant sources.",
      "Reader agent extracts useful information.",
      "Writer and critic agents improve the final response.",
    ],
    architecture: [
      "User prompt enters the Streamlit interface.",
      "Agent chain coordinates research, writing, and critique.",
      "Final output is presented as a structured research summary.",
    ],
    future: ["Add citation quality checks.", "Persist research history.", "Add export to PDF."],
  },
  {
    id: "devinsight",
    title: "DevInsightAI",
    slug: "devinsight-ai",
    category: "Developer Tools",
    shortDesc: "AI-powered GitHub developer analytics platform with scoring and insights.",
    description:
      "A developer profile analyzer that evaluates repositories, activity, and language usage to generate useful portfolio insights.",
    techStack: ["Python", "FastAPI", "GitHub API", "LLM APIs", "HTML/CSS/JS", "Render"],
    githubUrl: "https://github.com/VikasPatil64/DevInsight-AI",
    liveDemoUrl: "https://devinsight-ai-sigma.vercel.app",
    featured: true,
    metrics: ["GitHub analytics", "AI insights", "PDF reports", "6 Analytics Modules"],
    features: [
      "Analyzed GitHub profiles via API (commits, PRs, issues) and built a productivity scoring system.",
      "Integrated LLM APIs (OpenAI) to generate natural language summaries for each developer profile.",
      "Generates activity and language analytics shown on interactive charts.",
    ],
    architecture: [
      "Frontend sends GitHub username to the API.",
      "Backend fetches and processes repository data using Pandas.",
      "Analytics and AI summaries are rendered in dashboard views.",
    ],
    future: ["Improve scoring transparency.", "Add profile comparisons.", "Add authentication."],
    
    // Rich details for Tushar-style project page
    problem: "GitHub profiles contain valuable information about developer activity, repository quality, technology expertise, and project impact. However, manually reviewing repositories, stars, forks, activity history, and language usage is time-consuming and often inconsistent. Developers struggle to understand how recruiters perceive their profiles, while hiring teams spend significant effort evaluating technical portfolios. The absence of structured analytics makes objective developer assessment difficult.",
    solutionDetails: [
      { title: "GitHub Data Collection", desc: "Fetches profile and repository information directly from GitHub REST APIs in real time." },
      { title: "Analytics Engine", desc: "Processes repository data using Pandas to generate activity, popularity, and language analytics." },
      { title: "Developer Scoring", desc: "Calculates a weighted developer score using repository volume, impact metrics, and activity recency." },
      { title: "AI Insight Generation", desc: "Uses large language models to generate strengths, weaknesses, summaries, and improvement recommendations." }
    ],
    architectureSteps: ["User Input", "GitHub API", "Analytics Engine", "Scoring Engine", "AI Insights", "Dashboard"],
    engineeringDecisions: [
      { title: "Why FastAPI?", desc: "Provides high performance, automatic validation, and efficient API development." },
      { title: "Why GitHub REST API?", desc: "Offers real-time access to developer activity and repository metadata." },
      { title: "Why OpenRouter + Gemma?", desc: "Enables flexible LLM integration for professional insight generation and recommendations." }
    ],
    challengesSolved: [
      "Handling GitHub API failures and invalid profile requests.",
      "Maintaining dashboard functionality during AI service failures.",
      "Processing incomplete repository metadata and missing language fields.",
      "Converting raw GitHub data into meaningful developer intelligence.",
      "Building interactive visualizations for analytics exploration."
    ],
    impact: "DevInsight AI transforms raw GitHub data into structured developer intelligence. By combining analytics, weighted scoring algorithms, AI-generated insights, and interactive visualizations, the platform enables developers to evaluate their portfolios while helping recruiters perform faster and more objective technical assessments.",
    futureScope: [
      "Contribution graph and commit frequency analysis.",
      "Pull request and collaboration analytics.",
      "Resume scoring and portfolio optimization module.",
      "PDF report generation for recruiters and candidates.",
      "Historical trend tracking and performance monitoring.",
      "Multi-platform developer analytics and comparison system.",
      "Authentication and personalized dashboards."
    ]
  },
  {
    id: "sentiment",
    title: "YouTube Sentiment Analysis",
    slug: "sentiment-analysis",
    category: "NLP",
    shortDesc: "Multi-platform sentiment analysis for YouTube comments using ML models.",
    description:
      "A natural language processing project for classifying social media sentiment across collected comments and posts.",
    techStack: ["Python", "Flask", "YouTube API", "Scikit-learn", "TF-IDF", "Logistic Regression", "SVM"],
    githubUrl: "https://github.com/VikasPatil64/SocialMedia_Sentiment_Analysis",
    liveDemoUrl: null,
    featured: false,
    metrics: ["NLP pipeline", "YouTube data", "81% classification accuracy"],
    features: [
      "Classified YouTube comments with 81% accuracy using Logistic Regression and SVM with TF-IDF.",
      "Built Flask web app, YouTube API integration, and preprocessing pipeline (lemmatization, stopwords).",
      "Supports analysis workflows for trends and reactions on video comments.",
    ],
    architecture: [
      "YouTube API gathers text comments.",
      "Preprocessing cleans and normalizes text (stopwords removal, lemmatization).",
      "Classifier models generate sentiment ratings.",
    ],
    future: ["Add dashboards.", "Improve multilingual support.", "Deploy a live demo."],
  },
  {
    id: "heart",
    title: "Heart Disease Detection",
    slug: "heart-disease",
    category: "AI / Healthcare",
    shortDesc: "Heart sound classification using CNN-based audio analysis.",
    description:
      "A healthcare AI project that analyzes phonocardiogram audio recordings to detect abnormal heart sound patterns.",
    techStack: ["TensorFlow", "Librosa", "CNN", "Streamlit"],
    githubUrl: "https://github.com/VikasPatil64/heart_disease_detection",
    liveDemoUrl: null,
    featured: false,
    metrics: ["83% accuracy", "Audio classification", "CNN model"],
    features: [
      "Extracts audio features from heart sound recordings using Librosa.",
      "Classifies recordings using a custom Convolutional Neural Network (CNN) model.",
      "Supports screening-oriented experimentation with 83% accuracy.",
    ],
    architecture: [
      "PCG audio is converted into spectrograms and model-ready features.",
      "CNN model learns abnormal sound patterns.",
      "Prediction output summarizes the classification details.",
    ],
    future: ["Add model explainability.", "Create a demo UI.", "Add dataset documentation."],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
