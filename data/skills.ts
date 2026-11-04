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
      { name: "Three.js", description: { id: "Library JavaScript untuk membuat dan menampilkan grafik 3D interaktif di web.", en: "JavaScript library for creating and displaying interactive 3D graphics on the web." }, logo: "https://cdn.simpleicons.org/threedotjs" },
      { name: "JavaScript", description: { id: "Bahasa pemrograman inti untuk membuat web menjadi interaktif.", en: "Core programming language to make the web interactive." }, logo: "https://cdn.simpleicons.org/javascript" },
      { name: "Vanilla JS", description: { id: "JavaScript murni tanpa framework, fundamental yang kuat.", en: "Pure JavaScript without frameworks, a strong fundamental." } },
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
      { name: "Golang", description: { id: "Bahasa buatan Google yang cepat, efisien, dan sangat cocok untuk backend/microservices.", en: "Google's language that is fast, efficient, and highly suited for backend/microservices." }, logo: "https://cdn.simpleicons.org/go" },
      { name: "Java", description: { id: "Bahasa pemrograman OOP yang kuat untuk aplikasi skala besar.", en: "Powerful OOP language for large-scale applications." }, logo: "https://cdn.simpleicons.org/java" },
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
  // 6. MOBILE DEVELOPMENT
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

export type Certification = {
  title: LText;
  year: string;
  issuer: string;
  fileUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: { id: "Programmer", en: "Programmer" },
    year: "2026",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP) / LSP",
    fileUrl: "/files/sertifikat-bnsp.pdf", 
  },
  {
    title: {
      id: "Uji Kompetensi Keahlian — Teknik Komputer dan Jaringan",
      en: "Competency Assessment — Computer & Network Engineering",
    },
    year: "2022",
    issuer: "SMK Telekomunikasi Telesandi",
    fileUrl: "/files/sertifikat-kompetensi-smk.pdf", 
  },
  {
    title: {
      id: "Certificate of Expertise Level II — Kompetensi Teknik Komputer dan Jaringan",
      en: "Certificate of Expertise Level II — Computer & Network Engineering",
    },
    year: "2021",
    issuer: "SMK Telekomunikasi Telesandi",
    fileUrl: "/files/sertifikat-level-2.pdf",
  },
];

export type Training = {
  title: string;
  year: string;
  issuer: string;
  fileUrl?: string;
};

export const trainings: Training[] = [
  { 
    title: "Intro to Software Engineering", 
    year: "2026", 
    issuer: "Coding Camp (RevoU)",
    fileUrl: "/files/sertifikat-revou.pdf" 
  },
  { 
    title: "Application Implementation and Development", 
    year: "25 May 2026", 
    issuer: "Universitas Gunadarma",
    fileUrl: "/files/application-implementation.pdf"
  },
  { 
    title: "Application Development Design", 
    year: "22 September 2025", 
    issuer: "Universitas Gunadarma",
    fileUrl: "/files/application-design.pdf" 
  },
  { 
    title: "GO-LANG FOR INTERMEDIATE", 
    year: "18 August 2025", 
    issuer: "Universitas Gunadarma",
    fileUrl: "/files/golang-intermediate.pdf" 
  },
  { 
    title: "ORACLE FOR INTERMEDIATE", 
    year: "24 February 2025", 
    issuer: "Universitas Gunadarma",
    fileUrl: "/files/oracle-intermediate.pdf" 
  },
  { 
    title: "Introduction to wireless LAN installation", 
    year: "04 July 2024", 
    issuer: "Universitas Gunadarma",
    fileUrl: "/files/wireless-lan.pdf" 
  },
  { 
    title: "FUNDAMENTAL WEB PROGRAMMING", 
    year: "21 August 2023", 
    issuer: "Universitas Gunadarma",
    fileUrl: "/files/web-programming.pdf" 
  },
  { 
    title: "FUNDAMENTAL DBMS", 
    year: "20 February 2023", 
    issuer: "Universitas Gunadarma",
    fileUrl: "/files/fundamental-dbms.pdf" 
  },
];