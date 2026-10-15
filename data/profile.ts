export type Locale = "id" | "en";
export type LText = { id: string; en: string };

export const profile = {
  name: "Micoandar Justinus Marbun",
  shortName: "Micoandar",
  initials: "MJ",
  role: { id: "Full Stack Developer", en: "Full Stack Developer" } as LText,
  roles: {
    id: ["Full Stack Developer", "AI / Computer Vision Engineer", "Android Developer"],
    en: ["Full Stack Developer", "AI / Computer Vision Engineer", "Android Developer"],
  },
  location: {
    id: "Bekasi, Jawa Barat, Indonesia",
    en: "Bekasi, West Java, Indonesia",
  } as LText,
  email: "micoandar@gmail.com",
  phone: "+62 813-8715-3680",
  whatsapp: "https://wa.me/6281387153680",
  cvPath: "/cv/Micoandar_Justinus_Marbun_CV.pdf",
  github: "https://github.com/micoandar",
  githubHandle: "github.com/micoandar",
  linkedin: "https://www.linkedin.com/in/micoandar-justinus-marbun",
  linkedinHandle: "Micoandar Justinus Marbun",
  summary: {
    id: "Fresh Graduate 2026 S1 Informatika Universitas Gunadarma dengan pengalaman proyek hampir 2 tahun dalam pengembangan web full-stack, sistem AI/computer vision, dan aplikasi Android. Terbiasa merancang dan membangun aplikasi end-to-end — mulai dari perancangan database dan REST API, antarmuka responsif, autentikasi dan kontrol akses berbasis peran, hingga deployment.",
    en: "2026 Fresh Graduate in Informatics from Gunadarma University with nearly 2 years of project experience in full-stack web development, AI/computer vision systems, and Android applications. Experienced in designing and building end-to-end applications — from database design and REST APIs, responsive interfaces, authentication and role-based access control, to deployment.",
  } as LText,
  softSkills: {
    id: ["Komunikatif", "Adaptif", "Kreatif", "Problem Solving", "Fast Learner"],
    en: ["Communicative", "Adaptive", "Creative", "Problem Solving", "Fast Learner"],
  },
  stats: [
    { label: { id: "IPK", en: "GPA" } as LText, value: "3.76", suffix: "/4.00" },
    { label: { id: "Proyek", en: "Projects" } as LText, value: "5", suffix: "+" },
    { label: { id: "Sertifikat", en: "Certs" } as LText, value: "3", suffix: "" },
  ],
};