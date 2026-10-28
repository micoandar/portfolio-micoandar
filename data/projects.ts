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
    title: 'Web App "Restoran Kita"',
    subtitle: {
      id: "Sistem pemesanan end-to-end dengan dashboard analitik & REST API",
      en: "End-to-end ordering system with analytics dashboard & REST API",
    },
    category: "Web",
    image: "/images/projects/restoran-kita.jpg",
    gradient: "from-amber-400 to-orange-500",
    tech: ["PHP Native", "MySQL", "Bootstrap 5", "JavaScript", "AJAX", "Chart.js"],
    highlights: [
      {
        id: "Merancang arsitektur database MySQL untuk keranjang, pesanan, dan inventaris menu.",
        en: "Designed MySQL database architecture for carts, orders, and menu inventory.",
      },
      {
        id: "Membangun REST API modular untuk melayani request frontend via AJAX tanpa reload halaman (SPA-feel).",
        en: "Built a modular REST API to serve frontend requests via AJAX without page reloads (SPA-feel).",
      },
      {
        id: "Mengimplementasikan keamanan backend: prepared statements (anti SQL Injection), CSRF token, dan enkripsi password (bcrypt).",
        en: "Implemented backend security: prepared statements (anti SQL Injection), CSRF tokens, and password hashing (bcrypt).",
      },
      {
        id: "Mengembangkan logika chatbot rule-based yang melakukan query dinamis langsung ke database.",
        en: "Developed rule-based chatbot logic performing dynamic queries directly to the database.",
      },
    ],
  },
  {
    slug: "ai-workplace-safety",
    title: "Full-Stack Monitoring System",
    subtitle: {
      id: "Platform monitoring real-time berbasis React dan FastAPI",
      en: "Real-time monitoring platform powered by React and FastAPI",
    },
    category: "Web",
    image: "/images/projects/ai-workplace-safety.jpg",
    gradient: "from-emerald-400 to-teal-600",
    tech: ["React 19", "Vite", "Recharts", "FastAPI", "SQLAlchemy", "MySQL", "Docker", "Vercel", "Railway"],
    highlights: [
      {
        id: "Merancang arsitektur backend berlapis (routers, services, schemas) menggunakan FastAPI dan SQLAlchemy ORM.",
        en: "Designed a layered backend architecture (routers, services, schemas) using FastAPI and SQLAlchemy ORM.",
      },
      {
        id: "Membangun SPA React + Vite dengan fitur unggah gambar, live webcam (throttled), dan visualisasi data Recharts.",
        en: "Built a React + Vite SPA featuring image upload, live webcam (throttled), and Recharts data visualization.",
      },
      {
        id: "Menerapkan rate limiting, security headers, dan manajemen state frontend untuk performa optimal.",
        en: "Implemented rate limiting, security headers, and frontend state management for optimal performance.",
      },
      {
        id: "Deploy end-to-end menggunakan Docker (backend & database) di Railway dan frontend statis di Vercel.",
        en: "End-to-end deployment using Docker (backend & database) on Railway and static frontend on Vercel.",
      },
    ],
  },
  {
    slug: "ai-cctv-person-detection",
    title: "Real-time CCTV Web Dashboard",
    subtitle: {
      id: "Sistem monitoring streaming lokal dengan WebSocket",
      en: "Local streaming monitoring system with WebSocket",
    },
    category: "Web",
    image: "/images/projects/ai-cctv-person-detection.jpg",
    gradient: "from-sky-400 to-indigo-600",
    tech: ["React.js", "Tailwind CSS", "FastAPI", "WebSocket", "SQLAlchemy", "MySQL"],
    highlights: [
      {
        id: "Membangun komunikasi bidirectional real-time menggunakan WebSocket untuk streaming webcam dan inference.",
        en: "Established real-time bidirectional communication using WebSockets for webcam streaming and inference.",
      },
      {
        id: "Mengembangkan backend FastAPI dengan pipeline pemrosesan video (transcoding H.264) dan REST API.",
        en: "Developed a FastAPI backend with a video processing pipeline (H.264 transcoding) and REST API.",
      },
      {
        id: "Merancang UI React responsif dengan fitur dashboard statistik, live monitoring, dan filter riwayat.",
        en: "Designed a responsive React UI featuring a statistics dashboard, live monitoring, and history filters.",
      },
      {
        id: "Mengoptimalkan penyimpanan statistik adaptif ke database MySQL tanpa membebani performa server.",
        en: "Optimized adaptive statistics storage to MySQL without overloading server performance.",
      },
    ],
  },
  {
    slug: "deteksi-bahan-makanan",
    title: "Android Mobile App",
    subtitle: {
      id: "Aplikasi mobile dengan integrasi Machine Learning on-device",
      en: "Mobile application with on-device Machine Learning integration",
    },
    category: "Mobile",
    image: "/images/projects/deteksi-bahan-makanan.jpg",
    gradient: "from-lime-400 to-green-600",
    tech: ["Kotlin", "Android", "TensorFlow Lite", "Firebase Firestore", "Gemini API"],
    highlights: [
      {
        id: "Mengintegrasikan model TensorFlow Lite (YOLOv8n) ke dalam aplikasi Android native (Kotlin).",
        en: "Integrated TensorFlow Lite model (YOLOv8n) into a native Android application (Kotlin).",
      },
      {
        id: "Menerapkan logika pencocokan data (rule-based matching) terhadap koleksi resep di Firebase Firestore.",
        en: "Implemented data matching logic (rule-based) against recipe collections in Firebase Firestore.",
      },
      {
        id: "Menghubungkan aplikasi dengan Gemini API untuk fitur generative AI (saran resep).",
        en: "Connected the application with Gemini API for generative AI features (recipe suggestions).",
      },
    ],
  },
  {
    slug: "nilai-siswa-smk",
    title: "Academic Information System",
    subtitle: {
      id: "Sistem informasi berbasis web dengan Role-Based Access Control (RBAC)",
      en: "Web-based information system with Role-Based Access Control (RBAC)",
    },
    category: "Web",
    image: "/images/projects/nilai-siswa-smk.jpg",
    gradient: "from-fuchsia-400 to-purple-600",
    tech: ["PHP Native", "MySQL", "HTML5", "CSS3", "JavaScript"],
    highlights: [
      {
        id: "Merancang sistem multi-user (Admin, Guru, Siswa) dengan Role-Based Access Control (RBAC) yang ketat.",
        en: "Designed a multi-user system (Admin, Teacher, Student) with strict Role-Based Access Control (RBAC).",
      },
      {
        id: "Membangun logika backend untuk kalkulasi nilai otomatis (30% tugas, 30% UTS, 40% UAS).",
        en: "Built backend logic for automatic grade calculations (30% assignments, 30% midterms, 40% finals).",
      },
      {
        id: "Membuat fitur ekspor laporan ke format PDF dan Excel untuk kebutuhan administrasi.",
        en: "Created report export features to PDF and Excel formats for administrative needs.",
      },
    ],
  },
];