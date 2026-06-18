import { defineConfig } from "vitepress";
import { siRefinedgithub } from "simple-icons";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "seb's docs",
  description: "welcome to my documentation",
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/sebhkx",
      },

      {
        icon: {
          svg: siRefinedgithub.svg.replace(
            "<title>Refined GitHub</title>",
            "<title>Professional GitHub Portfolio</title>",
          ),
        },
        link: "https://github.com/sebastianhkx",
      },
    ],
  },
});
