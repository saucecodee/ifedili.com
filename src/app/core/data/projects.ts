import { IProject } from "../models"

export default [
  {
    img: ["string"],
    name: "string",
    about: "string",
    short_desc: "string",
    platform: "web",
    role: "Frontend",
    category: ["web"],
    isFeatured: true,
    links: [{
      name: "GitHub",
      link: "github.com",
      icon: "github"
    }]
  }
] as IProject[]