import React from "react";
import ComponentCreator from "@docusaurus/ComponentCreator";

export default [
  {
    path: "/blog",
    component: ComponentCreator("/blog", "b2f"),
    exact: true,
  },
  {
    path: "/blog/archive",
    component: ComponentCreator("/blog/archive", "182"),
    exact: true,
  },
  {
    path: "/blog/authors",
    component: ComponentCreator("/blog/authors", "0b7"),
    exact: true,
  },
  {
    path: "/blog/authors/all-sebastien-lorber-articles",
    component: ComponentCreator(
      "/blog/authors/all-sebastien-lorber-articles",
      "4a1"
    ),
    exact: true,
  },
  {
    path: "/blog/authors/yangshun",
    component: ComponentCreator("/blog/authors/yangshun", "a68"),
    exact: true,
  },
  {
    path: "/blog/first-blog-post",
    component: ComponentCreator("/blog/first-blog-post", "89a"),
    exact: true,
  },
  {
    path: "/blog/long-blog-post",
    component: ComponentCreator("/blog/long-blog-post", "9ad"),
    exact: true,
  },
  {
    path: "/blog/mdx-blog-post",
    component: ComponentCreator("/blog/mdx-blog-post", "e9f"),
    exact: true,
  },
  {
    path: "/blog/tags",
    component: ComponentCreator("/blog/tags", "287"),
    exact: true,
  },
  {
    path: "/blog/tags/docusaurus",
    component: ComponentCreator("/blog/tags/docusaurus", "704"),
    exact: true,
  },
  {
    path: "/blog/tags/facebook",
    component: ComponentCreator("/blog/tags/facebook", "858"),
    exact: true,
  },
  {
    path: "/blog/tags/hello",
    component: ComponentCreator("/blog/tags/hello", "299"),
    exact: true,
  },
  {
    path: "/blog/tags/hola",
    component: ComponentCreator("/blog/tags/hola", "00d"),
    exact: true,
  },
  {
    path: "/blog/welcome",
    component: ComponentCreator("/blog/welcome", "d2b"),
    exact: true,
  },
  {
    path: "/markdown-page",
    component: ComponentCreator("/markdown-page", "3d7"),
    exact: true,
  },
  {
    path: "/docs",
    component: ComponentCreator("/docs", "5d3"),
    routes: [
      {
        path: "/docs",
        component: ComponentCreator("/docs", "400"),
        routes: [
          {
            path: "/docs",
            component: ComponentCreator("/docs", "53b"),
            routes: [
              {
                path: "/docs/Hardware/Sony/Playstation/4",
                component: ComponentCreator(
                  "/docs/Hardware/Sony/Playstation/4",
                  "266"
                ),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/docs/Hardware/Sony/Playstation/4/Firmware Version/11.0/GoldHEN",
                component: ComponentCreator(
                  "/docs/Hardware/Sony/Playstation/4/Firmware Version/11.0/GoldHEN",
                  "bf7"
                ),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/docs/intro",
                component: ComponentCreator("/docs/intro", "61d"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
              {
                path: "/docs/Software/Apple/iOS",
                component: ComponentCreator("/docs/Software/Apple/iOS", "6e2"),
                exact: true,
                sidebar: "tutorialSidebar",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/",
    component: ComponentCreator("/", "e5f"),
    exact: true,
  },
  {
    path: "*",
    component: ComponentCreator("*"),
  },
];
