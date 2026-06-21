// ============================================================================
//  CONTENT — same facts as the main site, styled as a neo-noir "dossier".
// ============================================================================
const asset = (p) => `${import.meta.env.BASE_URL}${p}`

export const profile = {
  name: 'Dhruv Samdani',
  classification: 'Software Engineer', // shown as the dossier "classification"
  codename: 'The Engineer',
  specialty: 'Backend • Distributed Systems • Machine Learning',
  coins: 1915, // a "Continental coin" count — nod to a LeetCode rating of 1915
  roles: [
    'Software Engineer',
    'Backend & Distributed Systems',
    'Machine Learning Engineer',
    'Competitive Programmer',
  ],
  tagline:
    'I build precise, high-performance systems — from a C++ NoSQL engine to multilingual NER pipelines and edge-AI products. Calm under pressure, exact in execution.',
  location: 'Prayagraj, Uttar Pradesh, India',
  email: 'dhruv010604@gmail.com',
  altEmail: 'iit2023090@iiita.ac.in',
  phone: '+91 78986 82871',
  photo: asset('images/headshot.jpg'),
  resumeUrl: asset('Dhruv_Samdani_Resume.pdf'),
}

export const socials = {
  github: 'https://github.com/TechIT0104',
  githubAlt: 'https://github.com/CosmikBlunder',
  linkedin: 'https://www.linkedin.com/in/dhruv-samdani-9a2352293/',
  leetcode: 'https://leetcode.com/u/KIReQzEOLP/',
  codechef: 'https://www.codechef.com/users/sam0104',
}

export const about = [
  "I'm a B.Tech Information Technology student at IIIT Allahabad (CGPA 8.64), focused on backend engineering, distributed systems, and applied machine learning.",
  'I like going deep on systems — a NoSQL key-value store in modern C++17, thread-safe REST APIs, and multilingual entity-linking benchmarked across 9 languages.',
  "Outside of building, I'm a competitive programmer (LeetCode Knight, rating 1915) who has led teams at national-level events. This neo-noir theme is a nod to my love for the John Wick films.",
]

export const education = [
  { school: 'IIIT Allahabad', degree: 'B.Tech, Information Technology', detail: 'CGPA 8.64 / 10', period: '2023 – 2027' },
  { school: 'Green Field Public School, Manasa', degree: 'Class XII, CBSE', detail: '96.0%', period: '2020 – 2022' },
]

export const experience = [
  {
    role: 'Full-Stack Development Intern',
    company: 'ADY Infratech',
    period: 'Apr 2026 – Jun 2026',
    points: [
      'Engineered a real-time ERP for 2 mixing plants, raising vehicle-tracking accuracy from 70% to 90%.',
      'Built order & billing modules processing 1,200+ invoices/week 30% faster, cutting billing errors by 25%.',
      "Designed a reconciliation tool that cut manual-entry errors by 30% — now the firm's official workflow.",
    ],
  },
]

export const skills = [
  { group: 'Languages', items: ['C++', 'C', 'Java', 'Python', 'JavaScript / TS', 'SQL'] },
  { group: 'Backend & Systems', items: ['Node.js', 'Express', 'FastAPI', 'Crow (C++)', 'REST APIs', 'Concurrency', 'OOP / LLD'] },
  { group: 'CS Fundamentals', items: ['DSA', 'System Design', 'OS', 'Networks', 'DBMS'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Indexing & Caching'] },
  { group: 'ML & AI', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'Hugging Face', 'NLP'] },
  { group: 'Cloud & DevOps', items: ['AWS (EC2/S3/RDS)', 'Docker', 'Kubernetes', 'Kafka', 'CI/CD', 'Linux'] },
]

// Projects. group: 'featured' | 'more' | 'hackathon'. accent: 'gold' | 'teal' | 'crimson'.
export const projects = [
  {
    title: 'RetailSense',
    subtitle: 'Privacy-First Vision Retail CRM',
    stack: ['Python', 'PyTorch', 'YOLOv8', 'DeepSORT', 'FastAPI', 'AWS'],
    points: [
      'Cloth-changing person re-ID (body shape & gait, no face recognition) tracks returning customers across cameras — DPDP Act 2023 compliant.',
      'Edge-to-cloud pipeline: YOLOv8 + DeepSORT + a 512-D re-ID gallery on-device, streaming only derived events to Kafka + TimescaleDB (~99% less bandwidth).',
      'On-device Phi-3 Mini SLM answers owner queries in Hindi/Hinglish, drives churn alerts, and supports machine-unlearning ("right to be forgotten").',
    ],
    repo: 'https://github.com/TechIT0104/retailsense',
    accent: 'crimson',
    group: 'featured',
  },
  {
    title: 'Historical Entity Linking',
    subtitle: 'Multilingual NER & Disambiguation',
    stack: ['Python', 'PyTorch', 'XGBoost', 'BLINK', 'mReFinED'],
    points: [
      'Reproduced BLINK & mReFinED baselines, benchmarking multilingual linking on MEWSLI-9 across 9 languages.',
      'Built MHEL-LLaMo, an XGBoost confidence router reaching 82% routing accuracy (+12% over baseline).',
      'Systematic FP/FN error analysis and offset-validation fixes improved single-GPU reproducibility.',
    ],
    repo: 'https://github.com/TechIT0104/Final-Entity-Linking',
    accent: 'teal',
    group: 'featured',
  },
  {
    title: 'DynamicKV',
    subtitle: 'Scalable NoSQL Key-Value Store',
    stack: ['C++17', 'Crow', 'Robin-Hood Hashing', 'Bloom Filters'],
    points: [
      'NoSQL engine in modern C++17 with a custom Robin-Hood hashing HashMap for fast in-memory lookups.',
      'Segmented on-disk storage with per-segment Bloom filters and tunable sizing.',
      'Thread-safe REST API over HTTP via Crow for concurrent reads and writes.',
    ],
    repo: 'https://github.com/CosmikBlunder/DynamicKV',
    accent: 'gold',
    group: 'featured',
  },
  {
    title: 'NyayaSetu',
    subtitle: 'AI-Powered Legal Intelligence',
    stack: ['Next.js', 'TypeScript', 'Gemini 2.0 Flash', 'Speech-to-Text'],
    points: [
      'Legal-research assistant surfacing the 5 most relevant Supreme Court precedents per query.',
      'Judgment predictor + NyayKaksh: real-time English→Hindi speech translation with per-sentence AI analysis.',
      'Google Gemini 2.0 Flash for case analysis & follow-up Q&A behind a Next.js + TypeScript UI.',
    ],
    repo: 'https://github.com/TechIT0104/Masterblasters',
    accent: 'teal',
    group: 'featured',
  },
  {
    title: 'InvestorPulse / FinTeQ',
    subtitle: 'Stock Recommendation Platform',
    stack: ['Next.js 14', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    points: [
      'Full-stack fintech platform serving explainable, risk-labelled stock recommendations.',
      'FastAPI + Yahoo Finance + a Next.js dashboard, containerised with Docker, Postgres, Redis.',
      '5-level risk model with SHAP explanations, deployed to Vercel & Render.',
    ],
    repo: 'https://github.com/CosmikBlunder/FinTeQ',
    accent: 'gold',
    group: 'more',
  },
  {
    title: 'EmotiSense',
    subtitle: 'Multi-Modal Emotion Recognition',
    stack: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'Raspberry Pi'],
    points: [
      'Real-time emotion recognition fusing facial expressions, ECG & GSR — 96.45% accuracy across 4 states.',
      '10 biosignal features, Random Forest (96.39%), 10–15 FPS inference, <115 ms latency.',
      'Adaptive Raspberry Pi 4 layer auto-detects sensors (multi-modal ↔ FER-only).',
    ],
    repo: 'https://github.com/TechIT0104/EmotiSense',
    accent: 'crimson',
    group: 'more',
  },
  {
    title: 'Dark-Web Marketplace Fraud Detection',
    subtitle: 'Economics Term Paper — Fraud Analytics',
    stack: ['Python', 'scikit-learn', 'node2vec', 'Streamlit'],
    points: [
      'Multi-modal fraud detection across 109,598 Agora dark-web listings (104 categories, 2,815 vendors).',
      'Fused NLP (TF-IDF + LogReg, 98.9% AUC), node2vec graph embeddings & Isolation Forest over 1,099 features.',
      'Blockchain enrichment (BlockCypher) + weighted ensemble → explainable alerts at 78% precision.',
    ],
    repo: 'https://github.com/TechIT0104/ECO_TERM_PAPER',
    accent: 'teal',
    group: 'more',
  },
  {
    title: 'Advait',
    subtitle: 'One Nation, One Platform',
    stack: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Cheerio'],
    points: [
      'Full-stack civic platform (Node/Express/MongoDB/EJS) with KYC signup and bcrypt + session auth.',
      'Recommendation engine using Axios + Cheerio to scrape services.india.gov.in and match users to schemes.',
      'NEKI — a gamified module rewarding good deeds with points and a live leaderboard.',
    ],
    repo: 'https://github.com/CosmikBlunder/Advait',
    accent: 'gold',
    group: 'more',
  },
  {
    title: 'Amazon ML Challenge 2025',
    subtitle: 'Smart Product Pricing — Top ~150',
    stack: ['Python', 'Pandas', 'NLP', 'Computer Vision', 'Multimodal ML'],
    points: [
      'Predicted e-commerce prices from catalog text + product images — a multimodal regression task.',
      'Pipeline fusing NLP text features with image features over 75K listings, optimised for SMAPE.',
      'Finished top ~150 on the national leaderboard.',
    ],
    repo: 'https://github.com/TechIT0104/MLChallange',
    accent: 'gold',
    group: 'hackathon',
  },
  {
    title: 'GPAI',
    subtitle: 'Citation-Grounded STEM Tutor (RAG)',
    stack: ['Python', 'Streamlit', 'RAG', 'ChromaDB', 'Ollama'],
    points: [
      'GPAI Case-Based Hackathon: a tutor answering strictly from a student\'s own uploaded material with exact [doc | page | chunk] citations.',
      'RAG pipeline — PyMuPDF/Tesseract ingestion → sentence-transformer embeddings in ChromaDB → SymPy-verified answers.',
      'Runs fully private on local Ollama (OpenAI/Gemini optional); exports to PDF/PPT.',
    ],
    repo: 'https://github.com/TechIT0104/GPAI',
    accent: 'teal',
    group: 'hackathon',
  },
]

export const achievements = [
  {
    group: 'Competitive Programming',
    items: [
      'LeetCode Knight — rating 1915; 237 / 28,244 in Weekly Contest 455 (top 1%).',
      'CodeChef — 3-star, rating 1681; 618 / 18,797 in Starters 193D.',
      '700+ problems solved across LeetCode, CodeChef and other platforms.',
    ],
  },
  {
    group: 'Hackathons',
    items: [
      'Amazon ML Challenge 2025 — top ~150 nationally.',
      'Tata AI Challenge 2026 — ranked 134.',
      'Flipkart GRID 7.0 — semifinalist.',
      'GPAI Case-Based Hackathon — citation-grounded RAG tutor.',
    ],
  },
  {
    group: 'Academics',
    items: [
      'JEE Mains — AIR 4,071 (top 0.5%).',
      'JEE Advanced — AIR 8,418.',
      'Class XII (CBSE) — 96%.',
      'Class X (CBSE) — 96.4%.',
    ],
  },
  {
    group: 'Leadership',
    items: [
      'Led the team across multiple hackathons — Tata AI Challenge, Flipkart GRID, Amazon ML Challenge & GPAI.',
      "Overall Coordinator, Effervescence'25 — IIIT-A's annual cultural fest.",
      'Organizing team, TEDxIIITA 2023.',
      'Represented Madhya Pradesh in the Know Your Country competition by Gandhi Global Family.',
    ],
  },
  {
    group: 'Communication & Public Speaking',
    items: [
      'Winner, IIIT-A Model UN 2023.',
      "3× state-level winner, 'Bharat Ko Jano' national quiz.",
      'Performed original poetry before an audience of 3,000+.',
      'Write Hindi poetry.',
    ],
  },
  {
    group: 'Sports',
    items: [
      'State-level volleyball player (Madhya Pradesh).',
      'Division-level chess player (Ujjain Division).',
      'Division-level table tennis player.',
    ],
  },
]

export const stats = [
  { value: '8.64', label: 'CGPA / 10' },
  { value: '1915', label: 'LeetCode' },
  { value: 'Top 1%', label: 'Contest 455' },
  { value: '10+', label: 'Projects' },
]

export const gallery = [
  { src: asset('images/gallery/g1.jpg'), caption: 'Speaking at Model UN' },
  { src: asset('images/gallery/g2.jpg'), caption: 'Model UN — in committee' },
  { src: asset('images/gallery/g3.jpg'), caption: 'On the main stage' },
  { src: asset('images/gallery/g4.jpg'), caption: "Hosting Effervescence'25" },
  { src: asset('images/gallery/g5.jpg'), caption: 'Anchoring an event' },
  { src: asset('images/gallery/g6.jpg'), caption: 'Performing on stage' },
  { src: asset('images/gallery/g7.jpg'), caption: 'Addressing the audience' },
  { src: asset('images/gallery/g8.jpg'), caption: 'A crowd of thousands' },
]
