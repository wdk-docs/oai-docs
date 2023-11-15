import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "OpenAPI 倡议",
  tagline: "伟大的事情变得更好了，激动起来！",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://wdk-docs.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "wdk-docs", // Usually your GitHub org/user name.
  projectName: "oai-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/wdk-docs/oai-docs/tree/main/packages/create-oai-docs/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/wdk-docs/oai-docs/tree/main/packages/create-oai-docs/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/oai-docs-social-card.jpg",
    navbar: {
      title: "OAI",
      logo: {
        alt: "OAI Logo",
        src: "img/OpenAPI_Logo_Pantone-1.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "文档",
        },
        { to: "/blog", label: "博客", position: "left" },
        {
          href: "https://github.com/wdk-docs/oai-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            {
              label: "规范",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "社区",
          items: [
            {
              label: "Github",
              href: "https://github.com/oai",
            },
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/company/open-api-initiative/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/OpenApiSpec",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "博客",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/wdk-docs/oai-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Linux基金会®. 保留所有权利. Linux基金会已注册商标并使用商标. 有关Linux基金会的商标列表，请参阅我们的商标使用页面. Linux是Linus Torvalds的注册商标. 隐私政策和使用条款`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
