(() => {
  "use strict";
  var e,
    a,
    t,
    r,
    f,
    c = {},
    o = {};
  function n(e) {
    var a = o[e];
    if (void 0 !== a) return a.exports;
    var t = (o[e] = { id: e, loaded: !1, exports: {} });
    return c[e].call(t.exports, t, t.exports, n), (t.loaded = !0), t.exports;
  }
  (n.m = c),
    (n.c = o),
    (e = []),
    (n.O = (a, t, r, f) => {
      if (!t) {
        var c = 1 / 0;
        for (i = 0; i < e.length; i++) {
          (t = e[i][0]), (r = e[i][1]), (f = e[i][2]);
          for (var o = !0, b = 0; b < t.length; b++)
            (!1 & f || c >= f) && Object.keys(n.O).every((e) => n.O[e](t[b]))
              ? t.splice(b--, 1)
              : ((o = !1), f < c && (c = f));
          if (o) {
            e.splice(i--, 1);
            var d = r();
            void 0 !== d && (a = d);
          }
        }
        return a;
      }
      f = f || 0;
      for (var i = e.length; i > 0 && e[i - 1][2] > f; i--) e[i] = e[i - 1];
      e[i] = [t, r, f];
    }),
    (n.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return n.d(a, { a: a }), a;
    }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (n.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var f = Object.create(null);
      n.r(f);
      var c = {};
      a = a || [null, t({}), t([]), t(t)];
      for (var o = 2 & r && e; "object" == typeof o && !~a.indexOf(o); o = t(o))
        Object.getOwnPropertyNames(o).forEach((a) => (c[a] = () => e[a]));
      return (c.default = () => e), n.d(f, c), f;
    }),
    (n.d = (e, a) => {
      for (var t in a)
        n.o(a, t) &&
          !n.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: a[t] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((a, t) => (n.f[t](e, a), a), []))),
    (n.u = (e) =>
      "assets/js/" +
      ({
        25: "5e90a9b3",
        48: "a94703ab",
        61: "1f391b9e",
        98: "a7bd4aaa",
        121: "3a2db09e",
        130: "f81c1134",
        134: "393be207",
        146: "c15d9823",
        209: "01a85c17",
        212: "621db11d",
        235: "a7456010",
        249: "ccc49370",
        276: "e5aefb32",
        325: "59362658",
        328: "e273c56f",
        345: "6d167f15",
        401: "17896441",
        462: "3217192f",
        472: "814f3328",
        557: "d9f32620",
        583: "1df93b7f",
        584: "f82cd581",
        609: "925b3f96",
        637: "f4f34a3a",
        643: "a6aa9e1f",
        647: "5e95c892",
        694: "8717b14a",
        711: "9e4087bc",
        737: "7661071f",
        742: "aba21aa0",
        813: "6875c492",
        849: "0058b4c6",
        858: "36994c47",
        903: "acecf23e",
        947: "ef8b811a",
        972: "73664a40",
        976: "0e384e19",
      }[e] || e) +
      "." +
      {
        25: "e4498e50",
        48: "97ef20f3",
        61: "5177c878",
        98: "d2caf01f",
        121: "ab59827d",
        130: "dce8ab4d",
        134: "cf4ddf4a",
        146: "2f8fdfd5",
        209: "eeea2b1d",
        212: "adf18677",
        235: "158c7df7",
        237: "7a5d8f2c",
        249: "8208576d",
        276: "728be36a",
        325: "526acef0",
        328: "6535c922",
        345: "4a429364",
        347: "c9f335fe",
        401: "2dc369a2",
        462: "0a786ec8",
        472: "9cc3ccdb",
        538: "886711a8",
        557: "41ef21e7",
        583: "3bfec1d9",
        584: "0e400f37",
        609: "cb75e683",
        637: "783ea1be",
        643: "3dafa55e",
        647: "617a9992",
        694: "30b30d36",
        711: "9c476495",
        737: "5d1bbeee",
        742: "815d72ce",
        813: "462c77bb",
        849: "24868a4e",
        858: "d0add5bd",
        903: "7ed3561c",
        947: "7ae79962",
        972: "5e8228b7",
        976: "86a04cba",
      }[e] +
      ".js"),
    (n.miniCssF = (e) => {}),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (r = {}),
    (f = "jailbreak-wiki:"),
    (n.l = (e, a, t, c) => {
      if (r[e]) r[e].push(a);
      else {
        var o, b;
        if (void 0 !== t)
          for (
            var d = document.getElementsByTagName("script"), i = 0;
            i < d.length;
            i++
          ) {
            var l = d[i];
            if (
              l.getAttribute("src") == e ||
              l.getAttribute("data-webpack") == f + t
            ) {
              o = l;
              break;
            }
          }
        o ||
          ((b = !0),
          ((o = document.createElement("script")).charset = "utf-8"),
          (o.timeout = 120),
          n.nc && o.setAttribute("nonce", n.nc),
          o.setAttribute("data-webpack", f + t),
          (o.src = e)),
          (r[e] = [a]);
        var u = (a, t) => {
            (o.onerror = o.onload = null), clearTimeout(s);
            var f = r[e];
            if (
              (delete r[e],
              o.parentNode && o.parentNode.removeChild(o),
              f && f.forEach((e) => e(t)),
              a)
            )
              return a(t);
          },
          s = setTimeout(
            u.bind(null, void 0, { type: "timeout", target: o }),
            12e4
          );
        (o.onerror = u.bind(null, o.onerror)),
          (o.onload = u.bind(null, o.onload)),
          b && document.head.appendChild(o);
      }
    }),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (n.gca = function (e) {
      return (
        (e =
          {
            17896441: "401",
            59362658: "325",
            "5e90a9b3": "25",
            a94703ab: "48",
            "1f391b9e": "61",
            a7bd4aaa: "98",
            "3a2db09e": "121",
            f81c1134: "130",
            "393be207": "134",
            c15d9823: "146",
            "01a85c17": "209",
            "621db11d": "212",
            a7456010: "235",
            ccc49370: "249",
            e5aefb32: "276",
            e273c56f: "328",
            "6d167f15": "345",
            "3217192f": "462",
            "814f3328": "472",
            d9f32620: "557",
            "1df93b7f": "583",
            f82cd581: "584",
            "925b3f96": "609",
            f4f34a3a: "637",
            a6aa9e1f: "643",
            "5e95c892": "647",
            "8717b14a": "694",
            "9e4087bc": "711",
            "7661071f": "737",
            aba21aa0: "742",
            "6875c492": "813",
            "0058b4c6": "849",
            "36994c47": "858",
            acecf23e: "903",
            ef8b811a: "947",
            "73664a40": "972",
            "0e384e19": "976",
          }[e] || e),
        n.p + n.u(e)
      );
    }),
    (() => {
      var e = { 354: 0, 869: 0 };
      (n.f.j = (a, t) => {
        var r = n.o(e, a) ? e[a] : void 0;
        if (0 !== r)
          if (r) t.push(r[2]);
          else if (/^(354|869)$/.test(a)) e[a] = 0;
          else {
            var f = new Promise((t, f) => (r = e[a] = [t, f]));
            t.push((r[2] = f));
            var c = n.p + n.u(a),
              o = new Error();
            n.l(
              c,
              (t) => {
                if (n.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    c = t && t.target && t.target.src;
                  (o.message =
                    "Loading chunk " + a + " failed.\n(" + f + ": " + c + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = f),
                    (o.request = c),
                    r[1](o);
                }
              },
              "chunk-" + a,
              a
            );
          }
      }),
        (n.O.j = (a) => 0 === e[a]);
      var a = (a, t) => {
          var r,
            f,
            c = t[0],
            o = t[1],
            b = t[2],
            d = 0;
          if (c.some((a) => 0 !== e[a])) {
            for (r in o) n.o(o, r) && (n.m[r] = o[r]);
            if (b) var i = b(n);
          }
          for (a && a(t); d < c.length; d++)
            (f = c[d]), n.o(e, f) && e[f] && e[f][0](), (e[f] = 0);
          return n.O(i);
        },
        t = (self.webpackChunkjailbreak_wiki =
          self.webpackChunkjailbreak_wiki || []);
      t.forEach(a.bind(null, 0)), (t.push = a.bind(null, t.push.bind(t)));
    })();
})();
