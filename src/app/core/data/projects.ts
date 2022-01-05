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
      "BàngáJS is a CLI tool for scaffolding ExpressJS applications and generating application layer files for speed and efficiency.",
      "Bootstrapping an app and having to deal with creating obvious files can be tasking. BàngáJS saves you that time and eliminates most of the routine tasks. You can bootstrap an entire project and with its feature file on the CLI within seconds.",
      "This project was inspired by Angular cli. I wanted to have that ease of generating application files on the backend too."
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
      "BàngáJS offical documentation website.",
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
      "Grade management app for university students to keep track of their grades across different semesters",
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
      "This is literally the site you're on. Built with simplicity in mind to achieve a minimalistic design that matches my personality.",
    ],
    short_desc: "My portfolio website",
    platform: "Web",
    role: "Frontend | Design",
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
      "A web application for recording points of multiple players in a table tennis tournament. It doesn't just record scores, it automatically matches players that should play at each round of the tournament. It also has provision for player elimination after each round",
      "A little background story: I built this after I was cheated at a table tennis tournament because of a miscount, so I decided to do something about it."
    ],
    short_desc: "A web app for recording table tenis mutiplayer tournament",
    platform: "Web",
    role: "Frontend | Design",
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
      "A web app for converting basic measuring units. It's a actually a school assignment but I decided to make it a little more fancy",
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