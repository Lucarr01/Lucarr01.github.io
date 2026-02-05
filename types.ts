
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string[];
  thumbnail: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  stats?: {
    label: string;
    value: string;
  }[];
  techStack: {
    category: string;
    value: string;
  }[];
  methodology: {
    title: string;
    description: string;
    icon: string;
  }[];
  gallery: string[];
}

export interface ExperienceRole {
  title: string;
  type: string;
  period: string;
  description: string;
  highlights?: string[];
  skills?: string[];
  current?: boolean;
}

export interface Experience {
  company: string;
  companyLogo?: string;
  location?: string;
  totalPeriod?: string;
  roles: ExperienceRole[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface Skill {
  category: string;
  items: string[];
}
