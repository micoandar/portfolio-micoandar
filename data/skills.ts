import type { LText } from "./profile";

export type SkillItem = {
  name: string;
  description: LText;
  logo?: string;
};

export type SkillGroup = {
  title: LText;
  icon: string;
  accent: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  // 1. FRONTEND
  {
    title: { id: "Frontend", en: "Frontend" },
    icon: "layout",
    accent: "from-sky-500 to-cyan-500",
    items: [
      { name: "Next.js", description: { id: "Framework React untuk aplikasi web production-ready (SSR/SSG).", en: "React framework for production-ready web apps (SSR/SSG)." }, logo: "https://cdn.simpleicons.org/nextdotjs" },
      { name: "React", description: { id: "Library UI berbasis komponen untuk web modern.", en: "Component-based UI library for modern web." }, logo: "https://cdn.simpleicons.org/react" },
      { name: "TypeScript", description: { id: "JavaScript dengan tipe data — lebih aman saat coding.", en: "JavaScript with types — safer while coding." }, logo: "https://cdn.simpleicons.org/typescript" },
      { name: "Tailwind CSS", description: { id: "Utility-first CSS, styling cepat tanpa file CSS terpisah.", en: "Utility-first CSS, quick styling without separate CSS files." }, logo: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Vite", description: { id: "Build tool super cepat untuk project React.", en: "Blazing-fast build tool for React projects." }, logo: "https://cdn.simpleicons.org/vite" },
      { name: "Bootstrap 5", description: { id: "Framework CSS praktis untuk layout responsif.", en: "Practical CSS framework for responsive layouts." }, logo: "https://cdn.simpleicons.org/bootstrap" },
    ],
  },
  // 2. BACKEND & API
  {
    title: { id: "Backend & API", en: "Backend & API" },
    icon: "server",
    accent: "from-emerald-500 to-teal-500",
    items: [
      { name: "Node.js", description: { id: "Runtime JavaScript untuk backend yang cepat dan scalable.", en: "JavaScript runtime for fast and scalable backends." }, logo: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express.js", description: { id: "Framework minimalis Node.js untuk membuat REST API.", en: "Minimalist Node.js framework for building REST APIs." }, logo: "https://cdn.simpleicons.org/express" },
      { name: "FastAPI", description: { id: "Framework Python modern untuk REST API cepat.", en: "Modern Python framework for fast REST APIs." }, logo: "https://cdn.simpleicons.org/fastapi" },
      { name: "Laravel", description: { id: "Framework PHP dengan struktur MVC lengkap.", en: "PHP framework with a complete MVC structure." }, logo: "https://cdn.simpleicons.org/laravel" },
      { name: "PHP Native", description: { id: "Backend web klasik tanpa framework, sangat ringan.", en: "Classic web backend without a framework, very lightweight." }, logo: "https://cdn.simpleicons.org/php" },
      { name: "Postman", description: { id: "Pengujian dan dokumentasi REST API.", en: "REST API testing and documentation." }, logo: "https://cdn.simpleicons.org/postman" },
    ],
  },
  // 3. DATABASE
  {
    title: { id: "Database", en: "Database" },
    icon: "database",
    accent: "from-rose-500 to-pink-500",
    items: [
      { name: "MySQL", description: { id: "Database relasional paling umum dan stabil.", en: "Most common and stable relational database." }, logo: "https://cdn.simpleicons.org/mysql" },
      { name: "PostgreSQL", description: { id: "Database relasional dengan fitur lanjutan.", en: "Relational database with advanced features." }, logo: "https://cdn.simpleicons.org/postgresql" },
      { name: "MongoDB", description: { id: "Database NoSQL berbasis dokumen JSON.", en: "NoSQL database based on JSON documents." }, logo: "https://cdn.simpleicons.org/mongodb" },
      { name: "Firebase Firestore", description: { id: "Database cloud real-time dari Google.", en: "Real-time cloud database from Google." }, logo: "https://cdn.simpleicons.org/firebase" },
    ],
  },
  // 4. DEVOPS & CLOUD
  {
    title: { id: "DevOps & Cloud", en: "DevOps & Cloud" },
    icon: "cloud",
    accent: "from-cyan-500 to-blue-600",
    items: [
      { name: "Docker", description: { id: "Kontainerisasi aplikasi agar konsisten di mana saja.", en: "Containerize applications for consistent deployment." }, logo: "https://cdn.simpleicons.org/docker" },
      { name: "Git / GitHub", description: { id: "Version control & kolaborasi kode tim.", en: "Version control & team code collaboration." }, logo: "https://cdn.simpleicons.org/github" },
      { name: "Railway", description: { id: "Platform deploy backend + database cloud.", en: "Backend + cloud database deployment platform." }, logo: "https://cdn.simpleicons.org/railway" },
      { name: "Vercel", description: { id: "Platform deploy frontend Next.js super cepat.", en: "Super-fast Next.js frontend deployment platform." }, logo: "https://cdn.simpleicons.org/vercel" },
    ],
  },
  // 5. AI & COMPUTER VISION
  {
    title: { id: "AI & Computer Vision", en: "AI & Computer Vision" },
    icon: "brain",
    accent: "from-violet-500 to-purple-500",
    items: [
      { name: "Python", description: { id: "Bahasa utama untuk AI, backend, dan automation.", en: "Primary language for AI, backend, and automation." }, logo: "https://cdn.simpleicons.org/python" },
      { name: "YOLO (v8/v11/26)", description: { id: "Model deteksi objek real-time yang cepat.", en: "Fast real-time object detection models." } },
      { name: "PyTorch", description: { id: "Framework deep learning untuk training model.", en: "Deep learning framework for training models." }, logo: "https://cdn.simpleicons.org/pytorch" },
      { name: "TensorFlow Lite", description: { id: "Versi ringan TF untuk mobile / embedded.", en: "Lightweight TF for mobile / embedded devices." }, logo: "https://cdn.simpleicons.org/tensorflow" },
    ],
  },
  // 6. MOBILE DEVELOPMENT (Hanya Kotlin & Flutter)
  {
    title: { id: "Mobile Development", en: "Mobile Development" },
    icon: "smartphone",
    accent: "from-amber-500 to-orange-500",
    items: [
      { name: "Kotlin", description: { id: "Bahasa resmi untuk pengembangan Android modern.", en: "Official language for modern Android development." }, logo: "https://cdn.simpleicons.org/kotlin" },
      { name: "Flutter", description: { id: "Framework cross-platform buatan Google untuk iOS & Android.", en: "Google's cross-platform framework for iOS & Android." }, logo: "https://cdn.simpleicons.org/flutter" },
    ],
  },
];

export const certifications = [
  {
    title: { id: "Programmer", en: "Programmer" },
    year: "2026",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP) / LSP",
  },
  {
    title: {
      id: "Uji Kompetensi Keahlian — Teknik Komputer dan Jaringan",
      en: "Competency Assessment — Computer & Network Engineering",
    },
    year: "2022",
    issuer: "SMK Telekomunikasi Telesandi",
  },
  {
    title: {
      id: "Certificate of Expertise Level II — Kompetensi Teknik Komputer dan Jaringan",
      en: "Certificate of Expertise Level II — Computer & Network Engineering",
    },
    year: "2021",
    issuer: "SMK Telekomunikasi Telesandi",
  },
];

export const trainings = [
  { title: { id: "Kursus Programmer", en: "Programmer Course" }, year: "2025", issuer: "Universitas Gunadarma" },
  { title: { id: "Golang Tingkat Menengah", en: "Intermediate Golang" }, year: "2025", issuer: "Universitas Gunadarma" },
  { title: { id: "Oracle Tingkat Menengah", en: "Intermediate Oracle" }, year: "2025", issuer: "Universitas Gunadarma" },
  { title: { id: "Perancangan Pengembangan Aplikasi", en: "Application Development Design" }, year: "2024", issuer: "Universitas Gunadarma" },
  { title: { id: "Instalasi Wireless LAN", en: "Wireless LAN Installation" }, year: "2024", issuer: "Universitas Gunadarma" },
];