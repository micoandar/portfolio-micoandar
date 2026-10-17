import type { LText } from "./profile";

export type Project = {
  slug: string;
  title: string;
  subtitle: LText;
  category: "Web" | "AI" | "Mobile";
  image: string;
  gradient: string;
  tech: string[];
  highlights: LText[];
};

export const projects: Project[] = [
  {
    slug: "restoran-kita",
    title: 'Restaurant Ordering System "Restoran Kita"',
    subtitle: {
      id: "Web end-to-end dengan chatbot rule-based & dashboard admin",
      en: "End-to-end web with rule-based chatbot & admin dashboard",
    },
    category: "Web",
    image: "/images/projects/restoran-kita.jpg",
    gradient: "from-amber-400 to-orange-500",
    tech: ["PHP Native", "MySQL", "Bootstrap 5", "JavaScript", "AJAX/Fetch API", "Chart.js", "Flatpickr"],
    highlights: [
      {
        id: "Membangun sistem pemesanan makanan berbasis web end-to-end: keranjang session, checkout, pelacakan status pesanan real-time via polling AJAX.",
        en: "Built an end-to-end web-based food ordering system: session cart, checkout, and real-time order status tracking via AJAX polling.",
      },
      {
        id: "Dashboard admin interaktif dengan Chart.js, CRUD menu + unggah gambar, filter multi-kriteria, pagination, update status tanpa reload, ekspor Excel, cetak invoice, dan analitik pelanggan.",
        en: "Interactive admin dashboard with Chart.js, menu CRUD + image upload, multi-criteria filters, pagination, no-reload status updates, Excel export, invoice printing, and customer analytics.",
      },
      {
        id: "Mengembangkan chatbot rule-based tanpa API dengan FAQ dari database dan query dinamis ke tabel menu/order, 14 quick reply, floating widget responsif, dan panel admin kelola FAQ.",
        en: "Developed an API-free rule-based chatbot with database-driven FAQ and dynamic queries to menu/order tables, 14 quick replies, a responsive floating widget, and an admin FAQ management panel.",
      },
      {
        id: "Menerapkan praktik keamanan: password_hash (bcrypt) dengan auto-migrasi MD5, prepared statement, CSRF protection, session regeneration, validasi MIME, dan security logging.",
        en: "Implemented security practices: password_hash (bcrypt) with MD5 auto-migration, prepared statements, CSRF protection, session regeneration, MIME validation, and security logging.",
      },
    ],
  },
  {
    slug: "ai-workplace-safety",
    title: "AI Workplace Safety Monitoring System",
    subtitle: {
      id: "Monitoring kepatuhan PPE pekerja secara real-time",
      en: "Real-time worker PPE compliance monitoring",
    },
    category: "AI",
    image: "/images/projects/ai-workplace-safety.jpg",
    gradient: "from-emerald-400 to-teal-600",
    tech: ["React 19", "Vite", "Axios", "Recharts", "FastAPI", "Pydantic", "YOLO11", "PyTorch", "OpenCV", "MySQL", "SQLAlchemy", "Docker", "Vercel", "Railway"],
    highlights: [
      {
        id: "Model YOLO11s di-fine-tune untuk 5 kelas (helmet, no-helmet, vest, no-vest, person) pada 6.827 gambar — mAP@50 91,35%, precision 92,5%, recall 86,3%.",
        en: "Fine-tuned YOLO11s model for 5 classes (helmet, no-helmet, vest, no-vest, person) on 6,827 images — mAP@50 91.35%, precision 92.5%, recall 86.3%.",
      },
      {
        id: "Backend REST API modular FastAPI berlapis (routers, services, schemas, database) dengan rate limiting, security headers, dan persistensi MySQL via SQLAlchemy ORM.",
        en: "Modular FastAPI REST API (routers, services, schemas, database) with rate limiting, security headers, and MySQL persistence via SQLAlchemy ORM.",
      },
      {
        id: "Frontend SPA React + Vite: Dashboard (bar chart tren 7 hari), Detection (unggah gambar & live webcam throttling 2,5 FPS), History (pagination + detail modal).",
        en: "React + Vite SPA frontend: Dashboard (7-day trend bar chart), Detection (image upload & live webcam throttled at 2.5 FPS), History (pagination + detail modal).",
      },
      {
        id: "Analisis kepatuhan agregat yang mengklasifikasikan sesi deteksi menjadi Compliant, Violation, atau Unknown.",
        en: "Aggregate compliance analysis classifying detection sessions as Compliant, Violation, or Unknown.",
      },
      {
        id: "Deploy end-to-end: frontend di Vercel, backend Docker + MySQL cloud di Railway.",
        en: "End-to-end deploy: frontend on Vercel, Docker backend + cloud MySQL on Railway.",
      },
    ],
  },
  {
    slug: "ai-cctv-person-detection",
    title: "AI CCTV Person Detection & Monitoring System",
    subtitle: {
      id: "Monitoring CCTV lokal berbasis AI dengan WebSocket",
      en: "Local AI-based CCTV monitoring with WebSocket",
    },
    category: "AI",
    image: "/images/projects/ai-cctv-person-detection.jpg",
    gradient: "from-sky-400 to-indigo-600",
    tech: ["React.js", "Vite", "Tailwind CSS", "Recharts", "FastAPI", "YOLO26n", "PyTorch", "OpenCV", "WebSocket", "SQLAlchemy", "MySQL"],
    highlights: [
      {
        id: "Melatih model YOLO26n custom untuk deteksi person (1 kelas) pada 7.096 gambar CCTV selama 50 epoch di Google Colab (Tesla T4) — mAP50 94.5%, Precision 93.9%, Recall 87.1%.",
        en: "Trained a custom YOLO26n model for person detection (1 class) on 7,096 CCTV images for 50 epochs on Google Colab (Tesla T4) — mAP50 94.5%, Precision 93.9%, Recall 87.1%.",
      },
      {
        id: "Tiga sumber input: webcam real-time (WebSocket), upload gambar, dan upload video (transcode H.264).",
        en: "Three input sources: real-time webcam (WebSocket), image upload, and video upload (H.264 transcode).",
      },
      {
        id: "Backend FastAPI dengan pipeline inference efisien dan REST API lengkap.",
        en: "FastAPI backend with an efficient inference pipeline and complete REST API.",
      },
      {
        id: "Frontend React responsif: dashboard statistik, live monitoring ber-bounding box, riwayat terfilter, analitik tren via Recharts, penyimpanan statistik adaptif ke MySQL, serta chatbot context-aware berbasis query data aktual.",
        en: "Responsive React frontend: statistics dashboard, live monitoring with bounding boxes, filtered history, trend analytics via Recharts, adaptive statistics storage to MySQL, and a context-aware chatbot based on actual data queries.",
      },
    ],
  },
  {
    slug: "deteksi-bahan-makanan",
    title: "Food Ingredient Detection & Diet Recipe Recommendation App",
    subtitle: {
      id: "Aplikasi Android dengan deteksi objek on-device",
      en: "Android app with on-device object detection",
    },
    category: "Mobile",
    image: "/images/projects/deteksi-bahan-makanan.jpg",
    gradient: "from-lime-400 to-green-600",
    tech: ["Kotlin", "Android", "YOLOv8n (TFLite)", "Firebase Firestore", "Gemini API"],
    highlights: [
      {
        id: "Aplikasi Android untuk rekomendasi resep diet dengan deteksi bahan makanan real-time menggunakan YOLOv8n dan TensorFlow Lite.",
        en: "Android app for diet recipe recommendations with real-time food ingredient detection using YOLOv8n and TensorFlow Lite.",
      },
      {
        id: "Pencocokan resep berbasis aturan terhadap data resep di Firebase Firestore.",
        en: "Rule-based recipe matching against recipe data in Firebase Firestore.",
      },
      {
        id: "Integrasi Gemini API untuk menghasilkan langkah memasak dan saran bahan pengganti.",
        en: "Gemini API integration to generate cooking steps and substitute ingredient suggestions.",
      },
      {
        id: "Model dilatih dengan 3.793 citra — precision 0,901, recall 0,901, mAP@50 0,944, mAP@50:95 0,726.",
        en: "Model trained on 3,793 images — precision 0.901, recall 0.901, mAP@50 0.944, mAP@50:95 0.726.",
      },
    ],
  },
  {
    slug: "nilai-siswa-smk",
    title: "Student Grade Management System — SMK Harapan Bangsa",
    subtitle: {
      id: "Sistem informasi akademik multi-peran",
      en: "Multi-role academic information system",
    },
    category: "Web",
    image: "/images/projects/nilai-siswa-smk.jpg",
    gradient: "from-fuchsia-400 to-purple-600",
    tech: ["PHP Native", "MySQL", "HTML5", "CSS3", "JavaScript"],
    highlights: [
      {
        id: "Sistem informasi akademik berbasis web dengan tiga peran (Admin, Guru, Siswa).",
        en: "Web-based academic information system with three roles (Admin, Teacher, Student).",
      },
      {
        id: "CRUD data siswa dan guru, input nilai tugas/UTS/UAS, perhitungan nilai akhir otomatis (30% tugas, 30% UTS, 40% UAS), penentuan status kelulusan, rekap nilai per mata pelajaran.",
        en: "CRUD for students and teachers, assignment/midterm/final grade entry, automatic final grade calculation (30% assignment, 30% midterm, 40% final), graduation status determination, per-subject grade recaps.",
      },
      {
        id: "Laporan admin dengan ekspor PDF/Excel.",
        en: "Admin reports with PDF/Excel export.",
      },
      {
        id: "Autentikasi session, role-based access control, dan password hashing.",
        en: "Session authentication, role-based access control, and password hashing.",
      },
    ],
  },
];