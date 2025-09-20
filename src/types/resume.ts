export interface PersonalInfo {
  name: string;
  position?: string;
  email: string;
  phone?: string;
  location: string;
  websites?: string[];
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
  personal_info: PersonalInfo;
  summary?: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  others: Other[];
}

export const safeMapResumeData = (data: any): ResumeData => {
  const isValidPersonalInfo =
    data.personal_info?.name &&
    data.personal_info?.email &&
    data.personal_info?.location;

    if (!isValidPersonalInfo) {
      throw new Error("Invalid personal info");
    }

  const isValidExperiences =
    data.experience?.length === 0 ||
    data.experience?.every(
      (experience: any) =>
        experience.title &&
        experience.company &&
        experience.startDate &&
        experience.current !== undefined
    );

  if (!isValidExperiences) {
    throw new Error("Invalid experiences");
  }

  const isValidEducation =
    data.education?.length === 0 ||
    data.education?.every(
      (education: any) =>
        education.degree &&
        education.field &&
        education.school &&
        education.startDate &&
        education.current !== undefined
    );

  if (!isValidEducation) {
    throw new Error("Invalid education");
  }

  const isValidSkills =
    data.skills?.length === 0 ||
    data.skills?.every(
      (skill: any) => skill.name && skill.category && skill.level
    );

  if (!isValidSkills) {
    throw new Error("Invalid skills");
  }

  const isValidOthers =
    data.others?.length === 0 ||
    data.others?.every(
      (other: any) => other.name && other.description && other.tags
    );

  if (!isValidOthers) {
    throw new Error("Invalid others");
  }

  return {
    personal_info: data.personal_info,
    summary: data.summary,
    experience: data.experience,
    education: data.education,
    skills: data.skills,
    others: data.others,
  };
};
