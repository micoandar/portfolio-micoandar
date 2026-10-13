export type SkillGroup = {
  title: string;
  icon: string;
  accent: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Bahasa Pemrograman",
    icon: "braces",
    accent: "from-indigo-500 to-blue-500",
    items: ["Python", "PHP", "JavaScript", "TypeScript", "Kotlin", "Java", "SQL"],
  },
  {
    title: "Frontend",
    icon: "layout",
    accent: "from-sky-500 to-cyan-500",
    items: ["React", "Vite", "Bootstrap 5", "Tailwind CSS", "Chart.js", "Recharts", "AJAX / Fetch API"],
  },
  {
    title: "Backend & API",
    icon: "server",
    accent: "from-emerald-500 to-teal-500",
    items: ["FastAPI", "Laravel", "SQLAlchemy", "REST API"],
  },
  {
    title: "AI & Computer Vision",
    icon: "brain",
    accent: "from-violet-500 to-purple-500",
    items: ["Computer Vision", "YOLO (v8/v11/26)", "PyTorch", "OpenCV", "TensorFlow Lite", "Gemini API"],
  },
  {
    title: "Mobile Development",
    icon: "smartphone",
    accent: "from-amber-500 to-orange-500",
    items: ["Android (Kotlin)", "Flutter", "Android Studio"],
  },
  {
    title: "Database",
    icon: "database",
    accent: "from-rose-500 to-pink-500",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase Firestore"],
  },
  {
    title: "Keamanan Aplikasi",
    icon: "shield",
    accent: "from-slate-600 to-slate-800",
    items: ["Authentication", "RBAC", "CSRF Protection", "Password Hashing"],
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    accent: "from-cyan-500 to-blue-600",
    items: ["Docker", "Git / GitHub", "Railway", "Vercel", "Cloud Deployment"],
  },
];

export const certifications = [
  { title: "Programmer", year: "2026", issuer: "Badan Nasional Sertifikasi Profesi (BNSP) / LSP" },
  { title: "Uji Kompetensi Keahlian — Teknik Komputer dan Jaringan", year: "2022", issuer: "SMK Telekomunikasi Telesandi" },
  { title: "Certificate of Expertise Level II — Kompetensi Teknik Komputer dan Jaringan", year: "2021", issuer: "LSP" },
];

export const trainings = [
  { title: "Kursus Programmer", year: "2025", issuer: "Universitas Gunadarma" },
  { title: "Golang Tingkat Menengah", year: "2025", issuer: "Universitas Gunadarma" },
  { title: "Oracle Tingkat Menengah", year: "2025", issuer: "Universitas Gunadarma" },
  { title: "Perancangan Pengembangan Aplikasi", year: "2024", issuer: "Universitas Gunadarma" },
  { title: "Instalasi Wireless LAN", year: "2024", issuer: "Universitas Gunadarma" },
];

export const seminars = [
  {
    title: "Simposium Nasional",
    year: "2025",
    issuer: "Universitas Gunadarma",
    topic: "Synergy of University and Industry Collaboration: Software and Hardware for Artificial Intelligence",
  },
];