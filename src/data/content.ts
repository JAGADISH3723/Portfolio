export const PROFILE = {
  name: "Jagadish Samudrala",
  nameUpper: "JAGADISH SAMUDRALA",
  headline: "Software Engineer | AI/ML & GenAI Builder",
  tagline:
    "2026 B.Tech graduate from NIT Warangal focused on building scalable software systems, AI-powered applications, and data-driven solutions.",
  status: "Open to Software Engineering & AI/ML Opportunities",
  email: "jagadish0828@gmail.com",
  phone: "+91-6305530851",
  phoneHref: "+916305530851",
  linkedin: "https://linkedin.com/in/jagadish-samudrala-48407b219",
  github: "https://github.com/JAGADISH3723",
  githubRepos: "https://github.com/JAGADISH3723?tab=repositories",
  leetcode: "https://leetcode.com/u/Jagadish3723/",
  codechef: "https://www.codechef.com/users/jagadish_3723",
  codeforces: "https://codeforces.com/profile/jaggu_73",
};

export const ROTATING_KEYWORDS = [
  "Software Engineering",
  "AI / GenAI",
  "Full-Stack Development",
  "Data & Analytics",
  "Problem Solving",
];

export const METRICS = [
  { value: 400, suffix: "+", label: "DSA Problems Solved" },
  { value: 2026, suffix: "", label: "NIT Warangal Graduate" },
  { value: 3, suffix: "", label: "Featured Engineering Projects" },
  { label: "AI + Full Stack + Data", labelOnly: true, sub: "Core Areas" },
];

export const SKILL_GROUPS = [
  {
    title: "Programming",
    icon: "code",
    skills: ["Python", "C++", "C#", "JavaScript", "Java"],
  },
  {
    title: "AI / ML & Data",
    icon: "sparkles",
    skills: ["LangChain", "FAISS", "OpenAI API", "RAG", "NumPy", "Pandas"],
  },
  {
    title: "Web Development",
    icon: "layout",
    skills: ["React.js", "Node.js", "Express.js", "HTML5", "CSS3", ".NET"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQL"],
  },
  {
    title: "Core CS",
    icon: "cpu",
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"],
  },
  {
    title: "Developer Tools",
    icon: "wrench",
    skills: ["Git", "Linux", "Postman", "Render", "VS Code", "Agile / Scrum"],
  },
];

export const TECH_BADGES = ["Python", "C++", "React", "Node.js", "SQL", "LangChain", "RAG", "Git"];

export const TIMELINE_ABOUT = [
  { year: "2024", label: "NIT Warangal" },
  { year: "2025", label: "Full-Stack & AI Projects" },
  { year: "2026", label: "Software Engineering / AI Career" },
];

export type Project = {
  id: string;
  title: string;
  type: string;
  category: "software" | "ai" | "data";
  description: string;
  tech: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  learnings: string;
  breakdown: {
    problem: string;
    approach: string;
    technology: string;
    challenge: string;
    solution: string;
    result: string;
  };
};

export const PROJECTS: Project[] = [
  {
    id: "idea-sharing",
    title: "Real-Time Idea Sharing Platform",
    type: "Full-Stack Web Application",
    category: "software",
    description:
      "An end-to-end platform for sharing ideas and interacting through nested discussion threads.",
    tech: ["React.js", "TypeScript", "Context API", "Node.js", "Express.js", "MongoDB", "Git", "Agile"],
    highlights: [
      "Architected a responsive interface using 15+ modular reusable UI components.",
      "Managed complex application state using Context API across multi-layered views and nested comment threads.",
      "Implemented authentication, authorization, route protection, form validation, and REST API integration.",
      "Worked with Git-based Agile development practices.",
    ],
    github: "https://github.com/JAGADISH3723",
    demo: "https://jagadish3723.github.io/ideas-sharing-platform/",
    learnings:
      "This project taught me how to structure a real full-stack application end-to-end — from designing modular components and state management with Context API to building secure authentication flows and REST APIs backed by MongoDB. Working in an Agile/Git workflow helped me think in terms of increments and clean, reviewable commits.",
    breakdown: {
      problem:
        "I wanted to build a complete full-stack product, not just a frontend or a backend. The goal was a shareable platform where users could post ideas and engage through nested discussion threads.",
      approach:
        "I designed a modular React + TypeScript frontend organized into 15+ reusable components, with global state managed through Context API. The backend was a Node.js/Express REST API with MongoDB persistence, exposing CRUD for ideas and threaded comments.",
      technology:
        "React.js, TypeScript, Context API, Node.js, Express.js, MongoDB, Git, and an Agile development workflow.",
      challenge:
        "Managing state across nested comment threads and multiple layered views was genuinely tricky. I also had to piece together authentication, route protection, form validation, and the REST contract so the frontend and backend stayed in sync.",
      solution:
        "I leaned on Context API to centralize shared state, kept components decoupled and reusable, and enforced a consistent REST API shape (with validation and authorization) on the server so both ends consumed the same data model.",
      result:
        "A working, responsive idea-sharing platform with authentication, nested threads, and full REST integration — delivered incrementally through a Git-based Agile process. The project shipped as a static deployment with a live demo link.",
    },
  },
  {
    id: "llm-qa-bot",
    title: "Custom LLM-Powered QA Bot",
    type: "AI / GenAI / RAG",
    category: "ai",
    description:
      "An AI-powered document question-answering system that retrieves relevant context from documents before generating responses.",
    tech: ["Python", "LangChain", "GPT-4", "FAISS", "OpenAI API", "RAG"],
    highlights: [
      "Engineered a document-based QA pipeline using Python and LangChain.",
      "Implemented semantic search using FAISS and OpenAI embeddings.",
      "Designed retrieval workflows to improve context extraction from dense documents.",
      "Debugged retrieval timeouts and evaluated responses across different user intents.",
    ],
    github: "https://github.com/JAGADISH3723/LLM_ChatBot",
    learnings:
      "Building this QA bot gave me hands-on experience with the modern RAG stack — chunking, embeddings, vector search, and grounding LLM answers in retrieved context. I learned that retrieval quality matters as much as the model itself, and that debugging a pipeline means isolating which stage is failing.",
    breakdown: {
      problem:
        "A plain LLM can't reliably answer questions about a specific document. I needed a system that reads a document, finds the relevant content, and answers only based on that retrieved context.",
      approach:
        "I built a Retrieval-Augmented Generation (RAG) pipeline: documents are chunked, embedded, and indexed in a FAISS vector store. At query time, relevant chunks are retrieved and injected as context into the LLM to generate grounded answers.",
      technology:
        "Python, LangChain, GPT-4, OpenAI embeddings, FAISS vector search, and the RAG architecture pattern.",
      challenge:
        "Retrieval would sometimes time out, and responses varied across different user intents. Tuning chunk sizing and embedding retrieval to return genuinely relevant context from dense documents was the hard part.",
      solution:
        "I structured the pipeline so each stage (chunking → embeddings → FAISS search → context → LLM) was isolated and debuggable, adjusted retrieval parameters, and evaluated outputs across intents until answers stayed grounded in the document.",
      result:
        "A working document QA bot that retrieves relevant context via FAISS semantic search before answering — a practical demonstration of the full RAG pipeline in production-shaped code.",
    },
  },
  {
    id: "zepto-data",
    title: "Zepto E-commerce Inventory Data Analysis",
    type: "Data Analytics",
    category: "data",
    description:
      "An analytical project focused on extracting insights from e-commerce inventory data.",
    tech: ["SQL", "PostgreSQL", "Python", "Pandas"],
    highlights: [
      "Analyzed 10K+ inventory rows using SQL queries.",
      "Used Python and Pandas to clean and structure data.",
      "Developed weight-based segmentation and pricing metrics.",
      "Extracted buying and inventory trends for analytical decision-making.",
    ],
    github: "https://github.com/JAGADISH3723",
    learnings:
      "This project sharpened my SQL and Python data-manipulation skills. I learned how to turn a raw 10K-row dataset into clean, queryable structure, design meaningful metrics, and surface trends that support real analytical decisions.",
    breakdown: {
      problem:
        "Raw e-commerce inventory data is messy and hard to reason about. I wanted to extract actual insights about products and buying behaviour from it.",
      approach:
        "I loaded the inventory into PostgreSQL, wrote SQL queries to explore it, then cleaned and restructured the data with Python and Pandas before computing segmentation and pricing metrics.",
      technology:
        "SQL, PostgreSQL, Python, Pandas.",
      challenge:
        "Cleaning noisy rows and deciding how to segment products (by weight, price, and buying behaviour) into metrics that were actually meaningful rather than just aggregated numbers.",
      solution:
        "I used SQL to analyze the raw 10K+ rows, then moved to Pandas to handle cleaning, structuring, and deriving weight-based segmentation and pricing metrics that could feed analysis.",
      result:
        "A clean, structured analytical workflow over 10K+ inventory rows, delivering segmentation and pricing metrics and inventory/buying trends to support data-driven decisions.",
    },
  },
];

export const PROJECT_FILTERS = [
  { id: "all", label: "All" },
  { id: "software", label: "Software Engineering" },
  { id: "ai", label: "AI / GenAI" },
  { id: "data", label: "Data" },
];

export const CP_PLATFORMS = [
  { name: "LeetCode", user: "Jagadish3723", url: PROFILE.leetcode, color: "#ffa116" },
  { name: "CodeChef", user: "jagadish_3723", url: PROFILE.codechef, color: "#8b7cf6" },
  { name: "Codeforces", user: "jaggu_73", url: PROFILE.codeforces, color: "#e0a13a" },
  {
    name: "GeeksforGeeks",
    user: "sj22mmoafc",
    url: "https://www.geeksforgeeks.org/profile/sj22mmoafc?tab=activity",
    color: "#2f8f46",
  },
];

export const DSA_STEPS = ["Understand", "Break Down", "Optimize", "Implement", "Test"];

export const ACHIEVEMENTS = [
  {
    title: "Competitive Programming",
    description:
      "400+ algorithmic problems solved across LeetCode, CodeChef, Codeforces, and other coding platforms.",
    icon: "code",
  },
  {
    title: "JEE Main",
    description: "96 percentile nationwide.",
    icon: "award",
  },
];

export const EDUCATION = [
  {
    school: "National Institute of Technology, Warangal",
    degree: "Bachelor of Technology (B.Tech)",
    detail: "Batch of 2026",
    period: "Oct 2022 – 2026",
  },
  {
    school: "Sai Shivani Junior College",
    degree: "State Board of Intermediate Education",
    detail: "",
    period: "2019 – 2021",
  },
];

export const LEADERSHIP = [
  {
    role: "Captain — Inter-NIT Kabaddi Team",
    org: "NIT Warangal",
    traits: ["Leadership", "Discipline", "Teamwork"],
  },
  {
    role: "Executive Member — Film Club",
    org: "NIT Warangal",
    traits: ["Communication", "Collaboration", "Creativity"],
  },
];

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "problem-solving", label: "Problem Solving" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const SOCIALS = [
  { name: "GitHub", url: PROFILE.github, icon: "github" },
  { name: "LinkedIn", url: PROFILE.linkedin, icon: "linkedin" },
  { name: "LeetCode", url: PROFILE.leetcode, icon: "leetcode" },
  { name: "CodeChef", url: PROFILE.codechef, icon: "codechef" },
  { name: "Codeforces", url: PROFILE.codeforces, icon: "codeforces" },
  { name: "Email", url: `mailto:${PROFILE.email}`, icon: "mail" },
];

export const RAG_STEPS = [
  "Documents",
  "Chunking",
  "Embeddings",
  "FAISS Vector Search",
  "Relevant Context",
  "LLM",
  "Answer",
];

export const IDEAS_ARCH = ["React", "REST API", "Express/Node", "MongoDB"];
