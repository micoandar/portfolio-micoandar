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
      title: "Membangun Sistem Perangkat Lunak yang Skalabel",
      desc: "Saya menikmati proses rekayasa perangkat lunak secara menyeluruh, mulai dari merancang arsitektur database, membangun REST API yang aman, membuat antarmuka pengguna yang interaktif, hingga melakukan deployment dan containerization.",
      interestingTitle: "Fokus Rekayasa",
      services: [
        { 
          title: "Backend & API", 
          desc: "Merancang arsitektur database relasional dan REST API modular menggunakan Node.js, PHP, dan Python (FastAPI)." 
        },
        { 
          title: "Frontend Dev", 
          desc: "Membangun antarmuka web SPA (Single Page Application) yang responsif dan interaktif dengan React dan Tailwind CSS." 
        },
        { 
          title: "Software Security", 
          desc: "Mengimplementasikan autentikasi, Role-Based Access Control (RBAC), proteksi CSRF, dan enkripsi password." 
        },
        { 
          title: "System Integration", 
          desc: "Mengintegrasikan model Machine Learning (YOLO) ke dalam aplikasi web menggunakan pipeline inference backend." 
        },
        { 
          title: "DevOps & Deploy", 
          desc: "Melakukan deployment aplikasi web menggunakan Vercel dan Railway, serta menggunakan Docker untuk konsistensi environment." 
        },
      ],
      closing: "Saya memiliki minat besar pada arsitektur perangkat lunak dan Full-Stack Development. Saya senang memecahkan masalah teknis yang kompleks dan mengembangkan solusi kode yang bersih (clean code) serta mudah dipelihara.",
    },
    projects: {
      eyebrow: "Portofolio",
      title: "Proyek Pilihan",
      desc: "Kumpulan proyek yang saya bangun — mulai dari arsitektur backend, platform monitoring, hingga aplikasi mobile.",
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
      title: "Building Scalable Software Systems",
      desc: "I enjoy the comprehensive software engineering process, from designing database architecture, building secure REST APIs, creating interactive user interfaces, to deployment and containerization.",
      interestingTitle: "Engineering Focus",
      services: [
        { 
          title: "Backend & API", 
          desc: "Designing relational database architectures and modular REST APIs using Node.js, PHP, and Python (FastAPI)." 
        },
        { 
          title: "Frontend Dev", 
          desc: "Building responsive and interactive Single Page Applications (SPA) with React and Tailwind CSS." 
        },
        { 
          title: "Software Security", 
          desc: "Implementing authentication, Role-Based Access Control (RBAC), CSRF protection, and password hashing." 
        },
        { 
          title: "System Integration", 
          desc: "Integrating Machine Learning models (YOLO) into web applications using backend inference pipelines." 
        },
        { 
          title: "DevOps & Deploy", 
          desc: "Deploying web applications using Vercel and Railway, and utilizing Docker for environment consistency." 
        },
      ],
      closing: "I have a strong interest in software architecture and Full-Stack Development. I enjoy solving complex technical problems and developing clean, maintainable code solutions.",
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Selected Projects",
      desc: "A collection of projects I've built — from backend architectures, monitoring platforms, to mobile applications.",
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