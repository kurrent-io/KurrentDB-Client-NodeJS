import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import tailwindcss from "@tailwindcss/vite";
import rehypeMermaid from 'rehype-mermaid';
import logoPlum from "./src/assets/img/logo-plum.svg";
import logoLight  from "./src/assets/img/logo-white.svg";
import starlightDocSearch from '@astrojs/starlight-docsearch';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');

const PUBLIC_ALGOLIA_APPLICATION_ID = process.env.PUBLIC_ALGOLIA_APPLICATION_ID || env.PUBLIC_ALGOLIA_APPLICATION_ID;
const PUBLIC_ALGOLIA_SEARCH_API_KEY = process.env.PUBLIC_ALGOLIA_SEARCH_API_KEY || env.PUBLIC_ALGOLIA_SEARCH_API_KEY;
const PUBLIC_ALGOLIA_INDEX_NAME = process.env.PUBLIC_ALGOLIA_INDEX_NAME || env.PUBLIC_ALGOLIA_INDEX_NAME;

const isLocal = process.env.NODE_ENV === "development";

const plugins = [starlightImageZoom()];

if (PUBLIC_ALGOLIA_APPLICATION_ID && PUBLIC_ALGOLIA_SEARCH_API_KEY && PUBLIC_ALGOLIA_INDEX_NAME) {
  plugins.push(starlightDocSearch({
    appId: PUBLIC_ALGOLIA_APPLICATION_ID,
    apiKey: PUBLIC_ALGOLIA_SEARCH_API_KEY,
    indexName: PUBLIC_ALGOLIA_INDEX_NAME,
  }));
} 

export default defineConfig({
  integrations: [
    starlight({
      components: {
        ThemeSelect: "./src/components/ThemeSelect.astro",
        Sidebar: "./src/components/CustomSidebar.astro"
      },
      customCss: [
        "./src/assets/styles/global.css", 
        "./src/assets/styles/custom.css",
        "./src/assets/fonts/font-face.css",
        "./src/assets/styles/nav-links.css", 
      ],
      favicon: "/assets/img/favicon.ico",
      head: [
        {
          tag: 'script',
          content: `
            (function() {
              const theme = localStorage.getItem('starlight-theme') || 'light';
              document.documentElement.setAttribute('data-theme', theme);
            })();
          `
        },
        // Add navigation links via JavaScript, to avoid creating a new component
        {
          tag: 'script',
          content: `
            document.addEventListener('DOMContentLoaded', function() {
              const header = document.querySelector('.header');
              if (header) {
                // Create nav container
                const navContainer = document.createElement('nav');
                navContainer.className = 'custom-nav-links';
                
                // Define navigation items
                const navItems = [
                  { label: 'Getting Started', href: '/getting-started/introduction/', pathMatch: '/getting-started/' },
                  { label: 'Kurrent Cloud', href: '/cloud/introduction/', pathMatch: '/cloud/' },
                  { label: 'KurrentDB', href: '/server/v25.0/quick-start/', pathMatch: '/server/' },
                  { label: 'Client & SDKs', href: '/client/grpc/', pathMatch: '/client/' },
                  { label: 'Tutorials', href: '/tutorials/auto-scavenge/', pathMatch: '/tutorials/' }
                ];
                
                // Create nav links
                navItems.forEach(item => {
                  const link = document.createElement('a');
                  link.href = item.href;
                  link.textContent = item.label;
                  link.className = 'nav-link';
                  
                  // Mark active link
                  if (window.location.pathname.startsWith(item.pathMatch)) {
                    link.classList.add('active');
                  }
                  
                  navContainer.appendChild(link);
                });
                
                // Insert after logo/site title
                const siteTitle = header.querySelector('.site-title');
                if (siteTitle && siteTitle.parentNode) {
                  siteTitle.parentNode.insertBefore(navContainer, siteTitle.nextSibling);
                }
              }
            });
          `
        },
        ...(!isLocal
          ? [
              {
                attrs: {
                  src: "https://secure.businessintuition247.com/js/264384.js",
                  type: "text/javascript",
                },
                tag: "script",
              }, 
              {
                content:
                  '<img alt="" src="https://secure.businessintuition247.com/264384.png" style="display:none;" />',
                tag: "noscript",
              },
              {
                tag: 'script',
                content: `
                  setTimeout(() => {
                    const script = document.createElement('script');
                    script.setAttribute('data-blockingmode', 'auto');
                    script.setAttribute('data-cbid', 'ee971b30-e872-46e8-b421-706ef26d9dcc');
                    script.id = 'Cookiebot';
                    script.src = 'https://consent.cookiebot.com/uc.js';
                    script.type = 'text/javascript';
                    document.head.appendChild(script);
                  }, 100);
                `
              },
              {
                tag: 'script',
                content: `
                  setTimeout(() => {
                    const script = document.createElement('script');
                    script.async = true;
                    script.id = 'CookieDeclaration';
                    script.src = 'https://consent.cookiebot.com/ee971b30-e872-46e8-b421-706ef26d9dcc/cd.js';
                    script.type = 'text/javascript';
                    document.head.appendChild(script);
                  }, 150);
                `
              },
              {
                attrs: {
                  "data-cookiecategory": "marketing",
                  src: "https://secure.businessintuition247.com/js/sc/264384.js",
                  type: "text/plain",
                },
                tag: "script",
              },
              {
                attrs: {
                  "data-project-color": "#631B3A",
                  "data-project-logo": logoLight, 
                  "data-project-name": "Kurrent",
                  "data-project-id": "9ff147dd-2c68-495d-9859-de159901d8c5",
                  src: "https://widget.kapa.ai/kapa-widget.bundle.js",
                },
                tag: "script",
              },
            ]
          : []),
      ],
      logo: {
        dark: logoLight,
        light: logoPlum,  
        replacesTitle: true,
      },
      plugins: plugins,
      social: [
        {
          href: "https://github.com/kurrent-io",
          icon: "github",
          label: "GitHub",
        },
      ],
      title: "Kurrent Documentation",
    }),
  ],
  markdown: {
    syntaxHighlight: {
      theme: "github-dark",
      excludeLangs: ['mermaid']
    },
    rehypePlugins: [
      [rehypeMermaid, {
        strategy: 'img-svg',
        dark: true, 
        // Light theme config
        mermaidConfig: {
          theme: 'base',
          themeVariables: {
            // Light mode colors
            background: '#ffffff',
            primaryColor: '#631B3A',
            primaryTextColor: '#ffffff',
            primaryBorderColor: '#631B3A',
            lineColor: '#475569',
            textColor: '#1e293b',
            mainBkg: '#631B3A',
            secondaryColor: '#f8fafc',
            tertiaryColor: '#f1f5f9',
            
            edgeLabelBackground: '#ffc107',
            labelTextColor: '#1a1a1a',
            
            clusterBkg: '#f8f9fa',
            clusterBorder: '#6c757d',
            
            defaultLinkColor: '#6c757d'
          }
        },
        // Dark theme config
        darkMermaidConfig: {
          theme: 'base',
          themeVariables: {
            // Dark mode colors 
            background: '#1e293b',
            primaryColor: '#8b4d6b',
            primaryTextColor: '#ffffff',
            primaryBorderColor: '#8b4d6b',
            lineColor: '#94a3b8',
            textColor: '#f1f5f9',
            mainBkg: '#8b4d6b',
            secondaryColor: '#334155',
            tertiaryColor: '#475569',
            
            edgeLabelBackground: '#f59e0b',
            labelTextColor: '#1a1a1a',
            
            clusterBkg: '#334155',
            clusterBorder: '#64748b',
            
            defaultLinkColor: '#9ca3af'
          }
        }
      }]
    ]
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: [
        { find: "@grpc/", replacement: "/src/content/_samples/grpc/" },
        { find: "@httpapi/", replacement: "/src/content/_samples/http-api/" },
        { find: "@server/", replacement: "/src/content/_samples/server/" },
        { find: "@/components", replacement: "/src/components" },
      ],
    },
  },
});