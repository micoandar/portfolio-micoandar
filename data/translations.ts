export const translations = {
  id: {
    nav: {
      about: "Tentang",
      projects: "Portofolio",
      skills: "Keahlian",
      education: "Pendidikan",
      contact: "Kontak",
      cta: "Hubungi Saya",
    },
    hero: {
      status: "Terbuka untuk peluang kerja",
      greeting: "Welcome to",
      name: "My Portfolio.",
      viewProjects: "Lihat Proyek",
      downloadCv: "Download CV",
      cvFullStack: "Full Stack Developer",
      cvSoftware: "Software Engineer",
      // TEKS DESKRIPSI BARU (BAHASA INDONESIA)
      summary: "Saya suka mengulik teknologi, mencoba hal baru, dan mengubah ide menjadi sesuatu yang nyata. Bagi saya, software development adalah tentang terus belajar, menemukan solusi, dan membangun aplikasi yang fungsional serta bermanfaat bagi banyak orang.",
    },
    about: {
      eyebrow: "Tentang Saya",
      title: "About Me",
      desc: "Fresh Graduate S1 Informatika Universitas Gunadarma (2026) dengan pengalaman proyek hampir 2 tahun dalam rekayasa perangkat lunak. Berfokus pada pengembangan aplikasi web full-stack end-to-end, mulai dari perancangan arsitektur database, pembangunan RESTful API yang aman, antarmuka responsif, hingga deployment ke cloud.",
    },
    projects: {
      eyebrow: "Portofolio",
      title: "Proyek Pilihan",
      desc: "Kumpulan proyek yang saya kembangkan, mulai dari aplikasi web, sistem berbasis AI dan computer vision, hingga aplikasi Android.",
    },
    skills: {
      eyebrow: "Keahlian",
      title: "Teknologi & Tools",
      desc: "Stack yang saya gunakan sehari-hari.",
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
      desc: "Saya terbuka untuk peluang kerja maupun freelance.",
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
      projects: "Portfolio",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      cta: "Get in touch",
    },
    hero: {
      status: "Open to work",
      greeting: "Welcome to",
      name: "My Portfolio.",
      viewProjects: "View Projects",
      downloadCv: "Download CV",
      cvFullStack: "Full Stack Developer",
      cvSoftware: "Software Engineer",
      // TEKS DESKRIPSI BARU (BAHASA INGGRIS)
      summary: "I love exploring technology, trying new things, and turning ideas into something real. For me, software development is about continuous learning, finding solutions, and building functional applications that benefit many people.",
    },
    about: {
      eyebrow: "About Me",
      title: "About Me",
      desc: "Informatics Graduate from Gunadarma University (2026) with nearly 2 years of experience in software engineering. Focused on end-to-end full-stack web application development, from database architecture design, secure RESTful API development, responsive interfaces, to cloud deployment.",
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Selected Projects",
      desc: "A collection of projects I've developed, ranging from web applications, AI and computer vision-based systems, to Android applications.",
    },
    skills: {
      eyebrow: "Skills",
      title: "Technologies & Tools",
      desc: "The stack I use daily.",
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
      desc: "I'm open to job opportunities and freelance work.",
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