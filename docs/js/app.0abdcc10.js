(function(e) {
  function t(t) {
    for (
      var a, s, c = t[0], l = t[1], i = t[2], u = 0, d = [];
      u < c.length;
      u++
    )
      (s = c[u]), r[s] && d.push(r[s][0]), (r[s] = 0);
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
    f && f(t);
    while (d.length) d.shift()();
    return o.push.apply(o, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], a = !0, s = 1; s < n.length; s++) {
        var l = n[s];
        0 !== r[l] && (a = !1);
      }
      a && (o.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var a = {},
    r = { app: 0 },
    o = [];
  function s(e) {
    return (
      c.p +
      "js/" +
      ({ about: "about" }[e] || e) +
      "." +
      { about: "b1521413" }[e] +
      ".js"
    );
  }
  function c(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.e = function(e) {
    var t = [],
      n = r[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var a = new Promise(function(t, a) {
          n = r[e] = [t, a];
        });
        t.push((n[2] = a));
        var o,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          c.nc && l.setAttribute("nonce", c.nc),
          (l.src = s(e)),
          (o = function(t) {
            (l.onerror = l.onload = null), clearTimeout(i);
            var n = r[e];
            if (0 !== n) {
              if (n) {
                var a = t && ("load" === t.type ? "missing" : t.type),
                  o = t && t.target && t.target.src,
                  s = new Error(
                    "Loading chunk " + e + " failed.\n(" + a + ": " + o + ")"
                  );
                (s.type = a), (s.request = o), n[1](s);
              }
              r[e] = void 0;
            }
          });
        var i = setTimeout(function() {
          o({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = o), document.head.appendChild(l);
      }
    return Promise.all(t);
  }),
    (c.m = e),
    (c.c = a),
    (c.d = function(e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (c.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function(e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          c.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (c.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "https://4lg4.github.io/cluedo-notepad/"),
    (c.oe = function(e) {
      throw (console.error(e), e);
    });
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    i = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var u = 0; u < l.length; u++) t(l[u]);
  var f = i;
  o.push([0, "chunk-vendors"]), n();
})({
  0: function(e, t, n) {
    e.exports = n("56d7");
  },
  "034f": function(e, t, n) {
    "use strict";
    var a = n("64a9"),
      r = n.n(a);
    r.a;
  },
  "47ed": function(e, t, n) {
    "use strict";
    var a = n("bb31"),
      r = n.n(a);
    r.a;
  },
  "56d7": function(e, t, n) {
    "use strict";
    n.r(t);
    n("cadf"), n("551c"), n("f751"), n("097d");
    var a = n("2b0e"),
      r = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "v-app",
          { staticClass: "AlgaCluedoNotepad", attrs: { id: "app", dark: "" } },
          [
            n(
              "v-toolbar",
              {
                staticClass: "toolbar",
                attrs: { app: "", fixed: "", "clipped-left": "" }
              },
              [
                n(
                  "v-toolbar-title",
                  [
                    n(
                      "router-link",
                      { staticClass: "router-link", attrs: { to: "/" } },
                      [e._v("Cluedo Notepad")]
                    )
                  ],
                  1
                ),
                n("v-spacer"),
                n(
                  "v-toolbar-items",
                  [
                    "/" !== e.$route.path
                      ? n(
                          "v-btn",
                          {
                            attrs: { flat: "" },
                            on: {
                              click: function(t) {
                                return e.navigate("home");
                              }
                            }
                          },
                          [
                            n("v-icon", { attrs: { light: "" } }, [
                              e._v("arrow_back_ios")
                            ])
                          ],
                          1
                        )
                      : e._e(),
                    "/config" !== e.$route.path
                      ? n(
                          "v-btn",
                          {
                            attrs: { flat: "" },
                            on: {
                              click: function(t) {
                                return e.navigate("config");
                              }
                            }
                          },
                          [
                            n("v-icon", { attrs: { light: "" } }, [
                              e._v("settings")
                            ])
                          ],
                          1
                        )
                      : e._e()
                  ],
                  1
                )
              ],
              1
            ),
            n(
              "v-content",
              [
                n(
                  "v-container",
                  {
                    staticClass: "body App__body",
                    attrs: { fluid: "", "fill-height": "" }
                  },
                  [n("router-view")],
                  1
                )
              ],
              1
            )
          ],
          1
        );
      },
      o = [],
      s = {
        data: function() {
          return { drawer: null };
        },
        props: {},
        methods: {
          navigate: function(e) {
            this.$router.push({ name: e });
          }
        }
      },
      c = s,
      l = (n("034f"), n("2877")),
      i = Object(l["a"])(c, r, o, !1, null, null, null),
      u = i.exports,
      f = (n("7f7f"), n("8c4f")),
      d = n("5d73"),
      p = n.n(d),
      m = (n("ac6a"), n("f499")),
      h = n.n(m),
      v = n("2f62");
    a["default"].use(v["a"]);
    var b = (window.s = (function() {
        var e = "__ALGA_CLUEDO_NOTEPAD__",
          t = window.localStorage,
          n = function(n) {
            var a = t.getItem("".concat(e).concat(n));
            if (a)
              try {
                return JSON.parse(a);
              } catch (r) {
                return console.error("Storage data broken", r), null;
              }
            return null;
          },
          a = function(n, a) {
            try {
              return t.setItem("".concat(e).concat(n), h()(a)), !0;
            } catch (r) {
              return console.error(r), !1;
            }
          };
        return { get: n, set: a };
      })()),
      _ = [
        { name: "Green" },
        { name: "Mustard" },
        { name: "Orchid" },
        { name: "Peacock" },
        { name: "Plum" },
        { name: "Scarlet" }
      ],
      y = [
        { name: "Candlestick" },
        { name: "Dagger" },
        { name: "Lead Pipe" },
        { name: "Revolver" },
        { name: "Rope" },
        { name: "Wrench" }
      ],
      w = [
        { name: "Ballroom" },
        { name: "Billiard Room" },
        { name: "Conservatory" },
        { name: "Dining Room" },
        { name: "Hall" },
        { name: "Kitchen" },
        { name: "Library" },
        { name: "Lounge" },
        { name: "Study" }
      ],
      g = {
        default: "check_box_outline_blank",
        maybe: "indeterminate_check_box",
        right: "check_box"
      },
      P = { characters: {}, places: {}, weapons: {} };
    _.forEach(function(e) {
      var t = {};
      [0, 1, 2, 3, 4, 5].forEach(function(e) {
        return (t[e] = g.default);
      }),
        (P.characters[e.name] = t);
    }),
      y.forEach(function(e) {
        var t = {};
        [0, 1, 2, 3, 4, 5].forEach(function(e) {
          return (t[e] = g.default);
        }),
          (P.weapons[e.name] = t);
      }),
      w.forEach(function(e) {
        var t = {};
        [0, 1, 2, 3, 4, 5].forEach(function(e) {
          return (t[e] = g.default);
        }),
          (P.places[e.name] = t);
      });
    var k = new v["a"].Store({
        state: {
          user: {},
          players: b.get("players") || [null, null, null, null, null],
          characters: b.get("characters") || _,
          weapons: b.get("weapons") || y,
          places: b.get("places") || w,
          answers: b.get("answers") || P
        },
        getters: {
          isPlayersSet: function(e) {
            var t = e.players,
              n = !0,
              a = !1,
              r = void 0;
            try {
              for (var o, s = p()(t); !(n = (o = s.next()).done); n = !0) {
                var c = o.value;
                if (c) return !0;
              }
            } catch (l) {
              (a = !0), (r = l);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (a) throw r;
              }
            }
            return !1;
          }
        },
        mutations: {
          setPlayers: function(e, t) {
            (e.players = t), b.set("players", e.players);
          },
          setAnswer: function(e, t) {
            var n = t.answer,
              r = t.name,
              o = t.index;
            console.log("change", n, r, o),
              "check_box_outline_blank" === e.answers[n][r][o]
                ? (e.answers[n][r][o] = a["default"].set(
                    e.answers[n][r],
                    o,
                    "indeterminate_check_box"
                  ))
                : "indeterminate_check_box" === e.answers[n][r][o]
                ? (e.answers[n][r][o] = a["default"].set(
                    e.answers[n][r],
                    o,
                    "check_box"
                  ))
                : (e.answers[n][r][o] = a["default"].set(
                    e.answers[n][r],
                    o,
                    "check_box_outline_blank"
                  ));
          }
        },
        actions: {
          setPlayers: function(e, t) {
            var n = e.commit;
            n("setPlayers", t);
          },
          setAnswer: function(e, t) {
            var n = e.commit;
            n("setAnswer", t);
          }
        }
      }),
      x = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "VFlex",
          { staticClass: "NotepadModule", attrs: { row: "" } },
          [
            n("v-data-table", {
              attrs: {
                headers: e.headers,
                items: e.weapons,
                totalItems: 10,
                rowsPerPage: -1,
                "hide-actions": ""
              },
              scopedSlots: e._u([
                {
                  key: "items",
                  fn: function(t) {
                    return [
                      n("td", { staticClass: "NotepadModule__cell" }, [
                        e._v(e._s(t.item.name))
                      ]),
                      e._l(new Array(e.players.length + 1), function(a, r) {
                        return n(
                          "td",
                          {
                            key: "weapons-" + r,
                            staticClass: "NotepadModule__cell",
                            on: {
                              click: function(n) {
                                return e.setAnswer({
                                  answer: "weapons",
                                  name: t.item.name,
                                  index: r
                                });
                              }
                            }
                          },
                          [
                            n("VIcon", [
                              e._v(e._s(e.answers.weapons[t.item.name][r]))
                            ])
                          ],
                          1
                        );
                      })
                    ];
                  }
                }
              ])
            }),
            n("br"),
            n("v-data-table", {
              staticClass: "elevation-1",
              attrs: {
                headers: e.headers,
                items: e.places,
                totalItems: 10,
                rowsPerPage: -1,
                "hide-actions": ""
              },
              scopedSlots: e._u([
                {
                  key: "items",
                  fn: function(t) {
                    return [
                      n("td", { staticClass: "NotepadModule__cell" }, [
                        e._v(e._s(t.item.name))
                      ]),
                      e._l(new Array(e.players.length + 1), function(a, r) {
                        return n(
                          "td",
                          {
                            key: "places-" + r,
                            staticClass: "NotepadModule__cell",
                            on: {
                              click: function(n) {
                                return e.setAnswer({
                                  answer: "places",
                                  name: t.item.name,
                                  index: r
                                });
                              }
                            }
                          },
                          [
                            n("VIcon", [
                              e._v(e._s(e.answers.places[t.item.name][r]))
                            ])
                          ],
                          1
                        );
                      })
                    ];
                  }
                }
              ])
            }),
            n("br"),
            n("v-data-table", {
              staticClass: "elevation-1",
              attrs: {
                headers: e.headers,
                items: e.characters,
                totalItems: 10,
                rowsPerPage: -1,
                "hide-actions": ""
              },
              scopedSlots: e._u([
                {
                  key: "items",
                  fn: function(t) {
                    return [
                      n("td", { staticClass: "NotepadModule__cell" }, [
                        e._v(e._s(t.item.name))
                      ]),
                      e._l(new Array(e.players.length + 1), function(a, r) {
                        return n(
                          "td",
                          {
                            key: "characters-" + r,
                            staticClass: "NotepadModule__cell",
                            on: {
                              click: function(n) {
                                return e.setAnswer({
                                  answer: "characters",
                                  name: t.item.name,
                                  index: r
                                });
                              }
                            }
                          },
                          [
                            n("VIcon", [
                              e._v(e._s(e.answers.characters[t.item.name][r]))
                            ])
                          ],
                          1
                        );
                      })
                    ];
                  }
                }
              ])
            })
          ],
          1
        );
      },
      O = [],
      C = n("cebc"),
      j = {
        name: "NotepadModule",
        components: {},
        data: function() {
          return { one: !0, two: !0, three: !0 };
        },
        computed: Object(C["a"])(
          {},
          Object(v["c"])([
            "players",
            "characters",
            "weapons",
            "places",
            "answers"
          ]),
          {
            headers: function() {
              var e = this.players.map(function(e) {
                return { text: e, value: e, sortable: !1 };
              });
              return (
                e.unshift({ text: "", value: "me", sortable: !1 }),
                e.unshift({ text: "", value: "*", sortable: !1 }),
                e
              );
            }
          }
        ),
        methods: Object(C["a"])({}, Object(v["b"])(["setAnswer"])),
        created: function() {}
      },
      S = j,
      A = (n("47ed"), Object(l["a"])(S, x, O, !1, null, null, null)),
      M = A.exports,
      E = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "ConfigModule" },
          [
            n("h2", [e._v("Players")]),
            n(
              "v-form",
              [
                n(
                  "v-container",
                  [
                    n(
                      "v-layout",
                      { attrs: { row: "", wrap: "" } },
                      e._l(e.thePlayers, function(t, a) {
                        return n(
                          "v-flex",
                          { key: a, attrs: { xs12: "" } },
                          [
                            n("v-text-field", {
                              attrs: {
                                label: "Player " + (a + 1),
                                "single-line": ""
                              },
                              on: { input: e.theSetPlayers },
                              model: {
                                value: e.thePlayers[a],
                                callback: function(t) {
                                  e.$set(e.thePlayers, a, t);
                                },
                                expression: "thePlayers[index]"
                              }
                            })
                          ],
                          1
                        );
                      }),
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        );
      },
      N = [],
      I = {
        name: "ConfigModule",
        components: {},
        data: function() {
          return { thePlayers: [] };
        },
        computed: Object(C["a"])({}, Object(v["c"])(["players"])),
        created: function() {
          this.thePlayers = this.players;
        },
        methods: Object(C["a"])({}, Object(v["b"])(["setPlayers"]), {
          theSetPlayers: function() {
            this.setPlayers(this.thePlayers);
          }
        })
      },
      $ = I,
      L = Object(l["a"])($, E, N, !1, null, null, null),
      T = L.exports;
    a["default"].use(f["a"]);
    var D = new f["a"]({
      routes: [
        { path: "/", name: "home", component: M },
        { path: "/config", name: "config", component: T },
        {
          path: "/about",
          name: "about",
          component: function() {
            return n.e("about").then(n.bind(null, "f820"));
          }
        }
      ]
    });
    D.beforeEach(function(e, t, n) {
      if (!k.getters.isPlayersSet && "config" !== e.name)
        return n({ name: "config" });
      n();
    });
    var R = D,
      V = n("ce5b"),
      J = n.n(V);
    (a["default"].config.productionTip = !1),
      a["default"].use(J.a),
      new a["default"]({
        router: R,
        store: k,
        render: function(e) {
          return e(u);
        }
      }).$mount("#app");
  },
  "64a9": function(e, t, n) {},
  bb31: function(e, t, n) {}
});
//# sourceMappingURL=app.0abdcc10.js.map
