import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Aaron Abebe",
  EMAIL: "aaron.abebe@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 1,
  NUM_WORKS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Personal website, blog and contact information of Aaron Abebe",
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
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter",
    HREF: "https://twitter.com/aaronabebe",
  },
  {
    NAME: "github",
    HREF: "https://github.com/aaronabebe"
  },
  {
    NAME: "bandcamp",
    HREF: "https://aaronabebe.bandcamp.com"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/aaron-abebe",
  }
];
