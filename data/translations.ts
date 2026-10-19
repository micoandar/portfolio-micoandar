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
      title: "Membangun Produk dari Ide hingga Deployment",
      desc: "Saya menikmati proses mengembangkan aplikasi secara menyeluruh, mulai dari merancang struktur database dan REST API, membangun antarmuka responsif, hingga mengintegrasikan fitur dan memastikan aplikasi berjalan dengan baik.",
      interestingTitle: "Yang saya kerjakan",
      services: [
        "Perancangan database & REST API yang rapi dan modular",
        "Antarmuka responsif dengan fokus pada pengalaman pengguna",
        "Autentikasi, RBAC, dan praktik keamanan aplikasi",
        "Model computer vision: YOLO, PyTorch, TensorFlow Lite",
        "Deployment ke cloud (Vercel, Railway, Docker)",
      ],
      closing: "Saya memiliki minat pada Full-Stack Development dan pengembangan sistem cerdas berbasis AI. Saya senang mempelajari teknologi baru, memecahkan masalah teknis, dan mengembangkan solusi yang fungsional serta mudah digunakan.",
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
      title: "Building Products from Idea to Deployment",
      desc: "I enjoy the comprehensive process of developing applications, from designing database structures and REST APIs, building responsive interfaces, to integrating features and ensuring the application runs smoothly.",
      interestingTitle: "What I do",
      services: [
        "Designing clean and modular databases & REST APIs",
        "Responsive interfaces with a focus on user experience",
        "Authentication, RBAC, and application security practices",
        "Computer vision models: YOLO, PyTorch, TensorFlow Lite",
        "Cloud deployment (Vercel, Railway, Docker)",
      ],
      closing: "I have a strong interest in Full-Stack Development and AI-based intelligent systems. I enjoy learning new technologies, solving technical problems, and developing solutions that are both functional and easy to use.",
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