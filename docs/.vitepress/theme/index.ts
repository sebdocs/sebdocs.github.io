// .vitepress/theme/index.ts

import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import SimpleIcon from "./components/SimpleIcon.vue";

import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("SimpleIcon", SimpleIcon);
  },
} satisfies Theme;
