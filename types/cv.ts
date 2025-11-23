export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
}

export interface WorkExperience {
  company: string;
  companyDescription: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  institutionDescription: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  thesis?: string;
  mode?: string;
}

export interface Certificate {
  title: string;
  institution: string;
  date: string;
  location: string;
  mode?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Interest {
  name: string;
  icon?: string;
}

export interface Reference {
  name: string;
  position?: string;
  phone: string;
}

export interface CVData {
  contact: ContactInfo;
  bio: string;
  workExperience: WorkExperience[];
  education: Education[];
  certificates: Certificate[];
  skills: Skill[];
  interests: Interest[];
  references: Reference[];
}



