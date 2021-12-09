import { IProject } from "../models"

export default {
  "test-app": {
    id: "test-app",
    images: ["projects/test/cover.jpg"],
    name: "Test app",
    about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. <br><br> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).    ",
    short_desc: "This is just a dummy test app",
    platform: "Web",
    role: "Full-stack",
    categories: ["Web"],
    isFeatured: true,
    links: [{
      name: "GitHub",
      link: "github.com",
      icon: "github"
    }]
  },
  "main-app": {
    id: "main-app",
    images: ["projects/test/cover.jpg"],
    name: "Main app",
    about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. <br><br> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).    ",
    short_desc: "This is just a dummy test app",
    platform: "Web",
    role: "Full-stack",
    categories: ["Web"],
    isFeatured: true,
    links: [{
      name: "GitHub",
      link: "github.com",
      icon: "github"
    }]
  },
  "dev-app": {
    id: "dev-app",
    images: ["projects/test/cover.jpg"],
    name: "Dev app",
    about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. <br><br> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).    ",
    short_desc: "This is just a dummy test app",
    platform: "Web",
    role: "Full-stack",
    categories: ["Web"],
    isFeatured: false,
    links: [{
      name: "GitHub",
      link: "github.com",
      icon: "github"
    }]
  },
} as { [id: string]: IProject }