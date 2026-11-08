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
      summary: "Saya membangun aplikasi web dengan fokus pada arsitektur yang bersih, sistem backend yang andal, dan antarmuka pengguna yang responsif.",
    },
    about: {
      eyebrow: "Tentang Saya",
      title: "About Me",
      desc: "Saya adalah lulusan Ilmu Komputer dari Universitas Gunadarma dengan pengalaman dalam membangun aplikasi web full-stack.\nSaya senang mengembangkan aplikasi mulai dari desain database dan pengembangan backend hingga antarmuka frontend yang responsif dan deployment. Saya selalu bersemangat untuk mempelajari teknologi baru dan meningkatkan keterampilan saya melalui proyek-proyek dunia nyata.",
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
      cardTitle: "Mari bangun sesuatu bersama!",
      cardDesc: "Terbuka untuk kesempatan kerja, magang, maupun kolaborasi proyek di bidang Software Development. Saya siap menyambut peluang dan tantangan baru.",
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
      summary: "I build web applications with a focus on clean architecture, reliable backend systems, and responsive user interfaces.",
    },
    about: {
      eyebrow: "About Me",
      title: "About Me",
      desc: "I'm a Computer Science graduate from Gunadarma University with experience in building full-stack web applications.\nI enjoy developing applications from database design and backend development to responsive frontend interfaces and deployment. I'm always eager to learn new technologies and improve my skills through real-world projects.",
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
      cardTitle: "Let's build something together!",
      cardDesc: "Open to job opportunities, internships, and project collaborations in Software Development. I'm ready to embrace new opportunities and challenges.",
      chatWa: "Chat on WhatsApp",
    },
    footer: {
      built: "Built with Next.js & Tailwind CSS",
    },
    backToTop: "Back to top",
  },
};

export type Translation = (typeof translations)["id"];