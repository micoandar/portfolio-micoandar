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
  
  linkedin: "https://www.linkedin.com/in/micoandar-justinus-marbun-3a86b5438",
  linkedinHandle: "Micoandar Justinus Marbun",
  
  summary: {
    id: "Saya adalah lulusan Ilmu Komputer dari Universitas Gunadarma dengan pengalaman dalam membangun aplikasi web full-stack.\nSaya senang mengembangkan aplikasi mulai dari desain database dan pengembangan backend hingga antarmuka frontend yang responsif dan deployment. Saya selalu bersemangat untuk mempelajari teknologi baru dan meningkatkan keterampilan saya melalui proyek-proyek dunia nyata.",
    en: "I'm a Computer Science graduate from Gunadarma University with experience in building full-stack web applications.\nI enjoy developing applications from database design and backend development to responsive frontend interfaces and deployment. I'm always eager to learn new technologies and improve my skills through real-world projects.",
  } as LText,

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