import type {ThemeOptions} from "vuepress-theme-hope";

export const themeOptions: ThemeOptions = {
    logo: "/Kurrent Logo - Plum.svg",
    logoDark: "/Kurrent Logo - White.svg",
    docsDir: 'docs',
    editLink: false,
    lastUpdated: true,
    toc: true,
    repo: "https://github.com/kurrent-io",
    repoLabel: "GitHub",
    repoDisplay: true,
    contributors: false,
    pure: false,
    darkmode:"toggle",
    headerDepth: 3,
    pageInfo: false,
    markdown: {
        figure: true,
        imgLazyload: true,
        imgMark: true,
        imgSize: true,
        tabs: true,
        codeTabs: true,
        component: true,
        mermaid: true,
        highlighter: {
            type: "shiki",
            themes: {
                light: "one-light",
                dark: "one-dark-pro",
            }
        }
    }
}

