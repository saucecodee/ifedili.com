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
    desc: "These are some clients and personal projects that I've worked on and allowed to share"
  },
  playground: {
    name: "Web",
    projects: ["Playground"],
    desc: "When I try to learn new stuffs or just playaround with some tools, this is where they end up."
  },
  design: {
    name: "Design",
    projects: ["string"],
    desc: "During my spare time I love to explore and experiment on designs, this is the place it strives"
  },
  others: {
    name: "Others",
    projects: ["string"],
    desc: "Because i don't know where to group these projects, I'll just leave them here :)"
  },
 } as {[id: string]: ICategory}