/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = a.document
              ? b(a, !0)
              : function(a) {
                    if (!a.document)
                        throw new Error(
                            "jQuery requires a window with a document"
                        );
                    return b(a);
                })
        : b(a);
})("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};
    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        (c.text = a), b.head.appendChild(c).parentNode.removeChild(c);
    }
    var q = "3.2.1",
        r = function(a, b) {
            return new r.fn.init(a, b);
        },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function(a, b) {
            return b.toUpperCase();
        };
    (r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() {
            return f.call(this);
        },
        get: function(a) {
            return null == a
                ? f.call(this)
                : a < 0
                ? this[a + this.length]
                : this[a];
        },
        pushStack: function(a) {
            var b = r.merge(this.constructor(), a);
            return (b.prevObject = this), b;
        },
        each: function(a) {
            return r.each(this, a);
        },
        map: function(a) {
            return this.pushStack(
                r.map(this, function(b, c) {
                    return a.call(b, c, b);
                })
            );
        },
        slice: function() {
            return this.pushStack(f.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    }),
        (r.extend = r.fn.extend = function() {
            var a,
                b,
                c,
                d,
                e,
                f,
                g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for (
                "boolean" == typeof g &&
                    ((j = g), (g = arguments[h] || {}), h++),
                    "object" == typeof g || r.isFunction(g) || (g = {}),
                    h === i && ((g = this), h--);
                h < i;
                h++
            )
                if (null != (a = arguments[h]))
                    for (b in a)
                        (c = g[b]),
                            (d = a[b]),
                            g !== d &&
                                (j &&
                                d &&
                                (r.isPlainObject(d) || (e = Array.isArray(d)))
                                    ? (e
                                          ? ((e = !1),
                                            (f =
                                                c && Array.isArray(c) ? c : []))
                                          : (f =
                                                c && r.isPlainObject(c)
                                                    ? c
                                                    : {}),
                                      (g[b] = r.extend(j, f, d)))
                                    : void 0 !== d && (g[b] = d));
            return g;
        }),
        r.extend({
            expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a);
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === r.type(a);
            },
            isWindow: function(a) {
                return null != a && a === a.window;
            },
            isNumeric: function(a) {
                var b = r.type(a);
                return (
                    ("number" === b || "string" === b) &&
                    !isNaN(a - parseFloat(a))
                );
            },
            isPlainObject: function(a) {
                var b, c;
                return (
                    !(!a || "[object Object]" !== k.call(a)) &&
                    (!(b = e(a)) ||
                        ((c = l.call(b, "constructor") && b.constructor),
                        "function" == typeof c && m.call(c) === n))
                );
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0;
            },
            type: function(a) {
                return null == a
                    ? a + ""
                    : "object" == typeof a || "function" == typeof a
                    ? j[k.call(a)] || "object"
                    : typeof a;
            },
            globalEval: function(a) {
                p(a);
            },
            camelCase: function(a) {
                return a.replace(t, "ms-").replace(u, v);
            },
            each: function(a, b) {
                var c,
                    d = 0;
                if (w(a)) {
                    for (c = a.length; d < c; d++)
                        if (b.call(a[d], d, a[d]) === !1) break;
                } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
                return a;
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(s, "");
            },
            makeArray: function(a, b) {
                var c = b || [];
                return (
                    null != a &&
                        (w(Object(a))
                            ? r.merge(c, "string" == typeof a ? [a] : a)
                            : h.call(c, a)),
                    c
                );
            },
            inArray: function(a, b, c) {
                return null == b ? -1 : i.call(b, a, c);
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; d < c; d++)
                    a[e++] = b[d];
                return (a.length = e), a;
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
                    (d = !b(a[f], f)), d !== h && e.push(a[f]);
                return e;
            },
            map: function(a, b, c) {
                var d,
                    e,
                    f = 0,
                    h = [];
                if (w(a))
                    for (d = a.length; f < d; f++)
                        (e = b(a[f], f, c)), null != e && h.push(e);
                else for (f in a) (e = b(a[f], f, c)), null != e && h.push(e);
                return g.apply([], h);
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, e;
                if (
                    ("string" == typeof b && ((c = a[b]), (b = a), (a = c)),
                    r.isFunction(a))
                )
                    return (
                        (d = f.call(arguments, 2)),
                        (e = function() {
                            return a.apply(
                                b || this,
                                d.concat(f.call(arguments))
                            );
                        }),
                        (e.guid = a.guid = a.guid || r.guid++),
                        e
                    );
            },
            now: Date.now,
            support: o
        }),
        "function" == typeof Symbol &&
            (r.fn[Symbol.iterator] = c[Symbol.iterator]),
        r.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function(a, b) {
                j["[object " + b + "]"] = b.toLowerCase();
            }
        );
    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return (
            "function" !== c &&
            !r.isWindow(a) &&
            ("array" === c ||
                0 === b ||
                ("number" == typeof b && b > 0 && b - 1 in a))
        );
    }
    var x = (function(a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = "sizzle" + 1 * new Date(),
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) {
                return a === b && (l = !0), 0;
            },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1;
            },
            J =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M =
                "\\[" +
                K +
                "*(" +
                L +
                ")(?:" +
                K +
                "*([*^$|!~]?=)" +
                K +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                L +
                "))|)" +
                K +
                "*\\]",
            N =
                ":(" +
                L +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                M +
                ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp(
                "^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$",
                "g"
            ),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        K +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        K +
                        "*(?:([+-]|)" +
                        K +
                        "*(\\d+)|))" +
                        K +
                        "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                        K +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        K +
                        "*((?:-\\d)?\\d*)" +
                        K +
                        "*\\)|)(?=[^-]|$)",
                    "i"
                )
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c
                    ? b
                    : d < 0
                    ? String.fromCharCode(d + 65536)
                    : String.fromCharCode(
                          (d >> 10) | 55296,
                          (1023 & d) | 56320
                      );
            },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function(a, b) {
                return b
                    ? "\0" === a
                        ? "\ufffd"
                        : a.slice(0, -1) +
                          "\\" +
                          a.charCodeAt(a.length - 1).toString(16) +
                          " "
                    : "\\" + a;
            },
            da = function() {
                m();
            },
            ea = ta(
                function(a) {
                    return a.disabled === !0 && ("form" in a || "label" in a);
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            G.apply((D = H.call(v.childNodes)), v.childNodes),
                D[v.childNodes.length].nodeType;
        } catch (fa) {
            G = {
                apply: D.length
                    ? function(a, b) {
                          F.apply(a, H.call(b));
                      }
                    : function(a, b) {
                          var c = a.length,
                              d = 0;
                          while ((a[c++] = b[d++]));
                          a.length = c - 1;
                      }
            };
        }
        function ga(a, b, d, e) {
            var f,
                h,
                j,
                k,
                l,
                o,
                r,
                s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (
                ((d = d || []),
                "string" != typeof a || !a || (1 !== w && 9 !== w && 11 !== w))
            )
                return d;
            if (
                !e &&
                ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
            ) {
                if (11 !== w && (l = Z.exec(a)))
                    if ((f = l[1])) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d;
                        } else if (
                            s &&
                            (j = s.getElementById(f)) &&
                            t(b, j) &&
                            j.id === f
                        )
                            return d.push(j), d;
                    } else {
                        if (l[2])
                            return G.apply(d, b.getElementsByTagName(a)), d;
                        if (
                            (f = l[3]) &&
                            c.getElementsByClassName &&
                            b.getElementsByClassName
                        )
                            return G.apply(d, b.getElementsByClassName(f)), d;
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) (s = b), (r = a);
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id"))
                            ? (k = k.replace(ba, ca))
                            : b.setAttribute("id", (k = u)),
                            (o = g(a)),
                            (h = o.length);
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        (r = o.join(",")),
                            (s = ($.test(a) && qa(b.parentNode)) || b);
                    }
                    if (r)
                        try {
                            return G.apply(d, s.querySelectorAll(r)), d;
                        } catch (x) {
                        } finally {
                            k === u && b.removeAttribute("id");
                        }
                }
            }
            return i(a.replace(P, "$1"), b, d, e);
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return (
                    a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                    (b[c + " "] = e)
                );
            }
            return b;
        }
        function ia(a) {
            return (a[u] = !0), a;
        }
        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), (b = null);
            }
        }
        function ka(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b;
        }
        function la(a, b) {
            var c = b && a,
                d =
                    c &&
                    1 === a.nodeType &&
                    1 === b.nodeType &&
                    a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c) while ((c = c.nextSibling)) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function oa(a) {
            return function(b) {
                return "form" in b
                    ? b.parentNode && b.disabled === !1
                        ? "label" in b
                            ? "label" in b.parentNode
                                ? b.parentNode.disabled === a
                                : b.disabled === a
                            : b.isDisabled === a ||
                              (b.isDisabled !== !a && ea(b) === a)
                        : b.disabled === a
                    : "label" in b && b.disabled === a;
            };
        }
        function pa(a) {
            return ia(function(b) {
                return (
                    (b = +b),
                    ia(function(c, d) {
                        var e,
                            f = a([], c.length, b),
                            g = f.length;
                        while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
                    })
                );
            });
        }
        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        (c = ga.support = {}),
            (f = ga.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return !!b && "HTML" !== b.nodeName;
            }),
            (m = ga.setDocument = function(a) {
                var b,
                    e,
                    g = a ? a.ownerDocument || a : v;
                return g !== n && 9 === g.nodeType && g.documentElement
                    ? ((n = g),
                      (o = n.documentElement),
                      (p = !f(n)),
                      v !== n &&
                          (e = n.defaultView) &&
                          e.top !== e &&
                          (e.addEventListener
                              ? e.addEventListener("unload", da, !1)
                              : e.attachEvent && e.attachEvent("onunload", da)),
                      (c.attributes = ja(function(a) {
                          return (
                              (a.className = "i"), !a.getAttribute("className")
                          );
                      })),
                      (c.getElementsByTagName = ja(function(a) {
                          return (
                              a.appendChild(n.createComment("")),
                              !a.getElementsByTagName("*").length
                          );
                      })),
                      (c.getElementsByClassName = Y.test(
                          n.getElementsByClassName
                      )),
                      (c.getById = ja(function(a) {
                          return (
                              (o.appendChild(a).id = u),
                              !n.getElementsByName ||
                                  !n.getElementsByName(u).length
                          );
                      })),
                      c.getById
                          ? ((d.filter.ID = function(a) {
                                var b = a.replace(_, aa);
                                return function(a) {
                                    return a.getAttribute("id") === b;
                                };
                            }),
                            (d.find.ID = function(a, b) {
                                if (
                                    "undefined" != typeof b.getElementById &&
                                    p
                                ) {
                                    var c = b.getElementById(a);
                                    return c ? [c] : [];
                                }
                            }))
                          : ((d.filter.ID = function(a) {
                                var b = a.replace(_, aa);
                                return function(a) {
                                    var c =
                                        "undefined" !=
                                            typeof a.getAttributeNode &&
                                        a.getAttributeNode("id");
                                    return c && c.value === b;
                                };
                            }),
                            (d.find.ID = function(a, b) {
                                if (
                                    "undefined" != typeof b.getElementById &&
                                    p
                                ) {
                                    var c,
                                        d,
                                        e,
                                        f = b.getElementById(a);
                                    if (f) {
                                        if (
                                            ((c = f.getAttributeNode("id")),
                                            c && c.value === a)
                                        )
                                            return [f];
                                        (e = b.getElementsByName(a)), (d = 0);
                                        while ((f = e[d++]))
                                            if (
                                                ((c = f.getAttributeNode("id")),
                                                c && c.value === a)
                                            )
                                                return [f];
                                    }
                                    return [];
                                }
                            })),
                      (d.find.TAG = c.getElementsByTagName
                          ? function(a, b) {
                                return "undefined" !=
                                    typeof b.getElementsByTagName
                                    ? b.getElementsByTagName(a)
                                    : c.qsa
                                    ? b.querySelectorAll(a)
                                    : void 0;
                            }
                          : function(a, b) {
                                var c,
                                    d = [],
                                    e = 0,
                                    f = b.getElementsByTagName(a);
                                if ("*" === a) {
                                    while ((c = f[e++]))
                                        1 === c.nodeType && d.push(c);
                                    return d;
                                }
                                return f;
                            }),
                      (d.find.CLASS =
                          c.getElementsByClassName &&
                          function(a, b) {
                              if (
                                  "undefined" !=
                                      typeof b.getElementsByClassName &&
                                  p
                              )
                                  return b.getElementsByClassName(a);
                          }),
                      (r = []),
                      (q = []),
                      (c.qsa = Y.test(n.querySelectorAll)) &&
                          (ja(function(a) {
                              (o.appendChild(a).innerHTML =
                                  "<a id='" +
                                  u +
                                  "'></a><select id='" +
                                  u +
                                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                  a.querySelectorAll("[msallowcapture^='']")
                                      .length &&
                                      q.push("[*^$]=" + K + "*(?:''|\"\")"),
                                  a.querySelectorAll("[selected]").length ||
                                      q.push(
                                          "\\[" + K + "*(?:value|" + J + ")"
                                      ),
                                  a.querySelectorAll("[id~=" + u + "-]")
                                      .length || q.push("~="),
                                  a.querySelectorAll(":checked").length ||
                                      q.push(":checked"),
                                  a.querySelectorAll("a#" + u + "+*").length ||
                                      q.push(".#.+[+~]");
                          }),
                          ja(function(a) {
                              a.innerHTML =
                                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                              var b = n.createElement("input");
                              b.setAttribute("type", "hidden"),
                                  a.appendChild(b).setAttribute("name", "D"),
                                  a.querySelectorAll("[name=d]").length &&
                                      q.push("name" + K + "*[*^$|!~]?="),
                                  2 !== a.querySelectorAll(":enabled").length &&
                                      q.push(":enabled", ":disabled"),
                                  (o.appendChild(a).disabled = !0),
                                  2 !==
                                      a.querySelectorAll(":disabled").length &&
                                      q.push(":enabled", ":disabled"),
                                  a.querySelectorAll("*,:x"),
                                  q.push(",.*:");
                          })),
                      (c.matchesSelector = Y.test(
                          (s =
                              o.matches ||
                              o.webkitMatchesSelector ||
                              o.mozMatchesSelector ||
                              o.oMatchesSelector ||
                              o.msMatchesSelector)
                      )) &&
                          ja(function(a) {
                              (c.disconnectedMatch = s.call(a, "*")),
                                  s.call(a, "[s!='']:x"),
                                  r.push("!=", N);
                          }),
                      (q = q.length && new RegExp(q.join("|"))),
                      (r = r.length && new RegExp(r.join("|"))),
                      (b = Y.test(o.compareDocumentPosition)),
                      (t =
                          b || Y.test(o.contains)
                              ? function(a, b) {
                                    var c =
                                            9 === a.nodeType
                                                ? a.documentElement
                                                : a,
                                        d = b && b.parentNode;
                                    return (
                                        a === d ||
                                        !(
                                            !d ||
                                            1 !== d.nodeType ||
                                            !(c.contains
                                                ? c.contains(d)
                                                : a.compareDocumentPosition &&
                                                  16 &
                                                      a.compareDocumentPosition(
                                                          d
                                                      ))
                                        )
                                    );
                                }
                              : function(a, b) {
                                    if (b)
                                        while ((b = b.parentNode))
                                            if (b === a) return !0;
                                    return !1;
                                }),
                      (B = b
                          ? function(a, b) {
                                if (a === b) return (l = !0), 0;
                                var d =
                                    !a.compareDocumentPosition -
                                    !b.compareDocumentPosition;
                                return d
                                    ? d
                                    : ((d =
                                          (a.ownerDocument || a) ===
                                          (b.ownerDocument || b)
                                              ? a.compareDocumentPosition(b)
                                              : 1),
                                      1 & d ||
                                      (!c.sortDetached &&
                                          b.compareDocumentPosition(a) === d)
                                          ? a === n ||
                                            (a.ownerDocument === v && t(v, a))
                                              ? -1
                                              : b === n ||
                                                (b.ownerDocument === v &&
                                                    t(v, b))
                                              ? 1
                                              : k
                                              ? I(k, a) - I(k, b)
                                              : 0
                                          : 4 & d
                                          ? -1
                                          : 1);
                            }
                          : function(a, b) {
                                if (a === b) return (l = !0), 0;
                                var c,
                                    d = 0,
                                    e = a.parentNode,
                                    f = b.parentNode,
                                    g = [a],
                                    h = [b];
                                if (!e || !f)
                                    return a === n
                                        ? -1
                                        : b === n
                                        ? 1
                                        : e
                                        ? -1
                                        : f
                                        ? 1
                                        : k
                                        ? I(k, a) - I(k, b)
                                        : 0;
                                if (e === f) return la(a, b);
                                c = a;
                                while ((c = c.parentNode)) g.unshift(c);
                                c = b;
                                while ((c = c.parentNode)) h.unshift(c);
                                while (g[d] === h[d]) d++;
                                return d
                                    ? la(g[d], h[d])
                                    : g[d] === v
                                    ? -1
                                    : h[d] === v
                                    ? 1
                                    : 0;
                            }),
                      n)
                    : n;
            }),
            (ga.matches = function(a, b) {
                return ga(a, null, null, b);
            }),
            (ga.matchesSelector = function(a, b) {
                if (
                    ((a.ownerDocument || a) !== n && m(a),
                    (b = b.replace(S, "='$1']")),
                    c.matchesSelector &&
                        p &&
                        !A[b + " "] &&
                        (!r || !r.test(b)) &&
                        (!q || !q.test(b)))
                )
                    try {
                        var d = s.call(a, b);
                        if (
                            d ||
                            c.disconnectedMatch ||
                            (a.document && 11 !== a.document.nodeType)
                        )
                            return d;
                    } catch (e) {}
                return ga(b, n, null, [a]).length > 0;
            }),
            (ga.contains = function(a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b);
            }),
            (ga.attr = function(a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()],
                    f =
                        e && C.call(d.attrHandle, b.toLowerCase())
                            ? e(a, b, !p)
                            : void 0;
                return void 0 !== f
                    ? f
                    : c.attributes || !p
                    ? a.getAttribute(b)
                    : (f = a.getAttributeNode(b)) && f.specified
                    ? f.value
                    : null;
            }),
            (ga.escape = function(a) {
                return (a + "").replace(ba, ca);
            }),
            (ga.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a);
            }),
            (ga.uniqueSort = function(a) {
                var b,
                    d = [],
                    e = 0,
                    f = 0;
                if (
                    ((l = !c.detectDuplicates),
                    (k = !c.sortStable && a.slice(0)),
                    a.sort(B),
                    l)
                ) {
                    while ((b = a[f++])) b === a[f] && (e = d.push(f));
                    while (e--) a.splice(d[e], 1);
                }
                return (k = null), a;
            }),
            (e = ga.getText = function(a) {
                var b,
                    c = "",
                    d = 0,
                    f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent)
                            return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                    } else if (3 === f || 4 === f) return a.nodeValue;
                } else while ((b = a[d++])) c += e(b);
                return c;
            }),
            (d = ga.selectors = {
                cacheLength: 50,
                createPseudo: ia,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" }
                },
                preFilter: {
                    ATTR: function(a) {
                        return (
                            (a[1] = a[1].replace(_, aa)),
                            (a[3] = (a[3] || a[4] || a[5] || "").replace(
                                _,
                                aa
                            )),
                            "~=" === a[2] && (a[3] = " " + a[3] + " "),
                            a.slice(0, 4)
                        );
                    },
                    CHILD: function(a) {
                        return (
                            (a[1] = a[1].toLowerCase()),
                            "nth" === a[1].slice(0, 3)
                                ? (a[3] || ga.error(a[0]),
                                  (a[4] = +(a[4]
                                      ? a[5] + (a[6] || 1)
                                      : 2 *
                                        ("even" === a[3] || "odd" === a[3]))),
                                  (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                                : a[3] && ga.error(a[0]),
                            a
                        );
                    },
                    PSEUDO: function(a) {
                        var b,
                            c = !a[6] && a[2];
                        return V.CHILD.test(a[0])
                            ? null
                            : (a[3]
                                  ? (a[2] = a[4] || a[5] || "")
                                  : c &&
                                    T.test(c) &&
                                    (b = g(c, !0)) &&
                                    (b =
                                        c.indexOf(")", c.length - b) -
                                        c.length) &&
                                    ((a[0] = a[0].slice(0, b)),
                                    (a[2] = c.slice(0, b))),
                              a.slice(0, 3));
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(_, aa).toLowerCase();
                        return "*" === a
                            ? function() {
                                  return !0;
                              }
                            : function(a) {
                                  return (
                                      a.nodeName &&
                                      a.nodeName.toLowerCase() === b
                                  );
                              };
                    },
                    CLASS: function(a) {
                        var b = y[a + " "];
                        return (
                            b ||
                            ((b = new RegExp(
                                "(^|" + K + ")" + a + "(" + K + "|$)"
                            )) &&
                                y(a, function(a) {
                                    return b.test(
                                        ("string" == typeof a.className &&
                                            a.className) ||
                                            ("undefined" !=
                                                typeof a.getAttribute &&
                                                a.getAttribute("class")) ||
                                            ""
                                    );
                                }))
                        );
                    },
                    ATTR: function(a, b, c) {
                        return function(d) {
                            var e = ga.attr(d, a);
                            return null == e
                                ? "!=" === b
                                : !b ||
                                      ((e += ""),
                                      "=" === b
                                          ? e === c
                                          : "!=" === b
                                          ? e !== c
                                          : "^=" === b
                                          ? c && 0 === e.indexOf(c)
                                          : "*=" === b
                                          ? c && e.indexOf(c) > -1
                                          : "$=" === b
                                          ? c && e.slice(-c.length) === c
                                          : "~=" === b
                                          ? (
                                                " " +
                                                e.replace(O, " ") +
                                                " "
                                            ).indexOf(c) > -1
                                          : "|=" === b &&
                                            (e === c ||
                                                e.slice(0, c.length + 1) ===
                                                    c + "-"));
                        };
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e
                            ? function(a) {
                                  return !!a.parentNode;
                              }
                            : function(b, c, i) {
                                  var j,
                                      k,
                                      l,
                                      m,
                                      n,
                                      o,
                                      p =
                                          f !== g
                                              ? "nextSibling"
                                              : "previousSibling",
                                      q = b.parentNode,
                                      r = h && b.nodeName.toLowerCase(),
                                      s = !i && !h,
                                      t = !1;
                                  if (q) {
                                      if (f) {
                                          while (p) {
                                              m = b;
                                              while ((m = m[p]))
                                                  if (
                                                      h
                                                          ? m.nodeName.toLowerCase() ===
                                                            r
                                                          : 1 === m.nodeType
                                                  )
                                                      return !1;
                                              o = p =
                                                  "only" === a &&
                                                  !o &&
                                                  "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (
                                          ((o = [
                                              g ? q.firstChild : q.lastChild
                                          ]),
                                          g && s)
                                      ) {
                                          (m = q),
                                              (l = m[u] || (m[u] = {})),
                                              (k =
                                                  l[m.uniqueID] ||
                                                  (l[m.uniqueID] = {})),
                                              (j = k[a] || []),
                                              (n = j[0] === w && j[1]),
                                              (t = n && j[2]),
                                              (m = n && q.childNodes[n]);
                                          while (
                                              (m =
                                                  (++n && m && m[p]) ||
                                                  (t = n = 0) ||
                                                  o.pop())
                                          )
                                              if (
                                                  1 === m.nodeType &&
                                                  ++t &&
                                                  m === b
                                              ) {
                                                  k[a] = [w, n, t];
                                                  break;
                                              }
                                      } else if (
                                          (s &&
                                              ((m = b),
                                              (l = m[u] || (m[u] = {})),
                                              (k =
                                                  l[m.uniqueID] ||
                                                  (l[m.uniqueID] = {})),
                                              (j = k[a] || []),
                                              (n = j[0] === w && j[1]),
                                              (t = n)),
                                          t === !1)
                                      )
                                          while (
                                              (m =
                                                  (++n && m && m[p]) ||
                                                  (t = n = 0) ||
                                                  o.pop())
                                          )
                                              if (
                                                  (h
                                                      ? m.nodeName.toLowerCase() ===
                                                        r
                                                      : 1 === m.nodeType) &&
                                                  ++t &&
                                                  (s &&
                                                      ((l =
                                                          m[u] || (m[u] = {})),
                                                      (k =
                                                          l[m.uniqueID] ||
                                                          (l[m.uniqueID] = {})),
                                                      (k[a] = [w, t])),
                                                  m === b)
                                              )
                                                  break;
                                      return (
                                          (t -= e),
                                          t === d || (t % d === 0 && t / d >= 0)
                                      );
                                  }
                              };
                    },
                    PSEUDO: function(a, b) {
                        var c,
                            e =
                                d.pseudos[a] ||
                                d.setFilters[a.toLowerCase()] ||
                                ga.error("unsupported pseudo: " + a);
                        return e[u]
                            ? e(b)
                            : e.length > 1
                            ? ((c = [a, a, "", b]),
                              d.setFilters.hasOwnProperty(a.toLowerCase())
                                  ? ia(function(a, c) {
                                        var d,
                                            f = e(a, b),
                                            g = f.length;
                                        while (g--)
                                            (d = I(a, f[g])),
                                                (a[d] = !(c[d] = f[g]));
                                    })
                                  : function(a) {
                                        return e(a, 0, c);
                                    })
                            : e;
                    }
                },
                pseudos: {
                    not: ia(function(a) {
                        var b = [],
                            c = [],
                            d = h(a.replace(P, "$1"));
                        return d[u]
                            ? ia(function(a, b, c, e) {
                                  var f,
                                      g = d(a, null, e, []),
                                      h = a.length;
                                  while (h--)
                                      (f = g[h]) && (a[h] = !(b[h] = f));
                              })
                            : function(a, e, f) {
                                  return (
                                      (b[0] = a),
                                      d(b, null, f, c),
                                      (b[0] = null),
                                      !c.pop()
                                  );
                              };
                    }),
                    has: ia(function(a) {
                        return function(b) {
                            return ga(a, b).length > 0;
                        };
                    }),
                    contains: ia(function(a) {
                        return (
                            (a = a.replace(_, aa)),
                            function(b) {
                                return (
                                    (
                                        b.textContent ||
                                        b.innerText ||
                                        e(b)
                                    ).indexOf(a) > -1
                                );
                            }
                        );
                    }),
                    lang: ia(function(a) {
                        return (
                            U.test(a || "") ||
                                ga.error("unsupported lang: " + a),
                            (a = a.replace(_, aa).toLowerCase()),
                            function(b) {
                                var c;
                                do
                                    if (
                                        (c = p
                                            ? b.lang
                                            : b.getAttribute("xml:lang") ||
                                              b.getAttribute("lang"))
                                    )
                                        return (
                                            (c = c.toLowerCase()),
                                            c === a || 0 === c.indexOf(a + "-")
                                        );
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id;
                    },
                    root: function(a) {
                        return a === o;
                    },
                    focus: function(a) {
                        return (
                            a === n.activeElement &&
                            (!n.hasFocus || n.hasFocus()) &&
                            !!(a.type || a.href || ~a.tabIndex)
                        );
                    },
                    enabled: oa(!1),
                    disabled: oa(!0),
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return (
                            ("input" === b && !!a.checked) ||
                            ("option" === b && !!a.selected)
                        );
                    },
                    selected: function(a) {
                        return (
                            a.parentNode && a.parentNode.selectedIndex,
                            a.selected === !0
                        );
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function(a) {
                        return !d.pseudos.empty(a);
                    },
                    header: function(a) {
                        return X.test(a.nodeName);
                    },
                    input: function(a) {
                        return W.test(a.nodeName);
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return (
                            ("input" === b && "button" === a.type) ||
                            "button" === b
                        );
                    },
                    text: function(a) {
                        var b;
                        return (
                            "input" === a.nodeName.toLowerCase() &&
                            "text" === a.type &&
                            (null == (b = a.getAttribute("type")) ||
                                "text" === b.toLowerCase())
                        );
                    },
                    first: pa(function() {
                        return [0];
                    }),
                    last: pa(function(a, b) {
                        return [b - 1];
                    }),
                    eq: pa(function(a, b, c) {
                        return [c < 0 ? c + b : c];
                    }),
                    even: pa(function(a, b) {
                        for (var c = 0; c < b; c += 2) a.push(c);
                        return a;
                    }),
                    odd: pa(function(a, b) {
                        for (var c = 1; c < b; c += 2) a.push(c);
                        return a;
                    }),
                    lt: pa(function(a, b, c) {
                        for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
                        return a;
                    }),
                    gt: pa(function(a, b, c) {
                        for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
                        return a;
                    })
                }
            }),
            (d.pseudos.nth = d.pseudos.eq);
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = ma(b);
        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);
        function ra() {}
        (ra.prototype = d.filters = d.pseudos),
            (d.setFilters = new ra()),
            (g = ga.tokenize = function(a, b) {
                var c,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k = z[a + " "];
                if (k) return b ? 0 : k.slice(0);
                (h = a), (i = []), (j = d.preFilter);
                while (h) {
                    (c && !(e = Q.exec(h))) ||
                        (e && (h = h.slice(e[0].length) || h),
                        i.push((f = []))),
                        (c = !1),
                        (e = R.exec(h)) &&
                            ((c = e.shift()),
                            f.push({ value: c, type: e[0].replace(P, " ") }),
                            (h = h.slice(c.length)));
                    for (g in d.filter)
                        !(e = V[g].exec(h)) ||
                            (j[g] && !(e = j[g](e))) ||
                            ((c = e.shift()),
                            f.push({ value: c, type: g, matches: e }),
                            (h = h.slice(c.length)));
                    if (!c) break;
                }
                return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
            });
        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d;
        }
        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first
                ? function(b, c, e) {
                      while ((b = b[d]))
                          if (1 === b.nodeType || g) return a(b, c, e);
                      return !1;
                  }
                : function(b, c, i) {
                      var j,
                          k,
                          l,
                          m = [w, h];
                      if (i) {
                          while ((b = b[d]))
                              if ((1 === b.nodeType || g) && a(b, c, i))
                                  return !0;
                      } else
                          while ((b = b[d]))
                              if (1 === b.nodeType || g)
                                  if (
                                      ((l = b[u] || (b[u] = {})),
                                      (k =
                                          l[b.uniqueID] ||
                                          (l[b.uniqueID] = {})),
                                      e && e === b.nodeName.toLowerCase())
                                  )
                                      b = b[d] || b;
                                  else {
                                      if (
                                          (j = k[f]) &&
                                          j[0] === w &&
                                          j[1] === h
                                      )
                                          return (m[2] = j[2]);
                                      if (((k[f] = m), (m[2] = a(b, c, i))))
                                          return !0;
                                  }
                      return !1;
                  };
        }
        function ua(a) {
            return a.length > 1
                ? function(b, c, d) {
                      var e = a.length;
                      while (e--) if (!a[e](b, c, d)) return !1;
                      return !0;
                  }
                : a[0];
        }
        function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
            return c;
        }
        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
                (f = a[h]) &&
                    ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
            return g;
        }
        function xa(a, b, c, d, e, f) {
            return (
                d && !d[u] && (d = xa(d)),
                e && !e[u] && (e = xa(e, f)),
                ia(function(f, g, h, i) {
                    var j,
                        k,
                        l,
                        m = [],
                        n = [],
                        o = g.length,
                        p = f || va(b || "*", h.nodeType ? [h] : h, []),
                        q = !a || (!f && b) ? p : wa(p, m, a, h, i),
                        r = c ? (e || (f ? a : o || d) ? [] : g) : q;
                    if ((c && c(q, r, h, i), d)) {
                        (j = wa(r, n)), d(j, [], h, i), (k = j.length);
                        while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    }
                    if (f) {
                        if (e || a) {
                            if (e) {
                                (j = []), (k = r.length);
                                while (k--) (l = r[k]) && j.push((q[k] = l));
                                e(null, (r = []), j, i);
                            }
                            k = r.length;
                            while (k--)
                                (l = r[k]) &&
                                    (j = e ? I(f, l) : m[k]) > -1 &&
                                    (f[j] = !(g[j] = l));
                        }
                    } else (r = wa(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : G.apply(g, r);
                })
            );
        }
        function ya(a) {
            for (
                var b,
                    c,
                    e,
                    f = a.length,
                    g = d.relative[a[0].type],
                    h = g || d.relative[" "],
                    i = g ? 1 : 0,
                    k = ta(
                        function(a) {
                            return a === b;
                        },
                        h,
                        !0
                    ),
                    l = ta(
                        function(a) {
                            return I(b, a) > -1;
                        },
                        h,
                        !0
                    ),
                    m = [
                        function(a, c, d) {
                            var e =
                                (!g && (d || c !== j)) ||
                                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                            return (b = null), e;
                        }
                    ];
                i < f;
                i++
            )
                if ((c = d.relative[a[i].type])) m = [ta(ua(m), c)];
                else {
                    if (
                        ((c = d.filter[a[i].type].apply(null, a[i].matches)),
                        c[u])
                    ) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return xa(
                            i > 1 && ua(m),
                            i > 1 &&
                                sa(
                                    a
                                        .slice(0, i - 1)
                                        .concat({
                                            value:
                                                " " === a[i - 2].type ? "*" : ""
                                        })
                                ).replace(P, "$1"),
                            c,
                            i < e && ya(a.slice(i, e)),
                            e < f && ya((a = a.slice(e))),
                            e < f && sa(a)
                        );
                    }
                    m.push(c);
                }
            return ua(m);
        }
        function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l,
                        o,
                        q,
                        r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || (e && d.find.TAG("*", k)),
                        y = (w += null == v ? 1 : Math.random() || 0.1),
                        z = x.length;
                    for (
                        k && (j = g === n || g || k);
                        s !== z && null != (l = x[s]);
                        s++
                    ) {
                        if (e && l) {
                            (o = 0),
                                g || l.ownerDocument === n || (m(l), (h = !p));
                            while ((q = a[o++]))
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break;
                                }
                            k && (w = y);
                        }
                        c && ((l = !q && l) && r--, f && t.push(l));
                    }
                    if (((r += s), c && s !== r)) {
                        o = 0;
                        while ((q = b[o++])) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u);
                        }
                        G.apply(i, u),
                            k &&
                                !f &&
                                u.length > 0 &&
                                r + b.length > 1 &&
                                ga.uniqueSort(i);
                    }
                    return k && ((w = y), (j = v)), t;
                };
            return c ? ia(f) : f;
        }
        return (
            (h = ga.compile = function(a, b) {
                var c,
                    d = [],
                    e = [],
                    f = A[a + " "];
                if (!f) {
                    b || (b = g(a)), (c = b.length);
                    while (c--) (f = ya(b[c])), f[u] ? d.push(f) : e.push(f);
                    (f = A(a, za(e, d))), (f.selector = a);
                }
                return f;
            }),
            (i = ga.select = function(a, b, c, e) {
                var f,
                    i,
                    j,
                    k,
                    l,
                    m = "function" == typeof a && a,
                    n = !e && g((a = m.selector || a));
                if (((c = c || []), 1 === n.length)) {
                    if (
                        ((i = n[0] = n[0].slice(0)),
                        i.length > 2 &&
                            "ID" === (j = i[0]).type &&
                            9 === b.nodeType &&
                            p &&
                            d.relative[i[1].type])
                    ) {
                        if (
                            ((b = (d.find.ID(j.matches[0].replace(_, aa), b) ||
                                [])[0]),
                            !b)
                        )
                            return c;
                        m && (b = b.parentNode),
                            (a = a.slice(i.shift().value.length));
                    }
                    f = V.needsContext.test(a) ? 0 : i.length;
                    while (f--) {
                        if (((j = i[f]), d.relative[(k = j.type)])) break;
                        if (
                            (l = d.find[k]) &&
                            (e = l(
                                j.matches[0].replace(_, aa),
                                ($.test(i[0].type) && qa(b.parentNode)) || b
                            ))
                        ) {
                            if ((i.splice(f, 1), (a = e.length && sa(i)), !a))
                                return G.apply(c, e), c;
                            break;
                        }
                    }
                }
                return (
                    (m || h(a, n))(
                        e,
                        b,
                        !p,
                        c,
                        !b || ($.test(a) && qa(b.parentNode)) || b
                    ),
                    c
                );
            }),
            (c.sortStable =
                u
                    .split("")
                    .sort(B)
                    .join("") === u),
            (c.detectDuplicates = !!l),
            m(),
            (c.sortDetached = ja(function(a) {
                return (
                    1 & a.compareDocumentPosition(n.createElement("fieldset"))
                );
            })),
            ja(function(a) {
                return (
                    (a.innerHTML = "<a href='#'></a>"),
                    "#" === a.firstChild.getAttribute("href")
                );
            }) ||
                ka("type|href|height|width", function(a, b, c) {
                    if (!c)
                        return a.getAttribute(
                            b,
                            "type" === b.toLowerCase() ? 1 : 2
                        );
                }),
            (c.attributes &&
                ja(function(a) {
                    return (
                        (a.innerHTML = "<input/>"),
                        a.firstChild.setAttribute("value", ""),
                        "" === a.firstChild.getAttribute("value")
                    );
                })) ||
                ka("value", function(a, b, c) {
                    if (!c && "input" === a.nodeName.toLowerCase())
                        return a.defaultValue;
                }),
            ja(function(a) {
                return null == a.getAttribute("disabled");
            }) ||
                ka(J, function(a, b, c) {
                    var d;
                    if (!c)
                        return a[b] === !0
                            ? b.toLowerCase()
                            : (d = a.getAttributeNode(b)) && d.specified
                            ? d.value
                            : null;
                }),
            ga
        );
    })(a);
    (r.find = x),
        (r.expr = x.selectors),
        (r.expr[":"] = r.expr.pseudos),
        (r.uniqueSort = r.unique = x.uniqueSort),
        (r.text = x.getText),
        (r.isXMLDoc = x.isXML),
        (r.contains = x.contains),
        (r.escapeSelector = x.escape);
    var y = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && r(a).is(c)) break;
                    d.push(a);
                }
            return d;
        },
        z = function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c;
        },
        A = r.expr.match.needsContext;
    function B(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }
    var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        D = /^.[^:#\[\.,]*$/;
    function E(a, b, c) {
        return r.isFunction(b)
            ? r.grep(a, function(a, d) {
                  return !!b.call(a, d, a) !== c;
              })
            : b.nodeType
            ? r.grep(a, function(a) {
                  return (a === b) !== c;
              })
            : "string" != typeof b
            ? r.grep(a, function(a) {
                  return i.call(b, a) > -1 !== c;
              })
            : D.test(b)
            ? r.filter(b, a, c)
            : ((b = r.filter(b, a)),
              r.grep(a, function(a) {
                  return i.call(b, a) > -1 !== c && 1 === a.nodeType;
              }));
    }
    (r.filter = function(a, b, c) {
        var d = b[0];
        return (
            c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType
                ? r.find.matchesSelector(d, a)
                    ? [d]
                    : []
                : r.find.matches(
                      a,
                      r.grep(b, function(a) {
                          return 1 === a.nodeType;
                      })
                  )
        );
    }),
        r.fn.extend({
            find: function(a) {
                var b,
                    c,
                    d = this.length,
                    e = this;
                if ("string" != typeof a)
                    return this.pushStack(
                        r(a).filter(function() {
                            for (b = 0; b < d; b++)
                                if (r.contains(e[b], this)) return !0;
                        })
                    );
                for (c = this.pushStack([]), b = 0; b < d; b++)
                    r.find(a, e[b], c);
                return d > 1 ? r.uniqueSort(c) : c;
            },
            filter: function(a) {
                return this.pushStack(E(this, a || [], !1));
            },
            not: function(a) {
                return this.pushStack(E(this, a || [], !0));
            },
            is: function(a) {
                return !!E(
                    this,
                    "string" == typeof a && A.test(a) ? r(a) : a || [],
                    !1
                ).length;
            }
        });
    var F,
        G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        H = (r.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (((c = c || F), "string" == typeof a)) {
                if (
                    ((e =
                        "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
                            ? [null, a, null]
                            : G.exec(a)),
                    !e || (!e[1] && b))
                )
                    return !b || b.jquery
                        ? (b || c).find(a)
                        : this.constructor(b).find(a);
                if (e[1]) {
                    if (
                        ((b = b instanceof r ? b[0] : b),
                        r.merge(
                            this,
                            r.parseHTML(
                                e[1],
                                b && b.nodeType ? b.ownerDocument || b : d,
                                !0
                            )
                        ),
                        C.test(e[1]) && r.isPlainObject(b))
                    )
                        for (e in b)
                            r.isFunction(this[e])
                                ? this[e](b[e])
                                : this.attr(e, b[e]);
                    return this;
                }
                return (
                    (f = d.getElementById(e[2])),
                    f && ((this[0] = f), (this.length = 1)),
                    this
                );
            }
            return a.nodeType
                ? ((this[0] = a), (this.length = 1), this)
                : r.isFunction(a)
                ? void 0 !== c.ready
                    ? c.ready(a)
                    : a(r)
                : r.makeArray(a, this);
        });
    (H.prototype = r.fn), (F = r(d));
    var I = /^(?:parents|prev(?:Until|All))/,
        J = { children: !0, contents: !0, next: !0, prev: !0 };
    r.fn.extend({
        has: function(a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            var c,
                d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (
                            c.nodeType < 11 &&
                            (g
                                ? g.index(c) > -1
                                : 1 === c.nodeType &&
                                  r.find.matchesSelector(c, a))
                        ) {
                            f.push(c);
                            break;
                        }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
        },
        index: function(a) {
            return a
                ? "string" == typeof a
                    ? i.call(r(a), this[0])
                    : i.call(this, a.jquery ? a[0] : a)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
        },
        add: function(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
        },
        addBack: function(a) {
            return this.add(
                null == a ? this.prevObject : this.prevObject.filter(a)
            );
        }
    });
    function K(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a;
    }
    r.each(
        {
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null;
            },
            parents: function(a) {
                return y(a, "parentNode");
            },
            parentsUntil: function(a, b, c) {
                return y(a, "parentNode", c);
            },
            next: function(a) {
                return K(a, "nextSibling");
            },
            prev: function(a) {
                return K(a, "previousSibling");
            },
            nextAll: function(a) {
                return y(a, "nextSibling");
            },
            prevAll: function(a) {
                return y(a, "previousSibling");
            },
            nextUntil: function(a, b, c) {
                return y(a, "nextSibling", c);
            },
            prevUntil: function(a, b, c) {
                return y(a, "previousSibling", c);
            },
            siblings: function(a) {
                return z((a.parentNode || {}).firstChild, a);
            },
            children: function(a) {
                return z(a.firstChild);
            },
            contents: function(a) {
                return B(a, "iframe")
                    ? a.contentDocument
                    : (B(a, "template") && (a = a.content || a),
                      r.merge([], a.childNodes));
            }
        },
        function(a, b) {
            r.fn[a] = function(c, d) {
                var e = r.map(this, b, c);
                return (
                    "Until" !== a.slice(-5) && (d = c),
                    d && "string" == typeof d && (e = r.filter(d, e)),
                    this.length > 1 &&
                        (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()),
                    this.pushStack(e)
                );
            };
        }
    );
    var L = /[^\x20\t\r\n\f]+/g;
    function M(a) {
        var b = {};
        return (
            r.each(a.match(L) || [], function(a, c) {
                b[c] = !0;
            }),
            b
        );
    }
    r.Callbacks = function(a) {
        a = "string" == typeof a ? M(a) : r.extend({}, a);
        var b,
            c,
            d,
            e,
            f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = e || a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length)
                        f[h].apply(c[0], c[1]) === !1 &&
                            a.stopOnFalse &&
                            ((h = f.length), (c = !1));
                }
                a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
            },
            j = {
                add: function() {
                    return (
                        f &&
                            (c && !b && ((h = f.length - 1), g.push(c)),
                            (function d(b) {
                                r.each(b, function(b, c) {
                                    r.isFunction(c)
                                        ? (a.unique && j.has(c)) || f.push(c)
                                        : c &&
                                          c.length &&
                                          "string" !== r.type(c) &&
                                          d(c);
                                });
                            })(arguments),
                            c && !b && i()),
                        this
                    );
                },
                remove: function() {
                    return (
                        r.each(arguments, function(a, b) {
                            var c;
                            while ((c = r.inArray(b, f, c)) > -1)
                                f.splice(c, 1), c <= h && h--;
                        }),
                        this
                    );
                },
                has: function(a) {
                    return a ? r.inArray(a, f) > -1 : f.length > 0;
                },
                empty: function() {
                    return f && (f = []), this;
                },
                disable: function() {
                    return (e = g = []), (f = c = ""), this;
                },
                disabled: function() {
                    return !f;
                },
                lock: function() {
                    return (e = g = []), c || b || (f = c = ""), this;
                },
                locked: function() {
                    return !!e;
                },
                fireWith: function(a, c) {
                    return (
                        e ||
                            ((c = c || []),
                            (c = [a, c.slice ? c.slice() : c]),
                            g.push(c),
                            b || i()),
                        this
                    );
                },
                fire: function() {
                    return j.fireWith(this, arguments), this;
                },
                fired: function() {
                    return !!d;
                }
            };
        return j;
    };
    function N(a) {
        return a;
    }
    function O(a) {
        throw a;
    }
    function P(a, b, c, d) {
        var e;
        try {
            a && r.isFunction((e = a.promise))
                ? e
                      .call(a)
                      .done(b)
                      .fail(c)
                : a && r.isFunction((e = a.then))
                ? e.call(a, b, c)
                : b.apply(void 0, [a].slice(d));
        } catch (a) {
            c.apply(void 0, [a]);
        }
    }
    r.extend({
        Deferred: function(b) {
            var c = [
                    [
                        "notify",
                        "progress",
                        r.Callbacks("memory"),
                        r.Callbacks("memory"),
                        2
                    ],
                    [
                        "resolve",
                        "done",
                        r.Callbacks("once memory"),
                        r.Callbacks("once memory"),
                        0,
                        "resolved"
                    ],
                    [
                        "reject",
                        "fail",
                        r.Callbacks("once memory"),
                        r.Callbacks("once memory"),
                        1,
                        "rejected"
                    ]
                ],
                d = "pending",
                e = {
                    state: function() {
                        return d;
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments), this;
                    },
                    catch: function(a) {
                        return e.then(null, a);
                    },
                    pipe: function() {
                        var a = arguments;
                        return r
                            .Deferred(function(b) {
                                r.each(c, function(c, d) {
                                    var e = r.isFunction(a[d[4]]) && a[d[4]];
                                    f[d[1]](function() {
                                        var a = e && e.apply(this, arguments);
                                        a && r.isFunction(a.promise)
                                            ? a
                                                  .promise()
                                                  .progress(b.notify)
                                                  .done(b.resolve)
                                                  .fail(b.reject)
                                            : b[d[0] + "With"](
                                                  this,
                                                  e ? [a] : arguments
                                              );
                                    });
                                }),
                                    (a = null);
                            })
                            .promise();
                    },
                    then: function(b, d, e) {
                        var f = 0;
                        function g(b, c, d, e) {
                            return function() {
                                var h = this,
                                    i = arguments,
                                    j = function() {
                                        var a, j;
                                        if (!(b < f)) {
                                            if (
                                                ((a = d.apply(h, i)),
                                                a === c.promise())
                                            )
                                                throw new TypeError(
                                                    "Thenable self-resolution"
                                                );
                                            (j =
                                                a &&
                                                ("object" == typeof a ||
                                                    "function" == typeof a) &&
                                                a.then),
                                                r.isFunction(j)
                                                    ? e
                                                        ? j.call(
                                                              a,
                                                              g(f, c, N, e),
                                                              g(f, c, O, e)
                                                          )
                                                        : (f++,
                                                          j.call(
                                                              a,
                                                              g(f, c, N, e),
                                                              g(f, c, O, e),
                                                              g(
                                                                  f,
                                                                  c,
                                                                  N,
                                                                  c.notifyWith
                                                              )
                                                          ))
                                                    : (d !== N &&
                                                          ((h = void 0),
                                                          (i = [a])),
                                                      (e || c.resolveWith)(
                                                          h,
                                                          i
                                                      ));
                                        }
                                    },
                                    k = e
                                        ? j
                                        : function() {
                                              try {
                                                  j();
                                              } catch (a) {
                                                  r.Deferred.exceptionHook &&
                                                      r.Deferred.exceptionHook(
                                                          a,
                                                          k.stackTrace
                                                      ),
                                                      b + 1 >= f &&
                                                          (d !== O &&
                                                              ((h = void 0),
                                                              (i = [a])),
                                                          c.rejectWith(h, i));
                                              }
                                          };
                                b
                                    ? k()
                                    : (r.Deferred.getStackHook &&
                                          (k.stackTrace = r.Deferred.getStackHook()),
                                      a.setTimeout(k));
                            };
                        }
                        return r
                            .Deferred(function(a) {
                                c[0][3].add(
                                    g(
                                        0,
                                        a,
                                        r.isFunction(e) ? e : N,
                                        a.notifyWith
                                    )
                                ),
                                    c[1][3].add(
                                        g(0, a, r.isFunction(b) ? b : N)
                                    ),
                                    c[2][3].add(
                                        g(0, a, r.isFunction(d) ? d : O)
                                    );
                            })
                            .promise();
                    },
                    promise: function(a) {
                        return null != a ? r.extend(a, e) : e;
                    }
                },
                f = {};
            return (
                r.each(c, function(a, b) {
                    var g = b[2],
                        h = b[5];
                    (e[b[1]] = g.add),
                        h &&
                            g.add(
                                function() {
                                    d = h;
                                },
                                c[3 - a][2].disable,
                                c[0][2].lock
                            ),
                        g.add(b[3].fire),
                        (f[b[0]] = function() {
                            return (
                                f[b[0] + "With"](
                                    this === f ? void 0 : this,
                                    arguments
                                ),
                                this
                            );
                        }),
                        (f[b[0] + "With"] = g.fireWith);
                }),
                e.promise(f),
                b && b.call(f, f),
                f
            );
        },
        when: function(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function(a) {
                    return function(c) {
                        (d[a] = this),
                            (e[a] =
                                arguments.length > 1 ? f.call(arguments) : c),
                            --b || g.resolveWith(d, e);
                    };
                };
            if (
                b <= 1 &&
                (P(a, g.done(h(c)).resolve, g.reject, !b),
                "pending" === g.state() || r.isFunction(e[c] && e[c].then))
            )
                return g.then();
            while (c--) P(e[c], h(c), g.reject);
            return g.promise();
        }
    });
    var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (r.Deferred.exceptionHook = function(b, c) {
        a.console &&
            a.console.warn &&
            b &&
            Q.test(b.name) &&
            a.console.warn(
                "jQuery.Deferred exception: " + b.message,
                b.stack,
                c
            );
    }),
        (r.readyException = function(b) {
            a.setTimeout(function() {
                throw b;
            });
        });
    var R = r.Deferred();
    (r.fn.ready = function(a) {
        return (
            R.then(a)["catch"](function(a) {
                r.readyException(a);
            }),
            this
        );
    }),
        r.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(a) {
                (a === !0 ? --r.readyWait : r.isReady) ||
                    ((r.isReady = !0),
                    (a !== !0 && --r.readyWait > 0) || R.resolveWith(d, [r]));
            }
        }),
        (r.ready.then = R.then);
    function S() {
        d.removeEventListener("DOMContentLoaded", S),
            a.removeEventListener("load", S),
            r.ready();
    }
    "complete" === d.readyState ||
    ("loading" !== d.readyState && !d.documentElement.doScroll)
        ? a.setTimeout(r.ready)
        : (d.addEventListener("DOMContentLoaded", S),
          a.addEventListener("load", S));
    var T = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === r.type(c)) {
                e = !0;
                for (h in c) T(a, b, h, c[h], !0, f, g);
            } else if (
                void 0 !== d &&
                ((e = !0),
                r.isFunction(d) || (g = !0),
                j &&
                    (g
                        ? (b.call(a, d), (b = null))
                        : ((j = b),
                          (b = function(a, b, c) {
                              return j.call(r(a), c);
                          }))),
                b)
            )
                for (; h < i; h++)
                    b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
        },
        U = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
        };
    function V() {
        this.expando = r.expando + V.uid++;
    }
    (V.uid = 1),
        (V.prototype = {
            cache: function(a) {
                var b = a[this.expando];
                return (
                    b ||
                        ((b = {}),
                        U(a) &&
                            (a.nodeType
                                ? (a[this.expando] = b)
                                : Object.defineProperty(a, this.expando, {
                                      value: b,
                                      configurable: !0
                                  }))),
                    b
                );
            },
            set: function(a, b, c) {
                var d,
                    e = this.cache(a);
                if ("string" == typeof b) e[r.camelCase(b)] = c;
                else for (d in b) e[r.camelCase(d)] = b[d];
                return e;
            },
            get: function(a, b) {
                return void 0 === b
                    ? this.cache(a)
                    : a[this.expando] && a[this.expando][r.camelCase(b)];
            },
            access: function(a, b, c) {
                return void 0 === b ||
                    (b && "string" == typeof b && void 0 === c)
                    ? this.get(a, b)
                    : (this.set(a, b, c), void 0 !== c ? c : b);
            },
            remove: function(a, b) {
                var c,
                    d = a[this.expando];
                if (void 0 !== d) {
                    if (void 0 !== b) {
                        Array.isArray(b)
                            ? (b = b.map(r.camelCase))
                            : ((b = r.camelCase(b)),
                              (b = b in d ? [b] : b.match(L) || [])),
                            (c = b.length);
                        while (c--) delete d[b[c]];
                    }
                    (void 0 === b || r.isEmptyObject(d)) &&
                        (a.nodeType
                            ? (a[this.expando] = void 0)
                            : delete a[this.expando]);
                }
            },
            hasData: function(a) {
                var b = a[this.expando];
                return void 0 !== b && !r.isEmptyObject(b);
            }
        });
    var W = new V(),
        X = new V(),
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;
    function $(a) {
        return (
            "true" === a ||
            ("false" !== a &&
                ("null" === a
                    ? null
                    : a === +a + ""
                    ? +a
                    : Y.test(a)
                    ? JSON.parse(a)
                    : a))
        );
    }
    function _(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (
                ((d = "data-" + b.replace(Z, "-$&").toLowerCase()),
                (c = a.getAttribute(d)),
                "string" == typeof c)
            ) {
                try {
                    c = $(c);
                } catch (e) {}
                X.set(a, b, c);
            } else c = void 0;
        return c;
    }
    r.extend({
        hasData: function(a) {
            return X.hasData(a) || W.hasData(a);
        },
        data: function(a, b, c) {
            return X.access(a, b, c);
        },
        removeData: function(a, b) {
            X.remove(a, b);
        },
        _data: function(a, b, c) {
            return W.access(a, b, c);
        },
        _removeData: function(a, b) {
            W.remove(a, b);
        }
    }),
        r.fn.extend({
            data: function(a, b) {
                var c,
                    d,
                    e,
                    f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (
                        this.length &&
                        ((e = X.get(f)),
                        1 === f.nodeType && !W.get(f, "hasDataAttrs"))
                    ) {
                        c = g.length;
                        while (c--)
                            g[c] &&
                                ((d = g[c].name),
                                0 === d.indexOf("data-") &&
                                    ((d = r.camelCase(d.slice(5))),
                                    _(f, d, e[d])));
                        W.set(f, "hasDataAttrs", !0);
                    }
                    return e;
                }
                return "object" == typeof a
                    ? this.each(function() {
                          X.set(this, a);
                      })
                    : T(
                          this,
                          function(b) {
                              var c;
                              if (f && void 0 === b) {
                                  if (((c = X.get(f, a)), void 0 !== c))
                                      return c;
                                  if (((c = _(f, a)), void 0 !== c)) return c;
                              } else
                                  this.each(function() {
                                      X.set(this, a, b);
                                  });
                          },
                          null,
                          b,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function(a) {
                return this.each(function() {
                    X.remove(this, a);
                });
            }
        }),
        r.extend({
            queue: function(a, b, c) {
                var d;
                if (a)
                    return (
                        (b = (b || "fx") + "queue"),
                        (d = W.get(a, b)),
                        c &&
                            (!d || Array.isArray(c)
                                ? (d = W.access(a, b, r.makeArray(c)))
                                : d.push(c)),
                        d || []
                    );
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = r.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = r._queueHooks(a, b),
                    g = function() {
                        r.dequeue(a, b);
                    };
                "inprogress" === e && ((e = c.shift()), d--),
                    e &&
                        ("fx" === b && c.unshift("inprogress"),
                        delete f.stop,
                        e.call(a, g, f)),
                    !d && f && f.empty.fire();
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return (
                    W.get(a, c) ||
                    W.access(a, c, {
                        empty: r.Callbacks("once memory").add(function() {
                            W.remove(a, [b + "queue", c]);
                        })
                    })
                );
            }
        }),
        r.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return (
                    "string" != typeof a && ((b = a), (a = "fx"), c--),
                    arguments.length < c
                        ? r.queue(this[0], a)
                        : void 0 === b
                        ? this
                        : this.each(function() {
                              var c = r.queue(this, a, b);
                              r._queueHooks(this, a),
                                  "fx" === a &&
                                      "inprogress" !== c[0] &&
                                      r.dequeue(this, a);
                          })
                );
            },
            dequeue: function(a) {
                return this.each(function() {
                    r.dequeue(this, a);
                });
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", []);
            },
            promise: function(a, b) {
                var c,
                    d = 1,
                    e = r.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f]);
                    };
                "string" != typeof a && ((b = a), (a = void 0)),
                    (a = a || "fx");
                while (g--)
                    (c = W.get(f[g], a + "queueHooks")),
                        c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b);
            }
        });
    var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
        ca = ["Top", "Right", "Bottom", "Left"],
        da = function(a, b) {
            return (
                (a = b || a),
                "none" === a.style.display ||
                    ("" === a.style.display &&
                        r.contains(a.ownerDocument, a) &&
                        "none" === r.css(a, "display"))
            );
        },
        ea = function(a, b, c, d) {
            var e,
                f,
                g = {};
            for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e;
        };
    function fa(a, b, c, d) {
        var e,
            f = 1,
            g = 20,
            h = d
                ? function() {
                      return d.cur();
                  }
                : function() {
                      return r.css(a, b, "");
                  },
            i = h(),
            j = (c && c[3]) || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || ("px" !== j && +i)) && ba.exec(r.css(a, b));
        if (k && k[3] !== j) {
            (j = j || k[3]), (c = c || []), (k = +i || 1);
            do (f = f || ".5"), (k /= f), r.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g);
        }
        return (
            c &&
                ((k = +k || +i || 0),
                (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
                d && ((d.unit = j), (d.start = k), (d.end = e))),
            e
        );
    }
    var ga = {};
    function ha(a) {
        var b,
            c = a.ownerDocument,
            d = a.nodeName,
            e = ga[d];
        return e
            ? e
            : ((b = c.body.appendChild(c.createElement(d))),
              (e = r.css(b, "display")),
              b.parentNode.removeChild(b),
              "none" === e && (e = "block"),
              (ga[d] = e),
              e);
    }
    function ia(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
            (d = a[f]),
                d.style &&
                    ((c = d.style.display),
                    b
                        ? ("none" === c &&
                              ((e[f] = W.get(d, "display") || null),
                              e[f] || (d.style.display = "")),
                          "" === d.style.display && da(d) && (e[f] = ha(d)))
                        : "none" !== c &&
                          ((e[f] = "none"), W.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a;
    }
    r.fn.extend({
        show: function() {
            return ia(this, !0);
        },
        hide: function() {
            return ia(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a
                ? a
                    ? this.show()
                    : this.hide()
                : this.each(function() {
                      da(this) ? r(this).show() : r(this).hide();
                  });
        }
    });
    var ja = /^(?:checkbox|radio)$/i,
        ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        la = /^$|\/(?:java|ecma)script/i,
        ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    (ma.optgroup = ma.option),
        (ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead),
        (ma.th = ma.td);
    function na(a, b) {
        var c;
        return (
            (c =
                "undefined" != typeof a.getElementsByTagName
                    ? a.getElementsByTagName(b || "*")
                    : "undefined" != typeof a.querySelectorAll
                    ? a.querySelectorAll(b || "*")
                    : []),
            void 0 === b || (b && B(a, b)) ? r.merge([a], c) : c
        );
    }
    function oa(a, b) {
        for (var c = 0, d = a.length; c < d; c++)
            W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
    }
    var pa = /<|&#?\w+;/;
    function qa(a, b, c, d, e) {
        for (
            var f,
                g,
                h,
                i,
                j,
                k,
                l = b.createDocumentFragment(),
                m = [],
                n = 0,
                o = a.length;
            n < o;
            n++
        )
            if (((f = a[n]), f || 0 === f))
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (pa.test(f)) {
                    (g = g || l.appendChild(b.createElement("div"))),
                        (h = (ka.exec(f) || ["", ""])[1].toLowerCase()),
                        (i = ma[h] || ma._default),
                        (g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2]),
                        (k = i[0]);
                    while (k--) g = g.lastChild;
                    r.merge(m, g.childNodes),
                        (g = l.firstChild),
                        (g.textContent = "");
                } else m.push(b.createTextNode(f));
        (l.textContent = ""), (n = 0);
        while ((f = m[n++]))
            if (d && r.inArray(f, d) > -1) e && e.push(f);
            else if (
                ((j = r.contains(f.ownerDocument, f)),
                (g = na(l.appendChild(f), "script")),
                j && oa(g),
                c)
            ) {
                k = 0;
                while ((f = g[k++])) la.test(f.type || "") && c.push(f);
            }
        return l;
    }
    !(function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"),
            c.setAttribute("checked", "checked"),
            c.setAttribute("name", "t"),
            b.appendChild(c),
            (o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (b.innerHTML = "<textarea>x</textarea>"),
            (o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
    })();
    var ra = d.documentElement,
        sa = /^key/,
        ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ua = /^([^.]*)(?:\.(.+)|)/;
    function va() {
        return !0;
    }
    function wa() {
        return !1;
    }
    function xa() {
        try {
            return d.activeElement;
        } catch (a) {}
    }
    function ya(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && ((d = d || c), (c = void 0));
            for (h in b) ya(a, h, c, d, b[h], f);
            return a;
        }
        if (
            (null == d && null == e
                ? ((e = c), (d = c = void 0))
                : null == e &&
                  ("string" == typeof c
                      ? ((e = d), (d = void 0))
                      : ((e = d), (d = c), (c = void 0))),
            e === !1)
        )
            e = wa;
        else if (!e) return a;
        return (
            1 === f &&
                ((g = e),
                (e = function(a) {
                    return r().off(a), g.apply(this, arguments);
                }),
                (e.guid = g.guid || (g.guid = r.guid++))),
            a.each(function() {
                r.event.add(this, b, e, d, c);
            })
        );
    }
    (r.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = W.get(a);
            if (q) {
                c.handler && ((f = c), (c = f.handler), (e = f.selector)),
                    e && r.find.matchesSelector(ra, e),
                    c.guid || (c.guid = r.guid++),
                    (i = q.events) || (i = q.events = {}),
                    (g = q.handle) ||
                        (g = q.handle = function(b) {
                            return "undefined" != typeof r &&
                                r.event.triggered !== b.type
                                ? r.event.dispatch.apply(a, arguments)
                                : void 0;
                        }),
                    (b = (b || "").match(L) || [""]),
                    (j = b.length);
                while (j--)
                    (h = ua.exec(b[j]) || []),
                        (n = p = h[1]),
                        (o = (h[2] || "").split(".").sort()),
                        n &&
                            ((l = r.event.special[n] || {}),
                            (n = (e ? l.delegateType : l.bindType) || n),
                            (l = r.event.special[n] || {}),
                            (k = r.extend(
                                {
                                    type: n,
                                    origType: p,
                                    data: d,
                                    handler: c,
                                    guid: c.guid,
                                    selector: e,
                                    needsContext:
                                        e && r.expr.match.needsContext.test(e),
                                    namespace: o.join(".")
                                },
                                f
                            )),
                            (m = i[n]) ||
                                ((m = i[n] = []),
                                (m.delegateCount = 0),
                                (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                                    (a.addEventListener &&
                                        a.addEventListener(n, g))),
                            l.add &&
                                (l.add.call(a, k),
                                k.handler.guid || (k.handler.guid = c.guid)),
                            e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                            (r.event.global[n] = !0));
            }
        },
        remove: function(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = W.hasData(a) && W.get(a);
            if (q && (i = q.events)) {
                (b = (b || "").match(L) || [""]), (j = b.length);
                while (j--)
                    if (
                        ((h = ua.exec(b[j]) || []),
                        (n = p = h[1]),
                        (o = (h[2] || "").split(".").sort()),
                        n)
                    ) {
                        (l = r.event.special[n] || {}),
                            (n = (d ? l.delegateType : l.bindType) || n),
                            (m = i[n] || []),
                            (h =
                                h[2] &&
                                new RegExp(
                                    "(^|\\.)" +
                                        o.join("\\.(?:.*\\.|)") +
                                        "(\\.|$)"
                                )),
                            (g = f = m.length);
                        while (f--)
                            (k = m[f]),
                                (!e && p !== k.origType) ||
                                    (c && c.guid !== k.guid) ||
                                    (h && !h.test(k.namespace)) ||
                                    (d &&
                                        d !== k.selector &&
                                        ("**" !== d || !k.selector)) ||
                                    (m.splice(f, 1),
                                    k.selector && m.delegateCount--,
                                    l.remove && l.remove.call(a, k));
                        g &&
                            !m.length &&
                            ((l.teardown &&
                                l.teardown.call(a, o, q.handle) !== !1) ||
                                r.removeEvent(a, n, q.handle),
                            delete i[n]);
                    } else for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && W.remove(a, "handle events");
            }
        },
        dispatch: function(a) {
            var b = r.event.fix(a),
                c,
                d,
                e,
                f,
                g,
                h,
                i = new Array(arguments.length),
                j = (W.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++)
                i[c] = arguments[c];
            if (
                ((b.delegateTarget = this),
                !k.preDispatch || k.preDispatch.call(this, b) !== !1)
            ) {
                (h = r.event.handlers.call(this, b, j)), (c = 0);
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    (b.currentTarget = f.elem), (d = 0);
                    while (
                        (g = f.handlers[d++]) &&
                        !b.isImmediatePropagationStopped()
                    )
                        (b.rnamespace && !b.rnamespace.test(g.namespace)) ||
                            ((b.handleObj = g),
                            (b.data = g.data),
                            (e = (
                                (r.event.special[g.origType] || {}).handle ||
                                g.handler
                            ).apply(f.elem, i)),
                            void 0 !== e &&
                                (b.result = e) === !1 &&
                                (b.preventDefault(), b.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, b), b.result;
            }
        },
        handlers: function(a, b) {
            var c,
                d,
                e,
                f,
                g,
                h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (
                        1 === j.nodeType &&
                        ("click" !== a.type || j.disabled !== !0)
                    ) {
                        for (f = [], g = {}, c = 0; c < i; c++)
                            (d = b[c]),
                                (e = d.selector + " "),
                                void 0 === g[e] &&
                                    (g[e] = d.needsContext
                                        ? r(e, this).index(j) > -1
                                        : r.find(e, this, null, [j]).length),
                                g[e] && f.push(d);
                        f.length && h.push({ elem: j, handlers: f });
                    }
            return (
                (j = this),
                i < b.length && h.push({ elem: j, handlers: b.slice(i) }),
                h
            );
        },
        addProp: function(a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b)
                    ? function() {
                          if (this.originalEvent) return b(this.originalEvent);
                      }
                    : function() {
                          if (this.originalEvent) return this.originalEvent[a];
                      },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    });
                }
            });
        },
        fix: function(a) {
            return a[r.expando] ? a : new r.Event(a);
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function() {
                    if (this !== xa() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === xa() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (
                        "checkbox" === this.type &&
                        this.click &&
                        B(this, "input")
                    )
                        return this.click(), !1;
                },
                _default: function(a) {
                    return B(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result &&
                        a.originalEvent &&
                        (a.originalEvent.returnValue = a.result);
                }
            }
        }
    }),
        (r.removeEvent = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c);
        }),
        (r.Event = function(a, b) {
            return this instanceof r.Event
                ? (a && a.type
                      ? ((this.originalEvent = a),
                        (this.type = a.type),
                        (this.isDefaultPrevented =
                            a.defaultPrevented ||
                            (void 0 === a.defaultPrevented &&
                                a.returnValue === !1)
                                ? va
                                : wa),
                        (this.target =
                            a.target && 3 === a.target.nodeType
                                ? a.target.parentNode
                                : a.target),
                        (this.currentTarget = a.currentTarget),
                        (this.relatedTarget = a.relatedTarget))
                      : (this.type = a),
                  b && r.extend(this, b),
                  (this.timeStamp = (a && a.timeStamp) || r.now()),
                  void (this[r.expando] = !0))
                : new r.Event(a, b);
        }),
        (r.Event.prototype = {
            constructor: r.Event,
            isDefaultPrevented: wa,
            isPropagationStopped: wa,
            isImmediatePropagationStopped: wa,
            isSimulated: !1,
            preventDefault: function() {
                var a = this.originalEvent;
                (this.isDefaultPrevented = va),
                    a && !this.isSimulated && a.preventDefault();
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                (this.isPropagationStopped = va),
                    a && !this.isSimulated && a.stopPropagation();
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                (this.isImmediatePropagationStopped = va),
                    a && !this.isSimulated && a.stopImmediatePropagation(),
                    this.stopPropagation();
            }
        }),
        r.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(a) {
                    var b = a.button;
                    return null == a.which && sa.test(a.type)
                        ? null != a.charCode
                            ? a.charCode
                            : a.keyCode
                        : !a.which && void 0 !== b && ta.test(a.type)
                        ? 1 & b
                            ? 1
                            : 2 & b
                            ? 3
                            : 4 & b
                            ? 2
                            : 0
                        : a.which;
                }
            },
            r.event.addProp
        ),
        r.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            },
            function(a, b) {
                r.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function(a) {
                        var c,
                            d = this,
                            e = a.relatedTarget,
                            f = a.handleObj;
                        return (
                            (e && (e === d || r.contains(d, e))) ||
                                ((a.type = f.origType),
                                (c = f.handler.apply(this, arguments)),
                                (a.type = b)),
                            c
                        );
                    }
                };
            }
        ),
        r.fn.extend({
            on: function(a, b, c, d) {
                return ya(this, a, b, c, d);
            },
            one: function(a, b, c, d) {
                return ya(this, a, b, c, d, 1);
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj)
                    return (
                        (d = a.handleObj),
                        r(a.delegateTarget).off(
                            d.namespace
                                ? d.origType + "." + d.namespace
                                : d.origType,
                            d.selector,
                            d.handler
                        ),
                        this
                    );
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this;
                }
                return (
                    (b !== !1 && "function" != typeof b) ||
                        ((c = b), (b = void 0)),
                    c === !1 && (c = wa),
                    this.each(function() {
                        r.event.remove(this, a, c, b);
                    })
                );
            }
        });
    var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Aa = /<script|<style|<link/i,
        Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ca = /^true\/(.*)/,
        Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ea(a, b) {
        return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr")
            ? r(">tbody", a)[0] || a
            : a;
    }
    function Fa(a) {
        return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
    }
    function Ga(a) {
        var b = Ca.exec(a.type);
        return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
    }
    function Ha(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (
                W.hasData(a) &&
                ((f = W.access(a)), (g = W.set(b, f)), (j = f.events))
            ) {
                delete g.handle, (g.events = {});
                for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++)
                        r.event.add(b, e, j[e][c]);
            }
            X.hasData(a) &&
                ((h = X.access(a)), (i = r.extend({}, h)), X.set(b, i));
        }
    }
    function Ia(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ja.test(a.type)
            ? (b.checked = a.checked)
            : ("input" !== c && "textarea" !== c) ||
              (b.defaultValue = a.defaultValue);
    }
    function Ja(a, b, c, d) {
        b = g.apply([], b);
        var e,
            f,
            h,
            i,
            j,
            k,
            l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);
        if (s || (m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)))
            return a.each(function(e) {
                var f = a.eq(e);
                s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
            });
        if (
            m &&
            ((e = qa(b, a[0].ownerDocument, !1, a, d)),
            (f = e.firstChild),
            1 === e.childNodes.length && (e = f),
            f || d)
        ) {
            for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++)
                (j = e),
                    l !== n &&
                        ((j = r.clone(j, !0, !0)),
                        i && r.merge(h, na(j, "script"))),
                    c.call(a[l], j, l);
            if (i)
                for (
                    k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0;
                    l < i;
                    l++
                )
                    (j = h[l]),
                        la.test(j.type || "") &&
                            !W.access(j, "globalEval") &&
                            r.contains(k, j) &&
                            (j.src
                                ? r._evalUrl && r._evalUrl(j.src)
                                : p(j.textContent.replace(Da, ""), k));
        }
        return a;
    }
    function Ka(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || r.cleanData(na(d)),
                d.parentNode &&
                    (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")),
                    d.parentNode.removeChild(d));
        return a;
    }
    r.extend({
        htmlPrefilter: function(a) {
            return a.replace(za, "<$1></$2>");
        },
        clone: function(a, b, c) {
            var d,
                e,
                f,
                g,
                h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (
                !(
                    o.noCloneChecked ||
                    (1 !== a.nodeType && 11 !== a.nodeType) ||
                    r.isXMLDoc(a)
                )
            )
                for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++)
                    Ia(f[d], g[d]);
            if (b)
                if (c)
                    for (
                        f = f || na(a), g = g || na(h), d = 0, e = f.length;
                        d < e;
                        d++
                    )
                        Ha(f[d], g[d]);
                else Ha(a, h);
            return (
                (g = na(h, "script")),
                g.length > 0 && oa(g, !i && na(a, "script")),
                h
            );
        },
        cleanData: function(a) {
            for (
                var b, c, d, e = r.event.special, f = 0;
                void 0 !== (c = a[f]);
                f++
            )
                if (U(c)) {
                    if ((b = c[W.expando])) {
                        if (b.events)
                            for (d in b.events)
                                e[d]
                                    ? r.event.remove(c, d)
                                    : r.removeEvent(c, d, b.handle);
                        c[W.expando] = void 0;
                    }
                    c[X.expando] && (c[X.expando] = void 0);
                }
        }
    }),
        r.fn.extend({
            detach: function(a) {
                return Ka(this, a, !0);
            },
            remove: function(a) {
                return Ka(this, a);
            },
            text: function(a) {
                return T(
                    this,
                    function(a) {
                        return void 0 === a
                            ? r.text(this)
                            : this.empty().each(function() {
                                  (1 !== this.nodeType &&
                                      11 !== this.nodeType &&
                                      9 !== this.nodeType) ||
                                      (this.textContent = a);
                              });
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            append: function() {
                return Ja(this, arguments, function(a) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var b = Ea(this, a);
                        b.appendChild(a);
                    }
                });
            },
            prepend: function() {
                return Ja(this, arguments, function(a) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var b = Ea(this, a);
                        b.insertBefore(a, b.firstChild);
                    }
                });
            },
            before: function() {
                return Ja(this, arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this);
                });
            },
            after: function() {
                return Ja(this, arguments, function(a) {
                    this.parentNode &&
                        this.parentNode.insertBefore(a, this.nextSibling);
                });
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++)
                    1 === a.nodeType &&
                        (r.cleanData(na(a, !1)), (a.textContent = ""));
                return this;
            },
            clone: function(a, b) {
                return (
                    (a = null != a && a),
                    (b = null == b ? a : b),
                    this.map(function() {
                        return r.clone(this, a, b);
                    })
                );
            },
            html: function(a) {
                return T(
                    this,
                    function(a) {
                        var b = this[0] || {},
                            c = 0,
                            d = this.length;
                        if (void 0 === a && 1 === b.nodeType)
                            return b.innerHTML;
                        if (
                            "string" == typeof a &&
                            !Aa.test(a) &&
                            !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]
                        ) {
                            a = r.htmlPrefilter(a);
                            try {
                                for (; c < d; c++)
                                    (b = this[c] || {}),
                                        1 === b.nodeType &&
                                            (r.cleanData(na(b, !1)),
                                            (b.innerHTML = a));
                                b = 0;
                            } catch (e) {}
                        }
                        b && this.empty().append(a);
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            replaceWith: function() {
                var a = [];
                return Ja(
                    this,
                    arguments,
                    function(b) {
                        var c = this.parentNode;
                        r.inArray(this, a) < 0 &&
                            (r.cleanData(na(this)),
                            c && c.replaceChild(b, this));
                    },
                    a
                );
            }
        }),
        r.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            },
            function(a, b) {
                r.fn[a] = function(a) {
                    for (
                        var c, d = [], e = r(a), f = e.length - 1, g = 0;
                        g <= f;
                        g++
                    )
                        (c = g === f ? this : this.clone(!0)),
                            r(e[g])[b](c),
                            h.apply(d, c.get());
                    return this.pushStack(d);
                };
            }
        );
    var La = /^margin/,
        Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
        Na = function(b) {
            var c = b.ownerDocument.defaultView;
            return (c && c.opener) || (c = a), c.getComputedStyle(b);
        };
    !(function() {
        function b() {
            if (i) {
                (i.style.cssText =
                    "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
                    (i.innerHTML = ""),
                    ra.appendChild(h);
                var b = a.getComputedStyle(i);
                (c = "1%" !== b.top),
                    (g = "2px" === b.marginLeft),
                    (e = "4px" === b.width),
                    (i.style.marginRight = "50%"),
                    (f = "4px" === b.marginRight),
                    ra.removeChild(h),
                    (i = null);
            }
        }
        var c,
            e,
            f,
            g,
            h = d.createElement("div"),
            i = d.createElement("div");
        i.style &&
            ((i.style.backgroundClip = "content-box"),
            (i.cloneNode(!0).style.backgroundClip = ""),
            (o.clearCloneStyle = "content-box" === i.style.backgroundClip),
            (h.style.cssText =
                "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
            h.appendChild(i),
            r.extend(o, {
                pixelPosition: function() {
                    return b(), c;
                },
                boxSizingReliable: function() {
                    return b(), e;
                },
                pixelMarginRight: function() {
                    return b(), f;
                },
                reliableMarginLeft: function() {
                    return b(), g;
                }
            }));
    })();
    function Oa(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;
        return (
            (c = c || Na(a)),
            c &&
                ((g = c.getPropertyValue(b) || c[b]),
                "" !== g ||
                    r.contains(a.ownerDocument, a) ||
                    (g = r.style(a, b)),
                !o.pixelMarginRight() &&
                    Ma.test(g) &&
                    La.test(b) &&
                    ((d = h.width),
                    (e = h.minWidth),
                    (f = h.maxWidth),
                    (h.minWidth = h.maxWidth = h.width = g),
                    (g = c.width),
                    (h.width = d),
                    (h.minWidth = e),
                    (h.maxWidth = f))),
            void 0 !== g ? g + "" : g
        );
    }
    function Pa(a, b) {
        return {
            get: function() {
                return a()
                    ? void delete this.get
                    : (this.get = b).apply(this, arguments);
            }
        };
    }
    var Qa = /^(none|table(?!-c[ea]).+)/,
        Ra = /^--/,
        Sa = { position: "absolute", visibility: "hidden", display: "block" },
        Ta = { letterSpacing: "0", fontWeight: "400" },
        Ua = ["Webkit", "Moz", "ms"],
        Va = d.createElement("div").style;
    function Wa(a) {
        if (a in Va) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ua.length;
        while (c--) if (((a = Ua[c] + b), a in Va)) return a;
    }
    function Xa(a) {
        var b = r.cssProps[a];
        return b || (b = r.cssProps[a] = Wa(a) || a), b;
    }
    function Ya(a, b, c) {
        var d = ba.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }
    function Za(a, b, c, d, e) {
        var f,
            g = 0;
        for (
            f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
            f < 4;
            f += 2
        )
            "margin" === c && (g += r.css(a, c + ca[f], !0, e)),
                d
                    ? ("content" === c &&
                          (g -= r.css(a, "padding" + ca[f], !0, e)),
                      "margin" !== c &&
                          (g -= r.css(a, "border" + ca[f] + "Width", !0, e)))
                    : ((g += r.css(a, "padding" + ca[f], !0, e)),
                      "padding" !== c &&
                          (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
        return g;
    }
    function $a(a, b, c) {
        var d,
            e = Na(a),
            f = Oa(a, b, e),
            g = "border-box" === r.css(a, "boxSizing", !1, e);
        return Ma.test(f)
            ? f
            : ((d = g && (o.boxSizingReliable() || f === a.style[b])),
              "auto" === f &&
                  (f = a["offset" + b[0].toUpperCase() + b.slice(1)]),
              (f = parseFloat(f) || 0),
              f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Oa(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: { float: "cssFloat" },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = r.camelCase(b),
                    i = Ra.test(b),
                    j = a.style;
                return (
                    i || (b = Xa(h)),
                    (g = r.cssHooks[b] || r.cssHooks[h]),
                    void 0 === c
                        ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
                            ? e
                            : j[b]
                        : ((f = typeof c),
                          "string" === f &&
                              (e = ba.exec(c)) &&
                              e[1] &&
                              ((c = fa(a, b, e)), (f = "number")),
                          null != c &&
                              c === c &&
                              ("number" === f &&
                                  (c +=
                                      (e && e[3]) ||
                                      (r.cssNumber[h] ? "" : "px")),
                              o.clearCloneStyle ||
                                  "" !== c ||
                                  0 !== b.indexOf("background") ||
                                  (j[b] = "inherit"),
                              (g &&
                                  "set" in g &&
                                  void 0 === (c = g.set(a, c, d))) ||
                                  (i ? j.setProperty(b, c) : (j[b] = c))),
                          void 0)
                );
            }
        },
        css: function(a, b, c, d) {
            var e,
                f,
                g,
                h = r.camelCase(b),
                i = Ra.test(b);
            return (
                i || (b = Xa(h)),
                (g = r.cssHooks[b] || r.cssHooks[h]),
                g && "get" in g && (e = g.get(a, !0, c)),
                void 0 === e && (e = Oa(a, b, d)),
                "normal" === e && b in Ta && (e = Ta[b]),
                "" === c || c
                    ? ((f = parseFloat(e)),
                      c === !0 || isFinite(f) ? f || 0 : e)
                    : e
            );
        }
    }),
        r.each(["height", "width"], function(a, b) {
            r.cssHooks[b] = {
                get: function(a, c, d) {
                    if (c)
                        return !Qa.test(r.css(a, "display")) ||
                            (a.getClientRects().length &&
                                a.getBoundingClientRect().width)
                            ? $a(a, b, d)
                            : ea(a, Sa, function() {
                                  return $a(a, b, d);
                              });
                },
                set: function(a, c, d) {
                    var e,
                        f = d && Na(a),
                        g =
                            d &&
                            Za(
                                a,
                                b,
                                d,
                                "border-box" === r.css(a, "boxSizing", !1, f),
                                f
                            );
                    return (
                        g &&
                            (e = ba.exec(c)) &&
                            "px" !== (e[3] || "px") &&
                            ((a.style[b] = c), (c = r.css(a, b))),
                        Ya(a, c, g)
                    );
                }
            };
        }),
        (r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a, b) {
            if (b)
                return (
                    (parseFloat(Oa(a, "marginLeft")) ||
                        a.getBoundingClientRect().left -
                            ea(a, { marginLeft: 0 }, function() {
                                return a.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        r.each({ margin: "", padding: "", border: "Width" }, function(a, b) {
            (r.cssHooks[a + b] = {
                expand: function(c) {
                    for (
                        var d = 0,
                            e = {},
                            f = "string" == typeof c ? c.split(" ") : [c];
                        d < 4;
                        d++
                    )
                        e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
                    return e;
                }
            }),
                La.test(a) || (r.cssHooks[a + b].set = Ya);
        }),
        r.fn.extend({
            css: function(a, b) {
                return T(
                    this,
                    function(a, b, c) {
                        var d,
                            e,
                            f = {},
                            g = 0;
                        if (Array.isArray(b)) {
                            for (d = Na(a), e = b.length; g < e; g++)
                                f[b[g]] = r.css(a, b[g], !1, d);
                            return f;
                        }
                        return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
                    },
                    a,
                    b,
                    arguments.length > 1
                );
            }
        });
    function _a(a, b, c, d, e) {
        return new _a.prototype.init(a, b, c, d, e);
    }
    (r.Tween = _a),
        (_a.prototype = {
            constructor: _a,
            init: function(a, b, c, d, e, f) {
                (this.elem = a),
                    (this.prop = c),
                    (this.easing = e || r.easing._default),
                    (this.options = b),
                    (this.start = this.now = this.cur()),
                    (this.end = d),
                    (this.unit = f || (r.cssNumber[c] ? "" : "px"));
            },
            cur: function() {
                var a = _a.propHooks[this.prop];
                return a && a.get
                    ? a.get(this)
                    : _a.propHooks._default.get(this);
            },
            run: function(a) {
                var b,
                    c = _a.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = b = r.easing[this.easing](
                              a,
                              this.options.duration * a,
                              0,
                              1,
                              this.options.duration
                          ))
                        : (this.pos = b = a),
                    (this.now = (this.end - this.start) * b + this.start),
                    this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                    c && c.set ? c.set(this) : _a.propHooks._default.set(this),
                    this
                );
            }
        }),
        (_a.prototype.init.prototype = _a.prototype),
        (_a.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return 1 !== a.elem.nodeType ||
                        (null != a.elem[a.prop] && null == a.elem.style[a.prop])
                        ? a.elem[a.prop]
                        : ((b = r.css(a.elem, a.prop, "")),
                          b && "auto" !== b ? b : 0);
                },
                set: function(a) {
                    r.fx.step[a.prop]
                        ? r.fx.step[a.prop](a)
                        : 1 !== a.elem.nodeType ||
                          (null == a.elem.style[r.cssProps[a.prop]] &&
                              !r.cssHooks[a.prop])
                        ? (a.elem[a.prop] = a.now)
                        : r.style(a.elem, a.prop, a.now + a.unit);
                }
            }
        }),
        (_a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType &&
                    a.elem.parentNode &&
                    (a.elem[a.prop] = a.now);
            }
        }),
        (r.easing = {
            linear: function(a) {
                return a;
            },
            swing: function(a) {
                return 0.5 - Math.cos(a * Math.PI) / 2;
            },
            _default: "swing"
        }),
        (r.fx = _a.prototype.init),
        (r.fx.step = {});
    var ab,
        bb,
        cb = /^(?:toggle|show|hide)$/,
        db = /queueHooks$/;
    function eb() {
        bb &&
            (d.hidden === !1 && a.requestAnimationFrame
                ? a.requestAnimationFrame(eb)
                : a.setTimeout(eb, r.fx.interval),
            r.fx.tick());
    }
    function fb() {
        return (
            a.setTimeout(function() {
                ab = void 0;
            }),
            (ab = r.now())
        );
    }
    function gb(a, b) {
        var c,
            d = 0,
            e = { height: a };
        for (b = b ? 1 : 0; d < 4; d += 2 - b)
            (c = ca[d]), (e["margin" + c] = e["padding" + c] = a);
        return b && (e.opacity = e.width = a), e;
    }
    function hb(a, b, c) {
        for (
            var d,
                e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]),
                f = 0,
                g = e.length;
            f < g;
            f++
        )
            if ((d = e[f].call(c, b, a))) return d;
    }
    function ib(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && da(a),
            q = W.get(a, "fxshow");
        c.queue ||
            ((g = r._queueHooks(a, "fx")),
            null == g.unqueued &&
                ((g.unqueued = 0),
                (h = g.empty.fire),
                (g.empty.fire = function() {
                    g.unqueued || h();
                })),
            g.unqueued++,
            m.always(function() {
                m.always(function() {
                    g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
                });
            }));
        for (d in b)
            if (((e = b[d]), cb.test(e))) {
                if (
                    (delete b[d],
                    (f = f || "toggle" === e),
                    e === (p ? "hide" : "show"))
                ) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0;
                }
                n[d] = (q && q[d]) || r.style(a, d);
            }
        if (((i = !r.isEmptyObject(b)), i || !r.isEmptyObject(n))) {
            l &&
                1 === a.nodeType &&
                ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
                (j = q && q.display),
                null == j && (j = W.get(a, "display")),
                (k = r.css(a, "display")),
                "none" === k &&
                    (j
                        ? (k = j)
                        : (ia([a], !0),
                          (j = a.style.display || j),
                          (k = r.css(a, "display")),
                          ia([a]))),
                ("inline" === k || ("inline-block" === k && null != j)) &&
                    "none" === r.css(a, "float") &&
                    (i ||
                        (m.done(function() {
                            o.display = j;
                        }),
                        null == j &&
                            ((k = o.display), (j = "none" === k ? "" : k))),
                    (o.display = "inline-block"))),
                c.overflow &&
                    ((o.overflow = "hidden"),
                    m.always(function() {
                        (o.overflow = c.overflow[0]),
                            (o.overflowX = c.overflow[1]),
                            (o.overflowY = c.overflow[2]);
                    })),
                (i = !1);
            for (d in n)
                i ||
                    (q
                        ? "hidden" in q && (p = q.hidden)
                        : (q = W.access(a, "fxshow", { display: j })),
                    f && (q.hidden = !p),
                    p && ia([a], !0),
                    m.done(function() {
                        p || ia([a]), W.remove(a, "fxshow");
                        for (d in n) r.style(a, d, n[d]);
                    })),
                    (i = hb(p ? q[d] : 0, d, m)),
                    d in q ||
                        ((q[d] = i.start),
                        p && ((i.end = i.start), (i.start = 0)));
        }
    }
    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (
                ((d = r.camelCase(c)),
                (e = b[d]),
                (f = a[c]),
                Array.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
                c !== d && ((a[d] = f), delete a[c]),
                (g = r.cssHooks[d]),
                g && "expand" in g)
            ) {
                (f = g.expand(f)), delete a[d];
                for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
            } else b[d] = e;
    }
    function kb(a, b, c) {
        var d,
            e,
            f = 0,
            g = kb.prefilters.length,
            h = r.Deferred().always(function() {
                delete i.elem;
            }),
            i = function() {
                if (e) return !1;
                for (
                    var b = ab || fb(),
                        c = Math.max(0, j.startTime + j.duration - b),
                        d = c / j.duration || 0,
                        f = 1 - d,
                        g = 0,
                        i = j.tweens.length;
                    g < i;
                    g++
                )
                    j.tweens[g].run(f);
                return (
                    h.notifyWith(a, [j, f, c]),
                    f < 1 && i
                        ? c
                        : (i || h.notifyWith(a, [j, 1, 0]),
                          h.resolveWith(a, [j]),
                          !1)
                );
            },
            j = h.promise({
                elem: a,
                props: r.extend({}, b),
                opts: r.extend(
                    !0,
                    { specialEasing: {}, easing: r.easing._default },
                    c
                ),
                originalProperties: b,
                originalOptions: c,
                startTime: ab || fb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = r.Tween(
                        a,
                        j.opts,
                        b,
                        c,
                        j.opts.specialEasing[b] || j.opts.easing
                    );
                    return j.tweens.push(d), d;
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return (
                        b
                            ? (h.notifyWith(a, [j, 1, 0]),
                              h.resolveWith(a, [j, b]))
                            : h.rejectWith(a, [j, b]),
                        this
                    );
                }
            }),
            k = j.props;
        for (jb(k, j.opts.specialEasing); f < g; f++)
            if ((d = kb.prefilters[f].call(j, a, k, j.opts)))
                return (
                    r.isFunction(d.stop) &&
                        (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(
                            d.stop,
                            d
                        )),
                    d
                );
        return (
            r.map(k, hb, j),
            r.isFunction(j.opts.start) && j.opts.start.call(a, j),
            j
                .progress(j.opts.progress)
                .done(j.opts.done, j.opts.complete)
                .fail(j.opts.fail)
                .always(j.opts.always),
            r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
            j
        );
    }
    (r.Animation = r.extend(kb, {
        tweeners: {
            "*": [
                function(a, b) {
                    var c = this.createTween(a, b);
                    return fa(c.elem, a, ba.exec(b), c), c;
                }
            ]
        },
        tweener: function(a, b) {
            r.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(L));
            for (var c, d = 0, e = a.length; d < e; d++)
                (c = a[d]),
                    (kb.tweeners[c] = kb.tweeners[c] || []),
                    kb.tweeners[c].unshift(b);
        },
        prefilters: [ib],
        prefilter: function(a, b) {
            b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
        }
    })),
        (r.speed = function(a, b, c) {
            var d =
                a && "object" == typeof a
                    ? r.extend({}, a)
                    : {
                          complete: c || (!c && b) || (r.isFunction(a) && a),
                          duration: a,
                          easing: (c && b) || (b && !r.isFunction(b) && b)
                      };
            return (
                r.fx.off
                    ? (d.duration = 0)
                    : "number" != typeof d.duration &&
                      (d.duration in r.fx.speeds
                          ? (d.duration = r.fx.speeds[d.duration])
                          : (d.duration = r.fx.speeds._default)),
                (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
                (d.old = d.complete),
                (d.complete = function() {
                    r.isFunction(d.old) && d.old.call(this),
                        d.queue && r.dequeue(this, d.queue);
                }),
                d
            );
        }),
        r.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(da)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: b }, a, c, d);
            },
            animate: function(a, b, c, d) {
                var e = r.isEmptyObject(a),
                    f = r.speed(b, c, d),
                    g = function() {
                        var b = kb(this, r.extend({}, a), f);
                        (e || W.get(this, "finish")) && b.stop(!0);
                    };
                return (
                    (g.finish = g),
                    e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                );
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c);
                };
                return (
                    "string" != typeof a && ((c = b), (b = a), (a = void 0)),
                    b && a !== !1 && this.queue(a || "fx", []),
                    this.each(function() {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = r.timers,
                            g = W.get(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g)
                                g[e] && g[e].stop && db.test(e) && d(g[e]);
                        for (e = f.length; e--; )
                            f[e].elem !== this ||
                                (null != a && f[e].queue !== a) ||
                                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
                        (!b && c) || r.dequeue(this, a);
                    })
                );
            },
            finish: function(a) {
                return (
                    a !== !1 && (a = a || "fx"),
                    this.each(function() {
                        var b,
                            c = W.get(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = r.timers,
                            g = d ? d.length : 0;
                        for (
                            c.finish = !0,
                                r.queue(this, a, []),
                                e && e.stop && e.stop.call(this, !0),
                                b = f.length;
                            b--;

                        )
                            f[b].elem === this &&
                                f[b].queue === a &&
                                (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; b < g; b++)
                            d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish;
                    })
                );
            }
        }),
        r.each(["toggle", "show", "hide"], function(a, b) {
            var c = r.fn[b];
            r.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a
                    ? c.apply(this, arguments)
                    : this.animate(gb(b, !0), a, d, e);
            };
        }),
        r.each(
            {
                slideDown: gb("show"),
                slideUp: gb("hide"),
                slideToggle: gb("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" }
            },
            function(a, b) {
                r.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d);
                };
            }
        ),
        (r.timers = []),
        (r.fx.tick = function() {
            var a,
                b = 0,
                c = r.timers;
            for (ab = r.now(); b < c.length; b++)
                (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(), (ab = void 0);
        }),
        (r.fx.timer = function(a) {
            r.timers.push(a), r.fx.start();
        }),
        (r.fx.interval = 13),
        (r.fx.start = function() {
            bb || ((bb = !0), eb());
        }),
        (r.fx.stop = function() {
            bb = null;
        }),
        (r.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (r.fn.delay = function(b, c) {
            return (
                (b = r.fx ? r.fx.speeds[b] || b : b),
                (c = c || "fx"),
                this.queue(c, function(c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function() {
                        a.clearTimeout(e);
                    };
                })
            );
        }),
        (function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            (a.type = "checkbox"),
                (o.checkOn = "" !== a.value),
                (o.optSelected = c.selected),
                (a = d.createElement("input")),
                (a.value = "t"),
                (a.type = "radio"),
                (o.radioValue = "t" === a.value);
        })();
    var lb,
        mb = r.expr.attrHandle;
    r.fn.extend({
        attr: function(a, b) {
            return T(this, r.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                r.removeAttr(this, a);
            });
        }
    }),
        r.extend({
            attr: function(a, b, c) {
                var d,
                    e,
                    f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)
                    return "undefined" == typeof a.getAttribute
                        ? r.prop(a, b, c)
                        : ((1 === f && r.isXMLDoc(a)) ||
                              (e =
                                  r.attrHooks[b.toLowerCase()] ||
                                  (r.expr.match.bool.test(b) ? lb : void 0)),
                          void 0 !== c
                              ? null === c
                                  ? void r.removeAttr(a, b)
                                  : e &&
                                    "set" in e &&
                                    void 0 !== (d = e.set(a, c, b))
                                  ? d
                                  : (a.setAttribute(b, c + ""), c)
                              : e && "get" in e && null !== (d = e.get(a, b))
                              ? d
                              : ((d = r.find.attr(a, b)),
                                null == d ? void 0 : d));
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!o.radioValue && "radio" === b && B(a, "input")) {
                            var c = a.value;
                            return (
                                a.setAttribute("type", b), c && (a.value = c), b
                            );
                        }
                    }
                }
            },
            removeAttr: function(a, b) {
                var c,
                    d = 0,
                    e = b && b.match(L);
                if (e && 1 === a.nodeType)
                    while ((c = e[d++])) a.removeAttribute(c);
            }
        }),
        (lb = {
            set: function(a, b, c) {
                return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
            }
        }),
        r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = mb[b] || r.find.attr;
            mb[b] = function(a, b, d) {
                var e,
                    f,
                    g = b.toLowerCase();
                return (
                    d ||
                        ((f = mb[g]),
                        (mb[g] = e),
                        (e = null != c(a, b, d) ? g : null),
                        (mb[g] = f)),
                    e
                );
            };
        });
    var nb = /^(?:input|select|textarea|button)$/i,
        ob = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function(a, b) {
            return T(this, r.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[r.propFix[a] || a];
            });
        }
    }),
        r.extend({
            prop: function(a, b, c) {
                var d,
                    e,
                    f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)
                    return (
                        (1 === f && r.isXMLDoc(a)) ||
                            ((b = r.propFix[b] || b), (e = r.propHooks[b])),
                        void 0 !== c
                            ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                                ? d
                                : (a[b] = c)
                            : e && "get" in e && null !== (d = e.get(a, b))
                            ? d
                            : a[b]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = r.find.attr(a, "tabindex");
                        return b
                            ? parseInt(b, 10)
                            : nb.test(a.nodeName) ||
                              (ob.test(a.nodeName) && a.href)
                            ? 0
                            : -1;
                    }
                }
            },
            propFix: { for: "htmlFor", class: "className" }
        }),
        o.optSelected ||
            (r.propHooks.selected = {
                get: function(a) {
                    var b = a.parentNode;
                    return (
                        b && b.parentNode && b.parentNode.selectedIndex, null
                    );
                },
                set: function(a) {
                    var b = a.parentNode;
                    b &&
                        (b.selectedIndex,
                        b.parentNode && b.parentNode.selectedIndex);
                }
            }),
        r.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable"
            ],
            function() {
                r.propFix[this.toLowerCase()] = this;
            }
        );
    function pb(a) {
        var b = a.match(L) || [];
        return b.join(" ");
    }
    function qb(a) {
        return (a.getAttribute && a.getAttribute("class")) || "";
    }
    r.fn.extend({
        addClass: function(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;
            if (r.isFunction(a))
                return this.each(function(b) {
                    r(this).addClass(a.call(this, b, qb(this)));
                });
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while ((c = this[i++]))
                    if (
                        ((e = qb(c)),
                        (d = 1 === c.nodeType && " " + pb(e) + " "))
                    ) {
                        g = 0;
                        while ((f = b[g++]))
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        (h = pb(d)), e !== h && c.setAttribute("class", h);
                    }
            }
            return this;
        },
        removeClass: function(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;
            if (r.isFunction(a))
                return this.each(function(b) {
                    r(this).removeClass(a.call(this, b, qb(this)));
                });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while ((c = this[i++]))
                    if (
                        ((e = qb(c)),
                        (d = 1 === c.nodeType && " " + pb(e) + " "))
                    ) {
                        g = 0;
                        while ((f = b[g++]))
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        (h = pb(d)), e !== h && c.setAttribute("class", h);
                    }
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c
                ? b
                    ? this.addClass(a)
                    : this.removeClass(a)
                : r.isFunction(a)
                ? this.each(function(c) {
                      r(this).toggleClass(a.call(this, c, qb(this), b), b);
                  })
                : this.each(function() {
                      var b, d, e, f;
                      if ("string" === c) {
                          (d = 0), (e = r(this)), (f = a.match(L) || []);
                          while ((b = f[d++]))
                              e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                      } else (void 0 !== a && "boolean" !== c) || ((b = qb(this)), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
                  });
        },
        hasClass: function(a) {
            var b,
                c,
                d = 0;
            b = " " + a + " ";
            while ((c = this[d++]))
                if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1)
                    return !0;
            return !1;
        }
    });
    var rb = /\r/g;
    r.fn.extend({
        val: function(a) {
            var b,
                c,
                d,
                e = this[0];
            {
                if (arguments.length)
                    return (
                        (d = r.isFunction(a)),
                        this.each(function(c) {
                            var e;
                            1 === this.nodeType &&
                                ((e = d ? a.call(this, c, r(this).val()) : a),
                                null == e
                                    ? (e = "")
                                    : "number" == typeof e
                                    ? (e += "")
                                    : Array.isArray(e) &&
                                      (e = r.map(e, function(a) {
                                          return null == a ? "" : a + "";
                                      })),
                                (b =
                                    r.valHooks[this.type] ||
                                    r.valHooks[this.nodeName.toLowerCase()]),
                                (b &&
                                    "set" in b &&
                                    void 0 !== b.set(this, e, "value")) ||
                                    (this.value = e));
                        })
                    );
                if (e)
                    return (
                        (b =
                            r.valHooks[e.type] ||
                            r.valHooks[e.nodeName.toLowerCase()]),
                        b && "get" in b && void 0 !== (c = b.get(e, "value"))
                            ? c
                            : ((c = e.value),
                              "string" == typeof c
                                  ? c.replace(rb, "")
                                  : null == c
                                  ? ""
                                  : c)
                    );
            }
        }
    }),
        r.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = r.find.attr(a, "value");
                        return null != b ? b : pb(r.text(a));
                    }
                },
                select: {
                    get: function(a) {
                        var b,
                            c,
                            d,
                            e = a.options,
                            f = a.selectedIndex,
                            g = "select-one" === a.type,
                            h = g ? null : [],
                            i = g ? f + 1 : e.length;
                        for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                            if (
                                ((c = e[d]),
                                (c.selected || d === f) &&
                                    !c.disabled &&
                                    (!c.parentNode.disabled ||
                                        !B(c.parentNode, "optgroup")))
                            ) {
                                if (((b = r(c).val()), g)) return b;
                                h.push(b);
                            }
                        return h;
                    },
                    set: function(a, b) {
                        var c,
                            d,
                            e = a.options,
                            f = r.makeArray(b),
                            g = e.length;
                        while (g--)
                            (d = e[g]),
                                (d.selected =
                                    r.inArray(r.valHooks.option.get(d), f) >
                                    -1) && (c = !0);
                        return c || (a.selectedIndex = -1), f;
                    }
                }
            }
        }),
        r.each(["radio", "checkbox"], function() {
            (r.valHooks[this] = {
                set: function(a, b) {
                    if (Array.isArray(b))
                        return (a.checked = r.inArray(r(a).val(), b) > -1);
                }
            }),
                o.checkOn ||
                    (r.valHooks[this].get = function(a) {
                        return null === a.getAttribute("value")
                            ? "on"
                            : a.value;
                    });
        });
    var sb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g,
                h,
                i,
                j,
                k,
                m,
                n,
                o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (
                ((h = i = e = e || d),
                3 !== e.nodeType &&
                    8 !== e.nodeType &&
                    !sb.test(p + r.event.triggered) &&
                    (p.indexOf(".") > -1 &&
                        ((q = p.split(".")), (p = q.shift()), q.sort()),
                    (k = p.indexOf(":") < 0 && "on" + p),
                    (b = b[r.expando]
                        ? b
                        : new r.Event(p, "object" == typeof b && b)),
                    (b.isTrigger = f ? 2 : 3),
                    (b.namespace = q.join(".")),
                    (b.rnamespace = b.namespace
                        ? new RegExp(
                              "(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          )
                        : null),
                    (b.result = void 0),
                    b.target || (b.target = e),
                    (c = null == c ? [b] : r.makeArray(c, [b])),
                    (n = r.event.special[p] || {}),
                    f || !n.trigger || n.trigger.apply(e, c) !== !1))
            ) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (
                        j = n.delegateType || p,
                            sb.test(j + p) || (h = h.parentNode);
                        h;
                        h = h.parentNode
                    )
                        o.push(h), (i = h);
                    i === (e.ownerDocument || d) &&
                        o.push(i.defaultView || i.parentWindow || a);
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped())
                    (b.type = g > 1 ? j : n.bindType || p),
                        (m =
                            (W.get(h, "events") || {})[b.type] &&
                            W.get(h, "handle")),
                        m && m.apply(h, c),
                        (m = k && h[k]),
                        m &&
                            m.apply &&
                            U(h) &&
                            ((b.result = m.apply(h, c)),
                            b.result === !1 && b.preventDefault());
                return (
                    (b.type = p),
                    f ||
                        b.isDefaultPrevented() ||
                        (n._default && n._default.apply(o.pop(), c) !== !1) ||
                        !U(e) ||
                        (k &&
                            r.isFunction(e[p]) &&
                            !r.isWindow(e) &&
                            ((i = e[k]),
                            i && (e[k] = null),
                            (r.event.triggered = p),
                            e[p](),
                            (r.event.triggered = void 0),
                            i && (e[k] = i))),
                    b.result
                );
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });
            r.event.trigger(d, null, b);
        }
    }),
        r.fn.extend({
            trigger: function(a, b) {
                return this.each(function() {
                    r.event.trigger(a, b, this);
                });
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                if (c) return r.event.trigger(a, b, c, !0);
            }
        }),
        r.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
            ),
            function(a, b) {
                r.fn[b] = function(a, c) {
                    return arguments.length > 0
                        ? this.on(b, null, a, c)
                        : this.trigger(b);
                };
            }
        ),
        r.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a);
            }
        }),
        (o.focusin = "onfocusin" in a),
        o.focusin ||
            r.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
                var c = function(a) {
                    r.event.simulate(b, a.target, r.event.fix(a));
                };
                r.event.special[b] = {
                    setup: function() {
                        var d = this.ownerDocument || this,
                            e = W.access(d, b);
                        e || d.addEventListener(a, c, !0),
                            W.access(d, b, (e || 0) + 1);
                    },
                    teardown: function() {
                        var d = this.ownerDocument || this,
                            e = W.access(d, b) - 1;
                        e
                            ? W.access(d, b, e)
                            : (d.removeEventListener(a, c, !0), W.remove(d, b));
                    }
                };
            });
    var tb = a.location,
        ub = r.now(),
        vb = /\?/;
    r.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (d) {
            c = void 0;
        }
        return (
            (c && !c.getElementsByTagName("parsererror").length) ||
                r.error("Invalid XML: " + b),
            c
        );
    };
    var wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;
    function Ab(a, b, c, d) {
        var e;
        if (Array.isArray(b))
            r.each(b, function(b, e) {
                c || wb.test(a)
                    ? d(a, e)
                    : Ab(
                          a +
                              "[" +
                              ("object" == typeof e && null != e ? b : "") +
                              "]",
                          e,
                          c,
                          d
                      );
            });
        else if (c || "object" !== r.type(b)) d(a, b);
        else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
    }
    (r.param = function(a, b) {
        var c,
            d = [],
            e = function(a, b) {
                var c = r.isFunction(b) ? b() : b;
                d[d.length] =
                    encodeURIComponent(a) +
                    "=" +
                    encodeURIComponent(null == c ? "" : c);
            };
        if (Array.isArray(a) || (a.jquery && !r.isPlainObject(a)))
            r.each(a, function() {
                e(this.name, this.value);
            });
        else for (c in a) Ab(c, a[c], b, e);
        return d.join("&");
    }),
        r.fn.extend({
            serialize: function() {
                return r.param(this.serializeArray());
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = r.prop(this, "elements");
                    return a ? r.makeArray(a) : this;
                })
                    .filter(function() {
                        var a = this.type;
                        return (
                            this.name &&
                            !r(this).is(":disabled") &&
                            zb.test(this.nodeName) &&
                            !yb.test(a) &&
                            (this.checked || !ja.test(a))
                        );
                    })
                    .map(function(a, b) {
                        var c = r(this).val();
                        return null == c
                            ? null
                            : Array.isArray(c)
                            ? r.map(c, function(a) {
                                  return {
                                      name: b.name,
                                      value: a.replace(xb, "\r\n")
                                  };
                              })
                            : { name: b.name, value: c.replace(xb, "\r\n") };
                    })
                    .get();
            }
        });
    var Bb = /%20/g,
        Cb = /#.*$/,
        Db = /([?&])_=[^&]*/,
        Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Gb = /^(?:GET|HEAD)$/,
        Hb = /^\/\//,
        Ib = {},
        Jb = {},
        Kb = "*/".concat("*"),
        Lb = d.createElement("a");
    Lb.href = tb.href;
    function Mb(a) {
        return function(b, c) {
            "string" != typeof b && ((c = b), (b = "*"));
            var d,
                e = 0,
                f = b.toLowerCase().match(L) || [];
            if (r.isFunction(c))
                while ((d = f[e++]))
                    "+" === d[0]
                        ? ((d = d.slice(1) || "*"),
                          (a[d] = a[d] || []).unshift(c))
                        : (a[d] = a[d] || []).push(c);
        };
    }
    function Nb(a, b, c, d) {
        var e = {},
            f = a === Jb;
        function g(h) {
            var i;
            return (
                (e[h] = !0),
                r.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || f || e[j]
                        ? f
                            ? !(i = j)
                            : void 0
                        : (b.dataTypes.unshift(j), g(j), !1);
                }),
                i
            );
        }
        return g(b.dataTypes[0]) || (!e["*"] && g("*"));
    }
    function Ob(a, b) {
        var c,
            d,
            e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a;
    }
    function Pb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
                void 0 === d &&
                    (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break;
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        if (f) return f !== i[0] && i.unshift(f), c[f];
    }
    function Qb(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (
                (a.responseFields[f] && (c[a.responseFields[f]] = b),
                !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                (i = f),
                (f = k.shift()))
            )
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (((g = j[i + " " + f] || j["* " + f]), !g))
                        for (e in j)
                            if (
                                ((h = e.split(" ")),
                                h[1] === f &&
                                    (g = j[i + " " + h[0]] || j["* " + h[0]]))
                            ) {
                                g === !0
                                    ? (g = j[e])
                                    : j[e] !== !0 &&
                                      ((f = h[0]), k.unshift(h[1]));
                                break;
                            }
                    if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else
                            try {
                                b = g(b);
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g
                                        ? l
                                        : "No conversion from " + i + " to " + f
                                };
                            }
                }
        return { state: "success", data: b };
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tb.href,
            type: "GET",
            isLocal: Fb.test(tb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: { url: !0, context: !0 }
        },
        ajaxSetup: function(a, b) {
            return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
        },
        ajaxPrefilter: Mb(Ib),
        ajaxTransport: Mb(Jb),
        ajax: function(b, c) {
            "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
            var e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (k) {
                            if (!h) {
                                h = {};
                                while ((b = Eb.exec(g)))
                                    h[b[1].toLowerCase()] = b[2];
                            }
                            b = h[a.toLowerCase()];
                        }
                        return null == b ? null : b;
                    },
                    getAllResponseHeaders: function() {
                        return k ? g : null;
                    },
                    setRequestHeader: function(a, b) {
                        return (
                            null == k &&
                                ((a = w[a.toLowerCase()] =
                                    w[a.toLowerCase()] || a),
                                (v[a] = b)),
                            this
                        );
                    },
                    overrideMimeType: function(a) {
                        return null == k && (o.mimeType = a), this;
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else for (b in a) u[b] = [u[b], a[b]];
                        return this;
                    },
                    abort: function(a) {
                        var b = a || x;
                        return e && e.abort(b), A(0, b), this;
                    }
                };
            if (
                (s.promise(y),
                (o.url = ((b || o.url || tb.href) + "").replace(
                    Hb,
                    tb.protocol + "//"
                )),
                (o.type = c.method || c.type || o.method || o.type),
                (o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [
                    ""
                ]),
                null == o.crossDomain)
            ) {
                j = d.createElement("a");
                try {
                    (j.href = o.url),
                        (j.href = j.href),
                        (o.crossDomain =
                            Lb.protocol + "//" + Lb.host !=
                            j.protocol + "//" + j.host);
                } catch (z) {
                    o.crossDomain = !0;
                }
            }
            if (
                (o.data &&
                    o.processData &&
                    "string" != typeof o.data &&
                    (o.data = r.param(o.data, o.traditional)),
                Nb(Ib, o, c, y),
                k)
            )
                return y;
            (l = r.event && o.global),
                l && 0 === r.active++ && r.event.trigger("ajaxStart"),
                (o.type = o.type.toUpperCase()),
                (o.hasContent = !Gb.test(o.type)),
                (f = o.url.replace(Cb, "")),
                o.hasContent
                    ? o.data &&
                      o.processData &&
                      0 ===
                          (o.contentType || "").indexOf(
                              "application/x-www-form-urlencoded"
                          ) &&
                      (o.data = o.data.replace(Bb, "+"))
                    : ((n = o.url.slice(f.length)),
                      o.data &&
                          ((f += (vb.test(f) ? "&" : "?") + o.data),
                          delete o.data),
                      o.cache === !1 &&
                          ((f = f.replace(Db, "$1")),
                          (n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n)),
                      (o.url = f + n)),
                o.ifModified &&
                    (r.lastModified[f] &&
                        y.setRequestHeader(
                            "If-Modified-Since",
                            r.lastModified[f]
                        ),
                    r.etag[f] &&
                        y.setRequestHeader("If-None-Match", r.etag[f])),
                ((o.data && o.hasContent && o.contentType !== !1) ||
                    c.contentType) &&
                    y.setRequestHeader("Content-Type", o.contentType),
                y.setRequestHeader(
                    "Accept",
                    o.dataTypes[0] && o.accepts[o.dataTypes[0]]
                        ? o.accepts[o.dataTypes[0]] +
                              ("*" !== o.dataTypes[0]
                                  ? ", " + Kb + "; q=0.01"
                                  : "")
                        : o.accepts["*"]
                );
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k))
                return y.abort();
            if (
                ((x = "abort"),
                t.add(o.complete),
                y.done(o.success),
                y.fail(o.error),
                (e = Nb(Jb, o, c, y)))
            ) {
                if (((y.readyState = 1), l && q.trigger("ajaxSend", [y, o]), k))
                    return y;
                o.async &&
                    o.timeout > 0 &&
                    (i = a.setTimeout(function() {
                        y.abort("timeout");
                    }, o.timeout));
                try {
                    (k = !1), e.send(v, A);
                } catch (z) {
                    if (k) throw z;
                    A(-1, z);
                }
            } else A(-1, "No Transport");
            function A(b, c, d, h) {
                var j,
                    m,
                    n,
                    v,
                    w,
                    x = c;
                k ||
                    ((k = !0),
                    i && a.clearTimeout(i),
                    (e = void 0),
                    (g = h || ""),
                    (y.readyState = b > 0 ? 4 : 0),
                    (j = (b >= 200 && b < 300) || 304 === b),
                    d && (v = Pb(o, y, d)),
                    (v = Qb(o, v, y, j)),
                    j
                        ? (o.ifModified &&
                              ((w = y.getResponseHeader("Last-Modified")),
                              w && (r.lastModified[f] = w),
                              (w = y.getResponseHeader("etag")),
                              w && (r.etag[f] = w)),
                          204 === b || "HEAD" === o.type
                              ? (x = "nocontent")
                              : 304 === b
                              ? (x = "notmodified")
                              : ((x = v.state),
                                (m = v.data),
                                (n = v.error),
                                (j = !n)))
                        : ((n = x),
                          (!b && x) || ((x = "error"), b < 0 && (b = 0))),
                    (y.status = b),
                    (y.statusText = (c || x) + ""),
                    j
                        ? s.resolveWith(p, [m, x, y])
                        : s.rejectWith(p, [y, x, n]),
                    y.statusCode(u),
                    (u = void 0),
                    l &&
                        q.trigger(j ? "ajaxSuccess" : "ajaxError", [
                            y,
                            o,
                            j ? m : n
                        ]),
                    t.fireWith(p, [y, x]),
                    l &&
                        (q.trigger("ajaxComplete", [y, o]),
                        --r.active || r.event.trigger("ajaxStop")));
            }
            return y;
        },
        getJSON: function(a, b, c) {
            return r.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return r.get(a, void 0, b, "script");
        }
    }),
        r.each(["get", "post"], function(a, b) {
            r[b] = function(a, c, d, e) {
                return (
                    r.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
                    r.ajax(
                        r.extend(
                            {
                                url: a,
                                type: b,
                                dataType: e,
                                data: c,
                                success: d
                            },
                            r.isPlainObject(a) && a
                        )
                    )
                );
            };
        }),
        (r._evalUrl = function(a) {
            return r.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            });
        }),
        r.fn.extend({
            wrapAll: function(a) {
                var b;
                return (
                    this[0] &&
                        (r.isFunction(a) && (a = a.call(this[0])),
                        (b = r(a, this[0].ownerDocument)
                            .eq(0)
                            .clone(!0)),
                        this[0].parentNode && b.insertBefore(this[0]),
                        b
                            .map(function() {
                                var a = this;
                                while (a.firstElementChild)
                                    a = a.firstElementChild;
                                return a;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function(a) {
                return r.isFunction(a)
                    ? this.each(function(b) {
                          r(this).wrapInner(a.call(this, b));
                      })
                    : this.each(function() {
                          var b = r(this),
                              c = b.contents();
                          c.length ? c.wrapAll(a) : b.append(a);
                      });
            },
            wrap: function(a) {
                var b = r.isFunction(a);
                return this.each(function(c) {
                    r(this).wrapAll(b ? a.call(this, c) : a);
                });
            },
            unwrap: function(a) {
                return (
                    this.parent(a)
                        .not("body")
                        .each(function() {
                            r(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            }
        }),
        (r.expr.pseudos.hidden = function(a) {
            return !r.expr.pseudos.visible(a);
        }),
        (r.expr.pseudos.visible = function(a) {
            return !!(
                a.offsetWidth ||
                a.offsetHeight ||
                a.getClientRects().length
            );
        }),
        (r.ajaxSettings.xhr = function() {
            try {
                return new a.XMLHttpRequest();
            } catch (b) {}
        });
    var Rb = { 0: 200, 1223: 204 },
        Sb = r.ajaxSettings.xhr();
    (o.cors = !!Sb && "withCredentials" in Sb),
        (o.ajax = Sb = !!Sb),
        r.ajaxTransport(function(b) {
            var c, d;
            if (o.cors || (Sb && !b.crossDomain))
                return {
                    send: function(e, f) {
                        var g,
                            h = b.xhr();
                        if (
                            (h.open(
                                b.type,
                                b.url,
                                b.async,
                                b.username,
                                b.password
                            ),
                            b.xhrFields)
                        )
                            for (g in b.xhrFields) h[g] = b.xhrFields[g];
                        b.mimeType &&
                            h.overrideMimeType &&
                            h.overrideMimeType(b.mimeType),
                            b.crossDomain ||
                                e["X-Requested-With"] ||
                                (e["X-Requested-With"] = "XMLHttpRequest");
                        for (g in e) h.setRequestHeader(g, e[g]);
                        (c = function(a) {
                            return function() {
                                c &&
                                    ((c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null),
                                    "abort" === a
                                        ? h.abort()
                                        : "error" === a
                                        ? "number" != typeof h.status
                                            ? f(0, "error")
                                            : f(h.status, h.statusText)
                                        : f(
                                              Rb[h.status] || h.status,
                                              h.statusText,
                                              "text" !==
                                                  (h.responseType || "text") ||
                                                  "string" !=
                                                      typeof h.responseText
                                                  ? { binary: h.response }
                                                  : { text: h.responseText },
                                              h.getAllResponseHeaders()
                                          ));
                            };
                        }),
                            (h.onload = c()),
                            (d = h.onerror = c("error")),
                            void 0 !== h.onabort
                                ? (h.onabort = d)
                                : (h.onreadystatechange = function() {
                                      4 === h.readyState &&
                                          a.setTimeout(function() {
                                              c && d();
                                          });
                                  }),
                            (c = c("abort"));
                        try {
                            h.send((b.hasContent && b.data) || null);
                        } catch (i) {
                            if (c) throw i;
                        }
                    },
                    abort: function() {
                        c && c();
                    }
                };
        }),
        r.ajaxPrefilter(function(a) {
            a.crossDomain && (a.contents.script = !1);
        }),
        r.ajaxSetup({
            accepts: {
                script:
                    "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function(a) {
                    return r.globalEval(a), a;
                }
            }
        }),
        r.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1),
                a.crossDomain && (a.type = "GET");
        }),
        r.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function(e, f) {
                        (b = r("<script>")
                            .prop({ charset: a.scriptCharset, src: a.url })
                            .on(
                                "load error",
                                (c = function(a) {
                                    b.remove(),
                                        (c = null),
                                        a &&
                                            f(
                                                "error" === a.type ? 404 : 200,
                                                a.type
                                            );
                                })
                            )),
                            d.head.appendChild(b[0]);
                    },
                    abort: function() {
                        c && c();
                    }
                };
            }
        });
    var Tb = [],
        Ub = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Tb.pop() || r.expando + "_" + ub++;
            return (this[a] = !0), a;
        }
    }),
        r.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e,
                f,
                g,
                h =
                    b.jsonp !== !1 &&
                    (Ub.test(b.url)
                        ? "url"
                        : "string" == typeof b.data &&
                          0 ===
                              (b.contentType || "").indexOf(
                                  "application/x-www-form-urlencoded"
                              ) &&
                          Ub.test(b.data) &&
                          "data");
            if (h || "jsonp" === b.dataTypes[0])
                return (
                    (e = b.jsonpCallback = r.isFunction(b.jsonpCallback)
                        ? b.jsonpCallback()
                        : b.jsonpCallback),
                    h
                        ? (b[h] = b[h].replace(Ub, "$1" + e))
                        : b.jsonp !== !1 &&
                          (b.url +=
                              (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                    (b.converters["script json"] = function() {
                        return g || r.error(e + " was not called"), g[0];
                    }),
                    (b.dataTypes[0] = "json"),
                    (f = a[e]),
                    (a[e] = function() {
                        g = arguments;
                    }),
                    d.always(function() {
                        void 0 === f ? r(a).removeProp(e) : (a[e] = f),
                            b[e] &&
                                ((b.jsonpCallback = c.jsonpCallback),
                                Tb.push(e)),
                            g && r.isFunction(f) && f(g[0]),
                            (g = f = void 0);
                    }),
                    "script"
                );
        }),
        (o.createHTMLDocument = (function() {
            var a = d.implementation.createHTMLDocument("").body;
            return (
                (a.innerHTML = "<form></form><form></form>"),
                2 === a.childNodes.length
            );
        })()),
        (r.parseHTML = function(a, b, c) {
            if ("string" != typeof a) return [];
            "boolean" == typeof b && ((c = b), (b = !1));
            var e, f, g;
            return (
                b ||
                    (o.createHTMLDocument
                        ? ((b = d.implementation.createHTMLDocument("")),
                          (e = b.createElement("base")),
                          (e.href = d.location.href),
                          b.head.appendChild(e))
                        : (b = d)),
                (f = C.exec(a)),
                (g = !c && []),
                f
                    ? [b.createElement(f[1])]
                    : ((f = qa([a], b, g)),
                      g && g.length && r(g).remove(),
                      r.merge([], f.childNodes))
            );
        }),
        (r.fn.load = function(a, b, c) {
            var d,
                e,
                f,
                g = this,
                h = a.indexOf(" ");
            return (
                h > -1 && ((d = pb(a.slice(h))), (a = a.slice(0, h))),
                r.isFunction(b)
                    ? ((c = b), (b = void 0))
                    : b && "object" == typeof b && (e = "POST"),
                g.length > 0 &&
                    r
                        .ajax({
                            url: a,
                            type: e || "GET",
                            dataType: "html",
                            data: b
                        })
                        .done(function(a) {
                            (f = arguments),
                                g.html(
                                    d
                                        ? r("<div>")
                                              .append(r.parseHTML(a))
                                              .find(d)
                                        : a
                                );
                        })
                        .always(
                            c &&
                                function(a, b) {
                                    g.each(function() {
                                        c.apply(
                                            this,
                                            f || [a.responseText, b, a]
                                        );
                                    });
                                }
                        ),
                this
            );
        }),
        r.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend"
            ],
            function(a, b) {
                r.fn[b] = function(a) {
                    return this.on(b, a);
                };
            }
        ),
        (r.expr.pseudos.animated = function(a) {
            return r.grep(r.timers, function(b) {
                return a === b.elem;
            }).length;
        }),
        (r.offset = {
            setOffset: function(a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k = r.css(a, "position"),
                    l = r(a),
                    m = {};
                "static" === k && (a.style.position = "relative"),
                    (h = l.offset()),
                    (f = r.css(a, "top")),
                    (i = r.css(a, "left")),
                    (j =
                        ("absolute" === k || "fixed" === k) &&
                        (f + i).indexOf("auto") > -1),
                    j
                        ? ((d = l.position()), (g = d.top), (e = d.left))
                        : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
                    r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))),
                    null != b.top && (m.top = b.top - h.top + g),
                    null != b.left && (m.left = b.left - h.left + e),
                    "using" in b ? b.using.call(a, m) : l.css(m);
            }
        }),
        r.fn.extend({
            offset: function(a) {
                if (arguments.length)
                    return void 0 === a
                        ? this
                        : this.each(function(b) {
                              r.offset.setOffset(this, a, b);
                          });
                var b,
                    c,
                    d,
                    e,
                    f = this[0];
                if (f)
                    return f.getClientRects().length
                        ? ((d = f.getBoundingClientRect()),
                          (b = f.ownerDocument),
                          (c = b.documentElement),
                          (e = b.defaultView),
                          {
                              top: d.top + e.pageYOffset - c.clientTop,
                              left: d.left + e.pageXOffset - c.clientLeft
                          })
                        : { top: 0, left: 0 };
            },
            position: function() {
                if (this[0]) {
                    var a,
                        b,
                        c = this[0],
                        d = { top: 0, left: 0 };
                    return (
                        "fixed" === r.css(c, "position")
                            ? (b = c.getBoundingClientRect())
                            : ((a = this.offsetParent()),
                              (b = this.offset()),
                              B(a[0], "html") || (d = a.offset()),
                              (d = {
                                  top:
                                      d.top + r.css(a[0], "borderTopWidth", !0),
                                  left:
                                      d.left +
                                      r.css(a[0], "borderLeftWidth", !0)
                              })),
                        {
                            top: b.top - d.top - r.css(c, "marginTop", !0),
                            left: b.left - d.left - r.css(c, "marginLeft", !0)
                        }
                    );
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var a = this.offsetParent;
                    while (a && "static" === r.css(a, "position"))
                        a = a.offsetParent;
                    return a || ra;
                });
            }
        }),
        r.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function(a, b) {
                var c = "pageYOffset" === b;
                r.fn[a] = function(d) {
                    return T(
                        this,
                        function(a, d, e) {
                            var f;
                            return (
                                r.isWindow(a)
                                    ? (f = a)
                                    : 9 === a.nodeType && (f = a.defaultView),
                                void 0 === e
                                    ? f
                                        ? f[b]
                                        : a[d]
                                    : void (f
                                          ? f.scrollTo(
                                                c ? f.pageXOffset : e,
                                                c ? e : f.pageYOffset
                                            )
                                          : (a[d] = e))
                            );
                        },
                        a,
                        d,
                        arguments.length
                    );
                };
            }
        ),
        r.each(["top", "left"], function(a, b) {
            r.cssHooks[b] = Pa(o.pixelPosition, function(a, c) {
                if (c)
                    return (
                        (c = Oa(a, b)),
                        Ma.test(c) ? r(a).position()[b] + "px" : c
                    );
            });
        }),
        r.each({ Height: "height", Width: "width" }, function(a, b) {
            r.each(
                { padding: "inner" + a, content: b, "": "outer" + a },
                function(c, d) {
                    r.fn[d] = function(e, f) {
                        var g =
                                arguments.length &&
                                (c || "boolean" != typeof e),
                            h =
                                c ||
                                (e === !0 || f === !0 ? "margin" : "border");
                        return T(
                            this,
                            function(b, c, e) {
                                var f;
                                return r.isWindow(b)
                                    ? 0 === d.indexOf("outer")
                                        ? b["inner" + a]
                                        : b.document.documentElement[
                                              "client" + a
                                          ]
                                    : 9 === b.nodeType
                                    ? ((f = b.documentElement),
                                      Math.max(
                                          b.body["scroll" + a],
                                          f["scroll" + a],
                                          b.body["offset" + a],
                                          f["offset" + a],
                                          f["client" + a]
                                      ))
                                    : void 0 === e
                                    ? r.css(b, c, h)
                                    : r.style(b, c, e, h);
                            },
                            b,
                            g ? e : void 0,
                            g
                        );
                    };
                }
            );
        }),
        r.fn.extend({
            bind: function(a, b, c) {
                return this.on(a, null, b, c);
            },
            unbind: function(a, b) {
                return this.off(a, null, b);
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d);
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length
                    ? this.off(a, "**")
                    : this.off(b, a || "**", c);
            }
        }),
        (r.holdReady = function(a) {
            a ? r.readyWait++ : r.ready(!0);
        }),
        (r.isArray = Array.isArray),
        (r.parseJSON = JSON.parse),
        (r.nodeName = B),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function() {
                return r;
            });
    var Vb = a.jQuery,
        Wb = a.$;
    return (
        (r.noConflict = function(b) {
            return (
                a.$ === r && (a.$ = Wb),
                b && a.jQuery === r && (a.jQuery = Vb),
                r
            );
        }),
        b || (a.jQuery = a.$ = r),
        r
    );
});

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */ (function(
    e,
    t
) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define(t)
        : (e.Popper = t());
})(this, function() {
    "use strict";
    function e(e) {
        return e && "[object Function]" === {}.toString.call(e);
    }
    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = getComputedStyle(e, null);
        return t ? o[t] : o;
    }
    function o(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host;
    }
    function n(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body;
        }
        var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY;
        return /(auto|scroll)/.test(r + s + p) ? e : n(o(e));
    }
    function r(e) {
        var o = e && e.offsetParent,
            i = o && o.nodeName;
        return i && "BODY" !== i && "HTML" !== i
            ? -1 !== ["TD", "TABLE"].indexOf(o.nodeName) &&
              "static" === t(o, "position")
                ? r(o)
                : o
            : e
            ? e.ownerDocument.documentElement
            : document.documentElement;
    }
    function p(e) {
        var t = e.nodeName;
        return "BODY" !== t && ("HTML" === t || r(e.firstElementChild) === e);
    }
    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode);
    }
    function d(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType)
            return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = o ? e : t,
            n = o ? t : e,
            a = document.createRange();
        a.setStart(i, 0), a.setEnd(n, 0);
        var l = a.commonAncestorContainer;
        if ((e !== l && t !== l) || i.contains(n)) return p(l) ? l : r(l);
        var f = s(e);
        return f.host ? d(f.host, t) : d(e, s(t).host);
    }
    function a(e) {
        var t =
                1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : "top",
            o = "top" === t ? "scrollTop" : "scrollLeft",
            i = e.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var n = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || n;
            return r[o];
        }
        return e[o];
    }
    function l(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = a(t, "top"),
            n = a(t, "left"),
            r = o ? -1 : 1;
        return (
            (e.top += i * r),
            (e.bottom += i * r),
            (e.left += n * r),
            (e.right += n * r),
            e
        );
    }
    function f(e, t) {
        var o = "x" === t ? "Left" : "Top",
            i = "Left" == o ? "Right" : "Bottom";
        return (
            parseFloat(e["border" + o + "Width"], 10) +
            parseFloat(e["border" + i + "Width"], 10)
        );
    }
    function m(e, t, o, i) {
        return J(
            t["offset" + e],
            t["scroll" + e],
            o["client" + e],
            o["offset" + e],
            o["scroll" + e],
            ie()
                ? o["offset" + e] +
                      i["margin" + ("Height" === e ? "Top" : "Left")] +
                      i["margin" + ("Height" === e ? "Bottom" : "Right")]
                : 0
        );
    }
    function h() {
        var e = document.body,
            t = document.documentElement,
            o = ie() && getComputedStyle(t);
        return { height: m("Height", e, t, o), width: m("Width", e, t, o) };
    }
    function c(e) {
        return se({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function g(e) {
        var o = {};
        if (ie())
            try {
                o = e.getBoundingClientRect();
                var i = a(e, "top"),
                    n = a(e, "left");
                (o.top += i), (o.left += n), (o.bottom += i), (o.right += n);
            } catch (e) {}
        else o = e.getBoundingClientRect();
        var r = {
                left: o.left,
                top: o.top,
                width: o.right - o.left,
                height: o.bottom - o.top
            },
            p = "HTML" === e.nodeName ? h() : {},
            s = p.width || e.clientWidth || r.right - r.left,
            d = p.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - s,
            m = e.offsetHeight - d;
        if (l || m) {
            var g = t(e);
            (l -= f(g, "x")), (m -= f(g, "y")), (r.width -= l), (r.height -= m);
        }
        return c(r);
    }
    function u(e, o) {
        var i = ie(),
            r = "HTML" === o.nodeName,
            p = g(e),
            s = g(o),
            d = n(e),
            a = t(o),
            f = parseFloat(a.borderTopWidth, 10),
            m = parseFloat(a.borderLeftWidth, 10),
            h = c({
                top: p.top - s.top - f,
                left: p.left - s.left - m,
                width: p.width,
                height: p.height
            });
        if (((h.marginTop = 0), (h.marginLeft = 0), !i && r)) {
            var u = parseFloat(a.marginTop, 10),
                b = parseFloat(a.marginLeft, 10);
            (h.top -= f - u),
                (h.bottom -= f - u),
                (h.left -= m - b),
                (h.right -= m - b),
                (h.marginTop = u),
                (h.marginLeft = b);
        }
        return (
            (i ? o.contains(d) : o === d && "BODY" !== d.nodeName) &&
                (h = l(h, o)),
            h
        );
    }
    function b(e) {
        var t = e.ownerDocument.documentElement,
            o = u(e, t),
            i = J(t.clientWidth, window.innerWidth || 0),
            n = J(t.clientHeight, window.innerHeight || 0),
            r = a(t),
            p = a(t, "left"),
            s = {
                top: r - o.top + o.marginTop,
                left: p - o.left + o.marginLeft,
                width: i,
                height: n
            };
        return c(s);
    }
    function w(e) {
        var i = e.nodeName;
        return "BODY" === i || "HTML" === i
            ? !1
            : "fixed" === t(e, "position") || w(o(e));
    }
    function y(e, t, i, r) {
        var p = { top: 0, left: 0 },
            s = d(e, t);
        if ("viewport" === r) p = b(s);
        else {
            var a;
            "scrollParent" === r
                ? ((a = n(o(t))),
                  "BODY" === a.nodeName &&
                      (a = e.ownerDocument.documentElement))
                : "window" === r
                ? (a = e.ownerDocument.documentElement)
                : (a = r);
            var l = u(a, s);
            if ("HTML" === a.nodeName && !w(s)) {
                var f = h(),
                    m = f.height,
                    c = f.width;
                (p.top += l.top - l.marginTop),
                    (p.bottom = m + l.top),
                    (p.left += l.left - l.marginLeft),
                    (p.right = c + l.left);
            } else p = l;
        }
        return (p.left += i), (p.top += i), (p.right -= i), (p.bottom -= i), p;
    }
    function E(e) {
        var t = e.width,
            o = e.height;
        return t * o;
    }
    function v(e, t, o, i, n) {
        var r =
            5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var p = y(o, i, r, n),
            s = {
                top: { width: p.width, height: t.top - p.top },
                right: { width: p.right - t.right, height: p.height },
                bottom: { width: p.width, height: p.bottom - t.bottom },
                left: { width: t.left - p.left, height: p.height }
            },
            d = Object.keys(s)
                .map(function(e) {
                    return se({ key: e }, s[e], { area: E(s[e]) });
                })
                .sort(function(e, t) {
                    return t.area - e.area;
                }),
            a = d.filter(function(e) {
                var t = e.width,
                    i = e.height;
                return t >= o.clientWidth && i >= o.clientHeight;
            }),
            l = 0 < a.length ? a[0].key : d[0].key,
            f = e.split("-")[1];
        return l + (f ? "-" + f : "");
    }
    function O(e, t, o) {
        var i = d(t, o);
        return u(o, i);
    }
    function L(e) {
        var t = getComputedStyle(e),
            o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
            n = { width: e.offsetWidth + i, height: e.offsetHeight + o };
        return n;
    }
    function x(e) {
        var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e];
        });
    }
    function S(e, t, o) {
        o = o.split("-")[0];
        var i = L(e),
            n = { width: i.width, height: i.height },
            r = -1 !== ["right", "left"].indexOf(o),
            p = r ? "top" : "left",
            s = r ? "left" : "top",
            d = r ? "height" : "width",
            a = r ? "width" : "height";
        return (
            (n[p] = t[p] + t[d] / 2 - i[d] / 2),
            (n[s] = o === s ? t[s] - i[a] : t[x(s)]),
            n
        );
    }
    function T(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function D(e, t, o) {
        if (Array.prototype.findIndex)
            return e.findIndex(function(e) {
                return e[t] === o;
            });
        var i = T(e, function(e) {
            return e[t] === o;
        });
        return e.indexOf(i);
    }
    function C(t, o, i) {
        var n = void 0 === i ? t : t.slice(0, D(t, "name", i));
        return (
            n.forEach(function(t) {
                t["function"] &&
                    console.warn(
                        "`modifier.function` is deprecated, use `modifier.fn`!"
                    );
                var i = t["function"] || t.fn;
                t.enabled &&
                    e(i) &&
                    ((o.offsets.popper = c(o.offsets.popper)),
                    (o.offsets.reference = c(o.offsets.reference)),
                    (o = i(o, t)));
            }),
            o
        );
    }
    function N() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            (e.offsets.reference = O(this.state, this.popper, this.reference)),
                (e.placement = v(
                    this.options.placement,
                    e.offsets.reference,
                    this.popper,
                    this.reference,
                    this.options.modifiers.flip.boundariesElement,
                    this.options.modifiers.flip.padding
                )),
                (e.originalPlacement = e.placement),
                (e.offsets.popper = S(
                    this.popper,
                    e.offsets.reference,
                    e.placement
                )),
                (e.offsets.popper.position = "absolute"),
                (e = C(this.modifiers, e)),
                this.state.isCreated
                    ? this.options.onUpdate(e)
                    : ((this.state.isCreated = !0), this.options.onCreate(e));
        }
    }
    function k(e, t) {
        return e.some(function(e) {
            var o = e.name,
                i = e.enabled;
            return i && o === t;
        });
    }
    function W(e) {
        for (
            var t = [!1, "ms", "Webkit", "Moz", "O"],
                o = e.charAt(0).toUpperCase() + e.slice(1),
                n = 0;
            n < t.length - 1;
            n++
        ) {
            var i = t[n],
                r = i ? "" + i + o : e;
            if ("undefined" != typeof document.body.style[r]) return r;
        }
        return null;
    }
    function P() {
        return (
            (this.state.isDestroyed = !0),
            k(this.modifiers, "applyStyle") &&
                (this.popper.removeAttribute("x-placement"),
                (this.popper.style.left = ""),
                (this.popper.style.position = ""),
                (this.popper.style.top = ""),
                (this.popper.style[W("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy &&
                this.popper.parentNode.removeChild(this.popper),
            this
        );
    }
    function B(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
    }
    function H(e, t, o, i) {
        var r = "BODY" === e.nodeName,
            p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, { passive: !0 }),
            r || H(n(p.parentNode), t, o, i),
            i.push(p);
    }
    function A(e, t, o, i) {
        (o.updateBound = i),
            B(e).addEventListener("resize", o.updateBound, { passive: !0 });
        var r = n(e);
        return (
            H(r, "scroll", o.updateBound, o.scrollParents),
            (o.scrollElement = r),
            (o.eventsEnabled = !0),
            o
        );
    }
    function I() {
        this.state.eventsEnabled ||
            (this.state = A(
                this.reference,
                this.options,
                this.state,
                this.scheduleUpdate
            ));
    }
    function M(e, t) {
        return (
            B(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(function(e) {
                e.removeEventListener("scroll", t.updateBound);
            }),
            (t.updateBound = null),
            (t.scrollParents = []),
            (t.scrollElement = null),
            (t.eventsEnabled = !1),
            t
        );
    }
    function R() {
        this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state = M(this.reference, this.state)));
    }
    function U(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function Y(e, t) {
        Object.keys(t).forEach(function(o) {
            var i = "";
            -1 !==
                ["width", "height", "top", "right", "bottom", "left"].indexOf(
                    o
                ) &&
                U(t[o]) &&
                (i = "px"),
                (e.style[o] = t[o] + i);
        });
    }
    function j(e, t) {
        Object.keys(t).forEach(function(o) {
            var i = t[o];
            !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
        });
    }
    function F(e, t, o) {
        var i = T(e, function(e) {
                var o = e.name;
                return o === t;
            }),
            n =
                !!i &&
                e.some(function(e) {
                    return e.name === o && e.enabled && e.order < i.order;
                });
        if (!n) {
            var r = "`" + t + "`";
            console.warn(
                "`" +
                    o +
                    "`" +
                    " modifier is required by " +
                    r +
                    " modifier in order to work, be sure to include it before " +
                    r +
                    "!"
            );
        }
        return n;
    }
    function K(e) {
        return "end" === e ? "start" : "start" === e ? "end" : e;
    }
    function q(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = ae.indexOf(e),
            i = ae.slice(o + 1).concat(ae.slice(0, o));
        return t ? i.reverse() : i;
    }
    function V(e, t, o, i) {
        var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +n[1],
            p = n[2];
        if (!r) return e;
        if (0 === p.indexOf("%")) {
            var s;
            switch (p) {
                case "%p":
                    s = o;
                    break;
                case "%":
                case "%r":
                default:
                    s = i;
            }
            var d = c(s);
            return (d[t] / 100) * r;
        }
        if ("vh" === p || "vw" === p) {
            var a;
            return (
                (a =
                    "vh" === p
                        ? J(
                              document.documentElement.clientHeight,
                              window.innerHeight || 0
                          )
                        : J(
                              document.documentElement.clientWidth,
                              window.innerWidth || 0
                          )),
                (a / 100) * r
            );
        }
        return r;
    }
    function z(e, t, o, i) {
        var n = [0, 0],
            r = -1 !== ["right", "left"].indexOf(i),
            p = e.split(/(\+|\-)/).map(function(e) {
                return e.trim();
            }),
            s = p.indexOf(
                T(p, function(e) {
                    return -1 !== e.search(/,|\s/);
                })
            );
        p[s] &&
            -1 === p[s].indexOf(",") &&
            console.warn(
                "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
            );
        var d = /\s*,\s*|\s+/,
            a =
                -1 === s
                    ? [p]
                    : [
                          p.slice(0, s).concat([p[s].split(d)[0]]),
                          [p[s].split(d)[1]].concat(p.slice(s + 1))
                      ];
        return (
            (a = a.map(function(e, i) {
                var n = (1 === i ? !r : r) ? "height" : "width",
                    p = !1;
                return e
                    .reduce(function(e, t) {
                        return "" === e[e.length - 1] &&
                            -1 !== ["+", "-"].indexOf(t)
                            ? ((e[e.length - 1] = t), (p = !0), e)
                            : p
                            ? ((e[e.length - 1] += t), (p = !1), e)
                            : e.concat(t);
                    }, [])
                    .map(function(e) {
                        return V(e, n, t, o);
                    });
            })),
            a.forEach(function(e, t) {
                e.forEach(function(o, i) {
                    U(o) && (n[t] += o * ("-" === e[i - 1] ? -1 : 1));
                });
            }),
            n
        );
    }
    function G(e, t) {
        var o,
            i = t.offset,
            n = e.placement,
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = n.split("-")[0];
        return (
            (o = U(+i) ? [+i, 0] : z(i, p, s, d)),
            "left" === d
                ? ((p.top += o[0]), (p.left -= o[1]))
                : "right" === d
                ? ((p.top += o[0]), (p.left += o[1]))
                : "top" === d
                ? ((p.left += o[0]), (p.top -= o[1]))
                : "bottom" === d && ((p.left += o[0]), (p.top += o[1])),
            (e.popper = p),
            e
        );
    }
    for (
        var _ = Math.min,
            X = Math.floor,
            J = Math.max,
            Q = "undefined" != typeof window && "undefined" != typeof document,
            Z = ["Edge", "Trident", "Firefox"],
            $ = 0,
            ee = 0;
        ee < Z.length;
        ee += 1
    )
        if (Q && 0 <= navigator.userAgent.indexOf(Z[ee])) {
            $ = 1;
            break;
        }
    var i,
        te = Q && window.Promise,
        oe = te
            ? function(e) {
                  var t = !1;
                  return function() {
                      t ||
                          ((t = !0),
                          window.Promise.resolve().then(function() {
                              (t = !1), e();
                          }));
                  };
              }
            : function(e) {
                  var t = !1;
                  return function() {
                      t ||
                          ((t = !0),
                          setTimeout(function() {
                              (t = !1), e();
                          }, $));
                  };
              },
        ie = function() {
            return (
                void 0 == i &&
                    (i = -1 !== navigator.appVersion.indexOf("MSIE 10")),
                i
            );
        },
        ne = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
        },
        re = (function() {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++)
                    (o = t[n]),
                        (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
            }
            return function(t, o, i) {
                return o && e(t.prototype, o), i && e(t, i), t;
            };
        })(),
        pe = function(e, t, o) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: o,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (e[t] = o),
                e
            );
        },
        se =
            Object.assign ||
            function(e) {
                for (var t, o = 1; o < arguments.length; o++)
                    for (var i in ((t = arguments[o]), t))
                        Object.prototype.hasOwnProperty.call(t, i) &&
                            (e[i] = t[i]);
                return e;
            },
        de = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start"
        ],
        ae = de.slice(3),
        le = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise"
        },
        fe = (function() {
            function t(o, i) {
                var n = this,
                    r =
                        2 < arguments.length && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                ne(this, t),
                    (this.scheduleUpdate = function() {
                        return requestAnimationFrame(n.update);
                    }),
                    (this.update = oe(this.update.bind(this))),
                    (this.options = se({}, t.Defaults, r)),
                    (this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }),
                    (this.reference = o && o.jquery ? o[0] : o),
                    (this.popper = i && i.jquery ? i[0] : i),
                    (this.options.modifiers = {}),
                    Object.keys(
                        se({}, t.Defaults.modifiers, r.modifiers)
                    ).forEach(function(e) {
                        n.options.modifiers[e] = se(
                            {},
                            t.Defaults.modifiers[e] || {},
                            r.modifiers ? r.modifiers[e] : {}
                        );
                    }),
                    (this.modifiers = Object.keys(this.options.modifiers)
                        .map(function(e) {
                            return se({ name: e }, n.options.modifiers[e]);
                        })
                        .sort(function(e, t) {
                            return e.order - t.order;
                        })),
                    this.modifiers.forEach(function(t) {
                        t.enabled &&
                            e(t.onLoad) &&
                            t.onLoad(
                                n.reference,
                                n.popper,
                                n.options,
                                t,
                                n.state
                            );
                    }),
                    this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(),
                    (this.state.eventsEnabled = p);
            }
            return (
                re(t, [
                    {
                        key: "update",
                        value: function() {
                            return N.call(this);
                        }
                    },
                    {
                        key: "destroy",
                        value: function() {
                            return P.call(this);
                        }
                    },
                    {
                        key: "enableEventListeners",
                        value: function() {
                            return I.call(this);
                        }
                    },
                    {
                        key: "disableEventListeners",
                        value: function() {
                            return R.call(this);
                        }
                    }
                ]),
                t
            );
        })();
    return (
        (fe.Utils = ("undefined" == typeof window
            ? global
            : window
        ).PopperUtils),
        (fe.placements = de),
        (fe.Defaults = {
            placement: "bottom",
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement,
                            o = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var n = e.offsets,
                                r = n.reference,
                                p = n.popper,
                                s = -1 !== ["bottom", "top"].indexOf(o),
                                d = s ? "left" : "top",
                                a = s ? "width" : "height",
                                l = {
                                    start: pe({}, d, r[d]),
                                    end: pe({}, d, r[d] + r[a] - p[a])
                                };
                            e.offsets.popper = se({}, p, l[i]);
                        }
                        return e;
                    }
                },
                offset: { order: 200, enabled: !0, fn: G, offset: 0 },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, t) {
                        var o = t.boundariesElement || r(e.instance.popper);
                        e.instance.reference === o && (o = r(o));
                        var i = y(
                            e.instance.popper,
                            e.instance.reference,
                            t.padding,
                            o
                        );
                        t.boundaries = i;
                        var n = t.priority,
                            p = e.offsets.popper,
                            s = {
                                primary: function(e) {
                                    var o = p[e];
                                    return (
                                        p[e] < i[e] &&
                                            !t.escapeWithReference &&
                                            (o = J(p[e], i[e])),
                                        pe({}, e, o)
                                    );
                                },
                                secondary: function(e) {
                                    var o = "right" === e ? "left" : "top",
                                        n = p[o];
                                    return (
                                        p[e] > i[e] &&
                                            !t.escapeWithReference &&
                                            (n = _(
                                                p[o],
                                                i[e] -
                                                    ("right" === e
                                                        ? p.width
                                                        : p.height)
                                            )),
                                        pe({}, o, n)
                                    );
                                }
                            };
                        return (
                            n.forEach(function(e) {
                                var t =
                                    -1 === ["left", "top"].indexOf(e)
                                        ? "secondary"
                                        : "primary";
                                p = se({}, p, s[t](e));
                            }),
                            (e.offsets.popper = p),
                            e
                        );
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            o = t.popper,
                            i = t.reference,
                            n = e.placement.split("-")[0],
                            r = X,
                            p = -1 !== ["top", "bottom"].indexOf(n),
                            s = p ? "right" : "bottom",
                            d = p ? "left" : "top",
                            a = p ? "width" : "height";
                        return (
                            o[s] < r(i[d]) &&
                                (e.offsets.popper[d] = r(i[d]) - o[a]),
                            o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])),
                            e
                        );
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, o) {
                        var i;
                        if (!F(e.instance.modifiers, "arrow", "keepTogether"))
                            return e;
                        var n = o.element;
                        if ("string" == typeof n) {
                            if (((n = e.instance.popper.querySelector(n)), !n))
                                return e;
                        } else if (!e.instance.popper.contains(n))
                            return (
                                console.warn(
                                    "WARNING: `arrow.element` must be child of its popper element!"
                                ),
                                e
                            );
                        var r = e.placement.split("-")[0],
                            p = e.offsets,
                            s = p.popper,
                            d = p.reference,
                            a = -1 !== ["left", "right"].indexOf(r),
                            l = a ? "height" : "width",
                            f = a ? "Top" : "Left",
                            m = f.toLowerCase(),
                            h = a ? "left" : "top",
                            g = a ? "bottom" : "right",
                            u = L(n)[l];
                        d[g] - u < s[m] &&
                            (e.offsets.popper[m] -= s[m] - (d[g] - u)),
                            d[m] + u > s[g] &&
                                (e.offsets.popper[m] += d[m] + u - s[g]),
                            (e.offsets.popper = c(e.offsets.popper));
                        var b = d[m] + d[l] / 2 - u / 2,
                            w = t(e.instance.popper),
                            y = parseFloat(w["margin" + f], 10),
                            E = parseFloat(w["border" + f + "Width"], 10),
                            v = b - e.offsets.popper[m] - y - E;
                        return (
                            (v = J(_(s[l] - u, v), 0)),
                            (e.arrowElement = n),
                            (e.offsets.arrow =
                                ((i = {}),
                                pe(i, m, Math.round(v)),
                                pe(i, h, ""),
                                i)),
                            e
                        );
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(e, t) {
                        if (k(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement)
                            return e;
                        var o = y(
                                e.instance.popper,
                                e.instance.reference,
                                t.padding,
                                t.boundariesElement
                            ),
                            i = e.placement.split("-")[0],
                            n = x(i),
                            r = e.placement.split("-")[1] || "",
                            p = [];
                        switch (t.behavior) {
                            case le.FLIP:
                                p = [i, n];
                                break;
                            case le.CLOCKWISE:
                                p = q(i);
                                break;
                            case le.COUNTERCLOCKWISE:
                                p = q(i, !0);
                                break;
                            default:
                                p = t.behavior;
                        }
                        return (
                            p.forEach(function(s, d) {
                                if (i !== s || p.length === d + 1) return e;
                                (i = e.placement.split("-")[0]), (n = x(i));
                                var a = e.offsets.popper,
                                    l = e.offsets.reference,
                                    f = X,
                                    m =
                                        ("left" === i &&
                                            f(a.right) > f(l.left)) ||
                                        ("right" === i &&
                                            f(a.left) < f(l.right)) ||
                                        ("top" === i &&
                                            f(a.bottom) > f(l.top)) ||
                                        ("bottom" === i &&
                                            f(a.top) < f(l.bottom)),
                                    h = f(a.left) < f(o.left),
                                    c = f(a.right) > f(o.right),
                                    g = f(a.top) < f(o.top),
                                    u = f(a.bottom) > f(o.bottom),
                                    b =
                                        ("left" === i && h) ||
                                        ("right" === i && c) ||
                                        ("top" === i && g) ||
                                        ("bottom" === i && u),
                                    w = -1 !== ["top", "bottom"].indexOf(i),
                                    y =
                                        !!t.flipVariations &&
                                        ((w && "start" === r && h) ||
                                            (w && "end" === r && c) ||
                                            (!w && "start" === r && g) ||
                                            (!w && "end" === r && u));
                                (m || b || y) &&
                                    ((e.flipped = !0),
                                    (m || b) && (i = p[d + 1]),
                                    y && (r = K(r)),
                                    (e.placement = i + (r ? "-" + r : "")),
                                    (e.offsets.popper = se(
                                        {},
                                        e.offsets.popper,
                                        S(
                                            e.instance.popper,
                                            e.offsets.reference,
                                            e.placement
                                        )
                                    )),
                                    (e = C(e.instance.modifiers, e, "flip")));
                            }),
                            e
                        );
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            o = t.split("-")[0],
                            i = e.offsets,
                            n = i.popper,
                            r = i.reference,
                            p = -1 !== ["left", "right"].indexOf(o),
                            s = -1 === ["top", "left"].indexOf(o);
                        return (
                            (n[p ? "left" : "top"] =
                                r[o] - (s ? n[p ? "width" : "height"] : 0)),
                            (e.placement = x(t)),
                            (e.offsets.popper = c(n)),
                            e
                        );
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!F(e.instance.modifiers, "hide", "preventOverflow"))
                            return e;
                        var t = e.offsets.reference,
                            o = T(e.instance.modifiers, function(e) {
                                return "preventOverflow" === e.name;
                            }).boundaries;
                        if (
                            t.bottom < o.top ||
                            t.left > o.right ||
                            t.top > o.bottom ||
                            t.right < o.left
                        ) {
                            if (!0 === e.hide) return e;
                            (e.hide = !0),
                                (e.attributes["x-out-of-boundaries"] = "");
                        } else {
                            if (!1 === e.hide) return e;
                            (e.hide = !1),
                                (e.attributes["x-out-of-boundaries"] = !1);
                        }
                        return e;
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var o = t.x,
                            i = t.y,
                            n = e.offsets.popper,
                            p = T(e.instance.modifiers, function(e) {
                                return "applyStyle" === e.name;
                            }).gpuAcceleration;
                        void 0 !== p &&
                            console.warn(
                                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                            );
                        var s,
                            d,
                            a = void 0 === p ? t.gpuAcceleration : p,
                            l = r(e.instance.popper),
                            f = g(l),
                            m = { position: n.position },
                            h = {
                                left: X(n.left),
                                top: X(n.top),
                                bottom: X(n.bottom),
                                right: X(n.right)
                            },
                            c = "bottom" === o ? "top" : "bottom",
                            u = "right" === i ? "left" : "right",
                            b = W("transform");
                        if (
                            ((d = "bottom" == c ? -f.height + h.bottom : h.top),
                            (s = "right" == u ? -f.width + h.right : h.left),
                            a && b)
                        )
                            (m[b] = "translate3d(" + s + "px, " + d + "px, 0)"),
                                (m[c] = 0),
                                (m[u] = 0),
                                (m.willChange = "transform");
                        else {
                            var w = "bottom" == c ? -1 : 1,
                                y = "right" == u ? -1 : 1;
                            (m[c] = d * w),
                                (m[u] = s * y),
                                (m.willChange = c + ", " + u);
                        }
                        var E = { "x-placement": e.placement };
                        return (
                            (e.attributes = se({}, E, e.attributes)),
                            (e.styles = se({}, m, e.styles)),
                            (e.arrowStyles = se(
                                {},
                                e.offsets.arrow,
                                e.arrowStyles
                            )),
                            e
                        );
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        return (
                            Y(e.instance.popper, e.styles),
                            j(e.instance.popper, e.attributes),
                            e.arrowElement &&
                                Object.keys(e.arrowStyles).length &&
                                Y(e.arrowElement, e.arrowStyles),
                            e
                        );
                    },
                    onLoad: function(e, t, o, i, n) {
                        var r = O(n, t, e),
                            p = v(
                                o.placement,
                                r,
                                t,
                                e,
                                o.modifiers.flip.boundariesElement,
                                o.modifiers.flip.padding
                            );
                        return (
                            t.setAttribute("x-placement", p),
                            Y(t, { position: "absolute" }),
                            o
                        );
                    },
                    gpuAcceleration: void 0
                }
            }
        }),
        fe
    );
});
//# sourceMappingURL=popper.min.js.map

/*! nouislider - 10.1.0 - 2017-07-28 13:09:54 */

!(function(a) {
    "function" == typeof define && define.amd
        ? define([], a)
        : "object" == typeof exports
        ? (module.exports = a())
        : (window.noUiSlider = a());
})(function() {
    "use strict";
    function a(a) {
        return (
            "object" == typeof a &&
            "function" == typeof a.to &&
            "function" == typeof a.from
        );
    }
    function b(a) {
        a.parentElement.removeChild(a);
    }
    function c(a) {
        a.preventDefault();
    }
    function d(a) {
        return a.filter(function(a) {
            return !this[a] && (this[a] = !0);
        }, {});
    }
    function e(a, b) {
        return Math.round(a / b) * b;
    }
    function f(a, b) {
        var c = a.getBoundingClientRect(),
            d = a.ownerDocument,
            e = d.documentElement,
            f = o(d);
        return (
            /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (f.x = 0),
            b ? c.top + f.y - e.clientTop : c.left + f.x - e.clientLeft
        );
    }
    function g(a) {
        return "number" == typeof a && !isNaN(a) && isFinite(a);
    }
    function h(a, b, c) {
        c > 0 &&
            (l(a, b),
            setTimeout(function() {
                m(a, b);
            }, c));
    }
    function i(a) {
        return Math.max(Math.min(a, 100), 0);
    }
    function j(a) {
        return Array.isArray(a) ? a : [a];
    }
    function k(a) {
        a = String(a);
        var b = a.split(".");
        return b.length > 1 ? b[1].length : 0;
    }
    function l(a, b) {
        a.classList ? a.classList.add(b) : (a.className += " " + b);
    }
    function m(a, b) {
        a.classList
            ? a.classList.remove(b)
            : (a.className = a.className.replace(
                  new RegExp(
                      "(^|\\b)" + b.split(" ").join("|") + "(\\b|$)",
                      "gi"
                  ),
                  " "
              ));
    }
    function n(a, b) {
        return a.classList
            ? a.classList.contains(b)
            : new RegExp("\\b" + b + "\\b").test(a.className);
    }
    function o(a) {
        var b = void 0 !== window.pageXOffset,
            c = "CSS1Compat" === (a.compatMode || "");
        return {
            x: b
                ? window.pageXOffset
                : c
                ? a.documentElement.scrollLeft
                : a.body.scrollLeft,
            y: b
                ? window.pageYOffset
                : c
                ? a.documentElement.scrollTop
                : a.body.scrollTop
        };
    }
    function p() {
        return window.navigator.pointerEnabled
            ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
            : window.navigator.msPointerEnabled
            ? {
                  start: "MSPointerDown",
                  move: "MSPointerMove",
                  end: "MSPointerUp"
              }
            : {
                  start: "mousedown touchstart",
                  move: "mousemove touchmove",
                  end: "mouseup touchend"
              };
    }
    function q() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0;
                }
            });
            window.addEventListener("test", null, b);
        } catch (a) {}
        return a;
    }
    function r() {
        return (
            window.CSS && CSS.supports && CSS.supports("touch-action", "none")
        );
    }
    function s(a, b) {
        return 100 / (b - a);
    }
    function t(a, b) {
        return (100 * b) / (a[1] - a[0]);
    }
    function u(a, b) {
        return t(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0]);
    }
    function v(a, b) {
        return (b * (a[1] - a[0])) / 100 + a[0];
    }
    function w(a, b) {
        for (var c = 1; a >= b[c]; ) c += 1;
        return c;
    }
    function x(a, b, c) {
        if (c >= a.slice(-1)[0]) return 100;
        var d,
            e,
            f,
            g,
            h = w(c, a);
        return (
            (d = a[h - 1]),
            (e = a[h]),
            (f = b[h - 1]),
            (g = b[h]),
            f + u([d, e], c) / s(f, g)
        );
    }
    function y(a, b, c) {
        if (c >= 100) return a.slice(-1)[0];
        var d,
            e,
            f,
            g,
            h = w(c, b);
        return (
            (d = a[h - 1]),
            (e = a[h]),
            (f = b[h - 1]),
            (g = b[h]),
            v([d, e], (c - f) * s(f, g))
        );
    }
    function z(a, b, c, d) {
        if (100 === d) return d;
        var f,
            g,
            h = w(d, a);
        return c
            ? ((f = a[h - 1]), (g = a[h]), d - f > (g - f) / 2 ? g : f)
            : b[h - 1]
            ? a[h - 1] + e(d - a[h - 1], b[h - 1])
            : d;
    }
    function A(a, b, c) {
        var d;
        if (
            ("number" == typeof b && (b = [b]),
            "[object Array]" !== Object.prototype.toString.call(b))
        )
            throw new Error(
                "noUiSlider (" + _ + "): 'range' contains invalid value."
            );
        if (
            ((d = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a)),
            !g(d) || !g(b[0]))
        )
            throw new Error(
                "noUiSlider (" + _ + "): 'range' value isn't numeric."
            );
        c.xPct.push(d),
            c.xVal.push(b[0]),
            d
                ? c.xSteps.push(!isNaN(b[1]) && b[1])
                : isNaN(b[1]) || (c.xSteps[0] = b[1]),
            c.xHighestCompleteStep.push(0);
    }
    function B(a, b, c) {
        if (!b) return !0;
        c.xSteps[a] =
            t([c.xVal[a], c.xVal[a + 1]], b) / s(c.xPct[a], c.xPct[a + 1]);
        var d = (c.xVal[a + 1] - c.xVal[a]) / c.xNumSteps[a],
            e = Math.ceil(Number(d.toFixed(3)) - 1),
            f = c.xVal[a] + c.xNumSteps[a] * e;
        c.xHighestCompleteStep[a] = f;
    }
    function C(a, b, c) {
        (this.xPct = []),
            (this.xVal = []),
            (this.xSteps = [c || !1]),
            (this.xNumSteps = [!1]),
            (this.xHighestCompleteStep = []),
            (this.snap = b);
        var d,
            e = [];
        for (d in a) a.hasOwnProperty(d) && e.push([a[d], d]);
        for (
            e.length && "object" == typeof e[0][0]
                ? e.sort(function(a, b) {
                      return a[0][0] - b[0][0];
                  })
                : e.sort(function(a, b) {
                      return a[0] - b[0];
                  }),
                d = 0;
            d < e.length;
            d++
        )
            A(e[d][1], e[d][0], this);
        for (
            this.xNumSteps = this.xSteps.slice(0), d = 0;
            d < this.xNumSteps.length;
            d++
        )
            B(d, this.xNumSteps[d], this);
    }
    function D(b) {
        if (a(b)) return !0;
        throw new Error(
            "noUiSlider (" + _ + "): 'format' requires 'to' and 'from' methods."
        );
    }
    function E(a, b) {
        if (!g(b))
            throw new Error("noUiSlider (" + _ + "): 'step' is not numeric.");
        a.singleStep = b;
    }
    function F(a, b) {
        if ("object" != typeof b || Array.isArray(b))
            throw new Error(
                "noUiSlider (" + _ + "): 'range' is not an object."
            );
        if (void 0 === b.min || void 0 === b.max)
            throw new Error(
                "noUiSlider (" + _ + "): Missing 'min' or 'max' in 'range'."
            );
        if (b.min === b.max)
            throw new Error(
                "noUiSlider (" +
                    _ +
                    "): 'range' 'min' and 'max' cannot be equal."
            );
        a.spectrum = new C(b, a.snap, a.singleStep);
    }
    function G(a, b) {
        if (((b = j(b)), !Array.isArray(b) || !b.length))
            throw new Error(
                "noUiSlider (" + _ + "): 'start' option is incorrect."
            );
        (a.handles = b.length), (a.start = b);
    }
    function H(a, b) {
        if (((a.snap = b), "boolean" != typeof b))
            throw new Error(
                "noUiSlider (" + _ + "): 'snap' option must be a boolean."
            );
    }
    function I(a, b) {
        if (((a.animate = b), "boolean" != typeof b))
            throw new Error(
                "noUiSlider (" + _ + "): 'animate' option must be a boolean."
            );
    }
    function J(a, b) {
        if (((a.animationDuration = b), "number" != typeof b))
            throw new Error(
                "noUiSlider (" +
                    _ +
                    "): 'animationDuration' option must be a number."
            );
    }
    function K(a, b) {
        var c,
            d = [!1];
        if (
            ("lower" === b ? (b = [!0, !1]) : "upper" === b && (b = [!1, !0]),
            !0 === b || !1 === b)
        ) {
            for (c = 1; c < a.handles; c++) d.push(b);
            d.push(!1);
        } else {
            if (!Array.isArray(b) || !b.length || b.length !== a.handles + 1)
                throw new Error(
                    "noUiSlider (" +
                        _ +
                        "): 'connect' option doesn't match handle count."
                );
            d = b;
        }
        a.connect = d;
    }
    function L(a, b) {
        switch (b) {
            case "horizontal":
                a.ort = 0;
                break;
            case "vertical":
                a.ort = 1;
                break;
            default:
                throw new Error(
                    "noUiSlider (" + _ + "): 'orientation' option is invalid."
                );
        }
    }
    function M(a, b) {
        if (!g(b))
            throw new Error(
                "noUiSlider (" + _ + "): 'margin' option must be numeric."
            );
        if (0 !== b && ((a.margin = a.spectrum.getMargin(b)), !a.margin))
            throw new Error(
                "noUiSlider (" +
                    _ +
                    "): 'margin' option is only supported on linear sliders."
            );
    }
    function N(a, b) {
        if (!g(b))
            throw new Error(
                "noUiSlider (" + _ + "): 'limit' option must be numeric."
            );
        if (((a.limit = a.spectrum.getMargin(b)), !a.limit || a.handles < 2))
            throw new Error(
                "noUiSlider (" +
                    _ +
                    "): 'limit' option is only supported on linear sliders with 2 or more handles."
            );
    }
    function O(a, b) {
        if (!g(b))
            throw new Error(
                "noUiSlider (" + _ + "): 'padding' option must be numeric."
            );
        if (0 !== b) {
            if (((a.padding = a.spectrum.getMargin(b)), !a.padding))
                throw new Error(
                    "noUiSlider (" +
                        _ +
                        "): 'padding' option is only supported on linear sliders."
                );
            if (a.padding < 0)
                throw new Error(
                    "noUiSlider (" +
                        _ +
                        "): 'padding' option must be a positive number."
                );
            if (a.padding >= 50)
                throw new Error(
                    "noUiSlider (" +
                        _ +
                        "): 'padding' option must be less than half the range."
                );
        }
    }
    function P(a, b) {
        switch (b) {
            case "ltr":
                a.dir = 0;
                break;
            case "rtl":
                a.dir = 1;
                break;
            default:
                throw new Error(
                    "noUiSlider (" +
                        _ +
                        "): 'direction' option was not recognized."
                );
        }
    }
    function Q(a, b) {
        if ("string" != typeof b)
            throw new Error(
                "noUiSlider (" +
                    _ +
                    "): 'behaviour' must be a string containing options."
            );
        var c = b.indexOf("tap") >= 0,
            d = b.indexOf("drag") >= 0,
            e = b.indexOf("fixed") >= 0,
            f = b.indexOf("snap") >= 0,
            g = b.indexOf("hover") >= 0;
        if (e) {
            if (2 !== a.handles)
                throw new Error(
                    "noUiSlider (" +
                        _ +
                        "): 'fixed' behaviour must be used with 2 handles"
                );
            M(a, a.start[1] - a.start[0]);
        }
        a.events = { tap: c || f, drag: d, fixed: e, snap: f, hover: g };
    }
    function R(a, b) {
        if (((a.multitouch = b), "boolean" != typeof b))
            throw new Error(
                "noUiSlider (" + _ + "): 'multitouch' option must be a boolean."
            );
    }
    function S(a, b) {
        if (!1 !== b)
            if (!0 === b) {
                a.tooltips = [];
                for (var c = 0; c < a.handles; c++) a.tooltips.push(!0);
            } else {
                if (((a.tooltips = j(b)), a.tooltips.length !== a.handles))
                    throw new Error(
                        "noUiSlider (" +
                            _ +
                            "): must pass a formatter for all handles."
                    );
                a.tooltips.forEach(function(a) {
                    if (
                        "boolean" != typeof a &&
                        ("object" != typeof a || "function" != typeof a.to)
                    )
                        throw new Error(
                            "noUiSlider (" +
                                _ +
                                "): 'tooltips' must be passed a formatter or 'false'."
                        );
                });
            }
    }
    function T(a, b) {
        (a.ariaFormat = b), D(b);
    }
    function U(a, b) {
        (a.format = b), D(b);
    }
    function V(a, b) {
        if (void 0 !== b && "string" != typeof b && !1 !== b)
            throw new Error(
                "noUiSlider (" +
                    _ +
                    "): 'cssPrefix' must be a string or `false`."
            );
        a.cssPrefix = b;
    }
    function W(a, b) {
        if (void 0 !== b && "object" != typeof b)
            throw new Error(
                "noUiSlider (" + _ + "): 'cssClasses' must be an object."
            );
        if ("string" == typeof a.cssPrefix) {
            a.cssClasses = {};
            for (var c in b)
                b.hasOwnProperty(c) && (a.cssClasses[c] = a.cssPrefix + b[c]);
        } else a.cssClasses = b;
    }
    function X(a, b) {
        if (!0 !== b && !1 !== b)
            throw new Error(
                "noUiSlider (" +
                    _ +
                    "): 'useRequestAnimationFrame' option should be true (default) or false."
            );
        a.useRequestAnimationFrame = b;
    }
    function Y(a) {
        var b = {
                margin: 0,
                limit: 0,
                padding: 0,
                animate: !0,
                animationDuration: 300,
                ariaFormat: aa,
                format: aa
            },
            c = {
                step: { r: !1, t: E },
                start: { r: !0, t: G },
                connect: { r: !0, t: K },
                direction: { r: !0, t: P },
                snap: { r: !1, t: H },
                animate: { r: !1, t: I },
                animationDuration: { r: !1, t: J },
                range: { r: !0, t: F },
                orientation: { r: !1, t: L },
                margin: { r: !1, t: M },
                limit: { r: !1, t: N },
                padding: { r: !1, t: O },
                behaviour: { r: !0, t: Q },
                multitouch: { r: !0, t: R },
                ariaFormat: { r: !1, t: T },
                format: { r: !1, t: U },
                tooltips: { r: !1, t: S },
                cssPrefix: { r: !1, t: V },
                cssClasses: { r: !1, t: W },
                useRequestAnimationFrame: { r: !1, t: X }
            },
            d = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                multitouch: !1,
                orientation: "horizontal",
                cssPrefix: "noUi-",
                cssClasses: {
                    target: "target",
                    base: "base",
                    origin: "origin",
                    handle: "handle",
                    handleLower: "handle-lower",
                    handleUpper: "handle-upper",
                    horizontal: "horizontal",
                    vertical: "vertical",
                    background: "background",
                    connect: "connect",
                    ltr: "ltr",
                    rtl: "rtl",
                    draggable: "draggable",
                    drag: "state-drag",
                    tap: "state-tap",
                    active: "active",
                    tooltip: "tooltip",
                    pips: "pips",
                    pipsHorizontal: "pips-horizontal",
                    pipsVertical: "pips-vertical",
                    marker: "marker",
                    markerHorizontal: "marker-horizontal",
                    markerVertical: "marker-vertical",
                    markerNormal: "marker-normal",
                    markerLarge: "marker-large",
                    markerSub: "marker-sub",
                    value: "value",
                    valueHorizontal: "value-horizontal",
                    valueVertical: "value-vertical",
                    valueNormal: "value-normal",
                    valueLarge: "value-large",
                    valueSub: "value-sub"
                },
                useRequestAnimationFrame: !0
            };
        a.format && !a.ariaFormat && (a.ariaFormat = a.format),
            Object.keys(c).forEach(function(e) {
                if (void 0 === a[e] && void 0 === d[e]) {
                    if (c[e].r)
                        throw new Error(
                            "noUiSlider (" + _ + "): '" + e + "' is required."
                        );
                    return !0;
                }
                c[e].t(b, void 0 === a[e] ? d[e] : a[e]);
            }),
            (b.pips = a.pips);
        var e = [
            ["left", "top"],
            ["right", "bottom"]
        ];
        return (
            (b.style = e[b.dir][b.ort]),
            (b.styleOposite = e[b.dir ? 0 : 1][b.ort]),
            b
        );
    }
    function Z(a, e, g) {
        function k(a, b) {
            var c = wa.createElement("div");
            return b && l(c, b), a.appendChild(c), c;
        }
        function s(a, b) {
            var c = k(a, e.cssClasses.origin),
                d = k(c, e.cssClasses.handle);
            return (
                d.setAttribute("data-handle", b),
                d.setAttribute("tabindex", "0"),
                d.setAttribute("role", "slider"),
                d.setAttribute(
                    "aria-orientation",
                    e.ort ? "vertical" : "horizontal"
                ),
                0 === b
                    ? l(d, e.cssClasses.handleLower)
                    : b === e.handles - 1 && l(d, e.cssClasses.handleUpper),
                c
            );
        }
        function t(a, b) {
            return !!b && k(a, e.cssClasses.connect);
        }
        function u(a, b) {
            (ia = []), (ja = []), ja.push(t(b, a[0]));
            for (var c = 0; c < e.handles; c++)
                ia.push(s(b, c)), (ra[c] = c), ja.push(t(b, a[c + 1]));
        }
        function v(a) {
            l(a, e.cssClasses.target),
                0 === e.dir ? l(a, e.cssClasses.ltr) : l(a, e.cssClasses.rtl),
                0 === e.ort
                    ? l(a, e.cssClasses.horizontal)
                    : l(a, e.cssClasses.vertical),
                (ha = k(a, e.cssClasses.base));
        }
        function w(a, b) {
            return !!e.tooltips[b] && k(a.firstChild, e.cssClasses.tooltip);
        }
        function x() {
            var a = ia.map(w);
            ea("update", function(b, c, d) {
                if (a[c]) {
                    var f = b[c];
                    !0 !== e.tooltips[c] && (f = e.tooltips[c].to(d[c])),
                        (a[c].innerHTML = f);
                }
            });
        }
        function y() {
            ea("update", function(a, b, c, d, f) {
                ra.forEach(function(a) {
                    var b = ia[a],
                        d = S(qa, a, 0, !0, !0, !0),
                        g = S(qa, a, 100, !0, !0, !0),
                        h = f[a],
                        i = e.ariaFormat.to(c[a]);
                    b.children[0].setAttribute("aria-valuemin", d.toFixed(1)),
                        b.children[0].setAttribute(
                            "aria-valuemax",
                            g.toFixed(1)
                        ),
                        b.children[0].setAttribute(
                            "aria-valuenow",
                            h.toFixed(1)
                        ),
                        b.children[0].setAttribute("aria-valuetext", i);
                });
            });
        }
        function z(a, b, c) {
            if ("range" === a || "steps" === a) return ta.xVal;
            if ("count" === a) {
                if (!b)
                    throw new Error(
                        "noUiSlider (" +
                            _ +
                            "): 'values' required for mode 'count'."
                    );
                var d,
                    e = 100 / (b - 1),
                    f = 0;
                for (b = []; (d = f++ * e) <= 100; ) b.push(d);
                a = "positions";
            }
            return "positions" === a
                ? b.map(function(a) {
                      return ta.fromStepping(c ? ta.getStep(a) : a);
                  })
                : "values" === a
                ? c
                    ? b.map(function(a) {
                          return ta.fromStepping(ta.getStep(ta.toStepping(a)));
                      })
                    : b
                : void 0;
        }
        function A(a, b, c) {
            function e(a, b) {
                return (a + b).toFixed(7) / 1;
            }
            var f = {},
                g = ta.xVal[0],
                h = ta.xVal[ta.xVal.length - 1],
                i = !1,
                j = !1,
                k = 0;
            return (
                (c = d(
                    c.slice().sort(function(a, b) {
                        return a - b;
                    })
                )),
                c[0] !== g && (c.unshift(g), (i = !0)),
                c[c.length - 1] !== h && (c.push(h), (j = !0)),
                c.forEach(function(d, g) {
                    var h,
                        l,
                        m,
                        n,
                        o,
                        p,
                        q,
                        r,
                        s,
                        t,
                        u = d,
                        v = c[g + 1];
                    if (
                        ("steps" === b && (h = ta.xNumSteps[g]),
                        h || (h = v - u),
                        !1 !== u && void 0 !== v)
                    )
                        for (
                            h = Math.max(h, 1e-7), l = u;
                            l <= v;
                            l = e(l, h)
                        ) {
                            for (
                                n = ta.toStepping(l),
                                    o = n - k,
                                    r = o / a,
                                    s = Math.round(r),
                                    t = o / s,
                                    m = 1;
                                m <= s;
                                m += 1
                            )
                                (p = k + m * t), (f[p.toFixed(5)] = ["x", 0]);
                            (q = c.indexOf(l) > -1 ? 1 : "steps" === b ? 2 : 0),
                                !g && i && (q = 0),
                                (l === v && j) || (f[n.toFixed(5)] = [l, q]),
                                (k = n);
                        }
                }),
                f
            );
        }
        function B(a, b, c) {
            function d(a, b) {
                var c = b === e.cssClasses.value,
                    d = c ? j : m,
                    f = c ? h : i;
                return b + " " + d[e.ort] + " " + f[a];
            }
            function f(a, f) {
                f[1] = f[1] && b ? b(f[0], f[1]) : f[1];
                var h = k(g, !1);
                (h.className = d(f[1], e.cssClasses.marker)),
                    (h.style[e.style] = a + "%"),
                    f[1] &&
                        ((h = k(g, !1)),
                        (h.className = d(f[1], e.cssClasses.value)),
                        (h.style[e.style] = a + "%"),
                        (h.innerText = c.to(f[0])));
            }
            var g = wa.createElement("div"),
                h = [
                    e.cssClasses.valueNormal,
                    e.cssClasses.valueLarge,
                    e.cssClasses.valueSub
                ],
                i = [
                    e.cssClasses.markerNormal,
                    e.cssClasses.markerLarge,
                    e.cssClasses.markerSub
                ],
                j = [e.cssClasses.valueHorizontal, e.cssClasses.valueVertical],
                m = [
                    e.cssClasses.markerHorizontal,
                    e.cssClasses.markerVertical
                ];
            return (
                l(g, e.cssClasses.pips),
                l(
                    g,
                    0 === e.ort
                        ? e.cssClasses.pipsHorizontal
                        : e.cssClasses.pipsVertical
                ),
                Object.keys(a).forEach(function(b) {
                    f(b, a[b]);
                }),
                g
            );
        }
        function C() {
            la && (b(la), (la = null));
        }
        function D(a) {
            C();
            var b = a.mode,
                c = a.density || 1,
                d = a.filter || !1,
                e = a.values || !1,
                f = a.stepped || !1,
                g = z(b, e, f),
                h = A(c, b, g),
                i = a.format || { to: Math.round };
            return (la = pa.appendChild(B(h, d, i)));
        }
        function E() {
            var a = ha.getBoundingClientRect(),
                b = "offset" + ["Width", "Height"][e.ort];
            return 0 === e.ort ? a.width || ha[b] : a.height || ha[b];
        }
        function F(a, b, c, d) {
            var f = function(f) {
                    return (
                        !pa.hasAttribute("disabled") &&
                        !n(pa, e.cssClasses.tap) &&
                            !!(f = G(f, d.pageOffset, d.target || b)) &&
                                !(
                                    a === ma.start &&
                                    void 0 !== f.buttons &&
                                    f.buttons > 1
                                ) &&
                                    (!d.hover || !f.buttons) &&
                                        (oa || f.preventDefault(),
                                        (f.calcPoint = f.points[e.ort]),
                                        void c(f, d))
                    );
                },
                g = [];
            return (
                a.split(" ").forEach(function(a) {
                    b.addEventListener(a, f, !!oa && { passive: !0 }),
                        g.push([a, f]);
                }),
                g
            );
        }
        function G(a, b, c) {
            var d,
                f,
                g = 0 === a.type.indexOf("touch"),
                h = 0 === a.type.indexOf("mouse"),
                i = 0 === a.type.indexOf("pointer");
            if (
                (0 === a.type.indexOf("MSPointer") && (i = !0),
                g && e.multitouch)
            ) {
                var j = function(a) {
                    return a.target === c || c.contains(a.target);
                };
                if ("touchstart" === a.type) {
                    var k = Array.prototype.filter.call(a.touches, j);
                    if (k.length > 1) return !1;
                    (d = k[0].pageX), (f = k[0].pageY);
                } else {
                    var l = Array.prototype.find.call(a.changedTouches, j);
                    if (!l) return !1;
                    (d = l.pageX), (f = l.pageY);
                }
            } else if (g) {
                if (a.touches.length > 1) return !1;
                (d = a.changedTouches[0].pageX),
                    (f = a.changedTouches[0].pageY);
            }
            return (
                (b = b || o(wa)),
                (h || i) && ((d = a.clientX + b.x), (f = a.clientY + b.y)),
                (a.pageOffset = b),
                (a.points = [d, f]),
                (a.cursor = h || i),
                a
            );
        }
        function H(a) {
            var b = a - f(ha, e.ort),
                c = (100 * b) / E();
            return e.dir ? 100 - c : c;
        }
        function I(a) {
            var b = 100,
                c = !1;
            return (
                ia.forEach(function(d, e) {
                    if (!d.hasAttribute("disabled")) {
                        var f = Math.abs(qa[e] - a);
                        f < b && ((c = e), (b = f));
                    }
                }),
                c
            );
        }
        function J(a, b, c, d) {
            var e = c.slice(),
                f = [!a, a],
                g = [a, !a];
            (d = d.slice()),
                a && d.reverse(),
                d.length > 1
                    ? d.forEach(function(a, c) {
                          var d = S(e, a, e[a] + b, f[c], g[c], !1);
                          !1 === d ? (b = 0) : ((b = d - e[a]), (e[a] = d));
                      })
                    : (f = g = [!0]);
            var h = !1;
            d.forEach(function(a, d) {
                h = W(a, c[a] + b, f[d], g[d]) || h;
            }),
                h &&
                    d.forEach(function(a) {
                        K("update", a), K("slide", a);
                    });
        }
        function K(a, b, c) {
            Object.keys(va).forEach(function(d) {
                var f = d.split(".")[0];
                a === f &&
                    va[d].forEach(function(a) {
                        a.call(
                            ka,
                            ua.map(e.format.to),
                            b,
                            ua.slice(),
                            c || !1,
                            qa.slice()
                        );
                    });
            });
        }
        function L(a, b) {
            "mouseout" === a.type &&
                "HTML" === a.target.nodeName &&
                null === a.relatedTarget &&
                N(a, b);
        }
        function M(a, b) {
            if (
                -1 === navigator.appVersion.indexOf("MSIE 9") &&
                0 === a.buttons &&
                0 !== b.buttonsProperty
            )
                return N(a, b);
            var c = (e.dir ? -1 : 1) * (a.calcPoint - b.startCalcPoint);
            J(c > 0, (100 * c) / b.baseSize, b.locations, b.handleNumbers);
        }
        function N(a, b) {
            b.handle && (m(b.handle, e.cssClasses.active), (sa -= 1)),
                b.listeners.forEach(function(a) {
                    xa.removeEventListener(a[0], a[1]);
                }),
                0 === sa &&
                    (m(pa, e.cssClasses.drag),
                    V(),
                    a.cursor &&
                        ((ya.style.cursor = ""),
                        ya.removeEventListener("selectstart", c))),
                b.handleNumbers.forEach(function(a) {
                    K("change", a), K("set", a), K("end", a);
                });
        }
        function O(a, b) {
            var d;
            if (1 === b.handleNumbers.length) {
                var f = ia[b.handleNumbers[0]];
                if (f.hasAttribute("disabled")) return !1;
                (d = f.children[0]), (sa += 1), l(d, e.cssClasses.active);
            }
            a.stopPropagation();
            var g = [],
                h = F(ma.move, xa, M, {
                    target: a.target,
                    handle: d,
                    listeners: g,
                    startCalcPoint: a.calcPoint,
                    baseSize: E(),
                    pageOffset: a.pageOffset,
                    handleNumbers: b.handleNumbers,
                    buttonsProperty: a.buttons,
                    locations: qa.slice()
                }),
                i = F(ma.end, xa, N, {
                    target: a.target,
                    handle: d,
                    listeners: g,
                    handleNumbers: b.handleNumbers
                }),
                j = F("mouseout", xa, L, {
                    target: a.target,
                    handle: d,
                    listeners: g,
                    handleNumbers: b.handleNumbers
                });
            g.push.apply(g, h.concat(i, j)),
                a.cursor &&
                    ((ya.style.cursor = getComputedStyle(a.target).cursor),
                    ia.length > 1 && l(pa, e.cssClasses.drag),
                    ya.addEventListener("selectstart", c, !1)),
                b.handleNumbers.forEach(function(a) {
                    K("start", a);
                });
        }
        function P(a) {
            a.stopPropagation();
            var b = H(a.calcPoint),
                c = I(b);
            if (!1 === c) return !1;
            e.events.snap || h(pa, e.cssClasses.tap, e.animationDuration),
                W(c, b, !0, !0),
                V(),
                K("slide", c, !0),
                K("update", c, !0),
                K("change", c, !0),
                K("set", c, !0),
                e.events.snap && O(a, { handleNumbers: [c] });
        }
        function Q(a) {
            var b = H(a.calcPoint),
                c = ta.getStep(b),
                d = ta.fromStepping(c);
            Object.keys(va).forEach(function(a) {
                "hover" === a.split(".")[0] &&
                    va[a].forEach(function(a) {
                        a.call(ka, d);
                    });
            });
        }
        function R(a) {
            a.fixed ||
                ia.forEach(function(a, b) {
                    F(ma.start, a.children[0], O, { handleNumbers: [b] });
                }),
                a.tap && F(ma.start, ha, P, {}),
                a.hover && F(ma.move, ha, Q, { hover: !0 }),
                a.drag &&
                    ja.forEach(function(b, c) {
                        if (!1 !== b && 0 !== c && c !== ja.length - 1) {
                            var d = ia[c - 1],
                                f = ia[c],
                                g = [b];
                            l(b, e.cssClasses.draggable),
                                a.fixed &&
                                    (g.push(d.children[0]),
                                    g.push(f.children[0])),
                                g.forEach(function(a) {
                                    F(ma.start, a, O, {
                                        handles: [d, f],
                                        handleNumbers: [c - 1, c]
                                    });
                                });
                        }
                    });
        }
        function S(a, b, c, d, f, g) {
            return (
                ia.length > 1 &&
                    (d && b > 0 && (c = Math.max(c, a[b - 1] + e.margin)),
                    f &&
                        b < ia.length - 1 &&
                        (c = Math.min(c, a[b + 1] - e.margin))),
                ia.length > 1 &&
                    e.limit &&
                    (d && b > 0 && (c = Math.min(c, a[b - 1] + e.limit)),
                    f &&
                        b < ia.length - 1 &&
                        (c = Math.max(c, a[b + 1] - e.limit))),
                e.padding &&
                    (0 === b && (c = Math.max(c, e.padding)),
                    b === ia.length - 1 && (c = Math.min(c, 100 - e.padding))),
                (c = ta.getStep(c)),
                !((c = i(c)) === a[b] && !g) && c
            );
        }
        function T(a) {
            return a + "%";
        }
        function U(a, b) {
            (qa[a] = b), (ua[a] = ta.fromStepping(b));
            var c = function() {
                (ia[a].style[e.style] = T(b)), X(a), X(a + 1);
            };
            window.requestAnimationFrame && e.useRequestAnimationFrame
                ? window.requestAnimationFrame(c)
                : c();
        }
        function V() {
            ra.forEach(function(a) {
                var b = qa[a] > 50 ? -1 : 1,
                    c = 3 + (ia.length + b * a);
                ia[a].childNodes[0].style.zIndex = c;
            });
        }
        function W(a, b, c, d) {
            return !1 !== (b = S(qa, a, b, c, d, !1)) && (U(a, b), !0);
        }
        function X(a) {
            if (ja[a]) {
                var b = 0,
                    c = 100;
                0 !== a && (b = qa[a - 1]),
                    a !== ja.length - 1 && (c = qa[a]),
                    (ja[a].style[e.style] = T(b)),
                    (ja[a].style[e.styleOposite] = T(100 - c));
            }
        }
        function Z(a, b) {
            null !== a &&
                !1 !== a &&
                ("number" == typeof a && (a = String(a)),
                !1 === (a = e.format.from(a)) ||
                    isNaN(a) ||
                    W(b, ta.toStepping(a), !1, !1));
        }
        function $(a, b) {
            var c = j(a),
                d = void 0 === qa[0];
            (b = void 0 === b || !!b),
                c.forEach(Z),
                e.animate && !d && h(pa, e.cssClasses.tap, e.animationDuration),
                ra.forEach(function(a) {
                    W(a, qa[a], !0, !1);
                }),
                V(),
                ra.forEach(function(a) {
                    K("update", a), null !== c[a] && b && K("set", a);
                });
        }
        function aa(a) {
            $(e.start, a);
        }
        function ba() {
            var a = ua.map(e.format.to);
            return 1 === a.length ? a[0] : a;
        }
        function ca() {
            for (var a in e.cssClasses)
                e.cssClasses.hasOwnProperty(a) && m(pa, e.cssClasses[a]);
            for (; pa.firstChild; ) pa.removeChild(pa.firstChild);
            delete pa.noUiSlider;
        }
        function da() {
            return qa.map(function(a, b) {
                var c = ta.getNearbySteps(a),
                    d = ua[b],
                    e = c.thisStep.step,
                    f = null;
                !1 !== e &&
                    d + e > c.stepAfter.startValue &&
                    (e = c.stepAfter.startValue - d),
                    (f =
                        d > c.thisStep.startValue
                            ? c.thisStep.step
                            : !1 !== c.stepBefore.step &&
                              d - c.stepBefore.highestStep),
                    100 === a ? (e = null) : 0 === a && (f = null);
                var g = ta.countStepDecimals();
                return (
                    null !== e && !1 !== e && (e = Number(e.toFixed(g))),
                    null !== f && !1 !== f && (f = Number(f.toFixed(g))),
                    [f, e]
                );
            });
        }
        function ea(a, b) {
            (va[a] = va[a] || []),
                va[a].push(b),
                "update" === a.split(".")[0] &&
                    ia.forEach(function(a, b) {
                        K("update", b);
                    });
        }
        function fa(a) {
            var b = a && a.split(".")[0],
                c = b && a.substring(b.length);
            Object.keys(va).forEach(function(a) {
                var d = a.split(".")[0],
                    e = a.substring(d.length);
                (b && b !== d) || (c && c !== e) || delete va[a];
            });
        }
        function ga(a, b) {
            var c = ba(),
                d = [
                    "margin",
                    "limit",
                    "padding",
                    "range",
                    "animate",
                    "snap",
                    "step",
                    "format"
                ];
            d.forEach(function(b) {
                void 0 !== a[b] && (g[b] = a[b]);
            });
            var f = Y(g);
            d.forEach(function(b) {
                void 0 !== a[b] && (e[b] = f[b]);
            }),
                (ta = f.spectrum),
                (e.margin = f.margin),
                (e.limit = f.limit),
                (e.padding = f.padding),
                e.pips && D(e.pips),
                (qa = []),
                $(a.start || c, b);
        }
        var ha,
            ia,
            ja,
            ka,
            la,
            ma = p(),
            na = r(),
            oa = na && q(),
            pa = a,
            qa = [],
            ra = [],
            sa = 0,
            ta = e.spectrum,
            ua = [],
            va = {},
            wa = a.ownerDocument,
            xa = wa.documentElement,
            ya = wa.body;
        if (pa.noUiSlider)
            throw new Error(
                "noUiSlider (" + _ + "): Slider was already initialized."
            );
        return (
            v(pa),
            u(e.connect, ha),
            (ka = {
                destroy: ca,
                steps: da,
                on: ea,
                off: fa,
                get: ba,
                set: $,
                reset: aa,
                __moveHandles: function(a, b, c) {
                    J(a, b, qa, c);
                },
                options: g,
                updateOptions: ga,
                target: pa,
                removePips: C,
                pips: D
            }),
            R(e.events),
            $(e.start),
            e.pips && D(e.pips),
            e.tooltips && x(),
            y(),
            ka
        );
    }
    function $(a, b) {
        if (!a || !a.nodeName)
            throw new Error(
                "noUiSlider (" +
                    _ +
                    "): create requires a single element, got: " +
                    a
            );
        var c = Y(b, a),
            d = Z(a, c, b);
        return (a.noUiSlider = d), d;
    }
    var _ = "10.1.0";
    (C.prototype.getMargin = function(a) {
        var b = this.xNumSteps[0];
        if (b && (a / b) % 1 != 0)
            throw new Error(
                "noUiSlider (" +
                    _ +
                    "): 'limit', 'margin' and 'padding' must be divisible by step."
            );
        return 2 === this.xPct.length && t(this.xVal, a);
    }),
        (C.prototype.toStepping = function(a) {
            return (a = x(this.xVal, this.xPct, a));
        }),
        (C.prototype.fromStepping = function(a) {
            return y(this.xVal, this.xPct, a);
        }),
        (C.prototype.getStep = function(a) {
            return (a = z(this.xPct, this.xSteps, this.snap, a));
        }),
        (C.prototype.getNearbySteps = function(a) {
            var b = w(a, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[b - 2],
                    step: this.xNumSteps[b - 2],
                    highestStep: this.xHighestCompleteStep[b - 2]
                },
                thisStep: {
                    startValue: this.xVal[b - 1],
                    step: this.xNumSteps[b - 1],
                    highestStep: this.xHighestCompleteStep[b - 1]
                },
                stepAfter: {
                    startValue: this.xVal[b - 0],
                    step: this.xNumSteps[b - 0],
                    highestStep: this.xHighestCompleteStep[b - 0]
                }
            };
        }),
        (C.prototype.countStepDecimals = function() {
            var a = this.xNumSteps.map(k);
            return Math.max.apply(null, a);
        }),
        (C.prototype.convert = function(a) {
            return this.getStep(this.toStepping(a));
        });
    var aa = {
        to: function(a) {
            return void 0 !== a && a.toFixed(2);
        },
        from: Number
    };
    return { version: _, create: $ };
});
function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.3): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var Button = (function($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = "button";
    var VERSION = "4.0.0-beta.3";
    var DATA_KEY = "bs.button";
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = ".data-api";
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var ClassName = {
        ACTIVE: "active",
        BUTTON: "btn",
        FOCUS: "focus"
    };
    var Selector = {
        DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
        DATA_TOGGLE: '[data-toggle="buttons"]',
        INPUT: "input",
        ACTIVE: ".active",
        BUTTON: ".btn"
    };
    var Event = {
        CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
        FOCUS_BLUR_DATA_API:
            "focus" +
            EVENT_KEY +
            DATA_API_KEY +
            " " +
            ("blur" + EVENT_KEY + DATA_API_KEY)
        /**
         * ------------------------------------------------------------------------
         * Class Definition
         * ------------------------------------------------------------------------
         */
    };

    var Button =
        /*#__PURE__*/
        (function() {
            function Button(element) {
                this._element = element;
            } // getters

            var _proto = Button.prototype;

            // public
            _proto.toggle = function toggle() {
                var triggerChangeEvent = true;
                var addAriaPressed = true;
                var rootElement = $(this._element).closest(
                    Selector.DATA_TOGGLE
                )[0];

                if (rootElement) {
                    var input = $(this._element).find(Selector.INPUT)[0];

                    if (input) {
                        if (input.type === "radio") {
                            if (
                                input.checked &&
                                $(this._element).hasClass(ClassName.ACTIVE)
                            ) {
                                triggerChangeEvent = false;
                            } else {
                                var activeElement = $(rootElement).find(
                                    Selector.ACTIVE
                                )[0];

                                if (activeElement) {
                                    $(activeElement).removeClass(
                                        ClassName.ACTIVE
                                    );
                                }
                            }
                        }

                        if (triggerChangeEvent) {
                            if (
                                input.hasAttribute("disabled") ||
                                rootElement.hasAttribute("disabled") ||
                                input.classList.contains("disabled") ||
                                rootElement.classList.contains("disabled")
                            ) {
                                return;
                            }

                            input.checked = !$(this._element).hasClass(
                                ClassName.ACTIVE
                            );
                            $(input).trigger("change");
                        }

                        input.focus();
                        addAriaPressed = false;
                    }
                }

                if (addAriaPressed) {
                    this._element.setAttribute(
                        "aria-pressed",
                        !$(this._element).hasClass(ClassName.ACTIVE)
                    );
                }

                if (triggerChangeEvent) {
                    $(this._element).toggleClass(ClassName.ACTIVE);
                }
            };

            _proto.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);
                this._element = null;
            }; // static

            Button._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function() {
                    var data = $(this).data(DATA_KEY);

                    if (!data) {
                        data = new Button(this);
                        $(this).data(DATA_KEY, data);
                    }

                    if (config === "toggle") {
                        data[config]();
                    }
                });
            };

            _createClass(Button, null, [
                {
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                }
            ]);

            return Button;
        })();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document)
        .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function(event) {
            event.preventDefault();
            var button = event.target;

            if (!$(button).hasClass(ClassName.BUTTON)) {
                button = $(button).closest(Selector.BUTTON);
            }

            Button._jQueryInterface.call($(button), "toggle");
        })
        .on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function(
            event
        ) {
            var button = $(event.target).closest(Selector.BUTTON)[0];
            $(button).toggleClass(
                ClassName.FOCUS,
                /^focus(in)?$/.test(event.type)
            );
        });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Button._jQueryInterface;
    $.fn[NAME].Constructor = Button;

    $.fn[NAME].noConflict = function() {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Button._jQueryInterface;
    };

    return Button;
})($);
//# sourceMappingURL=button.js.map
function _extends() {
    _extends =
        Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
    return _extends.apply(this, arguments);
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.3): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var Collapse = (function($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = "collapse";
    var VERSION = "4.0.0-beta.3";
    var DATA_KEY = "bs.collapse";
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = ".data-api";
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 600;
    var Default = {
        toggle: true,
        parent: ""
    };
    var DefaultType = {
        toggle: "boolean",
        parent: "(string|element)"
    };
    var Event = {
        SHOW: "show" + EVENT_KEY,
        SHOWN: "shown" + EVENT_KEY,
        HIDE: "hide" + EVENT_KEY,
        HIDDEN: "hidden" + EVENT_KEY,
        CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
        SHOW: "show",
        COLLAPSE: "collapse",
        COLLAPSING: "collapsing",
        COLLAPSED: "collapsed"
    };
    var Dimension = {
        WIDTH: "width",
        HEIGHT: "height"
    };
    var Selector = {
        ACTIVES: ".show, .collapsing",
        DATA_TOGGLE: '[data-toggle="collapse"]'
        /**
         * ------------------------------------------------------------------------
         * Class Definition
         * ------------------------------------------------------------------------
         */
    };

    var Collapse =
        /*#__PURE__*/
        (function() {
            function Collapse(element, config) {
                this._isTransitioning = false;
                this._element = element;
                this._config = this._getConfig(config);
                this._triggerArray = $.makeArray(
                    $(
                        '[data-toggle="collapse"][href="#' +
                            element.id +
                            '"],' +
                            ('[data-toggle="collapse"][data-target="#' +
                                element.id +
                                '"]')
                    )
                );
                var tabToggles = $(Selector.DATA_TOGGLE);

                for (var i = 0; i < tabToggles.length; i++) {
                    var elem = tabToggles[i];
                    var selector = Util.getSelectorFromElement(elem);

                    if (
                        selector !== null &&
                        $(selector).filter(element).length > 0
                    ) {
                        this._triggerArray.push(elem);
                    }
                }

                this._parent = this._config.parent ? this._getParent() : null;

                if (!this._config.parent) {
                    this._addAriaAndCollapsedClass(
                        this._element,
                        this._triggerArray
                    );
                }

                if (this._config.toggle) {
                    this.toggle();
                }
            } // getters

            var _proto = Collapse.prototype;

            // public
            _proto.toggle = function toggle() {
                if ($(this._element).hasClass(ClassName.SHOW)) {
                    this.hide();
                } else {
                    this.show();
                }
            };

            _proto.show = function show() {
                var _this = this;

                if (
                    this._isTransitioning ||
                    $(this._element).hasClass(ClassName.SHOW)
                ) {
                    return;
                }

                var actives;
                var activesData;

                if (this._parent) {
                    actives = $.makeArray(
                        $(this._parent)
                            .children()
                            .children(Selector.ACTIVES)
                    );

                    if (!actives.length) {
                        actives = null;
                    }
                }

                if (actives) {
                    activesData = $(actives).data(DATA_KEY);

                    if (activesData && activesData._isTransitioning) {
                        return;
                    }
                }

                var startEvent = $.Event(Event.SHOW);
                $(this._element).trigger(startEvent);

                if (startEvent.isDefaultPrevented()) {
                    return;
                }

                if (actives) {
                    Collapse._jQueryInterface.call($(actives), "hide");

                    if (!activesData) {
                        $(actives).data(DATA_KEY, null);
                    }
                }

                var dimension = this._getDimension();

                $(this._element)
                    .removeClass(ClassName.COLLAPSE)
                    .addClass(ClassName.COLLAPSING);
                this._element.style[dimension] = 0;

                if (this._triggerArray.length) {
                    $(this._triggerArray)
                        .removeClass(ClassName.COLLAPSED)
                        .attr("aria-expanded", true);
                }

                this.setTransitioning(true);

                var complete = function complete() {
                    $(_this._element)
                        .removeClass(ClassName.COLLAPSING)
                        .addClass(ClassName.COLLAPSE)
                        .addClass(ClassName.SHOW);
                    _this._element.style[dimension] = "";

                    _this.setTransitioning(false);

                    $(_this._element).trigger(Event.SHOWN);
                };

                if (!Util.supportsTransitionEnd()) {
                    complete();
                    return;
                }

                var capitalizedDimension =
                    dimension[0].toUpperCase() + dimension.slice(1);
                var scrollSize = "scroll" + capitalizedDimension;
                $(this._element)
                    .one(Util.TRANSITION_END, complete)
                    .emulateTransitionEnd(TRANSITION_DURATION);
                this._element.style[dimension] =
                    this._element[scrollSize] + "px";
            };

            _proto.hide = function hide() {
                var _this2 = this;

                if (
                    this._isTransitioning ||
                    !$(this._element).hasClass(ClassName.SHOW)
                ) {
                    return;
                }

                var startEvent = $.Event(Event.HIDE);
                $(this._element).trigger(startEvent);

                if (startEvent.isDefaultPrevented()) {
                    return;
                }

                var dimension = this._getDimension();

                this._element.style[dimension] =
                    this._element.getBoundingClientRect()[dimension] + "px";
                Util.reflow(this._element);
                $(this._element)
                    .addClass(ClassName.COLLAPSING)
                    .removeClass(ClassName.COLLAPSE)
                    .removeClass(ClassName.SHOW);

                if (this._triggerArray.length) {
                    for (var i = 0; i < this._triggerArray.length; i++) {
                        var trigger = this._triggerArray[i];
                        var selector = Util.getSelectorFromElement(trigger);

                        if (selector !== null) {
                            var $elem = $(selector);

                            if (!$elem.hasClass(ClassName.SHOW)) {
                                $(trigger)
                                    .addClass(ClassName.COLLAPSED)
                                    .attr("aria-expanded", false);
                            }
                        }
                    }
                }

                this.setTransitioning(true);

                var complete = function complete() {
                    _this2.setTransitioning(false);

                    $(_this2._element)
                        .removeClass(ClassName.COLLAPSING)
                        .addClass(ClassName.COLLAPSE)
                        .trigger(Event.HIDDEN);
                };

                this._element.style[dimension] = "";

                if (!Util.supportsTransitionEnd()) {
                    complete();
                    return;
                }

                $(this._element)
                    .one(Util.TRANSITION_END, complete)
                    .emulateTransitionEnd(TRANSITION_DURATION);
            };

            _proto.setTransitioning = function setTransitioning(
                isTransitioning
            ) {
                this._isTransitioning = isTransitioning;
            };

            _proto.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);
                this._config = null;
                this._parent = null;
                this._element = null;
                this._triggerArray = null;
                this._isTransitioning = null;
            }; // private

            _proto._getConfig = function _getConfig(config) {
                config = _extends({}, Default, config);
                config.toggle = Boolean(config.toggle); // coerce string values

                Util.typeCheckConfig(NAME, config, DefaultType);
                return config;
            };

            _proto._getDimension = function _getDimension() {
                var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
                return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
            };

            _proto._getParent = function _getParent() {
                var _this3 = this;

                var parent = null;

                if (Util.isElement(this._config.parent)) {
                    parent = this._config.parent; // it's a jQuery object

                    if (typeof this._config.parent.jquery !== "undefined") {
                        parent = this._config.parent[0];
                    }
                } else {
                    parent = $(this._config.parent)[0];
                }

                var selector =
                    '[data-toggle="collapse"][data-parent="' +
                    this._config.parent +
                    '"]';
                $(parent)
                    .find(selector)
                    .each(function(i, element) {
                        _this3._addAriaAndCollapsedClass(
                            Collapse._getTargetFromElement(element),
                            [element]
                        );
                    });
                return parent;
            };

            _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(
                element,
                triggerArray
            ) {
                if (element) {
                    var isOpen = $(element).hasClass(ClassName.SHOW);

                    if (triggerArray.length) {
                        $(triggerArray)
                            .toggleClass(ClassName.COLLAPSED, !isOpen)
                            .attr("aria-expanded", isOpen);
                    }
                }
            }; // static

            Collapse._getTargetFromElement = function _getTargetFromElement(
                element
            ) {
                var selector = Util.getSelectorFromElement(element);
                return selector ? $(selector)[0] : null;
            };

            Collapse._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function() {
                    var $this = $(this);
                    var data = $this.data(DATA_KEY);

                    var _config = _extends(
                        {},
                        Default,
                        $this.data(),
                        typeof config === "object" && config
                    );

                    if (!data && _config.toggle && /show|hide/.test(config)) {
                        _config.toggle = false;
                    }

                    if (!data) {
                        data = new Collapse(this, _config);
                        $this.data(DATA_KEY, data);
                    }

                    if (typeof config === "string") {
                        if (typeof data[config] === "undefined") {
                            throw new Error('No method named "' + config + '"');
                        }

                        data[config]();
                    }
                });
            };

            _createClass(Collapse, null, [
                {
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                },
                {
                    key: "Default",
                    get: function get() {
                        return Default;
                    }
                }
            ]);

            return Collapse;
        })();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
        // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
        if (event.currentTarget.tagName === "A") {
            event.preventDefault();
        }

        var $trigger = $(this);
        var selector = Util.getSelectorFromElement(this);
        $(selector).each(function() {
            var $target = $(this);
            var data = $target.data(DATA_KEY);
            var config = data ? "toggle" : $trigger.data();

            Collapse._jQueryInterface.call($target, config);
        });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Collapse._jQueryInterface;
    $.fn[NAME].Constructor = Collapse;

    $.fn[NAME].noConflict = function() {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Collapse._jQueryInterface;
    };

    return Collapse;
})($);
//# sourceMappingURL=collapse.js.map
function _extends() {
    _extends =
        Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
    return _extends.apply(this, arguments);
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.3): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var Dropdown = (function($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = "dropdown";
    var VERSION = "4.0.0-beta.3";
    var DATA_KEY = "bs.dropdown";
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = ".data-api";
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

    var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

    var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

    var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

    var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

    var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

    var REGEXP_KEYDOWN = new RegExp(
        ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE
    );
    var Event = {
        HIDE: "hide" + EVENT_KEY,
        HIDDEN: "hidden" + EVENT_KEY,
        SHOW: "show" + EVENT_KEY,
        SHOWN: "shown" + EVENT_KEY,
        CLICK: "click" + EVENT_KEY,
        CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
        KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
        KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
        DISABLED: "disabled",
        SHOW: "show",
        DROPUP: "dropup",
        DROPRIGHT: "dropright",
        DROPLEFT: "dropleft",
        MENURIGHT: "dropdown-menu-right",
        MENULEFT: "dropdown-menu-left",
        POSITION_STATIC: "position-static"
    };
    var Selector = {
        DATA_TOGGLE: '[data-toggle="dropdown"]',
        FORM_CHILD: ".dropdown form",
        MENU: ".dropdown-menu",
        NAVBAR_NAV: ".navbar-nav",
        VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)"
    };
    var AttachmentMap = {
        TOP: "top-start",
        TOPEND: "top-end",
        BOTTOM: "bottom-start",
        BOTTOMEND: "bottom-end",
        RIGHT: "right-start",
        RIGHTEND: "right-end",
        LEFT: "left-start",
        LEFTEND: "left-end"
    };
    var Default = {
        offset: 0,
        flip: true,
        boundary: "scrollParent"
    };
    var DefaultType = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)"
        /**
         * ------------------------------------------------------------------------
         * Class Definition
         * ------------------------------------------------------------------------
         */
    };

    var Dropdown =
        /*#__PURE__*/
        (function() {
            function Dropdown(element, config) {
                this._element = element;
                this._popper = null;
                this._config = this._getConfig(config);
                this._menu = this._getMenuElement();
                this._inNavbar = this._detectNavbar();

                this._addEventListeners();
            } // getters

            var _proto = Dropdown.prototype;

            // public
            _proto.toggle = function toggle() {
                if (
                    this._element.disabled ||
                    $(this._element).hasClass(ClassName.DISABLED)
                ) {
                    return;
                }

                var parent = Dropdown._getParentFromElement(this._element);

                var isActive = $(this._menu).hasClass(ClassName.SHOW);

                Dropdown._clearMenus();

                if (isActive) {
                    return;
                }

                var relatedTarget = {
                    relatedTarget: this._element
                };
                var showEvent = $.Event(Event.SHOW, relatedTarget);
                $(parent).trigger(showEvent);

                if (showEvent.isDefaultPrevented()) {
                    return;
                } // Disable totally Popper.js for Dropdown in Navbar

                if (!this._inNavbar) {
                    /**
                     * Check for Popper dependency
                     * Popper - https://popper.js.org
                     */
                    if (typeof Popper === "undefined") {
                        throw new Error(
                            "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                        );
                    }

                    var element = this._element; // for dropup with alignment we use the parent as popper container

                    if ($(parent).hasClass(ClassName.DROPUP)) {
                        if (
                            $(this._menu).hasClass(ClassName.MENULEFT) ||
                            $(this._menu).hasClass(ClassName.MENURIGHT)
                        ) {
                            element = parent;
                        }
                    } // If boundary is not `scrollParent`, then set position to `static`
                    // to allow the menu to "escape" the scroll parent's boundaries
                    // https://github.com/twbs/bootstrap/issues/24251

                    if (this._config.boundary !== "scrollParent") {
                        $(parent).addClass(ClassName.POSITION_STATIC);
                    }

                    this._popper = new Popper(
                        element,
                        this._menu,
                        this._getPopperConfig()
                    );
                } // if this is a touch-enabled device we add extra
                // empty mouseover listeners to the body's immediate children;
                // only needed because of broken event delegation on iOS
                // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

                if (
                    "ontouchstart" in document.documentElement &&
                    !$(parent).closest(Selector.NAVBAR_NAV).length
                ) {
                    $("body")
                        .children()
                        .on("mouseover", null, $.noop);
                }

                this._element.focus();

                this._element.setAttribute("aria-expanded", true);

                $(this._menu).toggleClass(ClassName.SHOW);
                $(parent)
                    .toggleClass(ClassName.SHOW)
                    .trigger($.Event(Event.SHOWN, relatedTarget));
            };

            _proto.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);
                $(this._element).off(EVENT_KEY);
                this._element = null;
                this._menu = null;

                if (this._popper !== null) {
                    this._popper.destroy();

                    this._popper = null;
                }
            };

            _proto.update = function update() {
                this._inNavbar = this._detectNavbar();

                if (this._popper !== null) {
                    this._popper.scheduleUpdate();
                }
            }; // private

            _proto._addEventListeners = function _addEventListeners() {
                var _this = this;

                $(this._element).on(Event.CLICK, function(event) {
                    event.preventDefault();
                    event.stopPropagation();

                    _this.toggle();
                });
            };

            _proto._getConfig = function _getConfig(config) {
                config = _extends(
                    {},
                    this.constructor.Default,
                    $(this._element).data(),
                    config
                );
                Util.typeCheckConfig(
                    NAME,
                    config,
                    this.constructor.DefaultType
                );
                return config;
            };

            _proto._getMenuElement = function _getMenuElement() {
                if (!this._menu) {
                    var parent = Dropdown._getParentFromElement(this._element);

                    this._menu = $(parent).find(Selector.MENU)[0];
                }

                return this._menu;
            };

            _proto._getPlacement = function _getPlacement() {
                var $parentDropdown = $(this._element).parent();
                var placement = AttachmentMap.BOTTOM; // Handle dropup

                if ($parentDropdown.hasClass(ClassName.DROPUP)) {
                    placement = AttachmentMap.TOP;

                    if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
                        placement = AttachmentMap.TOPEND;
                    }
                } else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
                    placement = AttachmentMap.RIGHT;
                } else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
                    placement = AttachmentMap.LEFT;
                } else if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
                    placement = AttachmentMap.BOTTOMEND;
                }

                return placement;
            };

            _proto._detectNavbar = function _detectNavbar() {
                return $(this._element).closest(".navbar").length > 0;
            };

            _proto._getPopperConfig = function _getPopperConfig() {
                var _this2 = this;

                var offsetConf = {};

                if (typeof this._config.offset === "function") {
                    offsetConf.fn = function(data) {
                        data.offsets = _extends(
                            {},
                            data.offsets,
                            _this2._config.offset(data.offsets) || {}
                        );
                        return data;
                    };
                } else {
                    offsetConf.offset = this._config.offset;
                }

                var popperConfig = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: offsetConf,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return popperConfig;
            }; // static

            Dropdown._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function() {
                    var data = $(this).data(DATA_KEY);

                    var _config = typeof config === "object" ? config : null;

                    if (!data) {
                        data = new Dropdown(this, _config);
                        $(this).data(DATA_KEY, data);
                    }

                    if (typeof config === "string") {
                        if (typeof data[config] === "undefined") {
                            throw new Error('No method named "' + config + '"');
                        }

                        data[config]();
                    }
                });
            };

            Dropdown._clearMenus = function _clearMenus(event) {
                if (
                    event &&
                    (event.which === RIGHT_MOUSE_BUTTON_WHICH ||
                        (event.type === "keyup" && event.which !== TAB_KEYCODE))
                ) {
                    return;
                }

                var toggles = $.makeArray($(Selector.DATA_TOGGLE));

                for (var i = 0; i < toggles.length; i++) {
                    var parent = Dropdown._getParentFromElement(toggles[i]);

                    var context = $(toggles[i]).data(DATA_KEY);
                    var relatedTarget = {
                        relatedTarget: toggles[i]
                    };

                    if (!context) {
                        continue;
                    }

                    var dropdownMenu = context._menu;

                    if (!$(parent).hasClass(ClassName.SHOW)) {
                        continue;
                    }

                    if (
                        event &&
                        ((event.type === "click" &&
                            /input|textarea/i.test(event.target.tagName)) ||
                            (event.type === "keyup" &&
                                event.which === TAB_KEYCODE)) &&
                        $.contains(parent, event.target)
                    ) {
                        continue;
                    }

                    var hideEvent = $.Event(Event.HIDE, relatedTarget);
                    $(parent).trigger(hideEvent);

                    if (hideEvent.isDefaultPrevented()) {
                        continue;
                    } // if this is a touch-enabled device we remove the extra
                    // empty mouseover listeners we added for iOS support

                    if ("ontouchstart" in document.documentElement) {
                        $("body")
                            .children()
                            .off("mouseover", null, $.noop);
                    }

                    toggles[i].setAttribute("aria-expanded", "false");
                    $(dropdownMenu).removeClass(ClassName.SHOW);
                    $(parent)
                        .removeClass(ClassName.SHOW)
                        .trigger($.Event(Event.HIDDEN, relatedTarget));
                }
            };

            Dropdown._getParentFromElement = function _getParentFromElement(
                element
            ) {
                var parent;
                var selector = Util.getSelectorFromElement(element);

                if (selector) {
                    parent = $(selector)[0];
                }

                return parent || element.parentNode;
            };

            Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(
                event
            ) {
                // If not input/textarea:
                //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
                // If input/textarea:
                //  - If space key => not a dropdown command
                //  - If key is other than escape
                //    - If key is not up or down => not a dropdown command
                //    - If trigger inside the menu => not a dropdown command
                if (
                    /input|textarea/i.test(event.target.tagName)
                        ? event.which === SPACE_KEYCODE ||
                          (event.which !== ESCAPE_KEYCODE &&
                              ((event.which !== ARROW_DOWN_KEYCODE &&
                                  event.which !== ARROW_UP_KEYCODE) ||
                                  $(event.target).closest(Selector.MENU)
                                      .length))
                        : !REGEXP_KEYDOWN.test(event.which)
                ) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();

                if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
                    return;
                }

                var parent = Dropdown._getParentFromElement(this);

                var isActive = $(parent).hasClass(ClassName.SHOW);

                if (
                    (!isActive &&
                        (event.which !== ESCAPE_KEYCODE ||
                            event.which !== SPACE_KEYCODE)) ||
                    (isActive &&
                        (event.which === ESCAPE_KEYCODE ||
                            event.which === SPACE_KEYCODE))
                ) {
                    if (event.which === ESCAPE_KEYCODE) {
                        var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
                        $(toggle).trigger("focus");
                    }

                    $(this).trigger("click");
                    return;
                }

                var items = $(parent)
                    .find(Selector.VISIBLE_ITEMS)
                    .get();

                if (!items.length) {
                    return;
                }

                var index = items.indexOf(event.target);

                if (event.which === ARROW_UP_KEYCODE && index > 0) {
                    // up
                    index--;
                }

                if (
                    event.which === ARROW_DOWN_KEYCODE &&
                    index < items.length - 1
                ) {
                    // down
                    index++;
                }

                if (index < 0) {
                    index = 0;
                }

                items[index].focus();
            };

            _createClass(Dropdown, null, [
                {
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                },
                {
                    key: "Default",
                    get: function get() {
                        return Default;
                    }
                },
                {
                    key: "DefaultType",
                    get: function get() {
                        return DefaultType;
                    }
                }
            ]);

            return Dropdown;
        })();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document)
        .on(
            Event.KEYDOWN_DATA_API,
            Selector.DATA_TOGGLE,
            Dropdown._dataApiKeydownHandler
        )
        .on(
            Event.KEYDOWN_DATA_API,
            Selector.MENU,
            Dropdown._dataApiKeydownHandler
        )
        .on(
            Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API,
            Dropdown._clearMenus
        )
        .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
            event.preventDefault();
            event.stopPropagation();

            Dropdown._jQueryInterface.call($(this), "toggle");
        })
        .on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function(e) {
            e.stopPropagation();
        });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Dropdown._jQueryInterface;
    $.fn[NAME].Constructor = Dropdown;

    $.fn[NAME].noConflict = function() {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Dropdown._jQueryInterface;
    };

    return Dropdown;
})($, Popper);
//# sourceMappingURL=dropdown.js.map
function _extends() {
    _extends =
        Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
    return _extends.apply(this, arguments);
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var Modal = (function($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = "modal";
    var VERSION = "4.0.0";
    var DATA_KEY = "bs.modal";
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = ".data-api";
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 300;
    var BACKDROP_TRANSITION_DURATION = 150;
    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

    var Default = {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: true
    };
    var DefaultType = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    };
    var Event = {
        HIDE: "hide" + EVENT_KEY,
        HIDDEN: "hidden" + EVENT_KEY,
        SHOW: "show" + EVENT_KEY,
        SHOWN: "shown" + EVENT_KEY,
        FOCUSIN: "focusin" + EVENT_KEY,
        RESIZE: "resize" + EVENT_KEY,
        CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
        KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
        MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
        CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
        SCROLLBAR_MEASURER: "modal-scrollbar-measure",
        BACKDROP: "modal-backdrop",
        OPEN: "modal-open",
        FADE: "fade",
        SHOW: "show"
    };
    var Selector = {
        DIALOG: ".modal-dialog",
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        STICKY_CONTENT: ".sticky-top",
        NAVBAR_TOGGLER: ".navbar-toggler"
        /**
         * ------------------------------------------------------------------------
         * Class Definition
         * ------------------------------------------------------------------------
         */
    };

    var Modal =
        /*#__PURE__*/
        (function() {
            function Modal(element, config) {
                this._config = this._getConfig(config);
                this._element = element;
                this._dialog = $(element).find(Selector.DIALOG)[0];
                this._backdrop = null;
                this._isShown = false;
                this._isBodyOverflowing = false;
                this._ignoreBackdropClick = false;
                this._originalBodyPadding = 0;
                this._scrollbarWidth = 0;
            } // Getters

            var _proto = Modal.prototype;

            // Public
            _proto.toggle = function toggle(relatedTarget) {
                return this._isShown ? this.hide() : this.show(relatedTarget);
            };

            _proto.show = function show(relatedTarget) {
                var _this = this;

                if (this._isTransitioning || this._isShown) {
                    return;
                }

                if (
                    Util.supportsTransitionEnd() &&
                    $(this._element).hasClass(ClassName.FADE)
                ) {
                    this._isTransitioning = true;
                }

                var showEvent = $.Event(Event.SHOW, {
                    relatedTarget: relatedTarget
                });
                $(this._element).trigger(showEvent);

                if (this._isShown || showEvent.isDefaultPrevented()) {
                    return;
                }

                this._isShown = true;

                this._checkScrollbar();

                this._setScrollbar();

                this._adjustDialog();

                $(document.body).addClass(ClassName.OPEN);

                this._setEscapeEvent();

                this._setResizeEvent();

                $(this._element).on(
                    Event.CLICK_DISMISS,
                    Selector.DATA_DISMISS,
                    function(event) {
                        return _this.hide(event);
                    }
                );
                $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function() {
                    $(_this._element).one(Event.MOUSEUP_DISMISS, function(
                        event
                    ) {
                        if ($(event.target).is(_this._element)) {
                            _this._ignoreBackdropClick = true;
                        }
                    });
                });

                this._showBackdrop(function() {
                    return _this._showElement(relatedTarget);
                });
            };

            _proto.hide = function hide(event) {
                var _this2 = this;

                if (event) {
                    event.preventDefault();
                }

                if (this._isTransitioning || !this._isShown) {
                    return;
                }

                var hideEvent = $.Event(Event.HIDE);
                $(this._element).trigger(hideEvent);

                if (!this._isShown || hideEvent.isDefaultPrevented()) {
                    return;
                }

                this._isShown = false;
                var transition =
                    Util.supportsTransitionEnd() &&
                    $(this._element).hasClass(ClassName.FADE);

                if (transition) {
                    this._isTransitioning = true;
                }

                this._setEscapeEvent();

                this._setResizeEvent();

                $(document).off(Event.FOCUSIN);
                $(this._element).removeClass(ClassName.SHOW);
                $(this._element).off(Event.CLICK_DISMISS);
                $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

                if (transition) {
                    $(this._element)
                        .one(Util.TRANSITION_END, function(event) {
                            return _this2._hideModal(event);
                        })
                        .emulateTransitionEnd(TRANSITION_DURATION);
                } else {
                    this._hideModal();
                }
            };

            _proto.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);
                $(window, document, this._element, this._backdrop).off(
                    EVENT_KEY
                );
                this._config = null;
                this._element = null;
                this._dialog = null;
                this._backdrop = null;
                this._isShown = null;
                this._isBodyOverflowing = null;
                this._ignoreBackdropClick = null;
                this._scrollbarWidth = null;
            };

            _proto.handleUpdate = function handleUpdate() {
                this._adjustDialog();
            }; // Private

            _proto._getConfig = function _getConfig(config) {
                config = _extends({}, Default, config);
                Util.typeCheckConfig(NAME, config, DefaultType);
                return config;
            };

            _proto._showElement = function _showElement(relatedTarget) {
                var _this3 = this;

                var transition =
                    Util.supportsTransitionEnd() &&
                    $(this._element).hasClass(ClassName.FADE);

                if (
                    !this._element.parentNode ||
                    this._element.parentNode.nodeType !== Node.ELEMENT_NODE
                ) {
                    // Don't move modal's DOM position
                    document.body.appendChild(this._element);
                }

                this._element.style.display = "block";

                this._element.removeAttribute("aria-hidden");

                this._element.scrollTop = 0;

                if (transition) {
                    Util.reflow(this._element);
                }

                $(this._element).addClass(ClassName.SHOW);

                if (this._config.focus) {
                    this._enforceFocus();
                }

                var shownEvent = $.Event(Event.SHOWN, {
                    relatedTarget: relatedTarget
                });

                var transitionComplete = function transitionComplete() {
                    if (_this3._config.focus) {
                        _this3._element.focus();
                    }

                    _this3._isTransitioning = false;
                    $(_this3._element).trigger(shownEvent);
                };

                if (transition) {
                    $(this._dialog)
                        .one(Util.TRANSITION_END, transitionComplete)
                        .emulateTransitionEnd(TRANSITION_DURATION);
                } else {
                    transitionComplete();
                }
            };

            _proto._enforceFocus = function _enforceFocus() {
                var _this4 = this;

                $(document)
                    .off(Event.FOCUSIN) // Guard against infinite focus loop
                    .on(Event.FOCUSIN, function(event) {
                        if (
                            document !== event.target &&
                            _this4._element !== event.target &&
                            $(_this4._element).has(event.target).length === 0
                        ) {
                            _this4._element.focus();
                        }
                    });
            };

            _proto._setEscapeEvent = function _setEscapeEvent() {
                var _this5 = this;

                if (this._isShown && this._config.keyboard) {
                    $(this._element).on(Event.KEYDOWN_DISMISS, function(event) {
                        if (event.which === ESCAPE_KEYCODE) {
                            event.preventDefault();

                            _this5.hide();
                        }
                    });
                } else if (!this._isShown) {
                    $(this._element).off(Event.KEYDOWN_DISMISS);
                }
            };

            _proto._setResizeEvent = function _setResizeEvent() {
                var _this6 = this;

                if (this._isShown) {
                    $(window).on(Event.RESIZE, function(event) {
                        return _this6.handleUpdate(event);
                    });
                } else {
                    $(window).off(Event.RESIZE);
                }
            };

            _proto._hideModal = function _hideModal() {
                var _this7 = this;

                this._element.style.display = "none";

                this._element.setAttribute("aria-hidden", true);

                this._isTransitioning = false;

                this._showBackdrop(function() {
                    $(document.body).removeClass(ClassName.OPEN);

                    _this7._resetAdjustments();

                    _this7._resetScrollbar();

                    $(_this7._element).trigger(Event.HIDDEN);
                });
            };

            _proto._removeBackdrop = function _removeBackdrop() {
                if (this._backdrop) {
                    $(this._backdrop).remove();
                    this._backdrop = null;
                }
            };

            _proto._showBackdrop = function _showBackdrop(callback) {
                var _this8 = this;

                var animate = $(this._element).hasClass(ClassName.FADE)
                    ? ClassName.FADE
                    : "";

                if (this._isShown && this._config.backdrop) {
                    var doAnimate = Util.supportsTransitionEnd() && animate;
                    this._backdrop = document.createElement("div");
                    this._backdrop.className = ClassName.BACKDROP;

                    if (animate) {
                        $(this._backdrop).addClass(animate);
                    }

                    $(this._backdrop).appendTo(document.body);
                    $(this._element).on(Event.CLICK_DISMISS, function(event) {
                        if (_this8._ignoreBackdropClick) {
                            _this8._ignoreBackdropClick = false;
                            return;
                        }

                        if (event.target !== event.currentTarget) {
                            return;
                        }

                        if (_this8._config.backdrop === "static") {
                            _this8._element.focus();
                        } else {
                            _this8.hide();
                        }
                    });

                    if (doAnimate) {
                        Util.reflow(this._backdrop);
                    }

                    $(this._backdrop).addClass(ClassName.SHOW);

                    if (!callback) {
                        return;
                    }

                    if (!doAnimate) {
                        callback();
                        return;
                    }

                    $(this._backdrop)
                        .one(Util.TRANSITION_END, callback)
                        .emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
                } else if (!this._isShown && this._backdrop) {
                    $(this._backdrop).removeClass(ClassName.SHOW);

                    var callbackRemove = function callbackRemove() {
                        _this8._removeBackdrop();

                        if (callback) {
                            callback();
                        }
                    };

                    if (
                        Util.supportsTransitionEnd() &&
                        $(this._element).hasClass(ClassName.FADE)
                    ) {
                        $(this._backdrop)
                            .one(Util.TRANSITION_END, callbackRemove)
                            .emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
                    } else {
                        callbackRemove();
                    }
                } else if (callback) {
                    callback();
                }
            }; // ----------------------------------------------------------------------
            // the following methods are used to handle overflowing modals
            // todo (fat): these should probably be refactored out of modal.js
            // ----------------------------------------------------------------------

            _proto._adjustDialog = function _adjustDialog() {
                var isModalOverflowing =
                    this._element.scrollHeight >
                    document.documentElement.clientHeight;

                if (!this._isBodyOverflowing && isModalOverflowing) {
                    this._element.style.paddingLeft =
                        this._scrollbarWidth + "px";
                }

                if (this._isBodyOverflowing && !isModalOverflowing) {
                    this._element.style.paddingRight =
                        this._scrollbarWidth + "px";
                }
            };

            _proto._resetAdjustments = function _resetAdjustments() {
                this._element.style.paddingLeft = "";
                this._element.style.paddingRight = "";
            };

            _proto._checkScrollbar = function _checkScrollbar() {
                var rect = document.body.getBoundingClientRect();
                this._isBodyOverflowing =
                    rect.left + rect.right < window.innerWidth;
                this._scrollbarWidth = this._getScrollbarWidth();
            };

            _proto._setScrollbar = function _setScrollbar() {
                var _this9 = this;

                if (this._isBodyOverflowing) {
                    // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
                    //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
                    // Adjust fixed content padding
                    $(Selector.FIXED_CONTENT).each(function(index, element) {
                        var actualPadding = $(element)[0].style.paddingRight;
                        var calculatedPadding = $(element).css("padding-right");
                        $(element)
                            .data("padding-right", actualPadding)
                            .css(
                                "padding-right",
                                parseFloat(calculatedPadding) +
                                    _this9._scrollbarWidth +
                                    "px"
                            );
                    }); // Adjust sticky content margin

                    $(Selector.STICKY_CONTENT).each(function(index, element) {
                        var actualMargin = $(element)[0].style.marginRight;
                        var calculatedMargin = $(element).css("margin-right");
                        $(element)
                            .data("margin-right", actualMargin)
                            .css(
                                "margin-right",
                                parseFloat(calculatedMargin) -
                                    _this9._scrollbarWidth +
                                    "px"
                            );
                    }); // Adjust navbar-toggler margin

                    $(Selector.NAVBAR_TOGGLER).each(function(index, element) {
                        var actualMargin = $(element)[0].style.marginRight;
                        var calculatedMargin = $(element).css("margin-right");
                        $(element)
                            .data("margin-right", actualMargin)
                            .css(
                                "margin-right",
                                parseFloat(calculatedMargin) +
                                    _this9._scrollbarWidth +
                                    "px"
                            );
                    }); // Adjust body padding

                    var actualPadding = document.body.style.paddingRight;
                    var calculatedPadding = $("body").css("padding-right");
                    $("body")
                        .data("padding-right", actualPadding)
                        .css(
                            "padding-right",
                            parseFloat(calculatedPadding) +
                                this._scrollbarWidth +
                                "px"
                        );
                }
            };

            _proto._resetScrollbar = function _resetScrollbar() {
                // Restore fixed content padding
                $(Selector.FIXED_CONTENT).each(function(index, element) {
                    var padding = $(element).data("padding-right");

                    if (typeof padding !== "undefined") {
                        $(element)
                            .css("padding-right", padding)
                            .removeData("padding-right");
                    }
                }); // Restore sticky content and navbar-toggler margin

                $(
                    Selector.STICKY_CONTENT + ", " + Selector.NAVBAR_TOGGLER
                ).each(function(index, element) {
                    var margin = $(element).data("margin-right");

                    if (typeof margin !== "undefined") {
                        $(element)
                            .css("margin-right", margin)
                            .removeData("margin-right");
                    }
                }); // Restore body padding

                var padding = $("body").data("padding-right");

                if (typeof padding !== "undefined") {
                    $("body")
                        .css("padding-right", padding)
                        .removeData("padding-right");
                }
            };

            _proto._getScrollbarWidth = function _getScrollbarWidth() {
                // thx d.walsh
                var scrollDiv = document.createElement("div");
                scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
                document.body.appendChild(scrollDiv);
                var scrollbarWidth =
                    scrollDiv.getBoundingClientRect().width -
                    scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
                return scrollbarWidth;
            }; // Static

            Modal._jQueryInterface = function _jQueryInterface(
                config,
                relatedTarget
            ) {
                return this.each(function() {
                    var data = $(this).data(DATA_KEY);

                    var _config = _extends(
                        {},
                        Modal.Default,
                        $(this).data(),
                        typeof config === "object" && config
                    );

                    if (!data) {
                        data = new Modal(this, _config);
                        $(this).data(DATA_KEY, data);
                    }

                    if (typeof config === "string") {
                        if (typeof data[config] === "undefined") {
                            throw new TypeError(
                                'No method named "' + config + '"'
                            );
                        }

                        data[config](relatedTarget);
                    } else if (_config.show) {
                        data.show(relatedTarget);
                    }
                });
            };

            _createClass(Modal, null, [
                {
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                },
                {
                    key: "Default",
                    get: function get() {
                        return Default;
                    }
                }
            ]);

            return Modal;
        })();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
        var _this10 = this;

        var target;
        var selector = Util.getSelectorFromElement(this);

        if (selector) {
            target = $(selector)[0];
        }

        var config = $(target).data(DATA_KEY)
            ? "toggle"
            : _extends({}, $(target).data(), $(this).data());

        if (this.tagName === "A" || this.tagName === "AREA") {
            event.preventDefault();
        }

        var $target = $(target).one(Event.SHOW, function(showEvent) {
            if (showEvent.isDefaultPrevented()) {
                // Only register focus restorer if modal will actually get shown
                return;
            }

            $target.one(Event.HIDDEN, function() {
                if ($(_this10).is(":visible")) {
                    _this10.focus();
                }
            });
        });

        Modal._jQueryInterface.call($(target), config, this);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Modal._jQueryInterface;
    $.fn[NAME].Constructor = Modal;

    $.fn[NAME].noConflict = function() {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Modal._jQueryInterface;
    };

    return Modal;
})($);
//# sourceMappingURL=modal.js.map
function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.3): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var Tab = (function($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = "tab";
    var VERSION = "4.0.0-beta.3";
    var DATA_KEY = "bs.tab";
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = ".data-api";
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 150;
    var Event = {
        HIDE: "hide" + EVENT_KEY,
        HIDDEN: "hidden" + EVENT_KEY,
        SHOW: "show" + EVENT_KEY,
        SHOWN: "shown" + EVENT_KEY,
        CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
        DROPDOWN_MENU: "dropdown-menu",
        ACTIVE: "active",
        DISABLED: "disabled",
        FADE: "fade",
        SHOW: "show"
    };
    var Selector = {
        DROPDOWN: ".dropdown",
        NAV_LIST_GROUP: ".nav, .list-group",
        ACTIVE: ".active",
        ACTIVE_UL: "> li > .active",
        DATA_TOGGLE:
            '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        DROPDOWN_TOGGLE: ".dropdown-toggle",
        DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
        /**
         * ------------------------------------------------------------------------
         * Class Definition
         * ------------------------------------------------------------------------
         */
    };

    var Tab =
        /*#__PURE__*/
        (function() {
            function Tab(element) {
                this._element = element;
            } // getters

            var _proto = Tab.prototype;

            // public
            _proto.show = function show() {
                var _this = this;

                if (
                    (this._element.parentNode &&
                        this._element.parentNode.nodeType ===
                            Node.ELEMENT_NODE &&
                        $(this._element).hasClass(ClassName.ACTIVE)) ||
                    $(this._element).hasClass(ClassName.DISABLED)
                ) {
                    return;
                }

                var target;
                var previous;
                var listElement = $(this._element).closest(
                    Selector.NAV_LIST_GROUP
                )[0];
                var selector = Util.getSelectorFromElement(this._element);

                if (listElement) {
                    var itemSelector =
                        listElement.nodeName === "UL"
                            ? Selector.ACTIVE_UL
                            : Selector.ACTIVE;
                    previous = $.makeArray($(listElement).find(itemSelector));
                    previous = previous[previous.length - 1];
                }

                var hideEvent = $.Event(Event.HIDE, {
                    relatedTarget: this._element
                });
                var showEvent = $.Event(Event.SHOW, {
                    relatedTarget: previous
                });

                if (previous) {
                    $(previous).trigger(hideEvent);
                }

                $(this._element).trigger(showEvent);

                if (
                    showEvent.isDefaultPrevented() ||
                    hideEvent.isDefaultPrevented()
                ) {
                    return;
                }

                if (selector) {
                    target = $(selector)[0];
                }

                this._activate(this._element, listElement);

                var complete = function complete() {
                    var hiddenEvent = $.Event(Event.HIDDEN, {
                        relatedTarget: _this._element
                    });
                    var shownEvent = $.Event(Event.SHOWN, {
                        relatedTarget: previous
                    });
                    $(previous).trigger(hiddenEvent);
                    $(_this._element).trigger(shownEvent);
                };

                if (target) {
                    this._activate(target, target.parentNode, complete);
                } else {
                    complete();
                }
            };

            _proto.dispose = function dispose() {
                $.removeData(this._element, DATA_KEY);
                this._element = null;
            }; // private

            _proto._activate = function _activate(
                element,
                container,
                callback
            ) {
                var _this2 = this;

                var activeElements;

                if (container.nodeName === "UL") {
                    activeElements = $(container).find(Selector.ACTIVE_UL);
                } else {
                    activeElements = $(container).children(Selector.ACTIVE);
                }

                var active = activeElements[0];
                var isTransitioning =
                    callback &&
                    Util.supportsTransitionEnd() &&
                    active &&
                    $(active).hasClass(ClassName.FADE);

                var complete = function complete() {
                    return _this2._transitionComplete(
                        element,
                        active,
                        callback
                    );
                };

                if (active && isTransitioning) {
                    $(active)
                        .one(Util.TRANSITION_END, complete)
                        .emulateTransitionEnd(TRANSITION_DURATION);
                } else {
                    complete();
                }
            };

            _proto._transitionComplete = function _transitionComplete(
                element,
                active,
                callback
            ) {
                if (active) {
                    $(active).removeClass(
                        ClassName.SHOW + " " + ClassName.ACTIVE
                    );
                    var dropdownChild = $(active.parentNode).find(
                        Selector.DROPDOWN_ACTIVE_CHILD
                    )[0];

                    if (dropdownChild) {
                        $(dropdownChild).removeClass(ClassName.ACTIVE);
                    }

                    if (active.getAttribute("role") === "tab") {
                        active.setAttribute("aria-selected", false);
                    }
                }

                $(element).addClass(ClassName.ACTIVE);

                if (element.getAttribute("role") === "tab") {
                    element.setAttribute("aria-selected", true);
                }

                Util.reflow(element);
                $(element).addClass(ClassName.SHOW);

                if (
                    element.parentNode &&
                    $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)
                ) {
                    var dropdownElement = $(element).closest(
                        Selector.DROPDOWN
                    )[0];

                    if (dropdownElement) {
                        $(dropdownElement)
                            .find(Selector.DROPDOWN_TOGGLE)
                            .addClass(ClassName.ACTIVE);
                    }

                    element.setAttribute("aria-expanded", true);
                }

                if (callback) {
                    callback();
                }
            }; // static

            Tab._jQueryInterface = function _jQueryInterface(config) {
                return this.each(function() {
                    var $this = $(this);
                    var data = $this.data(DATA_KEY);

                    if (!data) {
                        data = new Tab(this);
                        $this.data(DATA_KEY, data);
                    }

                    if (typeof config === "string") {
                        if (typeof data[config] === "undefined") {
                            throw new Error('No method named "' + config + '"');
                        }

                        data[config]();
                    }
                });
            };

            _createClass(Tab, null, [
                {
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                }
            ]);

            return Tab;
        })();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
        event.preventDefault();

        Tab._jQueryInterface.call($(this), "show");
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Tab._jQueryInterface;
    $.fn[NAME].Constructor = Tab;

    $.fn[NAME].noConflict = function() {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return Tab._jQueryInterface;
    };

    return Tab;
})($);
//# sourceMappingURL=tab.js.map
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.3): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var Util = (function($) {
    /**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */
    var transition = false;
    var MAX_UID = 1000000; // shoutout AngusCroll (https://goo.gl/pxwQGp)

    function toType(obj) {
        return {}.toString
            .call(obj)
            .match(/\s([a-zA-Z]+)/)[1]
            .toLowerCase();
    }

    function getSpecialTransitionEndEvent() {
        return {
            bindType: transition.end,
            delegateType: transition.end,
            handle: function handle(event) {
                if ($(event.target).is(this)) {
                    return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
                }

                return undefined; // eslint-disable-line no-undefined
            }
        };
    }

    function transitionEndTest() {
        if (window.QUnit) {
            return false;
        }

        return {
            end: "transitionend"
        };
    }

    function transitionEndEmulator(duration) {
        var _this = this;

        var called = false;
        $(this).one(Util.TRANSITION_END, function() {
            called = true;
        });
        setTimeout(function() {
            if (!called) {
                Util.triggerTransitionEnd(_this);
            }
        }, duration);
        return this;
    }

    function setTransitionEndSupport() {
        transition = transitionEndTest();
        $.fn.emulateTransitionEnd = transitionEndEmulator;

        if (Util.supportsTransitionEnd()) {
            $.event.special[
                Util.TRANSITION_END
            ] = getSpecialTransitionEndEvent();
        }
    }

    function escapeId(selector) {
        // we escape IDs in case of special selectors (selector = '#myId:something')
        // $.escapeSelector does not exist in jQuery < 3
        selector =
            typeof $.escapeSelector === "function"
                ? $.escapeSelector(selector).substr(1)
                : selector.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1");
        return selector;
    }
    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */

    var Util = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function getUID(prefix) {
            do {
                // eslint-disable-next-line no-bitwise
                prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
            } while (document.getElementById(prefix));

            return prefix;
        },
        getSelectorFromElement: function getSelectorFromElement(element) {
            var selector = element.getAttribute("data-target");

            if (!selector || selector === "#") {
                selector = element.getAttribute("href") || "";
            } // if it's an ID

            if (selector.charAt(0) === "#") {
                selector = escapeId(selector);
            }

            try {
                var $selector = $(document).find(selector);
                return $selector.length > 0 ? selector : null;
            } catch (error) {
                return null;
            }
        },
        reflow: function reflow(element) {
            return element.offsetHeight;
        },
        triggerTransitionEnd: function triggerTransitionEnd(element) {
            $(element).trigger(transition.end);
        },
        supportsTransitionEnd: function supportsTransitionEnd() {
            return Boolean(transition);
        },
        isElement: function isElement(obj) {
            return (obj[0] || obj).nodeType;
        },
        typeCheckConfig: function typeCheckConfig(
            componentName,
            config,
            configTypes
        ) {
            for (var property in configTypes) {
                if (
                    Object.prototype.hasOwnProperty.call(configTypes, property)
                ) {
                    var expectedTypes = configTypes[property];
                    var value = config[property];
                    var valueType =
                        value && Util.isElement(value)
                            ? "element"
                            : toType(value);

                    if (!new RegExp(expectedTypes).test(valueType)) {
                        throw new Error(
                            componentName.toUpperCase() +
                                ": " +
                                ('Option "' +
                                    property +
                                    '" provided type "' +
                                    valueType +
                                    '" ') +
                                ('but expected type "' + expectedTypes + '".')
                        );
                    }
                }
            }
        }
    };
    setTransitionEndSupport();
    return Util;
})($);
//# sourceMappingURL=util.js.map
(function($) {
    "use strict";
    //Character Counter

    var characterCounter = function($inp) {
        this.$inp = $inp;
        this.maxlength = parseInt($inp.attr("maxlength"));
        this.init();
        this.remain = $inp.data("remain") || false;
        var self = this;
        $inp.on("keyup input change", function(e) {
            self.update();
        });
    };

    characterCounter.prototype.init = function() {
        var parent = this.$inp.parent().addClass("has-counter");
        var counterT =
            '<div class="counter" persian>' +
            this.maxlength +
            "/<span></span></div>";
        var counter = parent.find(".counter");
        this.counter = counter.length
            ? counter
            : parent.append(counterT).find(".counter");
        this.update();
    };

    characterCounter.prototype.update = function() {
        console.log(this.$inp.val());
        var vallength = this.$inp.val().length,
            remaining = this.remain ? this.maxlength - vallength : vallength;
        this.counter.find("span").text(remaining);
        this.counter.trigger("contentChanged");
    };

    $(document).ready(function($) {
        $("textarea*[maxlength]").each(function(index, el) {
            $(this).data("characterCounter", new characterCounter($(this)));
        });
    });
})(jQuery);
(function($) {
    "use strict";

    var CloneFields = function(el) {
        this.$el = $(el);
        this.btn = this.$el.data("cf_btn") || ".cf-btn";
        this.base = this.$el.data("cf_base") || ".cf-base";
        this.ri = this.$el.data("cf_ri");
        this.index = this.$el.find(this.base).length;

        this.update();
        this.init();
    };

    CloneFields.prototype.init = function() {
        var self = this;
        this.$el.on("click", this.btn, function(e) {
            e.preventDefault();
            var $parent = $(this).parents(self.base);
            if ($parent.hasClass("cf-add")) self.clone($parent);
            else $parent.remove();
        });
    };

    CloneFields.prototype.update = function() {
        this.$el
            .find(this.base)
            .removeClass("cf-add")
            .last()
            .addClass("cf-add");
    };

    CloneFields.prototype.clone = function(parent) {
        var html = parent
            .wrap("<p/>")
            .parent()
            .html();
        parent.unwrap();
        if (this.ri) {
            var re = RegExp(this.ri + "\\[[0-9]*", "g");
            html = html.replace(re, this.ri + "[" + this.index);
        }
        parent
            .parent()
            .append(html)
            .children()
            .last()
            .find(":input")
            .val("");
        this.index++;
        this.update();
    };
    $(document).ready(function($) {
        $(".clone-fields").each(function(index, el) {
            $(this).data("clonefield", new CloneFields(this));
        });
    });
})(jQuery);
/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module unless amdModuleId is set
        define([], function() {
            return (root["EasyPieChart"] = factory());
        });
    } else if (typeof exports === "object") {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        root["EasyPieChart"] = factory();
    }
})(this, function() {
    /**
     * Renderer to render the chart on a canvas object
     * @param {DOMElement} el      DOM element to host the canvas (root of the plugin)
     * @param {object}     options options object of the plugin
     */
    var CanvasRenderer = function(el, options) {
        var cachedBackground;
        var canvas = document.createElement("canvas");

        el.appendChild(canvas);

        if (typeof G_vmlCanvasManager === "object") {
            G_vmlCanvasManager.initElement(canvas);
        }

        var ctx = canvas.getContext("2d");

        canvas.width = canvas.height = options.size;

        // canvas on retina devices
        var scaleBy = 1;
        if (window.devicePixelRatio > 1) {
            scaleBy = window.devicePixelRatio;
            canvas.style.width = canvas.style.height = [
                options.size,
                "px"
            ].join("");
            canvas.width = canvas.height = options.size * scaleBy;
            ctx.scale(scaleBy, scaleBy);
        }

        // move 0,0 coordinates to the center
        ctx.translate(options.size / 2, options.size / 2);

        // rotate canvas -90deg
        ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

        var radius = (options.size - options.lineWidth) / 2;
        if (options.scaleColor && options.scaleLength) {
            radius -= options.scaleLength + 2; // 2 is the distance between scale and bar
        }

        // IE polyfill for Date
        Date.now =
            Date.now ||
            function() {
                return +new Date();
            };

        /**
         * Draw a circle around the center of the canvas
         * @param {strong} color     Valid CSS color string
         * @param {number} lineWidth Width of the line in px
         * @param {number} percent   Percentage to draw (float between -1 and 1)
         */
        var drawCircle = function(color, lineWidth, percent) {
            percent = Math.min(Math.max(-1, percent || 0), 1);
            var isNegative = percent <= 0 ? true : false;

            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, isNegative);

            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;

            ctx.stroke();
        };

        /**
         * Draw the scale of the chart
         */
        var drawScale = function() {
            var offset;
            var length;

            ctx.lineWidth = 1;
            ctx.fillStyle = options.scaleColor;

            ctx.save();
            for (var i = 24; i > 0; --i) {
                if (i % 6 === 0) {
                    length = options.scaleLength;
                    offset = 0;
                } else {
                    length = options.scaleLength * 0.6;
                    offset = options.scaleLength - length;
                }
                ctx.fillRect(-options.size / 2 + offset, 0, length, 1);
                ctx.rotate(Math.PI / 12);
            }
            ctx.restore();
        };

        /**
         * Request animation frame wrapper with polyfill
         * @return {function} Request animation frame method or timeout fallback
         */
        var reqAnimationFrame = (function() {
            return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                }
            );
        })();

        /**
         * Draw the background of the plugin including the scale and the track
         */
        var drawBackground = function() {
            if (options.scaleColor) drawScale();
            if (options.trackColor)
                drawCircle(
                    options.trackColor,
                    options.trackWidth || options.lineWidth,
                    1
                );
        };

        /**
         * Canvas accessor
         */
        this.getCanvas = function() {
            return canvas;
        };

        /**
         * Canvas 2D context 'ctx' accessor
         */
        this.getCtx = function() {
            return ctx;
        };

        /**
         * Clear the complete canvas
         */
        this.clear = function() {
            ctx.clearRect(
                options.size / -2,
                options.size / -2,
                options.size,
                options.size
            );
        };

        /**
         * Draw the complete chart
         * @param {number} percent Percent shown by the chart between -100 and 100
         */
        this.draw = function(percent) {
            // do we need to render a background
            if (!!options.scaleColor || !!options.trackColor) {
                // getImageData and putImageData are supported
                if (ctx.getImageData && ctx.putImageData) {
                    if (!cachedBackground) {
                        drawBackground();
                        cachedBackground = ctx.getImageData(
                            0,
                            0,
                            options.size * scaleBy,
                            options.size * scaleBy
                        );
                    } else {
                        ctx.putImageData(cachedBackground, 0, 0);
                    }
                } else {
                    this.clear();
                    drawBackground();
                }
            } else {
                this.clear();
            }

            ctx.lineCap = options.lineCap;

            // if barcolor is a function execute it and pass the percent as a value
            var color;
            if (typeof options.barColor === "function") {
                color = options.barColor(percent);
            } else {
                color = options.barColor;
            }

            // draw bar
            drawCircle(color, options.lineWidth, percent / 100);
        }.bind(this);

        /**
         * Animate from some percent to some other percentage
         * @param {number} from Starting percentage
         * @param {number} to   Final percentage
         */
        this.animate = function(from, to) {
            var startTime = Date.now();
            options.onStart(from, to);
            var animation = function() {
                var process = Math.min(
                    Date.now() - startTime,
                    options.animate.duration
                );
                var currentValue = options.easing(
                    this,
                    process,
                    from,
                    to - from,
                    options.animate.duration
                );
                this.draw(currentValue);
                options.onStep(from, to, currentValue);
                if (process >= options.animate.duration) {
                    options.onStop(from, to);
                } else {
                    reqAnimationFrame(animation);
                }
            }.bind(this);

            reqAnimationFrame(animation);
        }.bind(this);
    };

    var EasyPieChart = function(el, opts) {
        var defaultOptions = {
            barColor: "#ef1e25",
            trackColor: "#f9f9f9",
            scaleColor: "#dfe0e0",
            scaleLength: 5,
            lineCap: "round",
            lineWidth: 3,
            trackWidth: undefined,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1000,
                enabled: true
            },
            easing: function(x, t, b, c, d) {
                // more can be found here: http://gsgd.co.uk/sandbox/jquery/easing/
                t = t / (d / 2);
                if (t < 1) {
                    return (c / 2) * t * t + b;
                }
                return (-c / 2) * (--t * (t - 2) - 1) + b;
            },
            onStart: function(from, to) {
                return;
            },
            onStep: function(from, to, currentValue) {
                return;
            },
            onStop: function(from, to) {
                return;
            }
        };

        // detect present renderer
        if (typeof CanvasRenderer !== "undefined") {
            defaultOptions.renderer = CanvasRenderer;
        } else if (typeof SVGRenderer !== "undefined") {
            defaultOptions.renderer = SVGRenderer;
        } else {
            throw new Error(
                "Please load either the SVG- or the CanvasRenderer"
            );
        }

        var options = {};
        var currentValue = 0;

        /**
         * Initialize the plugin by creating the options object and initialize rendering
         */
        var init = function() {
            this.el = el;
            this.options = options;

            // merge user options into default options
            for (var i in defaultOptions) {
                if (defaultOptions.hasOwnProperty(i)) {
                    options[i] =
                        opts && typeof opts[i] !== "undefined"
                            ? opts[i]
                            : defaultOptions[i];
                    if (typeof options[i] === "function") {
                        options[i] = options[i].bind(this);
                    }
                }
            }

            // check for jQuery easing
            if (
                typeof options.easing === "string" &&
                typeof jQuery !== "undefined" &&
                jQuery.isFunction(jQuery.easing[options.easing])
            ) {
                options.easing = jQuery.easing[options.easing];
            } else {
                options.easing = defaultOptions.easing;
            }

            // process earlier animate option to avoid bc breaks
            if (typeof options.animate === "number") {
                options.animate = {
                    duration: options.animate,
                    enabled: true
                };
            }

            if (typeof options.animate === "boolean" && !options.animate) {
                options.animate = {
                    duration: 1000,
                    enabled: options.animate
                };
            }

            // create renderer
            this.renderer = new options.renderer(el, options);

            // initial draw
            this.renderer.draw(currentValue);

            // initial update
            if (el.dataset && el.dataset.percent) {
                this.update(parseFloat(el.dataset.percent));
            } else if (el.getAttribute && el.getAttribute("data-percent")) {
                this.update(parseFloat(el.getAttribute("data-percent")));
            }
        }.bind(this);

        /**
         * Update the value of the chart
         * @param  {number} newValue Number between 0 and 100
         * @return {object}          Instance of the plugin for method chaining
         */
        this.update = function(newValue) {
            newValue = parseFloat(newValue);
            if (options.animate.enabled) {
                this.renderer.animate(currentValue, newValue);
            } else {
                this.renderer.draw(newValue);
            }
            currentValue = newValue;
            return this;
        }.bind(this);

        /**
         * Disable animation
         * @return {object} Instance of the plugin for method chaining
         */
        this.disableAnimation = function() {
            options.animate.enabled = false;
            return this;
        };

        /**
         * Enable animation
         * @return {object} Instance of the plugin for method chaining
         */
        this.enableAnimation = function() {
            options.animate.enabled = true;
            return this;
        };

        init();
    };

    return EasyPieChart;
});

!(function() {
    function t(t) {
        this._str = t;
    }
    function n(t) {
        if (t) {
            for (
                var n = [
                        "ي",
                        "ك",
                        "‍",
                        "دِ",
                        "بِ",
                        "زِ",
                        "ذِ",
                        "ِشِ",
                        "ِسِ",
                        "‌",
                        "ى"
                    ],
                    r = ["ی", "ک", "", "د", "ب", "ز", "ذ", "ش", "س", "", "ی"],
                    e = 0,
                    i = n.length;
                i > e;
                e++
            )
                t = t.replace(new RegExp(n[e], "g"), r[e]);
            return (this._str = t), this;
        }
    }
    function r(t) {
        if (t) {
            for (
                var n = [
                        "ض",
                        "ص",
                        "ث",
                        "ق",
                        "ف",
                        "غ",
                        "ع",
                        "ه",
                        "خ",
                        "ح",
                        "ج",
                        "چ",
                        "ش",
                        "س",
                        "ی",
                        "ب",
                        "ل",
                        "ا",
                        "ت",
                        "ن",
                        "م",
                        "ک",
                        "گ",
                        "ظ",
                        "ط",
                        "ز",
                        "ر",
                        "ذ",
                        "د",
                        "پ",
                        "و",
                        "؟"
                    ],
                    r = [
                        "q",
                        "w",
                        "e",
                        "r",
                        "t",
                        "y",
                        "u",
                        "i",
                        "o",
                        "p",
                        "[",
                        "]",
                        "a",
                        "s",
                        "d",
                        "f",
                        "g",
                        "h",
                        "j",
                        "k",
                        "l",
                        ";",
                        "'",
                        "z",
                        "x",
                        "c",
                        "v",
                        "b",
                        "n",
                        "m",
                        ",",
                        "?"
                    ],
                    e = 0,
                    i = n.length;
                i > e;
                e++
            )
                t = t.replace(new RegExp(n[e], "g"), r[e]);
            return (this._str = t), this;
        }
    }
    function e(t) {
        if (t) {
            for (
                var n = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"],
                    r = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"],
                    e = 0,
                    i = n.length;
                i > e;
                e++
            )
                t = t.replace(new RegExp(n[e], "g"), r[e]);
            return (this._str = t), this;
        }
    }
    function i(t) {
        if (t) {
            for (
                var n = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                    r = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"],
                    e = 0,
                    i = n.length;
                i > e;
                e++
            )
                t = t.replace(new RegExp(n[e], "g"), r[e]);
            return (this._str = t), this;
        }
    }
    function u(t) {
        if (t) {
            for (var n = ""; n != t; )
                (n = t), (t = t.replace(/(http\S+?)\%20/g, "$1‌‌‌_‌‌‌"));
            return (
                (t = t.replace(/(http\S+)/g, function(t, n) {
                    return decodeURI(n);
                })),
                (t = t.replace(
                    /\u200c\u200c\u200c_\u200c\u200c\u200c/g,
                    "%20"
                )),
                (this._str = t),
                this
            );
        }
    }
    var s = "0.3.0",
        c = "undefined" != typeof module && module.exports,
        o = function(n) {
            if (!n || "" === n) throw new Error("Input is null or empty.");
            return new t(n);
        };
    (o.version = s),
        (o.fn = t.prototype = {
            clone: function() {
                return o(this);
            },
            value: function() {
                return this._str;
            },
            toString: function() {
                return this._str.toString();
            },
            set: function(t) {
                return (this._str = String(t)), this;
            },
            arabicChar: function() {
                return n.call(this, this._str);
            },
            arabicNumber: function() {
                return e.call(this, this._str);
            },
            fixURL: function() {
                return u.call(this, this._str);
            },
            englishNumber: function() {
                return i.call(this, this._str);
            },
            switchKey: function() {
                return r.call(this, this._str);
            }
        }),
        c && (module.exports = o),
        "undefined" == typeof ender && (this.persianJs = o),
        "function" == typeof define &&
            define.amd &&
            define("persianJs", [], function() {
                return o;
            });
})();

var addCommas = function(nStr) {
    nStr += "";
    x = nStr.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
};

(function($) {
    $.fn.convertToPersian = function() {
        var prefix = $(this).attr("prefix") || "";
        var suffix = $(this).attr("suffix") || "";
        var zero = $(this).data("zero");
        var content = prefix + $(this).html() + suffix;
        if (zero && content == 0) content = zero;
        $(this).html(
            persianJs(content)
                .englishNumber()
                .toString()
        );
    };

    $('*[data-persian="true"], *[persian]').each(function(index, el) {
        $(this).convertToPersian();
    });

    $(document).on(
        "contentChanged",
        '*[data-persian="true"], *[persian]',
        function(event) {
            $(this).convertToPersian();
        }
    );

    $(document).on("focusin focusout", ".input-group-box input", function(
        event
    ) {
        $(this)
            .parents(".input-group-box")
            .toggleClass("focus");
    });
})(jQuery);
/**
 * jQuery geolocation.edit plugin
 * Copyright (c) 2012 Milos Popovic <the.elephant@gmail.com>
 *
 * Freely distributable under the MIT license.
 *
 * @version 0.0.16 (2015-10-16)
 * @see http://github.com/miloss/jquery-geolocation-edit
 */
(function($) {
    var loadScript;

    // Queued initializations
    var inits = [];

    // Methods container object
    var methods = {};

    // Plugin methods

    /**
     * Main execution method
     * @param {Object}  options  Passed plugin options
     */
    methods.main = function(options) {
        var selector = this;

        // Check for required fields
        if (
            typeof options.lat === "undefined" ||
            typeof options.lng === "undefined"
        ) {
            $.error(
                "Please provide 'lat' and 'lng' options for jQuery.geolocate"
            );
            return;
        }

        // If GoogleMaps not loaded - push init to queue and go on
        if (
            typeof google === "undefined" ||
            typeof google.maps === "undefined"
        ) {
            inits.push(function() {
                $(selector).geolocate(options);
            });
            loadScript();
            return;
        }

        // Extend default options
        var opts = $.extend(
            true,
            {
                address: [],
                changeOnEdit: false,
                readOnlyMap: false, // Don't allow pin movement on click
                mapOptions: {
                    zoom: 14,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    mapTypeControl: false,
                    streetViewControl: false
                },
                markerOptions: {
                    draggable: true,
                    animation: google.maps.Animation.DROP
                },
                geoCallback: function() {}
            },
            options
        );

        $(this).data("opts", opts);

        // Init map and marker - per coordinates
        var llat = parseFloat($(opts.lat).val());
        var llng = parseFloat($(opts.lng).val());
        if (isNaN(llat)) {
            llat = 0;
        }
        if (isNaN(llng)) {
            llng = 0;
        }

        var llocation = new google.maps.LatLng(llat, llng);
        $(this).geolocate({}, "initMap", llocation);

        // Bind actions - coordinates fields
        if (opts.changeOnEdit) {
            $(opts.lat).change(function() {
                $(selector).geolocate({}, "updateLatLng", opts);
            });
            $(opts.lng).change(function() {
                $(selector).geolocate({}, "updateLatLng", opts);
            });
        }

        // Bind  actions - address field
        var addrlen = opts.address.length;
        for (var i = 0; i < addrlen; i++) {
            $(document).on("change keyup", opts.address[i], function(event) {
                $(selector).geolocate({}, "callGeocoding");
            });
        }
    };

    /**
     * Initialize GoogleMaps Map on page
     * @param {LatLng} location  GoogleMaps object
     */
    methods.initMap = function(location) {
        var self = $(this).get(0);
        var gmaps = google.maps;
        var opts = $.data(self, "opts");

        var map = new gmaps.Map(
            self,
            $.extend(
                {
                    center: location
                },
                opts.mapOptions
            )
        );

        var markerOptions = $.extend(
            {
                map: map,
                position: location
            },
            opts.markerOptions
        );

        var scaledSize = opts.markerOptions.icon.scaledSize;
        if (scaledSize) {
            opts.markerOptions.icon.scaledSize = new google.maps.Size(
                scaledSize[0],
                scaledSize[1]
            );
        }

        var anchor = opts.markerOptions.icon.anchor;
        if (anchor) {
            opts.markerOptions.icon.anchor = new google.maps.Point(
                anchor[0],
                anchor[1]
            );
        }

        var marker = new gmaps.Marker(markerOptions);

        $.data(self, "map", map);
        $.data(self, "marker", marker);

        gmaps.event.addListener(marker, "dragend", function() {
            $(self).geolocate({}, "getMarkerLocation");
        });

        // Move the marker to the location user clicks
        if (!opts.readOnlyMap) {
            gmaps.event.addListener(map, "click", function(event) {
                marker.setPosition(event.latLng);
                $(self).geolocate({}, "getMarkerLocation");
            });
        }
    };

    /**
     * Make Google Geocoding call with provided address
     */
    methods.callGeocoding = function() {
        var self = $(this).get(0);
        var opts = $.data(self, "opts");
        var len = opts.address.length;
        var cbfunc = opts.geoCallback;

        // Get address
        var addr = "";
        while (len--) {
            $(opts.address[len]).each(function(index, el) {
                addr += $(this).val() + " ";
            });
        }
        console.log(addr);

        // Make request
        var geo = new google.maps.Geocoder();

        // Geocoder response
        geo.geocode(
            {
                address: addr
            },
            function(data, status) {
                var loc, first, map, marker;

                cbfunc(data, status);

                first = data[0];
                if (typeof first === "undefined") return;

                map = $.data(self, "map");
                marker = $.data(self, "marker");

                loc = first.geometry.location;
                map.panToBounds(first.geometry.viewport);
                map.panTo(loc);
                marker.setPosition(loc);
                $(self).geolocate({}, "getMarkerLocation");
            }
        );
    };

    /**
     * Copy marker position to coordinates fields
     */
    methods.getMarkerLocation = function() {
        var marker = $.data($(this).get(0), "marker");
        var opts = $.data($(this).get(0), "opts");
        var pos = marker.getPosition();

        $(opts.lat).val(pos.lat());
        $(opts.lng).val(pos.lng());
    };

    /**
     * Move to the current settings for lat & lng
     * @param {Object} opts
     */
    methods.updateLatLng = function(opts) {
        var self = $(this).get(0);
        var lat = $(opts.lat).val();
        var lng = $(opts.lng).val();
        var loc = new google.maps.LatLng(lat, lng);
        var map = $.data(self, "map");
        var marker = $.data(self, "marker");
        map.panTo(loc);
        marker.setPosition(loc);
    };

    // Main plugin function
    // Call appropriate method, or execute 'main'
    $.fn.geolocate = function(os, method) {
        var pslice = Array.prototype.slice;
        if (typeof method === "undefined") {
            // Only method passed (as 1st parameter)
            if (typeof os === "string" && typeof methods[os] !== "undefined") {
                return methods[os].apply(this, pslice.call(arguments, 1));
            } else {
                $(this).geolocate({}, "main", os);
            }
        } else if (methods[method]) {
            return methods[method].apply(this, pslice.call(arguments, 2));
        } else {
            $.error("Method " + method + " does not exist on jQuery.geolocate");
        }
        return this;
    };

    // Callback to GoogleMaps async loading
    // FIXME find non-jQuery.fn-polluting solution
    $.fn.geolocateGMapsLoaded = function() {
        while (inits.length) {
            inits.shift()();
        }
    };

    // Private functions

    // Load GoogleMaps, we want to do it only once
    loadScript = (function() {
        var ran = false;

        return function() {
            var script;
            if (ran) return;
            ran = true;

            script = document.createElement("script");
            script.type = "text/javascript";
            script.src =
                (window.location.protocol == "https:" ? "https" : "http") +
                "://maps.googleapis.com/maps/api/js?key=AIzaSyCyFbLnpitbbnzlzCJXO20XEclvHO_uc8A&callback=jQuery.fn.geolocateGMapsLoaded";
            document.body.appendChild(script);
        };
    })();
})(jQuery);

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.VMasker = factory();
    }
})(this, function() {
    var DIGIT = "9",
        ALPHA = "A",
        ALPHANUM = "S",
        BY_PASS_KEYS = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91, 92, 93],
        isAllowedKeyCode = function(keyCode) {
            for (var i = 0, len = BY_PASS_KEYS.length; i < len; i++) {
                if (keyCode == BY_PASS_KEYS[i]) {
                    return false;
                }
            }
            return true;
        },
        mergeMoneyOptions = function(opts) {
            opts = opts || {};
            opts = {
                precision: opts.hasOwnProperty("precision")
                    ? opts.precision
                    : 2,
                separator: opts.separator || ",",
                delimiter: opts.delimiter || ".",
                unit: (opts.unit && opts.unit.replace(/[\s]/g, "") + " ") || "",
                suffixUnit:
                    (opts.suffixUnit &&
                        " " + opts.suffixUnit.replace(/[\s]/g, "")) ||
                    "",
                zeroCents: opts.zeroCents,
                lastOutput: opts.lastOutput
            };
            opts.moneyPrecision = opts.zeroCents ? 0 : opts.precision;
            return opts;
        },
        // Fill wildcards past index in output with placeholder
        addPlaceholdersToOutput = function(output, index, placeholder) {
            for (; index < output.length; index++) {
                if (
                    output[index] === DIGIT ||
                    output[index] === ALPHA ||
                    output[index] === ALPHANUM
                ) {
                    output[index] = placeholder;
                }
            }
            return output;
        };
    var VanillaMasker = function(elements) {
        this.elements = elements;
    };

    VanillaMasker.prototype.unbindElementToMask = function() {
        for (var i = 0, len = this.elements.length; i < len; i++) {
            this.elements[i].lastOutput = "";
            this.elements[i].onkeyup = false;
            this.elements[i].onkeydown = false;

            if (this.elements[i].value.length) {
                this.elements[i].value = this.elements[i].value.replace(
                    /\D/g,
                    ""
                );
            }
        }
    };

    VanillaMasker.prototype.bindElementToMask = function(maskFunction) {
        var that = this,
            onType = function(e) {
                e = e || window.event;
                var source = e.target || e.srcElement;

                if (isAllowedKeyCode(e.keyCode)) {
                    setTimeout(function() {
                        that.opts.lastOutput = source.lastOutput;
                        source.value = VMasker[maskFunction](
                            source.value,
                            that.opts
                        );
                        source.lastOutput = source.value;
                        if (source.setSelectionRange && that.opts.suffixUnit) {
                            source.setSelectionRange(
                                source.value.length,
                                source.value.length -
                                    that.opts.suffixUnit.length
                            );
                        }
                    }, 0);
                }
            };
        for (var i = 0, len = this.elements.length; i < len; i++) {
            this.elements[i].lastOutput = "";
            this.elements[i].onkeyup = onType;
            if (this.elements[i].value.length) {
                this.elements[i].value = VMasker[maskFunction](
                    this.elements[i].value,
                    this.opts
                );
            }
        }
    };

    VanillaMasker.prototype.maskMoney = function(opts) {
        this.opts = mergeMoneyOptions(opts);
        this.bindElementToMask("toMoney");
    };

    VanillaMasker.prototype.maskNumber = function() {
        this.opts = {};
        this.bindElementToMask("toNumber");
    };

    VanillaMasker.prototype.maskAlphaNum = function() {
        this.opts = {};
        this.bindElementToMask("toAlphaNumeric");
    };

    VanillaMasker.prototype.maskPattern = function(pattern) {
        this.opts = { pattern: pattern };
        this.bindElementToMask("toPattern");
    };

    VanillaMasker.prototype.unMask = function() {
        this.unbindElementToMask();
    };

    var VMasker = function(el) {
        if (!el) {
            throw new Error("VanillaMasker: There is no element to bind.");
        }
        var elements = "length" in el ? (el.length ? el : []) : [el];
        return new VanillaMasker(elements);
    };

    VMasker.toMoney = function(value, opts) {
        opts = mergeMoneyOptions(opts);
        if (opts.zeroCents) {
            opts.lastOutput = opts.lastOutput || "";
            var zeroMatcher =
                    "(" + opts.separator + "[0]{0," + opts.precision + "})",
                zeroRegExp = new RegExp(zeroMatcher, "g"),
                digitsLength =
                    value.toString().replace(/[\D]/g, "").length || 0,
                lastDigitLength =
                    opts.lastOutput.toString().replace(/[\D]/g, "").length || 0;
            value = value.toString().replace(zeroRegExp, "");
            if (digitsLength < lastDigitLength) {
                value = value.slice(0, value.length - 1);
            }
        }
        var number = value.toString().replace(/[\D]/g, ""),
            clearDelimiter = new RegExp("^(0|\\" + opts.delimiter + ")"),
            clearSeparator = new RegExp("(\\" + opts.separator + ")$"),
            money = number.substr(0, number.length - opts.moneyPrecision),
            masked = money.substr(0, money.length % 3),
            cents = new Array(opts.precision + 1).join("0");
        money = money.substr(money.length % 3, money.length);
        for (var i = 0, len = money.length; i < len; i++) {
            if (i % 3 === 0) {
                masked += opts.delimiter;
            }
            masked += money[i];
        }
        masked = masked.replace(clearDelimiter, "");
        masked = masked.length ? masked : "0";
        if (!opts.zeroCents) {
            var beginCents = number.length - opts.precision,
                centsValue = number.substr(beginCents, opts.precision),
                centsLength = centsValue.length,
                centsSliced =
                    opts.precision > centsLength ? opts.precision : centsLength;
            cents = (cents + centsValue).slice(-centsSliced);
        }
        var output =
            opts.unit + masked + opts.separator + cents + opts.suffixUnit;
        return output.replace(clearSeparator, "");
    };

    VMasker.toPattern = function(value, opts) {
        var pattern = typeof opts === "object" ? opts.pattern : opts,
            patternChars = pattern.replace(/\W/g, ""),
            output = pattern.split(""),
            values = value.toString().replace(/\W/g, ""),
            charsValues = values.replace(/\W/g, ""),
            index = 0,
            i,
            outputLength = output.length,
            placeholder =
                typeof opts === "object" ? opts.placeholder : undefined;
        for (i = 0; i < outputLength; i++) {
            // Reached the end of input
            if (index >= values.length) {
                if (patternChars.length == charsValues.length) {
                    return output.join("");
                } else if (
                    placeholder !== undefined &&
                    patternChars.length > charsValues.length
                ) {
                    return addPlaceholdersToOutput(output, i, placeholder).join(
                        ""
                    );
                } else {
                    break;
                }
            }
            // Remaining chars in input
            else {
                if (
                    (output[i] === DIGIT && values[index].match(/[0-9]/)) ||
                    (output[i] === ALPHA && values[index].match(/[a-zA-Z]/)) ||
                    (output[i] === ALPHANUM &&
                        values[index].match(/[0-9a-zA-Z]/))
                ) {
                    output[i] = values[index++];
                } else if (
                    output[i] === DIGIT ||
                    output[i] === ALPHA ||
                    output[i] === ALPHANUM
                ) {
                    if (placeholder !== undefined) {
                        return addPlaceholdersToOutput(
                            output,
                            i,
                            placeholder
                        ).join("");
                    } else {
                        return output.slice(0, i).join("");
                    }
                }
            }
        }
        return output.join("").substr(0, i);
    };

    VMasker.toNumber = function(value) {
        return value.toString().replace(/(?!^-)[^0-9]/g, "");
    };

    VMasker.toAlphaNumeric = function(value) {
        return value.toString().replace(/[^a-z0-9 ]+/i, "");
    };

    return VMasker;
});
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
(function($, window, document, undefined) {
    /**
     * Creates a carousel.
     * @class The Owl Carousel.
     * @public
     * @param {HTMLElement|jQuery} element - The element to create the carousel for.
     * @param {Object} [options] - The options
     */
    function Owl(element, options) {
        /**
         * Current settings for the carousel.
         * @public
         */
        this.settings = null;

        /**
         * Current options set by the caller including defaults.
         * @public
         */
        this.options = $.extend({}, Owl.Defaults, options);

        /**
         * Plugin element.
         * @public
         */
        this.$element = $(element);

        /**
         * Proxied event handlers.
         * @protected
         */
        this._handlers = {};

        /**
         * References to the running plugins of this carousel.
         * @protected
         */
        this._plugins = {};

        /**
         * Currently suppressed events to prevent them from beeing retriggered.
         * @protected
         */
        this._supress = {};

        /**
         * Absolute current position.
         * @protected
         */
        this._current = null;

        /**
         * Animation speed in milliseconds.
         * @protected
         */
        this._speed = null;

        /**
         * Coordinates of all items in pixel.
         * @todo The name of this member is missleading.
         * @protected
         */
        this._coordinates = [];

        /**
         * Current breakpoint.
         * @todo Real media queries would be nice.
         * @protected
         */
        this._breakpoint = null;

        /**
         * Current width of the plugin element.
         */
        this._width = null;

        /**
         * All real items.
         * @protected
         */
        this._items = [];

        /**
         * All cloned items.
         * @protected
         */
        this._clones = [];

        /**
         * Merge values of all items.
         * @todo Maybe this could be part of a plugin.
         * @protected
         */
        this._mergers = [];

        /**
         * Widths of all items.
         */
        this._widths = [];

        /**
         * Invalidated parts within the update process.
         * @protected
         */
        this._invalidated = {};

        /**
         * Ordered list of workers for the update process.
         * @protected
         */
        this._pipe = [];

        /**
         * Current state information for the drag operation.
         * @todo #261
         * @protected
         */
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };

        /**
         * Current state information and their tags.
         * @type {Object}
         * @protected
         */
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        };

        $.each(
            ["onResize", "onThrottledResize"],
            $.proxy(function(i, handler) {
                this._handlers[handler] = $.proxy(this[handler], this);
            }, this)
        );

        $.each(
            Owl.Plugins,
            $.proxy(function(key, plugin) {
                this._plugins[
                    key.charAt(0).toLowerCase() + key.slice(1)
                ] = new plugin(this);
            }, this)
        );

        $.each(
            Owl.Workers,
            $.proxy(function(priority, worker) {
                this._pipe.push({
                    filter: worker.filter,
                    run: $.proxy(worker.run, this)
                });
            }, this)
        );

        this.setup();
        this.initialize();
    }

    /**
     * Default options for the carousel.
     * @public
     */
    Owl.Defaults = {
        items: 3,
        loop: false,
        center: false,
        rewind: false,

        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,

        margin: 0,
        stagePadding: 0,

        merge: false,
        mergeFit: true,
        autoWidth: false,

        startPosition: 0,
        rtl: false,

        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,

        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,

        fallbackEasing: "swing",

        info: false,

        nestedItemSelector: false,
        itemElement: "div",
        stageElement: "div",

        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    };

    /**
     * Enumeration for width.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    };

    /**
     * Enumeration for types.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Type = {
        Event: "event",
        State: "state"
    };

    /**
     * Contains all registered plugins.
     * @public
     */
    Owl.Plugins = {};

    /**
     * List of workers involved in the update process.
     */
    Owl.Workers = [
        {
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width();
            }
        },
        {
            filter: ["width", "items", "settings"],
            run: function(cache) {
                cache.current =
                    this._items && this._items[this.relative(this._current)];
            }
        },
        {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove();
            }
        },
        {
            filter: ["width", "items", "settings"],
            run: function(cache) {
                var margin = this.settings.margin || "",
                    grid = !this.settings.autoWidth,
                    rtl = this.settings.rtl,
                    css = {
                        width: "auto",
                        "margin-left": rtl ? margin : "",
                        "margin-right": rtl ? "" : margin
                    };

                !grid && this.$stage.children().css(css);

                cache.css = css;
            }
        },
        {
            filter: ["width", "items", "settings"],
            run: function(cache) {
                var width =
                        (this.width() / this.settings.items).toFixed(3) -
                        this.settings.margin,
                    merge = null,
                    iterator = this._items.length,
                    grid = !this.settings.autoWidth,
                    widths = [];

                cache.items = {
                    merge: false,
                    width: width
                };

                while (iterator--) {
                    merge = this._mergers[iterator];
                    merge =
                        (this.settings.mergeFit &&
                            Math.min(merge, this.settings.items)) ||
                        merge;

                    cache.items.merge = merge > 1 || cache.items.merge;

                    widths[iterator] = !grid
                        ? this._items[iterator].width()
                        : width * merge;
                }

                this._widths = widths;
            }
        },
        {
            filter: ["items", "settings"],
            run: function() {
                var clones = [],
                    items = this._items,
                    settings = this.settings,
                    // TODO: Should be computed from number of min width items in stage
                    view = Math.max(settings.items * 2, 4),
                    size = Math.ceil(items.length / 2) * 2,
                    repeat =
                        settings.loop && items.length
                            ? settings.rewind
                                ? view
                                : Math.max(view, size)
                            : 0,
                    append = "",
                    prepend = "";

                repeat /= 2;

                while (repeat--) {
                    // Switch to only using appended clones
                    clones.push(this.normalize(clones.length / 2, true));
                    append =
                        append + items[clones[clones.length - 1]][0].outerHTML;
                    clones.push(
                        this.normalize(
                            items.length - 1 - (clones.length - 1) / 2,
                            true
                        )
                    );
                    prepend =
                        items[clones[clones.length - 1]][0].outerHTML + prepend;
                }

                this._clones = clones;

                $(append)
                    .addClass("cloned")
                    .appendTo(this.$stage);
                $(prepend)
                    .addClass("cloned")
                    .prependTo(this.$stage);
            }
        },
        {
            filter: ["width", "items", "settings"],
            run: function() {
                var rtl = this.settings.rtl ? 1 : -1,
                    size = this._clones.length + this._items.length,
                    iterator = -1,
                    previous = 0,
                    current = 0,
                    coordinates = [];

                while (++iterator < size) {
                    previous = coordinates[iterator - 1] || 0;
                    current =
                        this._widths[this.relative(iterator)] +
                        this.settings.margin;
                    coordinates.push(previous + current * rtl);
                }

                this._coordinates = coordinates;
            }
        },
        {
            filter: ["width", "items", "settings"],
            run: function() {
                var padding = this.settings.stagePadding,
                    coordinates = this._coordinates,
                    css = {
                        width:
                            Math.ceil(
                                Math.abs(coordinates[coordinates.length - 1])
                            ) +
                            padding * 2,
                        "padding-left": padding || "",
                        "padding-right": padding || ""
                    };

                this.$stage.css(css);
            }
        },
        {
            filter: ["width", "items", "settings"],
            run: function(cache) {
                var iterator = this._coordinates.length,
                    grid = !this.settings.autoWidth,
                    items = this.$stage.children();

                if (grid && cache.items.merge) {
                    while (iterator--) {
                        cache.css.width = this._widths[this.relative(iterator)];
                        items.eq(iterator).css(cache.css);
                    }
                } else if (grid) {
                    cache.css.width = cache.items.width;
                    items.css(cache.css);
                }
            }
        },
        {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style");
            }
        },
        {
            filter: ["width", "items", "settings"],
            run: function(cache) {
                cache.current = cache.current
                    ? this.$stage.children().index(cache.current)
                    : 0;
                cache.current = Math.max(
                    this.minimum(),
                    Math.min(this.maximum(), cache.current)
                );
                this.reset(cache.current);
            }
        },
        {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current));
            }
        },
        {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var rtl = this.settings.rtl ? 1 : -1,
                    padding = this.settings.stagePadding * 2,
                    begin = this.coordinates(this.current()) + padding,
                    end = begin + this.width() * rtl,
                    inner,
                    outer,
                    matches = [],
                    i,
                    n;

                for (i = 0, n = this._coordinates.length; i < n; i++) {
                    inner = this._coordinates[i - 1] || 0;
                    outer = Math.abs(this._coordinates[i]) + padding * rtl;

                    if (
                        (this.op(inner, "<=", begin) &&
                            this.op(inner, ">", end)) ||
                        (this.op(outer, "<", begin) && this.op(outer, ">", end))
                    ) {
                        matches.push(i);
                    }
                }

                this.$stage.children(".active").removeClass("active");
                this.$stage
                    .children(":eq(" + matches.join("), :eq(") + ")")
                    .addClass("active");

                if (this.settings.center) {
                    this.$stage.children(".center").removeClass("center");
                    this.$stage
                        .children()
                        .eq(this.current())
                        .addClass("center");
                }
            }
        }
    ];

    /**
     * Initializes the carousel.
     * @protected
     */
    Owl.prototype.initialize = function() {
        this.enter("initializing");
        this.trigger("initialize");

        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

        if (this.settings.autoWidth && !this.is("pre-loading")) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find("img");
            nestedSelector = this.settings.nestedItemSelector
                ? "." + this.settings.nestedItemSelector
                : undefined;
            width = this.$element.children(nestedSelector).width();

            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs);
            }
        }

        this.$element.addClass(this.options.loadingClass);

        // create stage
        this.$stage = $(
            "<" +
                this.settings.stageElement +
                ' class="' +
                this.settings.stageClass +
                '"/>'
        ).wrap('<div class="' + this.settings.stageOuterClass + '"/>');

        // append stage
        this.$element.append(this.$stage.parent());

        // append content
        this.replace(this.$element.children().not(this.$stage.parent()));

        // check visibility
        if (this.$element.is(":visible")) {
            // update view
            this.refresh();
        } else {
            // invalidate width
            this.invalidate("width");
        }

        this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass);

        // register event handlers
        this.registerEventHandlers();

        this.leave("initializing");
        this.trigger("initialized");
    };

    /**
     * Setups the current settings.
     * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
     * @todo Support for media queries by using `matchMedia` would be nice.
     * @public
     */
    Owl.prototype.setup = function() {
        var viewport = this.viewport(),
            overwrites = this.options.responsive,
            match = -1,
            settings = null;

        if (!overwrites) {
            settings = $.extend({}, this.options);
        } else {
            $.each(overwrites, function(breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint);
                }
            });

            settings = $.extend({}, this.options, overwrites[match]);
            if (typeof settings.stagePadding === "function") {
                settings.stagePadding = settings.stagePadding();
            }
            delete settings.responsive;

            // responsive class
            if (settings.responsiveClass) {
                this.$element.attr(
                    "class",
                    this.$element
                        .attr("class")
                        .replace(
                            new RegExp(
                                "(" +
                                    this.options.responsiveClass +
                                    "-)\\S+\\s",
                                "g"
                            ),
                            "$1" + match
                        )
                );
            }
        }

        this.trigger("change", {
            property: { name: "settings", value: settings }
        });
        this._breakpoint = match;
        this.settings = settings;
        this.invalidate("settings");
        this.trigger("changed", {
            property: { name: "settings", value: this.settings }
        });
    };

    /**
     * Updates option logic if necessery.
     * @protected
     */
    Owl.prototype.optionsLogic = function() {
        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
        }
    };

    /**
     * Prepares an item before add.
     * @todo Rename event parameter `content` to `item`.
     * @protected
     * @returns {jQuery|HTMLElement} - The item container.
     */
    Owl.prototype.prepare = function(item) {
        var event = this.trigger("prepare", { content: item });

        if (!event.data) {
            event.data = $("<" + this.settings.itemElement + "/>")
                .addClass(this.options.itemClass)
                .append(item);
        }

        this.trigger("prepared", { content: event.data });

        return event.data;
    };

    /**
     * Updates the view.
     * @public
     */
    Owl.prototype.update = function() {
        var i = 0,
            n = this._pipe.length,
            filter = $.proxy(function(p) {
                return this[p];
            }, this._invalidated),
            cache = {};

        while (i < n) {
            if (
                this._invalidated.all ||
                $.grep(this._pipe[i].filter, filter).length > 0
            ) {
                this._pipe[i].run(cache);
            }
            i++;
        }

        this._invalidated = {};

        !this.is("valid") && this.enter("valid");
    };

    /**
     * Gets the width of the view.
     * @public
     * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
     * @returns {Number} - The width of the view in pixel.
     */
    Owl.prototype.width = function(dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return (
                    this._width -
                    this.settings.stagePadding * 2 +
                    this.settings.margin
                );
        }
    };

    /**
     * Refreshes the carousel primarily for adaptive purposes.
     * @public
     */
    Owl.prototype.refresh = function() {
        this.enter("refreshing");
        this.trigger("refresh");

        this.setup();

        this.optionsLogic();

        this.$element.addClass(this.options.refreshClass);

        this.update();

        this.$element.removeClass(this.options.refreshClass);

        this.leave("refreshing");
        this.trigger("refreshed");
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onThrottledResize = function() {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(
            this._handlers.onResize,
            this.settings.responsiveRefreshRate
        );
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onResize = function() {
        if (!this._items.length) {
            return false;
        }

        if (this._width === this.$element.width()) {
            return false;
        }

        if (!this.$element.is(":visible")) {
            return false;
        }

        this.enter("resizing");

        if (this.trigger("resize").isDefaultPrevented()) {
            this.leave("resizing");
            return false;
        }

        this.invalidate("width");

        this.refresh();

        this.leave("resizing");
        this.trigger("resized");
    };

    /**
     * Registers event handlers.
     * @todo Check `msPointerEnabled`
     * @todo #261
     * @protected
     */
    Owl.prototype.registerEventHandlers = function() {
        if ($.support.transition) {
            this.$stage.on(
                $.support.transition.end + ".owl.core",
                $.proxy(this.onTransitionEnd, this)
            );
        }

        if (this.settings.responsive !== false) {
            this.on(window, "resize", this._handlers.onThrottledResize);
        }

        if (this.settings.mouseDrag) {
            this.$element.addClass(this.options.dragClass);
            this.$stage.on(
                "mousedown.owl.core",
                $.proxy(this.onDragStart, this)
            );
            this.$stage.on(
                "dragstart.owl.core selectstart.owl.core",
                function() {
                    return false;
                }
            );
        }

        if (this.settings.touchDrag) {
            this.$stage.on(
                "touchstart.owl.core",
                $.proxy(this.onDragStart, this)
            );
            this.$stage.on(
                "touchcancel.owl.core",
                $.proxy(this.onDragEnd, this)
            );
        }
    };

    /**
     * Handles `touchstart` and `mousedown` events.
     * @todo Horizontal swipe threshold as option
     * @todo #261
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragStart = function(event) {
        var stage = null;

        if (event.which === 3) {
            return;
        }

        if ($.support.transform) {
            stage = this.$stage
                .css("transform")
                .replace(/.*\(|\)| /g, "")
                .split(",");
            stage = {
                x: stage[stage.length === 16 ? 12 : 4],
                y: stage[stage.length === 16 ? 13 : 5]
            };
        } else {
            stage = this.$stage.position();
            stage = {
                x: this.settings.rtl
                    ? stage.left +
                      this.$stage.width() -
                      this.width() +
                      this.settings.margin
                    : stage.left,
                y: stage.top
            };
        }

        if (this.is("animating")) {
            $.support.transform ? this.animate(stage.x) : this.$stage.stop();
            this.invalidate("position");
        }

        this.$element.toggleClass(
            this.options.grabClass,
            event.type === "mousedown"
        );

        this.speed(0);

        this._drag.time = new Date().getTime();
        this._drag.target = $(event.target);
        this._drag.stage.start = stage;
        this._drag.stage.current = stage;
        this._drag.pointer = this.pointer(event);

        $(document).on(
            "mouseup.owl.core touchend.owl.core",
            $.proxy(this.onDragEnd, this)
        );

        $(document).one(
            "mousemove.owl.core touchmove.owl.core",
            $.proxy(function(event) {
                var delta = this.difference(
                    this._drag.pointer,
                    this.pointer(event)
                );

                $(document).on(
                    "mousemove.owl.core touchmove.owl.core",
                    $.proxy(this.onDragMove, this)
                );

                if (Math.abs(delta.x) < Math.abs(delta.y) && this.is("valid")) {
                    return;
                }

                event.preventDefault();

                this.enter("dragging");
                this.trigger("drag");
            }, this)
        );
    };

    /**
     * Handles the `touchmove` and `mousemove` events.
     * @todo #261
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragMove = function(event) {
        var minimum = null,
            maximum = null,
            pull = null,
            delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this.difference(this._drag.stage.start, delta);

        if (!this.is("dragging")) {
            return;
        }

        event.preventDefault();

        if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = this.coordinates(this.maximum() + 1) - minimum;
            stage.x =
                ((((stage.x - minimum) % maximum) + maximum) % maximum) +
                minimum;
        } else {
            minimum = this.settings.rtl
                ? this.coordinates(this.maximum())
                : this.coordinates(this.minimum());
            maximum = this.settings.rtl
                ? this.coordinates(this.minimum())
                : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? (-1 * delta.x) / 5 : 0;
            stage.x = Math.max(
                Math.min(stage.x, minimum + pull),
                maximum + pull
            );
        }

        this._drag.stage.current = stage;

        this.animate(stage.x);
    };

    /**
     * Handles the `touchend` and `mouseup` events.
     * @todo #261
     * @todo Threshold for click event
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragEnd = function(event) {
        var delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this._drag.stage.current,
            direction = (delta.x > 0) ^ this.settings.rtl ? "left" : "right";

        $(document).off(".owl.core");

        this.$element.removeClass(this.options.grabClass);

        if ((delta.x !== 0 && this.is("dragging")) || !this.is("valid")) {
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(
                this.closest(
                    stage.x,
                    delta.x !== 0 ? direction : this._drag.direction
                )
            );
            this.invalidate("position");
            this.update();

            this._drag.direction = direction;

            if (
                Math.abs(delta.x) > 3 ||
                new Date().getTime() - this._drag.time > 300
            ) {
                this._drag.target.one("click.owl.core", function() {
                    return false;
                });
            }
        }

        if (!this.is("dragging")) {
            return;
        }

        this.leave("dragging");
        this.trigger("dragged");
    };

    /**
     * Gets absolute position of the closest item for a coordinate.
     * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
     * @protected
     * @param {Number} coordinate - The coordinate in pixel.
     * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
     * @return {Number} - The absolute position of the closest item.
     */
    Owl.prototype.closest = function(coordinate, direction) {
        var position = -1,
            pull = 30,
            width = this.width(),
            coordinates = this.coordinates();

        if (!this.settings.freeDrag) {
            // check closest item
            $.each(
                coordinates,
                $.proxy(function(index, value) {
                    // on a left pull, check on current index
                    if (
                        direction === "left" &&
                        coordinate > value - pull &&
                        coordinate < value + pull
                    ) {
                        position = index;
                        // on a right pull, check on previous index
                        // to do so, subtract width from value and set position = index + 1
                    } else if (
                        direction === "right" &&
                        coordinate > value - width - pull &&
                        coordinate < value - width + pull
                    ) {
                        position = index + 1;
                    } else if (
                        this.op(coordinate, "<", value) &&
                        this.op(
                            coordinate,
                            ">",
                            coordinates[index + 1] || value - width
                        )
                    ) {
                        position = direction === "left" ? index + 1 : index;
                    }
                    return position === -1;
                }, this)
            );
        }

        if (!this.settings.loop) {
            // non loop boundries
            if (this.op(coordinate, ">", coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            } else if (this.op(coordinate, "<", coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }

        return position;
    };

    /**
     * Animates the stage.
     * @todo #270
     * @public
     * @param {Number} coordinate - The coordinate in pixels.
     */
    Owl.prototype.animate = function(coordinate) {
        var animate = this.speed() > 0;

        this.is("animating") && this.onTransitionEnd();

        if (animate) {
            this.enter("animating");
            this.trigger("translate");
        }

        if ($.support.transform3d && $.support.transition) {
            this.$stage.css({
                transform: "translate3d(" + coordinate + "px,0px,0px)",
                transition: this.speed() / 1000 + "s"
            });
        } else if (animate) {
            this.$stage.animate(
                {
                    left: coordinate + "px"
                },
                this.speed(),
                this.settings.fallbackEasing,
                $.proxy(this.onTransitionEnd, this)
            );
        } else {
            this.$stage.css({
                left: coordinate + "px"
            });
        }
    };

    /**
     * Checks whether the carousel is in a specific state or not.
     * @param {String} state - The state to check.
     * @returns {Boolean} - The flag which indicates if the carousel is busy.
     */
    Owl.prototype.is = function(state) {
        return this._states.current[state] && this._states.current[state] > 0;
    };

    /**
     * Sets the absolute position of the current item.
     * @public
     * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
     * @returns {Number} - The absolute position of the current item.
     */
    Owl.prototype.current = function(position) {
        if (position === undefined) {
            return this._current;
        }

        if (this._items.length === 0) {
            return undefined;
        }

        position = this.normalize(position);

        if (this._current !== position) {
            var event = this.trigger("change", {
                property: { name: "position", value: position }
            });

            if (event.data !== undefined) {
                position = this.normalize(event.data);
            }

            this._current = position;

            this.invalidate("position");

            this.trigger("changed", {
                property: { name: "position", value: this._current }
            });
        }

        return this._current;
    };

    /**
     * Invalidates the given part of the update routine.
     * @param {String} [part] - The part to invalidate.
     * @returns {Array.<String>} - The invalidated parts.
     */
    Owl.prototype.invalidate = function(part) {
        if ($.type(part) === "string") {
            this._invalidated[part] = true;
            this.is("valid") && this.leave("valid");
        }
        return $.map(this._invalidated, function(v, i) {
            return i;
        });
    };

    /**
     * Resets the absolute position of the current item.
     * @public
     * @param {Number} position - The absolute position of the new item.
     */
    Owl.prototype.reset = function(position) {
        position = this.normalize(position);

        if (position === undefined) {
            return;
        }

        this._speed = 0;
        this._current = position;

        this.suppress(["translate", "translated"]);

        this.animate(this.coordinates(position));

        this.release(["translate", "translated"]);
    };

    /**
     * Normalizes an absolute or a relative position of an item.
     * @public
     * @param {Number} position - The absolute or relative position to normalize.
     * @param {Boolean} [relative=false] - Whether the given position is relative or not.
     * @returns {Number} - The normalized position.
     */
    Owl.prototype.normalize = function(position, relative) {
        var n = this._items.length,
            m = relative ? 0 : this._clones.length;

        if (!this.isNumeric(position) || n < 1) {
            position = undefined;
        } else if (position < 0 || position >= n + m) {
            position = ((((position - m / 2) % n) + n) % n) + m / 2;
        }

        return position;
    };

    /**
     * Converts an absolute position of an item into a relative one.
     * @public
     * @param {Number} position - The absolute position to convert.
     * @returns {Number} - The converted position.
     */
    Owl.prototype.relative = function(position) {
        position -= this._clones.length / 2;
        return this.normalize(position, true);
    };

    /**
     * Gets the maximum position for the current item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.maximum = function(relative) {
        var settings = this.settings,
            maximum = this._coordinates.length,
            iterator,
            reciprocalItemsWidth,
            elementWidth;

        if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
        } else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            reciprocalItemsWidth = this._items[--iterator].width();
            elementWidth = this.$element.width();
            while (iterator--) {
                reciprocalItemsWidth +=
                    this._items[iterator].width() + this.settings.margin;
                if (reciprocalItemsWidth > elementWidth) {
                    break;
                }
            }
            maximum = iterator + 1;
        } else if (settings.center) {
            maximum = this._items.length - 1;
        } else {
            maximum = this._items.length - settings.items;
        }

        if (relative) {
            maximum -= this._clones.length / 2;
        }

        return Math.max(maximum, 0);
    };

    /**
     * Gets the minimum position for the current item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.minimum = function(relative) {
        return relative ? 0 : this._clones.length / 2;
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.items = function(position) {
        if (position === undefined) {
            return this._items.slice();
        }

        position = this.normalize(position, true);
        return this._items[position];
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.mergers = function(position) {
        if (position === undefined) {
            return this._mergers.slice();
        }

        position = this.normalize(position, true);
        return this._mergers[position];
    };

    /**
     * Gets the absolute positions of clones for an item.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
     */
    Owl.prototype.clones = function(position) {
        var odd = this._clones.length / 2,
            even = odd + this._items.length,
            map = function(index) {
                return index % 2 === 0
                    ? even + index / 2
                    : odd - (index + 1) / 2;
            };

        if (position === undefined) {
            return $.map(this._clones, function(v, i) {
                return map(i);
            });
        }

        return $.map(this._clones, function(v, i) {
            return v === position ? map(i) : null;
        });
    };

    /**
     * Sets the current animation speed.
     * @public
     * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
     * @returns {Number} - The current animation speed in milliseconds.
     */
    Owl.prototype.speed = function(speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }

        return this._speed;
    };

    /**
     * Gets the coordinate of an item.
     * @todo The name of this method is missleanding.
     * @public
     * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
     * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
     */
    Owl.prototype.coordinates = function(position) {
        var multiplier = 1,
            newPosition = position - 1,
            coordinate;

        if (position === undefined) {
            return $.map(
                this._coordinates,
                $.proxy(function(coordinate, index) {
                    return this.coordinates(index);
                }, this)
            );
        }

        if (this.settings.center) {
            if (this.settings.rtl) {
                multiplier = -1;
                newPosition = position + 1;
            }

            coordinate = this._coordinates[position];
            coordinate +=
                ((this.width() -
                    coordinate +
                    (this._coordinates[newPosition] || 0)) /
                    2) *
                multiplier;
        } else {
            coordinate = this._coordinates[newPosition] || 0;
        }

        coordinate = Math.ceil(coordinate);

        return coordinate;
    };

    /**
     * Calculates the speed for a translation.
     * @protected
     * @param {Number} from - The absolute position of the start item.
     * @param {Number} to - The absolute position of the target item.
     * @param {Number} [factor=undefined] - The time factor in milliseconds.
     * @returns {Number} - The time in milliseconds for the translation.
     */
    Owl.prototype.duration = function(from, to, factor) {
        if (factor === 0) {
            return 0;
        }

        return (
            Math.min(Math.max(Math.abs(to - from), 1), 6) *
            Math.abs(factor || this.settings.smartSpeed)
        );
    };

    /**
     * Slides to the specified item.
     * @public
     * @param {Number} position - The position of the item.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.to = function(position, speed) {
        var current = this.current(),
            revert = null,
            distance = position - this.relative(current),
            direction = (distance > 0) - (distance < 0),
            items = this._items.length,
            minimum = this.minimum(),
            maximum = this.maximum();

        if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                distance += direction * -1 * items;
            }

            position = current + distance;
            revert =
                ((((position - minimum) % items) + items) % items) + minimum;

            if (
                revert !== position &&
                revert - distance <= maximum &&
                revert - distance > 0
            ) {
                current = revert - distance;
                position = revert;
                this.reset(current);
            }
        } else if (this.settings.rewind) {
            maximum += 1;
            position = ((position % maximum) + maximum) % maximum;
        } else {
            position = Math.max(minimum, Math.min(maximum, position));
        }

        this.speed(this.duration(current, position, speed));
        this.current(position);

        if (this.$element.is(":visible")) {
            this.update();
        }
    };

    /**
     * Slides to the next item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.next = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };

    /**
     * Slides to the previous item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.prev = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };

    /**
     * Handles the end of an animation.
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onTransitionEnd = function(event) {
        // if css2 animation then event object is undefined
        if (event !== undefined) {
            event.stopPropagation();

            // Catch only owl-stage transitionEnd event
            if (
                (event.target || event.srcElement || event.originalTarget) !==
                this.$stage.get(0)
            ) {
                return false;
            }
        }

        this.leave("animating");
        this.trigger("translated");
    };

    /**
     * Gets viewport width.
     * @protected
     * @return {Number} - The width in pixel.
     */
    Owl.prototype.viewport = function() {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width();
        } else if (window.innerWidth) {
            width = window.innerWidth;
        } else if (
            document.documentElement &&
            document.documentElement.clientWidth
        ) {
            width = document.documentElement.clientWidth;
        } else {
            console.warn("Can not detect viewport width.");
        }
        return width;
    };

    /**
     * Replaces the current content.
     * @public
     * @param {HTMLElement|jQuery|String} content - The new content.
     */
    Owl.prototype.replace = function(content) {
        this.$stage.empty();
        this._items = [];

        if (content) {
            content = content instanceof jQuery ? content : $(content);
        }

        if (this.settings.nestedItemSelector) {
            content = content.find("." + this.settings.nestedItemSelector);
        }

        content
            .filter(function() {
                return this.nodeType === 1;
            })
            .each(
                $.proxy(function(index, item) {
                    item = this.prepare(item);
                    this.$stage.append(item);
                    this._items.push(item);
                    this._mergers.push(
                        item
                            .find("[data-merge]")
                            .addBack("[data-merge]")
                            .attr("data-merge") * 1 || 1
                    );
                }, this)
            );

        this.reset(
            this.isNumeric(this.settings.startPosition)
                ? this.settings.startPosition
                : 0
        );

        this.invalidate("items");
    };

    /**
     * Adds an item.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {HTMLElement|jQuery|String} content - The item content to add.
     * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
     */
    Owl.prototype.add = function(content, position) {
        var current = this.relative(this._current);

        position =
            position === undefined
                ? this._items.length
                : this.normalize(position, true);
        content = content instanceof jQuery ? content : $(content);

        this.trigger("add", { content: content, position: position });

        content = this.prepare(content);

        if (this._items.length === 0 || position === this._items.length) {
            this._items.length === 0 && this.$stage.append(content);
            this._items.length !== 0 &&
                this._items[position - 1].after(content);
            this._items.push(content);
            this._mergers.push(
                content
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") * 1 || 1
            );
        } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(
                position,
                0,
                content
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") * 1 || 1
            );
        }

        this._items[current] && this.reset(this._items[current].index());

        this.invalidate("items");

        this.trigger("added", { content: content, position: position });
    };

    /**
     * Removes an item by its position.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {Number} position - The relative position of the item to remove.
     */
    Owl.prototype.remove = function(position) {
        position = this.normalize(position, true);

        if (position === undefined) {
            return;
        }

        this.trigger("remove", {
            content: this._items[position],
            position: position
        });

        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);

        this.invalidate("items");

        this.trigger("removed", { content: null, position: position });
    };

    /**
     * Preloads images with auto width.
     * @todo Replace by a more generic approach
     * @protected
     */
    Owl.prototype.preloadAutoWidthImages = function(images) {
        images.each(
            $.proxy(function(i, element) {
                this.enter("pre-loading");
                element = $(element);
                $(new Image())
                    .one(
                        "load",
                        $.proxy(function(e) {
                            element.attr("src", e.target.src);
                            element.css("opacity", 1);
                            this.leave("pre-loading");
                            !this.is("pre-loading") &&
                                !this.is("initializing") &&
                                this.refresh();
                        }, this)
                    )
                    .attr(
                        "src",
                        element.attr("src") ||
                            element.attr("data-src") ||
                            element.attr("data-src-retina")
                    );
            }, this)
        );
    };

    /**
     * Destroys the carousel.
     * @public
     */
    Owl.prototype.destroy = function() {
        this.$element.off(".owl.core");
        this.$stage.off(".owl.core");
        $(document).off(".owl.core");

        if (this.settings.responsive !== false) {
            window.clearTimeout(this.resizeTimer);
            this.off(window, "resize", this._handlers.onThrottledResize);
        }

        for (var i in this._plugins) {
            this._plugins[i].destroy();
        }

        this.$stage.children(".cloned").remove();

        this.$stage.unwrap();
        this.$stage
            .children()
            .contents()
            .unwrap();
        this.$stage.children().unwrap();

        this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr(
                "class",
                this.$element
                    .attr("class")
                    .replace(
                        new RegExp(
                            this.options.responsiveClass + "-\\S+\\s",
                            "g"
                        ),
                        ""
                    )
            )
            .removeData("owl.carousel");
    };

    /**
     * Operators to calculate right-to-left and left-to-right.
     * @protected
     * @param {Number} [a] - The left side operand.
     * @param {String} [o] - The operator.
     * @param {Number} [b] - The right side operand.
     */
    Owl.prototype.op = function(a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case "<":
                return rtl ? a > b : a < b;
            case ">":
                return rtl ? a < b : a > b;
            case ">=":
                return rtl ? a <= b : a >= b;
            case "<=":
                return rtl ? a >= b : a <= b;
            default:
                break;
        }
    };

    /**
     * Attaches to an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The event handler to attach.
     * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
     */
    Owl.prototype.on = function(element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, listener);
        }
    };

    /**
     * Detaches from an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The attached event handler to detach.
     * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
     */
    Owl.prototype.off = function(element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
        } else if (element.detachEvent) {
            element.detachEvent("on" + event, listener);
        }
    };

    /**
     * Triggers a public event.
     * @todo Remove `status`, `relatedTarget` should be used instead.
     * @protected
     * @param {String} name - The event name.
     * @param {*} [data=null] - The event data.
     * @param {String} [namespace=carousel] - The event namespace.
     * @param {String} [state] - The state which is associated with the event.
     * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
     * @returns {Event} - The event arguments.
     */
    Owl.prototype.trigger = function(name, data, namespace, state, enter) {
        var status = {
                item: { count: this._items.length, index: this.current() }
            },
            handler = $.camelCase(
                $.grep(["on", name, namespace], function(v) {
                    return v;
                })
                    .join("-")
                    .toLowerCase()
            ),
            event = $.Event(
                [name, "owl", namespace || "carousel"].join(".").toLowerCase(),
                $.extend({ relatedTarget: this }, status, data)
            );

        if (!this._supress[name]) {
            $.each(this._plugins, function(name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event);
                }
            });

            this.register({ type: Owl.Type.Event, name: name });
            this.$element.trigger(event);

            if (this.settings && typeof this.settings[handler] === "function") {
                this.settings[handler].call(this, event);
            }
        }

        return event;
    };

    /**
     * Enters a state.
     * @param name - The state name.
     */
    Owl.prototype.enter = function(name) {
        $.each(
            [name].concat(this._states.tags[name] || []),
            $.proxy(function(i, name) {
                if (this._states.current[name] === undefined) {
                    this._states.current[name] = 0;
                }

                this._states.current[name]++;
            }, this)
        );
    };

    /**
     * Leaves a state.
     * @param name - The state name.
     */
    Owl.prototype.leave = function(name) {
        $.each(
            [name].concat(this._states.tags[name] || []),
            $.proxy(function(i, name) {
                this._states.current[name]--;
            }, this)
        );
    };

    /**
     * Registers an event or state.
     * @public
     * @param {Object} object - The event or state to register.
     */
    Owl.prototype.register = function(object) {
        if (object.type === Owl.Type.Event) {
            if (!$.event.special[object.name]) {
                $.event.special[object.name] = {};
            }

            if (!$.event.special[object.name].owl) {
                var _default = $.event.special[object.name]._default;
                $.event.special[object.name]._default = function(e) {
                    if (
                        _default &&
                        _default.apply &&
                        (!e.namespace || e.namespace.indexOf("owl") === -1)
                    ) {
                        return _default.apply(this, arguments);
                    }
                    return e.namespace && e.namespace.indexOf("owl") > -1;
                };
                $.event.special[object.name].owl = true;
            }
        } else if (object.type === Owl.Type.State) {
            if (!this._states.tags[object.name]) {
                this._states.tags[object.name] = object.tags;
            } else {
                this._states.tags[object.name] = this._states.tags[
                    object.name
                ].concat(object.tags);
            }

            this._states.tags[object.name] = $.grep(
                this._states.tags[object.name],
                $.proxy(function(tag, i) {
                    return $.inArray(tag, this._states.tags[object.name]) === i;
                }, this)
            );
        }
    };

    /**
     * Suppresses events.
     * @protected
     * @param {Array.<String>} events - The events to suppress.
     */
    Owl.prototype.suppress = function(events) {
        $.each(
            events,
            $.proxy(function(index, event) {
                this._supress[event] = true;
            }, this)
        );
    };

    /**
     * Releases suppressed events.
     * @protected
     * @param {Array.<String>} events - The events to release.
     */
    Owl.prototype.release = function(events) {
        $.each(
            events,
            $.proxy(function(index, event) {
                delete this._supress[event];
            }, this)
        );
    };

    /**
     * Gets unified pointer coordinates from event.
     * @todo #261
     * @protected
     * @param {Event} - The `mousedown` or `touchstart` event.
     * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
     */
    Owl.prototype.pointer = function(event) {
        var result = { x: null, y: null };

        event = event.originalEvent || event || window.event;

        event =
            event.touches && event.touches.length
                ? event.touches[0]
                : event.changedTouches && event.changedTouches.length
                ? event.changedTouches[0]
                : event;

        if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
        } else {
            result.x = event.clientX;
            result.y = event.clientY;
        }

        return result;
    };

    /**
     * Determines if the input is a Number or something that can be coerced to a Number
     * @protected
     * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
     * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
     */
    Owl.prototype.isNumeric = function(number) {
        return !isNaN(parseFloat(number));
    };

    /**
     * Gets the difference of two vectors.
     * @todo #261
     * @protected
     * @param {Object} - The first vector.
     * @param {Object} - The second vector.
     * @returns {Object} - The difference.
     */
    Owl.prototype.difference = function(first, second) {
        return {
            x: first.x - second.x,
            y: first.y - second.y
        };
    };

    /**
     * The jQuery Plugin for the Owl Carousel
     * @todo Navigation plugin `next` and `prev`
     * @public
     */
    $.fn.owlCarousel = function(option) {
        var args = Array.prototype.slice.call(arguments, 1);

        return this.each(function() {
            var $this = $(this),
                data = $this.data("owl.carousel");

            if (!data) {
                data = new Owl(this, typeof option == "object" && option);
                $this.data("owl.carousel", data);

                $.each(
                    [
                        "next",
                        "prev",
                        "to",
                        "destroy",
                        "refresh",
                        "replace",
                        "add",
                        "remove"
                    ],
                    function(i, event) {
                        data.register({ type: Owl.Type.Event, name: event });
                        data.$element.on(
                            event + ".owl.carousel.core",
                            $.proxy(function(e) {
                                if (e.namespace && e.relatedTarget !== this) {
                                    this.suppress([event]);
                                    data[event].apply(
                                        this,
                                        [].slice.call(arguments, 1)
                                    );
                                    this.release([event]);
                                }
                            }, data)
                        );
                    }
                );
            }

            if (typeof option == "string" && option.charAt(0) !== "_") {
                data[option].apply(data, args);
            }
        });
    };

    /**
     * The constructor for the jQuery Plugin
     * @public
     */
    $.fn.owlCarousel.Constructor = Owl;
})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function($, window, document, undefined) {
    /**
     * Creates the auto refresh plugin.
     * @class The Auto Refresh Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoRefresh = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Refresh interval.
         * @protected
         * @type {number}
         */
        this._interval = null;

        /**
         * Whether the element is currently visible or not.
         * @protected
         * @type {Boolean}
         */
        this._visible = null;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            "initialized.owl.carousel": $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoRefresh) {
                    this.watch();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend(
            {},
            AutoRefresh.Defaults,
            this._core.options
        );

        // register event handlers
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    AutoRefresh.Defaults = {
        autoRefresh: true,
        autoRefreshInterval: 500
    };

    /**
     * Watches the element.
     */
    AutoRefresh.prototype.watch = function() {
        if (this._interval) {
            return;
        }

        this._visible = this._core.$element.is(":visible");
        this._interval = window.setInterval(
            $.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
        );
    };

    /**
     * Refreshes the element.
     */
    AutoRefresh.prototype.refresh = function() {
        if (this._core.$element.is(":visible") === this._visible) {
            return;
        }

        this._visible = !this._visible;

        this._core.$element.toggleClass("owl-hidden", !this._visible);

        this._visible && this._core.invalidate("width") && this._core.refresh();
    };

    /**
     * Destroys the plugin.
     */
    AutoRefresh.prototype.destroy = function() {
        var handler, property;

        window.clearInterval(this._interval);

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function($, window, document, undefined) {
    /**
     * Creates the lazy plugin.
     * @class The Lazy Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Lazy = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Already loaded items.
         * @protected
         * @type {Array.<jQuery>}
         */
        this._loaded = [];

        /**
         * Event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": $.proxy(
                function(e) {
                    if (!e.namespace) {
                        return;
                    }

                    if (!this._core.settings || !this._core.settings.lazyLoad) {
                        return;
                    }

                    if (
                        (e.property && e.property.name == "position") ||
                        e.type == "initialized"
                    ) {
                        var settings = this._core.settings,
                            n =
                                (settings.center &&
                                    Math.ceil(settings.items / 2)) ||
                                settings.items,
                            i = (settings.center && n * -1) || 0,
                            position =
                                (e.property && e.property.value !== undefined
                                    ? e.property.value
                                    : this._core.current()) + i,
                            clones = this._core.clones().length,
                            load = $.proxy(function(i, v) {
                                this.load(v);
                            }, this);

                        while (i++ < n) {
                            this.load(
                                clones / 2 + this._core.relative(position)
                            );
                            clones &&
                                $.each(
                                    this._core.clones(
                                        this._core.relative(position)
                                    ),
                                    load
                                );
                            position++;
                        }
                    }
                },
                this
            )
        };

        // set the default options
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

        // register event handler
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    Lazy.Defaults = {
        lazyLoad: false
    };

    /**
     * Loads all resources of an item at the specified position.
     * @param {Number} position - The absolute position of the item.
     * @protected
     */
    Lazy.prototype.load = function(position) {
        var $item = this._core.$stage.children().eq(position),
            $elements = $item && $item.find(".owl-lazy");

        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return;
        }

        $elements.each(
            $.proxy(function(index, element) {
                var $element = $(element),
                    image,
                    url =
                        (window.devicePixelRatio > 1 &&
                            $element.attr("data-src-retina")) ||
                        $element.attr("data-src");

                this._core.trigger(
                    "load",
                    { element: $element, url: url },
                    "lazy"
                );

                if ($element.is("img")) {
                    $element
                        .one(
                            "load.owl.lazy",
                            $.proxy(function() {
                                $element.css("opacity", 1);
                                this._core.trigger(
                                    "loaded",
                                    { element: $element, url: url },
                                    "lazy"
                                );
                            }, this)
                        )
                        .attr("src", url);
                } else {
                    image = new Image();
                    image.onload = $.proxy(function() {
                        $element.css({
                            "background-image": 'url("' + url + '")',
                            opacity: "1"
                        });
                        this._core.trigger(
                            "loaded",
                            { element: $element, url: url },
                            "lazy"
                        );
                    }, this);
                    image.src = url;
                }
            }, this)
        );

        this._loaded.push($item.get(0));
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Lazy.prototype.destroy = function() {
        var handler, property;

        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function($, window, document, undefined) {
    /**
     * Creates the auto height plugin.
     * @class The Auto Height Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoHeight = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": $.proxy(function(
                e
            ) {
                if (e.namespace && this._core.settings.autoHeight) {
                    this.update();
                }
            },
            this),
            "changed.owl.carousel": $.proxy(function(e) {
                if (
                    e.namespace &&
                    this._core.settings.autoHeight &&
                    e.property.name == "position"
                ) {
                    this.update();
                }
            }, this),
            "loaded.owl.lazy": $.proxy(function(e) {
                if (
                    e.namespace &&
                    this._core.settings.autoHeight &&
                    e.element
                        .closest("." + this._core.settings.itemClass)
                        .index() === this._core.current()
                ) {
                    this.update();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend(
            {},
            AutoHeight.Defaults,
            this._core.options
        );

        // register event handlers
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    AutoHeight.Defaults = {
        autoHeight: false,
        autoHeightClass: "owl-height"
    };

    /**
     * Updates the view.
     */
    AutoHeight.prototype.update = function() {
        var start = this._core._current,
            end = start + this._core.settings.items,
            visible = this._core.$stage
                .children()
                .toArray()
                .slice(start, end),
            heights = [],
            maxheight = 0;

        $.each(visible, function(index, item) {
            heights.push($(item).height());
        });

        maxheight = Math.max.apply(null, heights);

        this._core.$stage
            .parent()
            .height(maxheight)
            .addClass(this._core.settings.autoHeightClass);
    };

    AutoHeight.prototype.destroy = function() {
        var handler, property;

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function($, window, document, undefined) {
    /**
     * Creates the video plugin.
     * @class The Video Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Video = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Cache all video URLs.
         * @protected
         * @type {Object}
         */
        this._videos = {};

        /**
         * Current playing item.
         * @protected
         * @type {jQuery}
         */
        this._playing = null;

        /**
         * All event handlers.
         * @todo The cloned content removale is too late
         * @protected
         * @type {Object}
         */
        this._handlers = {
            "initialized.owl.carousel": $.proxy(function(e) {
                if (e.namespace) {
                    this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    });
                }
            }, this),
            "resize.owl.carousel": $.proxy(function(e) {
                if (
                    e.namespace &&
                    this._core.settings.video &&
                    this.isInFullScreen()
                ) {
                    e.preventDefault();
                }
            }, this),
            "refreshed.owl.carousel": $.proxy(function(e) {
                if (e.namespace && this._core.is("resizing")) {
                    this._core.$stage.find(".cloned .owl-video-frame").remove();
                }
            }, this),
            "changed.owl.carousel": $.proxy(function(e) {
                if (
                    e.namespace &&
                    e.property.name === "position" &&
                    this._playing
                ) {
                    this.stop();
                }
            }, this),
            "prepared.owl.carousel": $.proxy(function(e) {
                if (!e.namespace) {
                    return;
                }

                var $element = $(e.content).find(".owl-video");

                if ($element.length) {
                    $element.css("display", "none");
                    this.fetch($element, $(e.content));
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Video.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);

        this._core.$element.on(
            "click.owl.video",
            ".owl-video-play-icon",
            $.proxy(function(e) {
                this.play(e);
            }, this)
        );
    };

    /**
     * Default options.
     * @public
     */
    Video.Defaults = {
        video: false,
        videoHeight: false,
        videoWidth: false
    };

    /**
     * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {jQuery} item - The item containing the video.
     */
    Video.prototype.fetch = function(target, item) {
        var type = (function() {
                if (target.attr("data-vimeo-id")) {
                    return "vimeo";
                } else if (target.attr("data-vzaar-id")) {
                    return "vzaar";
                } else {
                    return "youtube";
                }
            })(),
            id =
                target.attr("data-vimeo-id") ||
                target.attr("data-youtube-id") ||
                target.attr("data-vzaar-id"),
            width = target.attr("data-width") || this._core.settings.videoWidth,
            height =
                target.attr("data-height") || this._core.settings.videoHeight,
            url = target.attr("href");

        if (url) {
            /*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

            id = url.match(
                /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
            );

            if (id[3].indexOf("youtu") > -1) {
                type = "youtube";
            } else if (id[3].indexOf("vimeo") > -1) {
                type = "vimeo";
            } else if (id[3].indexOf("vzaar") > -1) {
                type = "vzaar";
            } else {
                throw new Error("Video URL not supported.");
            }
            id = id[6];
        } else {
            throw new Error("Missing video URL.");
        }

        this._videos[url] = {
            type: type,
            id: id,
            width: width,
            height: height
        };

        item.attr("data-video", url);

        this.thumbnail(target, this._videos[url]);
    };

    /**
     * Creates video thumbnail.
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {Object} info - The video info object.
     * @see `fetch`
     */
    Video.prototype.thumbnail = function(target, video) {
        var tnLink,
            icon,
            path,
            dimensions =
                video.width && video.height
                    ? 'style="width:' +
                      video.width +
                      "px;height:" +
                      video.height +
                      'px;"'
                    : "",
            customTn = target.find("img"),
            srcType = "src",
            lazyClass = "",
            settings = this._core.settings,
            create = function(path) {
                icon = '<div class="owl-video-play-icon"></div>';

                if (settings.lazyLoad) {
                    tnLink =
                        '<div class="owl-video-tn ' +
                        lazyClass +
                        '" ' +
                        srcType +
                        '="' +
                        path +
                        '"></div>';
                } else {
                    tnLink =
                        '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                        path +
                        ')"></div>';
                }
                target.after(tnLink);
                target.after(icon);
            };

        // wrap video content into owl-video-wrapper div
        target.wrap('<div class="owl-video-wrapper"' + dimensions + "></div>");

        if (this._core.settings.lazyLoad) {
            srcType = "data-src";
            lazyClass = "owl-lazy";
        }

        // custom thumbnail
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
        }

        if (video.type === "youtube") {
            path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path);
        } else if (video.type === "vimeo") {
            $.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + video.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(data) {
                    path = data[0].thumbnail_large;
                    create(path);
                }
            });
        } else if (video.type === "vzaar") {
            $.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + video.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(data) {
                    path = data.framegrab_url;
                    create(path);
                }
            });
        }
    };

    /**
     * Stops the current video.
     * @public
     */
    Video.prototype.stop = function() {
        this._core.trigger("stop", null, "video");
        this._playing.find(".owl-video-frame").remove();
        this._playing.removeClass("owl-video-playing");
        this._playing = null;
        this._core.leave("playing");
        this._core.trigger("stopped", null, "video");
    };

    /**
     * Starts the current video.
     * @public
     * @param {Event} event - The event arguments.
     */
    Video.prototype.play = function(event) {
        var target = $(event.target),
            item = target.closest("." + this._core.settings.itemClass),
            video = this._videos[item.attr("data-video")],
            width = video.width || "100%",
            height = video.height || this._core.$stage.height(),
            html;

        if (this._playing) {
            return;
        }

        this._core.enter("playing");
        this._core.trigger("play", null, "video");

        item = this._core.items(this._core.relative(item.index()));

        this._core.reset(item.index());

        if (video.type === "youtube") {
            html =
                '<iframe width="' +
                width +
                '" height="' +
                height +
                '" src="//www.youtube.com/embed/' +
                video.id +
                "?autoplay=1&rel=0&v=" +
                video.id +
                '" frameborder="0" allowfullscreen></iframe>';
        } else if (video.type === "vimeo") {
            html =
                '<iframe src="//player.vimeo.com/video/' +
                video.id +
                '?autoplay=1" width="' +
                width +
                '" height="' +
                height +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        } else if (video.type === "vzaar") {
            html =
                '<iframe frameborder="0"' +
                'height="' +
                height +
                '"' +
                'width="' +
                width +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
                'src="//view.vzaar.com/' +
                video.id +
                '/player?autoplay=true"></iframe>';
        }

        $('<div class="owl-video-frame">' + html + "</div>").insertAfter(
            item.find(".owl-video")
        );

        this._playing = item.addClass("owl-video-playing");
    };

    /**
     * Checks whether an video is currently in full screen mode or not.
     * @todo Bad style because looks like a readonly method but changes members.
     * @protected
     * @returns {Boolean}
     */
    Video.prototype.isInFullScreen = function() {
        var element =
            document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement;

        return (
            element &&
            $(element)
                .parent()
                .hasClass("owl-video-frame")
        );
    };

    /**
     * Destroys the plugin.
     */
    Video.prototype.destroy = function() {
        var handler, property;

        this._core.$element.off("click.owl.video");

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function($, window, document, undefined) {
    /**
     * Creates the animate plugin.
     * @class The Navigation Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Animate = function(scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined;
        this.next = undefined;

        this.handlers = {
            "change.owl.carousel": $.proxy(function(e) {
                if (e.namespace && e.property.name == "position") {
                    this.previous = this.core.current();
                    this.next = e.property.value;
                }
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": $.proxy(
                function(e) {
                    if (e.namespace) {
                        this.swapping = e.type == "translated";
                    }
                },
                this
            ),
            "translate.owl.carousel": $.proxy(function(e) {
                if (
                    e.namespace &&
                    this.swapping &&
                    (this.core.options.animateOut ||
                        this.core.options.animateIn)
                ) {
                    this.swap();
                }
            }, this)
        };

        this.core.$element.on(this.handlers);
    };

    /**
     * Default options.
     * @public
     */
    Animate.Defaults = {
        animateOut: false,
        animateIn: false
    };

    /**
     * Toggles the animation classes whenever an translations starts.
     * @protected
     * @returns {Boolean|undefined}
     */
    Animate.prototype.swap = function() {
        if (this.core.settings.items !== 1) {
            return;
        }

        if (!$.support.animation || !$.support.transition) {
            return;
        }

        this.core.speed(0);

        var left,
            clear = $.proxy(this.clear, this),
            previous = this.core.$stage.children().eq(this.previous),
            next = this.core.$stage.children().eq(this.next),
            incoming = this.core.settings.animateIn,
            outgoing = this.core.settings.animateOut;

        if (this.core.current() === this.previous) {
            return;
        }

        if (outgoing) {
            left =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next);
            previous
                .one($.support.animation.end, clear)
                .css({ left: left + "px" })
                .addClass("animated owl-animated-out")
                .addClass(outgoing);
        }

        if (incoming) {
            next.one($.support.animation.end, clear)
                .addClass("animated owl-animated-in")
                .addClass(incoming);
        }
    };

    Animate.prototype.clear = function(e) {
        $(e.target)
            .css({ left: "" })
            .removeClass("animated owl-animated-out owl-animated-in")
            .removeClass(this.core.settings.animateIn)
            .removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd();
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Animate.prototype.destroy = function() {
        var handler, property;

        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function($, window, document, undefined) {
    /**
     * Creates the autoplay plugin.
     * @class The Autoplay Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Autoplay = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * The autoplay timeout.
         * @type {Timeout}
         */
        this._timeout = null;

        /**
         * Indicates whenever the autoplay is paused.
         * @type {Boolean}
         */
        this._paused = false;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            "changed.owl.carousel": $.proxy(function(e) {
                if (e.namespace && e.property.name === "settings") {
                    if (this._core.settings.autoplay) {
                        this.play();
                    } else {
                        this.stop();
                    }
                } else if (e.namespace && e.property.name === "position") {
                    //console.log('play?', e);
                    if (this._core.settings.autoplay) {
                        this._setAutoPlayInterval();
                    }
                }
            }, this),
            "initialized.owl.carousel": $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoplay) {
                    this.play();
                }
            }, this),
            "play.owl.autoplay": $.proxy(function(e, t, s) {
                if (e.namespace) {
                    this.play(t, s);
                }
            }, this),
            "stop.owl.autoplay": $.proxy(function(e) {
                if (e.namespace) {
                    this.stop();
                }
            }, this),
            "mouseover.owl.autoplay": $.proxy(function() {
                if (
                    this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating")
                ) {
                    this.pause();
                }
            }, this),
            "mouseleave.owl.autoplay": $.proxy(function() {
                if (
                    this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating")
                ) {
                    this.play();
                }
            }, this),
            "touchstart.owl.core": $.proxy(function() {
                if (
                    this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating")
                ) {
                    this.pause();
                }
            }, this),
            "touchend.owl.core": $.proxy(function() {
                if (this._core.settings.autoplayHoverPause) {
                    this.play();
                }
            }, this)
        };

        // register event handlers
        this._core.$element.on(this._handlers);

        // set default options
        this._core.options = $.extend(
            {},
            Autoplay.Defaults,
            this._core.options
        );
    };

    /**
     * Default options.
     * @public
     */
    Autoplay.Defaults = {
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoplaySpeed: false
    };

    /**
     * Starts the autoplay.
     * @public
     * @param {Number} [timeout] - The interval before the next animation starts.
     * @param {Number} [speed] - The animation speed for the animations.
     */
    Autoplay.prototype.play = function(timeout, speed) {
        this._paused = false;

        if (this._core.is("rotating")) {
            return;
        }

        this._core.enter("rotating");

        this._setAutoPlayInterval();
    };

    /**
     * Gets a new timeout
     * @private
     * @param {Number} [timeout] - The interval before the next animation starts.
     * @param {Number} [speed] - The animation speed for the animations.
     * @return {Timeout}
     */
    Autoplay.prototype._getNextTimeout = function(timeout, speed) {
        if (this._timeout) {
            window.clearTimeout(this._timeout);
        }
        return window.setTimeout(
            $.proxy(function() {
                if (
                    this._paused ||
                    this._core.is("busy") ||
                    this._core.is("interacting") ||
                    document.hidden
                ) {
                    return;
                }
                this._core.next(speed || this._core.settings.autoplaySpeed);
            }, this),
            timeout || this._core.settings.autoplayTimeout
        );
    };

    /**
     * Sets autoplay in motion.
     * @private
     */
    Autoplay.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout();
    };

    /**
     * Stops the autoplay.
     * @public
     */
    Autoplay.prototype.stop = function() {
        if (!this._core.is("rotating")) {
            return;
        }

        window.clearTimeout(this._timeout);
        this._core.leave("rotating");
    };

    /**
     * Stops the autoplay.
     * @public
     */
    Autoplay.prototype.pause = function() {
        if (!this._core.is("rotating")) {
            return;
        }

        this._paused = true;
    };

    /**
     * Destroys the plugin.
     */
    Autoplay.prototype.destroy = function() {
        var handler, property;

        this.stop();

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function($, window, document, undefined) {
    "use strict";

    /**
     * Creates the navigation plugin.
     * @class The Navigation Plugin
     * @param {Owl} carousel - The Owl Carousel.
     */
    var Navigation = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Indicates whether the plugin is initialized or not.
         * @protected
         * @type {Boolean}
         */
        this._initialized = false;

        /**
         * The current paging indexes.
         * @protected
         * @type {Array}
         */
        this._pages = [];

        /**
         * All DOM elements of the user interface.
         * @protected
         * @type {Object}
         */
        this._controls = {};

        /**
         * Markup for an indicator.
         * @protected
         * @type {Array.<String>}
         */
        this._templates = [];

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * Overridden methods of the carousel.
         * @protected
         * @type {Object}
         */
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            "prepared.owl.carousel": $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.push(
                        '<div class="' +
                            this._core.settings.dotClass +
                            '">' +
                            $(e.content)
                                .find("[data-dot]")
                                .addBack("[data-dot]")
                                .attr("data-dot") +
                            "</div>"
                    );
                }
            }, this),
            "added.owl.carousel": $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(
                        e.position,
                        0,
                        this._templates.pop()
                    );
                }
            }, this),
            "remove.owl.carousel": $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1);
                }
            }, this),
            "changed.owl.carousel": $.proxy(function(e) {
                if (e.namespace && e.property.name == "position") {
                    this.draw();
                }
            }, this),
            "initialized.owl.carousel": $.proxy(function(e) {
                if (e.namespace && !this._initialized) {
                    this._core.trigger("initialize", null, "navigation");
                    this.initialize();
                    this.update();
                    this.draw();
                    this._initialized = true;
                    this._core.trigger("initialized", null, "navigation");
                }
            }, this),
            "refreshed.owl.carousel": $.proxy(function(e) {
                if (e.namespace && this._initialized) {
                    this._core.trigger("refresh", null, "navigation");
                    this.update();
                    this.draw();
                    this._core.trigger("refreshed", null, "navigation");
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend(
            {},
            Navigation.Defaults,
            this._core.options
        );

        // register event handlers
        this.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     * @todo Rename `slideBy` to `navBy`
     */
    Navigation.Defaults = {
        nav: false,
        navText: ["prev", "next"],
        navSpeed: false,
        navElement: "div",
        navContainer: false,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: true,
        dotsEach: false,
        dotsData: false,
        dotsSpeed: false,
        dotsContainer: false
    };

    /**
     * Initializes the layout of the plugin and extends the carousel.
     * @protected
     */
    Navigation.prototype.initialize = function() {
        var override,
            settings = this._core.settings;

        // create DOM structure for relative navigation
        this._controls.$relative = (settings.navContainer
            ? $(settings.navContainer)
            : $("<div>")
                  .addClass(settings.navContainerClass)
                  .appendTo(this.$element)
        ).addClass("disabled");

        this._controls.$previous = $("<" + settings.navElement + ">")
            .addClass(settings.navClass[0])
            .html(settings.navText[0])
            .prependTo(this._controls.$relative)
            .on(
                "click",
                $.proxy(function(e) {
                    this.prev(settings.navSpeed);
                }, this)
            );
        this._controls.$next = $("<" + settings.navElement + ">")
            .addClass(settings.navClass[1])
            .html(settings.navText[1])
            .appendTo(this._controls.$relative)
            .on(
                "click",
                $.proxy(function(e) {
                    this.next(settings.navSpeed);
                }, this)
            );

        // create DOM structure for absolute navigation
        if (!settings.dotsData) {
            this._templates = [
                $("<div>")
                    .addClass(settings.dotClass)
                    .append($("<span>"))
                    .prop("outerHTML")
            ];
        }

        this._controls.$absolute = (settings.dotsContainer
            ? $(settings.dotsContainer)
            : $("<div>")
                  .addClass(settings.dotsClass)
                  .appendTo(this.$element)
        ).addClass("disabled");

        this._controls.$absolute.on(
            "click",
            "div",
            $.proxy(function(e) {
                var index = $(e.target)
                    .parent()
                    .is(this._controls.$absolute)
                    ? $(e.target).index()
                    : $(e.target)
                          .parent()
                          .index();

                e.preventDefault();

                this.to(index, settings.dotsSpeed);
            }, this)
        );

        // override public methods of the carousel
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this);
        }
    };

    /**
     * Destroys the plugin.
     * @protected
     */
    Navigation.prototype.destroy = function() {
        var handler, control, property, override;

        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
            this._controls[control].remove();
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override];
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };

    /**
     * Updates the internal state.
     * @protected
     */
    Navigation.prototype.update = function() {
        var i,
            j,
            k,
            lower = this._core.clones().length / 2,
            upper = lower + this._core.items().length,
            maximum = this._core.maximum(true),
            settings = this._core.settings,
            size =
                settings.center || settings.autoWidth || settings.dotsData
                    ? 1
                    : settings.dotsEach || settings.items;

        if (settings.slideBy !== "page") {
            settings.slideBy = Math.min(settings.slideBy, settings.items);
        }

        if (settings.dots || settings.slideBy == "page") {
            this._pages = [];

            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({
                        start: Math.min(maximum, i - lower),
                        end: i - lower + size - 1
                    });
                    if (Math.min(maximum, i - lower) === maximum) {
                        break;
                    }
                    (j = 0), ++k;
                }
                j += this._core.mergers(this._core.relative(i));
            }
        }
    };

    /**
     * Draws the user interface.
     * @todo The option `dotsData` wont work.
     * @protected
     */
    Navigation.prototype.draw = function() {
        var difference,
            settings = this._core.settings,
            disabled = this._core.items().length <= settings.items,
            index = this._core.relative(this._core.current()),
            loop = settings.loop || settings.rewind;

        this._controls.$relative.toggleClass(
            "disabled",
            !settings.nav || disabled
        );

        if (settings.nav) {
            this._controls.$previous.toggleClass(
                "disabled",
                !loop && index <= this._core.minimum(true)
            );
            this._controls.$next.toggleClass(
                "disabled",
                !loop && index >= this._core.maximum(true)
            );
        }

        this._controls.$absolute.toggleClass(
            "disabled",
            !settings.dots || disabled
        );

        if (settings.dots) {
            difference =
                this._pages.length - this._controls.$absolute.children().length;

            if (settings.dotsData && difference !== 0) {
                this._controls.$absolute.html(this._templates.join(""));
            } else if (difference > 0) {
                this._controls.$absolute.append(
                    new Array(difference + 1).join(this._templates[0])
                );
            } else if (difference < 0) {
                this._controls.$absolute
                    .children()
                    .slice(difference)
                    .remove();
            }

            this._controls.$absolute.find(".active").removeClass("active");
            this._controls.$absolute
                .children()
                .eq($.inArray(this.current(), this._pages))
                .addClass("active");
        }
    };

    /**
     * Extends event data.
     * @protected
     * @param {Event} event - The event object which gets thrown.
     */
    Navigation.prototype.onTrigger = function(event) {
        var settings = this._core.settings;

        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size:
                settings &&
                (settings.center || settings.autoWidth || settings.dotsData
                    ? 1
                    : settings.dotsEach || settings.items)
        };
    };

    /**
     * Gets the current page position of the carousel.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.current = function() {
        var current = this._core.relative(this._core.current());
        return $.grep(
            this._pages,
            $.proxy(function(page, index) {
                return page.start <= current && page.end >= current;
            }, this)
        ).pop();
    };

    /**
     * Gets the current succesor/predecessor position.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.getPosition = function(successor) {
        var position,
            length,
            settings = this._core.settings;

        if (settings.slideBy == "page") {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[((position % length) + length) % length]
                .start;
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor
                ? (position += settings.slideBy)
                : (position -= settings.slideBy);
        }

        return position;
    };

    /**
     * Slides to the next item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.next = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    };

    /**
     * Slides to the previous item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.prev = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    };

    /**
     * Slides to the specified item or page.
     * @public
     * @param {Number} position - The position of the item or page.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
     */
    Navigation.prototype.to = function(position, speed, standard) {
        var length;

        if (!standard && this._pages.length) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(
                this._pages[((position % length) + length) % length].start,
                speed
            );
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function($, window, document, undefined) {
    "use strict";

    /**
     * Creates the hash plugin.
     * @class The Hash Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Hash = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Hash index for the items.
         * @protected
         * @type {Object}
         */
        this._hashes = {};

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            "initialized.owl.carousel": $.proxy(function(e) {
                if (
                    e.namespace &&
                    this._core.settings.startPosition === "URLHash"
                ) {
                    $(window).trigger("hashchange.owl.navigation");
                }
            }, this),
            "prepared.owl.carousel": $.proxy(function(e) {
                if (e.namespace) {
                    var hash = $(e.content)
                        .find("[data-hash]")
                        .addBack("[data-hash]")
                        .attr("data-hash");

                    if (!hash) {
                        return;
                    }

                    this._hashes[hash] = e.content;
                }
            }, this),
            "changed.owl.carousel": $.proxy(function(e) {
                if (e.namespace && e.property.name === "position") {
                    var current = this._core.items(
                            this._core.relative(this._core.current())
                        ),
                        hash = $.map(this._hashes, function(item, hash) {
                            return item === current ? hash : null;
                        }).join();

                    if (!hash || window.location.hash.slice(1) === hash) {
                        return;
                    }

                    window.location.hash = hash;
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);

        // register the event handlers
        this.$element.on(this._handlers);

        // register event listener for hash navigation
        $(window).on(
            "hashchange.owl.navigation",
            $.proxy(function(e) {
                var hash = window.location.hash.substring(1),
                    items = this._core.$stage.children(),
                    position =
                        this._hashes[hash] && items.index(this._hashes[hash]);

                if (
                    position === undefined ||
                    position === this._core.current()
                ) {
                    return;
                }

                this._core.to(this._core.relative(position), false, true);
            }, this)
        );
    };

    /**
     * Default options.
     * @public
     */
    Hash.Defaults = {
        URLhashListener: false
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Hash.prototype.destroy = function() {
        var handler, property;

        $(window).off("hashchange.owl.navigation");

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function($, window, document, undefined) {
    var style = $("<support>").get(0).style,
        prefixes = "Webkit Moz O ms".split(" "),
        events = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        tests = {
            csstransforms: function() {
                return !!test("transform");
            },
            csstransforms3d: function() {
                return !!test("perspective");
            },
            csstransitions: function() {
                return !!test("transition");
            },
            cssanimations: function() {
                return !!test("animation");
            }
        };

    function test(property, prefixed) {
        var result = false,
            upper = property.charAt(0).toUpperCase() + property.slice(1);

        $.each(
            (property + " " + prefixes.join(upper + " ") + upper).split(" "),
            function(i, property) {
                if (style[property] !== undefined) {
                    result = prefixed ? property : true;
                    return false;
                }
            }
        );

        return result;
    }

    function prefixed(property) {
        return test(property, true);
    }

    if (tests.csstransitions()) {
        /* jshint -W053 */
        $.support.transition = new String(prefixed("transition"));
        $.support.transition.end = events.transition.end[$.support.transition];
    }

    if (tests.cssanimations()) {
        /* jshint -W053 */
        $.support.animation = new String(prefixed("animation"));
        $.support.animation.end = events.animation.end[$.support.animation];
    }

    if (tests.csstransforms()) {
        /* jshint -W053 */
        $.support.transform = new String(prefixed("transform"));
        $.support.transform3d = tests.csstransforms3d();
    }
})(window.Zepto || window.jQuery, window, document);

(function($) {
    "use strict";

    var RangeSlider = function function_name(el) {
        this.$el = $(el);
        var self = this;
        var start = this.$el.attr("start");
        var range = this.$el.attr("range");
        this.start = start ? JSON.parse(start) : [0, 100];
        this.range = range ? JSON.parse(range) : { min: 0, max: 100 };
        this.slider = noUiSlider.create(this.$el.find(".slider").get(0), {
            direction: "rtl",
            start: this.start,
            step: 1,
            range: this.range,
            connect: false
            // connect: [true, false, true],
            // margin: 1,
        });

        var snapValues = this.$el.find(".values div span");
        this.slider.on("update", function(values, handle) {
            var value = parseFloat(values[handle]).toFixed(0);
            if (value == self.range.max) value = "+" + value;
            snapValues[handle].innerHTML = persianJs(addCommas(value))
                .englishNumber()
                .toString();
        });
    };

    $(document).ready(function($) {
        $(".range-slider").each(function(index, el) {
            $(this).data("rangeslider", new RangeSlider(this));
        });
    });
})(jQuery);
/*!
 * Select2 4.0.5
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function(factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(["jquery"], factory);
    } else if (typeof module === "object" && module.exports) {
        // Node/CommonJS
        module.exports = function(root, jQuery) {
            if (jQuery === undefined) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if (typeof window !== "undefined") {
                    jQuery = require("jquery");
                } else {
                    jQuery = require("jquery")(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
})(function(jQuery) {
    // This is needed so we can catch the AMD loader configuration and use it
    // The inner file should be wrapped (by `banner.start.js`) in a function that
    // returns the AMD loader references.
    var S2 = (function() {
        // Restore the Select2 AMD loader so it can be used
        // Needed mostly in the language files, where the loader is not inserted
        if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
            var S2 = jQuery.fn.select2.amd;
        }
        var S2;
        (function() {
            if (!S2 || !S2.requirejs) {
                if (!S2) {
                    S2 = {};
                } else {
                    require = S2;
                }
                /**
                 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
                 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
                 */
                //Going sloppy to avoid 'use strict' string cost, but strict practices should
                //be followed.
                /*global setTimeout: false */

                var requirejs, require, define;
                (function(undef) {
                    var main,
                        req,
                        makeMap,
                        handlers,
                        defined = {},
                        waiting = {},
                        config = {},
                        defining = {},
                        hasOwn = Object.prototype.hasOwnProperty,
                        aps = [].slice,
                        jsSuffixRegExp = /\.js$/;

                    function hasProp(obj, prop) {
                        return hasOwn.call(obj, prop);
                    }

                    /**
                     * Given a relative module name, like ./something, normalize it to
                     * a real name that can be mapped to a path.
                     * @param {String} name the relative name
                     * @param {String} baseName a real name that the name arg is relative
                     * to.
                     * @returns {String} normalized name
                     */
                    function normalize(name, baseName) {
                        var nameParts,
                            nameSegment,
                            mapValue,
                            foundMap,
                            lastIndex,
                            foundI,
                            foundStarMap,
                            starI,
                            i,
                            j,
                            part,
                            normalizedBaseParts,
                            baseParts = baseName && baseName.split("/"),
                            map = config.map,
                            starMap = (map && map["*"]) || {};

                        //Adjust any relative paths.
                        if (name) {
                            name = name.split("/");
                            lastIndex = name.length - 1;

                            // If wanting node ID compatibility, strip .js from end
                            // of IDs. Have to do this here, and not in nameToUrl
                            // because node allows either .js or non .js to map
                            // to same file.
                            if (
                                config.nodeIdCompat &&
                                jsSuffixRegExp.test(name[lastIndex])
                            ) {
                                name[lastIndex] = name[lastIndex].replace(
                                    jsSuffixRegExp,
                                    ""
                                );
                            }

                            // Starts with a '.' so need the baseName
                            if (name[0].charAt(0) === "." && baseParts) {
                                //Convert baseName to array, and lop off the last part,
                                //so that . matches that 'directory' and not name of the baseName's
                                //module. For instance, baseName of 'one/two/three', maps to
                                //'one/two/three.js', but we want the directory, 'one/two' for
                                //this normalization.
                                normalizedBaseParts = baseParts.slice(
                                    0,
                                    baseParts.length - 1
                                );
                                name = normalizedBaseParts.concat(name);
                            }

                            //start trimDots
                            for (i = 0; i < name.length; i++) {
                                part = name[i];
                                if (part === ".") {
                                    name.splice(i, 1);
                                    i -= 1;
                                } else if (part === "..") {
                                    // If at the start, or previous value is still ..,
                                    // keep them so that when converted to a path it may
                                    // still work when converted to a path, even though
                                    // as an ID it is less than ideal. In larger point
                                    // releases, may be better to just kick out an error.
                                    if (
                                        i === 0 ||
                                        (i === 1 && name[2] === "..") ||
                                        name[i - 1] === ".."
                                    ) {
                                        continue;
                                    } else if (i > 0) {
                                        name.splice(i - 1, 2);
                                        i -= 2;
                                    }
                                }
                            }
                            //end trimDots

                            name = name.join("/");
                        }

                        //Apply map config if available.
                        if ((baseParts || starMap) && map) {
                            nameParts = name.split("/");

                            for (i = nameParts.length; i > 0; i -= 1) {
                                nameSegment = nameParts.slice(0, i).join("/");

                                if (baseParts) {
                                    //Find the longest baseName segment match in the config.
                                    //So, do joins on the biggest to smallest lengths of baseParts.
                                    for (j = baseParts.length; j > 0; j -= 1) {
                                        mapValue =
                                            map[
                                                baseParts.slice(0, j).join("/")
                                            ];

                                        //baseName segment has  config, find if it has one for
                                        //this name.
                                        if (mapValue) {
                                            mapValue = mapValue[nameSegment];
                                            if (mapValue) {
                                                //Match, update name to the new value.
                                                foundMap = mapValue;
                                                foundI = i;
                                                break;
                                            }
                                        }
                                    }
                                }

                                if (foundMap) {
                                    break;
                                }

                                //Check for a star map match, but just hold on to it,
                                //if there is a shorter segment match later in a matching
                                //config, then favor over this star map.
                                if (
                                    !foundStarMap &&
                                    starMap &&
                                    starMap[nameSegment]
                                ) {
                                    foundStarMap = starMap[nameSegment];
                                    starI = i;
                                }
                            }

                            if (!foundMap && foundStarMap) {
                                foundMap = foundStarMap;
                                foundI = starI;
                            }

                            if (foundMap) {
                                nameParts.splice(0, foundI, foundMap);
                                name = nameParts.join("/");
                            }
                        }

                        return name;
                    }

                    function makeRequire(relName, forceSync) {
                        return function() {
                            //A version of a require function that passes a moduleName
                            //value for items that may need to
                            //look up paths relative to the moduleName
                            var args = aps.call(arguments, 0);

                            //If first arg is not require('string'), and there is only
                            //one arg, it is the array form without a callback. Insert
                            //a null so that the following concat is correct.
                            if (
                                typeof args[0] !== "string" &&
                                args.length === 1
                            ) {
                                args.push(null);
                            }
                            return req.apply(
                                undef,
                                args.concat([relName, forceSync])
                            );
                        };
                    }

                    function makeNormalize(relName) {
                        return function(name) {
                            return normalize(name, relName);
                        };
                    }

                    function makeLoad(depName) {
                        return function(value) {
                            defined[depName] = value;
                        };
                    }

                    function callDep(name) {
                        if (hasProp(waiting, name)) {
                            var args = waiting[name];
                            delete waiting[name];
                            defining[name] = true;
                            main.apply(undef, args);
                        }

                        if (
                            !hasProp(defined, name) &&
                            !hasProp(defining, name)
                        ) {
                            throw new Error("No " + name);
                        }
                        return defined[name];
                    }

                    //Turns a plugin!resource to [plugin, resource]
                    //with the plugin being undefined if the name
                    //did not have a plugin prefix.
                    function splitPrefix(name) {
                        var prefix,
                            index = name ? name.indexOf("!") : -1;
                        if (index > -1) {
                            prefix = name.substring(0, index);
                            name = name.substring(index + 1, name.length);
                        }
                        return [prefix, name];
                    }

                    //Creates a parts array for a relName where first part is plugin ID,
                    //second part is resource ID. Assumes relName has already been normalized.
                    function makeRelParts(relName) {
                        return relName ? splitPrefix(relName) : [];
                    }

                    /**
                     * Makes a name map, normalizing the name, and using a plugin
                     * for normalization if necessary. Grabs a ref to plugin
                     * too, as an optimization.
                     */
                    makeMap = function(name, relParts) {
                        var plugin,
                            parts = splitPrefix(name),
                            prefix = parts[0],
                            relResourceName = relParts[1];

                        name = parts[1];

                        if (prefix) {
                            prefix = normalize(prefix, relResourceName);
                            plugin = callDep(prefix);
                        }

                        //Normalize according
                        if (prefix) {
                            if (plugin && plugin.normalize) {
                                name = plugin.normalize(
                                    name,
                                    makeNormalize(relResourceName)
                                );
                            } else {
                                name = normalize(name, relResourceName);
                            }
                        } else {
                            name = normalize(name, relResourceName);
                            parts = splitPrefix(name);
                            prefix = parts[0];
                            name = parts[1];
                            if (prefix) {
                                plugin = callDep(prefix);
                            }
                        }

                        //Using ridiculous property names for space reasons
                        return {
                            f: prefix ? prefix + "!" + name : name, //fullName
                            n: name,
                            pr: prefix,
                            p: plugin
                        };
                    };

                    function makeConfig(name) {
                        return function() {
                            return (
                                (config &&
                                    config.config &&
                                    config.config[name]) ||
                                {}
                            );
                        };
                    }

                    handlers = {
                        require: function(name) {
                            return makeRequire(name);
                        },
                        exports: function(name) {
                            var e = defined[name];
                            if (typeof e !== "undefined") {
                                return e;
                            } else {
                                return (defined[name] = {});
                            }
                        },
                        module: function(name) {
                            return {
                                id: name,
                                uri: "",
                                exports: defined[name],
                                config: makeConfig(name)
                            };
                        }
                    };

                    main = function(name, deps, callback, relName) {
                        var cjsModule,
                            depName,
                            ret,
                            map,
                            i,
                            relParts,
                            args = [],
                            callbackType = typeof callback,
                            usingExports;

                        //Use name if no relName
                        relName = relName || name;
                        relParts = makeRelParts(relName);

                        //Call the callback to define the module, if necessary.
                        if (
                            callbackType === "undefined" ||
                            callbackType === "function"
                        ) {
                            //Pull out the defined dependencies and pass the ordered
                            //values to the callback.
                            //Default to [require, exports, module] if no deps
                            deps =
                                !deps.length && callback.length
                                    ? ["require", "exports", "module"]
                                    : deps;
                            for (i = 0; i < deps.length; i += 1) {
                                map = makeMap(deps[i], relParts);
                                depName = map.f;

                                //Fast path CommonJS standard dependencies.
                                if (depName === "require") {
                                    args[i] = handlers.require(name);
                                } else if (depName === "exports") {
                                    //CommonJS module spec 1.1
                                    args[i] = handlers.exports(name);
                                    usingExports = true;
                                } else if (depName === "module") {
                                    //CommonJS module spec 1.1
                                    cjsModule = args[i] = handlers.module(name);
                                } else if (
                                    hasProp(defined, depName) ||
                                    hasProp(waiting, depName) ||
                                    hasProp(defining, depName)
                                ) {
                                    args[i] = callDep(depName);
                                } else if (map.p) {
                                    map.p.load(
                                        map.n,
                                        makeRequire(relName, true),
                                        makeLoad(depName),
                                        {}
                                    );
                                    args[i] = defined[depName];
                                } else {
                                    throw new Error(
                                        name + " missing " + depName
                                    );
                                }
                            }

                            ret = callback
                                ? callback.apply(defined[name], args)
                                : undefined;

                            if (name) {
                                //If setting exports via "module" is in play,
                                //favor that over return value and exports. After that,
                                //favor a non-undefined return value over exports use.
                                if (
                                    cjsModule &&
                                    cjsModule.exports !== undef &&
                                    cjsModule.exports !== defined[name]
                                ) {
                                    defined[name] = cjsModule.exports;
                                } else if (ret !== undef || !usingExports) {
                                    //Use the return value from the function.
                                    defined[name] = ret;
                                }
                            }
                        } else if (name) {
                            //May just be an object definition for the module. Only
                            //worry about defining if have a module name.
                            defined[name] = callback;
                        }
                    };

                    requirejs = require = req = function(
                        deps,
                        callback,
                        relName,
                        forceSync,
                        alt
                    ) {
                        if (typeof deps === "string") {
                            if (handlers[deps]) {
                                //callback in this case is really relName
                                return handlers[deps](callback);
                            }
                            //Just return the module wanted. In this scenario, the
                            //deps arg is the module name, and second arg (if passed)
                            //is just the relName.
                            //Normalize module name, if it contains . or ..
                            return callDep(
                                makeMap(deps, makeRelParts(callback)).f
                            );
                        } else if (!deps.splice) {
                            //deps is a config object, not an array.
                            config = deps;
                            if (config.deps) {
                                req(config.deps, config.callback);
                            }
                            if (!callback) {
                                return;
                            }

                            if (callback.splice) {
                                //callback is an array, which means it is a dependency list.
                                //Adjust args if there are dependencies
                                deps = callback;
                                callback = relName;
                                relName = null;
                            } else {
                                deps = undef;
                            }
                        }

                        //Support require(['a'])
                        callback = callback || function() {};

                        //If relName is a function, it is an errback handler,
                        //so remove it.
                        if (typeof relName === "function") {
                            relName = forceSync;
                            forceSync = alt;
                        }

                        //Simulate async callback;
                        if (forceSync) {
                            main(undef, deps, callback, relName);
                        } else {
                            //Using a non-zero value because of concern for what old browsers
                            //do, and latest browsers "upgrade" to 4 if lower value is used:
                            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
                            //If want a value immediately, use require('id') instead -- something
                            //that works in almond on the global level, but not guaranteed and
                            //unlikely to work in other AMD implementations.
                            setTimeout(function() {
                                main(undef, deps, callback, relName);
                            }, 4);
                        }

                        return req;
                    };

                    /**
                     * Just drops the config on the floor, but returns req in case
                     * the config return value is used.
                     */
                    req.config = function(cfg) {
                        return req(cfg);
                    };

                    /**
                     * Expose module registry for debugging and tooling
                     */
                    requirejs._defined = defined;

                    define = function(name, deps, callback) {
                        if (typeof name !== "string") {
                            throw new Error(
                                "See almond README: incorrect module build, no module name"
                            );
                        }

                        //This module may not have dependencies
                        if (!deps.splice) {
                            //deps is not an array, so probably means
                            //an object literal or factory function for
                            //the value. Adjust args.
                            callback = deps;
                            deps = [];
                        }

                        if (
                            !hasProp(defined, name) &&
                            !hasProp(waiting, name)
                        ) {
                            waiting[name] = [name, deps, callback];
                        }
                    };

                    define.amd = {
                        jQuery: true
                    };
                })();

                S2.requirejs = requirejs;
                S2.require = require;
                S2.define = define;
            }
        })();
        S2.define("almond", function() {});

        /* global jQuery:false, $:false */
        S2.define("jquery", [], function() {
            var _$ = jQuery || $;

            if (_$ == null && console && console.error) {
                console.error(
                    "Select2: An instance of jQuery or a jQuery-compatible library was not " +
                        "found. Make sure that you are including jQuery before Select2 on your " +
                        "web page."
                );
            }

            return _$;
        });

        S2.define("select2/utils", ["jquery"], function($) {
            var Utils = {};

            Utils.Extend = function(ChildClass, SuperClass) {
                var __hasProp = {}.hasOwnProperty;

                function BaseConstructor() {
                    this.constructor = ChildClass;
                }

                for (var key in SuperClass) {
                    if (__hasProp.call(SuperClass, key)) {
                        ChildClass[key] = SuperClass[key];
                    }
                }

                BaseConstructor.prototype = SuperClass.prototype;
                ChildClass.prototype = new BaseConstructor();
                ChildClass.__super__ = SuperClass.prototype;

                return ChildClass;
            };

            function getMethods(theClass) {
                var proto = theClass.prototype;

                var methods = [];

                for (var methodName in proto) {
                    var m = proto[methodName];

                    if (typeof m !== "function") {
                        continue;
                    }

                    if (methodName === "constructor") {
                        continue;
                    }

                    methods.push(methodName);
                }

                return methods;
            }

            Utils.Decorate = function(SuperClass, DecoratorClass) {
                var decoratedMethods = getMethods(DecoratorClass);
                var superMethods = getMethods(SuperClass);

                function DecoratedClass() {
                    var unshift = Array.prototype.unshift;

                    var argCount = DecoratorClass.prototype.constructor.length;

                    var calledConstructor = SuperClass.prototype.constructor;

                    if (argCount > 0) {
                        unshift.call(
                            arguments,
                            SuperClass.prototype.constructor
                        );

                        calledConstructor =
                            DecoratorClass.prototype.constructor;
                    }

                    calledConstructor.apply(this, arguments);
                }

                DecoratorClass.displayName = SuperClass.displayName;

                function ctr() {
                    this.constructor = DecoratedClass;
                }

                DecoratedClass.prototype = new ctr();

                for (var m = 0; m < superMethods.length; m++) {
                    var superMethod = superMethods[m];

                    DecoratedClass.prototype[superMethod] =
                        SuperClass.prototype[superMethod];
                }

                var calledMethod = function(methodName) {
                    // Stub out the original method if it's not decorating an actual method
                    var originalMethod = function() {};

                    if (methodName in DecoratedClass.prototype) {
                        originalMethod = DecoratedClass.prototype[methodName];
                    }

                    var decoratedMethod = DecoratorClass.prototype[methodName];

                    return function() {
                        var unshift = Array.prototype.unshift;

                        unshift.call(arguments, originalMethod);

                        return decoratedMethod.apply(this, arguments);
                    };
                };

                for (var d = 0; d < decoratedMethods.length; d++) {
                    var decoratedMethod = decoratedMethods[d];

                    DecoratedClass.prototype[decoratedMethod] = calledMethod(
                        decoratedMethod
                    );
                }

                return DecoratedClass;
            };

            var Observable = function() {
                this.listeners = {};
            };

            Observable.prototype.on = function(event, callback) {
                this.listeners = this.listeners || {};

                if (event in this.listeners) {
                    this.listeners[event].push(callback);
                } else {
                    this.listeners[event] = [callback];
                }
            };

            Observable.prototype.trigger = function(event) {
                var slice = Array.prototype.slice;
                var params = slice.call(arguments, 1);

                this.listeners = this.listeners || {};

                // Params should always come in as an array
                if (params == null) {
                    params = [];
                }

                // If there are no arguments to the event, use a temporary object
                if (params.length === 0) {
                    params.push({});
                }

                // Set the `_type` of the first object to the event
                params[0]._type = event;

                if (event in this.listeners) {
                    this.invoke(
                        this.listeners[event],
                        slice.call(arguments, 1)
                    );
                }

                if ("*" in this.listeners) {
                    this.invoke(this.listeners["*"], arguments);
                }
            };

            Observable.prototype.invoke = function(listeners, params) {
                for (var i = 0, len = listeners.length; i < len; i++) {
                    listeners[i].apply(this, params);
                }
            };

            Utils.Observable = Observable;

            Utils.generateChars = function(length) {
                var chars = "";

                for (var i = 0; i < length; i++) {
                    var randomChar = Math.floor(Math.random() * 36);
                    chars += randomChar.toString(36);
                }

                return chars;
            };

            Utils.bind = function(func, context) {
                return function() {
                    func.apply(context, arguments);
                };
            };

            Utils._convertData = function(data) {
                for (var originalKey in data) {
                    var keys = originalKey.split("-");

                    var dataLevel = data;

                    if (keys.length === 1) {
                        continue;
                    }

                    for (var k = 0; k < keys.length; k++) {
                        var key = keys[k];

                        // Lowercase the first letter
                        // By default, dash-separated becomes camelCase
                        key =
                            key.substring(0, 1).toLowerCase() +
                            key.substring(1);

                        if (!(key in dataLevel)) {
                            dataLevel[key] = {};
                        }

                        if (k == keys.length - 1) {
                            dataLevel[key] = data[originalKey];
                        }

                        dataLevel = dataLevel[key];
                    }

                    delete data[originalKey];
                }

                return data;
            };

            Utils.hasScroll = function(index, el) {
                // Adapted from the function created by @ShadowScripter
                // and adapted by @BillBarry on the Stack Exchange Code Review website.
                // The original code can be found at
                // http://codereview.stackexchange.com/q/13338
                // and was designed to be used with the Sizzle selector engine.

                var $el = $(el);
                var overflowX = el.style.overflowX;
                var overflowY = el.style.overflowY;

                //Check both x and y declarations
                if (
                    overflowX === overflowY &&
                    (overflowY === "hidden" || overflowY === "visible")
                ) {
                    return false;
                }

                if (overflowX === "scroll" || overflowY === "scroll") {
                    return true;
                }

                return (
                    $el.innerHeight() < el.scrollHeight ||
                    $el.innerWidth() < el.scrollWidth
                );
            };

            Utils.escapeMarkup = function(markup) {
                var replaceMap = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };

                // Do not try to escape the markup if it's not a string
                if (typeof markup !== "string") {
                    return markup;
                }

                return String(markup).replace(/[&<>"'\/\\]/g, function(match) {
                    return replaceMap[match];
                });
            };

            // Append an array of jQuery nodes to a given element.
            Utils.appendMany = function($element, $nodes) {
                // jQuery 1.7.x does not support $.fn.append() with an array
                // Fall back to a jQuery object collection using $.fn.add()
                if ($.fn.jquery.substr(0, 3) === "1.7") {
                    var $jqNodes = $();

                    $.map($nodes, function(node) {
                        $jqNodes = $jqNodes.add(node);
                    });

                    $nodes = $jqNodes;
                }

                $element.append($nodes);
            };

            return Utils;
        });

        S2.define("select2/results", ["jquery", "./utils"], function($, Utils) {
            function Results($element, options, dataAdapter) {
                this.$element = $element;
                this.data = dataAdapter;
                this.options = options;

                Results.__super__.constructor.call(this);
            }

            Utils.Extend(Results, Utils.Observable);

            Results.prototype.render = function() {
                var $results = $(
                    '<ul class="select2-results__options" role="tree"></ul>'
                );

                if (this.options.get("multiple")) {
                    $results.attr("aria-multiselectable", "true");
                }

                this.$results = $results;

                return $results;
            };

            Results.prototype.clear = function() {
                this.$results.empty();
            };

            Results.prototype.displayMessage = function(params) {
                var escapeMarkup = this.options.get("escapeMarkup");

                this.clear();
                this.hideLoading();

                var $message = $(
                    '<li role="treeitem" aria-live="assertive"' +
                        ' class="select2-results__option"></li>'
                );

                var message = this.options
                    .get("translations")
                    .get(params.message);

                $message.append(escapeMarkup(message(params.args)));

                $message[0].className += " select2-results__message";

                this.$results.append($message);
            };

            Results.prototype.hideMessages = function() {
                this.$results.find(".select2-results__message").remove();
            };

            Results.prototype.append = function(data) {
                this.hideLoading();

                var $options = [];

                if (data.results == null || data.results.length === 0) {
                    if (this.$results.children().length === 0) {
                        this.trigger("results:message", {
                            message: "noResults"
                        });
                    }

                    return;
                }

                data.results = this.sort(data.results);

                for (var d = 0; d < data.results.length; d++) {
                    var item = data.results[d];

                    var $option = this.option(item);

                    $options.push($option);
                }

                this.$results.append($options);
            };

            Results.prototype.position = function($results, $dropdown) {
                var $resultsContainer = $dropdown.find(".select2-results");
                $resultsContainer.append($results);
            };

            Results.prototype.sort = function(data) {
                var sorter = this.options.get("sorter");

                return sorter(data);
            };

            Results.prototype.highlightFirstItem = function() {
                var $options = this.$results.find(
                    ".select2-results__option[aria-selected]"
                );

                var $selected = $options.filter("[aria-selected=true]");

                // Check if there are any selected options
                if ($selected.length > 0) {
                    // If there are selected options, highlight the first
                    $selected.first().trigger("mouseenter");
                } else {
                    // If there are no selected options, highlight the first option
                    // in the dropdown
                    $options.first().trigger("mouseenter");
                }

                this.ensureHighlightVisible();
            };

            Results.prototype.setClasses = function() {
                var self = this;

                this.data.current(function(selected) {
                    var selectedIds = $.map(selected, function(s) {
                        return s.id.toString();
                    });

                    var $options = self.$results.find(
                        ".select2-results__option[aria-selected]"
                    );

                    $options.each(function() {
                        var $option = $(this);

                        var item = $.data(this, "data");

                        // id needs to be converted to a string when comparing
                        var id = "" + item.id;

                        if (
                            (item.element != null && item.element.selected) ||
                            (item.element == null &&
                                $.inArray(id, selectedIds) > -1)
                        ) {
                            $option.attr("aria-selected", "true");
                        } else {
                            $option.attr("aria-selected", "false");
                        }
                    });
                });
            };

            Results.prototype.showLoading = function(params) {
                this.hideLoading();

                var loadingMore = this.options
                    .get("translations")
                    .get("searching");

                var loading = {
                    disabled: true,
                    loading: true,
                    text: loadingMore(params)
                };
                var $loading = this.option(loading);
                $loading.className += " loading-results";

                this.$results.prepend($loading);
            };

            Results.prototype.hideLoading = function() {
                this.$results.find(".loading-results").remove();
            };

            Results.prototype.option = function(data) {
                var option = document.createElement("li");
                option.className = "select2-results__option";

                var attrs = {
                    role: "treeitem",
                    "aria-selected": "false"
                };

                if (data.disabled) {
                    delete attrs["aria-selected"];
                    attrs["aria-disabled"] = "true";
                }

                if (data.id == null) {
                    delete attrs["aria-selected"];
                }

                if (data._resultId != null) {
                    option.id = data._resultId;
                }

                if (data.title) {
                    option.title = data.title;
                }

                if (data.children) {
                    attrs.role = "group";
                    attrs["aria-label"] = data.text;
                    delete attrs["aria-selected"];
                }

                for (var attr in attrs) {
                    var val = attrs[attr];

                    option.setAttribute(attr, val);
                }

                if (data.children) {
                    var $option = $(option);

                    var label = document.createElement("strong");
                    label.className = "select2-results__group";

                    var $label = $(label);
                    this.template(data, label);

                    var $children = [];

                    for (var c = 0; c < data.children.length; c++) {
                        var child = data.children[c];

                        var $child = this.option(child);

                        $children.push($child);
                    }

                    var $childrenContainer = $("<ul></ul>", {
                        class:
                            "select2-results__options select2-results__options--nested"
                    });

                    $childrenContainer.append($children);

                    $option.append(label);
                    $option.append($childrenContainer);
                } else {
                    this.template(data, option);
                }

                $.data(option, "data", data);

                return option;
            };

            Results.prototype.bind = function(container, $container) {
                var self = this;

                var id = container.id + "-results";

                this.$results.attr("id", id);

                container.on("results:all", function(params) {
                    self.clear();
                    self.append(params.data);

                    if (container.isOpen()) {
                        self.setClasses();
                        self.highlightFirstItem();
                    }
                });

                container.on("results:append", function(params) {
                    self.append(params.data);

                    if (container.isOpen()) {
                        self.setClasses();
                    }
                });

                container.on("query", function(params) {
                    self.hideMessages();
                    self.showLoading(params);
                });

                container.on("select", function() {
                    if (!container.isOpen()) {
                        return;
                    }

                    self.setClasses();
                    self.highlightFirstItem();
                });

                container.on("unselect", function() {
                    if (!container.isOpen()) {
                        return;
                    }

                    self.setClasses();
                    self.highlightFirstItem();
                });

                container.on("open", function() {
                    // When the dropdown is open, aria-expended="true"
                    self.$results.attr("aria-expanded", "true");
                    self.$results.attr("aria-hidden", "false");

                    self.setClasses();
                    self.ensureHighlightVisible();
                });

                container.on("close", function() {
                    // When the dropdown is closed, aria-expended="false"
                    self.$results.attr("aria-expanded", "false");
                    self.$results.attr("aria-hidden", "true");
                    self.$results.removeAttr("aria-activedescendant");
                });

                container.on("results:toggle", function() {
                    var $highlighted = self.getHighlightedResults();

                    if ($highlighted.length === 0) {
                        return;
                    }

                    $highlighted.trigger("mouseup");
                });

                container.on("results:select", function() {
                    var $highlighted = self.getHighlightedResults();

                    if ($highlighted.length === 0) {
                        return;
                    }

                    var data = $highlighted.data("data");

                    if ($highlighted.attr("aria-selected") == "true") {
                        self.trigger("close", {});
                    } else {
                        self.trigger("select", {
                            data: data
                        });
                    }
                });

                container.on("results:previous", function() {
                    var $highlighted = self.getHighlightedResults();

                    var $options = self.$results.find("[aria-selected]");

                    var currentIndex = $options.index($highlighted);

                    // If we are already at te top, don't move further
                    if (currentIndex === 0) {
                        return;
                    }

                    var nextIndex = currentIndex - 1;

                    // If none are highlighted, highlight the first
                    if ($highlighted.length === 0) {
                        nextIndex = 0;
                    }

                    var $next = $options.eq(nextIndex);

                    $next.trigger("mouseenter");

                    var currentOffset = self.$results.offset().top;
                    var nextTop = $next.offset().top;
                    var nextOffset =
                        self.$results.scrollTop() + (nextTop - currentOffset);

                    if (nextIndex === 0) {
                        self.$results.scrollTop(0);
                    } else if (nextTop - currentOffset < 0) {
                        self.$results.scrollTop(nextOffset);
                    }
                });

                container.on("results:next", function() {
                    var $highlighted = self.getHighlightedResults();

                    var $options = self.$results.find("[aria-selected]");

                    var currentIndex = $options.index($highlighted);

                    var nextIndex = currentIndex + 1;

                    // If we are at the last option, stay there
                    if (nextIndex >= $options.length) {
                        return;
                    }

                    var $next = $options.eq(nextIndex);

                    $next.trigger("mouseenter");

                    var currentOffset =
                        self.$results.offset().top +
                        self.$results.outerHeight(false);
                    var nextBottom =
                        $next.offset().top + $next.outerHeight(false);
                    var nextOffset =
                        self.$results.scrollTop() + nextBottom - currentOffset;

                    if (nextIndex === 0) {
                        self.$results.scrollTop(0);
                    } else if (nextBottom > currentOffset) {
                        self.$results.scrollTop(nextOffset);
                    }
                });

                container.on("results:focus", function(params) {
                    params.element.addClass(
                        "select2-results__option--highlighted"
                    );
                });

                container.on("results:message", function(params) {
                    self.displayMessage(params);
                });

                if ($.fn.mousewheel) {
                    this.$results.on("mousewheel", function(e) {
                        var top = self.$results.scrollTop();

                        var bottom =
                            self.$results.get(0).scrollHeight - top + e.deltaY;

                        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
                        var isAtBottom =
                            e.deltaY < 0 && bottom <= self.$results.height();

                        if (isAtTop) {
                            self.$results.scrollTop(0);

                            e.preventDefault();
                            e.stopPropagation();
                        } else if (isAtBottom) {
                            self.$results.scrollTop(
                                self.$results.get(0).scrollHeight -
                                    self.$results.height()
                            );

                            e.preventDefault();
                            e.stopPropagation();
                        }
                    });
                }

                this.$results.on(
                    "mouseup",
                    ".select2-results__option[aria-selected]",
                    function(evt) {
                        var $this = $(this);

                        var data = $this.data("data");

                        if ($this.attr("aria-selected") === "true") {
                            if (self.options.get("multiple")) {
                                self.trigger("unselect", {
                                    originalEvent: evt,
                                    data: data
                                });
                            } else {
                                self.trigger("close", {});
                            }

                            return;
                        }

                        self.trigger("select", {
                            originalEvent: evt,
                            data: data
                        });
                    }
                );

                this.$results.on(
                    "mouseenter",
                    ".select2-results__option[aria-selected]",
                    function(evt) {
                        var data = $(this).data("data");

                        self.getHighlightedResults().removeClass(
                            "select2-results__option--highlighted"
                        );

                        self.trigger("results:focus", {
                            data: data,
                            element: $(this)
                        });
                    }
                );
            };

            Results.prototype.getHighlightedResults = function() {
                var $highlighted = this.$results.find(
                    ".select2-results__option--highlighted"
                );

                return $highlighted;
            };

            Results.prototype.destroy = function() {
                this.$results.remove();
            };

            Results.prototype.ensureHighlightVisible = function() {
                var $highlighted = this.getHighlightedResults();

                if ($highlighted.length === 0) {
                    return;
                }

                var $options = this.$results.find("[aria-selected]");

                var currentIndex = $options.index($highlighted);

                var currentOffset = this.$results.offset().top;
                var nextTop = $highlighted.offset().top;
                var nextOffset =
                    this.$results.scrollTop() + (nextTop - currentOffset);

                var offsetDelta = nextTop - currentOffset;
                nextOffset -= $highlighted.outerHeight(false) * 2;

                if (currentIndex <= 2) {
                    this.$results.scrollTop(0);
                } else if (
                    offsetDelta > this.$results.outerHeight() ||
                    offsetDelta < 0
                ) {
                    this.$results.scrollTop(nextOffset);
                }
            };

            Results.prototype.template = function(result, container) {
                var template = this.options.get("templateResult");
                var escapeMarkup = this.options.get("escapeMarkup");

                var content = template(result, container);

                if (content == null) {
                    container.style.display = "none";
                } else if (typeof content === "string") {
                    container.innerHTML = escapeMarkup(content);
                } else {
                    $(container).append(content);
                }
            };

            return Results;
        });

        S2.define("select2/keys", [], function() {
            var KEYS = {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            };

            return KEYS;
        });

        S2.define(
            "select2/selection/base",
            ["jquery", "../utils", "../keys"],
            function($, Utils, KEYS) {
                function BaseSelection($element, options) {
                    this.$element = $element;
                    this.options = options;

                    BaseSelection.__super__.constructor.call(this);
                }

                Utils.Extend(BaseSelection, Utils.Observable);

                BaseSelection.prototype.render = function() {
                    var $selection = $(
                        '<span class="select2-selection" role="combobox" ' +
                            ' aria-haspopup="true" aria-expanded="false">' +
                            "</span>"
                    );

                    this._tabindex = 0;

                    if (this.$element.data("old-tabindex") != null) {
                        this._tabindex = this.$element.data("old-tabindex");
                    } else if (this.$element.attr("tabindex") != null) {
                        this._tabindex = this.$element.attr("tabindex");
                    }

                    $selection.attr("title", this.$element.attr("title"));
                    $selection.attr("tabindex", this._tabindex);

                    this.$selection = $selection;

                    return $selection;
                };

                BaseSelection.prototype.bind = function(container, $container) {
                    var self = this;

                    var id = container.id + "-container";
                    var resultsId = container.id + "-results";

                    this.container = container;

                    this.$selection.on("focus", function(evt) {
                        self.trigger("focus", evt);
                    });

                    this.$selection.on("blur", function(evt) {
                        self._handleBlur(evt);
                    });

                    this.$selection.on("keydown", function(evt) {
                        self.trigger("keypress", evt);

                        if (evt.which === KEYS.SPACE) {
                            evt.preventDefault();
                        }
                    });

                    container.on("results:focus", function(params) {
                        self.$selection.attr(
                            "aria-activedescendant",
                            params.data._resultId
                        );
                    });

                    container.on("selection:update", function(params) {
                        self.update(params.data);
                    });

                    container.on("open", function() {
                        // When the dropdown is open, aria-expanded="true"
                        self.$selection.attr("aria-expanded", "true");
                        self.$selection.attr("aria-owns", resultsId);

                        self._attachCloseHandler(container);
                    });

                    container.on("close", function() {
                        // When the dropdown is closed, aria-expanded="false"
                        self.$selection.attr("aria-expanded", "false");
                        self.$selection.removeAttr("aria-activedescendant");
                        self.$selection.removeAttr("aria-owns");

                        self.$selection.focus();

                        self._detachCloseHandler(container);
                    });

                    container.on("enable", function() {
                        self.$selection.attr("tabindex", self._tabindex);
                    });

                    container.on("disable", function() {
                        self.$selection.attr("tabindex", "-1");
                    });
                };

                BaseSelection.prototype._handleBlur = function(evt) {
                    var self = this;

                    // This needs to be delayed as the active element is the body when the tab
                    // key is pressed, possibly along with others.
                    window.setTimeout(function() {
                        // Don't trigger `blur` if the focus is still in the selection
                        if (
                            document.activeElement == self.$selection[0] ||
                            $.contains(
                                self.$selection[0],
                                document.activeElement
                            )
                        ) {
                            return;
                        }

                        self.trigger("blur", evt);
                    }, 1);
                };

                BaseSelection.prototype._attachCloseHandler = function(
                    container
                ) {
                    var self = this;

                    $(document.body).on(
                        "mousedown.select2." + container.id,
                        function(e) {
                            var $target = $(e.target);

                            var $select = $target.closest(".select2");

                            var $all = $(".select2.select2-container--open");

                            $all.each(function() {
                                var $this = $(this);

                                if (this == $select[0]) {
                                    return;
                                }

                                var $element = $this.data("element");

                                $element.select2("close");
                            });
                        }
                    );
                };

                BaseSelection.prototype._detachCloseHandler = function(
                    container
                ) {
                    $(document.body).off("mousedown.select2." + container.id);
                };

                BaseSelection.prototype.position = function(
                    $selection,
                    $container
                ) {
                    var $selectionContainer = $container.find(".selection");
                    $selectionContainer.append($selection);
                };

                BaseSelection.prototype.destroy = function() {
                    this._detachCloseHandler(this.container);
                };

                BaseSelection.prototype.update = function(data) {
                    throw new Error(
                        "The `update` method must be defined in child classes."
                    );
                };

                return BaseSelection;
            }
        );

        S2.define(
            "select2/selection/single",
            ["jquery", "./base", "../utils", "../keys"],
            function($, BaseSelection, Utils, KEYS) {
                function SingleSelection() {
                    SingleSelection.__super__.constructor.apply(
                        this,
                        arguments
                    );
                }

                Utils.Extend(SingleSelection, BaseSelection);

                SingleSelection.prototype.render = function() {
                    var $selection = SingleSelection.__super__.render.call(
                        this
                    );

                    $selection.addClass("select2-selection--single");

                    $selection.html(
                        '<span class="select2-selection__rendered"></span>' +
                            '<span class="select2-selection__arrow" role="presentation">' +
                            '<b role="presentation"></b>' +
                            "</span>"
                    );

                    return $selection;
                };

                SingleSelection.prototype.bind = function(
                    container,
                    $container
                ) {
                    var self = this;

                    SingleSelection.__super__.bind.apply(this, arguments);

                    var id = container.id + "-container";

                    this.$selection
                        .find(".select2-selection__rendered")
                        .attr("id", id);
                    this.$selection.attr("aria-labelledby", id);

                    this.$selection.on("mousedown", function(evt) {
                        // Only respond to left clicks
                        if (evt.which !== 1) {
                            return;
                        }

                        self.trigger("toggle", {
                            originalEvent: evt
                        });
                    });

                    this.$selection.on("focus", function(evt) {
                        // User focuses on the container
                    });

                    this.$selection.on("blur", function(evt) {
                        // User exits the container
                    });

                    container.on("focus", function(evt) {
                        if (!container.isOpen()) {
                            self.$selection.focus();
                        }
                    });

                    container.on("selection:update", function(params) {
                        self.update(params.data);
                    });
                };

                SingleSelection.prototype.clear = function() {
                    this.$selection
                        .find(".select2-selection__rendered")
                        .empty();
                };

                SingleSelection.prototype.display = function(data, container) {
                    var template = this.options.get("templateSelection");
                    var escapeMarkup = this.options.get("escapeMarkup");

                    return escapeMarkup(template(data, container));
                };

                SingleSelection.prototype.selectionContainer = function() {
                    return $("<span></span>");
                };

                SingleSelection.prototype.update = function(data) {
                    if (data.length === 0) {
                        this.clear();
                        return;
                    }

                    var selection = data[0];

                    var $rendered = this.$selection.find(
                        ".select2-selection__rendered"
                    );
                    var formatted = this.display(selection, $rendered);

                    $rendered.empty().append(formatted);
                    $rendered.prop("title", selection.title || selection.text);
                };

                return SingleSelection;
            }
        );

        S2.define(
            "select2/selection/multiple",
            ["jquery", "./base", "../utils"],
            function($, BaseSelection, Utils) {
                function MultipleSelection($element, options) {
                    MultipleSelection.__super__.constructor.apply(
                        this,
                        arguments
                    );
                }

                Utils.Extend(MultipleSelection, BaseSelection);

                MultipleSelection.prototype.render = function() {
                    var $selection = MultipleSelection.__super__.render.call(
                        this
                    );

                    $selection.addClass("select2-selection--multiple");

                    $selection.html(
                        '<ul class="select2-selection__rendered"></ul>'
                    );

                    return $selection;
                };

                MultipleSelection.prototype.bind = function(
                    container,
                    $container
                ) {
                    var self = this;

                    MultipleSelection.__super__.bind.apply(this, arguments);

                    this.$selection.on("click", function(evt) {
                        self.trigger("toggle", {
                            originalEvent: evt
                        });
                    });

                    this.$selection.on(
                        "click",
                        ".select2-selection__choice__remove",
                        function(evt) {
                            // Ignore the event if it is disabled
                            if (self.options.get("disabled")) {
                                return;
                            }

                            var $remove = $(this);
                            var $selection = $remove.parent();

                            var data = $selection.data("data");

                            self.trigger("unselect", {
                                originalEvent: evt,
                                data: data
                            });
                        }
                    );
                };

                MultipleSelection.prototype.clear = function() {
                    this.$selection
                        .find(".select2-selection__rendered")
                        .empty();
                };

                MultipleSelection.prototype.display = function(
                    data,
                    container
                ) {
                    var template = this.options.get("templateSelection");
                    var escapeMarkup = this.options.get("escapeMarkup");

                    return escapeMarkup(template(data, container));
                };

                MultipleSelection.prototype.selectionContainer = function() {
                    var $container = $(
                        '<li class="select2-selection__choice">' +
                            '<span class="select2-selection__choice__remove" role="presentation">' +
                            "&times;" +
                            "</span>" +
                            "</li>"
                    );

                    return $container;
                };

                MultipleSelection.prototype.update = function(data) {
                    this.clear();

                    if (data.length === 0) {
                        return;
                    }

                    var $selections = [];

                    for (var d = 0; d < data.length; d++) {
                        var selection = data[d];

                        var $selection = this.selectionContainer();
                        var formatted = this.display(selection, $selection);

                        $selection.append(formatted);
                        $selection.prop(
                            "title",
                            selection.title || selection.text
                        );

                        $selection.data("data", selection);

                        $selections.push($selection);
                    }

                    var $rendered = this.$selection.find(
                        ".select2-selection__rendered"
                    );

                    Utils.appendMany($rendered, $selections);
                };

                return MultipleSelection;
            }
        );

        S2.define("select2/selection/placeholder", ["../utils"], function(
            Utils
        ) {
            function Placeholder(decorated, $element, options) {
                this.placeholder = this.normalizePlaceholder(
                    options.get("placeholder")
                );

                decorated.call(this, $element, options);
            }

            Placeholder.prototype.normalizePlaceholder = function(
                _,
                placeholder
            ) {
                if (typeof placeholder === "string") {
                    placeholder = {
                        id: "",
                        text: placeholder
                    };
                }

                return placeholder;
            };

            Placeholder.prototype.createPlaceholder = function(
                decorated,
                placeholder
            ) {
                var $placeholder = this.selectionContainer();

                $placeholder.html(this.display(placeholder));
                $placeholder
                    .addClass("select2-selection__placeholder")
                    .removeClass("select2-selection__choice");

                return $placeholder;
            };

            Placeholder.prototype.update = function(decorated, data) {
                var singlePlaceholder =
                    data.length == 1 && data[0].id != this.placeholder.id;
                var multipleSelections = data.length > 1;

                if (multipleSelections || singlePlaceholder) {
                    return decorated.call(this, data);
                }

                this.clear();

                var $placeholder = this.createPlaceholder(this.placeholder);

                this.$selection
                    .find(".select2-selection__rendered")
                    .append($placeholder);
            };

            return Placeholder;
        });

        S2.define(
            "select2/selection/allowClear",
            ["jquery", "../keys"],
            function($, KEYS) {
                function AllowClear() {}

                AllowClear.prototype.bind = function(
                    decorated,
                    container,
                    $container
                ) {
                    var self = this;

                    decorated.call(this, container, $container);

                    if (this.placeholder == null) {
                        if (
                            this.options.get("debug") &&
                            window.console &&
                            console.error
                        ) {
                            console.error(
                                "Select2: The `allowClear` option should be used in combination " +
                                    "with the `placeholder` option."
                            );
                        }
                    }

                    this.$selection.on(
                        "mousedown",
                        ".select2-selection__clear",
                        function(evt) {
                            self._handleClear(evt);
                        }
                    );

                    container.on("keypress", function(evt) {
                        self._handleKeyboardClear(evt, container);
                    });
                };

                AllowClear.prototype._handleClear = function(_, evt) {
                    // Ignore the event if it is disabled
                    if (this.options.get("disabled")) {
                        return;
                    }

                    var $clear = this.$selection.find(
                        ".select2-selection__clear"
                    );

                    // Ignore the event if nothing has been selected
                    if ($clear.length === 0) {
                        return;
                    }

                    evt.stopPropagation();

                    var data = $clear.data("data");

                    for (var d = 0; d < data.length; d++) {
                        var unselectData = {
                            data: data[d]
                        };

                        // Trigger the `unselect` event, so people can prevent it from being
                        // cleared.
                        this.trigger("unselect", unselectData);

                        // If the event was prevented, don't clear it out.
                        if (unselectData.prevented) {
                            return;
                        }
                    }

                    this.$element.val(this.placeholder.id).trigger("change");

                    this.trigger("toggle", {});
                };

                AllowClear.prototype._handleKeyboardClear = function(
                    _,
                    evt,
                    container
                ) {
                    if (container.isOpen()) {
                        return;
                    }

                    if (
                        evt.which == KEYS.DELETE ||
                        evt.which == KEYS.BACKSPACE
                    ) {
                        this._handleClear(evt);
                    }
                };

                AllowClear.prototype.update = function(decorated, data) {
                    decorated.call(this, data);

                    if (
                        this.$selection.find(".select2-selection__placeholder")
                            .length > 0 ||
                        data.length === 0
                    ) {
                        return;
                    }

                    var $remove = $(
                        '<span class="select2-selection__clear">' +
                            "&times;" +
                            "</span>"
                    );
                    $remove.data("data", data);

                    this.$selection
                        .find(".select2-selection__rendered")
                        .prepend($remove);
                };

                return AllowClear;
            }
        );

        S2.define(
            "select2/selection/search",
            ["jquery", "../utils", "../keys"],
            function($, Utils, KEYS) {
                function Search(decorated, $element, options) {
                    decorated.call(this, $element, options);
                }

                Search.prototype.render = function(decorated) {
                    var $search = $(
                        '<li class="select2-search select2-search--inline">' +
                            '<input class="select2-search__field" type="search" tabindex="-1"' +
                            ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
                            ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
                            "</li>"
                    );

                    this.$searchContainer = $search;
                    this.$search = $search.find("input");

                    var $rendered = decorated.call(this);

                    this._transferTabIndex();

                    return $rendered;
                };

                Search.prototype.bind = function(
                    decorated,
                    container,
                    $container
                ) {
                    var self = this;

                    decorated.call(this, container, $container);

                    container.on("open", function() {
                        self.$search.trigger("focus");
                    });

                    container.on("close", function() {
                        self.$search.val("");
                        self.$search.removeAttr("aria-activedescendant");
                        self.$search.trigger("focus");
                    });

                    container.on("enable", function() {
                        self.$search.prop("disabled", false);

                        self._transferTabIndex();
                    });

                    container.on("disable", function() {
                        self.$search.prop("disabled", true);
                    });

                    container.on("focus", function(evt) {
                        self.$search.trigger("focus");
                    });

                    container.on("results:focus", function(params) {
                        self.$search.attr("aria-activedescendant", params.id);
                    });

                    this.$selection.on(
                        "focusin",
                        ".select2-search--inline",
                        function(evt) {
                            self.trigger("focus", evt);
                        }
                    );

                    this.$selection.on(
                        "focusout",
                        ".select2-search--inline",
                        function(evt) {
                            self._handleBlur(evt);
                        }
                    );

                    this.$selection.on(
                        "keydown",
                        ".select2-search--inline",
                        function(evt) {
                            evt.stopPropagation();

                            self.trigger("keypress", evt);

                            self._keyUpPrevented = evt.isDefaultPrevented();

                            var key = evt.which;

                            if (
                                key === KEYS.BACKSPACE &&
                                self.$search.val() === ""
                            ) {
                                var $previousChoice = self.$searchContainer.prev(
                                    ".select2-selection__choice"
                                );

                                if ($previousChoice.length > 0) {
                                    var item = $previousChoice.data("data");

                                    self.searchRemoveChoice(item);

                                    evt.preventDefault();
                                }
                            }
                        }
                    );

                    // Try to detect the IE version should the `documentMode` property that
                    // is stored on the document. This is only implemented in IE and is
                    // slightly cleaner than doing a user agent check.
                    // This property is not available in Edge, but Edge also doesn't have
                    // this bug.
                    var msie = document.documentMode;
                    var disableInputEvents = msie && msie <= 11;

                    // Workaround for browsers which do not support the `input` event
                    // This will prevent double-triggering of events for browsers which support
                    // both the `keyup` and `input` events.
                    this.$selection.on(
                        "input.searchcheck",
                        ".select2-search--inline",
                        function(evt) {
                            // IE will trigger the `input` event when a placeholder is used on a
                            // search box. To get around this issue, we are forced to ignore all
                            // `input` events in IE and keep using `keyup`.
                            if (disableInputEvents) {
                                self.$selection.off(
                                    "input.search input.searchcheck"
                                );
                                return;
                            }

                            // Unbind the duplicated `keyup` event
                            self.$selection.off("keyup.search");
                        }
                    );

                    this.$selection.on(
                        "keyup.search input.search",
                        ".select2-search--inline",
                        function(evt) {
                            // IE will trigger the `input` event when a placeholder is used on a
                            // search box. To get around this issue, we are forced to ignore all
                            // `input` events in IE and keep using `keyup`.
                            if (disableInputEvents && evt.type === "input") {
                                self.$selection.off(
                                    "input.search input.searchcheck"
                                );
                                return;
                            }

                            var key = evt.which;

                            // We can freely ignore events from modifier keys
                            if (
                                key == KEYS.SHIFT ||
                                key == KEYS.CTRL ||
                                key == KEYS.ALT
                            ) {
                                return;
                            }

                            // Tabbing will be handled during the `keydown` phase
                            if (key == KEYS.TAB) {
                                return;
                            }

                            self.handleSearch(evt);
                        }
                    );
                };

                /**
                 * This method will transfer the tabindex attribute from the rendered
                 * selection to the search box. This allows for the search box to be used as
                 * the primary focus instead of the selection container.
                 *
                 * @private
                 */
                Search.prototype._transferTabIndex = function(decorated) {
                    this.$search.attr(
                        "tabindex",
                        this.$selection.attr("tabindex")
                    );
                    this.$selection.attr("tabindex", "-1");
                };

                Search.prototype.createPlaceholder = function(
                    decorated,
                    placeholder
                ) {
                    this.$search.attr("placeholder", placeholder.text);
                };

                Search.prototype.update = function(decorated, data) {
                    var searchHadFocus =
                        this.$search[0] == document.activeElement;

                    this.$search.attr("placeholder", "");

                    decorated.call(this, data);

                    this.$selection
                        .find(".select2-selection__rendered")
                        .append(this.$searchContainer);

                    this.resizeSearch();
                    if (searchHadFocus) {
                        this.$search.focus();
                    }
                };

                Search.prototype.handleSearch = function() {
                    this.resizeSearch();

                    if (!this._keyUpPrevented) {
                        var input = this.$search.val();

                        this.trigger("query", {
                            term: input
                        });
                    }

                    this._keyUpPrevented = false;
                };

                Search.prototype.searchRemoveChoice = function(
                    decorated,
                    item
                ) {
                    this.trigger("unselect", {
                        data: item
                    });

                    this.$search.val(item.text);
                    this.handleSearch();
                };

                Search.prototype.resizeSearch = function() {
                    this.$search.css("width", "25px");

                    var width = "";

                    if (this.$search.attr("placeholder") !== "") {
                        width = this.$selection
                            .find(".select2-selection__rendered")
                            .innerWidth();
                    } else {
                        var minimumWidth = this.$search.val().length + 1;

                        width = minimumWidth * 0.75 + "em";
                    }

                    this.$search.css("width", width);
                };

                return Search;
            }
        );

        S2.define("select2/selection/eventRelay", ["jquery"], function($) {
            function EventRelay() {}

            EventRelay.prototype.bind = function(
                decorated,
                container,
                $container
            ) {
                var self = this;
                var relayEvents = [
                    "open",
                    "opening",
                    "close",
                    "closing",
                    "select",
                    "selecting",
                    "unselect",
                    "unselecting"
                ];

                var preventableEvents = [
                    "opening",
                    "closing",
                    "selecting",
                    "unselecting"
                ];

                decorated.call(this, container, $container);

                container.on("*", function(name, params) {
                    // Ignore events that should not be relayed
                    if ($.inArray(name, relayEvents) === -1) {
                        return;
                    }

                    // The parameters should always be an object
                    params = params || {};

                    // Generate the jQuery event for the Select2 event
                    var evt = $.Event("select2:" + name, {
                        params: params
                    });

                    self.$element.trigger(evt);

                    // Only handle preventable events if it was one
                    if ($.inArray(name, preventableEvents) === -1) {
                        return;
                    }

                    params.prevented = evt.isDefaultPrevented();
                });
            };

            return EventRelay;
        });

        S2.define("select2/translation", ["jquery", "require"], function(
            $,
            require
        ) {
            function Translation(dict) {
                this.dict = dict || {};
            }

            Translation.prototype.all = function() {
                return this.dict;
            };

            Translation.prototype.get = function(key) {
                return this.dict[key];
            };

            Translation.prototype.extend = function(translation) {
                this.dict = $.extend({}, translation.all(), this.dict);
            };

            // Static functions

            Translation._cache = {};

            Translation.loadPath = function(path) {
                if (!(path in Translation._cache)) {
                    var translations = require(path);

                    Translation._cache[path] = translations;
                }

                return new Translation(Translation._cache[path]);
            };

            return Translation;
        });

        S2.define("select2/diacritics", [], function() {
            var diacritics = {
                "\u24B6": "A",
                Ａ: "A",
                À: "A",
                Á: "A",
                Â: "A",
                Ầ: "A",
                Ấ: "A",
                Ẫ: "A",
                Ẩ: "A",
                Ã: "A",
                Ā: "A",
                Ă: "A",
                Ằ: "A",
                Ắ: "A",
                Ẵ: "A",
                Ẳ: "A",
                Ȧ: "A",
                Ǡ: "A",
                Ä: "A",
                Ǟ: "A",
                Ả: "A",
                Å: "A",
                Ǻ: "A",
                Ǎ: "A",
                Ȁ: "A",
                Ȃ: "A",
                Ạ: "A",
                Ậ: "A",
                Ặ: "A",
                Ḁ: "A",
                Ą: "A",
                Ⱥ: "A",
                Ɐ: "A",
                Ꜳ: "AA",
                Æ: "AE",
                Ǽ: "AE",
                Ǣ: "AE",
                Ꜵ: "AO",
                Ꜷ: "AU",
                Ꜹ: "AV",
                Ꜻ: "AV",
                Ꜽ: "AY",
                "\u24B7": "B",
                Ｂ: "B",
                Ḃ: "B",
                Ḅ: "B",
                Ḇ: "B",
                Ƀ: "B",
                Ƃ: "B",
                Ɓ: "B",
                "\u24B8": "C",
                Ｃ: "C",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                Ç: "C",
                Ḉ: "C",
                Ƈ: "C",
                Ȼ: "C",
                Ꜿ: "C",
                "\u24B9": "D",
                Ｄ: "D",
                Ḋ: "D",
                Ď: "D",
                Ḍ: "D",
                Ḑ: "D",
                Ḓ: "D",
                Ḏ: "D",
                Đ: "D",
                Ƌ: "D",
                Ɗ: "D",
                Ɖ: "D",
                Ꝺ: "D",
                Ǳ: "DZ",
                Ǆ: "DZ",
                ǲ: "Dz",
                ǅ: "Dz",
                "\u24BA": "E",
                Ｅ: "E",
                È: "E",
                É: "E",
                Ê: "E",
                Ề: "E",
                Ế: "E",
                Ễ: "E",
                Ể: "E",
                Ẽ: "E",
                Ē: "E",
                Ḕ: "E",
                Ḗ: "E",
                Ĕ: "E",
                Ė: "E",
                Ë: "E",
                Ẻ: "E",
                Ě: "E",
                Ȅ: "E",
                Ȇ: "E",
                Ẹ: "E",
                Ệ: "E",
                Ȩ: "E",
                Ḝ: "E",
                Ę: "E",
                Ḙ: "E",
                Ḛ: "E",
                Ɛ: "E",
                Ǝ: "E",
                "\u24BB": "F",
                Ｆ: "F",
                Ḟ: "F",
                Ƒ: "F",
                Ꝼ: "F",
                "\u24BC": "G",
                Ｇ: "G",
                Ǵ: "G",
                Ĝ: "G",
                Ḡ: "G",
                Ğ: "G",
                Ġ: "G",
                Ǧ: "G",
                Ģ: "G",
                Ǥ: "G",
                Ɠ: "G",
                Ꞡ: "G",
                Ᵹ: "G",
                Ꝿ: "G",
                "\u24BD": "H",
                Ｈ: "H",
                Ĥ: "H",
                Ḣ: "H",
                Ḧ: "H",
                Ȟ: "H",
                Ḥ: "H",
                Ḩ: "H",
                Ḫ: "H",
                Ħ: "H",
                Ⱨ: "H",
                Ⱶ: "H",
                Ɥ: "H",
                "\u24BE": "I",
                Ｉ: "I",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                İ: "I",
                Ï: "I",
                Ḯ: "I",
                Ỉ: "I",
                Ǐ: "I",
                Ȉ: "I",
                Ȋ: "I",
                Ị: "I",
                Į: "I",
                Ḭ: "I",
                Ɨ: "I",
                "\u24BF": "J",
                Ｊ: "J",
                Ĵ: "J",
                Ɉ: "J",
                "\u24C0": "K",
                Ｋ: "K",
                Ḱ: "K",
                Ǩ: "K",
                Ḳ: "K",
                Ķ: "K",
                Ḵ: "K",
                Ƙ: "K",
                Ⱪ: "K",
                Ꝁ: "K",
                Ꝃ: "K",
                Ꝅ: "K",
                Ꞣ: "K",
                "\u24C1": "L",
                Ｌ: "L",
                Ŀ: "L",
                Ĺ: "L",
                Ľ: "L",
                Ḷ: "L",
                Ḹ: "L",
                Ļ: "L",
                Ḽ: "L",
                Ḻ: "L",
                Ł: "L",
                Ƚ: "L",
                Ɫ: "L",
                Ⱡ: "L",
                Ꝉ: "L",
                Ꝇ: "L",
                Ꞁ: "L",
                Ǉ: "LJ",
                ǈ: "Lj",
                "\u24C2": "M",
                Ｍ: "M",
                Ḿ: "M",
                Ṁ: "M",
                Ṃ: "M",
                Ɱ: "M",
                Ɯ: "M",
                "\u24C3": "N",
                Ｎ: "N",
                Ǹ: "N",
                Ń: "N",
                Ñ: "N",
                Ṅ: "N",
                Ň: "N",
                Ṇ: "N",
                Ņ: "N",
                Ṋ: "N",
                Ṉ: "N",
                Ƞ: "N",
                Ɲ: "N",
                Ꞑ: "N",
                Ꞥ: "N",
                Ǌ: "NJ",
                ǋ: "Nj",
                "\u24C4": "O",
                Ｏ: "O",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Ồ: "O",
                Ố: "O",
                Ỗ: "O",
                Ổ: "O",
                Õ: "O",
                Ṍ: "O",
                Ȭ: "O",
                Ṏ: "O",
                Ō: "O",
                Ṑ: "O",
                Ṓ: "O",
                Ŏ: "O",
                Ȯ: "O",
                Ȱ: "O",
                Ö: "O",
                Ȫ: "O",
                Ỏ: "O",
                Ő: "O",
                Ǒ: "O",
                Ȍ: "O",
                Ȏ: "O",
                Ơ: "O",
                Ờ: "O",
                Ớ: "O",
                Ỡ: "O",
                Ở: "O",
                Ợ: "O",
                Ọ: "O",
                Ộ: "O",
                Ǫ: "O",
                Ǭ: "O",
                Ø: "O",
                Ǿ: "O",
                Ɔ: "O",
                Ɵ: "O",
                Ꝋ: "O",
                Ꝍ: "O",
                Ƣ: "OI",
                Ꝏ: "OO",
                Ȣ: "OU",
                "\u24C5": "P",
                Ｐ: "P",
                Ṕ: "P",
                Ṗ: "P",
                Ƥ: "P",
                Ᵽ: "P",
                Ꝑ: "P",
                Ꝓ: "P",
                Ꝕ: "P",
                "\u24C6": "Q",
                Ｑ: "Q",
                Ꝗ: "Q",
                Ꝙ: "Q",
                Ɋ: "Q",
                "\u24C7": "R",
                Ｒ: "R",
                Ŕ: "R",
                Ṙ: "R",
                Ř: "R",
                Ȑ: "R",
                Ȓ: "R",
                Ṛ: "R",
                Ṝ: "R",
                Ŗ: "R",
                Ṟ: "R",
                Ɍ: "R",
                Ɽ: "R",
                Ꝛ: "R",
                Ꞧ: "R",
                Ꞃ: "R",
                "\u24C8": "S",
                Ｓ: "S",
                ẞ: "S",
                Ś: "S",
                Ṥ: "S",
                Ŝ: "S",
                Ṡ: "S",
                Š: "S",
                Ṧ: "S",
                Ṣ: "S",
                Ṩ: "S",
                Ș: "S",
                Ş: "S",
                Ȿ: "S",
                Ꞩ: "S",
                Ꞅ: "S",
                "\u24C9": "T",
                Ｔ: "T",
                Ṫ: "T",
                Ť: "T",
                Ṭ: "T",
                Ț: "T",
                Ţ: "T",
                Ṱ: "T",
                Ṯ: "T",
                Ŧ: "T",
                Ƭ: "T",
                Ʈ: "T",
                Ⱦ: "T",
                Ꞇ: "T",
                Ꜩ: "TZ",
                "\u24CA": "U",
                Ｕ: "U",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ũ: "U",
                Ṹ: "U",
                Ū: "U",
                Ṻ: "U",
                Ŭ: "U",
                Ü: "U",
                Ǜ: "U",
                Ǘ: "U",
                Ǖ: "U",
                Ǚ: "U",
                Ủ: "U",
                Ů: "U",
                Ű: "U",
                Ǔ: "U",
                Ȕ: "U",
                Ȗ: "U",
                Ư: "U",
                Ừ: "U",
                Ứ: "U",
                Ữ: "U",
                Ử: "U",
                Ự: "U",
                Ụ: "U",
                Ṳ: "U",
                Ų: "U",
                Ṷ: "U",
                Ṵ: "U",
                Ʉ: "U",
                "\u24CB": "V",
                Ｖ: "V",
                Ṽ: "V",
                Ṿ: "V",
                Ʋ: "V",
                Ꝟ: "V",
                Ʌ: "V",
                Ꝡ: "VY",
                "\u24CC": "W",
                Ｗ: "W",
                Ẁ: "W",
                Ẃ: "W",
                Ŵ: "W",
                Ẇ: "W",
                Ẅ: "W",
                Ẉ: "W",
                Ⱳ: "W",
                "\u24CD": "X",
                Ｘ: "X",
                Ẋ: "X",
                Ẍ: "X",
                "\u24CE": "Y",
                Ｙ: "Y",
                Ỳ: "Y",
                Ý: "Y",
                Ŷ: "Y",
                Ỹ: "Y",
                Ȳ: "Y",
                Ẏ: "Y",
                Ÿ: "Y",
                Ỷ: "Y",
                Ỵ: "Y",
                Ƴ: "Y",
                Ɏ: "Y",
                Ỿ: "Y",
                "\u24CF": "Z",
                Ｚ: "Z",
                Ź: "Z",
                Ẑ: "Z",
                Ż: "Z",
                Ž: "Z",
                Ẓ: "Z",
                Ẕ: "Z",
                Ƶ: "Z",
                Ȥ: "Z",
                Ɀ: "Z",
                Ⱬ: "Z",
                Ꝣ: "Z",
                "\u24D0": "a",
                ａ: "a",
                ẚ: "a",
                à: "a",
                á: "a",
                â: "a",
                ầ: "a",
                ấ: "a",
                ẫ: "a",
                ẩ: "a",
                ã: "a",
                ā: "a",
                ă: "a",
                ằ: "a",
                ắ: "a",
                ẵ: "a",
                ẳ: "a",
                ȧ: "a",
                ǡ: "a",
                ä: "a",
                ǟ: "a",
                ả: "a",
                å: "a",
                ǻ: "a",
                ǎ: "a",
                ȁ: "a",
                ȃ: "a",
                ạ: "a",
                ậ: "a",
                ặ: "a",
                ḁ: "a",
                ą: "a",
                ⱥ: "a",
                ɐ: "a",
                ꜳ: "aa",
                æ: "ae",
                ǽ: "ae",
                ǣ: "ae",
                ꜵ: "ao",
                ꜷ: "au",
                ꜹ: "av",
                ꜻ: "av",
                ꜽ: "ay",
                "\u24D1": "b",
                ｂ: "b",
                ḃ: "b",
                ḅ: "b",
                ḇ: "b",
                ƀ: "b",
                ƃ: "b",
                ɓ: "b",
                "\u24D2": "c",
                ｃ: "c",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                ç: "c",
                ḉ: "c",
                ƈ: "c",
                ȼ: "c",
                ꜿ: "c",
                ↄ: "c",
                "\u24D3": "d",
                ｄ: "d",
                ḋ: "d",
                ď: "d",
                ḍ: "d",
                ḑ: "d",
                ḓ: "d",
                ḏ: "d",
                đ: "d",
                ƌ: "d",
                ɖ: "d",
                ɗ: "d",
                ꝺ: "d",
                ǳ: "dz",
                ǆ: "dz",
                "\u24D4": "e",
                ｅ: "e",
                è: "e",
                é: "e",
                ê: "e",
                ề: "e",
                ế: "e",
                ễ: "e",
                ể: "e",
                ẽ: "e",
                ē: "e",
                ḕ: "e",
                ḗ: "e",
                ĕ: "e",
                ė: "e",
                ë: "e",
                ẻ: "e",
                ě: "e",
                ȅ: "e",
                ȇ: "e",
                ẹ: "e",
                ệ: "e",
                ȩ: "e",
                ḝ: "e",
                ę: "e",
                ḙ: "e",
                ḛ: "e",
                ɇ: "e",
                ɛ: "e",
                ǝ: "e",
                "\u24D5": "f",
                ｆ: "f",
                ḟ: "f",
                ƒ: "f",
                ꝼ: "f",
                "\u24D6": "g",
                ｇ: "g",
                ǵ: "g",
                ĝ: "g",
                ḡ: "g",
                ğ: "g",
                ġ: "g",
                ǧ: "g",
                ģ: "g",
                ǥ: "g",
                ɠ: "g",
                ꞡ: "g",
                ᵹ: "g",
                ꝿ: "g",
                "\u24D7": "h",
                ｈ: "h",
                ĥ: "h",
                ḣ: "h",
                ḧ: "h",
                ȟ: "h",
                ḥ: "h",
                ḩ: "h",
                ḫ: "h",
                ẖ: "h",
                ħ: "h",
                ⱨ: "h",
                ⱶ: "h",
                ɥ: "h",
                ƕ: "hv",
                "\u24D8": "i",
                ｉ: "i",
                ì: "i",
                í: "i",
                î: "i",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                ï: "i",
                ḯ: "i",
                ỉ: "i",
                ǐ: "i",
                ȉ: "i",
                ȋ: "i",
                ị: "i",
                į: "i",
                ḭ: "i",
                ɨ: "i",
                ı: "i",
                "\u24D9": "j",
                ｊ: "j",
                ĵ: "j",
                ǰ: "j",
                ɉ: "j",
                "\u24DA": "k",
                ｋ: "k",
                ḱ: "k",
                ǩ: "k",
                ḳ: "k",
                ķ: "k",
                ḵ: "k",
                ƙ: "k",
                ⱪ: "k",
                ꝁ: "k",
                ꝃ: "k",
                ꝅ: "k",
                ꞣ: "k",
                "\u24DB": "l",
                ｌ: "l",
                ŀ: "l",
                ĺ: "l",
                ľ: "l",
                ḷ: "l",
                ḹ: "l",
                ļ: "l",
                ḽ: "l",
                ḻ: "l",
                ſ: "l",
                ł: "l",
                ƚ: "l",
                ɫ: "l",
                ⱡ: "l",
                ꝉ: "l",
                ꞁ: "l",
                ꝇ: "l",
                ǉ: "lj",
                "\u24DC": "m",
                ｍ: "m",
                ḿ: "m",
                ṁ: "m",
                ṃ: "m",
                ɱ: "m",
                ɯ: "m",
                "\u24DD": "n",
                ｎ: "n",
                ǹ: "n",
                ń: "n",
                ñ: "n",
                ṅ: "n",
                ň: "n",
                ṇ: "n",
                ņ: "n",
                ṋ: "n",
                ṉ: "n",
                ƞ: "n",
                ɲ: "n",
                ŉ: "n",
                ꞑ: "n",
                ꞥ: "n",
                ǌ: "nj",
                "\u24DE": "o",
                ｏ: "o",
                ò: "o",
                ó: "o",
                ô: "o",
                ồ: "o",
                ố: "o",
                ỗ: "o",
                ổ: "o",
                õ: "o",
                ṍ: "o",
                ȭ: "o",
                ṏ: "o",
                ō: "o",
                ṑ: "o",
                ṓ: "o",
                ŏ: "o",
                ȯ: "o",
                ȱ: "o",
                ö: "o",
                ȫ: "o",
                ỏ: "o",
                ő: "o",
                ǒ: "o",
                ȍ: "o",
                ȏ: "o",
                ơ: "o",
                ờ: "o",
                ớ: "o",
                ỡ: "o",
                ở: "o",
                ợ: "o",
                ọ: "o",
                ộ: "o",
                ǫ: "o",
                ǭ: "o",
                ø: "o",
                ǿ: "o",
                ɔ: "o",
                ꝋ: "o",
                ꝍ: "o",
                ɵ: "o",
                ƣ: "oi",
                ȣ: "ou",
                ꝏ: "oo",
                "\u24DF": "p",
                ｐ: "p",
                ṕ: "p",
                ṗ: "p",
                ƥ: "p",
                ᵽ: "p",
                ꝑ: "p",
                ꝓ: "p",
                ꝕ: "p",
                "\u24E0": "q",
                ｑ: "q",
                ɋ: "q",
                ꝗ: "q",
                ꝙ: "q",
                "\u24E1": "r",
                ｒ: "r",
                ŕ: "r",
                ṙ: "r",
                ř: "r",
                ȑ: "r",
                ȓ: "r",
                ṛ: "r",
                ṝ: "r",
                ŗ: "r",
                ṟ: "r",
                ɍ: "r",
                ɽ: "r",
                ꝛ: "r",
                ꞧ: "r",
                ꞃ: "r",
                "\u24E2": "s",
                ｓ: "s",
                ß: "s",
                ś: "s",
                ṥ: "s",
                ŝ: "s",
                ṡ: "s",
                š: "s",
                ṧ: "s",
                ṣ: "s",
                ṩ: "s",
                ș: "s",
                ş: "s",
                ȿ: "s",
                ꞩ: "s",
                ꞅ: "s",
                ẛ: "s",
                "\u24E3": "t",
                ｔ: "t",
                ṫ: "t",
                ẗ: "t",
                ť: "t",
                ṭ: "t",
                ț: "t",
                ţ: "t",
                ṱ: "t",
                ṯ: "t",
                ŧ: "t",
                ƭ: "t",
                ʈ: "t",
                ⱦ: "t",
                ꞇ: "t",
                ꜩ: "tz",
                "\u24E4": "u",
                ｕ: "u",
                ù: "u",
                ú: "u",
                û: "u",
                ũ: "u",
                ṹ: "u",
                ū: "u",
                ṻ: "u",
                ŭ: "u",
                ü: "u",
                ǜ: "u",
                ǘ: "u",
                ǖ: "u",
                ǚ: "u",
                ủ: "u",
                ů: "u",
                ű: "u",
                ǔ: "u",
                ȕ: "u",
                ȗ: "u",
                ư: "u",
                ừ: "u",
                ứ: "u",
                ữ: "u",
                ử: "u",
                ự: "u",
                ụ: "u",
                ṳ: "u",
                ų: "u",
                ṷ: "u",
                ṵ: "u",
                ʉ: "u",
                "\u24E5": "v",
                ｖ: "v",
                ṽ: "v",
                ṿ: "v",
                ʋ: "v",
                ꝟ: "v",
                ʌ: "v",
                ꝡ: "vy",
                "\u24E6": "w",
                ｗ: "w",
                ẁ: "w",
                ẃ: "w",
                ŵ: "w",
                ẇ: "w",
                ẅ: "w",
                ẘ: "w",
                ẉ: "w",
                ⱳ: "w",
                "\u24E7": "x",
                ｘ: "x",
                ẋ: "x",
                ẍ: "x",
                "\u24E8": "y",
                ｙ: "y",
                ỳ: "y",
                ý: "y",
                ŷ: "y",
                ỹ: "y",
                ȳ: "y",
                ẏ: "y",
                ÿ: "y",
                ỷ: "y",
                ẙ: "y",
                ỵ: "y",
                ƴ: "y",
                ɏ: "y",
                ỿ: "y",
                "\u24E9": "z",
                ｚ: "z",
                ź: "z",
                ẑ: "z",
                ż: "z",
                ž: "z",
                ẓ: "z",
                ẕ: "z",
                ƶ: "z",
                ȥ: "z",
                ɀ: "z",
                ⱬ: "z",
                ꝣ: "z",
                Ά: "\u0391",
                Έ: "\u0395",
                Ή: "\u0397",
                Ί: "\u0399",
                Ϊ: "\u0399",
                Ό: "\u039F",
                Ύ: "\u03A5",
                Ϋ: "\u03A5",
                Ώ: "\u03A9",
                ά: "\u03B1",
                έ: "\u03B5",
                ή: "\u03B7",
                ί: "\u03B9",
                ϊ: "\u03B9",
                ΐ: "\u03B9",
                ό: "\u03BF",
                ύ: "\u03C5",
                ϋ: "\u03C5",
                ΰ: "\u03C5",
                ω: "\u03C9",
                ς: "\u03C3"
            };

            return diacritics;
        });

        S2.define("select2/data/base", ["../utils"], function(Utils) {
            function BaseAdapter($element, options) {
                BaseAdapter.__super__.constructor.call(this);
            }

            Utils.Extend(BaseAdapter, Utils.Observable);

            BaseAdapter.prototype.current = function(callback) {
                throw new Error(
                    "The `current` method must be defined in child classes."
                );
            };

            BaseAdapter.prototype.query = function(params, callback) {
                throw new Error(
                    "The `query` method must be defined in child classes."
                );
            };

            BaseAdapter.prototype.bind = function(container, $container) {
                // Can be implemented in subclasses
            };

            BaseAdapter.prototype.destroy = function() {
                // Can be implemented in subclasses
            };

            BaseAdapter.prototype.generateResultId = function(container, data) {
                var id = container.id + "-result-";

                id += Utils.generateChars(4);

                if (data.id != null) {
                    id += "-" + data.id.toString();
                } else {
                    id += "-" + Utils.generateChars(4);
                }
                return id;
            };

            return BaseAdapter;
        });

        S2.define(
            "select2/data/select",
            ["./base", "../utils", "jquery"],
            function(BaseAdapter, Utils, $) {
                function SelectAdapter($element, options) {
                    this.$element = $element;
                    this.options = options;

                    SelectAdapter.__super__.constructor.call(this);
                }

                Utils.Extend(SelectAdapter, BaseAdapter);

                SelectAdapter.prototype.current = function(callback) {
                    var data = [];
                    var self = this;

                    this.$element.find(":selected").each(function() {
                        var $option = $(this);

                        var option = self.item($option);

                        data.push(option);
                    });

                    callback(data);
                };

                SelectAdapter.prototype.select = function(data) {
                    var self = this;

                    data.selected = true;

                    // If data.element is a DOM node, use it instead
                    if ($(data.element).is("option")) {
                        data.element.selected = true;

                        this.$element.trigger("change");

                        return;
                    }

                    if (this.$element.prop("multiple")) {
                        this.current(function(currentData) {
                            var val = [];

                            data = [data];
                            data.push.apply(data, currentData);

                            for (var d = 0; d < data.length; d++) {
                                var id = data[d].id;

                                if ($.inArray(id, val) === -1) {
                                    val.push(id);
                                }
                            }

                            self.$element.val(val);
                            self.$element.trigger("change");
                        });
                    } else {
                        var val = data.id;

                        this.$element.val(val);
                        this.$element.trigger("change");
                    }
                };

                SelectAdapter.prototype.unselect = function(data) {
                    var self = this;

                    if (!this.$element.prop("multiple")) {
                        return;
                    }

                    data.selected = false;

                    if ($(data.element).is("option")) {
                        data.element.selected = false;

                        this.$element.trigger("change");

                        return;
                    }

                    this.current(function(currentData) {
                        var val = [];

                        for (var d = 0; d < currentData.length; d++) {
                            var id = currentData[d].id;

                            if (id !== data.id && $.inArray(id, val) === -1) {
                                val.push(id);
                            }
                        }

                        self.$element.val(val);

                        self.$element.trigger("change");
                    });
                };

                SelectAdapter.prototype.bind = function(container, $container) {
                    var self = this;

                    this.container = container;

                    container.on("select", function(params) {
                        self.select(params.data);
                    });

                    container.on("unselect", function(params) {
                        self.unselect(params.data);
                    });
                };

                SelectAdapter.prototype.destroy = function() {
                    // Remove anything added to child elements
                    this.$element.find("*").each(function() {
                        // Remove any custom data set by Select2
                        $.removeData(this, "data");
                    });
                };

                SelectAdapter.prototype.query = function(params, callback) {
                    var data = [];
                    var self = this;

                    var $options = this.$element.children();

                    $options.each(function() {
                        var $option = $(this);

                        if (!$option.is("option") && !$option.is("optgroup")) {
                            return;
                        }

                        var option = self.item($option);

                        var matches = self.matches(params, option);

                        if (matches !== null) {
                            data.push(matches);
                        }
                    });

                    callback({
                        results: data
                    });
                };

                SelectAdapter.prototype.addOptions = function($options) {
                    Utils.appendMany(this.$element, $options);
                };

                SelectAdapter.prototype.option = function(data) {
                    var option;

                    if (data.children) {
                        option = document.createElement("optgroup");
                        option.label = data.text;
                    } else {
                        option = document.createElement("option");

                        if (option.textContent !== undefined) {
                            option.textContent = data.text;
                        } else {
                            option.innerText = data.text;
                        }
                    }

                    if (data.id !== undefined) {
                        option.value = data.id;
                    }

                    if (data.disabled) {
                        option.disabled = true;
                    }

                    if (data.selected) {
                        option.selected = true;
                    }

                    if (data.title) {
                        option.title = data.title;
                    }

                    var $option = $(option);

                    var normalizedData = this._normalizeItem(data);
                    normalizedData.element = option;

                    // Override the option's data with the combined data
                    $.data(option, "data", normalizedData);

                    return $option;
                };

                SelectAdapter.prototype.item = function($option) {
                    var data = {};

                    data = $.data($option[0], "data");

                    if (data != null) {
                        return data;
                    }

                    if ($option.is("option")) {
                        data = {
                            id: $option.val(),
                            text: $option.text(),
                            disabled: $option.prop("disabled"),
                            selected: $option.prop("selected"),
                            title: $option.prop("title")
                        };
                    } else if ($option.is("optgroup")) {
                        data = {
                            text: $option.prop("label"),
                            children: [],
                            title: $option.prop("title")
                        };

                        var $children = $option.children("option");
                        var children = [];

                        for (var c = 0; c < $children.length; c++) {
                            var $child = $($children[c]);

                            var child = this.item($child);

                            children.push(child);
                        }

                        data.children = children;
                    }

                    data = this._normalizeItem(data);
                    data.element = $option[0];

                    $.data($option[0], "data", data);

                    return data;
                };

                SelectAdapter.prototype._normalizeItem = function(item) {
                    if (!$.isPlainObject(item)) {
                        item = {
                            id: item,
                            text: item
                        };
                    }

                    item = $.extend(
                        {},
                        {
                            text: ""
                        },
                        item
                    );

                    var defaults = {
                        selected: false,
                        disabled: false
                    };

                    if (item.id != null) {
                        item.id = item.id.toString();
                    }

                    if (item.text != null) {
                        item.text = item.text.toString();
                    }

                    if (
                        item._resultId == null &&
                        item.id &&
                        this.container != null
                    ) {
                        item._resultId = this.generateResultId(
                            this.container,
                            item
                        );
                    }

                    return $.extend({}, defaults, item);
                };

                SelectAdapter.prototype.matches = function(params, data) {
                    var matcher = this.options.get("matcher");

                    return matcher(params, data);
                };

                return SelectAdapter;
            }
        );

        S2.define(
            "select2/data/array",
            ["./select", "../utils", "jquery"],
            function(SelectAdapter, Utils, $) {
                function ArrayAdapter($element, options) {
                    var data = options.get("data") || [];

                    ArrayAdapter.__super__.constructor.call(
                        this,
                        $element,
                        options
                    );

                    this.addOptions(this.convertToOptions(data));
                }

                Utils.Extend(ArrayAdapter, SelectAdapter);

                ArrayAdapter.prototype.select = function(data) {
                    var $option = this.$element
                        .find("option")
                        .filter(function(i, elm) {
                            return elm.value == data.id.toString();
                        });

                    if ($option.length === 0) {
                        $option = this.option(data);

                        this.addOptions($option);
                    }

                    ArrayAdapter.__super__.select.call(this, data);
                };

                ArrayAdapter.prototype.convertToOptions = function(data) {
                    var self = this;

                    var $existing = this.$element.find("option");
                    var existingIds = $existing
                        .map(function() {
                            return self.item($(this)).id;
                        })
                        .get();

                    var $options = [];

                    // Filter out all items except for the one passed in the argument
                    function onlyItem(item) {
                        return function() {
                            return $(this).val() == item.id;
                        };
                    }

                    for (var d = 0; d < data.length; d++) {
                        var item = this._normalizeItem(data[d]);

                        // Skip items which were pre-loaded, only merge the data
                        if ($.inArray(item.id, existingIds) >= 0) {
                            var $existingOption = $existing.filter(
                                onlyItem(item)
                            );

                            var existingData = this.item($existingOption);
                            var newData = $.extend(
                                true,
                                {},
                                item,
                                existingData
                            );

                            var $newOption = this.option(newData);

                            $existingOption.replaceWith($newOption);

                            continue;
                        }

                        var $option = this.option(item);

                        if (item.children) {
                            var $children = this.convertToOptions(
                                item.children
                            );

                            Utils.appendMany($option, $children);
                        }

                        $options.push($option);
                    }

                    return $options;
                };

                return ArrayAdapter;
            }
        );

        S2.define(
            "select2/data/ajax",
            ["./array", "../utils", "jquery"],
            function(ArrayAdapter, Utils, $) {
                function AjaxAdapter($element, options) {
                    this.ajaxOptions = this._applyDefaults(options.get("ajax"));

                    if (this.ajaxOptions.processResults != null) {
                        this.processResults = this.ajaxOptions.processResults;
                    }

                    AjaxAdapter.__super__.constructor.call(
                        this,
                        $element,
                        options
                    );
                }

                Utils.Extend(AjaxAdapter, ArrayAdapter);

                AjaxAdapter.prototype._applyDefaults = function(options) {
                    var defaults = {
                        data: function(params) {
                            return $.extend({}, params, {
                                q: params.term
                            });
                        },
                        transport: function(params, success, failure) {
                            var $request = $.ajax(params);

                            $request.then(success);
                            $request.fail(failure);

                            return $request;
                        }
                    };

                    return $.extend({}, defaults, options, true);
                };

                AjaxAdapter.prototype.processResults = function(results) {
                    return results;
                };

                AjaxAdapter.prototype.query = function(params, callback) {
                    var matches = [];
                    var self = this;

                    if (this._request != null) {
                        // JSONP requests cannot always be aborted
                        if ($.isFunction(this._request.abort)) {
                            this._request.abort();
                        }

                        this._request = null;
                    }

                    var options = $.extend(
                        {
                            type: "GET"
                        },
                        this.ajaxOptions
                    );

                    if (typeof options.url === "function") {
                        options.url = options.url.call(this.$element, params);
                    }

                    if (typeof options.data === "function") {
                        options.data = options.data.call(this.$element, params);
                    }

                    function request() {
                        var $request = options.transport(
                            options,
                            function(data) {
                                var results = self.processResults(data, params);

                                if (
                                    self.options.get("debug") &&
                                    window.console &&
                                    console.error
                                ) {
                                    // Check to make sure that the response included a `results` key.
                                    if (
                                        !results ||
                                        !results.results ||
                                        !$.isArray(results.results)
                                    ) {
                                        console.error(
                                            "Select2: The AJAX results did not return an array in the " +
                                                "`results` key of the response."
                                        );
                                    }
                                }

                                callback(results);
                            },
                            function() {
                                // Attempt to detect if a request was aborted
                                // Only works if the transport exposes a status property
                                if (
                                    $request.status &&
                                    $request.status === "0"
                                ) {
                                    return;
                                }

                                self.trigger("results:message", {
                                    message: "errorLoading"
                                });
                            }
                        );

                        self._request = $request;
                    }

                    if (this.ajaxOptions.delay && params.term != null) {
                        if (this._queryTimeout) {
                            window.clearTimeout(this._queryTimeout);
                        }

                        this._queryTimeout = window.setTimeout(
                            request,
                            this.ajaxOptions.delay
                        );
                    } else {
                        request();
                    }
                };

                return AjaxAdapter;
            }
        );

        S2.define("select2/data/tags", ["jquery"], function($) {
            function Tags(decorated, $element, options) {
                var tags = options.get("tags");

                var createTag = options.get("createTag");

                if (createTag !== undefined) {
                    this.createTag = createTag;
                }

                var insertTag = options.get("insertTag");

                if (insertTag !== undefined) {
                    this.insertTag = insertTag;
                }

                decorated.call(this, $element, options);

                if ($.isArray(tags)) {
                    for (var t = 0; t < tags.length; t++) {
                        var tag = tags[t];
                        var item = this._normalizeItem(tag);

                        var $option = this.option(item);

                        this.$element.append($option);
                    }
                }
            }

            Tags.prototype.query = function(decorated, params, callback) {
                var self = this;

                this._removeOldTags();

                if (params.term == null || params.page != null) {
                    decorated.call(this, params, callback);
                    return;
                }

                function wrapper(obj, child) {
                    var data = obj.results;

                    for (var i = 0; i < data.length; i++) {
                        var option = data[i];

                        var checkChildren =
                            option.children != null &&
                            !wrapper(
                                {
                                    results: option.children
                                },
                                true
                            );

                        var optionText = (option.text || "").toUpperCase();
                        var paramsTerm = (params.term || "").toUpperCase();

                        var checkText = optionText === paramsTerm;

                        if (checkText || checkChildren) {
                            if (child) {
                                return false;
                            }

                            obj.data = data;
                            callback(obj);

                            return;
                        }
                    }

                    if (child) {
                        return true;
                    }

                    var tag = self.createTag(params);

                    if (tag != null) {
                        var $option = self.option(tag);
                        $option.attr("data-select2-tag", true);

                        self.addOptions([$option]);

                        self.insertTag(data, tag);
                    }

                    obj.results = data;

                    callback(obj);
                }

                decorated.call(this, params, wrapper);
            };

            Tags.prototype.createTag = function(decorated, params) {
                var term = $.trim(params.term);

                if (term === "") {
                    return null;
                }

                return {
                    id: term,
                    text: term
                };
            };

            Tags.prototype.insertTag = function(_, data, tag) {
                data.unshift(tag);
            };

            Tags.prototype._removeOldTags = function(_) {
                var tag = this._lastTag;

                var $options = this.$element.find("option[data-select2-tag]");

                $options.each(function() {
                    if (this.selected) {
                        return;
                    }

                    $(this).remove();
                });
            };

            return Tags;
        });

        S2.define("select2/data/tokenizer", ["jquery"], function($) {
            function Tokenizer(decorated, $element, options) {
                var tokenizer = options.get("tokenizer");

                if (tokenizer !== undefined) {
                    this.tokenizer = tokenizer;
                }

                decorated.call(this, $element, options);
            }

            Tokenizer.prototype.bind = function(
                decorated,
                container,
                $container
            ) {
                decorated.call(this, container, $container);

                this.$search =
                    container.dropdown.$search ||
                    container.selection.$search ||
                    $container.find(".select2-search__field");
            };

            Tokenizer.prototype.query = function(decorated, params, callback) {
                var self = this;

                function createAndSelect(data) {
                    // Normalize the data object so we can use it for checks
                    var item = self._normalizeItem(data);

                    // Check if the data object already exists as a tag
                    // Select it if it doesn't
                    var $existingOptions = self.$element
                        .find("option")
                        .filter(function() {
                            return $(this).val() === item.id;
                        });

                    // If an existing option wasn't found for it, create the option
                    if (!$existingOptions.length) {
                        var $option = self.option(item);
                        $option.attr("data-select2-tag", true);

                        self._removeOldTags();
                        self.addOptions([$option]);
                    }

                    // Select the item, now that we know there is an option for it
                    select(item);
                }

                function select(data) {
                    self.trigger("select", {
                        data: data
                    });
                }

                params.term = params.term || "";

                var tokenData = this.tokenizer(
                    params,
                    this.options,
                    createAndSelect
                );

                if (tokenData.term !== params.term) {
                    // Replace the search term if we have the search box
                    if (this.$search.length) {
                        this.$search.val(tokenData.term);
                        this.$search.focus();
                    }

                    params.term = tokenData.term;
                }

                decorated.call(this, params, callback);
            };

            Tokenizer.prototype.tokenizer = function(
                _,
                params,
                options,
                callback
            ) {
                var separators = options.get("tokenSeparators") || [];
                var term = params.term;
                var i = 0;

                var createTag =
                    this.createTag ||
                    function(params) {
                        return {
                            id: params.term,
                            text: params.term
                        };
                    };

                while (i < term.length) {
                    var termChar = term[i];

                    if ($.inArray(termChar, separators) === -1) {
                        i++;

                        continue;
                    }

                    var part = term.substr(0, i);
                    var partParams = $.extend({}, params, {
                        term: part
                    });

                    var data = createTag(partParams);

                    if (data == null) {
                        i++;
                        continue;
                    }

                    callback(data);

                    // Reset the term to not include the tokenized portion
                    term = term.substr(i + 1) || "";
                    i = 0;
                }

                return {
                    term: term
                };
            };

            return Tokenizer;
        });

        S2.define("select2/data/minimumInputLength", [], function() {
            function MinimumInputLength(decorated, $e, options) {
                this.minimumInputLength = options.get("minimumInputLength");

                decorated.call(this, $e, options);
            }

            MinimumInputLength.prototype.query = function(
                decorated,
                params,
                callback
            ) {
                params.term = params.term || "";

                if (params.term.length < this.minimumInputLength) {
                    this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                            minimum: this.minimumInputLength,
                            input: params.term,
                            params: params
                        }
                    });

                    return;
                }

                decorated.call(this, params, callback);
            };

            return MinimumInputLength;
        });

        S2.define("select2/data/maximumInputLength", [], function() {
            function MaximumInputLength(decorated, $e, options) {
                this.maximumInputLength = options.get("maximumInputLength");

                decorated.call(this, $e, options);
            }

            MaximumInputLength.prototype.query = function(
                decorated,
                params,
                callback
            ) {
                params.term = params.term || "";

                if (
                    this.maximumInputLength > 0 &&
                    params.term.length > this.maximumInputLength
                ) {
                    this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                            maximum: this.maximumInputLength,
                            input: params.term,
                            params: params
                        }
                    });

                    return;
                }

                decorated.call(this, params, callback);
            };

            return MaximumInputLength;
        });

        S2.define("select2/data/maximumSelectionLength", [], function() {
            function MaximumSelectionLength(decorated, $e, options) {
                this.maximumSelectionLength = options.get(
                    "maximumSelectionLength"
                );

                decorated.call(this, $e, options);
            }

            MaximumSelectionLength.prototype.query = function(
                decorated,
                params,
                callback
            ) {
                var self = this;

                this.current(function(currentData) {
                    var count = currentData != null ? currentData.length : 0;
                    if (
                        self.maximumSelectionLength > 0 &&
                        count >= self.maximumSelectionLength
                    ) {
                        self.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                                maximum: self.maximumSelectionLength
                            }
                        });
                        return;
                    }
                    decorated.call(self, params, callback);
                });
            };

            return MaximumSelectionLength;
        });

        S2.define("select2/dropdown", ["jquery", "./utils"], function(
            $,
            Utils
        ) {
            function Dropdown($element, options) {
                this.$element = $element;
                this.options = options;

                Dropdown.__super__.constructor.call(this);
            }

            Utils.Extend(Dropdown, Utils.Observable);

            Dropdown.prototype.render = function() {
                var $dropdown = $(
                    '<span class="select2-dropdown">' +
                        '<span class="select2-results"></span>' +
                        "</span>"
                );

                $dropdown.attr("dir", this.options.get("dir"));

                this.$dropdown = $dropdown;

                return $dropdown;
            };

            Dropdown.prototype.bind = function() {
                // Should be implemented in subclasses
            };

            Dropdown.prototype.position = function($dropdown, $container) {
                // Should be implmented in subclasses
            };

            Dropdown.prototype.destroy = function() {
                // Remove the dropdown from the DOM
                this.$dropdown.remove();
            };

            return Dropdown;
        });

        S2.define("select2/dropdown/search", ["jquery", "../utils"], function(
            $,
            Utils
        ) {
            function Search() {}

            Search.prototype.render = function(decorated) {
                var $rendered = decorated.call(this);

                var $search = $(
                    '<span class="select2-search select2-search--dropdown">' +
                        '<input class="select2-search__field" type="search" tabindex="-1"' +
                        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
                        ' spellcheck="false" role="textbox" />' +
                        "</span>"
                );

                this.$searchContainer = $search;
                this.$search = $search.find("input");

                $rendered.prepend($search);

                return $rendered;
            };

            Search.prototype.bind = function(decorated, container, $container) {
                var self = this;

                decorated.call(this, container, $container);

                this.$search.on("keydown", function(evt) {
                    self.trigger("keypress", evt);

                    self._keyUpPrevented = evt.isDefaultPrevented();
                });

                // Workaround for browsers which do not support the `input` event
                // This will prevent double-triggering of events for browsers which support
                // both the `keyup` and `input` events.
                this.$search.on("input", function(evt) {
                    // Unbind the duplicated `keyup` event
                    $(this).off("keyup");
                });

                this.$search.on("keyup input", function(evt) {
                    self.handleSearch(evt);
                });

                container.on("open", function() {
                    self.$search.attr("tabindex", 0);

                    self.$search.focus();

                    window.setTimeout(function() {
                        self.$search.focus();
                    }, 0);
                });

                container.on("close", function() {
                    self.$search.attr("tabindex", -1);

                    self.$search.val("");
                });

                container.on("focus", function() {
                    if (!container.isOpen()) {
                        self.$search.focus();
                    }
                });

                container.on("results:all", function(params) {
                    if (params.query.term == null || params.query.term === "") {
                        var showSearch = self.showSearch(params);

                        if (showSearch) {
                            self.$searchContainer.removeClass(
                                "select2-search--hide"
                            );
                        } else {
                            self.$searchContainer.addClass(
                                "select2-search--hide"
                            );
                        }
                    }
                });
            };

            Search.prototype.handleSearch = function(evt) {
                if (!this._keyUpPrevented) {
                    var input = this.$search.val();

                    this.trigger("query", {
                        term: input
                    });
                }

                this._keyUpPrevented = false;
            };

            Search.prototype.showSearch = function(_, params) {
                return true;
            };

            return Search;
        });

        S2.define("select2/dropdown/hidePlaceholder", [], function() {
            function HidePlaceholder(
                decorated,
                $element,
                options,
                dataAdapter
            ) {
                this.placeholder = this.normalizePlaceholder(
                    options.get("placeholder")
                );

                decorated.call(this, $element, options, dataAdapter);
            }

            HidePlaceholder.prototype.append = function(decorated, data) {
                data.results = this.removePlaceholder(data.results);

                decorated.call(this, data);
            };

            HidePlaceholder.prototype.normalizePlaceholder = function(
                _,
                placeholder
            ) {
                if (typeof placeholder === "string") {
                    placeholder = {
                        id: "",
                        text: placeholder
                    };
                }

                return placeholder;
            };

            HidePlaceholder.prototype.removePlaceholder = function(_, data) {
                var modifiedData = data.slice(0);

                for (var d = data.length - 1; d >= 0; d--) {
                    var item = data[d];

                    if (this.placeholder.id === item.id) {
                        modifiedData.splice(d, 1);
                    }
                }

                return modifiedData;
            };

            return HidePlaceholder;
        });

        S2.define("select2/dropdown/infiniteScroll", ["jquery"], function($) {
            function InfiniteScroll(decorated, $element, options, dataAdapter) {
                this.lastParams = {};

                decorated.call(this, $element, options, dataAdapter);

                this.$loadingMore = this.createLoadingMore();
                this.loading = false;
            }

            InfiniteScroll.prototype.append = function(decorated, data) {
                this.$loadingMore.remove();
                this.loading = false;

                decorated.call(this, data);

                if (this.showLoadingMore(data)) {
                    this.$results.append(this.$loadingMore);
                }
            };

            InfiniteScroll.prototype.bind = function(
                decorated,
                container,
                $container
            ) {
                var self = this;

                decorated.call(this, container, $container);

                container.on("query", function(params) {
                    self.lastParams = params;
                    self.loading = true;
                });

                container.on("query:append", function(params) {
                    self.lastParams = params;
                    self.loading = true;
                });

                this.$results.on("scroll", function() {
                    var isLoadMoreVisible = $.contains(
                        document.documentElement,
                        self.$loadingMore[0]
                    );

                    if (self.loading || !isLoadMoreVisible) {
                        return;
                    }

                    var currentOffset =
                        self.$results.offset().top +
                        self.$results.outerHeight(false);
                    var loadingMoreOffset =
                        self.$loadingMore.offset().top +
                        self.$loadingMore.outerHeight(false);

                    if (currentOffset + 50 >= loadingMoreOffset) {
                        self.loadMore();
                    }
                });
            };

            InfiniteScroll.prototype.loadMore = function() {
                this.loading = true;

                var params = $.extend({}, { page: 1 }, this.lastParams);

                params.page++;

                this.trigger("query:append", params);
            };

            InfiniteScroll.prototype.showLoadingMore = function(_, data) {
                return data.pagination && data.pagination.more;
            };

            InfiniteScroll.prototype.createLoadingMore = function() {
                var $option = $(
                    "<li " +
                        'class="select2-results__option select2-results__option--load-more"' +
                        'role="treeitem" aria-disabled="true"></li>'
                );

                var message = this.options
                    .get("translations")
                    .get("loadingMore");

                $option.html(message(this.lastParams));

                return $option;
            };

            return InfiniteScroll;
        });

        S2.define(
            "select2/dropdown/attachBody",
            ["jquery", "../utils"],
            function($, Utils) {
                function AttachBody(decorated, $element, options) {
                    this.$dropdownParent =
                        options.get("dropdownParent") || $(document.body);

                    decorated.call(this, $element, options);
                }

                AttachBody.prototype.bind = function(
                    decorated,
                    container,
                    $container
                ) {
                    var self = this;

                    var setupResultsEvents = false;

                    decorated.call(this, container, $container);

                    container.on("open", function() {
                        self._showDropdown();
                        self._attachPositioningHandler(container);

                        if (!setupResultsEvents) {
                            setupResultsEvents = true;

                            container.on("results:all", function() {
                                self._positionDropdown();
                                self._resizeDropdown();
                            });

                            container.on("results:append", function() {
                                self._positionDropdown();
                                self._resizeDropdown();
                            });
                        }
                    });

                    container.on("close", function() {
                        self._hideDropdown();
                        self._detachPositioningHandler(container);
                    });

                    this.$dropdownContainer.on("mousedown", function(evt) {
                        evt.stopPropagation();
                    });
                };

                AttachBody.prototype.destroy = function(decorated) {
                    decorated.call(this);

                    this.$dropdownContainer.remove();
                };

                AttachBody.prototype.position = function(
                    decorated,
                    $dropdown,
                    $container
                ) {
                    // Clone all of the container classes
                    $dropdown.attr("class", $container.attr("class"));

                    $dropdown.removeClass("select2");
                    $dropdown.addClass("select2-container--open");

                    $dropdown.css({
                        position: "absolute",
                        top: -999999
                    });

                    this.$container = $container;
                };

                AttachBody.prototype.render = function(decorated) {
                    var $container = $("<span></span>");

                    var $dropdown = decorated.call(this);
                    $container.append($dropdown);

                    this.$dropdownContainer = $container;

                    return $container;
                };

                AttachBody.prototype._hideDropdown = function(decorated) {
                    this.$dropdownContainer.detach();
                };

                AttachBody.prototype._attachPositioningHandler = function(
                    decorated,
                    container
                ) {
                    var self = this;

                    var scrollEvent = "scroll.select2." + container.id;
                    var resizeEvent = "resize.select2." + container.id;
                    var orientationEvent =
                        "orientationchange.select2." + container.id;

                    var $watchers = this.$container
                        .parents()
                        .filter(Utils.hasScroll);
                    $watchers.each(function() {
                        $(this).data("select2-scroll-position", {
                            x: $(this).scrollLeft(),
                            y: $(this).scrollTop()
                        });
                    });

                    $watchers.on(scrollEvent, function(ev) {
                        var position = $(this).data("select2-scroll-position");
                        $(this).scrollTop(position.y);
                    });

                    $(window).on(
                        scrollEvent +
                            " " +
                            resizeEvent +
                            " " +
                            orientationEvent,
                        function(e) {
                            self._positionDropdown();
                            self._resizeDropdown();
                        }
                    );
                };

                AttachBody.prototype._detachPositioningHandler = function(
                    decorated,
                    container
                ) {
                    var scrollEvent = "scroll.select2." + container.id;
                    var resizeEvent = "resize.select2." + container.id;
                    var orientationEvent =
                        "orientationchange.select2." + container.id;

                    var $watchers = this.$container
                        .parents()
                        .filter(Utils.hasScroll);
                    $watchers.off(scrollEvent);

                    $(window).off(
                        scrollEvent + " " + resizeEvent + " " + orientationEvent
                    );
                };

                AttachBody.prototype._positionDropdown = function() {
                    var $window = $(window);

                    var isCurrentlyAbove = this.$dropdown.hasClass(
                        "select2-dropdown--above"
                    );
                    var isCurrentlyBelow = this.$dropdown.hasClass(
                        "select2-dropdown--below"
                    );

                    var newDirection = null;

                    var offset = this.$container.offset();

                    offset.bottom =
                        offset.top + this.$container.outerHeight(false);

                    var container = {
                        height: this.$container.outerHeight(false)
                    };

                    container.top = offset.top;
                    container.bottom = offset.top + container.height;

                    var dropdown = {
                        height: this.$dropdown.outerHeight(false)
                    };

                    var viewport = {
                        top: $window.scrollTop(),
                        bottom: $window.scrollTop() + $window.height()
                    };

                    var enoughRoomAbove =
                        viewport.top < offset.top - dropdown.height;
                    var enoughRoomBelow =
                        viewport.bottom > offset.bottom + dropdown.height;

                    var css = {
                        left: offset.left,
                        top: container.bottom
                    };

                    // Determine what the parent element is to use for calciulating the offset
                    var $offsetParent = this.$dropdownParent;

                    // For statically positoned elements, we need to get the element
                    // that is determining the offset
                    if ($offsetParent.css("position") === "static") {
                        $offsetParent = $offsetParent.offsetParent();
                    }

                    var parentOffset = $offsetParent.offset();

                    css.top -= parentOffset.top;
                    css.left -= parentOffset.left;

                    if (!isCurrentlyAbove && !isCurrentlyBelow) {
                        newDirection = "below";
                    }

                    if (
                        !enoughRoomBelow &&
                        enoughRoomAbove &&
                        !isCurrentlyAbove
                    ) {
                        newDirection = "above";
                    } else if (
                        !enoughRoomAbove &&
                        enoughRoomBelow &&
                        isCurrentlyAbove
                    ) {
                        newDirection = "below";
                    }

                    if (
                        newDirection == "above" ||
                        (isCurrentlyAbove && newDirection !== "below")
                    ) {
                        css.top =
                            container.top - parentOffset.top - dropdown.height;
                    }

                    if (newDirection != null) {
                        this.$dropdown
                            .removeClass(
                                "select2-dropdown--below select2-dropdown--above"
                            )
                            .addClass("select2-dropdown--" + newDirection);
                        this.$container
                            .removeClass(
                                "select2-container--below select2-container--above"
                            )
                            .addClass("select2-container--" + newDirection);
                    }

                    this.$dropdownContainer.css(css);
                };

                AttachBody.prototype._resizeDropdown = function() {
                    var css = {
                        width: this.$container.outerWidth(false) + "px"
                    };

                    if (this.options.get("dropdownAutoWidth")) {
                        css.minWidth = css.width;
                        css.position = "relative";
                        css.width = "auto";
                    }

                    this.$dropdown.css(css);
                };

                AttachBody.prototype._showDropdown = function(decorated) {
                    this.$dropdownContainer.appendTo(this.$dropdownParent);

                    this._positionDropdown();
                    this._resizeDropdown();
                };

                return AttachBody;
            }
        );

        S2.define("select2/dropdown/minimumResultsForSearch", [], function() {
            function countResults(data) {
                var count = 0;

                for (var d = 0; d < data.length; d++) {
                    var item = data[d];

                    if (item.children) {
                        count += countResults(item.children);
                    } else {
                        count++;
                    }
                }

                return count;
            }

            function MinimumResultsForSearch(
                decorated,
                $element,
                options,
                dataAdapter
            ) {
                this.minimumResultsForSearch = options.get(
                    "minimumResultsForSearch"
                );

                if (this.minimumResultsForSearch < 0) {
                    this.minimumResultsForSearch = Infinity;
                }

                decorated.call(this, $element, options, dataAdapter);
            }

            MinimumResultsForSearch.prototype.showSearch = function(
                decorated,
                params
            ) {
                if (
                    countResults(params.data.results) <
                    this.minimumResultsForSearch
                ) {
                    return false;
                }

                return decorated.call(this, params);
            };

            return MinimumResultsForSearch;
        });

        S2.define("select2/dropdown/selectOnClose", [], function() {
            function SelectOnClose() {}

            SelectOnClose.prototype.bind = function(
                decorated,
                container,
                $container
            ) {
                var self = this;

                decorated.call(this, container, $container);

                container.on("close", function(params) {
                    self._handleSelectOnClose(params);
                });
            };

            SelectOnClose.prototype._handleSelectOnClose = function(_, params) {
                if (params && params.originalSelect2Event != null) {
                    var event = params.originalSelect2Event;

                    // Don't select an item if the close event was triggered from a select or
                    // unselect event
                    if (
                        event._type === "select" ||
                        event._type === "unselect"
                    ) {
                        return;
                    }
                }

                var $highlightedResults = this.getHighlightedResults();

                // Only select highlighted results
                if ($highlightedResults.length < 1) {
                    return;
                }

                var data = $highlightedResults.data("data");

                // Don't re-select already selected resulte
                if (
                    (data.element != null && data.element.selected) ||
                    (data.element == null && data.selected)
                ) {
                    return;
                }

                this.trigger("select", {
                    data: data
                });
            };

            return SelectOnClose;
        });

        S2.define("select2/dropdown/closeOnSelect", [], function() {
            function CloseOnSelect() {}

            CloseOnSelect.prototype.bind = function(
                decorated,
                container,
                $container
            ) {
                var self = this;

                decorated.call(this, container, $container);

                container.on("select", function(evt) {
                    self._selectTriggered(evt);
                });

                container.on("unselect", function(evt) {
                    self._selectTriggered(evt);
                });
            };

            CloseOnSelect.prototype._selectTriggered = function(_, evt) {
                var originalEvent = evt.originalEvent;

                // Don't close if the control key is being held
                if (originalEvent && originalEvent.ctrlKey) {
                    return;
                }

                this.trigger("close", {
                    originalEvent: originalEvent,
                    originalSelect2Event: evt
                });
            };

            return CloseOnSelect;
        });

        S2.define("select2/i18n/en", [], function() {
            // English
            return {
                errorLoading: function() {
                    return "The results could not be loaded.";
                },
                inputTooLong: function(args) {
                    var overChars = args.input.length - args.maximum;

                    var message = "Please delete " + overChars + " character";

                    if (overChars != 1) {
                        message += "s";
                    }

                    return message;
                },
                inputTooShort: function(args) {
                    var remainingChars = args.minimum - args.input.length;

                    var message =
                        "Please enter " +
                        remainingChars +
                        " or more characters";

                    return message;
                },
                loadingMore: function() {
                    return "Loading more results…";
                },
                maximumSelected: function(args) {
                    var message =
                        "You can only select " + args.maximum + " item";

                    if (args.maximum != 1) {
                        message += "s";
                    }

                    return message;
                },
                noResults: function() {
                    return "No results found";
                },
                searching: function() {
                    return "Searching…";
                }
            };
        });

        S2.define(
            "select2/defaults",
            [
                "jquery",
                "require",

                "./results",

                "./selection/single",
                "./selection/multiple",
                "./selection/placeholder",
                "./selection/allowClear",
                "./selection/search",
                "./selection/eventRelay",

                "./utils",
                "./translation",
                "./diacritics",

                "./data/select",
                "./data/array",
                "./data/ajax",
                "./data/tags",
                "./data/tokenizer",
                "./data/minimumInputLength",
                "./data/maximumInputLength",
                "./data/maximumSelectionLength",

                "./dropdown",
                "./dropdown/search",
                "./dropdown/hidePlaceholder",
                "./dropdown/infiniteScroll",
                "./dropdown/attachBody",
                "./dropdown/minimumResultsForSearch",
                "./dropdown/selectOnClose",
                "./dropdown/closeOnSelect",

                "./i18n/en"
            ],
            function(
                $,
                require,

                ResultsList,

                SingleSelection,
                MultipleSelection,
                Placeholder,
                AllowClear,
                SelectionSearch,
                EventRelay,

                Utils,
                Translation,
                DIACRITICS,

                SelectData,
                ArrayData,
                AjaxData,
                Tags,
                Tokenizer,
                MinimumInputLength,
                MaximumInputLength,
                MaximumSelectionLength,

                Dropdown,
                DropdownSearch,
                HidePlaceholder,
                InfiniteScroll,
                AttachBody,
                MinimumResultsForSearch,
                SelectOnClose,
                CloseOnSelect,

                EnglishTranslation
            ) {
                function Defaults() {
                    this.reset();
                }

                Defaults.prototype.apply = function(options) {
                    options = $.extend(true, {}, this.defaults, options);

                    if (options.dataAdapter == null) {
                        if (options.ajax != null) {
                            options.dataAdapter = AjaxData;
                        } else if (options.data != null) {
                            options.dataAdapter = ArrayData;
                        } else {
                            options.dataAdapter = SelectData;
                        }

                        if (options.minimumInputLength > 0) {
                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                MinimumInputLength
                            );
                        }

                        if (options.maximumInputLength > 0) {
                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                MaximumInputLength
                            );
                        }

                        if (options.maximumSelectionLength > 0) {
                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                MaximumSelectionLength
                            );
                        }

                        if (options.tags) {
                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                Tags
                            );
                        }

                        if (
                            options.tokenSeparators != null ||
                            options.tokenizer != null
                        ) {
                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                Tokenizer
                            );
                        }

                        if (options.query != null) {
                            var Query = require(options.amdBase +
                                "compat/query");

                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                Query
                            );
                        }

                        if (options.initSelection != null) {
                            var InitSelection = require(options.amdBase +
                                "compat/initSelection");

                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                InitSelection
                            );
                        }
                    }

                    if (options.resultsAdapter == null) {
                        options.resultsAdapter = ResultsList;

                        if (options.ajax != null) {
                            options.resultsAdapter = Utils.Decorate(
                                options.resultsAdapter,
                                InfiniteScroll
                            );
                        }

                        if (options.placeholder != null) {
                            options.resultsAdapter = Utils.Decorate(
                                options.resultsAdapter,
                                HidePlaceholder
                            );
                        }

                        if (options.selectOnClose) {
                            options.resultsAdapter = Utils.Decorate(
                                options.resultsAdapter,
                                SelectOnClose
                            );
                        }
                    }

                    if (options.dropdownAdapter == null) {
                        if (options.multiple) {
                            options.dropdownAdapter = Dropdown;
                        } else {
                            var SearchableDropdown = Utils.Decorate(
                                Dropdown,
                                DropdownSearch
                            );

                            options.dropdownAdapter = SearchableDropdown;
                        }

                        if (options.minimumResultsForSearch !== 0) {
                            options.dropdownAdapter = Utils.Decorate(
                                options.dropdownAdapter,
                                MinimumResultsForSearch
                            );
                        }

                        if (options.closeOnSelect) {
                            options.dropdownAdapter = Utils.Decorate(
                                options.dropdownAdapter,
                                CloseOnSelect
                            );
                        }

                        if (
                            options.dropdownCssClass != null ||
                            options.dropdownCss != null ||
                            options.adaptDropdownCssClass != null
                        ) {
                            var DropdownCSS = require(options.amdBase +
                                "compat/dropdownCss");

                            options.dropdownAdapter = Utils.Decorate(
                                options.dropdownAdapter,
                                DropdownCSS
                            );
                        }

                        options.dropdownAdapter = Utils.Decorate(
                            options.dropdownAdapter,
                            AttachBody
                        );
                    }

                    if (options.selectionAdapter == null) {
                        if (options.multiple) {
                            options.selectionAdapter = MultipleSelection;
                        } else {
                            options.selectionAdapter = SingleSelection;
                        }

                        // Add the placeholder mixin if a placeholder was specified
                        if (options.placeholder != null) {
                            options.selectionAdapter = Utils.Decorate(
                                options.selectionAdapter,
                                Placeholder
                            );
                        }

                        if (options.allowClear) {
                            options.selectionAdapter = Utils.Decorate(
                                options.selectionAdapter,
                                AllowClear
                            );
                        }

                        if (options.multiple) {
                            options.selectionAdapter = Utils.Decorate(
                                options.selectionAdapter,
                                SelectionSearch
                            );
                        }

                        if (
                            options.containerCssClass != null ||
                            options.containerCss != null ||
                            options.adaptContainerCssClass != null
                        ) {
                            var ContainerCSS = require(options.amdBase +
                                "compat/containerCss");

                            options.selectionAdapter = Utils.Decorate(
                                options.selectionAdapter,
                                ContainerCSS
                            );
                        }

                        options.selectionAdapter = Utils.Decorate(
                            options.selectionAdapter,
                            EventRelay
                        );
                    }

                    if (typeof options.language === "string") {
                        // Check if the language is specified with a region
                        if (options.language.indexOf("-") > 0) {
                            // Extract the region information if it is included
                            var languageParts = options.language.split("-");
                            var baseLanguage = languageParts[0];

                            options.language = [options.language, baseLanguage];
                        } else {
                            options.language = [options.language];
                        }
                    }

                    if ($.isArray(options.language)) {
                        var languages = new Translation();
                        options.language.push("en");

                        var languageNames = options.language;

                        for (var l = 0; l < languageNames.length; l++) {
                            var name = languageNames[l];
                            var language = {};

                            try {
                                // Try to load it with the original name
                                language = Translation.loadPath(name);
                            } catch (e) {
                                try {
                                    // If we couldn't load it, check if it wasn't the full path
                                    name = this.defaults.amdLanguageBase + name;
                                    language = Translation.loadPath(name);
                                } catch (ex) {
                                    // The translation could not be loaded at all. Sometimes this is
                                    // because of a configuration problem, other times this can be
                                    // because of how Select2 helps load all possible translation files.
                                    if (
                                        options.debug &&
                                        window.console &&
                                        console.warn
                                    ) {
                                        console.warn(
                                            'Select2: The language file for "' +
                                                name +
                                                '" could not be ' +
                                                "automatically loaded. A fallback will be used instead."
                                        );
                                    }

                                    continue;
                                }
                            }

                            languages.extend(language);
                        }

                        options.translations = languages;
                    } else {
                        var baseTranslation = Translation.loadPath(
                            this.defaults.amdLanguageBase + "en"
                        );
                        var customTranslation = new Translation(
                            options.language
                        );

                        customTranslation.extend(baseTranslation);

                        options.translations = customTranslation;
                    }

                    return options;
                };

                Defaults.prototype.reset = function() {
                    function stripDiacritics(text) {
                        // Used 'uni range + named function' from http://jsperf.com/diacritics/18
                        function match(a) {
                            return DIACRITICS[a] || a;
                        }

                        return text.replace(/[^\u0000-\u007E]/g, match);
                    }

                    function matcher(params, data) {
                        // Always return the object if there is nothing to compare
                        if ($.trim(params.term) === "") {
                            return data;
                        }

                        // Do a recursive check for options with children
                        if (data.children && data.children.length > 0) {
                            // Clone the data object if there are children
                            // This is required as we modify the object to remove any non-matches
                            var match = $.extend(true, {}, data);

                            // Check each child of the option
                            for (
                                var c = data.children.length - 1;
                                c >= 0;
                                c--
                            ) {
                                var child = data.children[c];

                                var matches = matcher(params, child);

                                // If there wasn't a match, remove the object in the array
                                if (matches == null) {
                                    match.children.splice(c, 1);
                                }
                            }

                            // If any children matched, return the new object
                            if (match.children.length > 0) {
                                return match;
                            }

                            // If there were no matching children, check just the plain object
                            return matcher(params, match);
                        }

                        var original = stripDiacritics(data.text).toUpperCase();
                        var term = stripDiacritics(params.term).toUpperCase();

                        // Check if the text contains the term
                        if (original.indexOf(term) > -1) {
                            return data;
                        }

                        // If it doesn't contain the term, don't return anything
                        return null;
                    }

                    this.defaults = {
                        amdBase: "./",
                        amdLanguageBase: "./i18n/",
                        closeOnSelect: true,
                        debug: false,
                        dropdownAutoWidth: false,
                        escapeMarkup: Utils.escapeMarkup,
                        language: EnglishTranslation,
                        matcher: matcher,
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: false,
                        sorter: function(data) {
                            return data;
                        },
                        templateResult: function(result) {
                            return result.text;
                        },
                        templateSelection: function(selection) {
                            return selection.text;
                        },
                        theme: "default",
                        width: "resolve"
                    };
                };

                Defaults.prototype.set = function(key, value) {
                    var camelKey = $.camelCase(key);

                    var data = {};
                    data[camelKey] = value;

                    var convertedData = Utils._convertData(data);

                    $.extend(this.defaults, convertedData);
                };

                var defaults = new Defaults();

                return defaults;
            }
        );

        S2.define(
            "select2/options",
            ["require", "jquery", "./defaults", "./utils"],
            function(require, $, Defaults, Utils) {
                function Options(options, $element) {
                    this.options = options;

                    if ($element != null) {
                        this.fromElement($element);
                    }

                    this.options = Defaults.apply(this.options);

                    if ($element && $element.is("input")) {
                        var InputCompat = require(this.get("amdBase") +
                            "compat/inputData");

                        this.options.dataAdapter = Utils.Decorate(
                            this.options.dataAdapter,
                            InputCompat
                        );
                    }
                }

                Options.prototype.fromElement = function($e) {
                    var excludedData = ["select2"];

                    if (this.options.multiple == null) {
                        this.options.multiple = $e.prop("multiple");
                    }

                    if (this.options.disabled == null) {
                        this.options.disabled = $e.prop("disabled");
                    }

                    if (this.options.language == null) {
                        if ($e.prop("lang")) {
                            this.options.language = $e
                                .prop("lang")
                                .toLowerCase();
                        } else if ($e.closest("[lang]").prop("lang")) {
                            this.options.language = $e
                                .closest("[lang]")
                                .prop("lang");
                        }
                    }

                    if (this.options.dir == null) {
                        if ($e.prop("dir")) {
                            this.options.dir = $e.prop("dir");
                        } else if ($e.closest("[dir]").prop("dir")) {
                            this.options.dir = $e.closest("[dir]").prop("dir");
                        } else {
                            this.options.dir = "ltr";
                        }
                    }

                    $e.prop("disabled", this.options.disabled);
                    $e.prop("multiple", this.options.multiple);

                    if ($e.data("select2Tags")) {
                        if (
                            this.options.debug &&
                            window.console &&
                            console.warn
                        ) {
                            console.warn(
                                "Select2: The `data-select2-tags` attribute has been changed to " +
                                    'use the `data-data` and `data-tags="true"` attributes and will be ' +
                                    "removed in future versions of Select2."
                            );
                        }

                        $e.data("data", $e.data("select2Tags"));
                        $e.data("tags", true);
                    }

                    if ($e.data("ajaxUrl")) {
                        if (
                            this.options.debug &&
                            window.console &&
                            console.warn
                        ) {
                            console.warn(
                                "Select2: The `data-ajax-url` attribute has been changed to " +
                                    "`data-ajax--url` and support for the old attribute will be removed" +
                                    " in future versions of Select2."
                            );
                        }

                        $e.attr("ajax--url", $e.data("ajaxUrl"));
                        $e.data("ajax--url", $e.data("ajaxUrl"));
                    }

                    var dataset = {};

                    // Prefer the element's `dataset` attribute if it exists
                    // jQuery 1.x does not correctly handle data attributes with multiple dashes
                    if (
                        $.fn.jquery &&
                        $.fn.jquery.substr(0, 2) == "1." &&
                        $e[0].dataset
                    ) {
                        dataset = $.extend(true, {}, $e[0].dataset, $e.data());
                    } else {
                        dataset = $e.data();
                    }

                    var data = $.extend(true, {}, dataset);

                    data = Utils._convertData(data);

                    for (var key in data) {
                        if ($.inArray(key, excludedData) > -1) {
                            continue;
                        }

                        if ($.isPlainObject(this.options[key])) {
                            $.extend(this.options[key], data[key]);
                        } else {
                            this.options[key] = data[key];
                        }
                    }

                    return this;
                };

                Options.prototype.get = function(key) {
                    return this.options[key];
                };

                Options.prototype.set = function(key, val) {
                    this.options[key] = val;
                };

                return Options;
            }
        );

        S2.define(
            "select2/core",
            ["jquery", "./options", "./utils", "./keys"],
            function($, Options, Utils, KEYS) {
                var Select2 = function($element, options) {
                    if ($element.data("select2") != null) {
                        $element.data("select2").destroy();
                    }

                    this.$element = $element;

                    this.id = this._generateId($element);

                    options = options || {};

                    this.options = new Options(options, $element);

                    Select2.__super__.constructor.call(this);

                    // Set up the tabindex

                    var tabindex = $element.attr("tabindex") || 0;
                    $element.data("old-tabindex", tabindex);
                    $element.attr("tabindex", "-1");

                    // Set up containers and adapters

                    var DataAdapter = this.options.get("dataAdapter");
                    this.dataAdapter = new DataAdapter($element, this.options);

                    var $container = this.render();

                    this._placeContainer($container);

                    var SelectionAdapter = this.options.get("selectionAdapter");
                    this.selection = new SelectionAdapter(
                        $element,
                        this.options
                    );
                    this.$selection = this.selection.render();

                    this.selection.position(this.$selection, $container);

                    var DropdownAdapter = this.options.get("dropdownAdapter");
                    this.dropdown = new DropdownAdapter($element, this.options);
                    this.$dropdown = this.dropdown.render();

                    this.dropdown.position(this.$dropdown, $container);

                    var ResultsAdapter = this.options.get("resultsAdapter");
                    this.results = new ResultsAdapter(
                        $element,
                        this.options,
                        this.dataAdapter
                    );
                    this.$results = this.results.render();

                    this.results.position(this.$results, this.$dropdown);

                    // Bind events

                    var self = this;

                    // Bind the container to all of the adapters
                    this._bindAdapters();

                    // Register any DOM event handlers
                    this._registerDomEvents();

                    // Register any internal event handlers
                    this._registerDataEvents();
                    this._registerSelectionEvents();
                    this._registerDropdownEvents();
                    this._registerResultsEvents();
                    this._registerEvents();

                    // Set the initial state
                    this.dataAdapter.current(function(initialData) {
                        self.trigger("selection:update", {
                            data: initialData
                        });
                    });

                    // Hide the original select
                    $element.addClass("select2-hidden-accessible");
                    $element.attr("aria-hidden", "true");

                    // Synchronize any monitored attributes
                    this._syncAttributes();

                    $element.data("select2", this);
                };

                Utils.Extend(Select2, Utils.Observable);

                Select2.prototype._generateId = function($element) {
                    var id = "";

                    if ($element.attr("id") != null) {
                        id = $element.attr("id");
                    } else if ($element.attr("name") != null) {
                        id =
                            $element.attr("name") +
                            "-" +
                            Utils.generateChars(2);
                    } else {
                        id = Utils.generateChars(4);
                    }

                    id = id.replace(/(:|\.|\[|\]|,)/g, "");
                    id = "select2-" + id;

                    return id;
                };

                Select2.prototype._placeContainer = function($container) {
                    $container.insertAfter(this.$element);

                    var width = this._resolveWidth(
                        this.$element,
                        this.options.get("width")
                    );

                    if (width != null) {
                        $container.css("width", width);
                    }
                };

                Select2.prototype._resolveWidth = function($element, method) {
                    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

                    if (method == "resolve") {
                        var styleWidth = this._resolveWidth($element, "style");

                        if (styleWidth != null) {
                            return styleWidth;
                        }

                        return this._resolveWidth($element, "element");
                    }

                    if (method == "element") {
                        var elementWidth = $element.outerWidth(false);

                        if (elementWidth <= 0) {
                            return "auto";
                        }

                        return elementWidth + "px";
                    }

                    if (method == "style") {
                        var style = $element.attr("style");

                        if (typeof style !== "string") {
                            return null;
                        }

                        var attrs = style.split(";");

                        for (var i = 0, l = attrs.length; i < l; i = i + 1) {
                            var attr = attrs[i].replace(/\s/g, "");
                            var matches = attr.match(WIDTH);

                            if (matches !== null && matches.length >= 1) {
                                return matches[1];
                            }
                        }

                        return null;
                    }

                    return method;
                };

                Select2.prototype._bindAdapters = function() {
                    this.dataAdapter.bind(this, this.$container);
                    this.selection.bind(this, this.$container);

                    this.dropdown.bind(this, this.$container);
                    this.results.bind(this, this.$container);
                };

                Select2.prototype._registerDomEvents = function() {
                    var self = this;

                    this.$element.on("change.select2", function() {
                        self.dataAdapter.current(function(data) {
                            self.trigger("selection:update", {
                                data: data
                            });
                        });
                    });

                    this.$element.on("focus.select2", function(evt) {
                        self.trigger("focus", evt);
                    });

                    this._syncA = Utils.bind(this._syncAttributes, this);
                    this._syncS = Utils.bind(this._syncSubtree, this);

                    if (this.$element[0].attachEvent) {
                        this.$element[0].attachEvent(
                            "onpropertychange",
                            this._syncA
                        );
                    }

                    var observer =
                        window.MutationObserver ||
                        window.WebKitMutationObserver ||
                        window.MozMutationObserver;
                    if (observer != null) {
                        this._observer = new observer(function(mutations) {
                            $.each(mutations, self._syncA);
                            $.each(mutations, self._syncS);
                        });
                        this._observer.observe(this.$element[0], {
                            attributes: true,
                            childList: true,
                            subtree: false
                        });
                    } else if (this.$element[0].addEventListener) {
                        this.$element[0].addEventListener(
                            "DOMAttrModified",
                            self._syncA,
                            false
                        );
                        this.$element[0].addEventListener(
                            "DOMNodeInserted",
                            self._syncS,
                            false
                        );
                        this.$element[0].addEventListener(
                            "DOMNodeRemoved",
                            self._syncS,
                            false
                        );
                    }
                };

                Select2.prototype._registerDataEvents = function() {
                    var self = this;

                    this.dataAdapter.on("*", function(name, params) {
                        self.trigger(name, params);
                    });
                };

                Select2.prototype._registerSelectionEvents = function() {
                    var self = this;
                    var nonRelayEvents = ["toggle", "focus"];

                    this.selection.on("toggle", function() {
                        self.toggleDropdown();
                    });

                    this.selection.on("focus", function(params) {
                        self.focus(params);
                    });

                    this.selection.on("*", function(name, params) {
                        if ($.inArray(name, nonRelayEvents) !== -1) {
                            return;
                        }

                        self.trigger(name, params);
                    });
                };

                Select2.prototype._registerDropdownEvents = function() {
                    var self = this;

                    this.dropdown.on("*", function(name, params) {
                        self.trigger(name, params);
                    });
                };

                Select2.prototype._registerResultsEvents = function() {
                    var self = this;

                    this.results.on("*", function(name, params) {
                        self.trigger(name, params);
                    });
                };

                Select2.prototype._registerEvents = function() {
                    var self = this;

                    this.on("open", function() {
                        self.$container.addClass("select2-container--open");
                    });

                    this.on("close", function() {
                        self.$container.removeClass("select2-container--open");
                    });

                    this.on("enable", function() {
                        self.$container.removeClass(
                            "select2-container--disabled"
                        );
                    });

                    this.on("disable", function() {
                        self.$container.addClass("select2-container--disabled");
                    });

                    this.on("blur", function() {
                        self.$container.removeClass("select2-container--focus");
                    });

                    this.on("query", function(params) {
                        if (!self.isOpen()) {
                            self.trigger("open", {});
                        }

                        this.dataAdapter.query(params, function(data) {
                            self.trigger("results:all", {
                                data: data,
                                query: params
                            });
                        });
                    });

                    this.on("query:append", function(params) {
                        this.dataAdapter.query(params, function(data) {
                            self.trigger("results:append", {
                                data: data,
                                query: params
                            });
                        });
                    });

                    this.on("keypress", function(evt) {
                        var key = evt.which;

                        if (self.isOpen()) {
                            if (
                                key === KEYS.ESC ||
                                key === KEYS.TAB ||
                                (key === KEYS.UP && evt.altKey)
                            ) {
                                self.close();

                                evt.preventDefault();
                            } else if (key === KEYS.ENTER) {
                                self.trigger("results:select", {});

                                evt.preventDefault();
                            } else if (key === KEYS.SPACE && evt.ctrlKey) {
                                self.trigger("results:toggle", {});

                                evt.preventDefault();
                            } else if (key === KEYS.UP) {
                                self.trigger("results:previous", {});

                                evt.preventDefault();
                            } else if (key === KEYS.DOWN) {
                                self.trigger("results:next", {});

                                evt.preventDefault();
                            }
                        } else {
                            if (
                                key === KEYS.ENTER ||
                                key === KEYS.SPACE ||
                                (key === KEYS.DOWN && evt.altKey)
                            ) {
                                self.open();

                                evt.preventDefault();
                            }
                        }
                    });
                };

                Select2.prototype._syncAttributes = function() {
                    this.options.set(
                        "disabled",
                        this.$element.prop("disabled")
                    );

                    if (this.options.get("disabled")) {
                        if (this.isOpen()) {
                            this.close();
                        }

                        this.trigger("disable", {});
                    } else {
                        this.trigger("enable", {});
                    }
                };

                Select2.prototype._syncSubtree = function(evt, mutations) {
                    var changed = false;
                    var self = this;

                    // Ignore any mutation events raised for elements that aren't options or
                    // optgroups. This handles the case when the select element is destroyed
                    if (
                        evt &&
                        evt.target &&
                        evt.target.nodeName !== "OPTION" &&
                            evt.target.nodeName !== "OPTGROUP"
                    ) {
                        return;
                    }

                    if (!mutations) {
                        // If mutation events aren't supported, then we can only assume that the
                        // change affected the selections
                        changed = true;
                    } else if (
                        mutations.addedNodes &&
                        mutations.addedNodes.length > 0
                    ) {
                        for (var n = 0; n < mutations.addedNodes.length; n++) {
                            var node = mutations.addedNodes[n];

                            if (node.selected) {
                                changed = true;
                            }
                        }
                    } else if (
                        mutations.removedNodes &&
                        mutations.removedNodes.length > 0
                    ) {
                        changed = true;
                    }

                    // Only re-pull the data if we think there is a change
                    if (changed) {
                        this.dataAdapter.current(function(currentData) {
                            self.trigger("selection:update", {
                                data: currentData
                            });
                        });
                    }
                };

                /**
                 * Override the trigger method to automatically trigger pre-events when
                 * there are events that can be prevented.
                 */
                Select2.prototype.trigger = function(name, args) {
                    var actualTrigger = Select2.__super__.trigger;
                    var preTriggerMap = {
                        open: "opening",
                        close: "closing",
                        select: "selecting",
                        unselect: "unselecting"
                    };

                    if (args === undefined) {
                        args = {};
                    }

                    if (name in preTriggerMap) {
                        var preTriggerName = preTriggerMap[name];
                        var preTriggerArgs = {
                            prevented: false,
                            name: name,
                            args: args
                        };

                        actualTrigger.call(
                            this,
                            preTriggerName,
                            preTriggerArgs
                        );

                        if (preTriggerArgs.prevented) {
                            args.prevented = true;

                            return;
                        }
                    }

                    actualTrigger.call(this, name, args);
                };

                Select2.prototype.toggleDropdown = function() {
                    if (this.options.get("disabled")) {
                        return;
                    }

                    if (this.isOpen()) {
                        this.close();
                    } else {
                        this.open();
                    }
                };

                Select2.prototype.open = function() {
                    if (this.isOpen()) {
                        return;
                    }

                    this.trigger("query", {});
                };

                Select2.prototype.close = function() {
                    if (!this.isOpen()) {
                        return;
                    }

                    this.trigger("close", {});
                };

                Select2.prototype.isOpen = function() {
                    return this.$container.hasClass("select2-container--open");
                };

                Select2.prototype.hasFocus = function() {
                    return this.$container.hasClass("select2-container--focus");
                };

                Select2.prototype.focus = function(data) {
                    // No need to re-trigger focus events if we are already focused
                    if (this.hasFocus()) {
                        return;
                    }

                    this.$container.addClass("select2-container--focus");
                    this.trigger("focus", {});
                };

                Select2.prototype.enable = function(args) {
                    if (
                        this.options.get("debug") &&
                        window.console &&
                        console.warn
                    ) {
                        console.warn(
                            'Select2: The `select2("enable")` method has been deprecated and will' +
                                ' be removed in later Select2 versions. Use $element.prop("disabled")' +
                                " instead."
                        );
                    }

                    if (args == null || args.length === 0) {
                        args = [true];
                    }

                    var disabled = !args[0];

                    this.$element.prop("disabled", disabled);
                };

                Select2.prototype.data = function() {
                    if (
                        this.options.get("debug") &&
                        arguments.length > 0 &&
                        window.console &&
                        console.warn
                    ) {
                        console.warn(
                            'Select2: Data can no longer be set using `select2("data")`. You ' +
                                "should consider setting the value instead using `$element.val()`."
                        );
                    }

                    var data = [];

                    this.dataAdapter.current(function(currentData) {
                        data = currentData;
                    });

                    return data;
                };

                Select2.prototype.val = function(args) {
                    if (
                        this.options.get("debug") &&
                        window.console &&
                        console.warn
                    ) {
                        console.warn(
                            'Select2: The `select2("val")` method has been deprecated and will be' +
                                " removed in later Select2 versions. Use $element.val() instead."
                        );
                    }

                    if (args == null || args.length === 0) {
                        return this.$element.val();
                    }

                    var newVal = args[0];

                    if ($.isArray(newVal)) {
                        newVal = $.map(newVal, function(obj) {
                            return obj.toString();
                        });
                    }

                    this.$element.val(newVal).trigger("change");
                };

                Select2.prototype.destroy = function() {
                    this.$container.remove();

                    if (this.$element[0].detachEvent) {
                        this.$element[0].detachEvent(
                            "onpropertychange",
                            this._syncA
                        );
                    }

                    if (this._observer != null) {
                        this._observer.disconnect();
                        this._observer = null;
                    } else if (this.$element[0].removeEventListener) {
                        this.$element[0].removeEventListener(
                            "DOMAttrModified",
                            this._syncA,
                            false
                        );
                        this.$element[0].removeEventListener(
                            "DOMNodeInserted",
                            this._syncS,
                            false
                        );
                        this.$element[0].removeEventListener(
                            "DOMNodeRemoved",
                            this._syncS,
                            false
                        );
                    }

                    this._syncA = null;
                    this._syncS = null;

                    this.$element.off(".select2");
                    this.$element.attr(
                        "tabindex",
                        this.$element.data("old-tabindex")
                    );

                    this.$element.removeClass("select2-hidden-accessible");
                    this.$element.attr("aria-hidden", "false");
                    this.$element.removeData("select2");

                    this.dataAdapter.destroy();
                    this.selection.destroy();
                    this.dropdown.destroy();
                    this.results.destroy();

                    this.dataAdapter = null;
                    this.selection = null;
                    this.dropdown = null;
                    this.results = null;
                };

                Select2.prototype.render = function() {
                    var $container = $(
                        '<span class="select2 select2-container">' +
                            '<span class="selection"></span>' +
                            '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
                            "</span>"
                    );

                    $container.attr("dir", this.options.get("dir"));

                    this.$container = $container;

                    this.$container.addClass(
                        "select2-container--" + this.options.get("theme")
                    );

                    $container.data("element", this.$element);

                    return $container;
                };

                return Select2;
            }
        );

        S2.define("jquery-mousewheel", ["jquery"], function($) {
            // Used to shim jQuery.mousewheel for non-full builds.
            return $;
        });

        S2.define(
            "jquery.select2",
            [
                "jquery",
                "jquery-mousewheel",

                "./select2/core",
                "./select2/defaults"
            ],
            function($, _, Select2, Defaults) {
                if ($.fn.select2 == null) {
                    // All methods that should return the element
                    var thisMethods = ["open", "close", "destroy"];

                    $.fn.select2 = function(options) {
                        options = options || {};

                        if (typeof options === "object") {
                            this.each(function() {
                                var instanceOptions = $.extend(
                                    true,
                                    {},
                                    options
                                );

                                var instance = new Select2(
                                    $(this),
                                    instanceOptions
                                );
                            });

                            return this;
                        } else if (typeof options === "string") {
                            var ret;
                            var args = Array.prototype.slice.call(arguments, 1);

                            this.each(function() {
                                var instance = $(this).data("select2");

                                if (
                                    instance == null &&
                                    window.console &&
                                    console.error
                                ) {
                                    console.error(
                                        "The select2('" +
                                            options +
                                            "') method was called on an " +
                                            "element that is not using Select2."
                                    );
                                }

                                ret = instance[options].apply(instance, args);
                            });

                            // Check if we should be returning `this`
                            if ($.inArray(options, thisMethods) > -1) {
                                return this;
                            }

                            return ret;
                        } else {
                            throw new Error(
                                "Invalid arguments for Select2: " + options
                            );
                        }
                    };
                }

                if ($.fn.select2.defaults == null) {
                    $.fn.select2.defaults = Defaults;
                }

                return Select2;
            }
        );

        // Return the AMD loader configuration so it can be used outside of this file
        return {
            define: S2.define,
            require: S2.require
        };
    })();

    // Autoload the jQuery bindings
    // We know that all of the modules exist above this, so we're safe
    var select2 = S2.require("jquery.select2");

    // Hold the AMD module references on the jQuery function that was just loaded
    // This allows Select2 to use the internal loader outside of this file, such
    // as in the language files.
    jQuery.fn.select2.amd = S2;

    // Return the Select2 instance for anyone who is importing it.
    return select2;
});

(function($) {
    var Defaults = $.fn.select2.amd.require("select2/defaults");

    $.extend(Defaults.defaults, {
        searchInputPlaceholder: ""
    });

    var SearchDropdown = $.fn.select2.amd.require("select2/dropdown/search");

    var _renderSearchDropdown = SearchDropdown.prototype.render;

    SearchDropdown.prototype.render = function(decorated) {
        // invoke parent method
        var $rendered = _renderSearchDropdown.apply(
            this,
            Array.prototype.slice.apply(arguments)
        );

        this.$search.attr(
            "placeholder",
            this.options.get("searchInputPlaceholder")
        );

        return $rendered;
    };
})(window.jQuery);
(function($) {
    "use strict";
    // Show More
    var showMore = function($btn) {
        var self = this;
        this.$btn = $btn;
        this.$target = $($btn.data("target"));
        this.type = $btn.data("type");
        this.colseBtn = $btn.data("close");
        this.text = $btn.data("text");
        $btn.on("click", function(e) {
            e.preventDefault();
            if (self.$btn.hasClass("opened") && self.colseBtn) return;
            self.$target.slideDown();
            self.$btn.addClass("opened");
            self.changeText();
        });
        if (this.colseBtn) {
            $(document).on("click", this.colseBtn, function(e) {
                e.preventDefault();
                self.closeUp();
            });
        }
    };
    showMore.prototype.closeUp = function() {
        this.$btn.removeAttr("disabled");
        this.$target.slideUp();
        this.$btn.removeClass("opened");
        this.changeText();
    };
    showMore.prototype.changeText = function() {
        if (this.text) {
            var changeText = this.text;
            this.text = this.$btn.html();
            this.$btn.html(changeText);
        }
    };
    $(document).ready(function($) {
        $('[data-toggle="show-more"]').each(function(index, el) {
            $(this).data("showmore", new showMore($(this)));
        });
    });
})(jQuery);
!(function(e) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var f;
        "undefined" != typeof window
            ? (f = window)
            : "undefined" != typeof global
            ? (f = global)
            : "undefined" != typeof self && (f = self),
            (f.Slideout = e());
    }
})(function() {
    var define, module, exports;
    return (function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw ((f.code = "MODULE_NOT_FOUND"), f);
                }
                var l = (n[o] = { exports: {} });
                t[o][0].call(
                    l.exports,
                    function(e) {
                        var n = t[o][1][e];
                        return s(n ? n : e);
                    },
                    l,
                    l.exports,
                    e,
                    t,
                    n,
                    r
                );
            }
            return n[o].exports;
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s;
    })(
        {
            1: [
                function(require, module, exports) {
                    "use strict";

                    /**
                     * Module dependencies
                     */
                    var decouple = require("decouple");
                    var Emitter = require("emitter");

                    /**
                     * Privates
                     */
                    var scrollTimeout;
                    var scrolling = false;
                    var doc = window.document;
                    var html = doc.documentElement;
                    var msPointerSupported = window.navigator.msPointerEnabled;
                    var touch = {
                        start: msPointerSupported
                            ? "MSPointerDown"
                            : "touchstart",
                        move: msPointerSupported
                            ? "MSPointerMove"
                            : "touchmove",
                        end: msPointerSupported ? "MSPointerUp" : "touchend"
                    };
                    var prefix = (function prefix() {
                        var regex = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/;
                        var styleDeclaration = doc.getElementsByTagName(
                            "script"
                        )[0].style;
                        for (var prop in styleDeclaration) {
                            if (regex.test(prop)) {
                                return (
                                    "-" +
                                    prop.match(regex)[0].toLowerCase() +
                                    "-"
                                );
                            }
                        }
                        // Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
                        // However (prop in style) returns the correct value, so we'll have to test for
                        // the precence of a specific property
                        if ("WebkitOpacity" in styleDeclaration) {
                            return "-webkit-";
                        }
                        if ("KhtmlOpacity" in styleDeclaration) {
                            return "-khtml-";
                        }
                        return "";
                    })();
                    function extend(destination, from) {
                        for (var prop in from) {
                            if (from[prop]) {
                                destination[prop] = from[prop];
                            }
                        }
                        return destination;
                    }
                    function inherits(child, uber) {
                        child.prototype = extend(
                            child.prototype || {},
                            uber.prototype
                        );
                    }
                    function hasIgnoredElements(el) {
                        while (el.parentNode) {
                            if (
                                el.getAttribute("data-slideout-ignore") !== null
                            ) {
                                return el;
                            }
                            el = el.parentNode;
                        }
                        return null;
                    }

                    /**
                     * Slideout constructor
                     */
                    function Slideout(options) {
                        options = options || {};

                        // Sets default values
                        this._startOffsetX = 0;
                        this._currentOffsetX = 0;
                        this._opening = false;
                        this._moved = false;
                        this._opened = false;
                        this._preventOpen = false;
                        this._touch =
                            options.touch === undefined
                                ? true
                                : options.touch && true;
                        this._side = options.side || "left";

                        // Sets panel
                        this.panel = options.panel;
                        this.menu = options.menu;

                        // Sets  classnames
                        if (!this.panel.classList.contains("slideout-panel")) {
                            this.panel.classList.add("slideout-panel");
                        }
                        if (
                            !this.panel.classList.contains(
                                "slideout-panel-" + this._side
                            )
                        ) {
                            this.panel.classList.add(
                                "slideout-panel-" + this._side
                            );
                        }
                        if (!this.menu.classList.contains("slideout-menu")) {
                            this.menu.classList.add("slideout-menu");
                        }
                        if (
                            !this.menu.classList.contains(
                                "slideout-menu-" + this._side
                            )
                        ) {
                            this.menu.classList.add(
                                "slideout-menu-" + this._side
                            );
                        }

                        // Sets options
                        this._fx = options.fx || "ease";
                        this._duration = parseInt(options.duration, 10) || 300;
                        this._tolerance = parseInt(options.tolerance, 10) || 70;
                        this._padding = this._translateTo =
                            parseInt(options.padding, 10) || 256;
                        this._orientation = this._side === "right" ? -1 : 1;
                        this._translateTo *= this._orientation;

                        // Init touch events
                        if (this._touch) {
                            this._initTouchEvents();
                        }
                    }

                    /**
                     * Inherits from Emitter
                     */
                    inherits(Slideout, Emitter);

                    /**
                     * Opens the slideout menu.
                     */
                    Slideout.prototype.open = function() {
                        var self = this;
                        this.emit("beforeopen");
                        if (!html.classList.contains("slideout-open")) {
                            html.classList.add("slideout-open");
                        }
                        this._setTransition();
                        this._translateXTo(this._translateTo);
                        this._opened = true;
                        setTimeout(function() {
                            self.panel.style.transition = self.panel.style[
                                "-webkit-transition"
                            ] = "";
                            self.emit("open");
                        }, this._duration + 50);
                        return this;
                    };

                    /**
                     * Closes slideout menu.
                     */
                    Slideout.prototype.close = function() {
                        var self = this;
                        if (!this.isOpen() && !this._opening) {
                            return this;
                        }
                        this.emit("beforeclose");
                        this._setTransition();
                        this._translateXTo(0);
                        this._opened = false;
                        setTimeout(function() {
                            html.classList.remove("slideout-open");
                            self.panel.style.transition = self.panel.style[
                                "-webkit-transition"
                            ] = self.panel.style[
                                prefix + "transform"
                            ] = self.panel.style.transform = "";
                            self.emit("close");
                        }, this._duration + 50);
                        return this;
                    };

                    /**
                     * Toggles (open/close) slideout menu.
                     */
                    Slideout.prototype.toggle = function() {
                        return this.isOpen() ? this.close() : this.open();
                    };

                    /**
                     * Returns true if the slideout is currently open, and false if it is closed.
                     */
                    Slideout.prototype.isOpen = function() {
                        return this._opened;
                    };

                    /**
                     * Translates panel and updates currentOffset with a given X point
                     */
                    Slideout.prototype._translateXTo = function(translateX) {
                        this._currentOffsetX = translateX;
                        this.panel.style[
                            prefix + "transform"
                        ] = this.panel.style.transform =
                            "translateX(" + translateX + "px)";
                        return this;
                    };

                    /**
                     * Set transition properties
                     */
                    Slideout.prototype._setTransition = function() {
                        this.panel.style[
                            prefix + "transition"
                        ] = this.panel.style.transition =
                            prefix +
                            "transform " +
                            this._duration +
                            "ms " +
                            this._fx;
                        return this;
                    };

                    /**
                     * Initializes touch event
                     */
                    Slideout.prototype._initTouchEvents = function() {
                        var self = this;

                        /**
                         * Decouple scroll event
                         */
                        this._onScrollFn = decouple(doc, "scroll", function() {
                            if (!self._moved) {
                                clearTimeout(scrollTimeout);
                                scrolling = true;
                                scrollTimeout = setTimeout(function() {
                                    scrolling = false;
                                }, 250);
                            }
                        });

                        /**
                         * Prevents touchmove event if slideout is moving
                         */
                        this._preventMove = function(eve) {
                            if (self._moved) {
                                // eve.preventDefault();
                            }
                        };

                        doc.addEventListener(touch.move, this._preventMove);

                        /**
                         * Resets values on touchstart
                         */
                        this._resetTouchFn = function(eve) {
                            if (typeof eve.touches === "undefined") {
                                return;
                            }

                            self._moved = false;
                            self._opening = false;
                            self._startOffsetX = eve.touches[0].pageX;
                            self._preventOpen =
                                !self._touch ||
                                (!self.isOpen() && self.menu.clientWidth !== 0);
                        };

                        this.panel.addEventListener(
                            touch.start,
                            this._resetTouchFn
                        );

                        /**
                         * Resets values on touchcancel
                         */
                        this._onTouchCancelFn = function() {
                            self._moved = false;
                            self._opening = false;
                        };

                        this.panel.addEventListener(
                            "touchcancel",
                            this._onTouchCancelFn
                        );

                        /**
                         * Toggles slideout on touchend
                         */
                        this._onTouchEndFn = function() {
                            if (self._moved) {
                                self.emit("translateend");
                                self._opening &&
                                Math.abs(self._currentOffsetX) > self._tolerance
                                    ? self.open()
                                    : self.close();
                            }
                            self._moved = false;
                        };

                        this.panel.addEventListener(
                            touch.end,
                            this._onTouchEndFn
                        );

                        /**
                         * Translates panel on touchmove
                         */
                        this._onTouchMoveFn = function(eve) {
                            if (
                                scrolling ||
                                self._preventOpen ||
                                typeof eve.touches === "undefined" ||
                                hasIgnoredElements(eve.target)
                            ) {
                                return;
                            }

                            var dif_x =
                                eve.touches[0].clientX - self._startOffsetX;
                            var translateX = (self._currentOffsetX = dif_x);

                            if (Math.abs(translateX) > self._padding) {
                                return;
                            }

                            if (Math.abs(dif_x) > 20) {
                                self._opening = true;

                                var oriented_dif_x = dif_x * self._orientation;

                                if (
                                    (self._opened && oriented_dif_x > 0) ||
                                    (!self._opened && oriented_dif_x < 0)
                                ) {
                                    return;
                                }

                                if (!self._moved) {
                                    self.emit("translatestart");
                                }

                                if (oriented_dif_x <= 0) {
                                    translateX =
                                        dif_x +
                                        self._padding * self._orientation;
                                    self._opening = false;
                                }

                                if (
                                    !(
                                        self._moved &&
                                        html.classList.contains("slideout-open")
                                    )
                                ) {
                                    html.classList.add("slideout-open");
                                }

                                self.panel.style[
                                    prefix + "transform"
                                ] = self.panel.style.transform =
                                    "translateX(" + translateX + "px)";
                                self.emit("translate", translateX);
                                self._moved = true;
                            }
                        };

                        this.panel.addEventListener(
                            touch.move,
                            this._onTouchMoveFn
                        );

                        return this;
                    };

                    /**
                     * Enable opening the slideout via touch events.
                     */
                    Slideout.prototype.enableTouch = function() {
                        this._touch = true;
                        return this;
                    };

                    /**
                     * Disable opening the slideout via touch events.
                     */
                    Slideout.prototype.disableTouch = function() {
                        this._touch = false;
                        return this;
                    };

                    /**
                     * Destroy an instance of slideout.
                     */
                    Slideout.prototype.destroy = function() {
                        // Close before clean
                        this.close();

                        // Remove event listeners
                        doc.removeEventListener(touch.move, this._preventMove);
                        this.panel.removeEventListener(
                            touch.start,
                            this._resetTouchFn
                        );
                        this.panel.removeEventListener(
                            "touchcancel",
                            this._onTouchCancelFn
                        );
                        this.panel.removeEventListener(
                            touch.end,
                            this._onTouchEndFn
                        );
                        this.panel.removeEventListener(
                            touch.move,
                            this._onTouchMoveFn
                        );
                        doc.removeEventListener("scroll", this._onScrollFn);

                        // Remove methods
                        this.open = this.close = function() {};

                        // Return the instance so it can be easily dereferenced
                        return this;
                    };

                    /**
                     * Expose Slideout
                     */
                    module.exports = Slideout;
                },
                { decouple: 2, emitter: 3 }
            ],
            2: [
                function(require, module, exports) {
                    "use strict";

                    var requestAnimFrame = (function() {
                        return (
                            window.requestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            function(callback) {
                                window.setTimeout(callback, 1000 / 60);
                            }
                        );
                    })();

                    function decouple(node, event, fn) {
                        var eve,
                            tracking = false;

                        function captureEvent(e) {
                            eve = e;
                            track();
                        }

                        function track() {
                            if (!tracking) {
                                requestAnimFrame(update);
                                tracking = true;
                            }
                        }

                        function update() {
                            fn.call(node, eve);
                            tracking = false;
                        }

                        node.addEventListener(event, captureEvent, false);

                        return captureEvent;
                    }

                    /**
                     * Expose decouple
                     */
                    module.exports = decouple;
                },
                {}
            ],
            3: [
                function(require, module, exports) {
                    "use strict";

                    var _classCallCheck = function(instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                        }
                    };

                    exports.__esModule = true;
                    /**
                     * Creates a new instance of Emitter.
                     * @class
                     * @returns {Object} Returns a new instance of Emitter.
                     * @example
                     * // Creates a new instance of Emitter.
                     * var Emitter = require('emitter');
                     *
                     * var emitter = new Emitter();
                     */

                    var Emitter = (function() {
                        function Emitter() {
                            _classCallCheck(this, Emitter);
                        }

                        /**
                         * Adds a listener to the collection for the specified event.
                         * @memberof! Emitter.prototype
                         * @function
                         * @param {String} event - The event name.
                         * @param {Function} listener - A listener function to add.
                         * @returns {Object} Returns an instance of Emitter.
                         * @example
                         * // Add an event listener to "foo" event.
                         * emitter.on('foo', listener);
                         */

                        Emitter.prototype.on = function on(event, listener) {
                            // Use the current collection or create it.
                            this._eventCollection = this._eventCollection || {};

                            // Use the current collection of an event or create it.
                            this._eventCollection[event] =
                                this._eventCollection[event] || [];

                            // Appends the listener into the collection of the given event
                            this._eventCollection[event].push(listener);

                            return this;
                        };

                        /**
                         * Adds a listener to the collection for the specified event that will be called only once.
                         * @memberof! Emitter.prototype
                         * @function
                         * @param {String} event - The event name.
                         * @param {Function} listener - A listener function to add.
                         * @returns {Object} Returns an instance of Emitter.
                         * @example
                         * // Will add an event handler to "foo" event once.
                         * emitter.once('foo', listener);
                         */

                        Emitter.prototype.once = function once(
                            event,
                            listener
                        ) {
                            var self = this;

                            function fn() {
                                self.off(event, fn);
                                listener.apply(this, arguments);
                            }

                            fn.listener = listener;

                            this.on(event, fn);

                            return this;
                        };

                        /**
                         * Removes a listener from the collection for the specified event.
                         * @memberof! Emitter.prototype
                         * @function
                         * @param {String} event - The event name.
                         * @param {Function} listener - A listener function to remove.
                         * @returns {Object} Returns an instance of Emitter.
                         * @example
                         * // Remove a given listener.
                         * emitter.off('foo', listener);
                         */

                        Emitter.prototype.off = function off(event, listener) {
                            var listeners = undefined;

                            // Defines listeners value.
                            if (
                                !this._eventCollection ||
                                !(listeners = this._eventCollection[event])
                            ) {
                                return this;
                            }

                            listeners.forEach(function(fn, i) {
                                if (
                                    fn === listener ||
                                    fn.listener === listener
                                ) {
                                    // Removes the given listener.
                                    listeners.splice(i, 1);
                                }
                            });

                            // Removes an empty event collection.
                            if (listeners.length === 0) {
                                delete this._eventCollection[event];
                            }

                            return this;
                        };

                        /**
                         * Execute each item in the listener collection in order with the specified data.
                         * @memberof! Emitter.prototype
                         * @function
                         * @param {String} event - The name of the event you want to emit.
                         * @param {...Object} data - Data to pass to the listeners.
                         * @returns {Object} Returns an instance of Emitter.
                         * @example
                         * // Emits the "foo" event with 'param1' and 'param2' as arguments.
                         * emitter.emit('foo', 'param1', 'param2');
                         */

                        Emitter.prototype.emit = function emit(event) {
                            var _this = this;

                            for (
                                var _len = arguments.length,
                                    args = Array(_len > 1 ? _len - 1 : 0),
                                    _key = 1;
                                _key < _len;
                                _key++
                            ) {
                                args[_key - 1] = arguments[_key];
                            }

                            var listeners = undefined;

                            // Defines listeners value.
                            if (
                                !this._eventCollection ||
                                !(listeners = this._eventCollection[event])
                            ) {
                                return this;
                            }

                            // Clone listeners
                            listeners = listeners.slice(0);

                            listeners.forEach(function(fn) {
                                return fn.apply(_this, args);
                            });

                            return this;
                        };

                        return Emitter;
                    })();

                    /**
                     * Exports Emitter
                     */
                    exports["default"] = Emitter;
                    module.exports = exports["default"];
                },
                {}
            ]
        },
        {},
        [1]
    )(1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9kZWNvdXBsZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9lbWl0dGVyL2Rpc3QvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xudmFyIGRlY291cGxlID0gcmVxdWlyZSgnZGVjb3VwbGUnKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnZW1pdHRlcicpO1xuXG4vKipcbiAqIFByaXZhdGVzXG4gKi9cbnZhciBzY3JvbGxUaW1lb3V0O1xudmFyIHNjcm9sbGluZyA9IGZhbHNlO1xudmFyIGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcbnZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbnZhciBtc1BvaW50ZXJTdXBwb3J0ZWQgPSB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ7XG52YXIgdG91Y2ggPSB7XG4gICdzdGFydCc6IG1zUG9pbnRlclN1cHBvcnRlZCA/ICdNU1BvaW50ZXJEb3duJyA6ICd0b3VjaHN0YXJ0JyxcbiAgJ21vdmUnOiBtc1BvaW50ZXJTdXBwb3J0ZWQgPyAnTVNQb2ludGVyTW92ZScgOiAndG91Y2htb3ZlJyxcbiAgJ2VuZCc6IG1zUG9pbnRlclN1cHBvcnRlZCA/ICdNU1BvaW50ZXJVcCcgOiAndG91Y2hlbmQnXG59O1xudmFyIHByZWZpeCA9IChmdW5jdGlvbiBwcmVmaXgoKSB7XG4gIHZhciByZWdleCA9IC9eKFdlYmtpdHxLaHRtbHxNb3p8bXN8TykoPz1bQS1aXSkvO1xuICB2YXIgc3R5bGVEZWNsYXJhdGlvbiA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF0uc3R5bGU7XG4gIGZvciAodmFyIHByb3AgaW4gc3R5bGVEZWNsYXJhdGlvbikge1xuICAgIGlmIChyZWdleC50ZXN0KHByb3ApKSB7XG4gICAgICByZXR1cm4gJy0nICsgcHJvcC5tYXRjaChyZWdleClbMF0udG9Mb3dlckNhc2UoKSArICctJztcbiAgICB9XG4gIH1cbiAgLy8gTm90aGluZyBmb3VuZCBzbyBmYXI/IFdlYmtpdCBkb2VzIG5vdCBlbnVtZXJhdGUgb3ZlciB0aGUgQ1NTIHByb3BlcnRpZXMgb2YgdGhlIHN0eWxlIG9iamVjdC5cbiAgLy8gSG93ZXZlciAocHJvcCBpbiBzdHlsZSkgcmV0dXJucyB0aGUgY29ycmVjdCB2YWx1ZSwgc28gd2UnbGwgaGF2ZSB0byB0ZXN0IGZvclxuICAvLyB0aGUgcHJlY2VuY2Ugb2YgYSBzcGVjaWZpYyBwcm9wZXJ0eVxuICBpZiAoJ1dlYmtpdE9wYWNpdHknIGluIHN0eWxlRGVjbGFyYXRpb24pIHsgcmV0dXJuICctd2Via2l0LSc7IH1cbiAgaWYgKCdLaHRtbE9wYWNpdHknIGluIHN0eWxlRGVjbGFyYXRpb24pIHsgcmV0dXJuICcta2h0bWwtJzsgfVxuICByZXR1cm4gJyc7XG59KCkpO1xuZnVuY3Rpb24gZXh0ZW5kKGRlc3RpbmF0aW9uLCBmcm9tKSB7XG4gIGZvciAodmFyIHByb3AgaW4gZnJvbSkge1xuICAgIGlmIChmcm9tW3Byb3BdKSB7XG4gICAgICBkZXN0aW5hdGlvbltwcm9wXSA9IGZyb21bcHJvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiBkZXN0aW5hdGlvbjtcbn1cbmZ1bmN0aW9uIGluaGVyaXRzKGNoaWxkLCB1YmVyKSB7XG4gIGNoaWxkLnByb3RvdHlwZSA9IGV4dGVuZChjaGlsZC5wcm90b3R5cGUgfHwge30sIHViZXIucHJvdG90eXBlKTtcbn1cbmZ1bmN0aW9uIGhhc0lnbm9yZWRFbGVtZW50cyhlbCkge1xuICB3aGlsZSAoZWwucGFyZW50Tm9kZSkge1xuICAgIGlmIChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVvdXQtaWdub3JlJykgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgZWwgPSBlbC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFNsaWRlb3V0IGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFNsaWRlb3V0KG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gU2V0cyBkZWZhdWx0IHZhbHVlc1xuICB0aGlzLl9zdGFydE9mZnNldFggPSAwO1xuICB0aGlzLl9jdXJyZW50T2Zmc2V0WCA9IDA7XG4gIHRoaXMuX29wZW5pbmcgPSBmYWxzZTtcbiAgdGhpcy5fbW92ZWQgPSBmYWxzZTtcbiAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XG4gIHRoaXMuX3ByZXZlbnRPcGVuID0gZmFsc2U7XG4gIHRoaXMuX3RvdWNoID0gb3B0aW9ucy50b3VjaCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMudG91Y2ggJiYgdHJ1ZTtcbiAgdGhpcy5fc2lkZSA9IG9wdGlvbnMuc2lkZSB8fCAnbGVmdCc7XG5cbiAgLy8gU2V0cyBwYW5lbFxuICB0aGlzLnBhbmVsID0gb3B0aW9ucy5wYW5lbDtcbiAgdGhpcy5tZW51ID0gb3B0aW9ucy5tZW51O1xuXG4gIC8vIFNldHMgIGNsYXNzbmFtZXNcbiAgaWYgKCF0aGlzLnBhbmVsLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVvdXQtcGFuZWwnKSkge1xuICAgIHRoaXMucGFuZWwuY2xhc3NMaXN0LmFkZCgnc2xpZGVvdXQtcGFuZWwnKTtcbiAgfVxuICBpZiAoIXRoaXMucGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZW91dC1wYW5lbC0nICsgdGhpcy5fc2lkZSkpIHtcbiAgICB0aGlzLnBhbmVsLmNsYXNzTGlzdC5hZGQoJ3NsaWRlb3V0LXBhbmVsLScgKyB0aGlzLl9zaWRlKTtcbiAgfVxuICBpZiAoIXRoaXMubWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlb3V0LW1lbnUnKSkge1xuICAgIHRoaXMubWVudS5jbGFzc0xpc3QuYWRkKCdzbGlkZW91dC1tZW51Jyk7XG4gIH1cbiAgaWYgKCF0aGlzLm1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZW91dC1tZW51LScgKyB0aGlzLl9zaWRlKSkge1xuICAgIHRoaXMubWVudS5jbGFzc0xpc3QuYWRkKCdzbGlkZW91dC1tZW51LScgKyB0aGlzLl9zaWRlKTtcbiAgfVxuXG4gIC8vIFNldHMgb3B0aW9uc1xuICB0aGlzLl9meCA9IG9wdGlvbnMuZnggfHwgJ2Vhc2UnO1xuICB0aGlzLl9kdXJhdGlvbiA9IHBhcnNlSW50KG9wdGlvbnMuZHVyYXRpb24sIDEwKSB8fCAzMDA7XG4gIHRoaXMuX3RvbGVyYW5jZSA9IHBhcnNlSW50KG9wdGlvbnMudG9sZXJhbmNlLCAxMCkgfHwgNzA7XG4gIHRoaXMuX3BhZGRpbmcgPSB0aGlzLl90cmFuc2xhdGVUbyA9IHBhcnNlSW50KG9wdGlvbnMucGFkZGluZywgMTApIHx8IDI1NjtcbiAgdGhpcy5fb3JpZW50YXRpb24gPSB0aGlzLl9zaWRlID09PSAncmlnaHQnID8gLTEgOiAxO1xuICB0aGlzLl90cmFuc2xhdGVUbyAqPSB0aGlzLl9vcmllbnRhdGlvbjtcblxuICAvLyBJbml0IHRvdWNoIGV2ZW50c1xuICBpZiAodGhpcy5fdG91Y2gpIHtcbiAgICB0aGlzLl9pbml0VG91Y2hFdmVudHMoKTtcbiAgfVxufVxuXG4vKipcbiAqIEluaGVyaXRzIGZyb20gRW1pdHRlclxuICovXG5pbmhlcml0cyhTbGlkZW91dCwgRW1pdHRlcik7XG5cbi8qKlxuICogT3BlbnMgdGhlIHNsaWRlb3V0IG1lbnUuXG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5lbWl0KCdiZWZvcmVvcGVuJyk7XG4gIGlmICghaHRtbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlb3V0LW9wZW4nKSkge1xuICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc2xpZGVvdXQtb3BlbicpO1xuICB9XG4gIHRoaXMuX3NldFRyYW5zaXRpb24oKTtcbiAgdGhpcy5fdHJhbnNsYXRlWFRvKHRoaXMuX3RyYW5zbGF0ZVRvKTtcbiAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBzZWxmLnBhbmVsLnN0eWxlLnRyYW5zaXRpb24gPSBzZWxmLnBhbmVsLnN0eWxlWyctd2Via2l0LXRyYW5zaXRpb24nXSA9ICcnO1xuICAgIHNlbGYuZW1pdCgnb3BlbicpO1xuICB9LCB0aGlzLl9kdXJhdGlvbiArIDUwKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENsb3NlcyBzbGlkZW91dCBtZW51LlxuICovXG5TbGlkZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAoIXRoaXMuaXNPcGVuKCkgJiYgIXRoaXMuX29wZW5pbmcpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLmVtaXQoJ2JlZm9yZWNsb3NlJyk7XG4gIHRoaXMuX3NldFRyYW5zaXRpb24oKTtcbiAgdGhpcy5fdHJhbnNsYXRlWFRvKDApO1xuICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlb3V0LW9wZW4nKTtcbiAgICBzZWxmLnBhbmVsLnN0eWxlLnRyYW5zaXRpb24gPSBzZWxmLnBhbmVsLnN0eWxlWyctd2Via2l0LXRyYW5zaXRpb24nXSA9IHNlbGYucGFuZWwuc3R5bGVbcHJlZml4ICsgJ3RyYW5zZm9ybSddID0gc2VsZi5wYW5lbC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICBzZWxmLmVtaXQoJ2Nsb3NlJyk7XG4gIH0sIHRoaXMuX2R1cmF0aW9uICsgNTApO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogVG9nZ2xlcyAob3Blbi9jbG9zZSkgc2xpZGVvdXQgbWVudS5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5pc09wZW4oKSA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIHNsaWRlb3V0IGlzIGN1cnJlbnRseSBvcGVuLCBhbmQgZmFsc2UgaWYgaXQgaXMgY2xvc2VkLlxuICovXG5TbGlkZW91dC5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9vcGVuZWQ7XG59O1xuXG4vKipcbiAqIFRyYW5zbGF0ZXMgcGFuZWwgYW5kIHVwZGF0ZXMgY3VycmVudE9mZnNldCB3aXRoIGEgZ2l2ZW4gWCBwb2ludFxuICovXG5TbGlkZW91dC5wcm90b3R5cGUuX3RyYW5zbGF0ZVhUbyA9IGZ1bmN0aW9uKHRyYW5zbGF0ZVgpIHtcbiAgdGhpcy5fY3VycmVudE9mZnNldFggPSB0cmFuc2xhdGVYO1xuICB0aGlzLnBhbmVsLnN0eWxlW3ByZWZpeCArICd0cmFuc2Zvcm0nXSA9IHRoaXMucGFuZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHRyYW5zbGF0ZVggKyAncHgpJztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB0cmFuc2l0aW9uIHByb3BlcnRpZXNcbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLl9zZXRUcmFuc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGFuZWwuc3R5bGVbcHJlZml4ICsgJ3RyYW5zaXRpb24nXSA9IHRoaXMucGFuZWwuc3R5bGUudHJhbnNpdGlvbiA9IHByZWZpeCArICd0cmFuc2Zvcm0gJyArIHRoaXMuX2R1cmF0aW9uICsgJ21zICcgKyB0aGlzLl9meDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIHRvdWNoIGV2ZW50XG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS5faW5pdFRvdWNoRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICAvKipcbiAgICogRGVjb3VwbGUgc2Nyb2xsIGV2ZW50XG4gICAqL1xuICB0aGlzLl9vblNjcm9sbEZuID0gZGVjb3VwbGUoZG9jLCAnc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFzZWxmLl9tb3ZlZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHNjcm9sbFRpbWVvdXQpO1xuICAgICAgc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIHNjcm9sbFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBzY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogUHJldmVudHMgdG91Y2htb3ZlIGV2ZW50IGlmIHNsaWRlb3V0IGlzIG1vdmluZ1xuICAgKi9cbiAgdGhpcy5fcHJldmVudE1vdmUgPSBmdW5jdGlvbihldmUpIHtcbiAgICBpZiAoc2VsZi5fbW92ZWQpIHtcbiAgICAgIGV2ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaC5tb3ZlLCB0aGlzLl9wcmV2ZW50TW92ZSk7XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB2YWx1ZXMgb24gdG91Y2hzdGFydFxuICAgKi9cbiAgdGhpcy5fcmVzZXRUb3VjaEZuID0gZnVuY3Rpb24oZXZlKSB7XG4gICAgaWYgKHR5cGVvZiBldmUudG91Y2hlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxmLl9tb3ZlZCA9IGZhbHNlO1xuICAgIHNlbGYuX29wZW5pbmcgPSBmYWxzZTtcbiAgICBzZWxmLl9zdGFydE9mZnNldFggPSBldmUudG91Y2hlc1swXS5wYWdlWDtcbiAgICBzZWxmLl9wcmV2ZW50T3BlbiA9ICghc2VsZi5fdG91Y2ggfHwgKCFzZWxmLmlzT3BlbigpICYmIHNlbGYubWVudS5jbGllbnRXaWR0aCAhPT0gMCkpO1xuICB9O1xuXG4gIHRoaXMucGFuZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaC5zdGFydCwgdGhpcy5fcmVzZXRUb3VjaEZuKTtcblxuICAvKipcbiAgICogUmVzZXRzIHZhbHVlcyBvbiB0b3VjaGNhbmNlbFxuICAgKi9cbiAgdGhpcy5fb25Ub3VjaENhbmNlbEZuID0gZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5fbW92ZWQgPSBmYWxzZTtcbiAgICBzZWxmLl9vcGVuaW5nID0gZmFsc2U7XG4gIH07XG5cbiAgdGhpcy5wYW5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMuX29uVG91Y2hDYW5jZWxGbik7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgc2xpZGVvdXQgb24gdG91Y2hlbmRcbiAgICovXG4gIHRoaXMuX29uVG91Y2hFbmRGbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChzZWxmLl9tb3ZlZCkge1xuICAgICAgc2VsZi5lbWl0KCd0cmFuc2xhdGVlbmQnKTtcbiAgICAgIChzZWxmLl9vcGVuaW5nICYmIE1hdGguYWJzKHNlbGYuX2N1cnJlbnRPZmZzZXRYKSA+IHNlbGYuX3RvbGVyYW5jZSkgPyBzZWxmLm9wZW4oKSA6IHNlbGYuY2xvc2UoKTtcbiAgICB9XG4gICAgc2VsZi5fbW92ZWQgPSBmYWxzZTtcbiAgfTtcblxuICB0aGlzLnBhbmVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2guZW5kLCB0aGlzLl9vblRvdWNoRW5kRm4pO1xuXG4gIC8qKlxuICAgKiBUcmFuc2xhdGVzIHBhbmVsIG9uIHRvdWNobW92ZVxuICAgKi9cbiAgdGhpcy5fb25Ub3VjaE1vdmVGbiA9IGZ1bmN0aW9uKGV2ZSkge1xuICAgIGlmIChcbiAgICAgIHNjcm9sbGluZyB8fFxuICAgICAgc2VsZi5fcHJldmVudE9wZW4gfHxcbiAgICAgIHR5cGVvZiBldmUudG91Y2hlcyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgIGhhc0lnbm9yZWRFbGVtZW50cyhldmUudGFyZ2V0KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkaWZfeCA9IGV2ZS50b3VjaGVzWzBdLmNsaWVudFggLSBzZWxmLl9zdGFydE9mZnNldFg7XG4gICAgdmFyIHRyYW5zbGF0ZVggPSBzZWxmLl9jdXJyZW50T2Zmc2V0WCA9IGRpZl94O1xuXG4gICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVgpID4gc2VsZi5fcGFkZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyhkaWZfeCkgPiAyMCkge1xuXG4gICAgICBzZWxmLl9vcGVuaW5nID0gdHJ1ZTtcblxuICAgICAgdmFyIG9yaWVudGVkX2RpZl94ID0gZGlmX3ggKiBzZWxmLl9vcmllbnRhdGlvbjtcblxuICAgICAgaWYgKHNlbGYuX29wZW5lZCAmJiBvcmllbnRlZF9kaWZfeCA+IDAgfHwgIXNlbGYuX29wZW5lZCAmJiBvcmllbnRlZF9kaWZfeCA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNlbGYuX21vdmVkKSB7XG4gICAgICAgIHNlbGYuZW1pdCgndHJhbnNsYXRlc3RhcnQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9yaWVudGVkX2RpZl94IDw9IDApIHtcbiAgICAgICAgdHJhbnNsYXRlWCA9IGRpZl94ICsgc2VsZi5fcGFkZGluZyAqIHNlbGYuX29yaWVudGF0aW9uO1xuICAgICAgICBzZWxmLl9vcGVuaW5nID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICghKHNlbGYuX21vdmVkICYmIGh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZW91dC1vcGVuJykpKSB7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc2xpZGVvdXQtb3BlbicpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnBhbmVsLnN0eWxlW3ByZWZpeCArICd0cmFuc2Zvcm0nXSA9IHNlbGYucGFuZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHRyYW5zbGF0ZVggKyAncHgpJztcbiAgICAgIHNlbGYuZW1pdCgndHJhbnNsYXRlJywgdHJhbnNsYXRlWCk7XG4gICAgICBzZWxmLl9tb3ZlZCA9IHRydWU7XG4gICAgfVxuXG4gIH07XG5cbiAgdGhpcy5wYW5lbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoLm1vdmUsIHRoaXMuX29uVG91Y2hNb3ZlRm4pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbmFibGUgb3BlbmluZyB0aGUgc2xpZGVvdXQgdmlhIHRvdWNoIGV2ZW50cy5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLmVuYWJsZVRvdWNoID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX3RvdWNoID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERpc2FibGUgb3BlbmluZyB0aGUgc2xpZGVvdXQgdmlhIHRvdWNoIGV2ZW50cy5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLmRpc2FibGVUb3VjaCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl90b3VjaCA9IGZhbHNlO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRGVzdHJveSBhbiBpbnN0YW5jZSBvZiBzbGlkZW91dC5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgLy8gQ2xvc2UgYmVmb3JlIGNsZWFuXG4gIHRoaXMuY2xvc2UoKTtcblxuICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzXG4gIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLm1vdmUsIHRoaXMuX3ByZXZlbnRNb3ZlKTtcbiAgdGhpcy5wYW5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLnN0YXJ0LCB0aGlzLl9yZXNldFRvdWNoRm4pO1xuICB0aGlzLnBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5fb25Ub3VjaENhbmNlbEZuKTtcbiAgdGhpcy5wYW5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLmVuZCwgdGhpcy5fb25Ub3VjaEVuZEZuKTtcbiAgdGhpcy5wYW5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLm1vdmUsIHRoaXMuX29uVG91Y2hNb3ZlRm4pO1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fb25TY3JvbGxGbik7XG5cbiAgLy8gUmVtb3ZlIG1ldGhvZHNcbiAgdGhpcy5vcGVuID0gdGhpcy5jbG9zZSA9IGZ1bmN0aW9uKCkge307XG5cbiAgLy8gUmV0dXJuIHRoZSBpbnN0YW5jZSBzbyBpdCBjYW4gYmUgZWFzaWx5IGRlcmVmZXJlbmNlZFxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRXhwb3NlIFNsaWRlb3V0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVvdXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgIH07XG59KCkpO1xuXG5mdW5jdGlvbiBkZWNvdXBsZShub2RlLCBldmVudCwgZm4pIHtcbiAgdmFyIGV2ZSxcbiAgICAgIHRyYWNraW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gY2FwdHVyZUV2ZW50KGUpIHtcbiAgICBldmUgPSBlO1xuICAgIHRyYWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFjaygpIHtcbiAgICBpZiAoIXRyYWNraW5nKSB7XG4gICAgICByZXF1ZXN0QW5pbUZyYW1lKHVwZGF0ZSk7XG4gICAgICB0cmFja2luZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGZuLmNhbGwobm9kZSwgZXZlKTtcbiAgICB0cmFja2luZyA9IGZhbHNlO1xuICB9XG5cbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYXB0dXJlRXZlbnQsIGZhbHNlKTtcblxuICByZXR1cm4gY2FwdHVyZUV2ZW50O1xufVxuXG4vKipcbiAqIEV4cG9zZSBkZWNvdXBsZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGRlY291cGxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICogQGNsYXNzXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGEgbmV3IGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gKiBAZXhhbXBsZVxuICogLy8gQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICogdmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG4gKlxuICogdmFyIGVtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuICovXG5cbnZhciBFbWl0dGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRW1pdHRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRW1pdHRlcik7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRvIHRoZSBjb2xsZWN0aW9uIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICAgKiBAbWVtYmVyb2YhIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBBIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIGFkZC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gXCJmb29cIiBldmVudC5cbiAgICogZW1pdHRlci5vbignZm9vJywgbGlzdGVuZXIpO1xuICAgKi9cblxuICBFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIC8vIFVzZSB0aGUgY3VycmVudCBjb2xsZWN0aW9uIG9yIGNyZWF0ZSBpdC5cbiAgICB0aGlzLl9ldmVudENvbGxlY3Rpb24gPSB0aGlzLl9ldmVudENvbGxlY3Rpb24gfHwge307XG5cbiAgICAvLyBVc2UgdGhlIGN1cnJlbnQgY29sbGVjdGlvbiBvZiBhbiBldmVudCBvciBjcmVhdGUgaXQuXG4gICAgdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XSA9IHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0gfHwgW107XG5cbiAgICAvLyBBcHBlbmRzIHRoZSBsaXN0ZW5lciBpbnRvIHRoZSBjb2xsZWN0aW9uIG9mIHRoZSBnaXZlbiBldmVudFxuICAgIHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0ucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRvIHRoZSBjb2xsZWN0aW9uIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50IHRoYXQgd2lsbCBiZSBjYWxsZWQgb25seSBvbmNlLlxuICAgKiBAbWVtYmVyb2YhIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBBIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIGFkZC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBXaWxsIGFkZCBhbiBldmVudCBoYW5kbGVyIHRvIFwiZm9vXCIgZXZlbnQgb25jZS5cbiAgICogZW1pdHRlci5vbmNlKCdmb28nLCBsaXN0ZW5lcik7XG4gICAqL1xuXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGZuKCkge1xuICAgICAgc2VsZi5vZmYoZXZlbnQsIGZuKTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgZm4ubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblxuICAgIHRoaXMub24oZXZlbnQsIGZuKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgbGlzdGVuZXIgZnJvbSB0aGUgY29sbGVjdGlvbiBmb3IgdGhlIHNwZWNpZmllZCBldmVudC5cbiAgICogQG1lbWJlcm9mISBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IC0gVGhlIGV2ZW50IG5hbWUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gQSBsaXN0ZW5lciBmdW5jdGlvbiB0byByZW1vdmUuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgRW1pdHRlci5cbiAgICogQGV4YW1wbGVcbiAgICogLy8gUmVtb3ZlIGEgZ2l2ZW4gbGlzdGVuZXIuXG4gICAqIGVtaXR0ZXIub2ZmKCdmb28nLCBsaXN0ZW5lcik7XG4gICAqL1xuXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIG9mZihldmVudCwgbGlzdGVuZXIpIHtcblxuICAgIHZhciBsaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBEZWZpbmVzIGxpc3RlbmVycyB2YWx1ZS5cbiAgICBpZiAoIXRoaXMuX2V2ZW50Q29sbGVjdGlvbiB8fCAhKGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0pKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZm4sIGkpIHtcbiAgICAgIGlmIChmbiA9PT0gbGlzdGVuZXIgfHwgZm4ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIC8vIFJlbW92ZXMgdGhlIGdpdmVuIGxpc3RlbmVyLlxuICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUmVtb3ZlcyBhbiBlbXB0eSBldmVudCBjb2xsZWN0aW9uLlxuICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRXhlY3V0ZSBlYWNoIGl0ZW0gaW4gdGhlIGxpc3RlbmVyIGNvbGxlY3Rpb24gaW4gb3JkZXIgd2l0aCB0aGUgc3BlY2lmaWVkIGRhdGEuXG4gICAqIEBtZW1iZXJvZiEgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB5b3Ugd2FudCB0byBlbWl0LlxuICAgKiBAcGFyYW0gey4uLk9iamVjdH0gZGF0YSAtIERhdGEgdG8gcGFzcyB0byB0aGUgbGlzdGVuZXJzLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIEVtaXRzIHRoZSBcImZvb1wiIGV2ZW50IHdpdGggJ3BhcmFtMScgYW5kICdwYXJhbTInIGFzIGFyZ3VtZW50cy5cbiAgICogZW1pdHRlci5lbWl0KCdmb28nLCAncGFyYW0xJywgJ3BhcmFtMicpO1xuICAgKi9cblxuICBFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBEZWZpbmVzIGxpc3RlbmVycyB2YWx1ZS5cbiAgICBpZiAoIXRoaXMuX2V2ZW50Q29sbGVjdGlvbiB8fCAhKGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0pKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBDbG9uZSBsaXN0ZW5lcnNcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoMCk7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBmbi5hcHBseShfdGhpcywgYXJncyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gRW1pdHRlcjtcbn0pKCk7XG5cbi8qKlxuICogRXhwb3J0cyBFbWl0dGVyXG4gKi9cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il19

var slideout = new Slideout({
    panel: $(".page-wrapper").get(0),
    menu: $(".sidebar").get(0),
    padding: 256,
    tolerance: 70,
    side: "right"
});

document
    .querySelector(".mobile-menu-btn")
    .addEventListener("click", function() {
        slideout.toggle();
    });
(function($) {
    "use strict";

    // Change View
    $('[data-toggle="change-view"]').each(function(index, el) {
        var warp = $(this);
        var target = $(this).data("target");
        $(this).on("click", "a", function(e) {
            e.preventDefault();
            var changeClass = $(this)
                .data("classChange")
                .split(">");
            $(document)
                .find(target)
                .removeClass(changeClass[0])
                .addClass(changeClass[1]);
            warp.find("a").removeClass("active");
            $(this).addClass("active");
        });
    });

    $(document).ready(function($) {
        //c-pie
        $(".c-pie").each(function(index, el) {
            $(this).data(
                "easyPieChart",
                new EasyPieChart(this, {
                    barColor: "#366caf",
                    trackColor: "#c5d8f1",
                    lineWidth: 5,
                    size: $(this).data("size") || 42,
                    scaleColor: false
                })
            );
        });

        //select2
        function formatOption(option) {
            if (!option.id) {
                return option.text;
            }
            var $option = $(option.element).data("html");
            return $option ? $("<span>" + $option + "</span>") : option.text;
        }

        $("select:not(.no-select2)").each(function(index, el) {
            var select = $(this);
            $(this).select2({
                // placeholder: select.attr('placeholder'),
                searchInputPlaceholder: "جستجو ...",
                minimumResultsForSearch: select.attr("search") || "Infinity",
                // dir: 'rtl',
                width: "resolve",
                theme: "mizan",
                templateResult: formatOption,
                templateSelection: formatOption
            });
        });

        //number masker
        var numberMask = document.querySelectorAll(".number-mask");
        if (numberMask)
            VMasker(numberMask).maskMoney({
                // Decimal precision -> "90"
                precision: 0,
                // Decimal separator -> ",90"
                // separator: '.',
                // Number delimiter -> "12.345.678"
                delimiter: ","
                // Money unit -> "R$ 12.345.678,90"
                // unit: 'R$',
                // Money unit -> "12.345.678,90 R$"
                // suffixUnit: 'R$',
                // Force type only number instead decimal,
                // masking decimals with ",00"
                // Zero cents -> "R$ 1.234.567.890,00"
                // zeroCents: true
            });

        //map
        $(".map-picker").each(function(index, el) {
            $(this)
                .find(".map")
                .geolocate({
                    lat: $(this).data("lat") || "#gm_lat",
                    lng: $(this).data("lng") || "#gm_lng",
                    address: [$(this).data("address")],
                    mapOptions: {
                        zoom: $(this).data("zoom") || 15
                    },
                    markerOptions: {
                        icon: {
                            anchor: [15, 30],
                            scaledSize: [30, 30],
                            url: "/img/marker.svg"
                        }
                    }
                });
        });

        //carousel
        $(".datasets-carousel .owl-carousel").each(function(index, el) {
            $(this).owlCarousel({
                rtl: true,
                loop: false,
                margin: 10,
                nav: true,
                dots: false,
                navText: [
                    '<i class="icon mz-right"></i>',
                    '<i class="icon mz-left"></i>'
                ],
                items: $(this).data("items") || 1
                // responsiveBaseElement:"content",
                // responsiveClass: true,
                // responsive: {
                //     0: {
                //         items: 1
                //     },
                //     768: {
                //         items: 3
                //     }
                // }
            });
        });
    });
})(jQuery);
