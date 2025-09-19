export interface PersonalInfo {
  name: string;
  position?: string;
  email: string;
  phone?: string;
  location: string;
  webSites?: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  school: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  gpa?: string;
  description?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface Other {
  id: string;
  name: string;
  description: string;
  tags: string[];
  url?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  others: Other[];
}
