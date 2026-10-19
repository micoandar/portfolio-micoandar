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
  
  // TEKS SUMMARY YANG BARU
  summary: {
    id: "Fresh Graduate S1 Informatika Universitas Gunadarma (2026) dengan pengalaman proyek hampir 2 tahun dalam pengembangan aplikasi web full-stack, sistem AI/computer vision, dan aplikasi Android. Berfokus pada pengembangan aplikasi end-to-end, mulai dari perancangan hingga deployment.",
    en: "Informatics Graduate from Gunadarma University (2026) with nearly 2 years of project experience in full-stack web application development, AI/computer vision systems, and Android applications. Focused on end-to-end application development, from design to deployment.",
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