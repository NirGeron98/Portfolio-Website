const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const personal = {
  name: "Nir Geron",
  role: "Software Engineer | Backend, Cloud Data & AI-Oriented Systems",
  description:
    "I build scalable backend systems, cloud data platforms, search solutions, and modern web applications with a focus on clean architecture, production readiness, and long-term maintainability.",
  email: "nirgeron98@gmail.com",
  phone: "052-638-4562",
  githubUser: "NirGeron98",
  githubUrl: "https://github.com/NirGeron98",
  linkedinLabel: "Nir Geron",
  linkedinUrl: "https://www.linkedin.com/in/nir-geron/",
  resumeUrl: publicAsset("Nir_Geron_Resume.pdf"),
  portraitUrl: publicAsset("nir-geron.png"),
  badges: [
    "Backend Engineering",
    "Cloud Data Platforms",
    "Elasticsearch",
    "AI & RAG",
    "Full Stack Products",
    "M.Sc. Computer Science Student"
  ],
  stats: [
    { label: "Current Role", value: "Software Engineer at KPMG" },
    { label: "Education", value: "M.Sc. Computer Science" },
    { label: "Focus", value: "Backend, Cloud, Data, AI" },
    { label: "Projects", value: "Spotly, Course4Me, PitWall" }
  ],
  achievements: [
    { title: "Software Engineer at KPMG." },
    { title: "M.Sc. Computer Science student at Reichman University." },
    {
      title: "Graduated B.Sc. Computer Science with Honors",
      meta: "GPA: 90"
    },
    { title: "Awarded Outstanding Soldier and Investigator honors during military service." },
    { title: "Built and maintained production-grade products used regularly by hundreds of thousands of users as part of my role." },
    { title: "Built backend, data, and AI-oriented projects from idea to implementation." }
  ],
  education: [
    {
      degree: "M.Sc. in Computer Science",
      school: "Reichman University",
      period: "2025 - Present"
    },
    {
      degree: "B.Sc. in Computer Science, with Honors",
      school: "Afeka College of Engineering",
      period: "2022 - 2025",
      detail: "GPA: 90"
    }
  ]
};
