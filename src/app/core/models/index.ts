export type Category = "Web" | "Design" | "Playground" | "Others" | "Project"
export type FeatureType = "Award" | "Talk"


export interface ITool {
  id: string,
  image: string,
  name: string,
  categories: Category[]
}

export interface ILink {
  link: string
}

export interface ICategory {
  name: Category,
  projects: string[],
  desc: string
}
export interface IProject {
  id: string,
  name: string,
  images: string[],
  about: string[],
  short_desc: string,
  platform: string,
  role: string,
  isFeatured: boolean,
  categories: Category[]
  links: { [id: string]: ILink },
  tools: string[]
}

export interface IBrand {
  image: string,
  name: string,
}

export interface IExperience {
  from: string,
  to: string,
  company: string,
  description: string,
  role: string
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