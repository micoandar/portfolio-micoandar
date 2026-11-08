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
      summary: "Saya membangun aplikasi web dengan menggabungkan pengembangan frontend dan backend, dengan penekanan pada desain responsif, API yang terstruktur dengan baik, dan pengalaman pengguna yang fungsional.",
    },
    about: {
      eyebrow: "Tentang Saya",
      title: "About Me",
      desc: "Saya adalah lulusan Teknik Informatika dari Universitas Gunadarma dengan minat besar di bidang Software Engineering dan Full-Stack Development. Saya memiliki pengalaman dalam membangun aplikasi web, meliputi desain database, pengembangan backend, integrasi REST API, dan antarmuka frontend yang responsif. Saya senang memecahkan masalah, mengeksplorasi teknologi baru, dan terus meningkatkan keterampilan saya melalui proyek akademik dan pribadi.",
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
      summary: "I build web applications by combining frontend and backend development, with an emphasis on responsive design, well-structured APIs, and functional user experiences.",
    },
    about: {
      eyebrow: "About Me",
      title: "About Me",
      desc: "I'm an Informatics Engineering graduate from Gunadarma University with a strong interest in Software Engineering and Full-Stack Development. I have experience building web applications, covering database design, backend development, REST API integration, and responsive frontend interfaces. I enjoy solving problems, exploring new technologies, and continuously improving my skills through academic and personal projects.",
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