// ================================================================
//  Types
// ================================================================

type Category = "web" | "design"
type Platform = "web" | "mobile" | "npm"
type Role = "frontend" | "backend" | "UI/UX design"
type features = "awards" | "talks"

interface Tool {
  img: string,
  name: string,
  category: [Category]
}

interface Project {
  img: [string],
  name: string,
  about: string,
  short_desc: string,
  platform: Platform,
  role: Role,
  category: [Category]
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

interface Features {
  type: string,
  brand: string,
  year: string,
  link: string,
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
    category: ["web"]
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