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
  {
    title: { id: "Bahasa Pemrograman", en: "Programming Languages" },
    icon: "braces",
    accent: "from-indigo-500 to-blue-500",
    items: [
      { name: "Python", description: { id: "Bahasa utama untuk AI, backend, dan automation.", en: "Primary language for AI, backend, and automation." }, logo: "https://cdn.simpleicons.org/python" },
      { name: "PHP", description: { id: "Backend web klasik, dipakai di sistem pemesanan & akademik.", en: "Classic web backend, used in ordering & academic systems." }, logo: "https://cdn.simpleicons.org/php" },
      { name: "JavaScript", description: { id: "Bahasa wajib untuk web interaktif di sisi klien.", en: "Essential language for interactive client-side web." }, logo: "https://cdn.simpleicons.org/javascript" },
      { name: "TypeScript", description: { id: "JavaScript dengan tipe data — lebih aman saat coding.", en: "JavaScript with types — safer while coding." }, logo: "https://cdn.simpleicons.org/typescript" },
      { name: "Kotlin", description: { id: "Bahasa resmi untuk Android modern.", en: "Official language for modern Android." }, logo: "https://cdn.simpleicons.org/kotlin" },
      { name: "Java", description: { id: "Dasar OOP, dipakai di kuliah dan pengembangan Android.", en: "OOP fundamentals, used in courses and Android development." }, logo: "https://cdn.simpleicons.org/openjdk" },
      { name: "SQL", description: { id: "Query database relasional untuk ambil & olah data.", en: "Relational database queries to fetch and process data." } },
    ],
  },
  {
    title: { id: "Frontend", en: "Frontend" },
    icon: "layout",
    accent: "from-sky-500 to-cyan-500",
    items: [
      { name: "Next.js", description: { id: "Framework React untuk aplikasi web production-ready (SSR/SSG).", en: "React framework for production-ready web apps (SSR/SSG)." }, logo: "https://cdn.simpleicons.org/nextdotjs" },
      { name: "React", description: { id: "Library UI berbasis komponen untuk web modern.", en: "Component-based UI library for modern web." }, logo: "https://cdn.simpleicons.org/react" },
      { name: "Vite", description: { id: "Build tool super cepat untuk project React.", en: "Blazing-fast build tool for React projects." }, logo: "https://cdn.simpleicons.org/vite" },
      { name: "Bootstrap 5", description: { id: "Framework CSS praktis untuk layout responsif.", en: "Practical CSS framework for responsive layouts." }, logo: "https://cdn.simpleicons.org/bootstrap" },
      { name: "Tailwind CSS", description: { id: "Utility-first CSS, styling cepat tanpa file CSS terpisah.", en: "Utility-first CSS, quick styling without separate CSS files." }, logo: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Chart.js", description: { id: "Library grafik untuk dashboard dan analitik.", en: "Charting library for dashboards and analytics." }, logo: "https://cdn.simpleicons.org/chartdotjs" },
      { name: "Recharts", description: { id: "Grafik React untuk visualisasi data statistik.", en: "React charts for statistical data visualization." } },
      { name: "AJAX / Fetch API", description: { id: "Ambil data dari server tanpa reload halaman.", en: "Fetch data from server without page reload." } },
    ],
  },
  {
    title: { id: "Backend & API", en: "Backend & API" },
    icon: "server",
    accent: "from-emerald-500 to-teal-500",
    items: [
      { name: "Node.js", description: { id: "Runtime JavaScript untuk backend yang cepat dan scalable.", en: "JavaScript runtime for fast and scalable backends." }, logo: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express.js", description: { id: "Framework minimalis Node.js untuk membuat REST API.", en: "Minimalist Node.js framework for building REST APIs." }, logo: "https://cdn.simpleicons.org/express" },
      { name: "FastAPI", description: { id: "Framework Python modern untuk REST API cepat.", en: "Modern Python framework for fast REST APIs." }, logo: "https://cdn.simpleicons.org/fastapi" },
      { name: "Laravel", description: { id: "Framework PHP dengan struktur MVC lengkap.", en: "PHP framework with a complete MVC structure." }, logo: "https://cdn.simpleicons.org/laravel" },
      { name: "SQLAlchemy", description: { id: "ORM Python untuk akses database yang rapi.", en: "Python ORM for clean database access." }, logo: "https://cdn.simpleicons.org/sqlalchemy" },
      { name: "Postman", description: { id: "Pengujian dan dokumentasi REST API.", en: "REST API testing and documentation." }, logo: "https://cdn.simpleicons.org/postman" },
      { name: "REST API", description: { id: "Standar komunikasi antar aplikasi via HTTP.", en: "Standard communication between applications via HTTP." } },
    ],
  },
  {
    title: { id: "AI & Computer Vision", en: "AI & Computer Vision" },
    icon: "brain",
    accent: "from-violet-500 to-purple-500",
    items: [
      { name: "Computer Vision", description: { id: "Bidang AI untuk memahami gambar & video.", en: "AI field for understanding images & videos." } },
      { name: "YOLO (v8/v11/26)", description: { id: "Model deteksi objek real-time yang cepat.", en: "Fast real-time object detection models." } },
      { name: "PyTorch", description: { id: "Framework deep learning untuk training model.", en: "Deep learning framework for training models." }, logo: "https://cdn.simpleicons.org/pytorch" },
      { name: "OpenCV", description: { id: "Library pengolahan gambar & video.", en: "Image & video processing library." }, logo: "https://cdn.simpleicons.org/opencv" },
      { name: "TensorFlow Lite", description: { id: "Versi ringan TF untuk mobile / embedded.", en: "Lightweight TF for mobile / embedded devices." }, logo: "https://cdn.simpleicons.org/tensorflow" },
      { name: "Gemini API", description: { id: "API AI Google untuk generate teks otomatis.", en: "Google AI API for automatic text generation." }, logo: "https://cdn.simpleicons.org/googlegemini" },
    ],
  },
  {
    title: { id: "Mobile Development", en: "Mobile Development" },
    icon: "smartphone",
    accent: "from-amber-500 to-orange-500",
    items: [
      { name: "Android (Kotlin)", description: { id: "Pengembangan aplikasi native Android.", en: "Native Android application development." }, logo: "https://cdn.simpleicons.org/android" },
      { name: "Flutter", description: { id: "Framework cross-platform dari Google.", en: "Google's cross-platform framework." }, logo: "https://cdn.simpleicons.org/flutter" },
      { name: "Android Studio", description: { id: "IDE resmi untuk pengembangan Android.", en: "Official IDE for Android development." }, logo: "https://cdn.simpleicons.org/androidstudio" },
    ],
  },
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
  {
    title: { id: "Keamanan Aplikasi", en: "Application Security" },
    icon: "shield",
    accent: "from-slate-600 to-slate-800",
    items: [
      { name: "Authentication", description: { id: "Sistem login & verifikasi identitas pengguna.", en: "Login system & user identity verification." } },
      { name: "RBAC", description: { id: "Role-Based Access Control — hak akses per peran.", en: "Role-Based Access Control — permissions per role." } },
      { name: "CSRF Protection", description: { id: "Proteksi dari serangan form palsu.", en: "Protection against forged form attacks." } },
      { name: "Password Hashing", description: { id: "Enkripsi password sebelum disimpan ke database.", en: "Encrypt passwords before storing them in the database." } },
    ],
  },
  {
    title: { id: "DevOps & Cloud", en: "DevOps & Cloud" },
    icon: "cloud",
    accent: "from-cyan-500 to-blue-600",
    items: [
      { name: "Docker", description: { id: "Kontainerisasi aplikasi agar konsisten di mana saja.", en: "Containerize applications for consistent deployment." }, logo: "https://cdn.simpleicons.org/docker" },
      { name: "Git / GitHub", description: { id: "Version control & kolaborasi kode tim.", en: "Version control & team code collaboration." }, logo: "https://cdn.simpleicons.org/github" },
      { name: "Railway", description: { id: "Platform deploy backend + database cloud.", en: "Backend + cloud database deployment platform." }, logo: "https://cdn.simpleicons.org/railway" },
      { name: "Vercel", description: { id: "Platform deploy frontend Next.js super cepat.", en: "Super-fast Next.js frontend deployment platform." }, logo: "https://cdn.simpleicons.org/vercel" },
      { name: "Cloud Deployment", description: { id: "Deploy aplikasi ke server cloud secara publik.", en: "Deploy applications publicly to cloud servers." } },
    ],
  },
];

export const certifications: { title: LText; year: string; issuer: string }[] = [
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
    issuer: "LSP",
  },
];

export const trainings: { title: LText; year: string; issuer: string }[] = [
  {
    title: { id: "Kursus Programmer", en: "Programmer Course" },
    year: "2025",
    issuer: "Universitas Gunadarma",
  },
  {
    title: { id: "Golang Tingkat Menengah", en: "Intermediate Golang" },
    year: "2025",
    issuer: "Universitas Gunadarma",
  },
  {
    title: { id: "Oracle Tingkat Menengah", en: "Intermediate Oracle" },
    year: "2025",
    issuer: "Universitas Gunadarma",
  },
  {
    title: { id: "Perancangan Pengembangan Aplikasi", en: "Application Development Design" },
    year: "2024",
    issuer: "Universitas Gunadarma",
  },
  {
    title: { id: "Instalasi Wireless LAN", en: "Wireless LAN Installation" },
    year: "2024",
    issuer: "Universitas Gunadarma",
  },
];