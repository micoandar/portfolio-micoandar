export type SkillLevel = "Mahir" | "Menengah" | "Dasar";

export type SkillItem = {
  name: string;
  description: string;
  level: SkillLevel;
};

export type SkillGroup = {
  title: string;
  icon: string;
  accent: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Bahasa Pemrograman",
    icon: "braces",
    accent: "from-indigo-500 to-blue-500",
    items: [
      { name: "Python", description: "Bahasa utama untuk AI, backend, dan automation.", level: "Mahir" },
      { name: "PHP", description: "Backend web klasik, dipakai di sistem pemesanan & akademik.", level: "Mahir" },
      { name: "JavaScript", description: "Bahasa wajib untuk web interaktif di sisi klien.", level: "Mahir" },
      { name: "TypeScript", description: "JavaScript dengan tipe data — lebih aman saat coding.", level: "Menengah" },
      { name: "Kotlin", description: "Bahasa resmi untuk Android modern.", level: "Menengah" },
      { name: "Java", description: "Dasar OOP, dipakai di kuliah dan pengembangan Android.", level: "Menengah" },
      { name: "SQL", description: "Query database relasional untuk ambil & olah data.", level: "Mahir" },
    ],
  },
  {
    title: "Frontend",
    icon: "layout",
    accent: "from-sky-500 to-cyan-500",
    items: [
      { name: "React", description: "Library UI berbasis komponen untuk web modern.", level: "Mahir" },
      { name: "Vite", description: "Build tool super cepat untuk project React.", level: "Mahir" },
      { name: "Bootstrap 5", description: "Framework CSS praktis untuk layout responsif.", level: "Mahir" },
      { name: "Tailwind CSS", description: "Utility-first CSS, styling cepat tanpa file CSS terpisah.", level: "Mahir" },
      { name: "Chart.js", description: "Library grafik untuk dashboard dan analitik.", level: "Menengah" },
      { name: "Recharts", description: "Grafik React untuk visualisasi data statistik.", level: "Menengah" },
      { name: "AJAX / Fetch API", description: "Ambil data dari server tanpa reload halaman.", level: "Mahir" },
    ],
  },
  {
    title: "Backend & API",
    icon: "server",
    accent: "from-emerald-500 to-teal-500",
    items: [
      { name: "FastAPI", description: "Framework Python modern untuk REST API cepat.", level: "Mahir" },
      { name: "Laravel", description: "Framework PHP dengan struktur MVC lengkap.", level: "Menengah" },
      { name: "SQLAlchemy", description: "ORM Python untuk akses database yang rapi.", level: "Menengah" },
      { name: "REST API", description: "Standar komunikasi antar aplikasi via HTTP.", level: "Mahir" },
    ],
  },
  {
    title: "AI & Computer Vision",
    icon: "brain",
    accent: "from-violet-500 to-purple-500",
    items: [
      { name: "Computer Vision", description: "Bidang AI untuk memahami gambar & video.", level: "Mahir" },
      { name: "YOLO (v8/v11/26)", description: "Model deteksi objek real-time yang cepat.", level: "Mahir" },
      { name: "PyTorch", description: "Framework deep learning untuk training model.", level: "Menengah" },
      { name: "OpenCV", description: "Library pengolahan gambar & video.", level: "Mahir" },
      { name: "TensorFlow Lite", description: "Versi ringan TF untuk mobile / embedded.", level: "Menengah" },
      { name: "Gemini API", description: "API AI Google untuk generate teks otomatis.", level: "Menengah" },
    ],
  },
  {
    title: "Mobile Development",
    icon: "smartphone",
    accent: "from-amber-500 to-orange-500",
    items: [
      { name: "Android (Kotlin)", description: "Pengembangan aplikasi native Android.", level: "Menengah" },
      { name: "Flutter", description: "Framework cross-platform dari Google.", level: "Dasar" },
      { name: "Android Studio", description: "IDE resmi untuk pengembangan Android.", level: "Menengah" },
    ],
  },
  {
    title: "Database",
    icon: "database",
    accent: "from-rose-500 to-pink-500",
    items: [
      { name: "MySQL", description: "Database relasional paling umum dan stabil.", level: "Mahir" },
      { name: "PostgreSQL", description: "Database relasional dengan fitur lanjutan.", level: "Menengah" },
      { name: "MongoDB", description: "Database NoSQL berbasis dokumen JSON.", level: "Dasar" },
      { name: "Firebase Firestore", description: "Database cloud real-time dari Google.", level: "Menengah" },
    ],
  },
  {
    title: "Keamanan Aplikasi",
    icon: "shield",
    accent: "from-slate-600 to-slate-800",
    items: [
      { name: "Authentication", description: "Sistem login & verifikasi identitas pengguna.", level: "Mahir" },
      { name: "RBAC", description: "Role-Based Access Control — hak akses per peran.", level: "Mahir" },
      { name: "CSRF Protection", description: "Proteksi dari serangan form palsu.", level: "Menengah" },
      { name: "Password Hashing", description: "Enkripsi password sebelum disimpan ke database.", level: "Mahir" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    accent: "from-cyan-500 to-blue-600",
    items: [
      { name: "Docker", description: "Kontainerisasi aplikasi agar konsisten di mana saja.", level: "Menengah" },
      { name: "Git / GitHub", description: "Version control & kolaborasi kode tim.", level: "Mahir" },
      { name: "Railway", description: "Platform deploy backend + database cloud.", level: "Menengah" },
      { name: "Vercel", description: "Platform deploy frontend Next.js super cepat.", level: "Mahir" },
      { name: "Cloud Deployment", description: "Deploy aplikasi ke server cloud secara publik.", level: "Menengah" },
    ],
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