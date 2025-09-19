import { ResumeData } from "../types/resume";

export const sampleResumeData: ResumeData = {
  personalInfo: {
    name: "Kaito Kitaya",
    position: "Mid Software Engineer",
    email: "kaito.kitaya@example.com",
    phone: "+49 123 456 7890",
    location: "Düsseldorf, Germany",
    webSites: [
      "https://linkedin.com/in/kaitokitaya",
      "https://github.com/kaitokitaya",
      "kaitokitaya.dev",
    ],
  },
  summary:
    "I am a passionate Mid Software Engineer with expertise in mobile and web development. I specialize in creating robust, scalable applications using modern technologies like Flutter, Kotlin Multiplatform, React, and TypeScript. Currently working at Papyrus GmbH in Düsseldorf, Germany, I focus on payments team development and have successfully delivered key features, improving user experience and system performance.",
  experience: [
    {
      id: "1",
      title: "Mid Software Engineer",
      company: "Papyrus GmbH",
      location: "Düsseldorf, Germany",
      startDate: "2022-03",
      current: true,
      description:
        "Working in the payments team, focusing on mobile and web application development using Flutter and Kotlin Multiplatform.",
      achievements: [
        "Successfully delivered key payment features improving user experience",
        "Implemented cross-platform solutions using Kotlin Multiplatform",
        "Optimized application performance and reduced loading times by 30%",
        "Collaborated with cross-functional teams to deliver high-quality software",
      ],
    },
    {
      id: "2",
      title: "Software Engineer",
      company: "Tech Solutions Inc.",
      location: "Berlin, Germany",
      startDate: "2020-06",
      endDate: "2022-02",
      current: false,
      description:
        "Developed and maintained web applications using React, TypeScript, and Node.js. Focused on creating responsive and accessible user interfaces.",
      achievements: [
        "Built scalable web applications serving 10,000+ daily users",
        "Implemented automated testing strategies reducing bugs by 40%",
        "Mentored junior developers and conducted code reviews",
        "Led migration from legacy systems to modern React architecture",
      ],
    },
  ],
  education: [
    {
      id: "1",
      degree: "Bachelor of Science",
      field: "Computer Science",
      school: "Technical University of Munich",
      location: "Munich, Germany",
      startDate: "2016-10",
      endDate: "2020-06",
      current: false,
      gpa: "3.8/4.0",
      description:
        "Specialized in software engineering, algorithms, and data structures. Completed thesis on mobile application optimization.",
    },
  ],
  skills: [
    {
      id: "1",
      name: "Flutter",
      category: "Mobile Development",
      level: "expert",
    },
    {
      id: "2",
      name: "Kotlin Multiplatform",
      category: "Mobile Development",
      level: "advanced",
    },
    { id: "3", name: "React", category: "Web Development", level: "expert" },
    {
      id: "4",
      name: "TypeScript",
      category: "Web Development",
      level: "expert",
    },
    {
      id: "5",
      name: "Node.js",
      category: "Backend Development",
      level: "advanced",
    },
    {
      id: "6",
      name: "Python",
      category: "Backend Development",
      level: "intermediate",
    },
    { id: "7", name: "Docker", category: "DevOps", level: "intermediate" },
    { id: "8", name: "AWS", category: "DevOps", level: "intermediate" },
    { id: "9", name: "Git", category: "Version Control", level: "expert" },
    {
      id: "10",
      name: "Agile/Scrum",
      category: "Methodology",
      level: "advanced",
    },
  ],
  others: [
    {
      id: "1",
      name: "Cross-Platform Payment App",
      description:
        "Developed a mobile payment application using Flutter and Kotlin Multiplatform, enabling seamless transactions across iOS and Android platforms.",
      tags: [
        "Flutter",
        "Kotlin Multiplatform",
        "Firebase",
        "Stripe API",
      ],
      startDate: "2022-06",
      endDate: "2023-02",
      current: false,
      url: "github.com/kaitokitaya/payment-app",
    },
    {
      id: "2",
      name: "Real-time Dashboard",
      description:
        "Built a real-time analytics dashboard using React and WebSocket connections, providing live data visualization for business metrics.",
      tags: ["React", "TypeScript", "WebSocket", "Chart.js", "Node.js"],
      startDate: "2021-03",
      endDate: "2021-08",
      current: false,
      url: "dashboard.example.com",
    },
    {
      id: "3",
      name: "API Gateway Service",
      description:
        "Designed and implemented a microservices API gateway using Node.js and Express, handling authentication, rate limiting, and request routing.",
      tags: ["Node.js", "Express", "JWT", "Redis", "Docker"],
      startDate: "2020-09",
      endDate: "2021-01",
      current: false,
      url: "github.com/kaitokitaya/api-gateway",
    },
  ],
};
