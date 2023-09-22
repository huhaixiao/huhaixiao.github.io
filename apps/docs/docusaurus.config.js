// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "One",
  tagline: "Less is more",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/core",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "huhaixiao", // Usually your GitHub org/user name.
  projectName: "huhaixiao.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex]
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "one",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg"
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "jic",
            position: "left",
            label: "Just in case"
          },
          {
            type: "docSidebar",
            sidebarId: "jit",
            position: "left",
            label: "Just in time"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/huhaixiao"
              },
              {
                label: "LeetCode-cn",
                href: "https://leetcode.cn/u/haixhu/"
              },
              {
                label: "gitee update",
                href: "https://gitee.com/huhaixiao/huhaixiao/pages"
              },
              {
                label: "语雀",
                href: "https://www.yuque.com/dashboard"
              }
            ]
          },
          {
            title: "docs",
            items: [
              {
                label: "help",
                href: "https://docusaurus.io/"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      // https://docusaurus.io/docs/api/themes/configuration/#color-mode---dark-mode
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false
      }
    }),

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
          "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous"
    }
  ],

  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          // "appInstalled",
          // "standalone",
          // activates if queryString contains offlineMode=true (convenient for PWA debugging)
          "queryString"
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/docusaurus.png"
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json" // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(0, 0, 0)"
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes"
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#000"
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/docusaurus.png"
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/img/docusaurus.svg",
            color: "rgb(37, 194, 160)"
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/docusaurus.png"
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#000"
          }
        ]
      }
    ]
  ]
};

module.exports = config;
