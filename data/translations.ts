export const translations = {
  id: {
    nav: {
      about: "Tentang",
      projects: "Proyek",
      skills: "Keahlian",
      education: "Pendidikan",
      contact: "Kontak",
      cta: "Hubungi Saya",
    },
    hero: {
      status: "Terbuka untuk peluang kerja",
      greeting: "Hai, saya",
      viewProjects: "Lihat Proyek",
      downloadCv: "Download CV",
    },
    about: {
      eyebrow: "Tentang Saya",
      title: "Membangun produk dari ide sampai deploy",
      desc: "Saya menikmati proses merancang sistem secara utuh — mulai dari struktur data, API, tampilan, sampai aplikasi berjalan di production.",
      interestingTitle: "Yang saya kerjakan",
      services: [
        "Perancangan database & REST API yang rapi dan modular",
        "Antarmuka responsif dengan fokus pada pengalaman pengguna",
        "Autentikasi, RBAC, dan praktik keamanan aplikasi",
        "Model computer vision: YOLO, PyTorch, TensorFlow Lite",
        "Deployment ke cloud (Vercel, Railway, Docker)",
      ],
      closing:
        "Saya tertarik pada bidang Full Stack Development serta pengembangan sistem cerdas berbasis AI, dan siap berkontribusi secara maksimal bagi perusahaan.",
    },
    projects: {
      eyebrow: "Portofolio",
      title: "Proyek Pilihan",
      desc: "Kumpulan proyek yang saya bangun — dari sistem pemesanan, monitoring AI, sampai aplikasi Android.",
    },
    skills: {
      eyebrow: "Keahlian",
      title: "Teknologi & Tools",
      desc: "Stack yang saya gunakan sehari-hari — lengkap dengan tingkat penguasaan.",
      count: "teknologi",
    },
    education: {
      eyebrow: "Pendidikan & Sertifikasi",
      title: "Latar Belakang Akademik",
      desc: "Perjalanan pendidikan, sertifikasi profesi, dan pelatihan yang saya ikuti.",
      certs: "Sertifikasi",
      trainings: "Pelatihan",
    },
    contact: {
      eyebrow: "Kontak",
      title: "Mari Berkolaborasi",
      desc: "Saya terbuka untuk peluang kerja, freelance, maupun sekadar berdiskusi tentang teknologi.",
      cardTitle: "Punya proyek atau posisi yang cocok?",
      cardDesc:
        "Kirim pesan dan saya akan merespons secepat mungkin. Saya siap berkontribusi secara maksimal untuk tim Anda.",
      chatWa: "Chat via WhatsApp",
    },
    footer: {
      built: "Dibuat dengan Next.js & Tailwind CSS",
    },
    backToTop: "Kembali ke atas",
  },

  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      cta: "Get in touch",
    },
    hero: {
      status: "Open to work",
      greeting: "Hi, I'm",
      viewProjects: "View Projects",
      downloadCv: "Download CV",
    },
    about: {
      eyebrow: "About Me",
      title: "Building products from idea to deploy",
      desc: "I enjoy designing systems end-to-end — from data structures, APIs, and interfaces, to applications running in production.",
      interestingTitle: "What I do",
      services: [
        "Designing clean and modular databases & REST APIs",
        "Responsive interfaces with a focus on user experience",
        "Authentication, RBAC, and application security practices",
        "Computer vision models: YOLO, PyTorch, TensorFlow Lite",
        "Cloud deployment (Vercel, Railway, Docker)",
      ],
      closing:
        "I'm passionate about Full Stack Development and building AI-powered intelligent systems, and I'm ready to contribute fully to your team.",
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Selected Projects",
      desc: "A collection of projects I've built — from ordering systems, AI monitoring, to Android applications.",
    },
    skills: {
      eyebrow: "Skills",
      title: "Technologies & Tools",
      desc: "The stack I use daily — with proficiency levels.",
      count: "technologies",
    },
    education: {
      eyebrow: "Education & Certifications",
      title: "Academic Background",
      desc: "My education journey, professional certifications, and trainings.",
      certs: "Certifications",
      trainings: "Trainings",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's Collaborate",
      desc: "I'm open to job opportunities, freelance, or just talking about technology.",
      cardTitle: "Have a project or a fitting role?",
      cardDesc:
        "Send a message and I'll respond as soon as possible. I'm ready to contribute fully to your team.",
      chatWa: "Chat on WhatsApp",
    },
    footer: {
      built: "Built with Next.js & Tailwind CSS",
    },
    backToTop: "Back to top",
  },
};

export type Translation = (typeof translations)["id"];