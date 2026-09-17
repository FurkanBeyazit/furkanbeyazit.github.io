export type Project = {
  id: string;
  name: string;
  summary: string;
  stack: string[];
  image: string;
  /** bento grid size */
  size?: 'lg' | 'md' | 'sm';
  period?: string;
};

export type Entry = {
  org: string;
  role: string;
  period: string;
  note?: string;
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type Profile = {
  hero: {
    name: string;
    title: string;
    tagline: string;
    location: string;
    links: {github: string; linkedin: string; email: string};
  };
  labels: {
    projects: string;
    projectsSub: string;
    earlier: string;
    experience: string;
    education: string;
    certs: string;
    skills: string;
    contact: string;
    contactSub: string;
    viewGithub: string;
    viewLinkedin: string;
    sendEmail: string;
  };
  projects: Project[];
  earlier: Project[];
  experience: Entry[];
  education: Entry[];
  certs: string[];
  skills: SkillGroup[];
};
