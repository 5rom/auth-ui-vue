import { defineComponent as te, useAttrs as ia, computed as Y, openBlock as T, createBlock as $, resolveDynamicComponent as ra, mergeProps as Ue, unref as E, withCtx as A, renderSlot as We, createElementBlock as V, normalizeClass as Pt, normalizeStyle as No, ref as W, createElementVNode as D, withModifiers as ge, inject as Zn, watch as xa, createVNode as U, createTextVNode as B, toDisplayString as j, createCommentVNode as K, createStaticVNode as Da, onMounted as Yt, provide as Jn, h as Zt, Fragment as ta, renderList as Oo, getCurrentInstance as Jt, onUnmounted as Io, shallowRef as Lo, Text as xo } from "vue";
var fe = {
  SIGN_IN: "sign_in",
  SIGN_UP: "sign_up",
  FORGOTTEN_PASSWORD: "forgotten_password",
  MAGIC_LINK: "magic_link",
  UPDATE_PASSWORD: "update_password",
  VERIFY_OTP: "verify_otp"
}, Ao = "supabase-auth-ui", Mo = {
  // interfaces
  ROOT: "root",
  SIGN_IN: fe.SIGN_IN,
  SIGN_UP: fe.SIGN_UP,
  FORGOTTEN_PASSWORD: fe.FORGOTTEN_PASSWORD,
  MAGIC_LINK: fe.MAGIC_LINK,
  UPDATE_PASSWORD: fe.UPDATE_PASSWORD,
  // ui
  anchor: "ui-anchor",
  button: "ui-button",
  container: "ui-container",
  divider: "ui-divider",
  input: "ui-input",
  label: "ui-label",
  loader: "ui-loader",
  message: "ui-message"
};
function sa(e, a, t) {
  var n, l;
  const i = [], s = Mo[e];
  return i.push(
    t != null && t.prependedClassName ? (t == null ? void 0 : t.prependedClassName) + "_" + s : Ao + "_" + s
  ), (n = t == null ? void 0 : t.className) != null && n[e] && i.push((l = t == null ? void 0 : t.className) == null ? void 0 : l[e]), ((t == null ? void 0 : t.extend) === void 0 || (t == null ? void 0 : t.extend) === !0) && i.push(a), i;
}
function Rt(e, a) {
  let t;
  if (e && a && typeof e == "object" && typeof a == "object") {
    if (Array.isArray(a))
      for (t = 0; t < a.length; t++)
        e[t] = Rt(e[t], a[t]);
    else
      for (t in a)
        e[t] = Rt(e[t], a[t]);
    return e;
  }
  return a;
}
function Dt(e, ...a) {
  let t = a.length;
  for (let n = 0; n < t; n++)
    e = Rt(e, a[n]);
  return e;
}
function Po(e, a) {
  return e.replace(
    /{{(\w+)}}/g,
    (t, n) => a.hasOwnProperty(n) ? a[n] : t
  );
}
var gn, J = "colors", me = "sizes", O = "space", Ro = { gap: O, gridGap: O, columnGap: O, gridColumnGap: O, rowGap: O, gridRowGap: O, inset: O, insetBlock: O, insetBlockEnd: O, insetBlockStart: O, insetInline: O, insetInlineEnd: O, insetInlineStart: O, margin: O, marginTop: O, marginRight: O, marginBottom: O, marginLeft: O, marginBlock: O, marginBlockEnd: O, marginBlockStart: O, marginInline: O, marginInlineEnd: O, marginInlineStart: O, padding: O, paddingTop: O, paddingRight: O, paddingBottom: O, paddingLeft: O, paddingBlock: O, paddingBlockEnd: O, paddingBlockStart: O, paddingInline: O, paddingInlineEnd: O, paddingInlineStart: O, top: O, right: O, bottom: O, left: O, scrollMargin: O, scrollMarginTop: O, scrollMarginRight: O, scrollMarginBottom: O, scrollMarginLeft: O, scrollMarginX: O, scrollMarginY: O, scrollMarginBlock: O, scrollMarginBlockEnd: O, scrollMarginBlockStart: O, scrollMarginInline: O, scrollMarginInlineEnd: O, scrollMarginInlineStart: O, scrollPadding: O, scrollPaddingTop: O, scrollPaddingRight: O, scrollPaddingBottom: O, scrollPaddingLeft: O, scrollPaddingX: O, scrollPaddingY: O, scrollPaddingBlock: O, scrollPaddingBlockEnd: O, scrollPaddingBlockStart: O, scrollPaddingInline: O, scrollPaddingInlineEnd: O, scrollPaddingInlineStart: O, fontSize: "fontSizes", background: J, backgroundColor: J, backgroundImage: J, borderImage: J, border: J, borderBlock: J, borderBlockEnd: J, borderBlockStart: J, borderBottom: J, borderBottomColor: J, borderColor: J, borderInline: J, borderInlineEnd: J, borderInlineStart: J, borderLeft: J, borderLeftColor: J, borderRight: J, borderRightColor: J, borderTop: J, borderTopColor: J, caretColor: J, color: J, columnRuleColor: J, fill: J, outline: J, outlineColor: J, stroke: J, textDecorationColor: J, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: me, minBlockSize: me, maxBlockSize: me, inlineSize: me, minInlineSize: me, maxInlineSize: me, width: me, minWidth: me, maxWidth: me, height: me, minHeight: me, maxHeight: me, flexBasis: me, gridTemplateColumns: me, gridTemplateRows: me, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, Do = (e, a) => typeof a == "function" ? { "()": Function.prototype.toString.call(a) } : a, Fa = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (a, t, ...n) => {
    const l = ((i) => JSON.stringify(i, Do))(a);
    return l in e ? e[l] : e[l] = t(a, ...n);
  };
}, Qa = Symbol.for("sxs.internal"), Xt = (e, a) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)), hn = (e) => {
  for (const a in e)
    return !0;
  return !1;
}, { hasOwnProperty: Fo } = Object.prototype, Ft = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (a) => "-" + a.toLowerCase()), $o = /\s+(?![^()]*\))/, ha = (e) => (a) => e(...typeof a == "string" ? String(a).split($o) : [a]), wn = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: ha((e, a) => ({ marginBlockStart: e, marginBlockEnd: a || e })), marginInline: ha((e, a) => ({ marginInlineStart: e, marginInlineEnd: a || e })), maxSize: ha((e, a) => ({ maxBlockSize: e, maxInlineSize: a || e })), minSize: ha((e, a) => ({ minBlockSize: e, minInlineSize: a || e })), paddingBlock: ha((e, a) => ({ paddingBlockStart: e, paddingBlockEnd: a || e })), paddingInline: ha((e, a) => ({ paddingInlineStart: e, paddingInlineEnd: a || e })) }, At = /([\d.]+)([^]*)/, Vo = (e, a) => e.length ? e.reduce((t, n) => (t.push(...a.map((l) => l.includes("&") ? l.replace(/&/g, /[ +>|~]/.test(n) && /&.*&/.test(l) ? `:is(${n})` : n) : n + " " + l)), t), []) : a, zo = (e, a) => e in Bo && typeof a == "string" ? a.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t, n, l, i) => n + (l === "stretch" ? `-moz-available${i};${Ft(e)}:${n}-webkit-fill-available` : `-moz-fit-content${i};${Ft(e)}:${n}fit-content`) + i) : String(a), Bo = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, Fe = (e) => e ? e + "-" : "", Xn = (e, a, t) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (n, l, i, s, u) => s == "$" == !!i ? n : (l || s == "--" ? "calc(" : "") + "var(--" + (s === "$" ? Fe(a) + (u.includes("$") ? "" : Fe(t)) + u.replace(/\$/g, "-") : u) + ")" + (l || s == "--" ? "*" + (l || "") + (i || "1") + ")" : "")), jo = /\s*,\s*(?![^()]*\))/, Uo = Object.prototype.toString, wa = (e, a, t, n, l) => {
  let i, s, u;
  const r = (d, _, m) => {
    let c, p;
    const b = (v) => {
      for (c in v) {
        const y = c.charCodeAt(0) === 64, x = y && Array.isArray(v[c]) ? v[c] : [v[c]];
        for (p of x) {
          const N = /[A-Z]/.test(h = c) ? h : h.replace(/-[^]/g, (M) => M[1].toUpperCase()), P = typeof p == "object" && p && p.toString === Uo && (!n.utils[N] || !_.length);
          if (N in n.utils && !P) {
            const M = n.utils[N];
            if (M !== s) {
              s = M, b(M(p)), s = null;
              continue;
            }
          } else if (N in wn) {
            const M = wn[N];
            if (M !== u) {
              u = M, b(M(p)), u = null;
              continue;
            }
          }
          if (y && (C = c.slice(1) in n.media ? "@media " + n.media[c.slice(1)] : c, c = C.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (M, F, R, S, X, ne) => {
            const ee = At.test(F), Ee = 0.0625 * (ee ? -1 : 1), [Ae, Ke] = ee ? [S, F] : [F, S];
            return "(" + (R[0] === "=" ? "" : R[0] === ">" === ee ? "max-" : "min-") + Ae + ":" + (R[0] !== "=" && R.length === 1 ? Ke.replace(At, (Ea, Ye, Ze) => Number(Ye) + Ee * (R === ">" ? 1 : -1) + Ze) : Ke) + (X ? ") and (" + (X[0] === ">" ? "min-" : "max-") + Ae + ":" + (X.length === 1 ? ne.replace(At, (Ea, Ye, Ze) => Number(Ye) + Ee * (X === ">" ? -1 : 1) + Ze) : ne) : "") + ")";
          })), P) {
            const M = y ? m.concat(c) : [...m], F = y ? [..._] : Vo(_, c.split(jo));
            i !== void 0 && l(vn(...i)), i = void 0, r(p, F, M);
          } else
            i === void 0 && (i = [[], _, m]), c = y || c.charCodeAt(0) !== 36 ? c : `--${Fe(n.prefix)}${c.slice(1).replace(/\$/g, "-")}`, p = P ? p : typeof p == "number" ? p && N in Wo ? String(p) + "px" : String(p) : Xn(zo(N, p ?? ""), n.prefix, n.themeMap[N]), i[0].push(`${y ? `${c} ` : `${Ft(c)}:`}${p}`);
        }
      }
      var C, h;
    };
    b(d), i !== void 0 && l(vn(...i)), i = void 0;
  };
  r(e, a, t);
}, vn = (e, a, t) => `${t.map((n) => `${n}{`).join("")}${a.length ? `${a.join(",")}{` : ""}${e.join(";")}${a.length ? "}" : ""}${Array(t.length ? t.length + 1 : 0).join("}")}`, Wo = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, kn = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), na = (e) => ((a) => {
  let t, n = "";
  for (t = Math.abs(a); t > 52; t = t / 52 | 0)
    n = kn(t % 52) + n;
  return kn(t % 52) + n;
})(((a, t) => {
  let n = t.length;
  for (; n; )
    a = 33 * a ^ t.charCodeAt(--n);
  return a;
})(5381, JSON.stringify(e)) >>> 0), La = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], Go = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, Ho = (e) => {
  let a;
  const t = () => {
    const { cssRules: l } = a.sheet;
    return [].map.call(l, (i, s) => {
      const { cssText: u } = i;
      let r = "";
      if (u.startsWith("--sxs"))
        return "";
      if (l[s - 1] && (r = l[s - 1].cssText).startsWith("--sxs")) {
        if (!i.cssRules.length)
          return "";
        for (const d in a.rules)
          if (a.rules[d].group === i)
            return `--sxs{--sxs:${[...a.rules[d].cache].join(" ")}}${u}`;
        return i.cssRules.length ? `${r}${u}` : "";
      }
      return u;
    }).join("");
  }, n = () => {
    if (a) {
      const { rules: u, sheet: r } = a;
      if (!r.deleteRule) {
        for (; Object(Object(r.cssRules)[0]).type === 3; )
          r.cssRules.splice(0, 1);
        r.cssRules = [];
      }
      for (const d in u)
        delete u[d];
    }
    const l = Object(e).styleSheets || [];
    for (const u of l)
      if (Go(u)) {
        for (let r = 0, d = u.cssRules; d[r]; ++r) {
          const _ = Object(d[r]);
          if (_.type !== 1)
            continue;
          const m = Object(d[r + 1]);
          if (m.type !== 4)
            continue;
          ++r;
          const { cssText: c } = _;
          if (!c.startsWith("--sxs"))
            continue;
          const p = c.slice(14, -3).trim().split(/\s+/), b = La[p[0]];
          b && (a || (a = { sheet: u, reset: n, rules: {}, toString: t }), a.rules[b] = { group: m, index: r, cache: new Set(p) });
        }
        if (a)
          break;
      }
    if (!a) {
      const u = (r, d) => ({ type: d, cssRules: [], insertRule(_, m) {
        this.cssRules.splice(m, 0, u(_, { import: 3, undefined: 1 }[(_.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return r === "@media{}" ? `@media{${[].map.call(this.cssRules, (_) => _.cssText).join("")}}` : r;
      } });
      a = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : u("", "text/css"), rules: {}, reset: n, toString: t };
    }
    const { sheet: i, rules: s } = a;
    for (let u = La.length - 1; u >= 0; --u) {
      const r = La[u];
      if (!s[r]) {
        const d = La[u + 1], _ = s[d] ? s[d].index : i.cssRules.length;
        i.insertRule("@media{}", _), i.insertRule(`--sxs{--sxs:${u}}`, _), s[r] = { group: i.cssRules[_ + 1], index: _, cache: /* @__PURE__ */ new Set([u]) };
      }
      Ko(s[r]);
    }
  };
  return n(), a;
}, Ko = (e) => {
  const a = e.group;
  let t = a.cssRules.length;
  e.apply = (n) => {
    try {
      a.insertRule(n, t), ++t;
    } catch {
    }
  };
}, Oa = Symbol(), Yo = Fa(), Zo = (e, a) => Yo(e, () => (...t) => {
  let n = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const l of t)
    if (l != null)
      if (l[Qa]) {
        n.type == null && (n.type = l[Qa].type);
        for (const i of l[Qa].composers)
          n.composers.add(i);
      } else
        l.constructor !== Object || l.$$typeof ? n.type == null && (n.type = l) : n.composers.add(Jo(l, e));
  return n.type == null && (n.type = "span"), n.composers.size || n.composers.add(["PJLV", {}, [], [], {}, []]), Xo(e, n, a);
}), Jo = ({ variants: e, compoundVariants: a, defaultVariants: t, ...n }, l) => {
  const i = `${Fe(l.prefix)}c-${na(n)}`, s = [], u = [], r = /* @__PURE__ */ Object.create(null), d = [];
  for (const c in t)
    r[c] = String(t[c]);
  if (typeof e == "object" && e)
    for (const c in e) {
      _ = r, m = c, Fo.call(_, m) || (r[c] = "undefined");
      const p = e[c];
      for (const b in p) {
        const v = { [c]: String(b) };
        String(b) === "undefined" && d.push(c);
        const C = p[b], h = [v, C, !hn(C)];
        s.push(h);
      }
    }
  var _, m;
  if (typeof a == "object" && a)
    for (const c of a) {
      let { css: p, ...b } = c;
      p = typeof p == "object" && p || {};
      for (const C in b)
        b[C] = String(b[C]);
      const v = [b, p, !hn(p)];
      u.push(v);
    }
  return [i, n, s, u, r, d];
}, Xo = (e, a, t) => {
  const [n, l, i, s] = qo(a.composers), u = typeof a.type == "function" || a.type.$$typeof ? ((m) => {
    function c() {
      for (let p = 0; p < c[Oa].length; p++) {
        const [b, v] = c[Oa][p];
        m.rules[b].apply(v);
      }
      return c[Oa] = [], null;
    }
    return c[Oa] = [], c.rules = {}, La.forEach((p) => c.rules[p] = { apply: (b) => c[Oa].push([p, b]) }), c;
  })(t) : null, r = (u || t).rules, d = `.${n}${l.length > 1 ? `:where(.${l.slice(1).join(".")})` : ""}`, _ = (m) => {
    m = typeof m == "object" && m || Qo;
    const { css: c, ...p } = m, b = {};
    for (const h in i)
      if (delete p[h], h in m) {
        let y = m[h];
        typeof y == "object" && y ? b[h] = { "@initial": i[h], ...y } : (y = String(y), b[h] = y !== "undefined" || s.has(h) ? y : i[h]);
      } else
        b[h] = i[h];
    const v = /* @__PURE__ */ new Set([...l]);
    for (const [h, y, x, N] of a.composers) {
      t.rules.styled.cache.has(h) || (t.rules.styled.cache.add(h), wa(y, [`.${h}`], [], e, (F) => {
        r.styled.apply(F);
      }));
      const P = En(x, b, e.media), M = En(N, b, e.media, !0);
      for (const F of P)
        if (F !== void 0)
          for (const [R, S, X] of F) {
            const ne = `${h}-${na(S)}-${R}`;
            v.add(ne);
            const ee = (X ? t.rules.resonevar : t.rules.onevar).cache, Ee = X ? r.resonevar : r.onevar;
            ee.has(ne) || (ee.add(ne), wa(S, [`.${ne}`], [], e, (Ae) => {
              Ee.apply(Ae);
            }));
          }
      for (const F of M)
        if (F !== void 0)
          for (const [R, S] of F) {
            const X = `${h}-${na(S)}-${R}`;
            v.add(X), t.rules.allvar.cache.has(X) || (t.rules.allvar.cache.add(X), wa(S, [`.${X}`], [], e, (ne) => {
              r.allvar.apply(ne);
            }));
          }
    }
    if (typeof c == "object" && c) {
      const h = `${n}-i${na(c)}-css`;
      v.add(h), t.rules.inline.cache.has(h) || (t.rules.inline.cache.add(h), wa(c, [`.${h}`], [], e, (y) => {
        r.inline.apply(y);
      }));
    }
    for (const h of String(m.className || "").trim().split(/\s+/))
      h && v.add(h);
    const C = p.className = [...v].join(" ");
    return { type: a.type, className: C, selector: d, props: p, toString: () => C, deferredInjector: u };
  };
  return Xt(_, { className: n, selector: d, [Qa]: a, toString: () => (t.rules.styled.cache.has(n) || _(), n) });
}, qo = (e) => {
  let a = "";
  const t = [], n = {}, l = [];
  for (const [i, , , , s, u] of e) {
    a === "" && (a = i), t.push(i), l.push(...u);
    for (const r in s) {
      const d = s[r];
      (n[r] === void 0 || d !== "undefined" || u.includes(d)) && (n[r] = d);
    }
  }
  return [a, t, n, new Set(l)];
}, En = (e, a, t, n) => {
  const l = [];
  e:
    for (let [i, s, u] of e) {
      if (u)
        continue;
      let r, d = 0, _ = !1;
      for (r in i) {
        const m = i[r];
        let c = a[r];
        if (c !== m) {
          if (typeof c != "object" || !c)
            continue e;
          {
            let p, b, v = 0;
            for (const C in c) {
              if (m === String(c[C])) {
                if (C !== "@initial") {
                  const h = C.slice(1);
                  (b = b || []).push(h in t ? t[h] : C.replace(/^@media ?/, "")), _ = !0;
                }
                d += v, p = !0;
              }
              ++v;
            }
            if (b && b.length && (s = { ["@media " + b.join(", ")]: s }), !p)
              continue e;
          }
        }
      }
      (l[d] = l[d] || []).push([n ? "cv" : `${r}-${i[r]}`, s, _]);
    }
  return l;
}, Qo = {}, ei = Fa(), ai = (e, a) => ei(e, () => (...t) => {
  const n = () => {
    for (let l of t) {
      l = typeof l == "object" && l || {};
      let i = na(l);
      if (!a.rules.global.cache.has(i)) {
        if (a.rules.global.cache.add(i), "@import" in l) {
          let s = [].indexOf.call(a.sheet.cssRules, a.rules.themed.group) - 1;
          for (let u of [].concat(l["@import"]))
            u = u.includes('"') || u.includes("'") ? u : `"${u}"`, a.sheet.insertRule(`@import ${u};`, s++);
          delete l["@import"];
        }
        wa(l, [], [], e, (s) => {
          a.rules.global.apply(s);
        });
      }
    }
    return "";
  };
  return Xt(n, { toString: n });
}), ti = Fa(), ni = (e, a) => ti(e, () => (t) => {
  const n = `${Fe(e.prefix)}k-${na(t)}`, l = () => {
    if (!a.rules.global.cache.has(n)) {
      a.rules.global.cache.add(n);
      const i = [];
      wa(t, [], [], e, (u) => i.push(u));
      const s = `@keyframes ${n}{${i.join("")}}`;
      a.rules.global.apply(s);
    }
    return n;
  };
  return Xt(l, { get name() {
    return l();
  }, toString: l });
}), li = class {
  constructor(e, a, t, n) {
    this.token = e == null ? "" : String(e), this.value = a == null ? "" : String(a), this.scale = t == null ? "" : String(t), this.prefix = n == null ? "" : String(n);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + Fe(this.prefix) + Fe(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, oi = Fa(), ii = (e, a) => oi(e, () => (t, n) => {
  n = typeof t == "object" && t || Object(n);
  const l = `.${t = (t = typeof t == "string" ? t : "") || `${Fe(e.prefix)}t-${na(n)}`}`, i = {}, s = [];
  for (const r in n) {
    i[r] = {};
    for (const d in n[r]) {
      const _ = `--${Fe(e.prefix)}${r}-${d}`, m = Xn(String(n[r][d]), e.prefix, r);
      i[r][d] = new li(d, m, r, e.prefix), s.push(`${_}:${m}`);
    }
  }
  const u = () => {
    if (s.length && !a.rules.themed.cache.has(t)) {
      a.rules.themed.cache.add(t);
      const r = `${n === e.theme ? ":root," : ""}.${t}{${s.join(";")}}`;
      a.rules.themed.apply(r);
    }
    return t;
  };
  return { ...i, get className() {
    return u();
  }, selector: l, toString: u };
}), ri = Fa(), $t = (e) => {
  let a = !1;
  const t = ri(e, (n) => {
    a = !0;
    const l = "prefix" in (n = typeof n == "object" && n || {}) ? String(n.prefix) : "", i = typeof n.media == "object" && n.media || {}, s = typeof n.root == "object" ? n.root || null : globalThis.document || null, u = typeof n.theme == "object" && n.theme || {}, r = { prefix: l, media: i, theme: u, themeMap: typeof n.themeMap == "object" && n.themeMap || { ...Ro }, utils: typeof n.utils == "object" && n.utils || {} }, d = Ho(s), _ = { css: Zo(r, d), globalCss: ai(r, d), keyframes: ni(r, d), createTheme: ii(r, d), reset() {
      d.reset(), _.theme.toString();
    }, theme: {}, sheet: d, config: r, prefix: l, getCssText: d.toString, toString: d.toString };
    return String(_.theme = _.createTheme(u)), _;
  });
  return a || t.reset(), t;
}, qn = () => gn || (gn = $t()), si = (...e) => qn().createTheme(...e), xe = (...e) => qn().css(...e), Ja = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ui(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var at = { exports: {} };
at.exports;
(function(e, a) {
  var t = 200, n = "__lodash_hash_undefined__", l = 9007199254740991, i = "[object Arguments]", s = "[object Array]", u = "[object Boolean]", r = "[object Date]", d = "[object Error]", _ = "[object Function]", m = "[object GeneratorFunction]", c = "[object Map]", p = "[object Number]", b = "[object Object]", v = "[object Promise]", C = "[object RegExp]", h = "[object Set]", y = "[object String]", x = "[object Symbol]", N = "[object WeakMap]", P = "[object ArrayBuffer]", M = "[object DataView]", F = "[object Float32Array]", R = "[object Float64Array]", S = "[object Int8Array]", X = "[object Int16Array]", ne = "[object Int32Array]", ee = "[object Uint8Array]", Ee = "[object Uint8ClampedArray]", Ae = "[object Uint16Array]", Ke = "[object Uint32Array]", Ea = /[\\^$.*+?()[\]{}|]/g, Ye = /\w*$/, Ze = /^\[object .+?Constructor\]$/, pt = /^(?:0|[1-9]\d*)$/, Z = {};
  Z[i] = Z[s] = Z[P] = Z[M] = Z[u] = Z[r] = Z[F] = Z[R] = Z[S] = Z[X] = Z[ne] = Z[c] = Z[p] = Z[b] = Z[C] = Z[h] = Z[y] = Z[x] = Z[ee] = Z[Ee] = Z[Ae] = Z[Ke] = !0, Z[d] = Z[_] = Z[N] = !1;
  var dt = typeof Ja == "object" && Ja && Ja.Object === Object && Ja, Me = typeof self == "object" && self && self.Object === Object && self, ye = dt || Me || Function("return this")(), $a = a && !a.nodeType && a, Va = $a && !0 && e && !e.nodeType && e, mt = Va && Va.exports === $a;
  function ft(o, f) {
    return o.set(f[0], f[1]), o;
  }
  function tn(o, f) {
    return o.add(f), o;
  }
  function bt(o, f) {
    for (var w = -1, I = o ? o.length : 0; ++w < I && f(o[w], w, o) !== !1; )
      ;
    return o;
  }
  function gt(o, f) {
    for (var w = -1, I = f.length, se = o.length; ++w < I; )
      o[se + w] = f[w];
    return o;
  }
  function za(o, f, w, I) {
    var se = -1, de = o ? o.length : 0;
    for (I && de && (w = o[++se]); ++se < de; )
      w = f(w, o[se], se, o);
    return w;
  }
  function ht(o, f) {
    for (var w = -1, I = Array(o); ++w < o; )
      I[w] = f(w);
    return I;
  }
  function wt(o, f) {
    return o == null ? void 0 : o[f];
  }
  function Ba(o) {
    var f = !1;
    if (o != null && typeof o.toString != "function")
      try {
        f = !!(o + "");
      } catch {
      }
    return f;
  }
  function ja(o) {
    var f = -1, w = Array(o.size);
    return o.forEach(function(I, se) {
      w[++f] = [se, I];
    }), w;
  }
  function ya(o, f) {
    return function(w) {
      return o(f(w));
    };
  }
  function Ca(o) {
    var f = -1, w = Array(o.size);
    return o.forEach(function(I) {
      w[++f] = I;
    }), w;
  }
  var vt = Array.prototype, kt = Function.prototype, _a = Object.prototype, Ta = ye["__core-js_shared__"], Ua = function() {
    var o = /[^.]+$/.exec(Ta && Ta.keys && Ta.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), Wa = kt.toString, Oe = _a.hasOwnProperty, pa = _a.toString, ae = RegExp(
    "^" + Wa.call(Oe).replace(Ea, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), g = mt ? ye.Buffer : void 0, k = ye.Symbol, z = ye.Uint8Array, q = ya(Object.getPrototypeOf, Object), Ie = Object.create, da = _a.propertyIsEnumerable, ze = vt.splice, Le = Object.getOwnPropertySymbols, Et = g ? g.isBuffer : void 0, Ga = ya(Object.keys, Object), yt = ba(ye, "DataView"), Sa = ba(ye, "Map"), Ct = ba(ye, "Promise"), Tt = ba(ye, "Set"), St = ba(ye, "WeakMap"), Na = ba(Object, "create"), Cl = qe(yt), Tl = qe(Sa), Sl = qe(Ct), Nl = qe(Tt), Ol = qe(St), nn = k ? k.prototype : void 0, ln = nn ? nn.valueOf : void 0;
  function Je(o) {
    var f = -1, w = o ? o.length : 0;
    for (this.clear(); ++f < w; ) {
      var I = o[f];
      this.set(I[0], I[1]);
    }
  }
  function Il() {
    this.__data__ = Na ? Na(null) : {};
  }
  function Ll(o) {
    return this.has(o) && delete this.__data__[o];
  }
  function xl(o) {
    var f = this.__data__;
    if (Na) {
      var w = f[o];
      return w === n ? void 0 : w;
    }
    return Oe.call(f, o) ? f[o] : void 0;
  }
  function Al(o) {
    var f = this.__data__;
    return Na ? f[o] !== void 0 : Oe.call(f, o);
  }
  function Ml(o, f) {
    var w = this.__data__;
    return w[o] = Na && f === void 0 ? n : f, this;
  }
  Je.prototype.clear = Il, Je.prototype.delete = Ll, Je.prototype.get = xl, Je.prototype.has = Al, Je.prototype.set = Ml;
  function Pe(o) {
    var f = -1, w = o ? o.length : 0;
    for (this.clear(); ++f < w; ) {
      var I = o[f];
      this.set(I[0], I[1]);
    }
  }
  function Pl() {
    this.__data__ = [];
  }
  function Rl(o) {
    var f = this.__data__, w = Ha(f, o);
    if (w < 0)
      return !1;
    var I = f.length - 1;
    return w == I ? f.pop() : ze.call(f, w, 1), !0;
  }
  function Dl(o) {
    var f = this.__data__, w = Ha(f, o);
    return w < 0 ? void 0 : f[w][1];
  }
  function Fl(o) {
    return Ha(this.__data__, o) > -1;
  }
  function $l(o, f) {
    var w = this.__data__, I = Ha(w, o);
    return I < 0 ? w.push([o, f]) : w[I][1] = f, this;
  }
  Pe.prototype.clear = Pl, Pe.prototype.delete = Rl, Pe.prototype.get = Dl, Pe.prototype.has = Fl, Pe.prototype.set = $l;
  function ma(o) {
    var f = -1, w = o ? o.length : 0;
    for (this.clear(); ++f < w; ) {
      var I = o[f];
      this.set(I[0], I[1]);
    }
  }
  function Vl() {
    this.__data__ = {
      hash: new Je(),
      map: new (Sa || Pe)(),
      string: new Je()
    };
  }
  function zl(o) {
    return Ka(this, o).delete(o);
  }
  function Bl(o) {
    return Ka(this, o).get(o);
  }
  function jl(o) {
    return Ka(this, o).has(o);
  }
  function Ul(o, f) {
    return Ka(this, o).set(o, f), this;
  }
  ma.prototype.clear = Vl, ma.prototype.delete = zl, ma.prototype.get = Bl, ma.prototype.has = jl, ma.prototype.set = Ul;
  function fa(o) {
    this.__data__ = new Pe(o);
  }
  function Wl() {
    this.__data__ = new Pe();
  }
  function Gl(o) {
    return this.__data__.delete(o);
  }
  function Hl(o) {
    return this.__data__.get(o);
  }
  function Kl(o) {
    return this.__data__.has(o);
  }
  function Yl(o, f) {
    var w = this.__data__;
    if (w instanceof Pe) {
      var I = w.__data__;
      if (!Sa || I.length < t - 1)
        return I.push([o, f]), this;
      w = this.__data__ = new ma(I);
    }
    return w.set(o, f), this;
  }
  fa.prototype.clear = Wl, fa.prototype.delete = Gl, fa.prototype.get = Hl, fa.prototype.has = Kl, fa.prototype.set = Yl;
  function Zl(o, f) {
    var w = It(o) || vo(o) ? ht(o.length, String) : [], I = w.length, se = !!I;
    for (var de in o)
      (f || Oe.call(o, de)) && !(se && (de == "length" || bo(de, I))) && w.push(de);
    return w;
  }
  function on(o, f, w) {
    var I = o[f];
    (!(Oe.call(o, f) && cn(I, w)) || w === void 0 && !(f in o)) && (o[f] = w);
  }
  function Ha(o, f) {
    for (var w = o.length; w--; )
      if (cn(o[w][0], f))
        return w;
    return -1;
  }
  function Jl(o, f) {
    return o && rn(f, Lt(f), o);
  }
  function Nt(o, f, w, I, se, de, Ce) {
    var he;
    if (I && (he = de ? I(o, se, de, Ce) : I(o)), he !== void 0)
      return he;
    if (!Ya(o))
      return o;
    var dn = It(o);
    if (dn) {
      if (he = po(o), !f)
        return uo(o, he);
    } else {
      var ga = Xe(o), mn = ga == _ || ga == m;
      if (Eo(o))
        return to(o, f);
      if (ga == b || ga == i || mn && !de) {
        if (Ba(o))
          return de ? o : {};
        if (he = mo(mn ? {} : o), !f)
          return co(o, Jl(he, o));
      } else {
        if (!Z[ga])
          return de ? o : {};
        he = fo(o, ga, Nt, f);
      }
    }
    Ce || (Ce = new fa());
    var fn = Ce.get(o);
    if (fn)
      return fn;
    if (Ce.set(o, he), !dn)
      var bn = w ? _o(o) : Lt(o);
    return bt(bn || o, function(xt, Za) {
      bn && (Za = xt, xt = o[Za]), on(he, Za, Nt(xt, f, w, I, Za, o, Ce));
    }), he;
  }
  function Xl(o) {
    return Ya(o) ? Ie(o) : {};
  }
  function ql(o, f, w) {
    var I = f(o);
    return It(o) ? I : gt(I, w(o));
  }
  function Ql(o) {
    return pa.call(o);
  }
  function eo(o) {
    if (!Ya(o) || ho(o))
      return !1;
    var f = pn(o) || Ba(o) ? ae : Ze;
    return f.test(qe(o));
  }
  function ao(o) {
    if (!un(o))
      return Ga(o);
    var f = [];
    for (var w in Object(o))
      Oe.call(o, w) && w != "constructor" && f.push(w);
    return f;
  }
  function to(o, f) {
    if (f)
      return o.slice();
    var w = new o.constructor(o.length);
    return o.copy(w), w;
  }
  function Ot(o) {
    var f = new o.constructor(o.byteLength);
    return new z(f).set(new z(o)), f;
  }
  function no(o, f) {
    var w = f ? Ot(o.buffer) : o.buffer;
    return new o.constructor(w, o.byteOffset, o.byteLength);
  }
  function lo(o, f, w) {
    var I = f ? w(ja(o), !0) : ja(o);
    return za(I, ft, new o.constructor());
  }
  function oo(o) {
    var f = new o.constructor(o.source, Ye.exec(o));
    return f.lastIndex = o.lastIndex, f;
  }
  function io(o, f, w) {
    var I = f ? w(Ca(o), !0) : Ca(o);
    return za(I, tn, new o.constructor());
  }
  function ro(o) {
    return ln ? Object(ln.call(o)) : {};
  }
  function so(o, f) {
    var w = f ? Ot(o.buffer) : o.buffer;
    return new o.constructor(w, o.byteOffset, o.length);
  }
  function uo(o, f) {
    var w = -1, I = o.length;
    for (f || (f = Array(I)); ++w < I; )
      f[w] = o[w];
    return f;
  }
  function rn(o, f, w, I) {
    w || (w = {});
    for (var se = -1, de = f.length; ++se < de; ) {
      var Ce = f[se], he = I ? I(w[Ce], o[Ce], Ce, w, o) : void 0;
      on(w, Ce, he === void 0 ? o[Ce] : he);
    }
    return w;
  }
  function co(o, f) {
    return rn(o, sn(o), f);
  }
  function _o(o) {
    return ql(o, Lt, sn);
  }
  function Ka(o, f) {
    var w = o.__data__;
    return go(f) ? w[typeof f == "string" ? "string" : "hash"] : w.map;
  }
  function ba(o, f) {
    var w = wt(o, f);
    return eo(w) ? w : void 0;
  }
  var sn = Le ? ya(Le, Object) : To, Xe = Ql;
  (yt && Xe(new yt(new ArrayBuffer(1))) != M || Sa && Xe(new Sa()) != c || Ct && Xe(Ct.resolve()) != v || Tt && Xe(new Tt()) != h || St && Xe(new St()) != N) && (Xe = function(o) {
    var f = pa.call(o), w = f == b ? o.constructor : void 0, I = w ? qe(w) : void 0;
    if (I)
      switch (I) {
        case Cl:
          return M;
        case Tl:
          return c;
        case Sl:
          return v;
        case Nl:
          return h;
        case Ol:
          return N;
      }
    return f;
  });
  function po(o) {
    var f = o.length, w = o.constructor(f);
    return f && typeof o[0] == "string" && Oe.call(o, "index") && (w.index = o.index, w.input = o.input), w;
  }
  function mo(o) {
    return typeof o.constructor == "function" && !un(o) ? Xl(q(o)) : {};
  }
  function fo(o, f, w, I) {
    var se = o.constructor;
    switch (f) {
      case P:
        return Ot(o);
      case u:
      case r:
        return new se(+o);
      case M:
        return no(o, I);
      case F:
      case R:
      case S:
      case X:
      case ne:
      case ee:
      case Ee:
      case Ae:
      case Ke:
        return so(o, I);
      case c:
        return lo(o, I, w);
      case p:
      case y:
        return new se(o);
      case C:
        return oo(o);
      case h:
        return io(o, I, w);
      case x:
        return ro(o);
    }
  }
  function bo(o, f) {
    return f = f ?? l, !!f && (typeof o == "number" || pt.test(o)) && o > -1 && o % 1 == 0 && o < f;
  }
  function go(o) {
    var f = typeof o;
    return f == "string" || f == "number" || f == "symbol" || f == "boolean" ? o !== "__proto__" : o === null;
  }
  function ho(o) {
    return !!Ua && Ua in o;
  }
  function un(o) {
    var f = o && o.constructor, w = typeof f == "function" && f.prototype || _a;
    return o === w;
  }
  function qe(o) {
    if (o != null) {
      try {
        return Wa.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function wo(o) {
    return Nt(o, !0, !0);
  }
  function cn(o, f) {
    return o === f || o !== o && f !== f;
  }
  function vo(o) {
    return ko(o) && Oe.call(o, "callee") && (!da.call(o, "callee") || pa.call(o) == i);
  }
  var It = Array.isArray;
  function _n(o) {
    return o != null && yo(o.length) && !pn(o);
  }
  function ko(o) {
    return Co(o) && _n(o);
  }
  var Eo = Et || So;
  function pn(o) {
    var f = Ya(o) ? pa.call(o) : "";
    return f == _ || f == m;
  }
  function yo(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= l;
  }
  function Ya(o) {
    var f = typeof o;
    return !!o && (f == "object" || f == "function");
  }
  function Co(o) {
    return !!o && typeof o == "object";
  }
  function Lt(o) {
    return _n(o) ? Zl(o) : ao(o);
  }
  function To() {
    return [];
  }
  function So() {
    return !1;
  }
  e.exports = wo;
})(at, at.exports);
var ci = at.exports;
const Xa = /* @__PURE__ */ ui(ci), Ge = Symbol("AuthView"), _i = Symbol("UserContextProvider"), pi = /* @__PURE__ */ te({
  __name: "SocialAuthContainer",
  props: {
    theme: {},
    className: {},
    appearance: {}
  },
  setup(e) {
    const a = e, t = ia(), n = Y(() => {
      var l, i, s, u;
      return a.theme !== "default" ? si(
        Dt(
          (i = (l = a.appearance) == null ? void 0 : l.theme) == null ? void 0 : i[a.theme],
          ((u = (s = a.appearance) == null ? void 0 : s.variables) == null ? void 0 : u[a.theme]) ?? {}
        )
      ).className : "";
    });
    return (l, i) => (T(), $(ra("div"), Ue(E(t), { class: n.value }), {
      default: A(() => [
        We(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), aa = /* @__PURE__ */ te({
  __name: "Anchor",
  props: {
    appearance: {}
  },
  setup(e) {
    const a = xe({
      fontFamily: "$bodyFontFamily",
      fontSize: "$baseBodySize",
      marginBottom: "$anchorBottomMargin",
      color: "$anchorTextColor",
      display: "block",
      textAlign: "center",
      textDecoration: "underline",
      "&:hover": {
        color: "$anchorTextHoverColor"
      }
    }), t = e, n = ia(), l = Y(() => sa(
      "anchor",
      a(),
      t.appearance
    ).join(" "));
    return (i, s) => {
      var u, r;
      return T(), $(ra("a"), Ue(E(n), {
        class: l.value,
        style: (r = (u = i.appearance) == null ? void 0 : u.style) == null ? void 0 : r.anchor
      }), {
        default: A(() => [
          We(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
}), di = ["disabled"], ua = /* @__PURE__ */ te({
  __name: "Button",
  props: {
    appearance: {},
    icon: {},
    color: { default: "default" },
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const a = xe({
      fontFamily: "$buttonFontFamily",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      borderRadius: "$borderRadiusButton",
      fontSize: "$baseButtonSize",
      padding: "$buttonPadding",
      cursor: "pointer",
      borderWidth: "$buttonBorderWidth",
      borderStyle: "solid",
      width: "100%",
      transitionProperty: "background-color",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "100ms",
      "&:disabled": {
        opacity: 0.7,
        cursor: "unset"
      },
      variants: {
        color: {
          default: {
            backgroundColor: "$defaultButtonBackground",
            color: "$defaultButtonText",
            borderColor: "$defaultButtonBorder",
            "&:hover:not(:disabled)": {
              backgroundColor: "$defaultButtonBackgroundHover"
            }
          },
          primary: {
            backgroundColor: "$brand",
            color: "$brandButtonText",
            borderColor: "$brandAccent",
            "&:hover:not(:disabled)": {
              backgroundColor: "$brandAccent"
            }
          }
        }
      }
    }), t = e, n = ia(), l = Y(() => sa(
      "button",
      a({ color: t.color }),
      t.appearance
    ).join(" "));
    return (i, s) => {
      var u, r;
      return T(), V("button", Ue(E(n), {
        class: l.value,
        style: (r = (u = i.appearance) == null ? void 0 : u.style) == null ? void 0 : r.button,
        disabled: i.loading
      }), [
        We(i.$slots, "icon"),
        We(i.$slots, "default")
      ], 16, di);
    };
  }
}), Ne = /* @__PURE__ */ te({
  __name: "Container",
  props: {
    is: { default: "div" },
    direction: {},
    gap: {},
    appearance: {}
  },
  setup(e) {
    const a = xe({
      display: "flex",
      gap: "4px",
      variants: {
        direction: {
          horizontal: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(48px, 1fr))"
          },
          vertical: {
            flexDirection: "column",
            margin: "8px 0"
          }
        },
        gap: {
          small: {
            gap: "4px"
          },
          medium: {
            gap: "8px"
          },
          large: {
            gap: "16px"
          }
        }
      }
    }), t = e, n = Y(() => sa(
      "container",
      a({
        direction: t.direction,
        gap: t.gap
      }),
      t.appearance
    ).join(" "));
    return (l, i) => {
      var s, u;
      return T(), $(ra(l.is), {
        class: Pt(n.value),
        style: No((u = (s = l.appearance) == null ? void 0 : s.style) == null ? void 0 : u.container)
      }, {
        default: A(() => [
          We(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
}), mi = /* @__PURE__ */ te({
  __name: "Divider",
  props: {
    appearance: {}
  },
  setup(e) {
    const a = xe({
      background: "$dividerBackground",
      display: "block",
      margin: "16px 0",
      height: "1px",
      width: "100%"
    }), t = e, n = ia(), l = Y(() => sa(
      "divider",
      a(),
      t.appearance
    ).join(" "));
    return (i, s) => {
      var u, r;
      return T(), $(ra("div"), Ue(E(n), {
        class: l.value,
        style: (r = (u = i.appearance) == null ? void 0 : u.style) == null ? void 0 : r.divider
      }), {
        default: A(() => [
          We(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
}), fi = ["type", "value"], bi = ["aria-label", "aria-pressed"], gi = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, hi = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, wi = ["type", "value"], Be = /* @__PURE__ */ te({
  inheritAttrs: !1,
  __name: "Input",
  props: {
    type: {},
    appearance: {},
    modelValue: {},
    showLabel: { default: "Show password" },
    hideLabel: { default: "Hide password" }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const a = xe({
      fontFamily: "$inputFontFamily",
      background: "$inputBackground",
      borderRadius: "$inputBorderRadius",
      padding: "$inputPadding",
      cursor: "text",
      borderWidth: "$inputBorderWidth",
      borderColor: "$inputBorder",
      borderStyle: "solid",
      fontSize: "$baseInputSize",
      width: "100%",
      color: "$inputText",
      boxSizing: "border-box",
      "&:hover": {
        borderColor: "$inputBorderHover",
        outline: "none"
      },
      "&:focus": {
        borderColor: "$inputBorderFocus",
        outline: "none"
      },
      "&::placeholder": {
        color: "$inputPlaceholder",
        letterSpacing: "initial"
      },
      transitionProperty: "background-color, border",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDuration: "100ms",
      variants: {
        type: {
          default: {
            letterSpacing: "0px"
          },
          password: {
            letterSpacing: "6px"
          }
        }
      }
    }), t = xe({
      position: "relative",
      width: "100%"
    }), n = xe({
      // leave room for the toggle button so text doesn't sit underneath it
      paddingInlineEnd: "40px"
    }), l = xe({
      position: "absolute",
      insetInlineEnd: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0",
      margin: "0",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      color: "$inputText",
      opacity: 0.7,
      "&:hover": {
        opacity: 1
      },
      "&:focus-visible": {
        outline: "none",
        opacity: 1
      }
    }), i = e, s = ia(), u = W(!1), r = Y(
      () => i.type === "password" ? u.value ? "text" : "password" : i.type
    ), d = Y(() => {
      const c = sa(
        "input",
        a({
          // keep the wide masking spacing only while the value is masked
          type: r.value === "password" ? "password" : "default"
        }),
        i.appearance
      );
      return i.type === "password" && c.push(n().toString()), c.join(" ");
    }), _ = Y(() => t().toString()), m = Y(() => l().toString());
    return (c, p) => {
      var b, v, C, h;
      return c.type === "password" ? (T(), V("div", {
        key: 0,
        class: Pt(_.value)
      }, [
        D("input", Ue(E(s), {
          type: r.value,
          class: d.value,
          style: (v = (b = c.appearance) == null ? void 0 : b.style) == null ? void 0 : v.input,
          value: c.modelValue,
          onInput: p[0] || (p[0] = (y) => c.$emit("update:modelValue", (y == null ? void 0 : y.target).value))
        }), null, 16, fi),
        D("button", {
          type: "button",
          class: Pt(m.value),
          "aria-label": u.value ? c.hideLabel : c.showLabel,
          "aria-pressed": u.value,
          onClick: p[1] || (p[1] = ge((y) => u.value = !u.value, ["prevent"]))
        }, [
          u.value ? (T(), V("svg", gi, p[3] || (p[3] = [
            D("path", { d: "M9.88 9.88a3 3 0 0 0 4.24 4.24M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" }, null, -1),
            D("path", { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" }, null, -1),
            D("line", {
              x1: "2",
              y1: "2",
              x2: "22",
              y2: "22"
            }, null, -1)
          ]))) : (T(), V("svg", hi, p[4] || (p[4] = [
            D("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }, null, -1),
            D("circle", {
              cx: "12",
              cy: "12",
              r: "3"
            }, null, -1)
          ])))
        ], 10, bi)
      ], 2)) : (T(), V("input", Ue({ key: 1 }, E(s), {
        type: c.type,
        class: d.value,
        style: (h = (C = c.appearance) == null ? void 0 : C.style) == null ? void 0 : h.input,
        value: c.modelValue,
        onInput: p[2] || (p[2] = (y) => c.$emit("update:modelValue", (y == null ? void 0 : y.target).value))
      }), null, 16, wi));
    };
  }
}), je = /* @__PURE__ */ te({
  __name: "Label",
  props: {
    appearance: {}
  },
  setup(e) {
    const a = xe({
      fontFamily: "$labelFontFamily",
      fontSize: "$baseLabelSize",
      marginBottom: "$labelBottomMargin",
      color: "$inputLabelText",
      display: "block"
    }), t = e, n = ia(), l = Y(() => sa(
      "label",
      a(),
      t.appearance
    ).join(" "));
    return (i, s) => {
      var u, r;
      return T(), $(ra("label"), Ue(E(n), {
        class: l.value,
        style: (r = (u = i.appearance) == null ? void 0 : u.style) == null ? void 0 : r.label
      }), {
        default: A(() => [
          We(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
}), Se = /* @__PURE__ */ te({
  __name: "Message",
  props: {
    color: { default: "default" },
    appearance: {}
  },
  setup(e) {
    const a = xe({
      fontFamily: "$bodyFontFamily",
      fontSize: "$baseBodySize",
      marginBottom: "$labelBottomMargin",
      display: "block",
      textAlign: "center",
      variants: {
        color: {
          default: {
            color: "$messageText"
          },
          danger: {
            color: "$messageTextDanger"
          }
        }
      }
    }), t = e, n = ia(), l = Y(() => sa(
      "message",
      a({ color: t.color }),
      t.appearance
    ).join(" "));
    return (i, s) => {
      var u, r;
      return T(), $(ra("span"), Ue(E(n), {
        class: l.value,
        style: (r = (u = i.appearance) == null ? void 0 : u.style) == null ? void 0 : r.message
      }), {
        default: A(() => [
          We(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
});
function ca(e, a) {
  const t = Zn(e, a);
  if (!t)
    throw new Error(`Could not resolve ${e.description}`);
  return t;
}
const vi = ["id"], ki = /* @__PURE__ */ te({
  __name: "EmailAuth",
  props: {
    appearance: {},
    supabaseClient: {},
    defaultEmail: {},
    defaultPassword: {},
    redirectTo: {},
    magicLink: { type: Boolean },
    showLinks: { type: Boolean },
    i18n: {},
    additionalData: {},
    options: {}
  },
  emits: ["auth:submit", "auth:error"],
  setup(e, { emit: a }) {
    const t = e, n = W(""), l = W(""), i = W(""), s = W(""), u = W(!1), { authView: r, setAuthView: d } = ca(Ge), _ = Y(
      () => {
        var p;
        return (p = t.i18n) == null ? void 0 : p[r.value];
      }
    ), m = a, c = async (p) => {
      var b, v;
      switch (i.value = "", s.value = "", u.value = !0, m("auth:submit", {
        email: n.value,
        password: l.value,
        view: r.value
      }), r.value) {
        case "sign_in":
          const {
            // data: { user: signInUser, session: signInSession },
            error: C
          } = await t.supabaseClient.auth.signInWithPassword({
            email: n.value,
            password: l.value,
            options: t.options
          });
          C && (i.value = C.message, m("auth:error", C)), u.value = !1;
          break;
        case "sign_up":
          let h = {
            emailRedirectTo: t.redirectTo
          };
          t.additionalData && (h.data = t.additionalData);
          const {
            data: { user: y, session: x },
            error: N
          } = await t.supabaseClient.auth.signUp({
            email: n.value,
            password: l.value,
            options: {
              ...t.options ?? {},
              ...h
            }
          });
          N ? (i.value = N.message, m("auth:error", N)) : y && !x && (s.value = (v = (b = t.i18n) == null ? void 0 : b.sign_up) == null ? void 0 : v.confirmation_text), u.value = !1;
      }
    };
    return xa(
      () => r.value,
      () => {
        u.value = !1;
      }
    ), (p, b) => (T(), V("form", {
      id: `auth-${E(r)}`,
      onSubmit: ge(c, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      U(E(Ne), {
        direction: "vertical",
        gap: "large",
        appearance: p.appearance
      }, {
        default: A(() => [
          U(E(Ne), {
            direction: "vertical",
            gap: "large",
            appearance: p.appearance
          }, {
            default: A(() => {
              var v, C, h, y;
              return [
                D("div", null, [
                  U(E(je), {
                    htmlFor: "email",
                    appearance: p.appearance
                  }, {
                    default: A(() => {
                      var x;
                      return [
                        B(j((x = _.value) == null ? void 0 : x.email_label), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["appearance"]),
                  U(E(Be), {
                    id: "email",
                    type: "email",
                    name: "email",
                    modelValue: n.value,
                    "onUpdate:modelValue": b[0] || (b[0] = (x) => n.value = x),
                    placeholder: (v = _.value) == null ? void 0 : v.email_input_placeholder,
                    autoComplete: "email",
                    appearance: p.appearance
                  }, null, 8, ["modelValue", "placeholder", "appearance"])
                ]),
                D("div", null, [
                  U(E(je), {
                    htmlFor: "password",
                    appearance: p.appearance
                  }, {
                    default: A(() => {
                      var x;
                      return [
                        B(j((x = _.value) == null ? void 0 : x.password_label), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["appearance"]),
                  U(E(Be), {
                    id: "password",
                    type: "password",
                    name: "password",
                    modelValue: l.value,
                    "onUpdate:modelValue": b[1] || (b[1] = (x) => l.value = x),
                    placeholder: (C = _.value) == null ? void 0 : C.password_input_placeholder,
                    autoComplete: E(r) === "sign_in" ? "current-password" : "new-password",
                    appearance: p.appearance,
                    showLabel: (h = p.i18n) == null ? void 0 : h.password_show,
                    hideLabel: (y = p.i18n) == null ? void 0 : y.password_hide
                  }, null, 8, ["modelValue", "placeholder", "autoComplete", "appearance", "showLabel", "hideLabel"])
                ])
              ];
            }),
            _: 1
          }, 8, ["appearance"]),
          U(E(ua), {
            type: "submit",
            color: "primary",
            loading: u.value,
            appearance: p.appearance
          }, {
            default: A(() => {
              var v, C;
              return [
                B(j(u.value ? (v = _.value) == null ? void 0 : v.loading_button_label : (C = _.value) == null ? void 0 : C.button_label), 1)
              ];
            }),
            _: 1
          }, 8, ["loading", "appearance"]),
          p.showLinks ? (T(), $(E(Ne), {
            key: 0,
            direction: "vertical",
            gap: "small",
            appearance: p.appearance
          }, {
            default: A(() => [
              E(r) === E(fe).SIGN_IN && p.magicLink ? (T(), $(E(aa), {
                key: 0,
                href: "#auth-magic-link",
                appearance: p.appearance,
                onClick: b[2] || (b[2] = ge((v) => E(d)(E(fe).MAGIC_LINK), ["prevent"]))
              }, {
                default: A(() => {
                  var v, C;
                  return [
                    B(j((C = (v = p.i18n) == null ? void 0 : v.magic_link) == null ? void 0 : C.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"])) : K("", !0),
              E(r) === E(fe).SIGN_IN ? (T(), $(E(aa), {
                key: 1,
                href: "#auth-forgot-password",
                appearance: p.appearance,
                onClick: b[3] || (b[3] = ge((v) => E(d)(E(fe).FORGOTTEN_PASSWORD), ["prevent"]))
              }, {
                default: A(() => {
                  var v, C;
                  return [
                    B(j((C = (v = p.i18n) == null ? void 0 : v.forgotten_password) == null ? void 0 : C.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"])) : K("", !0),
              E(r) === E(fe).SIGN_IN ? (T(), $(E(aa), {
                key: 2,
                href: "#auth-sign-up",
                appearance: p.appearance,
                onClick: b[4] || (b[4] = ge((v) => E(d)(E(fe).SIGN_UP), ["prevent"]))
              }, {
                default: A(() => {
                  var v, C;
                  return [
                    B(j((C = (v = p.i18n) == null ? void 0 : v.sign_up) == null ? void 0 : C.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"])) : (T(), $(E(aa), {
                key: 3,
                href: "#auth-sign-in",
                appearance: p.appearance,
                onClick: b[5] || (b[5] = ge((v) => E(d)(E(fe).SIGN_IN), ["prevent"]))
              }, {
                default: A(() => {
                  var v, C;
                  return [
                    B(j((C = (v = p.i18n) == null ? void 0 : v.sign_in) == null ? void 0 : C.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]))
            ]),
            _: 1
          }, 8, ["appearance"])) : K("", !0)
        ]),
        _: 1
      }, 8, ["appearance"]),
      s.value ? (T(), $(E(Se), {
        key: 0,
        appearance: p.appearance
      }, {
        default: A(() => [
          B(j(s.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0),
      i.value ? (T(), $(E(Se), {
        key: 1,
        color: "danger",
        appearance: p.appearance
      }, {
        default: A(() => [
          B(j(i.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0)
    ], 40, vi));
  }
}), re = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [n, l] of a)
    t[n] = l;
  return t;
}, Ei = {}, yi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Ci(e, a) {
  return T(), V("svg", yi, a[0] || (a[0] = [
    D("path", {
      fill: "#FFC107",
      d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    }, null, -1),
    D("path", {
      fill: "#FF3D00",
      d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    }, null, -1),
    D("path", {
      fill: "#4CAF50",
      d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    }, null, -1),
    D("path", {
      fill: "#1976D2",
      d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    }, null, -1)
  ]));
}
const Ti = /* @__PURE__ */ re(Ei, [["render", Ci]]), Si = {}, Ni = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Oi(e, a) {
  return T(), V("svg", Ni, a[0] || (a[0] = [
    D("path", {
      fill: "#039be5",
      d: "M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
    }, null, -1),
    D("path", {
      fill: "#fff",
      d: "M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
    }, null, -1)
  ]));
}
const Ii = /* @__PURE__ */ re(Si, [["render", Oi]]), Li = {}, xi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Ai(e, a) {
  return T(), V("svg", xi, a[0] || (a[0] = [
    D("path", {
      fill: "#03A9F4",
      d: "M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
    }, null, -1)
  ]));
}
const Mi = /* @__PURE__ */ re(Li, [["render", Ai]]), Pi = {}, Ri = {
  fill: "gray",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "21px",
  height: "21px"
};
function Di(e, a) {
  return T(), V("svg", Ri, a[0] || (a[0] = [
    D("path", { d: "M 15.904297 1.078125 C 15.843359 1.06875 15.774219 1.0746094 15.699219 1.0996094 C 14.699219 1.2996094 13.600391 1.8996094 12.900391 2.5996094 C 12.300391 3.1996094 11.800781 4.1996094 11.800781 5.0996094 C 11.800781 5.2996094 11.999219 5.5 12.199219 5.5 C 13.299219 5.4 14.399609 4.7996094 15.099609 4.0996094 C 15.699609 3.2996094 16.199219 2.4 16.199219 1.5 C 16.199219 1.275 16.087109 1.10625 15.904297 1.078125 z M 16.199219 5.4003906 C 14.399219 5.4003906 13.600391 6.5 12.400391 6.5 C 11.100391 6.5 9.9003906 5.5 8.4003906 5.5 C 6.3003906 5.5 3.0996094 7.4996094 3.0996094 12.099609 C 2.9996094 16.299609 6.8 21 9 21 C 10.3 21 10.600391 20.199219 12.400391 20.199219 C 14.200391 20.199219 14.600391 21 15.900391 21 C 17.400391 21 18.500391 19.399609 19.400391 18.099609 C 19.800391 17.399609 20.100391 17.000391 20.400391 16.400391 C 20.600391 16.000391 20.4 15.600391 20 15.400391 C 17.4 14.100391 16.900781 9.9003906 19.800781 8.4003906 C 20.300781 8.1003906 20.4 7.4992188 20 7.1992188 C 18.9 6.1992187 17.299219 5.4003906 16.199219 5.4003906 z" }, null, -1)
  ]));
}
const Fi = /* @__PURE__ */ re(Pi, [["render", Di]]), $i = {}, Vi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21.34",
  height: "21",
  viewBox: "0 0 256 384"
};
function zi(e, a) {
  return T(), V("svg", Vi, a[0] || (a[0] = [
    Da('<path fill="#0ACF83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z"></path><path fill="#A259FF" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z"></path><path fill="#F24E1E" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z"></path><path fill="#FF7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z"></path><path fill="#1ABCFE" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64Z"></path>', 5)
  ]));
}
const Bi = /* @__PURE__ */ re($i, [["render", zi]]), ji = {}, Ui = {
  fill: "gray",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 30 30",
  width: "21px",
  height: "21px"
};
function Wi(e, a) {
  return T(), V("svg", Ui, a[0] || (a[0] = [
    D("path", { d: "M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" }, null, -1)
  ]));
}
const Gi = /* @__PURE__ */ re(ji, [["render", Wi]]), Hi = {}, Ki = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Yi(e, a) {
  return T(), V("svg", Ki, a[0] || (a[0] = [
    Da('<path fill="#e53935" d="M24 43L16 20 32 20z"></path><path fill="#ff7043" d="M24 43L42 20 32 20z"></path><path fill="#e53935" d="M37 5L42 20 32 20z"></path><path fill="#ffa726" d="M24 43L42 20 45 28z"></path><path fill="#ff7043" d="M24 43L6 20 16 20z"></path><path fill="#e53935" d="M11 5L6 20 16 20z"></path><path fill="#ffa726" d="M24 43L6 20 3 28z"></path>', 7)
  ]));
}
const Zi = /* @__PURE__ */ re(Hi, [["render", Yi]]), Ji = {}, Xi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21",
  height: "21",
  viewBox: "0 0 62.42 62.42"
};
function qi(e, a) {
  return T(), V("svg", Xi, a[0] || (a[0] = [
    Da('<defs><linearGradient id="New_Gradient_Swatch_1" x1="64.01" y1="30.27" x2="32.99" y2="54.48" gradientUnits="userSpaceOnUse"><stop offset="0.18" stop-color="#0052cc"></stop><stop offset="1" stop-color="#2684ff"></stop></linearGradient></defs><title>Bitbucket-blue</title><g id="Layer_2" data-name="Layer 2"><g id="Blue" transform="translate(0 -3.13)"><path d="M2,6.26A2,2,0,0,0,0,8.58L8.49,60.12a2.72,2.72,0,0,0,2.66,2.27H51.88a2,2,0,0,0,2-1.68L62.37,8.59a2,2,0,0,0-2-2.32ZM37.75,43.51h-13L21.23,25.12H40.9Z" fill="#2684ff"></path><path d="M59.67,25.12H40.9L37.75,43.51h-13L9.4,61.73a2.71,2.71,0,0,0,1.75.66H51.89a2,2,0,0,0,2-1.68Z" fill="url(#New_Gradient_Swatch_1)"></path></g></g>', 3)
  ]));
}
const Qi = /* @__PURE__ */ re(Ji, [["render", qi]]), er = {}, ar = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function tr(e, a) {
  return T(), V("svg", ar, a[0] || (a[0] = [
    D("path", {
      fill: "#536dfe",
      d: "M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"
    }, null, -1)
  ]));
}
const nr = /* @__PURE__ */ re(er, [["render", tr]]), lr = {}, or = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function ir(e, a) {
  return T(), V("svg", or, a[0] || (a[0] = [
    Da('<linearGradient id="k8yl7~hDat~FaoWq8WjN6a" x1="-1254.397" x2="-1261.911" y1="877.268" y2="899.466" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#114a8b"></stop><stop offset="1" stop-color="#0669bc"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6a)" d="M17.634,6h11.305L17.203,40.773c-0.247,0.733-0.934,1.226-1.708,1.226H6.697 c-0.994,0-1.8-0.806-1.8-1.8c0-0.196,0.032-0.39,0.094-0.576L15.926,7.227C16.173,6.494,16.86,6,17.634,6L17.634,6z"></path><path fill="#0078d4" d="M34.062,29.324H16.135c-0.458-0.001-0.83,0.371-0.831,0.829c0,0.231,0.095,0.451,0.264,0.608 l11.52,10.752C27.423,41.826,27.865,42,28.324,42h10.151L34.062,29.324z"></path><linearGradient id="k8yl7~hDat~FaoWq8WjN6b" x1="-1252.05" x2="-1253.788" y1="887.612" y2="888.2" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity=".3"></stop><stop offset=".071" stop-opacity=".2"></stop><stop offset=".321" stop-opacity=".1"></stop><stop offset=".623" stop-opacity=".05"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6b)" d="M17.634,6c-0.783-0.003-1.476,0.504-1.712,1.25L5.005,39.595 c-0.335,0.934,0.151,1.964,1.085,2.299C6.286,41.964,6.493,42,6.702,42h9.026c0.684-0.122,1.25-0.603,1.481-1.259l2.177-6.416 l7.776,7.253c0.326,0.27,0.735,0.419,1.158,0.422h10.114l-4.436-12.676l-12.931,0.003L28.98,6H17.634z"></path><linearGradient id="k8yl7~hDat~FaoWq8WjN6c" x1="-1252.952" x2="-1244.704" y1="876.6" y2="898.575" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3ccbf4"></stop><stop offset="1" stop-color="#2892df"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6c)" d="M32.074,7.225C31.827,6.493,31.141,6,30.368,6h-12.6c0.772,0,1.459,0.493,1.705,1.224 l10.935,32.399c0.318,0.942-0.188,1.963-1.13,2.281C29.093,41.968,28.899,42,28.703,42h12.6c0.994,0,1.8-0.806,1.8-1.801 c0-0.196-0.032-0.39-0.095-0.575L32.074,7.225z"></path>', 7)
  ]));
}
const rr = /* @__PURE__ */ re(lr, [["render", ir]]), sr = {}, ur = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21",
  height: "21",
  viewBox: "0 0 256 256"
};
function cr(e, a) {
  return T(), V("svg", ur, a[0] || (a[0] = [
    D("path", {
      fill: "#FFE812",
      d: "M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z"
    }, null, -1),
    D("path", { d: "M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z" }, null, -1),
    D("path", {
      fill: "#FFE812",
      d: "M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"
    }, null, -1)
  ]));
}
const _r = /* @__PURE__ */ re(sr, [["render", cr]]), pr = {}, dr = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function mr(e, a) {
  return T(), V("svg", dr, a[0] || (a[0] = [
    D("path", {
      d: "M472.136 163.959H408.584C407.401 163.959 406.218 163.327 405.666 162.3L354.651 73.6591C354.02 72.632 352.916 72 351.654 72H143.492C142.309 72 141.126 72.632 140.574 73.6591L87.5084 165.618L36.414 254.259C35.862 255.286 35.862 256.55 36.414 257.656L87.5084 346.297L140.495 438.335C141.047 439.362 142.23 440.073 143.413 439.994H351.654C352.837 439.994 354.02 439.362 354.651 438.335L405.745 349.694C406.297 348.667 407.48 347.956 408.663 348.035H472.215C474.344 348.035 476 346.297 476 344.243V167.83C475.921 165.697 474.186 163.959 472.136 163.959ZM228.728 349.694L212.721 377.345C212.485 377.74 212.091 378.135 211.696 378.372C211.223 378.609 210.75 378.767 210.198 378.767H178.422C177.318 378.767 176.293 378.214 175.82 377.187L128.431 294.787L123.779 286.65L106.748 257.498C106.511 257.103 106.353 256.629 106.432 256.076C106.432 255.602 106.59 255.049 106.827 254.654L123.937 224.949L175.899 134.886C176.451 133.938 177.476 133.306 178.501 133.306H210.198C210.75 133.306 211.302 133.464 211.854 133.701C212.248 133.938 212.643 134.254 212.879 134.728L228.886 162.537C229.359 163.485 229.28 164.67 228.728 165.539L177.397 254.654C177.16 255.049 177.081 255.523 177.081 255.918C177.081 256.392 177.239 256.787 177.397 257.182L228.728 346.218C229.438 347.403 229.359 348.667 228.728 349.694V349.694ZM388.083 257.498L371.051 286.65L366.399 294.787L319.011 377.187C318.459 378.135 317.512 378.767 316.409 378.767H284.632C284.08 378.767 283.607 378.609 283.134 378.372C282.74 378.135 282.346 377.819 282.109 377.345L266.103 349.694C265.393 348.667 265.393 347.403 266.024 346.376L317.355 257.34C317.591 256.945 317.67 256.471 317.67 256.076C317.67 255.602 317.513 255.207 317.355 254.812L266.024 165.697C265.472 164.749 265.393 163.643 265.866 162.695L281.873 134.886C282.109 134.491 282.503 134.096 282.898 133.859C283.371 133.543 283.923 133.464 284.553 133.464H316.409C317.512 133.464 318.538 134.017 319.011 135.044L370.972 225.107L388.083 254.812C388.319 255.286 388.477 255.76 388.477 256.234C388.477 256.55 388.319 257.024 388.083 257.498V257.498Z",
      fill: "#008AAA"
    }, null, -1)
  ]));
}
const fr = /* @__PURE__ */ re(pr, [["render", mr]]), br = {}, gr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function hr(e, a) {
  return T(), V("svg", gr, a[0] || (a[0] = [
    D("path", {
      fill: "#0288D1",
      d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
    }, null, -1),
    D("path", {
      fill: "#FFF",
      d: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
    }, null, -1)
  ]));
}
const yn = /* @__PURE__ */ re(br, [["render", hr]]), wr = {}, vr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px",
  "fill-rule": "evenodd",
  "clip-rule": "evenodd"
};
function kr(e, a) {
  return T(), V("svg", vr, a[0] || (a[0] = [
    D("path", {
      fill: "#fff",
      "fill-rule": "evenodd",
      d: "M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z",
      "clip-rule": "evenodd"
    }, null, -1),
    D("path", {
      fill: "#fff",
      "fill-rule": "evenodd",
      d: "M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619 l23.971-1.387c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463 C13.171,14.718,12.862,15.181,12.862,16.182L12.862,16.182z",
      "clip-rule": "evenodd"
    }, null, -1),
    D("path", {
      fill: "#424242",
      "fill-rule": "evenodd",
      d: "M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619l23.971-1.387 c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463C13.171,14.718,12.862,15.181,12.862,16.182 L12.862,16.182z M36.526,17.413c0.154,0.694,0,1.387-0.695,1.465l-1.155,0.23v16.943c-1.003,0.539-1.928,0.847-2.698,0.847 c-1.234,0-1.543-0.385-2.467-1.54l-7.555-11.86v11.475l2.391,0.539c0,0,0,1.386-1.929,1.386l-5.317,0.308 c-0.154-0.308,0-1.078,0.539-1.232l1.388-0.385V20.418l-1.927-0.154c-0.155-0.694,0.23-1.694,1.31-1.772l5.704-0.385l7.862,12.015 V19.493l-2.005-0.23c-0.154-0.848,0.462-1.464,1.233-1.54L36.526,17.413z M7.389,5.862l21.968-1.618 c2.698-0.231,3.392-0.076,5.087,1.155l7.013,4.929C42.614,11.176,43,11.407,43,12.33v27.032c0,1.694-0.617,2.696-2.775,2.849 l-25.512,1.541c-1.62,0.077-2.391-0.154-3.239-1.232l-5.164-6.7C5.385,34.587,5,33.664,5,32.585V8.556 C5,7.171,5.617,6.015,7.389,5.862z",
      "clip-rule": "evenodd"
    }, null, -1)
  ]));
}
const Er = /* @__PURE__ */ re(wr, [["render", kr]]), yr = {}, Cr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Tr(e, a) {
  return T(), V("svg", Cr, a[0] || (a[0] = [
    Da('<path fill="#33d375" d="M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"></path><path fill="#33d375" d="M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"></path><path fill="#40c4ff" d="M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"></path><path fill="#40c4ff" d="M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"></path><path fill="#e91e63" d="M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"></path><path fill="#e91e63" d="M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"></path><path fill="#ffc107" d="M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"></path><path fill="#ffc107" d="M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"></path>', 8)
  ]));
}
const Sr = /* @__PURE__ */ re(yr, [["render", Tr]]), Nr = {}, Or = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Ir(e, a) {
  return T(), V("svg", Or, a[0] || (a[0] = [
    D("path", {
      d: "M255.498 31.0034C131.513 31.0034 31 131.515 31 255.502C31 379.492 131.513 480 255.498 480C379.497 480 480 379.495 480 255.502C480 131.522 379.497 31.0135 255.495 31.0135L255.498 31V31.0034ZM358.453 354.798C354.432 361.391 345.801 363.486 339.204 359.435C286.496 327.237 220.139 319.947 141.993 337.801C134.463 339.516 126.957 334.798 125.24 327.264C123.516 319.731 128.217 312.225 135.767 310.511C221.284 290.972 294.639 299.384 353.816 335.549C360.413 339.596 362.504 348.2 358.453 354.798ZM385.932 293.67C380.864 301.903 370.088 304.503 361.858 299.438C301.512 262.345 209.528 251.602 138.151 273.272C128.893 276.067 119.118 270.851 116.309 261.61C113.521 252.353 118.74 242.597 127.981 239.782C209.512 215.044 310.87 227.026 380.17 269.612C388.4 274.68 391 285.456 385.935 293.676V293.673L385.932 293.67ZM388.293 230.016C315.935 187.039 196.56 183.089 127.479 204.055C116.387 207.42 104.654 201.159 101.293 190.063C97.9326 178.964 104.189 167.241 115.289 163.87C194.59 139.796 326.418 144.446 409.723 193.902C419.722 199.826 422.995 212.71 417.068 222.675C411.168 232.653 398.247 235.943 388.303 230.016H388.293V230.016Z",
      fill: "#1ED760"
    }, null, -1)
  ]));
}
const Lr = /* @__PURE__ */ re(Nr, [["render", Ir]]), xr = {}, Ar = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Mr(e, a) {
  return T(), V("svg", Ar, a[0] || (a[0] = [
    D("path", {
      d: "M416 240L352 304H288L232 360V304H160V64H416V240Z",
      fill: "white"
    }, null, -1),
    D("path", {
      d: "M144 32L64 112V400H160V480L240 400H304L448 256V32H144ZM416 240L352 304H288L232 360V304H160V64H416V240Z",
      fill: "#9146FF"
    }, null, -1),
    D("path", {
      d: "M368 120H336V216H368V120Z",
      fill: "#9146FF"
    }, null, -1),
    D("path", {
      d: "M280 120H248V216H280V120Z",
      fill: "#9146FF"
    }, null, -1)
  ]));
}
const Pr = /* @__PURE__ */ re(xr, [["render", Mr]]), Rr = {}, Dr = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Fr(e, a) {
  return T(), V("svg", Dr, a[0] || (a[0] = [
    D("path", {
      d: "M33 256.043C33 264.556 35.3159 273.069 39.4845 280.202L117.993 415.493C126.098 429.298 138.373 440.572 153.657 445.634C183.764 455.528 214.797 442.873 229.618 417.333L248.609 384.661L173.806 256.043L252.777 119.831L271.768 87.1591C277.557 77.2654 284.968 69.4424 294 63H285.894H172.185C150.878 63 131.193 74.2742 120.54 92.6812L39.7161 231.884C35.3159 239.016 33 247.53 33 256.043Z",
      fill: "#6363F1"
    }, null, -1),
    D("path", {
      d: "M480 256.058C480 247.539 477.684 239.021 473.516 231.883L393.849 94.6596C379.028 69.3331 347.995 56.4396 317.888 66.34C302.603 71.4053 290.329 82.6871 282.224 96.5015L264.391 127.354L339.194 256.058L260.223 392.131L241.232 424.825C235.443 434.495 228.032 442.553 219 449H227.106H340.815C362.122 449 381.807 437.718 392.46 419.299L473.284 280.003C477.684 272.866 480 264.577 480 256.058Z",
      fill: "#6363F1"
    }, null, -1)
  ]));
}
const $r = /* @__PURE__ */ re(Rr, [["render", Fr]]), Vr = {}, zr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21",
  height: "21"
};
function Br(e, a) {
  return T(), V("svg", zr, a[0] || (a[0] = [
    D("circle", {
      cx: "24",
      cy: "24",
      r: "20",
      fill: "#2196f3"
    }, null, -1),
    D("path", {
      fill: "#fff",
      d: "M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z"
    }, null, -1),
    D("polygon", {
      fill: "#fff",
      points: "37,31 31,27 31,21 37,17"
    }, null, -1)
  ]));
}
const jr = /* @__PURE__ */ re(Vr, [["render", Br]]), Ur = /* @__PURE__ */ te({
  __name: "Icons",
  props: {
    name: {}
  },
  setup(e) {
    const a = {
      apple: Fi,
      azure: rr,
      bitbucket: Qi,
      discord: nr,
      facebook: Ii,
      figma: Bi,
      google: Ti,
      github: Gi,
      gitlab: Zi,
      kakao: _r,
      keycloak: fr,
      linkedin: yn,
      linkedin_oidc: yn,
      notion: Er,
      slack: Sr,
      spotify: Lr,
      twitch: Pr,
      twitter: Mi,
      workos: $r,
      zoom: jr
    };
    return (t, n) => (T(), $(ra(a[t.name])));
  }
}), nc = te({
  name: "UserContextProvider",
  props: {
    supabaseClient: {
      type: Object,
      required: !0
    }
  },
  setup({ supabaseClient: e }, { slots: a }) {
    const t = W(null), n = W(null);
    return Yt(async () => {
      var s;
      const { data: l } = await e.auth.getSession();
      t.value = l.session, n.value = ((s = l.session) == null ? void 0 : s.user) ?? null;
      const { data: i } = e.auth.onAuthStateChange(
        async (u, r) => {
          t.value = r, n.value = (r == null ? void 0 : r.user) ?? null;
        }
      );
      return () => {
        i == null || i.subscription.unsubscribe();
      };
    }), Jn(_i, {
      session: t,
      user: n
    }), () => {
      var l;
      return Zt("div", null, (l = a == null ? void 0 : a.default) == null ? void 0 : l.call(a));
    };
  }
}), qt = (e) => {
  const a = W(null), t = (n) => {
    n ? JSON.stringify(a.value) !== JSON.stringify(n.user) && (a.value = n.user) : a.value = null;
  };
  return e == null || e.auth.getSession().then(({ data: { session: n } }) => {
    n && t(n);
  }), Yt(async () => {
    const { data: n } = e.auth.onAuthStateChange(
      async (l, i) => {
        i && t(i);
      }
    );
    return () => {
      n == null || n.subscription.unsubscribe();
    };
  }), {
    supabaseUser: a
  };
}, Wr = /* @__PURE__ */ te({
  __name: "SocialAuth",
  props: {
    supabaseClient: {},
    socialLayout: { default: "vertical" },
    providers: { default: () => ["github", "google", "azure"] },
    providerScopes: {},
    queryParams: {},
    redirectTo: {},
    useOAuthPopup: { type: Boolean },
    popupWindowFeatures: {},
    onlyThirdPartyProviders: { type: Boolean, default: !0 },
    view: { default: "sign_in" },
    i18n: {},
    appearance: {}
  },
  setup(e) {
    const a = e, { supabaseUser: t } = qt(a.supabaseClient), n = W(""), l = W(!1), { authView: i } = ca(Ge), s = Y(() => a.socialLayout === "vertical"), u = Y(() => i.value === "magic_link" ? "sign_in" : i.value), r = Y(
      () => {
        var m;
        return (m = a.i18n) == null ? void 0 : m[u.value];
      }
    ), d = async (m) => {
      var v, C;
      n.value = "", l.value = !0;
      const c = (v = t.value) == null ? void 0 : v.is_anonymous, p = {
        redirectTo: a.redirectTo,
        scopes: (C = a.providerScopes) == null ? void 0 : C[m],
        queryParams: a.queryParams
      };
      let b = null;
      if (c) {
        const { data: h, error: y } = await a.supabaseClient.auth.linkIdentity({
          provider: m,
          options: p
        });
        b = y;
      } else if (a.useOAuthPopup) {
        const { data: h, error: y } = await a.supabaseClient.auth.signInWithOAuth({
          provider: m,
          options: { ...p, skipBrowserRedirect: !0 }
        });
        if (b = y, !y && (h != null && h.url)) {
          const x = window.open(
            h.url,
            "supabase-oauth",
            a.popupWindowFeatures ?? "width=500,height=650"
          ), { data: N } = a.supabaseClient.auth.onAuthStateChange(
            (M) => {
              M === "SIGNED_IN" && (x == null || x.close(), N.subscription.unsubscribe(), clearInterval(P), l.value = !1);
            }
          ), P = setInterval(() => {
            x != null && x.closed && (clearInterval(P), N.subscription.unsubscribe(), l.value = !1);
          }, 500);
          return;
        }
      } else {
        const { data: h, error: y } = await a.supabaseClient.auth.signInWithOAuth({
          provider: m,
          options: p
        });
        b = y;
      }
      b && (n.value = b.message), l.value = !1;
    };
    function _(m) {
      const c = m.toLowerCase();
      return m.charAt(0).toUpperCase() + c.slice(1);
    }
    return (m, c) => m.providers && m.providers.length > 0 ? (T(), V(ta, { key: 0 }, [
      U(E(Ne), {
        gap: "large",
        direction: "vertical",
        appearance: m.appearance
      }, {
        default: A(() => [
          U(E(Ne), {
            direction: s.value ? "vertical" : "horizontal",
            gap: s.value ? "small" : "medium",
            appearance: m.appearance
          }, {
            default: A(() => [
              (T(!0), V(ta, null, Oo(m.providers, (p) => (T(), $(E(ua), {
                key: p,
                color: "default",
                loading: l.value,
                onClick: ge(() => d(p), ["prevent"]),
                appearance: m.appearance
              }, {
                icon: A(() => [
                  U(E(Ur), { name: p }, null, 8, ["name"])
                ]),
                default: A(() => {
                  var b, v;
                  return [
                    s.value ? (T(), V(ta, { key: 0 }, [
                      B(j(E(Po)(
                        (v = (b = r.value) == null ? void 0 : b.social_provider_text) == null ? void 0 : v.replace("_oidc", ""),
                        {
                          provider: _(p.replace("_oidc", ""))
                        }
                      )), 1)
                    ], 64)) : K("", !0)
                  ];
                }),
                _: 2
              }, 1032, ["loading", "onClick", "appearance"]))), 128))
            ]),
            _: 1
          }, 8, ["direction", "gap", "appearance"])
        ]),
        _: 1
      }, 8, ["appearance"]),
      m.onlyThirdPartyProviders ? K("", !0) : (T(), $(E(mi), {
        key: 0,
        appearance: m.appearance
      }, null, 8, ["appearance"]))
    ], 64)) : K("", !0);
  }
}), Gr = ["id"], Hr = /* @__PURE__ */ te({
  __name: "MagicLink",
  props: {
    appearance: {},
    supabaseClient: {},
    redirectTo: {},
    showLinks: { type: Boolean },
    i18n: {}
  },
  setup(e) {
    const a = e, { supabaseUser: t } = qt(a.supabaseClient), n = W(""), l = W(""), i = W(""), s = W(!1), { authView: u, setAuthView: r } = ca(Ge), d = Y(
      () => {
        var m;
        return (m = a.i18n) == null ? void 0 : m[u.value];
      }
    ), _ = async (m) => {
      var b, v, C;
      l.value = "", i.value = "", s.value = !0;
      const c = (b = t.value) == null ? void 0 : b.is_anonymous;
      let p = null;
      if (c) {
        const { error: h } = await a.supabaseClient.auth.updateUser(
          {
            email: n.value
          },
          {
            emailRedirectTo: a.redirectTo
          }
        );
        p = h;
      } else {
        const { error: h } = await a.supabaseClient.auth.signInWithOtp({
          email: n.value,
          options: { emailRedirectTo: a.redirectTo }
        });
        p = h;
      }
      p ? l.value = p.message : i.value = (C = (v = a.i18n) == null ? void 0 : v.magic_link) == null ? void 0 : C.confirmation_text, s.value = !1;
    };
    return (m, c) => (T(), V("form", {
      id: `auth-${E(u)}`,
      onSubmit: ge(_, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      U(E(Ne), {
        direction: "vertical",
        gap: "large",
        appearance: m.appearance
      }, {
        default: A(() => [
          U(E(Ne), {
            direction: "vertical",
            gap: "large",
            appearance: m.appearance
          }, {
            default: A(() => {
              var p;
              return [
                D("div", null, [
                  U(E(je), {
                    htmlFor: "email",
                    appearance: m.appearance
                  }, {
                    default: A(() => {
                      var b;
                      return [
                        B(j((b = d.value) == null ? void 0 : b.email_input_label), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["appearance"]),
                  U(E(Be), {
                    id: "email",
                    type: "email",
                    name: "email",
                    autoComplete: "email",
                    autofocus: "",
                    placeholder: (p = d.value) == null ? void 0 : p.email_input_placeholder,
                    appearance: m.appearance,
                    modelValue: n.value,
                    "onUpdate:modelValue": c[0] || (c[0] = (b) => n.value = b)
                  }, null, 8, ["placeholder", "appearance", "modelValue"])
                ])
              ];
            }),
            _: 1
          }, 8, ["appearance"]),
          U(E(ua), {
            type: "submit",
            color: "primary",
            loading: s.value,
            appearance: m.appearance
          }, {
            default: A(() => {
              var p, b;
              return [
                B(j(s.value ? (p = d.value) == null ? void 0 : p.loading_button_label : (b = d.value) == null ? void 0 : b.button_label), 1)
              ];
            }),
            _: 1
          }, 8, ["loading", "appearance"]),
          m.showLinks ? (T(), $(E(aa), {
            key: 0,
            href: "#auth-sign-in",
            appearance: m.appearance,
            onClick: c[1] || (c[1] = ge((p) => E(r)(E(fe).SIGN_IN), ["prevent"]))
          }, {
            default: A(() => {
              var p, b;
              return [
                B(j((b = (p = m.i18n) == null ? void 0 : p.sign_in) == null ? void 0 : b.link_text), 1)
              ];
            }),
            _: 1
          }, 8, ["appearance"])) : K("", !0)
        ]),
        _: 1
      }, 8, ["appearance"]),
      i.value ? (T(), $(E(Se), {
        key: 0,
        appearance: m.appearance
      }, {
        default: A(() => [
          B(j(i.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0),
      l.value ? (T(), $(E(Se), {
        key: 1,
        color: "danger",
        appearance: m.appearance
      }, {
        default: A(() => [
          B(j(l.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0)
    ], 40, Gr));
  }
}), Kr = ["id"], Yr = /* @__PURE__ */ te({
  __name: "ForgottenPassword",
  props: {
    appearance: {},
    supabaseClient: {},
    redirectTo: {},
    showLinks: { type: Boolean },
    i18n: {},
    options: {}
  },
  setup(e) {
    const a = e, t = W(""), n = W(""), l = W(""), i = W(!1), { authView: s, setAuthView: u } = ca(Ge), r = Y(
      () => {
        var _;
        return (_ = a.i18n) == null ? void 0 : _[s.value];
      }
    ), d = async (_) => {
      var c, p, b;
      n.value = "", l.value = "", i.value = !0;
      const { error: m } = await a.supabaseClient.auth.resetPasswordForEmail(t.value, {
        redirectTo: a.redirectTo,
        captchaToken: (c = a.options) == null ? void 0 : c.captchaToken
      });
      m ? n.value = m.message : l.value = (b = (p = a.i18n) == null ? void 0 : p.forgotten_password) == null ? void 0 : b.confirmation_text, i.value = !1;
    };
    return (_, m) => (T(), V("form", {
      id: `auth-${E(s)}`,
      onSubmit: ge(d, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      U(E(Ne), {
        direction: "vertical",
        gap: "large",
        appearance: _.appearance
      }, {
        default: A(() => {
          var c;
          return [
            D("div", null, [
              U(E(je), {
                htmlFor: "email",
                appearance: _.appearance
              }, {
                default: A(() => {
                  var p;
                  return [
                    B(j((p = r.value) == null ? void 0 : p.email_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              U(E(Be), {
                id: "email",
                type: "email",
                name: "email",
                autoComplete: "email",
                autofocus: "",
                placeholder: (c = r.value) == null ? void 0 : c.email_input_placeholder,
                appearance: _.appearance,
                modelValue: t.value,
                "onUpdate:modelValue": m[0] || (m[0] = (p) => t.value = p)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ]),
            U(E(ua), {
              type: "submit",
              color: "primary",
              loading: i.value,
              appearance: _.appearance
            }, {
              default: A(() => {
                var p, b;
                return [
                  B(j(i.value ? (p = r.value) == null ? void 0 : p.loading_button_label : (b = r.value) == null ? void 0 : b.button_label), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "appearance"]),
            _.showLinks ? (T(), $(E(aa), {
              key: 0,
              href: "#auth-sign-in",
              appearance: _.appearance,
              onClick: m[1] || (m[1] = ge((p) => E(u)(E(fe).SIGN_IN), ["prevent"]))
            }, {
              default: A(() => {
                var p, b;
                return [
                  B(j((b = (p = _.i18n) == null ? void 0 : p.sign_in) == null ? void 0 : b.link_text), 1)
                ];
              }),
              _: 1
            }, 8, ["appearance"])) : K("", !0)
          ];
        }),
        _: 1
      }, 8, ["appearance"]),
      l.value ? (T(), $(E(Se), {
        key: 0,
        appearance: _.appearance
      }, {
        default: A(() => [
          B(j(l.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0),
      n.value ? (T(), $(E(Se), {
        key: 1,
        color: "danger",
        appearance: _.appearance
      }, {
        default: A(() => [
          B(j(n.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0)
    ], 40, Kr));
  }
}), Zr = ["id"], Jr = /* @__PURE__ */ te({
  __name: "UpdatePassword",
  props: {
    appearance: {},
    supabaseClient: {},
    i18n: {}
  },
  setup(e) {
    const a = e, t = W(""), n = W(""), l = W(""), i = W(!1), { authView: s } = ca(Ge), u = Y(
      () => {
        var d;
        return (d = a.i18n) == null ? void 0 : d[s.value];
      }
    ), r = async (d) => {
      var m, c;
      n.value = "", l.value = "", i.value = !0;
      const { error: _ } = await a.supabaseClient.auth.updateUser({
        password: t.value
      });
      _ ? n.value = _.message : l.value = (c = (m = a.i18n) == null ? void 0 : m.update_password) == null ? void 0 : c.confirmation_text, i.value = !1;
    };
    return (d, _) => (T(), V("form", {
      id: `auth-${E(s)}`,
      onSubmit: ge(r, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      U(E(Ne), {
        direction: "vertical",
        gap: "large",
        appearance: d.appearance
      }, {
        default: A(() => {
          var m, c, p;
          return [
            D("div", null, [
              U(E(je), {
                htmlFor: "password_label",
                appearance: d.appearance
              }, {
                default: A(() => {
                  var b;
                  return [
                    B(j((b = u.value) == null ? void 0 : b.password_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              U(E(Be), {
                id: "password",
                type: "password",
                name: "password",
                autofocus: "",
                placeholder: (m = u.value) == null ? void 0 : m.password_input_placeholder,
                appearance: d.appearance,
                modelValue: t.value,
                "onUpdate:modelValue": _[0] || (_[0] = (b) => t.value = b),
                showLabel: (c = d.i18n) == null ? void 0 : c.password_show,
                hideLabel: (p = d.i18n) == null ? void 0 : p.password_hide
              }, null, 8, ["placeholder", "appearance", "modelValue", "showLabel", "hideLabel"])
            ]),
            U(E(ua), {
              type: "submit",
              color: "primary",
              loading: i.value,
              appearance: d.appearance
            }, {
              default: A(() => {
                var b, v;
                return [
                  B(j(i.value ? (b = u.value) == null ? void 0 : b.loading_button_label : (v = u.value) == null ? void 0 : v.button_label), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "appearance"])
          ];
        }),
        _: 1
      }, 8, ["appearance"]),
      l.value ? (T(), $(E(Se), {
        key: 0,
        appearance: d.appearance
      }, {
        default: A(() => [
          B(j(l.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0),
      n.value ? (T(), $(E(Se), {
        key: 1,
        color: "danger",
        appearance: d.appearance
      }, {
        default: A(() => [
          B(j(n.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0)
    ], 40, Zr));
  }
}), Xr = ["id"], qr = { key: 0 }, Qr = { key: 1 }, es = /* @__PURE__ */ te({
  __name: "VerifyOtp",
  props: {
    appearance: {},
    supabaseClient: {},
    otpType: { default: "email" },
    showLinks: { type: Boolean, default: !1 },
    i18n: {}
  },
  setup(e) {
    const a = e, t = W(""), n = W(""), l = W(""), i = W(""), s = W(""), u = W(!1), { authView: r, setAuthView: d } = ca(Ge), _ = Y(
      () => {
        var c;
        return (c = a.i18n) == null ? void 0 : c[r.value];
      }
    ), m = async (c) => {
      var v, C;
      i.value = "", s.value = "", u.value = !0;
      let p = {
        email: t.value,
        token: l.value,
        type: a.otpType
      };
      ["sms", "phone_change"].includes(a.otpType) && (p = {
        phone: n.value,
        token: l.value,
        type: a.otpType
      });
      const { error: b } = await a.supabaseClient.auth.verifyOtp(
        p
      );
      b ? i.value = b.message : s.value = (C = (v = a.i18n) == null ? void 0 : v.magic_link) == null ? void 0 : C.confirmation_text, u.value = !1;
    };
    return (c, p) => (T(), V("form", {
      id: `auth-${E(r)}`,
      onSubmit: ge(m, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      U(E(Ne), {
        direction: "vertical",
        gap: "large",
        appearance: c.appearance
      }, {
        default: A(() => {
          var b, v, C;
          return [
            ["sms", "phone_change"].includes(c.otpType) ? (T(), V("div", qr, [
              U(E(je), {
                htmlFor: "phone",
                appearance: c.appearance
              }, {
                default: A(() => {
                  var h;
                  return [
                    B(j((h = _.value) == null ? void 0 : h.phone_input_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              U(E(Be), {
                id: "phone",
                name: "phone",
                type: "text",
                autofocus: "",
                placeholder: (b = _.value) == null ? void 0 : b.phone_input_placeholder,
                appearance: c.appearance,
                modelValue: n.value,
                "onUpdate:modelValue": p[0] || (p[0] = (h) => n.value = h)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ])) : (T(), V("div", Qr, [
              U(E(je), {
                htmlFor: "email",
                appearance: c.appearance
              }, {
                default: A(() => {
                  var h;
                  return [
                    B(j((h = _.value) == null ? void 0 : h.email_input_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              U(E(Be), {
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                autofocus: "",
                placeholder: (v = _.value) == null ? void 0 : v.email_input_placeholder,
                appearance: c.appearance,
                modelValue: t.value,
                "onUpdate:modelValue": p[1] || (p[1] = (h) => t.value = h)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ])),
            D("div", null, [
              U(E(je), {
                htmlFor: "token",
                appearance: c.appearance
              }, {
                default: A(() => {
                  var h;
                  return [
                    B(j((h = _.value) == null ? void 0 : h.token_input_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              U(E(Be), {
                id: "token",
                name: "token",
                type: "text",
                autofocus: "",
                placeholder: (C = _.value) == null ? void 0 : C.token_input_placeholder,
                appearance: c.appearance,
                modelValue: l.value,
                "onUpdate:modelValue": p[2] || (p[2] = (h) => l.value = h)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ]),
            U(E(ua), {
              type: "submit",
              color: "primary",
              loading: u.value,
              appearance: c.appearance
            }, {
              default: A(() => {
                var h, y;
                return [
                  B(j(u.value ? (h = _.value) == null ? void 0 : h.loading_button_label : (y = _.value) == null ? void 0 : y.button_label), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "appearance"]),
            c.showLinks ? (T(), $(E(aa), {
              key: 2,
              href: "#auth-sign-in",
              appearance: c.appearance,
              onClick: p[3] || (p[3] = ge((h) => E(d)(E(fe).SIGN_IN), ["prevent"]))
            }, {
              default: A(() => {
                var h, y;
                return [
                  B(j((y = (h = c.i18n) == null ? void 0 : h.sign_in) == null ? void 0 : y.link_text), 1)
                ];
              }),
              _: 1
            }, 8, ["appearance"])) : K("", !0)
          ];
        }),
        _: 1
      }, 8, ["appearance"]),
      s.value ? (T(), $(E(Se), {
        key: 0,
        appearance: c.appearance
      }, {
        default: A(() => [
          B(j(s.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0),
      i.value ? (T(), $(E(Se), {
        key: 1,
        color: "danger",
        appearance: c.appearance
      }, {
        default: A(() => [
          B(j(i.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0)
    ], 40, Xr));
  }
}), as = ["id"], ts = /* @__PURE__ */ te({
  __name: "AnonymousAuth",
  props: {
    appearance: {},
    supabaseClient: {},
    redirectTo: {},
    i18n: {},
    anonymouslyCredentials: {}
  },
  setup(e) {
    const a = e;
    qt(a.supabaseClient);
    const t = W(""), n = W(""), l = W(!1), { authView: i, setAuthView: s } = ca(Ge), u = Y(
      () => {
        var d;
        return (d = a.i18n) == null ? void 0 : d[i.value];
      }
    ), r = async (d) => {
      t.value = "", n.value = "", l.value = !0;
      let _ = null;
      const { data: m, error: c } = await a.supabaseClient.auth.signInAnonymously(
        a.anonymouslyCredentials
      );
      _ = c, _ && (t.value = _.message), l.value = !1;
    };
    return (d, _) => (T(), V("form", {
      id: `auth-${E(i)}`,
      onSubmit: ge(r, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      U(E(Ne), {
        direction: "vertical",
        gap: "large",
        appearance: d.appearance
      }, {
        default: A(() => [
          U(E(ua), {
            type: "submit",
            color: "primary",
            loading: l.value,
            appearance: d.appearance
          }, {
            default: A(() => {
              var m, c;
              return [
                B(j(l.value ? (m = u.value) == null ? void 0 : m.loading_button_label : (c = u.value) == null ? void 0 : c.button_label), 1)
              ];
            }),
            _: 1
          }, 8, ["loading", "appearance"])
        ]),
        _: 1
      }, 8, ["appearance"]),
      n.value ? (T(), $(E(Se), {
        key: 0,
        appearance: d.appearance
      }, {
        default: A(() => [
          B(j(n.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0),
      t.value ? (T(), $(E(Se), {
        key: 1,
        color: "danger",
        appearance: d.appearance
      }, {
        default: A(() => [
          B(j(t.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0)
    ], 40, as));
  }
});
/*!
  * shared v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const $e = typeof window < "u";
let ke, la;
if (process.env.NODE_ENV !== "production") {
  const e = $e && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (ke = (a) => {
    e.mark(a);
  }, la = (a, t, n) => {
    e.measure(a, t, n), e.clearMarks(t), e.clearMarks(n);
  });
}
const ns = /\{([0-9a-zA-Z]+)\}/g;
function Qn(e, ...a) {
  return a.length === 1 && G(a[0]) && (a = a[0]), (!a || !a.hasOwnProperty) && (a = {}), e.replace(ns, (t, n) => a.hasOwnProperty(n) ? a[n] : "");
}
const Ve = (e, a = !1) => a ? Symbol.for(e) : Symbol(e), ls = (e, a, t) => os({ l: e, k: a, s: t }), os = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), _e = (e) => typeof e == "number" && isFinite(e), is = (e) => al(e) === "[object Date]", tt = (e) => al(e) === "[object RegExp]", rt = (e) => H(e) && Object.keys(e).length === 0, pe = Object.assign;
let Cn;
const Aa = () => Cn || (Cn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Tn(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const rs = Object.prototype.hasOwnProperty;
function nt(e, a) {
  return rs.call(e, a);
}
const ie = Array.isArray, Q = (e) => typeof e == "function", L = (e) => typeof e == "string", oe = (e) => typeof e == "boolean", G = (e) => e !== null && typeof e == "object", ss = (e) => G(e) && Q(e.then) && Q(e.catch), el = Object.prototype.toString, al = (e) => el.call(e), H = (e) => {
  if (!G(e))
    return !1;
  const a = Object.getPrototypeOf(e);
  return a === null || a.constructor === Object;
}, us = (e) => e == null ? "" : ie(e) || H(e) && e.toString === el ? JSON.stringify(e, null, 2) : String(e);
function cs(e, a = "") {
  return e.reduce((t, n, l) => l === 0 ? t + n : t + a + n, "");
}
const Sn = 2;
function _s(e, a = 0, t = e.length) {
  const n = e.split(/\r?\n/);
  let l = 0;
  const i = [];
  for (let s = 0; s < n.length; s++)
    if (l += n[s].length + 1, l >= a) {
      for (let u = s - Sn; u <= s + Sn || t > l; u++) {
        if (u < 0 || u >= n.length)
          continue;
        const r = u + 1;
        i.push(`${r}${" ".repeat(3 - String(r).length)}|  ${n[u]}`);
        const d = n[u].length;
        if (u === s) {
          const _ = a - (l - d) + 1, m = Math.max(1, t > l ? d - _ : t - a);
          i.push("   |  " + " ".repeat(_) + "^".repeat(m));
        } else if (u > s) {
          if (t > l) {
            const _ = Math.max(Math.min(t - l, d), 1);
            i.push("   |  " + "^".repeat(_));
          }
          l += d + 1;
        }
      }
      break;
    }
  return i.join(`
`);
}
function st(e) {
  let a = e;
  return () => ++a;
}
function ka(e, a) {
  typeof console < "u" && (console.warn("[intlify] " + e), a && console.warn(a.stack));
}
const Nn = {};
function tl(e) {
  Nn[e] || (Nn[e] = !0, ka(e));
}
function ps() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(t, n) {
      const l = e.get(t);
      l && l.push(n) || e.set(t, [n]);
    },
    off(t, n) {
      const l = e.get(t);
      l && l.splice(l.indexOf(n) >>> 0, 1);
    },
    emit(t, n) {
      (e.get(t) || []).slice().map((l) => l(n)), (e.get("*") || []).slice().map((l) => l(t, n));
    }
  };
}
const qa = (e) => !G(e) || ie(e);
function et(e, a) {
  if (qa(e) || qa(a))
    throw new Error("Invalid value");
  const t = [{ src: e, des: a }];
  for (; t.length; ) {
    const { src: n, des: l } = t.pop();
    Object.keys(n).forEach((i) => {
      G(n[i]) && !G(l[i]) && (l[i] = Array.isArray(n[i]) ? [] : {}), qa(l[i]) || qa(n[i]) ? l[i] = n[i] : t.push({ src: n[i], des: l[i] });
    });
  }
}
/*!
  * message-compiler v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const ds = /\{([0-9a-zA-Z]+)\}/g;
function ms(e, ...a) {
  return a.length === 1 && fs(a[0]) && (a = a[0]), (!a || !a.hasOwnProperty) && (a = {}), e.replace(ds, (t, n) => a.hasOwnProperty(n) ? a[n] : "");
}
const fs = (e) => e !== null && typeof e == "object", bs = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, ue = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 17
}, gs = {
  // tokenizer error messages
  [ue.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [ue.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [ue.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [ue.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [ue.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [ue.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [ue.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [ue.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [ue.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [ue.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [ue.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [ue.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [ue.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [ue.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [ue.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [ue.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function nl(e, a, t = {}) {
  const { domain: n, messages: l, args: i } = t, s = ms((l || gs)[e] || "", ...i || []), u = new SyntaxError(String(s));
  return u.code = e, a && (u.location = a), u.domain = n, u;
}
/*!
  * core-base v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function hs() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Aa().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Aa().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const He = [];
He[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
He[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
He[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
He[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
He[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
He[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
He[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const ws = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function vs(e) {
  return ws.test(e);
}
function ks(e) {
  const a = e.charCodeAt(0), t = e.charCodeAt(e.length - 1);
  return a === t && (a === 34 || a === 39) ? e.slice(1, -1) : e;
}
function Es(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function ys(e) {
  const a = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : vs(a) ? ks(a) : "*" + a;
}
function Cs(e) {
  const a = [];
  let t = -1, n = 0, l = 0, i, s, u, r, d, _, m;
  const c = [];
  c[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = u : s += u;
  }, c[
    1
    /* Actions.PUSH */
  ] = () => {
    s !== void 0 && (a.push(s), s = void 0);
  }, c[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    c[
      0
      /* Actions.APPEND */
    ](), l++;
  }, c[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (l > 0)
      l--, n = 4, c[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (l = 0, s === void 0 || (s = ys(s), s === !1))
        return !1;
      c[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function p() {
    const b = e[t + 1];
    if (n === 5 && b === "'" || n === 6 && b === '"')
      return t++, u = "\\" + b, c[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; n !== null; )
    if (t++, i = e[t], !(i === "\\" && p())) {
      if (r = Es(i), m = He[n], d = m[r] || m.l || 8, d === 8 || (n = d[0], d[1] !== void 0 && (_ = c[d[1]], _ && (u = i, _() === !1))))
        return;
      if (n === 7)
        return a;
    }
}
const On = /* @__PURE__ */ new Map();
function Ts(e, a) {
  return G(e) ? e[a] : null;
}
function Ss(e, a) {
  if (!G(e))
    return null;
  let t = On.get(a);
  if (t || (t = Cs(a), t && On.set(a, t)), !t)
    return null;
  const n = t.length;
  let l = e, i = 0;
  for (; i < n; ) {
    const s = l[t[i]];
    if (s === void 0 || Q(l))
      return null;
    l = s, i++;
  }
  return l;
}
const Ns = (e) => e, Os = (e) => "", Is = "text", Ls = (e) => e.length === 0 ? "" : cs(e), xs = us;
function In(e, a) {
  return e = Math.abs(e), a === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function As(e) {
  const a = _e(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (_e(e.named.count) || _e(e.named.n)) ? _e(e.named.count) ? e.named.count : _e(e.named.n) ? e.named.n : a : a;
}
function Ms(e, a) {
  a.count || (a.count = e), a.n || (a.n = e);
}
function Ps(e = {}) {
  const a = e.locale, t = As(e), n = G(e.pluralRules) && L(a) && Q(e.pluralRules[a]) ? e.pluralRules[a] : In, l = G(e.pluralRules) && L(a) && Q(e.pluralRules[a]) ? In : void 0, i = (h) => h[n(t, h.length, l)], s = e.list || [], u = (h) => s[h], r = e.named || {};
  _e(e.pluralIndex) && Ms(t, r);
  const d = (h) => r[h];
  function _(h) {
    const y = Q(e.messages) ? e.messages(h) : G(e.messages) ? e.messages[h] : !1;
    return y || (e.parent ? e.parent.message(h) : Os);
  }
  const m = (h) => e.modifiers ? e.modifiers[h] : Ns, c = H(e.processor) && Q(e.processor.normalize) ? e.processor.normalize : Ls, p = H(e.processor) && Q(e.processor.interpolate) ? e.processor.interpolate : xs, b = H(e.processor) && L(e.processor.type) ? e.processor.type : Is, C = {
    list: u,
    named: d,
    plural: i,
    linked: (h, ...y) => {
      const [x, N] = y;
      let P = "text", M = "";
      y.length === 1 ? G(x) ? (M = x.modifier || M, P = x.type || P) : L(x) && (M = x || M) : y.length === 2 && (L(x) && (M = x || M), L(N) && (P = N || P));
      const F = _(h)(C), R = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        P === "vnode" && ie(F) && M ? F[0] : F
      );
      return M ? m(M)(R, P) : R;
    },
    message: _,
    type: b,
    interpolate: p,
    normalize: c,
    values: pe({}, s, r)
  };
  return C;
}
let Ma = null;
function Rs(e) {
  Ma = e;
}
function Ds(e, a, t) {
  Ma && Ma.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: a,
    meta: t
  });
}
const Fs = /* @__PURE__ */ $s(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function $s(e) {
  return (a) => Ma && Ma.emit(e, a);
}
const ll = bs.__EXTEND_POINT__, Qe = st(ll), be = {
  NOT_FOUND_KEY: ll,
  // 2
  FALLBACK_TO_TRANSLATE: Qe(),
  // 3
  CANNOT_FORMAT_NUMBER: Qe(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: Qe(),
  // 5
  CANNOT_FORMAT_DATE: Qe(),
  // 6
  FALLBACK_TO_DATE_FORMAT: Qe(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: Qe(),
  // 8
  __EXTEND_POINT__: Qe()
  // 9
}, Vs = {
  [be.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [be.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [be.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [be.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [be.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [be.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [be.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function oa(e, ...a) {
  return Qn(Vs[e], ...a);
}
const ol = ue.__EXTEND_POINT__, ea = st(ol), ce = {
  INVALID_ARGUMENT: ol,
  // 17
  INVALID_DATE_ARGUMENT: ea(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: ea(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: ea(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: ea(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: ea(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: ea(),
  // 23
  __EXTEND_POINT__: ea()
  // 24
};
function De(e) {
  return nl(e, null, process.env.NODE_ENV !== "production" ? { messages: zs } : void 0);
}
const zs = {
  [ce.INVALID_ARGUMENT]: "Invalid arguments",
  [ce.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [ce.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [ce.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [ce.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [ce.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [ce.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Qt(e, a) {
  return a.locale != null ? Ln(a.locale) : Ln(e.locale);
}
let Mt;
function Ln(e) {
  if (L(e))
    return e;
  if (Q(e)) {
    if (e.resolvedOnce && Mt != null)
      return Mt;
    if (e.constructor.name === "Function") {
      const a = e();
      if (ss(a))
        throw De(ce.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Mt = a;
    } else
      throw De(ce.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw De(ce.NOT_SUPPORT_LOCALE_TYPE);
}
function Bs(e, a, t) {
  return [.../* @__PURE__ */ new Set([
    t,
    ...ie(a) ? a : G(a) ? Object.keys(a) : L(a) ? [a] : [t]
  ])];
}
function il(e, a, t) {
  const n = L(t) ? t : lt, l = e;
  l.__localeChainCache || (l.__localeChainCache = /* @__PURE__ */ new Map());
  let i = l.__localeChainCache.get(n);
  if (!i) {
    i = [];
    let s = [t];
    for (; ie(s); )
      s = xn(i, s, a);
    const u = ie(a) || !H(a) ? a : a.default ? a.default : null;
    s = L(u) ? [u] : u, ie(s) && xn(i, s, !1), l.__localeChainCache.set(n, i);
  }
  return i;
}
function xn(e, a, t) {
  let n = !0;
  for (let l = 0; l < a.length && oe(n); l++) {
    const i = a[l];
    L(i) && (n = js(e, a[l], t));
  }
  return n;
}
function js(e, a, t) {
  let n;
  const l = a.split("-");
  do {
    const i = l.join("-");
    n = Us(e, i, t), l.splice(-1, 1);
  } while (l.length && n === !0);
  return n;
}
function Us(e, a, t) {
  let n = !1;
  if (!e.includes(a) && (n = !0, a)) {
    n = a[a.length - 1] !== "!";
    const l = a.replace(/!/g, "");
    e.push(l), (ie(t) || H(t)) && t[l] && (n = t[l]);
  }
  return n;
}
const Ws = "9.14.1", ut = -1, lt = "en-US", ot = "", An = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Gs() {
  return {
    upper: (e, a) => a === "text" && L(e) ? e.toUpperCase() : a === "vnode" && G(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, a) => a === "text" && L(e) ? e.toLowerCase() : a === "vnode" && G(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, a) => a === "text" && L(e) ? An(e) : a === "vnode" && G(e) && "__v_isVNode" in e ? An(e.children) : e
  };
}
let Hs, rl;
function Ks(e) {
  rl = e;
}
let sl;
function Ys(e) {
  sl = e;
}
let ul = null;
const Zs = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  ul = e;
}, Js = /* @__NO_SIDE_EFFECTS__ */ () => ul;
let cl = null;
const Mn = (e) => {
  cl = e;
}, Xs = () => cl;
let Pn = 0;
function qs(e = {}) {
  const a = Q(e.onWarn) ? e.onWarn : ka, t = L(e.version) ? e.version : Ws, n = L(e.locale) || Q(e.locale) ? e.locale : lt, l = Q(n) ? lt : n, i = ie(e.fallbackLocale) || H(e.fallbackLocale) || L(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l, s = H(e.messages) ? e.messages : { [l]: {} }, u = H(e.datetimeFormats) ? e.datetimeFormats : { [l]: {} }, r = H(e.numberFormats) ? e.numberFormats : { [l]: {} }, d = pe({}, e.modifiers || {}, Gs()), _ = e.pluralRules || {}, m = Q(e.missing) ? e.missing : null, c = oe(e.missingWarn) || tt(e.missingWarn) ? e.missingWarn : !0, p = oe(e.fallbackWarn) || tt(e.fallbackWarn) ? e.fallbackWarn : !0, b = !!e.fallbackFormat, v = !!e.unresolving, C = Q(e.postTranslation) ? e.postTranslation : null, h = H(e.processor) ? e.processor : null, y = oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, x = !!e.escapeParameter, N = Q(e.messageCompiler) ? e.messageCompiler : Hs;
  process.env.NODE_ENV !== "production" && Q(e.messageCompiler) && tl(oa(be.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const P = Q(e.messageResolver) ? e.messageResolver : rl || Ts, M = Q(e.localeFallbacker) ? e.localeFallbacker : sl || Bs, F = G(e.fallbackContext) ? e.fallbackContext : void 0, R = e, S = G(R.__datetimeFormatters) ? R.__datetimeFormatters : /* @__PURE__ */ new Map(), X = G(R.__numberFormatters) ? R.__numberFormatters : /* @__PURE__ */ new Map(), ne = G(R.__meta) ? R.__meta : {};
  Pn++;
  const ee = {
    version: t,
    cid: Pn,
    locale: n,
    fallbackLocale: i,
    messages: s,
    modifiers: d,
    pluralRules: _,
    missing: m,
    missingWarn: c,
    fallbackWarn: p,
    fallbackFormat: b,
    unresolving: v,
    postTranslation: C,
    processor: h,
    warnHtmlMessage: y,
    escapeParameter: x,
    messageCompiler: N,
    messageResolver: P,
    localeFallbacker: M,
    fallbackContext: F,
    onWarn: a,
    __meta: ne
  };
  return ee.datetimeFormats = u, ee.numberFormats = r, ee.__datetimeFormatters = S, ee.__numberFormatters = X, process.env.NODE_ENV !== "production" && (ee.__v_emitter = R.__v_emitter != null ? R.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Ds(ee, t, ne), ee;
}
function ct(e, a) {
  return e instanceof RegExp ? e.test(a) : e;
}
function _l(e, a) {
  return e instanceof RegExp ? e.test(a) : e;
}
function en(e, a, t, n, l) {
  const { missing: i, onWarn: s } = e;
  if (process.env.NODE_ENV !== "production") {
    const u = e.__v_emitter;
    u && u.emit("missing", {
      locale: t,
      key: a,
      type: l,
      groupId: `${l}:${a}`
    });
  }
  if (i !== null) {
    const u = i(e, t, a, l);
    return L(u) ? u : a;
  } else
    return process.env.NODE_ENV !== "production" && _l(n, a) && s(oa(be.NOT_FOUND_KEY, { key: a, locale: t })), a;
}
function Ia(e, a, t) {
  const n = e;
  n.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, t, a);
}
function pl(e, a) {
  return e === a ? !1 : e.split("-")[0] === a.split("-")[0];
}
function Qs(e, a) {
  const t = a.indexOf(e);
  if (t === -1)
    return !1;
  for (let n = t + 1; n < a.length; n++)
    if (pl(e, a[n]))
      return !0;
  return !1;
}
const va = (e) => G(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e), Rn = () => "", Te = (e) => Q(e);
function Dn(e, ...a) {
  const { fallbackFormat: t, postTranslation: n, unresolving: l, messageCompiler: i, fallbackLocale: s, messages: u } = e, [r, d] = Vt(...a), _ = oe(d.missingWarn) ? d.missingWarn : e.missingWarn, m = oe(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, c = oe(d.escapeParameter) ? d.escapeParameter : e.escapeParameter, p = !!d.resolvedMessage, b = L(d.default) || oe(d.default) ? oe(d.default) ? i ? r : () => r : d.default : t ? i ? r : () => r : "", v = t || b !== "", C = Qt(e, d);
  c && eu(d);
  let [h, y, x] = p ? [
    r,
    C,
    u[C] || {}
  ] : dl(e, r, C, s, m, _), N = h, P = r;
  if (!p && !(L(N) || va(N) || Te(N)) && v && (N = b, P = N), !p && (!(L(N) || va(N) || Te(N)) || !L(y)))
    return l ? ut : r;
  if (process.env.NODE_ENV !== "production" && L(N) && e.messageCompiler == null)
    return ka(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${r}'.`), r;
  let M = !1;
  const F = () => {
    M = !0;
  }, R = Te(N) ? N : ml(e, r, y, N, P, F);
  if (M)
    return N;
  const S = lu(e, y, x, d), X = Ps(S), ne = au(e, R, X), ee = n ? n(ne, r) : ne;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const Ee = {
      timestamp: Date.now(),
      key: L(r) ? r : Te(N) ? N.key : "",
      locale: y || (Te(N) ? N.locale : ""),
      format: L(N) ? N : Te(N) ? N.source : "",
      message: ee
    };
    Ee.meta = pe({}, e.__meta, /* @__PURE__ */ Js() || {}), Fs(Ee);
  }
  return ee;
}
function eu(e) {
  ie(e.list) ? e.list = e.list.map((a) => L(a) ? Tn(a) : a) : G(e.named) && Object.keys(e.named).forEach((a) => {
    L(e.named[a]) && (e.named[a] = Tn(e.named[a]));
  });
}
function dl(e, a, t, n, l, i) {
  const { messages: s, onWarn: u, messageResolver: r, localeFallbacker: d } = e, _ = d(e, n, t);
  let m = {}, c, p = null, b = t, v = null;
  const C = "translate";
  for (let h = 0; h < _.length; h++) {
    if (c = v = _[h], process.env.NODE_ENV !== "production" && t !== c && !pl(t, c) && ct(l, a) && u(oa(be.FALLBACK_TO_TRANSLATE, {
      key: a,
      target: c
    })), process.env.NODE_ENV !== "production" && t !== c) {
      const P = e.__v_emitter;
      P && P.emit("fallback", {
        type: C,
        key: a,
        from: b,
        to: v,
        groupId: `${C}:${a}`
      });
    }
    m = s[c] || {};
    let y = null, x, N;
    if (process.env.NODE_ENV !== "production" && $e && (y = window.performance.now(), x = "intlify-message-resolve-start", N = "intlify-message-resolve-end", ke && ke(x)), (p = r(m, a)) === null && (p = m[a]), process.env.NODE_ENV !== "production" && $e) {
      const P = window.performance.now(), M = e.__v_emitter;
      M && y && p && M.emit("message-resolve", {
        type: "message-resolve",
        key: a,
        message: p,
        time: P - y,
        groupId: `${C}:${a}`
      }), x && N && ke && la && (ke(N), la("intlify message resolve", x, N));
    }
    if (L(p) || va(p) || Te(p))
      break;
    if (!Qs(c, _)) {
      const P = en(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        a,
        c,
        i,
        C
      );
      P !== a && (p = P);
    }
    b = v;
  }
  return [p, c, m];
}
function ml(e, a, t, n, l, i) {
  const { messageCompiler: s, warnHtmlMessage: u } = e;
  if (Te(n)) {
    const c = n;
    return c.locale = c.locale || t, c.key = c.key || a, c;
  }
  if (s == null) {
    const c = () => n;
    return c.locale = t, c.key = a, c;
  }
  let r = null, d, _;
  process.env.NODE_ENV !== "production" && $e && (r = window.performance.now(), d = "intlify-message-compilation-start", _ = "intlify-message-compilation-end", ke && ke(d));
  const m = s(n, tu(e, t, l, n, u, i));
  if (process.env.NODE_ENV !== "production" && $e) {
    const c = window.performance.now(), p = e.__v_emitter;
    p && r && p.emit("message-compilation", {
      type: "message-compilation",
      message: n,
      time: c - r,
      groupId: `translate:${a}`
    }), d && _ && ke && la && (ke(_), la("intlify message compilation", d, _));
  }
  return m.locale = t, m.key = a, m.source = n, m;
}
function au(e, a, t) {
  let n = null, l, i;
  process.env.NODE_ENV !== "production" && $e && (n = window.performance.now(), l = "intlify-message-evaluation-start", i = "intlify-message-evaluation-end", ke && ke(l));
  const s = a(t);
  if (process.env.NODE_ENV !== "production" && $e) {
    const u = window.performance.now(), r = e.__v_emitter;
    r && n && r.emit("message-evaluation", {
      type: "message-evaluation",
      value: s,
      time: u - n,
      groupId: `translate:${a.key}`
    }), l && i && ke && la && (ke(i), la("intlify message evaluation", l, i));
  }
  return s;
}
function Vt(...e) {
  const [a, t, n] = e, l = {};
  if (!L(a) && !_e(a) && !Te(a) && !va(a))
    throw De(ce.INVALID_ARGUMENT);
  const i = _e(a) ? String(a) : (Te(a), a);
  return _e(t) ? l.plural = t : L(t) ? l.default = t : H(t) && !rt(t) ? l.named = t : ie(t) && (l.list = t), _e(n) ? l.plural = n : L(n) ? l.default = n : H(n) && pe(l, n), [i, l];
}
function tu(e, a, t, n, l, i) {
  return {
    locale: a,
    key: t,
    warnHtmlMessage: l,
    onError: (s) => {
      if (i && i(s), process.env.NODE_ENV !== "production") {
        const u = nu(n), r = `Message compilation error: ${s.message}`, d = s.location && u && _s(u, s.location.start.offset, s.location.end.offset), _ = e.__v_emitter;
        _ && u && _.emit("compile-error", {
          message: u,
          error: s.message,
          start: s.location && s.location.start.offset,
          end: s.location && s.location.end.offset,
          groupId: `translate:${t}`
        }), console.error(d ? `${r}
${d}` : r);
      } else
        throw s;
    },
    onCacheKey: (s) => ls(a, t, s)
  };
}
function nu(e) {
  if (L(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function lu(e, a, t, n) {
  const { modifiers: l, pluralRules: i, messageResolver: s, fallbackLocale: u, fallbackWarn: r, missingWarn: d, fallbackContext: _ } = e, c = {
    locale: a,
    modifiers: l,
    pluralRules: i,
    messages: (p) => {
      let b = s(t, p);
      if (b == null && _) {
        const [, , v] = dl(_, p, a, u, r, d);
        b = s(v, p);
      }
      if (L(b) || va(b)) {
        let v = !1;
        const h = ml(e, p, a, b, p, () => {
          v = !0;
        });
        return v ? Rn : h;
      } else
        return Te(b) ? b : Rn;
    }
  };
  return e.processor && (c.processor = e.processor), n.list && (c.list = n.list), n.named && (c.named = n.named), _e(n.plural) && (c.pluralIndex = n.plural), c;
}
const Fn = typeof Intl < "u", fl = {
  dateTimeFormat: Fn && typeof Intl.DateTimeFormat < "u",
  numberFormat: Fn && typeof Intl.NumberFormat < "u"
};
function $n(e, ...a) {
  const { datetimeFormats: t, unresolving: n, fallbackLocale: l, onWarn: i, localeFallbacker: s } = e, { __datetimeFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !fl.dateTimeFormat)
    return i(oa(be.CANNOT_FORMAT_DATE)), ot;
  const [r, d, _, m] = zt(...a), c = oe(_.missingWarn) ? _.missingWarn : e.missingWarn, p = oe(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn, b = !!_.part, v = Qt(e, _), C = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    l,
    v
  );
  if (!L(r) || r === "")
    return new Intl.DateTimeFormat(v, m).format(d);
  let h = {}, y, x = null, N = v, P = null;
  const M = "datetime format";
  for (let S = 0; S < C.length; S++) {
    if (y = P = C[S], process.env.NODE_ENV !== "production" && v !== y && ct(p, r) && i(oa(be.FALLBACK_TO_DATE_FORMAT, {
      key: r,
      target: y
    })), process.env.NODE_ENV !== "production" && v !== y) {
      const X = e.__v_emitter;
      X && X.emit("fallback", {
        type: M,
        key: r,
        from: N,
        to: P,
        groupId: `${M}:${r}`
      });
    }
    if (h = t[y] || {}, x = h[r], H(x))
      break;
    en(e, r, y, c, M), N = P;
  }
  if (!H(x) || !L(y))
    return n ? ut : r;
  let F = `${y}__${r}`;
  rt(m) || (F = `${F}__${JSON.stringify(m)}`);
  let R = u.get(F);
  return R || (R = new Intl.DateTimeFormat(y, pe({}, x, m)), u.set(F, R)), b ? R.formatToParts(d) : R.format(d);
}
const bl = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function zt(...e) {
  const [a, t, n, l] = e, i = {};
  let s = {}, u;
  if (L(a)) {
    const r = a.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!r)
      throw De(ce.INVALID_ISO_DATE_ARGUMENT);
    const d = r[3] ? r[3].trim().startsWith("T") ? `${r[1].trim()}${r[3].trim()}` : `${r[1].trim()}T${r[3].trim()}` : r[1].trim();
    u = new Date(d);
    try {
      u.toISOString();
    } catch {
      throw De(ce.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (is(a)) {
    if (isNaN(a.getTime()))
      throw De(ce.INVALID_DATE_ARGUMENT);
    u = a;
  } else if (_e(a))
    u = a;
  else
    throw De(ce.INVALID_ARGUMENT);
  return L(t) ? i.key = t : H(t) && Object.keys(t).forEach((r) => {
    bl.includes(r) ? s[r] = t[r] : i[r] = t[r];
  }), L(n) ? i.locale = n : H(n) && (s = n), H(l) && (s = l), [i.key || "", u, i, s];
}
function Vn(e, a, t) {
  const n = e;
  for (const l in t) {
    const i = `${a}__${l}`;
    n.__datetimeFormatters.has(i) && n.__datetimeFormatters.delete(i);
  }
}
function zn(e, ...a) {
  const { numberFormats: t, unresolving: n, fallbackLocale: l, onWarn: i, localeFallbacker: s } = e, { __numberFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !fl.numberFormat)
    return i(oa(be.CANNOT_FORMAT_NUMBER)), ot;
  const [r, d, _, m] = Bt(...a), c = oe(_.missingWarn) ? _.missingWarn : e.missingWarn, p = oe(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn, b = !!_.part, v = Qt(e, _), C = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    l,
    v
  );
  if (!L(r) || r === "")
    return new Intl.NumberFormat(v, m).format(d);
  let h = {}, y, x = null, N = v, P = null;
  const M = "number format";
  for (let S = 0; S < C.length; S++) {
    if (y = P = C[S], process.env.NODE_ENV !== "production" && v !== y && ct(p, r) && i(oa(be.FALLBACK_TO_NUMBER_FORMAT, {
      key: r,
      target: y
    })), process.env.NODE_ENV !== "production" && v !== y) {
      const X = e.__v_emitter;
      X && X.emit("fallback", {
        type: M,
        key: r,
        from: N,
        to: P,
        groupId: `${M}:${r}`
      });
    }
    if (h = t[y] || {}, x = h[r], H(x))
      break;
    en(e, r, y, c, M), N = P;
  }
  if (!H(x) || !L(y))
    return n ? ut : r;
  let F = `${y}__${r}`;
  rt(m) || (F = `${F}__${JSON.stringify(m)}`);
  let R = u.get(F);
  return R || (R = new Intl.NumberFormat(y, pe({}, x, m)), u.set(F, R)), b ? R.formatToParts(d) : R.format(d);
}
const gl = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function Bt(...e) {
  const [a, t, n, l] = e, i = {};
  let s = {};
  if (!_e(a))
    throw De(ce.INVALID_ARGUMENT);
  const u = a;
  return L(t) ? i.key = t : H(t) && Object.keys(t).forEach((r) => {
    gl.includes(r) ? s[r] = t[r] : i[r] = t[r];
  }), L(n) ? i.locale = n : H(n) && (s = n), H(l) && (s = l), [i.key || "", u, i, s];
}
function Bn(e, a, t) {
  const n = e;
  for (const l in t) {
    const i = `${a}__${l}`;
    n.__numberFormatters.has(i) && n.__numberFormatters.delete(i);
  }
}
hs();
/*!
  * vue-i18n v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const ou = "9.14.1";
function iu() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Aa().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Aa().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const hl = be.__EXTEND_POINT__, Re = st(hl), ve = {
  FALLBACK_TO_ROOT: hl,
  // 9
  NOT_SUPPORTED_PRESERVE: Re(),
  // 10
  NOT_SUPPORTED_FORMATTER: Re(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: Re(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: Re(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: Re(),
  // 14
  NOT_FOUND_PARENT_SCOPE: Re(),
  // 15
  IGNORE_OBJ_FLATTEN: Re(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: Re(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: Re()
  // 18
}, ru = {
  [ve.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [ve.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [ve.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [ve.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [ve.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [ve.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [ve.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [ve.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [ve.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze",
  [ve.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG]: "'translateExistCompatible' option will be dropped in the next major version."
};
function it(e, ...a) {
  return Qn(ru[e], ...a);
}
const wl = ce.__EXTEND_POINT__, we = st(wl), le = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: wl,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: we(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: we(),
  // 26
  NOT_INSTALLED: we(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: we(),
  // 28
  // directive module errors
  REQUIRED_VALUE: we(),
  // 29
  INVALID_VALUE: we(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: we(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: we(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: we(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: we(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: we(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: we(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: we(),
  // 37
  // for enhancement
  __EXTEND_POINT__: we()
  // 38
};
function Pa(e, ...a) {
  return nl(e, null, process.env.NODE_ENV !== "production" ? { messages: su, args: a } : void 0);
}
const su = {
  [le.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [le.INVALID_ARGUMENT]: "Invalid argument",
  [le.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [le.NOT_INSTALLED]: "Need to install with `app.use` function",
  [le.UNEXPECTED_ERROR]: "Unexpected error",
  [le.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [le.REQUIRED_VALUE]: "Required in value: {0}",
  [le.INVALID_VALUE]: "Invalid value",
  [le.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [le.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [le.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [le.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [le.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [le.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, jt = /* @__PURE__ */ Ve("__translateVNode"), Ut = /* @__PURE__ */ Ve("__datetimeParts"), Wt = /* @__PURE__ */ Ve("__numberParts"), Gt = /* @__PURE__ */ Ve("__enableEmitter"), Ht = /* @__PURE__ */ Ve("__disableEmitter"), uu = Ve("__setPluralRules"), cu = /* @__PURE__ */ Ve("__injectWithOption"), Kt = /* @__PURE__ */ Ve("__dispose");
function Ra(e) {
  if (!G(e))
    return e;
  for (const a in e)
    if (nt(e, a))
      if (!a.includes("."))
        G(e[a]) && Ra(e[a]);
      else {
        const t = a.split("."), n = t.length - 1;
        let l = e, i = !1;
        for (let s = 0; s < n; s++) {
          if (t[s] in l || (l[t[s]] = {}), !G(l[t[s]])) {
            process.env.NODE_ENV !== "production" && ka(it(ve.IGNORE_OBJ_FLATTEN, {
              key: t[s]
            })), i = !0;
            break;
          }
          l = l[t[s]];
        }
        i || (l[t[n]] = e[a], delete e[a]), G(l[t[n]]) && Ra(l[t[n]]);
      }
  return e;
}
function vl(e, a) {
  const { messages: t, __i18n: n, messageResolver: l, flatJson: i } = a, s = H(t) ? t : ie(n) ? {} : { [e]: {} };
  if (ie(n) && n.forEach((u) => {
    if ("locale" in u && "resource" in u) {
      const { locale: r, resource: d } = u;
      r ? (s[r] = s[r] || {}, et(d, s[r])) : et(d, s);
    } else
      L(u) && et(JSON.parse(u), s);
  }), l == null && i)
    for (const u in s)
      nt(s, u) && Ra(s[u]);
  return s;
}
function kl(e) {
  return e.type;
}
function _u(e, a, t) {
  let n = G(a.messages) ? a.messages : {};
  "__i18nGlobal" in t && (n = vl(e.locale.value, {
    messages: n,
    __i18n: t.__i18nGlobal
  }));
  const l = Object.keys(n);
  l.length && l.forEach((i) => {
    e.mergeLocaleMessage(i, n[i]);
  });
  {
    if (G(a.datetimeFormats)) {
      const i = Object.keys(a.datetimeFormats);
      i.length && i.forEach((s) => {
        e.mergeDateTimeFormat(s, a.datetimeFormats[s]);
      });
    }
    if (G(a.numberFormats)) {
      const i = Object.keys(a.numberFormats);
      i.length && i.forEach((s) => {
        e.mergeNumberFormat(s, a.numberFormats[s]);
      });
    }
  }
}
function jn(e) {
  return U(xo, null, e, 0);
}
const Un = "__INTLIFY_META__", Wn = () => [], pu = () => !1;
let Gn = 0;
function Hn(e) {
  return (a, t, n, l) => e(t, n, Jt() || void 0, l);
}
const du = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Jt();
  let a = null;
  return e && (a = kl(e)[Un]) ? { [Un]: a } : null;
};
function mu(e = {}, a) {
  const { __root: t, __injectWithOption: n } = e, l = t === void 0, i = e.flatJson, s = $e ? W : Lo, u = !!e.translateExistCompatible;
  process.env.NODE_ENV !== "production" && u && tl(it(ve.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  let r = oe(e.inheritLocale) ? e.inheritLocale : !0;
  const d = s(
    // prettier-ignore
    t && r ? t.locale.value : L(e.locale) ? e.locale : lt
  ), _ = s(
    // prettier-ignore
    t && r ? t.fallbackLocale.value : L(e.fallbackLocale) || ie(e.fallbackLocale) || H(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : d.value
  ), m = s(vl(d.value, e)), c = s(H(e.datetimeFormats) ? e.datetimeFormats : { [d.value]: {} }), p = s(H(e.numberFormats) ? e.numberFormats : { [d.value]: {} });
  let b = t ? t.missingWarn : oe(e.missingWarn) || tt(e.missingWarn) ? e.missingWarn : !0, v = t ? t.fallbackWarn : oe(e.fallbackWarn) || tt(e.fallbackWarn) ? e.fallbackWarn : !0, C = t ? t.fallbackRoot : oe(e.fallbackRoot) ? e.fallbackRoot : !0, h = !!e.fallbackFormat, y = Q(e.missing) ? e.missing : null, x = Q(e.missing) ? Hn(e.missing) : null, N = Q(e.postTranslation) ? e.postTranslation : null, P = t ? t.warnHtmlMessage : oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, M = !!e.escapeParameter;
  const F = t ? t.modifiers : H(e.modifiers) ? e.modifiers : {};
  let R = e.pluralRules || t && t.pluralRules, S;
  S = (() => {
    l && Mn(null);
    const g = {
      version: ou,
      locale: d.value,
      fallbackLocale: _.value,
      messages: m.value,
      modifiers: F,
      pluralRules: R,
      missing: x === null ? void 0 : x,
      missingWarn: b,
      fallbackWarn: v,
      fallbackFormat: h,
      unresolving: !0,
      postTranslation: N === null ? void 0 : N,
      warnHtmlMessage: P,
      escapeParameter: M,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    g.datetimeFormats = c.value, g.numberFormats = p.value, g.__datetimeFormatters = H(S) ? S.__datetimeFormatters : void 0, g.__numberFormatters = H(S) ? S.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (g.__v_emitter = H(S) ? S.__v_emitter : void 0);
    const k = qs(g);
    return l && Mn(k), k;
  })(), Ia(S, d.value, _.value);
  function ne() {
    return [
      d.value,
      _.value,
      m.value,
      c.value,
      p.value
    ];
  }
  const ee = Y({
    get: () => d.value,
    set: (g) => {
      d.value = g, S.locale = d.value;
    }
  }), Ee = Y({
    get: () => _.value,
    set: (g) => {
      _.value = g, S.fallbackLocale = _.value, Ia(S, d.value, g);
    }
  }), Ae = Y(() => m.value), Ke = /* @__PURE__ */ Y(() => c.value), Ea = /* @__PURE__ */ Y(() => p.value);
  function Ye() {
    return Q(N) ? N : null;
  }
  function Ze(g) {
    N = g, S.postTranslation = g;
  }
  function pt() {
    return y;
  }
  function Z(g) {
    g !== null && (x = Hn(g)), y = g, S.missing = x;
  }
  function dt(g, k) {
    return g !== "translate" || !k.resolvedMessage;
  }
  const Me = (g, k, z, q, Ie, da) => {
    ne();
    let ze;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, l || (S.fallbackContext = t ? Xs() : void 0), ze = g(S);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, l || (S.fallbackContext = void 0);
    }
    if (z !== "translate exists" && // for not `te` (e.g `t`)
    _e(ze) && ze === ut || z === "translate exists" && !ze) {
      const [Le, Et] = k();
      if (process.env.NODE_ENV !== "production" && t && L(Le) && dt(z, Et) && (C && (ct(v, Le) || _l(b, Le)) && ka(it(ve.FALLBACK_TO_ROOT, {
        key: Le,
        type: z
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Ga } = S;
        Ga && C && Ga.emit("fallback", {
          type: z,
          key: Le,
          to: "global",
          groupId: `${z}:${Le}`
        });
      }
      return t && C ? q(t) : Ie(Le);
    } else {
      if (da(ze))
        return ze;
      throw Pa(le.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ye(...g) {
    return Me((k) => Reflect.apply(Dn, null, [k, ...g]), () => Vt(...g), "translate", (k) => Reflect.apply(k.t, k, [...g]), (k) => k, (k) => L(k));
  }
  function $a(...g) {
    const [k, z, q] = g;
    if (q && !G(q))
      throw Pa(le.INVALID_ARGUMENT);
    return ye(k, z, pe({ resolvedMessage: !0 }, q || {}));
  }
  function Va(...g) {
    return Me((k) => Reflect.apply($n, null, [k, ...g]), () => zt(...g), "datetime format", (k) => Reflect.apply(k.d, k, [...g]), () => ot, (k) => L(k));
  }
  function mt(...g) {
    return Me((k) => Reflect.apply(zn, null, [k, ...g]), () => Bt(...g), "number format", (k) => Reflect.apply(k.n, k, [...g]), () => ot, (k) => L(k));
  }
  function ft(g) {
    return g.map((k) => L(k) || _e(k) || oe(k) ? jn(String(k)) : k);
  }
  const bt = {
    normalize: ft,
    interpolate: (g) => g,
    type: "vnode"
  };
  function gt(...g) {
    return Me(
      (k) => {
        let z;
        const q = k;
        try {
          q.processor = bt, z = Reflect.apply(Dn, null, [q, ...g]);
        } finally {
          q.processor = null;
        }
        return z;
      },
      () => Vt(...g),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (k) => k[jt](...g),
      (k) => [jn(k)],
      (k) => ie(k)
    );
  }
  function za(...g) {
    return Me(
      (k) => Reflect.apply(zn, null, [k, ...g]),
      () => Bt(...g),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (k) => k[Wt](...g),
      Wn,
      (k) => L(k) || ie(k)
    );
  }
  function ht(...g) {
    return Me(
      (k) => Reflect.apply($n, null, [k, ...g]),
      () => zt(...g),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (k) => k[Ut](...g),
      Wn,
      (k) => L(k) || ie(k)
    );
  }
  function wt(g) {
    R = g, S.pluralRules = R;
  }
  function Ba(g, k) {
    return Me(() => {
      if (!g)
        return !1;
      const z = L(k) ? k : d.value, q = Ca(z), Ie = S.messageResolver(q, g);
      return u ? Ie != null : va(Ie) || Te(Ie) || L(Ie);
    }, () => [g], "translate exists", (z) => Reflect.apply(z.te, z, [g, k]), pu, (z) => oe(z));
  }
  function ja(g) {
    let k = null;
    const z = il(S, _.value, d.value);
    for (let q = 0; q < z.length; q++) {
      const Ie = m.value[z[q]] || {}, da = S.messageResolver(Ie, g);
      if (da != null) {
        k = da;
        break;
      }
    }
    return k;
  }
  function ya(g) {
    const k = ja(g);
    return k ?? (t ? t.tm(g) || {} : {});
  }
  function Ca(g) {
    return m.value[g] || {};
  }
  function vt(g, k) {
    if (i) {
      const z = { [g]: k };
      for (const q in z)
        nt(z, q) && Ra(z[q]);
      k = z[g];
    }
    m.value[g] = k, S.messages = m.value;
  }
  function kt(g, k) {
    m.value[g] = m.value[g] || {};
    const z = { [g]: k };
    if (i)
      for (const q in z)
        nt(z, q) && Ra(z[q]);
    k = z[g], et(k, m.value[g]), S.messages = m.value;
  }
  function _a(g) {
    return c.value[g] || {};
  }
  function Ta(g, k) {
    c.value[g] = k, S.datetimeFormats = c.value, Vn(S, g, k);
  }
  function Ua(g, k) {
    c.value[g] = pe(c.value[g] || {}, k), S.datetimeFormats = c.value, Vn(S, g, k);
  }
  function Wa(g) {
    return p.value[g] || {};
  }
  function Oe(g, k) {
    p.value[g] = k, S.numberFormats = p.value, Bn(S, g, k);
  }
  function pa(g, k) {
    p.value[g] = pe(p.value[g] || {}, k), S.numberFormats = p.value, Bn(S, g, k);
  }
  Gn++, t && $e && (xa(t.locale, (g) => {
    r && (d.value = g, S.locale = g, Ia(S, d.value, _.value));
  }), xa(t.fallbackLocale, (g) => {
    r && (_.value = g, S.fallbackLocale = g, Ia(S, d.value, _.value));
  }));
  const ae = {
    id: Gn,
    locale: ee,
    fallbackLocale: Ee,
    get inheritLocale() {
      return r;
    },
    set inheritLocale(g) {
      r = g, g && t && (d.value = t.locale.value, _.value = t.fallbackLocale.value, Ia(S, d.value, _.value));
    },
    get availableLocales() {
      return Object.keys(m.value).sort();
    },
    messages: Ae,
    get modifiers() {
      return F;
    },
    get pluralRules() {
      return R || {};
    },
    get isGlobal() {
      return l;
    },
    get missingWarn() {
      return b;
    },
    set missingWarn(g) {
      b = g, S.missingWarn = b;
    },
    get fallbackWarn() {
      return v;
    },
    set fallbackWarn(g) {
      v = g, S.fallbackWarn = v;
    },
    get fallbackRoot() {
      return C;
    },
    set fallbackRoot(g) {
      C = g;
    },
    get fallbackFormat() {
      return h;
    },
    set fallbackFormat(g) {
      h = g, S.fallbackFormat = h;
    },
    get warnHtmlMessage() {
      return P;
    },
    set warnHtmlMessage(g) {
      P = g, S.warnHtmlMessage = g;
    },
    get escapeParameter() {
      return M;
    },
    set escapeParameter(g) {
      M = g, S.escapeParameter = g;
    },
    t: ye,
    getLocaleMessage: Ca,
    setLocaleMessage: vt,
    mergeLocaleMessage: kt,
    getPostTranslationHandler: Ye,
    setPostTranslationHandler: Ze,
    getMissingHandler: pt,
    setMissingHandler: Z,
    [uu]: wt
  };
  return ae.datetimeFormats = Ke, ae.numberFormats = Ea, ae.rt = $a, ae.te = Ba, ae.tm = ya, ae.d = Va, ae.n = mt, ae.getDateTimeFormat = _a, ae.setDateTimeFormat = Ta, ae.mergeDateTimeFormat = Ua, ae.getNumberFormat = Wa, ae.setNumberFormat = Oe, ae.mergeNumberFormat = pa, ae[cu] = n, ae[jt] = gt, ae[Ut] = ht, ae[Wt] = za, process.env.NODE_ENV !== "production" && (ae[Gt] = (g) => {
    S.__v_emitter = g;
  }, ae[Ht] = () => {
    S.__v_emitter = void 0;
  }), ae;
}
const an = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function fu({ slots: e }, a) {
  return a.length === 1 && a[0] === "default" ? (e.default ? e.default() : []).reduce((n, l) => [
    ...n,
    // prettier-ignore
    ...l.type === ta ? l.children : [l]
  ], []) : a.reduce((t, n) => {
    const l = e[n];
    return l && (t[n] = l()), t;
  }, {});
}
function El(e) {
  return ta;
}
pe({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validator: (e) => _e(e) || !isNaN(e)
  }
}, an);
function bu(e) {
  return ie(e) && !L(e[0]);
}
function yl(e, a, t, n) {
  const { slots: l, attrs: i } = a;
  return () => {
    const s = { part: !0 };
    let u = {};
    e.locale && (s.locale = e.locale), L(e.format) ? s.key = e.format : G(e.format) && (L(e.format.key) && (s.key = e.format.key), u = Object.keys(e.format).reduce((c, p) => t.includes(p) ? pe({}, c, { [p]: e.format[p] }) : c, {}));
    const r = n(e.value, s, u);
    let d = [s.key];
    ie(r) ? d = r.map((c, p) => {
      const b = l[c.type], v = b ? b({ [c.type]: c.value, index: p, parts: r }) : [c.value];
      return bu(v) && (v[0].key = `${c.type}-${p}`), v;
    }) : L(r) && (d = [r]);
    const _ = pe({}, i), m = L(e.tag) || G(e.tag) ? e.tag : El();
    return Zt(m, _, d);
  };
}
pe({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, an);
pe({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, an);
function Kn(e, a) {
}
const gu = /* @__PURE__ */ Ve("global-vue-i18n");
function _t(e = {}) {
  const a = Jt();
  if (a == null)
    throw Pa(le.MUST_BE_CALL_SETUP_TOP);
  if (!a.isCE && a.appContext.app != null && !a.appContext.app.__VUE_I18N_SYMBOL__)
    throw Pa(le.NOT_INSTALLED);
  const t = hu(a), n = vu(t), l = kl(a), i = wu(e, l);
  if (i === "global")
    return _u(n, e, l), n;
  if (i === "parent") {
    let r = ku(t, a, e.__useComponent);
    return r == null && (process.env.NODE_ENV !== "production" && ka(it(ve.NOT_FOUND_PARENT_SCOPE)), r = n), r;
  }
  const s = t;
  let u = s.__getInstance(a);
  if (u == null) {
    const r = pe({}, e);
    "__i18n" in l && (r.__i18n = l.__i18n), n && (r.__root = n), u = mu(r), s.__composerExtend && (u[Kt] = s.__composerExtend(u)), yu(s, a, u), s.__setInstance(a, u);
  }
  return u;
}
function hu(e) {
  {
    const a = Zn(e.isCE ? gu : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!a)
      throw Pa(e.isCE ? le.NOT_INSTALLED_WITH_PROVIDE : le.UNEXPECTED_ERROR);
    return a;
  }
}
function wu(e, a) {
  return rt(e) ? "__i18n" in a ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function vu(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function ku(e, a, t = !1) {
  let n = null;
  const l = a.root;
  let i = Eu(a, t);
  for (; i != null; ) {
    const s = e;
    if (e.mode === "composition" && (n = s.__getInstance(i)), n != null || l === i)
      break;
    i = i.parent;
  }
  return n;
}
function Eu(e, a = !1) {
  return e == null ? null : a && e.vnode.ctx || e.parent;
}
function yu(e, a, t) {
  let n = null;
  Yt(() => {
    if (process.env.NODE_ENV !== "production" && a.vnode.el) {
      a.vnode.el.__VUE_I18N__ = t, n = ps();
      const l = t;
      l[Gt] && l[Gt](n), n.on("*", Kn);
    }
  }, a), Io(() => {
    const l = t;
    process.env.NODE_ENV !== "production" && a.vnode.el && a.vnode.el.__VUE_I18N__ && (n && n.off("*", Kn), l[Ht] && l[Ht](), delete a.vnode.el.__VUE_I18N__), e.__deleteInstance(a);
    const i = l[Kt];
    i && (i(), delete l[Kt]);
  }, a);
}
iu();
Ks(Ss);
Ys(il);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Aa();
  e.__INTLIFY__ = !0, Rs(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Cu = {
  password_show: "إظهار كلمة المرور",
  password_hide: "إخفاء كلمة المرور",
  sign_up: {
    email_label: "Email",
    password_label: "كلمة المرور",
    email_input_placeholder: "بريدك الإلكتروني",
    password_input_placeholder: "كلمة المرور الخاصة بك",
    button_label: "إنشاء حساب",
    loading_button_label: "جارٍ إنشاء الحساب ...",
    social_provider_text: "أنشئ حسابًا باستخدام {{provider}}",
    link_text: "ليس لديك حساب؟ أنشئ حسابًا",
    confirmation_text: "تحقق من بريدك الإلكتروني لرابط التأكيد"
  },
  sign_in: {
    email_label: "Email",
    password_label: "كلمة المرور",
    email_input_placeholder: "بريدك الإلكتروني",
    password_input_placeholder: "كلمة المرور الخاصة بك",
    button_label: "تسجيل الدخول",
    loading_button_label: "جارٍ تسجيل الدخول ...",
    social_provider_text: "سجّل الدخول باستخدام {{provider}}",
    link_text: "لديك حساب بالفعل؟ سجّل الدخول"
  },
  magic_link: {
    email_input_label: "Email",
    email_input_placeholder: "بريدك الإلكتروني",
    button_label: "إرسال رابط سحري",
    loading_button_label: "جارٍ إرسال الرابط السحري ...",
    link_text: "أرسل رسالة بريد تحتوي على رابط سحري",
    confirmation_text: "تحقق من بريدك الإلكتروني للرابط السحري"
  },
  forgotten_password: {
    email_label: "Email",
    password_label: "كلمة المرور",
    email_input_placeholder: "بريدك الإلكتروني",
    button_label: "إرسال تعليمات إعادة تعيين كلمة المرور",
    loading_button_label: "جارٍ إرسال التعليمات ...",
    link_text: "هل نسيت كلمة المرور؟",
    confirmation_text: "تحقق من بريدك الإلكتروني لرابط إعادة تعيين كلمة المرور"
  },
  update_password: {
    password_label: "كلمة مرور جديدة",
    password_input_placeholder: "كلمة المرور الجديدة الخاصة بك",
    button_label: "تحديث كلمة المرور",
    loading_button_label: "جارٍ تحديث كلمة المرور ...",
    confirmation_text: "تم تحديث كلمة المرور الخاصة بك"
  },
  verify_otp: {
    email_input_label: "Email",
    email_input_placeholder: "بريدك الإلكتروني",
    phone_input_label: "رقم الهاتف",
    phone_input_placeholder: "رقم هاتفك",
    token_input_label: "الرمز",
    token_input_placeholder: "الرمز الفريد الخاص بك",
    button_label: "التحقق من الرمز",
    loading_button_label: "جارٍ تسجيل الدخول ..."
  }
}, Tu = {
  password_show: "পাসওয়ার্ড দেখান",
  password_hide: "পাসওয়ার্ড লুকান",
  sign_up: {
    email_label: "ইমেইল",
    password_label: "পাসওয়ার্ড",
    email_input_placeholder: "আপনার ইমেইল",
    password_input_placeholder: "আপনার পাসওয়ার্ড",
    button_label: "সাইন আপ",
    loading_button_label: "সাইন আপ হচ্ছে...",
    social_provider_text: "{{provider}} দিয়ে সাইন আপ করুন",
    link_text: "অ্যাকাউন্ট নেই? সাইন আপ করুন",
    confirmation_text: "নিশ্চিতকরণ লিঙ্কের জন্য আপনার ইমেইল চেক করুন"
  },
  sign_in: {
    email_label: "ইমেইল",
    password_label: "পাসওয়ার্ড",
    email_input_placeholder: "আপনার ইমেইল",
    password_input_placeholder: "আপনার পাসওয়ার্ড",
    button_label: "সাইন ইন",
    loading_button_label: "সাইন ইন হচ্ছে...",
    social_provider_text: "{{provider}} দিয়ে সাইন ইন করুন",
    link_text: "ইতিমধ্যে অ্যাকাউন্ট আছে? সাইন ইন করুন"
  },
  magic_link: {
    email_input_label: "ইমেইল ঠিকানা",
    email_input_placeholder: "আপনার ইমেইল",
    button_label: "ম্যাজিক লিঙ্ক পাঠান",
    loading_button_label: "ম্যাজিক লিঙ্ক পাঠানো হচ্ছে...",
    link_text: "একটি ম্যাজিক লিঙ্ক সহ একটি ইমেইল পাঠান",
    confirmation_text: "ম্যাজিক লিঙ্কের জন্য আপনার ইমেইল চেক করুন"
  },
  forgotten_password: {
    email_label: "ইমেইল",
    password_label: "পাসওয়ার্ড",
    email_input_placeholder: "আপনার ইমেইল",
    button_label: "পাসওয়ার্ড রিসেট নির্দেশনা পাঠান",
    loading_button_label: "নির্দেশনা পাঠানো হচ্ছে...",
    link_text: "পাসওয়ার্ড ভুলে গেছেন?",
    confirmation_text: "পাসওয়ার্ড রিসেট লিঙ্কের জন্য আপনার ইমেইল চেক করুন"
  },
  update_password: {
    password_label: "নতুন পাসওয়ার্ড",
    password_input_placeholder: "আপনার নতুন পাসওয়ার্ড",
    button_label: "পাসওয়ার্ড আপডেট করুন",
    loading_button_label: "পাসওয়ার্ড আপডেট হচ্ছে...",
    confirmation_text: "আপনার পাসওয়ার্ড আপডেট করা হয়েছে"
  },
  verify_otp: {
    email_input_label: "ইমেইল",
    email_input_placeholder: "আপনার ইমেইল",
    phone_input_label: "ফোন নম্বর",
    phone_input_placeholder: "আপনার ফোন নম্বর",
    token_input_label: "কোড",
    token_input_placeholder: "আপনার অনন্য কোড",
    button_label: "কোড যাচাই করুন",
    loading_button_label: "সাইন ইন হচ্ছে..."
  }
}, Su = {
  password_show: "Zobrazit heslo",
  password_hide: "Skrýt heslo",
  sign_up: {
    email_label: "E-mail",
    password_label: "Heslo",
    email_input_placeholder: "Váš e-mail",
    password_input_placeholder: "Vaše heslo",
    button_label: "Registrovat",
    loading_button_label: "Registrace...",
    social_provider_text: "Registrovat pomocí {{provider}}",
    link_text: "Nemáte účet? Zaregistrujte se",
    confirmation_text: "Zkontrolujte svůj e-mail pro potvrzovací odkaz"
  },
  sign_in: {
    email_label: "E-mail",
    password_label: "Heslo",
    email_input_placeholder: "Váš e-mail",
    password_input_placeholder: "Vaše heslo",
    button_label: "Přihlásit",
    loading_button_label: "Přihlašování...",
    social_provider_text: "Přihlásit pomocí {{provider}}",
    link_text: "Již máte účet? Přihlaste se"
  },
  magic_link: {
    email_input_label: "E-mailová adresa",
    email_input_placeholder: "Váš e-mail",
    button_label: "Odeslat magický odkaz",
    loading_button_label: "Odesílání magického odkazu...",
    link_text: "Odeslat e-mail obsahující magický odkaz",
    confirmation_text: "Zkontrolujte svůj e-mail pro magický odkaz"
  },
  forgotten_password: {
    email_label: "E-mail",
    password_label: "Heslo",
    email_input_placeholder: "Váš e-mail",
    button_label: "Odeslat pokyny k obnovení hesla",
    loading_button_label: "Odesílání pokynů...",
    link_text: "Zapomněli jste heslo?",
    confirmation_text: "Zkontrolujte svůj e-mail pro odkaz k obnovení hesla"
  },
  update_password: {
    password_label: "Nové heslo",
    password_input_placeholder: "Vaše nové heslo",
    button_label: "Aktualizovat heslo",
    loading_button_label: "Aktualizace hesla...",
    confirmation_text: "Vaše heslo bylo aktualizováno"
  },
  verify_otp: {
    email_input_label: "E-mail",
    email_input_placeholder: "Váš e-mail",
    phone_input_label: "Telefonní číslo",
    phone_input_placeholder: "Vaše telefonní číslo",
    token_input_label: "Kód",
    token_input_placeholder: "Váš jedinečný kód",
    button_label: "Ověřit kód",
    loading_button_label: "Přihlašování..."
  }
}, Nu = {
  password_show: "Passwort anzeigen",
  password_hide: "Passwort verbergen",
  sign_up: {
    email_label: "Email",
    password_label: "Passwort",
    email_input_placeholder: "Ihre E-Mail",
    password_input_placeholder: "Ihr Passwort",
    button_label: "Registrieren",
    loading_button_label: "Registrierung läuft ...",
    social_provider_text: "Registrieren mit {{provider}}",
    link_text: "Noch kein Konto? Registrieren",
    confirmation_text: "Prüfen Sie Ihre E-Mail für den Bestätigungslink"
  },
  sign_in: {
    email_label: "Email",
    password_label: "Passwort",
    email_input_placeholder: "Ihre E-Mail",
    password_input_placeholder: "Ihr Passwort",
    button_label: "Anmelden",
    loading_button_label: "Anmeldung läuft ...",
    social_provider_text: "Anmelden mit {{provider}}",
    link_text: "Haben Sie bereits ein Konto? Anmelden"
  },
  magic_link: {
    email_input_label: "Email",
    email_input_placeholder: "Ihre E-Mail",
    button_label: "Magic Link senden",
    loading_button_label: "Magic Link wird gesendet ...",
    link_text: "E-Mail mit einem Magic Link senden",
    confirmation_text: "Prüfen Sie Ihre E-Mail für den Magic Link"
  },
  forgotten_password: {
    email_label: "Email",
    password_label: "Passwort",
    email_input_placeholder: "Ihre E-Mail",
    button_label: "Anweisungen zum Zurücksetzen senden",
    loading_button_label: "Anweisungen werden gesendet ...",
    link_text: "Passwort vergessen?",
    confirmation_text: "Prüfen Sie Ihre E-Mail für den Link zum Zurücksetzen"
  },
  update_password: {
    password_label: "Neues Passwort",
    password_input_placeholder: "Ihr neues Passwort",
    button_label: "Passwort aktualisieren",
    loading_button_label: "Passwort wird aktualisiert ...",
    confirmation_text: "Ihr Passwort wurde aktualisiert"
  },
  verify_otp: {
    email_input_label: "Email",
    email_input_placeholder: "Ihre E-Mail",
    phone_input_label: "Telefonnummer",
    phone_input_placeholder: "Ihre Telefonnummer",
    token_input_label: "Code",
    token_input_placeholder: "Ihr eindeutiger Code",
    button_label: "Code verifizieren",
    loading_button_label: "Anmeldung läuft ..."
  }
}, Ou = {
  password_show: "Εμφάνιση κωδικού πρόσβασης",
  password_hide: "Απόκρυψη κωδικού πρόσβασης",
  sign_up: {
    email_label: "Email",
    password_label: "Κωδικός πρόσβασης",
    email_input_placeholder: "Το email σας",
    password_input_placeholder: "Ο κωδικός πρόσβασής σας",
    button_label: "Εγγραφή",
    loading_button_label: "Εγγραφή...",
    social_provider_text: "Εγγραφή με {{provider}}",
    link_text: "Δεν έχετε λογαριασμό; Εγγραφείτε",
    confirmation_text: "Ελέγξτε το email σας για τον σύνδεσμο επιβεβαίωσης"
  },
  sign_in: {
    email_label: "Email",
    password_label: "Κωδικός πρόσβασης",
    email_input_placeholder: "Το email σας",
    password_input_placeholder: "Ο κωδικός πρόσβασής σας",
    button_label: "Σύνδεση",
    loading_button_label: "Σύνδεση...",
    social_provider_text: "Σύνδεση με {{provider}}",
    link_text: "Έχετε ήδη λογαριασμό; Συνδεθείτε"
  },
  magic_link: {
    email_input_label: "Διεύθυνση email",
    email_input_placeholder: "Το email σας",
    button_label: "Αποστολή magic link",
    loading_button_label: "Αποστολή magic link...",
    link_text: "Στείλτε ένα email με magic link",
    confirmation_text: "Ελέγξτε το email σας για το magic link"
  },
  forgotten_password: {
    email_label: "Email",
    password_label: "Κωδικός πρόσβασης",
    email_input_placeholder: "Το email σας",
    button_label: "Αποστολή οδηγιών επαναφοράς κωδικού",
    loading_button_label: "Αποστολή οδηγιών...",
    link_text: "Ξεχάσατε τον κωδικό σας;",
    confirmation_text: "Ελέγξτε το email σας για τον σύνδεσμο επαναφοράς κωδικού"
  },
  update_password: {
    password_label: "Νέος κωδικός πρόσβασης",
    password_input_placeholder: "Ο νέος σας κωδικός πρόσβασης",
    button_label: "Ενημέρωση κωδικού πρόσβασης",
    loading_button_label: "Ενημέρωση κωδικού...",
    confirmation_text: "Ο κωδικός σας έχει ενημερωθεί"
  },
  verify_otp: {
    email_input_label: "Email",
    email_input_placeholder: "Το email σας",
    phone_input_label: "Αριθμός τηλεφώνου",
    phone_input_placeholder: "Ο αριθμός τηλεφώνου σας",
    token_input_label: "Κωδικός",
    token_input_placeholder: "Ο μοναδικός σας κωδικός",
    button_label: "Επαλήθευση κωδικού",
    loading_button_label: "Σύνδεση..."
  }
}, Iu = {
  password_show: "Show password",
  password_hide: "Hide password",
  sign_up: {
    email_label: "Email",
    password_label: "Password",
    email_input_placeholder: "Your email",
    password_input_placeholder: "Your password",
    button_label: "Sign up",
    loading_button_label: "Signing up ...",
    social_provider_text: "Sign up with {{provider}}",
    link_text: "Don't have an account? Sign up",
    confirmation_text: "Check your email for the confirmation link"
  },
  sign_in: {
    email_label: "Email",
    password_label: "Password",
    email_input_placeholder: "Your email",
    password_input_placeholder: "Your password",
    button_label: "Sign in",
    loading_button_label: "Signing in ...",
    social_provider_text: "Sign in with {{provider}}",
    link_text: "Already have an account? Sign in"
  },
  magic_link: {
    email_input_label: "Adresse e-mail",
    email_input_placeholder: "Your email",
    button_label: "Send magic link",
    loading_button_label: "Sending magic link ...",
    link_text: "Send an email containing a magic link",
    confirmation_text: "Check your email for the magic link"
  },
  forgotten_password: {
    email_label: "Email",
    password_label: "Password",
    email_input_placeholder: "Your email",
    button_label: "Send password reset instructions",
    loading_button_label: "Sending instructions ...",
    link_text: "Forgot your password?",
    confirmation_text: "Check your email for the password reset link"
  },
  update_password: {
    password_label: "New password",
    password_input_placeholder: "Your new password",
    button_label: "Update password",
    loading_button_label: "Updating password ...",
    confirmation_text: "Your password has been updated"
  },
  verify_otp: {
    email_input_label: "Email",
    email_input_placeholder: "Your email",
    phone_input_label: "Phone number",
    phone_input_placeholder: "Your phone number",
    token_input_label: "Code",
    token_input_placeholder: "Your unique code",
    button_label: "Verify code",
    loading_button_label: "Signing in ..."
  }
}, Lu = {
  password_show: "Mostrar contraseña",
  password_hide: "Ocultar contraseña",
  sign_up: {
    email_label: "Email",
    password_label: "Contraseña",
    email_input_placeholder: "Tu correo electrónico",
    password_input_placeholder: "Tu contraseña",
    button_label: "Registrarse",
    loading_button_label: "Registrando ...",
    social_provider_text: "Regístrate con {{provider}}",
    link_text: "¿No tienes una cuenta? Regístrate",
    confirmation_text: "Revisa tu correo para el enlace de confirmación"
  },
  sign_in: {
    email_label: "Email",
    password_label: "Contraseña",
    email_input_placeholder: "Tu correo electrónico",
    password_input_placeholder: "Tu contraseña",
    button_label: "Iniciar sesión",
    loading_button_label: "Iniciando sesión ...",
    social_provider_text: "Inicia sesión con {{provider}}",
    link_text: "¿Ya tienes una cuenta? Inicia sesión"
  },
  magic_link: {
    email_input_label: "Email",
    email_input_placeholder: "Tu correo electrónico",
    button_label: "Enviar enlace mágico",
    loading_button_label: "Enviando enlace mágico ...",
    link_text: "Enviar un correo con un enlace mágico",
    confirmation_text: "Revisa tu correo para el enlace mágico"
  },
  forgotten_password: {
    email_label: "Email",
    password_label: "Contraseña",
    email_input_placeholder: "Tu correo electrónico",
    button_label: "Enviar instrucciones para restablecer la contraseña",
    loading_button_label: "Enviando instrucciones ...",
    link_text: "¿Olvidaste tu contraseña?",
    confirmation_text: "Revisa tu correo para el enlace de restablecimiento de contraseña"
  },
  update_password: {
    password_label: "Nueva contraseña",
    password_input_placeholder: "Tu nueva contraseña",
    button_label: "Actualizar contraseña",
    loading_button_label: "Actualizando contraseña ...",
    confirmation_text: "Tu contraseña ha sido actualizada"
  },
  verify_otp: {
    email_input_label: "Email",
    email_input_placeholder: "Tu correo electrónico",
    phone_input_label: "Número de teléfono",
    phone_input_placeholder: "Tu número de teléfono",
    token_input_label: "Código",
    token_input_placeholder: "Tu código único",
    button_label: "Verificar código",
    loading_button_label: "Iniciando sesión ..."
  }
}, xu = {
  password_show: "نمایش رمز عبور",
  password_hide: "پنهان کردن رمز عبور",
  sign_up: {
    email_label: "ایمیل",
    password_label: "رمز عبور",
    email_input_placeholder: "ایمیل شما",
    password_input_placeholder: "رمز عبور شما",
    button_label: "ثبت‌نام",
    loading_button_label: "در حال ثبت‌نام...",
    social_provider_text: "ثبت‌نام با {{provider}}",
    link_text: "حساب کاربری ندارید؟ ثبت‌نام کنید",
    confirmation_text: "ایمیل خود را برای لینک تأیید بررسی کنید"
  },
  sign_in: {
    email_label: "ایمیل",
    password_label: "رمز عبور",
    email_input_placeholder: "ایمیل شما",
    password_input_placeholder: "رمز عبور شما",
    button_label: "ورود",
    loading_button_label: "در حال ورود...",
    social_provider_text: "ورود با {{provider}}",
    link_text: "از قبل حساب دارید؟ وارد شوید"
  },
  magic_link: {
    email_input_label: "آدرس ایمیل",
    email_input_placeholder: "ایمیل شما",
    button_label: "ارسال لینک جادویی",
    loading_button_label: "در حال ارسال لینک جادویی...",
    link_text: "ارسال ایمیل حاوی لینک جادویی",
    confirmation_text: "ایمیل خود را برای لینک جادویی بررسی کنید"
  },
  forgotten_password: {
    email_label: "ایمیل",
    password_label: "رمز عبور",
    email_input_placeholder: "ایمیل شما",
    button_label: "ارسال دستورالعمل بازنشانی رمز عبور",
    loading_button_label: "در حال ارسال دستورالعمل‌ها...",
    link_text: "رمز عبور خود را فراموش کرده‌اید؟",
    confirmation_text: "ایمیل خود را برای لینک بازنشانی رمز عبور بررسی کنید"
  },
  update_password: {
    password_label: "رمز عبور جدید",
    password_input_placeholder: "رمز عبور جدید شما",
    button_label: "به‌روزرسانی رمز عبور",
    loading_button_label: "در حال به‌روزرسانی رمز عبور...",
    confirmation_text: "رمز عبور شما به‌روزرسانی شد"
  },
  verify_otp: {
    email_input_label: "ایمیل",
    email_input_placeholder: "ایمیل شما",
    phone_input_label: "شماره تلفن",
    phone_input_placeholder: "شماره تلفن شما",
    token_input_label: "کد",
    token_input_placeholder: "کد منحصربه‌فرد شما",
    button_label: "تأیید کد",
    loading_button_label: "در حال ورود..."
  }
}, Au = {
  password_show: "Ipakita ang password",
  password_hide: "Itago ang password",
  sign_up: {
    email_label: "Email",
    password_label: "Password",
    email_input_placeholder: "Iyong email",
    password_input_placeholder: "Iyong password",
    button_label: "Mag-sign up",
    loading_button_label: "Nagsa-sign up ...",
    social_provider_text: "Mag-sign up gamit ang {{provider}}",
    link_text: "Walang account? Mag-sign up",
    confirmation_text: "Tingnan ang iyong email para sa confirmation link"
  },
  sign_in: {
    email_label: "Email",
    password_label: "Password",
    email_input_placeholder: "Iyong email",
    password_input_placeholder: "Iyong password",
    button_label: "Mag-sign in",
    loading_button_label: "Nagsa-sign in ...",
    social_provider_text: "Mag-sign in gamit ang {{provider}}",
    link_text: "May account na? Mag-sign in"
  },
  magic_link: {
    email_input_label: "Email address",
    email_input_placeholder: "Iyong email",
    button_label: "Magpadala ng magic link",
    loading_button_label: "Nagpapadala ng magic link ...",
    link_text: "Magpadala ng email na naglalaman ng magic link",
    confirmation_text: "Tingnan ang iyong email para sa magic link"
  },
  forgotten_password: {
    email_label: "Email",
    password_label: "Password",
    email_input_placeholder: "Iyong email",
    button_label: "Magpadala ng instruksyon sa pag-reset ng password",
    loading_button_label: "Nagpapadala ng mga instruksyon ...",
    link_text: "Nakalimutan ang password?",
    confirmation_text: "Tingnan ang iyong email para sa link ng pag-reset ng password"
  },
  update_password: {
    password_label: "Bagong password",
    password_input_placeholder: "Iyong bagong password",
    button_label: "I-update ang password",
    loading_button_label: "Ina-update ang password ...",
    confirmation_text: "Na-update na ang iyong password"
  },
  verify_otp: {
    email_input_label: "Email",
    email_input_placeholder: "Iyong email",
    phone_input_label: "Numero ng telepono",
    phone_input_placeholder: "Iyong numero ng telepono",
    token_input_label: "Code",
    token_input_placeholder: "Iyong natatanging code",
    button_label: "I-verify ang code",
    loading_button_label: "Nagsa-sign in ..."
  }
}, Mu = {
  password_show: "Afficher le mot de passe",
  password_hide: "Masquer le mot de passe",
  sign_up: {
    email_label: "E-mail",
    password_label: "Mot de passe",
    email_input_placeholder: "Votre e-mail",
    password_input_placeholder: "Votre mot de passe",
    button_label: "S'inscrire",
    loading_button_label: "Inscription en cours ...",
    social_provider_text: "S'inscrire avec {{provider}}",
    link_text: "Vous n'avez pas de compte ? Inscrivez-vous",
    confirmation_text: "Vérifiez votre e-mail pour le lien de confirmation"
  },
  sign_in: {
    email_label: "E-mail",
    password_label: "Mot de passe",
    email_input_placeholder: "Votre e-mail",
    password_input_placeholder: "Votre mot de passe",
    button_label: "Se connecter",
    loading_button_label: "Connexion en cours ...",
    social_provider_text: "Se connecter avec {{provider}}",
    link_text: "Vous avez déjà un compte ? Connectez-vous"
  },
  magic_link: {
    email_input_label: "E-mail",
    email_input_placeholder: "Votre e-mail",
    button_label: "Envoyer un lien magique",
    loading_button_label: "Envoi du lien magique ...",
    link_text: "Envoyer un e-mail contenant un lien magique",
    confirmation_text: "Vérifiez votre e-mail pour le lien magique"
  },
  forgotten_password: {
    email_label: "E-mail",
    password_label: "Mot de passe",
    email_input_placeholder: "Votre e-mail",
    button_label: "Envoyer les instructions de réinitialisation",
    loading_button_label: "Envoi des instructions ...",
    link_text: "Mot de passe oublié ?",
    confirmation_text: "Vérifiez votre e-mail pour le lien de réinitialisation"
  },
  update_password: {
    password_label: "Nouveau mot de passe",
    password_input_placeholder: "Votre nouveau mot de passe",
    button_label: "Mettre à jour le mot de passe",
    loading_button_label: "Mise à jour du mot de passe ...",
    confirmation_text: "Votre mot de passe a été mis à jour"
  },
  verify_otp: {
    email_input_label: "E-mail",
    email_input_placeholder: "Votre e-mail",
    phone_input_label: "Numéro de téléphone",
    phone_input_placeholder: "Votre numéro de téléphone",
    token_input_label: "Code",
    token_input_placeholder: "Votre code unique",
    button_label: "Vérifier le code",
    loading_button_label: "Connexion en cours ..."
  }
}, Pu = {
  password_show: "הצג סיסמה",
  password_hide: "הסתר סיסמה",
  sign_up: {
    email_label: "אימייל",
    password_label: "סיסמה",
    email_input_placeholder: "האימייל שלך",
    password_input_placeholder: "הסיסמה שלך",
    button_label: "הירשם",
    loading_button_label: "נרשם...",
    social_provider_text: "הירשם עם {{provider}}",
    link_text: "אין לך חשבון? הירשם",
    confirmation_text: "בדוק את האימייל שלך לקבלת קישור האישור"
  },
  sign_in: {
    email_label: "אימייל",
    password_label: "סיסמה",
    email_input_placeholder: "האימייל שלך",
    password_input_placeholder: "הסיסמה שלך",
    button_label: "התחבר",
    loading_button_label: "מתחבר...",
    social_provider_text: "התחבר עם {{provider}}",
    link_text: "כבר יש לך חשבון? התחבר"
  },
  magic_link: {
    email_input_label: "כתובת אימייל",
    email_input_placeholder: "האימייל שלך",
    button_label: "שלח קישור קסם",
    loading_button_label: "שולח קישור קסם...",
    link_text: "שלח אימייל המכיל קישור קסם",
    confirmation_text: "בדוק את האימייל שלך לקבלת קישור הקסם"
  },
  forgotten_password: {
    email_label: "אימייל",
    password_label: "סיסמה",
    email_input_placeholder: "האימייל שלך",
    button_label: "שלח הוראות לאיפוס סיסמה",
    loading_button_label: "שולח הוראות...",
    link_text: "שכחת את הסיסמה?",
    confirmation_text: "בדוק את האימייל שלך לקבלת קישור לאיפוס סיסמה"
  },
  update_password: {
    password_label: "סיסמה חדשה",
    password_input_placeholder: "הסיסמה החדשה שלך",
    button_label: "עדכן סיסמה",
    loading_button_label: "מעדכן סיסמה...",
    confirmation_text: "הסיסמה שלך עודכנה"
  },
  verify_otp: {
    email_input_label: "אימייל",
    email_input_placeholder: "האימייל שלך",
    phone_input_label: "מספר טלפון",
    phone_input_placeholder: "מספר הטלפון שלך",
    token_input_label: "קוד",
    token_input_placeholder: "הקוד הייחודי שלך",
    button_label: "אמת קוד",
    loading_button_label: "מתחבר..."
  }
}, Ru = {
  password_show: "पासवर्ड दिखाएं",
  password_hide: "पासवर्ड छिपाएं",
  sign_up: {
    email_label: "Email",
    password_label: "पासवर्ड",
    email_input_placeholder: "आपका ईमेल",
    password_input_placeholder: "आपका पासवर्ड",
    button_label: "साइन अप करें",
    loading_button_label: "साइन अप हो रहा है ...",
    social_provider_text: "{{provider}} से साइन अप करें",
    link_text: "खाता नहीं है? साइन अप करें",
    confirmation_text: "पुष्टि लिंक के लिए अपना ईमेल देखें"
  },
  sign_in: {
    email_label: "Email",
    password_label: "पासवर्ड",
    email_input_placeholder: "आपका ईमेल",
    password_input_placeholder: "आपका पासवर्ड",
    button_label: "साइन इन करें",
    loading_button_label: "साइन इन हो रहा है ...",
    social_provider_text: "{{provider}} से साइन इन करें",
    link_text: "पहले से खाता है? साइन इन करें"
  },
  magic_link: {
    email_input_label: "Email",
    email_input_placeholder: "आपका ईमेल",
    button_label: "मैजिक लिंक भेजें",
    loading_button_label: "मैजिक लिंक भेजा जा रहा है ...",
    link_text: "मैजिक लिंक वाला ईमेल भेजें",
    confirmation_text: "मैजिक लिंक के लिए अपना ईमेल देखें"
  },
  forgotten_password: {
    email_label: "Email",
    password_label: "पासवर्ड",
    email_input_placeholder: "आपका ईमेल",
    button_label: "पासवर्ड रीसेट निर्देश भेजें",
    loading_button_label: "निर्देश भेजे जा रहे हैं ...",
    link_text: "क्या आप अपना पासवर्ड भूल गए?",
    confirmation_text: "पासवर्ड रीसेट लिंक के लिए अपना ईमेल देखें"
  },
  update_password: {
    password_label: "नया पासवर्ड",
    password_input_placeholder: "आपका नया पासवर्ड",
    button_label: "पासवर्ड अपडेट करें",
    loading_button_label: "पासवर्ड अपडेट हो रहा है ...",
    confirmation_text: "आपका पासवर्ड अपडेट हो गया है"
  },
  verify_otp: {
    email_input_label: "Email",
    email_input_placeholder: "आपका ईमेल",
    phone_input_label: "फ़ोन नंबर",
    phone_input_placeholder: "आपका फ़ोन नंबर",
    token_input_label: "कोड",
    token_input_placeholder: "आपका यूनिक कोड",
    button_label: "कोड सत्यापित करें",
    loading_button_label: "साइन इन हो रहा है ..."
  }
}, Du = {
  password_show: "Jelszó megjelenítése",
  password_hide: "Jelszó elrejtése",
  sign_up: {
    email_label: "E-mail",
    password_label: "Jelszó",
    email_input_placeholder: "Az e-mail címed",
    password_input_placeholder: "A jelszavad",
    button_label: "Regisztráció",
    loading_button_label: "Regisztráció folyamatban...",
    social_provider_text: "Regisztráció a {{provider}} segítségével",
    link_text: "Nincs még fiókod? Regisztrálj",
    confirmation_text: "Ellenőrizd az e-mailedet a megerősítő linkért"
  },
  sign_in: {
    email_label: "E-mail",
    password_label: "Jelszó",
    email_input_placeholder: "Az e-mail címed",
    password_input_placeholder: "A jelszavad",
    button_label: "Bejelentkezés",
    loading_button_label: "Bejelentkezés folyamatban...",
    social_provider_text: "Bejelentkezés a {{provider}} segítségével",
    link_text: "Már van fiókod? Jelentkezz be"
  },
  magic_link: {
    email_input_label: "E-mail cím",
    email_input_placeholder: "Az e-mail címed",
    button_label: "Mágikus link küldése",
    loading_button_label: "Mágikus link küldése...",
    link_text: "E-mail küldése mágikus linkkel",
    confirmation_text: "Ellenőrizd az e-mailedet a mágikus linkért"
  },
  forgotten_password: {
    email_label: "E-mail",
    password_label: "Jelszó",
    email_input_placeholder: "Az e-mail címed",
    button_label: "Jelszó-visszaállítási utasítások küldése",
    loading_button_label: "Utasítások küldése...",
    link_text: "Elfelejtetted a jelszavadat?",
    confirmation_text: "Ellenőrizd az e-mailedet a jelszó-visszaállítási linkért"
  },
  update_password: {
    password_label: "Új jelszó",
    password_input_placeholder: "Az új jelszavad",
    button_label: "Jelszó frissítése",
    loading_button_label: "Jelszó frissítése...",
    confirmation_text: "A jelszavad frissítésre került"
  },
  verify_otp: {
    email_input_label: "E-mail",
    email_input_placeholder: "Az e-mail címed",
    phone_input_label: "Telefonszám",
    phone_input_placeholder: "A telefonszámod",
    token_input_label: "Kód",
    token_input_placeholder: "Az egyedi kódod",
    button_label: "Kód ellenőrzése",
    loading_button_label: "Bejelentkezés folyamatban..."
  }
}, Fu = {
  password_show: "Tampilkan kata sandi",
  password_hide: "Sembunyikan kata sandi",
  sign_up: {
    email_label: "Email",
    password_label: "Kata sandi",
    email_input_placeholder: "Email Anda",
    password_input_placeholder: "Kata sandi Anda",
    button_label: "Daftar",
    loading_button_label: "Sedang mendaftar ...",
    social_provider_text: "Daftar dengan {{provider}}",
    link_text: "Belum punya akun? Daftar",
    confirmation_text: "Periksa email Anda untuk tautan konfirmasi"
  },
  sign_in: {
    email_label: "Email",
    password_label: "Kata sandi",
    email_input_placeholder: "Email Anda",
    password_input_placeholder: "Kata sandi Anda",
    button_label: "Masuk",
    loading_button_label: "Sedang masuk ...",
    social_provider_text: "Masuk dengan {{provider}}",
    link_text: "Sudah punya akun? Masuk"
  },
  magic_link: {
    email_input_label: "Email",
    email_input_placeholder: "Email Anda",
    button_label: "Kirim magic link",
    loading_button_label: "Sedang mengirim magic link ...",
    link_text: "Kirim email yang berisi magic link",
    confirmation_text: "Periksa email Anda untuk magic link"
  },
  forgotten_password: {
    email_label: "Email",
    password_label: "Kata sandi",
    email_input_placeholder: "Email Anda",
    button_label: "Kirim instruksi reset kata sandi",
    loading_button_label: "Sedang mengirim instruksi ...",
    link_text: "Lupa kata sandi?",
    confirmation_text: "Periksa email Anda untuk tautan reset kata sandi"
  },
  update_password: {
    password_label: "Kata sandi baru",
    password_input_placeholder: "Kata sandi baru Anda",
    button_label: "Perbarui kata sandi",
    loading_button_label: "Sedang memperbarui kata sandi ...",
    confirmation_text: "Kata sandi Anda telah diperbarui"
  },
  verify_otp: {
    email_input_label: "Email",
    email_input_placeholder: "Email Anda",
    phone_input_label: "Nomor telepon",
    phone_input_placeholder: "Nomor telepon Anda",
    token_input_label: "Kode",
    token_input_placeholder: "Kode unik Anda",
    button_label: "Verifikasi kode",
    loading_button_label: "Sedang masuk ..."
  }
}, $u = {
  password_show: "Mostra password",
  password_hide: "Nascondi password",
  sign_up: {
    email_label: "Email",
    password_label: "Password",
    email_input_placeholder: "La tua email",
    password_input_placeholder: "La tua password",
    button_label: "Registrati",
    loading_button_label: "Registrazione in corso ...",
    social_provider_text: "Registrati con {{provider}}",
    link_text: "Non hai un account? Registrati",
    confirmation_text: "Controlla la tua email per il link di conferma"
  },
  sign_in: {
    email_label: "Email",
    password_label: "Password",
    email_input_placeholder: "La tua email",
    password_input_placeholder: "La tua password",
    button_label: "Accedi",
    loading_button_label: "Accesso in corso ...",
    social_provider_text: "Accedi con {{provider}}",
    link_text: "Hai già un account? Accedi"
  },
  magic_link: {
    email_input_label: "Email",
    email_input_placeholder: "La tua email",
    button_label: "Invia magic link",
    loading_button_label: "Invio magic link ...",
    link_text: "Invia un'email contenente un magic link",
    confirmation_text: "Controlla la tua email per il magic link"
  },
  forgotten_password: {
    email_label: "Email",
    password_label: "Password",
    email_input_placeholder: "La tua email",
    button_label: "Invia istruzioni per reimpostare la password",
    loading_button_label: "Invio istruzioni ...",
    link_text: "Hai dimenticato la password?",
    confirmation_text: "Controlla la tua email per il link di reimpostazione password"
  },
  update_password: {
    password_label: "Nuova password",
    password_input_placeholder: "La tua nuova password",
    button_label: "Aggiorna password",
    loading_button_label: "Aggiornamento password ...",
    confirmation_text: "La tua password è stata aggiornata"
  },
  verify_otp: {
    email_input_label: "Email",
    email_input_placeholder: "La tua email",
    phone_input_label: "Numero di telefono",
    phone_input_placeholder: "Il tuo numero di telefono",
    token_input_label: "Codice",
    token_input_placeholder: "Il tuo codice univoco",
    button_label: "Verifica codice",
    loading_button_label: "Accesso in corso ..."
  }
}, Vu = {
  password_show: "パスワードを表示",
  password_hide: "パスワードを非表示",
  sign_up: {
    email_label: "メールアドレス",
    password_label: "パスワード",
    email_input_placeholder: "あなたのメールアドレス",
    password_input_placeholder: "あなたのパスワード",
    button_label: "新規登録",
    loading_button_label: "登録中 ...",
    social_provider_text: "{{provider}}で新規登録",
    link_text: "アカウントをお持ちでないですか？ 新規登録",
    confirmation_text: "確認リンクのためにメールをご確認ください"
  },
  sign_in: {
    email_label: "メールアドレス",
    password_label: "パスワード",
    email_input_placeholder: "あなたのメールアドレス",
    password_input_placeholder: "あなたのパスワード",
    button_label: "ログイン",
    loading_button_label: "ログイン中 ...",
    social_provider_text: "{{provider}}でログイン",
    link_text: "すでにアカウントをお持ちですか？ ログイン"
  },
  magic_link: {
    email_input_label: "メールアドレス",
    email_input_placeholder: "あなたのメールアドレス",
    button_label: "マジックリンクを送信",
    loading_button_label: "マジックリンクを送信中 ...",
    link_text: "マジックリンクを含むメールを送信",
    confirmation_text: "マジックリンクのためにメールをご確認ください"
  },
  forgotten_password: {
    email_label: "メールアドレス",
    password_label: "パスワード",
    email_input_placeholder: "あなたのメールアドレス",
    button_label: "パスワード再設定手順を送信",
    loading_button_label: "手順を送信中 ...",
    link_text: "パスワードをお忘れですか？",
    confirmation_text: "パスワード再設定リンクのためにメールをご確認ください"
  },
  update_password: {
    password_label: "新しいパスワード",
    password_input_placeholder: "あなたの新しいパスワード",
    button_label: "パスワードを更新",
    loading_button_label: "パスワード更新中 ...",
    confirmation_text: "パスワードが更新されました"
  },
  verify_otp: {
    email_input_label: "メールアドレス",
    email_input_placeholder: "あなたのメールアドレス",
    phone_input_label: "電話番号",
    phone_input_placeholder: "あなたの電話番号",
    token_input_label: "コード",
    token_input_placeholder: "あなたの固有コード",
    button_label: "コードを確認",
    loading_button_label: "ログイン中 ..."
  }
}, zu = {
  password_show: "비밀번호 표시",
  password_hide: "비밀번호 숨기기",
  sign_up: {
    email_label: "이메일",
    password_label: "비밀번호",
    email_input_placeholder: "이메일을 입력하세요",
    password_input_placeholder: "비밀번호를 입력하세요",
    button_label: "회원가입",
    loading_button_label: "가입 중 ...",
    social_provider_text: "{{provider}}로 회원가입",
    link_text: "계정이 없나요? 회원가입",
    confirmation_text: "확인 링크를 위해 이메일을 확인하세요"
  },
  sign_in: {
    email_label: "이메일",
    password_label: "비밀번호",
    email_input_placeholder: "이메일을 입력하세요",
    password_input_placeholder: "비밀번호를 입력하세요",
    button_label: "로그인",
    loading_button_label: "로그인 중 ...",
    social_provider_text: "{{provider}}로 로그인",
    link_text: "이미 계정이 있나요? 로그인"
  },
  magic_link: {
    email_input_label: "이메일",
    email_input_placeholder: "이메일을 입력하세요",
    button_label: "매직 링크 보내기",
    loading_button_label: "매직 링크 전송 중 ...",
    link_text: "매직 링크가 포함된 이메일 보내기",
    confirmation_text: "매직 링크를 위해 이메일을 확인하세요"
  },
  forgotten_password: {
    email_label: "이메일",
    password_label: "비밀번호",
    email_input_placeholder: "이메일을 입력하세요",
    button_label: "비밀번호 재설정 안내 보내기",
    loading_button_label: "안내 전송 중 ...",
    link_text: "비밀번호를 잊으셨나요?",
    confirmation_text: "비밀번호 재설정 링크를 위해 이메일을 확인하세요"
  },
  update_password: {
    password_label: "새 비밀번호",
    password_input_placeholder: "새 비밀번호를 입력하세요",
    button_label: "비밀번호 업데이트",
    loading_button_label: "비밀번호 업데이트 중 ...",
    confirmation_text: "비밀번호가 업데이트되었습니다"
  },
  verify_otp: {
    email_input_label: "이메일",
    email_input_placeholder: "이메일을 입력하세요",
    phone_input_label: "전화번호",
    phone_input_placeholder: "전화번호를 입력하세요",
    token_input_label: "코드",
    token_input_placeholder: "고유 코드를 입력하세요",
    button_label: "코드 확인",
    loading_button_label: "로그인 중 ..."
  }
}, Bu = {
  password_show: "Tunjukkan kata laluan",
  password_hide: "Sembunyikan kata laluan",
  sign_up: {
    email_label: "E-mel",
    password_label: "Kata laluan",
    email_input_placeholder: "E-mel anda",
    password_input_placeholder: "Kata laluan anda",
    button_label: "Daftar",
    loading_button_label: "Mendaftar ...",
    social_provider_text: "Daftar dengan {{provider}}",
    link_text: "Tiada akaun? Daftar",
    confirmation_text: "Semak e-mel anda untuk pautan pengesahan"
  },
  sign_in: {
    email_label: "E-mel",
    password_label: "Kata laluan",
    email_input_placeholder: "E-mel anda",
    password_input_placeholder: "Kata laluan anda",
    button_label: "Log masuk",
    loading_button_label: "Sedang log masuk ...",
    social_provider_text: "Log masuk dengan {{provider}}",
    link_text: "Sudah ada akaun? Log masuk"
  },
  magic_link: {
    email_input_label: "Alamat e-mel",
    email_input_placeholder: "E-mel anda",
    button_label: "Hantar pautan sihir",
    loading_button_label: "Menghantar pautan sihir ...",
    link_text: "Hantar e-mel yang mengandungi pautan sihir",
    confirmation_text: "Semak e-mel anda untuk pautan sihir"
  },
  forgotten_password: {
    email_label: "E-mel",
    password_label: "Kata laluan",
    email_input_placeholder: "E-mel anda",
    button_label: "Hantar arahan tetap semula kata laluan",
    loading_button_label: "Menghantar arahan ...",
    link_text: "Lupa kata laluan?",
    confirmation_text: "Semak e-mel anda untuk pautan tetap semula kata laluan"
  },
  update_password: {
    password_label: "Kata laluan baharu",
    password_input_placeholder: "Kata laluan baharu anda",
    button_label: "Kemas kini kata laluan",
    loading_button_label: "Mengemas kini kata laluan ...",
    confirmation_text: "Kata laluan anda telah dikemas kini"
  },
  verify_otp: {
    email_input_label: "E-mel",
    email_input_placeholder: "E-mel anda",
    phone_input_label: "Nombor telefon",
    phone_input_placeholder: "Nombor telefon anda",
    token_input_label: "Kod",
    token_input_placeholder: "Kod unik anda",
    button_label: "Sahkan kod",
    loading_button_label: "Sedang log masuk ..."
  }
}, ju = {
  password_show: "Wachtwoord tonen",
  password_hide: "Wachtwoord verbergen",
  sign_up: {
    email_label: "E-mail",
    password_label: "Wachtwoord",
    email_input_placeholder: "Je e-mailadres",
    password_input_placeholder: "Je wachtwoord",
    button_label: "Registreren",
    loading_button_label: "Registreren ...",
    social_provider_text: "Registreren met {{provider}}",
    link_text: "Nog geen account? Registreer je",
    confirmation_text: "Controleer je e-mail voor de bevestigingslink"
  },
  sign_in: {
    email_label: "E-mail",
    password_label: "Wachtwoord",
    email_input_placeholder: "Je e-mailadres",
    password_input_placeholder: "Je wachtwoord",
    button_label: "Inloggen",
    loading_button_label: "Inloggen ...",
    social_provider_text: "Inloggen met {{provider}}",
    link_text: "Heb je al een account? Log in"
  },
  magic_link: {
    email_input_label: "E-mailadres",
    email_input_placeholder: "Je e-mailadres",
    button_label: "Magische link verzenden",
    loading_button_label: "Magische link verzenden ...",
    link_text: "Een e-mail met een magische link verzenden",
    confirmation_text: "Controleer je e-mail voor de magische link"
  },
  forgotten_password: {
    email_label: "E-mail",
    password_label: "Wachtwoord",
    email_input_placeholder: "Je e-mailadres",
    button_label: "Instructies voor wachtwoordherstel verzenden",
    loading_button_label: "Instructies verzenden ...",
    link_text: "Wachtwoord vergeten?",
    confirmation_text: "Controleer je e-mail voor de wachtwoordherstellink"
  },
  update_password: {
    password_label: "Nieuw wachtwoord",
    password_input_placeholder: "Je nieuwe wachtwoord",
    button_label: "Wachtwoord bijwerken",
    loading_button_label: "Wachtwoord bijwerken ...",
    confirmation_text: "Je wachtwoord is bijgewerkt"
  },
  verify_otp: {
    email_input_label: "E-mail",
    email_input_placeholder: "Je e-mailadres",
    phone_input_label: "Telefoonnummer",
    phone_input_placeholder: "Je telefoonnummer",
    token_input_label: "Code",
    token_input_placeholder: "Je unieke code",
    button_label: "Code verifiëren",
    loading_button_label: "Inloggen ..."
  }
}, Uu = {
  password_show: "Pokaż hasło",
  password_hide: "Ukryj hasło",
  sign_up: {
    email_label: "E-mail",
    password_label: "Hasło",
    email_input_placeholder: "Twój e-mail",
    password_input_placeholder: "Twoje hasło",
    button_label: "Zarejestruj się",
    loading_button_label: "Rejestrowanie...",
    social_provider_text: "Zarejestruj się przez {{provider}}",
    link_text: "Nie masz konta? Zarejestruj się",
    confirmation_text: "Sprawdź swój e-mail w celu znalezienia linku potwierdzającego"
  },
  sign_in: {
    email_label: "E-mail",
    password_label: "Hasło",
    email_input_placeholder: "Twój e-mail",
    password_input_placeholder: "Twoje hasło",
    button_label: "Zaloguj się",
    loading_button_label: "Logowanie...",
    social_provider_text: "Zaloguj się przez {{provider}}",
    link_text: "Masz już konto? Zaloguj się"
  },
  magic_link: {
    email_input_label: "Adres e-mail",
    email_input_placeholder: "Twój e-mail",
    button_label: "Wyślij magiczny link",
    loading_button_label: "Wysyłanie magicznego linku...",
    link_text: "Wyślij e-mail z magicznym linkiem",
    confirmation_text: "Sprawdź swój e-mail w celu znalezienia magicznego linku"
  },
  forgotten_password: {
    email_label: "E-mail",
    password_label: "Hasło",
    email_input_placeholder: "Twój e-mail",
    button_label: "Wyślij instrukcje resetowania hasła",
    loading_button_label: "Wysyłanie instrukcji...",
    link_text: "Zapomniałeś hasła?",
    confirmation_text: "Sprawdź swój e-mail w celu znalezienia linku do resetowania hasła"
  },
  update_password: {
    password_label: "Nowe hasło",
    password_input_placeholder: "Twoje nowe hasło",
    button_label: "Aktualizuj hasło",
    loading_button_label: "Aktualizowanie hasła...",
    confirmation_text: "Twoje hasło zostało zaktualizowane"
  },
  verify_otp: {
    email_input_label: "E-mail",
    email_input_placeholder: "Twój e-mail",
    phone_input_label: "Numer telefonu",
    phone_input_placeholder: "Twój numer telefonu",
    token_input_label: "Kod",
    token_input_placeholder: "Twój unikalny kod",
    button_label: "Zweryfikuj kod",
    loading_button_label: "Logowanie..."
  }
}, Wu = {
  password_show: "Mostrar senha",
  password_hide: "Ocultar senha",
  sign_up: {
    email_label: "Email",
    password_label: "Senha",
    email_input_placeholder: "Seu email",
    password_input_placeholder: "Sua senha",
    button_label: "Cadastrar",
    loading_button_label: "Cadastrando ...",
    social_provider_text: "Cadastre-se com {{provider}}",
    link_text: "Não tem uma conta? Cadastre-se",
    confirmation_text: "Verifique seu email para o link de confirmação"
  },
  sign_in: {
    email_label: "Email",
    password_label: "Senha",
    email_input_placeholder: "Seu email",
    password_input_placeholder: "Sua senha",
    button_label: "Entrar",
    loading_button_label: "Entrando ...",
    social_provider_text: "Entre com {{provider}}",
    link_text: "Já tem uma conta? Entre"
  },
  magic_link: {
    email_input_label: "Email",
    email_input_placeholder: "Seu email",
    button_label: "Enviar link mágico",
    loading_button_label: "Enviando link mágico ...",
    link_text: "Enviar um email contendo um link mágico",
    confirmation_text: "Verifique seu email para o link mágico"
  },
  forgotten_password: {
    email_label: "Email",
    password_label: "Senha",
    email_input_placeholder: "Seu email",
    button_label: "Enviar instruções para redefinir senha",
    loading_button_label: "Enviando instruções ...",
    link_text: "Esqueceu sua senha?",
    confirmation_text: "Verifique seu email para o link de redefinição de senha"
  },
  update_password: {
    password_label: "Nova senha",
    password_input_placeholder: "Sua nova senha",
    button_label: "Atualizar senha",
    loading_button_label: "Atualizando senha ...",
    confirmation_text: "Sua senha foi atualizada"
  },
  verify_otp: {
    email_input_label: "Email",
    email_input_placeholder: "Seu email",
    phone_input_label: "Número de telefone",
    phone_input_placeholder: "Seu número de telefone",
    token_input_label: "Código",
    token_input_placeholder: "Seu código único",
    button_label: "Verificar código",
    loading_button_label: "Entrando ..."
  }
}, Gu = {
  password_show: "Afișează parola",
  password_hide: "Ascunde parola",
  sign_up: {
    email_label: "E-mail",
    password_label: "Parolă",
    email_input_placeholder: "E-mailul tău",
    password_input_placeholder: "Parola ta",
    button_label: "Înregistrare",
    loading_button_label: "Se înregistrează ...",
    social_provider_text: "Înregistrare cu {{provider}}",
    link_text: "Nu ai cont? Înregistrează-te",
    confirmation_text: "Verifică e-mailul pentru linkul de confirmare"
  },
  sign_in: {
    email_label: "E-mail",
    password_label: "Parolă",
    email_input_placeholder: "E-mailul tău",
    password_input_placeholder: "Parola ta",
    button_label: "Conectare",
    loading_button_label: "Se conectează ...",
    social_provider_text: "Conectare cu {{provider}}",
    link_text: "Ai deja cont? Conectează-te"
  },
  magic_link: {
    email_input_label: "Adresă de e-mail",
    email_input_placeholder: "E-mailul tău",
    button_label: "Trimite link magic",
    loading_button_label: "Se trimite linkul magic ...",
    link_text: "Trimite un e-mail cu un link magic",
    confirmation_text: "Verifică e-mailul pentru linkul magic"
  },
  forgotten_password: {
    email_label: "E-mail",
    password_label: "Parolă",
    email_input_placeholder: "E-mailul tău",
    button_label: "Trimite instrucțiuni de resetare a parolei",
    loading_button_label: "Se trimit instrucțiunile ...",
    link_text: "Ai uitat parola?",
    confirmation_text: "Verifică e-mailul pentru linkul de resetare a parolei"
  },
  update_password: {
    password_label: "Parolă nouă",
    password_input_placeholder: "Parola ta nouă",
    button_label: "Actualizează parola",
    loading_button_label: "Se actualizează parola ...",
    confirmation_text: "Parola ta a fost actualizată"
  },
  verify_otp: {
    email_input_label: "E-mail",
    email_input_placeholder: "E-mailul tău",
    phone_input_label: "Număr de telefon",
    phone_input_placeholder: "Numărul tău de telefon",
    token_input_label: "Cod",
    token_input_placeholder: "Codul tău unic",
    button_label: "Verifică codul",
    loading_button_label: "Se conectează ..."
  }
}, Hu = {
  password_show: "Показать пароль",
  password_hide: "Скрыть пароль",
  sign_up: {
    email_label: "Email",
    password_label: "Пароль",
    email_input_placeholder: "Ваш email",
    password_input_placeholder: "Ваш пароль",
    button_label: "Зарегистрироваться",
    loading_button_label: "Регистрация ...",
    social_provider_text: "Зарегистрироваться через {{provider}}",
    link_text: "Нет аккаунта? Зарегистрируйтесь",
    confirmation_text: "Проверьте email для ссылки подтверждения"
  },
  sign_in: {
    email_label: "Email",
    password_label: "Пароль",
    email_input_placeholder: "Ваш email",
    password_input_placeholder: "Ваш пароль",
    button_label: "Войти",
    loading_button_label: "Вход ...",
    social_provider_text: "Войти через {{provider}}",
    link_text: "Уже есть аккаунт? Войдите"
  },
  magic_link: {
    email_input_label: "Email",
    email_input_placeholder: "Ваш email",
    button_label: "Отправить magic link",
    loading_button_label: "Отправка magic link ...",
    link_text: "Отправить письмо с magic link",
    confirmation_text: "Проверьте email для magic link"
  },
  forgotten_password: {
    email_label: "Email",
    password_label: "Пароль",
    email_input_placeholder: "Ваш email",
    button_label: "Отправить инструкцию по сбросу пароля",
    loading_button_label: "Отправка инструкции ...",
    link_text: "Забыли пароль?",
    confirmation_text: "Проверьте email для ссылки сброса пароля"
  },
  update_password: {
    password_label: "Новый пароль",
    password_input_placeholder: "Ваш новый пароль",
    button_label: "Обновить пароль",
    loading_button_label: "Обновление пароля ...",
    confirmation_text: "Ваш пароль обновлен"
  },
  verify_otp: {
    email_input_label: "Email",
    email_input_placeholder: "Ваш email",
    phone_input_label: "Номер телефона",
    phone_input_placeholder: "Ваш номер телефона",
    token_input_label: "Код",
    token_input_placeholder: "Ваш уникальный код",
    button_label: "Подтвердить код",
    loading_button_label: "Вход ..."
  }
}, Ku = {
  password_show: "Visa lösenord",
  password_hide: "Dölj lösenord",
  sign_up: {
    email_label: "E-post",
    password_label: "Lösenord",
    email_input_placeholder: "Din e-post",
    password_input_placeholder: "Ditt lösenord",
    button_label: "Registrera",
    loading_button_label: "Registrerar ...",
    social_provider_text: "Registrera med {{provider}}",
    link_text: "Har du inget konto? Registrera dig",
    confirmation_text: "Kontrollera din e-post för bekräftelselänken"
  },
  sign_in: {
    email_label: "E-post",
    password_label: "Lösenord",
    email_input_placeholder: "Din e-post",
    password_input_placeholder: "Ditt lösenord",
    button_label: "Logga in",
    loading_button_label: "Loggar in ...",
    social_provider_text: "Logga in med {{provider}}",
    link_text: "Har du redan ett konto? Logga in"
  },
  magic_link: {
    email_input_label: "E-postadress",
    email_input_placeholder: "Din e-post",
    button_label: "Skicka magisk länk",
    loading_button_label: "Skickar magisk länk ...",
    link_text: "Skicka ett mejl som innehåller en magisk länk",
    confirmation_text: "Kontrollera din e-post för den magiska länken"
  },
  forgotten_password: {
    email_label: "E-post",
    password_label: "Lösenord",
    email_input_placeholder: "Din e-post",
    button_label: "Skicka instruktioner för återställning av lösenord",
    loading_button_label: "Skickar instruktioner ...",
    link_text: "Glömt ditt lösenord?",
    confirmation_text: "Kontrollera din e-post för länken för återställning av lösenord"
  },
  update_password: {
    password_label: "Nytt lösenord",
    password_input_placeholder: "Ditt nya lösenord",
    button_label: "Uppdatera lösenord",
    loading_button_label: "Uppdaterar lösenord ...",
    confirmation_text: "Ditt lösenord har uppdaterats"
  },
  verify_otp: {
    email_input_label: "E-post",
    email_input_placeholder: "Din e-post",
    phone_input_label: "Telefonnummer",
    phone_input_placeholder: "Ditt telefonnummer",
    token_input_label: "Kod",
    token_input_placeholder: "Din unika kod",
    button_label: "Verifiera kod",
    loading_button_label: "Loggar in ..."
  }
}, Yu = {
  password_show: "แสดงรหัสผ่าน",
  password_hide: "ซ่อนรหัสผ่าน",
  sign_up: {
    email_label: "อีเมล",
    password_label: "รหัสผ่าน",
    email_input_placeholder: "อีเมลของคุณ",
    password_input_placeholder: "รหัสผ่านของคุณ",
    button_label: "สมัครสมาชิก",
    loading_button_label: "กำลังสมัคร ...",
    social_provider_text: "สมัครด้วย {{provider}}",
    link_text: "ยังไม่มีบัญชีใช่ไหม? สมัครสมาชิก",
    confirmation_text: "ตรวจสอบอีเมลของคุณเพื่อดูลิงก์ยืนยัน"
  },
  sign_in: {
    email_label: "อีเมล",
    password_label: "รหัสผ่าน",
    email_input_placeholder: "อีเมลของคุณ",
    password_input_placeholder: "รหัสผ่านของคุณ",
    button_label: "เข้าสู่ระบบ",
    loading_button_label: "กำลังเข้าสู่ระบบ ...",
    social_provider_text: "เข้าสู่ระบบด้วย {{provider}}",
    link_text: "มีบัญชีอยู่แล้วใช่ไหม? เข้าสู่ระบบ"
  },
  magic_link: {
    email_input_label: "อีเมล",
    email_input_placeholder: "อีเมลของคุณ",
    button_label: "ส่งลิงก์วิเศษ",
    loading_button_label: "กำลังส่งลิงก์วิเศษ ...",
    link_text: "ส่งอีเมลที่มีลิงก์วิเศษ",
    confirmation_text: "ตรวจสอบอีเมลของคุณเพื่อลิงก์วิเศษ"
  },
  forgotten_password: {
    email_label: "อีเมล",
    password_label: "รหัสผ่าน",
    email_input_placeholder: "อีเมลของคุณ",
    button_label: "ส่งคำแนะนำการรีเซ็ตรหัสผ่าน",
    loading_button_label: "กำลังส่งคำแนะนำ ...",
    link_text: "ลืมรหัสผ่าน?",
    confirmation_text: "ตรวจสอบอีเมลของคุณสำหรับลิงก์รีเซ็ตรหัสผ่าน"
  },
  update_password: {
    password_label: "รหัสผ่านใหม่",
    password_input_placeholder: "รหัสผ่านใหม่ของคุณ",
    button_label: "อัปเดตรหัสผ่าน",
    loading_button_label: "กำลังอัปเดตรหัสผ่าน ...",
    confirmation_text: "รหัสผ่านของคุณได้รับการอัปเดตแล้ว"
  },
  verify_otp: {
    email_input_label: "อีเมล",
    email_input_placeholder: "อีเมลของคุณ",
    phone_input_label: "หมายเลขโทรศัพท์",
    phone_input_placeholder: "หมายเลขโทรศัพท์ของคุณ",
    token_input_label: "รหัส",
    token_input_placeholder: "รหัสเฉพาะของคุณ",
    button_label: "ยืนยันรหัส",
    loading_button_label: "กำลังเข้าสู่ระบบ ..."
  }
}, Zu = {
  password_show: "Şifreyi göster",
  password_hide: "Şifreyi gizle",
  sign_up: {
    email_label: "E-posta",
    password_label: "Şifre",
    email_input_placeholder: "E-postanız",
    password_input_placeholder: "Şifreniz",
    button_label: "Kayıt ol",
    loading_button_label: "Kayıt olunuyor ...",
    social_provider_text: "{{provider}} ile kayıt ol",
    link_text: "Hesabın yok mu? Kayıt ol",
    confirmation_text: "Onay bağlantısı için e-postanızı kontrol edin"
  },
  sign_in: {
    email_label: "E-posta",
    password_label: "Şifre",
    email_input_placeholder: "E-postanız",
    password_input_placeholder: "Şifreniz",
    button_label: "Giriş yap",
    loading_button_label: "Giriş yapılıyor ...",
    social_provider_text: "{{provider}} ile giriş yap",
    link_text: "Zaten hesabın var mı? Giriş yap"
  },
  magic_link: {
    email_input_label: "E-posta",
    email_input_placeholder: "E-postanız",
    button_label: "Sihirli bağlantı gönder",
    loading_button_label: "Sihirli bağlantı gönderiliyor ...",
    link_text: "Sihirli bağlantı içeren bir e-posta gönder",
    confirmation_text: "Sihirli bağlantı için e-postanızı kontrol edin"
  },
  forgotten_password: {
    email_label: "E-posta",
    password_label: "Şifre",
    email_input_placeholder: "E-postanız",
    button_label: "Şifre sıfırlama talimatlarını gönder",
    loading_button_label: "Talimatlar gönderiliyor ...",
    link_text: "Şifreni mi unuttun?",
    confirmation_text: "Şifre sıfırlama bağlantısı için e-postanızı kontrol edin"
  },
  update_password: {
    password_label: "Yeni şifre",
    password_input_placeholder: "Yeni şifreniz",
    button_label: "Şifreyi güncelle",
    loading_button_label: "Şifre güncelleniyor ...",
    confirmation_text: "Şifreniz güncellendi"
  },
  verify_otp: {
    email_input_label: "E-posta",
    email_input_placeholder: "E-postanız",
    phone_input_label: "Telefon numarası",
    phone_input_placeholder: "Telefon numaranız",
    token_input_label: "Kod",
    token_input_placeholder: "Benzersiz kodunuz",
    button_label: "Kodu doğrula",
    loading_button_label: "Giriş yapılıyor ..."
  }
}, Ju = {
  password_show: "Показати пароль",
  password_hide: "Приховати пароль",
  sign_up: {
    email_label: "Email",
    password_label: "Пароль",
    email_input_placeholder: "Ваш email",
    password_input_placeholder: "Ваш пароль",
    button_label: "Зареєструватися",
    loading_button_label: "Реєстрація ...",
    social_provider_text: "Зареєструватися через {{provider}}",
    link_text: "Немає облікового запису? Зареєструйтеся",
    confirmation_text: "Перевірте свою електронну пошту для отримання посилання підтвердження"
  },
  sign_in: {
    email_label: "Email",
    password_label: "Пароль",
    email_input_placeholder: "Ваш email",
    password_input_placeholder: "Ваш пароль",
    button_label: "Увійти",
    loading_button_label: "Вхід ...",
    social_provider_text: "Увійти через {{provider}}",
    link_text: "Вже маєте обліковий запис? Увійдіть"
  },
  magic_link: {
    email_input_label: "Email-адреса",
    email_input_placeholder: "Ваш email",
    button_label: "Надіслати магічне посилання",
    loading_button_label: "Надсилання магічного посилання ...",
    link_text: "Надіслати email з магічним посиланням",
    confirmation_text: "Перевірте свою електронну пошту для магічного посилання"
  },
  forgotten_password: {
    email_label: "Email",
    password_label: "Пароль",
    email_input_placeholder: "Ваш email",
    button_label: "Надіслати інструкції для скидання пароля",
    loading_button_label: "Надсилання інструкцій ...",
    link_text: "Забули пароль?",
    confirmation_text: "Перевірте свою електронну пошту для посилання скидання пароля"
  },
  update_password: {
    password_label: "Новий пароль",
    password_input_placeholder: "Ваш новий пароль",
    button_label: "Оновити пароль",
    loading_button_label: "Оновлення пароля ...",
    confirmation_text: "Ваш пароль оновлено"
  },
  verify_otp: {
    email_input_label: "Email",
    email_input_placeholder: "Ваш email",
    phone_input_label: "Номер телефону",
    phone_input_placeholder: "Ваш номер телефону",
    token_input_label: "Код",
    token_input_placeholder: "Ваш унікальний код",
    button_label: "Підтвердити код",
    loading_button_label: "Вхід ..."
  }
}, Xu = {
  password_show: "پاس ورڈ دکھائیں",
  password_hide: "پاس ورڈ چھپائیں",
  sign_up: {
    email_label: "ای میل",
    password_label: "پاس ورڈ",
    email_input_placeholder: "آپ کا ای میل",
    password_input_placeholder: "آپ کا پاس ورڈ",
    button_label: "سائن اپ کریں",
    loading_button_label: "سائن اپ ہو رہا ہے ...",
    social_provider_text: "{{provider}} کے ساتھ سائن اپ کریں",
    link_text: "اکاؤنٹ نہیں ہے؟ سائن اپ کریں",
    confirmation_text: "تصدیقی لنک کے لیے اپنی ای میل چیک کریں"
  },
  sign_in: {
    email_label: "ای میل",
    password_label: "پاس ورڈ",
    email_input_placeholder: "آپ کا ای میل",
    password_input_placeholder: "آپ کا پاس ورڈ",
    button_label: "سائن ان کریں",
    loading_button_label: "سائن ان ہو رہا ہے ...",
    social_provider_text: "{{provider}} کے ساتھ سائن ان کریں",
    link_text: "پہلے سے اکاؤنٹ ہے؟ سائن ان کریں"
  },
  magic_link: {
    email_input_label: "ای میل پتہ",
    email_input_placeholder: "آپ کا ای میل",
    button_label: "میجک لنک بھیجیں",
    loading_button_label: "میجک لنک بھیجا جا رہا ہے ...",
    link_text: "میجک لنک پر مشتمل ای میل بھیجیں",
    confirmation_text: "میجک لنک کے لیے اپنی ای میل چیک کریں"
  },
  forgotten_password: {
    email_label: "ای میل",
    password_label: "پاس ورڈ",
    email_input_placeholder: "آپ کا ای میل",
    button_label: "پاس ورڈ ری سیٹ کرنے کی ہدایات بھیجیں",
    loading_button_label: "ہدایات بھیجی جا رہی ہیں ...",
    link_text: "اپنا پاس ورڈ بھول گئے؟",
    confirmation_text: "پاس ورڈ ری سیٹ لنک کے لیے اپنی ای میل چیک کریں"
  },
  update_password: {
    password_label: "نیا پاس ورڈ",
    password_input_placeholder: "آپ کا نیا پاس ورڈ",
    button_label: "پاس ورڈ اپ ڈیٹ کریں",
    loading_button_label: "پاس ورڈ اپ ڈیٹ ہو رہا ہے ...",
    confirmation_text: "آپ کا پاس ورڈ اپ ڈیٹ ہو گیا ہے"
  },
  verify_otp: {
    email_input_label: "ای میل",
    email_input_placeholder: "آپ کا ای میل",
    phone_input_label: "فون نمبر",
    phone_input_placeholder: "آپ کا فون نمبر",
    token_input_label: "کوڈ",
    token_input_placeholder: "آپ کا منفرد کوڈ",
    button_label: "کوڈ تصدیق کریں",
    loading_button_label: "سائن ان ہو رہا ہے ..."
  }
}, qu = {
  password_show: "Hiện mật khẩu",
  password_hide: "Ẩn mật khẩu",
  sign_up: {
    email_label: "Email",
    password_label: "Mật khẩu",
    email_input_placeholder: "Email của bạn",
    password_input_placeholder: "Mật khẩu của bạn",
    button_label: "Đăng ký",
    loading_button_label: "Đang đăng ký ...",
    social_provider_text: "Đăng ký với {{provider}}",
    link_text: "Chưa có tài khoản? Đăng ký",
    confirmation_text: "Kiểm tra email để lấy liên kết xác nhận"
  },
  sign_in: {
    email_label: "Email",
    password_label: "Mật khẩu",
    email_input_placeholder: "Email của bạn",
    password_input_placeholder: "Mật khẩu của bạn",
    button_label: "Đăng nhập",
    loading_button_label: "Đang đăng nhập ...",
    social_provider_text: "Đăng nhập với {{provider}}",
    link_text: "Đã có tài khoản? Đăng nhập"
  },
  magic_link: {
    email_input_label: "Email",
    email_input_placeholder: "Email của bạn",
    button_label: "Gửi magic link",
    loading_button_label: "Đang gửi magic link ...",
    link_text: "Gửi email chứa magic link",
    confirmation_text: "Kiểm tra email để lấy magic link"
  },
  forgotten_password: {
    email_label: "Email",
    password_label: "Mật khẩu",
    email_input_placeholder: "Email của bạn",
    button_label: "Gửi hướng dẫn đặt lại mật khẩu",
    loading_button_label: "Đang gửi hướng dẫn ...",
    link_text: "Quên mật khẩu?",
    confirmation_text: "Kiểm tra email để lấy liên kết đặt lại mật khẩu"
  },
  update_password: {
    password_label: "Mật khẩu mới",
    password_input_placeholder: "Mật khẩu mới của bạn",
    button_label: "Cập nhật mật khẩu",
    loading_button_label: "Đang cập nhật mật khẩu ...",
    confirmation_text: "Mật khẩu của bạn đã được cập nhật"
  },
  verify_otp: {
    email_input_label: "Email",
    email_input_placeholder: "Email của bạn",
    phone_input_label: "Số điện thoại",
    phone_input_placeholder: "Số điện thoại của bạn",
    token_input_label: "Mã",
    token_input_placeholder: "Mã xác thực của bạn",
    button_label: "Xác minh mã",
    loading_button_label: "Đang đăng nhập ..."
  }
}, Qu = {
  password_show: "显示密码",
  password_hide: "隐藏密码",
  sign_up: {
    email_label: "邮箱",
    password_label: "密码",
    email_input_placeholder: "您的邮箱",
    password_input_placeholder: "您的密码",
    button_label: "注册",
    loading_button_label: "注册中 ...",
    social_provider_text: "使用 {{provider}} 注册",
    link_text: "还没有账户？立即注册",
    confirmation_text: "请检查您的邮箱以获取确认链接"
  },
  sign_in: {
    email_label: "邮箱",
    password_label: "密码",
    email_input_placeholder: "您的邮箱",
    password_input_placeholder: "您的密码",
    button_label: "登录",
    loading_button_label: "登录中 ...",
    social_provider_text: "使用 {{provider}} 登录",
    link_text: "已有账户？立即登录"
  },
  magic_link: {
    email_input_label: "邮箱",
    email_input_placeholder: "您的邮箱",
    button_label: "发送魔法链接",
    loading_button_label: "正在发送魔法链接 ...",
    link_text: "发送包含魔法链接的邮件",
    confirmation_text: "请检查您的邮箱以获取魔法链接"
  },
  forgotten_password: {
    email_label: "邮箱",
    password_label: "密码",
    email_input_placeholder: "您的邮箱",
    button_label: "发送密码重置说明",
    loading_button_label: "发送说明中 ...",
    link_text: "忘记密码？",
    confirmation_text: "请检查您的邮箱以获取密码重置链接"
  },
  update_password: {
    password_label: "新密码",
    password_input_placeholder: "您的新密码",
    button_label: "更新密码",
    loading_button_label: "更新密码中 ...",
    confirmation_text: "您的密码已更新"
  },
  verify_otp: {
    email_input_label: "邮箱",
    email_input_placeholder: "您的邮箱",
    phone_input_label: "手机号",
    phone_input_placeholder: "您的手机号",
    token_input_label: "验证码",
    token_input_placeholder: "您的唯一验证码",
    button_label: "验证验证码",
    loading_button_label: "登录中 ..."
  }
}, Yn = {
  ar: Cu,
  bn: Tu,
  cs: Su,
  de: Nu,
  el: Ou,
  en: Iu,
  es: Lu,
  fa: xu,
  fil: Au,
  fr: Mu,
  he: Pu,
  hi: Ru,
  hu: Du,
  id: Fu,
  it: $u,
  ja: Vu,
  ko: zu,
  ms: Bu,
  nl: ju,
  pl: Uu,
  pt: Wu,
  ro: Gu,
  ru: Hu,
  sv: Ku,
  th: Yu,
  tr: Zu,
  uk: Ju,
  ur: Xu,
  vi: qu,
  zh: Qu
};
function ec() {
  let e = null;
  try {
    e = _t().locale;
  } catch {
    e = null;
  }
  return Y(() => {
    const a = ((e == null ? void 0 : e.value) ?? "en").toLowerCase();
    return Yn[a] ?? Yn.en;
  });
}
const ac = /* @__PURE__ */ te({
  __name: "Auth",
  props: {
    appearance: {},
    view: { default: "sign_in" },
    localization: {},
    anonymouslyCredentials: { default: void 0 },
    options: { default: void 0 },
    supabaseClient: {},
    socialLayout: { default: "vertical" },
    providers: {},
    providerScopes: {},
    queryParams: {},
    redirectTo: {},
    useOAuthPopup: { type: Boolean },
    popupWindowFeatures: {},
    onlyThirdPartyProviders: { type: Boolean, default: !1 },
    magicLink: { type: Boolean, default: !1 },
    showLinks: { type: Boolean, default: !0 },
    otpType: { default: "email" },
    additionalData: {},
    dark: { type: Boolean, default: !1 },
    theme: { default: "default" }
  },
  emits: ["update:view", "auth:submit", "auth:error"],
  setup(e, { emit: a }) {
    const t = e, n = a, l = W(t.view), i = (_) => {
      n("update:view", _), l.value = _;
    };
    Jn(Ge, {
      authView: l,
      setAuthView: i
    });
    const s = ec(), u = Y(() => {
      var c;
      const _ = Xa(s.value), m = Xa((c = t == null ? void 0 : t.localization) == null ? void 0 : c.variables);
      return Dt(_, m ?? {});
    }), r = Y(() => l.value === "sign_in" || l.value === "sign_up" || l.value === "magic_link"), d = Y(() => {
      var c, p;
      const _ = Xa((c = t.appearance) == null ? void 0 : c.theme), m = Xa((p = t.appearance) == null ? void 0 : p.variables);
      return Dt(
        (_ == null ? void 0 : _.default) ?? {},
        (_ == null ? void 0 : _[t.theme]) ?? {},
        (m == null ? void 0 : m.default) ?? {},
        (m == null ? void 0 : m[t == null ? void 0 : t.theme]) ?? {}
      );
    });
    return $t({ theme: d.value }), xa(
      () => [t.appearance, t.theme],
      () => {
        $t({ theme: d.value });
      },
      { deep: !0 }
    ), xa(
      () => t.view,
      (_) => {
        const { data: m } = t.supabaseClient.auth.onAuthStateChange(
          (c) => {
            c === "PASSWORD_RECOVERY" ? i("update_password") : c === "USER_UPDATED" && i("sign_in");
          }
        );
        return i(_), () => m.subscription.unsubscribe();
      },
      { deep: !0 }
    ), (_, m) => r.value ? (T(), $(pi, {
      key: 0,
      direction: "horizontal",
      gap: "small",
      theme: t.theme,
      appearance: _.appearance
    }, {
      default: A(() => [
        r.value ? (T(), $(Wr, {
          key: 0,
          supabaseClient: _.supabaseClient,
          appearance: _.appearance,
          providers: _.providers,
          providerScopes: _.providerScopes,
          queryParams: _.queryParams,
          socialLayout: _.socialLayout,
          redirectTo: _.redirectTo,
          useOAuthPopup: _.useOAuthPopup,
          popupWindowFeatures: _.popupWindowFeatures,
          onlyThirdPartyProviders: _.onlyThirdPartyProviders,
          i18n: u.value
        }, null, 8, ["supabaseClient", "appearance", "providers", "providerScopes", "queryParams", "socialLayout", "redirectTo", "useOAuthPopup", "popupWindowFeatures", "onlyThirdPartyProviders", "i18n"])) : K("", !0),
        _.onlyThirdPartyProviders ? K("", !0) : (T(), V(ta, { key: 1 }, [
          l.value === "sign_in" || l.value === "sign_up" ? (T(), $(ki, {
            key: 0,
            supabaseClient: _.supabaseClient,
            appearance: _.appearance,
            redirectTo: _.redirectTo,
            magicLink: _.magicLink,
            showLinks: _.showLinks,
            i18n: u.value,
            additionalData: _.additionalData,
            options: _.options,
            "onAuth:submit": m[0] || (m[0] = (c) => n("auth:submit", c)),
            "onAuth:error": m[1] || (m[1] = (c) => n("auth:error", c))
          }, null, 8, ["supabaseClient", "appearance", "redirectTo", "magicLink", "showLinks", "i18n", "additionalData", "options"])) : K("", !0),
          l.value === "magic_link" ? (T(), $(Hr, {
            key: 1,
            supabaseClient: _.supabaseClient,
            appearance: _.appearance,
            redirectTo: _.redirectTo,
            showLinks: _.showLinks,
            i18n: u.value
          }, null, 8, ["supabaseClient", "appearance", "redirectTo", "showLinks", "i18n"])) : K("", !0)
        ], 64))
      ]),
      _: 1
    }, 8, ["theme", "appearance"])) : (T(), V(ta, { key: 1 }, [
      l.value === "forgotten_password" ? (T(), $(Yr, {
        key: 0,
        supabaseClient: _.supabaseClient,
        appearance: _.appearance,
        redirectTo: _.redirectTo,
        showLinks: _.showLinks,
        i18n: u.value,
        options: _.options
      }, null, 8, ["supabaseClient", "appearance", "redirectTo", "showLinks", "i18n", "options"])) : K("", !0),
      l.value === "update_password" ? (T(), $(Jr, {
        key: 1,
        supabaseClient: _.supabaseClient,
        appearance: _.appearance,
        i18n: u.value
      }, null, 8, ["supabaseClient", "appearance", "i18n"])) : K("", !0),
      l.value === "verify_otp" ? (T(), $(es, {
        key: 2,
        supabaseClient: _.supabaseClient,
        appearance: _.appearance,
        otpType: _.otpType,
        i18n: u.value
      }, null, 8, ["supabaseClient", "appearance", "otpType", "i18n"])) : K("", !0),
      l.value === "anonymous_sign_in" ? (T(), $(ts, {
        key: 3,
        supabaseClient: _.supabaseClient,
        appearance: _.appearance,
        i18n: u.value,
        anonymouslyCredentials: _.anonymouslyCredentials
      }, null, 8, ["supabaseClient", "appearance", "i18n", "anonymouslyCredentials"])) : K("", !0)
    ], 64));
  }
}), lc = {
  install(e) {
    e.component("Auth", ac);
  }
};
export {
  ac as Auth,
  Yr as ForgottenPassword,
  Hr as MagicLink,
  Jr as UpdatePassword,
  nc as UserContextProvider,
  _i as UserContextProviderKey,
  lc as default,
  ca as injectStrict,
  qt as useSupabaseUser
};
