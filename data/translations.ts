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
      cvFullStack: "Full Stack Developer",
      cvSoftware: "Software Engineer",
    },
    about: {
      eyebrow: "Tentang Saya",
      title: "Membangun Solusi Perangkat Lunak yang Fungsional",
      desc: "Saya menikmati proses mengembangkan aplikasi dari awal hingga siap digunakan, mulai dari merancang database, membangun REST API, mengembangkan antarmuka yang responsif, hingga mengintegrasikan berbagai fitur dan melakukan deployment.",
      services: [
        { 
          title: "Full-Stack Development", 
          desc: "Membangun aplikasi web menggunakan PHP, JavaScript, HTML, CSS, dan Node.js, termasuk pengembangan backend, REST API, serta integrasi database MySQL." 
        },
        { 
          title: "Frontend Development", 
          desc: "Mengembangkan antarmuka web yang responsif dan interaktif dengan HTML, CSS, JavaScript, serta React.js dan Tailwind CSS." 
        },
        { 
          title: "AI & Computer Vision", 
          desc: "Melatih dan mengevaluasi model YOLO untuk deteksi objek, serta mengintegrasikan TensorFlow Lite ke dalam aplikasi web dan Android berbasis Kotlin." 
        },
        { 
          title: "Android Development", 
          desc: "Mengembangkan aplikasi Android menggunakan Kotlin, Android Studio, Firebase, dan integrasi API untuk mendukung fitur aplikasi." 
        }, 
        { 
          title: "DevOps & Deploy", 
          desc: "Melakukan deployment aplikasi web menggunakan Vercel dan Railway, serta menggunakan Docker untuk konsistensi environment." 
        },
      ],
      // Kalimat terakhir dihapus
      closing: "Saya memiliki minat pada Full-Stack Development dan pengembangan sistem berbasis AI. Melalui proyek akademik dan mandiri, saya terbiasa menggunakan PHP, JavaScript, Python, dan Kotlin. Dalam siklus pengembangan perangkat lunak (SDLC), saya terbiasa menerapkan metodologi Waterfall yang menekankan pendekatan sekuensial dan terstruktur — mulai dari analisis kebutuhan, desain sistem, implementasi, pengujian, hingga pemeliharaan secara bertahap.",
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
      cvFullStack: "Full Stack Developer",
      cvSoftware: "Software Engineer",
    },
    about: {
      eyebrow: "About Me",
      title: "Building Functional Software Solutions",
      desc: "I enjoy the process of developing applications from scratch until ready to use, from designing databases, building REST APIs, developing responsive interfaces, to integrating various features and deployment.",
      services: [
        { 
          title: "Full-Stack Development", 
          desc: "Building web applications using PHP, JavaScript, HTML, CSS, and Node.js, including backend development, REST APIs, and MySQL/MariaDB integration." 
        },
        { 
          title: "Frontend Development", 
          desc: "Developing responsive and interactive web interfaces with HTML, CSS, JavaScript, React.js, and Tailwind CSS." 
        },
        { 
          title: "AI & Computer Vision", 
          desc: "Training and evaluating YOLO models for object detection, and integrating TensorFlow Lite into Kotlin-based web and Android applications." 
        },
        { 
          title: "Android Development", 
          desc: "Developing Android applications using Kotlin, Android Studio, Firebase, and API integration to support app features." 
        },
        { 
          title: "DevOps & Deploy", 
          desc: "Deploying web applications using Vercel and Railway, and utilizing Docker for environment consistency." 
        },
      ],
      // Kalimat terakhir dihapus
      closing: "I have a strong interest in Full-Stack Development and AI-based systems. Through academic and independent projects, I am accustomed to using PHP, JavaScript, Python, and Kotlin. In the Software Development Life Cycle (SDLC), I am accustomed to applying the Waterfall methodology which emphasizes a sequential and structured approach — from requirements analysis, system design, implementation, testing, to maintenance in stages.",
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