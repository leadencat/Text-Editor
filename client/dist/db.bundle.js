(() => {
  var t = {
      61: (t, e, r) => {
        var n = r(698).default;
        function o() {
          "use strict";
          (t.exports = o =
            function () {
              return e;
            }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
          var e = {},
            r = Object.prototype,
            i = r.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            c = "function" == typeof Symbol ? Symbol : {},
            s = c.iterator || "@@iterator",
            u = c.asyncIterator || "@@asyncIterator",
            l = c.toStringTag || "@@toStringTag";
          function f(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            f({}, "");
          } catch (t) {
            f = function (t, e, r) {
              return (t[e] = r);
            };
          }
          function p(t, e, r, n) {
            var o = e && e.prototype instanceof v ? e : v,
              i = Object.create(o.prototype),
              c = new S(n || []);
            return a(i, "_invoke", { value: j(t, r, c) }), i;
          }
          function h(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = p;
          var d = {};
          function v() {}
          function y() {}
          function g() {}
          var m = {};
          f(m, s, function () {
            return this;
          });
          var b = Object.getPrototypeOf,
            w = b && b(b(O([])));
          w && w !== r && i.call(w, s) && (m = w);
          var x = (g.prototype = v.prototype = Object.create(m));
          function L(t) {
            ["next", "throw", "return"].forEach(function (e) {
              f(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function E(t, e) {
            function r(o, a, c, s) {
              var u = h(t[o], t, a);
              if ("throw" !== u.type) {
                var l = u.arg,
                  f = l.value;
                return f && "object" == n(f) && i.call(f, "__await")
                  ? e.resolve(f.__await).then(
                      function (t) {
                        r("next", t, c, s);
                      },
                      function (t) {
                        r("throw", t, c, s);
                      }
                    )
                  : e.resolve(f).then(
                      function (t) {
                        (l.value = t), c(l);
                      },
                      function (t) {
                        return r("throw", t, c, s);
                      }
                    );
              }
              s(u.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (t, n) {
                function i() {
                  return new e(function (e, o) {
                    r(t, n, e, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
            });
          }
          function j(t, e, r) {
            var n = "suspendedStart";
            return function (o, i) {
              if ("executing" === n)
                throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === o) throw i;
                return { value: void 0, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var a = r.delegate;
                if (a) {
                  var c = I(a, r);
                  if (c) {
                    if (c === d) continue;
                    return c;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = "executing";
                var s = h(t, e, r);
                if ("normal" === s.type) {
                  if (
                    ((n = r.done ? "completed" : "suspendedYield"), s.arg === d)
                  )
                    continue;
                  return { value: s.arg, done: r.done };
                }
                "throw" === s.type &&
                  ((n = "completed"), (r.method = "throw"), (r.arg = s.arg));
              }
            };
          }
          function I(t, e) {
            var r = e.method,
              n = t.iterator[r];
            if (void 0 === n)
              return (
                (e.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((e.method = "return"),
                  (e.arg = void 0),
                  I(t, e),
                  "throw" === e.method)) ||
                  ("return" !== r &&
                    ((e.method = "throw"),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                d
              );
            var o = h(n, t.iterator, e.arg);
            if ("throw" === o.type)
              return (
                (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), d
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((e[t.resultName] = i.value),
                  (e.next = t.nextLoc),
                  "return" !== e.method &&
                    ((e.method = "next"), (e.arg = void 0)),
                  (e.delegate = null),
                  d)
                : i
              : ((e.method = "throw"),
                (e.arg = new TypeError("iterator result is not an object")),
                (e.delegate = null),
                d);
          }
          function _(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function D(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function S(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(_, this),
              this.reset(!0);
          }
          function O(t) {
            if (t) {
              var e = t[s];
              if (e) return e.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var r = -1,
                  n = function e() {
                    for (; ++r < t.length; )
                      if (i.call(t, r))
                        return (e.value = t[r]), (e.done = !1), e;
                    return (e.value = void 0), (e.done = !0), e;
                  };
                return (n.next = n);
              }
            }
            return { next: B };
          }
          function B() {
            return { value: void 0, done: !0 };
          }
          return (
            (y.prototype = g),
            a(x, "constructor", { value: g, configurable: !0 }),
            a(g, "constructor", { value: y, configurable: !0 }),
            (y.displayName = f(g, l, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === y || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, g)
                  : ((t.__proto__ = g), f(t, l, "GeneratorFunction")),
                (t.prototype = Object.create(x)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            L(E.prototype),
            f(E.prototype, u, function () {
              return this;
            }),
            (e.AsyncIterator = E),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new E(p(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            L(x),
            f(x, l, "Generator"),
            f(x, s, function () {
              return this;
            }),
            f(x, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function t() {
                  for (; r.length; ) {
                    var n = r.pop();
                    if (n in e) return (t.value = n), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (e.values = O),
            (S.prototype = {
              constructor: S,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(D),
                  !t)
                )
                  for (var e in this)
                    "t" === e.charAt(0) &&
                      i.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = void 0);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var e = this;
                function r(r, n) {
                  return (
                    (a.type = "throw"),
                    (a.arg = t),
                    (e.next = r),
                    n && ((e.method = "next"), (e.arg = void 0)),
                    !!n
                  );
                }
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var o = this.tryEntries[n],
                    a = o.completion;
                  if ("root" === o.tryLoc) return r("end");
                  if (o.tryLoc <= this.prev) {
                    var c = i.call(o, "catchLoc"),
                      s = i.call(o, "finallyLoc");
                    if (c && s) {
                      if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                    } else if (c) {
                      if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var n = this.tryEntries[r];
                  if (
                    n.tryLoc <= this.prev &&
                    i.call(n, "finallyLoc") &&
                    this.prev < n.finallyLoc
                  ) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  ("break" === t || "continue" === t) &&
                  o.tryLoc <= e &&
                  e <= o.finallyLoc &&
                  (o = null);
                var a = o ? o.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  d
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc), D(r), d;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      D(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, e, r) {
                return (
                  (this.delegate = {
                    iterator: O(t),
                    resultName: e,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  d
                );
              },
            }),
            e
          );
        }
        (t.exports = o),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      698: (t) => {
        function e(r) {
          return (
            (t.exports = e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports),
            e(r)
          );
        }
        (t.exports = e),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      687: (t, e, r) => {
        var n = r(61)();
        t.exports = n;
        try {
          regeneratorRuntime = n;
        } catch (t) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = n)
            : Function("r", "regeneratorRuntime = r")(n);
        }
      },
    },
    e = {};
  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var i = (e[n] = { exports: {} });
    return t[n](i, i.exports, r), i.exports;
  }
  (r.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return r.d(e, { a: e }), e;
  }),
    (r.d = (t, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      "use strict";
      function t(t, e, r, n, o, i, a) {
        try {
          var c = t[i](a),
            s = c.value;
        } catch (t) {
          return void r(t);
        }
        c.done ? e(s) : Promise.resolve(s).then(n, o);
      }
      var e = r(687),
        n = r.n(e);
      const o = (t, e) => e.some((e) => t instanceof e);
      let i, a;
      const c = new WeakMap(),
        s = new WeakMap(),
        u = new WeakMap(),
        l = new WeakMap(),
        f = new WeakMap();
      let p = {
        get(t, e, r) {
          if (t instanceof IDBTransaction) {
            if ("done" === e) return s.get(t);
            if ("objectStoreNames" === e) return t.objectStoreNames || u.get(t);
            if ("store" === e)
              return r.objectStoreNames[1]
                ? void 0
                : r.objectStore(r.objectStoreNames[0]);
          }
          return d(t[e]);
        },
        set: (t, e, r) => ((t[e] = r), !0),
        has: (t, e) =>
          (t instanceof IDBTransaction && ("done" === e || "store" === e)) ||
          e in t,
      };
      function h(t) {
        return "function" == typeof t
          ? (e = t) !== IDBDatabase.prototype.transaction ||
            "objectStoreNames" in IDBTransaction.prototype
            ? (
                a ||
                (a = [
                  IDBCursor.prototype.advance,
                  IDBCursor.prototype.continue,
                  IDBCursor.prototype.continuePrimaryKey,
                ])
              ).includes(e)
              ? function (...t) {
                  return e.apply(v(this), t), d(c.get(this));
                }
              : function (...t) {
                  return d(e.apply(v(this), t));
                }
            : function (t, ...r) {
                const n = e.call(v(this), t, ...r);
                return u.set(n, t.sort ? t.sort() : [t]), d(n);
              }
          : (t instanceof IDBTransaction &&
              (function (t) {
                if (s.has(t)) return;
                const e = new Promise((e, r) => {
                  const n = () => {
                      t.removeEventListener("complete", o),
                        t.removeEventListener("error", i),
                        t.removeEventListener("abort", i);
                    },
                    o = () => {
                      e(), n();
                    },
                    i = () => {
                      r(
                        t.error || new DOMException("AbortError", "AbortError")
                      ),
                        n();
                    };
                  t.addEventListener("complete", o),
                    t.addEventListener("error", i),
                    t.addEventListener("abort", i);
                });
                s.set(t, e);
              })(t),
            o(
              t,
              i ||
                (i = [
                  IDBDatabase,
                  IDBObjectStore,
                  IDBIndex,
                  IDBCursor,
                  IDBTransaction,
                ])
            )
              ? new Proxy(t, p)
              : t);
        var e;
      }
      function d(t) {
        if (t instanceof IDBRequest)
          return (function (t) {
            const e = new Promise((e, r) => {
              const n = () => {
                  t.removeEventListener("success", o),
                    t.removeEventListener("error", i);
                },
                o = () => {
                  e(d(t.result)), n();
                },
                i = () => {
                  r(t.error), n();
                };
              t.addEventListener("success", o), t.addEventListener("error", i);
            });
            return (
              e
                .then((e) => {
                  e instanceof IDBCursor && c.set(e, t);
                })
                .catch(() => {}),
              f.set(e, t),
              e
            );
          })(t);
        if (l.has(t)) return l.get(t);
        const e = h(t);
        return e !== t && (l.set(t, e), f.set(e, t)), e;
      }
      const v = (t) => f.get(t);
      function y(
        t,
        e,
        { blocked: r, upgrade: n, blocking: o, terminated: i } = {}
      ) {
        const a = indexedDB.open(t, e),
          c = d(a);
        return (
          n &&
            a.addEventListener("upgradeneeded", (t) => {
              n(d(a.result), t.oldVersion, t.newVersion, d(a.transaction));
            }),
          r && a.addEventListener("blocked", () => r()),
          c
            .then((t) => {
              i && t.addEventListener("close", () => i()),
                o && t.addEventListener("versionchange", () => o());
            })
            .catch(() => {}),
          c
        );
      }
      const g = ["get", "getKey", "getAll", "getAllKeys", "count"],
        m = ["put", "add", "delete", "clear"],
        b = new Map();
      function w(t, e) {
        if (!(t instanceof IDBDatabase) || e in t || "string" != typeof e)
          return;
        if (b.get(e)) return b.get(e);
        const r = e.replace(/FromIndex$/, ""),
          n = e !== r,
          o = m.includes(r);
        if (
          !(r in (n ? IDBIndex : IDBObjectStore).prototype) ||
          (!o && !g.includes(r))
        )
          return;
        const i = async function (t, ...e) {
          const i = this.transaction(t, o ? "readwrite" : "readonly");
          let a = i.store;
          return (
            n && (a = a.index(e.shift())),
            (await Promise.all([a[r](...e), o && i.done]))[0]
          );
        };
        return b.set(e, i), i;
      }
      var x;
      (x = p),
        (p = {
          ...x,
          get: (t, e, r) => w(t, e) || x.get(t, e, r),
          has: (t, e) => !!w(t, e) || x.has(t, e),
        }),
        (function () {
          var e,
            r =
              ((e = n().mark(function t() {
                return n().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          y("jate", 1, {
                            upgrade: function (t) {
                              t.objectStoreNames.contains("jate")
                                ? console.log("jate database already exists")
                                : (t.createObjectStore("jate", {
                                    keyPath: "id",
                                    autoIncrement: !0,
                                  }),
                                  console.log("jate database created"));
                            },
                          })
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })),
              function () {
                var r = this,
                  n = arguments;
                return new Promise(function (o, i) {
                  var a = e.apply(r, n);
                  function c(e) {
                    t(a, o, i, c, s, "next", e);
                  }
                  function s(e) {
                    t(a, o, i, c, s, "throw", e);
                  }
                  c(void 0);
                });
              });
          return function () {
            return r.apply(this, arguments);
          };
        })()();
    })();
})();
