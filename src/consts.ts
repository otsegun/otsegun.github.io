import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Oluwasegun Ojo",
  EMAIL: "ojooluwasegunt@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_RESEARCH_ON_HOMEPAGE: 2,
  NUM_BOOKS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Statistician, ML Engineer, and Software Developer sharing insights on data science, machine learning, and software engineering.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A showcase of my software engineering and machine learning projects, from data pipelines to production-ready models and apps.",
};

export const RESEARCH: Metadata = {
  TITLE: "Research",
  DESCRIPTION: "Academic papers, publications, and statistical research work.",
};

export const BOOKS: Metadata = {
  TITLE: "Book Notes",
  DESCRIPTION: "Notes and reflections on books I've read, organized by year.",
};

export const BLOGROLL: Metadata = {
  TITLE: "Blogroll",
  DESCRIPTION: "A collection of blogs and sites I follow and recommend.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/otsegun",
  },
  {
    NAME: "github",
    HREF: "https://github.com/otsegun",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/otsegun",
  }
];
