import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  "/en/portfolio",
  "/en/demo/en/",
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/en/guide/en/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/en/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/en/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https:/en//en/theme-hope.vuejs.press/en/",
  },
]);
