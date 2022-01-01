import { IProject } from "../models"

export default {
  "bangajs": {
    id: "bangajs",
    cover_image: "projects/bangajs/cover.png",
    images: [
      "projects/bangajs/image-1.png",
      "projects/bangajs/image-2.png",
    ],
    name: "BàngáJS",
    about: [
      "BàngáJS is a CLI generator for scaffolding ExpressJS applications and generating application layer files for speed and efficiency.",
    ],
    short_desc: "A CLI generator for scaffolding ExpressJS applications.",
    platform: "NPM",
    role: "Creator | Maintainer",
    category: "Project",
    isFeatured: true,
    links: {
      git: { link: "https://github.com/bangajs/banga-cli" },
      npm: { link: "https://www.npmjs.com/package/bangajs" },
    },
    tools: ["js", "ejs"],
    year: 2020,
    isVisible: true
  },
  "bangajs-docs": {
    id: "bangajs-docs",
    cover_image: "projects/bangadocs/cover.png",
    images: [
      "projects/bangadocs/image-1.png",
      "projects/bangadocs/image-2.png",
    ],
    name: "BàngáJS Docs",
    about: [
      "BàngáJS offical documentation.",
    ],
    short_desc: "BàngáJS documentation.",
    platform: "Web",
    role: "Frontend",
    category: "Project",
    isFeatured: false,
    links: {
      git: { link: "https://github.com/bangajs/documentation" },
      web: { link: "https://bangajs.com" },
    },
    tools: ["ang", "ts", "html", "scss"],
    year: 2020,
    isVisible: true
  },
  "mygrade": {
    id: "mygrade",
    cover_image: "projects/mygrade/cover.png",
    images: [
      "projects/mygrade/image-1.png",
      "projects/mygrade/image-2.png",
      "projects/mygrade/image-3.png",
    ],
    name: "MyGrade",
    about: [
      "Grade management app for university students",
    ],
    short_desc: "Grade management app for university students",
    platform: "Mobile app",
    role: "Fullstack",
    category: "Project",
    isFeatured: true,
    links: {
      and: { link: "https://play.google.com/store/apps/details?id=com.mygrade.my" },
    },
    tools: ["ionic", "ts", "fbase"],
    year: 2018,
    isVisible: true
  },
  "portfolio-site": {
    id: "portfolio-site",
    cover_image: "projects/ifedili/cover.png",
    images: [
      "projects/ifedili/image-1.png",
      "projects/ifedili/image-2.png",
      "projects/ifedili/image-3.png",
    ],
    name: "Ifedili.com",
    about: [
      "My portfolio website",
    ],
    short_desc: "My portfolio website",
    platform: "Web",
    role: "Frontend",
    category: "Project",
    isFeatured: false,
    links: {
      git: { link: "https://github.com/saucecodee/ifedili.com" },
      web: { link: "https://ifedili.com" },
    },
    tools: ["ang", "ts", "scss"],
    year: 2021,
    isVisible: true
  },
  "table-tennis-recorder": {
    id: "table-tennis-recorder",
    cover_image: "projects/generic/cover.png",
    images: [
      "projects/ping-pong/image-1.png",
      "projects/ping-pong/image-2.png",
      "projects/ping-pong/image-3.png",
    ],
    name: "PingPong",
    about: [
      "A web application for recording points of multiple players in a table tennis tournament.",
    ],
    short_desc: "A web app for recording table tenis mutiplayer tournament",
    platform: "Web",
    role: "Frontend",
    category: "Playground",
    isFeatured: false,
    links: {
      web: { link: "https://saucecodee.github.io/table-tennis-tournament" },
      git: { link: "https://github.com/saucecodee/table-tennis-tournament" },
    },
    tools: ["js", "html", "css"],
    year: 2019,
    isVisible: true
  },
  "unit-converter": {
    id: "unit-converter",
    cover_image: "projects/generic/cover.png",
    images: [
      "projects/unit-converter/image-1.png",
    ],
    name: "Unit converter",
    about: [
      "",
    ],
    short_desc: "A web app for converting basic measuring units",
    platform: "Web",
    role: "Frontend",
    category: "Playground",
    isFeatured: false,
    links: {
      git: { link: "https://github.com/saucecodee/Unit-converter" },
      web: { link: "https://saucecodee.github.io/Unit-converter" },
    },
    tools: ["js", "html", "css"],
    year: 2019,
    isVisible: true
  },
  "test": {
    id: "test",
    cover_image: "projects/generic/cover.png",
    images: [],
    name: "BàngáJS",
    about: [
      "",
    ],
    short_desc: "",
    platform: "NPM",
    role: "Maintainer",
    category: "Project",
    isFeatured: false,
    links: {
      git: { link: "link" },
      npm: { link: "link" },
      ios: { link: "link" },
      and: { link: "link" },
      web: { link: "link" },
    },
    tools: ["js"],
    year: 2020,
    isVisible: false
  },
} as { [id: string]: IProject }