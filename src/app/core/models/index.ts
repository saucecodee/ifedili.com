export type Category = "web" | "design"
export type Platform = "web" | "mobile" | "npm"
export type Role = "Frontend" | "Backend" | "Design" | "Software Engineer" | "Backend Engineer"
export type FeatureType = "award" | "talk"


export interface ITool {
  img: string,
  name: string,
  category: [Category]
}

export interface IProject {
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

export interface IBrand {
  img: string,
  name: string,
}

export interface IExperience {
  from: string,
  to: string,
  company: string,
  description: string,
  role: Role
}

export interface IFeature {
  type: FeatureType,
  title: string,
  desc: string,
  link?: string,
}

export interface ITestimonial {
  text: string,
  client: string,
}