import { defineConfig } from "vitepress";

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: "zh",
  title: "编故事的演员",
  description: "Vite & Vue powered static site generator.",

  themeConfig: {
    nav: [
      { text: "Home", link: "/index" },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },
    ],

    sidebar: [
      {
        items: [
          {
            text: "前端",
            link: "",
            collapsed: false,
            items: [{ text: "HTML语意化", link: "../html.md" }],
          },
        ],
      },
    ],
  },
});
