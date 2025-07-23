import { dl } from "@mdit/plugin-dl";
import viteBundler from "@vuepress/bundler-vite";
import vueDevTools from 'vite-plugin-vue-devtools'
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { themeOptions } from "./configs/theme";
import { linkCheckPlugin } from "./markdown/linkCheck";
import { replaceLinkPlugin } from "./markdown/replaceLink";


export default defineUserConfig({
  base: "/",
  dest: "public",
  title: "Docs",
  description: "Event-native database",
  bundler: viteBundler({ viteOptions: { plugins: [vueDevTools(),], } }),
  markdown: { importCode: false },
  extendsMarkdown: md => {
    md.use(linkCheckPlugin);
    md.use(replaceLinkPlugin, {
      replaceLink: (link: string, _) => link
        .replace("@api", "/api")
        .replace("@server/", "/server/{version}/")
    });
    md.use(dl);
  },
  theme: hopeTheme(themeOptions, { custom: true }),
});
