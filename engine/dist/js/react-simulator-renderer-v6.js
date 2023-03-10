!(function e(t, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n(
        require("@alifd/next").Icon,
        require("@alifd/next").ConfigProvider
      ))
    : "function" == typeof define && define.amd
    ? define(
        [
          ["@alifd/next", "Icon"],
          ["@alifd/next", "ConfigProvider"],
        ],
        n
      )
    : "object" == typeof exports
    ? (exports.___ReactSimulatorRenderer___ = n(
        require("@alifd/next").Icon,
        require("@alifd/next").ConfigProvider
      ))
    : (t.___ReactSimulatorRenderer___ = n(t.Next.Icon, t.Next.ConfigProvider));
})(window, function (e, t) {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function t() {
                return e.default;
              }
            : function t() {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = "/"),
      n((n.s = 70))
    );
  })([
    function (e, t) {
      e.exports = window.React;
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "__extends", function () {
          return o;
        }),
        n.d(t, "__assign", function () {
          return i;
        }),
        n.d(t, "__rest", function () {
          return a;
        }),
        n.d(t, "__decorate", function () {
          return u;
        }),
        n.d(t, "__param", function () {
          return s;
        }),
        n.d(t, "__esDecorate", function () {
          return c;
        }),
        n.d(t, "__runInitializers", function () {
          return l;
        }),
        n.d(t, "__propKey", function () {
          return f;
        }),
        n.d(t, "__setFunctionName", function () {
          return p;
        }),
        n.d(t, "__metadata", function () {
          return h;
        }),
        n.d(t, "__awaiter", function () {
          return d;
        }),
        n.d(t, "__generator", function () {
          return v;
        }),
        n.d(t, "__createBinding", function () {
          return y;
        }),
        n.d(t, "__exportStar", function () {
          return m;
        }),
        n.d(t, "__values", function () {
          return b;
        }),
        n.d(t, "__read", function () {
          return _;
        }),
        n.d(t, "__spread", function () {
          return g;
        }),
        n.d(t, "__spreadArrays", function () {
          return w;
        }),
        n.d(t, "__spreadArray", function () {
          return O;
        }),
        n.d(t, "__await", function () {
          return E;
        }),
        n.d(t, "__asyncGenerator", function () {
          return S;
        }),
        n.d(t, "__asyncDelegator", function () {
          return x;
        }),
        n.d(t, "__asyncValues", function () {
          return C;
        }),
        n.d(t, "__makeTemplateObject", function () {
          return j;
        }),
        n.d(t, "__importStar", function () {
          return P;
        }),
        n.d(t, "__importDefault", function () {
          return T;
        }),
        n.d(t, "__classPrivateFieldGet", function () {
          return R;
        }),
        n.d(t, "__classPrivateFieldSet", function () {
          return N;
        }),
        n.d(t, "__classPrivateFieldIn", function () {
          return L;
        });
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(e, t);
      };
      function o(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function e(t) {
            for (var n, r = 1, o = arguments.length; r < o; r++)
              for (var i in (n = arguments[r]))
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            return t;
          }).apply(this, arguments);
      };
      function a(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      function u(e, t, n, r) {
        var o = arguments.length,
          i =
            o < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r,
          a;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          i = Reflect.decorate(e, t, n, r);
        else
          for (var u = e.length - 1; u >= 0; u--)
            (a = e[u]) &&
              (i = (o < 3 ? a(i) : o > 3 ? a(t, n, i) : a(t, n)) || i);
        return o > 3 && i && Object.defineProperty(t, n, i), i;
      }
      function s(e, t) {
        return function (n, r) {
          t(n, r, e);
        };
      }
      function c(e, t, n, r, o, i) {
        function a(e) {
          if (void 0 !== e && "function" != typeof e)
            throw new TypeError("Function expected");
          return e;
        }
        for (
          var u = r.kind,
            s = "getter" === u ? "get" : "setter" === u ? "set" : "value",
            c = !t && e ? (r.static ? e : e.prototype) : null,
            l = t || (c ? Object.getOwnPropertyDescriptor(c, r.name) : {}),
            f,
            p = !1,
            h = n.length - 1;
          h >= 0;
          h--
        ) {
          var d = {};
          for (var v in r) d[v] = "access" === v ? {} : r[v];
          for (var v in r.access) d.access[v] = r.access[v];
          d.addInitializer = function (e) {
            if (p)
              throw new TypeError(
                "Cannot add initializers after decoration has completed"
              );
            i.push(a(e || null));
          };
          var y = (0, n[h])(
            "accessor" === u ? { get: l.get, set: l.set } : l[s],
            d
          );
          if ("accessor" === u) {
            if (void 0 === y) continue;
            if (null === y || "object" != typeof y)
              throw new TypeError("Object expected");
            (f = a(y.get)) && (l.get = f),
              (f = a(y.set)) && (l.set = f),
              (f = a(y.init)) && o.push(f);
          } else (f = a(y)) && ("field" === u ? o.push(f) : (l[s] = f));
        }
        c && Object.defineProperty(c, r.name, l), (p = !0);
      }
      function l(e, t, n) {
        for (var r = arguments.length > 2, o = 0; o < t.length; o++)
          n = r ? t[o].call(e, n) : t[o].call(e);
        return r ? n : void 0;
      }
      function f(e) {
        return "symbol" == typeof e ? e : "".concat(e);
      }
      function p(e, t, n) {
        return (
          "symbol" == typeof t &&
            (t = t.description ? "[".concat(t.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: n ? "".concat(n, " ", t) : t,
          })
        );
      }
      function h(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function d(e, t, n, r) {
        function o(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n || (n = Promise))(function (n, i) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function u(e) {
            try {
              s(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done ? n(e.value) : o(e.value).then(a, u);
          }
          s((r = r.apply(e, t || [])).next());
        });
      }
      function v(e, t) {
        var n = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          },
          r,
          o,
          i,
          a;
        return (
          (a = { next: u(0), throw: u(1), return: u(2) }),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function u(e) {
          return function (t) {
            return s([e, t]);
          };
        }
        function s(u) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; a && ((a = 0), u[0] && (n = 0)), n; )
            try {
              if (
                ((r = 1),
                o &&
                  (i =
                    2 & u[0]
                      ? o.return
                      : u[0]
                      ? o.throw || ((i = o.return) && i.call(o), 0)
                      : o.next) &&
                  !(i = i.call(o, u[1])).done)
              )
                return i;
              switch (((o = 0), i && (u = [2 & u[0], i.value]), u[0])) {
                case 0:
                case 1:
                  i = u;
                  break;
                case 4:
                  return n.label++, { value: u[1], done: !1 };
                case 5:
                  n.label++, (o = u[1]), (u = [0]);
                  continue;
                case 7:
                  (u = n.ops.pop()), n.trys.pop();
                  continue;
                default:
                  if (
                    !((i = n.trys),
                    (i = i.length > 0 && i[i.length - 1]) ||
                      (6 !== u[0] && 2 !== u[0]))
                  ) {
                    n = 0;
                    continue;
                  }
                  if (3 === u[0] && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                    n.label = u[1];
                    break;
                  }
                  if (6 === u[0] && n.label < i[1]) {
                    (n.label = i[1]), (i = u);
                    break;
                  }
                  if (i && n.label < i[2]) {
                    (n.label = i[2]), n.ops.push(u);
                    break;
                  }
                  i[2] && n.ops.pop(), n.trys.pop();
                  continue;
              }
              u = t.call(e, n);
            } catch (e) {
              (u = [6, e]), (o = 0);
            } finally {
              r = i = 0;
            }
          if (5 & u[0]) throw u[1];
          return { value: u[0] ? u[1] : void 0, done: !0 };
        }
      }
      var y = Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var o = Object.getOwnPropertyDescriptor(t, n);
            (o &&
              !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
              (o = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, r, o);
          }
        : function (e, t, n, r) {
            void 0 === r && (r = n), (e[r] = t[n]);
          };
      function m(e, t) {
        for (var n in e)
          "default" === n ||
            Object.prototype.hasOwnProperty.call(t, n) ||
            y(t, e, n);
      }
      function b(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function _(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r = n.call(e),
          o,
          i = [],
          a;
        try {
          for (; (void 0 === t || t-- > 0) && !(o = r.next()).done; )
            i.push(o.value);
        } catch (e) {
          a = { error: e };
        } finally {
          try {
            o && !o.done && (n = r.return) && n.call(r);
          } finally {
            if (a) throw a.error;
          }
        }
        return i;
      }
      function g() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(_(arguments[t]));
        return e;
      }
      function w() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        for (var r = Array(e), o = 0, t = 0; t < n; t++)
          for (var i = arguments[t], a = 0, u = i.length; a < u; a++, o++)
            r[o] = i[a];
        return r;
      }
      function O(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r = 0, o = t.length, i; r < o; r++)
            (!i && r in t) ||
              (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
        return e.concat(i || Array.prototype.slice.call(t));
      }
      function E(e) {
        return this instanceof E ? ((this.v = e), this) : new E(e);
      }
      function S(e, t, n) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var r = n.apply(e, t || []),
          o,
          i = [];
        return (
          (o = {}),
          a("next"),
          a("throw"),
          a("return"),
          (o[Symbol.asyncIterator] = function () {
            return this;
          }),
          o
        );
        function a(e) {
          r[e] &&
            (o[e] = function (t) {
              return new Promise(function (n, r) {
                i.push([e, t, n, r]) > 1 || u(e, t);
              });
            });
        }
        function u(e, t) {
          try {
            s(r[e](t));
          } catch (e) {
            f(i[0][3], e);
          }
        }
        function s(e) {
          e.value instanceof E
            ? Promise.resolve(e.value.v).then(c, l)
            : f(i[0][2], e);
        }
        function c(e) {
          u("next", e);
        }
        function l(e) {
          u("throw", e);
        }
        function f(e, t) {
          e(t), i.shift(), i.length && u(i[0][0], i[0][1]);
        }
      }
      function x(e) {
        var t, n;
        return (
          (t = {}),
          r("next"),
          r("throw", function (e) {
            throw e;
          }),
          r("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function r(r, o) {
          t[r] = e[r]
            ? function (t) {
                return (n = !n)
                  ? { value: E(e[r](t)), done: !1 }
                  : o
                  ? o(t)
                  : t;
              }
            : o;
        }
      }
      function C(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t = e[Symbol.asyncIterator],
          n;
        return t
          ? t.call(e)
          : ((e = b(e)),
            (n = {}),
            r("next"),
            r("throw"),
            r("return"),
            (n[Symbol.asyncIterator] = function () {
              return this;
            }),
            n);
        function r(t) {
          n[t] =
            e[t] &&
            function (n) {
              return new Promise(function (r, i) {
                o(r, i, (n = e[t](n)).done, n.value);
              });
            };
        }
        function o(e, t, n, r) {
          Promise.resolve(r).then(function (t) {
            e({ value: t, done: n });
          }, t);
        }
      }
      function j(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      var A = Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          };
      function P(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            "default" !== n &&
              Object.prototype.hasOwnProperty.call(e, n) &&
              y(t, e, n);
        return A(t, e), t;
      }
      function T(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function R(e, t, n, r) {
        if ("a" === n && !r)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      }
      function N(e, t, n, r, o) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !o)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === r ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n;
      }
      function L(e, t) {
        if (null === t || ("object" != typeof t && "function" != typeof t))
          throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t);
      }
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "a", function () {
          return Ie;
        }),
          n.d(t, "b", function () {
            return Yn;
          }),
          n.d(t, "c", function () {
            return nn;
          }),
          n.d(t, "d", function () {
            return An;
          }),
          n.d(t, "e", function () {
            return jn;
          }),
          n.d(t, "f", function () {
            return zt;
          }),
          n.d(t, "g", function () {
            return Dr;
          }),
          n.d(t, "h", function () {
            return He;
          }),
          n.d(t, "i", function () {
            return Ur;
          }),
          n.d(t, "j", function () {
            return oi;
          }),
          n.d(t, "k", function () {
            return ci;
          }),
          n.d(t, "l", function () {
            return Oi;
          }),
          n.d(t, "m", function () {
            return Fo;
          }),
          n.d(t, "n", function () {
            return Ht;
          }),
          n.d(t, "o", function () {
            return Er;
          }),
          n.d(t, "p", function () {
            return Sn;
          });
        var r =
            "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
          o = function e(t, n) {
            return (
              "Cannot apply '" +
              t +
              "' to '" +
              n.toString() +
              "': Field not found."
            );
          },
          i =
            "'keys()' can only be used on observable objects, arrays, sets and maps",
          a =
            "'values()' can only be used on observable objects, arrays, sets and maps",
          u =
            "'entries()' can only be used on observable objects, arrays and maps",
          s = "'set()' can only be used on observable objects, arrays and maps",
          c =
            "'remove()' can only be used on observable objects, arrays and maps",
          l = "'has()' can only be used on observable objects, arrays and maps",
          f = "'get()' can only be used on observable objects, arrays and maps",
          p = "Invalid annotation",
          h =
            "Dynamic observable objects cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
          d = "Intercept handlers should return nothing or a change object",
          v =
            "Observable arrays cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
          y =
            "Modification exception: the internal structure of an observable array was changed.",
          m = function e(t, n) {
            return (
              "[mobx.array] Index out of bounds, " + t + " is larger than " + n
            );
          },
          b =
            "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
          _ = function e(t) {
            return (
              "Cannot initialize from classes that inherit from Map: " +
              t.constructor.name
            );
          },
          g = function e(t) {
            return "Cannot initialize map from " + t;
          },
          w = function e(t) {
            return "Cannot convert to map from '" + t + "'";
          },
          O =
            "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
          E = "It is not possible to get index atoms from arrays",
          S = function e(t) {
            return "Cannot obtain administration from " + t;
          },
          x = function e(t, n) {
            return (
              "the entry '" +
              t +
              "' does not exist in the observable map '" +
              n +
              "'"
            );
          },
          C = "please specify a property",
          j = function e(t, n) {
            return (
              "no observable property '" +
              t.toString() +
              "' found on the observable object '" +
              n +
              "'"
            );
          },
          A = function e(t) {
            return "Cannot obtain atom from " + t;
          },
          P = "Expecting some object",
          T = "invalid action stack. did you forget to finish an action?",
          R = "missing option for computed: get",
          N = function e(t, n) {
            return "Cycle detected in computation " + t + ": " + n;
          },
          L = function e(t) {
            return (
              "The setter of computed value '" +
              t +
              "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"
            );
          },
          k = function e(t) {
            return (
              "[ComputedValue '" +
              t +
              "'] It is not possible to assign a new value to a computed value."
            );
          },
          M =
            "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
          I =
            "isolateGlobalState should be called before MobX is running any reactions",
          B = function e(t) {
            return (
              "[mobx] `observableArray." +
              t +
              "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." +
              t +
              "()` instead"
            );
          },
          D = "'ownKeys()' can only be used on observable objects",
          H = "'defineProperty()' can only be used on observable objects",
          U = {};
        function F(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          var o;
          throw new Error(
            "number" == typeof e
              ? "[MobX] minified error nr: " +
                e +
                (n.length ? " " + n.map(String).join(",") : "") +
                ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
              : "[MobX] " + e
          );
        }
        var V = {};
        function G() {
          return "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== e
            ? e
            : "undefined" != typeof self
            ? self
            : V;
        }
        var z = Object.assign,
          q = Object.getOwnPropertyDescriptor,
          J = Object.defineProperty,
          $ = Object.prototype,
          K = [];
        Object.freeze(K);
        var W = {};
        Object.freeze(W);
        var X = "undefined" != typeof Proxy,
          Y = Object.toString();
        function Z() {
          X || F("Proxy not available");
        }
        function Q(e) {
          0;
        }
        function ee() {
          return ++kn.mobxGuid;
        }
        function te(e) {
          var t = !1;
          return function () {
            if (!t) return (t = !0), e.apply(this, arguments);
          };
        }
        var ne = function e() {};
        function re(e) {
          return "function" == typeof e;
        }
        function oe(e) {
          var t;
          switch (typeof e) {
            case "string":
            case "symbol":
            case "number":
              return !0;
          }
          return !1;
        }
        function ie(e) {
          return null !== e && "object" == typeof e;
        }
        function ae(e) {
          if (!ie(e)) return !1;
          var t = Object.getPrototypeOf(e);
          if (null == t) return !0;
          var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
          return "function" == typeof n && n.toString() === Y;
        }
        function ue(e) {
          var t = null == e ? void 0 : e.constructor;
          return (
            !!t &&
            ("GeneratorFunction" === t.name ||
              "GeneratorFunction" === t.displayName)
          );
        }
        function se(e, t, n) {
          J(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
        }
        function ce(e, t, n) {
          J(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
        }
        function le(e, t) {
          var n = "isMobX" + e;
          return (
            (t.prototype[n] = !0),
            function (e) {
              return ie(e) && !0 === e[n];
            }
          );
        }
        function fe(e) {
          return e instanceof Map;
        }
        function pe(e) {
          return e instanceof Set;
        }
        var he = void 0 !== Object.getOwnPropertySymbols;
        function de(e) {
          var t = Object.keys(e);
          if (!he) return t;
          var n = Object.getOwnPropertySymbols(e);
          return n.length
            ? [].concat(
                t,
                n.filter(function (t) {
                  return $.propertyIsEnumerable.call(e, t);
                })
              )
            : t;
        }
        var ve =
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : he
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : Object.getOwnPropertyNames;
        function ye(e) {
          return "string" == typeof e
            ? e
            : "symbol" == typeof e
            ? e.toString()
            : new String(e).toString();
        }
        function me(e) {
          return null === e ? null : "object" == typeof e ? "" + e : e;
        }
        function be(e, t) {
          return $.hasOwnProperty.call(e, t);
        }
        var _e =
          Object.getOwnPropertyDescriptors ||
          function e(t) {
            var n = {};
            return (
              ve(t).forEach(function (e) {
                n[e] = q(t, e);
              }),
              n
            );
          };
        function ge(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, Te(r.key), r);
          }
        }
        function we(e, t, n) {
          return (
            t && ge(e.prototype, t),
            n && ge(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }
        function Oe() {
          return (Oe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }).apply(this, arguments);
        }
        function Ee(e, t) {
          (e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            Se(e, t);
        }
        function Se(e, t) {
          return (Se = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function e(t, n) {
                return (t.__proto__ = n), t;
              })(e, t);
        }
        function xe(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function Ce(e, t) {
          if (e) {
            if ("string" == typeof e) return je(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? je(e, t)
                : void 0
            );
          }
        }
        function je(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function Ae(e, t) {
          var n =
            ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
          if (n) return (n = n.call(e)).next.bind(n);
          if (
            Array.isArray(e) ||
            (n = Ce(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0;
            return function () {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function Pe(e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        }
        function Te(e) {
          var t = Pe(e, "string");
          return "symbol" == typeof t ? t : String(t);
        }
        var Re = Symbol("mobx-stored-annotations");
        function Ne(e) {
          function t(t, n) {
            Le(t, n, e);
          }
          return Object.assign(t, e);
        }
        function Le(e, t, n) {
          var r;
          be(e, Re) || se(e, Re, Oe({}, e[Re])),
            ke(e, n, t),
            Ye(n) || (e[Re][t] = n);
        }
        function ke(e, t, n) {
          var r, o, i;
        }
        function Me(e) {
          return be(e, Re) || se(e, Re, Oe({}, e[Re])), e[Re];
        }
        var Ie = Symbol("mobx administration"),
          Be = (function () {
            function e(e) {
              void 0 === e && (e = "Atom"),
                (this.name_ = void 0),
                (this.isPendingUnobservation_ = !1),
                (this.isBeingObserved_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = pn.NOT_TRACKING_),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                (this.name_ = e);
            }
            var t = e.prototype;
            return (
              (t.onBO = function e() {
                this.onBOL &&
                  this.onBOL.forEach(function (e) {
                    return e();
                  });
              }),
              (t.onBUO = function e() {
                this.onBUOL &&
                  this.onBUOL.forEach(function (e) {
                    return e();
                  });
              }),
              (t.reportObserved = function e() {
                return qn(this);
              }),
              (t.reportChanged = function e() {
                Gn(), Jn(this), zn();
              }),
              (t.toString = function e() {
                return this.name_;
              }),
              e
            );
          })(),
          De = le("Atom", Be);
        function He(e, t, n) {
          void 0 === t && (t = ne), void 0 === n && (n = ne);
          var r = new Be(e);
          return t !== ne && Nr(r, t), n !== ne && Lr(r, n), r;
        }
        function Ue(e, t) {
          return e === t;
        }
        function Fe(e, t) {
          return Di(e, t);
        }
        function Ve(e, t) {
          return Di(e, t, 1);
        }
        function Ge(e, t) {
          return Object.is
            ? Object.is(e, t)
            : e === t
            ? 0 !== e || 1 / e == 1 / t
            : e != e && t != t;
        }
        var ze = { identity: Ue, structural: Fe, default: Ge, shallow: Ve };
        function qe(e, t, n) {
          return so(e)
            ? e
            : Array.isArray(e)
            ? Ht.array(e, { name: n })
            : ae(e)
            ? Ht.object(e, void 0, { name: n })
            : fe(e)
            ? Ht.map(e, { name: n })
            : pe(e)
            ? Ht.set(e, { name: n })
            : "function" != typeof e || Sr(e) || Qr(e)
            ? e
            : ue(e)
            ? Xr(e)
            : Or(n, e);
        }
        function Je(e, t, n) {
          return null == e || Oi(e) || oi(e) || ci(e) || vi(e)
            ? e
            : Array.isArray(e)
            ? Ht.array(e, { name: n, deep: !1 })
            : ae(e)
            ? Ht.object(e, void 0, { name: n, deep: !1 })
            : fe(e)
            ? Ht.map(e, { name: n, deep: !1 })
            : pe(e)
            ? Ht.set(e, { name: n, deep: !1 })
            : void 0;
        }
        function $e(e) {
          return e;
        }
        function Ke(e, t) {
          return Di(e, t) ? t : e;
        }
        var We = "override",
          Xe = Ne({ annotationType_: We, make_: Ze, extend_: Qe });
        function Ye(e) {
          return e.annotationType_ === We;
        }
        function Ze(e, t) {
          return 0;
        }
        function Qe(e, t, n, r) {
          F(
            "'" +
              this.annotationType_ +
              "' can only be used with 'makeObservable'"
          );
        }
        function et(e, t) {
          return { annotationType_: e, options_: t, make_: tt, extend_: nt };
        }
        function tt(e, t, n, r) {
          var o;
          if (null != (o = this.options_) && o.bound)
            return null === this.extend_(e, t, n, !1) ? 0 : 1;
          if (r === e.target_)
            return null === this.extend_(e, t, n, !1) ? 0 : 2;
          if (Sr(n.value)) return 1;
          var i = ot(e, this, t, n, !1);
          return J(r, t, i), 2;
        }
        function nt(e, t, n, r) {
          var o = ot(e, this, t, n);
          return e.defineProperty_(t, o, r);
        }
        function rt(e, t, n, r) {
          var o = t.annotationType_,
            i = r.value;
        }
        function ot(e, t, n, r, o) {
          var i, a, u, s, c, l, f;
          void 0 === o && (o = kn.safeDescriptors), rt(e, t, n, r);
          var p = r.value,
            h;
          null != (i = t.options_) &&
            i.bound &&
            (p = p.bind(null != (h = e.proxy_) ? h : e.target_));
          return {
            value: Zt(
              null != (a = null == (u = t.options_) ? void 0 : u.name)
                ? a
                : n.toString(),
              p,
              null != (s = null == (c = t.options_) ? void 0 : c.autoAction) &&
                s,
              null != (l = t.options_) && l.bound
                ? null != (f = e.proxy_)
                  ? f
                  : e.target_
                : void 0
            ),
            configurable: !o || e.isPlainObject_,
            enumerable: !1,
            writable: !o,
          };
        }
        function it(e, t) {
          return { annotationType_: e, options_: t, make_: at, extend_: ut };
        }
        function at(e, t, n, r) {
          var o;
          if (r === e.target_)
            return null === this.extend_(e, t, n, !1) ? 0 : 2;
          if (
            null != (o = this.options_) &&
            o.bound &&
            (!be(e.target_, t) || !Qr(e.target_[t])) &&
            null === this.extend_(e, t, n, !1)
          )
            return 0;
          if (Qr(n.value)) return 1;
          var i = ct(e, this, t, n, !1, !1);
          return J(r, t, i), 2;
        }
        function ut(e, t, n, r) {
          var o,
            i = ct(
              e,
              this,
              t,
              n,
              null == (o = this.options_) ? void 0 : o.bound
            );
          return e.defineProperty_(t, i, r);
        }
        function st(e, t, n, r) {
          var o = t.annotationType_,
            i = r.value;
        }
        function ct(e, t, n, r, o, i) {
          void 0 === i && (i = kn.safeDescriptors), st(e, t, n, r);
          var a = r.value,
            u;
          (Qr(a) || (a = Xr(a)), o) &&
            ((a = a.bind(null != (u = e.proxy_) ? u : e.target_)).isMobXFlow =
              !0);
          return {
            value: a,
            configurable: !i || e.isPlainObject_,
            enumerable: !1,
            writable: !i,
          };
        }
        function lt(e, t) {
          return { annotationType_: e, options_: t, make_: ft, extend_: pt };
        }
        function ft(e, t, n) {
          return null === this.extend_(e, t, n, !1) ? 0 : 1;
        }
        function pt(e, t, n, r) {
          return (
            ht(e, this, t, n),
            e.defineComputedProperty_(
              t,
              Oe({}, this.options_, { get: n.get, set: n.set }),
              r
            )
          );
        }
        function ht(e, t, n, r) {
          var o = t.annotationType_,
            i = r.get;
        }
        function dt(e, t) {
          return { annotationType_: e, options_: t, make_: vt, extend_: yt };
        }
        function vt(e, t, n) {
          return null === this.extend_(e, t, n, !1) ? 0 : 1;
        }
        function yt(e, t, n, r) {
          var o, i;
          return (
            mt(e, this, t, n),
            e.defineObservableProperty_(
              t,
              n.value,
              null != (o = null == (i = this.options_) ? void 0 : i.enhancer)
                ? o
                : qe,
              r
            )
          );
        }
        function mt(e, t, n, r) {
          var o = t.annotationType_;
        }
        var bt = "true",
          _t = gt();
        function gt(e) {
          return { annotationType_: bt, options_: e, make_: wt, extend_: Ot };
        }
        function wt(e, t, n, r) {
          var o, i, a, u, s, c;
          if (n.get) return zt.make_(e, t, n, r);
          if (n.set) {
            var l = Zt(t.toString(), n.set);
            return r === e.target_
              ? null ===
                e.defineProperty_(t, {
                  configurable: !kn.safeDescriptors || e.isPlainObject_,
                  set: l,
                })
                ? 0
                : 2
              : (J(r, t, { configurable: !0, set: l }), 2);
          }
          if (r !== e.target_ && "function" == typeof n.value)
            return ue(n.value)
              ? (null != (u = this.options_) && u.autoBind
                  ? Xr.bound
                  : Xr
                ).make_(e, t, n, r)
              : (null != (a = this.options_) && a.autoBind
                  ? Or.bound
                  : Or
                ).make_(e, t, n, r);
          var f =
              !1 === (null == (o = this.options_) ? void 0 : o.deep)
                ? Ht.ref
                : Ht,
            p;
          "function" == typeof n.value &&
            null != (i = this.options_) &&
            i.autoBind &&
            (n.value = n.value.bind(null != (p = e.proxy_) ? p : e.target_));
          return f.make_(e, t, n, r);
        }
        function Ot(e, t, n, r) {
          var o, i, a, u;
          if (n.get) return zt.extend_(e, t, n, r);
          if (n.set)
            return e.defineProperty_(
              t,
              {
                configurable: !kn.safeDescriptors || e.isPlainObject_,
                set: Zt(t.toString(), n.set),
              },
              r
            );
          "function" == typeof n.value &&
            null != (o = this.options_) &&
            o.autoBind &&
            (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
          return (
            !1 === (null == (i = this.options_) ? void 0 : i.deep) ? Ht.ref : Ht
          ).extend_(e, t, n, r);
        }
        var Et = "observable",
          St = "observable.ref",
          xt = "observable.shallow",
          Ct = "observable.struct",
          jt = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
        function At(e) {
          return e || jt;
        }
        Object.freeze(jt);
        var Pt = dt(Et),
          Tt = dt(St, { enhancer: $e }),
          Rt = dt(xt, { enhancer: Je }),
          Nt = dt(Ct, { enhancer: Ke }),
          Lt = Ne(Pt);
        function kt(e) {
          return !0 === e.deep
            ? qe
            : !1 === e.deep
            ? $e
            : It(e.defaultDecorator);
        }
        function Mt(e) {
          var t;
          return e ? (null != (t = e.defaultDecorator) ? t : gt(e)) : void 0;
        }
        function It(e) {
          var t, n;
          return e &&
            null != (t = null == (n = e.options_) ? void 0 : n.enhancer)
            ? t
            : qe;
        }
        function Bt(e, t, n) {
          if (!oe(t))
            return so(e)
              ? e
              : ae(e)
              ? Ht.object(e, t, n)
              : Array.isArray(e)
              ? Ht.array(e, t)
              : fe(e)
              ? Ht.map(e, t)
              : pe(e)
              ? Ht.set(e, t)
              : "object" == typeof e && null !== e
              ? e
              : Ht.box(e, t);
          Le(e, t, Pt);
        }
        z(Bt, Lt);
        var Dt,
          Ht = z(Bt, {
            box: function e(t, n) {
              var r = At(n);
              return new un(t, kt(r), r.name, !0, r.equals);
            },
            array: function e(t, n) {
              var r = At(n);
              return (!1 === kn.useProxies || !1 === r.proxy ? Li : Wo)(
                t,
                kt(r),
                r.name
              );
            },
            map: function e(t, n) {
              var r = At(n);
              return new si(t, kt(r), r.name);
            },
            set: function e(t, n) {
              var r = At(n);
              return new di(t, kt(r), r.name);
            },
            object: function e(t, n, r) {
              return Hr(
                !1 === kn.useProxies || !1 === (null == r ? void 0 : r.proxy)
                  ? _i({}, r)
                  : ko({}, r),
                t,
                n
              );
            },
            ref: Ne(Tt),
            shallow: Ne(Rt),
            deep: Lt,
            struct: Ne(Nt),
          }),
          Ut = "computed",
          Ft = "computed.struct",
          Vt = lt(Ut),
          Gt = lt(Ft, { equals: ze.structural }),
          zt = function e(t, n) {
            if (oe(n)) return Le(t, n, Vt);
            if (ae(t)) return Ne(lt(Ut, t));
            var r = ae(n) ? n : {};
            return (r.get = t), r.name || (r.name = t.name || ""), new ln(r);
          },
          qt,
          Jt;
        Object.assign(zt, Vt), (zt.struct = Ne(Gt));
        var $t = 0,
          Kt = 1,
          Wt =
            null !=
              (qt =
                null == (Jt = q(function () {}, "name"))
                  ? void 0
                  : Jt.configurable) && qt,
          Xt = {
            value: "action",
            configurable: !0,
            writable: !1,
            enumerable: !1,
          },
          Yt;
        function Zt(e, t, n, r) {
          function o() {
            return Qt(e, n, t, r || this, arguments);
          }
          return (
            void 0 === n && (n = !1),
            (o.isMobxAction = !0),
            Wt && ((Xt.value = e), J(o, "name", Xt)),
            o
          );
        }
        function Qt(e, t, n, r, o) {
          var i = en(e, t, r, o);
          try {
            return n.apply(r, o);
          } catch (e) {
            throw ((i.error_ = e), e);
          } finally {
            tn(i);
          }
        }
        function en(e, t, n, r) {
          var o = !1,
            i = 0,
            a,
            u = kn.trackingDerivation,
            s = !t || !u;
          Gn();
          var c = kn.allowStateChanges;
          s && (xn(), (c = rn(!0)));
          var l,
            f = {
              runAsAction_: s,
              prevDerivation_: u,
              prevAllowStateChanges_: c,
              prevAllowStateReads_: jn(!0),
              notifySpy_: !1,
              startTime_: 0,
              actionId_: Kt++,
              parentActionId_: $t,
            };
          return ($t = f.actionId_), f;
        }
        function tn(e) {
          $t !== e.actionId_ && F(30),
            ($t = e.parentActionId_),
            void 0 !== e.error_ && (kn.suppressReactionErrors = !0),
            on(e.prevAllowStateChanges_),
            An(e.prevAllowStateReads_),
            zn(),
            e.runAsAction_ && Cn(e.prevDerivation_),
            (kn.suppressReactionErrors = !1);
        }
        function nn(e, t) {
          var n = rn(e);
          try {
            return t();
          } finally {
            on(n);
          }
        }
        function rn(e) {
          var t = kn.allowStateChanges;
          return (kn.allowStateChanges = e), t;
        }
        function on(e) {
          kn.allowStateChanges = e;
        }
        var an = "create";
        Yt = Symbol.toPrimitive;
        var un = (function (e) {
            function t(t, n, r, o, i) {
              var a;
              return (
                void 0 === r && (r = "ObservableValue"),
                void 0 === o && (o = !0),
                void 0 === i && (i = ze.default),
                ((a = e.call(this, r) || this).enhancer = void 0),
                (a.name_ = void 0),
                (a.equals = void 0),
                (a.hasUnreportedChange_ = !1),
                (a.interceptors_ = void 0),
                (a.changeListeners_ = void 0),
                (a.value_ = void 0),
                (a.dehancer = void 0),
                (a.enhancer = n),
                (a.name_ = r),
                (a.equals = i),
                (a.value_ = n(t, void 0, r)),
                a
              );
            }
            Ee(t, e);
            var n = t.prototype;
            return (
              (n.dehanceValue = function e(t) {
                return void 0 !== this.dehancer ? this.dehancer(t) : t;
              }),
              (n.set = function e(t) {
                var n = this.value_;
                if ((t = this.prepareNewValue_(t)) !== kn.UNCHANGED) {
                  var r = !1;
                  0, this.setNewValue_(t);
                }
              }),
              (n.prepareNewValue_ = function e(t) {
                if ((bn(this), Mo(this))) {
                  var n = Bo(this, { object: this, type: qo, newValue: t });
                  if (!n) return kn.UNCHANGED;
                  t = n.newValue;
                }
                return (
                  (t = this.enhancer(t, this.value_, this.name_)),
                  this.equals(this.value_, t) ? kn.UNCHANGED : t
                );
              }),
              (n.setNewValue_ = function e(t) {
                var n = this.value_;
                (this.value_ = t),
                  this.reportChanged(),
                  Do(this) &&
                    Uo(this, {
                      type: qo,
                      object: this,
                      newValue: t,
                      oldValue: n,
                    });
              }),
              (n.get = function e() {
                return this.reportObserved(), this.dehanceValue(this.value_);
              }),
              (n.intercept_ = function e(t) {
                return Io(this, t);
              }),
              (n.observe_ = function e(t, n) {
                return (
                  n &&
                    t({
                      observableKind: "value",
                      debugObjectName: this.name_,
                      object: this,
                      type: qo,
                      newValue: this.value_,
                      oldValue: void 0,
                    }),
                  Ho(this, t)
                );
              }),
              (n.raw = function e() {
                return this.value_;
              }),
              (n.toJSON = function e() {
                return this.get();
              }),
              (n.toString = function e() {
                return this.name_ + "[" + this.value_ + "]";
              }),
              (n.valueOf = function e() {
                return me(this.get());
              }),
              (n[Yt] = function () {
                return this.valueOf();
              }),
              t
            );
          })(Be),
          sn = le("ObservableValue", un),
          cn;
        cn = Symbol.toPrimitive;
        var ln = (function () {
            function e(e) {
              (this.dependenciesState_ = pn.NOT_TRACKING_),
                (this.observing_ = []),
                (this.newObserving_ = null),
                (this.isBeingObserved_ = !1),
                (this.isPendingUnobservation_ = !1),
                (this.observers_ = new Set()),
                (this.diffValue_ = 0),
                (this.runId_ = 0),
                (this.lastAccessedBy_ = 0),
                (this.lowestObserverState_ = pn.UP_TO_DATE_),
                (this.unboundDepsCount_ = 0),
                (this.value_ = new dn(null)),
                (this.name_ = void 0),
                (this.triggeredBy_ = void 0),
                (this.isComputing_ = !1),
                (this.isRunningSetter_ = !1),
                (this.derivation = void 0),
                (this.setter_ = void 0),
                (this.isTracing_ = hn.NONE),
                (this.scope_ = void 0),
                (this.equals_ = void 0),
                (this.requiresReaction_ = void 0),
                (this.keepAlive_ = void 0),
                (this.onBOL = void 0),
                (this.onBUOL = void 0),
                e.get || F(31),
                (this.derivation = e.get),
                (this.name_ = e.name || "ComputedValue"),
                e.set && (this.setter_ = Zt("ComputedValue-setter", e.set)),
                (this.equals_ =
                  e.equals ||
                  (e.compareStructural || e.struct
                    ? ze.structural
                    : ze.default)),
                (this.scope_ = e.context),
                (this.requiresReaction_ = e.requiresReaction),
                (this.keepAlive_ = !!e.keepAlive);
            }
            var t = e.prototype;
            return (
              (t.onBecomeStale_ = function e() {
                Kn(this);
              }),
              (t.onBO = function e() {
                this.onBOL &&
                  this.onBOL.forEach(function (e) {
                    return e();
                  });
              }),
              (t.onBUO = function e() {
                this.onBUOL &&
                  this.onBUOL.forEach(function (e) {
                    return e();
                  });
              }),
              (t.get = function e() {
                if (
                  (this.isComputing_ && F(32, this.name_, this.derivation),
                  0 !== kn.inBatch ||
                    0 !== this.observers_.size ||
                    this.keepAlive_)
                ) {
                  if ((qn(this), yn(this))) {
                    var t = kn.trackingContext;
                    this.keepAlive_ && !t && (kn.trackingContext = this),
                      this.trackAndCompute() && $n(this),
                      (kn.trackingContext = t);
                  }
                } else
                  yn(this) &&
                    (this.warnAboutUntrackedRead_(),
                    Gn(),
                    (this.value_ = this.computeValue_(!1)),
                    zn());
                var n = this.value_;
                if (vn(n)) throw n.cause;
                return n;
              }),
              (t.set = function e(t) {
                if (this.setter_) {
                  this.isRunningSetter_ && F(33, this.name_),
                    (this.isRunningSetter_ = !0);
                  try {
                    this.setter_.call(this.scope_, t);
                  } finally {
                    this.isRunningSetter_ = !1;
                  }
                } else F(34, this.name_);
              }),
              (t.trackAndCompute = function e() {
                var t = this.value_,
                  n = this.dependenciesState_ === pn.NOT_TRACKING_,
                  r = this.computeValue_(!0),
                  o = n || vn(t) || vn(r) || !this.equals_(t, r);
                return o && (this.value_ = r), o;
              }),
              (t.computeValue_ = function e(t) {
                this.isComputing_ = !0;
                var n = rn(!1),
                  r;
                if (t) r = gn(this, this.derivation, this.scope_);
                else if (!0 === kn.disableErrorBoundaries)
                  r = this.derivation.call(this.scope_);
                else
                  try {
                    r = this.derivation.call(this.scope_);
                  } catch (e) {
                    r = new dn(e);
                  }
                return on(n), (this.isComputing_ = !1), r;
              }),
              (t.suspend_ = function e() {
                this.keepAlive_ || (En(this), (this.value_ = void 0));
              }),
              (t.observe_ = function e(t, n) {
                var r = this,
                  o = !0,
                  i = void 0;
                return xr(function () {
                  var e = r.get();
                  if (!o || n) {
                    var a = xn();
                    t({
                      observableKind: "computed",
                      debugObjectName: r.name_,
                      type: qo,
                      object: r,
                      newValue: e,
                      oldValue: i,
                    }),
                      Cn(a);
                  }
                  (o = !1), (i = e);
                });
              }),
              (t.warnAboutUntrackedRead_ = function e() {}),
              (t.toString = function e() {
                return this.name_ + "[" + this.derivation.toString() + "]";
              }),
              (t.valueOf = function e() {
                return me(this.get());
              }),
              (t[cn] = function () {
                return this.valueOf();
              }),
              e
            );
          })(),
          fn = le("ComputedValue", ln),
          pn,
          hn;
        !(function (e) {
          (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
            (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
            (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
            (e[(e.STALE_ = 2)] = "STALE_");
        })(pn || (pn = {})),
          (function (e) {
            (e[(e.NONE = 0)] = "NONE"),
              (e[(e.LOG = 1)] = "LOG"),
              (e[(e.BREAK = 2)] = "BREAK");
          })(hn || (hn = {}));
        var dn = function e(t) {
          (this.cause = void 0), (this.cause = t);
        };
        function vn(e) {
          return e instanceof dn;
        }
        function yn(e) {
          switch (e.dependenciesState_) {
            case pn.UP_TO_DATE_:
              return !1;
            case pn.NOT_TRACKING_:
            case pn.STALE_:
              return !0;
            case pn.POSSIBLY_STALE_:
              for (
                var t = jn(!0), n = xn(), r = e.observing_, o = r.length, i = 0;
                i < o;
                i++
              ) {
                var a = r[i];
                if (fn(a)) {
                  if (kn.disableErrorBoundaries) a.get();
                  else
                    try {
                      a.get();
                    } catch (e) {
                      return Cn(n), An(t), !0;
                    }
                  if (e.dependenciesState_ === pn.STALE_)
                    return Cn(n), An(t), !0;
                }
              }
              return Pn(e), Cn(n), An(t), !1;
          }
        }
        function mn() {
          return null !== kn.trackingDerivation;
        }
        function bn(e) {
          var t;
        }
        function _n(e) {
          0;
        }
        function gn(e, t, n) {
          var r = jn(!0);
          Pn(e),
            (e.newObserving_ = new Array(e.observing_.length + 100)),
            (e.unboundDepsCount_ = 0),
            (e.runId_ = ++kn.runId);
          var o = kn.trackingDerivation,
            i;
          if (
            ((kn.trackingDerivation = e),
            kn.inBatch++,
            !0 === kn.disableErrorBoundaries)
          )
            i = t.call(n);
          else
            try {
              i = t.call(n);
            } catch (e) {
              i = new dn(e);
            }
          return (
            kn.inBatch--, (kn.trackingDerivation = o), On(e), wn(e), An(r), i
          );
        }
        function wn(e) {}
        function On(e) {
          for (
            var t = e.observing_,
              n = (e.observing_ = e.newObserving_),
              r = pn.UP_TO_DATE_,
              o = 0,
              i = e.unboundDepsCount_,
              a = 0;
            a < i;
            a++
          ) {
            var u = n[a];
            0 === u.diffValue_ &&
              ((u.diffValue_ = 1), o !== a && (n[o] = u), o++),
              u.dependenciesState_ > r && (r = u.dependenciesState_);
          }
          for (n.length = o, e.newObserving_ = null, i = t.length; i--; ) {
            var s = t[i];
            0 === s.diffValue_ && Fn(s, e), (s.diffValue_ = 0);
          }
          for (; o--; ) {
            var c = n[o];
            1 === c.diffValue_ && ((c.diffValue_ = 0), Un(c, e));
          }
          r !== pn.UP_TO_DATE_ &&
            ((e.dependenciesState_ = r), e.onBecomeStale_());
        }
        function En(e) {
          var t = e.observing_;
          e.observing_ = [];
          for (var n = t.length; n--; ) Fn(t[n], e);
          e.dependenciesState_ = pn.NOT_TRACKING_;
        }
        function Sn(e) {
          var t = xn();
          try {
            return e();
          } finally {
            Cn(t);
          }
        }
        function xn() {
          var e = kn.trackingDerivation;
          return (kn.trackingDerivation = null), e;
        }
        function Cn(e) {
          kn.trackingDerivation = e;
        }
        function jn(e) {
          var t = kn.allowStateReads;
          return (kn.allowStateReads = e), t;
        }
        function An(e) {
          kn.allowStateReads = e;
        }
        function Pn(e) {
          if (e.dependenciesState_ !== pn.UP_TO_DATE_) {
            e.dependenciesState_ = pn.UP_TO_DATE_;
            for (var t = e.observing_, n = t.length; n--; )
              t[n].lowestObserverState_ = pn.UP_TO_DATE_;
          }
        }
        var Tn = [
            "mobxGuid",
            "spyListeners",
            "enforceActions",
            "computedRequiresReaction",
            "reactionRequiresObservable",
            "observableRequiresReaction",
            "allowStateReads",
            "disableErrorBoundaries",
            "runId",
            "UNCHANGED",
            "useProxies",
          ],
          Rn = function e() {
            (this.version = 6),
              (this.UNCHANGED = {}),
              (this.trackingDerivation = null),
              (this.trackingContext = null),
              (this.runId = 0),
              (this.mobxGuid = 0),
              (this.inBatch = 0),
              (this.pendingUnobservations = []),
              (this.pendingReactions = []),
              (this.isRunningReactions = !1),
              (this.allowStateChanges = !1),
              (this.allowStateReads = !0),
              (this.enforceActions = !0),
              (this.spyListeners = []),
              (this.globalReactionErrorHandlers = []),
              (this.computedRequiresReaction = !1),
              (this.reactionRequiresObservable = !1),
              (this.observableRequiresReaction = !1),
              (this.disableErrorBoundaries = !1),
              (this.suppressReactionErrors = !1),
              (this.useProxies = !0),
              (this.verifyProxies = !1),
              (this.safeDescriptors = !0);
          },
          Nn = !0,
          Ln = !1,
          kn = (function () {
            var e = G();
            return (
              e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Nn = !1),
              e.__mobxGlobals &&
                e.__mobxGlobals.version !== new Rn().version &&
                (Nn = !1),
              Nn
                ? e.__mobxGlobals
                  ? ((e.__mobxInstanceCount += 1),
                    e.__mobxGlobals.UNCHANGED ||
                      (e.__mobxGlobals.UNCHANGED = {}),
                    e.__mobxGlobals)
                  : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Rn()))
                : (setTimeout(function () {
                    Ln || F(35);
                  }, 1),
                  new Rn())
            );
          })();
        function Mn() {
          if (
            ((kn.pendingReactions.length ||
              kn.inBatch ||
              kn.isRunningReactions) &&
              F(36),
            (Ln = !0),
            Nn)
          ) {
            var e = G();
            0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0),
              (kn = new Rn());
          }
        }
        function In() {
          return kn;
        }
        function Bn() {
          var e = new Rn();
          for (var t in e) -1 === Tn.indexOf(t) && (kn[t] = e[t]);
          kn.allowStateChanges = !kn.enforceActions;
        }
        function Dn(e) {
          return e.observers_ && e.observers_.size > 0;
        }
        function Hn(e) {
          return e.observers_;
        }
        function Un(e, t) {
          e.observers_.add(t),
            e.lowestObserverState_ > t.dependenciesState_ &&
              (e.lowestObserverState_ = t.dependenciesState_);
        }
        function Fn(e, t) {
          e.observers_.delete(t), 0 === e.observers_.size && Vn(e);
        }
        function Vn(e) {
          !1 === e.isPendingUnobservation_ &&
            ((e.isPendingUnobservation_ = !0),
            kn.pendingUnobservations.push(e));
        }
        function Gn() {
          kn.inBatch++;
        }
        function zn() {
          if (0 == --kn.inBatch) {
            tr();
            for (var e = kn.pendingUnobservations, t = 0; t < e.length; t++) {
              var n = e[t];
              (n.isPendingUnobservation_ = !1),
                0 === n.observers_.size &&
                  (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()),
                  n instanceof ln && n.suspend_());
            }
            kn.pendingUnobservations = [];
          }
        }
        function qn(e) {
          _n(e);
          var t = kn.trackingDerivation;
          return null !== t
            ? (t.runId_ !== e.lastAccessedBy_ &&
                ((e.lastAccessedBy_ = t.runId_),
                (t.newObserving_[t.unboundDepsCount_++] = e),
                !e.isBeingObserved_ &&
                  kn.trackingContext &&
                  ((e.isBeingObserved_ = !0), e.onBO())),
              e.isBeingObserved_)
            : (0 === e.observers_.size && kn.inBatch > 0 && Vn(e), !1);
        }
        function Jn(e) {
          e.lowestObserverState_ !== pn.STALE_ &&
            ((e.lowestObserverState_ = pn.STALE_),
            e.observers_.forEach(function (e) {
              e.dependenciesState_ === pn.UP_TO_DATE_ && e.onBecomeStale_(),
                (e.dependenciesState_ = pn.STALE_);
            }));
        }
        function $n(e) {
          e.lowestObserverState_ !== pn.STALE_ &&
            ((e.lowestObserverState_ = pn.STALE_),
            e.observers_.forEach(function (t) {
              t.dependenciesState_ === pn.POSSIBLY_STALE_
                ? (t.dependenciesState_ = pn.STALE_)
                : t.dependenciesState_ === pn.UP_TO_DATE_ &&
                  (e.lowestObserverState_ = pn.UP_TO_DATE_);
            }));
        }
        function Kn(e) {
          e.lowestObserverState_ === pn.UP_TO_DATE_ &&
            ((e.lowestObserverState_ = pn.POSSIBLY_STALE_),
            e.observers_.forEach(function (e) {
              e.dependenciesState_ === pn.UP_TO_DATE_ &&
                ((e.dependenciesState_ = pn.POSSIBLY_STALE_),
                e.onBecomeStale_());
            }));
        }
        function Wn(e, t) {
          if (
            (console.log(
              "[mobx.trace] '" +
                e.name_ +
                "' is invalidated due to a change in: '" +
                t.name_ +
                "'"
            ),
            e.isTracing_ === hn.BREAK)
          ) {
            var n = [];
            Xn(Ur(e), n, 1),
              new Function(
                "debugger;\n/*\nTracing '" +
                  e.name_ +
                  "'\n\nYou are entering this break point because derivation '" +
                  e.name_ +
                  "' is being traced and '" +
                  t.name_ +
                  "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" +
                  (e instanceof ln
                    ? e.derivation.toString().replace(/[*]\//g, "/")
                    : "") +
                  "\n\nThe dependencies for this derivation are:\n\n" +
                  n.join("\n") +
                  "\n*/\n    "
              )();
          }
        }
        function Xn(e, t, n) {
          t.length >= 1e3
            ? t.push("(and many more)")
            : (t.push("" + "\t".repeat(n - 1) + e.name),
              e.dependencies &&
                e.dependencies.forEach(function (e) {
                  return Xn(e, t, n + 1);
                }));
        }
        var Yn = (function () {
          function e(e, t, n, r) {
            void 0 === e && (e = "Reaction"),
              (this.name_ = void 0),
              (this.onInvalidate_ = void 0),
              (this.errorHandler_ = void 0),
              (this.requiresObservable_ = void 0),
              (this.observing_ = []),
              (this.newObserving_ = []),
              (this.dependenciesState_ = pn.NOT_TRACKING_),
              (this.diffValue_ = 0),
              (this.runId_ = 0),
              (this.unboundDepsCount_ = 0),
              (this.isDisposed_ = !1),
              (this.isScheduled_ = !1),
              (this.isTrackPending_ = !1),
              (this.isRunning_ = !1),
              (this.isTracing_ = hn.NONE),
              (this.name_ = e),
              (this.onInvalidate_ = t),
              (this.errorHandler_ = n),
              (this.requiresObservable_ = r);
          }
          var t = e.prototype;
          return (
            (t.onBecomeStale_ = function e() {
              this.schedule_();
            }),
            (t.schedule_ = function e() {
              this.isScheduled_ ||
                ((this.isScheduled_ = !0),
                kn.pendingReactions.push(this),
                tr());
            }),
            (t.isScheduled = function e() {
              return this.isScheduled_;
            }),
            (t.runReaction_ = function e() {
              if (!this.isDisposed_) {
                Gn(), (this.isScheduled_ = !1);
                var t = kn.trackingContext;
                if (((kn.trackingContext = this), yn(this))) {
                  this.isTrackPending_ = !0;
                  try {
                    this.onInvalidate_();
                  } catch (e) {
                    this.reportExceptionInDerivation_(e);
                  }
                }
                (kn.trackingContext = t), zn();
              }
            }),
            (t.track = function e(t) {
              if (!this.isDisposed_) {
                Gn();
                var n = !1,
                  r;
                0, (this.isRunning_ = !0);
                var o = kn.trackingContext;
                kn.trackingContext = this;
                var i = gn(this, t, void 0);
                (kn.trackingContext = o),
                  (this.isRunning_ = !1),
                  (this.isTrackPending_ = !1),
                  this.isDisposed_ && En(this),
                  vn(i) && this.reportExceptionInDerivation_(i.cause),
                  zn();
              }
            }),
            (t.reportExceptionInDerivation_ = function e(t) {
              var n = this;
              if (this.errorHandler_) this.errorHandler_(t, this);
              else {
                if (kn.disableErrorBoundaries) throw t;
                var r = "[mobx] uncaught error in '" + this + "'";
                kn.suppressReactionErrors || console.error(r, t),
                  kn.globalReactionErrorHandlers.forEach(function (e) {
                    return e(t, n);
                  });
              }
            }),
            (t.dispose = function e() {
              this.isDisposed_ ||
                ((this.isDisposed_ = !0),
                this.isRunning_ || (Gn(), En(this), zn()));
            }),
            (t.getDisposer_ = function e() {
              var t = this.dispose.bind(this);
              return (t[Ie] = this), t;
            }),
            (t.toString = function e() {
              return "Reaction[" + this.name_ + "]";
            }),
            (t.trace = function e(t) {
              void 0 === t && (t = !1), Co(this, t);
            }),
            e
          );
        })();
        function Zn(e) {
          return (
            kn.globalReactionErrorHandlers.push(e),
            function () {
              var t = kn.globalReactionErrorHandlers.indexOf(e);
              t >= 0 && kn.globalReactionErrorHandlers.splice(t, 1);
            }
          );
        }
        var Qn = 100,
          er = function e(t) {
            return t();
          };
        function tr() {
          kn.inBatch > 0 || kn.isRunningReactions || er(nr);
        }
        function nr() {
          kn.isRunningReactions = !0;
          for (var e = kn.pendingReactions, t = 0; e.length > 0; ) {
            100 == ++t &&
              (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
            for (var n = e.splice(0), r = 0, o = n.length; r < o; r++)
              n[r].runReaction_();
          }
          kn.isRunningReactions = !1;
        }
        var rr = le("Reaction", Yn);
        function or(e) {
          var t = er;
          er = function n(r) {
            return e(function () {
              return t(r);
            });
          };
        }
        function ir() {
          return !1;
        }
        function ar(e) {
          var t, n, r;
        }
        function ur(e) {
          var t;
        }
        var sr = { type: "report-end", spyReportEnd: !0 };
        function cr(e) {}
        function lr(e) {
          return (
            console.warn("[mobx.spy] Is a no-op in production builds"),
            function () {}
          );
        }
        var fr = "action",
          pr = "action.bound",
          hr = "autoAction",
          dr = "autoAction.bound",
          vr = "<unnamed action>",
          yr = et(fr),
          mr = et(pr, { bound: !0 }),
          br = et(hr, { autoAction: !0 }),
          _r = et(dr, { autoAction: !0, bound: !0 });
        function gr(e) {
          var t;
          return function t(n, r) {
            return re(n)
              ? Zt(n.name || "<unnamed action>", n, e)
              : re(r)
              ? Zt(n, r, e)
              : oe(r)
              ? Le(n, r, e ? br : yr)
              : oe(n)
              ? Ne(et(e ? hr : fr, { name: n, autoAction: e }))
              : void 0;
          };
        }
        var wr = gr(!1);
        Object.assign(wr, yr);
        var Or = gr(!0);
        function Er(e) {
          return Qt(e.name || "<unnamed action>", !1, e, this, void 0);
        }
        function Sr(e) {
          return re(e) && !0 === e.isMobxAction;
        }
        function xr(e, t) {
          var n, r;
          void 0 === t && (t = W);
          var o =
              null != (n = null == (r = t) ? void 0 : r.name) ? n : "Autorun",
            i,
            a;
          if (!t.scheduler && !t.delay)
            a = new Yn(
              o,
              function () {
                this.track(c);
              },
              t.onError,
              t.requiresObservable
            );
          else {
            var u = jr(t),
              s = !1;
            a = new Yn(
              o,
              function () {
                s ||
                  ((s = !0),
                  u(function () {
                    (s = !1), a.isDisposed_ || a.track(c);
                  }));
              },
              t.onError,
              t.requiresObservable
            );
          }
          function c() {
            e(a);
          }
          return a.schedule_(), a.getDisposer_();
        }
        Object.assign(Or, br), (wr.bound = Ne(mr)), (Or.bound = Ne(_r));
        var Cr = function e(t) {
          return t();
        };
        function jr(e) {
          return e.scheduler
            ? e.scheduler
            : e.delay
            ? function (t) {
                return setTimeout(t, e.delay);
              }
            : Cr;
        }
        function Ar(e, t, n) {
          var r;
          void 0 === n && (n = W);
          var o = null != (r = n.name) ? r : "Reaction",
            i = wr(o, n.onError ? Pr(n.onError, t) : t),
            a = !n.scheduler && !n.delay,
            u = jr(n),
            s = !0,
            c = !1,
            l,
            f,
            p = n.compareStructural ? ze.structural : n.equals || ze.default,
            h = new Yn(
              o,
              function () {
                s || a ? d() : c || ((c = !0), u(d));
              },
              n.onError,
              n.requiresObservable
            );
          function d() {
            if (((c = !1), !h.isDisposed_)) {
              var t = !1;
              h.track(function () {
                var n = nn(!1, function () {
                  return e(h);
                });
                (t = s || !p(l, n)), (f = l), (l = n);
              }),
                ((s && n.fireImmediately) || (!s && t)) && i(l, f, h),
                (s = !1);
            }
          }
          return h.schedule_(), h.getDisposer_();
        }
        function Pr(e, t) {
          return function () {
            try {
              return t.apply(this, arguments);
            } catch (t) {
              e.call(this, t);
            }
          };
        }
        var Tr = "onBO",
          Rr = "onBUO";
        function Nr(e, t, n) {
          return kr("onBO", e, t, n);
        }
        function Lr(e, t, n) {
          return kr("onBUO", e, t, n);
        }
        function kr(e, t, n, r) {
          var o = "function" == typeof r ? ki(t, n) : ki(t),
            i = re(r) ? r : n,
            a = e + "L";
          return (
            o[a] ? o[a].add(i) : (o[a] = new Set([i])),
            function () {
              var e = o[a];
              e && (e.delete(i), 0 === e.size && delete o[a]);
            }
          );
        }
        var Mr = "never",
          Ir = "always",
          Br = "observed";
        function Dr(e) {
          !0 === e.isolateGlobalState && Mn();
          var t = e.useProxies,
            n = e.enforceActions;
          if (
            (void 0 !== t &&
              (kn.useProxies =
                t === Ir || (t !== Mr && "undefined" != typeof Proxy)),
            "ifavailable" === t && (kn.verifyProxies = !0),
            void 0 !== n)
          ) {
            var r = n === Ir ? Ir : n === Br;
            (kn.enforceActions = r),
              (kn.allowStateChanges = !0 !== r && r !== Ir);
          }
          [
            "computedRequiresReaction",
            "reactionRequiresObservable",
            "observableRequiresReaction",
            "disableErrorBoundaries",
            "safeDescriptors",
          ].forEach(function (t) {
            t in e && (kn[t] = !!e[t]);
          }),
            (kn.allowStateReads = !kn.observableRequiresReaction),
            e.reactionScheduler && or(e.reactionScheduler);
        }
        function Hr(e, t, n, r) {
          var o = _e(t),
            i = _i(e, r)[Ie];
          Gn();
          try {
            ve(o).forEach(function (e) {
              i.extend_(e, o[e], !n || !(e in n) || n[e]);
            });
          } finally {
            zn();
          }
          return e;
        }
        function Ur(e, t) {
          return Fr(ki(e, t));
        }
        function Fr(e) {
          var t = { name: e.name_ };
          return (
            e.observing_ &&
              e.observing_.length > 0 &&
              (t.dependencies = zr(e.observing_).map(Fr)),
            t
          );
        }
        function Vr(e, t) {
          return Gr(ki(e, t));
        }
        function Gr(e) {
          var t = { name: e.name_ };
          return Dn(e) && (t.observers = Array.from(Hn(e)).map(Gr)), t;
        }
        function zr(e) {
          return Array.from(new Set(e));
        }
        var qr = 0;
        function Jr() {
          this.message = "FLOW_CANCELLED";
        }
        function $r(e) {
          return e instanceof Jr;
        }
        Jr.prototype = Object.create(Error.prototype);
        var Kr = it("flow"),
          Wr = it("flow.bound", { bound: !0 }),
          Xr = Object.assign(function e(t, n) {
            if (oe(n)) return Le(t, n, Kr);
            var r = t,
              o = r.name || "<unnamed flow>",
              i = function e() {
                var t = this,
                  n = arguments,
                  i = ++qr,
                  a = wr(o + " - runid: " + i + " - init", r).apply(t, n),
                  u,
                  s = void 0,
                  c = new Promise(function (e, t) {
                    var n = 0;
                    function r(e) {
                      var r;
                      s = void 0;
                      try {
                        r = wr(
                          o + " - runid: " + i + " - yield " + n++,
                          a.next
                        ).call(a, e);
                      } catch (e) {
                        return t(e);
                      }
                      l(r);
                    }
                    function c(e) {
                      var r;
                      s = void 0;
                      try {
                        r = wr(
                          o + " - runid: " + i + " - yield " + n++,
                          a.throw
                        ).call(a, e);
                      } catch (e) {
                        return t(e);
                      }
                      l(r);
                    }
                    function l(n) {
                      if (!re(null == n ? void 0 : n.then))
                        return n.done
                          ? e(n.value)
                          : (s = Promise.resolve(n.value)).then(r, c);
                      n.then(l, t);
                    }
                    (u = t), r(void 0);
                  });
                return (
                  (c.cancel = wr(
                    o + " - runid: " + i + " - cancel",
                    function () {
                      try {
                        s && Yr(s);
                        var e = a.return(void 0),
                          t = Promise.resolve(e.value);
                        t.then(ne, ne), Yr(t), u(new Jr());
                      } catch (e) {
                        u(e);
                      }
                    }
                  )),
                  c
                );
              };
            return (i.isMobXFlow = !0), i;
          }, Kr);
        function Yr(e) {
          re(e.cancel) && e.cancel();
        }
        function Zr(e) {
          return e;
        }
        function Qr(e) {
          return !0 === (null == e ? void 0 : e.isMobXFlow);
        }
        function eo(e, t, n) {
          var r;
          return (
            ci(e) || oi(e) || sn(e) ? (r = Mi(e)) : Oi(e) && (r = Mi(e, t)),
            (r.dehancer = "function" == typeof t ? t : n),
            function () {
              r.dehancer = void 0;
            }
          );
        }
        function to(e, t, n) {
          return re(n) ? ro(e, t, n) : no(e, t);
        }
        function no(e, t) {
          return Mi(e).intercept_(t);
        }
        function ro(e, t, n) {
          return Mi(e, t).intercept_(n);
        }
        function oo(e, t) {
          if (void 0 === t) return fn(e);
          if (!1 === Oi(e)) return !1;
          if (!e[Ie].values_.has(t)) return !1;
          var n = ki(e, t);
          return fn(n);
        }
        function io(e) {
          return oo(e);
        }
        function ao(e, t) {
          return oo(e, t);
        }
        function uo(e, t) {
          return (
            !!e &&
            (void 0 !== t
              ? !!Oi(e) && e[Ie].values_.has(t)
              : Oi(e) || !!e[Ie] || De(e) || rr(e) || fn(e))
          );
        }
        function so(e) {
          return uo(e);
        }
        function co(e, t) {
          return uo(e, t);
        }
        function lo(e) {
          return Oi(e)
            ? e[Ie].keys_()
            : ci(e) || vi(e)
            ? Array.from(e.keys())
            : oi(e)
            ? e.map(function (e, t) {
                return t;
              })
            : void F(5);
        }
        function fo(e) {
          return Oi(e)
            ? lo(e).map(function (t) {
                return e[t];
              })
            : ci(e)
            ? lo(e).map(function (t) {
                return e.get(t);
              })
            : vi(e)
            ? Array.from(e.values())
            : oi(e)
            ? e.slice()
            : void F(6);
        }
        function po(e) {
          return Oi(e)
            ? lo(e).map(function (t) {
                return [t, e[t]];
              })
            : ci(e)
            ? lo(e).map(function (t) {
                return [t, e.get(t)];
              })
            : vi(e)
            ? Array.from(e.entries())
            : oi(e)
            ? e.map(function (e, t) {
                return [t, e];
              })
            : void F(7);
        }
        function ho(e, t, n) {
          if (2 !== arguments.length || vi(e))
            Oi(e)
              ? e[Ie].set_(t, n)
              : ci(e)
              ? e.set(t, n)
              : vi(e)
              ? e.add(t)
              : oi(e)
              ? ("number" != typeof t && (t = parseInt(t, 10)),
                t < 0 && F("Invalid index: '" + t + "'"),
                Gn(),
                t >= e.length && (e.length = t + 1),
                (e[t] = n),
                zn())
              : F(8);
          else {
            Gn();
            var r = t;
            try {
              for (var o in r) ho(e, o, r[o]);
            } finally {
              zn();
            }
          }
        }
        function vo(e, t) {
          Oi(e)
            ? e[Ie].delete_(t)
            : ci(e) || vi(e)
            ? e.delete(t)
            : oi(e)
            ? ("number" != typeof t && (t = parseInt(t, 10)), e.splice(t, 1))
            : F(9);
        }
        function yo(e, t) {
          return Oi(e)
            ? e[Ie].has_(t)
            : ci(e) || vi(e)
            ? e.has(t)
            : oi(e)
            ? t >= 0 && t < e.length
            : void F(10);
        }
        function mo(e, t) {
          if (yo(e, t))
            return Oi(e)
              ? e[Ie].get_(t)
              : ci(e)
              ? e.get(t)
              : oi(e)
              ? e[t]
              : void F(11);
        }
        function bo(e, t, n) {
          if (Oi(e)) return e[Ie].defineProperty_(t, n);
          F(39);
        }
        function _o(e) {
          if (Oi(e)) return e[Ie].ownKeys_();
          F(38);
        }
        function go(e, t, n, r) {
          return re(n) ? Oo(e, t, n, r) : wo(e, t, n);
        }
        function wo(e, t, n) {
          return Mi(e).observe_(t, n);
        }
        function Oo(e, t, n, r) {
          return Mi(e, t).observe_(n, r);
        }
        function Eo(e, t, n) {
          return e.set(t, n), n;
        }
        function So(e, t) {
          if (null == e || "object" != typeof e || e instanceof Date || !so(e))
            return e;
          if (sn(e) || fn(e)) return So(e.get(), t);
          if (t.has(e)) return t.get(e);
          if (oi(e)) {
            var n = Eo(t, e, new Array(e.length));
            return (
              e.forEach(function (e, r) {
                n[r] = So(e, t);
              }),
              n
            );
          }
          if (vi(e)) {
            var r = Eo(t, e, new Set());
            return (
              e.forEach(function (e) {
                r.add(So(e, t));
              }),
              r
            );
          }
          if (ci(e)) {
            var o = Eo(t, e, new Map());
            return (
              e.forEach(function (e, n) {
                o.set(n, So(e, t));
              }),
              o
            );
          }
          var i = Eo(t, e, {});
          return (
            _o(e).forEach(function (n) {
              $.propertyIsEnumerable.call(e, n) && (i[n] = So(e[n], t));
            }),
            i
          );
        }
        function xo(e, t) {
          return So(e, new Map());
        }
        function Co() {
          F("trace() is not available in production builds");
          for (
            var e = !1, t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          "boolean" == typeof n[n.length - 1] && (e = n.pop());
          var o = jo(n);
          if (!o)
            return F(
              "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly"
            );
          o.isTracing_ === hn.NONE &&
            console.log("[mobx.trace] '" + o.name_ + "' tracing enabled"),
            (o.isTracing_ = e ? hn.BREAK : hn.LOG);
        }
        function jo(e) {
          switch (e.length) {
            case 0:
              return kn.trackingDerivation;
            case 1:
              return ki(e[0]);
            case 2:
              return ki(e[0], e[1]);
          }
        }
        function Ao(e, t) {
          void 0 === t && (t = void 0), Gn();
          try {
            return e.apply(t);
          } finally {
            zn();
          }
        }
        function Po(e, t, n) {
          return 1 === arguments.length || (t && "object" == typeof t)
            ? Ro(e, t)
            : To(e, t, n || {});
        }
        function To(e, t, n) {
          var r;
          if ("number" == typeof n.timeout) {
            var o = new Error("WHEN_TIMEOUT");
            r = setTimeout(function () {
              if (!a[Ie].isDisposed_) {
                if ((a(), !n.onError)) throw o;
                n.onError(o);
              }
            }, n.timeout);
          }
          n.name = "When";
          var i = Zt("When-effect", t),
            a = xr(function (t) {
              var n;
              nn(!1, e) && (t.dispose(), r && clearTimeout(r), i());
            }, n);
          return a;
        }
        function Ro(e, t) {
          var n, r, o;
          if (null != t && null != (n = t.signal) && n.aborted)
            return Object.assign(Promise.reject(new Error("WHEN_ABORTED")), {
              cancel: function e() {
                return null;
              },
            });
          var i = new Promise(function (n, i) {
            var a,
              u = To(e, n, Oe({}, t, { onError: i }));
            (r = function e() {
              u(), i(new Error("WHEN_CANCELLED"));
            }),
              (o = function e() {
                u(), i(new Error("WHEN_ABORTED"));
              }),
              null == t ||
                null == (a = t.signal) ||
                null == a.addEventListener ||
                a.addEventListener("abort", o);
          }).finally(function () {
            var e;
            return null == t ||
              null == (e = t.signal) ||
              null == e.removeEventListener
              ? void 0
              : e.removeEventListener("abort", o);
          });
          return (i.cancel = r), i;
        }
        function No(e) {
          return e[Ie];
        }
        Xr.bound = Ne(Wr);
        var Lo = {
          has: function e(t, n) {
            return No(t).has_(n);
          },
          get: function e(t, n) {
            return No(t).get_(n);
          },
          set: function e(t, n, r) {
            var o;
            return !!oe(n) && (null == (o = No(t).set_(n, r, !0)) || o);
          },
          deleteProperty: function e(t, n) {
            var r;
            return !!oe(n) && (null == (r = No(t).delete_(n, !0)) || r);
          },
          defineProperty: function e(t, n, r) {
            var o;
            return null == (o = No(t).defineProperty_(n, r)) || o;
          },
          ownKeys: function e(t) {
            return No(t).ownKeys_();
          },
          preventExtensions: function e(t) {
            F(13);
          },
        };
        function ko(e, t) {
          var n, r;
          return (
            Z(),
            null != (r = (n = (e = _i(e, t))[Ie]).proxy_)
              ? r
              : (n.proxy_ = new Proxy(e, Lo))
          );
        }
        function Mo(e) {
          return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
        }
        function Io(e, t) {
          var n = e.interceptors_ || (e.interceptors_ = []);
          return (
            n.push(t),
            te(function () {
              var e = n.indexOf(t);
              -1 !== e && n.splice(e, 1);
            })
          );
        }
        function Bo(e, t) {
          var n = xn();
          try {
            for (
              var r = [].concat(e.interceptors_ || []), o = 0, i = r.length;
              o < i && ((t = r[o](t)) && !t.type && F(14), t);
              o++
            );
            return t;
          } finally {
            Cn(n);
          }
        }
        function Do(e) {
          return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
        }
        function Ho(e, t) {
          var n = e.changeListeners_ || (e.changeListeners_ = []);
          return (
            n.push(t),
            te(function () {
              var e = n.indexOf(t);
              -1 !== e && n.splice(e, 1);
            })
          );
        }
        function Uo(e, t) {
          var n = xn(),
            r = e.changeListeners_;
          if (r) {
            for (var o = 0, i = (r = r.slice()).length; o < i; o++) r[o](t);
            Cn(n);
          }
        }
        function Fo(e, t, n) {
          var r = _i(e, n)[Ie];
          Gn();
          try {
            var o;
            0,
              null != (o = t) || (t = Me(e)),
              ve(t).forEach(function (e) {
                return r.make_(e, t[e]);
              });
          } finally {
            zn();
          }
          return e;
        }
        var Vo = Symbol("mobx-keys");
        function Go(e, t, n) {
          if (ae(e)) return Hr(e, e, t, n);
          var r = _i(e, n)[Ie];
          if (!e[Vo]) {
            var o = Object.getPrototypeOf(e),
              i = new Set([].concat(ve(e), ve(o)));
            i.delete("constructor"), i.delete(Ie), se(o, Vo, i);
          }
          Gn();
          try {
            e[Vo].forEach(function (e) {
              return r.make_(e, !t || !(e in t) || t[e]);
            });
          } finally {
            zn();
          }
          return e;
        }
        var zo = "splice",
          qo = "update",
          Jo = 1e4,
          $o = {
            get: function e(t, n) {
              var r = t[Ie];
              return n === Ie
                ? r
                : "length" === n
                ? r.getArrayLength_()
                : "string" != typeof n || isNaN(n)
                ? be(Xo, n)
                  ? Xo[n]
                  : t[n]
                : r.get_(parseInt(n));
            },
            set: function e(t, n, r) {
              var o = t[Ie];
              return (
                "length" === n && o.setArrayLength_(r),
                "symbol" == typeof n || isNaN(n)
                  ? (t[n] = r)
                  : o.set_(parseInt(n), r),
                !0
              );
            },
            preventExtensions: function e() {
              F(15);
            },
          },
          Ko = (function () {
            function e(e, t, n, r) {
              void 0 === e && (e = "ObservableArray"),
                (this.owned_ = void 0),
                (this.legacyMode_ = void 0),
                (this.atom_ = void 0),
                (this.values_ = []),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.enhancer_ = void 0),
                (this.dehancer = void 0),
                (this.proxy_ = void 0),
                (this.lastKnownLength_ = 0),
                (this.owned_ = n),
                (this.legacyMode_ = r),
                (this.atom_ = new Be(e)),
                (this.enhancer_ = function (e, n) {
                  return t(e, n, "ObservableArray[..]");
                });
            }
            var t = e.prototype;
            return (
              (t.dehanceValue_ = function e(t) {
                return void 0 !== this.dehancer ? this.dehancer(t) : t;
              }),
              (t.dehanceValues_ = function e(t) {
                return void 0 !== this.dehancer && t.length > 0
                  ? t.map(this.dehancer)
                  : t;
              }),
              (t.intercept_ = function e(t) {
                return Io(this, t);
              }),
              (t.observe_ = function e(t, n) {
                return (
                  void 0 === n && (n = !1),
                  n &&
                    t({
                      observableKind: "array",
                      object: this.proxy_,
                      debugObjectName: this.atom_.name_,
                      type: "splice",
                      index: 0,
                      added: this.values_.slice(),
                      addedCount: this.values_.length,
                      removed: [],
                      removedCount: 0,
                    }),
                  Ho(this, t)
                );
              }),
              (t.getArrayLength_ = function e() {
                return this.atom_.reportObserved(), this.values_.length;
              }),
              (t.setArrayLength_ = function e(t) {
                ("number" != typeof t || isNaN(t) || t < 0) &&
                  F("Out of range: " + t);
                var n = this.values_.length;
                if (t !== n)
                  if (t > n) {
                    for (var r = new Array(t - n), o = 0; o < t - n; o++)
                      r[o] = void 0;
                    this.spliceWithArray_(n, 0, r);
                  } else this.spliceWithArray_(t, n - t);
              }),
              (t.updateArrayLength_ = function e(t, n) {
                t !== this.lastKnownLength_ && F(16),
                  (this.lastKnownLength_ += n),
                  this.legacyMode_ && n > 0 && Ni(t + n + 1);
              }),
              (t.spliceWithArray_ = function e(t, n, r) {
                var o = this;
                bn(this.atom_);
                var i = this.values_.length;
                if (
                  (void 0 === t
                    ? (t = 0)
                    : t > i
                    ? (t = i)
                    : t < 0 && (t = Math.max(0, i + t)),
                  (n =
                    1 === arguments.length
                      ? i - t
                      : null == n
                      ? 0
                      : Math.max(0, Math.min(n, i - t))),
                  void 0 === r && (r = K),
                  Mo(this))
                ) {
                  var a = Bo(this, {
                    object: this.proxy_,
                    type: zo,
                    index: t,
                    removedCount: n,
                    added: r,
                  });
                  if (!a) return K;
                  (n = a.removedCount), (r = a.added);
                }
                if (
                  ((r =
                    0 === r.length
                      ? r
                      : r.map(function (e) {
                          return o.enhancer_(e, void 0);
                        })),
                  this.legacyMode_)
                ) {
                  var u = r.length - n;
                  this.updateArrayLength_(i, u);
                }
                var s = this.spliceItemsIntoValues_(t, n, r);
                return (
                  (0 === n && 0 === r.length) ||
                    this.notifyArraySplice_(t, r, s),
                  this.dehanceValues_(s)
                );
              }),
              (t.spliceItemsIntoValues_ = function e(t, n, r) {
                var o;
                if (r.length < 1e4)
                  return (o = this.values_).splice.apply(o, [t, n].concat(r));
                var i = this.values_.slice(t, t + n),
                  a = this.values_.slice(t + n);
                this.values_.length += r.length - n;
                for (var u = 0; u < r.length; u++) this.values_[t + u] = r[u];
                for (var s = 0; s < a.length; s++)
                  this.values_[t + r.length + s] = a[s];
                return i;
              }),
              (t.notifyArrayChildUpdate_ = function e(t, n, r) {
                var o = !this.owned_ && !1,
                  i = Do(this),
                  a =
                    i || o
                      ? {
                          observableKind: "array",
                          object: this.proxy_,
                          type: qo,
                          debugObjectName: this.atom_.name_,
                          index: t,
                          newValue: n,
                          oldValue: r,
                        }
                      : null;
                this.atom_.reportChanged(), i && Uo(this, a);
              }),
              (t.notifyArraySplice_ = function e(t, n, r) {
                var o = !this.owned_ && !1,
                  i = Do(this),
                  a =
                    i || o
                      ? {
                          observableKind: "array",
                          object: this.proxy_,
                          debugObjectName: this.atom_.name_,
                          type: zo,
                          index: t,
                          removed: r,
                          added: n,
                          removedCount: r.length,
                          addedCount: n.length,
                        }
                      : null;
                this.atom_.reportChanged(), i && Uo(this, a);
              }),
              (t.get_ = function e(t) {
                if (!(this.legacyMode_ && t >= this.values_.length))
                  return (
                    this.atom_.reportObserved(),
                    this.dehanceValue_(this.values_[t])
                  );
                console.warn("[mobx] Out of bounds read: " + t);
              }),
              (t.set_ = function e(t, n) {
                var r = this.values_;
                if (
                  (this.legacyMode_ && t > r.length && F(17, t, r.length),
                  t < r.length)
                ) {
                  bn(this.atom_);
                  var o = r[t],
                    i;
                  if (Mo(this)) {
                    var a = Bo(this, {
                      type: qo,
                      object: this.proxy_,
                      index: t,
                      newValue: n,
                    });
                    if (!a) return;
                    n = a.newValue;
                  }
                  (n = this.enhancer_(n, o)) !== o &&
                    ((r[t] = n), this.notifyArrayChildUpdate_(t, n, o));
                } else {
                  for (
                    var u = new Array(t + 1 - r.length), s = 0;
                    s < u.length - 1;
                    s++
                  )
                    u[s] = void 0;
                  (u[u.length - 1] = n), this.spliceWithArray_(r.length, 0, u);
                }
              }),
              e
            );
          })();
        function Wo(e, t, n, r) {
          void 0 === n && (n = "ObservableArray"),
            void 0 === r && (r = !1),
            Z();
          var o = new Ko(n, t, r, !1);
          ce(o.values_, Ie, o);
          var i = new Proxy(o.values_, $o);
          if (((o.proxy_ = i), e && e.length)) {
            var a = rn(!0);
            o.spliceWithArray_(0, 0, e), on(a);
          }
          return i;
        }
        var Xo = {
          clear: function e() {
            return this.splice(0);
          },
          replace: function e(t) {
            var n = this[Ie];
            return n.spliceWithArray_(0, n.values_.length, t);
          },
          toJSON: function e() {
            return this.slice();
          },
          splice: function e(t, n) {
            for (
              var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2;
              i < r;
              i++
            )
              o[i - 2] = arguments[i];
            var a = this[Ie];
            switch (arguments.length) {
              case 0:
                return [];
              case 1:
                return a.spliceWithArray_(t);
              case 2:
                return a.spliceWithArray_(t, n);
            }
            return a.spliceWithArray_(t, n, o);
          },
          spliceWithArray: function e(t, n, r) {
            return this[Ie].spliceWithArray_(t, n, r);
          },
          push: function e() {
            for (
              var t = this[Ie], n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return t.spliceWithArray_(t.values_.length, 0, r), t.values_.length;
          },
          pop: function e() {
            return this.splice(Math.max(this[Ie].values_.length - 1, 0), 1)[0];
          },
          shift: function e() {
            return this.splice(0, 1)[0];
          },
          unshift: function e() {
            for (
              var t = this[Ie], n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return t.spliceWithArray_(0, 0, r), t.values_.length;
          },
          reverse: function e() {
            return (
              kn.trackingDerivation && F(37, "reverse"),
              this.replace(this.slice().reverse()),
              this
            );
          },
          sort: function e() {
            kn.trackingDerivation && F(37, "sort");
            var t = this.slice();
            return t.sort.apply(t, arguments), this.replace(t), this;
          },
          remove: function e(t) {
            var n = this[Ie],
              r = n.dehanceValues_(n.values_).indexOf(t);
            return r > -1 && (this.splice(r, 1), !0);
          },
        };
        function Yo(e, t) {
          "function" == typeof Array.prototype[e] && (Xo[e] = t(e));
        }
        function Zo(e) {
          return function () {
            var t = this[Ie];
            t.atom_.reportObserved();
            var n = t.dehanceValues_(t.values_);
            return n[e].apply(n, arguments);
          };
        }
        function Qo(e) {
          return function (t, n) {
            var r = this,
              o = this[Ie],
              i;
            return (
              o.atom_.reportObserved(),
              o.dehanceValues_(o.values_)[e](function (e, o) {
                return t.call(n, e, o, r);
              })
            );
          };
        }
        function ei(e) {
          return function () {
            var t = this,
              n = this[Ie];
            n.atom_.reportObserved();
            var r = n.dehanceValues_(n.values_),
              o = arguments[0];
            return (
              (arguments[0] = function (e, n, r) {
                return o(e, n, r, t);
              }),
              r[e].apply(r, arguments)
            );
          };
        }
        Yo("concat", Zo),
          Yo("flat", Zo),
          Yo("includes", Zo),
          Yo("indexOf", Zo),
          Yo("join", Zo),
          Yo("lastIndexOf", Zo),
          Yo("slice", Zo),
          Yo("toString", Zo),
          Yo("toLocaleString", Zo),
          Yo("every", Qo),
          Yo("filter", Qo),
          Yo("find", Qo),
          Yo("findIndex", Qo),
          Yo("flatMap", Qo),
          Yo("forEach", Qo),
          Yo("map", Qo),
          Yo("some", Qo),
          Yo("reduce", ei),
          Yo("reduceRight", ei);
        var ti = le("ObservableArrayAdministration", Ko),
          ni,
          ri;
        function oi(e) {
          return ie(e) && ti(e[Ie]);
        }
        var ii = {},
          ai = "add",
          ui = "delete";
        (ni = Symbol.iterator), (ri = Symbol.toStringTag);
        var si = (function () {
            function e(e, t, n) {
              var r = this;
              void 0 === t && (t = qe),
                void 0 === n && (n = "ObservableMap"),
                (this.enhancer_ = void 0),
                (this.name_ = void 0),
                (this[Ie] = ii),
                (this.data_ = void 0),
                (this.hasMap_ = void 0),
                (this.keysAtom_ = void 0),
                (this.interceptors_ = void 0),
                (this.changeListeners_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = t),
                (this.name_ = n),
                re(Map) || F(18),
                (this.keysAtom_ = He("ObservableMap.keys()")),
                (this.data_ = new Map()),
                (this.hasMap_ = new Map()),
                nn(!0, function () {
                  r.merge(e);
                });
            }
            var t = e.prototype;
            return (
              (t.has_ = function e(t) {
                return this.data_.has(t);
              }),
              (t.has = function e(t) {
                var n = this;
                if (!kn.trackingDerivation) return this.has_(t);
                var r = this.hasMap_.get(t);
                if (!r) {
                  var o = (r = new un(
                    this.has_(t),
                    $e,
                    "ObservableMap.key?",
                    !1
                  ));
                  this.hasMap_.set(t, o),
                    Lr(o, function () {
                      return n.hasMap_.delete(t);
                    });
                }
                return r.get();
              }),
              (t.set = function e(t, n) {
                var r = this.has_(t);
                if (Mo(this)) {
                  var o = Bo(this, {
                    type: r ? qo : ai,
                    object: this,
                    newValue: n,
                    name: t,
                  });
                  if (!o) return this;
                  n = o.newValue;
                }
                return r ? this.updateValue_(t, n) : this.addValue_(t, n), this;
              }),
              (t.delete = function e(t) {
                var n = this,
                  r;
                if (
                  (bn(this.keysAtom_), Mo(this)) &&
                  !Bo(this, { type: ui, object: this, name: t })
                )
                  return !1;
                if (this.has_(t)) {
                  var o = !1,
                    i = Do(this),
                    a = i
                      ? {
                          observableKind: "map",
                          debugObjectName: this.name_,
                          type: ui,
                          object: this,
                          oldValue: this.data_.get(t).value_,
                          name: t,
                        }
                      : null;
                  return (
                    Ao(function () {
                      var e, r;
                      n.keysAtom_.reportChanged(),
                        null == (e = n.hasMap_.get(t)) || e.setNewValue_(!1),
                        n.data_.get(t).setNewValue_(void 0),
                        n.data_.delete(t);
                    }),
                    i && Uo(this, a),
                    !0
                  );
                }
                return !1;
              }),
              (t.updateValue_ = function e(t, n) {
                var r = this.data_.get(t);
                if ((n = r.prepareNewValue_(n)) !== kn.UNCHANGED) {
                  var o = !1,
                    i = Do(this),
                    a = i
                      ? {
                          observableKind: "map",
                          debugObjectName: this.name_,
                          type: qo,
                          object: this,
                          oldValue: r.value_,
                          name: t,
                          newValue: n,
                        }
                      : null;
                  0, r.setNewValue_(n), i && Uo(this, a);
                }
              }),
              (t.addValue_ = function e(t, n) {
                var r = this;
                bn(this.keysAtom_),
                  Ao(function () {
                    var e,
                      o = new un(n, r.enhancer_, "ObservableMap.key", !1);
                    r.data_.set(t, o),
                      (n = o.value_),
                      null == (e = r.hasMap_.get(t)) || e.setNewValue_(!0),
                      r.keysAtom_.reportChanged();
                  });
                var o = !1,
                  i = Do(this),
                  a = i
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: ai,
                        object: this,
                        name: t,
                        newValue: n,
                      }
                    : null;
                i && Uo(this, a);
              }),
              (t.get = function e(t) {
                return this.has(t)
                  ? this.dehanceValue_(this.data_.get(t).get())
                  : this.dehanceValue_(void 0);
              }),
              (t.dehanceValue_ = function e(t) {
                return void 0 !== this.dehancer ? this.dehancer(t) : t;
              }),
              (t.keys = function e() {
                return this.keysAtom_.reportObserved(), this.data_.keys();
              }),
              (t.values = function e() {
                var t = this,
                  n = this.keys();
                return Fi({
                  next: function e() {
                    var r = n.next(),
                      o = r.done,
                      i = r.value;
                    return { done: o, value: o ? void 0 : t.get(i) };
                  },
                });
              }),
              (t.entries = function e() {
                var t = this,
                  n = this.keys();
                return Fi({
                  next: function e() {
                    var r = n.next(),
                      o = r.done,
                      i = r.value;
                    return { done: o, value: o ? void 0 : [i, t.get(i)] };
                  },
                });
              }),
              (t[ni] = function () {
                return this.entries();
              }),
              (t.forEach = function e(t, n) {
                for (var r = Ae(this), o; !(o = r()).done; ) {
                  var i = o.value,
                    a = i[0],
                    u = i[1];
                  t.call(n, u, a, this);
                }
              }),
              (t.merge = function e(t) {
                var n = this;
                return (
                  ci(t) && (t = new Map(t)),
                  Ao(function () {
                    ae(t)
                      ? de(t).forEach(function (e) {
                          return n.set(e, t[e]);
                        })
                      : Array.isArray(t)
                      ? t.forEach(function (e) {
                          var t = e[0],
                            r = e[1];
                          return n.set(t, r);
                        })
                      : fe(t)
                      ? (t.constructor !== Map && F(19, t),
                        t.forEach(function (e, t) {
                          return n.set(t, e);
                        }))
                      : null != t && F(20, t);
                  }),
                  this
                );
              }),
              (t.clear = function e() {
                var t = this;
                Ao(function () {
                  Sn(function () {
                    for (var e = Ae(t.keys()), n; !(n = e()).done; ) {
                      var r = n.value;
                      t.delete(r);
                    }
                  });
                });
              }),
              (t.replace = function e(t) {
                var n = this;
                return (
                  Ao(function () {
                    for (
                      var e = pi(t),
                        r = new Map(),
                        o = !1,
                        i = Ae(n.data_.keys()),
                        a;
                      !(a = i()).done;

                    ) {
                      var u = a.value,
                        s;
                      if (!e.has(u))
                        if (n.delete(u)) o = !0;
                        else {
                          var c = n.data_.get(u);
                          r.set(u, c);
                        }
                    }
                    for (var l = Ae(e.entries()), f; !(f = l()).done; ) {
                      var p = f.value,
                        h = p[0],
                        d = p[1],
                        v = n.data_.has(h);
                      if ((n.set(h, d), n.data_.has(h))) {
                        var y = n.data_.get(h);
                        r.set(h, y), v || (o = !0);
                      }
                    }
                    if (!o)
                      if (n.data_.size !== r.size) n.keysAtom_.reportChanged();
                      else
                        for (
                          var m = n.data_.keys(),
                            b = r.keys(),
                            _ = m.next(),
                            g = b.next();
                          !_.done;

                        ) {
                          if (_.value !== g.value) {
                            n.keysAtom_.reportChanged();
                            break;
                          }
                          (_ = m.next()), (g = b.next());
                        }
                    n.data_ = r;
                  }),
                  this
                );
              }),
              (t.toString = function e() {
                return "[object ObservableMap]";
              }),
              (t.toJSON = function e() {
                return Array.from(this);
              }),
              (t.observe_ = function e(t, n) {
                return Ho(this, t);
              }),
              (t.intercept_ = function e(t) {
                return Io(this, t);
              }),
              we(e, [
                {
                  key: "size",
                  get: function e() {
                    return this.keysAtom_.reportObserved(), this.data_.size;
                  },
                },
                {
                  key: ri,
                  get: function e() {
                    return "Map";
                  },
                },
              ]),
              e
            );
          })(),
          ci = le("ObservableMap", si),
          li,
          fi;
        function pi(e) {
          if (fe(e) || ci(e)) return e;
          if (Array.isArray(e)) return new Map(e);
          if (ae(e)) {
            var t = new Map();
            for (var n in e) t.set(n, e[n]);
            return t;
          }
          return F(21, e);
        }
        var hi = {};
        (li = Symbol.iterator), (fi = Symbol.toStringTag);
        var di = (function () {
            function e(e, t, n) {
              void 0 === t && (t = qe),
                void 0 === n && (n = "ObservableSet"),
                (this.name_ = void 0),
                (this[Ie] = hi),
                (this.data_ = new Set()),
                (this.atom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.dehancer = void 0),
                (this.enhancer_ = void 0),
                (this.name_ = n),
                re(Set) || F(22),
                (this.atom_ = He(this.name_)),
                (this.enhancer_ = function (e, r) {
                  return t(e, r, n);
                }),
                e && this.replace(e);
            }
            var t = e.prototype;
            return (
              (t.dehanceValue_ = function e(t) {
                return void 0 !== this.dehancer ? this.dehancer(t) : t;
              }),
              (t.clear = function e() {
                var t = this;
                Ao(function () {
                  Sn(function () {
                    for (var e = Ae(t.data_.values()), n; !(n = e()).done; ) {
                      var r = n.value;
                      t.delete(r);
                    }
                  });
                });
              }),
              (t.forEach = function e(t, n) {
                for (var r = Ae(this), o; !(o = r()).done; ) {
                  var i = o.value;
                  t.call(n, i, i, this);
                }
              }),
              (t.add = function e(t) {
                var n = this,
                  r;
                if (
                  (bn(this.atom_), Mo(this)) &&
                  !Bo(this, { type: ai, object: this, newValue: t })
                )
                  return this;
                if (!this.has(t)) {
                  Ao(function () {
                    n.data_.add(n.enhancer_(t, void 0)),
                      n.atom_.reportChanged();
                  });
                  var o = !1,
                    i = Do(this),
                    a = i
                      ? {
                          observableKind: "set",
                          debugObjectName: this.name_,
                          type: ai,
                          object: this,
                          newValue: t,
                        }
                      : null;
                  0, i && Uo(this, a);
                }
                return this;
              }),
              (t.delete = function e(t) {
                var n = this,
                  r;
                if (
                  Mo(this) &&
                  !Bo(this, { type: ui, object: this, oldValue: t })
                )
                  return !1;
                if (this.has(t)) {
                  var o = !1,
                    i = Do(this),
                    a = i
                      ? {
                          observableKind: "set",
                          debugObjectName: this.name_,
                          type: ui,
                          object: this,
                          oldValue: t,
                        }
                      : null;
                  return (
                    Ao(function () {
                      n.atom_.reportChanged(), n.data_.delete(t);
                    }),
                    i && Uo(this, a),
                    !0
                  );
                }
                return !1;
              }),
              (t.has = function e(t) {
                return (
                  this.atom_.reportObserved(),
                  this.data_.has(this.dehanceValue_(t))
                );
              }),
              (t.entries = function e() {
                var t = 0,
                  n = Array.from(this.keys()),
                  r = Array.from(this.values());
                return Fi({
                  next: function e() {
                    var o = t;
                    return (
                      (t += 1),
                      o < r.length
                        ? { value: [n[o], r[o]], done: !1 }
                        : { done: !0 }
                    );
                  },
                });
              }),
              (t.keys = function e() {
                return this.values();
              }),
              (t.values = function e() {
                this.atom_.reportObserved();
                var t = this,
                  n = 0,
                  r = Array.from(this.data_.values());
                return Fi({
                  next: function e() {
                    return n < r.length
                      ? { value: t.dehanceValue_(r[n++]), done: !1 }
                      : { done: !0 };
                  },
                });
              }),
              (t.replace = function e(t) {
                var n = this;
                return (
                  vi(t) && (t = new Set(t)),
                  Ao(function () {
                    Array.isArray(t) || pe(t)
                      ? (n.clear(),
                        t.forEach(function (e) {
                          return n.add(e);
                        }))
                      : null != t && F("Cannot initialize set from " + t);
                  }),
                  this
                );
              }),
              (t.observe_ = function e(t, n) {
                return Ho(this, t);
              }),
              (t.intercept_ = function e(t) {
                return Io(this, t);
              }),
              (t.toJSON = function e() {
                return Array.from(this);
              }),
              (t.toString = function e() {
                return "[object ObservableSet]";
              }),
              (t[li] = function () {
                return this.values();
              }),
              we(e, [
                {
                  key: "size",
                  get: function e() {
                    return this.atom_.reportObserved(), this.data_.size;
                  },
                },
                {
                  key: fi,
                  get: function e() {
                    return "Set";
                  },
                },
              ]),
              e
            );
          })(),
          vi = le("ObservableSet", di),
          yi = Object.create(null),
          mi = "remove",
          bi = (function () {
            function e(e, t, n, r) {
              void 0 === t && (t = new Map()),
                void 0 === r && (r = _t),
                (this.target_ = void 0),
                (this.values_ = void 0),
                (this.name_ = void 0),
                (this.defaultAnnotation_ = void 0),
                (this.keysAtom_ = void 0),
                (this.changeListeners_ = void 0),
                (this.interceptors_ = void 0),
                (this.proxy_ = void 0),
                (this.isPlainObject_ = void 0),
                (this.appliedAnnotations_ = void 0),
                (this.pendingKeys_ = void 0),
                (this.target_ = e),
                (this.values_ = t),
                (this.name_ = n),
                (this.defaultAnnotation_ = r),
                (this.keysAtom_ = new Be("ObservableObject.keys")),
                (this.isPlainObject_ = ae(this.target_));
            }
            var t = e.prototype;
            return (
              (t.getObservablePropValue_ = function e(t) {
                return this.values_.get(t).get();
              }),
              (t.setObservablePropValue_ = function e(t, n) {
                var r = this.values_.get(t);
                if (r instanceof ln) return r.set(n), !0;
                if (Mo(this)) {
                  var o = Bo(this, {
                    type: qo,
                    object: this.proxy_ || this.target_,
                    name: t,
                    newValue: n,
                  });
                  if (!o) return null;
                  n = o.newValue;
                }
                if ((n = r.prepareNewValue_(n)) !== kn.UNCHANGED) {
                  var i = Do(this),
                    a = !1,
                    u = i
                      ? {
                          type: qo,
                          observableKind: "object",
                          debugObjectName: this.name_,
                          object: this.proxy_ || this.target_,
                          oldValue: r.value_,
                          name: t,
                          newValue: n,
                        }
                      : null;
                  0, r.setNewValue_(n), i && Uo(this, u);
                }
                return !0;
              }),
              (t.get_ = function e(t) {
                return (
                  kn.trackingDerivation && !be(this.target_, t) && this.has_(t),
                  this.target_[t]
                );
              }),
              (t.set_ = function e(t, n, r) {
                return (
                  void 0 === r && (r = !1),
                  be(this.target_, t)
                    ? this.values_.has(t)
                      ? this.setObservablePropValue_(t, n)
                      : r
                      ? Reflect.set(this.target_, t, n)
                      : ((this.target_[t] = n), !0)
                    : this.extend_(
                        t,
                        {
                          value: n,
                          enumerable: !0,
                          writable: !0,
                          configurable: !0,
                        },
                        this.defaultAnnotation_,
                        r
                      )
                );
              }),
              (t.has_ = function e(t) {
                if (!kn.trackingDerivation) return t in this.target_;
                this.pendingKeys_ || (this.pendingKeys_ = new Map());
                var n = this.pendingKeys_.get(t);
                return (
                  n ||
                    ((n = new un(
                      t in this.target_,
                      $e,
                      "ObservableObject.key?",
                      !1
                    )),
                    this.pendingKeys_.set(t, n)),
                  n.get()
                );
              }),
              (t.make_ = function e(t, n) {
                if ((!0 === n && (n = this.defaultAnnotation_), !1 !== n)) {
                  if ((Si(this, n, t), !(t in this.target_))) {
                    var r;
                    if (null != (r = this.target_[Re]) && r[t]) return;
                    F(1, n.annotationType_, this.name_ + "." + t.toString());
                  }
                  for (var o = this.target_; o && o !== $; ) {
                    var i = q(o, t);
                    if (i) {
                      var a = n.make_(this, t, i, o);
                      if (0 === a) return;
                      if (1 === a) break;
                    }
                    o = Object.getPrototypeOf(o);
                  }
                  Ei(this, n, t);
                }
              }),
              (t.extend_ = function e(t, n, r, o) {
                if (
                  (void 0 === o && (o = !1),
                  !0 === r && (r = this.defaultAnnotation_),
                  !1 === r)
                )
                  return this.defineProperty_(t, n, o);
                Si(this, r, t);
                var i = r.extend_(this, t, n, o);
                return i && Ei(this, r, t), i;
              }),
              (t.defineProperty_ = function e(t, n, r) {
                void 0 === r && (r = !1);
                try {
                  Gn();
                  var o = this.delete_(t);
                  if (!o) return o;
                  if (Mo(this)) {
                    var i = Bo(this, {
                      object: this.proxy_ || this.target_,
                      name: t,
                      type: ai,
                      newValue: n.value,
                    });
                    if (!i) return null;
                    var a = i.newValue;
                    n.value !== a && (n = Oe({}, n, { value: a }));
                  }
                  if (r) {
                    if (!Reflect.defineProperty(this.target_, t, n)) return !1;
                  } else J(this.target_, t, n);
                  this.notifyPropertyAddition_(t, n.value);
                } finally {
                  zn();
                }
                return !0;
              }),
              (t.defineObservableProperty_ = function e(t, n, r, o) {
                void 0 === o && (o = !1);
                try {
                  Gn();
                  var i = this.delete_(t);
                  if (!i) return i;
                  if (Mo(this)) {
                    var a = Bo(this, {
                      object: this.proxy_ || this.target_,
                      name: t,
                      type: ai,
                      newValue: n,
                    });
                    if (!a) return null;
                    n = a.newValue;
                  }
                  var u = wi(t),
                    s = {
                      configurable: !kn.safeDescriptors || this.isPlainObject_,
                      enumerable: !0,
                      get: u.get,
                      set: u.set,
                    };
                  if (o) {
                    if (!Reflect.defineProperty(this.target_, t, s)) return !1;
                  } else J(this.target_, t, s);
                  var c = new un(n, r, "ObservableObject.key", !1);
                  this.values_.set(t, c),
                    this.notifyPropertyAddition_(t, c.value_);
                } finally {
                  zn();
                }
                return !0;
              }),
              (t.defineComputedProperty_ = function e(t, n, r) {
                void 0 === r && (r = !1);
                try {
                  Gn();
                  var o = this.delete_(t),
                    i;
                  if (!o) return o;
                  if (Mo(this))
                    if (
                      !Bo(this, {
                        object: this.proxy_ || this.target_,
                        name: t,
                        type: ai,
                        newValue: void 0,
                      })
                    )
                      return null;
                  n.name || (n.name = "ObservableObject.key"),
                    (n.context = this.proxy_ || this.target_);
                  var a = wi(t),
                    u = {
                      configurable: !kn.safeDescriptors || this.isPlainObject_,
                      enumerable: !1,
                      get: a.get,
                      set: a.set,
                    };
                  if (r) {
                    if (!Reflect.defineProperty(this.target_, t, u)) return !1;
                  } else J(this.target_, t, u);
                  this.values_.set(t, new ln(n)),
                    this.notifyPropertyAddition_(t, void 0);
                } finally {
                  zn();
                }
                return !0;
              }),
              (t.delete_ = function e(t, n) {
                if ((void 0 === n && (n = !1), !be(this.target_, t))) return !0;
                var r;
                if (
                  Mo(this) &&
                  !Bo(this, {
                    object: this.proxy_ || this.target_,
                    name: t,
                    type: mi,
                  })
                )
                  return null;
                try {
                  var o, i;
                  Gn();
                  var a = Do(this),
                    u = !1,
                    s = this.values_.get(t),
                    c = void 0,
                    l;
                  if (!s && a)
                    c = null == (l = q(this.target_, t)) ? void 0 : l.value;
                  if (n) {
                    if (!Reflect.deleteProperty(this.target_, t)) return !1;
                  } else delete this.target_[t];
                  if (
                    (s &&
                      (this.values_.delete(t),
                      s instanceof un && (c = s.value_),
                      Jn(s)),
                    this.keysAtom_.reportChanged(),
                    null == (o = this.pendingKeys_) ||
                      null == (i = o.get(t)) ||
                      i.set(t in this.target_),
                    a)
                  ) {
                    var f = {
                      type: mi,
                      observableKind: "object",
                      object: this.proxy_ || this.target_,
                      debugObjectName: this.name_,
                      oldValue: c,
                      name: t,
                    };
                    0, a && Uo(this, f);
                  }
                } finally {
                  zn();
                }
                return !0;
              }),
              (t.observe_ = function e(t, n) {
                return Ho(this, t);
              }),
              (t.intercept_ = function e(t) {
                return Io(this, t);
              }),
              (t.notifyPropertyAddition_ = function e(t, n) {
                var r,
                  o,
                  i = Do(this),
                  a = !1;
                if (i) {
                  var u = i
                    ? {
                        type: ai,
                        observableKind: "object",
                        debugObjectName: this.name_,
                        object: this.proxy_ || this.target_,
                        name: t,
                        newValue: n,
                      }
                    : null;
                  0, i && Uo(this, u);
                }
                null == (r = this.pendingKeys_) ||
                  null == (o = r.get(t)) ||
                  o.set(!0),
                  this.keysAtom_.reportChanged();
              }),
              (t.ownKeys_ = function e() {
                return this.keysAtom_.reportObserved(), ve(this.target_);
              }),
              (t.keys_ = function e() {
                return (
                  this.keysAtom_.reportObserved(), Object.keys(this.target_)
                );
              }),
              e
            );
          })();
        function _i(e, t) {
          var n;
          if (be(e, Ie)) return e;
          var r =
              null != (n = null == t ? void 0 : t.name)
                ? n
                : "ObservableObject",
            o = new bi(e, new Map(), String(r), Mt(t));
          return se(e, Ie, o), e;
        }
        var gi = le("ObservableObjectAdministration", bi);
        function wi(e) {
          return (
            yi[e] ||
            (yi[e] = {
              get: function t() {
                return this[Ie].getObservablePropValue_(e);
              },
              set: function t(n) {
                return this[Ie].setObservablePropValue_(e, n);
              },
            })
          );
        }
        function Oi(e) {
          return !!ie(e) && gi(e[Ie]);
        }
        function Ei(e, t, n) {
          var r;
          null == (r = e.target_[Re]) || delete r[n];
        }
        function Si(e, t, n) {
          var r, o, i;
        }
        var xi = Ti(0),
          Ci = 0,
          ji = function e() {};
        function Ai(e, t) {
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e.prototype, t)
            : void 0 !== e.prototype.__proto__
            ? (e.prototype.__proto__ = t)
            : (e.prototype = t);
        }
        Ai(ji, Array.prototype);
        var Pi = (function (e, t, n) {
          function r(t, n, r, o) {
            var i;
            void 0 === r && (r = "ObservableArray"),
              void 0 === o && (o = !1),
              (i = e.call(this) || this);
            var a = new Ko(r, n, o, !0);
            if (((a.proxy_ = xe(i)), ce(xe(i), Ie, a), t && t.length)) {
              var u = rn(!0);
              i.spliceWithArray(0, 0, t), on(u);
            }
            return Object.defineProperty(xe(i), "0", xi), i;
          }
          Ee(r, e);
          var o = r.prototype;
          return (
            (o.concat = function e() {
              this[Ie].atom_.reportObserved();
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return Array.prototype.concat.apply(
                this.slice(),
                n.map(function (e) {
                  return oi(e) ? e.slice() : e;
                })
              );
            }),
            (o[n] = function () {
              var e = this,
                t = 0;
              return Fi({
                next: function n() {
                  return t < e.length
                    ? { value: e[t++], done: !1 }
                    : { done: !0, value: void 0 };
                },
              });
            }),
            we(r, [
              {
                key: "length",
                get: function e() {
                  return this[Ie].getArrayLength_();
                },
                set: function e(t) {
                  this[Ie].setArrayLength_(t);
                },
              },
              {
                key: t,
                get: function e() {
                  return "Array";
                },
              },
            ]),
            r
          );
        })(ji, Symbol.toStringTag, Symbol.iterator);
        function Ti(e) {
          return {
            enumerable: !1,
            configurable: !0,
            get: function t() {
              return this[Ie].get_(e);
            },
            set: function t(n) {
              this[Ie].set_(e, n);
            },
          };
        }
        function Ri(e) {
          J(Pi.prototype, "" + e, Ti(e));
        }
        function Ni(e) {
          if (e > Ci) {
            for (var t = Ci; t < e + 100; t++) Ri(t);
            Ci = e;
          }
        }
        function Li(e, t, n) {
          return new Pi(e, t, n);
        }
        function ki(e, t) {
          if ("object" == typeof e && null !== e) {
            if (oi(e)) return void 0 !== t && F(23), e[Ie].atom_;
            if (vi(e)) return e.atom_;
            if (ci(e)) {
              if (void 0 === t) return e.keysAtom_;
              var n = e.data_.get(t) || e.hasMap_.get(t);
              return n || F(25, t, Ii(e)), n;
            }
            if (Oi(e)) {
              if (!t) return F(26);
              var r = e[Ie].values_.get(t);
              return r || F(27, t, Ii(e)), r;
            }
            if (De(e) || fn(e) || rr(e)) return e;
          } else if (re(e) && rr(e[Ie])) return e[Ie];
          F(28);
        }
        function Mi(e, t) {
          return (
            e || F(29),
            void 0 !== t
              ? Mi(ki(e, t))
              : De(e) || fn(e) || rr(e) || ci(e) || vi(e)
              ? e
              : e[Ie]
              ? e[Ie]
              : void F(24, e)
          );
        }
        function Ii(e, t) {
          var n;
          if (void 0 !== t) n = ki(e, t);
          else {
            if (Sr(e)) return e.name;
            n = Oi(e) || ci(e) || vi(e) ? Mi(e) : ki(e);
          }
          return n.name_;
        }
        Object.entries(Xo).forEach(function (e) {
          var t = e[0],
            n = e[1];
          "concat" !== t && se(Pi.prototype, t, n);
        }),
          Ni(1e3);
        var Bi = $.toString;
        function Di(e, t, n) {
          return void 0 === n && (n = -1), Hi(e, t, n);
        }
        function Hi(e, t, n, r, o) {
          if (e === t) return 0 !== e || 1 / e == 1 / t;
          if (null == e || null == t) return !1;
          if (e != e) return t != t;
          var i = typeof e;
          if ("function" !== i && "object" !== i && "object" != typeof t)
            return !1;
          var a = Bi.call(e);
          if (a !== Bi.call(t)) return !1;
          switch (a) {
            case "[object RegExp]":
            case "[object String]":
              return "" + e == "" + t;
            case "[object Number]":
              return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
            case "[object Date]":
            case "[object Boolean]":
              return +e == +t;
            case "[object Symbol]":
              return (
                "undefined" != typeof Symbol &&
                Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
              );
            case "[object Map]":
            case "[object Set]":
              n >= 0 && n++;
          }
          (e = Ui(e)), (t = Ui(t));
          var u = "[object Array]" === a;
          if (!u) {
            if ("object" != typeof e || "object" != typeof t) return !1;
            var s = e.constructor,
              c = t.constructor;
            if (
              s !== c &&
              !(re(s) && s instanceof s && re(c) && c instanceof c) &&
              "constructor" in e &&
              "constructor" in t
            )
              return !1;
          }
          if (0 === n) return !1;
          n < 0 && (n = -1), (o = o || []);
          for (var l = (r = r || []).length; l--; )
            if (r[l] === e) return o[l] === t;
          if ((r.push(e), o.push(t), u)) {
            if ((l = e.length) !== t.length) return !1;
            for (; l--; ) if (!Hi(e[l], t[l], n - 1, r, o)) return !1;
          } else {
            var f = Object.keys(e),
              p;
            if (((l = f.length), Object.keys(t).length !== l)) return !1;
            for (; l--; )
              if (!be(t, (p = f[l])) || !Hi(e[p], t[p], n - 1, r, o)) return !1;
          }
          return r.pop(), o.pop(), !0;
        }
        function Ui(e) {
          return oi(e)
            ? e.slice()
            : fe(e) || ci(e) || pe(e) || vi(e)
            ? Array.from(e.entries())
            : e;
        }
        function Fi(e) {
          return (e[Symbol.iterator] = Vi), e;
        }
        function Vi() {
          return this;
        }
        function Gi(e) {
          return (
            e instanceof Object &&
            "string" == typeof e.annotationType_ &&
            re(e.make_) &&
            re(e.extend_)
          );
        }
        ["Symbol", "Map", "Set"].forEach(function (e) {
          var t;
          void 0 === G()[e] &&
            F("MobX requires global '" + e + "' to be available or polyfilled");
        }),
          "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
            __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
              spy: lr,
              extras: { getDebugName: Ii },
              $mobx: Ie,
            });
      }.call(this, n(35)));
    },
    function (e, t) {
      function n() {
        return (
          (e.exports = n =
            Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          n.apply(this, arguments)
        );
      }
      (e.exports = n),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, n) {
      var r = n(74)();
      e.exports = r;
      try {
        regeneratorRuntime = r;
      } catch (e) {
        "object" == typeof globalThis
          ? (globalThis.regeneratorRuntime = r)
          : Function("r", "regeneratorRuntime = r")(r);
      }
    },
    function (e, t, n) {
      var r = n(71);
      function o(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          r(e, t);
      }
      (e.exports = o),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t) {
      function n(e, t, n, r, o, i, a) {
        try {
          var u = e[i](a),
            s = u.value;
        } catch (e) {
          return void n(e);
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o);
      }
      function r(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (o, i) {
            var a = e.apply(t, r);
            function u(e) {
              n(a, o, i, u, s, "next", e);
            }
            function s(e) {
              n(a, o, i, u, s, "throw", e);
            }
            u(void 0);
          });
        };
      }
      (e.exports = r),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, n) {
      "use strict";
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t) {
      e.exports = _;
    },
    function (e, t) {
      function n(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      (e.exports = n),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t) {
      e.exports = window.PropTypes;
    },
    function (e, t) {
      function n(e, t) {
        if (null == e) return {};
        var n = {},
          r = Object.keys(e),
          o,
          i;
        for (i = 0; i < r.length; i++)
          (o = r[i]), t.indexOf(o) >= 0 || (n[o] = e[o]);
        return n;
      }
      (e.exports = n),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var r = !0,
        o = "Invariant failed";
      function i(e, t) {
        var n, r;
        if (!e) throw new Error(o);
      }
    },
    function (e, t) {
      e.exports = window.ReactDOM;
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (r = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function e(t, n) {
              return (t.__proto__ = n), t;
            })(e, t);
      }
      function o(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          r(e, t);
      }
      n.d(t, "a", function () {
        return o;
      });
    },
    function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return U;
      }),
        n.d(t, "a", function () {
          return _;
        }),
        n.d(t, "d", function () {
          return g;
        }),
        n.d(t, "c", function () {
          return b;
        });
      var r = n(7);
      function o(e) {
        return "/" === e.charAt(0);
      }
      function i(e, t) {
        for (var n = t, r = n + 1, o = e.length; r < o; n += 1, r += 1)
          e[n] = e[r];
        e.pop();
      }
      function a(e, t) {
        void 0 === t && (t = "");
        var n = (e && e.split("/")) || [],
          r = (t && t.split("/")) || [],
          a = e && o(e),
          u = t && o(t),
          s = a || u,
          c;
        if (
          (e && o(e) ? (r = n) : n.length && (r.pop(), (r = r.concat(n))),
          !r.length)
        )
          return "/";
        if (r.length) {
          var l = r[r.length - 1];
          c = "." === l || ".." === l || "" === l;
        } else c = !1;
        for (var f = 0, p = r.length; p >= 0; p--) {
          var h = r[p];
          "." === h
            ? i(r, p)
            : ".." === h
            ? (i(r, p), f++)
            : f && (i(r, p), f--);
        }
        if (!s) for (; f--; f) r.unshift("..");
        !s || "" === r[0] || (r[0] && o(r[0])) || r.unshift("");
        var d = r.join("/");
        return c && "/" !== d.substr(-1) && (d += "/"), d;
      }
      var u = a;
      function s(e) {
        return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
      }
      function c(e, t) {
        if (e === t) return !0;
        if (null == e || null == t) return !1;
        if (Array.isArray(e))
          return (
            Array.isArray(t) &&
            e.length === t.length &&
            e.every(function (e, n) {
              return c(e, t[n]);
            })
          );
        if ("object" == typeof e || "object" == typeof t) {
          var n = s(e),
            r = s(t);
          return n !== e || r !== t
            ? c(n, r)
            : Object.keys(Object.assign({}, e, t)).every(function (n) {
                return c(e[n], t[n]);
              });
        }
        return !1;
      }
      var l = c,
        f = n(12);
      function p(e) {
        return "/" === e.charAt(0) ? e : "/" + e;
      }
      function h(e) {
        return "/" === e.charAt(0) ? e.substr(1) : e;
      }
      function d(e, t) {
        return (
          0 === e.toLowerCase().indexOf(t.toLowerCase()) &&
          -1 !== "/?#".indexOf(e.charAt(t.length))
        );
      }
      function v(e, t) {
        return d(e, t) ? e.substr(t.length) : e;
      }
      function y(e) {
        return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      }
      function m(e) {
        var t = e || "/",
          n = "",
          r = "",
          o = t.indexOf("#");
        -1 !== o && ((r = t.substr(o)), (t = t.substr(0, o)));
        var i = t.indexOf("?");
        return (
          -1 !== i && ((n = t.substr(i)), (t = t.substr(0, i))),
          { pathname: t, search: "?" === n ? "" : n, hash: "#" === r ? "" : r }
        );
      }
      function b(e) {
        var t = e.pathname,
          n = e.search,
          r = e.hash,
          o = t || "/";
        return (
          n && "?" !== n && (o += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r),
          o
        );
      }
      function _(e, t, n, o) {
        var i;
        "string" == typeof e
          ? ((i = m(e)).state = t)
          : (void 0 === (i = Object(r.a)({}, e)).pathname && (i.pathname = ""),
            i.search
              ? "?" !== i.search.charAt(0) && (i.search = "?" + i.search)
              : (i.search = ""),
            i.hash
              ? "#" !== i.hash.charAt(0) && (i.hash = "#" + i.hash)
              : (i.hash = ""),
            void 0 !== t && void 0 === i.state && (i.state = t));
        try {
          i.pathname = decodeURI(i.pathname);
        } catch (e) {
          throw e instanceof URIError
            ? new URIError(
                'Pathname "' +
                  i.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.'
              )
            : e;
        }
        return (
          n && (i.key = n),
          o
            ? i.pathname
              ? "/" !== i.pathname.charAt(0) &&
                (i.pathname = u(i.pathname, o.pathname))
              : (i.pathname = o.pathname)
            : i.pathname || (i.pathname = "/"),
          i
        );
      }
      function g(e, t) {
        return (
          e.pathname === t.pathname &&
          e.search === t.search &&
          e.hash === t.hash &&
          e.key === t.key &&
          l(e.state, t.state)
        );
      }
      function w() {
        var e = null;
        function t(t) {
          return (
            (e = t),
            function () {
              e === t && (e = null);
            }
          );
        }
        function n(t, n, r, o) {
          if (null != e) {
            var i = "function" == typeof e ? e(t, n) : e;
            "string" == typeof i
              ? "function" == typeof r
                ? r(i, o)
                : o(!0)
              : o(!1 !== i);
          } else o(!0);
        }
        var r = [];
        function o(e) {
          var t = !0;
          function n() {
            t && e.apply(void 0, arguments);
          }
          return (
            r.push(n),
            function () {
              (t = !1),
                (r = r.filter(function (e) {
                  return e !== n;
                }));
            }
          );
        }
        function i() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          r.forEach(function (e) {
            return e.apply(void 0, t);
          });
        }
        return {
          setPrompt: t,
          confirmTransitionTo: n,
          appendListener: o,
          notifyListeners: i,
        };
      }
      var O = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      function E(e, t) {
        t(window.confirm(e));
      }
      function S() {
        var e = window.navigator.userAgent;
        return (
          ((-1 === e.indexOf("Android 2.") &&
            -1 === e.indexOf("Android 4.0")) ||
            -1 === e.indexOf("Mobile Safari") ||
            -1 !== e.indexOf("Chrome") ||
            -1 !== e.indexOf("Windows Phone")) &&
          window.history &&
          "pushState" in window.history
        );
      }
      function x() {
        return -1 === window.navigator.userAgent.indexOf("Trident");
      }
      function C() {
        return -1 === window.navigator.userAgent.indexOf("Firefox");
      }
      function j(e) {
        return (
          void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
        );
      }
      var A = "popstate",
        P = "hashchange";
      function T() {
        try {
          return window.history.state || {};
        } catch (e) {
          return {};
        }
      }
      function R(e) {
        void 0 === e && (e = {}), O || Object(f.a)(!1);
        var t = window.history,
          n = S(),
          o = !x(),
          i = e,
          a = i.forceRefresh,
          u = void 0 !== a && a,
          s = i.getUserConfirmation,
          c = void 0 === s ? E : s,
          l = i.keyLength,
          h = void 0 === l ? 6 : l,
          d = e.basename ? y(p(e.basename)) : "";
        function m(e) {
          var t = e || {},
            n = t.key,
            r = t.state,
            o = window.location,
            i,
            a,
            u,
            s = o.pathname + o.search + o.hash;
          return d && (s = v(s, d)), _(s, r, n);
        }
        function g() {
          return Math.random().toString(36).substr(2, h);
        }
        var C = w();
        function A(e) {
          Object(r.a)(K, e),
            (K.length = t.length),
            C.notifyListeners(K.location, K.action);
        }
        function P(e) {
          j(e) || L(m(e.state));
        }
        function R() {
          L(m(T()));
        }
        var N = !1;
        function L(e) {
          if (N) (N = !1), A();
          else {
            var t = "POP";
            C.confirmTransitionTo(e, "POP", c, function (t) {
              t ? A({ action: "POP", location: e }) : k(e);
            });
          }
        }
        function k(e) {
          var t = K.location,
            n = I.indexOf(t.key);
          -1 === n && (n = 0);
          var r = I.indexOf(e.key);
          -1 === r && (r = 0);
          var o = n - r;
          o && ((N = !0), U(o));
        }
        var M = m(T()),
          I = [M.key];
        function B(e) {
          return d + b(e);
        }
        function D(e, r) {
          var o = "PUSH",
            i = _(e, r, g(), K.location);
          C.confirmTransitionTo(i, "PUSH", c, function (e) {
            if (e) {
              var r = B(i),
                o = i.key,
                a = i.state;
              if (n)
                if ((t.pushState({ key: o, state: a }, null, r), u))
                  window.location.href = r;
                else {
                  var s = I.indexOf(K.location.key),
                    c = I.slice(0, s + 1);
                  c.push(i.key), (I = c), A({ action: "PUSH", location: i });
                }
              else window.location.href = r;
            }
          });
        }
        function H(e, r) {
          var o = "REPLACE",
            i = _(e, r, g(), K.location);
          C.confirmTransitionTo(i, o, c, function (e) {
            if (e) {
              var r = B(i),
                a = i.key,
                s = i.state;
              if (n)
                if ((t.replaceState({ key: a, state: s }, null, r), u))
                  window.location.replace(r);
                else {
                  var c = I.indexOf(K.location.key);
                  -1 !== c && (I[c] = i.key), A({ action: o, location: i });
                }
              else window.location.replace(r);
            }
          });
        }
        function U(e) {
          t.go(e);
        }
        function F() {
          U(-1);
        }
        function V() {
          U(1);
        }
        var G = 0;
        function z(e) {
          1 === (G += e) && 1 === e
            ? (window.addEventListener("popstate", P),
              o && window.addEventListener("hashchange", R))
            : 0 === G &&
              (window.removeEventListener("popstate", P),
              o && window.removeEventListener("hashchange", R));
        }
        var q = !1;
        function J(e) {
          void 0 === e && (e = !1);
          var t = C.setPrompt(e);
          return (
            q || (z(1), (q = !0)),
            function () {
              return q && ((q = !1), z(-1)), t();
            }
          );
        }
        function $(e) {
          var t = C.appendListener(e);
          return (
            z(1),
            function () {
              z(-1), t();
            }
          );
        }
        var K = {
          length: t.length,
          action: "POP",
          location: M,
          createHref: B,
          push: D,
          replace: H,
          go: U,
          goBack: F,
          goForward: V,
          block: J,
          listen: $,
        };
        return K;
      }
      var N = "hashchange",
        L = {
          hashbang: {
            encodePath: function e(t) {
              return "!" === t.charAt(0) ? t : "!/" + h(t);
            },
            decodePath: function e(t) {
              return "!" === t.charAt(0) ? t.substr(1) : t;
            },
          },
          noslash: { encodePath: h, decodePath: p },
          slash: { encodePath: p, decodePath: p },
        };
      function k(e) {
        var t = e.indexOf("#");
        return -1 === t ? e : e.slice(0, t);
      }
      function M() {
        var e = window.location.href,
          t = e.indexOf("#");
        return -1 === t ? "" : e.substring(t + 1);
      }
      function I(e) {
        window.location.hash = e;
      }
      function B(e) {
        window.location.replace(k(window.location.href) + "#" + e);
      }
      function D(e) {
        void 0 === e && (e = {}), O || Object(f.a)(!1);
        var t = window.history,
          n = C(),
          o = e,
          i = o.getUserConfirmation,
          a = void 0 === i ? E : i,
          u = o.hashType,
          s = void 0 === u ? "slash" : u,
          c = e.basename ? y(p(e.basename)) : "",
          l = L[s],
          h = l.encodePath,
          d = l.decodePath;
        function m() {
          var e = d(M());
          return c && (e = v(e, c)), _(e);
        }
        var g = w();
        function S(e) {
          Object(r.a)(Z, e),
            (Z.length = t.length),
            g.notifyListeners(Z.location, Z.action);
        }
        var x = !1,
          j = null;
        function A(e, t) {
          return (
            e.pathname === t.pathname &&
            e.search === t.search &&
            e.hash === t.hash
          );
        }
        function P() {
          var e = M(),
            t = h(e);
          if (e !== t) B(t);
          else {
            var n = m(),
              r = Z.location;
            if (!x && A(r, n)) return;
            if (j === b(n)) return;
            (j = null), T(n);
          }
        }
        function T(e) {
          if (x) (x = !1), S();
          else {
            var t = "POP";
            g.confirmTransitionTo(e, "POP", a, function (t) {
              t ? S({ action: "POP", location: e }) : R(e);
            });
          }
        }
        function R(e) {
          var t = Z.location,
            n = U.lastIndexOf(b(t));
          -1 === n && (n = 0);
          var r = U.lastIndexOf(b(e));
          -1 === r && (r = 0);
          var o = n - r;
          o && ((x = !0), z(o));
        }
        var N = M(),
          D = h(N);
        N !== D && B(D);
        var H = m(),
          U = [b(H)];
        function F(e) {
          var t = document.querySelector("base"),
            n = "";
          return (
            t && t.getAttribute("href") && (n = k(window.location.href)),
            n + "#" + h(c + b(e))
          );
        }
        function V(e, t) {
          var n = "PUSH",
            r = _(e, void 0, void 0, Z.location);
          g.confirmTransitionTo(r, "PUSH", a, function (e) {
            if (e) {
              var t = b(r),
                n = h(c + t),
                o;
              if (M() !== n) {
                (j = t), I(n);
                var i = U.lastIndexOf(b(Z.location)),
                  a = U.slice(0, i + 1);
                a.push(t), (U = a), S({ action: "PUSH", location: r });
              } else S();
            }
          });
        }
        function G(e, t) {
          var n = "REPLACE",
            r = _(e, void 0, void 0, Z.location);
          g.confirmTransitionTo(r, n, a, function (e) {
            if (e) {
              var t = b(r),
                o = h(c + t),
                i;
              M() !== o && ((j = t), B(o));
              var a = U.indexOf(b(Z.location));
              -1 !== a && (U[a] = t), S({ action: n, location: r });
            }
          });
        }
        function z(e) {
          t.go(e);
        }
        function q() {
          z(-1);
        }
        function J() {
          z(1);
        }
        var $ = 0;
        function K(e) {
          1 === ($ += e) && 1 === e
            ? window.addEventListener("hashchange", P)
            : 0 === $ && window.removeEventListener("hashchange", P);
        }
        var W = !1;
        function X(e) {
          void 0 === e && (e = !1);
          var t = g.setPrompt(e);
          return (
            W || (K(1), (W = !0)),
            function () {
              return W && ((W = !1), K(-1)), t();
            }
          );
        }
        function Y(e) {
          var t = g.appendListener(e);
          return (
            K(1),
            function () {
              K(-1), t();
            }
          );
        }
        var Z = {
          length: t.length,
          action: "POP",
          location: H,
          createHref: F,
          push: V,
          replace: G,
          go: z,
          goBack: q,
          goForward: J,
          block: X,
          listen: Y,
        };
        return Z;
      }
      function H(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function U(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.getUserConfirmation,
          o = t.initialEntries,
          i = void 0 === o ? ["/"] : o,
          a = t.initialIndex,
          u = void 0 === a ? 0 : a,
          s = t.keyLength,
          c = void 0 === s ? 6 : s,
          l = w();
        function f(e) {
          Object(r.a)(j, e),
            (j.length = j.entries.length),
            l.notifyListeners(j.location, j.action);
        }
        function p() {
          return Math.random().toString(36).substr(2, c);
        }
        var h = H(u, 0, i.length - 1),
          d = i.map(function (e) {
            return _(e, void 0, "string" == typeof e ? p() : e.key || p());
          }),
          v = b;
        function y(e, t) {
          var r = "PUSH",
            o = _(e, t, p(), j.location);
          l.confirmTransitionTo(o, "PUSH", n, function (e) {
            if (e) {
              var t,
                n = j.index + 1,
                r = j.entries.slice(0);
              r.length > n ? r.splice(n, r.length - n, o) : r.push(o),
                f({ action: "PUSH", location: o, index: n, entries: r });
            }
          });
        }
        function m(e, t) {
          var r = "REPLACE",
            o = _(e, t, p(), j.location);
          l.confirmTransitionTo(o, r, n, function (e) {
            e && ((j.entries[j.index] = o), f({ action: r, location: o }));
          });
        }
        function g(e) {
          var t = H(j.index + e, 0, j.entries.length - 1),
            r = "POP",
            o = j.entries[t];
          l.confirmTransitionTo(o, "POP", n, function (e) {
            e ? f({ action: "POP", location: o, index: t }) : f();
          });
        }
        function O() {
          g(-1);
        }
        function E() {
          g(1);
        }
        function S(e) {
          var t = j.index + e;
          return t >= 0 && t < j.entries.length;
        }
        function x(e) {
          return void 0 === e && (e = !1), l.setPrompt(e);
        }
        function C(e) {
          return l.appendListener(e);
        }
        var j = {
          length: d.length,
          action: "POP",
          location: d[h],
          index: h,
          entries: d,
          createHref: v,
          push: y,
          replace: m,
          go: g,
          goBack: O,
          goForward: E,
          canGo: S,
          block: x,
          listen: C,
        };
        return j;
      }
    },
    function (e, t) {
      function n(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(45),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
      e.exports = i;
    },
    function (e, t, n) {
      var r = n(72);
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, r(o.key), o);
        }
      }
      function i(e, t, n) {
        return (
          t && o(e.prototype, t),
          n && o(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      (e.exports = i),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t) {
      function n(e) {
        return null != e && "object" == typeof e;
      }
      e.exports = n;
    },
    function (e, t, n) {
      "use strict";
      e.exports = n(150);
    },
    function (e, t, n) {
      var r, o;
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
        var n = {}.hasOwnProperty,
          i = "[native code]";
        function a() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            if (r) {
              var o = typeof r;
              if ("string" === o || "number" === o) e.push(r);
              else if (Array.isArray(r)) {
                if (r.length) {
                  var i = a.apply(null, r);
                  i && e.push(i);
                }
              } else if ("object" === o) {
                if (
                  r.toString !== Object.prototype.toString &&
                  !r.toString.toString().includes("[native code]")
                ) {
                  e.push(r.toString());
                  continue;
                }
                for (var u in r) n.call(r, u) && r[u] && e.push(u);
              }
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((a.default = a), (e.exports = a))
          : void 0 ===
              (o = function () {
                return a;
              }.apply(t, (r = []))) || (e.exports = o);
      })();
    },
    function (e, t, n) {
      "use strict";
      var r = "object" == typeof Reflect ? Reflect : null,
        o =
          r && "function" == typeof r.apply
            ? r.apply
            : function e(t, n, r) {
                return Function.prototype.apply.call(t, n, r);
              },
        i;
      function a(e) {
        console && console.warn && console.warn(e);
      }
      i =
        r && "function" == typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
          ? function e(t) {
              return Object.getOwnPropertyNames(t).concat(
                Object.getOwnPropertySymbols(t)
              );
            }
          : function e(t) {
              return Object.getOwnPropertyNames(t);
            };
      var u =
        Number.isNaN ||
        function e(t) {
          return t != t;
        };
      function s() {
        s.init.call(this);
      }
      (e.exports = s),
        (e.exports.once = g),
        (s.EventEmitter = s),
        (s.prototype._events = void 0),
        (s.prototype._eventsCount = 0),
        (s.prototype._maxListeners = void 0);
      var c = 10;
      function l(e) {
        if ("function" != typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
      }
      function f(e) {
        return void 0 === e._maxListeners
          ? s.defaultMaxListeners
          : e._maxListeners;
      }
      function p(e, t, n, r) {
        var o, i, u;
        if (
          (l(n),
          void 0 === (i = e._events)
            ? ((i = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== i.newListener &&
                (e.emit("newListener", t, n.listener ? n.listener : n),
                (i = e._events)),
              (u = i[t])),
          void 0 === u)
        )
          (u = i[t] = n), ++e._eventsCount;
        else if (
          ("function" == typeof u
            ? (u = i[t] = r ? [n, u] : [u, n])
            : r
            ? u.unshift(n)
            : u.push(n),
          (o = f(e)) > 0 && u.length > o && !u.warned)
        ) {
          u.warned = !0;
          var s = new Error(
            "Possible EventEmitter memory leak detected. " +
              u.length +
              " " +
              String(t) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (s.name = "MaxListenersExceededWarning"),
            (s.emitter = e),
            (s.type = t),
            (s.count = u.length),
            a(s);
        }
        return e;
      }
      function h() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function d(e, t, n) {
        var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
          o = h.bind(r);
        return (o.listener = n), (r.wrapFn = o), o;
      }
      function v(e, t, n) {
        var r = e._events;
        if (void 0 === r) return [];
        var o = r[t];
        return void 0 === o
          ? []
          : "function" == typeof o
          ? n
            ? [o.listener || o]
            : [o]
          : n
          ? _(o)
          : m(o, o.length);
      }
      function y(e) {
        var t = this._events;
        if (void 0 !== t) {
          var n = t[e];
          if ("function" == typeof n) return 1;
          if (void 0 !== n) return n.length;
        }
        return 0;
      }
      function m(e, t) {
        for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
        return n;
      }
      function b(e, t) {
        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
        e.pop();
      }
      function _(e) {
        for (var t = new Array(e.length), n = 0; n < t.length; ++n)
          t[n] = e[n].listener || e[n];
        return t;
      }
      function g(e, t) {
        return new Promise(function (n, r) {
          function o(n) {
            e.removeListener(t, i), r(n);
          }
          function i() {
            "function" == typeof e.removeListener &&
              e.removeListener("error", o),
              n([].slice.call(arguments));
          }
          O(e, t, i, { once: !0 }), "error" !== t && w(e, o, { once: !0 });
        });
      }
      function w(e, t, n) {
        "function" == typeof e.on && O(e, "error", t, n);
      }
      function O(e, t, n, r) {
        if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
        else {
          if ("function" != typeof e.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof e
            );
          e.addEventListener(t, function o(i) {
            r.once && e.removeEventListener(t, o), n(i);
          });
        }
      }
      Object.defineProperty(s, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return c;
        },
        set: function (e) {
          if ("number" != typeof e || e < 0 || u(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          c = e;
        },
      }),
        (s.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (s.prototype.setMaxListeners = function e(t) {
          if ("number" != typeof t || t < 0 || u(t))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          return (this._maxListeners = t), this;
        }),
        (s.prototype.getMaxListeners = function e() {
          return f(this);
        }),
        (s.prototype.emit = function e(t) {
          for (var n = [], r = 1; r < arguments.length; r++)
            n.push(arguments[r]);
          var i = "error" === t,
            a = this._events;
          if (void 0 !== a) i = i && void 0 === a.error;
          else if (!i) return !1;
          if (i) {
            var u;
            if ((n.length > 0 && (u = n[0]), u instanceof Error)) throw u;
            var s = new Error(
              "Unhandled error." + (u ? " (" + u.message + ")" : "")
            );
            throw ((s.context = u), s);
          }
          var c = a[t];
          if (void 0 === c) return !1;
          if ("function" == typeof c) o(c, this, n);
          else
            for (var l = c.length, f = m(c, l), r = 0; r < l; ++r)
              o(f[r], this, n);
          return !0;
        }),
        (s.prototype.addListener = function e(t, n) {
          return p(this, t, n, !1);
        }),
        (s.prototype.on = s.prototype.addListener),
        (s.prototype.prependListener = function e(t, n) {
          return p(this, t, n, !0);
        }),
        (s.prototype.once = function e(t, n) {
          return l(n), this.on(t, d(this, t, n)), this;
        }),
        (s.prototype.prependOnceListener = function e(t, n) {
          return l(n), this.prependListener(t, d(this, t, n)), this;
        }),
        (s.prototype.removeListener = function e(t, n) {
          var r, o, i, a, u;
          if ((l(n), void 0 === (o = this._events))) return this;
          if (void 0 === (r = o[t])) return this;
          if (r === n || r.listener === n)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete o[t],
                o.removeListener &&
                  this.emit("removeListener", t, r.listener || n));
          else if ("function" != typeof r) {
            for (i = -1, a = r.length - 1; a >= 0; a--)
              if (r[a] === n || r[a].listener === n) {
                (u = r[a].listener), (i = a);
                break;
              }
            if (i < 0) return this;
            0 === i ? r.shift() : b(r, i),
              1 === r.length && (o[t] = r[0]),
              void 0 !== o.removeListener &&
                this.emit("removeListener", t, u || n);
          }
          return this;
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.removeAllListeners = function e(t) {
          var n, r, o;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[t] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[t]),
              this
            );
          if (0 === arguments.length) {
            var i = Object.keys(r),
              a;
            for (o = 0; o < i.length; ++o)
              "removeListener" !== (a = i[o]) && this.removeAllListeners(a);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (n = r[t])) this.removeListener(t, n);
          else if (void 0 !== n)
            for (o = n.length - 1; o >= 0; o--) this.removeListener(t, n[o]);
          return this;
        }),
        (s.prototype.listeners = function e(t) {
          return v(this, t, !0);
        }),
        (s.prototype.rawListeners = function e(t) {
          return v(this, t, !1);
        }),
        (s.listenerCount = function (e, t) {
          return "function" == typeof e.listenerCount
            ? e.listenerCount(t)
            : y.call(e, t);
        }),
        (s.prototype.listenerCount = y),
        (s.prototype.eventNames = function e() {
          return this._eventsCount > 0 ? i(this._events) : [];
        });
    },
    function (e, t, n) {
      var r = n(83),
        o = n(84),
        i = n(85),
        a = n(86),
        u = n(87);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype.delete = o),
        (s.prototype.get = i),
        (s.prototype.has = a),
        (s.prototype.set = u),
        (e.exports = s);
    },
    function (e, t, n) {
      var r = n(25);
      function o(e, t) {
        for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
        return -1;
      }
      e.exports = o;
    },
    function (e, t) {
      function n(e, t) {
        return e === t || (e != e && t != t);
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(44),
        o = n(94),
        i = n(95),
        a = "[object Null]",
        u = "[object Undefined]",
        s = r ? r.toStringTag : void 0;
      function c(e) {
        return null == e
          ? void 0 === e
            ? u
            : a
          : s && s in Object(e)
          ? o(e)
          : i(e);
      }
      e.exports = c;
    },
    function (e, t, n) {
      var r,
        o = n(33)(Object, "create");
      e.exports = o;
    },
    function (e, t, n) {
      var r = n(109);
      function o(e, t) {
        var n = e.__data__;
        return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
      }
      e.exports = o;
    },
    function (e, t, n) {
      "use strict";
      var r;
      n.d(t, "a", function () {
        return r;
      }),
        (function (e) {
          (e.Initial = "init"),
            (e.Loading = "loading"),
            (e.Loaded = "loaded"),
            (e.Error = "error");
        })(r || (r = {}));
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "a", function () {
          return $;
        }),
          n.d(t, "b", function () {
            return P;
          }),
          n.d(t, "c", function () {
            return te;
          });
        var r = n(14),
          o = n(0),
          i = n.n(o),
          a = n(10),
          u = n.n(a),
          s = n(15),
          c = n(12),
          l = n(7),
          f = n(41),
          p = n.n(f),
          h = n(20),
          d = n.n(h),
          v = n(42),
          y = n(68),
          m = n.n(y),
          b = 1073741823,
          _ =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : void 0 !== e
              ? e
              : {};
        function g() {
          var e = "__global_unique_id__";
          return (_[e] = (_[e] || 0) + 1);
        }
        function w(e, t) {
          return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
        }
        function O(e) {
          var t = [];
          return {
            on: function e(n) {
              t.push(n);
            },
            off: function e(n) {
              t = t.filter(function (e) {
                return e !== n;
              });
            },
            get: function t() {
              return e;
            },
            set: function n(r, o) {
              (e = r),
                t.forEach(function (t) {
                  return t(e, o);
                });
            },
          };
        }
        function E(e) {
          return Array.isArray(e) ? e[0] : e;
        }
        function S(e, t) {
          var n,
            o,
            a = "__create-react-context-" + g() + "__",
            s = (function (e) {
              function n() {
                for (
                  var t, n = arguments.length, r = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  r[o] = arguments[o];
                return (
                  ((t = e.call.apply(e, [this].concat(r)) || this).emitter = O(
                    t.props.value
                  )),
                  t
                );
              }
              Object(r.a)(n, e);
              var o = n.prototype;
              return (
                (o.getChildContext = function e() {
                  var t;
                  return ((t = {})[a] = this.emitter), t;
                }),
                (o.componentWillReceiveProps = function e(n) {
                  if (this.props.value !== n.value) {
                    var r = this.props.value,
                      o = n.value,
                      i;
                    w(r, o)
                      ? (i = 0)
                      : ((i = "function" == typeof t ? t(r, o) : 1073741823),
                        0 !== (i |= 0) && this.emitter.set(n.value, i));
                  }
                }),
                (o.render = function e() {
                  return this.props.children;
                }),
                n
              );
            })(i.a.Component);
          s.childContextTypes = (((n = {})[a] = u.a.object.isRequired), n);
          var c = (function (t) {
            function n() {
              for (
                var e, n = arguments.length, r = new Array(n), o = 0;
                o < n;
                o++
              )
                r[o] = arguments[o];
              return (
                ((e = t.call.apply(t, [this].concat(r)) || this).observedBits =
                  void 0),
                (e.state = { value: e.getValue() }),
                (e.onUpdate = function (t, n) {
                  var r;
                  0 != ((0 | e.observedBits) & n) &&
                    e.setState({ value: e.getValue() });
                }),
                e
              );
            }
            Object(r.a)(n, t);
            var o = n.prototype;
            return (
              (o.componentWillReceiveProps = function e(t) {
                var n = t.observedBits;
                this.observedBits = null == n ? 1073741823 : n;
              }),
              (o.componentDidMount = function e() {
                this.context[a] && this.context[a].on(this.onUpdate);
                var t = this.props.observedBits;
                this.observedBits = null == t ? 1073741823 : t;
              }),
              (o.componentWillUnmount = function e() {
                this.context[a] && this.context[a].off(this.onUpdate);
              }),
              (o.getValue = function t() {
                return this.context[a] ? this.context[a].get() : e;
              }),
              (o.render = function e() {
                return E(this.props.children)(this.state.value);
              }),
              n
            );
          })(i.a.Component);
          return (
            (c.contextTypes = (((o = {})[a] = u.a.object), o)),
            { Provider: s, Consumer: c }
          );
        }
        var x = i.a.createContext || S,
          C = function e(t) {
            var n = x();
            return (n.displayName = t), n;
          },
          j = C("Router-History"),
          A = C("Router"),
          P = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).state = {
                  location: t.history.location,
                }),
                (n._isMounted = !1),
                (n._pendingLocation = null),
                t.staticContext ||
                  (n.unlisten = t.history.listen(function (e) {
                    n._pendingLocation = e;
                  })),
                n
              );
            }
            Object(r.a)(t, e),
              (t.computeRootMatch = function e(t) {
                return { path: "/", url: "/", params: {}, isExact: "/" === t };
              });
            var n = t.prototype;
            return (
              (n.componentDidMount = function e() {
                var t = this;
                (this._isMounted = !0),
                  this.unlisten && this.unlisten(),
                  this.props.staticContext ||
                    (this.unlisten = this.props.history.listen(function (e) {
                      t._isMounted && t.setState({ location: e });
                    })),
                  this._pendingLocation &&
                    this.setState({ location: this._pendingLocation });
              }),
              (n.componentWillUnmount = function e() {
                this.unlisten &&
                  (this.unlisten(),
                  (this._isMounted = !1),
                  (this._pendingLocation = null));
              }),
              (n.render = function e() {
                return i.a.createElement(
                  A.Provider,
                  {
                    value: {
                      history: this.props.history,
                      location: this.state.location,
                      match: t.computeRootMatch(this.state.location.pathname),
                      staticContext: this.props.staticContext,
                    },
                  },
                  i.a.createElement(j.Provider, {
                    children: this.props.children || null,
                    value: this.props.history,
                  })
                );
              }),
              t
            );
          })(i.a.Component);
        var T = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).history = Object(
                s.b
              )(t.props)),
              t
            );
          }
          var n;
          return (
            Object(r.a)(t, e),
            (t.prototype.render = function e() {
              return i.a.createElement(P, {
                history: this.history,
                children: this.props.children,
              });
            }),
            t
          );
        })(i.a.Component);
        var R = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            Object(r.a)(t, e);
            var n = t.prototype;
            return (
              (n.componentDidMount = function e() {
                this.props.onMount && this.props.onMount.call(this, this);
              }),
              (n.componentDidUpdate = function e(t) {
                this.props.onUpdate && this.props.onUpdate.call(this, this, t);
              }),
              (n.componentWillUnmount = function e() {
                this.props.onUnmount && this.props.onUnmount.call(this, this);
              }),
              (n.render = function e() {
                return null;
              }),
              t
            );
          })(i.a.Component),
          N;
        function L(e) {
          var t = e.message,
            n = e.when,
            r = void 0 === n || n;
          return i.a.createElement(A.Consumer, null, function (e) {
            if ((e || Object(c.a)(!1), !r || e.staticContext)) return null;
            var n = e.history.block;
            return i.a.createElement(R, {
              onMount: function e(r) {
                r.release = n(t);
              },
              onUpdate: function e(r, o) {
                o.message !== t && (r.release(), (r.release = n(t)));
              },
              onUnmount: function e(t) {
                t.release();
              },
              message: t,
            });
          });
        }
        var k = {},
          M = 1e4,
          I = 0;
        function B(e) {
          if (k[e]) return k[e];
          var t = p.a.compile(e);
          return I < 1e4 && ((k[e] = t), I++), t;
        }
        function D(e, t) {
          return (
            void 0 === e && (e = "/"),
            void 0 === t && (t = {}),
            "/" === e ? e : B(e)(t, { pretty: !0 })
          );
        }
        function H(e) {
          var t = e.computedMatch,
            n = e.to,
            r = e.push,
            o = void 0 !== r && r;
          return i.a.createElement(A.Consumer, null, function (e) {
            e || Object(c.a)(!1);
            var r = e.history,
              a = e.staticContext,
              u = o ? r.push : r.replace,
              f = Object(s.a)(
                t
                  ? "string" == typeof n
                    ? D(n, t.params)
                    : Object(l.a)({}, n, { pathname: D(n.pathname, t.params) })
                  : n
              );
            return a
              ? (u(f), null)
              : i.a.createElement(R, {
                  onMount: function e() {
                    u(f);
                  },
                  onUpdate: function e(t, n) {
                    var r = Object(s.a)(n.to);
                    Object(s.d)(r, Object(l.a)({}, f, { key: r.key })) || u(f);
                  },
                  to: n,
                });
          });
        }
        var U = {},
          F = 1e4,
          V = 0;
        function G(e, t) {
          var n = "" + t.end + t.strict + t.sensitive,
            r = U[n] || (U[n] = {});
          if (r[e]) return r[e];
          var o = [],
            i,
            a = { regexp: p()(e, o, t), keys: o };
          return V < 1e4 && ((r[e] = a), V++), a;
        }
        function z(e, t) {
          void 0 === t && (t = {}),
            ("string" == typeof t || Array.isArray(t)) && (t = { path: t });
          var n = t,
            r = n.path,
            o = n.exact,
            i = void 0 !== o && o,
            a = n.strict,
            u = void 0 !== a && a,
            s = n.sensitive,
            c = void 0 !== s && s,
            l;
          return [].concat(r).reduce(function (t, n) {
            if (!n && "" !== n) return null;
            if (t) return t;
            var r = G(n, { end: i, strict: u, sensitive: c }),
              o = r.regexp,
              a = r.keys,
              s = o.exec(e);
            if (!s) return null;
            var l = s[0],
              f = s.slice(1),
              p = e === l;
            return i && !p
              ? null
              : {
                  path: n,
                  url: "/" === n && "" === l ? "/" : l,
                  isExact: p,
                  params: a.reduce(function (e, t, n) {
                    return (e[t.name] = f[n]), e;
                  }, {}),
                };
          }, null);
        }
        function q(e) {
          return 0 === i.a.Children.count(e);
        }
        function J(e, t, n) {
          var r;
          return e(t) || null;
        }
        var $ = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          var n;
          return (
            Object(r.a)(t, e),
            (t.prototype.render = function e() {
              var t = this;
              return i.a.createElement(A.Consumer, null, function (e) {
                e || Object(c.a)(!1);
                var n = t.props.location || e.location,
                  r = t.props.computedMatch
                    ? t.props.computedMatch
                    : t.props.path
                    ? z(n.pathname, t.props)
                    : e.match,
                  o = Object(l.a)({}, e, { location: n, match: r }),
                  a = t.props,
                  u = a.children,
                  s = a.component,
                  f = a.render;
                return (
                  Array.isArray(u) && q(u) && (u = null),
                  i.a.createElement(
                    A.Provider,
                    { value: o },
                    o.match
                      ? u
                        ? "function" == typeof u
                          ? u(o)
                          : u
                        : s
                        ? i.a.createElement(s, o)
                        : f
                        ? f(o)
                        : null
                      : "function" == typeof u
                      ? u(o)
                      : null
                  )
                );
              });
            }),
            t
          );
        })(i.a.Component);
        function K(e) {
          return "/" === e.charAt(0) ? e : "/" + e;
        }
        function W(e, t) {
          return e ? Object(l.a)({}, t, { pathname: K(e) + t.pathname }) : t;
        }
        function X(e, t) {
          if (!e) return t;
          var n = K(e);
          return 0 !== t.pathname.indexOf(n)
            ? t
            : Object(l.a)({}, t, { pathname: t.pathname.substr(n.length) });
        }
        function Y(e) {
          return "string" == typeof e ? e : Object(s.c)(e);
        }
        function Z(e) {
          return function () {
            Object(c.a)(!1);
          };
        }
        function Q() {}
        var ee = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).handlePush =
                function (e) {
                  return t.navigateTo(e, "PUSH");
                }),
              (t.handleReplace = function (e) {
                return t.navigateTo(e, "REPLACE");
              }),
              (t.handleListen = function () {
                return Q;
              }),
              (t.handleBlock = function () {
                return Q;
              }),
              t
            );
          }
          Object(r.a)(t, e);
          var n = t.prototype;
          return (
            (n.navigateTo = function e(t, n) {
              var r = this.props,
                o = r.basename,
                i = void 0 === o ? "" : o,
                a = r.context,
                u = void 0 === a ? {} : a;
              (u.action = n),
                (u.location = W(i, Object(s.a)(t))),
                (u.url = Y(u.location));
            }),
            (n.render = function e() {
              var t = this.props,
                n = t.basename,
                r = void 0 === n ? "" : n,
                o = t.context,
                a = void 0 === o ? {} : o,
                u = t.location,
                c = void 0 === u ? "/" : u,
                f = Object(v.a)(t, ["basename", "context", "location"]),
                p = {
                  createHref: function e(t) {
                    return K(r + Y(t));
                  },
                  action: "POP",
                  location: X(r, Object(s.a)(c)),
                  push: this.handlePush,
                  replace: this.handleReplace,
                  go: Z("go"),
                  goBack: Z("goBack"),
                  goForward: Z("goForward"),
                  listen: this.handleListen,
                  block: this.handleBlock,
                };
              return i.a.createElement(
                P,
                Object(l.a)({}, f, { history: p, staticContext: a })
              );
            }),
            t
          );
        })(i.a.Component);
        var te = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          var n;
          return (
            Object(r.a)(t, e),
            (t.prototype.render = function e() {
              var t = this;
              return i.a.createElement(A.Consumer, null, function (e) {
                e || Object(c.a)(!1);
                var n = t.props.location || e.location,
                  r,
                  o;
                return (
                  i.a.Children.forEach(t.props.children, function (t) {
                    if (null == o && i.a.isValidElement(t)) {
                      r = t;
                      var a = t.props.path || t.props.from;
                      o = a
                        ? z(n.pathname, Object(l.a)({}, t.props, { path: a }))
                        : e.match;
                    }
                  }),
                  o
                    ? i.a.cloneElement(r, { location: n, computedMatch: o })
                    : null
                );
              });
            }),
            t
          );
        })(i.a.Component);
        function ne(e) {
          var t = "withRouter(" + (e.displayName || e.name) + ")",
            n = function t(n) {
              var r = n.wrappedComponentRef,
                o = Object(v.a)(n, ["wrappedComponentRef"]);
              return i.a.createElement(A.Consumer, null, function (t) {
                return (
                  t || Object(c.a)(!1),
                  i.a.createElement(e, Object(l.a)({}, o, t, { ref: r }))
                );
              });
            };
          return (n.displayName = t), (n.WrappedComponent = e), m()(n, e);
        }
        var re = i.a.useContext,
          oe,
          ie,
          ae,
          ue,
          se;
        function ce() {
          return re(j);
        }
        function le() {
          return re(A).location;
        }
        function fe() {
          var e = re(A).match;
          return e ? e.params : {};
        }
        function pe(e) {
          var t = le(),
            n = re(A).match;
          return e ? z(t.pathname, e) : n;
        }
      }.call(this, n(35)));
    },
    function (e, t) {
      function n(t) {
        return (
          (e.exports = n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          n(t)
        );
      }
      (e.exports = n),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.promiseSettled =
          t.getRequestHandler =
          t.defaultShouldFetch =
          t.defaultWillFetch =
          t.defaultDataHandler =
            void 0);
      var r = n(1),
        o = function (e) {
          return r.__awaiter(void 0, void 0, void 0, function () {
            return r.__generator(this, function (t) {
              return [2, e.data];
            });
          });
        };
      t.defaultDataHandler = o;
      var i = function (e) {
        return e;
      };
      t.defaultWillFetch = i;
      var a = function () {
        return !0;
      };
      t.defaultShouldFetch = a;
      var u = function (e, t) {
        return "custom" === e.type ? e.requestHandler : t[e.type || "fetch"];
      };
      (t.getRequestHandler = u),
        (t.promiseSettled =
          (Promise.allSettled ? Promise.allSettled.bind(Promise) : null) ||
          function (e) {
            return Promise.all(
              e.map(function (e) {
                return e
                  .then(function (e) {
                    return { status: "fulfilled", value: e };
                  })
                  .catch(function (e) {
                    return { status: "rejected", reason: e };
                  });
              })
            );
          });
    },
    function (e, t, n) {
      var r = n(93),
        o = n(99);
      function i(e, t) {
        var n = o(e, t);
        return r(n) ? n : void 0;
      }
      e.exports = i;
    },
    function (e, t, n) {
      var r = n(26),
        o = n(16),
        i = "[object AsyncFunction]",
        a = "[object Function]",
        u = "[object GeneratorFunction]",
        s = "[object Proxy]";
      function c(e) {
        if (!o(e)) return !1;
        var t = r(e);
        return t == a || t == u || t == i || t == s;
      }
      e.exports = c;
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(47);
      function o(e, t, n) {
        "__proto__" == t && r
          ? r(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      }
      e.exports = o;
    },
    function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function (e, t, n) {
      var r = n(34),
        o = n(52);
      function i(e) {
        return null != e && o(e.length) && !r(e);
      }
      e.exports = i;
    },
    function (e, t, n) {
      "use strict";
      var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      e.exports = r;
    },
    function (t, n) {
      t.exports = e;
    },
    function (e, t, n) {
      var r = n(158);
      (e.exports = b),
        (e.exports.parse = i),
        (e.exports.compile = a),
        (e.exports.tokensToFunction = c),
        (e.exports.tokensToRegExp = m);
      var o = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
      function i(e, t) {
        for (
          var n = [], r = 0, i = 0, a = "", u = (t && t.delimiter) || "/", s;
          null != (s = o.exec(e));

        ) {
          var c = s[0],
            p = s[1],
            h = s.index;
          if (((a += e.slice(i, h)), (i = h + c.length), p)) a += p[1];
          else {
            var d = e[i],
              v = s[2],
              y = s[3],
              m = s[4],
              b = s[5],
              _ = s[6],
              g = s[7];
            a && (n.push(a), (a = ""));
            var w = null != v && null != d && d !== v,
              O = "+" === _ || "*" === _,
              E = "?" === _ || "*" === _,
              S = s[2] || u,
              x = m || b;
            n.push({
              name: y || r++,
              prefix: v || "",
              delimiter: S,
              optional: E,
              repeat: O,
              partial: w,
              asterisk: !!g,
              pattern: x ? f(x) : g ? ".*" : "[^" + l(S) + "]+?",
            });
          }
        }
        return i < e.length && (a += e.substr(i)), a && n.push(a), n;
      }
      function a(e, t) {
        return c(i(e, t), t);
      }
      function u(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function s(e) {
        return encodeURI(e).replace(/[?#]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function c(e, t) {
        for (var n = new Array(e.length), o = 0; o < e.length; o++)
          "object" == typeof e[o] &&
            (n[o] = new RegExp("^(?:" + e[o].pattern + ")$", h(t)));
        return function (t, o) {
          for (
            var i = "",
              a = t || {},
              c,
              l = (o || {}).pretty ? u : encodeURIComponent,
              f = 0;
            f < e.length;
            f++
          ) {
            var p = e[f];
            if ("string" != typeof p) {
              var h = a[p.name],
                d;
              if (null == h) {
                if (p.optional) {
                  p.partial && (i += p.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + p.name + '" to be defined');
              }
              if (r(h)) {
                if (!p.repeat)
                  throw new TypeError(
                    'Expected "' +
                      p.name +
                      '" to not repeat, but received `' +
                      JSON.stringify(h) +
                      "`"
                  );
                if (0 === h.length) {
                  if (p.optional) continue;
                  throw new TypeError(
                    'Expected "' + p.name + '" to not be empty'
                  );
                }
                for (var v = 0; v < h.length; v++) {
                  if (((d = l(h[v])), !n[f].test(d)))
                    throw new TypeError(
                      'Expected all "' +
                        p.name +
                        '" to match "' +
                        p.pattern +
                        '", but received `' +
                        JSON.stringify(d) +
                        "`"
                    );
                  i += (0 === v ? p.prefix : p.delimiter) + d;
                }
              } else {
                if (((d = p.asterisk ? s(h) : l(h)), !n[f].test(d)))
                  throw new TypeError(
                    'Expected "' +
                      p.name +
                      '" to match "' +
                      p.pattern +
                      '", but received "' +
                      d +
                      '"'
                  );
                i += p.prefix + d;
              }
            } else i += p;
          }
          return i;
        };
      }
      function l(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
      }
      function f(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1");
      }
      function p(e, t) {
        return (e.keys = t), e;
      }
      function h(e) {
        return e && e.sensitive ? "" : "i";
      }
      function d(e, t) {
        var n = e.source.match(/\((?!\?)/g);
        if (n)
          for (var r = 0; r < n.length; r++)
            t.push({
              name: r,
              prefix: null,
              delimiter: null,
              optional: !1,
              repeat: !1,
              partial: !1,
              asterisk: !1,
              pattern: null,
            });
        return p(e, t);
      }
      function v(e, t, n) {
        for (var r = [], o = 0; o < e.length; o++) r.push(b(e[o], t, n).source);
        var i;
        return p(new RegExp("(?:" + r.join("|") + ")", h(n)), t);
      }
      function y(e, t, n) {
        return m(i(e, n), t, n);
      }
      function m(e, t, n) {
        r(t) || ((n = t || n), (t = []));
        for (
          var o = (n = n || {}).strict, i = !1 !== n.end, a = "", u = 0;
          u < e.length;
          u++
        ) {
          var s = e[u];
          if ("string" == typeof s) a += l(s);
          else {
            var c = l(s.prefix),
              f = "(?:" + s.pattern + ")";
            t.push(s),
              s.repeat && (f += "(?:" + c + f + ")*"),
              (a += f =
                s.optional
                  ? s.partial
                    ? c + "(" + f + ")?"
                    : "(?:" + c + "(" + f + "))?"
                  : c + "(" + f + ")");
          }
        }
        var d = l(n.delimiter || "/"),
          v = a.slice(-d.length) === d;
        return (
          o || (a = (v ? a.slice(0, -d.length) : a) + "(?:" + d + "(?=$))?"),
          (a += i ? "$" : o && v ? "" : "(?=" + d + "|$)"),
          p(new RegExp("^" + a, h(n)), t)
        );
      }
      function b(e, t, n) {
        return (
          r(t) || ((n = t || n), (t = [])),
          (n = n || {}),
          e instanceof RegExp ? d(e, t) : r(e) ? v(e, t, n) : y(e, t, n)
        );
      }
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (null == e) return {};
        var n = {},
          r = Object.keys(e),
          o,
          i;
        for (i = 0; i < r.length; i++)
          (o = r[i]), t.indexOf(o) >= 0 || (n[o] = e[o]);
        return n;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      var r,
        o,
        i = n(33)(n(17), "Map");
      e.exports = i;
    },
    function (e, t, n) {
      var r,
        o = n(17).Symbol;
      e.exports = o;
    },
    function (e, t, n) {
      (function (t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.exports = n;
      }.call(this, n(35)));
    },
    function (e, t, n) {
      var r = n(36),
        o = n(25);
      function i(e, t, n) {
        ((void 0 !== n && !o(e[t], n)) || (void 0 === n && !(t in e))) &&
          r(e, t, n);
      }
      e.exports = i;
    },
    function (e, t, n) {
      var r = n(33),
        o = (function () {
          try {
            var e = r(Object, "defineProperty");
            return e({}, "", {}), e;
          } catch (e) {}
        })();
      e.exports = o;
    },
    function (e, t, n) {
      var r,
        o = n(123)(Object.getPrototypeOf, Object);
      e.exports = o;
    },
    function (e, t) {
      var n = Object.prototype;
      function r(e) {
        var t = e && e.constructor,
          r;
        return e === (("function" == typeof t && t.prototype) || n);
      }
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(124),
        o = n(19),
        i = Object.prototype,
        a = i.hasOwnProperty,
        u = i.propertyIsEnumerable,
        s = r(
          (function () {
            return arguments;
          })()
        )
          ? r
          : function (e) {
              return o(e) && a.call(e, "callee") && !u.call(e, "callee");
            };
      e.exports = s;
    },
    function (e, t) {
      var n = Array.isArray;
      e.exports = n;
    },
    function (e, t) {
      var n = 9007199254740991;
      function r(e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      }
      e.exports = r;
    },
    function (e, t, n) {
      (function (e) {
        var r = n(17),
          o = n(126),
          i = t && !t.nodeType && t,
          a = i && "object" == typeof e && e && !e.nodeType && e,
          u,
          s = a && a.exports === i ? r.Buffer : void 0,
          c,
          l = (s ? s.isBuffer : void 0) || o;
        e.exports = l;
      }.call(this, n(37)(e)));
    },
    function (e, t, n) {
      var r = n(128),
        o = n(129),
        i = n(130),
        a = i && i.isTypedArray,
        u = a ? o(a) : r;
      e.exports = u;
    },
    function (e, t) {
      function n(e, t) {
        if (
          ("constructor" !== t || "function" != typeof e[t]) &&
          "__proto__" != t
        )
          return e[t];
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(134),
        o = n(136),
        i = n(38);
      function a(e) {
        return i(e) ? r(e, !0) : o(e);
      }
      e.exports = a;
    },
    function (e, t) {
      var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
      function o(e, t) {
        var n = typeof e;
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ("number" == n || ("symbol" != n && r.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      }
      e.exports = o;
    },
    function (e, t) {
      function n(e) {
        return e;
      }
      e.exports = n;
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "RuntimeDataSourceStatus", function () {
          return a.a;
        }),
        n.d(t, "ActivityType", function () {
          return u;
        }),
        n.d(t, "AssetLevel", function () {
          return s;
        }),
        n.d(t, "AssetLevels", function () {
          return c;
        }),
        n.d(t, "AssetType", function () {
          return l;
        }),
        n.d(t, "GlobalEvent", function () {
          return i;
        }),
        n.d(t, "IPublicTypeLocationDetailType", function () {
          return d;
        }),
        n.d(t, "LocationDetailType", function () {
          return v;
        }),
        n.d(t, "IPublicEnumEventNames", function () {
          return y;
        }),
        n.d(t, "IPublicEnumTransitionType", function () {
          return m;
        }),
        n.d(t, "TransitionType", function () {
          return b;
        }),
        n.d(t, "IPublicEnumTransformStage", function () {
          return _;
        }),
        n.d(t, "TransformStage", function () {
          return g;
        }),
        n.d(t, "IPublicEnumDragObjectType", function () {
          return w;
        }),
        n.d(t, "DragObjectType", function () {
          return O;
        }),
        n.d(t, "IPublicEnumPropValueChangedType", function () {
          return E;
        }),
        n.d(t, "PROP_VALUE_CHANGED_TYPE", function () {
          return S;
        }),
        n.d(t, "isActionContentObject", function () {
          return x;
        }),
        n.d(t, "isCustomView", function () {
          return P;
        }),
        n.d(t, "isDOMText", function () {
          return T;
        }),
        n.d(t, "isDynamicSetter", function () {
          return R;
        }),
        n.d(t, "isI18nData", function () {
          return N;
        }),
        n.d(t, "isJSBlock", function () {
          return L;
        }),
        n.d(t, "isJSExpression", function () {
          return k;
        }),
        n.d(t, "isJSFunction", function () {
          return M;
        }),
        n.d(t, "isJSSlot", function () {
          return I;
        }),
        n.d(t, "isLowCodeComponentType", function () {
          return D;
        }),
        n.d(t, "isNodeSchema", function () {
          return H;
        }),
        n.d(t, "isPlainObject", function () {
          return U;
        }),
        n.d(t, "isProCodeComponentType", function () {
          return B;
        }),
        n.d(t, "isProjectSchema", function () {
          return F;
        }),
        n.d(t, "isReactClass", function () {
          return j;
        }),
        n.d(t, "isReactComponent", function () {
          return A;
        }),
        n.d(t, "isSetterConfig", function () {
          return V;
        }),
        n.d(t, "isTitleConfig", function () {
          return G;
        });
      var r = {};
      n.r(r),
        n.d(r, "Change", function () {
          return f;
        }),
        n.d(r, "InnerChange", function () {
          return p;
        });
      var o = {};
      n.r(o),
        n.d(o, "Prop", function () {
          return r;
        }),
        n.d(o, "Rerender", function () {
          return h;
        });
      var i = {};
      n.r(i),
        n.d(i, "Node", function () {
          return o;
        });
      var a = n(29),
        u,
        s;
      !(function (e) {
        (e.ADDED = "added"),
          (e.DELETED = "deleted"),
          (e.MODIFIED = "modified"),
          (e.COMPOSITE = "composite");
      })(u || (u = {})),
        (function (e) {
          (e[(e.Environment = 1)] = "Environment"),
            (e[(e.Library = 2)] = "Library"),
            (e[(e.Theme = 3)] = "Theme"),
            (e[(e.Runtime = 4)] = "Runtime"),
            (e[(e.Components = 5)] = "Components"),
            (e[(e.App = 6)] = "App");
        })(s || (s = {}));
      var c = [
          s.Environment,
          s.Library,
          s.Theme,
          s.Runtime,
          s.Components,
          s.App,
        ],
        l;
      !(function (e) {
        (e.JSUrl = "jsUrl"),
          (e.CSSUrl = "cssUrl"),
          (e.CSSText = "cssText"),
          (e.JSText = "jsText"),
          (e.Bundle = "bundle");
      })(l || (l = {}));
      var f = "node.prop.change",
        p = "node.innerProp.change",
        h = "node.edit.rerender.time",
        d,
        v,
        y,
        m,
        b,
        _,
        g,
        w,
        O,
        E,
        S;
      function x(e) {
        return e && "object" == typeof e;
      }
      !(function (e) {
        (e.Children = "Children"), (e.Prop = "Prop");
      })(d || (d = {})),
        (function (e) {
          (e.Children = "Children"), (e.Prop = "Prop");
        })(v || (v = {})),
        y || (y = {}),
        (function (e) {
          e[(e.REPAINT = 0)] = "REPAINT";
        })(m || (m = {})),
        (function (e) {
          e[(e.REPAINT = 0)] = "REPAINT";
        })(b || (b = {})),
        (function (e) {
          (e.Render = "render"),
            (e.Serilize = "serilize"),
            (e.Save = "save"),
            (e.Clone = "clone"),
            (e.Init = "init"),
            (e.Upgrade = "upgrade");
        })(_ || (_ = {})),
        (function (e) {
          (e.Render = "render"),
            (e.Serilize = "serilize"),
            (e.Save = "save"),
            (e.Clone = "clone"),
            (e.Init = "init"),
            (e.Upgrade = "upgrade");
        })(g || (g = {})),
        (function (e) {
          (e.Node = "node"), (e.NodeData = "nodedata");
        })(w || (w = {})),
        (function (e) {
          (e[(e.Node = w.Node)] = "Node"),
            (e[(e.NodeData = w.NodeData)] = "NodeData");
        })(O || (O = {})),
        (function (e) {
          (e.SET_VALUE = "SET_VALUE"),
            (e.SUB_VALUE_CHANGE = "SUB_VALUE_CHANGE");
        })(E || (E = {})),
        (function (e) {
          (e.SET_VALUE = "SET_VALUE"),
            (e.SUB_VALUE_CHANGE = "SUB_VALUE_CHANGE");
        })(S || (S = {}));
      var C = n(0);
      function j(e) {
        return (
          e &&
          e.prototype &&
          (e.prototype.isReactComponent || e.prototype instanceof C.Component)
        );
      }
      function A(e) {
        return e && (j(e) || "function" == typeof e);
      }
      function P(e) {
        return e && (Object(C.isValidElement)(e) || A(e));
      }
      function T(e) {
        return "string" == typeof e;
      }
      function R(e) {
        return e && "function" == typeof e && !j(e);
      }
      function N(e) {
        return e && "i18n" === e.type;
      }
      function L(e) {
        return e && "JSBlock" === e.type;
      }
      function k(e) {
        return e && "JSExpression" === e.type && "function" !== e.extType;
      }
      function M(e) {
        return "object" == typeof e && e && "JSFunction" === e.type;
      }
      function I(e) {
        return e && "JSSlot" === e.type;
      }
      function B(e) {
        return "package" in e;
      }
      function D(e) {
        return !B(e);
      }
      function H(e) {
        return e && e.componentName;
      }
      function U(e) {
        if ("object" != typeof e) return !1;
        var t = Object.getPrototypeOf(e);
        return (
          t === Object.prototype ||
          null === t ||
          null === Object.getPrototypeOf(t)
        );
      }
      function F(e) {
        return e && e.componentsTree;
      }
      function V(e) {
        return e && "object" == typeof e && "componentName" in e && !P(e);
      }
      function G(e) {
        return U(e) && !N(e);
      }
    },
    function (e, t, n) {
      e.exports = n(75);
    },
    function (e) {
      e.exports = JSON.parse(
        '{"name":"@alilc/lowcode-renderer-core","version":"1.1.2","description":"renderer core","license":"MIT","main":"lib/index.js","module":"es/index.js","files":["lib","es"],"scripts":{"build":"build-scripts build --skip-demo","test":"build-scripts test --config build.test.json","test:cov":"build-scripts test --config build.test.json --jest-coverage"},"dependencies":{"@alilc/lowcode-datasource-engine":"^1.0.0","@alilc/lowcode-types":"1.1.2","@alilc/lowcode-utils":"1.1.2","classnames":"^2.2.6","debug":"^4.1.1","fetch-jsonp":"^1.1.3","intl-messageformat":"^9.3.1","jsonuri":"^2.1.2","lodash":"^4.17.11","prop-types":"^15.7.2","react-is":"^16.10.1","socket.io-client":"^2.2.0","whatwg-fetch":"^3.0.0"},"devDependencies":{"@alib/build-scripts":"^0.1.18","@alifd/next":"^1.26.0","@alilc/lowcode-designer":"1.1.2","@babel/plugin-transform-typescript":"^7.16.8","@testing-library/react":"^11.2.2","@types/classnames":"^2.2.11","@types/debug":"^4.1.5","@types/jest":"^26.0.16","@types/lodash":"^4.14.167","@types/node":"^13.7.1","@types/prop-types":"^15.7.3","@types/react-is":"^17.0.3","@types/react-test-renderer":"^17.0.1","jest":"^26.6.3","react-test-renderer":"^17.0.2","ts-jest":"^26.5.0"},"publishConfig":{"access":"public","registry":"https://registry.npmjs.org/"},"repository":{"type":"http","url":"https://github.com/alibaba/lowcode-engine/tree/main/packages/renderer-core"},"gitHead":"2669f179e6f899d395ce1942d0fe04f9c5ed48a6"}'
      );
    },
    function (e, t, n) {
      "use strict";
      var r = n(20),
        o = n(151),
        i = n(39),
        a = n(152),
        u = n(153),
        s = function () {};
      function c() {
        return null;
      }
      e.exports = function (e, t) {
        var n = "function" == typeof Symbol && Symbol.iterator,
          s = "@@iterator";
        function l(e) {
          var t = e && ((n && e[n]) || e["@@iterator"]);
          if ("function" == typeof t) return t;
        }
        var f = "<<anonymous>>",
          p = {
            array: y("array"),
            bigint: y("bigint"),
            bool: y("boolean"),
            func: y("function"),
            number: y("number"),
            object: y("object"),
            string: y("string"),
            symbol: y("symbol"),
            any: m(),
            arrayOf: b,
            element: _(),
            elementType: g(),
            instanceOf: w,
            node: x(),
            objectOf: E,
            oneOf: O,
            oneOfType: S,
            shape: j,
            exact: A,
          };
        function h(e, t) {
          return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
        }
        function d(e, t) {
          (this.message = e),
            (this.data = t && "object" == typeof t ? t : {}),
            (this.stack = "");
        }
        function v(e) {
          var n, r;
          function o(n, r, o, a, u, s, c) {
            var l;
            if (((a = a || f), (s = s || o), c !== i) && t) {
              var p = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((p.name = "Invariant Violation"), p);
            }
            return null == r[o]
              ? n
                ? null === r[o]
                  ? new d(
                      "The " +
                        u +
                        " `" +
                        s +
                        "` is marked as required in `" +
                        a +
                        "`, but its value is `null`."
                    )
                  : new d(
                      "The " +
                        u +
                        " `" +
                        s +
                        "` is marked as required in `" +
                        a +
                        "`, but its value is `undefined`."
                    )
                : null
              : e(r, o, a, u, s);
          }
          var a = o.bind(null, !1);
          return (a.isRequired = o.bind(null, !0)), a;
        }
        function y(e) {
          function t(t, n, r, o, i, a) {
            var u = t[n],
              s,
              c;
            return R(u) !== e
              ? new d(
                  "Invalid " +
                    o +
                    " `" +
                    i +
                    "` of type `" +
                    N(u) +
                    "` supplied to `" +
                    r +
                    "`, expected `" +
                    e +
                    "`.",
                  { expectedType: e }
                )
              : null;
          }
          return v(t);
        }
        function m() {
          return v(c);
        }
        function b(e) {
          function t(t, n, r, o, a) {
            if ("function" != typeof e)
              return new d(
                "Property `" +
                  a +
                  "` of component `" +
                  r +
                  "` has invalid PropType notation inside arrayOf."
              );
            var u = t[n],
              s;
            if (!Array.isArray(u))
              return new d(
                "Invalid " +
                  o +
                  " `" +
                  a +
                  "` of type `" +
                  R(u) +
                  "` supplied to `" +
                  r +
                  "`, expected an array."
              );
            for (var c = 0; c < u.length; c++) {
              var l = e(u, c, r, o, a + "[" + c + "]", i);
              if (l instanceof Error) return l;
            }
            return null;
          }
          return v(t);
        }
        function _() {
          function t(t, n, r, o, i) {
            var a = t[n],
              u;
            return e(a)
              ? null
              : new d(
                  "Invalid " +
                    o +
                    " `" +
                    i +
                    "` of type `" +
                    R(a) +
                    "` supplied to `" +
                    r +
                    "`, expected a single ReactElement."
                );
          }
          return v(t);
        }
        function g() {
          function e(e, t, n, o, i) {
            var a = e[t],
              u;
            return r.isValidElementType(a)
              ? null
              : new d(
                  "Invalid " +
                    o +
                    " `" +
                    i +
                    "` of type `" +
                    R(a) +
                    "` supplied to `" +
                    n +
                    "`, expected a single ReactElement type."
                );
          }
          return v(e);
        }
        function w(e) {
          function t(t, n, r, o, i) {
            if (!(t[n] instanceof e)) {
              var a = e.name || f,
                u;
              return new d(
                "Invalid " +
                  o +
                  " `" +
                  i +
                  "` of type `" +
                  k(t[n]) +
                  "` supplied to `" +
                  r +
                  "`, expected instance of `" +
                  a +
                  "`."
              );
            }
            return null;
          }
          return v(t);
        }
        function O(e) {
          if (!Array.isArray(e)) return c;
          function t(t, n, r, o, i) {
            for (var a = t[n], u = 0; u < e.length; u++)
              if (h(a, e[u])) return null;
            var s = JSON.stringify(e, function e(t, n) {
              var r;
              return "symbol" === N(n) ? String(n) : n;
            });
            return new d(
              "Invalid " +
                o +
                " `" +
                i +
                "` of value `" +
                String(a) +
                "` supplied to `" +
                r +
                "`, expected one of " +
                s +
                "."
            );
          }
          return v(t);
        }
        function E(e) {
          function t(t, n, r, o, u) {
            if ("function" != typeof e)
              return new d(
                "Property `" +
                  u +
                  "` of component `" +
                  r +
                  "` has invalid PropType notation inside objectOf."
              );
            var s = t[n],
              c = R(s);
            if ("object" !== c)
              return new d(
                "Invalid " +
                  o +
                  " `" +
                  u +
                  "` of type `" +
                  c +
                  "` supplied to `" +
                  r +
                  "`, expected an object."
              );
            for (var l in s)
              if (a(s, l)) {
                var f = e(s, l, r, o, u + "." + l, i);
                if (f instanceof Error) return f;
              }
            return null;
          }
          return v(t);
        }
        function S(e) {
          if (!Array.isArray(e)) return c;
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            if ("function" != typeof n) return L(n), c;
          }
          function r(t, n, r, o, u) {
            for (var s = [], c = 0; c < e.length; c++) {
              var l,
                f = (0, e[c])(t, n, r, o, u, i);
              if (null == f) return null;
              f.data &&
                a(f.data, "expectedType") &&
                s.push(f.data.expectedType);
            }
            var p;
            return new d(
              "Invalid " +
                o +
                " `" +
                u +
                "` supplied to `" +
                r +
                "`" +
                (s.length > 0
                  ? ", expected one of type [" + s.join(", ") + "]"
                  : "") +
                "."
            );
          }
          return v(r);
        }
        function x() {
          function e(e, t, n, r, o) {
            return P(e[t])
              ? null
              : new d(
                  "Invalid " +
                    r +
                    " `" +
                    o +
                    "` supplied to `" +
                    n +
                    "`, expected a ReactNode."
                );
          }
          return v(e);
        }
        function C(e, t, n, r, o) {
          return new d(
            (e || "React class") +
              ": " +
              t +
              " type `" +
              n +
              "." +
              r +
              "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
              o +
              "`."
          );
        }
        function j(e) {
          function t(t, n, r, o, a) {
            var u = t[n],
              s = R(u);
            if ("object" !== s)
              return new d(
                "Invalid " +
                  o +
                  " `" +
                  a +
                  "` of type `" +
                  s +
                  "` supplied to `" +
                  r +
                  "`, expected `object`."
              );
            for (var c in e) {
              var l = e[c];
              if ("function" != typeof l) return C(r, o, a, c, N(l));
              var f = l(u, c, r, o, a + "." + c, i);
              if (f) return f;
            }
            return null;
          }
          return v(t);
        }
        function A(e) {
          function t(t, n, r, u, s) {
            var c = t[n],
              l = R(c);
            if ("object" !== l)
              return new d(
                "Invalid " +
                  u +
                  " `" +
                  s +
                  "` of type `" +
                  l +
                  "` supplied to `" +
                  r +
                  "`, expected `object`."
              );
            var f = o({}, t[n], e);
            for (var p in f) {
              var h = e[p];
              if (a(e, p) && "function" != typeof h) return C(r, u, s, p, N(h));
              if (!h)
                return new d(
                  "Invalid " +
                    u +
                    " `" +
                    s +
                    "` key `" +
                    p +
                    "` supplied to `" +
                    r +
                    "`.\nBad object: " +
                    JSON.stringify(t[n], null, "  ") +
                    "\nValid keys: " +
                    JSON.stringify(Object.keys(e), null, "  ")
                );
              var v = h(c, p, r, u, s + "." + p, i);
              if (v) return v;
            }
            return null;
          }
          return v(t);
        }
        function P(t) {
          switch (typeof t) {
            case "number":
            case "string":
            case "undefined":
              return !0;
            case "boolean":
              return !t;
            case "object":
              if (Array.isArray(t)) return t.every(P);
              if (null === t || e(t)) return !0;
              var n = l(t);
              if (!n) return !1;
              var r = n.call(t),
                o;
              if (n !== t.entries) {
                for (; !(o = r.next()).done; ) if (!P(o.value)) return !1;
              } else
                for (; !(o = r.next()).done; ) {
                  var i = o.value;
                  if (i && !P(i[1])) return !1;
                }
              return !0;
            default:
              return !1;
          }
        }
        function T(e, t) {
          return (
            "symbol" === e ||
            (!!t &&
              ("Symbol" === t["@@toStringTag"] ||
                ("function" == typeof Symbol && t instanceof Symbol)))
          );
        }
        function R(e) {
          var t = typeof e;
          return Array.isArray(e)
            ? "array"
            : e instanceof RegExp
            ? "object"
            : T(t, e)
            ? "symbol"
            : t;
        }
        function N(e) {
          if (null == e) return "" + e;
          var t = R(e);
          if ("object" === t) {
            if (e instanceof Date) return "date";
            if (e instanceof RegExp) return "regexp";
          }
          return t;
        }
        function L(e) {
          var t = N(e);
          switch (t) {
            case "array":
            case "object":
              return "an " + t;
            case "boolean":
            case "date":
            case "regexp":
              return "a " + t;
            default:
              return t;
          }
        }
        function k(e) {
          return e.constructor && e.constructor.name ? e.constructor.name : f;
        }
        return (
          (d.prototype = Error.prototype),
          (p.checkPropTypes = u),
          (p.resetWarningCache = u.resetWarningCache),
          (p.PropTypes = p),
          p
        );
      };
    },
    function (e, t, n) {
      var r, o, i, a, u, s;
      (a = this),
        (u = function (e, t) {
          "use strict";
          var n = 5e3,
            r = "callback",
            o = null;
          function i() {
            return "jsonp_" + Date.now() + "_" + Math.ceil(1e5 * Math.random());
          }
          function a(e) {
            try {
              delete window[e];
            } catch (t) {
              window[e] = void 0;
            }
          }
          function u(e) {
            var t = document.getElementById(e);
            t && document.getElementsByTagName("head")[0].removeChild(t);
          }
          function s(e) {
            var t =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? {}
                  : arguments[1],
              o = e,
              s = t.timeout || n,
              c = t.jsonpCallback || r,
              l = void 0;
            return new Promise(function (n, r) {
              var f = t.jsonpCallbackFunction || i(),
                p = c + "_" + f;
              (window[f] = function (e) {
                n({
                  ok: !0,
                  json: function t() {
                    return Promise.resolve(e);
                  },
                }),
                  l && clearTimeout(l),
                  u(p),
                  a(f);
              }),
                (o += -1 === o.indexOf("?") ? "?" : "&");
              var h = document.createElement("script");
              h.setAttribute("src", "" + o + c + "=" + f),
                t.charset && h.setAttribute("charset", t.charset),
                t.nonce && h.setAttribute("nonce", t.nonce),
                t.referrerPolicy &&
                  h.setAttribute("referrerPolicy", t.referrerPolicy),
                (h.id = p),
                document.getElementsByTagName("head")[0].appendChild(h),
                (l = setTimeout(function () {
                  r(new Error("JSONP request to " + e + " timed out")),
                    a(f),
                    u(p),
                    (window[f] = function () {
                      a(f);
                    });
                }, s)),
                (h.onerror = function () {
                  r(new Error("JSONP request to " + e + " failed")),
                    a(f),
                    u(p),
                    l && clearTimeout(l);
                });
            });
          }
          t.exports = s;
        }),
        (o = [t, e]),
        void 0 === (i = "function" == typeof (r = u) ? r.apply(t, o) : r) ||
          (e.exports = i);
    },
    function (e, t, n) {
      (function (r) {
        function o() {
          return (
            !(
              "undefined" == typeof window ||
              !window.process ||
              ("renderer" !== window.process.type && !window.process.__nwjs)
            ) ||
            (("undefined" == typeof navigator ||
              !navigator.userAgent ||
              !navigator.userAgent
                .toLowerCase()
                .match(/(edge|trident)\/(\d+)/)) &&
              (("undefined" != typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
                ("undefined" != typeof window &&
                  window.console &&
                  (window.console.firebug ||
                    (window.console.exception && window.console.table))) ||
                ("undefined" != typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                  parseInt(RegExp.$1, 10) >= 31) ||
                ("undefined" != typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent
                    .toLowerCase()
                    .match(/applewebkit\/(\d+)/))))
          );
        }
        function i(t) {
          if (
            ((t[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              t[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              e.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const n = "color: " + this.color;
          t.splice(1, 0, n, "color: inherit");
          let r = 0,
            o = 0;
          t[0].replace(/%[a-zA-Z%]/g, (e) => {
            "%%" !== e && (r++, "%c" === e && (o = r));
          }),
            t.splice(o, 0, n);
        }
        function a(e) {
          try {
            e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
          } catch (e) {}
        }
        function u() {
          let e;
          try {
            e = t.storage.getItem("debug");
          } catch (e) {}
          return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e;
        }
        function s() {
          try {
            return localStorage;
          } catch (e) {}
        }
        (t.formatArgs = i),
          (t.save = a),
          (t.load = u),
          (t.useColors = o),
          (t.storage = s()),
          (t.destroy = (() => {
            let e = !1;
            return () => {
              e ||
                ((e = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                ));
            };
          })()),
          (t.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33",
          ]),
          (t.log = console.debug || console.log || (() => {})),
          (e.exports = n(155)(t));
        const { formatters: c } = e.exports;
        c.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        };
      }.call(this, n(154)));
    },
    function (e, n) {
      e.exports = t;
    },
    function (e) {
      e.exports = JSON.parse(
        '{"Drag and drop components or templates here":"Drag and drop components or templates here","Locked elements and child elements cannot be edited":"Locked elements and child elements cannot be edited"}'
      );
    },
    function (e) {
      e.exports = JSON.parse(
        '{"Drag and drop components or templates here":"\u62d6\u62fd\u7ec4\u4ef6\u6216\u6a21\u677f\u5230\u8fd9\u91cc","Locked elements and child elements cannot be edited":"\u9501\u5b9a\u5143\u7d20\u53ca\u5b50\u5143\u7d20\u65e0\u6cd5\u7f16\u8f91"}'
      );
    },
    function (e, t, n) {
      "use strict";
      var r = n(20),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        },
        u = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function c(e) {
        return r.isMemo(e) ? u : s[e.$$typeof] || o;
      }
      (s[r.ForwardRef] = a), (s[r.Memo] = u);
      var l = Object.defineProperty,
        f = Object.getOwnPropertyNames,
        p = Object.getOwnPropertySymbols,
        h = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        v = Object.prototype;
      function y(e, t, n) {
        if ("string" != typeof t) {
          if (v) {
            var r = d(t);
            r && r !== v && y(e, r, n);
          }
          var o = f(t);
          p && (o = o.concat(p(t)));
          for (var a = c(e), u = c(t), s = 0; s < o.length; ++s) {
            var m = o[s];
            if (!(i[m] || (n && n[m]) || (u && u[m]) || (a && a[m]))) {
              var b = h(t, m);
              try {
                l(e, m, b);
              } catch (e) {}
            }
          }
        }
        return e;
      }
      e.exports = y;
    },
    ,
    function (e, t, n) {
      e.exports = n(159);
    },
    function (e, t) {
      function n(t, r) {
        return (
          (e.exports = n =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function e(t, n) {
                  return (t.__proto__ = n), t;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          n(t, r)
        );
      }
      (e.exports = n),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, n) {
      var r = n(31).default,
        o = n(73);
      function i(e) {
        var t = o(e, "string");
        return "symbol" === r(t) ? t : String(t);
      }
      (e.exports = i),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, n) {
      var r = n(31).default;
      function o(e, t) {
        if ("object" !== r(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var o = n.call(e, t || "default");
          if ("object" !== r(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }
      (e.exports = o),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, n) {
      var r = n(31).default;
      function o() {
        "use strict";
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ (e.exports =
          o =
            function e() {
              return t;
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
        var t = {},
          n = Object.prototype,
          i = n.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          u = "function" == typeof Symbol ? Symbol : {},
          s = u.iterator || "@@iterator",
          c = u.asyncIterator || "@@asyncIterator",
          l = u.toStringTag || "@@toStringTag";
        function f(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          f({}, "");
        } catch (e) {
          f = function e(t, n, r) {
            return (t[n] = r);
          };
        }
        function p(e, t, n, r) {
          var o = t && t.prototype instanceof v ? t : v,
            i = Object.create(o.prototype),
            u = new A(r || []);
          return a(i, "_invoke", { value: S(e, n, u) }), i;
        }
        function h(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = p;
        var d = {};
        function v() {}
        function y() {}
        function m() {}
        var b = {};
        f(b, s, function () {
          return this;
        });
        var _ = Object.getPrototypeOf,
          g = _ && _(_(P([])));
        g && g !== n && i.call(g, s) && (b = g);
        var w = (m.prototype = v.prototype = Object.create(b));
        function O(e) {
          ["next", "throw", "return"].forEach(function (t) {
            f(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          function n(o, a, u, s) {
            var c = h(e[o], e, a);
            if ("throw" !== c.type) {
              var l = c.arg,
                f = l.value;
              return f && "object" == r(f) && i.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      n("next", e, u, s);
                    },
                    function (e) {
                      n("throw", e, u, s);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (l.value = e), u(l);
                    },
                    function (e) {
                      return n("throw", e, u, s);
                    }
                  );
            }
            s(c.arg);
          }
          var o;
          a(this, "_invoke", {
            value: function e(r, i) {
              function a() {
                return new t(function (e, t) {
                  n(r, i, e, t);
                });
              }
              return (o = o ? o.then(a, a) : a());
            },
          });
        }
        function S(e, t, n) {
          var r = "suspendedStart";
          return function (o, i) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === o) throw i;
              return T();
            }
            for (n.method = o, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var u = x(a, n);
                if (u) {
                  if (u === d) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var s = h(e, t, n);
              if ("normal" === s.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), s.arg === d)
                )
                  continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function x(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var o = h(r, e.iterator, t.arg);
          if ("throw" === o.type)
            return (
              (t.method = "throw"), (t.arg = o.arg), (t.delegate = null), d
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              d);
        }
        function C(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function j(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function A(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(C, this),
            this.reset(!0);
        }
        function P(e) {
          if (e) {
            var t = e[s];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                r = function t() {
                  for (; ++n < e.length; )
                    if (i.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (r.next = r);
            }
          }
          return { next: T };
        }
        function T() {
          return { value: void 0, done: !0 };
        }
        return (
          (y.prototype = m),
          a(w, "constructor", { value: m, configurable: !0 }),
          a(m, "constructor", { value: y, configurable: !0 }),
          (y.displayName = f(m, l, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === y || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), f(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(w)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          O(E.prototype),
          f(E.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new E(p(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          O(w),
          f(w, l, "Generator"),
          f(w, s, function () {
            return this;
          }),
          f(w, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = P),
          (A.prototype = {
            constructor: A,
            reset: function e(t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    i.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = void 0);
            },
            stop: function e() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function e(t) {
              if (this.done) throw t;
              var n = this;
              function r(e, r) {
                return (
                  (u.type = "throw"),
                  (u.arg = t),
                  (n.next = e),
                  r && ((n.method = "next"), (n.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  u = a.completion;
                if ("root" === a.tryLoc) return r("end");
                if (a.tryLoc <= this.prev) {
                  var s = i.call(a, "catchLoc"),
                    c = i.call(a, "finallyLoc");
                  if (s && c) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (s) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function e(t, n) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  i.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= n &&
                n <= a.finallyLoc &&
                (a = null);
              var u = a ? a.completion : {};
              return (
                (u.type = t),
                (u.arg = n),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                  : this.complete(u)
              );
            },
            complete: function e(t, n) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && n && (this.next = n),
                d
              );
            },
            finish: function e(t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), j(r), d;
              }
            },
            catch: function e(t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r.tryLoc === t) {
                  var o = r.completion;
                  if ("throw" === o.type) {
                    var i = o.arg;
                    j(r);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function e(t, n, r) {
              return (
                (this.delegate = { iterator: P(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          t
        );
      }
      (e.exports = o),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.create = void 0);
      var r,
        o = n(1).__importDefault(n(76));
      t.create = o.default;
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(77),
        o = n(79),
        i = n(147),
        a = n(32);
      t.default = function (e, t, n) {
        void 0 === n && (n = { requestHandlersMap: {} });
        var u = n.requestHandlersMap,
          s = (0, r.adapt2Runtime)(e, t),
          c = s.list.reduce(function (e, n) {
            return (
              (e[n.id] = new o.RuntimeDataSourceItem(
                n,
                (0, a.getRequestHandler)(n, u),
                t
              )),
              e
            );
          }, {});
        return {
          dataSourceMap: c,
          reloadDataSource: (0, i.reloadDataSourceFactory)(s, c, s.dataHandler),
        };
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.adapt2Runtime = void 0);
      var r = n(78),
        o = n(32),
        i = function (e, t) {
          var n = e.list,
            i = e.dataHandler,
            a = i ? (0, r.getRuntimeJsValue)(i, t) : void 0,
            u;
          return n && n.length
            ? {
                list: n.map(function (e) {
                  return {
                    id: e.id,
                    isInit: (0, r.getRuntimeValueFromConfig)(
                      "boolean",
                      e.isInit,
                      t
                    ),
                    isSync: (0, r.getRuntimeValueFromConfig)(
                      "boolean",
                      e.isSync,
                      t
                    ),
                    type: e.type || "fetch",
                    willFetch: e.willFetch
                      ? (0, r.getRuntimeJsValue)(e.willFetch, t)
                      : o.defaultWillFetch,
                    shouldFetch: (0, r.buildShouldFetch)(e, t),
                    dataHandler: e.dataHandler
                      ? (0, r.getRuntimeJsValue)(e.dataHandler, t)
                      : o.defaultDataHandler,
                    errorHandler: e.errorHandler
                      ? (0, r.getRuntimeJsValue)(e.errorHandler, t)
                      : void 0,
                    requestHandler: e.requestHandler
                      ? (0, r.getRuntimeJsValue)(e.requestHandler, t)
                      : void 0,
                    options: (0, r.buildOptions)(e, t),
                  };
                }),
                dataHandler: a,
              }
            : { list: [], dataHandler: a };
        };
      t.adapt2Runtime = i;
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.buildOptions =
          t.buildShouldFetch =
          t.buildJsonObj =
          t.getRuntimeValueFromConfig =
          t.getRuntimeBaseValue =
          t.getRuntimeJsValue =
          t.transformBoolStr =
          t.transformFunction =
          t.transformExpression =
            void 0);
      var r = n(59);
      function o(e) {
        return -1 !== Object.prototype.toString.call(e).indexOf("Object");
      }
      var i = function (e, t) {
        if (void 0 === e) return function () {};
        if ("" === e)
          return function () {
            return "";
          };
        try {
          return new Function("return (".concat(e, ")")).call(t);
        } catch (n) {
          console.error(
            "transformExpression error, code is "
              .concat(e, ", context is ")
              .concat(t, ", error is ")
              .concat(n)
          );
        }
      };
      t.transformExpression = i;
      var a = function (e, t) {
        if (void 0 === e) return function () {};
        if ("" === e)
          return function () {
            return "";
          };
        try {
          return new Function("return (".concat(e, ")")).call(t).bind(t);
        } catch (n) {
          console.error(
            "transformFunction error, code is "
              .concat(e, ", context is ")
              .concat(t, ", error is ")
              .concat(n)
          );
        }
      };
      t.transformFunction = a;
      var u = function (e) {
        return "false" !== e;
      };
      t.transformBoolStr = u;
      var s = function (e, n) {
        if (!["JSExpression", "JSFunction"].includes(e.type))
          return (
            console.error(
              "translate error, value is ".concat(JSON.stringify(e))
            ),
            ""
          );
        var r = e.compiled || e.value;
        return "JSFunction" === e.type
          ? (0, t.transformFunction)(r, n)
          : (0, t.transformExpression)(r, n);
      };
      t.getRuntimeJsValue = s;
      var c = function (e, n) {
        switch (e) {
          case "string":
            return "".concat(n);
          case "boolean":
            return "string" == typeof n ? (0, t.transformBoolStr)(n) : !!n;
          case "number":
            return Number(n);
          default:
            return n;
        }
      };
      t.getRuntimeBaseValue = c;
      var l = function (e, n, o) {
        if (void 0 !== n)
          return (0, r.isJSExpression)(n) || (0, r.isJSFunction)(n)
            ? (0, t.getRuntimeBaseValue)(e, (0, t.getRuntimeJsValue)(n, o))
            : n;
      };
      t.getRuntimeValueFromConfig = l;
      var f = function (e, n) {
        if ((0, r.isJSExpression)(e))
          return (0, t.transformExpression)(e.value, n);
        if (o(e)) {
          for (var i = {}, a = 0, u = Object.entries(e); a < u.length; a++) {
            var s = u[a],
              c = s[0],
              l = s[1];
            (0, r.isJSExpression)(l)
              ? (i[c] = (0, t.transformExpression)(
                  null == l ? void 0 : l.value,
                  n
                ))
              : o(l)
              ? (i[c] = (0, t.buildJsonObj)(l, n))
              : (i[c] = l);
          }
          return i;
        }
        return e;
      };
      t.buildJsonObj = f;
      var p = function (e, n) {
        return (
          !e.options ||
          !e.shouldFetch ||
          ((0, r.isJSExpression)(e.shouldFetch) ||
          (0, r.isJSFunction)(e.shouldFetch)
            ? (0, t.getRuntimeJsValue)(e.shouldFetch, n)
            : (0, t.getRuntimeBaseValue)("boolean", e.shouldFetch))
        );
      };
      t.buildShouldFetch = p;
      var h = function (e, n) {
        var r = e.options;
        if (r)
          return function () {
            var e = {
              uri: "",
              params: {},
              method: "GET",
              isCors: !0,
              timeout: 5e3,
              headers: void 0,
              v: "1.0",
            };
            return (
              Object.keys(r).forEach(function (o) {
                switch (o) {
                  case "uri":
                    e.uri = (0, t.getRuntimeValueFromConfig)(
                      "string",
                      r.uri,
                      n
                    );
                    break;
                  case "params":
                    e.params = (0, t.buildJsonObj)(r.params, n);
                    break;
                  case "method":
                    e.method = (0, t.getRuntimeValueFromConfig)(
                      "string",
                      r.method,
                      n
                    );
                    break;
                  case "isCors":
                    e.isCors = (0, t.getRuntimeValueFromConfig)(
                      "boolean",
                      r.isCors,
                      n
                    );
                    break;
                  case "timeout":
                    e.timeout = (0, t.getRuntimeValueFromConfig)(
                      "number",
                      r.timeout,
                      n
                    );
                    break;
                  case "headers":
                    e.headers = (0, t.buildJsonObj)(r.headers, n);
                    break;
                  case "v":
                    e.v = (0, t.getRuntimeValueFromConfig)("string", r.v, n);
                    break;
                  default:
                    e[o] = (0, t.getRuntimeValueFromConfig)("unknown", r[o], n);
                }
              }),
              e
            );
          };
      };
      t.buildOptions = h;
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RuntimeDataSourceItem = void 0);
      var r = n(1),
        o = r.__importDefault(n(80)),
        i = n(59),
        a = (function () {
          function e(e, t, n) {
            (this._status = i.RuntimeDataSourceStatus.Initial),
              (this._dataSourceConfig = e),
              (this._request = t),
              (this._context = n);
          }
          return (
            Object.defineProperty(e.prototype, "data", {
              get: function () {
                return this._data;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "error", {
              get: function () {
                return this._error;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "status", {
              get: function () {
                return this._status;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "isLoading", {
              get: function () {
                return this._status === i.RuntimeDataSourceStatus.Loading;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.load = function (e) {
              return r.__awaiter(this, void 0, void 0, function () {
                var t, n, a, u, s, c, l, f, p, h, d;
                return r.__generator(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (!this._dataSourceConfig) return [2];
                      if (!this._request)
                        throw (
                          ((this._error = new Error(
                            "no ".concat(
                              this._dataSourceConfig.type,
                              " handler provide"
                            )
                          )),
                          (this._status = i.RuntimeDataSourceStatus.Error),
                          this._error)
                        );
                      return "urlParams" !== this._dataSourceConfig.type
                        ? [3, 2]
                        : [4, this._request(this._context)];
                    case 1:
                      return (
                        (t = r.sent()),
                        this._context.setState(
                          (((p = {})[this._dataSourceConfig.id] = t), p)
                        ),
                        (this._data = t),
                        (this._status = i.RuntimeDataSourceStatus.Loaded),
                        [2, t]
                      );
                    case 2:
                      if (!this._dataSourceConfig.options)
                        throw new Error(
                          "".concat(
                            this._dataSourceConfig.id,
                            " has no options"
                          )
                        );
                      if (
                        ("function" == typeof this._dataSourceConfig.options &&
                          (this._options = this._dataSourceConfig.options()),
                        !this._options)
                      )
                        throw new Error(
                          "".concat(
                            this._dataSourceConfig.id,
                            " options transform error"
                          )
                        );
                      if (
                        ((n = !0),
                        (a = this._options),
                        e && (a.params = (0, o.default)(a.params, e)),
                        this._dataSourceConfig.shouldFetch &&
                          ("function" ==
                          typeof this._dataSourceConfig.shouldFetch
                            ? (n = this._dataSourceConfig.shouldFetch(a))
                            : "boolean" ==
                                typeof this._dataSourceConfig.shouldFetch &&
                              (n = this._dataSourceConfig.shouldFetch)),
                        !n)
                      )
                        return (
                          (this._status = i.RuntimeDataSourceStatus.Error),
                          (this._error = new Error(
                            "the ".concat(
                              this._dataSourceConfig.id,
                              " request should not fetch, please check the condition"
                            )
                          )),
                          console.warn(this.error),
                          [2]
                        );
                      if (!this._dataSourceConfig.willFetch) return [3, 6];
                      r.label = 3;
                    case 3:
                      return (
                        r.trys.push([3, 5, , 6]),
                        [4, this._dataSourceConfig.willFetch(this._options)]
                      );
                    case 4:
                      return (a = r.sent()), [3, 6];
                    case 5:
                      return (u = r.sent()), console.error(u), [3, 6];
                    case 6:
                      (s = this._dataSourceConfig.dataHandler),
                        (c = this._dataSourceConfig.errorHandler),
                        (r.label = 7);
                    case 7:
                      return (
                        r.trys.push([7, 9, , 10]),
                        (this._status = i.RuntimeDataSourceStatus.Loading),
                        [4, this._request(a, this._context).then(s, c)]
                      );
                    case 8:
                      return (
                        (l = r.sent()),
                        (this._data = l),
                        (this._status = i.RuntimeDataSourceStatus.Loaded),
                        this._context.setState(
                          (((h = { UNSTABLE_dataSourceUpdatedAt: Date.now() })[
                            this._dataSourceConfig.id
                          ] = l),
                          h)
                        ),
                        [2, this._data]
                      );
                    case 9:
                      throw (
                        ((f = r.sent()),
                        (this._error = f),
                        (this._status = i.RuntimeDataSourceStatus.Error),
                        this._context.setState(
                          (((d = { UNSTABLE_dataSourceUpdatedAt: Date.now() })[
                            "UNSTABLE_".concat(
                              this._dataSourceConfig.id,
                              "_error"
                            )
                          ] = f),
                          d)
                        ),
                        f)
                      );
                    case 10:
                      return [2];
                  }
                });
              });
            }),
            e
          );
        })();
      t.RuntimeDataSourceItem = a;
    },
    function (e, t, n) {
      var r = n(81),
        o,
        i = n(138)(function (e, t, n) {
          r(e, t, n);
        });
      e.exports = i;
    },
    function (e, t, n) {
      var r = n(82),
        o = n(46),
        i = n(113),
        a = n(115),
        u = n(16),
        s = n(56),
        c = n(55);
      function l(e, t, n, f, p) {
        e !== t &&
          i(
            t,
            function (i, s) {
              if ((p || (p = new r()), u(i))) a(e, t, s, n, l, f, p);
              else {
                var h = f ? f(c(e, s), i, s + "", e, t, p) : void 0;
                void 0 === h && (h = i), o(e, s, h);
              }
            },
            s
          );
      }
      e.exports = l;
    },
    function (e, t, n) {
      var r = n(23),
        o = n(88),
        i = n(89),
        a = n(90),
        u = n(91),
        s = n(92);
      function c(e) {
        var t = (this.__data__ = new r(e));
        this.size = t.size;
      }
      (c.prototype.clear = o),
        (c.prototype.delete = i),
        (c.prototype.get = a),
        (c.prototype.has = u),
        (c.prototype.set = s),
        (e.exports = c);
    },
    function (e, t) {
      function n() {
        (this.__data__ = []), (this.size = 0);
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(24),
        o,
        i = Array.prototype.splice;
      function a(e) {
        var t = this.__data__,
          n = r(t, e),
          o;
        return (
          !(n < 0) &&
          (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, !0)
        );
      }
      e.exports = a;
    },
    function (e, t, n) {
      var r = n(24);
      function o(e) {
        var t = this.__data__,
          n = r(t, e);
        return n < 0 ? void 0 : t[n][1];
      }
      e.exports = o;
    },
    function (e, t, n) {
      var r = n(24);
      function o(e) {
        return r(this.__data__, e) > -1;
      }
      e.exports = o;
    },
    function (e, t, n) {
      var r = n(24);
      function o(e, t) {
        var n = this.__data__,
          o = r(n, e);
        return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
      }
      e.exports = o;
    },
    function (e, t, n) {
      var r = n(23);
      function o() {
        (this.__data__ = new r()), (this.size = 0);
      }
      e.exports = o;
    },
    function (e, t) {
      function n(e) {
        var t = this.__data__,
          n = t.delete(e);
        return (this.size = t.size), n;
      }
      e.exports = n;
    },
    function (e, t) {
      function n(e) {
        return this.__data__.get(e);
      }
      e.exports = n;
    },
    function (e, t) {
      function n(e) {
        return this.__data__.has(e);
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(23),
        o = n(43),
        i = n(100),
        a = 200;
      function u(e, t) {
        var n = this.__data__;
        if (n instanceof r) {
          var a = n.__data__;
          if (!o || a.length < 199)
            return a.push([e, t]), (this.size = ++n.size), this;
          n = this.__data__ = new i(a);
        }
        return n.set(e, t), (this.size = n.size), this;
      }
      e.exports = u;
    },
    function (e, t, n) {
      var r = n(34),
        o = n(96),
        i = n(16),
        a = n(98),
        u = /[\\^$.*+?()[\]{}|]/g,
        s = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        l = Object.prototype,
        f = c.toString,
        p = l.hasOwnProperty,
        h = RegExp(
          "^" +
            f
              .call(p)
              .replace(u, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      function d(e) {
        return !(!i(e) || o(e)) && (r(e) ? h : s).test(a(e));
        var t;
      }
      e.exports = d;
    },
    function (e, t, n) {
      var r = n(44),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        u = r ? r.toStringTag : void 0;
      function s(e) {
        var t = i.call(e, u),
          n = e[u];
        try {
          e[u] = void 0;
          var r = !0;
        } catch (e) {}
        var o = a.call(e);
        return r && (t ? (e[u] = n) : delete e[u]), o;
      }
      e.exports = s;
    },
    function (e, t) {
      var n,
        r = Object.prototype.toString;
      function o(e) {
        return r.call(e);
      }
      e.exports = o;
    },
    function (e, t, n) {
      var r = n(97),
        o = (i = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + i
          : "",
        i;
      function a(e) {
        return !!o && o in e;
      }
      e.exports = a;
    },
    function (e, t, n) {
      var r,
        o = n(17)["__core-js_shared__"];
      e.exports = o;
    },
    function (e, t) {
      var n,
        r = Function.prototype.toString;
      function o(e) {
        if (null != e) {
          try {
            return r.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      }
      e.exports = o;
    },
    function (e, t) {
      function n(e, t) {
        return null == e ? void 0 : e[t];
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(101),
        o = n(108),
        i = n(110),
        a = n(111),
        u = n(112);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype.delete = o),
        (s.prototype.get = i),
        (s.prototype.has = a),
        (s.prototype.set = u),
        (e.exports = s);
    },
    function (e, t, n) {
      var r = n(102),
        o = n(23),
        i = n(43);
      function a() {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (i || o)(),
            string: new r(),
          });
      }
      e.exports = a;
    },
    function (e, t, n) {
      var r = n(103),
        o = n(104),
        i = n(105),
        a = n(106),
        u = n(107);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype.delete = o),
        (s.prototype.get = i),
        (s.prototype.has = a),
        (s.prototype.set = u),
        (e.exports = s);
    },
    function (e, t, n) {
      var r = n(27);
      function o() {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      }
      e.exports = o;
    },
    function (e, t) {
      function n(e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(27),
        o = "__lodash_hash_undefined__",
        i,
        a = Object.prototype.hasOwnProperty;
      function u(e) {
        var t = this.__data__;
        if (r) {
          var n = t[e];
          return n === o ? void 0 : n;
        }
        return a.call(t, e) ? t[e] : void 0;
      }
      e.exports = u;
    },
    function (e, t, n) {
      var r = n(27),
        o,
        i = Object.prototype.hasOwnProperty;
      function a(e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : i.call(t, e);
      }
      e.exports = a;
    },
    function (e, t, n) {
      var r = n(27),
        o = "__lodash_hash_undefined__";
      function i(e, t) {
        var n = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] = r && void 0 === t ? o : t),
          this
        );
      }
      e.exports = i;
    },
    function (e, t, n) {
      var r = n(28);
      function o(e) {
        var t = r(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      }
      e.exports = o;
    },
    function (e, t) {
      function n(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(28);
      function o(e) {
        return r(this, e).get(e);
      }
      e.exports = o;
    },
    function (e, t, n) {
      var r = n(28);
      function o(e) {
        return r(this, e).has(e);
      }
      e.exports = o;
    },
    function (e, t, n) {
      var r = n(28);
      function o(e, t) {
        var n = r(this, e),
          o = n.size;
        return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
      }
      e.exports = o;
    },
    function (e, t, n) {
      var r,
        o = n(114)();
      e.exports = o;
    },
    function (e, t) {
      function n(e) {
        return function (t, n, r) {
          for (var o = -1, i = Object(t), a = r(t), u = a.length; u--; ) {
            var s = a[e ? u : ++o];
            if (!1 === n(i[s], s, i)) break;
          }
          return t;
        };
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(46),
        o = n(116),
        i = n(117),
        a = n(120),
        u = n(121),
        s = n(50),
        c = n(51),
        l = n(125),
        f = n(53),
        p = n(34),
        h = n(16),
        d = n(127),
        v = n(54),
        y = n(55),
        m = n(131);
      function b(e, t, n, b, _, g, w) {
        var O = y(e, n),
          E = y(t, n),
          S = w.get(E);
        if (S) r(e, n, S);
        else {
          var x = g ? g(O, E, n + "", e, t, w) : void 0,
            C = void 0 === x;
          if (C) {
            var j = c(E),
              A = !j && f(E),
              P = !j && !A && v(E);
            (x = E),
              j || A || P
                ? c(O)
                  ? (x = O)
                  : l(O)
                  ? (x = a(O))
                  : A
                  ? ((C = !1), (x = o(E, !0)))
                  : P
                  ? ((C = !1), (x = i(E, !0)))
                  : (x = [])
                : d(E) || s(E)
                ? ((x = O), s(O) ? (x = m(O)) : (h(O) && !p(O)) || (x = u(E)))
                : (C = !1);
          }
          C && (w.set(E, x), _(x, E, b, g, w), w.delete(E)), r(e, n, x);
        }
      }
      e.exports = b;
    },
    function (e, t, n) {
      (function (e) {
        var r = n(17),
          o = t && !t.nodeType && t,
          i = o && "object" == typeof e && e && !e.nodeType && e,
          a,
          u = i && i.exports === o ? r.Buffer : void 0,
          s = u ? u.allocUnsafe : void 0;
        function c(e, t) {
          if (t) return e.slice();
          var n = e.length,
            r = s ? s(n) : new e.constructor(n);
          return e.copy(r), r;
        }
        e.exports = c;
      }.call(this, n(37)(e)));
    },
    function (e, t, n) {
      var r = n(118);
      function o(e, t) {
        var n = t ? r(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      }
      e.exports = o;
    },
    function (e, t, n) {
      var r = n(119);
      function o(e) {
        var t = new e.constructor(e.byteLength);
        return new r(t).set(new r(e)), t;
      }
      e.exports = o;
    },
    function (e, t, n) {
      var r,
        o = n(17).Uint8Array;
      e.exports = o;
    },
    function (e, t) {
      function n(e, t) {
        var n = -1,
          r = e.length;
        for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
        return t;
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(122),
        o = n(48),
        i = n(49);
      function a(e) {
        return "function" != typeof e.constructor || i(e) ? {} : r(o(e));
      }
      e.exports = a;
    },
    function (e, t, n) {
      var r = n(16),
        o = Object.create,
        i = (function () {
          function e() {}
          return function (t) {
            if (!r(t)) return {};
            if (o) return o(t);
            e.prototype = t;
            var n = new e();
            return (e.prototype = void 0), n;
          };
        })();
      e.exports = i;
    },
    function (e, t) {
      function n(e, t) {
        return function (n) {
          return e(t(n));
        };
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(26),
        o = n(19),
        i = "[object Arguments]";
      function a(e) {
        return o(e) && r(e) == i;
      }
      e.exports = a;
    },
    function (e, t, n) {
      var r = n(38),
        o = n(19);
      function i(e) {
        return o(e) && r(e);
      }
      e.exports = i;
    },
    function (e, t) {
      function n() {
        return !1;
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(26),
        o = n(48),
        i = n(19),
        a = "[object Object]",
        u = Function.prototype,
        s = Object.prototype,
        c = u.toString,
        l = s.hasOwnProperty,
        f = c.call(Object);
      function p(e) {
        if (!i(e) || r(e) != a) return !1;
        var t = o(e);
        if (null === t) return !0;
        var n = l.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && c.call(n) == f;
      }
      e.exports = p;
    },
    function (e, t, n) {
      var r = n(26),
        o = n(52),
        i = n(19),
        a = "[object Arguments]",
        u = "[object Array]",
        s = "[object Boolean]",
        c = "[object Date]",
        l = "[object Error]",
        f = "[object Function]",
        p = "[object Map]",
        h = "[object Number]",
        d = "[object Object]",
        v = "[object RegExp]",
        y = "[object Set]",
        m = "[object String]",
        b = "[object WeakMap]",
        _ = "[object ArrayBuffer]",
        g = "[object DataView]",
        w,
        O = "[object Float64Array]",
        E = "[object Int8Array]",
        S = "[object Int16Array]",
        x = "[object Int32Array]",
        C = "[object Uint8Array]",
        j = "[object Uint8ClampedArray]",
        A = "[object Uint16Array]",
        P = "[object Uint32Array]",
        T = {};
      function R(e) {
        return i(e) && o(e.length) && !!T[r(e)];
      }
      (T["[object Float32Array]"] =
        T[O] =
        T[E] =
        T[S] =
        T[x] =
        T[C] =
        T[j] =
        T[A] =
        T[P] =
          !0),
        (T[a] =
          T[u] =
          T[_] =
          T[s] =
          T[g] =
          T[c] =
          T[l] =
          T[f] =
          T[p] =
          T[h] =
          T[d] =
          T[v] =
          T[y] =
          T[m] =
          T[b] =
            !1),
        (e.exports = R);
    },
    function (e, t) {
      function n(e) {
        return function (t) {
          return e(t);
        };
      }
      e.exports = n;
    },
    function (e, t, n) {
      (function (e) {
        var r = n(45),
          o = t && !t.nodeType && t,
          i = o && "object" == typeof e && e && !e.nodeType && e,
          a,
          u = i && i.exports === o && r.process,
          s = (function () {
            try {
              var e = i && i.require && i.require("util").types;
              return e || (u && u.binding && u.binding("util"));
            } catch (e) {}
          })();
        e.exports = s;
      }.call(this, n(37)(e)));
    },
    function (e, t, n) {
      var r = n(132),
        o = n(56);
      function i(e) {
        return r(e, o(e));
      }
      e.exports = i;
    },
    function (e, t, n) {
      var r = n(133),
        o = n(36);
      function i(e, t, n, i) {
        var a = !n;
        n || (n = {});
        for (var u = -1, s = t.length; ++u < s; ) {
          var c = t[u],
            l = i ? i(n[c], e[c], c, n, e) : void 0;
          void 0 === l && (l = e[c]), a ? o(n, c, l) : r(n, c, l);
        }
        return n;
      }
      e.exports = i;
    },
    function (e, t, n) {
      var r = n(36),
        o = n(25),
        i,
        a = Object.prototype.hasOwnProperty;
      function u(e, t, n) {
        var i = e[t];
        (a.call(e, t) && o(i, n) && (void 0 !== n || t in e)) || r(e, t, n);
      }
      e.exports = u;
    },
    function (e, t, n) {
      var r = n(135),
        o = n(50),
        i = n(51),
        a = n(53),
        u = n(57),
        s = n(54),
        c,
        l = Object.prototype.hasOwnProperty;
      function f(e, t) {
        var n = i(e),
          c = !n && o(e),
          f = !n && !c && a(e),
          p = !n && !c && !f && s(e),
          h = n || c || f || p,
          d = h ? r(e.length, String) : [],
          v = d.length;
        for (var y in e)
          (!t && !l.call(e, y)) ||
            (h &&
              ("length" == y ||
                (f && ("offset" == y || "parent" == y)) ||
                (p &&
                  ("buffer" == y || "byteLength" == y || "byteOffset" == y)) ||
                u(y, v))) ||
            d.push(y);
        return d;
      }
      e.exports = f;
    },
    function (e, t) {
      function n(e, t) {
        for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
        return r;
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(16),
        o = n(49),
        i = n(137),
        a,
        u = Object.prototype.hasOwnProperty;
      function s(e) {
        if (!r(e)) return i(e);
        var t = o(e),
          n = [];
        for (var a in e)
          ("constructor" != a || (!t && u.call(e, a))) && n.push(a);
        return n;
      }
      e.exports = s;
    },
    function (e, t) {
      function n(e) {
        var t = [];
        if (null != e) for (var n in Object(e)) t.push(n);
        return t;
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(139),
        o = n(146);
      function i(e) {
        return r(function (t, n) {
          var r = -1,
            i = n.length,
            a = i > 1 ? n[i - 1] : void 0,
            u = i > 2 ? n[2] : void 0;
          for (
            a = e.length > 3 && "function" == typeof a ? (i--, a) : void 0,
              u && o(n[0], n[1], u) && ((a = i < 3 ? void 0 : a), (i = 1)),
              t = Object(t);
            ++r < i;

          ) {
            var s = n[r];
            s && e(t, s, r, a);
          }
          return t;
        });
      }
      e.exports = i;
    },
    function (e, t, n) {
      var r = n(58),
        o = n(140),
        i = n(142);
      function a(e, t) {
        return i(o(e, t, r), e + "");
      }
      e.exports = a;
    },
    function (e, t, n) {
      var r = n(141),
        o = Math.max;
      function i(e, t, n) {
        return (
          (t = o(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (
              var i = arguments, a = -1, u = o(i.length - t, 0), s = Array(u);
              ++a < u;

            )
              s[a] = i[t + a];
            a = -1;
            for (var c = Array(t + 1); ++a < t; ) c[a] = i[a];
            return (c[t] = n(s)), r(e, this, c);
          }
        );
      }
      e.exports = i;
    },
    function (e, t) {
      function n(e, t, n) {
        switch (n.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, n[0]);
          case 2:
            return e.call(t, n[0], n[1]);
          case 3:
            return e.call(t, n[0], n[1], n[2]);
        }
        return e.apply(t, n);
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(143),
        o,
        i = n(145)(r);
      e.exports = i;
    },
    function (e, t, n) {
      var r = n(144),
        o = n(47),
        i = n(58),
        a = o
          ? function (e, t) {
              return o(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(t),
                writable: !0,
              });
            }
          : i;
      e.exports = a;
    },
    function (e, t) {
      function n(e) {
        return function () {
          return e;
        };
      }
      e.exports = n;
    },
    function (e, t) {
      var n = 800,
        r = 16,
        o = Date.now;
      function i(e) {
        var t = 0,
          n = 0;
        return function () {
          var r = o(),
            i = 16 - (r - n);
          if (((n = r), i > 0)) {
            if (++t >= 800) return arguments[0];
          } else t = 0;
          return e.apply(void 0, arguments);
        };
      }
      e.exports = i;
    },
    function (e, t, n) {
      var r = n(25),
        o = n(38),
        i = n(57),
        a = n(16);
      function u(e, t, n) {
        if (!a(n)) return !1;
        var u = typeof t;
        return (
          !!("number" == u
            ? o(n) && i(t, n.length)
            : "string" == u && t in n) && r(n[t], e)
        );
      }
      e.exports = u;
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.reloadDataSourceFactory = void 0);
      var r = n(1),
        o = n(32),
        i = function (e, t, n) {
          return function () {
            return r.__awaiter(void 0, void 0, void 0, function () {
              var i, u, s, c, l, f, p, l, h;
              return r.__generator(this, function (r) {
                switch (r.label) {
                  case 0:
                    for (
                      i = [],
                        e.list
                          .filter(function (e) {
                            return "urlParams" === e.type && a(e);
                          })
                          .forEach(function (e) {
                            t[e.id].load();
                          }),
                        u = e.list.filter(function (e) {
                          return "urlParams" !== e.type;
                        }),
                        s = 0,
                        c = u;
                      s < c.length;
                      s++
                    )
                      (l = c[s]).options &&
                        a(l) &&
                        !l.isSync &&
                        i.push(t[l.id].load());
                    (f = 0), (p = u), (r.label = 1);
                  case 1:
                    if (!(f < p.length)) return [3, 6];
                    if (!(l = p[f]).options) return [3, 5];
                    if (!a(l) || !l.isSync) return [3, 5];
                    r.label = 2;
                  case 2:
                    return r.trys.push([2, 4, , 5]), [4, t[l.id].load()];
                  case 3:
                    return r.sent(), [3, 5];
                  case 4:
                    return (h = r.sent()), console.error(h), [3, 5];
                  case 5:
                    return f++, [3, 1];
                  case 6:
                    return [4, (0, o.promiseSettled)(i)];
                  case 7:
                    return r.sent(), n && n(t), [2];
                }
              });
            });
          };
        };
      function a(e) {
        var t;
        return "function" == typeof e.isInit
          ? e.isInit()
          : null === (t = e.isInit) || void 0 === t || t;
      }
      t.reloadDataSourceFactory = i;
    },
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {
      "use strict";
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var r = "function" == typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        u = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        c = r ? Symbol.for("react.provider") : 60109,
        l = r ? Symbol.for("react.context") : 60110,
        f = r ? Symbol.for("react.async_mode") : 60111,
        p = r ? Symbol.for("react.concurrent_mode") : 60111,
        h = r ? Symbol.for("react.forward_ref") : 60112,
        d = r ? Symbol.for("react.suspense") : 60113,
        v = r ? Symbol.for("react.suspense_list") : 60120,
        y = r ? Symbol.for("react.memo") : 60115,
        m = r ? Symbol.for("react.lazy") : 60116,
        b = r ? Symbol.for("react.block") : 60121,
        _ = r ? Symbol.for("react.fundamental") : 60117,
        g = r ? Symbol.for("react.responder") : 60118,
        w = r ? Symbol.for("react.scope") : 60119;
      function O(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case o:
              switch ((e = e.type)) {
                case f:
                case p:
                case a:
                case s:
                case u:
                case d:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case l:
                    case h:
                    case m:
                    case y:
                    case c:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
              return t;
          }
        }
      }
      function E(e) {
        return O(e) === p;
      }
      (t.AsyncMode = f),
        (t.ConcurrentMode = p),
        (t.ContextConsumer = l),
        (t.ContextProvider = c),
        (t.Element = o),
        (t.ForwardRef = h),
        (t.Fragment = a),
        (t.Lazy = m),
        (t.Memo = y),
        (t.Portal = i),
        (t.Profiler = s),
        (t.StrictMode = u),
        (t.Suspense = d),
        (t.isAsyncMode = function (e) {
          return E(e) || O(e) === f;
        }),
        (t.isConcurrentMode = E),
        (t.isContextConsumer = function (e) {
          return O(e) === l;
        }),
        (t.isContextProvider = function (e) {
          return O(e) === c;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === o;
        }),
        (t.isForwardRef = function (e) {
          return O(e) === h;
        }),
        (t.isFragment = function (e) {
          return O(e) === a;
        }),
        (t.isLazy = function (e) {
          return O(e) === m;
        }),
        (t.isMemo = function (e) {
          return O(e) === y;
        }),
        (t.isPortal = function (e) {
          return O(e) === i;
        }),
        (t.isProfiler = function (e) {
          return O(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return O(e) === u;
        }),
        (t.isSuspense = function (e) {
          return O(e) === d;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === a ||
            e === p ||
            e === s ||
            e === u ||
            e === d ||
            e === v ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === y ||
                e.$$typeof === c ||
                e.$$typeof === l ||
                e.$$typeof === h ||
                e.$$typeof === _ ||
                e.$$typeof === g ||
                e.$$typeof === w ||
                e.$$typeof === b))
          );
        }),
        (t.typeOf = O);
    },
    function (e, t, n) {
      "use strict";
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
      function a(e) {
        if (null == e)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(e);
      }
      function u() {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc"),
            t;
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var n = {}, r = 0; r < 10; r++)
            n["_" + String.fromCharCode(r)] = r;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(n)
              .map(function (e) {
                return n[e];
              })
              .join("")
          )
            return !1;
          var o = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              o[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, o)).join("")
          );
        } catch (e) {
          return !1;
        }
      }
      e.exports = u()
        ? Object.assign
        : function (e, t) {
            for (var n, u = a(e), s, c = 1; c < arguments.length; c++) {
              for (var l in (n = Object(arguments[c])))
                o.call(n, l) && (u[l] = n[l]);
              if (r) {
                s = r(n);
                for (var f = 0; f < s.length; f++)
                  i.call(n, s[f]) && (u[s[f]] = n[s[f]]);
              }
            }
            return u;
          };
    },
    function (e, t) {
      e.exports = Function.call.bind(Object.prototype.hasOwnProperty);
    },
    function (e, t, n) {
      "use strict";
      var r = function () {},
        o,
        i,
        a;
      function u(e, t, n, r, o) {
        var i, a, u, s;
      }
      (u.resetWarningCache = function () {
        0;
      }),
        (e.exports = u);
    },
    function (e, t) {
      var n = (e.exports = {}),
        r,
        o;
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      function u(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === i || !r) && setTimeout)
          return (r = setTimeout), setTimeout(e, 0);
        try {
          return r(e, 0);
        } catch (t) {
          try {
            return r.call(null, e, 0);
          } catch (t) {
            return r.call(this, e, 0);
          }
        }
      }
      function s(e) {
        if (o === clearTimeout) return clearTimeout(e);
        if ((o === a || !o) && clearTimeout)
          return (o = clearTimeout), clearTimeout(e);
        try {
          return o(e);
        } catch (t) {
          try {
            return o.call(null, e);
          } catch (t) {
            return o.call(this, e);
          }
        }
      }
      !(function () {
        try {
          r = "function" == typeof setTimeout ? setTimeout : i;
        } catch (e) {
          r = i;
        }
        try {
          o = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (e) {
          o = a;
        }
      })();
      var c = [],
        l = !1,
        f,
        p = -1;
      function h() {
        l &&
          f &&
          ((l = !1), f.length ? (c = f.concat(c)) : (p = -1), c.length && d());
      }
      function d() {
        if (!l) {
          var e = u(h);
          l = !0;
          for (var t = c.length; t; ) {
            for (f = c, c = []; ++p < t; ) f && f[p].run();
            (p = -1), (t = c.length);
          }
          (f = null), (l = !1), s(e);
        }
      }
      function v(e, t) {
        (this.fun = e), (this.array = t);
      }
      function y() {}
      (n.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new v(e, t)), 1 !== c.length || l || u(d);
      }),
        (v.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (n.title = "browser"),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ""),
        (n.versions = {}),
        (n.on = y),
        (n.addListener = y),
        (n.once = y),
        (n.off = y),
        (n.removeListener = y),
        (n.removeAllListeners = y),
        (n.emit = y),
        (n.prependListener = y),
        (n.prependOnceListener = y),
        (n.listeners = function (e) {
          return [];
        }),
        (n.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (n.cwd = function () {
          return "/";
        }),
        (n.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (n.umask = function () {
          return 0;
        });
    },
    function (e, t, n) {
      function r(e) {
        function t(e) {
          let t = 0;
          for (let n = 0; n < e.length; n++)
            (t = (t << 5) - t + e.charCodeAt(n)), (t |= 0);
          return r.colors[Math.abs(t) % r.colors.length];
        }
        function r(e) {
          let t,
            n = null,
            i,
            a;
          function u(...e) {
            if (!u.enabled) return;
            const n = u,
              o = Number(new Date()),
              i = o - (t || o);
            (n.diff = i),
              (n.prev = t),
              (n.curr = o),
              (t = o),
              (e[0] = r.coerce(e[0])),
              "string" != typeof e[0] && e.unshift("%O");
            let a = 0;
            (e[0] = e[0].replace(/%([a-zA-Z%])/g, (t, o) => {
              if ("%%" === t) return "%";
              a++;
              const i = r.formatters[o];
              if ("function" == typeof i) {
                const r = e[a];
                (t = i.call(n, r)), e.splice(a, 1), a--;
              }
              return t;
            })),
              r.formatArgs.call(n, e);
            const s = undefined;
            (n.log || r.log).apply(n, e);
          }
          return (
            (u.namespace = e),
            (u.useColors = r.useColors()),
            (u.color = r.selectColor(e)),
            (u.extend = o),
            (u.destroy = r.destroy),
            Object.defineProperty(u, "enabled", {
              enumerable: !0,
              configurable: !1,
              get: () =>
                null !== n
                  ? n
                  : (i !== r.namespaces &&
                      ((i = r.namespaces), (a = r.enabled(e))),
                    a),
              set: (e) => {
                n = e;
              },
            }),
            "function" == typeof r.init && r.init(u),
            u
          );
        }
        function o(e, t) {
          const n = r(this.namespace + (void 0 === t ? ":" : t) + e);
          return (n.log = this.log), n;
        }
        function i(e) {
          let t;
          r.save(e), (r.namespaces = e), (r.names = []), (r.skips = []);
          const n = ("string" == typeof e ? e : "").split(/[\s,]+/),
            o = n.length;
          for (t = 0; t < o; t++)
            n[t] &&
              ("-" === (e = n[t].replace(/\*/g, ".*?"))[0]
                ? r.skips.push(new RegExp("^" + e.slice(1) + "$"))
                : r.names.push(new RegExp("^" + e + "$")));
        }
        function a() {
          const e = [
            ...r.names.map(s),
            ...r.skips.map(s).map((e) => "-" + e),
          ].join(",");
          return r.enable(""), e;
        }
        function u(e) {
          if ("*" === e[e.length - 1]) return !0;
          let t, n;
          for (t = 0, n = r.skips.length; t < n; t++)
            if (r.skips[t].test(e)) return !1;
          for (t = 0, n = r.names.length; t < n; t++)
            if (r.names[t].test(e)) return !0;
          return !1;
        }
        function s(e) {
          return e
            .toString()
            .substring(2, e.toString().length - 2)
            .replace(/\.\*\?$/, "*");
        }
        function c(e) {
          return e instanceof Error ? e.stack || e.message : e;
        }
        function l() {
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
          );
        }
        return (
          (r.debug = r),
          (r.default = r),
          (r.coerce = c),
          (r.disable = a),
          (r.enable = i),
          (r.enabled = u),
          (r.humanize = n(156)),
          (r.destroy = l),
          Object.keys(e).forEach((t) => {
            r[t] = e[t];
          }),
          (r.names = []),
          (r.skips = []),
          (r.formatters = {}),
          (r.selectColor = t),
          r.enable(r.load()),
          r
        );
      }
      e.exports = r;
    },
    function (e, t) {
      var n = 1e3,
        r = 6e4,
        o = 60 * r,
        i = 24 * o,
        a = 7 * i,
        u = 365.25 * i;
      function s(e) {
        if (!((e = String(e)).length > 100)) {
          var t =
            /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
              e
            );
          if (t) {
            var s = parseFloat(t[1]),
              c;
            switch ((t[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return s * u;
              case "weeks":
              case "week":
              case "w":
                return s * a;
              case "days":
              case "day":
              case "d":
                return s * i;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return s * o;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return s * r;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return s * n;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return s;
              default:
                return;
            }
          }
        }
      }
      function c(e) {
        var t = Math.abs(e);
        return t >= i
          ? Math.round(e / i) + "d"
          : t >= o
          ? Math.round(e / o) + "h"
          : t >= r
          ? Math.round(e / r) + "m"
          : t >= n
          ? Math.round(e / n) + "s"
          : e + "ms";
      }
      function l(e) {
        var t = Math.abs(e);
        return t >= i
          ? f(e, t, i, "day")
          : t >= o
          ? f(e, t, o, "hour")
          : t >= r
          ? f(e, t, r, "minute")
          : t >= n
          ? f(e, t, n, "second")
          : e + " ms";
      }
      function f(e, t, n, r) {
        var o = t >= 1.5 * n;
        return Math.round(e / n) + " " + r + (o ? "s" : "");
      }
      e.exports = function (e, t) {
        t = t || {};
        var n = typeof e;
        if ("string" === n && e.length > 0) return s(e);
        if ("number" === n && isFinite(e)) return t.long ? l(e) : c(e);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(e)
        );
      };
    },
    function (e, t, n) {},
    function (e, t) {
      e.exports =
        Array.isArray ||
        function (e) {
          return "[object Array]" == Object.prototype.toString.call(e);
        };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      var r = {};
      n.r(r),
        n.d(r, "Change", function () {
          return F;
        }),
        n.d(r, "InnerChange", function () {
          return V;
        });
      var o = {};
      n.r(o),
        n.d(o, "Prop", function () {
          return r;
        }),
        n.d(o, "Rerender", function () {
          return G;
        });
      var i = {};
      n.r(i),
        n.d(i, "Node", function () {
          return o;
        });
      var a = n(2),
        u = n(1),
        s = n(0),
        c = n.n(s),
        l = n(13),
        f = n.n(l),
        p = window.LCSimulatorHost,
        h = n(30),
        d = n(21),
        v = n.n(d),
        y = n(5),
        m = n.n(y),
        b;
      function _(e) {
        return (_ =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      !(function (e) {
        (e.React = "react"), (e.Rax = "rax");
      })(b || (b = {}));
      var g,
        w = new ((function () {
          function e() {
            (this.runtime = void 0),
              (this.builtinModules = [
                "Component",
                "PureComponent",
                "createElement",
                "createContext",
                "forwardRef",
                "findDOMNode",
              ]),
              (this.env = void 0),
              (this.renderers = void 0),
              (this.configProvider = void 0),
              this.initRuntime();
          }
          var t = e.prototype;
          return (
            (t.initRuntime = function e() {
              var t = (function () {
                  function e() {
                    (this.state = void 0),
                      (this.props = void 0),
                      (this.refs = void 0),
                      (this.context = void 0);
                  }
                  var t = e.prototype;
                  return (
                    (t.setState = function e() {}),
                    (t.forceUpdate = function e() {}),
                    (t.render = function e() {}),
                    e
                  );
                })(),
                n = (function () {
                  function e() {
                    (this.state = void 0),
                      (this.props = void 0),
                      (this.refs = void 0),
                      (this.context = void 0);
                  }
                  var t = e.prototype;
                  return (
                    (t.setState = function e() {}),
                    (t.forceUpdate = function e() {}),
                    (t.render = function e() {}),
                    e
                  );
                })(),
                r = function e() {},
                o = function e() {},
                i = function e() {},
                a = function e() {};
              this.runtime = {
                Component: t,
                PureComponent: n,
                createElement: r,
                createContext: o,
                forwardRef: i,
                findDOMNode: a,
              };
            }),
            (t.setRuntime = function e(t) {
              this.isValidRuntime(t) && (this.runtime = t);
            }),
            (t.isValidRuntime = function e(t) {
              return (
                "object" === _(t) &&
                !Array.isArray(t) &&
                this.builtinModules.every(function (e) {
                  var n = !!t[e];
                  if (!n)
                    throw new Error(
                      "runtime is invalid, module '" + e + "' does not exist"
                    );
                  return n;
                })
              );
            }),
            (t.getRuntime = function e() {
              return this.runtime;
            }),
            (t.setEnv = function e(t) {
              this.env = t;
            }),
            (t.isReact = function e() {
              return this.env === b.React;
            }),
            (t.isRax = function e() {
              return this.env === b.Rax;
            }),
            (t.setRenderers = function e(t) {
              this.renderers = t;
            }),
            (t.getRenderers = function e() {
              return this.renderers || {};
            }),
            (t.setConfigProvider = function e(t) {
              this.configProvider = t;
            }),
            (t.getConfigProvider = function e() {
              return this.configProvider;
            }),
            e
          );
        })())();
      function O() {
        var e,
          t = w.getRuntime().createContext,
          n = window.__appContext;
        return n || ((n = t({})), (window.__appContext = n)), n;
      }
      var E = n(6),
        S = n.n(E),
        x = n(11),
        C = n.n(x),
        j = n(3),
        A = n.n(j),
        P = n(18),
        T = n.n(P),
        R = n(9),
        N = n.n(R),
        L = n(4),
        k = n.n(L),
        M = n(60),
        I = n(29),
        B,
        D;
      !(function (e) {
        (e.ADDED = "added"),
          (e.DELETED = "deleted"),
          (e.MODIFIED = "modified"),
          (e.COMPOSITE = "composite");
      })(B || (B = {})),
        (function (e) {
          (e[(e.Environment = 1)] = "Environment"),
            (e[(e.Library = 2)] = "Library"),
            (e[(e.Theme = 3)] = "Theme"),
            (e[(e.Runtime = 4)] = "Runtime"),
            (e[(e.Components = 5)] = "Components"),
            (e[(e.App = 6)] = "App");
        })(D || (D = {}));
      var H = [
          D.Environment,
          D.Library,
          D.Theme,
          D.Runtime,
          D.Components,
          D.App,
        ],
        U;
      !(function (e) {
        (e.JSUrl = "jsUrl"),
          (e.CSSUrl = "cssUrl"),
          (e.CSSText = "cssText"),
          (e.JSText = "jsText"),
          (e.Bundle = "bundle");
      })(U || (U = {}));
      var F = "node.prop.change",
        V = "node.innerProp.change",
        G = "node.edit.rerender.time",
        z,
        q,
        J,
        $,
        K,
        W,
        X,
        Y,
        Z,
        Q,
        ee;
      function te(e) {
        return (te =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function ne(e) {
        return e && "object" === te(e);
      }
      function re(e) {
        return (
          e &&
          e.prototype &&
          (e.prototype.isReactComponent || e.prototype instanceof s.Component)
        );
      }
      function oe(e) {
        return e && (re(e) || "function" == typeof e);
      }
      function ie(e) {
        return e && (Object(s.isValidElement)(e) || oe(e));
      }
      function ae(e) {
        return "string" == typeof e;
      }
      function ue(e) {
        return e && "function" == typeof e && !re(e);
      }
      function se(e) {
        return e && "i18n" === e.type;
      }
      function ce(e) {
        return e && "JSBlock" === e.type;
      }
      function le(e) {
        return e && "JSExpression" === e.type && "function" !== e.extType;
      }
      function fe(e) {
        return (fe =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function pe(e) {
        return "object" === fe(e) && e && "JSFunction" === e.type;
      }
      function he(e) {
        return e && "JSSlot" === e.type;
      }
      function de(e) {
        return "package" in e;
      }
      function ve(e) {
        return !de(e);
      }
      function ye(e) {
        return e && e.componentName;
      }
      function me(e) {
        return (me =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function be(e) {
        if ("object" !== me(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return (
          t === Object.prototype ||
          null === t ||
          null === Object.getPrototypeOf(t)
        );
      }
      function _e(e) {
        return e && e.componentsTree;
      }
      function ge(e) {
        return (ge =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function we(e) {
        return e && "object" === ge(e) && "componentName" in e && !ie(e);
      }
      function Oe(e) {
        return be(e) && !se(e);
      }
      function Ee(e) {
        return /\.css(\?.*)?$/.test(e);
      }
      function Se() {
        var e = {},
          t = new Promise(function (t, n) {
            (e.resolve = t), (e.reject = n);
          });
        return (
          (e.promise = function () {
            return t;
          }),
          e
        );
      }
      function xe(e) {
        var t = document.createElement("script");
        (t.text = e),
          document.head.appendChild(t),
          document.head.removeChild(t);
      }
      function Ce(e) {
        var t = document.createElement("script");
        (t.onload = r), (t.onerror = r);
        var n = Se();
        function r(e) {
          (t.onload = null),
            (t.onerror = null),
            "load" === e.type ? n.resolve() : n.reject();
        }
        return (
          (t.src = e), (t.async = !1), document.head.appendChild(t), n.promise()
        );
      }
      function je(e) {
        var t;
        return new Function(e)();
      }
      function Ae(e, t) {
        try {
          return new Function(e, t);
        } catch (e) {
          return console.warn("Caught error, Cant init func"), null;
        }
      }
      function Pe(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (
          Array.isArray(e) ||
          (n = Te(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var r = 0;
          return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function Te(e, t) {
        if (e) {
          if ("string" == typeof e) return Re(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Re(e, t)
              : void 0
          );
        }
      }
      function Re(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Ne(e) {
        return e && e.type;
      }
      function Le(e) {
        return e && e.type === U.Bundle;
      }
      function ke(e, t) {
        return e ? { type: U.Bundle, assets: e, level: t } : null;
      }
      function Me(e, t, n, r) {
        return t ? { type: e, content: t, level: n, id: r } : null;
      }
      function Ie(e, t) {
        return (
          t.packages && (e.packages = [].concat(e.packages || [], t.packages)),
          t.components &&
            (e.components = [].concat(e.components || [], t.components)),
          Be(e, t, "componentList"),
          Be(e, t, "bizComponentList"),
          e
        );
      }
      function Be(e, t, n) {
        var r;
        t[n] &&
          e[n] &&
          (null === (r = t[n]) ||
            void 0 === r ||
            r.map(function (t) {
              var r,
                o,
                i = !1;
              return (
                null === (r = e[n]) ||
                  void 0 === r ||
                  r.map(function (e) {
                    return (
                      e.title === t.title &&
                        ((e.children = e.children.concat(t.children)),
                        (i = !0)),
                      e
                    );
                  }),
                !i && (null === (o = e[n]) || void 0 === o || o.push(t)),
                t
              );
            }));
      }
      !(function (e) {
        (e.Children = "Children"), (e.Prop = "Prop");
      })(z || (z = {})),
        (function (e) {
          (e.Children = "Children"), (e.Prop = "Prop");
        })(q || (q = {})),
        J || (J = {}),
        (function (e) {
          e[(e.REPAINT = 0)] = "REPAINT";
        })($ || ($ = {})),
        (function (e) {
          e[(e.REPAINT = 0)] = "REPAINT";
        })(K || (K = {})),
        (function (e) {
          (e.Render = "render"),
            (e.Serilize = "serilize"),
            (e.Save = "save"),
            (e.Clone = "clone"),
            (e.Init = "init"),
            (e.Upgrade = "upgrade");
        })(W || (W = {})),
        (function (e) {
          (e.Render = "render"),
            (e.Serilize = "serilize"),
            (e.Save = "save"),
            (e.Clone = "clone"),
            (e.Init = "init"),
            (e.Upgrade = "upgrade");
        })(X || (X = {})),
        (function (e) {
          (e.Node = "node"), (e.NodeData = "nodedata");
        })(Y || (Y = {})),
        (function (e) {
          (e[(e.Node = Y.Node)] = "Node"),
            (e[(e.NodeData = Y.NodeData)] = "NodeData");
        })(Z || (Z = {})),
        (function (e) {
          (e.SET_VALUE = "SET_VALUE"),
            (e.SUB_VALUE_CHANGE = "SUB_VALUE_CHANGE");
        })(Q || (Q = {})),
        (function (e) {
          (e.SET_VALUE = "SET_VALUE"),
            (e.SUB_VALUE_CHANGE = "SUB_VALUE_CHANGE");
        })(ee || (ee = {}));
      var De = (function () {
        function e(e, t) {
          var n;
          if (
            ((this.lastContent = void 0),
            (this.lastUrl = void 0),
            (this.placeholder = void 0),
            (this.level = void 0),
            (this.id = void 0),
            (this.level = e),
            t && (this.id = t),
            t &&
              (n = document.head.querySelector('style[data-id="' + t + '"]')),
            !n)
          ) {
            n = document.createTextNode("");
            var r = document.head.querySelector('meta[level="' + e + '"]');
            r ? document.head.insertBefore(n, r) : document.head.appendChild(n);
          }
          this.placeholder = n;
        }
        var t = e.prototype;
        return (
          (t.applyText = function e(t) {
            if (this.lastContent !== t) {
              (this.lastContent = t), (this.lastUrl = void 0);
              var n = document.createElement("style");
              n.setAttribute("type", "text/css"),
                this.id && n.setAttribute("data-id", this.id),
                n.appendChild(document.createTextNode(t)),
                document.head.insertBefore(
                  n,
                  this.placeholder.parentNode === document.head
                    ? this.placeholder.nextSibling
                    : null
                ),
                document.head.removeChild(this.placeholder),
                (this.placeholder = n);
            }
          }),
          (t.applyUrl = function e(t) {
            if (this.lastUrl !== t) {
              (this.lastContent = void 0), (this.lastUrl = t);
              var n = document.createElement("link");
              (n.onload = o), (n.onerror = o);
              var r = Se();
              return (
                (n.href = t),
                (n.rel = "stylesheet"),
                this.id && n.setAttribute("data-id", this.id),
                document.head.insertBefore(
                  n,
                  this.placeholder.parentNode === document.head
                    ? this.placeholder.nextSibling
                    : null
                ),
                document.head.removeChild(this.placeholder),
                (this.placeholder = n),
                r.promise()
              );
            }
            function o(e) {
              (n.onload = null),
                (n.onerror = null),
                "load" === e.type ? r.resolve() : r.reject();
            }
          }),
          e
        );
      })();
      function He(e, t, n, r) {
        for (var o = Pe(n), i; !(i = o()).done; ) {
          var a;
          Ue(e, t, i.value, r);
        }
      }
      function Ue(e, t, n, r) {
        if (n) {
          if (Array.isArray(n)) return He(e, t, n, r);
          if (Le(n))
            return n.assets
              ? void (Array.isArray(n.assets)
                  ? He(e, t, n.assets, n.level || r)
                  : Ue(e, t, n.assets, n.level || r))
              : void 0;
          Ne(n) || (n = Me(Ee(n) ? U.CSSUrl : U.JSUrl, n, r));
          var o = n.level || r;
          (o && null != D[o]) || (o = D.App),
            (n.level = o),
            n.type === U.CSSUrl || n.type == U.CSSText
              ? t[o].push(n)
              : e[o].push(n);
        }
      }
      var Fe = (function () {
        function e() {
          this.stylePoints = new Map();
        }
        var t = e.prototype;
        return (
          (t.load = (function () {
            var e = S()(
              k.a.mark(function e(t) {
                var n = this,
                  r,
                  o,
                  i,
                  a;
                return k.a.wrap(function e(u) {
                  for (;;)
                    switch ((u.prev = u.next)) {
                      case 0:
                        return (
                          (r = {}),
                          (o = {}),
                          H.forEach(function (e) {
                            (r[e] = []), (o[e] = []);
                          }),
                          Ue(o, r, t),
                          (i = r[D.Environment].concat(
                            r[D.Library],
                            r[D.Theme],
                            r[D.Runtime],
                            r[D.App]
                          )),
                          (a = o[D.Environment].concat(
                            o[D.Library],
                            o[D.Theme],
                            o[D.Runtime],
                            o[D.App]
                          )),
                          (u.next = 8),
                          Promise.all(
                            i.map(function (e) {
                              var t = e.content,
                                r = e.level,
                                o = e.type,
                                i = e.id;
                              return n.loadStyle(t, r, o === U.CSSUrl, i);
                            })
                          )
                        );
                      case 8:
                        return (
                          (u.next = 10),
                          Promise.all(
                            a.map(function (e) {
                              var t = e.content,
                                r = e.type;
                              return n.loadScript(t, r === U.JSUrl);
                            })
                          )
                        );
                      case 10:
                      case "end":
                        return u.stop();
                    }
                }, e);
              })
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.loadStyle = function e(t, n, r, o) {
            var i;
            if (t)
              return (
                o
                  ? (i = this.stylePoints.get(o)) ||
                    ((i = new De(n, o)), this.stylePoints.set(o, i))
                  : (i = new De(n)),
                r ? i.applyUrl(t) : i.applyText(t)
              );
          }),
          (t.loadScript = function e(t, n) {
            if (t) return n ? Ce(t) : xe(t);
          }),
          (t.loadAsyncLibrary = (function () {
            var e = S()(
              k.a.mark(function e(t) {
                var n, r, o, i;
                return k.a.wrap(function e(a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        for (i in ((n = []), (r = []), (o = []), t))
                          t[i].async &&
                            (n.push(window[t[i].library]),
                            r.push(t[i].library),
                            o.push(t[i]));
                        return (
                          (a.next = 6),
                          Promise.all(n).then(function (e) {
                            e.length > 0 &&
                              e.map(function (e, t) {
                                var n = o[t],
                                  i = n.exportMode,
                                  a = n.exportSourceLibrary,
                                  u = n.library;
                                return (
                                  (window[r[t]] =
                                    "functionCall" !== i ||
                                    (null != a && a !== u)
                                      ? e
                                      : e()),
                                  e
                                );
                              });
                          })
                        );
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, e);
              })
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          e
        );
      })();
      function Ve(e) {
        return (Ve =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Ge(e) {
        return null !== e && "object" === Ve(e);
      }
      function ze(e) {
        return Ge(e) && "i18n" === e.type;
      }
      function qe(e) {
        if (!Ge(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return (
          t === Object.prototype ||
          null === t ||
          null === Object.getPrototypeOf(t)
        );
      }
      function Je(e) {
        return (Je =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function $e(e) {
        var t = Je(e),
          n;
        if (null == e) n = e;
        else if (Array.isArray(e))
          n = e.map(function (e) {
            return $e(e);
          });
        else if ("object" === t && qe(e))
          for (var r in ((n = {}), e)) e.hasOwnProperty(r) && (n[r] = $e(e[r]));
        else n = e;
        return n;
      }
      var Ke = [
        "$$typeof",
        "render",
        "defaultProps",
        "props",
        "length",
        "prototype",
        "name",
        "caller",
        "callee",
        "arguments",
      ];
      function We(e, t) {
        var n;
        return (
          Object.keys(t)
            .filter(function (e) {
              return !Ke.includes(e);
            })
            .forEach(function (n) {
              e[n] = t[n];
            }),
          e
        );
      }
      var Xe,
        Ye =
          "function" == typeof Symbol && Symbol.for
            ? Symbol.for("react.forward_ref")
            : 60112;
      function Ze(e) {
        return (
          e &&
          e.prototype &&
          (e.prototype.isReactComponent || e.prototype instanceof s.Component)
        );
      }
      function Qe(e) {
        var t;
        return (
          (null == e || null === (t = e.prototype) || void 0 === t
            ? void 0
            : t.isReactComponent) ||
          (e.$$typeof && e.$$typeof === Ye)
        );
      }
      function et(e) {
        return (
          (null == e ? void 0 : e.$$typeof) &&
          (null == e ? void 0 : e.$$typeof) === Ye
        );
      }
      function tt(e) {
        return e && (Ze(e) || "function" == typeof e || et(e));
      }
      function nt(e) {
        var t = (function (t) {
          function n() {
            return t.apply(this, arguments) || this;
          }
          var r;
          return (
            m()(n, t),
            (n.prototype.render = function t() {
              return Object(s.createElement)(e, this.props);
            }),
            n
          );
        })(s.Component);
        return ((t = We(t, e)).displayName = e.displayName), t;
      }
      function rt(e, t) {
        return Object(s.isValidElement)(e)
          ? t
            ? Object(s.cloneElement)(e, t)
            : e
          : tt(e)
          ? Object(s.createElement)(e, t)
          : e;
      }
      var ot = n(40),
        it = n.n(ot);
      function at(e) {
        return e && e.__esModule;
      }
      var ut = /^(https?:)\/\//i;
      function st(e, t) {
        return e
          ? (at(e) && (e = e.default),
            "string" == typeof e
              ? ut.test(e)
                ? React.createElement("img", A()({ src: e }, t))
                : React.createElement(it.a, A()({ type: e }, t))
              : Object(s.isValidElement)(e)
              ? Object(s.cloneElement)(e, A()({}, t))
              : tt(e)
              ? Object(s.createElement)(e, A()({}, t))
              : React.createElement(it.a, A()({}, e, t)))
          : null;
      }
      var ct = n(148);
      function lt(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (
          Array.isArray(e) ||
          (n = ft(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var r = 0;
          return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function ft(e, t) {
        if (e) {
          if ("string" == typeof e) return pt(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? pt(e, t)
              : void 0
          );
        }
      }
      function pt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var ht,
        dt = new ((function () {
          function e() {
            this.states = new Set();
          }
          var t = e.prototype;
          return (
            (t.setDragging = function e(t) {
              t ? this.addState("dragging") : this.removeState("dragging");
            }),
            (t.setXResizing = function e(t) {
              t ? this.addState("x-resizing") : this.removeState("x-resizing");
            }),
            (t.setYResizing = function e(t) {
              t ? this.addState("y-resizing") : this.removeState("y-resizing");
            }),
            (t.setCopy = function e(t) {
              t ? this.addState("copy") : this.removeState("copy");
            }),
            (t.isCopy = function e() {
              return this.states.has("copy");
            }),
            (t.release = function e() {
              for (var t = lt(this.states), n; !(n = t()).done; ) {
                var r = n.value;
                this.removeState(r);
              }
            }),
            (t.addState = function e(t) {
              this.states.has(t) ||
                (this.states.add(t),
                document.documentElement.classList.add("lc-cursor-" + t));
            }),
            (t.removeState = function e(t) {
              this.states.has(t) &&
                (this.states.delete(t),
                document.documentElement.classList.remove("lc-cursor-" + t));
            }),
            e
          );
        })())();
      function vt(e) {
        return void 0 !== Object.getPrototypeOf
          ? Object.getPrototypeOf(e)
          : e.__proto__;
      }
      var yt = Object.prototype.hasOwnProperty;
      function mt(e, t) {
        return e && yt.call(e, t);
      }
      function bt(e) {
        return !!e && e.nodeType === Node.ELEMENT_NODE;
      }
      function _t(e) {
        var t = e.target;
        return (
          !!t &&
          (!(!t.form && !/^(INPUT|SELECT|TEXTAREA)$/.test(t.tagName)) ||
            !!(
              t instanceof HTMLElement &&
              /write/.test(
                window
                  .getComputedStyle(t)
                  .getPropertyValue("-webkit-user-modify")
              )
            ))
        );
      }
      function gt(e) {
        return "function" == typeof e;
      }
      var wt = !0,
        Ot = function e(t) {
          return wt ? null : (t.preventDefault(), t.stopPropagation(), !1);
        };
      function Et(e) {
        wt = e;
      }
      function St(e, t) {
        void 0 !== Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t);
      }
      function xt(e) {
        return (xt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Ct(e, t) {
        if (e === t) return !0;
        if (
          "object" !== xt(e) ||
          null === e ||
          "object" !== xt(t) ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var o = 0; o < n.length; o++)
          if (!mt(t, n[o]) || e[n[o]] !== t[n[o]]) return !1;
        return !0;
      }
      document.addEventListener("selectstart", Ot, !0),
        document.addEventListener("dragstart", Ot, !0);
      var jt = ["fill", "size", "viewBox", "style", "children"],
        At = { xsmall: 8, small: 12, medium: 16, large: 20, xlarge: 30 };
      function Pt(e) {
        var t = e.fill,
          n = e.size,
          r = void 0 === n ? "medium" : n,
          o = e.viewBox,
          i = e.style,
          a = e.children,
          u = C()(e, jt);
        return (
          At.hasOwnProperty(r) && (r = At[r]),
          React.createElement(
            "svg",
            A()(
              {
                fill: "currentColor",
                preserveAspectRatio: "xMidYMid meet",
                width: r,
                height: r,
                viewBox: o,
              },
              u,
              { style: A()({ color: t }, i) }
            ),
            a
          )
        );
      }
      var Tt = Date.now();
      function Rt(e) {
        return (
          void 0 === e && (e = ""), "" + e + (Tt++).toString(36).toLowerCase()
        );
      }
      function Nt(e) {
        return "string" != typeof e ? e : window[e] || Lt(e);
      }
      function Lt(e) {
        if (["a", "img", "div", "span", "svg"].includes(e))
          return Object(s.forwardRef)(function (t, n) {
            return Object(s.createElement)(e, A()({ ref: n }, t), t.children);
          });
      }
      function kt(e, t) {
        var n = t.length;
        if (n < 1 || !e) return e;
        for (var r = 0, o; r < n; ) {
          var i = t[r],
            a = void 0;
          try {
            o = e[i] || o;
          } catch (e) {
            (a = e), (o = null);
          }
          if (0 === r && null == o && "default" === i) {
            if (a) return 1 === n ? e : null;
            o = e;
          } else if (null == o) return null;
          (e = o), r++;
        }
        return o;
      }
      function Mt(e, t, n) {
        if (!n) return Nt(t);
        var r = n.exportName || n.componentName || t,
          o,
          i = Nt(e[n.package] || r),
          a = n.exportName && n.subName ? n.subName.split(".") : [];
        return (
          n.destructuring ? a.unshift(r) : at(i) && a.unshift("default"),
          kt(i, a)
        );
      }
      function It(e) {
        return (
          !!Ge(e) &&
          Object.keys(e).some(function (t) {
            return tt(e[t]);
          })
        );
      }
      function Bt(e, t, n) {
        var r = {};
        return (
          Object.keys(t).forEach(function (o) {
            var i = t[o];
            i && "Component" === i.componentName
              ? (r[o] = n(i))
              : tt(i)
              ? (Qe(i) || (i = nt(i)), (r[o] = i))
              : It(i)
              ? (r[o] = i)
              : (i = Mt(e, o, i)) && (Qe(i) || (i = nt(i)), (r[o] = i));
          }),
          r
        );
      }
      function Dt(e, t) {
        var n = {};
        return (
          t &&
            t.forEach(function (t) {
              var r;
              if (
                e[
                  null == t || null === (r = t.npm) || void 0 === r
                    ? void 0
                    : r.package
                ]
              ) {
                var o = Nt(e[null == t ? void 0 : t.npm.package]);
                null != o && o.destructuring
                  ? Object.keys(o).forEach(function (e) {
                      "destructuring" !== e && (n[e] = o[e]);
                    })
                  : t.name && (n[t.name] = o);
              }
            }),
          n
        );
      }
      var Ht = n(22),
        Ut = n.n(Ht);
      function Ft(e) {
        return (Ft =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var Vt = null;
      Ut.a.defaultMaxListeners = 100;
      var Gt = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this) || this),
            (Vt = N()(n)),
            Object.assign(N()(n), t),
            n
          );
        }
        m()(t, e);
        var n = t.prototype;
        return (
          (n.get = function e(t) {
            return this[t];
          }),
          (n.set = function e(t, n) {
            var r = this;
            "string" == typeof t
              ? (this[t] = n)
              : "object" === Ft(t) &&
                Object.keys(t).forEach(function (e) {
                  r[e] = t[e];
                });
          }),
          (n.batchOn = function e(t, n) {
            var r = this;
            Array.isArray(t) &&
              t.forEach(function (e) {
                return r.on(e, n);
              });
          }),
          (n.batchOnce = function e(t, n) {
            var r = this;
            Array.isArray(t) &&
              t.forEach(function (e) {
                return r.once(e, n);
              });
          }),
          (n.batchOff = function e(t, n) {
            var r = this;
            Array.isArray(t) &&
              t.forEach(function (e) {
                return r.off(e, n);
              });
          }),
          t
        );
      })(Ut.a);
      Gt.getInstance = function () {
        return Vt || (Vt = new Gt()), Vt;
      };
      var zt = n(8);
      function qt(e) {
        return e && "variable" === e.type;
      }
      function Jt(e, t) {
        var n,
          r =
            null == e || null === (n = e.options) || void 0 === n
              ? void 0
              : n.configure;
        return (
          !!Array.isArray(r) &&
          r.some(function (e) {
            var n, r;
            return (
              e.name === t &&
              "I18nSetter" ===
                (null == e ||
                null === (n = e.setter) ||
                void 0 === n ||
                null === (r = n.type) ||
                void 0 === r
                  ? void 0
                  : r.displayName)
            );
          })
        );
      }
      function $t(e, t) {
        var n;
        return (
          void 0 === t && (t = "zh-CN"),
          ze(e) ? e : (((n = { type: "i18n", use: t })[t] = e), n)
        );
      }
      function Kt(e) {
        return "string" == typeof e;
      }
      function Wt(e, t) {
        var n = 200;
        return new Promise(function (n, r) {
          setTimeout(function () {
            var o = Object(zt.get)(e, t);
            if (o) return n(o);
            r();
          }, 200);
        }).catch(function () {
          return Wt(e, t);
        });
      }
      function Xt(e, t) {
        var n = Object(zt.get)(e, t);
        return n ? Promise.resolve(n) : Wt(e, t);
      }
      function Yt(e, t) {
        return (
          !(!Array.isArray(e) || !Array.isArray(t)) &&
          e.length === t.length &&
          e.every(function (e) {
            return t.includes(e);
          })
        );
      }
      function Zt(e) {
        var t;
        return !(
          null == e ||
          null === (t = e.getMetadata().configure) ||
          void 0 === t ||
          !t.advanced
        );
      }
      function Qt(e, t) {
        return void 0 === t && (t = 2e3), setTimeout(e, t);
      }
      var en = ["render", "serilize", "save", "clone", "init", "upgrade"];
      function tn(e) {
        return "number" == typeof e
          ? (console.warn(
              "stage \u76f4\u63a5\u6307\u5b9a\u4e3a\u6570\u5b57\u7684\u4f7f\u7528\u65b9\u5f0f\u5df2\u7ecf\u8fc7\u65f6\uff0c\u5c06\u5728\u4e0b\u4e00\u7248\u672c\u79fb\u9664\uff0c\u8bf7\u76f4\u63a5\u4f7f\u7528 IPublicEnumTransformStage.Render|Serilize|Save|Clone|Init|Upgrade"
            ),
            en[e - 1])
          : e;
      }
      function nn(e, t, n) {
        if (!e)
          throw new Error(
            "Invariant failed: " + t + (n ? " in '" + n + "'" : "")
          );
      }
      function rn(e, t, n) {
        e &&
          console.warn(
            "Deprecation: " + t + (n ? ", use " + n + " instead." : "")
          );
      }
      function on(e) {
        return e && e.test && e.exec && e.compile;
      }
      function an(e) {
        return (an =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function un(e) {
        return e && "object" === an(e);
      }
      function sn(e) {
        return e && (Object(s.isValidElement)(e) || tt(e));
      }
      function cn(e) {
        return "string" == typeof e;
      }
      function ln(e) {
        return e && "function" == typeof e && !Ze(e);
      }
      function fn(e) {
        return e && "i18n" === e.type;
      }
      function pn(e) {
        return e && "JSBlock" === e.type;
      }
      function hn(e) {
        return e && "JSExpression" === e.type && "function" !== e.extType;
      }
      function dn(e) {
        return (dn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function vn(e) {
        return e && "JSExpression" === e.type && "function" === e.extType;
      }
      function yn(e) {
        return ("object" === dn(e) && e && "JSFunction" === e.type) || vn(e);
      }
      function mn(e) {
        return e && "JSSlot" === e.type;
      }
      function bn(e) {
        return "package" in e;
      }
      function _n(e) {
        return !bn(e);
      }
      function gn(e) {
        return e && e.componentName;
      }
      function wn(e) {
        return e && e.componentsTree;
      }
      function On(e) {
        return (On =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function En(e) {
        return e && "object" === On(e) && "componentName" in e && !sn(e);
      }
      function Sn(e) {
        return qe(e) && !fn(e);
      }
      function xn(e) {
        return e && e.type === Y.NodeData;
      }
      function Cn(e) {
        return e && e.type === Y.Node;
      }
      function jn(e) {
        return e && e.type !== Y.NodeData && e.type !== Y.Node;
      }
      function An(e) {
        return e && e.type === z.Children;
      }
      function Pn(e) {
        return e && e.isNode;
      }
      function Tn(e) {
        return e && e.target && e.detail;
      }
      function Rn(e) {
        return e && e.isSettingField;
      }
      function Nn(e) {
        return (Nn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Ln(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (
          Array.isArray(e) ||
          (n = kn(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var r = 0;
          return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function kn(e, t) {
        if (e) {
          if ("string" == typeof e) return Mn(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Mn(e, t)
              : void 0
          );
        }
      }
      function Mn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function In(e) {
        if ("object" === Nn(e) && null !== e)
          return e.type && e.source && e.compiled;
      }
      function Bn(e) {
        return e.type && "actionRef" === e.type;
      }
      function Dn(e) {
        if (!e) return e;
        if (Array.isArray(e))
          return e.map(function (e) {
            return Dn(e);
          });
        if (!qe(e)) return e;
        var t, n, r;
        if (pn(e))
          return "Slot" === e.value.componentName
            ? {
                type: "JSSlot",
                title:
                  null === (t = e.value.props) || void 0 === t
                    ? void 0
                    : t.slotTitle,
                name:
                  null === (n = e.value.props) || void 0 === n
                    ? void 0
                    : n.slotName,
                value: Dn(e.value.children),
                params:
                  null === (r = e.value.props) || void 0 === r
                    ? void 0
                    : r.slotParams,
              }
            : e.value;
        if (qt(e))
          return { type: "JSExpression", value: e.variable, mock: e.value };
        if (In(e))
          return {
            type: "JSExpression",
            value: e.compiled,
            extType: "function",
          };
        if (Bn(e)) return { type: "JSExpression", value: e.id + ".bind(this)" };
        var o = {};
        return (
          Object.keys(e).forEach(function (t) {
            (/^__slot__/.test(t) && !0 === e[t]) || (o[t] = Dn(e[t]));
          }),
          o
        );
      }
      function Hn(e, t) {
        var n;
        if (e.id === t) return e;
        var r = e.children,
          o = e.props;
        if (Array.isArray(r))
          for (var i = Ln(r), a; !(a = i()).done; ) {
            var u;
            if ((n = Hn(a.value, t))) return n;
          }
        return qe(o) && (n = Un(o, t)) ? n : void 0;
      }
      function Un(e, t) {
        for (var n, r = 0, o = Object.entries(e); r < o.length; r++) {
          var i = o[r],
            a = i[0],
            u = i[1];
          if (mn(u)) {
            if (Array.isArray(u.value))
              for (var s = Ln(u.value), c; !(c = s()).done; ) {
                var l;
                if ((n = Hn(c.value, t))) return n;
              }
            if ((n = Hn(u.value, t))) return n;
          } else if (qe(u) && (n = Un(u, t))) return n;
        }
      }
      function Fn(e, t, n) {
        var r = A()({}, e);
        return (
          Array.isArray(t) || (t = [t]),
          t.reduce(function (e, t) {
            if (t.type === B.MODIFIED) {
              var n = Hn(e, t.payload.schema.id);
              if (!n) return e;
              Object.assign(n, t.payload.schema);
            } else if (t.type === B.ADDED) {
              var r = t.payload,
                o = r.location,
                i = r.schema,
                a = o.parent,
                u = Hn(e, a.nodeId);
              u &&
                (Array.isArray(u.children)
                  ? u.children.splice(a.index, 0, i)
                  : u.children || (u.children = [i]));
            } else if (t.type === B.DELETED) {
              var s,
                c,
                l = t.payload.location.parent,
                f = Hn(e, l.nodeId);
              f && Array.isArray(f.children) && f.children.splice(l.index, 1);
            }
            return e;
          }, r)
        );
      }
      var Vn = function e(t, n) {
          if (t) return n(t) ? t : e(t.getParent(), n);
        },
        Gn = function e(t, n) {
          var r,
            o,
            i =
              null === (r = t.componentMeta) ||
              void 0 === r ||
              null === (o = r.advanced.callbacks) ||
              void 0 === o
                ? void 0
                : o.onClickHook,
            a;
          return "function" != typeof i || i(n, t);
        },
        zn = { debug: -1, log: 0, info: 0, warn: 1, error: 2 },
        qn = [
          "#daa569",
          "#00ffff",
          "#385e0f",
          "#7fffd4",
          "#00c957",
          "#b0e0e6",
          "#4169e1",
          "#6a5acd",
          "#87ceeb",
          "#ffff00",
          "#e3cf57",
          "#ff9912",
          "#eb8e55",
          "#ffe384",
          "#40e0d0",
          "#a39480",
          "#d2691e",
          "#ff7d40",
          "#f0e68c",
          "#bc8f8f",
          "#c76114",
          "#734a12",
          "#5e2612",
          "#0000ff",
          "#3d59ab",
          "#1e90ff",
          "#03a89e",
          "#33a1c9",
          "#a020f0",
          "#a066d3",
          "#da70d6",
          "#dda0dd",
          "#688e23",
          "#2e8b57",
        ],
        Jn = {
          debug: "#666666",
          log: "#bbbbbb",
          info: "#ffffff",
          warn: "#bbbbbb",
          error: "#bbbbbb",
        },
        $n = {
          debug: "debug",
          log: "log",
          info: "info",
          warn: "warn",
          error: "error",
        },
        Kn = {
          debug: console.log,
          log: console.log,
          info: console.log,
          warn: console.warn,
          error: console.error,
        },
        Wn = {},
        Xn = function e(t, n, r, o) {
          void 0 === n && (n = "warn");
          var i = zn[n] <= zn[t],
            a = "*" === o || r.indexOf(o) > -1;
          return i && a;
        },
        Yn = function e(t, n) {
          return function () {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
              r[o] = arguments[o];
            return Kn[t].apply(console, Qn(r, n, t));
          };
        },
        Zn = function e(t) {
          if (!Wn[t]) {
            var n = qn[Object.keys(Wn).length % qn.length];
            Wn[t] = n;
          }
          return Wn[t];
        },
        Qn = function e(t, n, r) {
          var o = Zn(n),
            i = Jn[r],
            a = t[0],
            u = "%c[" + n + "]%c[" + $n[r] + "]:";
          a.forEach(function (e) {
            Ge(e) ? (u += "%o") : (u += "%s");
          });
          var s = [u, "color: " + o, "color: " + i];
          return (s = s.concat(a));
        },
        er = function e(t, n) {
          if (!t) return { level: n.level, bizName: n.bizName };
          if (t.indexOf(":") > -1) {
            var r = t.split(":");
            return { level: r[0], bizName: r[1] || "*" };
          }
          return { level: t, bizName: "*" };
        },
        tr = { level: "warn", bizName: "*" },
        nr = (function () {
          function e(e) {
            (this.bizName = void 0),
              (this.targetBizName = void 0),
              (this.targetLevel = void 0),
              (e = A()({}, tr, e));
            var t = location || {},
              n = (/__(?:logConf|logLevel)__=([^#/&]*)/.exec(t.href) || [])[1],
              r = er(n, e);
            (this.bizName = e.bizName),
              (this.targetBizName = r.bizName),
              (this.targetLevel = r.level);
          }
          var t = e.prototype;
          return (
            (t.debug = function e() {
              if (
                Xn("debug", this.targetLevel, this.bizName, this.targetBizName)
              ) {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                return Yn("debug", this.bizName)(n);
              }
            }),
            (t.log = function e() {
              if (
                Xn("log", this.targetLevel, this.bizName, this.targetBizName)
              ) {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                return Yn("log", this.bizName)(n);
              }
            }),
            (t.info = function e() {
              if (
                Xn("info", this.targetLevel, this.bizName, this.targetBizName)
              ) {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                return Yn("info", this.bizName)(n);
              }
            }),
            (t.warn = function e() {
              if (
                Xn("warn", this.targetLevel, this.bizName, this.targetBizName)
              ) {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                return Yn("warn", this.bizName)(n);
              }
            }),
            (t.error = function e() {
              if (
                Xn("error", this.targetLevel, this.bizName, this.targetBizName)
              ) {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                return Yn("error", this.bizName)(n);
              }
            }),
            e
          );
        })();
      function rr(e) {
        return new nr(e);
      }
      var or = 4;
      function ir(e, t) {
        return (
          !!e.shaken ||
          e.target !== t.target ||
          Math.pow(e.clientY - t.clientY, 2) +
            Math.pow(e.clientX - t.clientX, 2) >
            4
        );
      }
      function ar(e) {
        if (!e) return !1;
        var t = e.split(":");
        return t.length > 1 && t[0].length > 0;
      }
      var ur = ["hover", "focus", "active", "visited"],
        sr = /[A-Z]/g,
        cr = /[-\s]+(.)?/g,
        lr = /:root(.*)\{.*/i,
        fr = /([^:]*):\s?(.*)/i;
      function pr(e) {
        var t = 0,
          n = 0,
          r = [];
        return (
          e.split("").forEach(function (o, i) {
            "{" === o && t++,
              "}" === o &&
                (1 === t && (r.push(e.substring(n, i + 1)), (n = i + 1)), t--);
          }),
          r
        );
      }
      function hr(e) {
        return "[object String]" === {}.toString.call(e);
      }
      function dr(e) {
        return e
          .replace(sr, function (e) {
            return "-" + e;
          })
          .toLowerCase();
      }
      function vr(e) {
        return e.replace(cr, function (e, t) {
          return t ? t.toUpperCase() : "";
        });
      }
      function yr(e) {
        var t = [];
        return (
          Object.keys(e).forEach(function (n) {
            t.push("  " + n + ": " + e[n] + ";");
          }),
          t.join("\n")
        );
      }
      function mr(e) {
        if (!e) return {};
        if (e.default) {
          var t = {};
          return (
            Object.keys(e).forEach(function (n) {
              t[n] = "extra" !== n ? mr(e[n]) : e[n];
            }),
            t
          );
        }
        var n = {};
        return (
          Object.keys(e).forEach(function (t) {
            n[vr(t)] = e[t];
          }),
          n
        );
      }
      function br(e) {
        if (!e) return {};
        if (e.default) {
          var t = {};
          return (
            Object.keys(e).forEach(function (n) {
              t[n] = "extra" !== n ? br(e[n]) : e[n];
            }),
            t
          );
        }
        var n = {};
        return (
          Object.keys(e).forEach(function (t) {
            n[dr(t)] = e[t];
          }),
          n
        );
      }
      function _r(e) {
        if (!e) return ":root {\n\n}";
        if (e.default) {
          var t = [];
          return (
            Object.keys(e).forEach(function (n) {
              if ("extra" !== n) {
                var r = ur.indexOf(n) > -1 ? ":" : "";
                t.push(
                  ":root" +
                    ("default" === n ? "" : "" + r + n) +
                    " {\n" +
                    yr(br(e[n])) +
                    "\n}\n"
                );
              } else Array.isArray(e.extra) && t.push(e.extra.join("\n"));
            }),
            t.join("\n")
          );
        }
        return ":root {\n" + yr(br(e)) + "\n}\n";
      }
      function gr(e) {
        if (!e) return {};
        var t = {},
          n;
        return (
          pr(e).forEach(function (e) {
            if (e.startsWith(":root")) {
              var n = /:root:?(.*)?{(.*)/gi.exec(
                e.replace(/[\r\n]+/gi, "").trim()
              );
              if (n) {
                var r;
                n[1] &&
                n[1].trim() &&
                Object(zt.some)(ur, function (e) {
                  return 0 === n[1].indexOf(e);
                })
                  ? (r = n[1].trim())
                  : n[1] && n[1].trim() && (r = n[1]);
                var o = {};
                n[2]
                  .split(";")
                  .reduce(function (e, t) {
                    return (
                      t.indexOf("base64") > -1
                        ? (e[e.length - 1] += ";" + t)
                        : e.push(t),
                      e
                    );
                  }, [])
                  .forEach(function (e) {
                    if (e && fr.test(e)) {
                      var t = e.match(fr),
                        n = t[1],
                        r = t[2];
                      n && r && (o[n.trim()] = r.trim());
                    }
                  }),
                  r || (r = "default"),
                  (t[r] = o);
              }
            } else (t.extra = t.extra || []), t.extra.push(e.trim());
          }),
          t
        );
      }
      function wr(e) {
        try {
          return hr(e)
            ? mr(gr(e).default)
            : e.default
            ? mr(br(e.default))
            : mr(br(e));
        } catch (e) {}
        return {};
      }
      var Or,
        Er = new (function e() {
          var t = this;
          (this.emitter = new Ut.a()),
            (this.executeTransaction = function (e, n) {
              void 0 === n && (n = $.REPAINT),
                t.emitter.emit("[" + n + "]startTransaction"),
                Object(a.o)(e),
                t.emitter.emit("[" + n + "]endTransaction");
            }),
            (this.onStartTransaction = function (e, n) {
              return (
                void 0 === n && (n = $.REPAINT),
                t.emitter.on("[" + n + "]startTransaction", e),
                function () {
                  t.emitter.off("[" + n + "]startTransaction", e);
                }
              );
            }),
            (this.onEndTransaction = function (e, n) {
              return (
                void 0 === n && (n = $.REPAINT),
                t.emitter.on("[" + n + "]endTransaction", e),
                function () {
                  t.emitter.off("[" + n + "]endTransaction", e);
                }
              );
            });
        })();
      function Sr() {
        var e,
          t = w.getRuntime(),
          n = t.PureComponent,
          r = t.createElement;
        return (
          ((e = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            var n;
            return (
              m()(t, e),
              (t.prototype.render = function e() {
                return r("div", this.props);
              }),
              t
            );
          })(n)).displayName = "Div"),
          (e.version = "0.0.0"),
          e
        );
      }
      var xr = n(10),
        Cr = n.n(xr),
        jr = n(149);
      function Ar() {
        var e,
          t = w.getRuntime(),
          n = t.PureComponent,
          r = t.createElement;
        return (
          ((e = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            var n;
            return (
              m()(t, e),
              (t.prototype.render = function e() {
                var t = this.props,
                  n = t.children,
                  o = t.cell,
                  i = t.title,
                  a = t.label,
                  u = t.text,
                  s = t.__componentName,
                  c = n;
                return (
                  o && "function" == typeof o && (c = o()),
                  r(
                    "div",
                    { className: "visual-dom" },
                    r("div", { className: "panel-container" }, [
                      r("span", { className: "title" }, i || a || u || s),
                      r("div", { className: "content" }, c),
                    ])
                  )
                );
              }),
              t
            );
          })(n)).displayName = "VisualDom"),
          (e.propTypes = {
            children: Cr.a.oneOfType([
              Cr.a.element,
              Cr.a.arrayOf(Cr.a.element),
            ]),
          }),
          (e.defaultProps = { children: null }),
          e
        );
      }
      var Pr = new nr({ level: "warn", bizName: "renderer" }),
        Tr,
        Rr,
        Nr;
      function Lr(e) {
        return e.type === Rr.literal;
      }
      function kr(e) {
        return e.type === Rr.argument;
      }
      function Mr(e) {
        return e.type === Rr.number;
      }
      function Ir(e) {
        return e.type === Rr.date;
      }
      function Br(e) {
        return e.type === Rr.time;
      }
      function Dr(e) {
        return e.type === Rr.select;
      }
      function Hr(e) {
        return e.type === Rr.plural;
      }
      function Ur(e) {
        return e.type === Rr.pound;
      }
      function Fr(e) {
        return e.type === Rr.tag;
      }
      function Vr(e) {
        return !(!e || "object" != typeof e || e.type !== Nr.number);
      }
      function Gr(e) {
        return !(!e || "object" != typeof e || e.type !== Nr.dateTime);
      }
      function zr(e) {
        return { type: Rr.literal, value: e };
      }
      function qr(e, t) {
        return { type: Rr.number, value: e, style: t };
      }
      !(function (e) {
        (e[(e.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] =
          "EXPECT_ARGUMENT_CLOSING_BRACE"),
          (e[(e.EMPTY_ARGUMENT = 2)] = "EMPTY_ARGUMENT"),
          (e[(e.MALFORMED_ARGUMENT = 3)] = "MALFORMED_ARGUMENT"),
          (e[(e.EXPECT_ARGUMENT_TYPE = 4)] = "EXPECT_ARGUMENT_TYPE"),
          (e[(e.INVALID_ARGUMENT_TYPE = 5)] = "INVALID_ARGUMENT_TYPE"),
          (e[(e.EXPECT_ARGUMENT_STYLE = 6)] = "EXPECT_ARGUMENT_STYLE"),
          (e[(e.INVALID_NUMBER_SKELETON = 7)] = "INVALID_NUMBER_SKELETON"),
          (e[(e.INVALID_DATE_TIME_SKELETON = 8)] =
            "INVALID_DATE_TIME_SKELETON"),
          (e[(e.EXPECT_NUMBER_SKELETON = 9)] = "EXPECT_NUMBER_SKELETON"),
          (e[(e.EXPECT_DATE_TIME_SKELETON = 10)] = "EXPECT_DATE_TIME_SKELETON"),
          (e[(e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] =
            "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"),
          (e[(e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] =
            "EXPECT_SELECT_ARGUMENT_OPTIONS"),
          (e[(e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] =
            "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"),
          (e[(e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
            "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"),
          (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] =
            "EXPECT_SELECT_ARGUMENT_SELECTOR"),
          (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] =
            "EXPECT_PLURAL_ARGUMENT_SELECTOR"),
          (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
            "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"),
          (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
            "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"),
          (e[(e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] =
            "INVALID_PLURAL_ARGUMENT_SELECTOR"),
          (e[(e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] =
            "DUPLICATE_PLURAL_ARGUMENT_SELECTOR"),
          (e[(e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] =
            "DUPLICATE_SELECT_ARGUMENT_SELECTOR"),
          (e[(e.MISSING_OTHER_CLAUSE = 22)] = "MISSING_OTHER_CLAUSE"),
          (e[(e.INVALID_TAG = 23)] = "INVALID_TAG"),
          (e[(e.INVALID_TAG_NAME = 25)] = "INVALID_TAG_NAME"),
          (e[(e.UNMATCHED_CLOSING_TAG = 26)] = "UNMATCHED_CLOSING_TAG"),
          (e[(e.UNCLOSED_TAG = 27)] = "UNCLOSED_TAG");
      })(Tr || (Tr = {})),
        (function (e) {
          (e[(e.literal = 0)] = "literal"),
            (e[(e.argument = 1)] = "argument"),
            (e[(e.number = 2)] = "number"),
            (e[(e.date = 3)] = "date"),
            (e[(e.time = 4)] = "time"),
            (e[(e.select = 5)] = "select"),
            (e[(e.plural = 6)] = "plural"),
            (e[(e.pound = 7)] = "pound"),
            (e[(e.tag = 8)] = "tag");
        })(Rr || (Rr = {})),
        (function (e) {
          (e[(e.number = 0)] = "number"), (e[(e.dateTime = 1)] = "dateTime");
        })(Nr || (Nr = {}));
      var Jr = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        $r = /[\t-\r \x85\u200E\u200F\u2028\u2029]/,
        Kr =
          /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
      function Wr(e) {
        var t = {};
        return (
          e.replace(Kr, function (e) {
            var n = e.length;
            switch (e[0]) {
              case "G":
                t.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
                break;
              case "y":
                t.year = 2 === n ? "2-digit" : "numeric";
                break;
              case "Y":
              case "u":
              case "U":
              case "r":
                throw new RangeError(
                  "`Y/u/U/r` (year) patterns are not supported, use `y` instead"
                );
              case "q":
              case "Q":
                throw new RangeError(
                  "`q/Q` (quarter) patterns are not supported"
                );
              case "M":
              case "L":
                t.month = ["numeric", "2-digit", "short", "long", "narrow"][
                  n - 1
                ];
                break;
              case "w":
              case "W":
                throw new RangeError("`w/W` (week) patterns are not supported");
              case "d":
                t.day = ["numeric", "2-digit"][n - 1];
                break;
              case "D":
              case "F":
              case "g":
                throw new RangeError(
                  "`D/F/g` (day) patterns are not supported, use `d` instead"
                );
              case "E":
                t.weekday = 4 === n ? "short" : 5 === n ? "narrow" : "short";
                break;
              case "e":
                if (n < 4)
                  throw new RangeError(
                    "`e..eee` (weekday) patterns are not supported"
                  );
                t.weekday = ["short", "long", "narrow", "short"][n - 4];
                break;
              case "c":
                if (n < 4)
                  throw new RangeError(
                    "`c..ccc` (weekday) patterns are not supported"
                  );
                t.weekday = ["short", "long", "narrow", "short"][n - 4];
                break;
              case "a":
                t.hour12 = !0;
                break;
              case "b":
              case "B":
                throw new RangeError(
                  "`b/B` (period) patterns are not supported, use `a` instead"
                );
              case "h":
                (t.hourCycle = "h12"), (t.hour = ["numeric", "2-digit"][n - 1]);
                break;
              case "H":
                (t.hourCycle = "h23"), (t.hour = ["numeric", "2-digit"][n - 1]);
                break;
              case "K":
                (t.hourCycle = "h11"), (t.hour = ["numeric", "2-digit"][n - 1]);
                break;
              case "k":
                (t.hourCycle = "h24"), (t.hour = ["numeric", "2-digit"][n - 1]);
                break;
              case "j":
              case "J":
              case "C":
                throw new RangeError(
                  "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead"
                );
              case "m":
                t.minute = ["numeric", "2-digit"][n - 1];
                break;
              case "s":
                t.second = ["numeric", "2-digit"][n - 1];
                break;
              case "S":
              case "A":
                throw new RangeError(
                  "`S/A` (second) patterns are not supported, use `s` instead"
                );
              case "z":
                t.timeZoneName = n < 4 ? "short" : "long";
                break;
              case "Z":
              case "O":
              case "v":
              case "V":
              case "X":
              case "x":
                throw new RangeError(
                  "`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead"
                );
            }
            return "";
          }),
          t
        );
      }
      var Xr = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
      function Yr(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (
          var t,
            n = [],
            r = 0,
            o = e.split(Xr).filter(function (e) {
              return e.length > 0;
            });
          r < o.length;
          r++
        ) {
          var i,
            a = o[r].split("/");
          if (0 === a.length) throw new Error("Invalid number skeleton");
          for (var u = a[0], s = a.slice(1), c = 0, l = s; c < l.length; c++) {
            var f;
            if (0 === l[c].length) throw new Error("Invalid number skeleton");
          }
          n.push({ stem: u, options: s });
        }
        return n;
      }
      function Zr(e) {
        return e.replace(/^(.*?)-/, "");
      }
      var Qr = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        eo = /^(@+)?(\+|#+)?[rs]?$/g,
        to = /(\*)(0+)|(#+)(0+)|(0+)/g,
        no = /^(0+)$/;
      function ro(e) {
        var t = {};
        return (
          "r" === e[e.length - 1]
            ? (t.roundingPriority = "morePrecision")
            : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"),
          e.replace(eo, function (e, n, r) {
            return (
              "string" != typeof r
                ? ((t.minimumSignificantDigits = n.length),
                  (t.maximumSignificantDigits = n.length))
                : "+" === r
                ? (t.minimumSignificantDigits = n.length)
                : "#" === n[0]
                ? (t.maximumSignificantDigits = n.length)
                : ((t.minimumSignificantDigits = n.length),
                  (t.maximumSignificantDigits =
                    n.length + ("string" == typeof r ? r.length : 0))),
              ""
            );
          }),
          t
        );
      }
      function oo(e) {
        switch (e) {
          case "sign-auto":
            return { signDisplay: "auto" };
          case "sign-accounting":
          case "()":
            return { currencySign: "accounting" };
          case "sign-always":
          case "+!":
            return { signDisplay: "always" };
          case "sign-accounting-always":
          case "()!":
            return { signDisplay: "always", currencySign: "accounting" };
          case "sign-except-zero":
          case "+?":
            return { signDisplay: "exceptZero" };
          case "sign-accounting-except-zero":
          case "()?":
            return { signDisplay: "exceptZero", currencySign: "accounting" };
          case "sign-never":
          case "+_":
            return { signDisplay: "never" };
        }
      }
      function io(e) {
        var t;
        if (
          ("E" === e[0] && "E" === e[1]
            ? ((t = { notation: "engineering" }), (e = e.slice(2)))
            : "E" === e[0] &&
              ((t = { notation: "scientific" }), (e = e.slice(1))),
          t)
        ) {
          var n = e.slice(0, 2);
          if (
            ("+!" === n
              ? ((t.signDisplay = "always"), (e = e.slice(2)))
              : "+?" === n &&
                ((t.signDisplay = "exceptZero"), (e = e.slice(2))),
            !no.test(e))
          )
            throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length;
        }
        return t;
      }
      function ao(e) {
        var t = {},
          n = oo(e);
        return n || t;
      }
      function uo(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
          var o = r[n];
          switch (o.stem) {
            case "percent":
            case "%":
              t.style = "percent";
              continue;
            case "%x100":
              (t.style = "percent"), (t.scale = 100);
              continue;
            case "currency":
              (t.style = "currency"), (t.currency = o.options[0]);
              continue;
            case "group-off":
            case ",_":
              t.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              t.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              (t.style = "unit"), (t.unit = Zr(o.options[0]));
              continue;
            case "compact-short":
            case "K":
              (t.notation = "compact"), (t.compactDisplay = "short");
              continue;
            case "compact-long":
            case "KK":
              (t.notation = "compact"), (t.compactDisplay = "long");
              continue;
            case "scientific":
              t = Object(u.__assign)(
                Object(u.__assign)(Object(u.__assign)({}, t), {
                  notation: "scientific",
                }),
                o.options.reduce(function (e, t) {
                  return Object(u.__assign)(Object(u.__assign)({}, e), ao(t));
                }, {})
              );
              continue;
            case "engineering":
              t = Object(u.__assign)(
                Object(u.__assign)(Object(u.__assign)({}, t), {
                  notation: "engineering",
                }),
                o.options.reduce(function (e, t) {
                  return Object(u.__assign)(Object(u.__assign)({}, e), ao(t));
                }, {})
              );
              continue;
            case "notation-simple":
              t.notation = "standard";
              continue;
            case "unit-width-narrow":
              (t.currencyDisplay = "narrowSymbol"), (t.unitDisplay = "narrow");
              continue;
            case "unit-width-short":
              (t.currencyDisplay = "code"), (t.unitDisplay = "short");
              continue;
            case "unit-width-full-name":
              (t.currencyDisplay = "name"), (t.unitDisplay = "long");
              continue;
            case "unit-width-iso-code":
              t.currencyDisplay = "symbol";
              continue;
            case "scale":
              t.scale = parseFloat(o.options[0]);
              continue;
            case "integer-width":
              if (o.options.length > 1)
                throw new RangeError(
                  "integer-width stems only accept a single optional option"
                );
              o.options[0].replace(to, function (e, n, r, o, i, a) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (o && i)
                    throw new Error(
                      "We currently do not support maximum integer digits"
                    );
                  if (a)
                    throw new Error(
                      "We currently do not support exact integer digits"
                    );
                }
                return "";
              });
              continue;
          }
          if (no.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Qr.test(o.stem)) {
            if (o.options.length > 1)
              throw new RangeError(
                "Fraction-precision stems only accept a single optional option"
              );
            o.stem.replace(Qr, function (e, n, r, o, i, a) {
              return (
                "*" === r
                  ? (t.minimumFractionDigits = n.length)
                  : o && "#" === o[0]
                  ? (t.maximumFractionDigits = o.length)
                  : i && a
                  ? ((t.minimumFractionDigits = i.length),
                    (t.maximumFractionDigits = i.length + a.length))
                  : ((t.minimumFractionDigits = n.length),
                    (t.maximumFractionDigits = n.length)),
                ""
              );
            });
            var i = o.options[0];
            "w" === i
              ? (t = Object(u.__assign)(Object(u.__assign)({}, t), {
                  trailingZeroDisplay: "stripIfInteger",
                }))
              : i && (t = Object(u.__assign)(Object(u.__assign)({}, t), ro(i)));
          } else if (eo.test(o.stem))
            t = Object(u.__assign)(Object(u.__assign)({}, t), ro(o.stem));
          else {
            var a = oo(o.stem);
            a && (t = Object(u.__assign)(Object(u.__assign)({}, t), a));
            var s = io(o.stem);
            s && (t = Object(u.__assign)(Object(u.__assign)({}, t), s));
          }
        }
        return t;
      }
      var so = {
          AX: ["H"],
          BQ: ["H"],
          CP: ["H"],
          CZ: ["H"],
          DK: ["H"],
          FI: ["H"],
          ID: ["H"],
          IS: ["H"],
          ML: ["H"],
          NE: ["H"],
          RU: ["H"],
          SE: ["H"],
          SJ: ["H"],
          SK: ["H"],
          AS: ["h", "H"],
          BT: ["h", "H"],
          DJ: ["h", "H"],
          ER: ["h", "H"],
          GH: ["h", "H"],
          IN: ["h", "H"],
          LS: ["h", "H"],
          PG: ["h", "H"],
          PW: ["h", "H"],
          SO: ["h", "H"],
          TO: ["h", "H"],
          VU: ["h", "H"],
          WS: ["h", "H"],
          "001": ["H", "h"],
          AL: ["h", "H", "hB"],
          TD: ["h", "H", "hB"],
          "ca-ES": ["H", "h", "hB"],
          CF: ["H", "h", "hB"],
          CM: ["H", "h", "hB"],
          "fr-CA": ["H", "h", "hB"],
          "gl-ES": ["H", "h", "hB"],
          "it-CH": ["H", "h", "hB"],
          "it-IT": ["H", "h", "hB"],
          LU: ["H", "h", "hB"],
          NP: ["H", "h", "hB"],
          PF: ["H", "h", "hB"],
          SC: ["H", "h", "hB"],
          SM: ["H", "h", "hB"],
          SN: ["H", "h", "hB"],
          TF: ["H", "h", "hB"],
          VA: ["H", "h", "hB"],
          CY: ["h", "H", "hb", "hB"],
          GR: ["h", "H", "hb", "hB"],
          CO: ["h", "H", "hB", "hb"],
          DO: ["h", "H", "hB", "hb"],
          KP: ["h", "H", "hB", "hb"],
          KR: ["h", "H", "hB", "hb"],
          NA: ["h", "H", "hB", "hb"],
          PA: ["h", "H", "hB", "hb"],
          PR: ["h", "H", "hB", "hb"],
          VE: ["h", "H", "hB", "hb"],
          AC: ["H", "h", "hb", "hB"],
          AI: ["H", "h", "hb", "hB"],
          BW: ["H", "h", "hb", "hB"],
          BZ: ["H", "h", "hb", "hB"],
          CC: ["H", "h", "hb", "hB"],
          CK: ["H", "h", "hb", "hB"],
          CX: ["H", "h", "hb", "hB"],
          DG: ["H", "h", "hb", "hB"],
          FK: ["H", "h", "hb", "hB"],
          GB: ["H", "h", "hb", "hB"],
          GG: ["H", "h", "hb", "hB"],
          GI: ["H", "h", "hb", "hB"],
          IE: ["H", "h", "hb", "hB"],
          IM: ["H", "h", "hb", "hB"],
          IO: ["H", "h", "hb", "hB"],
          JE: ["H", "h", "hb", "hB"],
          LT: ["H", "h", "hb", "hB"],
          MK: ["H", "h", "hb", "hB"],
          MN: ["H", "h", "hb", "hB"],
          MS: ["H", "h", "hb", "hB"],
          NF: ["H", "h", "hb", "hB"],
          NG: ["H", "h", "hb", "hB"],
          NR: ["H", "h", "hb", "hB"],
          NU: ["H", "h", "hb", "hB"],
          PN: ["H", "h", "hb", "hB"],
          SH: ["H", "h", "hb", "hB"],
          SX: ["H", "h", "hb", "hB"],
          TA: ["H", "h", "hb", "hB"],
          ZA: ["H", "h", "hb", "hB"],
          "af-ZA": ["H", "h", "hB", "hb"],
          AR: ["H", "h", "hB", "hb"],
          CL: ["H", "h", "hB", "hb"],
          CR: ["H", "h", "hB", "hb"],
          CU: ["H", "h", "hB", "hb"],
          EA: ["H", "h", "hB", "hb"],
          "es-BO": ["H", "h", "hB", "hb"],
          "es-BR": ["H", "h", "hB", "hb"],
          "es-EC": ["H", "h", "hB", "hb"],
          "es-ES": ["H", "h", "hB", "hb"],
          "es-GQ": ["H", "h", "hB", "hb"],
          "es-PE": ["H", "h", "hB", "hb"],
          GT: ["H", "h", "hB", "hb"],
          HN: ["H", "h", "hB", "hb"],
          IC: ["H", "h", "hB", "hb"],
          KG: ["H", "h", "hB", "hb"],
          KM: ["H", "h", "hB", "hb"],
          LK: ["H", "h", "hB", "hb"],
          MA: ["H", "h", "hB", "hb"],
          MX: ["H", "h", "hB", "hb"],
          NI: ["H", "h", "hB", "hb"],
          PY: ["H", "h", "hB", "hb"],
          SV: ["H", "h", "hB", "hb"],
          UY: ["H", "h", "hB", "hb"],
          JP: ["H", "h", "K"],
          AD: ["H", "hB"],
          AM: ["H", "hB"],
          AO: ["H", "hB"],
          AT: ["H", "hB"],
          AW: ["H", "hB"],
          BE: ["H", "hB"],
          BF: ["H", "hB"],
          BJ: ["H", "hB"],
          BL: ["H", "hB"],
          BR: ["H", "hB"],
          CG: ["H", "hB"],
          CI: ["H", "hB"],
          CV: ["H", "hB"],
          DE: ["H", "hB"],
          EE: ["H", "hB"],
          FR: ["H", "hB"],
          GA: ["H", "hB"],
          GF: ["H", "hB"],
          GN: ["H", "hB"],
          GP: ["H", "hB"],
          GW: ["H", "hB"],
          HR: ["H", "hB"],
          IL: ["H", "hB"],
          IT: ["H", "hB"],
          KZ: ["H", "hB"],
          MC: ["H", "hB"],
          MD: ["H", "hB"],
          MF: ["H", "hB"],
          MQ: ["H", "hB"],
          MZ: ["H", "hB"],
          NC: ["H", "hB"],
          NL: ["H", "hB"],
          PM: ["H", "hB"],
          PT: ["H", "hB"],
          RE: ["H", "hB"],
          RO: ["H", "hB"],
          SI: ["H", "hB"],
          SR: ["H", "hB"],
          ST: ["H", "hB"],
          TG: ["H", "hB"],
          TR: ["H", "hB"],
          WF: ["H", "hB"],
          YT: ["H", "hB"],
          BD: ["h", "hB", "H"],
          PK: ["h", "hB", "H"],
          AZ: ["H", "hB", "h"],
          BA: ["H", "hB", "h"],
          BG: ["H", "hB", "h"],
          CH: ["H", "hB", "h"],
          GE: ["H", "hB", "h"],
          LI: ["H", "hB", "h"],
          ME: ["H", "hB", "h"],
          RS: ["H", "hB", "h"],
          UA: ["H", "hB", "h"],
          UZ: ["H", "hB", "h"],
          XK: ["H", "hB", "h"],
          AG: ["h", "hb", "H", "hB"],
          AU: ["h", "hb", "H", "hB"],
          BB: ["h", "hb", "H", "hB"],
          BM: ["h", "hb", "H", "hB"],
          BS: ["h", "hb", "H", "hB"],
          CA: ["h", "hb", "H", "hB"],
          DM: ["h", "hb", "H", "hB"],
          "en-001": ["h", "hb", "H", "hB"],
          FJ: ["h", "hb", "H", "hB"],
          FM: ["h", "hb", "H", "hB"],
          GD: ["h", "hb", "H", "hB"],
          GM: ["h", "hb", "H", "hB"],
          GU: ["h", "hb", "H", "hB"],
          GY: ["h", "hb", "H", "hB"],
          JM: ["h", "hb", "H", "hB"],
          KI: ["h", "hb", "H", "hB"],
          KN: ["h", "hb", "H", "hB"],
          KY: ["h", "hb", "H", "hB"],
          LC: ["h", "hb", "H", "hB"],
          LR: ["h", "hb", "H", "hB"],
          MH: ["h", "hb", "H", "hB"],
          MP: ["h", "hb", "H", "hB"],
          MW: ["h", "hb", "H", "hB"],
          NZ: ["h", "hb", "H", "hB"],
          SB: ["h", "hb", "H", "hB"],
          SG: ["h", "hb", "H", "hB"],
          SL: ["h", "hb", "H", "hB"],
          SS: ["h", "hb", "H", "hB"],
          SZ: ["h", "hb", "H", "hB"],
          TC: ["h", "hb", "H", "hB"],
          TT: ["h", "hb", "H", "hB"],
          UM: ["h", "hb", "H", "hB"],
          US: ["h", "hb", "H", "hB"],
          VC: ["h", "hb", "H", "hB"],
          VG: ["h", "hb", "H", "hB"],
          VI: ["h", "hb", "H", "hB"],
          ZM: ["h", "hb", "H", "hB"],
          BO: ["H", "hB", "h", "hb"],
          EC: ["H", "hB", "h", "hb"],
          ES: ["H", "hB", "h", "hb"],
          GQ: ["H", "hB", "h", "hb"],
          PE: ["H", "hB", "h", "hb"],
          AE: ["h", "hB", "hb", "H"],
          "ar-001": ["h", "hB", "hb", "H"],
          BH: ["h", "hB", "hb", "H"],
          DZ: ["h", "hB", "hb", "H"],
          EG: ["h", "hB", "hb", "H"],
          EH: ["h", "hB", "hb", "H"],
          HK: ["h", "hB", "hb", "H"],
          IQ: ["h", "hB", "hb", "H"],
          JO: ["h", "hB", "hb", "H"],
          KW: ["h", "hB", "hb", "H"],
          LB: ["h", "hB", "hb", "H"],
          LY: ["h", "hB", "hb", "H"],
          MO: ["h", "hB", "hb", "H"],
          MR: ["h", "hB", "hb", "H"],
          OM: ["h", "hB", "hb", "H"],
          PH: ["h", "hB", "hb", "H"],
          PS: ["h", "hB", "hb", "H"],
          QA: ["h", "hB", "hb", "H"],
          SA: ["h", "hB", "hb", "H"],
          SD: ["h", "hB", "hb", "H"],
          SY: ["h", "hB", "hb", "H"],
          TN: ["h", "hB", "hb", "H"],
          YE: ["h", "hB", "hb", "H"],
          AF: ["H", "hb", "hB", "h"],
          LA: ["H", "hb", "hB", "h"],
          CN: ["H", "hB", "hb", "h"],
          LV: ["H", "hB", "hb", "h"],
          TL: ["H", "hB", "hb", "h"],
          "zu-ZA": ["H", "hB", "hb", "h"],
          CD: ["hB", "H"],
          IR: ["hB", "H"],
          "hi-IN": ["hB", "h", "H"],
          "kn-IN": ["hB", "h", "H"],
          "ml-IN": ["hB", "h", "H"],
          "te-IN": ["hB", "h", "H"],
          KH: ["hB", "h", "H", "hb"],
          "ta-IN": ["hB", "h", "hb", "H"],
          BN: ["hb", "hB", "h", "H"],
          MY: ["hb", "hB", "h", "H"],
          ET: ["hB", "hb", "h", "H"],
          "gu-IN": ["hB", "hb", "h", "H"],
          "mr-IN": ["hB", "hb", "h", "H"],
          "pa-IN": ["hB", "hb", "h", "H"],
          TW: ["hB", "hb", "h", "H"],
          KE: ["hB", "hb", "H", "h"],
          MM: ["hB", "hb", "H", "h"],
          TZ: ["hB", "hb", "H", "h"],
          UG: ["hB", "hb", "H", "h"],
        },
        co;
      function lo(e, t) {
        for (var n = "", r = 0; r < e.length; r++) {
          var o = e.charAt(r);
          if ("j" === o) {
            for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o; )
              i++, r++;
            var a = 1 + (1 & i),
              u = i < 2 ? 1 : 3 + (i >> 1),
              s = "a",
              c = fo(t);
            for (("H" != c && "k" != c) || (u = 0); u-- > 0; ) n += "a";
            for (; a-- > 0; ) n = c + n;
          } else n += "J" === o ? "H" : o;
        }
        return n;
      }
      function fo(e) {
        var t = e.hourCycle;
        if (
          (void 0 === t &&
            e.hourCycles &&
            e.hourCycles.length &&
            (t = e.hourCycles[0]),
          t)
        )
          switch (t) {
            case "h24":
              return "k";
            case "h23":
              return "H";
            case "h12":
              return "h";
            case "h11":
              return "K";
            default:
              throw new Error("Invalid hourCycle");
          }
        var n = e.language,
          r,
          o;
        return (
          "root" !== n && (r = e.maximize().region),
          (so[r || ""] ||
            so[n || ""] ||
            so["".concat(n, "-001")] ||
            so["001"])[0]
        );
      }
      var po = new RegExp("^".concat(Jr.source, "*")),
        ho = new RegExp("".concat(Jr.source, "*$"));
      function vo(e, t) {
        return { start: e, end: t };
      }
      var yo = !!String.prototype.startsWith,
        mo = !!String.fromCodePoint,
        bo = !!Object.fromEntries,
        _o = !!String.prototype.codePointAt,
        go = !!String.prototype.trimStart,
        wo = !!String.prototype.trimEnd,
        Oo,
        Eo = !!Number.isSafeInteger
          ? Number.isSafeInteger
          : function (e) {
              return (
                "number" == typeof e &&
                isFinite(e) &&
                Math.floor(e) === e &&
                Math.abs(e) <= 9007199254740991
              );
            },
        So = !0;
      try {
        var xo;
        So =
          "a" ===
          (null ===
            (co = Lo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec(
              "a"
            )) || void 0 === co
            ? void 0
            : co[0]);
      } catch (e) {
        So = !1;
      }
      var Co = yo
          ? function e(t, n, r) {
              return t.startsWith(n, r);
            }
          : function e(t, n, r) {
              return t.slice(r, r + n.length) === n;
            },
        jo = mo
          ? String.fromCodePoint
          : function e() {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              for (var r = "", o = t.length, i = 0, a; o > i; ) {
                if ((a = t[i++]) > 1114111)
                  throw RangeError(a + " is not a valid code point");
                r +=
                  a < 65536
                    ? String.fromCharCode(a)
                    : String.fromCharCode(
                        55296 + ((a -= 65536) >> 10),
                        (a % 1024) + 56320
                      );
              }
              return r;
            },
        Ao = bo
          ? Object.fromEntries
          : function e(t) {
              for (var n = {}, r = 0, o = t; r < o.length; r++) {
                var i = o[r],
                  a = i[0],
                  u = i[1];
                n[a] = u;
              }
              return n;
            },
        Po = _o
          ? function e(t, n) {
              return t.codePointAt(n);
            }
          : function e(t, n) {
              var r = t.length;
              if (!(n < 0 || n >= r)) {
                var o = t.charCodeAt(n),
                  i;
                return o < 55296 ||
                  o > 56319 ||
                  n + 1 === r ||
                  (i = t.charCodeAt(n + 1)) < 56320 ||
                  i > 57343
                  ? o
                  : i - 56320 + ((o - 55296) << 10) + 65536;
              }
            },
        To = go
          ? function e(t) {
              return t.trimStart();
            }
          : function e(t) {
              return t.replace(po, "");
            },
        Ro = wo
          ? function e(t) {
              return t.trimEnd();
            }
          : function e(t) {
              return t.replace(ho, "");
            },
        No;
      function Lo(e, t) {
        return new RegExp(e, t);
      }
      if (So) {
        var ko = Lo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        No = function e(t, n) {
          var r, o;
          return (
            (ko.lastIndex = n),
            null !== (r = ko.exec(t)[1]) && void 0 !== r ? r : ""
          );
        };
      } else
        No = function e(t, n) {
          for (var r = []; ; ) {
            var o = Po(t, n);
            if (void 0 === o || Ho(o) || Uo(o)) break;
            r.push(o), (n += o >= 65536 ? 2 : 1);
          }
          return jo.apply(void 0, r);
        };
      var Mo = (function () {
        function e(e, t) {
          void 0 === t && (t = {}),
            (this.message = e),
            (this.position = { offset: 0, line: 1, column: 1 }),
            (this.ignoreTag = !!t.ignoreTag),
            (this.locale = t.locale),
            (this.requiresOtherClause = !!t.requiresOtherClause),
            (this.shouldParseSkeletons = !!t.shouldParseSkeletons);
        }
        return (
          (e.prototype.parse = function () {
            if (0 !== this.offset())
              throw Error("parser can only be used once");
            return this.parseMessage(0, "", !1);
          }),
          (e.prototype.parseMessage = function (e, t, n) {
            for (var r = []; !this.isEOF(); ) {
              var o = this.char();
              if (123 === o) {
                var i;
                if ((i = this.parseArgument(e, n)).err) return i;
                r.push(i.val);
              } else {
                if (125 === o && e > 0) break;
                if (35 !== o || ("plural" !== t && "selectordinal" !== t)) {
                  if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                    if (n) break;
                    return this.error(
                      Tr.UNMATCHED_CLOSING_TAG,
                      vo(this.clonePosition(), this.clonePosition())
                    );
                  }
                  if (60 === o && !this.ignoreTag && Io(this.peek() || 0)) {
                    var i;
                    if ((i = this.parseTag(e, t)).err) return i;
                    r.push(i.val);
                  } else {
                    var i;
                    if ((i = this.parseLiteral(e, t)).err) return i;
                    r.push(i.val);
                  }
                } else {
                  var a = this.clonePosition();
                  this.bump(),
                    r.push({
                      type: Rr.pound,
                      location: vo(a, this.clonePosition()),
                    });
                }
              }
            }
            return { val: r, err: null };
          }),
          (e.prototype.parseTag = function (e, t) {
            var n = this.clonePosition();
            this.bump();
            var r = this.parseTagName();
            if ((this.bumpSpace(), this.bumpIf("/>")))
              return {
                val: {
                  type: Rr.literal,
                  value: "<".concat(r, "/>"),
                  location: vo(n, this.clonePosition()),
                },
                err: null,
              };
            if (this.bumpIf(">")) {
              var o = this.parseMessage(e + 1, t, !0);
              if (o.err) return o;
              var i = o.val,
                a = this.clonePosition();
              if (this.bumpIf("</")) {
                if (this.isEOF() || !Io(this.char()))
                  return this.error(
                    Tr.INVALID_TAG,
                    vo(a, this.clonePosition())
                  );
                var u = this.clonePosition(),
                  s;
                return r !== this.parseTagName()
                  ? this.error(
                      Tr.UNMATCHED_CLOSING_TAG,
                      vo(u, this.clonePosition())
                    )
                  : (this.bumpSpace(),
                    this.bumpIf(">")
                      ? {
                          val: {
                            type: Rr.tag,
                            value: r,
                            children: i,
                            location: vo(n, this.clonePosition()),
                          },
                          err: null,
                        }
                      : this.error(
                          Tr.INVALID_TAG,
                          vo(a, this.clonePosition())
                        ));
              }
              return this.error(Tr.UNCLOSED_TAG, vo(n, this.clonePosition()));
            }
            return this.error(Tr.INVALID_TAG, vo(n, this.clonePosition()));
          }),
          (e.prototype.parseTagName = function () {
            var e = this.offset();
            for (this.bump(); !this.isEOF() && Do(this.char()); ) this.bump();
            return this.message.slice(e, this.offset());
          }),
          (e.prototype.parseLiteral = function (e, t) {
            for (var n = this.clonePosition(), r = ""; ; ) {
              var o = this.tryParseQuote(t);
              if (o) r += o;
              else {
                var i = this.tryParseUnquoted(e, t);
                if (i) r += i;
                else {
                  var a = this.tryParseLeftAngleBracket();
                  if (!a) break;
                  r += a;
                }
              }
            }
            var u = vo(n, this.clonePosition());
            return {
              val: { type: Rr.literal, value: r, location: u },
              err: null,
            };
          }),
          (e.prototype.tryParseLeftAngleBracket = function () {
            return this.isEOF() ||
              60 !== this.char() ||
              (!this.ignoreTag && Bo(this.peek() || 0))
              ? null
              : (this.bump(), "<");
          }),
          (e.prototype.tryParseQuote = function (e) {
            if (this.isEOF() || 39 !== this.char()) return null;
            switch (this.peek()) {
              case 39:
                return this.bump(), this.bump(), "'";
              case 123:
              case 60:
              case 62:
              case 125:
                break;
              case 35:
                if ("plural" === e || "selectordinal" === e) break;
                return null;
              default:
                return null;
            }
            this.bump();
            var t = [this.char()];
            for (this.bump(); !this.isEOF(); ) {
              var n = this.char();
              if (39 === n) {
                if (39 !== this.peek()) {
                  this.bump();
                  break;
                }
                t.push(39), this.bump();
              } else t.push(n);
              this.bump();
            }
            return jo.apply(void 0, t);
          }),
          (e.prototype.tryParseUnquoted = function (e, t) {
            if (this.isEOF()) return null;
            var n = this.char();
            return 60 === n ||
              123 === n ||
              (35 === n && ("plural" === t || "selectordinal" === t)) ||
              (125 === n && e > 0)
              ? null
              : (this.bump(), jo(n));
          }),
          (e.prototype.parseArgument = function (e, t) {
            var n = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF()))
              return this.error(
                Tr.EXPECT_ARGUMENT_CLOSING_BRACE,
                vo(n, this.clonePosition())
              );
            if (125 === this.char())
              return (
                this.bump(),
                this.error(Tr.EMPTY_ARGUMENT, vo(n, this.clonePosition()))
              );
            var r = this.parseIdentifierIfPossible().value;
            if (!r)
              return this.error(
                Tr.MALFORMED_ARGUMENT,
                vo(n, this.clonePosition())
              );
            if ((this.bumpSpace(), this.isEOF()))
              return this.error(
                Tr.EXPECT_ARGUMENT_CLOSING_BRACE,
                vo(n, this.clonePosition())
              );
            switch (this.char()) {
              case 125:
                return (
                  this.bump(),
                  {
                    val: {
                      type: Rr.argument,
                      value: r,
                      location: vo(n, this.clonePosition()),
                    },
                    err: null,
                  }
                );
              case 44:
                return (
                  this.bump(),
                  this.bumpSpace(),
                  this.isEOF()
                    ? this.error(
                        Tr.EXPECT_ARGUMENT_CLOSING_BRACE,
                        vo(n, this.clonePosition())
                      )
                    : this.parseArgumentOptions(e, t, r, n)
                );
              default:
                return this.error(
                  Tr.MALFORMED_ARGUMENT,
                  vo(n, this.clonePosition())
                );
            }
          }),
          (e.prototype.parseIdentifierIfPossible = function () {
            var e = this.clonePosition(),
              t = this.offset(),
              n = No(this.message, t),
              r = t + n.length,
              o,
              i;
            return (
              this.bumpTo(r),
              { value: n, location: vo(e, this.clonePosition()) }
            );
          }),
          (e.prototype.parseArgumentOptions = function (e, t, n, r) {
            var o,
              i = this.clonePosition(),
              a = this.parseIdentifierIfPossible().value,
              s = this.clonePosition();
            switch (a) {
              case "":
                return this.error(Tr.EXPECT_ARGUMENT_TYPE, vo(i, s));
              case "number":
              case "date":
              case "time":
                this.bumpSpace();
                var c = null,
                  l;
                if (this.bumpIf(",")) {
                  this.bumpSpace();
                  var f = this.clonePosition(),
                    p,
                    h,
                    d;
                  if ((p = this.parseSimpleArgStyleIfPossible()).err) return p;
                  if (0 === (h = Ro(p.val)).length)
                    return this.error(
                      Tr.EXPECT_ARGUMENT_STYLE,
                      vo(this.clonePosition(), this.clonePosition())
                    );
                  c = { style: h, styleLocation: vo(f, this.clonePosition()) };
                }
                if ((l = this.tryParseArgumentClose(r)).err) return l;
                var v = vo(r, this.clonePosition());
                if (c && Co(null == c ? void 0 : c.style, "::", 0)) {
                  var y = To(c.style.slice(2)),
                    p;
                  if ("number" === a)
                    return (p = this.parseNumberSkeletonFromString(
                      y,
                      c.styleLocation
                    )).err
                      ? p
                      : {
                          val: {
                            type: Rr.number,
                            value: n,
                            location: v,
                            style: p.val,
                          },
                          err: null,
                        };
                  if (0 === y.length)
                    return this.error(Tr.EXPECT_DATE_TIME_SKELETON, v);
                  var m = y;
                  this.locale && (m = lo(y, this.locale));
                  var h = {
                      type: Nr.dateTime,
                      pattern: m,
                      location: c.styleLocation,
                      parsedOptions: this.shouldParseSkeletons ? Wr(m) : {},
                    },
                    b;
                  return {
                    val: {
                      type: "date" === a ? Rr.date : Rr.time,
                      value: n,
                      location: v,
                      style: h,
                    },
                    err: null,
                  };
                }
                return {
                  val: {
                    type:
                      "number" === a
                        ? Rr.number
                        : "date" === a
                        ? Rr.date
                        : Rr.time,
                    value: n,
                    location: v,
                    style:
                      null !== (o = null == c ? void 0 : c.style) &&
                      void 0 !== o
                        ? o
                        : null,
                  },
                  err: null,
                };
              case "plural":
              case "selectordinal":
              case "select":
                var _ = this.clonePosition();
                if ((this.bumpSpace(), !this.bumpIf(",")))
                  return this.error(
                    Tr.EXPECT_SELECT_ARGUMENT_OPTIONS,
                    vo(_, Object(u.__assign)({}, _))
                  );
                this.bumpSpace();
                var g = this.parseIdentifierIfPossible(),
                  w = 0;
                if ("select" !== a && "offset" === g.value) {
                  if (!this.bumpIf(":"))
                    return this.error(
                      Tr.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      vo(this.clonePosition(), this.clonePosition())
                    );
                  var p;
                  if (
                    (this.bumpSpace(),
                    (p = this.tryParseDecimalInteger(
                      Tr.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      Tr.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE
                    )).err)
                  )
                    return p;
                  this.bumpSpace(),
                    (g = this.parseIdentifierIfPossible()),
                    (w = p.val);
                }
                var O = this.tryParsePluralOrSelectOptions(e, a, t, g),
                  l;
                if (O.err) return O;
                if ((l = this.tryParseArgumentClose(r)).err) return l;
                var E = vo(r, this.clonePosition());
                return "select" === a
                  ? {
                      val: {
                        type: Rr.select,
                        value: n,
                        options: Ao(O.val),
                        location: E,
                      },
                      err: null,
                    }
                  : {
                      val: {
                        type: Rr.plural,
                        value: n,
                        options: Ao(O.val),
                        offset: w,
                        pluralType: "plural" === a ? "cardinal" : "ordinal",
                        location: E,
                      },
                      err: null,
                    };
              default:
                return this.error(Tr.INVALID_ARGUMENT_TYPE, vo(i, s));
            }
          }),
          (e.prototype.tryParseArgumentClose = function (e) {
            return this.isEOF() || 125 !== this.char()
              ? this.error(
                  Tr.EXPECT_ARGUMENT_CLOSING_BRACE,
                  vo(e, this.clonePosition())
                )
              : (this.bump(), { val: !0, err: null });
          }),
          (e.prototype.parseSimpleArgStyleIfPossible = function () {
            for (var e = 0, t = this.clonePosition(); !this.isEOF(); ) {
              var n;
              switch (this.char()) {
                case 39:
                  this.bump();
                  var r = this.clonePosition();
                  if (!this.bumpUntil("'"))
                    return this.error(
                      Tr.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                      vo(r, this.clonePosition())
                    );
                  this.bump();
                  break;
                case 123:
                  (e += 1), this.bump();
                  break;
                case 125:
                  if (!(e > 0))
                    return {
                      val: this.message.slice(t.offset, this.offset()),
                      err: null,
                    };
                  e -= 1;
                  break;
                default:
                  this.bump();
              }
            }
            return {
              val: this.message.slice(t.offset, this.offset()),
              err: null,
            };
          }),
          (e.prototype.parseNumberSkeletonFromString = function (e, t) {
            var n = [];
            try {
              n = Yr(e);
            } catch (e) {
              return this.error(Tr.INVALID_NUMBER_SKELETON, t);
            }
            return {
              val: {
                type: Nr.number,
                tokens: n,
                location: t,
                parsedOptions: this.shouldParseSkeletons ? uo(n) : {},
              },
              err: null,
            };
          }),
          (e.prototype.tryParsePluralOrSelectOptions = function (e, t, n, r) {
            for (
              var o, i = !1, a = [], u = new Set(), s = r.value, c = r.location;
              ;

            ) {
              if (0 === s.length) {
                var l = this.clonePosition();
                if ("select" === t || !this.bumpIf("=")) break;
                var f = this.tryParseDecimalInteger(
                  Tr.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  Tr.INVALID_PLURAL_ARGUMENT_SELECTOR
                );
                if (f.err) return f;
                (c = vo(l, this.clonePosition())),
                  (s = this.message.slice(l.offset, this.offset()));
              }
              if (u.has(s))
                return this.error(
                  "select" === t
                    ? Tr.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : Tr.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                  c
                );
              "other" === s && (i = !0), this.bumpSpace();
              var p = this.clonePosition();
              if (!this.bumpIf("{"))
                return this.error(
                  "select" === t
                    ? Tr.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : Tr.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                  vo(this.clonePosition(), this.clonePosition())
                );
              var h = this.parseMessage(e + 1, t, n);
              if (h.err) return h;
              var d = this.tryParseArgumentClose(p);
              if (d.err) return d;
              a.push([
                s,
                { value: h.val, location: vo(p, this.clonePosition()) },
              ]),
                u.add(s),
                this.bumpSpace(),
                (s = (o = this.parseIdentifierIfPossible()).value),
                (c = o.location);
            }
            return 0 === a.length
              ? this.error(
                  "select" === t
                    ? Tr.EXPECT_SELECT_ARGUMENT_SELECTOR
                    : Tr.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  vo(this.clonePosition(), this.clonePosition())
                )
              : this.requiresOtherClause && !i
              ? this.error(
                  Tr.MISSING_OTHER_CLAUSE,
                  vo(this.clonePosition(), this.clonePosition())
                )
              : { val: a, err: null };
          }),
          (e.prototype.tryParseDecimalInteger = function (e, t) {
            var n = 1,
              r = this.clonePosition();
            this.bumpIf("+") || (this.bumpIf("-") && (n = -1));
            for (var o = !1, i = 0; !this.isEOF(); ) {
              var a = this.char();
              if (!(a >= 48 && a <= 57)) break;
              (o = !0), (i = 10 * i + (a - 48)), this.bump();
            }
            var u = vo(r, this.clonePosition());
            return o
              ? Eo((i *= n))
                ? { val: i, err: null }
                : this.error(t, u)
              : this.error(e, u);
          }),
          (e.prototype.offset = function () {
            return this.position.offset;
          }),
          (e.prototype.isEOF = function () {
            return this.offset() === this.message.length;
          }),
          (e.prototype.clonePosition = function () {
            return {
              offset: this.position.offset,
              line: this.position.line,
              column: this.position.column,
            };
          }),
          (e.prototype.char = function () {
            var e = this.position.offset;
            if (e >= this.message.length) throw Error("out of bound");
            var t = Po(this.message, e);
            if (void 0 === t)
              throw Error(
                "Offset ".concat(e, " is at invalid UTF-16 code unit boundary")
              );
            return t;
          }),
          (e.prototype.error = function (e, t) {
            return {
              val: null,
              err: { kind: e, message: this.message, location: t },
            };
          }),
          (e.prototype.bump = function () {
            if (!this.isEOF()) {
              var e = this.char();
              10 === e
                ? ((this.position.line += 1),
                  (this.position.column = 1),
                  (this.position.offset += 1))
                : ((this.position.column += 1),
                  (this.position.offset += e < 65536 ? 1 : 2));
            }
          }),
          (e.prototype.bumpIf = function (e) {
            if (Co(this.message, e, this.offset())) {
              for (var t = 0; t < e.length; t++) this.bump();
              return !0;
            }
            return !1;
          }),
          (e.prototype.bumpUntil = function (e) {
            var t = this.offset(),
              n = this.message.indexOf(e, t);
            return n >= 0
              ? (this.bumpTo(n), !0)
              : (this.bumpTo(this.message.length), !1);
          }),
          (e.prototype.bumpTo = function (e) {
            if (this.offset() > e)
              throw Error(
                "targetOffset "
                  .concat(
                    e,
                    " must be greater than or equal to the current offset "
                  )
                  .concat(this.offset())
              );
            for (e = Math.min(e, this.message.length); ; ) {
              var t = this.offset();
              if (t === e) break;
              if (t > e)
                throw Error(
                  "targetOffset ".concat(
                    e,
                    " is at invalid UTF-16 code unit boundary"
                  )
                );
              if ((this.bump(), this.isEOF())) break;
            }
          }),
          (e.prototype.bumpSpace = function () {
            for (; !this.isEOF() && Ho(this.char()); ) this.bump();
          }),
          (e.prototype.peek = function () {
            if (this.isEOF()) return null;
            var e = this.char(),
              t = this.offset(),
              n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
            return null != n ? n : null;
          }),
          e
        );
      })();
      function Io(e) {
        return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
      }
      function Bo(e) {
        return Io(e) || 47 === e;
      }
      function Do(e) {
        return (
          45 === e ||
          46 === e ||
          (e >= 48 && e <= 57) ||
          95 === e ||
          (e >= 97 && e <= 122) ||
          (e >= 65 && e <= 90) ||
          183 == e ||
          (e >= 192 && e <= 214) ||
          (e >= 216 && e <= 246) ||
          (e >= 248 && e <= 893) ||
          (e >= 895 && e <= 8191) ||
          (e >= 8204 && e <= 8205) ||
          (e >= 8255 && e <= 8256) ||
          (e >= 8304 && e <= 8591) ||
          (e >= 11264 && e <= 12271) ||
          (e >= 12289 && e <= 55295) ||
          (e >= 63744 && e <= 64975) ||
          (e >= 65008 && e <= 65533) ||
          (e >= 65536 && e <= 983039)
        );
      }
      function Ho(e) {
        return (
          (e >= 9 && e <= 13) ||
          32 === e ||
          133 === e ||
          (e >= 8206 && e <= 8207) ||
          8232 === e ||
          8233 === e
        );
      }
      function Uo(e) {
        return (
          (e >= 33 && e <= 35) ||
          36 === e ||
          (e >= 37 && e <= 39) ||
          40 === e ||
          41 === e ||
          42 === e ||
          43 === e ||
          44 === e ||
          45 === e ||
          (e >= 46 && e <= 47) ||
          (e >= 58 && e <= 59) ||
          (e >= 60 && e <= 62) ||
          (e >= 63 && e <= 64) ||
          91 === e ||
          92 === e ||
          93 === e ||
          94 === e ||
          96 === e ||
          123 === e ||
          124 === e ||
          125 === e ||
          126 === e ||
          161 === e ||
          (e >= 162 && e <= 165) ||
          166 === e ||
          167 === e ||
          169 === e ||
          171 === e ||
          172 === e ||
          174 === e ||
          176 === e ||
          177 === e ||
          182 === e ||
          187 === e ||
          191 === e ||
          215 === e ||
          247 === e ||
          (e >= 8208 && e <= 8213) ||
          (e >= 8214 && e <= 8215) ||
          8216 === e ||
          8217 === e ||
          8218 === e ||
          (e >= 8219 && e <= 8220) ||
          8221 === e ||
          8222 === e ||
          8223 === e ||
          (e >= 8224 && e <= 8231) ||
          (e >= 8240 && e <= 8248) ||
          8249 === e ||
          8250 === e ||
          (e >= 8251 && e <= 8254) ||
          (e >= 8257 && e <= 8259) ||
          8260 === e ||
          8261 === e ||
          8262 === e ||
          (e >= 8263 && e <= 8273) ||
          8274 === e ||
          8275 === e ||
          (e >= 8277 && e <= 8286) ||
          (e >= 8592 && e <= 8596) ||
          (e >= 8597 && e <= 8601) ||
          (e >= 8602 && e <= 8603) ||
          (e >= 8604 && e <= 8607) ||
          8608 === e ||
          (e >= 8609 && e <= 8610) ||
          8611 === e ||
          (e >= 8612 && e <= 8613) ||
          8614 === e ||
          (e >= 8615 && e <= 8621) ||
          8622 === e ||
          (e >= 8623 && e <= 8653) ||
          (e >= 8654 && e <= 8655) ||
          (e >= 8656 && e <= 8657) ||
          8658 === e ||
          8659 === e ||
          8660 === e ||
          (e >= 8661 && e <= 8691) ||
          (e >= 8692 && e <= 8959) ||
          (e >= 8960 && e <= 8967) ||
          8968 === e ||
          8969 === e ||
          8970 === e ||
          8971 === e ||
          (e >= 8972 && e <= 8991) ||
          (e >= 8992 && e <= 8993) ||
          (e >= 8994 && e <= 9e3) ||
          9001 === e ||
          9002 === e ||
          (e >= 9003 && e <= 9083) ||
          9084 === e ||
          (e >= 9085 && e <= 9114) ||
          (e >= 9115 && e <= 9139) ||
          (e >= 9140 && e <= 9179) ||
          (e >= 9180 && e <= 9185) ||
          (e >= 9186 && e <= 9254) ||
          (e >= 9255 && e <= 9279) ||
          (e >= 9280 && e <= 9290) ||
          (e >= 9291 && e <= 9311) ||
          (e >= 9472 && e <= 9654) ||
          9655 === e ||
          (e >= 9656 && e <= 9664) ||
          9665 === e ||
          (e >= 9666 && e <= 9719) ||
          (e >= 9720 && e <= 9727) ||
          (e >= 9728 && e <= 9838) ||
          9839 === e ||
          (e >= 9840 && e <= 10087) ||
          10088 === e ||
          10089 === e ||
          10090 === e ||
          10091 === e ||
          10092 === e ||
          10093 === e ||
          10094 === e ||
          10095 === e ||
          10096 === e ||
          10097 === e ||
          10098 === e ||
          10099 === e ||
          10100 === e ||
          10101 === e ||
          (e >= 10132 && e <= 10175) ||
          (e >= 10176 && e <= 10180) ||
          10181 === e ||
          10182 === e ||
          (e >= 10183 && e <= 10213) ||
          10214 === e ||
          10215 === e ||
          10216 === e ||
          10217 === e ||
          10218 === e ||
          10219 === e ||
          10220 === e ||
          10221 === e ||
          10222 === e ||
          10223 === e ||
          (e >= 10224 && e <= 10239) ||
          (e >= 10240 && e <= 10495) ||
          (e >= 10496 && e <= 10626) ||
          10627 === e ||
          10628 === e ||
          10629 === e ||
          10630 === e ||
          10631 === e ||
          10632 === e ||
          10633 === e ||
          10634 === e ||
          10635 === e ||
          10636 === e ||
          10637 === e ||
          10638 === e ||
          10639 === e ||
          10640 === e ||
          10641 === e ||
          10642 === e ||
          10643 === e ||
          10644 === e ||
          10645 === e ||
          10646 === e ||
          10647 === e ||
          10648 === e ||
          (e >= 10649 && e <= 10711) ||
          10712 === e ||
          10713 === e ||
          10714 === e ||
          10715 === e ||
          (e >= 10716 && e <= 10747) ||
          10748 === e ||
          10749 === e ||
          (e >= 10750 && e <= 11007) ||
          (e >= 11008 && e <= 11055) ||
          (e >= 11056 && e <= 11076) ||
          (e >= 11077 && e <= 11078) ||
          (e >= 11079 && e <= 11084) ||
          (e >= 11085 && e <= 11123) ||
          (e >= 11124 && e <= 11125) ||
          (e >= 11126 && e <= 11157) ||
          11158 === e ||
          (e >= 11159 && e <= 11263) ||
          (e >= 11776 && e <= 11777) ||
          11778 === e ||
          11779 === e ||
          11780 === e ||
          11781 === e ||
          (e >= 11782 && e <= 11784) ||
          11785 === e ||
          11786 === e ||
          11787 === e ||
          11788 === e ||
          11789 === e ||
          (e >= 11790 && e <= 11798) ||
          11799 === e ||
          (e >= 11800 && e <= 11801) ||
          11802 === e ||
          11803 === e ||
          11804 === e ||
          11805 === e ||
          (e >= 11806 && e <= 11807) ||
          11808 === e ||
          11809 === e ||
          11810 === e ||
          11811 === e ||
          11812 === e ||
          11813 === e ||
          11814 === e ||
          11815 === e ||
          11816 === e ||
          11817 === e ||
          (e >= 11818 && e <= 11822) ||
          11823 === e ||
          (e >= 11824 && e <= 11833) ||
          (e >= 11834 && e <= 11835) ||
          (e >= 11836 && e <= 11839) ||
          11840 === e ||
          11841 === e ||
          11842 === e ||
          (e >= 11843 && e <= 11855) ||
          (e >= 11856 && e <= 11857) ||
          11858 === e ||
          (e >= 11859 && e <= 11903) ||
          (e >= 12289 && e <= 12291) ||
          12296 === e ||
          12297 === e ||
          12298 === e ||
          12299 === e ||
          12300 === e ||
          12301 === e ||
          12302 === e ||
          12303 === e ||
          12304 === e ||
          12305 === e ||
          (e >= 12306 && e <= 12307) ||
          12308 === e ||
          12309 === e ||
          12310 === e ||
          12311 === e ||
          12312 === e ||
          12313 === e ||
          12314 === e ||
          12315 === e ||
          12316 === e ||
          12317 === e ||
          (e >= 12318 && e <= 12319) ||
          12320 === e ||
          12336 === e ||
          64830 === e ||
          64831 === e ||
          (e >= 65093 && e <= 65094)
        );
      }
      function Fo(e) {
        e.forEach(function (e) {
          if ((delete e.location, Dr(e) || Hr(e)))
            for (var t in e.options)
              delete e.options[t].location, Fo(e.options[t].value);
          else
            (Mr(e) && Vr(e.style)) || ((Ir(e) || Br(e)) && Gr(e.style))
              ? delete e.style.location
              : Fr(e) && Fo(e.children);
        });
      }
      function Vo(e, t) {
        void 0 === t && (t = {}),
          (t = Object(u.__assign)(
            { shouldParseSkeletons: !0, requiresOtherClause: !0 },
            t
          ));
        var n = new Mo(e, t).parse();
        if (n.err) {
          var r = SyntaxError(Tr[n.err.kind]);
          throw (
            ((r.location = n.err.location),
            (r.originalMessage = n.err.message),
            r)
          );
        }
        return (null == t ? void 0 : t.captureLocation) || Fo(n.val), n.val;
      }
      function Go(e, t) {
        var n = t && t.cache ? t.cache : Qo,
          r = t && t.serializer ? t.serializer : Yo,
          o;
        return (t && t.strategy ? t.strategy : Ko)(e, {
          cache: n,
          serializer: r,
        });
      }
      function zo(e) {
        return null == e || "number" == typeof e || "boolean" == typeof e;
      }
      function qo(e, t, n, r) {
        var o = zo(r) ? r : n(r),
          i = t.get(o);
        return void 0 === i && ((i = e.call(this, r)), t.set(o, i)), i;
      }
      function Jo(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && ((i = e.apply(this, r)), t.set(o, i)), i;
      }
      function $o(e, t, n, r, o) {
        return n.bind(t, e, r, o);
      }
      function Ko(e, t) {
        var n;
        return $o(
          e,
          this,
          1 === e.length ? qo : Jo,
          t.cache.create(),
          t.serializer
        );
      }
      function Wo(e, t) {
        return $o(e, this, Jo, t.cache.create(), t.serializer);
      }
      function Xo(e, t) {
        return $o(e, this, qo, t.cache.create(), t.serializer);
      }
      var Yo = function () {
        return JSON.stringify(arguments);
      };
      function Zo() {
        this.cache = Object.create(null);
      }
      (Zo.prototype.get = function (e) {
        return this.cache[e];
      }),
        (Zo.prototype.set = function (e, t) {
          this.cache[e] = t;
        });
      var Qo = {
          create: function e() {
            return new Zo();
          },
        },
        ei = { variadic: Wo, monadic: Xo },
        ti;
      !(function (e) {
        (e.MISSING_VALUE = "MISSING_VALUE"),
          (e.INVALID_VALUE = "INVALID_VALUE"),
          (e.MISSING_INTL_API = "MISSING_INTL_API");
      })(ti || (ti = {}));
      var ni = (function (e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return (o.code = n), (o.originalMessage = r), o;
          }
          return (
            Object(u.__extends)(t, e),
            (t.prototype.toString = function () {
              return "[formatjs Error: "
                .concat(this.code, "] ")
                .concat(this.message);
            }),
            t
          );
        })(Error),
        ri = (function (e) {
          function t(t, n, r, o) {
            return (
              e.call(
                this,
                'Invalid values for "'
                  .concat(t, '": "')
                  .concat(n, '". Options are "')
                  .concat(Object.keys(r).join('", "'), '"'),
                ti.INVALID_VALUE,
                o
              ) || this
            );
          }
          return Object(u.__extends)(t, e), t;
        })(ni),
        oi = (function (e) {
          function t(t, n, r) {
            return (
              e.call(
                this,
                'Value for "'.concat(t, '" must be of type ').concat(n),
                ti.INVALID_VALUE,
                r
              ) || this
            );
          }
          return Object(u.__extends)(t, e), t;
        })(ni),
        ii = (function (e) {
          function t(t, n) {
            return (
              e.call(
                this,
                'The intl string context variable "'
                  .concat(t, '" was not provided to the string "')
                  .concat(n, '"'),
                ti.MISSING_VALUE,
                n
              ) || this
            );
          }
          return Object(u.__extends)(t, e), t;
        })(ni),
        ai;
      function ui(e) {
        return e.length < 2
          ? e
          : e.reduce(function (e, t) {
              var n = e[e.length - 1];
              return (
                n && n.type === ai.literal && t.type === ai.literal
                  ? (n.value += t.value)
                  : e.push(t),
                e
              );
            }, []);
      }
      function si(e) {
        return "function" == typeof e;
      }
      function ci(e, t, n, r, o, i, a) {
        if (1 === e.length && Lr(e[0]))
          return [{ type: ai.literal, value: e[0].value }];
        for (var u = [], s = 0, c = e; s < c.length; s++) {
          var l = c[s];
          if (Lr(l)) u.push({ type: ai.literal, value: l.value });
          else if (Ur(l))
            "number" == typeof i &&
              u.push({
                type: ai.literal,
                value: n.getNumberFormat(t).format(i),
              });
          else {
            var f = l.value;
            if (!o || !(f in o)) throw new ii(f, a);
            var p = o[f];
            if (kr(l))
              (p && "string" != typeof p && "number" != typeof p) ||
                (p =
                  "string" == typeof p || "number" == typeof p
                    ? String(p)
                    : ""),
                u.push({
                  type: "string" == typeof p ? ai.literal : ai.object,
                  value: p,
                });
            else if (Ir(l)) {
              var h =
                "string" == typeof l.style
                  ? r.date[l.style]
                  : Gr(l.style)
                  ? l.style.parsedOptions
                  : void 0;
              u.push({
                type: ai.literal,
                value: n.getDateTimeFormat(t, h).format(p),
              });
            } else if (Br(l)) {
              var h =
                "string" == typeof l.style
                  ? r.time[l.style]
                  : Gr(l.style)
                  ? l.style.parsedOptions
                  : r.time.medium;
              u.push({
                type: ai.literal,
                value: n.getDateTimeFormat(t, h).format(p),
              });
            } else if (Mr(l)) {
              var h;
              (h =
                "string" == typeof l.style
                  ? r.number[l.style]
                  : Vr(l.style)
                  ? l.style.parsedOptions
                  : void 0) &&
                h.scale &&
                (p *= h.scale || 1),
                u.push({
                  type: ai.literal,
                  value: n.getNumberFormat(t, h).format(p),
                });
            } else {
              if (Fr(l)) {
                var d = l.children,
                  v = l.value,
                  y = o[v];
                if (!si(y)) throw new oi(v, "function", a);
                var m,
                  b = y(
                    ci(d, t, n, r, o, i).map(function (e) {
                      return e.value;
                    })
                  );
                Array.isArray(b) || (b = [b]),
                  u.push.apply(
                    u,
                    b.map(function (e) {
                      return {
                        type: "string" == typeof e ? ai.literal : ai.object,
                        value: e,
                      };
                    })
                  );
              }
              if (Dr(l)) {
                var _;
                if (!(_ = l.options[p] || l.options.other))
                  throw new ri(l.value, p, Object.keys(l.options), a);
                u.push.apply(u, ci(_.value, t, n, r, o));
              } else if (Hr(l)) {
                var _;
                if (!(_ = l.options["=".concat(p)])) {
                  if (!Intl.PluralRules)
                    throw new ni(
                      'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                      ti.MISSING_INTL_API,
                      a
                    );
                  var g = n
                    .getPluralRules(t, { type: l.pluralType })
                    .select(p - (l.offset || 0));
                  _ = l.options[g] || l.options.other;
                }
                if (!_) throw new ri(l.value, p, Object.keys(l.options), a);
                u.push.apply(u, ci(_.value, t, n, r, o, p - (l.offset || 0)));
              } else;
            }
          }
        }
        return ui(u);
      }
      function li(e, t) {
        return t
          ? Object(u.__assign)(
              Object(u.__assign)(Object(u.__assign)({}, e || {}), t || {}),
              Object.keys(e).reduce(function (n, r) {
                return (
                  (n[r] = Object(u.__assign)(
                    Object(u.__assign)({}, e[r]),
                    t[r] || {}
                  )),
                  n
                );
              }, {})
            )
          : e;
      }
      function fi(e, t) {
        return t
          ? Object.keys(e).reduce(function (n, r) {
              return (n[r] = li(e[r], t[r])), n;
            }, Object(u.__assign)({}, e))
          : e;
      }
      function pi(e) {
        return {
          create: function () {
            return {
              get: function (t) {
                return e[t];
              },
              set: function (t, n) {
                e[t] = n;
              },
            };
          },
        };
      }
      function hi(e) {
        return (
          void 0 === e && (e = { number: {}, dateTime: {}, pluralRules: {} }),
          {
            getNumberFormat: Go(
              function () {
                for (var e, t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                return new ((e = Intl.NumberFormat).bind.apply(
                  e,
                  Object(u.__spreadArray)([void 0], t, !1)
                ))();
              },
              { cache: pi(e.number), strategy: ei.variadic }
            ),
            getDateTimeFormat: Go(
              function () {
                for (var e, t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                return new ((e = Intl.DateTimeFormat).bind.apply(
                  e,
                  Object(u.__spreadArray)([void 0], t, !1)
                ))();
              },
              { cache: pi(e.dateTime), strategy: ei.variadic }
            ),
            getPluralRules: Go(
              function () {
                for (var e, t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                return new ((e = Intl.PluralRules).bind.apply(
                  e,
                  Object(u.__spreadArray)([void 0], t, !1)
                ))();
              },
              { cache: pi(e.pluralRules), strategy: ei.variadic }
            ),
          }
        );
      }
      !(function (e) {
        (e[(e.literal = 0)] = "literal"), (e[(e.object = 1)] = "object");
      })(ai || (ai = {}));
      var di,
        vi = (function () {
          function e(t, n, r, o) {
            var i = this;
            if (
              (void 0 === n && (n = e.defaultLocale),
              (this.formatterCache = {
                number: {},
                dateTime: {},
                pluralRules: {},
              }),
              (this.format = function (e) {
                var t = i.formatToParts(e);
                if (1 === t.length) return t[0].value;
                var n = t.reduce(function (e, t) {
                  return (
                    e.length &&
                    t.type === ai.literal &&
                    "string" == typeof e[e.length - 1]
                      ? (e[e.length - 1] += t.value)
                      : e.push(t.value),
                    e
                  );
                }, []);
                return n.length <= 1 ? n[0] || "" : n;
              }),
              (this.formatToParts = function (e) {
                return ci(
                  i.ast,
                  i.locales,
                  i.formatters,
                  i.formats,
                  e,
                  void 0,
                  i.message
                );
              }),
              (this.resolvedOptions = function () {
                return { locale: i.resolvedLocale.toString() };
              }),
              (this.getAst = function () {
                return i.ast;
              }),
              (this.locales = n),
              (this.resolvedLocale = e.resolveLocale(n)),
              "string" == typeof t)
            ) {
              if (((this.message = t), !e.__parse))
                throw new TypeError(
                  "IntlMessageFormat.__parse must be set to process `message` of type `string`"
                );
              this.ast = e.__parse(t, {
                ignoreTag: null == o ? void 0 : o.ignoreTag,
                locale: this.resolvedLocale,
              });
            } else this.ast = t;
            if (!Array.isArray(this.ast))
              throw new TypeError(
                "A message must be provided as a String or AST."
              );
            (this.formats = fi(e.formats, r)),
              (this.formatters =
                (o && o.formatters) || hi(this.formatterCache));
          }
          return (
            Object.defineProperty(e, "defaultLocale", {
              get: function () {
                return (
                  e.memoizedDefaultLocale ||
                    (e.memoizedDefaultLocale =
                      new Intl.NumberFormat().resolvedOptions().locale),
                  e.memoizedDefaultLocale
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.memoizedDefaultLocale = null),
            (e.resolveLocale = function (e) {
              var t = Intl.NumberFormat.supportedLocalesOf(e);
              return t.length > 0
                ? new Intl.Locale(t[0])
                : new Intl.Locale("string" == typeof e ? e : e[0]);
            }),
            (e.__parse = Vo),
            (e.formats = {
              number: {
                integer: { maximumFractionDigits: 0 },
                currency: { style: "currency" },
                percent: { style: "percent" },
              },
              date: {
                short: { month: "numeric", day: "numeric", year: "2-digit" },
                medium: { month: "short", day: "numeric", year: "numeric" },
                long: { month: "long", day: "numeric", year: "numeric" },
                full: {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                },
              },
              time: {
                short: { hour: "numeric", minute: "numeric" },
                medium: {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                },
                long: {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  timeZoneName: "short",
                },
                full: {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  timeZoneName: "short",
                },
              },
            }),
            e
          );
        })(),
        yi = n(61),
        mi = n(20),
        bi = n(39),
        _i = n.n(bi),
        gi = n(62),
        wi = n.n(gi);
      function Oi(e) {
        return (Oi =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      window.sdkVersion = yi.version;
      var Ei = wi()(mi.isElement, !0),
        Si = {
          JSEXPRESSION: "JSExpression",
          JSFUNCTION: "JSFunction",
          JSSLOT: "JSSlot",
          JSBLOCK: "JSBlock",
          I18N: "i18n",
        };
      function xi(e) {
        if (Object(zt.isEmpty)(e)) return !1;
        if ("Leaf" === e.componentName || "Slot" === e.componentName) return !0;
        if (Array.isArray(e))
          return e.every(function (e) {
            return xi(e);
          });
        var t = function t(n) {
          return (
            !!n && (!!hn(n) || ("object" === Oi(e.props) && !Array.isArray(n)))
          );
        };
        return !(!e.componentName || !t(e.props));
      }
      function Ci(e) {
        return (
          !!xi(e) && ["Page", "Block", "Component"].includes(e.componentName)
        );
      }
      function ji() {
        try {
          return (
            window.parent !== window &&
            window.parent.location.host === window.location.host
          );
        } catch (e) {
          return !1;
        }
      }
      function Ai(e) {
        var t;
        if (e)
          return ("lce-" + e.replace(/([A-Z])/g, "-$1").toLowerCase())
            .split("-")
            .filter(function (e) {
              return !!e;
            })
            .join("-");
      }
      function Pi(e) {
        return (
          !!e &&
          "object" === Oi(e) &&
          !Array.isArray(e) &&
          [Si.JSSLOT, Si.JSBLOCK].includes(e.type)
        );
      }
      function Ti(e, t, n) {
        if ((void 0 === n && (n = {}), Array.isArray(e))) return n;
        if (Object(zt.isEmpty)(e) || "object" !== Oi(e)) return n;
        var r = t.split(".").reduce(function (e, t) {
          return e && e[t];
        }, e);
        return void 0 === r ? n : r;
      }
      function Ri(e, t, n, r) {
        return (
          void 0 === t && (t = {}),
          void 0 === n && (n = "zh-CN"),
          void 0 === r && (r = {}),
          r && r[n] && r[n][e] ? new vi(r[n][e], n).format(t) : ""
        );
        var o;
      }
      function Ni(e) {
        var t,
          n,
          r,
          o =
            "function" == typeof Symbol && Symbol.for
              ? Symbol.for("react.forward_ref")
              : 60112;
        return (
          (null == e ? void 0 : e.$$typeof) === o ||
          (null == e || null === (t = e.prototype) || void 0 === t
            ? void 0
            : t.isReactComponent) ||
          (null == e || null === (n = e.prototype) || void 0 === n
            ? void 0
            : n.setState) ||
          e._forwardRef
        );
      }
      function Li(e, t, n) {
        if (
          (void 0 === n && (n = !0), Object(zt.isEmpty)(e) || !Array.isArray(e))
        )
          return {};
        var r = {};
        return (
          e.forEach(function (e) {
            var o = e[t];
            void 0 !== e[t] && ((r[o] && !n) || (r[o] = e));
          }),
          r
        );
      }
      function ki(e, t, n, r) {
        var o,
          i = n;
        if (
          ("string" == typeof n &&
            (i = new Function(
              '"use strict"; const PropTypes = arguments[0]; return ' + n
            )(Ei)),
          !i || "function" != typeof i)
        )
          return (
            console.warn(
              "checkPropTypes should have a function type rule argument"
            ),
            !0
          );
        var a = i((((o = {})[t] = e), o), t, r, "prop", null, _i.a);
        return a && console.warn(a), !a;
      }
      function Mi(e) {
        return "string" != typeof e
          ? e
          : ji() && window.parent.__newFunc
          ? window.parent.__newFunc('"use strict"; return ' + e)()
          : new Function('"use strict"; return ' + e)();
      }
      function Ii(e, t, n) {
        void 0 === n && (n = !1);
        try {
          var r = ['"use strict";', "var __self = arguments[0];"],
            o,
            i;
          return (
            r.push("return "),
            (o = (o = (e.value || "").trim()).replace(
              /this(\W|$)/g,
              function (e, t) {
                return "__self" + t;
              }
            )),
            (o = r.join("\n") + o),
            ji() && window.parent.__newFunc
              ? window.parent.__newFunc(o)(t)
              : new Function(
                  "$scope",
                  "with(" + (n ? "{}" : "$scope || {}") + ") { " + o + " }"
                )(t)
          );
        } catch (n) {
          var a;
          return void Pr.error(
            "parseExpression.error",
            n,
            e,
            null !== (a = null == t ? void 0 : t.__self) && void 0 !== a ? a : t
          );
        }
      }
      function Bi(e, t) {
        return Ii(e, t, !0);
      }
      function Di(e) {
        return e && Hi(e) && 0 !== e.length
          ? e[0].toUpperCase() + e.slice(1)
          : e;
      }
      function Hi(e) {
        return "[object String]" === {}.toString.call(e);
      }
      function Ui(e) {
        return (
          !(!e || Array.isArray(e)) &&
          "object" === Oi(e) &&
          "variable" === (null == e ? void 0 : e.type)
        );
      }
      function Fi(e, t) {
        return Ii(
          { type: Si.JSEXPRESSION, value: "this.i18n('" + e.key + "')" },
          t
        );
      }
      function Vi(e, t, n) {
        !e ||
          Array.isArray(e) ||
          Hi(e) ||
          "object" !== Oi(e) ||
          Object.keys(e).forEach(function (r) {
            return t.call(n, e[r], r);
          });
      }
      function Gi(e, t, n) {
        if ((void 0 === n && (n = {}), hn(e)))
          return Ii(e, t, n.thisRequiredInJSE);
        if (fn(e)) return Fi(e, t);
        if ("string" == typeof e) return e.trim();
        if (Array.isArray(e))
          return e.map(function (e) {
            return Gi(e, t, n);
          });
        if ("function" == typeof e) return e.bind(t);
        if ("object" === Oi(e)) {
          if (!e) return e;
          var r = {};
          return (
            Vi(e, function (e, o) {
              o.startsWith("__") || (r[o] = Gi(e, t, n));
            }),
            r
          );
        }
        return e;
      }
      function zi(e) {
        var t = [];
        return (
          Vi(e, function (e, n) {
            null != e &&
              "" !== e &&
              ("object" === Oi(e)
                ? t.push(n + "=" + encodeURIComponent(JSON.stringify(e)))
                : t.push(n + "=" + encodeURIComponent(e)));
          }),
          t.join("&")
        );
      }
      var qi =
          ("undefined" != typeof globalThis && globalThis) ||
          ("undefined" != typeof self && self) ||
          (void 0 !== qi && qi),
        Ji = "URLSearchParams" in qi,
        $i = "Symbol" in qi && "iterator" in Symbol,
        Ki =
          "FileReader" in qi &&
          "Blob" in qi &&
          (function () {
            try {
              return new Blob(), !0;
            } catch (e) {
              return !1;
            }
          })(),
        Wi = "FormData" in qi,
        Xi = "ArrayBuffer" in qi;
      function Yi(e) {
        return e && DataView.prototype.isPrototypeOf(e);
      }
      if (Xi)
        var Zi = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          Qi =
            ArrayBuffer.isView ||
            function (e) {
              return e && Zi.indexOf(Object.prototype.toString.call(e)) > -1;
            };
      function ea(e) {
        if (
          ("string" != typeof e && (e = String(e)),
          /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
        )
          throw new TypeError(
            'Invalid character in header field name: "' + e + '"'
          );
        return e.toLowerCase();
      }
      function ta(e) {
        return "string" != typeof e && (e = String(e)), e;
      }
      function na(e) {
        var t = {
          next: function () {
            var t = e.shift();
            return { done: void 0 === t, value: t };
          },
        };
        return (
          $i &&
            (t[Symbol.iterator] = function () {
              return t;
            }),
          t
        );
      }
      function ra(e) {
        (this.map = {}),
          e instanceof ra
            ? e.forEach(function (e, t) {
                this.append(t, e);
              }, this)
            : Array.isArray(e)
            ? e.forEach(function (e) {
                this.append(e[0], e[1]);
              }, this)
            : e &&
              Object.getOwnPropertyNames(e).forEach(function (t) {
                this.append(t, e[t]);
              }, this);
      }
      function oa(e) {
        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0;
      }
      function ia(e) {
        return new Promise(function (t, n) {
          (e.onload = function () {
            t(e.result);
          }),
            (e.onerror = function () {
              n(e.error);
            });
        });
      }
      function aa(e) {
        var t = new FileReader(),
          n = ia(t);
        return t.readAsArrayBuffer(e), n;
      }
      function ua(e) {
        var t = new FileReader(),
          n = ia(t);
        return t.readAsText(e), n;
      }
      function sa(e) {
        for (
          var t = new Uint8Array(e), n = new Array(t.length), r = 0;
          r < t.length;
          r++
        )
          n[r] = String.fromCharCode(t[r]);
        return n.join("");
      }
      function ca(e) {
        if (e.slice) return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer;
      }
      function la() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (e) {
            (this.bodyUsed = this.bodyUsed),
              (this._bodyInit = e),
              e
                ? "string" == typeof e
                  ? (this._bodyText = e)
                  : Ki && Blob.prototype.isPrototypeOf(e)
                  ? (this._bodyBlob = e)
                  : Wi && FormData.prototype.isPrototypeOf(e)
                  ? (this._bodyFormData = e)
                  : Ji && URLSearchParams.prototype.isPrototypeOf(e)
                  ? (this._bodyText = e.toString())
                  : Xi && Ki && Yi(e)
                  ? ((this._bodyArrayBuffer = ca(e.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : Xi && (ArrayBuffer.prototype.isPrototypeOf(e) || Qi(e))
                  ? (this._bodyArrayBuffer = ca(e))
                  : (this._bodyText = e = Object.prototype.toString.call(e))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                ("string" == typeof e
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : Ji &&
                    URLSearchParams.prototype.isPrototypeOf(e) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          Ki &&
            ((this.blob = function () {
              var e = oa(this);
              if (e) return e;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              if (this._bodyArrayBuffer) {
                var e = oa(this);
                return (
                  e ||
                  (ArrayBuffer.isView(this._bodyArrayBuffer)
                    ? Promise.resolve(
                        this._bodyArrayBuffer.buffer.slice(
                          this._bodyArrayBuffer.byteOffset,
                          this._bodyArrayBuffer.byteOffset +
                            this._bodyArrayBuffer.byteLength
                        )
                      )
                    : Promise.resolve(this._bodyArrayBuffer))
                );
              }
              return this.blob().then(aa);
            })),
          (this.text = function () {
            var e = oa(this);
            if (e) return e;
            if (this._bodyBlob) return ua(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(sa(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          Wi &&
            (this.formData = function () {
              return this.text().then(da);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      (ra.prototype.append = function (e, t) {
        (e = ea(e)), (t = ta(t));
        var n = this.map[e];
        this.map[e] = n ? n + ", " + t : t;
      }),
        (ra.prototype.delete = function (e) {
          delete this.map[ea(e)];
        }),
        (ra.prototype.get = function (e) {
          return (e = ea(e)), this.has(e) ? this.map[e] : null;
        }),
        (ra.prototype.has = function (e) {
          return this.map.hasOwnProperty(ea(e));
        }),
        (ra.prototype.set = function (e, t) {
          this.map[ea(e)] = ta(t);
        }),
        (ra.prototype.forEach = function (e, t) {
          for (var n in this.map)
            this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
        }),
        (ra.prototype.keys = function () {
          var e = [];
          return (
            this.forEach(function (t, n) {
              e.push(n);
            }),
            na(e)
          );
        }),
        (ra.prototype.values = function () {
          var e = [];
          return (
            this.forEach(function (t) {
              e.push(t);
            }),
            na(e)
          );
        }),
        (ra.prototype.entries = function () {
          var e = [];
          return (
            this.forEach(function (t, n) {
              e.push([n, t]);
            }),
            na(e)
          );
        }),
        $i && (ra.prototype[Symbol.iterator] = ra.prototype.entries);
      var fa = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function pa(e) {
        var t = e.toUpperCase();
        return fa.indexOf(t) > -1 ? t : e;
      }
      function ha(e, t) {
        if (!(this instanceof ha))
          throw new TypeError(
            'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
          );
        var n = (t = t || {}).body;
        if (e instanceof ha) {
          if (e.bodyUsed) throw new TypeError("Already read");
          (this.url = e.url),
            (this.credentials = e.credentials),
            t.headers || (this.headers = new ra(e.headers)),
            (this.method = e.method),
            (this.mode = e.mode),
            (this.signal = e.signal),
            n || null == e._bodyInit || ((n = e._bodyInit), (e.bodyUsed = !0));
        } else this.url = String(e);
        if (
          ((this.credentials =
            t.credentials || this.credentials || "same-origin"),
          (!t.headers && this.headers) || (this.headers = new ra(t.headers)),
          (this.method = pa(t.method || this.method || "GET")),
          (this.mode = t.mode || this.mode || null),
          (this.signal = t.signal || this.signal),
          (this.referrer = null),
          ("GET" === this.method || "HEAD" === this.method) && n)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        if (
          (this._initBody(n),
          !(
            ("GET" !== this.method && "HEAD" !== this.method) ||
            ("no-store" !== t.cache && "no-cache" !== t.cache)
          ))
        ) {
          var r = /([?&])_=[^&]*/;
          if (r.test(this.url))
            this.url = this.url.replace(r, "$1_=" + new Date().getTime());
          else {
            var o = /\?/;
            this.url +=
              (o.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
          }
        }
      }
      function da(e) {
        var t = new FormData();
        return (
          e
            .trim()
            .split("&")
            .forEach(function (e) {
              if (e) {
                var n = e.split("="),
                  r = n.shift().replace(/\+/g, " "),
                  o = n.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(r), decodeURIComponent(o));
              }
            }),
          t
        );
      }
      function va(e) {
        var t = new ra(),
          n;
        return (
          e
            .replace(/\r?\n[\t ]+/g, " ")
            .split("\r")
            .map(function (e) {
              return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e;
            })
            .forEach(function (e) {
              var n = e.split(":"),
                r = n.shift().trim();
              if (r) {
                var o = n.join(":").trim();
                t.append(r, o);
              }
            }),
          t
        );
      }
      function ya(e, t) {
        if (!(this instanceof ya))
          throw new TypeError(
            'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
          );
        t || (t = {}),
          (this.type = "default"),
          (this.status = void 0 === t.status ? 200 : t.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = void 0 === t.statusText ? "" : "" + t.statusText),
          (this.headers = new ra(t.headers)),
          (this.url = t.url || ""),
          this._initBody(e);
      }
      (ha.prototype.clone = function () {
        return new ha(this, { body: this._bodyInit });
      }),
        la.call(ha.prototype),
        la.call(ya.prototype),
        (ya.prototype.clone = function () {
          return new ya(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new ra(this.headers),
            url: this.url,
          });
        }),
        (ya.error = function () {
          var e = new ya(null, { status: 0, statusText: "" });
          return (e.type = "error"), e;
        });
      var ma = [301, 302, 303, 307, 308];
      ya.redirect = function (e, t) {
        if (-1 === ma.indexOf(t)) throw new RangeError("Invalid status code");
        return new ya(null, { status: t, headers: { location: e } });
      };
      var ba = qi.DOMException;
      try {
        new ba();
      } catch (e) {
        ((ba = function (e, t) {
          (this.message = e), (this.name = t);
          var n = Error(e);
          this.stack = n.stack;
        }).prototype = Object.create(Error.prototype)),
          (ba.prototype.constructor = ba);
      }
      function _a(e, t) {
        return new Promise(function (n, r) {
          var o = new ha(e, t);
          if (o.signal && o.signal.aborted)
            return r(new ba("Aborted", "AbortError"));
          var i = new XMLHttpRequest();
          function a() {
            i.abort();
          }
          function u(e) {
            try {
              return "" === e && qi.location.href ? qi.location.href : e;
            } catch (t) {
              return e;
            }
          }
          (i.onload = function () {
            var e = {
              status: i.status,
              statusText: i.statusText,
              headers: va(i.getAllResponseHeaders() || ""),
            };
            e.url =
              "responseURL" in i
                ? i.responseURL
                : e.headers.get("X-Request-URL");
            var t = "response" in i ? i.response : i.responseText;
            setTimeout(function () {
              n(new ya(t, e));
            }, 0);
          }),
            (i.onerror = function () {
              setTimeout(function () {
                r(new TypeError("Network request failed"));
              }, 0);
            }),
            (i.ontimeout = function () {
              setTimeout(function () {
                r(new TypeError("Network request failed"));
              }, 0);
            }),
            (i.onabort = function () {
              setTimeout(function () {
                r(new ba("Aborted", "AbortError"));
              }, 0);
            }),
            i.open(o.method, u(o.url), !0),
            "include" === o.credentials
              ? (i.withCredentials = !0)
              : "omit" === o.credentials && (i.withCredentials = !1),
            "responseType" in i &&
              (Ki
                ? (i.responseType = "blob")
                : Xi &&
                  o.headers.get("Content-Type") &&
                  -1 !==
                    o.headers
                      .get("Content-Type")
                      .indexOf("application/octet-stream") &&
                  (i.responseType = "arraybuffer")),
            !t || "object" != typeof t.headers || t.headers instanceof ra
              ? o.headers.forEach(function (e, t) {
                  i.setRequestHeader(t, e);
                })
              : Object.getOwnPropertyNames(t.headers).forEach(function (e) {
                  i.setRequestHeader(e, ta(t.headers[e]));
                }),
            o.signal &&
              (o.signal.addEventListener("abort", a),
              (i.onreadystatechange = function () {
                4 === i.readyState && o.signal.removeEventListener("abort", a);
              })),
            i.send(void 0 === o._bodyInit ? null : o._bodyInit);
        });
      }
      (_a.polyfill = !0),
        qi.fetch ||
          ((qi.fetch = _a),
          (qi.Headers = ra),
          (qi.Request = ha),
          (qi.Response = ya));
      var ga = n(63),
        wa = n.n(ga);
      function Oa(e, t) {
        var n = zi(t);
        return n ? (e.indexOf("?") > 0 ? e + "&" + n : e + "?" + n) : e;
      }
      function Ea(e, t, n, r) {
        void 0 === t && (t = {}),
          void 0 === n && (n = {}),
          void 0 === r && (r = {});
        var o = A()({ Accept: "application/json" }, n),
          i;
        return xa(Oa(e, t), "GET", null, o, r);
      }
      function Sa(e, t, n, r) {
        void 0 === t && (t = {}),
          void 0 === n && (n = {}),
          void 0 === r && (r = {});
        var o = A()(
            {
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
            n
          ),
          i;
        return xa(
          e,
          "POST",
          o["Content-Type"].indexOf("application/json") > -1 || Array.isArray(t)
            ? JSON.stringify(t)
            : zi(t),
          o,
          r
        );
      }
      function xa(e, t, n, r, o) {
        void 0 === t && (t = "GET"),
          void 0 === r && (r = {}),
          void 0 === o && (o = {});
        var i = r || {},
          a = n;
        return (
          ("PUT" !== t && "DELETE" !== t) ||
            ((i = A()(
              {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              i
            )),
            (a = JSON.stringify(a || {}))),
          new Promise(function (n, r) {
            o.timeout &&
              setTimeout(function () {
                r(new Error("timeout"));
              }, o.timeout),
              fetch(
                e,
                A()(
                  { method: t, credentials: "include", headers: i, body: a },
                  o
                )
              )
                .then(function (e) {
                  switch (e.status) {
                    case 200:
                    case 201:
                    case 202:
                      return e.json();
                    case 204:
                      return "DELETE" === t
                        ? { success: !0 }
                        : { __success: !1, code: e.status };
                    case 400:
                    case 401:
                    case 403:
                    case 404:
                    case 406:
                    case 410:
                    case 422:
                    case 500:
                      return e
                        .json()
                        .then(function (t) {
                          return { __success: !1, code: e.status, data: t };
                        })
                        .catch(function () {
                          return { __success: !1, code: e.status };
                        });
                  }
                  return null;
                })
                .then(function (e) {
                  e
                    ? !1 !== e.__success
                      ? n(e)
                      : (delete e.__success, r(e))
                    : r(e);
                })
                .catch(function (e) {
                  r(e);
                });
          })
        );
      }
      function Ca(e, t, n) {
        return (
          void 0 === t && (t = {}),
          void 0 === n && (n = {}),
          new Promise(function (r, o) {
            var i = A()({ timeout: 5e3 }, n),
              a = Oa(e, t);
            wa()(a, i)
              .then(function (e) {
                e.json();
              })
              .then(function (e) {
                e ? r(e) : o();
              })
              .catch(function (e) {
                o(e);
              });
          })
        );
      }
      var ja = ["uri", "url", "method", "headers", "params"],
        Aa = ["headers"],
        Pa = "init",
        Ta = "loading",
        Ra = "loaded",
        Na = "error";
      function La(e, t) {
        var n = t.uri,
          r = t.url,
          o = t.method,
          i = void 0 === o ? "GET" : o,
          a = t.headers,
          u = t.params,
          s = C()(t, ja);
        if (((s = s || {}), "jsonp" === e)) return Ca(n, u, s);
        if ("fetch" === e)
          switch (i.toUpperCase()) {
            case "GET":
              return Ea(n, u, a, s);
            case "POST":
              return Sa(n, u, a, s);
            default:
              return xa(n, i, u, a, s);
          }
        Pr.log(
          "Engine default dataSource does not support type:[" +
            e +
            "] dataSource request!",
          t
        );
      }
      var ka = (function () {
        function e(e, t, n, r) {
          (this.host = void 0),
            (this.config = void 0),
            (this.parser = void 0),
            (this.ajaxList = void 0),
            (this.ajaxMap = void 0),
            (this.dataSourceMap = void 0),
            (this.appHelper = void 0),
            (this.host = e),
            (this.config = t || {}),
            (this.parser = r),
            (this.ajaxList = (null == t ? void 0 : t.list) || []),
            (this.ajaxMap = Li(this.ajaxList, "id")),
            (this.dataSourceMap = this.generateDataSourceMap()),
            (this.appHelper = n);
        }
        var t = e.prototype;
        return (
          (t.updateConfig = function e(t) {
            var n,
              r = this;
            void 0 === t && (t = {}),
              (this.config = t),
              (this.ajaxList =
                (null === (n = t) || void 0 === n ? void 0 : n.list) || []);
            var o = Li(this.ajaxList, "id");
            return (
              Object.keys(this.ajaxMap).forEach(function (e) {
                o[e] || delete r.dataSourceMap[e];
              }),
              (this.ajaxMap = o),
              this.ajaxList.forEach(function (e) {
                r.dataSourceMap[e.id] ||
                  (r.dataSourceMap[e.id] = {
                    status: Pa,
                    load: function t() {
                      for (
                        var n = arguments.length, o = new Array(n), i = 0;
                        i < n;
                        i++
                      )
                        o[i] = arguments[i];
                      return r.getDataSource.apply(r, [e.id].concat(o));
                    },
                  });
              }),
              this.dataSourceMap
            );
          }),
          (t.generateDataSourceMap = function e() {
            var t = this,
              n = {};
            return (
              this.ajaxList.forEach(function (e) {
                n[e.id] = {
                  status: Pa,
                  load: function n() {
                    for (
                      var r = arguments.length, o = new Array(r), i = 0;
                      i < r;
                      i++
                    )
                      o[i] = arguments[i];
                    return t.getDataSource.apply(t, [e.id].concat(o));
                  },
                };
              }),
              n
            );
          }),
          (t.updateDataSourceMap = function e(t, n, r) {
            (this.dataSourceMap[t].error = r || void 0),
              (this.dataSourceMap[t].data = n),
              (this.dataSourceMap[t].status = r ? Na : Ra);
          }),
          (t.getInitDataSourseConfigs = function e() {
            var t = this,
              n;
            return this.parser(this.ajaxList).filter(function (e) {
              return (
                !0 === e.isInit && ((t.dataSourceMap[e.id].status = Ta), !0)
              );
            });
          }),
          (t.getInitData = function e() {
            var t = this,
              n = this.getInitDataSourseConfigs();
            return this.asyncDataHandler(n).then(function (e) {
              var n = t.config.dataHandler;
              return t.handleData(null, n, e, null);
            });
          }),
          (t.getDataSource = function e(t, n, r, o) {
            var i = this.parser(this.ajaxMap[t]),
              a = i.options || {},
              u = o,
              s = r;
            "function" == typeof r && ((u = r), (s = {}));
            var c = s || {},
              l = c.headers,
              f = C()(c, Aa);
            if (i)
              return this.asyncDataHandler([
                A()({}, i, {
                  options: A()(
                    {},
                    a,
                    {
                      params:
                        Array.isArray(a.params) || Array.isArray(n)
                          ? n || a.params
                          : A()({}, a.params, n),
                      headers: A()({}, a.headers, l),
                    },
                    f
                  ),
                }),
              ])
                .then(function (e) {
                  try {
                    u && u(e && e[t]);
                  } catch (e) {
                    console.error(
                      "load\u8bf7\u6c42\u56de\u8c03\u51fd\u6570\u62a5\u9519",
                      e
                    );
                  }
                  return e && e[t];
                })
                .catch(function (e) {
                  try {
                    u && u(null, e);
                  } catch (e) {
                    console.error(
                      "load\u8bf7\u6c42\u56de\u8c03\u51fd\u6570\u62a5\u9519",
                      e
                    );
                  }
                  return e;
                });
            console.warn("getDataSource API named " + t + " not exist");
          }),
          (t.asyncDataHandler = function e(t) {
            var n = this;
            return new Promise(function (e, r) {
              var o = [];
              t.forEach(function (e) {
                var t = e.id,
                  n = e.type;
                t && n && "legao" !== n && o.push(e);
              }),
                0 === o.length && e({});
              var i = {};
              Promise.all(
                o.map(function (e) {
                  return new Promise(function (t) {
                    var r = e.type,
                      o = e.id,
                      a = e.dataHandler,
                      u = e.options,
                      s = function e(r, u) {
                        (i[o] = n.handleData(o, a, r, u)),
                          n.updateDataSourceMap(o, i[o], u),
                          t({});
                      },
                      c = function e(t, n) {
                        var r;
                        null === (r = La(t, n)) ||
                          void 0 === r ||
                          r
                            .then(function (e) {
                              s(e, void 0);
                            })
                            .catch(function (e) {
                              s(void 0, e);
                            });
                      };
                    (n.dataSourceMap[o].status = Ta), c(r, u);
                  });
                })
              )
                .then(function () {
                  e(i);
                })
                .catch(function (e) {
                  r(e);
                });
            });
          }),
          (t.handleData = function e(t, n, r, o) {
            var i = n;
            if ((yn(n) && (i = Mi(n.value)), !i || "function" != typeof i))
              return r;
            try {
              return i.call(this.host, r, o);
            } catch (e) {
              t
                ? console.error(
                    "[" +
                      t +
                      "]\u5355\u4e2a\u8bf7\u6c42\u6570\u636e\u5904\u7406\u51fd\u6570\u8fd0\u884c\u51fa\u9519",
                    e
                  )
                : console.error(
                    "\u8bf7\u6c42\u6570\u636e\u5904\u7406\u51fd\u6570\u8fd0\u884c\u51fa\u9519",
                    e
                  );
            }
          }),
          e
        );
      })();
      function Ma(e) {
        var t = w.getRuntime(),
          n = t.createElement,
          r = t.Component,
          o = t.forwardRef,
          i = (function (t) {
            function r() {
              return t.apply(this, arguments) || this;
            }
            var o;
            return (
              m()(r, t),
              (r.prototype.render = function t() {
                return n(e, this.props);
              }),
              r
            );
          })(r);
        return (
          (i.displayName = e.displayName),
          We(
            o(function (e, t) {
              return n(i, A()({}, e, { forwardRef: t }));
            }),
            e
          )
        );
      }
      var Ia = ["visible"],
        Ba = ["forwardedRef"],
        Da;
      !(function (e) {
        (e.All = "All"),
          (e.ChildChanged = "ChildChanged"),
          (e.PropsChanged = "PropsChanged"),
          (e.VisibleChanged = "VisibleChanged"),
          (e.MinimalRenderUnit = "MinimalRenderUnit");
      })(Da || (Da = {}));
      var Ha = function e(t, n) {
          (this.documentId = t),
            (this.device = n),
            (this.component = new Map()),
            (this.state = new Map()),
            (this.event = new Map()),
            (this.ref = new Map());
        },
        Ua;
      function Fa(e) {
        var t,
          n,
          r,
          o,
          i,
          a = e.schema,
          u = e.__debug,
          s = e.container,
          c = e.getNode,
          l = null == c ? void 0 : c(a.id);
        !l ||
          (null !== (t = Ua.event.get(a.id)) && void 0 !== t && t.clear) ||
          l === Ua.event.get(a.id) ||
          (null === (n = Ua.event.get(a.id)) ||
            void 0 === n ||
            n.dispose.forEach(function (e) {
              return e && e();
            }),
          Ua.event.set(a.id, {
            clear: !1,
            leaf: l,
            dispose: [
              null == l || null === (r = l.onPropChange) || void 0 === r
                ? void 0
                : r.call(l, function () {
                    s.autoRepaintNode &&
                      (u(
                        a.componentName +
                          "[" +
                          a.id +
                          "] leaf not render in SimulatorRendererView, leaf onPropsChange make rerender"
                      ),
                      s.rerender());
                  }),
              null == l || null === (o = l.onChildrenChange) || void 0 === o
                ? void 0
                : o.call(l, function () {
                    s.autoRepaintNode &&
                      (u(
                        a.componentName +
                          "[" +
                          a.id +
                          "] leaf not render in SimulatorRendererView, leaf onChildrenChange make rerender"
                      ),
                      s.rerender());
                  }),
              null == l || null === (i = l.onVisibleChange) || void 0 === i
                ? void 0
                : i.call(l, function () {
                    s.autoRepaintNode &&
                      (u(
                        a.componentName +
                          "[" +
                          a.id +
                          "] leaf not render in SimulatorRendererView, leaf onVisibleChange make rerender"
                      ),
                      s.rerender());
                  }),
            ],
          }));
      }
      function Va(e) {
        var t, n, r;
        (null !== (t = Ua.event.get(e)) && void 0 !== t && t.clear) ||
          (null === (n = Ua.event.get(e)) ||
            void 0 === n ||
            null === (r = n.dispose) ||
            void 0 === r ||
            r.forEach(function (e) {
              return e && e();
            }),
          Ua.event.set(e, { clear: !0, dispose: [] }));
      }
      function Ga(e, t) {
        var n,
          r,
          o,
          a,
          u,
          s,
          c,
          l,
          f,
          p = t.schema,
          h = t.baseRenderer,
          d = t.componentInfo,
          v = t.scope,
          y = h.__debug,
          b = h.__getComponentProps,
          _ = h.__getSchemaChildrenVirtualDom,
          g = h.__parseData,
          O = h.context.engine,
          E = null === (n = h.props) || void 0 === n ? void 0 : n.__host,
          S =
            null !==
              (r =
                null === (o = h.props) || void 0 === o
                  ? void 0
                  : o.documentId) && void 0 !== r
              ? r
              : "",
          x =
            null !==
              (a =
                null === (u = h.props) || void 0 === u ? void 0 : u.device) &&
            void 0 !== a
              ? a
              : "",
          j = null === (s = h.props) || void 0 === s ? void 0 : s.getNode,
          P = null === (c = h.props) || void 0 === c ? void 0 : c.__container,
          R =
            null === (l = h.props) || void 0 === l
              ? void 0
              : l.setSchemaChangedSymbol,
          N =
            null == E || null === (f = E.designer) || void 0 === f
              ? void 0
              : f.editor,
          L = w.getRuntime(),
          k = L.forwardRef,
          M = L.createElement,
          I = L.Component,
          B = p.id,
          D;
        (!Ua || (S && S !== Ua.documentId) || (x && x !== Ua.device)) &&
          (null === (D = Ua) ||
            void 0 === D ||
            D.event.forEach(function (e) {
              var t;
              null === (t = e.dispose) ||
                void 0 === t ||
                t.forEach(function (e) {
                  return e && e();
                });
            }),
          (Ua = new Ha(S, x)));
        if (
          (tt(e) ||
            console.error(
              p.componentName + " component may be has errors: ",
              e
            ),
          Fa({ schema: p, __debug: y, container: P, getNode: j }),
          S && Ua.component.has(B))
        )
          return Ua.component.get(B);
        var H = (function (t) {
          function n(n, r) {
            var o;
            ((o = t.call(this, n, r) || this).recordInfo = {}),
              (o.curEventLeaf = void 0),
              (o.disposeFunctions = []),
              (o.__component_tag = "leafWrapper"),
              (o.renderUnitInfo = void 0),
              (o.makeUnitRenderDebounced = Object(zt.debounce)(function () {
                var t, n, r;
                o.beforeRender(Da.MinimalRenderUnit);
                var i =
                  null === (t = o.leaf) ||
                  void 0 === t ||
                  null === (n = t.export) ||
                  void 0 === n
                    ? void 0
                    : n.call(t, W.Render);
                if (i) {
                  var a = b(i, v, e, d),
                    u,
                    s = {
                      nodeProps: a,
                      nodeChildren: _(i, v, e),
                      childrenInState: !0,
                    };
                  "children" in a && (s.nodeChildren = a.children),
                    y(
                      (null === (r = o.leaf) || void 0 === r
                        ? void 0
                        : r.componentName) +
                        "(" +
                        o.props.componentId +
                        ") MinimalRenderUnit Render!"
                    ),
                    o.setState(s);
                }
              }, 20)),
              (o.recordTime = function () {
                var e, t, n, r, a;
                if (o.recordInfo.startTime) {
                  var u = Date.now(),
                    s =
                      null == E ||
                      null === (e = E.designer) ||
                      void 0 === e ||
                      null === (t = e.currentDocument) ||
                      void 0 === t ||
                      null === (n = t.getNodeCount) ||
                      void 0 === n
                        ? void 0
                        : n.call(t),
                    c =
                      (null === (r = o.recordInfo.node) || void 0 === r
                        ? void 0
                        : r.componentName) ||
                      (null === (a = o.leaf) || void 0 === a
                        ? void 0
                        : a.componentName) ||
                      "UnknownComponent";
                  null == N ||
                    N.eventBus.emit(i.Node.Rerender, {
                      componentName: c,
                      time: u - o.recordInfo.startTime,
                      type: o.recordInfo.type,
                      nodeCount: s,
                    }),
                    (o.recordInfo.startTime = null);
                }
              }),
              (o.makeUnitRender = function () {
                o.makeUnitRenderDebounced();
              }),
              y(
                p.componentName +
                  "[" +
                  o.props.componentId +
                  "] leaf render in SimulatorRendererView"
              ),
              Va(B),
              (o.curEventLeaf = o.leaf),
              Ua.ref.set(B, { makeUnitRender: o.makeUnitRender });
            var a = Ua.state.get(B);
            return (
              (a && a.__tag === n.__tag) || (a = o.getDefaultState(n)),
              (o.state = a),
              o
            );
          }
          m()(n, t);
          var r = n.prototype;
          return (
            (r.componentDidUpdate = function e() {
              this.recordTime();
            }),
            (r.componentDidMount = function e() {
              var t = this.leaf;
              this.initOnPropsChangeEvent(t),
                this.initOnChildrenChangeEvent(t),
                this.initOnVisibleChangeEvent(t),
                this.recordTime();
            }),
            (r.getDefaultState = function e(t) {
              var n,
                r,
                o =
                  t.__inner__ ||
                  (null === (n = this.leaf) ||
                  void 0 === n ||
                  null === (r = n.export) ||
                  void 0 === r
                    ? void 0
                    : r.call(n, W.Render)) ||
                  {},
                i = o.hidden,
                a = void 0 !== i && i,
                u = o.condition,
                s;
              return {
                nodeChildren: null,
                childrenInState: !1,
                visible: !a,
                condition: null == g ? void 0 : g(void 0 === u || u, v),
                nodeCacheProps: {},
                nodeProps: {},
              };
            }),
            (r.setState = function e(n) {
              Ua.state.set(
                B,
                A()({}, this.state, n, { __tag: this.props.__tag })
              ),
                t.prototype.setState.call(this, n);
            }),
            (r.beforeRender = function e(t, n) {
              (this.recordInfo.startTime = Date.now()),
                (this.recordInfo.type = t),
                (this.recordInfo.node = n),
                null == R || R(!0);
            }),
            (r.judgeMiniUnitRender = function e() {
              var t;
              this.renderUnitInfo || this.getRenderUnitInfo();
              var n = this.renderUnitInfo || { singleRender: !0 };
              if (!n.singleRender) {
                var r = Ua.ref.get(n.minimalUnitId);
                if (!r)
                  return (
                    y("Cant find minimalRenderUnit ref! This make rerender!"),
                    void (null == P || P.rerender())
                  );
                y(
                  (null === (t = this.leaf) || void 0 === t
                    ? void 0
                    : t.componentName) +
                    "(" +
                    this.props.componentId +
                    ") need render, make its minimalRenderUnit " +
                    n.minimalUnitName +
                    "(" +
                    n.minimalUnitId +
                    ")"
                ),
                  r.makeUnitRender();
              }
            }),
            (r.getRenderUnitInfo = function e(t) {
              if (
                (void 0 === t && (t = this.leaf),
                t && "function" == typeof t.isRoot)
              ) {
                var n, r, o, i;
                if (
                  (t.isRootNode &&
                    (this.renderUnitInfo = A()(
                      { singleRender: !0 },
                      this.renderUnitInfo || {}
                    )),
                  t.componentMeta.isMinimalRenderUnit &&
                    (this.renderUnitInfo = {
                      minimalUnitId: t.id,
                      minimalUnitName: t.componentName,
                      singleRender: !1,
                    }),
                  t.hasLoop())
                )
                  this.renderUnitInfo = {
                    minimalUnitId:
                      null === (n = t) ||
                      void 0 === n ||
                      null === (r = n.parent) ||
                      void 0 === r
                        ? void 0
                        : r.id,
                    minimalUnitName:
                      null === (o = t) ||
                      void 0 === o ||
                      null === (i = o.parent) ||
                      void 0 === i
                        ? void 0
                        : i.componentName,
                    singleRender: !1,
                  };
                t.parent && this.getRenderUnitInfo(t.parent);
              }
            }),
            (r.componentWillReceiveProps = function e(t) {
              var n = t.componentId;
              if (t.__tag === this.props.__tag) return null;
              var r = null == j ? void 0 : j(n);
              r &&
                this.curEventLeaf &&
                r !== this.curEventLeaf &&
                (this.disposeFunctions.forEach(function (e) {
                  return e();
                }),
                (this.disposeFunctions = []),
                this.initOnChildrenChangeEvent(r),
                this.initOnPropsChangeEvent(r),
                this.initOnVisibleChangeEvent(r),
                (this.curEventLeaf = r));
              var o = this.getDefaultState(t),
                i = o.visible,
                a = C()(o, Ia);
              this.setState(a);
            }),
            (r.initOnPropsChangeEvent = function t(n) {
              var r = this,
                o,
                i;
              void 0 === n && (n = this.leaf);
              var a = Object(zt.debounce)(function (t) {
                  var o,
                    i,
                    a = t.key,
                    u = t.newValue,
                    s = void 0 === u ? null : u,
                    c = n;
                  if ("___condition___" === a) {
                    var l,
                      f,
                      p = (
                        (null === (l = r.leaf) || void 0 === l
                          ? void 0
                          : l.export(W.Render)) || {}
                      ).condition,
                      h = void 0 === p || p,
                      m = null == g ? void 0 : g(h, v);
                    return (
                      y(
                        "key is ___condition___, change condition value to [" +
                          h +
                          "]"
                      ),
                      void r.setState({ condition: m })
                    );
                  }
                  if ("___loop___" === a)
                    return (
                      y("key is ___loop___, render a page!"),
                      null == P || P.rerender(),
                      void Ua.component.delete(B)
                    );
                  r.beforeRender(Da.PropsChanged);
                  var _,
                    w = r.state.nodeCacheProps,
                    O = b(
                      null == c || null === (o = c.export) || void 0 === o
                        ? void 0
                        : o.call(c, W.Render),
                      v,
                      e,
                      d
                    );
                  a && !(a in O) && a in r.props && (w[a] = s),
                    y(
                      (null === (i = n) || void 0 === i
                        ? void 0
                        : i.componentName) +
                        "[" +
                        r.props.componentId +
                        "] component trigger onPropsChange!",
                      O,
                      w,
                      a,
                      s
                    ),
                    r.setState(
                      "children" in O
                        ? {
                            nodeChildren: O.children,
                            nodeProps: O,
                            childrenInState: !0,
                            nodeCacheProps: w,
                          }
                        : { nodeProps: O, nodeCacheProps: w }
                    ),
                    r.judgeMiniUnitRender();
                }),
                u =
                  null === (o = n) ||
                  void 0 === o ||
                  null === (i = o.onPropChange) ||
                  void 0 === i
                    ? void 0
                    : i.call(o, function (e) {
                        r.autoRepaintNode && a(e);
                      });
              u && this.disposeFunctions.push(u);
            }),
            (r.initOnVisibleChangeEvent = function e(t) {
              var n,
                r,
                o = this;
              void 0 === t && (t = this.leaf);
              var i =
                null === (n = t) ||
                void 0 === n ||
                null === (r = n.onVisibleChange) ||
                void 0 === r
                  ? void 0
                  : r.call(n, function (e) {
                      var n;
                      o.autoRepaintNode &&
                        o.state.visible !== e &&
                        (y(
                          (null === (n = t) || void 0 === n
                            ? void 0
                            : n.componentName) +
                            "[" +
                            o.props.componentId +
                            "] component trigger onVisibleChange(" +
                            e +
                            ") event"
                        ),
                        o.beforeRender(Da.VisibleChanged),
                        o.setState({ visible: e }),
                        o.judgeMiniUnitRender());
                    });
              i && this.disposeFunctions.push(i);
            }),
            (r.initOnChildrenChangeEvent = function t(n) {
              var r,
                o,
                i = this;
              void 0 === n && (n = this.leaf);
              var a =
                null === (r = n) ||
                void 0 === r ||
                null === (o = r.onChildrenChange) ||
                void 0 === o
                  ? void 0
                  : o.call(r, function (t) {
                      var r, o;
                      if (i.autoRepaintNode) {
                        var a = t || {},
                          u = a.type,
                          s = a.node;
                        i.beforeRender(Da.ChildChanged + "-" + u, s);
                        var c = _(
                          null === (r = n) ||
                            void 0 === r ||
                            null === (o = r.export) ||
                            void 0 === o
                            ? void 0
                            : o.call(r, W.Render),
                          v,
                          e
                        );
                        y(
                          p.componentName +
                            "[" +
                            i.props.componentId +
                            "] component trigger onChildrenChange event",
                          c
                        ),
                          i.setState({ nodeChildren: c, childrenInState: !0 }),
                          i.judgeMiniUnitRender();
                      }
                    });
              a && this.disposeFunctions.push(a);
            }),
            (r.componentWillUnmount = function e() {
              this.disposeFunctions.forEach(function (e) {
                return e();
              });
            }),
            (r.render = function t() {
              if (!this.state.visible || !this.state.condition) return null;
              var n = this.props,
                r = n.forwardedRef,
                o = C()(n, Ba),
                i = A()(
                  {},
                  o,
                  this.state.nodeCacheProps || {},
                  this.state.nodeProps || {},
                  { children: [], __id: this.props.componentId, ref: r }
                );
              return (
                delete i.__inner__,
                O.createElement(e, i, this.hasChildren ? this.children : null)
              );
            }),
            T()(n, [
              {
                key: "autoRepaintNode",
                get: function e() {
                  return null == P ? void 0 : P.autoRepaintNode;
                },
              },
              {
                key: "hasChildren",
                get: function e() {
                  var t = this.props.children;
                  return (
                    this.state.childrenInState && (t = this.state.nodeChildren),
                    Array.isArray(t) ? Boolean(t && t.length) : Boolean(t)
                  );
                },
              },
              {
                key: "children",
                get: function e() {
                  return this.state.childrenInState
                    ? this.state.nodeChildren
                    : this.props.children && !Array.isArray(this.props.children)
                    ? [this.props.children]
                    : this.props.children && this.props.children.length
                    ? this.props.children
                    : [];
                },
              },
              {
                key: "leaf",
                get: function e() {
                  var t;
                  if (
                    null === (t = this.props._leaf) ||
                    void 0 === t ||
                    !t.isMock
                  )
                    return null == j ? void 0 : j(B);
                },
              },
            ]),
            n
          );
        })(I);
        H.displayName = p.componentName;
        var U = k(function (e, t) {
          return M(H, A()({}, e, { forwardedRef: t }));
        });
        return (
          ((U = We(U, e)).displayName = e.displayName),
          Ua.component.set(B, U),
          U
        );
      }
      function za(e, t) {
        return !!hn(e) || (!!Array.isArray(e) && (!t || e.length > 0));
      }
      function qa(e) {
        return (qa =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var Ja = ["ref"];
      function $a(e, t, n, r, o) {
        if (e && xi(t) && n) {
          var i,
            a = Ti(t, "lifeCycles", {})[n];
          if (a)
            if (
              ((hn(a) || yn(a)) && (a = o ? Bi(a, e) : Ii(a, e)),
              "function" == typeof a)
            )
              try {
                return a.apply(e, r);
              } catch (e) {
                console.error(
                  "[" +
                    t.componentName +
                    "]\u751f\u547d\u5468\u671f" +
                    n +
                    "\u51fa\u9519",
                  e
                );
              }
            else
              console.error(
                "\u751f\u547d\u5468\u671f" + n + "\u7c7b\u578b\u4e0d\u7b26",
                a
              );
        }
      }
      function Ka(e) {
        if (e) {
          if (!e.props) return e.children;
          if (!e.children) return e.props.children;
          if (!e.props.children) return e.children;
          var t = [].concat(e.children);
          return (
            Array.isArray(e.props.children)
              ? (t = t.concat(e.props.children))
              : t.push(e.props.children),
            t
          );
        }
      }
      function Wa() {
        var e,
          t,
          n = w.getRenderers().BaseRenderer;
        if (n) return n;
        var r = w.getRuntime(),
          o = r.Component,
          i = r.createElement,
          a = Sr(),
          u = Ar(),
          s = O(),
          c = { EXTEND: "extend", BORDER: "border", PREVIEW: "preview" },
          l = ["Dialog", "Overlay", "Animate", "ConfigProvider"],
          f = "item",
          p = "index",
          h = 0;
        return (
          ((e = (function (e) {
            function t(t, n) {
              var r, o;
              return (
                ((o = e.call(this, t, n) || this).appHelper = void 0),
                (o.i18n = void 0),
                (o.getLocale = void 0),
                (o.setLocale = void 0),
                (o.dataSourceMap = {}),
                (o.__namespace = "base"),
                (o.__compScopes = {}),
                (o.__instanceMap = {}),
                (o.__dataHelper = void 0),
                (o.__customMethodsList = []),
                (o.__parseExpression = void 0),
                (o.__ref = void 0),
                (o.__styleElement = void 0),
                (o.reloadDataSource = function () {
                  return new Promise(function (e, t) {
                    if ((o.__debug("reload data source"), !o.__dataHelper))
                      return e({});
                    o.__dataHelper
                      .getInitData()
                      .then(function (t) {
                        if (Object(zt.isEmpty)(t))
                          return o.forceUpdate(), e({});
                        o.setState(t, e);
                      })
                      .catch(function (e) {
                        t(e);
                      });
                  });
                }),
                (o.__excuteLifeCycleMethod = function (e, t) {
                  $a(N()(o), o.props.__schema, e, t, o.props.thisRequiredInJSE);
                }),
                (o._getComponentView = function (e) {
                  var t = o.props.__components;
                  if (t) return t[e];
                }),
                (o.__bindCustomMethods = function (e) {
                  var t = e.__schema,
                    n = Object.keys(t.methods || {}) || [];
                  (o.__customMethodsList || []).forEach(function (e) {
                    n.includes(e) || delete o[e];
                  }),
                    (o.__customMethodsList = n),
                    Vi(t.methods, function (e, t) {
                      var n = e;
                      (hn(n) || yn(n)) && (n = o.__parseExpression(n, N()(o))),
                        "function" == typeof n
                          ? (o[t] = n.bind(N()(o)))
                          : console.error(
                              "custom method " +
                                t +
                                " can not be parsed to a valid function",
                              n
                            );
                    });
                }),
                (o.__generateCtx = function (e) {
                  var t = o.context,
                    n = t.pageContext,
                    r = t.compContext,
                    i;
                  Vi(A()({ page: n, component: r }, e), function (e, t) {
                    o[t] = e;
                  });
                }),
                (o.__parseData = function (e, t) {
                  var n = o.props,
                    r = n.__ctx,
                    i = n.thisRequiredInJSE;
                  return Gi(e, t || r || N()(o), { thisRequiredInJSE: i });
                }),
                (o.__initDataSource = function (e) {
                  var t;
                  if (e) {
                    var n,
                      r = { list: [] },
                      i = (e.__schema || {}).dataSource || r,
                      a;
                    if (
                      !(
                        null === (t = e.__appHelper) ||
                        void 0 === t ||
                        !t.requestHandlersMap
                      )
                    )
                      (o.__dataHelper = {
                        updateConfig: function t(n) {
                          var r = Object(M.create)(
                              null != n ? n : {},
                              N()(o),
                              e.__appHelper.requestHandlersMap
                                ? {
                                    requestHandlersMap:
                                      e.__appHelper.requestHandlersMap,
                                  }
                                : void 0
                            ),
                            i = r.dataSourceMap,
                            a = r.reloadDataSource;
                          return (
                            (o.reloadDataSource = function () {
                              return new Promise(function (e) {
                                o.__debug("reload data source"),
                                  a().then(function () {
                                    e({});
                                  });
                              });
                            }),
                            i
                          );
                        },
                      }),
                        (o.dataSourceMap = o.__dataHelper.updateConfig(i));
                    else {
                      var u = e.__appHelper;
                      (o.__dataHelper = new ka(N()(o), i, u, function (e) {
                        return o.__parseData(e);
                      })),
                        (o.dataSourceMap = o.__dataHelper.dataSourceMap),
                        (o.reloadDataSource = function () {
                          return new Promise(function (e, t) {
                            if (
                              (o.__debug("reload data source"), !o.__dataHelper)
                            )
                              return e({});
                            o.__dataHelper
                              .getInitData()
                              .then(function (t) {
                                if (Object(zt.isEmpty)(t)) return e({});
                                o.setState(t, e);
                              })
                              .catch(function (e) {
                                t(e);
                              });
                          });
                        });
                    }
                  }
                }),
                (o.__initI18nAPIs = function () {
                  (o.i18n = function (e, t) {
                    void 0 === t && (t = {});
                    var n = o.props,
                      r,
                      i;
                    return Ri(e, t, n.locale, n.messages);
                  }),
                    (o.getLocale = function () {
                      return o.props.locale;
                    }),
                    (o.setLocale = function (e) {
                      var t,
                        n,
                        r,
                        i =
                          null === (t = o.appHelper) ||
                          void 0 === t ||
                          null === (n = t.utils) ||
                          void 0 === n ||
                          null === (r = n.i18n) ||
                          void 0 === r
                            ? void 0
                            : r.setLocale;
                      if (i && "function" == typeof i) return i(e);
                      console.warn(
                        "initI18nAPIs Failed, i18n only works when appHelper.utils.i18n.setLocale() exists"
                      );
                    });
                }),
                (o.__writeCss = function (e) {
                  var t = Ti(e.__schema, "css", "");
                  o.__debug("create this.styleElement with css", t);
                  var n = o.__styleElement,
                    r;
                  o.__styleElement ||
                    (((n = document.createElement("style")).type = "text/css"),
                    n.setAttribute("from", "style-sheet"),
                    (
                      document.head || document.getElementsByTagName("head")[0]
                    ).appendChild(n),
                    (o.__styleElement = n),
                    o.__debug(
                      "this.styleElement is created",
                      o.__styleElement
                    ));
                  n.innerHTML !== t && (n.innerHTML = t);
                }),
                (o.__render = function () {
                  var e = o.props.__schema;
                  o.__excuteLifeCycleMethod("render"), o.__writeCss(o.props);
                  var t = o.context.engine,
                    n;
                  t &&
                    (t.props.onCompGetCtx(e, N()(o)),
                    o.__designModeIsDesign &&
                      (o.__bindCustomMethods(o.props),
                      (o.dataSourceMap =
                        null === (n = o.__dataHelper) || void 0 === n
                          ? void 0
                          : n.updateConfig(e.dataSource))));
                }),
                (o.__getRef = function (e) {
                  var t,
                    n = o.context.engine,
                    r = o.props.__schema;
                  e &&
                    (null == n ||
                      null === (t = n.props) ||
                      void 0 === t ||
                      t.onCompGetRef(r, e)),
                    (o.__ref = e);
                }),
                (o.__createDom = function () {
                  var e = o.props,
                    t = e.__schema,
                    n = e.__ctx,
                    r = e.__components,
                    i = void 0 === r ? {} : r,
                    a = {};
                  a.__proto__ = n || N()(o);
                  var u = Ka(t),
                    s = i[t.componentName];
                  s || o.__debug(t.componentName + " is invalid!");
                  var c = {
                    schema: t,
                    Comp: o.__getHOCWrappedComponent(s, t, a),
                  };
                  return o.__createVirtualDom(u, a, c);
                }),
                (o.__createVirtualDom = function (e, t, n, r) {
                  if ((void 0 === r && (r = ""), !e)) return null;
                  var s = t,
                    f = e,
                    p,
                    d = (o.context || {}).engine;
                  if (!d)
                    return o.__debug("this.context.engine is invalid!"), null;
                  try {
                    var v,
                      y,
                      m,
                      b,
                      _,
                      g,
                      w = o.props || {},
                      O = w.__appHelper,
                      E = w.__components,
                      S = void 0 === E ? {} : E;
                    if (hn(f)) return o.__parseExpression(f, s);
                    if (fn(f)) return Fi(f, s);
                    if (Pi(f)) return o.__createVirtualDom(f.value, s, n);
                    if ("string" == typeof f) return f;
                    if ("number" == typeof f || "boolean" == typeof f)
                      return String(f);
                    if (Array.isArray(f))
                      return 1 === f.length
                        ? o.__createVirtualDom(f[0], s, n)
                        : f.map(function (e, t) {
                            var r;
                            return o.__createVirtualDom(
                              e,
                              s,
                              n,
                              null != e &&
                                null !== (r = e.__ctx) &&
                                void 0 !== r &&
                                r.lceKey
                                ? ""
                                : String(t)
                            );
                          });
                    var x = Ka(f);
                    if (!f.componentName)
                      return void Pr.error(
                        "The componentName in the schema is invalid, please check the schema: ",
                        f
                      );
                    if ("Fragment" === f.componentName && x) {
                      var j = hn(x) ? o.__parseExpression(x, s) : x;
                      return o.__createVirtualDom(j, s, n);
                    }
                    if (
                      "Text" === f.componentName &&
                      "string" ==
                        typeof (null === (v = f.props) || void 0 === v
                          ? void 0
                          : v.text)
                    ) {
                      var P,
                        T =
                          null === (P = f.props) || void 0 === P
                            ? void 0
                            : P.text;
                      (f = A()({}, f)).children = [T];
                    }
                    if (f.$$typeof) return f;
                    if (!xi(f)) return null;
                    var R =
                        S[f.componentName] ||
                        (null === (y = o.props.__container) ||
                        void 0 === y ||
                        null === (m = y.components) ||
                        void 0 === m
                          ? void 0
                          : m[f.componentName]),
                      L = Ci(f)
                        ? { __schema: f, __appHelper: O, __components: S }
                        : {},
                      k;
                    if (!R)
                      return (
                        console.error(
                          f.componentName +
                            " component is not found in components list! component list is:",
                          S ||
                            (null === (k = o.props.__container) || void 0 === k
                              ? void 0
                              : k.components)
                        ),
                        d.createElement(
                          d.getNotFoundComponent(),
                          {
                            componentName: f.componentName,
                            componentId: f.id,
                            enableStrictNotFoundMode:
                              d.props.enableStrictNotFoundMode,
                            ref: function e(t) {
                              var n;
                              t &&
                                (null === (n = d.props) ||
                                  void 0 === n ||
                                  n.onCompGetRef(f, t));
                            },
                          },
                          o.__getSchemaChildrenVirtualDom(f, s, R)
                        )
                      );
                    if (null != f.loop) {
                      var M = o.__parseData(f.loop, s),
                        I;
                      if (za(M, o.__designModeIsDesign))
                        return o.__createLoopVirtualDom(
                          A()({}, f, { loop: M }),
                          s,
                          n,
                          r
                        );
                    }
                    var B =
                        null == f.condition || o.__parseData(f.condition, s),
                      D = o.__designModeIsDesign;
                    if (!B && !D) return null;
                    var H = "";
                    if (R.generateScope) {
                      var U,
                        F = o.__parseExpression(
                          null === (U = f.props) || void 0 === U
                            ? void 0
                            : U.key,
                          s
                        );
                      F
                        ? (H = F)
                        : f.__ctx
                        ? (H = f.__ctx.lceKey + (void 0 !== r ? "_" + r : ""))
                        : ((f.__ctx = { lceKey: "lce" + ++h }),
                          (H = f.__ctx.lceKey)),
                        o.__compScopes[H] ||
                          (o.__compScopes[H] = R.generateScope(N()(o), f));
                    }
                    if (H && o.__compScopes[H]) {
                      var V = A()({}, o.__compScopes[H]);
                      (V.__proto__ = s), (s = V);
                    }
                    null !== (b = d.props) &&
                      void 0 !== b &&
                      b.designMode &&
                      (L.__designMode = d.props.designMode),
                      o.__designModeIsDesign && (L.__tag = Math.random());
                    var G = {},
                      z =
                        o.__getComponentProps(
                          f,
                          s,
                          R,
                          A()({}, G, { props: Li(G.props, "name") })
                        ) || {};
                    if (
                      (o.__componentHOCs.forEach(function (e) {
                        R = e(R, {
                          schema: f,
                          componentInfo: G,
                          baseRenderer: N()(o),
                          scope: s,
                        });
                      }),
                      Ni(R) || ((R = Ma(R)), (S[f.componentName] = R)),
                      (L.ref = function (e) {
                        var t;
                        o.$(z.fieldId || z.ref, e);
                        var n = z.ref;
                        n && "string" == typeof n && (o[n] = e),
                          e &&
                            (null === (t = d.props) ||
                              void 0 === t ||
                              t.onCompGetRef(f, e));
                      }),
                      H && o.__compScopes[H] && (z.__scope = o.__compScopes[H]),
                      null !== (_ = f) &&
                        void 0 !== _ &&
                        null !== (g = _.__ctx) &&
                        void 0 !== g &&
                        g.lceKey)
                    ) {
                      var q;
                      if (!Ci(f))
                        null === (q = d.props) ||
                          void 0 === q ||
                          q.onCompGetCtx(f, s);
                      z.key =
                        z.key ||
                        f.__ctx.lceKey +
                          "_" +
                          (f.__ctx.idx || 0) +
                          "_" +
                          (void 0 !== r ? r : "");
                    } else
                      ("number" != typeof r && "string" != typeof r) ||
                        z.key ||
                        (z.key = r);
                    (z.__id = f.id), z.key || (z.key = z.__id);
                    var J = o.__getSchemaChildrenVirtualDom(f, s, R),
                      $ = function e(t) {
                        return d.createElement(R, t, J);
                      };
                    if (
                      d &&
                      [c.EXTEND, c.BORDER].includes(d.props.designMode)
                    ) {
                      if (l.includes(f.componentName)) {
                        var K = L.ref,
                          W = C()(L, Ja);
                        return i(
                          a,
                          { ref: K, __designMode: d.props.designMode },
                          $(A()({}, z, W))
                        );
                      }
                      if (null != G && G.parentRule) {
                        var X = G.parentRule.split(","),
                          Y = n.schema,
                          Z = void 0 === Y ? { componentName: "" } : Y,
                          Q = n.Comp;
                        X.includes(Z.componentName) && Q === S[Z.componentName]
                          ? (z.__disableDesignMode = !0)
                          : ((z.__componentName = f.componentName), (R = u));
                      }
                    }
                    return $(
                      A()({}, z, L, {
                        __inner__: { hidden: f.hidden, condition: B },
                      })
                    );
                  } catch (e) {
                    return d.createElement(d.getFaultComponent(), {
                      error: e,
                      schema: f,
                      self: s,
                      parentInfo: n,
                      idx: r,
                    });
                  }
                }),
                (o.__getSchemaChildrenVirtualDom = function (e, t, n) {
                  var r = Ka(e),
                    i = [];
                  return (
                    r &&
                      (Array.isArray(r) || (r = [r]),
                      r.forEach(function (r) {
                        var a = o.__createVirtualDom(
                          hn(r) ? o.__parseExpression(r, t) : r,
                          t,
                          { schema: e, Comp: n }
                        );
                        i.push(a);
                      })),
                    i && i.length > 0 ? i : null
                  );
                }),
                (o.__getComponentProps = function (e, t, n, r) {
                  return (
                    (e &&
                      o.__parseProps(null == e ? void 0 : e.props, t, "", {
                        schema: e,
                        Comp: n,
                        componentInfo: A()({}, r || {}, {
                          props: Li((r || {}).props, "name"),
                        }),
                      })) ||
                    {}
                  );
                }),
                (o.__createLoopVirtualDom = function (e, t, n, r) {
                  if (Ci(e))
                    return console.warn("file type not support Loop"), null;
                  if (!Array.isArray(e.loop)) return null;
                  var i = (e.loopArgs && e.loopArgs[0]) || "item",
                    a = (e.loopArgs && e.loopArgs[1]) || "index",
                    u;
                  return e.loop.map(function (u, s) {
                    var c,
                      l = (((c = {})[i] = u), (c[a] = s), c);
                    return (
                      (l.__proto__ = t),
                      o.__createVirtualDom(
                        A()({}, e, { loop: void 0 }),
                        l,
                        n,
                        r ? r + "_" + s : s
                      )
                    );
                  });
                }),
                (o.__parseProps = function (e, t, n, r) {
                  var i,
                    a = e,
                    u = r.schema,
                    s = r.Comp,
                    c = r.componentInfo,
                    l = void 0 === c ? {} : c,
                    f = Ti(l.props, n),
                    p =
                      null == f || null === (i = f.extra) || void 0 === i
                        ? void 0
                        : i.propType,
                    h = function e(t) {
                      return p ? (ki(t, n, p, l.name) ? t : void 0) : t;
                    },
                    d = function e(n, r) {
                      if (Object(zt.isEmpty)(r)) {
                        var i = o.__createVirtualDom(n, t, {
                          schema: u,
                          Comp: s,
                        });
                        return h(i);
                      }
                      return h(function () {
                        for (
                          var e = arguments.length, o = new Array(e), i = 0;
                          i < e;
                          i++
                        )
                          o[i] = arguments[i];
                        var a = {};
                        return (
                          Array.isArray(r) &&
                            r.length &&
                            r.forEach(function (e, t) {
                              "string" == typeof e
                                ? (a[e] = o[t])
                                : e && "object" === qa(e) && (a[e.name] = o[t]);
                            }),
                          (a.__proto__ = t),
                          t.__createVirtualDom(n, a, { schema: u, Comp: s })
                        );
                      });
                    };
                  if (hn(a) && !xi((a = o.__parseExpression(a, t))) && !Pi(a))
                    return h(a);
                  var v = function e(t) {
                    return t[
                      t.use || (o.getLocale && o.getLocale()) || "zh-CN"
                    ];
                  };
                  if (fn(a)) {
                    var y = v(a);
                    if (!y) return Fi(a, t);
                    a = y;
                  }
                  if (
                    (Ui(a) && fn((a = a.value)) && (a = v(a)),
                    yn(a) && (a = Mi(a.value)),
                    Pi(a))
                  ) {
                    var m = a,
                      b = m.params,
                      _ = m.value;
                    if (!xi(_) || Object(zt.isEmpty)(_)) return;
                    return d(_, b);
                  }
                  if (xi(a)) {
                    var g,
                      w,
                      O,
                      E,
                      S,
                      x = !(
                        "ReactNode" !== (null == f ? void 0 : f.type) ||
                        "function" !==
                          (null == f || null === (g = f.props) || void 0 === g
                            ? void 0
                            : g.type)
                      ),
                      C = !!(
                        "Mixin" === (null == f ? void 0 : f.type) &&
                        (null == f ||
                        null === (w = f.props) ||
                        void 0 === w ||
                        null === (O = w.types) ||
                        void 0 === O
                          ? void 0
                          : O.indexOf("ReactNode")) > -1 &&
                        "function" ===
                          (null == f ||
                          null === (E = f.props) ||
                          void 0 === E ||
                          null === (S = E.reactNodeProps) ||
                          void 0 === S
                            ? void 0
                            : S.type)
                      ),
                      j = null,
                      A;
                    if (x)
                      j =
                        null == f || null === (A = f.props) || void 0 === A
                          ? void 0
                          : A.params;
                    else if (C) {
                      var P, T;
                      j =
                        null == f ||
                        null === (P = f.props) ||
                        void 0 === P ||
                        null === (T = P.reactNodeProps) ||
                        void 0 === T
                          ? void 0
                          : T.params;
                    }
                    return d(a, j);
                  }
                  if (Array.isArray(a))
                    return h(
                      a.map(function (e, i) {
                        return o.__parseProps(
                          e,
                          t,
                          n ? n + "." + i : "" + i,
                          r
                        );
                      })
                    );
                  if ("function" == typeof a) return h(a.bind(t));
                  if (a && "object" === qa(a)) {
                    if (a.$$typeof) return h(a);
                    var R = {};
                    return (
                      Vi(a, function (e, i) {
                        i.startsWith("__")
                          ? (R[i] = e)
                          : (R[i] = o.__parseProps(
                              e,
                              t,
                              n ? n + "." + i : i,
                              r
                            ));
                      }),
                      h(R)
                    );
                  }
                  return h("string" == typeof a ? a.trim() : a);
                }),
                (o.__debug = function () {
                  Pr.debug.apply(Pr, arguments);
                }),
                (o.__renderContextProvider = function (e, t) {
                  return i(s.Provider, {
                    value: A()(
                      {},
                      o.context,
                      { blockContext: N()(o) },
                      e || {}
                    ),
                    children: t || o.__createDom(),
                  });
                }),
                (o.__renderContextConsumer = function (e) {
                  return i(s.Consumer, {}, e);
                }),
                (o.__checkSchema = function (e, t) {
                  var n;
                  void 0 === t && (t = []);
                  var r = t;
                  "string" == typeof r && (r = [r]);
                  var i,
                    a = [Di(o.__namespace)].concat(r);
                  return (
                    !xi(e) ||
                    !a.includes(
                      null !== (n = null == e ? void 0 : e.componentName) &&
                        void 0 !== n
                        ? n
                        : ""
                    )
                  );
                }),
                (o.context = n),
                (o.__parseExpression =
                  null != t && t.thisRequiredInJSE ? Bi : Ii),
                o.__beforeInit(t),
                o.__init(t),
                o.__afterInit(t),
                o.__debug(
                  "constructor - " +
                    (null == t || null === (r = t.__schema) || void 0 === r
                      ? void 0
                      : r.fileName)
                ),
                o
              );
            }
            m()(t, e);
            var n = t.prototype;
            return (
              (n.__beforeInit = function e(t) {}),
              (n.__init = function e(t) {
                (this.appHelper = t.__appHelper),
                  (this.__compScopes = {}),
                  (this.__instanceMap = {}),
                  this.__bindCustomMethods(t),
                  this.__initI18nAPIs();
              }),
              (n.__afterInit = function e(t) {}),
              (t.getDerivedStateFromProps = function e(t, n) {
                return $a(
                  this,
                  null == t ? void 0 : t.__schema,
                  "getDerivedStateFromProps",
                  [t, n],
                  t.thisRequiredInJSE
                );
              }),
              (n.getSnapshotBeforeUpdate = (function () {
                var e = S()(
                  k.a.mark(function e() {
                    var t,
                      n,
                      r,
                      o,
                      i,
                      a = arguments;
                    return k.a.wrap(
                      function e(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              for (
                                r = a.length, o = new Array(r), i = 0;
                                i < r;
                                i++
                              )
                                o[i] = a[i];
                              this.__excuteLifeCycleMethod(
                                "getSnapshotBeforeUpdate",
                                o
                              ),
                                this.__debug(
                                  "getSnapshotBeforeUpdate - " +
                                    (null === (t = this.props) ||
                                    void 0 === t ||
                                    null === (n = t.__schema) ||
                                    void 0 === n
                                      ? void 0
                                      : n.fileName)
                                );
                            case 3:
                            case "end":
                              return u.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })()),
              (n.componentDidMount = (function () {
                var e = S()(
                  k.a.mark(function e() {
                    var t,
                      n,
                      r,
                      o,
                      i,
                      a = arguments;
                    return k.a.wrap(
                      function e(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              for (
                                this.reloadDataSource(),
                                  r = a.length,
                                  o = new Array(r),
                                  i = 0;
                                i < r;
                                i++
                              )
                                o[i] = a[i];
                              this.__excuteLifeCycleMethod(
                                "componentDidMount",
                                o
                              ),
                                this.__debug(
                                  "componentDidMount - " +
                                    (null === (t = this.props) ||
                                    void 0 === t ||
                                    null === (n = t.__schema) ||
                                    void 0 === n
                                      ? void 0
                                      : n.fileName)
                                );
                            case 4:
                            case "end":
                              return u.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })()),
              (n.componentDidUpdate = (function () {
                var e = S()(
                  k.a.mark(function e() {
                    var t,
                      n,
                      r,
                      o = arguments;
                    return k.a.wrap(
                      function e(i) {
                        for (;;)
                          switch ((i.prev = i.next)) {
                            case 0:
                              for (
                                t = o.length, n = new Array(t), r = 0;
                                r < t;
                                r++
                              )
                                n[r] = o[r];
                              this.__excuteLifeCycleMethod(
                                "componentDidUpdate",
                                n
                              ),
                                this.__debug(
                                  "componentDidUpdate - " +
                                    this.props.__schema.fileName
                                );
                            case 3:
                            case "end":
                              return i.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })()),
              (n.componentWillUnmount = (function () {
                var e = S()(
                  k.a.mark(function e() {
                    var t,
                      n,
                      r,
                      o,
                      i,
                      a = arguments;
                    return k.a.wrap(
                      function e(u) {
                        for (;;)
                          switch ((u.prev = u.next)) {
                            case 0:
                              for (
                                r = a.length, o = new Array(r), i = 0;
                                i < r;
                                i++
                              )
                                o[i] = a[i];
                              this.__excuteLifeCycleMethod(
                                "componentWillUnmount",
                                o
                              ),
                                this.__debug(
                                  "componentWillUnmount - " +
                                    (null === (t = this.props) ||
                                    void 0 === t ||
                                    null === (n = t.__schema) ||
                                    void 0 === n
                                      ? void 0
                                      : n.fileName)
                                );
                            case 3:
                            case "end":
                              return u.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })()),
              (n.componentDidCatch = (function () {
                var e = S()(
                  k.a.mark(function e() {
                    var t,
                      n,
                      r,
                      o = arguments;
                    return k.a.wrap(
                      function e(i) {
                        for (;;)
                          switch ((i.prev = i.next)) {
                            case 0:
                              for (
                                t = o.length, n = new Array(t), r = 0;
                                r < t;
                                r++
                              )
                                n[r] = o[r];
                              this.__excuteLifeCycleMethod(
                                "componentDidCatch",
                                n
                              ),
                                console.warn(n);
                            case 3:
                            case "end":
                              return i.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })()),
              (n.shouldComponentUpdate = function e() {
                var t, n, r, o;
                return (
                  null === (t = (n = this.props).getSchemaChangedSymbol) ||
                  void 0 === t ||
                  !t.call(n) ||
                  null === (r = this.props.__container) ||
                  void 0 === r ||
                  !r.rerender ||
                  (null === (o = this.props.__container) ||
                    void 0 === o ||
                    o.rerender(),
                  !1)
                );
              }),
              (n.forceUpdate = function t() {
                this.shouldComponentUpdate() &&
                  e.prototype.forceUpdate.call(this);
              }),
              (n.$ = function e(t, n) {
                return (
                  (this.__instanceMap = this.__instanceMap || {}),
                  t && "string" == typeof t
                    ? (n && (this.__instanceMap[t] = n), this.__instanceMap[t])
                    : this.__instanceMap
                );
              }),
              (n.__getHOCWrappedComponent = function e(t, n, r) {
                var o = this,
                  i = t;
                return (
                  this.__componentHOCs.forEach(function (e) {
                    i = e(i || a, {
                      schema: n,
                      componentInfo: {},
                      baseRenderer: o,
                      scope: r,
                    });
                  }),
                  i
                );
              }),
              (n.__renderComp = function e(t, n) {
                var r = t,
                  o = this.props,
                  i = o.__schema,
                  a = o.__ctx,
                  u = {};
                (u.__proto__ = a || this),
                  (r = this.__getHOCWrappedComponent(r, i, u));
                var s = this.__parseProps(null == i ? void 0 : i.props, u, "", {
                    schema: i,
                    Comp: r,
                    componentInfo: {},
                  }),
                  c = s.className,
                  l = {},
                  f,
                  p = (this.context || {}).engine;
                if (!p) return null;
                this.__designModeIsDesign && (l.__tag = Math.random());
                var h = p.createElement(
                  r,
                  A()(
                    {},
                    s,
                    this.props,
                    {
                      ref: this.__getRef,
                      className: v()(
                        Ai(null == i ? void 0 : i.fileName),
                        c,
                        this.props.className
                      ),
                      __id: null == i ? void 0 : i.id,
                    },
                    l
                  ),
                  this.__createDom()
                );
                return this.__renderContextProvider(n, h);
              }),
              (n.__renderContent = function e(t) {
                var n = this.props.__schema,
                  r = this.__parseData(n.props),
                  o = v()(
                    "lce-" + this.__namespace,
                    Ai(n.fileName),
                    r.className,
                    this.props.className
                  ),
                  a = A()(
                    {},
                    r.style || {},
                    "object" === qa(this.props.style) ? this.props.style : {}
                  ),
                  u = this.props.id || r.id;
                return i(
                  "div",
                  { ref: this.__getRef, className: o, id: u, style: a },
                  t
                );
              }),
              (n.render = function e() {
                return null;
              }),
              T()(t, [
                {
                  key: "__componentHOCs",
                  get: function e() {
                    return this.__designModeIsDesign ? [Ga] : [];
                  },
                },
                {
                  key: "__designModeIsDesign",
                  get: function e() {
                    var t,
                      n,
                      r = (this.context || {}).engine;
                    return (
                      "design" ===
                      (null == r || null === (t = r.props) || void 0 === t
                        ? void 0
                        : t.designMode)
                    );
                  },
                },
                {
                  key: "requestHandlersMap",
                  get: function e() {
                    var t;
                    return null === (t = this.appHelper) || void 0 === t
                      ? void 0
                      : t.requestHandlersMap;
                  },
                },
                {
                  key: "utils",
                  get: function e() {
                    var t;
                    return null === (t = this.appHelper) || void 0 === t
                      ? void 0
                      : t.utils;
                  },
                },
                {
                  key: "constants",
                  get: function e() {
                    var t;
                    return null === (t = this.appHelper) || void 0 === t
                      ? void 0
                      : t.constants;
                  },
                },
                {
                  key: "history",
                  get: function e() {
                    var t;
                    return null === (t = this.appHelper) || void 0 === t
                      ? void 0
                      : t.history;
                  },
                },
                {
                  key: "location",
                  get: function e() {
                    var t;
                    return null === (t = this.appHelper) || void 0 === t
                      ? void 0
                      : t.location;
                  },
                },
                {
                  key: "match",
                  get: function e() {
                    var t;
                    return null === (t = this.appHelper) || void 0 === t
                      ? void 0
                      : t.match;
                  },
                },
              ]),
              t
            );
          })(o)).displayName = "BaseRenderer"),
          (e.defaultProps = { __schema: {} }),
          (e.contextType = s),
          e
        );
      }
      function Xa() {
        var e, t;
        return (
          ((e = (function (e) {
            function t() {
              for (
                var t, n = arguments.length, r = new Array(n), o = 0;
                o < n;
                o++
              )
                r[o] = arguments[o];
              return (
                ((t = e.call.apply(e, [this].concat(r)) || this).__namespace =
                  "page"),
                t
              );
            }
            m()(t, e);
            var n = t.prototype;
            return (
              (n.__afterInit = function e(t) {
                this.__generateCtx({ page: this });
                var n = t.__schema || {};
                (this.state = this.__parseData(n.state || {})),
                  this.__initDataSource(t);
                for (
                  var r = arguments.length,
                    o = new Array(r > 1 ? r - 1 : 0),
                    i = 1;
                  i < r;
                  i++
                )
                  o[i - 1] = arguments[i];
                this.__excuteLifeCycleMethod("constructor", [t].concat(o));
              }),
              (n.componentDidUpdate = (function () {
                var t = S()(
                  k.a.mark(function t(n, r, o) {
                    var i, a, u;
                    return k.a.wrap(
                      function t(s) {
                        for (;;)
                          switch ((s.prev = s.next)) {
                            case 0:
                              (a = this.props.__ctx),
                                JSON.stringify(n.__schema.state) !=
                                  JSON.stringify(this.props.__schema.state) &&
                                  ((u = this.__parseData(
                                    this.props.__schema.state,
                                    a
                                  )),
                                  this.setState(u)),
                                null === (i = e.prototype.componentDidUpdate) ||
                                  void 0 === i ||
                                  i.call(this, n, r, o);
                            case 3:
                            case "end":
                              return s.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function n(e, n, r) {
                  return t.apply(this, arguments);
                }
                return n;
              })()),
              (n.render = function e() {
                var n = this.props,
                  r = n.__schema,
                  o = n.__components;
                if (this.__checkSchema(r))
                  return "\u9875\u9762schema\u7ed3\u6784\u5f02\u5e38\uff01";
                this.__debug(t.displayName + " render - " + r.fileName),
                  this.__bindCustomMethods(this.props),
                  this.__initDataSource(this.props),
                  this.__generateCtx({ page: this }),
                  this.__render();
                var i = o.Page;
                return i
                  ? this.__renderComp(i, { pageContext: this })
                  : this.__renderContent(
                      this.__renderContextProvider({ pageContext: this })
                    );
              }),
              t
            );
          })(Wa())).displayName = "PageRenderer"),
          e
        );
      }
      function Ya() {
        var e, t;
        return (
          ((e = (function (e) {
            function t() {
              for (
                var t, n = arguments.length, r = new Array(n), o = 0;
                o < n;
                o++
              )
                r[o] = arguments[o];
              return (
                ((t = e.call.apply(e, [this].concat(r)) || this).__namespace =
                  "component"),
                t
              );
            }
            m()(t, e);
            var n = t.prototype;
            return (
              (n.__afterInit = function e(t) {
                this.__generateCtx({ component: this });
                var n = t.__schema || {};
                (this.state = this.__parseData(n.state || {})),
                  this.__initDataSource(t),
                  this.__excuteLifeCycleMethod("constructor", arguments);
              }),
              (n.render = function e() {
                var n,
                  r = this.props,
                  o = r.__schema,
                  i = r.__components;
                if (this.__checkSchema(o))
                  return "\u81ea\u5b9a\u4e49\u7ec4\u4ef6 schema \u7ed3\u6784\u5f02\u5e38\uff01";
                this.__debug(t.displayName + " render - " + o.fileName),
                  this.__generateCtx({ component: this }),
                  this.__render();
                var a = this.__parseData(
                  null === (n = o.props) || void 0 === n
                    ? void 0
                    : n.noContainer
                );
                if ((this.__bindCustomMethods(this.props), a))
                  return this.__renderContextProvider({ compContext: this });
                var u =
                  null == i ? void 0 : i[null == o ? void 0 : o.componentName];
                return u
                  ? this.__renderComp(
                      u,
                      this.__renderContextProvider({ compContext: this })
                    )
                  : this.__renderContent(
                      this.__renderContextProvider({ compContext: this })
                    );
              }),
              (n.componentDidMount = function e() {}),
              (n.getSnapshotBeforeUpdate = function e() {}),
              (n.componentDidUpdate = function e() {}),
              (n.componentWillUnmount = function e() {}),
              (n.componentDidCatch = function e() {}),
              t
            );
          })(Wa())).displayName = "CompRenderer"),
          e
        );
      }
      function Za() {
        var e, t;
        return (
          ((e = (function (e) {
            function t() {
              for (
                var t, n = arguments.length, r = new Array(n), o = 0;
                o < n;
                o++
              )
                r[o] = arguments[o];
              return (
                ((t = e.call.apply(e, [this].concat(r)) || this).__namespace =
                  "block"),
                t
              );
            }
            m()(t, e);
            var n = t.prototype;
            return (
              (n.__afterInit = function e(t) {
                this.__generateCtx({});
                var n = t.__schema || {};
                (this.state = this.__parseData(n.state || {})),
                  this.__initDataSource(t),
                  this.__excuteLifeCycleMethod(
                    "constructor",
                    Array.prototype.slice.call(arguments)
                  );
              }),
              (n.render = function e() {
                var n = this.props,
                  r = n.__schema,
                  o = n.__components;
                if (this.__checkSchema(r, "Div"))
                  return "\u533a\u5757 schema \u7ed3\u6784\u5f02\u5e38\uff01";
                this.__debug(
                  t.displayName +
                    " render - " +
                    (null == r ? void 0 : r.fileName)
                ),
                  this.__generateCtx({}),
                  this.__render();
                var i = o.Block;
                return i
                  ? this.__renderComp(i, {})
                  : this.__renderContent(this.__renderContextProvider());
              }),
              t
            );
          })(Wa())).displayName = "BlockRenderer"),
          e
        );
      }
      function Qa() {
        var e, t;
        return (
          ((e = (function (e) {
            function t() {
              for (
                var t, n = arguments.length, r = new Array(n), o = 0;
                o < n;
                o++
              )
                r[o] = arguments[o];
              return (
                ((t = e.call.apply(e, [this].concat(r)) || this).__namespace =
                  "addon"),
                (t.addonKey = void 0),
                (t.appHelper = void 0),
                (t.open = void 0),
                (t.close = void 0),
                t
              );
            }
            m()(t, e);
            var n = t.prototype;
            return (
              (n.__afterInit = function e(t) {
                var n;
                this.__generateCtx({ component: this });
                var r = t.__schema || {};
                if (
                  ((this.state = this.__parseData(r.state || {})),
                  Object(zt.isEmpty)(t.config) ||
                    null === (n = t.config) ||
                    void 0 === n ||
                    !n.addonKey)
                )
                  return (
                    console.warn("lce addon has wrong config"),
                    void this.setState({ __hasError: !0 })
                  );
                (this.addonKey = t.config.addonKey),
                  (this.appHelper.addons = this.appHelper.addons || {}),
                  (this.appHelper.addons[this.addonKey] = this),
                  this.__initDataSource(t),
                  (this.open = this.open || function () {}),
                  (this.close = this.close || function () {}),
                  this.__excuteLifeCycleMethod(
                    "constructor",
                    Array.prototype.slice.call(arguments)
                  );
              }),
              (n.componentWillUnmount = (function () {
                var t = S()(
                  k.a.mark(function t() {
                    var n,
                      r,
                      o = arguments;
                    return k.a.wrap(
                      function t(i) {
                        for (;;)
                          switch ((i.prev = i.next)) {
                            case 0:
                              null === (n = e.prototype.componentWillUnmount) ||
                                void 0 === n ||
                                n.apply(this, Array.prototype.slice.call(o)),
                                (r = this.props.config || {}) &&
                                  this.appHelper.addons &&
                                  delete this.appHelper.addons[r.addonKey];
                            case 3:
                            case "end":
                              return i.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                function n() {
                  return t.apply(this, arguments);
                }
                return n;
              })()),
              (n.render = function e() {
                var n = this.props.__schema;
                return this.__checkSchema(n)
                  ? "\u63d2\u4ef6 schema \u7ed3\u6784\u5f02\u5e38\uff01"
                  : (this.__debug(t.displayName + " render - " + n.fileName),
                    this.__generateCtx({ component: this }),
                    this.__render(),
                    this.__renderContent(
                      this.__renderContextProvider({ compContext: this })
                    ));
              }),
              T()(t, [
                {
                  key: "utils",
                  get: function e() {
                    var t,
                      n = (this.context.config || {}).utils,
                      r = void 0 === n ? {} : n;
                    return A()({}, this.appHelper.utils, r);
                  },
                },
              ]),
              t
            );
          })(Wa())).displayName = "AddonRenderer"),
          (e.propTypes = { config: Cr.a.object, __schema: Cr.a.object }),
          (e.defaultProps = { config: {}, __schema: {} }),
          e
        );
      }
      function eu() {
        var e, t;
        return (
          ((e = (function (e) {
            function t() {
              for (
                var t, n = arguments.length, r = new Array(n), o = 0;
                o < n;
                o++
              )
                r[o] = arguments[o];
              return (
                ((t = e.call.apply(e, [this].concat(r)) || this).__namespace =
                  "temp"),
                (t.cacheSetState = void 0),
                t
              );
            }
            m()(t, e);
            var n = t.prototype;
            return (
              (n.__init = function e() {
                (this.state = {}), (this.cacheSetState = {});
              }),
              (n.componentDidMount = (function () {
                var e = S()(
                  k.a.mark(function e() {
                    var t = this,
                      n,
                      r;
                    return k.a.wrap(
                      function e(o) {
                        for (;;)
                          switch ((o.prev = o.next)) {
                            case 0:
                              if ((n = this.props.__ctx)) {
                                o.next = 3;
                                break;
                              }
                              return o.abrupt("return");
                            case 3:
                              (r = n.setState),
                                (this.cacheSetState = r),
                                (n.setState = function () {
                                  for (
                                    var e = arguments.length,
                                      o = new Array(e),
                                      i = 0;
                                    i < e;
                                    i++
                                  )
                                    o[i] = arguments[i];
                                  r.call.apply(r, [n].concat(o)),
                                    setTimeout(function () {
                                      return t.forceUpdate();
                                    }, 0);
                                }),
                                this.__debug(
                                  "componentDidMount - " +
                                    this.props.__schema.fileName
                                );
                            case 7:
                            case "end":
                              return o.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })()),
              (n.componentDidUpdate = (function () {
                var e = S()(
                  k.a.mark(function e() {
                    return k.a.wrap(
                      function e(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              this.__debug(
                                "componentDidUpdate - " +
                                  this.props.__schema.fileName
                              );
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })()),
              (n.componentWillUnmount = (function () {
                var e = S()(
                  k.a.mark(function e() {
                    var t;
                    return k.a.wrap(
                      function e(n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (
                                (t = this.props.__ctx) &&
                                this.cacheSetState
                              ) {
                                n.next = 3;
                                break;
                              }
                              return n.abrupt("return");
                            case 3:
                              (t.setState = this.cacheSetState),
                                delete this.cacheSetState,
                                this.__debug(
                                  "componentWillUnmount - " +
                                    this.props.__schema.fileName
                                );
                            case 6:
                            case "end":
                              return n.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })()),
              (n.componentDidCatch = (function () {
                var e = S()(
                  k.a.mark(function e(t) {
                    return k.a.wrap(
                      function e(n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              console.warn(t),
                                this.__debug(
                                  "componentDidCatch - " +
                                    this.props.__schema.fileName
                                );
                            case 2:
                            case "end":
                              return n.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })()),
              (n.render = function e() {
                var n = this.props,
                  r = n.__schema,
                  o = n.__ctx;
                return this.__checkSchema(r)
                  ? "\u4e0b\u94bb\u7f16\u8f91 schema \u7ed3\u6784\u5f02\u5e38\uff01"
                  : (this.__debug(
                      t.displayName +
                        " render - " +
                        (null == r ? void 0 : r.fileName)
                    ),
                    this.__renderContent(
                      this.__renderContextProvider({ __ctx: o })
                    ));
              }),
              t
            );
          })(Wa())).displayName = "TempRenderer"),
          e
        );
      }
      var tu = n(64),
        nu = n.n(tu);
      function ru() {
        var e,
          t = w.getRuntime(),
          n = t.PureComponent,
          r = t.Component,
          o = t.createElement,
          i = t.findDOMNode,
          a = w.getRenderers(),
          u = Wa(),
          s = O(),
          c = Sr(),
          l = w.getConfigProvider() || c,
          f = nu()("renderer:entry"),
          p = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            var n;
            return (
              m()(t, e),
              (t.prototype.render = function e() {
                return (
                  console.error("render error", this.props),
                  o(
                    c,
                    {
                      style: {
                        width: "100%",
                        height: "50px",
                        lineHeight: "50px",
                        textAlign: "center",
                        fontSize: "15px",
                        color: "#ff0000",
                        border: "2px solid #ff0000",
                      },
                    },
                    (this.props.componentName || "") +
                      " \u7ec4\u4ef6\u6e32\u67d3\u5f02\u5e38\uff0c\u8bf7\u67e5\u770b\u63a7\u5236\u53f0\u65e5\u5fd7"
                  )
                );
              }),
              t
            );
          })(n),
          h = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            var n;
            return (
              m()(t, e),
              (t.prototype.render = function e() {
                return this.props.enableStrictNotFoundMode
                  ? (this.props.componentName || "") + " Component Not Found"
                  : o(
                      c,
                      this.props,
                      this.props.children ||
                        (this.props.componentName || "") +
                          " Component Not Found"
                    );
              }),
              t
            );
          })(n);
        return (
          ((e = (function (e) {
            function t(t, n) {
              var r, o;
              return (
                ((o = e.call(this, t, n) || this).state = {}),
                (o.__ref = void 0),
                (o.__getRef = function (e) {
                  var t, n;
                  ((o.__ref = e), e) &&
                    (null === (t = (n = o.props).onCompGetRef) ||
                      void 0 === t ||
                      t.call(n, o.props.schema, e));
                }),
                (o.state = {}),
                f(
                  "entry.constructor - " +
                    (null == t || null === (r = t.schema) || void 0 === r
                      ? void 0
                      : r.componentName)
                ),
                o
              );
            }
            m()(t, e);
            var n = t.prototype;
            return (
              (n.componentDidMount = (function () {
                var e = S()(
                  k.a.mark(function e() {
                    return k.a.wrap(
                      function e(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              f(
                                "entry.componentDidMount - " +
                                  (this.props.schema &&
                                    this.props.schema.componentName)
                              );
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })()),
              (n.componentDidUpdate = (function () {
                var e = S()(
                  k.a.mark(function e() {
                    var t, n;
                    return k.a.wrap(
                      function e(r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              f(
                                "entry.componentDidUpdate - " +
                                  (null === (t = this.props) ||
                                  void 0 === t ||
                                  null === (n = t.schema) ||
                                  void 0 === n
                                    ? void 0
                                    : n.componentName)
                              );
                            case 1:
                            case "end":
                              return r.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })()),
              (n.componentWillUnmount = (function () {
                var e = S()(
                  k.a.mark(function e() {
                    var t, n;
                    return k.a.wrap(
                      function e(r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              f(
                                "entry.componentWillUnmount - " +
                                  (null === (t = this.props) ||
                                  void 0 === t ||
                                  null === (n = t.schema) ||
                                  void 0 === n
                                    ? void 0
                                    : n.componentName)
                              );
                            case 1:
                            case "end":
                              return r.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })()),
              (n.componentDidCatch = (function () {
                var e = S()(
                  k.a.mark(function e(t) {
                    return k.a.wrap(function e(n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            console.warn(t);
                          case 1:
                          case "end":
                            return n.stop();
                        }
                    }, e);
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })()),
              (n.shouldComponentUpdate = function e(t) {
                return !t.suspended;
              }),
              (n.isValidComponent = function e(t) {
                return t;
              }),
              (n.patchDidCatch = function e(t) {
                if (
                  this.isValidComponent(t) &&
                  !t.patchedCatch &&
                  t.prototype
                ) {
                  t.patchedCatch = !0;
                  var n = t.prototype.componentDidCatch;
                  t.prototype.componentDidCatch = function e(t, r) {
                    this.setState({ engineRenderError: !0, error: t }),
                      n && "function" == typeof n && n.call(this, t, r);
                  };
                  var r = this,
                    o = t.prototype.render;
                  t.prototype.render = function () {
                    return this.state && this.state.engineRenderError
                      ? ((this.state.engineRenderError = !1),
                        r.createElement(
                          r.getFaultComponent(),
                          A()({}, this.props, { error: this.state.error })
                        ))
                      : o.call(this);
                  };
                  var i = t.prototype.shouldComponentUpdate;
                  t.prototype.shouldComponentUpdate = function (e, t) {
                    return (
                      !(!t || !t.engineRenderError) || !i || i.call(this, e, t)
                    );
                  };
                }
              }),
              (n.createElement = function e(t, n, r) {
                return (
                  this.patchDidCatch(t),
                  (this.props.customCreateElement || o)(t, n, r)
                );
              }),
              (n.getNotFoundComponent = function e() {
                return this.props.notFoundComponent || h;
              }),
              (n.getFaultComponent = function e() {
                return this.props.faultComponent || p;
              }),
              (n.render = function e() {
                var t = this.props,
                  n = t.schema,
                  r = t.designMode,
                  i = t.appHelper,
                  c = t.components;
                if (Object(zt.isEmpty)(n)) return null;
                if ("Div" !== n.componentName && !Ci(n))
                  return (
                    Pr.error(
                      "The root component name needs to be one of Page\u3001Block\u3001Component, please check the schema: ",
                      n
                    ),
                    "\u6a21\u578b\u7ed3\u6784\u5f02\u5e38"
                  );
                f("entry.render");
                var p = n.componentName,
                  h = A()({}, a, c),
                  d = h[p] || a[p + "Renderer"];
                return (
                  d &&
                    d.prototype &&
                    (d.prototype instanceof u || (d = a[p + "Renderer"])),
                  d
                    ? o(
                        s.Provider,
                        {
                          value: { appHelper: i, components: h, engine: this },
                        },
                        o(
                          l,
                          {
                            device: this.props.device,
                            locale: this.props.locale,
                          },
                          o(
                            d,
                            A()(
                              {
                                key:
                                  n.__ctx &&
                                  n.__ctx.lceKey + "_" + (n.__ctx.idx || "0"),
                                ref: this.__getRef,
                                __appHelper: i,
                                __components: h,
                                __schema: n,
                                __designMode: r,
                              },
                              this.props
                            )
                          )
                        )
                      )
                    : null
                );
              }),
              t
            );
          })(r)).displayName = "Renderer"),
          (e.defaultProps = {
            appHelper: void 0,
            components: {},
            designMode: "",
            suspended: !1,
            schema: {},
            onCompGetRef: function e() {},
            onCompGetCtx: function e() {},
            thisRequiredInJSE: !0,
          }),
          (e.findDOMNode = i),
          e
        );
      }
      var ou = n(65),
        iu = n.n(ou);
      function au() {
        var e;
        return (function (e) {
          function t(t, n) {
            var r;
            return (
              ((r = e.call(this, t, n) || this).props = void 0),
              (r.context = void 0),
              (r.setState = void 0),
              (r.forceUpdate = void 0),
              (r.refs = void 0),
              r
            );
          }
          var n;
          return (
            m()(t, e),
            (t.prototype.isValidComponent = function e(t) {
              var n;
              return (
                (null == t || null === (n = t.prototype) || void 0 === n
                  ? void 0
                  : n.isReactComponent) ||
                (null == t ? void 0 : t.prototype) instanceof s.Component
              );
            }),
            t
          );
        })(ru());
      }
      (window.React = c.a),
        (window.ReactDom = f.a),
        w.setRuntime({
          Component: s.Component,
          PureComponent: s.PureComponent,
          createContext: s.createContext,
          createElement: s.createElement,
          forwardRef: s.forwardRef,
          findDOMNode: f.a.findDOMNode,
        }),
        w.setRenderers({
          PageRenderer: Xa(),
          ComponentRenderer: Ya(),
          BlockRenderer: Za(),
          AddonRenderer: Qa(),
          TempRenderer: eu(),
          DivRenderer: Za(),
        }),
        w.setConfigProvider(iu.a);
      var uu = au();
      if (!s.useState)
        throw new Error("mobx-react-lite requires React with Hooks support");
      if (!a.m)
        throw new Error(
          "mobx-react-lite@3 requires mobx at least version 6 to be available"
        );
      function su(e) {
        e();
      }
      function cu(e) {
        e || (e = su), Object(a.g)({ reactionScheduler: e });
      }
      var lu = function () {
          return !0;
        },
        fu = [];
      function pu(e) {
        fu.includes(e) || (fu.push(e), console.warn(e));
      }
      function hu(e) {
        return Object(a.i)(e);
      }
      var du =
        "undefined" == typeof FinalizationRegistry
          ? void 0
          : FinalizationRegistry;
      function vu(e) {
        var t;
        return {
          reaction: e,
          mounted: !1,
          changedBeforeMount: !1,
          cleanAt: Date.now() + yu,
        };
      }
      var yu = 1e4,
        mu = 1e4;
      function bu(e) {
        var t = new Map(),
          n = 1,
          r = new e(function e(n) {
            var r = t.get(n);
            r && (r.reaction.dispose(), t.delete(n));
          });
        return {
          addReactionToTrack: function (e, o, i) {
            var a = n++;
            return (
              r.register(i, a, e),
              (e.current = vu(o)),
              (e.current.finalizationRegistryCleanupToken = a),
              t.set(a, e.current),
              e.current
            );
          },
          recordReactionAsCommitted: function (e) {
            r.unregister(e),
              e.current &&
                e.current.finalizationRegistryCleanupToken &&
                t.delete(e.current.finalizationRegistryCleanupToken);
          },
          forceCleanupTimerToRunNowForTests: function () {},
          resetCleanupScheduleForTests: function () {},
        };
      }
      var _u = function (e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      };
      function gu() {
        var e = new Set(),
          t;
        function n() {
          t && (clearTimeout(t), u());
        }
        function r() {
          var n, r;
          if (e.size > 0) {
            try {
              for (var o = _u(e), i = o.next(); !i.done; i = o.next()) {
                var a = i.value,
                  u = a.current;
                u && (u.reaction.dispose(), (a.current = null));
              }
            } catch (e) {
              n = { error: e };
            } finally {
              try {
                i && !i.done && (r = o.return) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
            e.clear();
          }
          t && (clearTimeout(t), (t = void 0));
        }
        function o() {
          void 0 === t && (t = setTimeout(u, 1e4));
        }
        function i(t) {
          e.add(t), o();
        }
        function a(t) {
          e.delete(t);
        }
        function u() {
          t = void 0;
          var n = Date.now();
          e.forEach(function (t) {
            var r = t.current;
            r &&
              n >= r.cleanAt &&
              (r.reaction.dispose(), (t.current = null), e.delete(t));
          }),
            e.size > 0 && o();
        }
        return {
          addReactionToTrack: function (e, t, n) {
            return (e.current = vu(t)), i(e), e.current;
          },
          recordReactionAsCommitted: a,
          forceCleanupTimerToRunNowForTests: n,
          resetCleanupScheduleForTests: r,
        };
      }
      var wu = du ? bu(du) : gu(),
        Ou = wu.addReactionToTrack,
        Eu = wu.recordReactionAsCommitted,
        Su = wu.resetCleanupScheduleForTests,
        xu = wu.forceCleanupTimerToRunNowForTests,
        Cu = !1;
      function ju(e) {
        Cu = e;
      }
      function Au() {
        return Cu;
      }
      var Pu = function (e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r = n.call(e),
          o,
          i = [],
          a;
        try {
          for (; (void 0 === t || t-- > 0) && !(o = r.next()).done; )
            i.push(o.value);
        } catch (e) {
          a = { error: e };
        } finally {
          try {
            o && !o.done && (n = r.return) && n.call(r);
          } finally {
            if (a) throw a.error;
          }
        }
        return i;
      };
      function Tu(e) {
        return "observer".concat(e);
      }
      var Ru = (function () {
        function e() {}
        return e;
      })();
      function Nu() {
        return new Ru();
      }
      function Lu(e, t) {
        if ((void 0 === t && (t = "observed"), Au())) return e();
        var n,
          r = Pu(c.a.useState(Nu), 1)[0],
          o,
          i = Pu(c.a.useState(), 2)[1],
          u = function () {
            return i([]);
          },
          s = c.a.useRef(null);
        if (!s.current)
          var l = new a.b(Tu(t), function () {
              f.mounted ? u() : (f.changedBeforeMount = !0);
            }),
            f = Ou(s, l, r);
        var p = s.current.reaction,
          h,
          d;
        if (
          (c.a.useDebugValue(p, hu),
          c.a.useEffect(function () {
            return (
              Eu(s),
              s.current
                ? ((s.current.mounted = !0),
                  s.current.changedBeforeMount &&
                    ((s.current.changedBeforeMount = !1), u()))
                : ((s.current = {
                    reaction: new a.b(Tu(t), function () {
                      u();
                    }),
                    mounted: !0,
                    changedBeforeMount: !1,
                    cleanAt: 1 / 0,
                  }),
                  u()),
              function () {
                s.current.reaction.dispose(), (s.current = null);
              }
            );
          }, []),
          p.track(function () {
            try {
              h = e();
            } catch (e) {
              d = e;
            }
          }),
          d)
        )
          throw d;
        return h;
      }
      var ku = !0,
        Mu = "function" == typeof Symbol && Symbol.for,
        Iu = Mu
          ? Symbol.for("react.forward_ref")
          : "function" == typeof s.forwardRef &&
            Object(s.forwardRef)(function (e) {
              return null;
            }).$$typeof,
        Bu = Mu
          ? Symbol.for("react.memo")
          : "function" == typeof s.memo &&
            Object(s.memo)(function (e) {
              return null;
            }).$$typeof;
      function Du(e, t) {
        var n;
        if (Bu && e.$$typeof === Bu)
          throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you."
          );
        if (Au()) return e;
        var r =
            null !== (n = null == t ? void 0 : t.forwardRef) &&
            void 0 !== n &&
            n,
          o = e,
          i = e.displayName || e.name;
        if (
          Iu &&
          e.$$typeof === Iu &&
          ((r = !0), "function" != typeof (o = e.render))
        )
          throw new Error(
            "[mobx-react-lite] `render` property of ForwardRef was not a function"
          );
        var a = function (e, t) {
          return Lu(function () {
            return o(e, t);
          }, i);
        };
        return (
          "" !== i && (a.displayName = i),
          e.contextTypes && (a.contextTypes = e.contextTypes),
          r && (a = Object(s.forwardRef)(a)),
          Uu(e, (a = Object(s.memo)(a))),
          a
        );
      }
      var Hu = {
        $$typeof: !0,
        render: !0,
        compare: !0,
        type: !0,
        displayName: !0,
      };
      function Uu(e, t) {
        Object.keys(e).forEach(function (n) {
          Hu[n] ||
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
        });
      }
      function Fu(e) {
        var t = e.children,
          n = e.render,
          r = t || n;
        return "function" != typeof r ? null : Lu(r);
      }
      function Vu(e, t, n, r, o) {
        var i = "children" === t ? "render" : "children",
          a = "function" == typeof e[t],
          u = "function" == typeof e[i];
        return a && u
          ? new Error(
              "MobX Observer: Do not use children and render in the same time in`" +
                n
            )
          : a || u
          ? null
          : new Error(
              "Invalid prop `" +
                o +
                "` of type `" +
                typeof e[t] +
                "` supplied to `" +
                n +
                "`, expected `function`."
            );
      }
      function Gu(e, t) {
        return Object(s.useState)(function () {
          return Object(a.n)(e(), t, { autoBind: !0 });
        })[0];
      }
      Fu.displayName = "Observer";
      var zu = function (e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r = n.call(e),
          o,
          i = [],
          a;
        try {
          for (; (void 0 === t || t-- > 0) && !(o = r.next()).done; )
            i.push(o.value);
        } catch (e) {
          a = { error: e };
        } finally {
          try {
            o && !o.done && (n = r.return) && n.call(r);
          } finally {
            if (a) throw a.error;
          }
        }
        return i;
      };
      function qu(e) {
        var t,
          n = zu(
            Object(s.useState)(function () {
              return Object(a.n)(e, {}, { deep: !1 });
            }),
            1
          )[0];
        return (
          Object(a.o)(function () {
            Object.assign(n, e);
          }),
          n
        );
      }
      function Ju(e, t) {
        var n = t && qu(t);
        return Object(s.useState)(function () {
          return Object(a.n)(e(n), void 0, { autoBind: !0 });
        })[0];
      }
      function $u(e, t) {
        return void 0 === t && (t = "observed"), Lu(e, t);
      }
      function Ku(e) {
        ju(e);
      }
      cu(l.unstable_batchedUpdates);
      var Wu = 0;
      function Xu(e) {
        if ("function" == typeof Symbol) return Symbol(e);
        var t = "__$mobx-react " + e + " (" + Wu + ")";
        return Wu++, t;
      }
      var Yu = {};
      function Zu(e) {
        return Yu[e] || (Yu[e] = Xu(e)), Yu[e];
      }
      function Qu(e, t) {
        if (es(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var o = 0; o < n.length; o++)
          if (!Object.hasOwnProperty.call(t, n[o]) || !es(e[n[o]], t[n[o]]))
            return !1;
        return !0;
      }
      function es(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      var ts = {
        $$typeof: 1,
        render: 1,
        compare: 1,
        type: 1,
        childContextTypes: 1,
        contextType: 1,
        contextTypes: 1,
        defaultProps: 1,
        getDefaultProps: 1,
        getDerivedStateFromError: 1,
        getDerivedStateFromProps: 1,
        mixins: 1,
        displayName: 1,
        propTypes: 1,
      };
      function ns(e, t) {
        var n = Object.getOwnPropertyNames(Object.getPrototypeOf(e));
        Object.getOwnPropertyNames(e).forEach(function (r) {
          ts[r] ||
            -1 !== n.indexOf(r) ||
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
        });
      }
      function rs(e, t, n) {
        Object.hasOwnProperty.call(e, t)
          ? (e[t] = n)
          : Object.defineProperty(e, t, {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: n,
            });
      }
      var os = Zu("patchMixins"),
        is = Zu("patchedDefinition");
      function as(e, t) {
        var n = (e[os] = e[os] || {}),
          r = (n[t] = n[t] || {});
        return (r.locks = r.locks || 0), (r.methods = r.methods || []), r;
      }
      function us(e, t) {
        for (
          var n = this,
            r = arguments.length,
            o = new Array(r > 2 ? r - 2 : 0),
            i = 2;
          i < r;
          i++
        )
          o[i - 2] = arguments[i];
        t.locks++;
        try {
          var a;
          return null != e && (a = e.apply(this, o)), a;
        } finally {
          t.locks--,
            0 === t.locks &&
              t.methods.forEach(function (e) {
                e.apply(n, o);
              });
        }
      }
      function ss(e, t) {
        var n;
        return function n() {
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          us.call.apply(us, [this, e, t].concat(o));
        };
      }
      function cs(e, t, n) {
        var r = as(e, t);
        r.methods.indexOf(n) < 0 && r.methods.push(n);
        var o = Object.getOwnPropertyDescriptor(e, t);
        if (!o || !o[is]) {
          var i = e[t],
            a = ls(e, t, o ? o.enumerable : void 0, r, i);
          Object.defineProperty(e, t, a);
        }
      }
      function ls(e, t, n, r, o) {
        var i,
          a = ss(o, r);
        return (
          ((i = {})[is] = !0),
          (i.get = function e() {
            return a;
          }),
          (i.set = function o(i) {
            if (this === e) a = ss(i, r);
            else {
              var u = ls(this, t, n, r, i);
              Object.defineProperty(this, t, u);
            }
          }),
          (i.configurable = !0),
          (i.enumerable = n),
          i
        );
      }
      var fs = a.a || "$mobx",
        ps = Zu("isMobXReactObserver"),
        hs = Zu("isUnmounted"),
        ds = Zu("skipRender"),
        vs = Zu("isForcingUpdate");
      function ys(e) {
        var t = e.prototype;
        if (e[ps]) {
          var n = ms(t);
          console.warn(
            "The provided component class (" +
              n +
              ")\n                has already been declared as an observer component."
          );
        } else e[ps] = !0;
        if (t.componentWillReact)
          throw new Error(
            "The componentWillReact life-cycle event is no longer supported"
          );
        if (e.__proto__ !== s.PureComponent)
          if (t.shouldComponentUpdate) {
            if (t.shouldComponentUpdate !== _s)
              throw new Error(
                "It is not allowed to use shouldComponentUpdate in observer based components."
              );
          } else t.shouldComponentUpdate = _s;
        gs(t, "props"), gs(t, "state"), e.contextType && gs(t, "context");
        var r = t.render;
        if ("function" != typeof r) {
          var o = ms(t);
          throw new Error(
            "[mobx-react] class component (" +
              o +
              ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported."
          );
        }
        return (
          (t.render = function () {
            return (this.render = Au() ? r : bs.call(this, r)), this.render();
          }),
          cs(t, "componentDidMount", function () {
            (this[hs] = !1),
              this.render[fs] || s.Component.prototype.forceUpdate.call(this);
          }),
          cs(t, "componentWillUnmount", function () {
            if (!Au()) {
              var e = this.render[fs];
              if (e) e.dispose(), (this.render[fs] = null);
              else {
                var t = ms(this);
                console.warn(
                  "The reactive render of an observer class component (" +
                    t +
                    ")\n                was overridden after MobX attached. This may result in a memory leak if the\n                overridden reactive render was not properly disposed."
                );
              }
              this[hs] = !0;
            }
          }),
          e
        );
      }
      function ms(e) {
        return (
          e.displayName ||
          e.name ||
          (e.constructor &&
            (e.constructor.displayName || e.constructor.name)) ||
          "<component>"
        );
      }
      function bs(e) {
        var t = this;
        rs(this, ds, !1), rs(this, vs, !1);
        var n = ms(this),
          r = e.bind(this),
          o = !1,
          i = function e() {
            var r = new a.b(n + ".render()", function () {
              if (!o && ((o = !0), !0 !== t[hs])) {
                var e = !0;
                try {
                  rs(t, vs, !0),
                    t[ds] || s.Component.prototype.forceUpdate.call(t),
                    (e = !1);
                } finally {
                  rs(t, vs, !1), e && (r.dispose(), (t.render[fs] = null));
                }
              }
            });
            return (r.reactComponent = t), r;
          };
        function u() {
          var e;
          o = !1;
          var t = null != (e = u[fs]) ? e : (u[fs] = i()),
            n = void 0,
            s = void 0;
          if (
            (t.track(function () {
              try {
                s = Object(a.c)(!1, r);
              } catch (e) {
                n = e;
              }
            }),
            n)
          )
            throw n;
          return s;
        }
        return u;
      }
      function _s(e, t) {
        return (
          Au() &&
            console.warn(
              "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."
            ),
          this.state !== t || !Qu(this.props, e)
        );
      }
      function gs(e, t) {
        var n = Zu("reactProp_" + t + "_valueHolder"),
          r = Zu("reactProp_" + t + "_atomHolder");
        function o() {
          return this[r] || rs(this, r, Object(a.h)("reactive " + t)), this[r];
        }
        Object.defineProperty(e, t, {
          configurable: !0,
          enumerable: !0,
          get: function e() {
            var t = !1;
            return (
              a.e && a.d && (t = Object(a.e)(!0)),
              o.call(this).reportObserved(),
              a.e && a.d && Object(a.d)(t),
              this[n]
            );
          },
          set: function e(t) {
            this[vs] || Qu(this[n], t)
              ? rs(this, n, t)
              : (rs(this, n, t),
                rs(this, ds, !0),
                o.call(this).reportChanged(),
                rs(this, ds, !1));
          },
        });
      }
      function ws(e) {
        return (
          !0 === e.isMobxInjector &&
            console.warn(
              "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`"
            ),
          Object.prototype.isPrototypeOf.call(s.Component, e) ||
          Object.prototype.isPrototypeOf.call(s.PureComponent, e)
            ? ys(e)
            : Du(e)
        );
      }
      function Os() {
        return (Os =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Es(e, t) {
        if (null == e) return {};
        var n = {},
          r = Object.keys(e),
          o,
          i;
        for (i = 0; i < r.length; i++)
          (o = r[i]), t.indexOf(o) >= 0 || (n[o] = e[o]);
        return n;
      }
      var Ss = ["children"],
        xs = c.a.createContext({});
      function Cs(e) {
        var t = e.children,
          n = Es(e, Ss),
          r = c.a.useContext(xs),
          o,
          i = c.a.useRef(Os({}, r, n)).current,
          a;
        return c.a.createElement(xs.Provider, { value: i }, t);
      }
      function js(e, t, n, r) {
        var o = c.a.forwardRef(function (n, r) {
          var o = Os({}, n),
            i = c.a.useContext(xs);
          return (
            Object.assign(o, e(i || {}, o) || {}),
            r && (o.ref = r),
            c.a.createElement(t, o)
          );
        });
        return (
          r && (o = ws(o)),
          (o.isMobxInjector = !0),
          ns(t, o),
          (o.wrappedComponent = t),
          (o.displayName = As(t, n)),
          o
        );
      }
      function As(e, t) {
        var n,
          r =
            e.displayName ||
            e.name ||
            (e.constructor && e.constructor.name) ||
            "Component";
        return (n = t
          ? "inject-with-" + t + "(" + r + ")"
          : "inject(" + r + ")");
      }
      function Ps(e) {
        return function (t, n) {
          return (
            e.forEach(function (e) {
              if (!(e in n)) {
                if (!(e in t))
                  throw new Error(
                    "MobX injector: Store '" +
                      e +
                      "' is not available! Make sure it is provided by some Provider"
                  );
                n[e] = t[e];
              }
            }),
            n
          );
        };
      }
      function Ts() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if ("function" == typeof arguments[0]) {
          var r = arguments[0];
          return function (e) {
            return js(r, e, r.name, !0);
          };
        }
        return function (e) {
          return js(Ps(t), e, t.join("-"), !1);
        };
      }
      Cs.displayName = "MobXProvider";
      var Rs = Zu("disposeOnUnmountProto"),
        Ns = Zu("disposeOnUnmountInst");
      function Ls() {
        var e = this;
        [].concat(this[Rs] || [], this[Ns] || []).forEach(function (t) {
          var n = "string" == typeof t ? e[t] : t;
          null != n &&
            (Array.isArray(n)
              ? n.map(function (e) {
                  return e();
                })
              : n());
        });
      }
      function ks(e, t) {
        if (Array.isArray(t))
          return t.map(function (t) {
            return ks(e, t);
          });
        var n = Object.getPrototypeOf(e).constructor,
          r = Object.getPrototypeOf(e.constructor),
          o = Object.getPrototypeOf(Object.getPrototypeOf(e));
        if (
          n !== c.a.Component &&
          n !== c.a.PureComponent &&
          r !== c.a.Component &&
          r !== c.a.PureComponent &&
          o !== c.a.Component &&
          o !== c.a.PureComponent
        )
          throw new Error(
            "[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent."
          );
        if ("string" != typeof t && "function" != typeof t && !Array.isArray(t))
          throw new Error(
            "[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function."
          );
        var i = "string" == typeof t,
          a = !!e[Rs] || !!e[Ns],
          u;
        return (
          (i ? e[Rs] || (e[Rs] = []) : e[Ns] || (e[Ns] = [])).push(t),
          a || cs(e, "componentWillUnmount", Ls),
          "string" != typeof t ? t : void 0
        );
      }
      function Ms(e) {
        function t(t, n, r, o, i, u) {
          for (
            var s = arguments.length, c = new Array(s > 6 ? s - 6 : 0), l = 6;
            l < s;
            l++
          )
            c[l - 6] = arguments[l];
          return Object(a.p)(function () {
            if (((o = o || "<<anonymous>>"), (u = u || r), null == n[r])) {
              if (t) {
                var a = null === n[r] ? "null" : "undefined";
                return new Error(
                  "The " +
                    i +
                    " `" +
                    u +
                    "` is marked as required in `" +
                    o +
                    "`, but its value is `" +
                    a +
                    "`."
                );
              }
              return null;
            }
            return e.apply(void 0, [n, r, o, i, u].concat(c));
          });
        }
        var n = t.bind(null, !1);
        return (n.isRequired = t.bind(null, !0)), n;
      }
      function Is(e, t) {
        return (
          "symbol" === e ||
          "Symbol" === t["@@toStringTag"] ||
          ("function" == typeof Symbol && t instanceof Symbol)
        );
      }
      function Bs(e) {
        var t = typeof e;
        return Array.isArray(e)
          ? "array"
          : e instanceof RegExp
          ? "object"
          : Is(t, e)
          ? "symbol"
          : t;
      }
      function Ds(e) {
        var t = Bs(e);
        if ("object" === t) {
          if (e instanceof Date) return "date";
          if (e instanceof RegExp) return "regexp";
        }
        return t;
      }
      function Hs(e, t) {
        return Ms(function (n, r, o, i, u) {
          return Object(a.p)(function () {
            if (e && Bs(n[r]) === t.toLowerCase()) return null;
            var i;
            switch (t) {
              case "Array":
                i = a.j;
                break;
              case "Object":
                i = a.l;
                break;
              case "Map":
                i = a.k;
                break;
              default:
                throw new Error("Unexpected mobxType: " + t);
            }
            var s = n[r];
            if (!i(s)) {
              var c = Ds(s),
                l = e ? " or javascript `" + t.toLowerCase() + "`" : "";
              return new Error(
                "Invalid prop `" +
                  u +
                  "` of type `" +
                  c +
                  "` supplied to `" +
                  o +
                  "`, expected `mobx.Observable" +
                  t +
                  "`" +
                  l +
                  "."
              );
            }
            return null;
          });
        });
      }
      function Us(e, t) {
        return Ms(function (n, r, o, i, u) {
          for (
            var s = arguments.length, c = new Array(s > 5 ? s - 5 : 0), l = 5;
            l < s;
            l++
          )
            c[l - 5] = arguments[l];
          return Object(a.p)(function () {
            if ("function" != typeof t)
              return new Error(
                "Property `" +
                  u +
                  "` of component `" +
                  o +
                  "` has invalid PropType notation."
              );
            var a = Hs(e, "Array")(n, r, o, i, u);
            if (a instanceof Error) return a;
            for (var s = n[r], l = 0; l < s.length; l++)
              if (
                (a = t.apply(
                  void 0,
                  [s, l, o, i, u + "[" + l + "]"].concat(c)
                )) instanceof Error
              )
                return a;
            return null;
          });
        });
      }
      var Fs,
        Vs,
        Gs,
        zs,
        qs,
        Js,
        $s,
        Ks = Hs(!1, "Array"),
        Ws = Us.bind(null, !1),
        Xs = Hs(!1, "Map"),
        Ys = Hs(!1, "Object"),
        Zs = Hs(!0, "Array"),
        Qs = Us.bind(null, !0),
        ec = Hs(!0, "Object");
      if (!s.Component)
        throw new Error("mobx-react requires React to be available");
      if (!a.n) throw new Error("mobx-react requires mobx to be available");
      function tc(e, t) {
        t &&
          t.forEach(function (t) {
            if (e[null == t ? void 0 : t.npm.package])
              var n = window[e[null == t ? void 0 : t.npm.package]];
          });
      }
      function nc() {
        return !window.parent;
      }
      var rc = n(157),
        oc = n(66),
        ic,
        ac = { "zh-CN": n(67), "en-US": oc };
      function uc() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "zh-CN",
          t = function t(n) {
            return ac[e][n];
          },
          n = function t(n) {
            return Object(s.createElement)("span", ac[e][n]);
          };
        return { intl: t, intlNode: n };
      }
      function sc(e) {
        return (sc =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var cc = ["_leaf"],
        lc = ["__id"];
      function fc(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function pc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? fc(Object(n), !0).forEach(function (t) {
                hc(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : fc(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function hc(e, t, n) {
        return (
          (t = bc(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function dc() {
        return (dc = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function vc(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function yc(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, bc(r.key), r);
        }
      }
      function mc(e, t, n) {
        return (
          t && yc(e.prototype, t),
          n && yc(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function bc(e) {
        var t = _c(e, "string");
        return "symbol" === sc(t) ? t : String(t);
      }
      function _c(e, t) {
        if ("object" !== sc(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" !== sc(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }
      function gc(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && wc(e, t);
      }
      function wc(e, t) {
        return (wc = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function e(t, n) {
              return (t.__proto__ = n), t;
            })(e, t);
      }
      function Oc(e) {
        var t = xc();
        return function n() {
          var r = Cc(e),
            o;
          if (t) {
            var i = Cc(this).constructor;
            o = Reflect.construct(r, arguments, i);
          } else o = r.apply(this, arguments);
          return Ec(this, o);
        };
      }
      function Ec(e, t) {
        if (t && ("object" === sc(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return Sc(e);
      }
      function Sc(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function xc() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function Cc(e) {
        return (Cc = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function e(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(e);
      }
      function jc(e, t) {
        if (null == e) return {};
        var n = Ac(e, t),
          r,
          o;
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (r = i[o]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      function Ac(e, t) {
        if (null == e) return {};
        var n = {},
          r = Object.keys(e),
          o,
          i;
        for (i = 0; i < r.length; i++)
          (o = r[i]), t.indexOf(o) >= 0 || (n[o] = e[o]);
        return n;
      }
      var Pc = window.React.cloneElement;
      window.React.cloneElement = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t._leaf,
          r = jc(t, cc);
        if (e.ref && r.ref) {
          var o = r.ref,
            i = e.ref;
          r.ref = function (e) {
            if (i)
              if ("function" == typeof i) i(e);
              else
                try {
                  i.current = e;
                } catch (e) {
                  console.error(e);
                }
            if (o)
              if ("function" == typeof o) o(e);
              else
                try {
                  o.current = e;
                } catch (e) {
                  console.error(e);
                }
          };
        }
        for (
          var a = arguments.length, u = new Array(a > 2 ? a - 2 : 0), s = 2;
          s < a;
          s++
        )
          u[s - 2] = arguments[s];
        return Pc.apply(void 0, [e, r].concat(u));
      };
      var Tc = (function (e) {
          gc(n, e);
          var t = Oc(n);
          function n() {
            return vc(this, n), t.apply(this, arguments);
          }
          return (
            mc(n, [
              {
                key: "render",
                value: function e() {
                  var t = this.props.rendererContainer;
                  return React.createElement(
                    h.b,
                    { history: t.history },
                    React.createElement(
                      kc,
                      { rendererContainer: t },
                      React.createElement(Rc, { rendererContainer: t })
                    )
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        Rc = (function (e) {
          gc(n, e);
          var t = Oc(n);
          function n() {
            return vc(this, n), t.apply(this, arguments);
          }
          return (
            mc(n, [
              {
                key: "render",
                value: function e() {
                  var t = this.props.rendererContainer;
                  return React.createElement(
                    h.c,
                    null,
                    t.documentInstances.map(function (e) {
                      return React.createElement(h.a, {
                        path: e.path,
                        key: e.id,
                        render: function n(r) {
                          return React.createElement(
                            Mc,
                            dc({ documentInstance: e, rendererContainer: t }, r)
                          );
                        },
                      });
                    })
                  );
                },
              },
            ]),
            n
          );
        })(s.Component);
      function Nc(e) {
        return e.charAt(0).toUpperCase() + e.substring(1);
      }
      function Lc(e, t, n) {
        return e && "string" != typeof e
          ? ("Mobile" === (t = Nc(t)) && e.hasOwnProperty(t) && (e = e[t]),
            "Preview" === (n = Nc(n)) && e.hasOwnProperty(n) && (e = e[n]),
            e)
          : e;
      }
      Rc = Object(u.__decorate)([ws], Rc);
      var kc = (function (e) {
        gc(n, e);
        var t = Oc(n);
        function n() {
          return vc(this, n), t.apply(this, arguments);
        }
        return (
          mc(n, [
            {
              key: "render",
              value: function e() {
                var t = this.props,
                  n = t.rendererContainer,
                  r = t.children,
                  o = n.layout;
                if (o) {
                  var i = o.Component,
                    a = o.props,
                    u = o.componentName;
                  if (i)
                    return React.createElement(
                      i,
                      { key: "layout", props: a },
                      r
                    );
                  if (u && n.getComponent(u))
                    return Object(s.createElement)(
                      n.getComponent(u),
                      pc(
                        pc({}, a),
                        {},
                        { rendererContainer: n, key: "layout" }
                      ),
                      [r]
                    );
                }
                return React.createElement(s.Fragment, null, r);
              },
            },
          ]),
          n
        );
      })(s.Component);
      kc = Object(u.__decorate)([ws], kc);
      var Mc = (function (e) {
        gc(n, e);
        var t = Oc(n);
        function n() {
          var e;
          vc(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            ((e = t.call.apply(t, [this].concat(o))).startTime = null),
            (e.schemaChangedSymbol = !1),
            (e.getSchemaChangedSymbol = function () {
              return e.schemaChangedSymbol;
            }),
            (e.setSchemaChangedSymbol = function (t) {
              e.schemaChangedSymbol = t;
            }),
            e
          );
        }
        return (
          mc(n, [
            {
              key: "componentDidUpdate",
              value: function e() {
                this.recordTime();
              },
            },
            {
              key: "recordTime",
              value: function e() {
                if (this.startTime) {
                  var t,
                    n,
                    r,
                    o = Date.now() - this.startTime,
                    a =
                      null === (t = p.designer.currentDocument) ||
                      void 0 === t ||
                      null === (n = t.getNodeCount) ||
                      void 0 === n
                        ? void 0
                        : n.call(t);
                  null === (r = p.designer.editor) ||
                    void 0 === r ||
                    r.eventBus.emit(i.Node.Rerender, {
                      componentName: "Renderer",
                      type: "All",
                      time: o,
                      nodeCount: a,
                    });
                }
              },
            },
            {
              key: "componentDidMount",
              value: function e() {
                this.recordTime();
              },
            },
            {
              key: "render",
              value: function e() {
                var t,
                  n,
                  r,
                  o = this.props,
                  i = o.documentInstance,
                  a = o.rendererContainer,
                  u = i.container,
                  c = i.document,
                  l = u.designMode,
                  f = u.device,
                  h = u.locale,
                  d =
                    (null === (t = u.context) ||
                    void 0 === t ||
                    null === (n = t.utils) ||
                    void 0 === n ||
                    null === (r = n.i18n) ||
                    void 0 === r
                      ? void 0
                      : r.messages) || {};
                if (
                  ((this.startTime = Date.now()),
                  (this.schemaChangedSymbol = !1),
                  !u.autoRender || nc())
                )
                  return null;
                var y,
                  m = uc(h).intl;
                return React.createElement(uu, {
                  locale: h,
                  messages: d,
                  schema: i.schema,
                  components: u.components,
                  appHelper: u.context,
                  designMode: l,
                  device: f,
                  documentId: c.id,
                  suspended: a.suspended,
                  self: a.scope,
                  getSchemaChangedSymbol: this.getSchemaChangedSymbol,
                  setSchemaChangedSymbol: this.setSchemaChangedSymbol,
                  getNode: function e(t) {
                    return i.getNode(t);
                  },
                  rendererName: "PageRenderer",
                  thisRequiredInJSE: p.thisRequiredInJSE,
                  notFoundComponent: p.notFoundComponent,
                  faultComponent: p.faultComponent,
                  customCreateElement: function e(t, n, r) {
                    var o = {},
                      a = (null == n ? void 0 : n.style) || {};
                    Object.keys(a).forEach(function (e) {
                      var t = a[e];
                      /px$/.test(t)
                        ? (o[e] = parseFloat(t) / 50 + "rem")
                        : (o[e] = t);
                    }),
                      (n.style = o);
                    var u = n.__id,
                      c = jc(n, lc);
                    c.componentId = u;
                    var p = i.getNode(u);
                    if (
                      (Zt(null == p ? void 0 : p.componentMeta) &&
                        (c._leaf = p.internalToShellNode()),
                      (c._componentName = null == p ? void 0 : p.componentName),
                      !c.dataSource &&
                        null != p &&
                        p.isContainer() &&
                        (null == r || (Array.isArray(r) && !r.length)) &&
                        (!c.style || 0 === Object.keys(c.style).length))
                    ) {
                      var h = m("Drag and drop components or templates here"),
                        d = Vn(p, function (e) {
                          var t;
                          return (
                            !0 ===
                            (null == e ||
                            null === (t = e.getExtraProp("isLocked")) ||
                            void 0 === t
                              ? void 0
                              : t.getValue())
                          );
                        });
                      d &&
                        (h = m(
                          "Locked elements and child elements cannot be edited"
                        )),
                        (r = React.createElement(
                          "div",
                          {
                            className: v()("lc-container-placeholder", {
                              "lc-container-locked": !!d,
                            }),
                            style: c.placeholderStyle,
                          },
                          c.placeholder || h
                        ));
                    }
                    return (
                      "a" === c._componentName && delete c.href,
                      "Menu" === c._componentName &&
                        Object.assign(c, {
                          _componentName: "Menu",
                          className: "_css_pesudo_menu_kbrzyh0f",
                          context: { VE: window.VisualEngine },
                          direction: void 0,
                          events: { ignored: !0 },
                          fieldId: "menu_kbrzyh0f",
                          footer: "",
                          header: "",
                          mode: "inline",
                          onItemClick: { ignored: !0 },
                          onSelect: { ignored: !0 },
                          popupAlign: "follow",
                          selectMode: !1,
                          triggerType: "click",
                        }),
                      tt(t)
                        ? Object(s.createElement)(
                            Lc(t, f, l),
                            c,
                            null != p && p.isContainer()
                              ? null == r
                                ? []
                                : Array.isArray(r)
                                ? r
                                : [r]
                              : r
                          )
                        : (console.error(
                            "".concat(
                              c._componentName,
                              " is not a react component!"
                            )
                          ),
                          null)
                    );
                  },
                  __host: p,
                  __container: u,
                  onCompGetRef: function e(t, n) {
                    i.mountInstance(t.id, n);
                  },
                  enableStrictNotFoundMode: p.enableStrictNotFoundMode,
                });
              },
            },
          ]),
          n
        );
      })(s.Component);
      Mc = Object(u.__decorate)([ws], Mc);
      var Ic = document.createRange();
      function Bc(e) {
        return bt(e)
          ? [e.getBoundingClientRect()]
          : (Ic.selectNode(e), Array.from(Ic.getClientRects()));
      }
      function Dc(e) {
        return (
          e.nodeType &&
          (e.nodeType === Node.ELEMENT_NODE || e.nodeType === Node.TEXT_NODE)
        );
      }
      var Hc = "_reactInternalFiber";
      function Uc(e, t) {
        e &&
          (e.stateNode && Dc(e.stateNode)
            ? t.push(e.stateNode)
            : e.child && Uc(e.child, t),
          e.sibling && Uc(e.sibling, t));
      }
      function Fc(e) {
        if (!e) return null;
        if (bt(e)) return [e];
        var t = [],
          n = e[Hc];
        if ((Uc(null == n ? void 0 : n.child, t), t.length > 0)) return t;
        try {
          return [Object(l.findDOMNode)(e)];
        } catch (e) {
          return null;
        }
      }
      var Vc = n(7),
        Gc;
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(Gc || (Gc = {}));
      var zc = function (e) {
        return e;
      };
      function qc(e, t) {
        if (!e) {
          "undefined" != typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (e) {}
        }
      }
      var Jc = "beforeunload",
        $c = "hashchange",
        Kc = "popstate";
      function Wc(e) {
        void 0 === e && (e = {});
        var t,
          n = e.window,
          r = void 0 === n ? document.defaultView : n,
          o = r.history;
        function i() {
          var e = r.location,
            t = e.pathname,
            n = e.search,
            i = e.hash,
            a = o.state || {};
          return [
            a.idx,
            zc({
              pathname: t,
              search: n,
              hash: i,
              state: a.usr || null,
              key: a.key || "default",
            }),
          ];
        }
        var a = null;
        function u() {
          if (a) h.call(a), (a = null);
          else {
            var e = Gc.Pop,
              t = i(),
              n = t[0],
              r = t[1];
            if (h.length) {
              if (null != n) {
                var o = l - n;
                o &&
                  ((a = {
                    action: e,
                    location: r,
                    retry: function e() {
                      O(-1 * o);
                    },
                  }),
                  O(o));
              }
            } else _(e);
          }
        }
        r.addEventListener("popstate", u);
        var s = Gc.Pop,
          c = i(),
          l = c[0],
          f = c[1],
          p = el(),
          h = el(),
          d;
        function v(e) {
          return "string" == typeof e ? e : nl(e);
        }
        function y(e, t) {
          return (
            void 0 === t && (t = null),
            zc(
              Object(Vc.a)(
                { pathname: f.pathname, hash: "", search: "" },
                "string" == typeof e ? rl(e) : e,
                { state: t, key: tl() }
              )
            )
          );
        }
        function m(e, t) {
          return [{ usr: e.state, key: e.key, idx: t }, v(e)];
        }
        function b(e, t, n) {
          return (
            !h.length || (h.call({ action: e, location: t, retry: n }), !1)
          );
        }
        function _(e) {
          s = e;
          var t = i();
          (l = t[0]), (f = t[1]), p.call({ action: s, location: f });
        }
        function g(e, t) {
          var n = Gc.Push,
            i = y(e, t);
          function a() {
            g(e, t);
          }
          if (b(n, i, a)) {
            var u = m(i, l + 1),
              s = u[0],
              c = u[1];
            try {
              o.pushState(s, "", c);
            } catch (e) {
              r.location.assign(c);
            }
            _(n);
          }
        }
        function w(e, t) {
          var n = Gc.Replace,
            r = y(e, t);
          function i() {
            w(e, t);
          }
          if (b(n, r, i)) {
            var a = m(r, l),
              u = a[0],
              s = a[1];
            o.replaceState(u, "", s), _(n);
          }
        }
        function O(e) {
          o.go(e);
        }
        return (
          null == l &&
            ((l = 0),
            o.replaceState(Object(Vc.a)({}, o.state, { idx: l }), "")),
          {
            get action() {
              return s;
            },
            get location() {
              return f;
            },
            createHref: v,
            push: g,
            replace: w,
            go: O,
            back: function e() {
              O(-1);
            },
            forward: function e() {
              O(1);
            },
            listen: function e(t) {
              return p.push(t);
            },
            block: function e(t) {
              var n = h.push(t);
              return (
                1 === h.length && r.addEventListener("beforeunload", Qc),
                function () {
                  n(), h.length || r.removeEventListener("beforeunload", Qc);
                }
              );
            },
          }
        );
      }
      function Xc(e) {
        void 0 === e && (e = {});
        var t,
          n = e.window,
          r = void 0 === n ? document.defaultView : n,
          o = r.history;
        function i() {
          var e = rl(r.location.hash.substr(1)),
            t = e.pathname,
            n = void 0 === t ? "/" : t,
            i = e.search,
            a = void 0 === i ? "" : i,
            u = e.hash,
            s = void 0 === u ? "" : u,
            c = o.state || {};
          return [
            c.idx,
            zc({
              pathname: n,
              search: a,
              hash: s,
              state: c.usr || null,
              key: c.key || "default",
            }),
          ];
        }
        var a = null;
        function u() {
          if (a) h.call(a), (a = null);
          else {
            var e = Gc.Pop,
              t = i(),
              n = t[0],
              r = t[1];
            if (h.length) {
              if (null != n) {
                var o = l - n;
                o &&
                  ((a = {
                    action: e,
                    location: r,
                    retry: function e() {
                      E(-1 * o);
                    },
                  }),
                  E(o));
              }
            } else g(e);
          }
        }
        r.addEventListener("popstate", u),
          r.addEventListener("hashchange", function () {
            var e, t;
            nl(i()[1]) !== nl(f) && u();
          });
        var s = Gc.Pop,
          c = i(),
          l = c[0],
          f = c[1],
          p = el(),
          h = el(),
          d;
        function v() {
          var e = document.querySelector("base"),
            t = "";
          if (e && e.getAttribute("href")) {
            var n = r.location.href,
              o = n.indexOf("#");
            t = -1 === o ? n : n.slice(0, o);
          }
          return t;
        }
        function y(e) {
          return v() + "#" + ("string" == typeof e ? e : nl(e));
        }
        function m(e, t) {
          return (
            void 0 === t && (t = null),
            zc(
              Object(Vc.a)(
                { pathname: f.pathname, hash: "", search: "" },
                "string" == typeof e ? rl(e) : e,
                { state: t, key: tl() }
              )
            )
          );
        }
        function b(e, t) {
          return [{ usr: e.state, key: e.key, idx: t }, y(e)];
        }
        function _(e, t, n) {
          return (
            !h.length || (h.call({ action: e, location: t, retry: n }), !1)
          );
        }
        function g(e) {
          s = e;
          var t = i();
          (l = t[0]), (f = t[1]), p.call({ action: s, location: f });
        }
        function w(e, t) {
          var n = Gc.Push,
            i = m(e, t);
          function a() {
            w(e, t);
          }
          if (_(n, i, a)) {
            var u = b(i, l + 1),
              s = u[0],
              c = u[1];
            try {
              o.pushState(s, "", c);
            } catch (e) {
              r.location.assign(c);
            }
            g(n);
          }
        }
        function O(e, t) {
          var n = Gc.Replace,
            r = m(e, t);
          function i() {
            O(e, t);
          }
          if (_(n, r, i)) {
            var a = b(r, l),
              u = a[0],
              s = a[1];
            o.replaceState(u, "", s), g(n);
          }
        }
        function E(e) {
          o.go(e);
        }
        return (
          null == l &&
            ((l = 0),
            o.replaceState(Object(Vc.a)({}, o.state, { idx: l }), "")),
          {
            get action() {
              return s;
            },
            get location() {
              return f;
            },
            createHref: y,
            push: w,
            replace: O,
            go: E,
            back: function e() {
              E(-1);
            },
            forward: function e() {
              E(1);
            },
            listen: function e(t) {
              return p.push(t);
            },
            block: function e(t) {
              var n = h.push(t);
              return (
                1 === h.length && r.addEventListener("beforeunload", Qc),
                function () {
                  n(), h.length || r.removeEventListener("beforeunload", Qc);
                }
              );
            },
          }
        );
      }
      function Yc(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.initialEntries,
          r = void 0 === n ? ["/"] : n,
          o = t.initialIndex,
          i = r.map(function (e) {
            var t;
            return zc(
              Object(Vc.a)(
                { pathname: "/", search: "", hash: "", state: null, key: tl() },
                "string" == typeof e ? rl(e) : e
              )
            );
          }),
          a = Zc(null == o ? i.length - 1 : o, 0, i.length - 1),
          u = Gc.Pop,
          s = i[a],
          c = el(),
          l = el(),
          f;
        function p(e) {
          return "string" == typeof e ? e : nl(e);
        }
        function h(e, t) {
          return (
            void 0 === t && (t = null),
            zc(
              Object(Vc.a)(
                { pathname: s.pathname, search: "", hash: "" },
                "string" == typeof e ? rl(e) : e,
                { state: t, key: tl() }
              )
            )
          );
        }
        function d(e, t, n) {
          return (
            !l.length || (l.call({ action: e, location: t, retry: n }), !1)
          );
        }
        function v(e, t) {
          (u = e), (s = t), c.call({ action: u, location: s });
        }
        function y(e, t) {
          var n = Gc.Push,
            r = h(e, t);
          function o() {
            y(e, t);
          }
          d(n, r, o) && ((a += 1), i.splice(a, i.length, r), v(n, r));
        }
        function m(e, t) {
          var n = Gc.Replace,
            r = h(e, t);
          function o() {
            m(e, t);
          }
          d(n, r, o) && ((i[a] = r), v(n, r));
        }
        function b(e) {
          var t = Zc(a + e, 0, i.length - 1),
            n = Gc.Pop,
            r = i[t];
          function o() {
            b(e);
          }
          d(n, r, o) && ((a = t), v(n, r));
        }
        return {
          get index() {
            return a;
          },
          get action() {
            return u;
          },
          get location() {
            return s;
          },
          createHref: p,
          push: y,
          replace: m,
          go: b,
          back: function e() {
            b(-1);
          },
          forward: function e() {
            b(1);
          },
          listen: function e(t) {
            return c.push(t);
          },
          block: function e(t) {
            return l.push(t);
          },
        };
      }
      function Zc(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function Qc(e) {
        e.preventDefault(), (e.returnValue = "");
      }
      function el() {
        var e = [];
        return {
          get length() {
            return e.length;
          },
          push: function t(n) {
            return (
              e.push(n),
              function () {
                e = e.filter(function (e) {
                  return e !== n;
                });
              }
            );
          },
          call: function t(n) {
            e.forEach(function (e) {
              return e && e(n);
            });
          },
        };
      }
      function tl() {
        return Math.random().toString(36).substr(2, 8);
      }
      function nl(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          o = void 0 === r ? "" : r,
          i = e.hash,
          a = void 0 === i ? "" : i;
        return (
          o && "?" !== o && (n += "?" === o.charAt(0) ? o : "?" + o),
          a && "#" !== a && (n += "#" === a.charAt(0) ? a : "#" + a),
          n
        );
      }
      function rl(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function ol(e) {
        return (ol =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function il(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function al(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, sl(r.key), r);
        }
      }
      function ul(e, t, n) {
        return (
          t && al(e.prototype, t),
          n && al(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function sl(e) {
        var t = cl(e, "string");
        return "symbol" === ol(t) ? t : String(t);
      }
      function cl(e, t) {
        if ("object" !== ol(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" !== ol(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }
      function ll(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && fl(e, t);
      }
      function fl(e, t) {
        return (fl = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function e(t, n) {
              return (t.__proto__ = n), t;
            })(e, t);
      }
      function pl(e) {
        var t = vl();
        return function n() {
          var r = yl(e),
            o;
          if (t) {
            var i = yl(this).constructor;
            o = Reflect.construct(r, arguments, i);
          } else o = r.apply(this, arguments);
          return hl(this, o);
        };
      }
      function hl(e, t) {
        if (t && ("object" === ol(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return dl(e);
      }
      function dl(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function vl() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function yl(e) {
        return (yl = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function e(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(e);
      }
      var ml = (function (e) {
        ll(n, e);
        var t = pl(n);
        function n() {
          return il(this, n), t.apply(this, arguments);
        }
        return (
          ul(n, [
            {
              key: "render",
              value: function e() {
                var t = this.props.children;
                return React.createElement(React.Fragment, null, t);
              },
            },
          ]),
          n
        );
      })(s.Component);
      (ml.displayName = "Slot"),
        (ml.componentMetadata = {
          componentName: "Slot",
          configure: {
            props: [
              {
                name: "___title",
                title: {
                  type: "i18n",
                  "en-US": "Slot Title",
                  "zh-CN": "\u63d2\u69fd\u6807\u9898",
                },
                setter: "StringSetter",
                defaultValue: "\u63d2\u69fd\u5bb9\u5668",
              },
              {
                name: "___params",
                title: {
                  type: "i18n",
                  "en-US": "Slot Params",
                  "zh-CN": "\u63d2\u69fd\u5165\u53c2",
                },
                setter: {
                  componentName: "ArraySetter",
                  props: {
                    itemSetter: {
                      componentName: "StringSetter",
                      props: {
                        placeholder: {
                          type: "i18n",
                          "zh-CN": "\u53c2\u6570\u540d\u79f0",
                          "en-US": "Argument Name",
                        },
                      },
                    },
                  },
                },
              },
            ],
            component: { isContainer: !0 },
            supports: !1,
          },
        });
      var bl = ml;
      function _l(e) {
        return (_l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function gl(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function wl(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, El(r.key), r);
        }
      }
      function Ol(e, t, n) {
        return (
          t && wl(e.prototype, t),
          n && wl(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function El(e) {
        var t = Sl(e, "string");
        return "symbol" === _l(t) ? t : String(t);
      }
      function Sl(e, t) {
        if ("object" !== _l(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" !== _l(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }
      function xl(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && Cl(e, t);
      }
      function Cl(e, t) {
        return (Cl = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function e(t, n) {
              return (t.__proto__ = n), t;
            })(e, t);
      }
      function jl(e) {
        var t = Tl();
        return function n() {
          var r = Rl(e),
            o;
          if (t) {
            var i = Rl(this).constructor;
            o = Reflect.construct(r, arguments, i);
          } else o = r.apply(this, arguments);
          return Al(this, o);
        };
      }
      function Al(e, t) {
        if (t && ("object" === _l(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return Pl(e);
      }
      function Pl(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Tl() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function Rl(e) {
        return (Rl = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function e(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(e);
      }
      var Nl = (function (e) {
        xl(n, e);
        var t = jl(n);
        function n() {
          return gl(this, n), t.apply(this, arguments);
        }
        return (
          Ol(n, [
            {
              key: "render",
              value: function e() {
                var t;
                return this.props.children;
              },
            },
          ]),
          n
        );
      })(s.Component);
      (Nl.displayName = "Leaf"),
        (Nl.componentMetadata = {
          componentName: "Leaf",
          configure: {
            props: [{ name: "children", setter: "StringSetter" }],
            supports: !1,
          },
        });
      var Ll = Nl;
      function kl(e) {
        return (kl =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Ml(e) {
        var t = {};
        if ("string" != typeof e) return t;
        var n = e.trim().replace(/^(\?|#|&)/, "");
        return n
          ? (n.split("&").forEach(function (e) {
              var n = e.replace(/\+/g, " ").split("="),
                r = n.shift(),
                o = n.length > 0 ? n.join("=") : void 0;
              (r = decodeURIComponent(r)),
                (o = void 0 === o ? null : decodeURIComponent(o)),
                void 0 === t[r]
                  ? (t[r] = o)
                  : Array.isArray(t[r])
                  ? t[r].push(o)
                  : (t[r] = [t[r], o]);
            }),
            t)
          : t;
      }
      function Il(e) {
        var t = [];
        return (
          Object.keys(e).forEach(function (n) {
            var r = e[n];
            r && "object" === kl(r) && (r = JSON.stringify(r)),
              t.push(
                ""
                  .concat(encodeURIComponent(n), "=")
                  .concat(encodeURIComponent(r))
              );
          }),
          t.join("&")
        );
      }
      function Bl(e) {
        return encodeURIComponent(e);
      }
      function Dl(e) {
        return decodeURIComponent(e);
      }
      function Hl(e, t) {
        var n = t ? Il(t) : "";
        if ("" === n) return e;
        var r = e.split("#"),
          o = r[1] ? "#".concat(r[1]) : "",
          i = r[0];
        return ""
          .concat(i)
          .concat(~i.indexOf("?") ? "&" : "?")
          .concat(n)
          .concat(o);
      }
      var Ul = ["__id", "__designMode"];
      function Fl(e) {
        return (Fl =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function Vl(e, t) {
        if (null == e) return {};
        var n = Gl(e, t),
          r,
          o;
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (r = i[o]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      function Gl(e, t) {
        if (null == e) return {};
        var n = {},
          r = Object.keys(e),
          o,
          i;
        for (i = 0; i < r.length; i++)
          (o = r[i]), t.indexOf(o) >= 0 || (n[o] = e[o]);
        return n;
      }
      function zl(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && ql(e, t);
      }
      function ql(e, t) {
        return (ql = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function e(t, n) {
              return (t.__proto__ = n), t;
            })(e, t);
      }
      function Jl(e) {
        var t = Wl();
        return function n() {
          var r = Xl(e),
            o;
          if (t) {
            var i = Xl(this).constructor;
            o = Reflect.construct(r, arguments, i);
          } else o = r.apply(this, arguments);
          return $l(this, o);
        };
      }
      function $l(e, t) {
        if (t && ("object" === Fl(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return Kl(e);
      }
      function Kl(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Wl() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function Xl(e) {
        return (Xl = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function e(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(e);
      }
      function Yl(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Zl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Yl(Object(n), !0).forEach(function (t) {
                Ql(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Yl(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ql(e, t, n) {
        return (
          (t = uf(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ef() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ ef =
          function t() {
            return e;
          };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          u = o.toStringTag || "@@toStringTag";
        function s(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          s({}, "");
        } catch (e) {
          s = function e(t, n, r) {
            return (t[n] = r);
          };
        }
        function c(e, t, n, o) {
          var i = t && t.prototype instanceof p ? t : p,
            a = Object.create(i.prototype),
            u = new x(o || []);
          return r(a, "_invoke", { value: w(e, n, u) }), a;
        }
        function l(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = c;
        var f = {};
        function p() {}
        function h() {}
        function d() {}
        var v = {};
        s(v, i, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          m = y && y(y(C([])));
        m && m !== t && n.call(m, i) && (v = m);
        var b = (d.prototype = p.prototype = Object.create(v));
        function _(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function g(e, t) {
          function o(r, i, a, u) {
            var s = l(e[r], e, i);
            if ("throw" !== s.type) {
              var c = s.arg,
                f = c.value;
              return f && "object" == Fl(f) && n.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      o("next", e, a, u);
                    },
                    function (e) {
                      o("throw", e, a, u);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (c.value = e), a(c);
                    },
                    function (e) {
                      return o("throw", e, a, u);
                    }
                  );
            }
            u(s.arg);
          }
          var i;
          r(this, "_invoke", {
            value: function e(n, r) {
              function a() {
                return new t(function (e, t) {
                  o(n, r, e, t);
                });
              }
              return (i = i ? i.then(a, a) : a());
            },
          });
        }
        function w(e, t, n) {
          var r = "suspendedStart";
          return function (o, i) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === o) throw i;
              return j();
            }
            for (n.method = o, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var u = O(a, n);
                if (u) {
                  if (u === f) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var s = l(e, t, n);
              if ("normal" === s.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), s.arg === f)
                )
                  continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function O(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                O(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              f
            );
          var o = l(r, e.iterator, t.arg);
          if ("throw" === o.type)
            return (
              (t.method = "throw"), (t.arg = o.arg), (t.delegate = null), f
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function S(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function x(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function C(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                o = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = d),
          r(b, "constructor", { value: d, configurable: !0 }),
          r(d, "constructor", { value: h, configurable: !0 }),
          (h.displayName = s(d, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, d)
                : ((e.__proto__ = d), s(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          _(g.prototype),
          s(g.prototype, a, function () {
            return this;
          }),
          (e.AsyncIterator = g),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new g(c(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          _(b),
          s(b, u, "Generator"),
          s(b, i, function () {
            return this;
          }),
          s(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = C),
          (x.prototype = {
            constructor: x,
            reset: function e(t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(S),
                !t)
              )
                for (var r in this)
                  "t" === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = void 0);
            },
            stop: function e() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function e(t) {
              if (this.done) throw t;
              var r = this;
              function o(e, n) {
                return (
                  (u.type = "throw"),
                  (u.arg = t),
                  (r.next = e),
                  n && ((r.method = "next"), (r.arg = void 0)),
                  !!n
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  u = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var s = n.call(a, "catchLoc"),
                    c = n.call(a, "finallyLoc");
                  if (s && c) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function e(t, r) {
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o];
                if (
                  i.tryLoc <= this.prev &&
                  n.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var a = i;
                  break;
                }
              }
              a &&
                ("break" === t || "continue" === t) &&
                a.tryLoc <= r &&
                r <= a.finallyLoc &&
                (a = null);
              var u = a ? a.completion : {};
              return (
                (u.type = t),
                (u.arg = r),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                  : this.complete(u)
              );
            },
            complete: function e(t, n) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && n && (this.next = n),
                f
              );
            },
            finish: function e(t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), S(r), f;
              }
            },
            catch: function e(t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r.tryLoc === t) {
                  var o = r.completion;
                  if ("throw" === o.type) {
                    var i = o.arg;
                    S(r);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function e(t, n, r) {
              return (
                (this.delegate = { iterator: C(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      function tf(e, t, n, r, o, i, a) {
        try {
          var u = e[i](a),
            s = u.value;
        } catch (e) {
          return void n(e);
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o);
      }
      function nf(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function a(e) {
              tf(i, r, o, a, u, "next", e);
            }
            function u(e) {
              tf(i, r, o, a, u, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function rf(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function of(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, uf(r.key), r);
        }
      }
      function af(e, t, n) {
        return (
          t && of(e.prototype, t),
          n && of(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function uf(e) {
        var t = sf(e, "string");
        return "symbol" === Fl(t) ? t : String(t);
      }
      function sf(e, t) {
        if ("object" !== Fl(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" !== Fl(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }
      var cf = new Fe();
      Object(a.g)({ enforceActions: "never" });
      var lf = (function () {
        function e(t, n) {
          rf(this, e),
            (this.container = void 0),
            (this.document = void 0),
            (this.instancesMap = new Map()),
            (this.disposeFunctions = []),
            (this._components = {}),
            (this._appContext = {}),
            (this._designMode = "design"),
            (this._requestHandlersMap = null),
            (this._device = "default"),
            (this._componentsMap = {}),
            (this.container = t),
            (this.document = n),
            Object(a.m)(this);
        }
        return (
          af(e, [
            {
              key: "schema",
              get: function e() {
                return this.document.export(W.Render);
              },
            },
            {
              key: "components",
              get: function e() {
                return this._components;
              },
            },
            {
              key: "context",
              get: function e() {
                return this._appContext;
              },
            },
            {
              key: "designMode",
              get: function e() {
                return this._designMode;
              },
            },
            {
              key: "requestHandlersMap",
              get: function e() {
                return this._requestHandlersMap;
              },
            },
            {
              key: "device",
              get: function e() {
                return this._device;
              },
            },
            {
              key: "componentsMap",
              get: function e() {
                return this._componentsMap;
              },
            },
            {
              key: "suspended",
              get: function e() {
                return !1;
              },
            },
            {
              key: "scope",
              get: function e() {
                return null;
              },
            },
            {
              key: "path",
              get: function e() {
                return "/".concat(this.document.fileName);
              },
            },
            {
              key: "id",
              get: function e() {
                return this.document.id;
              },
            },
            {
              key: "unmountInstance",
              value: function e(t, n) {
                var r = this.instancesMap.get(t);
                if (r) {
                  var o = r.indexOf(n);
                  o > -1 &&
                    (r.splice(o, 1), p.setInstance(this.document.id, t, r));
                }
              },
            },
            {
              key: "mountInstance",
              value: function e(t, n) {
                var r = this.document.id,
                  o = this.instancesMap;
                if (null != n) {
                  var i = this.unmountInstance.bind(this),
                    a = n[vf];
                  if ((a && a !== t && i(a, n), bt(n))) df(n);
                  else if (a !== t) {
                    var u = n.componentWillUnmount;
                    u && u.origUnmount && (u = u.origUnmount);
                    var s = function e() {
                      i(t, n), u && u.call(this);
                    };
                    (s.origUnmount = u), (n.componentWillUnmount = s);
                  }
                  (n[vf] = t), (n[yf] = r);
                  var c = this.instancesMap.get(t);
                  if (c) {
                    var l = c.length,
                      f = (c = c.filter(_f)).length !== l;
                    if ((c.includes(n) || (c.push(n), (f = !0)), !f)) return;
                  } else c = [n];
                  o.set(t, c), p.setInstance(this.document.id, t, c);
                } else {
                  var h = this.instancesMap.get(t);
                  h &&
                    ((h = h.filter(_f)).length > 0
                      ? (o.set(t, h), p.setInstance(this.document.id, t, h))
                      : (o.delete(t),
                        p.setInstance(this.document.id, t, null)));
                }
              },
            },
            { key: "mountContext", value: function e(t, n, r) {} },
            {
              key: "getNode",
              value: function e(t) {
                return this.document.getNode(t);
              },
            },
            {
              key: "dispose",
              value: function e() {
                this.disposeFunctions.forEach(function (e) {
                  return e();
                }),
                  (this.instancesMap = new Map());
              },
            },
          ]),
          e
        );
      })();
      Object(u.__decorate)(
        [a.n.ref, Object(u.__metadata)("design:type", Object)],
        lf.prototype,
        "_components",
        void 0
      ),
        Object(u.__decorate)(
          [
            a.f,
            Object(u.__metadata)("design:type", Object),
            Object(u.__metadata)("design:paramtypes", []),
          ],
          lf.prototype,
          "components",
          null
        ),
        Object(u.__decorate)(
          [a.n.ref, Object(u.__metadata)("design:type", Object)],
          lf.prototype,
          "_appContext",
          void 0
        ),
        Object(u.__decorate)(
          [
            a.f,
            Object(u.__metadata)("design:type", Object),
            Object(u.__metadata)("design:paramtypes", []),
          ],
          lf.prototype,
          "context",
          null
        ),
        Object(u.__decorate)(
          [a.n.ref, Object(u.__metadata)("design:type", Object)],
          lf.prototype,
          "_designMode",
          void 0
        ),
        Object(u.__decorate)(
          [
            a.f,
            Object(u.__metadata)("design:type", Object),
            Object(u.__metadata)("design:paramtypes", []),
          ],
          lf.prototype,
          "designMode",
          null
        ),
        Object(u.__decorate)(
          [a.n.ref, Object(u.__metadata)("design:type", Object)],
          lf.prototype,
          "_requestHandlersMap",
          void 0
        ),
        Object(u.__decorate)(
          [
            a.f,
            Object(u.__metadata)("design:type", Object),
            Object(u.__metadata)("design:paramtypes", []),
          ],
          lf.prototype,
          "requestHandlersMap",
          null
        ),
        Object(u.__decorate)(
          [a.n.ref, Object(u.__metadata)("design:type", Object)],
          lf.prototype,
          "_device",
          void 0
        ),
        Object(u.__decorate)(
          [
            a.f,
            Object(u.__metadata)("design:type", Object),
            Object(u.__metadata)("design:paramtypes", []),
          ],
          lf.prototype,
          "device",
          null
        ),
        Object(u.__decorate)(
          [a.n.ref, Object(u.__metadata)("design:type", Object)],
          lf.prototype,
          "_componentsMap",
          void 0
        ),
        Object(u.__decorate)(
          [
            a.f,
            Object(u.__metadata)("design:type", Object),
            Object(u.__metadata)("design:paramtypes", []),
          ],
          lf.prototype,
          "componentsMap",
          null
        ),
        Object(u.__decorate)(
          [
            a.f,
            Object(u.__metadata)("design:type", Object),
            Object(u.__metadata)("design:paramtypes", []),
          ],
          lf.prototype,
          "suspended",
          null
        ),
        Object(u.__decorate)(
          [
            a.f,
            Object(u.__metadata)("design:type", Object),
            Object(u.__metadata)("design:paramtypes", []),
          ],
          lf.prototype,
          "scope",
          null
        );
      var ff = (function () {
        function e() {
          var t = this;
          rf(this, e),
            (this.isSimulatorRenderer = !0),
            (this.disposeFunctions = []),
            (this.history = void 0),
            (this._documentInstances = []),
            (this._requestHandlersMap = void 0),
            (this._layout = null),
            (this._libraryMap = {}),
            (this._components = {}),
            (this._appContext = {}),
            (this._designMode = "design"),
            (this._device = "default"),
            (this._locale = void 0),
            (this._componentsMap = {}),
            (this.autoRender = !0),
            (this.autoRepaintNode = !0),
            (this._running = !1),
            Object(a.m)(this),
            (this.autoRender = p.autoRender),
            this.disposeFunctions.push(
              p.connect(this, function () {
                (t._layout = p.project.get("config").layout),
                  (t._libraryMap === p.libraryMap &&
                    t._componentsMap === p.designer.componentsMap) ||
                    ((t._libraryMap = p.libraryMap || {}),
                    (t._componentsMap = p.designer.componentsMap),
                    t.buildComponents()),
                  (t._designMode = p.designMode),
                  (t._locale = p.locale),
                  (t._requestHandlersMap = p.requestHandlersMap),
                  (t._device = p.device);
              })
            );
          var n = new Map(),
            r = "/",
            o = !0;
          this.disposeFunctions.push(
            p.autorun(function () {
              t._documentInstances = p.project.documents.map(function (e) {
                var r = n.get(e.id);
                return r || ((r = new lf(t, e)), n.set(e.id, r)), r;
              });
              var e = p.project.currentDocument
                ? n.get(p.project.currentDocument.id).path
                : "/";
              o
                ? ((r = e), (o = !1))
                : t.history.location.pathname !== e && t.history.replace(e);
            })
          );
          var i = Yc({ initialEntries: [r] });
          (this.history = i),
            i.listen(function (e) {
              var t = e.pathname?.slice(1);
              t && p.project.open(t);
            }),
            p.componentsConsumer.consume(
              (function () {
                var e = nf(
                  ef().mark(function e(n) {
                    return ef().wrap(function e(r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (!n) {
                              r.next = 4;
                              break;
                            }
                            return (r.next = 3), t.load(n);
                          case 3:
                            t.buildComponents();
                          case 4:
                          case "end":
                            return r.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            ),
            (this._appContext = {
              utils: Zl(
                {
                  router: {
                    push: function e(t, n) {
                      i.push(Hl(t, n));
                    },
                    replace: function e(t, n) {
                      i.replace(Hl(t, n));
                    },
                  },
                  legaoBuiltins: {
                    getUrlParams: function e() {
                      var t;
                      return Ml(i.location.search);
                    },
                  },
                  i18n: {
                    setLocale: function e(n) {
                      (t._appContext.utils.i18n.currentLocale = n),
                        (t._locale = n);
                    },
                    currentLocale: this.locale,
                    messages: {},
                  },
                },
                Dt(this._libraryMap, p.get("utilsMetadata"))
              ),
              constants: {},
              requestHandlersMap: this._requestHandlersMap,
            }),
            p.injectionConsumer.consume(function (e) {
              var n = Zl({}, t._appContext);
              Object(zt.merge)(n, e.appHelper || {}), (t._appContext = n);
            }),
            p.i18nConsumer.consume(function (e) {
              var n = Zl({}, t._appContext);
              (n.utils.i18n.messages = e || {}), (t._appContext = n);
            });
        }
        return (
          af(e, [
            {
              key: "documentInstances",
              get: function e() {
                return this._documentInstances;
              },
            },
            {
              key: "layout",
              get: function e() {
                return this._layout;
              },
              set: function e(t) {
                this._layout = t;
              },
            },
            {
              key: "buildComponents",
              value: function e() {
                (this._components = Bt(
                  this._libraryMap,
                  this._componentsMap,
                  this.createComponent.bind(this)
                )),
                  (this._components = Zl(Zl({}, pf), this._components));
              },
            },
            {
              key: "components",
              get: function e() {
                return this._components;
              },
            },
            {
              key: "context",
              get: function e() {
                return this._appContext;
              },
            },
            {
              key: "designMode",
              get: function e() {
                return this._designMode;
              },
            },
            {
              key: "device",
              get: function e() {
                return this._device;
              },
            },
            {
              key: "locale",
              get: function e() {
                return this._locale;
              },
            },
            {
              key: "componentsMap",
              get: function e() {
                return this._componentsMap;
              },
            },
            {
              key: "load",
              value: function e(t) {
                return cf.load(t);
              },
            },
            {
              key: "loadAsyncLibrary",
              value: (function () {
                var e = nf(
                  ef().mark(function e(t) {
                    return ef().wrap(
                      function e(n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.next = 2), cf.loadAsyncLibrary(t);
                            case 2:
                              this.buildComponents();
                            case 3:
                            case "end":
                              return n.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            {
              key: "getComponent",
              value: function e(t) {
                for (var n = t.split("."), r = []; ; ) {
                  var o = this._components[t];
                  if (o) return kt(o, r);
                  var i = n.pop();
                  if (!i) return null;
                  r.unshift(i), (t = n.join("."));
                }
              },
            },
            {
              key: "getClosestNodeInstance",
              value: function e(t, n) {
                return mf(t, n);
              },
            },
            {
              key: "findDOMNodes",
              value: function e(t) {
                return Fc(t);
              },
            },
            {
              key: "getClientRects",
              value: function e(t) {
                return Bc(t);
              },
            },
            {
              key: "setNativeSelection",
              value: function e(t) {
                Et(t);
              },
            },
            {
              key: "setDraggingState",
              value: function e(t) {
                dt.setDragging(t);
              },
            },
            {
              key: "setCopyState",
              value: function e(t) {
                dt.setCopy(t);
              },
            },
            {
              key: "clearState",
              value: function e() {
                dt.release();
              },
            },
            {
              key: "createComponent",
              value: function e(t) {
                var n = Zl({}, Dn(t));
                if ("Component" === t.componentName && t.css) {
                  var r = window.document,
                    o = r.createElement("style");
                  o.setAttribute("type", "text/css"),
                    o.setAttribute("id", "Component-".concat(t.id || "")),
                    o.appendChild(r.createTextNode(t.css || "")),
                    r.getElementsByTagName("head")[0].appendChild(o);
                }
                var i = this,
                  a;
                return (function (e) {
                  zl(r, e);
                  var t = Jl(r);
                  function r() {
                    return rf(this, r), t.apply(this, arguments);
                  }
                  return (
                    af(r, [
                      {
                        key: "render",
                        value: function e() {
                          var t = gf(this.props);
                          return Object(s.createElement)(
                            uu,
                            Zl(
                              Zl({}, t),
                              {},
                              {
                                schema: n,
                                components: i.components,
                                designMode: "",
                                device: i.device,
                                appHelper: i.context,
                                rendererName: "LowCodeRenderer",
                                thisRequiredInJSE: p.thisRequiredInJSE,
                                customCreateElement: function e(t, n, r) {
                                  var o,
                                    i =
                                      null === (o = p.currentDocument) ||
                                      void 0 === o
                                        ? void 0
                                        : o.getComponentMeta(t.displayName);
                                  if (null != i && i.isModal) return null;
                                  var a = n.__id,
                                    u = n.__designMode,
                                    c = Vl(n, Ul),
                                    l = {
                                      isEmpty: function e() {
                                        return !1;
                                      },
                                      isMock: !0,
                                    };
                                  return (
                                    (c._leaf = l),
                                    Object(s.createElement)(t, c, r)
                                  );
                                },
                              }
                            )
                          );
                        },
                      },
                    ]),
                    r
                  );
                })(c.a.Component);
              },
            },
            {
              key: "run",
              value: function e() {
                if (!this._running) {
                  this._running = !0;
                  var t = "app",
                    n = document.getElementById("app");
                  n ||
                    ((n = document.createElement("div")),
                    document.body.appendChild(n),
                    (n.id = "app")),
                    document.documentElement.classList.add("engine-page"),
                    document.body.classList.add("engine-document"),
                    Object(l.render)(
                      Object(s.createElement)(Tc, { rendererContainer: this }),
                      n
                    ),
                    p.project.setRendererReady(this);
                }
              },
            },
            {
              key: "rerender",
              value: function e() {
                (this.autoRender = !0),
                  (this._appContext = Zl({}, this._appContext));
              },
            },
            {
              key: "stopAutoRepaintNode",
              value: function e() {
                this.autoRepaintNode = !1;
              },
            },
            {
              key: "enableAutoRepaintNode",
              value: function e() {
                this.autoRepaintNode = !0;
              },
            },
            {
              key: "dispose",
              value: function e() {
                var t = this;
                this.disposeFunctions.forEach(function (e) {
                  return e();
                }),
                  this.documentInstances.forEach(function (e) {
                    return e.dispose();
                  }),
                  Object(a.p)(function () {
                    (t._componentsMap = {}),
                      (t._components = null),
                      (t._appContext = null);
                  });
              },
            },
          ]),
          e
        );
      })();
      Object(u.__decorate)(
        [a.n.ref, Object(u.__metadata)("design:type", Array)],
        ff.prototype,
        "_documentInstances",
        void 0
      ),
        Object(u.__decorate)(
          [a.n, Object(u.__metadata)("design:type", Object)],
          ff.prototype,
          "_layout",
          void 0
        ),
        Object(u.__decorate)(
          [
            a.f,
            Object(u.__metadata)("design:type", Object),
            Object(u.__metadata)("design:paramtypes", [Object]),
          ],
          ff.prototype,
          "layout",
          null
        ),
        Object(u.__decorate)(
          [a.n.ref, Object(u.__metadata)("design:type", Object)],
          ff.prototype,
          "_appContext",
          void 0
        ),
        Object(u.__decorate)(
          [
            a.f,
            Object(u.__metadata)("design:type", Object),
            Object(u.__metadata)("design:paramtypes", []),
          ],
          ff.prototype,
          "context",
          null
        ),
        Object(u.__decorate)(
          [a.n.ref, Object(u.__metadata)("design:type", String)],
          ff.prototype,
          "_designMode",
          void 0
        ),
        Object(u.__decorate)(
          [
            a.f,
            Object(u.__metadata)("design:type", Object),
            Object(u.__metadata)("design:paramtypes", []),
          ],
          ff.prototype,
          "designMode",
          null
        ),
        Object(u.__decorate)(
          [a.n.ref, Object(u.__metadata)("design:type", String)],
          ff.prototype,
          "_device",
          void 0
        ),
        Object(u.__decorate)(
          [
            a.f,
            Object(u.__metadata)("design:type", Object),
            Object(u.__metadata)("design:paramtypes", []),
          ],
          ff.prototype,
          "device",
          null
        ),
        Object(u.__decorate)(
          [a.n.ref, Object(u.__metadata)("design:type", Object)],
          ff.prototype,
          "_locale",
          void 0
        ),
        Object(u.__decorate)(
          [
            a.f,
            Object(u.__metadata)("design:type", Object),
            Object(u.__metadata)("design:paramtypes", []),
          ],
          ff.prototype,
          "locale",
          null
        ),
        Object(u.__decorate)(
          [a.n.ref, Object(u.__metadata)("design:type", Object)],
          ff.prototype,
          "_componentsMap",
          void 0
        ),
        Object(u.__decorate)(
          [
            a.f,
            Object(u.__metadata)("design:type", Object),
            Object(u.__metadata)("design:paramtypes", []),
          ],
          ff.prototype,
          "componentsMap",
          null
        );
      var pf = { Slot: bl, Leaf: Ll },
        hf = "";
      function df(e) {
        return "" !== hf
          ? e
          : !(hf =
              Object.keys(e).find(function (e) {
                return (
                  e.startsWith("__reactInternalInstance$") ||
                  e.startsWith("__reactFiber$")
                );
              }) || "") && e.parentElement
          ? df(e.parentElement)
          : e;
      }
      var vf = Symbol("_LCNodeId"),
        yf = Symbol("_LCDocId");
      function mf(e, t) {
        var n = e;
        if (n) {
          if (!bt(n)) return bf(n[Hc], t);
          n = df(n);
        }
        for (; n; ) {
          if (vf in n) {
            var r = n[vf],
              o = n[yf];
            if (!t || t === r) return { docId: o, nodeId: r, instance: n };
          }
          if (n[hf]) return bf(n[hf], t);
          n = n.parentElement;
        }
        return null;
      }
      function bf(e, t) {
        var n = null == e ? void 0 : e.stateNode;
        if (n && vf in n) {
          var r = n[vf],
            o = n[yf];
          if (!t || t === r) return { docId: o, nodeId: r, instance: n };
        }
        return n || (null != e && e.return)
          ? bf(null == e ? void 0 : e.return)
          : null;
      }
      function _f(e) {
        return !bt(e) || null != e.parentElement;
      }
      function gf(e) {
        if (!e || !qe(e)) return e;
        var t = {};
        return (
          Object.keys(e).forEach(function (n) {
            [
              "children",
              "componentId",
              "__designMode",
              "_componentName",
              "_leaf",
            ].includes(n) || (t[n] = e[n]);
          }),
          t
        );
      }
      var wf = new ff();
      "undefined" != typeof window && (window.SimulatorRenderer = wf),
        window.addEventListener("beforeunload", function () {
          Object(a.o)(function () {
            var e;
            (window.LCSimulatorHost = null),
              null === (e = wf.dispose) || void 0 === e || e.call(wf),
              (window.SimulatorRenderer = null),
              window.ReactDOM.unmountComponentAtNode(
                document.getElementById("app")
              );
          });
        });
      var Of = (t.default = wf);
    },
  ]);
});
//# sourceMappingURL=react-simulator-renderer.js.map
