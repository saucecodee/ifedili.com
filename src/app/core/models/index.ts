export type Category = "web" | "design"
export type Platform = "web" | "mobile" | "npm"
export type Role = "Frontend" | "Backend" | "Design" | "Software Engineer" | "Backend Engineer"
export type FeatureType = "award" | "talk"


export interface Tool {
  img: string,
  name: string,
  category: [Category]
}

export interface Project {
  name: string,
  img: [string],
  about: string,
  short_desc: string,
  platform: Platform,
  role: Role,
  isFeatured: boolean,
  category: [Category]
  links: [{
    name: string,
    link: string,
    icon: string
  }]
}

export interface Brand {
  img: string,
  name: string,
}

export interface Experience {
  from: string,
  to: string,
  company: string,
  description: string,
  role: Role
}

export interface Feature {
  type: FeatureType,
  title: string,
  desc: string,
  link?: string,
}

export interface Testimonial {
  text: string,
  client: string,
}