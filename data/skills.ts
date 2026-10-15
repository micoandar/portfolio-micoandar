import type { LText } from "./profile";

export type SkillLevel = "Mahir" | "Menengah" | "Dasar";

export type SkillItem = {
  name: string;              // nama teknologi (sama di semua bahasa)
  description: LText;        // deskripsi bilingual
  level: SkillLevel;
};

export type SkillGroup = {
  title: LText;              // judul grup bilingual
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
      { name: "Python", description: { id: "Bahasa utama untuk AI, backend, dan automation.", en: "Primary language for AI, backend, and automation." }, level: "Mahir" },
      { name: "PHP", description: { id: "Backend web klasik, dipakai di sistem pemesanan & akademik.", en: "Classic web backend, used in ordering & academic systems." }, level: "Mahir" },
      { name: "JavaScript", description: { id: "Bahasa wajib untuk web interaktif di sisi klien.", en: "Essential language for interactive client-side web." }, level: "Mahir" },
      { name: "TypeScript", description: { id: "JavaScript dengan tipe data — lebih aman saat coding.", en: "JavaScript with types — safer while coding." }, level: "Menengah" },
      { name: "Kotlin", description: { id: "Bahasa resmi untuk Android modern.", en: "Official language for modern Android." }, level: "Menengah" },
      { name: "Java", description: { id: "Dasar OOP, dipakai di kuliah dan pengembangan Android.", en: "OOP fundamentals, used in courses and Android development." }, level: "Menengah" },
      { name: "SQL", description: { id: "Query database relasional untuk ambil & olah data.", en: "Relational database queries to fetch and process data." }, level: "Mahir" },
    ],
  },
  {
    title: { id: "Frontend", en: "Frontend" },
    icon: "layout",
    accent: "from-sky-500 to-cyan-500",
    items: [
      { name: "React", description: { id: "Library UI berbasis komponen untuk web modern.", en: "Component-based UI library for modern web." }, level: "Mahir" },
      { name: "Vite", description: { id: "Build tool super cepat untuk project React.", en: "Blazing-fast build tool for React projects." }, level: "Mahir" },
      { name: "Bootstrap 5", description: { id: "Framework CSS praktis untuk layout responsif.", en: "Practical CSS framework for responsive layouts." }, level: "Mahir" },
      { name: "Tailwind CSS", description: { id: "Utility-first CSS, styling cepat tanpa file CSS terpisah.", en: "Utility-first CSS, quick styling without separate CSS files." }, level: "Mahir" },
      { name: "Chart.js", description: { id: "Library grafik untuk dashboard dan analitik.", en: "Charting library for dashboards and analytics." }, level: "Menengah" },
      { name: "Recharts", description: { id: "Grafik React untuk visualisasi data statistik.", en: "React charts for statistical data visualization." }, level: "Menengah" },
      { name: "AJAX / Fetch API", description: { id: "Ambil data dari server tanpa reload halaman.", en: "Fetch data from server without page reload." }, level: "Mahir" },
    ],
  },
  {
    title: { id: "Backend & API", en: "Backend & API" },
    icon: "server",
    accent: "from-emerald-500 to-teal-500",
    items: [
      { name: "FastAPI", description: { id: "Framework Python modern untuk REST API cepat.", en: "Modern Python framework for fast REST APIs." }, level: "Mahir" },
      { name: "Laravel", description: { id: "Framework PHP dengan struktur MVC lengkap.", en: "PHP framework with a complete MVC structure." }, level: "Menengah" },
      { name: "SQLAlchemy", description: { id: "ORM Python untuk akses database yang rapi.", en: "Python ORM for clean database access." }, level: "Menengah" },
      { name: "REST API", description: { id: "Standar komunikasi antar aplikasi via HTTP.", en: "Standard communication between applications via HTTP." }, level: "Mahir" },
    ],
  },
  {
    title: { id: "AI & Computer Vision", en: "AI & Computer Vision" },
    icon: "brain",
    accent: "from-violet-500 to-purple-500",
    items: [
      { name: "Computer Vision", description: { id: "Bidang AI untuk memahami gambar & video.", en: "AI field for understanding images & videos." }, level: "Mahir" },
      { name: "YOLO (v8/v11/26)", description: { id: "Model deteksi objek real-time yang cepat.", en: "Fast real-time object detection models." }, level: "Mahir" },
      { name: "PyTorch", description: { id: "Framework deep learning untuk training model.", en: "Deep learning framework for training models." }, level: "Menengah" },
      { name: "OpenCV", description: { id: "Library pengolahan gambar & video.", en: "Image & video processing library." }, level: "Mahir" },
      { name: "TensorFlow Lite", description: { id: "Versi ringan TF untuk mobile / embedded.", en: "Lightweight TF for mobile / embedded devices." }, level: "Menengah" },
      { name: "Gemini API", description: { id: "API AI Google untuk generate teks otomatis.", en: "Google AI API for automatic text generation." }, level: "Menengah" },
    ],
  },
  {
    title: { id: "Mobile Development", en: "Mobile Development" },
    icon: "smartphone",
    accent: "from-amber-500 to-orange-500",
    items: [
      { name: "Android (Kotlin)", description: { id: "Pengembangan aplikasi native Android.", en: "Native Android application development." }, level: "Menengah" },
      { name: "Flutter", description: { id: "Framework cross-platform dari Google.", en: "Google's cross-platform framework." }, level: "Dasar" },
      { name: "Android Studio", description: { id: "IDE resmi untuk pengembangan Android.", en: "Official IDE for Android development." }, level: "Menengah" },
    ],
  },
  {
    title: { id: "Database", en: "Database" },
    icon: "database",
    accent: "from-rose-500 to-pink-500",
    items: [
      { name: "MySQL", description: { id: "Database relasional paling umum dan stabil.", en: "Most common and stable relational database." }, level: "Mahir" },
      { name: "PostgreSQL", description: { id: "Database relasional dengan fitur lanjutan.", en: "Relational database with advanced features." }, level: "Menengah" },
      { name: "MongoDB", description: { id: "Database NoSQL berbasis dokumen JSON.", en: "NoSQL database based on JSON documents." }, level: "Dasar" },
      { name: "Firebase Firestore", description: { id: "Database cloud real-time dari Google.", en: "Real-time cloud database from Google." }, level: "Menengah" },
    ],
  },
  {
    title: { id: "Keamanan Aplikasi", en: "Application Security" },
    icon: "shield",
    accent: "from-slate-600 to-slate-800",
    items: [
      { name: "Authentication", description: { id: "Sistem login & verifikasi identitas pengguna.", en: "Login system & user identity verification." }, level: "Mahir" },
      { name: "RBAC", description: { id: "Role-Based Access Control — hak akses per peran.", en: "Role-Based Access Control — permissions per role." }, level: "Mahir" },
      { name: "CSRF Protection", description: { id: "Proteksi dari serangan form palsu.", en: "Protection against forged form attacks." }, level: "Menengah" },
      { name: "Password Hashing", description: { id: "Enkripsi password sebelum disimpan ke database.", en: "Encrypt passwords before storing them in the database." }, level: "Mahir" },
    ],
  },
  {
    title: { id: "DevOps & Cloud", en: "DevOps & Cloud" },
    icon: "cloud",
    accent: "from-cyan-500 to-blue-600",
    items: [
      { name: "Docker", description: { id: "Kontainerisasi aplikasi agar konsisten di mana saja.", en: "Containerize applications for consistent deployment." }, level: "Menengah" },
      { name: "Git / GitHub", description: { id: "Version control & kolaborasi kode tim.", en: "Version control & team code collaboration." }, level: "Mahir" },
      { name: "Railway", description: { id: "Platform deploy backend + database cloud.", en: "Backend + cloud database deployment platform." }, level: "Menengah" },
      { name: "Vercel", description: { id: "Platform deploy frontend Next.js super cepat.", en: "Super-fast Next.js frontend deployment platform." }, level: "Menengah" },
      { name: "Cloud Deployment", description: { id: "Deploy aplikasi ke server cloud secara publik.", en: "Deploy applications publicly to cloud servers." }, level: "Menengah" },
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