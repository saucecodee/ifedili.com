// ================================================================
//  Types
// ================================================================

type Category = "web" | "design"
type Platform = "web" | "mobile" | "npm"
type Role = "frontend" | "backend" | "design"
type FeatureType = "award" | "talk"


interface Tool {
  img: string,
  name: string,
  category: [Category]
}

interface Project {
  name: string,
  img: [string],
  about: string,
  short_desc: string,
  platform: Platform,
  role: Role,
  category: [Category]
  links: [{
    name: string,
    link: string,
    icon: string
  }]
}

interface Brand {
  img: string,
  name: string,
}

interface Experience {
  from: string,
  to: string,
  company: string,
  description: string,
  role: Role
}

interface Feature {
  type: FeatureType,
  title: string,
  desc: string,
  link?: string,
}

interface Testimonial {
  text: string,
  client: string,
}




// ================================================================
//  Data 
// ================================================================

export const tools: [Tool] = [
  {
    img: "string",
    name: "string",
    category: ["web"]
  }
]

export const projects: [Project] = [
  {
    img: ["string"],
    name: "string",
    about: "string",
    short_desc: "string",
    platform: "web",
    role: "frontend",
    category: ["web"],
    links: [{
      name: "GitHub",
      link: "github.com",
      icon: "github"
    }]
  }
]

export const brands: [Brand] = [
  {
    img: "string",
    name: "string"
  }
]

export const experience: [Experience] = [
  {
    from: "May, 2019",
    to: "June, 2021",
    company: "Genesys",
    description: "string",
    role: "frontend"
  }
]

export const features: [Feature] = [
  {
    type: "award",
    title: "string",
    desc: "string",
    link: "string",
  }
]

export const testimonial: [Testimonial] = [
  {
    text: "string",
    client: "string",
  }
]