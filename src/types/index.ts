export interface CaseStudy {
  title: string;
  role: string;
  timeframe: string;
  stack: string[];
  bullets: string[];
}

export interface Skill {
  title: string;
  items: string[];
}

export interface Experience {
  role: string;
  org: string;
  timeframe: string;
  impact: string;
}

export interface Service {
  title: string;
  detail: string;
}

export interface Education {
  title: string;
  place: string;
  timeframe: string;
  detail: string;
}

export interface Certification {
  title: string;
  issuer: string;
  credlyUrl: string;
  badgeImage: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href?: string;
  copy?: boolean;
  download?: boolean;
}

export interface Logo {
  name: string;
  src: string;
  tag: string;
}
