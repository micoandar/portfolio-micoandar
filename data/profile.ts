export type Locale = "id" | "en";
export type LText = { id: string; en: string };

export const profile = {
  name: "Micoandar Justinus Marbun",
  shortName: "Micoandar",
  initials: "MJ",
  role: { id: "Full Stack Developer", en: "Full Stack Developer" } as LText,
  roles: {
    id: ["Full Stack Developer", "Software Engineer"],
    en: ["Full Stack Developer", "Software Engineer"],
  },
  location: {
    id: "Bekasi, Jawa Barat, Indonesia",
    en: "Bekasi, West Java, Indonesia",
  } as LText,
  email: "micoandar@gmail.com",
  phone: "+62 813-8715-3680",
  whatsapp: "https://wa.me/6281387153680",
  
  cvFullStack: "/cv/Micoandar_FullStack_CV.pdf",
  cvSoftware: "/cv/Micoandar_SoftwareEngineer_CV.pdf",
  
  github: "https://github.com/micoandar",
  githubHandle: "github.com/micoandar",
  linkedin: "https://www.linkedin.com/in/micoandar-justinus-marbun",
  linkedinHandle: "Micoandar Justinus Marbun",
  
  summary: {
    id: "Fresh Graduate S1 Informatika Universitas Gunadarma (2026) dengan pengalaman proyek hampir 2 tahun dalam rekayasa perangkat lunak. Berfokus pada pengembangan aplikasi web full-stack end-to-end, mulai dari perancangan arsitektur database, pembangunan RESTful API yang aman, antarmuka responsif, hingga deployment ke cloud.",
    en: "Informatics Graduate from Gunadarma University (2026) with nearly 2 years of experience in software engineering. Focused on end-to-end full-stack web application development, from database architecture design, secure RESTful API development, responsive interfaces, to cloud deployment.",
  } as LText,

  // "System Design" telah dihapus
  softSkills: {
    id: ["Problem Solving", "Adaptif", "Fast Learner", "Komunikatif", "Teamwork"],
    en: ["Problem Solving", "Adaptive", "Fast Learner", "Communicative", "Teamwork"],
  },
  stats: [
    { label: { id: "IPK", en: "GPA" } as LText, value: "3.76", suffix: "/4.00" },
    { label: { id: "Proyek", en: "Projects" } as LText, value: "5", suffix: "+" },
    { label: { id: "Sertifikat", en: "Certs" } as LText, value: "3", suffix: "" },
  ],
};