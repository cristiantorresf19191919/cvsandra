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

export interface CVData {
  contact: ContactInfo;
  bio: string;
  workExperience: WorkExperience[];
}


