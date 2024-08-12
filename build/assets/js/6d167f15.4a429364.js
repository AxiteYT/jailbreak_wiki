"use strict";
(self.webpackChunkjailbreak_wiki = self.webpackChunkjailbreak_wiki || []).push([
  [345],
  {
    2682: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => d,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => l,
        });
      var r = o(4848),
        n = o(8453);
      const i = { sidebar_position: 1 },
        a = "GoldHEN Exploit (2.4b17.3)",
        s = {
          id: "Hardware/Sony/Playstation/4/Firmware Version/11.0/GoldHEN",
          title: "GoldHEN Exploit (2.4b17.3)",
          description: "TODO: Complete document",
          source:
            "@site/docs/Hardware/Sony/Playstation/4/Firmware Version/11.0/GoldHEN.md",
          sourceDirName: "Hardware/Sony/Playstation/4/Firmware Version/11.0",
          slug: "/Hardware/Sony/Playstation/4/Firmware Version/11.0/GoldHEN",
          permalink:
            "/docs/Hardware/Sony/Playstation/4/Firmware Version/11.0/GoldHEN",
          draft: !1,
          unlisted: !1,
          editUrl:
            "https://github.com/AxiteYT/jailbreak_wiki/tree/main/packages/create-docusaurus/templates/shared/docs/Hardware/Sony/Playstation/4/Firmware Version/11.0/GoldHEN.md",
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "tutorialSidebar",
          previous: { title: "Tutorial Intro", permalink: "/docs/intro" },
        },
        d = {},
        l = [
          {
            value: "TODO: Complete document",
            id: "todo-complete-document",
            level: 2,
          },
        ];
      function c(e) {
        const t = {
          h1: "h1",
          h2: "h2",
          header: "header",
          ...(0, n.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(t.header, {
              children: (0, r.jsx)(t.h1, {
                id: "goldhen-exploit-24b173",
                children: "GoldHEN Exploit (2.4b17.3)",
              }),
            }),
            "\n",
            (0, r.jsx)(t.h2, {
              id: "todo-complete-document",
              children: "TODO: Complete document",
            }),
          ],
        });
      }
      function u(e = {}) {
        const { wrapper: t } = { ...(0, n.R)(), ...e.components };
        return t
          ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(c, { ...e }) })
          : c(e);
      }
    },
    8453: (e, t, o) => {
      o.d(t, { R: () => a, x: () => s });
      var r = o(6540);
      const n = {},
        i = r.createContext(n);
      function a(e) {
        const t = r.useContext(i);
        return r.useMemo(
          function () {
            return "function" == typeof e ? e(t) : { ...t, ...e };
          },
          [t, e]
        );
      }
      function s(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(n)
              : e.components || n
            : a(e.components)),
          r.createElement(i.Provider, { value: t }, e.children)
        );
      }
    },
  },
]);
