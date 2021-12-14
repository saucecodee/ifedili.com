import { ICategory } from "../models";

export default {
  web: {
    name: "Web",
    projects: ["string"],
    desc: "string"
  },
  project: {
    name: "Project",
    projects: ["string"],
    desc: "string"
  },
  playground: {
    name: "Web",
    projects: ["Playground"],
    desc: "string"
  },
  design: {
    name: "Design",
    projects: ["string"],
    desc: "I love to explore and experiment on all things design, whether it be animation or motion graphics and even 3d, this is the place it strives"
  },
  others: {
    name: "Others",
    projects: ["string"],
    desc: "string"
  },
 } as {[id: string]: ICategory}