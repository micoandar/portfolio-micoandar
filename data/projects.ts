export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "Web" | "AI" | "Mobile";
  emoji: string;
  gradient: string;
  tech: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "restoran-kita",
    title: 'Sistem Pemesanan Restoran "Restoran Kita"',
    subtitle: "Web end-to-end dengan chatbot rule-based & dashboard admin",
    category: "Web",
    emoji: "🍽️",
    gradient: "from-amber-400 to-orange-500",
    tech: [
      "PHP Native",
      "MySQL",
      "Bootstrap 5",
      "JavaScript",
      "AJAX/Fetch API",
      "Chart.js",
      "Flatpickr",
    ],
    highlights: [
      "Membangun sistem pemesanan makanan berbasis web end-to-end: keranjang session, checkout, pelacakan status pesanan real-time via polling AJAX.",
      "Dashboard admin interaktif dengan Chart.js, CRUD menu + unggah gambar, filter multi-kriteria, pagination, update status tanpa reload, ekspor Excel, cetak invoice, dan analitik pelanggan.",
      "Mengembangkan chatbot rule-based tanpa API dengan FAQ dari database dan query dinamis ke tabel menu/order, 14 quick reply, floating widget responsif, dan panel admin kelola FAQ.",
      "Menerapkan praktik keamanan: password_hash (bcrypt) dengan auto-migrasi MD5, prepared statement, CSRF protection, session regeneration, validasi MIME, dan security logging.",
    ],
  },
  {
    slug: "ai-workplace-safety",
    title: "AI Workplace Safety Monitoring System",
    subtitle: "Monitoring kepatuhan PPE pekerja secara real-time",
    category: "AI",
    emoji: "🦺",
    gradient: "from-emerald-400 to-teal-600",
    tech: [
      "React 19",
      "Vite",
      "Axios",
      "Recharts",
      "FastAPI",
      "Pydantic",
      "YOLO11",
      "PyTorch",
      "OpenCV",
      "MySQL",
      "SQLAlchemy",
      "Docker",
      "Vercel",
      "Railway",
    ],
    highlights: [
      "Model YOLO11s di-fine-tune untuk 5 kelas (helmet, no-helmet, vest, no-vest, person) pada 6.827 gambar — mAP@50 91,35%, precision 92,5%, recall 86,3%.",
      "Backend REST API modular FastAPI berlapis (routers, services, schemas, database) dengan rate limiting, security headers, dan persistensi MySQL via SQLAlchemy ORM.",
      "Frontend SPA React + Vite: Dashboard (bar chart tren 7 hari), Detection (unggah gambar & live webcam throttling 2,5 FPS), History (pagination + detail modal).",
      "Analisis kepatuhan agregat yang mengklasifikasikan sesi deteksi menjadi Compliant, Violation, atau Unknown.",
      "Deploy end-to-end: frontend di Vercel, backend Docker + MySQL cloud di Railway.",
    ],
  },
  {
    slug: "ai-cctv-person-detection",
    title: "AI CCTV Person Detection & Monitoring System",
    subtitle: "Monitoring CCTV lokal berbasis AI dengan WebSocket",
    category: "AI",
    emoji: "🎥",
    gradient: "from-sky-400 to-indigo-600",
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Recharts",
      "FastAPI",
      "YOLO26n",
      "PyTorch",
      "OpenCV",
      "WebSocket",
      "SQLAlchemy",
      "MySQL",
    ],
    highlights: [
      "Melatih model YOLO26n custom untuk deteksi person (1 kelas) pada 7.096 gambar CCTV selama 50 epoch di Google Colab (Tesla T4) — mAP50 94.5%, Precision 93.9%, Recall 87.1%.",
      "Tiga sumber input: webcam real-time (WebSocket), upload gambar, dan upload video (transcode H.264).",
      "Backend FastAPI dengan pipeline inference efisien dan REST API lengkap.",
      "Frontend React responsif: dashboard statistik, live monitoring ber-bounding box, riwayat terfilter, analitik tren via Recharts, penyimpanan statistik adaptif ke MySQL, serta chatbot context-aware berbasis query data aktual.",
    ],
  },
  {
    slug: "deteksi-bahan-makanan",
    title: "Aplikasi Deteksi Bahan Makanan & Rekomendasi Resep Diet",
    subtitle: "Android app dengan on-device object detection",
    category: "Mobile",
    emoji: "🥗",
    gradient: "from-lime-400 to-green-600",
    tech: ["Kotlin", "Android", "YOLOv8n (TFLite)", "Firebase Firestore", "Gemini API"],
    highlights: [
      "Aplikasi Android untuk rekomendasi resep diet dengan deteksi bahan makanan real-time menggunakan YOLOv8n dan TensorFlow Lite.",
      "Pencocokan resep berbasis aturan terhadap data resep di Firebase Firestore.",
      "Integrasi Gemini API untuk menghasilkan langkah memasak dan saran bahan pengganti.",
      "Model dilatih dengan 3.793 citra — precision 0,901, recall 0,901, mAP@50 0,944, mAP@50:95 0,726.",
    ],
  },
  {
    slug: "nilai-siswa-smk",
    title: "Sistem Pengolahan Nilai Siswa SMK Harapan Bangsa",
    subtitle: "Sistem informasi akademik multi-peran",
    category: "Web",
    emoji: "📊",
    gradient: "from-fuchsia-400 to-purple-600",
    tech: ["PHP Native", "MySQL", "HTML5", "CSS3", "JavaScript"],
    highlights: [
      "Sistem informasi akademik berbasis web dengan tiga peran (Admin, Guru, Siswa).",
      "CRUD data siswa dan guru, input nilai tugas/UTS/UAS, perhitungan nilai akhir otomatis (30% tugas, 30% UTS, 40% UAS), penentuan status kelulusan, rekap nilai per mata pelajaran.",
      "Laporan admin dengan ekspor PDF/Excel.",
      "Autentikasi session, role-based access control, dan password hashing.",
    ],
  },
];