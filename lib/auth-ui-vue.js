import { defineComponent as te, useAttrs as ra, computed as q, openBlock as T, createBlock as V, resolveDynamicComponent as sa, mergeProps as We, unref as y, withCtx as P, renderSlot as He, createElementBlock as F, normalizeClass as Dt, normalizeStyle as Oi, ref as $, createElementVNode as D, withModifiers as ge, inject as Xn, watch as Ma, createVNode as j, createTextVNode as B, toDisplayString as U, createCommentVNode as K, createStaticVNode as ja, onMounted as st, provide as Qn, h as Zt, Fragment as na, renderList as Ii, getCurrentInstance as Jt, onUnmounted as Ai, shallowRef as Mi, Text as Pi } from "vue";
var be = {
  SIGN_IN: "sign_in",
  SIGN_UP: "sign_up",
  FORGOTTEN_PASSWORD: "forgotten_password",
  MAGIC_LINK: "magic_link",
  UPDATE_PASSWORD: "update_password",
  VERIFY_OTP: "verify_otp"
}, Ri = "supabase-auth-ui", Di = {
  // interfaces
  ROOT: "root",
  SIGN_IN: be.SIGN_IN,
  SIGN_UP: be.SIGN_UP,
  FORGOTTEN_PASSWORD: be.FORGOTTEN_PASSWORD,
  MAGIC_LINK: be.MAGIC_LINK,
  UPDATE_PASSWORD: be.UPDATE_PASSWORD,
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
function _a(e, a, t) {
  var n, l;
  const o = [], _ = Di[e];
  return o.push(
    t != null && t.prependedClassName ? (t == null ? void 0 : t.prependedClassName) + "_" + _ : Ri + "_" + _
  ), (n = t == null ? void 0 : t.className) != null && n[e] && o.push((l = t == null ? void 0 : t.className) == null ? void 0 : l[e]), ((t == null ? void 0 : t.extend) === void 0 || (t == null ? void 0 : t.extend) === !0) && o.push(a), o;
}
function zt(e, a) {
  let t;
  if (e && a && typeof e == "object" && typeof a == "object") {
    if (Array.isArray(a))
      for (t = 0; t < a.length; t++)
        e[t] = zt(e[t], a[t]);
    else
      for (t in a)
        e[t] = zt(e[t], a[t]);
    return e;
  }
  return a;
}
function jt(e, ...a) {
  let t = a.length;
  for (let n = 0; n < t; n++)
    e = zt(e, a[n]);
  return e;
}
function zi(e, a) {
  return e.replace(
    /{{(\w+)}}/g,
    (t, n) => a.hasOwnProperty(n) ? a[n] : t
  );
}
var hn, Z = "colors", me = "sizes", N = "space", ji = { gap: N, gridGap: N, columnGap: N, gridColumnGap: N, rowGap: N, gridRowGap: N, inset: N, insetBlock: N, insetBlockEnd: N, insetBlockStart: N, insetInline: N, insetInlineEnd: N, insetInlineStart: N, margin: N, marginTop: N, marginRight: N, marginBottom: N, marginLeft: N, marginBlock: N, marginBlockEnd: N, marginBlockStart: N, marginInline: N, marginInlineEnd: N, marginInlineStart: N, padding: N, paddingTop: N, paddingRight: N, paddingBottom: N, paddingLeft: N, paddingBlock: N, paddingBlockEnd: N, paddingBlockStart: N, paddingInline: N, paddingInlineEnd: N, paddingInlineStart: N, top: N, right: N, bottom: N, left: N, scrollMargin: N, scrollMarginTop: N, scrollMarginRight: N, scrollMarginBottom: N, scrollMarginLeft: N, scrollMarginX: N, scrollMarginY: N, scrollMarginBlock: N, scrollMarginBlockEnd: N, scrollMarginBlockStart: N, scrollMarginInline: N, scrollMarginInlineEnd: N, scrollMarginInlineStart: N, scrollPadding: N, scrollPaddingTop: N, scrollPaddingRight: N, scrollPaddingBottom: N, scrollPaddingLeft: N, scrollPaddingX: N, scrollPaddingY: N, scrollPaddingBlock: N, scrollPaddingBlockEnd: N, scrollPaddingBlockStart: N, scrollPaddingInline: N, scrollPaddingInlineEnd: N, scrollPaddingInlineStart: N, fontSize: "fontSizes", background: Z, backgroundColor: Z, backgroundImage: Z, borderImage: Z, border: Z, borderBlock: Z, borderBlockEnd: Z, borderBlockStart: Z, borderBottom: Z, borderBottomColor: Z, borderColor: Z, borderInline: Z, borderInlineEnd: Z, borderInlineStart: Z, borderLeft: Z, borderLeftColor: Z, borderRight: Z, borderRightColor: Z, borderTop: Z, borderTopColor: Z, caretColor: Z, color: Z, columnRuleColor: Z, fill: Z, outline: Z, outlineColor: Z, stroke: Z, textDecorationColor: Z, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: me, minBlockSize: me, maxBlockSize: me, inlineSize: me, minInlineSize: me, maxInlineSize: me, width: me, minWidth: me, maxWidth: me, height: me, minHeight: me, maxHeight: me, flexBasis: me, gridTemplateColumns: me, gridTemplateRows: me, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, Fi = (e, a) => typeof a == "function" ? { "()": Function.prototype.toString.call(a) } : a, Fa = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (a, t, ...n) => {
    const l = ((o) => JSON.stringify(o, Fi))(a);
    return l in e ? e[l] : e[l] = t(a, ...n);
  };
}, et = Symbol.for("sxs.internal"), Xt = (e, a) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)), wn = (e) => {
  for (const a in e)
    return !0;
  return !1;
}, { hasOwnProperty: Vi } = Object.prototype, Ft = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (a) => "-" + a.toLowerCase()), $i = /\s+(?![^()]*\))/, wa = (e) => (a) => e(...typeof a == "string" ? String(a).split($i) : [a]), vn = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: wa((e, a) => ({ marginBlockStart: e, marginBlockEnd: a || e })), marginInline: wa((e, a) => ({ marginInlineStart: e, marginInlineEnd: a || e })), maxSize: wa((e, a) => ({ maxBlockSize: e, maxInlineSize: a || e })), minSize: wa((e, a) => ({ minBlockSize: e, minInlineSize: a || e })), paddingBlock: wa((e, a) => ({ paddingBlockStart: e, paddingBlockEnd: a || e })), paddingInline: wa((e, a) => ({ paddingInlineStart: e, paddingInlineEnd: a || e })) }, Pt = /([\d.]+)([^]*)/, Bi = (e, a) => e.length ? e.reduce((t, n) => (t.push(...a.map((l) => l.includes("&") ? l.replace(/&/g, /[ +>|~]/.test(n) && /&.*&/.test(l) ? `:is(${n})` : n) : n + " " + l)), t), []) : a, Ui = (e, a) => e in Wi && typeof a == "string" ? a.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t, n, l, o) => n + (l === "stretch" ? `-moz-available${o};${Ft(e)}:${n}-webkit-fill-available` : `-moz-fit-content${o};${Ft(e)}:${n}fit-content`) + o) : String(a), Wi = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, Fe = (e) => e ? e + "-" : "", el = (e, a, t) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (n, l, o, _, d) => _ == "$" == !!o ? n : (l || _ == "--" ? "calc(" : "") + "var(--" + (_ === "$" ? Fe(a) + (d.includes("$") ? "" : Fe(t)) + d.replace(/\$/g, "-") : d) + ")" + (l || _ == "--" ? "*" + (l || "") + (o || "1") + ")" : "")), Hi = /\s*,\s*(?![^()]*\))/, Gi = Object.prototype.toString, va = (e, a, t, n, l) => {
  let o, _, d;
  const r = (c, m, p) => {
    let u, s;
    const f = (v) => {
      for (u in v) {
        const k = u.charCodeAt(0) === 64, L = k && Array.isArray(v[u]) ? v[u] : [v[u]];
        for (s of L) {
          const S = /[A-Z]/.test(g = u) ? g : g.replace(/-[^]/g, (M) => M[1].toUpperCase()), R = typeof s == "object" && s && s.toString === Gi && (!n.utils[S] || !m.length);
          if (S in n.utils && !R) {
            const M = n.utils[S];
            if (M !== _) {
              _ = M, f(M(s)), _ = null;
              continue;
            }
          } else if (S in vn) {
            const M = vn[S];
            if (M !== d) {
              d = M, f(M(s)), d = null;
              continue;
            }
          }
          if (k && (x = u.slice(1) in n.media ? "@media " + n.media[u.slice(1)] : u, u = x.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (M, z, O, C, J, ne) => {
            const ee = Pt.test(z), ye = 0.0625 * (ee ? -1 : 1), [Pe, qe] = ee ? [C, z] : [z, C];
            return "(" + (O[0] === "=" ? "" : O[0] === ">" === ee ? "max-" : "min-") + Pe + ":" + (O[0] !== "=" && O.length === 1 ? qe.replace(Pt, (Ea, Ye, Ze) => Number(Ye) + ye * (O === ">" ? 1 : -1) + Ze) : qe) + (J ? ") and (" + (J[0] === ">" ? "min-" : "max-") + Pe + ":" + (J.length === 1 ? ne.replace(Pt, (Ea, Ye, Ze) => Number(Ye) + ye * (J === ">" ? -1 : 1) + Ze) : ne) : "") + ")";
          })), R) {
            const M = k ? p.concat(u) : [...p], z = k ? [...m] : Bi(m, u.split(Hi));
            o !== void 0 && l(kn(...o)), o = void 0, r(s, z, M);
          } else
            o === void 0 && (o = [[], m, p]), u = k || u.charCodeAt(0) !== 36 ? u : `--${Fe(n.prefix)}${u.slice(1).replace(/\$/g, "-")}`, s = R ? s : typeof s == "number" ? s && S in Ki ? String(s) + "px" : String(s) : el(Ui(S, s ?? ""), n.prefix, n.themeMap[S]), o[0].push(`${k ? `${u} ` : `${Ft(u)}:`}${s}`);
        }
      }
      var x, g;
    };
    f(c), o !== void 0 && l(kn(...o)), o = void 0;
  };
  r(e, a, t);
}, kn = (e, a, t) => `${t.map((n) => `${n}{`).join("")}${a.length ? `${a.join(",")}{` : ""}${e.join(";")}${a.length ? "}" : ""}${Array(t.length ? t.length + 1 : 0).join("}")}`, Ki = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, yn = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), la = (e) => ((a) => {
  let t, n = "";
  for (t = Math.abs(a); t > 52; t = t / 52 | 0)
    n = yn(t % 52) + n;
  return yn(t % 52) + n;
})(((a, t) => {
  let n = t.length;
  for (; n; )
    a = 33 * a ^ t.charCodeAt(--n);
  return a;
})(5381, JSON.stringify(e)) >>> 0), Aa = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], qi = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, Yi = (e) => {
  let a;
  const t = () => {
    const { cssRules: l } = a.sheet;
    return [].map.call(l, (o, _) => {
      const { cssText: d } = o;
      let r = "";
      if (d.startsWith("--sxs"))
        return "";
      if (l[_ - 1] && (r = l[_ - 1].cssText).startsWith("--sxs")) {
        if (!o.cssRules.length)
          return "";
        for (const c in a.rules)
          if (a.rules[c].group === o)
            return `--sxs{--sxs:${[...a.rules[c].cache].join(" ")}}${d}`;
        return o.cssRules.length ? `${r}${d}` : "";
      }
      return d;
    }).join("");
  }, n = () => {
    if (a) {
      const { rules: d, sheet: r } = a;
      if (!r.deleteRule) {
        for (; Object(Object(r.cssRules)[0]).type === 3; )
          r.cssRules.splice(0, 1);
        r.cssRules = [];
      }
      for (const c in d)
        delete d[c];
    }
    const l = Object(e).styleSheets || [];
    for (const d of l)
      if (qi(d)) {
        for (let r = 0, c = d.cssRules; c[r]; ++r) {
          const m = Object(c[r]);
          if (m.type !== 1)
            continue;
          const p = Object(c[r + 1]);
          if (p.type !== 4)
            continue;
          ++r;
          const { cssText: u } = m;
          if (!u.startsWith("--sxs"))
            continue;
          const s = u.slice(14, -3).trim().split(/\s+/), f = Aa[s[0]];
          f && (a || (a = { sheet: d, reset: n, rules: {}, toString: t }), a.rules[f] = { group: p, index: r, cache: new Set(s) });
        }
        if (a)
          break;
      }
    if (!a) {
      const d = (r, c) => ({ type: c, cssRules: [], insertRule(m, p) {
        this.cssRules.splice(p, 0, d(m, { import: 3, undefined: 1 }[(m.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return r === "@media{}" ? `@media{${[].map.call(this.cssRules, (m) => m.cssText).join("")}}` : r;
      } });
      a = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : d("", "text/css"), rules: {}, reset: n, toString: t };
    }
    const { sheet: o, rules: _ } = a;
    for (let d = Aa.length - 1; d >= 0; --d) {
      const r = Aa[d];
      if (!_[r]) {
        const c = Aa[d + 1], m = _[c] ? _[c].index : o.cssRules.length;
        o.insertRule("@media{}", m), o.insertRule(`--sxs{--sxs:${d}}`, m), _[r] = { group: o.cssRules[m + 1], index: m, cache: /* @__PURE__ */ new Set([d]) };
      }
      Zi(_[r]);
    }
  };
  return n(), a;
}, Zi = (e) => {
  const a = e.group;
  let t = a.cssRules.length;
  e.apply = (n) => {
    try {
      a.insertRule(n, t), ++t;
    } catch {
    }
  };
}, La = Symbol(), Ji = Fa(), Xi = (e, a) => Ji(e, () => (...t) => {
  let n = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const l of t)
    if (l != null)
      if (l[et]) {
        n.type == null && (n.type = l[et].type);
        for (const o of l[et].composers)
          n.composers.add(o);
      } else
        l.constructor !== Object || l.$$typeof ? n.type == null && (n.type = l) : n.composers.add(Qi(l, e));
  return n.type == null && (n.type = "span"), n.composers.size || n.composers.add(["PJLV", {}, [], [], {}, []]), eo(e, n, a);
}), Qi = ({ variants: e, compoundVariants: a, defaultVariants: t, ...n }, l) => {
  const o = `${Fe(l.prefix)}c-${la(n)}`, _ = [], d = [], r = /* @__PURE__ */ Object.create(null), c = [];
  for (const u in t)
    r[u] = String(t[u]);
  if (typeof e == "object" && e)
    for (const u in e) {
      m = r, p = u, Vi.call(m, p) || (r[u] = "undefined");
      const s = e[u];
      for (const f in s) {
        const v = { [u]: String(f) };
        String(f) === "undefined" && c.push(u);
        const x = s[f], g = [v, x, !wn(x)];
        _.push(g);
      }
    }
  var m, p;
  if (typeof a == "object" && a)
    for (const u of a) {
      let { css: s, ...f } = u;
      s = typeof s == "object" && s || {};
      for (const x in f)
        f[x] = String(f[x]);
      const v = [f, s, !wn(s)];
      d.push(v);
    }
  return [o, n, _, d, r, c];
}, eo = (e, a, t) => {
  const [n, l, o, _] = ao(a.composers), d = typeof a.type == "function" || a.type.$$typeof ? ((p) => {
    function u() {
      for (let s = 0; s < u[La].length; s++) {
        const [f, v] = u[La][s];
        p.rules[f].apply(v);
      }
      return u[La] = [], null;
    }
    return u[La] = [], u.rules = {}, Aa.forEach((s) => u.rules[s] = { apply: (f) => u[La].push([s, f]) }), u;
  })(t) : null, r = (d || t).rules, c = `.${n}${l.length > 1 ? `:where(.${l.slice(1).join(".")})` : ""}`, m = (p) => {
    p = typeof p == "object" && p || to;
    const { css: u, ...s } = p, f = {};
    for (const g in o)
      if (delete s[g], g in p) {
        let k = p[g];
        typeof k == "object" && k ? f[g] = { "@initial": o[g], ...k } : (k = String(k), f[g] = k !== "undefined" || _.has(g) ? k : o[g]);
      } else
        f[g] = o[g];
    const v = /* @__PURE__ */ new Set([...l]);
    for (const [g, k, L, S] of a.composers) {
      t.rules.styled.cache.has(g) || (t.rules.styled.cache.add(g), va(k, [`.${g}`], [], e, (z) => {
        r.styled.apply(z);
      }));
      const R = En(L, f, e.media), M = En(S, f, e.media, !0);
      for (const z of R)
        if (z !== void 0)
          for (const [O, C, J] of z) {
            const ne = `${g}-${la(C)}-${O}`;
            v.add(ne);
            const ee = (J ? t.rules.resonevar : t.rules.onevar).cache, ye = J ? r.resonevar : r.onevar;
            ee.has(ne) || (ee.add(ne), va(C, [`.${ne}`], [], e, (Pe) => {
              ye.apply(Pe);
            }));
          }
      for (const z of M)
        if (z !== void 0)
          for (const [O, C] of z) {
            const J = `${g}-${la(C)}-${O}`;
            v.add(J), t.rules.allvar.cache.has(J) || (t.rules.allvar.cache.add(J), va(C, [`.${J}`], [], e, (ne) => {
              r.allvar.apply(ne);
            }));
          }
    }
    if (typeof u == "object" && u) {
      const g = `${n}-i${la(u)}-css`;
      v.add(g), t.rules.inline.cache.has(g) || (t.rules.inline.cache.add(g), va(u, [`.${g}`], [], e, (k) => {
        r.inline.apply(k);
      }));
    }
    for (const g of String(p.className || "").trim().split(/\s+/))
      g && v.add(g);
    const x = s.className = [...v].join(" ");
    return { type: a.type, className: x, selector: c, props: s, toString: () => x, deferredInjector: d };
  };
  return Xt(m, { className: n, selector: c, [et]: a, toString: () => (t.rules.styled.cache.has(n) || m(), n) });
}, ao = (e) => {
  let a = "";
  const t = [], n = {}, l = [];
  for (const [o, , , , _, d] of e) {
    a === "" && (a = o), t.push(o), l.push(...d);
    for (const r in _) {
      const c = _[r];
      (n[r] === void 0 || c !== "undefined" || d.includes(c)) && (n[r] = c);
    }
  }
  return [a, t, n, new Set(l)];
}, En = (e, a, t, n) => {
  const l = [];
  e:
    for (let [o, _, d] of e) {
      if (d)
        continue;
      let r, c = 0, m = !1;
      for (r in o) {
        const p = o[r];
        let u = a[r];
        if (u !== p) {
          if (typeof u != "object" || !u)
            continue e;
          {
            let s, f, v = 0;
            for (const x in u) {
              if (p === String(u[x])) {
                if (x !== "@initial") {
                  const g = x.slice(1);
                  (f = f || []).push(g in t ? t[g] : x.replace(/^@media ?/, "")), m = !0;
                }
                c += v, s = !0;
              }
              ++v;
            }
            if (f && f.length && (_ = { ["@media " + f.join(", ")]: _ }), !s)
              continue e;
          }
        }
      }
      (l[c] = l[c] || []).push([n ? "cv" : `${r}-${o[r]}`, _, m]);
    }
  return l;
}, to = {}, no = Fa(), lo = (e, a) => no(e, () => (...t) => {
  const n = () => {
    for (let l of t) {
      l = typeof l == "object" && l || {};
      let o = la(l);
      if (!a.rules.global.cache.has(o)) {
        if (a.rules.global.cache.add(o), "@import" in l) {
          let _ = [].indexOf.call(a.sheet.cssRules, a.rules.themed.group) - 1;
          for (let d of [].concat(l["@import"]))
            d = d.includes('"') || d.includes("'") ? d : `"${d}"`, a.sheet.insertRule(`@import ${d};`, _++);
          delete l["@import"];
        }
        va(l, [], [], e, (_) => {
          a.rules.global.apply(_);
        });
      }
    }
    return "";
  };
  return Xt(n, { toString: n });
}), io = Fa(), oo = (e, a) => io(e, () => (t) => {
  const n = `${Fe(e.prefix)}k-${la(t)}`, l = () => {
    if (!a.rules.global.cache.has(n)) {
      a.rules.global.cache.add(n);
      const o = [];
      va(t, [], [], e, (d) => o.push(d));
      const _ = `@keyframes ${n}{${o.join("")}}`;
      a.rules.global.apply(_);
    }
    return n;
  };
  return Xt(l, { get name() {
    return l();
  }, toString: l });
}), ro = class {
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
}, so = Fa(), _o = (e, a) => so(e, () => (t, n) => {
  n = typeof t == "object" && t || Object(n);
  const l = `.${t = (t = typeof t == "string" ? t : "") || `${Fe(e.prefix)}t-${la(n)}`}`, o = {}, _ = [];
  for (const r in n) {
    o[r] = {};
    for (const c in n[r]) {
      const m = `--${Fe(e.prefix)}${r}-${c}`, p = el(String(n[r][c]), e.prefix, r);
      o[r][c] = new ro(c, p, r, e.prefix), _.push(`${m}:${p}`);
    }
  }
  const d = () => {
    if (_.length && !a.rules.themed.cache.has(t)) {
      a.rules.themed.cache.add(t);
      const r = `${n === e.theme ? ":root," : ""}.${t}{${_.join(";")}}`;
      a.rules.themed.apply(r);
    }
    return t;
  };
  return { ...o, get className() {
    return d();
  }, selector: l, toString: d };
}), uo = Fa(), Vt = (e) => {
  let a = !1;
  const t = uo(e, (n) => {
    a = !0;
    const l = "prefix" in (n = typeof n == "object" && n || {}) ? String(n.prefix) : "", o = typeof n.media == "object" && n.media || {}, _ = typeof n.root == "object" ? n.root || null : globalThis.document || null, d = typeof n.theme == "object" && n.theme || {}, r = { prefix: l, media: o, theme: d, themeMap: typeof n.themeMap == "object" && n.themeMap || { ...ji }, utils: typeof n.utils == "object" && n.utils || {} }, c = Yi(_), m = { css: Xi(r, c), globalCss: lo(r, c), keyframes: oo(r, c), createTheme: _o(r, c), reset() {
      c.reset(), m.theme.toString();
    }, theme: {}, sheet: c, config: r, prefix: l, getCssText: c.toString, toString: c.toString };
    return String(m.theme = m.createTheme(d)), m;
  });
  return a || t.reset(), t;
}, al = () => hn || (hn = Vt()), po = (...e) => al().createTheme(...e), Ie = (...e) => al().css(...e), Xa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function co(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tt = { exports: {} };
tt.exports;
(function(e, a) {
  var t = 200, n = "__lodash_hash_undefined__", l = 9007199254740991, o = "[object Arguments]", _ = "[object Array]", d = "[object Boolean]", r = "[object Date]", c = "[object Error]", m = "[object Function]", p = "[object GeneratorFunction]", u = "[object Map]", s = "[object Number]", f = "[object Object]", v = "[object Promise]", x = "[object RegExp]", g = "[object Set]", k = "[object String]", L = "[object Symbol]", S = "[object WeakMap]", R = "[object ArrayBuffer]", M = "[object DataView]", z = "[object Float32Array]", O = "[object Float64Array]", C = "[object Int8Array]", J = "[object Int16Array]", ne = "[object Int32Array]", ee = "[object Uint8Array]", ye = "[object Uint8ClampedArray]", Pe = "[object Uint16Array]", qe = "[object Uint32Array]", Ea = /[\\^$.*+?()[\]{}|]/g, Ye = /\w*$/, Ze = /^\[object .+?Constructor\]$/, mt = /^(?:0|[1-9]\d*)$/, Y = {};
  Y[o] = Y[_] = Y[R] = Y[M] = Y[d] = Y[r] = Y[z] = Y[O] = Y[C] = Y[J] = Y[ne] = Y[u] = Y[s] = Y[f] = Y[x] = Y[g] = Y[k] = Y[L] = Y[ee] = Y[ye] = Y[Pe] = Y[qe] = !0, Y[c] = Y[m] = Y[S] = !1;
  var bt = typeof Xa == "object" && Xa && Xa.Object === Object && Xa, Re = typeof self == "object" && self && self.Object === Object && self, Ee = bt || Re || Function("return this")(), Va = a && !a.nodeType && a, $a = Va && !0 && e && !e.nodeType && e, ft = $a && $a.exports === Va;
  function gt(i, b) {
    return i.set(b[0], b[1]), i;
  }
  function nn(i, b) {
    return i.add(b), i;
  }
  function ht(i, b) {
    for (var w = -1, I = i ? i.length : 0; ++w < I && b(i[w], w, i) !== !1; )
      ;
    return i;
  }
  function wt(i, b) {
    for (var w = -1, I = b.length, se = i.length; ++w < I; )
      i[se + w] = b[w];
    return i;
  }
  function Ba(i, b, w, I) {
    var se = -1, ce = i ? i.length : 0;
    for (I && ce && (w = i[++se]); ++se < ce; )
      w = b(w, i[se], se, i);
    return w;
  }
  function vt(i, b) {
    for (var w = -1, I = Array(i); ++w < i; )
      I[w] = b(w);
    return I;
  }
  function kt(i, b) {
    return i == null ? void 0 : i[b];
  }
  function Ua(i) {
    var b = !1;
    if (i != null && typeof i.toString != "function")
      try {
        b = !!(i + "");
      } catch {
      }
    return b;
  }
  function Wa(i) {
    var b = -1, w = Array(i.size);
    return i.forEach(function(I, se) {
      w[++b] = [se, I];
    }), w;
  }
  function xa(i, b) {
    return function(w) {
      return i(b(w));
    };
  }
  function Ta(i) {
    var b = -1, w = Array(i.size);
    return i.forEach(function(I) {
      w[++b] = I;
    }), w;
  }
  var yt = Array.prototype, Et = Function.prototype, pa = Object.prototype, Sa = Ee["__core-js_shared__"], Ha = function() {
    var i = /[^.]+$/.exec(Sa && Sa.keys && Sa.keys.IE_PROTO || "");
    return i ? "Symbol(src)_1." + i : "";
  }(), Ga = Et.toString, Ne = pa.hasOwnProperty, ca = pa.toString, ae = RegExp(
    "^" + Ga.call(Ne).replace(Ea, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), h = ft ? Ee.Buffer : void 0, E = Ee.Symbol, W = Ee.Uint8Array, X = xa(Object.getPrototypeOf, Object), Le = Object.create, ma = pa.propertyIsEnumerable, Ue = yt.splice, Oe = Object.getOwnPropertySymbols, xt = h ? h.isBuffer : void 0, Ka = xa(Object.keys, Object), Tt = ga(Ee, "DataView"), Ca = ga(Ee, "Map"), St = ga(Ee, "Promise"), Ct = ga(Ee, "Set"), Nt = ga(Ee, "WeakMap"), Na = ga(Object, "create"), Nl = Qe(Tt), Ll = Qe(Ca), Ol = Qe(St), Il = Qe(Ct), Al = Qe(Nt), ln = E ? E.prototype : void 0, on = ln ? ln.valueOf : void 0;
  function Je(i) {
    var b = -1, w = i ? i.length : 0;
    for (this.clear(); ++b < w; ) {
      var I = i[b];
      this.set(I[0], I[1]);
    }
  }
  function Ml() {
    this.__data__ = Na ? Na(null) : {};
  }
  function Pl(i) {
    return this.has(i) && delete this.__data__[i];
  }
  function Rl(i) {
    var b = this.__data__;
    if (Na) {
      var w = b[i];
      return w === n ? void 0 : w;
    }
    return Ne.call(b, i) ? b[i] : void 0;
  }
  function Dl(i) {
    var b = this.__data__;
    return Na ? b[i] !== void 0 : Ne.call(b, i);
  }
  function zl(i, b) {
    var w = this.__data__;
    return w[i] = Na && b === void 0 ? n : b, this;
  }
  Je.prototype.clear = Ml, Je.prototype.delete = Pl, Je.prototype.get = Rl, Je.prototype.has = Dl, Je.prototype.set = zl;
  function De(i) {
    var b = -1, w = i ? i.length : 0;
    for (this.clear(); ++b < w; ) {
      var I = i[b];
      this.set(I[0], I[1]);
    }
  }
  function jl() {
    this.__data__ = [];
  }
  function Fl(i) {
    var b = this.__data__, w = qa(b, i);
    if (w < 0)
      return !1;
    var I = b.length - 1;
    return w == I ? b.pop() : Ue.call(b, w, 1), !0;
  }
  function Vl(i) {
    var b = this.__data__, w = qa(b, i);
    return w < 0 ? void 0 : b[w][1];
  }
  function $l(i) {
    return qa(this.__data__, i) > -1;
  }
  function Bl(i, b) {
    var w = this.__data__, I = qa(w, i);
    return I < 0 ? w.push([i, b]) : w[I][1] = b, this;
  }
  De.prototype.clear = jl, De.prototype.delete = Fl, De.prototype.get = Vl, De.prototype.has = $l, De.prototype.set = Bl;
  function ba(i) {
    var b = -1, w = i ? i.length : 0;
    for (this.clear(); ++b < w; ) {
      var I = i[b];
      this.set(I[0], I[1]);
    }
  }
  function Ul() {
    this.__data__ = {
      hash: new Je(),
      map: new (Ca || De)(),
      string: new Je()
    };
  }
  function Wl(i) {
    return Ya(this, i).delete(i);
  }
  function Hl(i) {
    return Ya(this, i).get(i);
  }
  function Gl(i) {
    return Ya(this, i).has(i);
  }
  function Kl(i, b) {
    return Ya(this, i).set(i, b), this;
  }
  ba.prototype.clear = Ul, ba.prototype.delete = Wl, ba.prototype.get = Hl, ba.prototype.has = Gl, ba.prototype.set = Kl;
  function fa(i) {
    this.__data__ = new De(i);
  }
  function ql() {
    this.__data__ = new De();
  }
  function Yl(i) {
    return this.__data__.delete(i);
  }
  function Zl(i) {
    return this.__data__.get(i);
  }
  function Jl(i) {
    return this.__data__.has(i);
  }
  function Xl(i, b) {
    var w = this.__data__;
    if (w instanceof De) {
      var I = w.__data__;
      if (!Ca || I.length < t - 1)
        return I.push([i, b]), this;
      w = this.__data__ = new ba(I);
    }
    return w.set(i, b), this;
  }
  fa.prototype.clear = ql, fa.prototype.delete = Yl, fa.prototype.get = Zl, fa.prototype.has = Jl, fa.prototype.set = Xl;
  function Ql(i, b) {
    var w = It(i) || Ei(i) ? vt(i.length, String) : [], I = w.length, se = !!I;
    for (var ce in i)
      (b || Ne.call(i, ce)) && !(se && (ce == "length" || wi(ce, I))) && w.push(ce);
    return w;
  }
  function rn(i, b, w) {
    var I = i[b];
    (!(Ne.call(i, b) && un(I, w)) || w === void 0 && !(b in i)) && (i[b] = w);
  }
  function qa(i, b) {
    for (var w = i.length; w--; )
      if (un(i[w][0], b))
        return w;
    return -1;
  }
  function ei(i, b) {
    return i && sn(b, At(b), i);
  }
  function Lt(i, b, w, I, se, ce, xe) {
    var he;
    if (I && (he = ce ? I(i, se, ce, xe) : I(i)), he !== void 0)
      return he;
    if (!Za(i))
      return i;
    var mn = It(i);
    if (mn) {
      if (he = fi(i), !b)
        return ci(i, he);
    } else {
      var ha = Xe(i), bn = ha == m || ha == p;
      if (Ti(i))
        return oi(i, b);
      if (ha == f || ha == o || bn && !ce) {
        if (Ua(i))
          return ce ? i : {};
        if (he = gi(bn ? {} : i), !b)
          return mi(i, ei(he, i));
      } else {
        if (!Y[ha])
          return ce ? i : {};
        he = hi(i, ha, Lt, b);
      }
    }
    xe || (xe = new fa());
    var fn = xe.get(i);
    if (fn)
      return fn;
    if (xe.set(i, he), !mn)
      var gn = w ? bi(i) : At(i);
    return ht(gn || i, function(Mt, Ja) {
      gn && (Ja = Mt, Mt = i[Ja]), rn(he, Ja, Lt(Mt, b, w, I, Ja, i, xe));
    }), he;
  }
  function ai(i) {
    return Za(i) ? Le(i) : {};
  }
  function ti(i, b, w) {
    var I = b(i);
    return It(i) ? I : wt(I, w(i));
  }
  function ni(i) {
    return ca.call(i);
  }
  function li(i) {
    if (!Za(i) || ki(i))
      return !1;
    var b = cn(i) || Ua(i) ? ae : Ze;
    return b.test(Qe(i));
  }
  function ii(i) {
    if (!dn(i))
      return Ka(i);
    var b = [];
    for (var w in Object(i))
      Ne.call(i, w) && w != "constructor" && b.push(w);
    return b;
  }
  function oi(i, b) {
    if (b)
      return i.slice();
    var w = new i.constructor(i.length);
    return i.copy(w), w;
  }
  function Ot(i) {
    var b = new i.constructor(i.byteLength);
    return new W(b).set(new W(i)), b;
  }
  function ri(i, b) {
    var w = b ? Ot(i.buffer) : i.buffer;
    return new i.constructor(w, i.byteOffset, i.byteLength);
  }
  function si(i, b, w) {
    var I = b ? w(Wa(i), !0) : Wa(i);
    return Ba(I, gt, new i.constructor());
  }
  function _i(i) {
    var b = new i.constructor(i.source, Ye.exec(i));
    return b.lastIndex = i.lastIndex, b;
  }
  function di(i, b, w) {
    var I = b ? w(Ta(i), !0) : Ta(i);
    return Ba(I, nn, new i.constructor());
  }
  function ui(i) {
    return on ? Object(on.call(i)) : {};
  }
  function pi(i, b) {
    var w = b ? Ot(i.buffer) : i.buffer;
    return new i.constructor(w, i.byteOffset, i.length);
  }
  function ci(i, b) {
    var w = -1, I = i.length;
    for (b || (b = Array(I)); ++w < I; )
      b[w] = i[w];
    return b;
  }
  function sn(i, b, w, I) {
    w || (w = {});
    for (var se = -1, ce = b.length; ++se < ce; ) {
      var xe = b[se], he = I ? I(w[xe], i[xe], xe, w, i) : void 0;
      rn(w, xe, he === void 0 ? i[xe] : he);
    }
    return w;
  }
  function mi(i, b) {
    return sn(i, _n(i), b);
  }
  function bi(i) {
    return ti(i, At, _n);
  }
  function Ya(i, b) {
    var w = i.__data__;
    return vi(b) ? w[typeof b == "string" ? "string" : "hash"] : w.map;
  }
  function ga(i, b) {
    var w = kt(i, b);
    return li(w) ? w : void 0;
  }
  var _n = Oe ? xa(Oe, Object) : Ni, Xe = ni;
  (Tt && Xe(new Tt(new ArrayBuffer(1))) != M || Ca && Xe(new Ca()) != u || St && Xe(St.resolve()) != v || Ct && Xe(new Ct()) != g || Nt && Xe(new Nt()) != S) && (Xe = function(i) {
    var b = ca.call(i), w = b == f ? i.constructor : void 0, I = w ? Qe(w) : void 0;
    if (I)
      switch (I) {
        case Nl:
          return M;
        case Ll:
          return u;
        case Ol:
          return v;
        case Il:
          return g;
        case Al:
          return S;
      }
    return b;
  });
  function fi(i) {
    var b = i.length, w = i.constructor(b);
    return b && typeof i[0] == "string" && Ne.call(i, "index") && (w.index = i.index, w.input = i.input), w;
  }
  function gi(i) {
    return typeof i.constructor == "function" && !dn(i) ? ai(X(i)) : {};
  }
  function hi(i, b, w, I) {
    var se = i.constructor;
    switch (b) {
      case R:
        return Ot(i);
      case d:
      case r:
        return new se(+i);
      case M:
        return ri(i, I);
      case z:
      case O:
      case C:
      case J:
      case ne:
      case ee:
      case ye:
      case Pe:
      case qe:
        return pi(i, I);
      case u:
        return si(i, I, w);
      case s:
      case k:
        return new se(i);
      case x:
        return _i(i);
      case g:
        return di(i, I, w);
      case L:
        return ui(i);
    }
  }
  function wi(i, b) {
    return b = b ?? l, !!b && (typeof i == "number" || mt.test(i)) && i > -1 && i % 1 == 0 && i < b;
  }
  function vi(i) {
    var b = typeof i;
    return b == "string" || b == "number" || b == "symbol" || b == "boolean" ? i !== "__proto__" : i === null;
  }
  function ki(i) {
    return !!Ha && Ha in i;
  }
  function dn(i) {
    var b = i && i.constructor, w = typeof b == "function" && b.prototype || pa;
    return i === w;
  }
  function Qe(i) {
    if (i != null) {
      try {
        return Ga.call(i);
      } catch {
      }
      try {
        return i + "";
      } catch {
      }
    }
    return "";
  }
  function yi(i) {
    return Lt(i, !0, !0);
  }
  function un(i, b) {
    return i === b || i !== i && b !== b;
  }
  function Ei(i) {
    return xi(i) && Ne.call(i, "callee") && (!ma.call(i, "callee") || ca.call(i) == o);
  }
  var It = Array.isArray;
  function pn(i) {
    return i != null && Si(i.length) && !cn(i);
  }
  function xi(i) {
    return Ci(i) && pn(i);
  }
  var Ti = xt || Li;
  function cn(i) {
    var b = Za(i) ? ca.call(i) : "";
    return b == m || b == p;
  }
  function Si(i) {
    return typeof i == "number" && i > -1 && i % 1 == 0 && i <= l;
  }
  function Za(i) {
    var b = typeof i;
    return !!i && (b == "object" || b == "function");
  }
  function Ci(i) {
    return !!i && typeof i == "object";
  }
  function At(i) {
    return pn(i) ? Ql(i) : ii(i);
  }
  function Ni() {
    return [];
  }
  function Li() {
    return !1;
  }
  e.exports = yi;
})(tt, tt.exports);
var mo = tt.exports;
const Oa = /* @__PURE__ */ co(mo), Ge = Symbol("AuthView"), bo = Symbol("UserContextProvider"), fo = /* @__PURE__ */ te({
  __name: "SocialAuthContainer",
  props: {
    theme: {},
    className: {},
    appearance: {}
  },
  setup(e) {
    const a = e, t = ra(), n = q(() => {
      var l, o, _, d;
      return a.theme !== "default" ? po(
        jt(
          (o = (l = a.appearance) == null ? void 0 : l.theme) == null ? void 0 : o[a.theme],
          ((d = (_ = a.appearance) == null ? void 0 : _.variables) == null ? void 0 : d[a.theme]) ?? {}
        )
      ).className : "";
    });
    return (l, o) => (T(), V(sa("div"), We(y(t), { class: n.value }), {
      default: P(() => [
        He(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ta = /* @__PURE__ */ te({
  __name: "Anchor",
  props: {
    appearance: {}
  },
  setup(e) {
    const a = Ie({
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
    }), t = e, n = ra(), l = q(() => _a(
      "anchor",
      a(),
      t.appearance
    ).join(" "));
    return (o, _) => {
      var d, r;
      return T(), V(sa("a"), We(y(n), {
        class: l.value,
        style: (r = (d = o.appearance) == null ? void 0 : d.style) == null ? void 0 : r.anchor
      }), {
        default: P(() => [
          He(o.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
}), go = ["disabled"], da = /* @__PURE__ */ te({
  __name: "Button",
  props: {
    appearance: {},
    icon: {},
    color: { default: "default" },
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const a = Ie({
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
    }), t = e, n = ra(), l = q(() => _a(
      "button",
      a({ color: t.color }),
      t.appearance
    ).join(" "));
    return (o, _) => {
      var d, r;
      return T(), F("button", We(y(n), {
        class: l.value,
        style: (r = (d = o.appearance) == null ? void 0 : d.style) == null ? void 0 : r.button,
        disabled: o.loading
      }), [
        He(o.$slots, "icon"),
        He(o.$slots, "default")
      ], 16, go);
    };
  }
}), Ce = /* @__PURE__ */ te({
  __name: "Container",
  props: {
    is: { default: "div" },
    direction: {},
    gap: {},
    appearance: {}
  },
  setup(e) {
    const a = Ie({
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
    }), t = e, n = q(() => _a(
      "container",
      a({
        direction: t.direction,
        gap: t.gap
      }),
      t.appearance
    ).join(" "));
    return (l, o) => {
      var _, d;
      return T(), V(sa(l.is), {
        class: Dt(n.value),
        style: Oi((d = (_ = l.appearance) == null ? void 0 : _.style) == null ? void 0 : d.container)
      }, {
        default: P(() => [
          He(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
}), ho = /* @__PURE__ */ te({
  __name: "Divider",
  props: {
    appearance: {}
  },
  setup(e) {
    const a = Ie({
      background: "$dividerBackground",
      display: "block",
      margin: "16px 0",
      height: "1px",
      width: "100%"
    }), t = e, n = ra(), l = q(() => _a(
      "divider",
      a(),
      t.appearance
    ).join(" "));
    return (o, _) => {
      var d, r;
      return T(), V(sa("div"), We(y(n), {
        class: l.value,
        style: (r = (d = o.appearance) == null ? void 0 : d.style) == null ? void 0 : r.divider
      }), {
        default: P(() => [
          He(o.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
}), wo = ["type", "value"], vo = ["aria-label", "aria-pressed"], ko = {
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
}, yo = {
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
}, Eo = ["type", "value"], Ae = /* @__PURE__ */ te({
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
    const a = Ie({
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
    }), t = Ie({
      position: "relative",
      width: "100%"
    }), n = Ie({
      // leave room for the toggle button so text doesn't sit underneath it
      paddingInlineEnd: "40px"
    }), l = Ie({
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
    }), o = e, _ = ra(), d = $(!1), r = q(
      () => o.type === "password" ? d.value ? "text" : "password" : o.type
    ), c = q(() => {
      const u = _a(
        "input",
        a({
          // keep the wide masking spacing only while the value is masked
          type: r.value === "password" ? "password" : "default"
        }),
        o.appearance
      );
      return o.type === "password" && u.push(n().toString()), u.join(" ");
    }), m = q(() => t().toString()), p = q(() => l().toString());
    return (u, s) => {
      var f, v, x, g;
      return u.type === "password" ? (T(), F("div", {
        key: 0,
        class: Dt(m.value)
      }, [
        D("input", We(y(_), {
          type: r.value,
          class: c.value,
          style: (v = (f = u.appearance) == null ? void 0 : f.style) == null ? void 0 : v.input,
          value: u.modelValue,
          onInput: s[0] || (s[0] = (k) => u.$emit("update:modelValue", (k == null ? void 0 : k.target).value))
        }), null, 16, wo),
        D("button", {
          type: "button",
          class: Dt(p.value),
          "aria-label": d.value ? u.hideLabel : u.showLabel,
          "aria-pressed": d.value,
          onClick: s[1] || (s[1] = ge((k) => d.value = !d.value, ["prevent"]))
        }, [
          d.value ? (T(), F("svg", ko, s[3] || (s[3] = [
            D("path", { d: "M9.88 9.88a3 3 0 0 0 4.24 4.24M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" }, null, -1),
            D("path", { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" }, null, -1),
            D("line", {
              x1: "2",
              y1: "2",
              x2: "22",
              y2: "22"
            }, null, -1)
          ]))) : (T(), F("svg", yo, s[4] || (s[4] = [
            D("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }, null, -1),
            D("circle", {
              cx: "12",
              cy: "12",
              r: "3"
            }, null, -1)
          ])))
        ], 10, vo)
      ], 2)) : (T(), F("input", We({ key: 1 }, y(_), {
        type: u.type,
        class: c.value,
        style: (g = (x = u.appearance) == null ? void 0 : x.style) == null ? void 0 : g.input,
        value: u.modelValue,
        onInput: s[2] || (s[2] = (k) => u.$emit("update:modelValue", (k == null ? void 0 : k.target).value))
      }), null, 16, Eo));
    };
  }
}), Me = /* @__PURE__ */ te({
  __name: "Label",
  props: {
    appearance: {}
  },
  setup(e) {
    const a = Ie({
      fontFamily: "$labelFontFamily",
      fontSize: "$baseLabelSize",
      marginBottom: "$labelBottomMargin",
      color: "$inputLabelText",
      display: "block"
    }), t = e, n = ra(), l = q(() => _a(
      "label",
      a(),
      t.appearance
    ).join(" "));
    return (o, _) => {
      var d, r;
      return T(), V(sa("label"), We(y(n), {
        class: l.value,
        style: (r = (d = o.appearance) == null ? void 0 : d.style) == null ? void 0 : r.label
      }), {
        default: P(() => [
          He(o.$slots, "default")
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
    const a = Ie({
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
    }), t = e, n = ra(), l = q(() => _a(
      "message",
      a({ color: t.color }),
      t.appearance
    ).join(" "));
    return (o, _) => {
      var d, r;
      return T(), V(sa("span"), We(y(n), {
        class: l.value,
        style: (r = (d = o.appearance) == null ? void 0 : d.style) == null ? void 0 : r.message
      }), {
        default: P(() => [
          He(o.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
});
function ua(e, a) {
  const t = Xn(e, a);
  if (!t)
    throw new Error(`Could not resolve ${e.description}`);
  return t;
}
const xo = {
  "invalid login credentials": "invalid_credentials",
  "email not confirmed": "email_not_confirmed",
  "user already registered": "user_already_exists",
  "password is too weak": "weak_password",
  "email rate limit exceeded": "over_email_send_rate_limit",
  "signups not allowed for this instance": "signup_disabled",
  "user not found": "user_not_found"
};
function Ve(e, a) {
  if (!e)
    return "";
  const t = e.message ?? "";
  if (a) {
    const n = e.code || xo[t.toLowerCase().trim()];
    if (n && a[n])
      return a[n];
  }
  return t;
}
const To = ["id"], So = /* @__PURE__ */ te({
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
    const t = e, n = $(""), l = $(""), o = $(""), _ = $(""), d = $(!1), { authView: r, setAuthView: c } = ua(Ge), m = q(
      () => {
        var s;
        return (s = t.i18n) == null ? void 0 : s[r.value];
      }
    ), p = a, u = async (s) => {
      var f, v, x, g;
      switch (o.value = "", _.value = "", d.value = !0, p("auth:submit", {
        email: n.value,
        password: l.value,
        view: r.value
      }), r.value) {
        case "sign_in":
          const {
            // data: { user: signInUser, session: signInSession },
            error: k
          } = await t.supabaseClient.auth.signInWithPassword({
            email: n.value,
            password: l.value,
            options: t.options
          });
          k && (o.value = Ve(k, (f = t.i18n) == null ? void 0 : f.errors), p("auth:error", k)), d.value = !1;
          break;
        case "sign_up":
          let L = {
            emailRedirectTo: t.redirectTo
          };
          t.additionalData && (L.data = t.additionalData);
          const {
            data: { user: S, session: R },
            error: M
          } = await t.supabaseClient.auth.signUp({
            email: n.value,
            password: l.value,
            options: {
              ...t.options ?? {},
              ...L
            }
          });
          M ? (o.value = Ve(M, (v = t.i18n) == null ? void 0 : v.errors), p("auth:error", M)) : S && !R && (_.value = (g = (x = t.i18n) == null ? void 0 : x.sign_up) == null ? void 0 : g.confirmation_text), d.value = !1;
      }
    };
    return Ma(
      () => r.value,
      () => {
        d.value = !1;
      }
    ), (s, f) => (T(), F("form", {
      id: `auth-${y(r)}`,
      onSubmit: ge(u, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      j(y(Ce), {
        direction: "vertical",
        gap: "large",
        appearance: s.appearance
      }, {
        default: P(() => [
          j(y(Ce), {
            direction: "vertical",
            gap: "large",
            appearance: s.appearance
          }, {
            default: P(() => {
              var v, x, g, k;
              return [
                D("div", null, [
                  j(y(Me), {
                    htmlFor: "email",
                    appearance: s.appearance
                  }, {
                    default: P(() => {
                      var L;
                      return [
                        B(U((L = m.value) == null ? void 0 : L.email_label), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["appearance"]),
                  j(y(Ae), {
                    id: "email",
                    type: "email",
                    name: "email",
                    modelValue: n.value,
                    "onUpdate:modelValue": f[0] || (f[0] = (L) => n.value = L),
                    placeholder: (v = m.value) == null ? void 0 : v.email_input_placeholder,
                    autoComplete: "email",
                    appearance: s.appearance
                  }, null, 8, ["modelValue", "placeholder", "appearance"])
                ]),
                D("div", null, [
                  j(y(Me), {
                    htmlFor: "password",
                    appearance: s.appearance
                  }, {
                    default: P(() => {
                      var L;
                      return [
                        B(U((L = m.value) == null ? void 0 : L.password_label), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["appearance"]),
                  j(y(Ae), {
                    id: "password",
                    type: "password",
                    name: "password",
                    modelValue: l.value,
                    "onUpdate:modelValue": f[1] || (f[1] = (L) => l.value = L),
                    placeholder: (x = m.value) == null ? void 0 : x.password_input_placeholder,
                    autoComplete: y(r) === "sign_in" ? "current-password" : "new-password",
                    appearance: s.appearance,
                    showLabel: (g = s.i18n) == null ? void 0 : g.password_show,
                    hideLabel: (k = s.i18n) == null ? void 0 : k.password_hide
                  }, null, 8, ["modelValue", "placeholder", "autoComplete", "appearance", "showLabel", "hideLabel"])
                ])
              ];
            }),
            _: 1
          }, 8, ["appearance"]),
          j(y(da), {
            type: "submit",
            color: "primary",
            loading: d.value,
            appearance: s.appearance
          }, {
            default: P(() => {
              var v, x;
              return [
                B(U(d.value ? (v = m.value) == null ? void 0 : v.loading_button_label : (x = m.value) == null ? void 0 : x.button_label), 1)
              ];
            }),
            _: 1
          }, 8, ["loading", "appearance"]),
          s.showLinks ? (T(), V(y(Ce), {
            key: 0,
            direction: "vertical",
            gap: "small",
            appearance: s.appearance
          }, {
            default: P(() => [
              y(r) === y(be).SIGN_IN && s.magicLink ? (T(), V(y(ta), {
                key: 0,
                href: "#auth-magic-link",
                appearance: s.appearance,
                onClick: f[2] || (f[2] = ge((v) => y(c)(y(be).MAGIC_LINK), ["prevent"]))
              }, {
                default: P(() => {
                  var v, x;
                  return [
                    B(U((x = (v = s.i18n) == null ? void 0 : v.magic_link) == null ? void 0 : x.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"])) : K("", !0),
              y(r) === y(be).SIGN_IN ? (T(), V(y(ta), {
                key: 1,
                href: "#auth-forgot-password",
                appearance: s.appearance,
                onClick: f[3] || (f[3] = ge((v) => y(c)(y(be).FORGOTTEN_PASSWORD), ["prevent"]))
              }, {
                default: P(() => {
                  var v, x;
                  return [
                    B(U((x = (v = s.i18n) == null ? void 0 : v.forgotten_password) == null ? void 0 : x.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"])) : K("", !0),
              y(r) === y(be).SIGN_IN ? (T(), V(y(ta), {
                key: 2,
                href: "#auth-sign-up",
                appearance: s.appearance,
                onClick: f[4] || (f[4] = ge((v) => y(c)(y(be).SIGN_UP), ["prevent"]))
              }, {
                default: P(() => {
                  var v, x;
                  return [
                    B(U((x = (v = s.i18n) == null ? void 0 : v.sign_up) == null ? void 0 : x.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"])) : (T(), V(y(ta), {
                key: 3,
                href: "#auth-sign-in",
                appearance: s.appearance,
                onClick: f[5] || (f[5] = ge((v) => y(c)(y(be).SIGN_IN), ["prevent"]))
              }, {
                default: P(() => {
                  var v, x;
                  return [
                    B(U((x = (v = s.i18n) == null ? void 0 : v.sign_in) == null ? void 0 : x.link_text), 1)
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
      _.value ? (T(), V(y(Se), {
        key: 0,
        appearance: s.appearance
      }, {
        default: P(() => [
          B(U(_.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0),
      o.value ? (T(), V(y(Se), {
        key: 1,
        color: "danger",
        appearance: s.appearance
      }, {
        default: P(() => [
          B(U(o.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0)
    ], 40, To));
  }
}), re = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [n, l] of a)
    t[n] = l;
  return t;
}, Co = {}, No = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Lo(e, a) {
  return T(), F("svg", No, a[0] || (a[0] = [
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
const Oo = /* @__PURE__ */ re(Co, [["render", Lo]]), Io = {}, Ao = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Mo(e, a) {
  return T(), F("svg", Ao, a[0] || (a[0] = [
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
const Po = /* @__PURE__ */ re(Io, [["render", Mo]]), Ro = {}, Do = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function zo(e, a) {
  return T(), F("svg", Do, a[0] || (a[0] = [
    D("path", {
      fill: "#03A9F4",
      d: "M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
    }, null, -1)
  ]));
}
const jo = /* @__PURE__ */ re(Ro, [["render", zo]]), Fo = {}, Vo = {
  fill: "gray",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "21px",
  height: "21px"
};
function $o(e, a) {
  return T(), F("svg", Vo, a[0] || (a[0] = [
    D("path", { d: "M 15.904297 1.078125 C 15.843359 1.06875 15.774219 1.0746094 15.699219 1.0996094 C 14.699219 1.2996094 13.600391 1.8996094 12.900391 2.5996094 C 12.300391 3.1996094 11.800781 4.1996094 11.800781 5.0996094 C 11.800781 5.2996094 11.999219 5.5 12.199219 5.5 C 13.299219 5.4 14.399609 4.7996094 15.099609 4.0996094 C 15.699609 3.2996094 16.199219 2.4 16.199219 1.5 C 16.199219 1.275 16.087109 1.10625 15.904297 1.078125 z M 16.199219 5.4003906 C 14.399219 5.4003906 13.600391 6.5 12.400391 6.5 C 11.100391 6.5 9.9003906 5.5 8.4003906 5.5 C 6.3003906 5.5 3.0996094 7.4996094 3.0996094 12.099609 C 2.9996094 16.299609 6.8 21 9 21 C 10.3 21 10.600391 20.199219 12.400391 20.199219 C 14.200391 20.199219 14.600391 21 15.900391 21 C 17.400391 21 18.500391 19.399609 19.400391 18.099609 C 19.800391 17.399609 20.100391 17.000391 20.400391 16.400391 C 20.600391 16.000391 20.4 15.600391 20 15.400391 C 17.4 14.100391 16.900781 9.9003906 19.800781 8.4003906 C 20.300781 8.1003906 20.4 7.4992188 20 7.1992188 C 18.9 6.1992187 17.299219 5.4003906 16.199219 5.4003906 z" }, null, -1)
  ]));
}
const Bo = /* @__PURE__ */ re(Fo, [["render", $o]]), Uo = {}, Wo = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21.34",
  height: "21",
  viewBox: "0 0 256 384"
};
function Ho(e, a) {
  return T(), F("svg", Wo, a[0] || (a[0] = [
    ja('<path fill="#0ACF83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z"></path><path fill="#A259FF" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z"></path><path fill="#F24E1E" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z"></path><path fill="#FF7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z"></path><path fill="#1ABCFE" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64Z"></path>', 5)
  ]));
}
const Go = /* @__PURE__ */ re(Uo, [["render", Ho]]), Ko = {}, qo = {
  fill: "gray",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 30 30",
  width: "21px",
  height: "21px"
};
function Yo(e, a) {
  return T(), F("svg", qo, a[0] || (a[0] = [
    D("path", { d: "M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" }, null, -1)
  ]));
}
const Zo = /* @__PURE__ */ re(Ko, [["render", Yo]]), Jo = {}, Xo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Qo(e, a) {
  return T(), F("svg", Xo, a[0] || (a[0] = [
    ja('<path fill="#e53935" d="M24 43L16 20 32 20z"></path><path fill="#ff7043" d="M24 43L42 20 32 20z"></path><path fill="#e53935" d="M37 5L42 20 32 20z"></path><path fill="#ffa726" d="M24 43L42 20 45 28z"></path><path fill="#ff7043" d="M24 43L6 20 16 20z"></path><path fill="#e53935" d="M11 5L6 20 16 20z"></path><path fill="#ffa726" d="M24 43L6 20 3 28z"></path>', 7)
  ]));
}
const er = /* @__PURE__ */ re(Jo, [["render", Qo]]), ar = {}, tr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21",
  height: "21",
  viewBox: "0 0 62.42 62.42"
};
function nr(e, a) {
  return T(), F("svg", tr, a[0] || (a[0] = [
    ja('<defs><linearGradient id="New_Gradient_Swatch_1" x1="64.01" y1="30.27" x2="32.99" y2="54.48" gradientUnits="userSpaceOnUse"><stop offset="0.18" stop-color="#0052cc"></stop><stop offset="1" stop-color="#2684ff"></stop></linearGradient></defs><title>Bitbucket-blue</title><g id="Layer_2" data-name="Layer 2"><g id="Blue" transform="translate(0 -3.13)"><path d="M2,6.26A2,2,0,0,0,0,8.58L8.49,60.12a2.72,2.72,0,0,0,2.66,2.27H51.88a2,2,0,0,0,2-1.68L62.37,8.59a2,2,0,0,0-2-2.32ZM37.75,43.51h-13L21.23,25.12H40.9Z" fill="#2684ff"></path><path d="M59.67,25.12H40.9L37.75,43.51h-13L9.4,61.73a2.71,2.71,0,0,0,1.75.66H51.89a2,2,0,0,0,2-1.68Z" fill="url(#New_Gradient_Swatch_1)"></path></g></g>', 3)
  ]));
}
const lr = /* @__PURE__ */ re(ar, [["render", nr]]), ir = {}, or = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function rr(e, a) {
  return T(), F("svg", or, a[0] || (a[0] = [
    D("path", {
      fill: "#536dfe",
      d: "M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"
    }, null, -1)
  ]));
}
const sr = /* @__PURE__ */ re(ir, [["render", rr]]), _r = {}, dr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function ur(e, a) {
  return T(), F("svg", dr, a[0] || (a[0] = [
    ja('<linearGradient id="k8yl7~hDat~FaoWq8WjN6a" x1="-1254.397" x2="-1261.911" y1="877.268" y2="899.466" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#114a8b"></stop><stop offset="1" stop-color="#0669bc"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6a)" d="M17.634,6h11.305L17.203,40.773c-0.247,0.733-0.934,1.226-1.708,1.226H6.697 c-0.994,0-1.8-0.806-1.8-1.8c0-0.196,0.032-0.39,0.094-0.576L15.926,7.227C16.173,6.494,16.86,6,17.634,6L17.634,6z"></path><path fill="#0078d4" d="M34.062,29.324H16.135c-0.458-0.001-0.83,0.371-0.831,0.829c0,0.231,0.095,0.451,0.264,0.608 l11.52,10.752C27.423,41.826,27.865,42,28.324,42h10.151L34.062,29.324z"></path><linearGradient id="k8yl7~hDat~FaoWq8WjN6b" x1="-1252.05" x2="-1253.788" y1="887.612" y2="888.2" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity=".3"></stop><stop offset=".071" stop-opacity=".2"></stop><stop offset=".321" stop-opacity=".1"></stop><stop offset=".623" stop-opacity=".05"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6b)" d="M17.634,6c-0.783-0.003-1.476,0.504-1.712,1.25L5.005,39.595 c-0.335,0.934,0.151,1.964,1.085,2.299C6.286,41.964,6.493,42,6.702,42h9.026c0.684-0.122,1.25-0.603,1.481-1.259l2.177-6.416 l7.776,7.253c0.326,0.27,0.735,0.419,1.158,0.422h10.114l-4.436-12.676l-12.931,0.003L28.98,6H17.634z"></path><linearGradient id="k8yl7~hDat~FaoWq8WjN6c" x1="-1252.952" x2="-1244.704" y1="876.6" y2="898.575" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3ccbf4"></stop><stop offset="1" stop-color="#2892df"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6c)" d="M32.074,7.225C31.827,6.493,31.141,6,30.368,6h-12.6c0.772,0,1.459,0.493,1.705,1.224 l10.935,32.399c0.318,0.942-0.188,1.963-1.13,2.281C29.093,41.968,28.899,42,28.703,42h12.6c0.994,0,1.8-0.806,1.8-1.801 c0-0.196-0.032-0.39-0.095-0.575L32.074,7.225z"></path>', 7)
  ]));
}
const pr = /* @__PURE__ */ re(_r, [["render", ur]]), cr = {}, mr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21",
  height: "21",
  viewBox: "0 0 256 256"
};
function br(e, a) {
  return T(), F("svg", mr, a[0] || (a[0] = [
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
const fr = /* @__PURE__ */ re(cr, [["render", br]]), gr = {}, hr = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function wr(e, a) {
  return T(), F("svg", hr, a[0] || (a[0] = [
    D("path", {
      d: "M472.136 163.959H408.584C407.401 163.959 406.218 163.327 405.666 162.3L354.651 73.6591C354.02 72.632 352.916 72 351.654 72H143.492C142.309 72 141.126 72.632 140.574 73.6591L87.5084 165.618L36.414 254.259C35.862 255.286 35.862 256.55 36.414 257.656L87.5084 346.297L140.495 438.335C141.047 439.362 142.23 440.073 143.413 439.994H351.654C352.837 439.994 354.02 439.362 354.651 438.335L405.745 349.694C406.297 348.667 407.48 347.956 408.663 348.035H472.215C474.344 348.035 476 346.297 476 344.243V167.83C475.921 165.697 474.186 163.959 472.136 163.959ZM228.728 349.694L212.721 377.345C212.485 377.74 212.091 378.135 211.696 378.372C211.223 378.609 210.75 378.767 210.198 378.767H178.422C177.318 378.767 176.293 378.214 175.82 377.187L128.431 294.787L123.779 286.65L106.748 257.498C106.511 257.103 106.353 256.629 106.432 256.076C106.432 255.602 106.59 255.049 106.827 254.654L123.937 224.949L175.899 134.886C176.451 133.938 177.476 133.306 178.501 133.306H210.198C210.75 133.306 211.302 133.464 211.854 133.701C212.248 133.938 212.643 134.254 212.879 134.728L228.886 162.537C229.359 163.485 229.28 164.67 228.728 165.539L177.397 254.654C177.16 255.049 177.081 255.523 177.081 255.918C177.081 256.392 177.239 256.787 177.397 257.182L228.728 346.218C229.438 347.403 229.359 348.667 228.728 349.694V349.694ZM388.083 257.498L371.051 286.65L366.399 294.787L319.011 377.187C318.459 378.135 317.512 378.767 316.409 378.767H284.632C284.08 378.767 283.607 378.609 283.134 378.372C282.74 378.135 282.346 377.819 282.109 377.345L266.103 349.694C265.393 348.667 265.393 347.403 266.024 346.376L317.355 257.34C317.591 256.945 317.67 256.471 317.67 256.076C317.67 255.602 317.513 255.207 317.355 254.812L266.024 165.697C265.472 164.749 265.393 163.643 265.866 162.695L281.873 134.886C282.109 134.491 282.503 134.096 282.898 133.859C283.371 133.543 283.923 133.464 284.553 133.464H316.409C317.512 133.464 318.538 134.017 319.011 135.044L370.972 225.107L388.083 254.812C388.319 255.286 388.477 255.76 388.477 256.234C388.477 256.55 388.319 257.024 388.083 257.498V257.498Z",
      fill: "#008AAA"
    }, null, -1)
  ]));
}
const vr = /* @__PURE__ */ re(gr, [["render", wr]]), kr = {}, yr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Er(e, a) {
  return T(), F("svg", yr, a[0] || (a[0] = [
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
const xn = /* @__PURE__ */ re(kr, [["render", Er]]), xr = {}, Tr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px",
  "fill-rule": "evenodd",
  "clip-rule": "evenodd"
};
function Sr(e, a) {
  return T(), F("svg", Tr, a[0] || (a[0] = [
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
const Cr = /* @__PURE__ */ re(xr, [["render", Sr]]), Nr = {}, Lr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Or(e, a) {
  return T(), F("svg", Lr, a[0] || (a[0] = [
    ja('<path fill="#33d375" d="M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"></path><path fill="#33d375" d="M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"></path><path fill="#40c4ff" d="M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"></path><path fill="#40c4ff" d="M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"></path><path fill="#e91e63" d="M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"></path><path fill="#e91e63" d="M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"></path><path fill="#ffc107" d="M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"></path><path fill="#ffc107" d="M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"></path>', 8)
  ]));
}
const Ir = /* @__PURE__ */ re(Nr, [["render", Or]]), Ar = {}, Mr = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Pr(e, a) {
  return T(), F("svg", Mr, a[0] || (a[0] = [
    D("path", {
      d: "M255.498 31.0034C131.513 31.0034 31 131.515 31 255.502C31 379.492 131.513 480 255.498 480C379.497 480 480 379.495 480 255.502C480 131.522 379.497 31.0135 255.495 31.0135L255.498 31V31.0034ZM358.453 354.798C354.432 361.391 345.801 363.486 339.204 359.435C286.496 327.237 220.139 319.947 141.993 337.801C134.463 339.516 126.957 334.798 125.24 327.264C123.516 319.731 128.217 312.225 135.767 310.511C221.284 290.972 294.639 299.384 353.816 335.549C360.413 339.596 362.504 348.2 358.453 354.798ZM385.932 293.67C380.864 301.903 370.088 304.503 361.858 299.438C301.512 262.345 209.528 251.602 138.151 273.272C128.893 276.067 119.118 270.851 116.309 261.61C113.521 252.353 118.74 242.597 127.981 239.782C209.512 215.044 310.87 227.026 380.17 269.612C388.4 274.68 391 285.456 385.935 293.676V293.673L385.932 293.67ZM388.293 230.016C315.935 187.039 196.56 183.089 127.479 204.055C116.387 207.42 104.654 201.159 101.293 190.063C97.9326 178.964 104.189 167.241 115.289 163.87C194.59 139.796 326.418 144.446 409.723 193.902C419.722 199.826 422.995 212.71 417.068 222.675C411.168 232.653 398.247 235.943 388.303 230.016H388.293V230.016Z",
      fill: "#1ED760"
    }, null, -1)
  ]));
}
const Rr = /* @__PURE__ */ re(Ar, [["render", Pr]]), Dr = {}, zr = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function jr(e, a) {
  return T(), F("svg", zr, a[0] || (a[0] = [
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
const Fr = /* @__PURE__ */ re(Dr, [["render", jr]]), Vr = {}, $r = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Br(e, a) {
  return T(), F("svg", $r, a[0] || (a[0] = [
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
const Ur = /* @__PURE__ */ re(Vr, [["render", Br]]), Wr = {}, Hr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21",
  height: "21"
};
function Gr(e, a) {
  return T(), F("svg", Hr, a[0] || (a[0] = [
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
const Kr = /* @__PURE__ */ re(Wr, [["render", Gr]]), qr = /* @__PURE__ */ te({
  __name: "Icons",
  props: {
    name: {}
  },
  setup(e) {
    const a = {
      apple: Bo,
      azure: pr,
      bitbucket: lr,
      discord: sr,
      facebook: Po,
      figma: Go,
      google: Oo,
      github: Zo,
      gitlab: er,
      kakao: fr,
      keycloak: vr,
      linkedin: xn,
      linkedin_oidc: xn,
      notion: Cr,
      slack: Ir,
      spotify: Rr,
      twitch: Fr,
      twitter: jo,
      workos: Ur,
      zoom: Kr
    };
    return (t, n) => (T(), V(sa(a[t.name])));
  }
}), fd = te({
  name: "UserContextProvider",
  props: {
    supabaseClient: {
      type: Object,
      required: !0
    }
  },
  setup({ supabaseClient: e }, { slots: a }) {
    const t = $(null), n = $(null);
    return st(async () => {
      var _;
      const { data: l } = await e.auth.getSession();
      t.value = l.session, n.value = ((_ = l.session) == null ? void 0 : _.user) ?? null;
      const { data: o } = e.auth.onAuthStateChange(
        async (d, r) => {
          t.value = r, n.value = (r == null ? void 0 : r.user) ?? null;
        }
      );
      return () => {
        o == null || o.subscription.unsubscribe();
      };
    }), Qn(bo, {
      session: t,
      user: n
    }), () => {
      var l;
      return Zt("div", null, (l = a == null ? void 0 : a.default) == null ? void 0 : l.call(a));
    };
  }
}), Qt = (e) => {
  const a = $(null), t = (n) => {
    n ? JSON.stringify(a.value) !== JSON.stringify(n.user) && (a.value = n.user) : a.value = null;
  };
  return e == null || e.auth.getSession().then(({ data: { session: n } }) => {
    n && t(n);
  }), st(async () => {
    const { data: n } = e.auth.onAuthStateChange(
      async (l, o) => {
        o && t(o);
      }
    );
    return () => {
      n == null || n.subscription.unsubscribe();
    };
  }), {
    supabaseUser: a
  };
}, Yr = /* @__PURE__ */ te({
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
    const a = e, { supabaseUser: t } = Qt(a.supabaseClient), n = $(""), l = $(!1), { authView: o } = ua(Ge), _ = q(() => a.socialLayout === "vertical"), d = q(() => o.value === "magic_link" ? "sign_in" : o.value), r = q(
      () => {
        var p;
        return (p = a.i18n) == null ? void 0 : p[d.value];
      }
    ), c = async (p) => {
      var v, x, g;
      n.value = "", l.value = !0;
      const u = (v = t.value) == null ? void 0 : v.is_anonymous, s = {
        redirectTo: a.redirectTo,
        scopes: (x = a.providerScopes) == null ? void 0 : x[p],
        queryParams: a.queryParams
      };
      let f = null;
      if (u) {
        const { data: k, error: L } = await a.supabaseClient.auth.linkIdentity({
          provider: p,
          options: s
        });
        f = L;
      } else if (a.useOAuthPopup) {
        const { data: k, error: L } = await a.supabaseClient.auth.signInWithOAuth({
          provider: p,
          options: { ...s, skipBrowserRedirect: !0 }
        });
        if (f = L, !L && (k != null && k.url)) {
          const S = window.open(
            k.url,
            "supabase-oauth",
            a.popupWindowFeatures ?? "width=500,height=650"
          ), { data: R } = a.supabaseClient.auth.onAuthStateChange(
            (z) => {
              z === "SIGNED_IN" && (S == null || S.close(), R.subscription.unsubscribe(), clearInterval(M), l.value = !1);
            }
          ), M = setInterval(() => {
            S != null && S.closed && (clearInterval(M), R.subscription.unsubscribe(), l.value = !1);
          }, 500);
          return;
        }
      } else {
        const { data: k, error: L } = await a.supabaseClient.auth.signInWithOAuth({
          provider: p,
          options: s
        });
        f = L;
      }
      f && (n.value = Ve(f, (g = a.i18n) == null ? void 0 : g.errors)), l.value = !1;
    };
    function m(p) {
      const u = p.toLowerCase();
      return p.charAt(0).toUpperCase() + u.slice(1);
    }
    return (p, u) => p.providers && p.providers.length > 0 ? (T(), F(na, { key: 0 }, [
      j(y(Ce), {
        gap: "large",
        direction: "vertical",
        appearance: p.appearance
      }, {
        default: P(() => [
          j(y(Ce), {
            direction: _.value ? "vertical" : "horizontal",
            gap: _.value ? "small" : "medium",
            appearance: p.appearance
          }, {
            default: P(() => [
              (T(!0), F(na, null, Ii(p.providers, (s) => (T(), V(y(da), {
                key: s,
                color: "default",
                loading: l.value,
                onClick: ge(() => c(s), ["prevent"]),
                appearance: p.appearance
              }, {
                icon: P(() => [
                  j(y(qr), { name: s }, null, 8, ["name"])
                ]),
                default: P(() => {
                  var f, v;
                  return [
                    _.value ? (T(), F(na, { key: 0 }, [
                      B(U(y(zi)(
                        (v = (f = r.value) == null ? void 0 : f.social_provider_text) == null ? void 0 : v.replace("_oidc", ""),
                        {
                          provider: m(s.replace("_oidc", ""))
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
      p.onlyThirdPartyProviders ? K("", !0) : (T(), V(y(ho), {
        key: 0,
        appearance: p.appearance
      }, null, 8, ["appearance"]))
    ], 64)) : K("", !0);
  }
}), Zr = ["id"], Jr = /* @__PURE__ */ te({
  __name: "MagicLink",
  props: {
    appearance: {},
    supabaseClient: {},
    redirectTo: {},
    showLinks: { type: Boolean },
    i18n: {}
  },
  setup(e) {
    const a = e, { supabaseUser: t } = Qt(a.supabaseClient), n = $(""), l = $(""), o = $(""), _ = $(!1), { authView: d, setAuthView: r } = ua(Ge), c = q(
      () => {
        var p;
        return (p = a.i18n) == null ? void 0 : p[d.value];
      }
    ), m = async (p) => {
      var f, v, x, g;
      l.value = "", o.value = "", _.value = !0;
      const u = (f = t.value) == null ? void 0 : f.is_anonymous;
      let s = null;
      if (u) {
        const { error: k } = await a.supabaseClient.auth.updateUser(
          {
            email: n.value
          },
          {
            emailRedirectTo: a.redirectTo
          }
        );
        s = k;
      } else {
        const { error: k } = await a.supabaseClient.auth.signInWithOtp({
          email: n.value,
          options: { emailRedirectTo: a.redirectTo }
        });
        s = k;
      }
      s ? l.value = Ve(s, (v = a.i18n) == null ? void 0 : v.errors) : o.value = (g = (x = a.i18n) == null ? void 0 : x.magic_link) == null ? void 0 : g.confirmation_text, _.value = !1;
    };
    return (p, u) => (T(), F("form", {
      id: `auth-${y(d)}`,
      onSubmit: ge(m, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      j(y(Ce), {
        direction: "vertical",
        gap: "large",
        appearance: p.appearance
      }, {
        default: P(() => [
          j(y(Ce), {
            direction: "vertical",
            gap: "large",
            appearance: p.appearance
          }, {
            default: P(() => {
              var s;
              return [
                D("div", null, [
                  j(y(Me), {
                    htmlFor: "email",
                    appearance: p.appearance
                  }, {
                    default: P(() => {
                      var f;
                      return [
                        B(U((f = c.value) == null ? void 0 : f.email_input_label), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["appearance"]),
                  j(y(Ae), {
                    id: "email",
                    type: "email",
                    name: "email",
                    autoComplete: "email",
                    autofocus: "",
                    placeholder: (s = c.value) == null ? void 0 : s.email_input_placeholder,
                    appearance: p.appearance,
                    modelValue: n.value,
                    "onUpdate:modelValue": u[0] || (u[0] = (f) => n.value = f)
                  }, null, 8, ["placeholder", "appearance", "modelValue"])
                ])
              ];
            }),
            _: 1
          }, 8, ["appearance"]),
          j(y(da), {
            type: "submit",
            color: "primary",
            loading: _.value,
            appearance: p.appearance
          }, {
            default: P(() => {
              var s, f;
              return [
                B(U(_.value ? (s = c.value) == null ? void 0 : s.loading_button_label : (f = c.value) == null ? void 0 : f.button_label), 1)
              ];
            }),
            _: 1
          }, 8, ["loading", "appearance"]),
          p.showLinks ? (T(), V(y(ta), {
            key: 0,
            href: "#auth-sign-in",
            appearance: p.appearance,
            onClick: u[1] || (u[1] = ge((s) => y(r)(y(be).SIGN_IN), ["prevent"]))
          }, {
            default: P(() => {
              var s, f;
              return [
                B(U((f = (s = p.i18n) == null ? void 0 : s.sign_in) == null ? void 0 : f.link_text), 1)
              ];
            }),
            _: 1
          }, 8, ["appearance"])) : K("", !0)
        ]),
        _: 1
      }, 8, ["appearance"]),
      o.value ? (T(), V(y(Se), {
        key: 0,
        appearance: p.appearance
      }, {
        default: P(() => [
          B(U(o.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0),
      l.value ? (T(), V(y(Se), {
        key: 1,
        color: "danger",
        appearance: p.appearance
      }, {
        default: P(() => [
          B(U(l.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0)
    ], 40, Zr));
  }
}), Xr = ["id"], Qr = /* @__PURE__ */ te({
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
    const a = e, t = $(""), n = $(""), l = $(""), o = $(!1), { authView: _, setAuthView: d } = ua(Ge), r = q(
      () => {
        var m;
        return (m = a.i18n) == null ? void 0 : m[_.value];
      }
    ), c = async (m) => {
      var u, s, f, v;
      n.value = "", l.value = "", o.value = !0;
      const { error: p } = await a.supabaseClient.auth.resetPasswordForEmail(t.value, {
        redirectTo: a.redirectTo,
        captchaToken: (u = a.options) == null ? void 0 : u.captchaToken
      });
      p ? n.value = Ve(p, (s = a.i18n) == null ? void 0 : s.errors) : l.value = (v = (f = a.i18n) == null ? void 0 : f.forgotten_password) == null ? void 0 : v.confirmation_text, o.value = !1;
    };
    return (m, p) => (T(), F("form", {
      id: `auth-${y(_)}`,
      onSubmit: ge(c, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      j(y(Ce), {
        direction: "vertical",
        gap: "large",
        appearance: m.appearance
      }, {
        default: P(() => {
          var u;
          return [
            D("div", null, [
              j(y(Me), {
                htmlFor: "email",
                appearance: m.appearance
              }, {
                default: P(() => {
                  var s;
                  return [
                    B(U((s = r.value) == null ? void 0 : s.email_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              j(y(Ae), {
                id: "email",
                type: "email",
                name: "email",
                autoComplete: "email",
                autofocus: "",
                placeholder: (u = r.value) == null ? void 0 : u.email_input_placeholder,
                appearance: m.appearance,
                modelValue: t.value,
                "onUpdate:modelValue": p[0] || (p[0] = (s) => t.value = s)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ]),
            j(y(da), {
              type: "submit",
              color: "primary",
              loading: o.value,
              appearance: m.appearance
            }, {
              default: P(() => {
                var s, f;
                return [
                  B(U(o.value ? (s = r.value) == null ? void 0 : s.loading_button_label : (f = r.value) == null ? void 0 : f.button_label), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "appearance"]),
            m.showLinks ? (T(), V(y(ta), {
              key: 0,
              href: "#auth-sign-in",
              appearance: m.appearance,
              onClick: p[1] || (p[1] = ge((s) => y(d)(y(be).SIGN_IN), ["prevent"]))
            }, {
              default: P(() => {
                var s, f;
                return [
                  B(U((f = (s = m.i18n) == null ? void 0 : s.sign_in) == null ? void 0 : f.link_text), 1)
                ];
              }),
              _: 1
            }, 8, ["appearance"])) : K("", !0)
          ];
        }),
        _: 1
      }, 8, ["appearance"]),
      l.value ? (T(), V(y(Se), {
        key: 0,
        appearance: m.appearance
      }, {
        default: P(() => [
          B(U(l.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0),
      n.value ? (T(), V(y(Se), {
        key: 1,
        color: "danger",
        appearance: m.appearance
      }, {
        default: P(() => [
          B(U(n.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0)
    ], 40, Xr));
  }
}), es = ["id"], as = { key: 0 }, Tn = "current_password_required", ts = /* @__PURE__ */ te({
  __name: "UpdatePassword",
  props: {
    appearance: {},
    supabaseClient: {},
    i18n: {}
  },
  setup(e) {
    const a = e, t = $(""), n = $(""), l = $(""), o = $(!1), _ = $(""), d = $(""), r = $(!1), { authView: c } = ua(Ge), m = q(
      () => {
        var s;
        return (s = a.i18n) == null ? void 0 : s[c.value];
      }
    ), p = async () => {
      var g, k, L;
      const [{ data: s }, { data: f }] = await Promise.all([
        a.supabaseClient.auth.getUser(),
        a.supabaseClient.auth.mfa.getAuthenticatorAssuranceLevel()
      ]), v = ((k = (g = s == null ? void 0 : s.user) == null ? void 0 : g.identities) == null ? void 0 : k.some((S) => S.provider === "email")) ?? !1, x = ((L = f == null ? void 0 : f.currentAuthenticationMethods) == null ? void 0 : L.some(
        (S) => S.method === "recovery"
      )) ?? !1;
      o.value = v && !x;
    };
    st(() => {
      p().catch(() => {
      });
    });
    const u = async () => {
      var f, v, x, g;
      if (_.value = "", d.value = "", n.value !== l.value) {
        _.value = ((f = m.value) == null ? void 0 : f.password_mismatch) ?? "Passwords do not match";
        return;
      }
      if (o.value && !t.value) {
        _.value = Ve(
          { code: Tn, message: "Current password required" },
          (v = a.i18n) == null ? void 0 : v.errors
        );
        return;
      }
      r.value = !0;
      const { error: s } = await a.supabaseClient.auth.updateUser({
        password: n.value,
        ...o.value && {
          current_password: t.value
        }
      });
      s ? (s.code === Tn && (o.value = !0), _.value = Ve(s, (x = a.i18n) == null ? void 0 : x.errors)) : (t.value = "", n.value = "", l.value = "", d.value = (g = m.value) == null ? void 0 : g.confirmation_text), r.value = !1;
    };
    return (s, f) => (T(), F("form", {
      id: `auth-${y(c)}`,
      onSubmit: ge(u, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      j(y(Ce), {
        direction: "vertical",
        gap: "large",
        appearance: s.appearance
      }, {
        default: P(() => {
          var v, x, g, k, L, S, R, M, z;
          return [
            o.value ? (T(), F("div", as, [
              j(y(Me), {
                htmlFor: "current_password",
                appearance: s.appearance
              }, {
                default: P(() => {
                  var O;
                  return [
                    B(U((O = m.value) == null ? void 0 : O.current_password_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              j(y(Ae), {
                id: "current_password",
                type: "password",
                name: "current_password",
                autocomplete: "current-password",
                autofocus: "",
                placeholder: (v = m.value) == null ? void 0 : v.current_password_input_placeholder,
                appearance: s.appearance,
                modelValue: t.value,
                "onUpdate:modelValue": f[0] || (f[0] = (O) => t.value = O),
                showLabel: (x = s.i18n) == null ? void 0 : x.password_show,
                hideLabel: (g = s.i18n) == null ? void 0 : g.password_hide
              }, null, 8, ["placeholder", "appearance", "modelValue", "showLabel", "hideLabel"])
            ])) : K("", !0),
            D("div", null, [
              j(y(Me), {
                htmlFor: "password",
                appearance: s.appearance
              }, {
                default: P(() => {
                  var O;
                  return [
                    B(U((O = m.value) == null ? void 0 : O.password_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              j(y(Ae), {
                id: "password",
                type: "password",
                name: "password",
                autocomplete: "new-password",
                autofocus: !o.value,
                placeholder: (k = m.value) == null ? void 0 : k.password_input_placeholder,
                appearance: s.appearance,
                modelValue: n.value,
                "onUpdate:modelValue": f[1] || (f[1] = (O) => n.value = O),
                showLabel: (L = s.i18n) == null ? void 0 : L.password_show,
                hideLabel: (S = s.i18n) == null ? void 0 : S.password_hide
              }, null, 8, ["autofocus", "placeholder", "appearance", "modelValue", "showLabel", "hideLabel"])
            ]),
            D("div", null, [
              j(y(Me), {
                htmlFor: "confirm_password",
                appearance: s.appearance
              }, {
                default: P(() => {
                  var O;
                  return [
                    B(U((O = m.value) == null ? void 0 : O.confirm_password_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              j(y(Ae), {
                id: "confirm_password",
                type: "password",
                name: "confirm_password",
                autocomplete: "new-password",
                placeholder: (R = m.value) == null ? void 0 : R.confirm_password_input_placeholder,
                appearance: s.appearance,
                modelValue: l.value,
                "onUpdate:modelValue": f[2] || (f[2] = (O) => l.value = O),
                showLabel: (M = s.i18n) == null ? void 0 : M.password_show,
                hideLabel: (z = s.i18n) == null ? void 0 : z.password_hide
              }, null, 8, ["placeholder", "appearance", "modelValue", "showLabel", "hideLabel"])
            ]),
            j(y(da), {
              type: "submit",
              color: "primary",
              loading: r.value,
              appearance: s.appearance
            }, {
              default: P(() => {
                var O, C;
                return [
                  B(U(r.value ? (O = m.value) == null ? void 0 : O.loading_button_label : (C = m.value) == null ? void 0 : C.button_label), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "appearance"])
          ];
        }),
        _: 1
      }, 8, ["appearance"]),
      d.value ? (T(), V(y(Se), {
        key: 0,
        appearance: s.appearance
      }, {
        default: P(() => [
          B(U(d.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0),
      _.value ? (T(), V(y(Se), {
        key: 1,
        color: "danger",
        appearance: s.appearance
      }, {
        default: P(() => [
          B(U(_.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0)
    ], 40, es));
  }
}), ns = ["id"], ls = { key: 0 }, is = { key: 1 }, os = /* @__PURE__ */ te({
  __name: "VerifyOtp",
  props: {
    appearance: {},
    supabaseClient: {},
    otpType: { default: "email" },
    showLinks: { type: Boolean, default: !1 },
    i18n: {}
  },
  setup(e) {
    const a = e, t = $(""), n = $(""), l = $(""), o = $(""), _ = $(""), d = $(!1), { authView: r, setAuthView: c } = ua(Ge), m = q(
      () => {
        var u;
        return (u = a.i18n) == null ? void 0 : u[r.value];
      }
    ), p = async (u) => {
      var v, x, g;
      o.value = "", _.value = "", d.value = !0;
      let s = {
        email: t.value,
        token: l.value,
        type: a.otpType
      };
      ["sms", "phone_change"].includes(a.otpType) && (s = {
        phone: n.value,
        token: l.value,
        type: a.otpType
      });
      const { error: f } = await a.supabaseClient.auth.verifyOtp(
        s
      );
      f ? o.value = Ve(f, (v = a.i18n) == null ? void 0 : v.errors) : _.value = (g = (x = a.i18n) == null ? void 0 : x.magic_link) == null ? void 0 : g.confirmation_text, d.value = !1;
    };
    return (u, s) => (T(), F("form", {
      id: `auth-${y(r)}`,
      onSubmit: ge(p, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      j(y(Ce), {
        direction: "vertical",
        gap: "large",
        appearance: u.appearance
      }, {
        default: P(() => {
          var f, v, x;
          return [
            ["sms", "phone_change"].includes(u.otpType) ? (T(), F("div", ls, [
              j(y(Me), {
                htmlFor: "phone",
                appearance: u.appearance
              }, {
                default: P(() => {
                  var g;
                  return [
                    B(U((g = m.value) == null ? void 0 : g.phone_input_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              j(y(Ae), {
                id: "phone",
                name: "phone",
                type: "text",
                autofocus: "",
                placeholder: (f = m.value) == null ? void 0 : f.phone_input_placeholder,
                appearance: u.appearance,
                modelValue: n.value,
                "onUpdate:modelValue": s[0] || (s[0] = (g) => n.value = g)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ])) : (T(), F("div", is, [
              j(y(Me), {
                htmlFor: "email",
                appearance: u.appearance
              }, {
                default: P(() => {
                  var g;
                  return [
                    B(U((g = m.value) == null ? void 0 : g.email_input_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              j(y(Ae), {
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                autofocus: "",
                placeholder: (v = m.value) == null ? void 0 : v.email_input_placeholder,
                appearance: u.appearance,
                modelValue: t.value,
                "onUpdate:modelValue": s[1] || (s[1] = (g) => t.value = g)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ])),
            D("div", null, [
              j(y(Me), {
                htmlFor: "token",
                appearance: u.appearance
              }, {
                default: P(() => {
                  var g;
                  return [
                    B(U((g = m.value) == null ? void 0 : g.token_input_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              j(y(Ae), {
                id: "token",
                name: "token",
                type: "text",
                autofocus: "",
                placeholder: (x = m.value) == null ? void 0 : x.token_input_placeholder,
                appearance: u.appearance,
                modelValue: l.value,
                "onUpdate:modelValue": s[2] || (s[2] = (g) => l.value = g)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ]),
            j(y(da), {
              type: "submit",
              color: "primary",
              loading: d.value,
              appearance: u.appearance
            }, {
              default: P(() => {
                var g, k;
                return [
                  B(U(d.value ? (g = m.value) == null ? void 0 : g.loading_button_label : (k = m.value) == null ? void 0 : k.button_label), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "appearance"]),
            u.showLinks ? (T(), V(y(ta), {
              key: 2,
              href: "#auth-sign-in",
              appearance: u.appearance,
              onClick: s[3] || (s[3] = ge((g) => y(c)(y(be).SIGN_IN), ["prevent"]))
            }, {
              default: P(() => {
                var g, k;
                return [
                  B(U((k = (g = u.i18n) == null ? void 0 : g.sign_in) == null ? void 0 : k.link_text), 1)
                ];
              }),
              _: 1
            }, 8, ["appearance"])) : K("", !0)
          ];
        }),
        _: 1
      }, 8, ["appearance"]),
      _.value ? (T(), V(y(Se), {
        key: 0,
        appearance: u.appearance
      }, {
        default: P(() => [
          B(U(_.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0),
      o.value ? (T(), V(y(Se), {
        key: 1,
        color: "danger",
        appearance: u.appearance
      }, {
        default: P(() => [
          B(U(o.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0)
    ], 40, ns));
  }
}), rs = ["id"], ss = /* @__PURE__ */ te({
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
    Qt(a.supabaseClient);
    const t = $(""), n = $(""), l = $(!1), { authView: o, setAuthView: _ } = ua(Ge), d = q(
      () => {
        var c;
        return (c = a.i18n) == null ? void 0 : c[o.value];
      }
    ), r = async (c) => {
      var s;
      t.value = "", n.value = "", l.value = !0;
      let m = null;
      const { data: p, error: u } = await a.supabaseClient.auth.signInAnonymously(
        a.anonymouslyCredentials
      );
      m = u, m && (t.value = Ve(m, (s = a.i18n) == null ? void 0 : s.errors)), l.value = !1;
    };
    return (c, m) => (T(), F("form", {
      id: `auth-${y(o)}`,
      onSubmit: ge(r, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      j(y(Ce), {
        direction: "vertical",
        gap: "large",
        appearance: c.appearance
      }, {
        default: P(() => [
          j(y(da), {
            type: "submit",
            color: "primary",
            loading: l.value,
            appearance: c.appearance
          }, {
            default: P(() => {
              var p, u;
              return [
                B(U(l.value ? (p = d.value) == null ? void 0 : p.loading_button_label : (u = d.value) == null ? void 0 : u.button_label), 1)
              ];
            }),
            _: 1
          }, 8, ["loading", "appearance"])
        ]),
        _: 1
      }, 8, ["appearance"]),
      n.value ? (T(), V(y(Se), {
        key: 0,
        appearance: c.appearance
      }, {
        default: P(() => [
          B(U(n.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0),
      t.value ? (T(), V(y(Se), {
        key: 1,
        color: "danger",
        appearance: c.appearance
      }, {
        default: P(() => [
          B(U(t.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0)
    ], 40, rs));
  }
});
/*!
  * shared v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const $e = typeof window < "u";
let ke, ia;
if (process.env.NODE_ENV !== "production") {
  const e = $e && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (ke = (a) => {
    e.mark(a);
  }, ia = (a, t, n) => {
    e.measure(a, t, n), e.clearMarks(t), e.clearMarks(n);
  });
}
const _s = /\{([0-9a-zA-Z]+)\}/g;
function tl(e, ...a) {
  return a.length === 1 && H(a[0]) && (a = a[0]), (!a || !a.hasOwnProperty) && (a = {}), e.replace(_s, (t, n) => a.hasOwnProperty(n) ? a[n] : "");
}
const Be = (e, a = !1) => a ? Symbol.for(e) : Symbol(e), ds = (e, a, t) => us({ l: e, k: a, s: t }), us = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ue = (e) => typeof e == "number" && isFinite(e), ps = (e) => ll(e) === "[object Date]", nt = (e) => ll(e) === "[object RegExp]", _t = (e) => G(e) && Object.keys(e).length === 0, pe = Object.assign;
let Sn;
const Pa = () => Sn || (Sn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Cn(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const cs = Object.prototype.hasOwnProperty;
function lt(e, a) {
  return cs.call(e, a);
}
const oe = Array.isArray, Q = (e) => typeof e == "function", A = (e) => typeof e == "string", ie = (e) => typeof e == "boolean", H = (e) => e !== null && typeof e == "object", ms = (e) => H(e) && Q(e.then) && Q(e.catch), nl = Object.prototype.toString, ll = (e) => nl.call(e), G = (e) => {
  if (!H(e))
    return !1;
  const a = Object.getPrototypeOf(e);
  return a === null || a.constructor === Object;
}, bs = (e) => e == null ? "" : oe(e) || G(e) && e.toString === nl ? JSON.stringify(e, null, 2) : String(e);
function fs(e, a = "") {
  return e.reduce((t, n, l) => l === 0 ? t + n : t + a + n, "");
}
const Nn = 2;
function gs(e, a = 0, t = e.length) {
  const n = e.split(/\r?\n/);
  let l = 0;
  const o = [];
  for (let _ = 0; _ < n.length; _++)
    if (l += n[_].length + 1, l >= a) {
      for (let d = _ - Nn; d <= _ + Nn || t > l; d++) {
        if (d < 0 || d >= n.length)
          continue;
        const r = d + 1;
        o.push(`${r}${" ".repeat(3 - String(r).length)}|  ${n[d]}`);
        const c = n[d].length;
        if (d === _) {
          const m = a - (l - c) + 1, p = Math.max(1, t > l ? c - m : t - a);
          o.push("   |  " + " ".repeat(m) + "^".repeat(p));
        } else if (d > _) {
          if (t > l) {
            const m = Math.max(Math.min(t - l, c), 1);
            o.push("   |  " + "^".repeat(m));
          }
          l += c + 1;
        }
      }
      break;
    }
  return o.join(`
`);
}
function dt(e) {
  let a = e;
  return () => ++a;
}
function ya(e, a) {
  typeof console < "u" && (console.warn("[intlify] " + e), a && console.warn(a.stack));
}
const Ln = {};
function il(e) {
  Ln[e] || (Ln[e] = !0, ya(e));
}
function hs() {
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
const Qa = (e) => !H(e) || oe(e);
function at(e, a) {
  if (Qa(e) || Qa(a))
    throw new Error("Invalid value");
  const t = [{ src: e, des: a }];
  for (; t.length; ) {
    const { src: n, des: l } = t.pop();
    Object.keys(n).forEach((o) => {
      H(n[o]) && !H(l[o]) && (l[o] = Array.isArray(n[o]) ? [] : {}), Qa(l[o]) || Qa(n[o]) ? l[o] = n[o] : t.push({ src: n[o], des: l[o] });
    });
  }
}
/*!
  * message-compiler v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const ws = /\{([0-9a-zA-Z]+)\}/g;
function vs(e, ...a) {
  return a.length === 1 && ks(a[0]) && (a = a[0]), (!a || !a.hasOwnProperty) && (a = {}), e.replace(ws, (t, n) => a.hasOwnProperty(n) ? a[n] : "");
}
const ks = (e) => e !== null && typeof e == "object", ys = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, _e = {
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
}, Es = {
  // tokenizer error messages
  [_e.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [_e.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [_e.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [_e.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [_e.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [_e.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [_e.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [_e.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [_e.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [_e.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [_e.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [_e.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [_e.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [_e.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [_e.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [_e.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function ol(e, a, t = {}) {
  const { domain: n, messages: l, args: o } = t, _ = vs((l || Es)[e] || "", ...o || []), d = new SyntaxError(String(_));
  return d.code = e, a && (d.location = a), d.domain = n, d;
}
/*!
  * core-base v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function xs() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Pa().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Pa().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Ke = [];
Ke[
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
Ke[
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
Ke[
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
Ke[
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
Ke[
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
Ke[
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
Ke[
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
const Ts = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Ss(e) {
  return Ts.test(e);
}
function Cs(e) {
  const a = e.charCodeAt(0), t = e.charCodeAt(e.length - 1);
  return a === t && (a === 34 || a === 39) ? e.slice(1, -1) : e;
}
function Ns(e) {
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
function Ls(e) {
  const a = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Ss(a) ? Cs(a) : "*" + a;
}
function Os(e) {
  const a = [];
  let t = -1, n = 0, l = 0, o, _, d, r, c, m, p;
  const u = [];
  u[
    0
    /* Actions.APPEND */
  ] = () => {
    _ === void 0 ? _ = d : _ += d;
  }, u[
    1
    /* Actions.PUSH */
  ] = () => {
    _ !== void 0 && (a.push(_), _ = void 0);
  }, u[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    u[
      0
      /* Actions.APPEND */
    ](), l++;
  }, u[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (l > 0)
      l--, n = 4, u[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (l = 0, _ === void 0 || (_ = Ls(_), _ === !1))
        return !1;
      u[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function s() {
    const f = e[t + 1];
    if (n === 5 && f === "'" || n === 6 && f === '"')
      return t++, d = "\\" + f, u[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; n !== null; )
    if (t++, o = e[t], !(o === "\\" && s())) {
      if (r = Ns(o), p = Ke[n], c = p[r] || p.l || 8, c === 8 || (n = c[0], c[1] !== void 0 && (m = u[c[1]], m && (d = o, m() === !1))))
        return;
      if (n === 7)
        return a;
    }
}
const On = /* @__PURE__ */ new Map();
function Is(e, a) {
  return H(e) ? e[a] : null;
}
function As(e, a) {
  if (!H(e))
    return null;
  let t = On.get(a);
  if (t || (t = Os(a), t && On.set(a, t)), !t)
    return null;
  const n = t.length;
  let l = e, o = 0;
  for (; o < n; ) {
    const _ = l[t[o]];
    if (_ === void 0 || Q(l))
      return null;
    l = _, o++;
  }
  return l;
}
const Ms = (e) => e, Ps = (e) => "", Rs = "text", Ds = (e) => e.length === 0 ? "" : fs(e), zs = bs;
function In(e, a) {
  return e = Math.abs(e), a === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function js(e) {
  const a = ue(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ue(e.named.count) || ue(e.named.n)) ? ue(e.named.count) ? e.named.count : ue(e.named.n) ? e.named.n : a : a;
}
function Fs(e, a) {
  a.count || (a.count = e), a.n || (a.n = e);
}
function Vs(e = {}) {
  const a = e.locale, t = js(e), n = H(e.pluralRules) && A(a) && Q(e.pluralRules[a]) ? e.pluralRules[a] : In, l = H(e.pluralRules) && A(a) && Q(e.pluralRules[a]) ? In : void 0, o = (g) => g[n(t, g.length, l)], _ = e.list || [], d = (g) => _[g], r = e.named || {};
  ue(e.pluralIndex) && Fs(t, r);
  const c = (g) => r[g];
  function m(g) {
    const k = Q(e.messages) ? e.messages(g) : H(e.messages) ? e.messages[g] : !1;
    return k || (e.parent ? e.parent.message(g) : Ps);
  }
  const p = (g) => e.modifiers ? e.modifiers[g] : Ms, u = G(e.processor) && Q(e.processor.normalize) ? e.processor.normalize : Ds, s = G(e.processor) && Q(e.processor.interpolate) ? e.processor.interpolate : zs, f = G(e.processor) && A(e.processor.type) ? e.processor.type : Rs, x = {
    list: d,
    named: c,
    plural: o,
    linked: (g, ...k) => {
      const [L, S] = k;
      let R = "text", M = "";
      k.length === 1 ? H(L) ? (M = L.modifier || M, R = L.type || R) : A(L) && (M = L || M) : k.length === 2 && (A(L) && (M = L || M), A(S) && (R = S || R));
      const z = m(g)(x), O = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        R === "vnode" && oe(z) && M ? z[0] : z
      );
      return M ? p(M)(O, R) : O;
    },
    message: m,
    type: f,
    interpolate: s,
    normalize: u,
    values: pe({}, _, r)
  };
  return x;
}
let Ra = null;
function $s(e) {
  Ra = e;
}
function Bs(e, a, t) {
  Ra && Ra.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: a,
    meta: t
  });
}
const Us = /* @__PURE__ */ Ws(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function Ws(e) {
  return (a) => Ra && Ra.emit(e, a);
}
const rl = ys.__EXTEND_POINT__, ea = dt(rl), fe = {
  NOT_FOUND_KEY: rl,
  // 2
  FALLBACK_TO_TRANSLATE: ea(),
  // 3
  CANNOT_FORMAT_NUMBER: ea(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: ea(),
  // 5
  CANNOT_FORMAT_DATE: ea(),
  // 6
  FALLBACK_TO_DATE_FORMAT: ea(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: ea(),
  // 8
  __EXTEND_POINT__: ea()
  // 9
}, Hs = {
  [fe.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [fe.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [fe.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [fe.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [fe.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [fe.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [fe.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function oa(e, ...a) {
  return tl(Hs[e], ...a);
}
const sl = _e.__EXTEND_POINT__, aa = dt(sl), de = {
  INVALID_ARGUMENT: sl,
  // 17
  INVALID_DATE_ARGUMENT: aa(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: aa(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: aa(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: aa(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: aa(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: aa(),
  // 23
  __EXTEND_POINT__: aa()
  // 24
};
function je(e) {
  return ol(e, null, process.env.NODE_ENV !== "production" ? { messages: Gs } : void 0);
}
const Gs = {
  [de.INVALID_ARGUMENT]: "Invalid arguments",
  [de.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [de.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [de.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [de.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [de.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [de.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function en(e, a) {
  return a.locale != null ? An(a.locale) : An(e.locale);
}
let Rt;
function An(e) {
  if (A(e))
    return e;
  if (Q(e)) {
    if (e.resolvedOnce && Rt != null)
      return Rt;
    if (e.constructor.name === "Function") {
      const a = e();
      if (ms(a))
        throw je(de.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Rt = a;
    } else
      throw je(de.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw je(de.NOT_SUPPORT_LOCALE_TYPE);
}
function Ks(e, a, t) {
  return [.../* @__PURE__ */ new Set([
    t,
    ...oe(a) ? a : H(a) ? Object.keys(a) : A(a) ? [a] : [t]
  ])];
}
function _l(e, a, t) {
  const n = A(t) ? t : it, l = e;
  l.__localeChainCache || (l.__localeChainCache = /* @__PURE__ */ new Map());
  let o = l.__localeChainCache.get(n);
  if (!o) {
    o = [];
    let _ = [t];
    for (; oe(_); )
      _ = Mn(o, _, a);
    const d = oe(a) || !G(a) ? a : a.default ? a.default : null;
    _ = A(d) ? [d] : d, oe(_) && Mn(o, _, !1), l.__localeChainCache.set(n, o);
  }
  return o;
}
function Mn(e, a, t) {
  let n = !0;
  for (let l = 0; l < a.length && ie(n); l++) {
    const o = a[l];
    A(o) && (n = qs(e, a[l], t));
  }
  return n;
}
function qs(e, a, t) {
  let n;
  const l = a.split("-");
  do {
    const o = l.join("-");
    n = Ys(e, o, t), l.splice(-1, 1);
  } while (l.length && n === !0);
  return n;
}
function Ys(e, a, t) {
  let n = !1;
  if (!e.includes(a) && (n = !0, a)) {
    n = a[a.length - 1] !== "!";
    const l = a.replace(/!/g, "");
    e.push(l), (oe(t) || G(t)) && t[l] && (n = t[l]);
  }
  return n;
}
const Zs = "9.14.1", ut = -1, it = "en-US", ot = "", Pn = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Js() {
  return {
    upper: (e, a) => a === "text" && A(e) ? e.toUpperCase() : a === "vnode" && H(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, a) => a === "text" && A(e) ? e.toLowerCase() : a === "vnode" && H(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, a) => a === "text" && A(e) ? Pn(e) : a === "vnode" && H(e) && "__v_isVNode" in e ? Pn(e.children) : e
  };
}
let Xs, dl;
function Qs(e) {
  dl = e;
}
let ul;
function e_(e) {
  ul = e;
}
let pl = null;
const a_ = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  pl = e;
}, t_ = /* @__NO_SIDE_EFFECTS__ */ () => pl;
let cl = null;
const Rn = (e) => {
  cl = e;
}, n_ = () => cl;
let Dn = 0;
function l_(e = {}) {
  const a = Q(e.onWarn) ? e.onWarn : ya, t = A(e.version) ? e.version : Zs, n = A(e.locale) || Q(e.locale) ? e.locale : it, l = Q(n) ? it : n, o = oe(e.fallbackLocale) || G(e.fallbackLocale) || A(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l, _ = G(e.messages) ? e.messages : { [l]: {} }, d = G(e.datetimeFormats) ? e.datetimeFormats : { [l]: {} }, r = G(e.numberFormats) ? e.numberFormats : { [l]: {} }, c = pe({}, e.modifiers || {}, Js()), m = e.pluralRules || {}, p = Q(e.missing) ? e.missing : null, u = ie(e.missingWarn) || nt(e.missingWarn) ? e.missingWarn : !0, s = ie(e.fallbackWarn) || nt(e.fallbackWarn) ? e.fallbackWarn : !0, f = !!e.fallbackFormat, v = !!e.unresolving, x = Q(e.postTranslation) ? e.postTranslation : null, g = G(e.processor) ? e.processor : null, k = ie(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, L = !!e.escapeParameter, S = Q(e.messageCompiler) ? e.messageCompiler : Xs;
  process.env.NODE_ENV !== "production" && Q(e.messageCompiler) && il(oa(fe.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const R = Q(e.messageResolver) ? e.messageResolver : dl || Is, M = Q(e.localeFallbacker) ? e.localeFallbacker : ul || Ks, z = H(e.fallbackContext) ? e.fallbackContext : void 0, O = e, C = H(O.__datetimeFormatters) ? O.__datetimeFormatters : /* @__PURE__ */ new Map(), J = H(O.__numberFormatters) ? O.__numberFormatters : /* @__PURE__ */ new Map(), ne = H(O.__meta) ? O.__meta : {};
  Dn++;
  const ee = {
    version: t,
    cid: Dn,
    locale: n,
    fallbackLocale: o,
    messages: _,
    modifiers: c,
    pluralRules: m,
    missing: p,
    missingWarn: u,
    fallbackWarn: s,
    fallbackFormat: f,
    unresolving: v,
    postTranslation: x,
    processor: g,
    warnHtmlMessage: k,
    escapeParameter: L,
    messageCompiler: S,
    messageResolver: R,
    localeFallbacker: M,
    fallbackContext: z,
    onWarn: a,
    __meta: ne
  };
  return ee.datetimeFormats = d, ee.numberFormats = r, ee.__datetimeFormatters = C, ee.__numberFormatters = J, process.env.NODE_ENV !== "production" && (ee.__v_emitter = O.__v_emitter != null ? O.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Bs(ee, t, ne), ee;
}
function pt(e, a) {
  return e instanceof RegExp ? e.test(a) : e;
}
function ml(e, a) {
  return e instanceof RegExp ? e.test(a) : e;
}
function an(e, a, t, n, l) {
  const { missing: o, onWarn: _ } = e;
  if (process.env.NODE_ENV !== "production") {
    const d = e.__v_emitter;
    d && d.emit("missing", {
      locale: t,
      key: a,
      type: l,
      groupId: `${l}:${a}`
    });
  }
  if (o !== null) {
    const d = o(e, t, a, l);
    return A(d) ? d : a;
  } else
    return process.env.NODE_ENV !== "production" && ml(n, a) && _(oa(fe.NOT_FOUND_KEY, { key: a, locale: t })), a;
}
function Ia(e, a, t) {
  const n = e;
  n.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, t, a);
}
function bl(e, a) {
  return e === a ? !1 : e.split("-")[0] === a.split("-")[0];
}
function i_(e, a) {
  const t = a.indexOf(e);
  if (t === -1)
    return !1;
  for (let n = t + 1; n < a.length; n++)
    if (bl(e, a[n]))
      return !0;
  return !1;
}
const ka = (e) => H(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e), zn = () => "", Te = (e) => Q(e);
function jn(e, ...a) {
  const { fallbackFormat: t, postTranslation: n, unresolving: l, messageCompiler: o, fallbackLocale: _, messages: d } = e, [r, c] = $t(...a), m = ie(c.missingWarn) ? c.missingWarn : e.missingWarn, p = ie(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, u = ie(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, s = !!c.resolvedMessage, f = A(c.default) || ie(c.default) ? ie(c.default) ? o ? r : () => r : c.default : t ? o ? r : () => r : "", v = t || f !== "", x = en(e, c);
  u && o_(c);
  let [g, k, L] = s ? [
    r,
    x,
    d[x] || {}
  ] : fl(e, r, x, _, p, m), S = g, R = r;
  if (!s && !(A(S) || ka(S) || Te(S)) && v && (S = f, R = S), !s && (!(A(S) || ka(S) || Te(S)) || !A(k)))
    return l ? ut : r;
  if (process.env.NODE_ENV !== "production" && A(S) && e.messageCompiler == null)
    return ya(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${r}'.`), r;
  let M = !1;
  const z = () => {
    M = !0;
  }, O = Te(S) ? S : gl(e, r, k, S, R, z);
  if (M)
    return S;
  const C = d_(e, k, L, c), J = Vs(C), ne = r_(e, O, J), ee = n ? n(ne, r) : ne;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const ye = {
      timestamp: Date.now(),
      key: A(r) ? r : Te(S) ? S.key : "",
      locale: k || (Te(S) ? S.locale : ""),
      format: A(S) ? S : Te(S) ? S.source : "",
      message: ee
    };
    ye.meta = pe({}, e.__meta, /* @__PURE__ */ t_() || {}), Us(ye);
  }
  return ee;
}
function o_(e) {
  oe(e.list) ? e.list = e.list.map((a) => A(a) ? Cn(a) : a) : H(e.named) && Object.keys(e.named).forEach((a) => {
    A(e.named[a]) && (e.named[a] = Cn(e.named[a]));
  });
}
function fl(e, a, t, n, l, o) {
  const { messages: _, onWarn: d, messageResolver: r, localeFallbacker: c } = e, m = c(e, n, t);
  let p = {}, u, s = null, f = t, v = null;
  const x = "translate";
  for (let g = 0; g < m.length; g++) {
    if (u = v = m[g], process.env.NODE_ENV !== "production" && t !== u && !bl(t, u) && pt(l, a) && d(oa(fe.FALLBACK_TO_TRANSLATE, {
      key: a,
      target: u
    })), process.env.NODE_ENV !== "production" && t !== u) {
      const R = e.__v_emitter;
      R && R.emit("fallback", {
        type: x,
        key: a,
        from: f,
        to: v,
        groupId: `${x}:${a}`
      });
    }
    p = _[u] || {};
    let k = null, L, S;
    if (process.env.NODE_ENV !== "production" && $e && (k = window.performance.now(), L = "intlify-message-resolve-start", S = "intlify-message-resolve-end", ke && ke(L)), (s = r(p, a)) === null && (s = p[a]), process.env.NODE_ENV !== "production" && $e) {
      const R = window.performance.now(), M = e.__v_emitter;
      M && k && s && M.emit("message-resolve", {
        type: "message-resolve",
        key: a,
        message: s,
        time: R - k,
        groupId: `${x}:${a}`
      }), L && S && ke && ia && (ke(S), ia("intlify message resolve", L, S));
    }
    if (A(s) || ka(s) || Te(s))
      break;
    if (!i_(u, m)) {
      const R = an(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        a,
        u,
        o,
        x
      );
      R !== a && (s = R);
    }
    f = v;
  }
  return [s, u, p];
}
function gl(e, a, t, n, l, o) {
  const { messageCompiler: _, warnHtmlMessage: d } = e;
  if (Te(n)) {
    const u = n;
    return u.locale = u.locale || t, u.key = u.key || a, u;
  }
  if (_ == null) {
    const u = () => n;
    return u.locale = t, u.key = a, u;
  }
  let r = null, c, m;
  process.env.NODE_ENV !== "production" && $e && (r = window.performance.now(), c = "intlify-message-compilation-start", m = "intlify-message-compilation-end", ke && ke(c));
  const p = _(n, s_(e, t, l, n, d, o));
  if (process.env.NODE_ENV !== "production" && $e) {
    const u = window.performance.now(), s = e.__v_emitter;
    s && r && s.emit("message-compilation", {
      type: "message-compilation",
      message: n,
      time: u - r,
      groupId: `translate:${a}`
    }), c && m && ke && ia && (ke(m), ia("intlify message compilation", c, m));
  }
  return p.locale = t, p.key = a, p.source = n, p;
}
function r_(e, a, t) {
  let n = null, l, o;
  process.env.NODE_ENV !== "production" && $e && (n = window.performance.now(), l = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", ke && ke(l));
  const _ = a(t);
  if (process.env.NODE_ENV !== "production" && $e) {
    const d = window.performance.now(), r = e.__v_emitter;
    r && n && r.emit("message-evaluation", {
      type: "message-evaluation",
      value: _,
      time: d - n,
      groupId: `translate:${a.key}`
    }), l && o && ke && ia && (ke(o), ia("intlify message evaluation", l, o));
  }
  return _;
}
function $t(...e) {
  const [a, t, n] = e, l = {};
  if (!A(a) && !ue(a) && !Te(a) && !ka(a))
    throw je(de.INVALID_ARGUMENT);
  const o = ue(a) ? String(a) : (Te(a), a);
  return ue(t) ? l.plural = t : A(t) ? l.default = t : G(t) && !_t(t) ? l.named = t : oe(t) && (l.list = t), ue(n) ? l.plural = n : A(n) ? l.default = n : G(n) && pe(l, n), [o, l];
}
function s_(e, a, t, n, l, o) {
  return {
    locale: a,
    key: t,
    warnHtmlMessage: l,
    onError: (_) => {
      if (o && o(_), process.env.NODE_ENV !== "production") {
        const d = __(n), r = `Message compilation error: ${_.message}`, c = _.location && d && gs(d, _.location.start.offset, _.location.end.offset), m = e.__v_emitter;
        m && d && m.emit("compile-error", {
          message: d,
          error: _.message,
          start: _.location && _.location.start.offset,
          end: _.location && _.location.end.offset,
          groupId: `translate:${t}`
        }), console.error(c ? `${r}
${c}` : r);
      } else
        throw _;
    },
    onCacheKey: (_) => ds(a, t, _)
  };
}
function __(e) {
  if (A(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function d_(e, a, t, n) {
  const { modifiers: l, pluralRules: o, messageResolver: _, fallbackLocale: d, fallbackWarn: r, missingWarn: c, fallbackContext: m } = e, u = {
    locale: a,
    modifiers: l,
    pluralRules: o,
    messages: (s) => {
      let f = _(t, s);
      if (f == null && m) {
        const [, , v] = fl(m, s, a, d, r, c);
        f = _(v, s);
      }
      if (A(f) || ka(f)) {
        let v = !1;
        const g = gl(e, s, a, f, s, () => {
          v = !0;
        });
        return v ? zn : g;
      } else
        return Te(f) ? f : zn;
    }
  };
  return e.processor && (u.processor = e.processor), n.list && (u.list = n.list), n.named && (u.named = n.named), ue(n.plural) && (u.pluralIndex = n.plural), u;
}
const Fn = typeof Intl < "u", hl = {
  dateTimeFormat: Fn && typeof Intl.DateTimeFormat < "u",
  numberFormat: Fn && typeof Intl.NumberFormat < "u"
};
function Vn(e, ...a) {
  const { datetimeFormats: t, unresolving: n, fallbackLocale: l, onWarn: o, localeFallbacker: _ } = e, { __datetimeFormatters: d } = e;
  if (process.env.NODE_ENV !== "production" && !hl.dateTimeFormat)
    return o(oa(fe.CANNOT_FORMAT_DATE)), ot;
  const [r, c, m, p] = Bt(...a), u = ie(m.missingWarn) ? m.missingWarn : e.missingWarn, s = ie(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn, f = !!m.part, v = en(e, m), x = _(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    l,
    v
  );
  if (!A(r) || r === "")
    return new Intl.DateTimeFormat(v, p).format(c);
  let g = {}, k, L = null, S = v, R = null;
  const M = "datetime format";
  for (let C = 0; C < x.length; C++) {
    if (k = R = x[C], process.env.NODE_ENV !== "production" && v !== k && pt(s, r) && o(oa(fe.FALLBACK_TO_DATE_FORMAT, {
      key: r,
      target: k
    })), process.env.NODE_ENV !== "production" && v !== k) {
      const J = e.__v_emitter;
      J && J.emit("fallback", {
        type: M,
        key: r,
        from: S,
        to: R,
        groupId: `${M}:${r}`
      });
    }
    if (g = t[k] || {}, L = g[r], G(L))
      break;
    an(e, r, k, u, M), S = R;
  }
  if (!G(L) || !A(k))
    return n ? ut : r;
  let z = `${k}__${r}`;
  _t(p) || (z = `${z}__${JSON.stringify(p)}`);
  let O = d.get(z);
  return O || (O = new Intl.DateTimeFormat(k, pe({}, L, p)), d.set(z, O)), f ? O.formatToParts(c) : O.format(c);
}
const wl = [
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
function Bt(...e) {
  const [a, t, n, l] = e, o = {};
  let _ = {}, d;
  if (A(a)) {
    const r = a.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!r)
      throw je(de.INVALID_ISO_DATE_ARGUMENT);
    const c = r[3] ? r[3].trim().startsWith("T") ? `${r[1].trim()}${r[3].trim()}` : `${r[1].trim()}T${r[3].trim()}` : r[1].trim();
    d = new Date(c);
    try {
      d.toISOString();
    } catch {
      throw je(de.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (ps(a)) {
    if (isNaN(a.getTime()))
      throw je(de.INVALID_DATE_ARGUMENT);
    d = a;
  } else if (ue(a))
    d = a;
  else
    throw je(de.INVALID_ARGUMENT);
  return A(t) ? o.key = t : G(t) && Object.keys(t).forEach((r) => {
    wl.includes(r) ? _[r] = t[r] : o[r] = t[r];
  }), A(n) ? o.locale = n : G(n) && (_ = n), G(l) && (_ = l), [o.key || "", d, o, _];
}
function $n(e, a, t) {
  const n = e;
  for (const l in t) {
    const o = `${a}__${l}`;
    n.__datetimeFormatters.has(o) && n.__datetimeFormatters.delete(o);
  }
}
function Bn(e, ...a) {
  const { numberFormats: t, unresolving: n, fallbackLocale: l, onWarn: o, localeFallbacker: _ } = e, { __numberFormatters: d } = e;
  if (process.env.NODE_ENV !== "production" && !hl.numberFormat)
    return o(oa(fe.CANNOT_FORMAT_NUMBER)), ot;
  const [r, c, m, p] = Ut(...a), u = ie(m.missingWarn) ? m.missingWarn : e.missingWarn, s = ie(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn, f = !!m.part, v = en(e, m), x = _(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    l,
    v
  );
  if (!A(r) || r === "")
    return new Intl.NumberFormat(v, p).format(c);
  let g = {}, k, L = null, S = v, R = null;
  const M = "number format";
  for (let C = 0; C < x.length; C++) {
    if (k = R = x[C], process.env.NODE_ENV !== "production" && v !== k && pt(s, r) && o(oa(fe.FALLBACK_TO_NUMBER_FORMAT, {
      key: r,
      target: k
    })), process.env.NODE_ENV !== "production" && v !== k) {
      const J = e.__v_emitter;
      J && J.emit("fallback", {
        type: M,
        key: r,
        from: S,
        to: R,
        groupId: `${M}:${r}`
      });
    }
    if (g = t[k] || {}, L = g[r], G(L))
      break;
    an(e, r, k, u, M), S = R;
  }
  if (!G(L) || !A(k))
    return n ? ut : r;
  let z = `${k}__${r}`;
  _t(p) || (z = `${z}__${JSON.stringify(p)}`);
  let O = d.get(z);
  return O || (O = new Intl.NumberFormat(k, pe({}, L, p)), d.set(z, O)), f ? O.formatToParts(c) : O.format(c);
}
const vl = [
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
function Ut(...e) {
  const [a, t, n, l] = e, o = {};
  let _ = {};
  if (!ue(a))
    throw je(de.INVALID_ARGUMENT);
  const d = a;
  return A(t) ? o.key = t : G(t) && Object.keys(t).forEach((r) => {
    vl.includes(r) ? _[r] = t[r] : o[r] = t[r];
  }), A(n) ? o.locale = n : G(n) && (_ = n), G(l) && (_ = l), [o.key || "", d, o, _];
}
function Un(e, a, t) {
  const n = e;
  for (const l in t) {
    const o = `${a}__${l}`;
    n.__numberFormatters.has(o) && n.__numberFormatters.delete(o);
  }
}
xs();
/*!
  * vue-i18n v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const u_ = "9.14.1";
function p_() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Pa().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Pa().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const kl = fe.__EXTEND_POINT__, ze = dt(kl), ve = {
  FALLBACK_TO_ROOT: kl,
  // 9
  NOT_SUPPORTED_PRESERVE: ze(),
  // 10
  NOT_SUPPORTED_FORMATTER: ze(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: ze(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: ze(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: ze(),
  // 14
  NOT_FOUND_PARENT_SCOPE: ze(),
  // 15
  IGNORE_OBJ_FLATTEN: ze(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: ze(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: ze()
  // 18
}, c_ = {
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
function rt(e, ...a) {
  return tl(c_[e], ...a);
}
const yl = de.__EXTEND_POINT__, we = dt(yl), le = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: yl,
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
function Da(e, ...a) {
  return ol(e, null, process.env.NODE_ENV !== "production" ? { messages: m_, args: a } : void 0);
}
const m_ = {
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
}, Wt = /* @__PURE__ */ Be("__translateVNode"), Ht = /* @__PURE__ */ Be("__datetimeParts"), Gt = /* @__PURE__ */ Be("__numberParts"), Kt = /* @__PURE__ */ Be("__enableEmitter"), qt = /* @__PURE__ */ Be("__disableEmitter"), b_ = Be("__setPluralRules"), f_ = /* @__PURE__ */ Be("__injectWithOption"), Yt = /* @__PURE__ */ Be("__dispose");
function za(e) {
  if (!H(e))
    return e;
  for (const a in e)
    if (lt(e, a))
      if (!a.includes("."))
        H(e[a]) && za(e[a]);
      else {
        const t = a.split("."), n = t.length - 1;
        let l = e, o = !1;
        for (let _ = 0; _ < n; _++) {
          if (t[_] in l || (l[t[_]] = {}), !H(l[t[_]])) {
            process.env.NODE_ENV !== "production" && ya(rt(ve.IGNORE_OBJ_FLATTEN, {
              key: t[_]
            })), o = !0;
            break;
          }
          l = l[t[_]];
        }
        o || (l[t[n]] = e[a], delete e[a]), H(l[t[n]]) && za(l[t[n]]);
      }
  return e;
}
function El(e, a) {
  const { messages: t, __i18n: n, messageResolver: l, flatJson: o } = a, _ = G(t) ? t : oe(n) ? {} : { [e]: {} };
  if (oe(n) && n.forEach((d) => {
    if ("locale" in d && "resource" in d) {
      const { locale: r, resource: c } = d;
      r ? (_[r] = _[r] || {}, at(c, _[r])) : at(c, _);
    } else
      A(d) && at(JSON.parse(d), _);
  }), l == null && o)
    for (const d in _)
      lt(_, d) && za(_[d]);
  return _;
}
function xl(e) {
  return e.type;
}
function g_(e, a, t) {
  let n = H(a.messages) ? a.messages : {};
  "__i18nGlobal" in t && (n = El(e.locale.value, {
    messages: n,
    __i18n: t.__i18nGlobal
  }));
  const l = Object.keys(n);
  l.length && l.forEach((o) => {
    e.mergeLocaleMessage(o, n[o]);
  });
  {
    if (H(a.datetimeFormats)) {
      const o = Object.keys(a.datetimeFormats);
      o.length && o.forEach((_) => {
        e.mergeDateTimeFormat(_, a.datetimeFormats[_]);
      });
    }
    if (H(a.numberFormats)) {
      const o = Object.keys(a.numberFormats);
      o.length && o.forEach((_) => {
        e.mergeNumberFormat(_, a.numberFormats[_]);
      });
    }
  }
}
function Wn(e) {
  return j(Pi, null, e, 0);
}
const Hn = "__INTLIFY_META__", Gn = () => [], h_ = () => !1;
let Kn = 0;
function qn(e) {
  return (a, t, n, l) => e(t, n, Jt() || void 0, l);
}
const w_ = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Jt();
  let a = null;
  return e && (a = xl(e)[Hn]) ? { [Hn]: a } : null;
};
function v_(e = {}, a) {
  const { __root: t, __injectWithOption: n } = e, l = t === void 0, o = e.flatJson, _ = $e ? $ : Mi, d = !!e.translateExistCompatible;
  process.env.NODE_ENV !== "production" && d && il(rt(ve.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  let r = ie(e.inheritLocale) ? e.inheritLocale : !0;
  const c = _(
    // prettier-ignore
    t && r ? t.locale.value : A(e.locale) ? e.locale : it
  ), m = _(
    // prettier-ignore
    t && r ? t.fallbackLocale.value : A(e.fallbackLocale) || oe(e.fallbackLocale) || G(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value
  ), p = _(El(c.value, e)), u = _(G(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), s = _(G(e.numberFormats) ? e.numberFormats : { [c.value]: {} });
  let f = t ? t.missingWarn : ie(e.missingWarn) || nt(e.missingWarn) ? e.missingWarn : !0, v = t ? t.fallbackWarn : ie(e.fallbackWarn) || nt(e.fallbackWarn) ? e.fallbackWarn : !0, x = t ? t.fallbackRoot : ie(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, k = Q(e.missing) ? e.missing : null, L = Q(e.missing) ? qn(e.missing) : null, S = Q(e.postTranslation) ? e.postTranslation : null, R = t ? t.warnHtmlMessage : ie(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, M = !!e.escapeParameter;
  const z = t ? t.modifiers : G(e.modifiers) ? e.modifiers : {};
  let O = e.pluralRules || t && t.pluralRules, C;
  C = (() => {
    l && Rn(null);
    const h = {
      version: u_,
      locale: c.value,
      fallbackLocale: m.value,
      messages: p.value,
      modifiers: z,
      pluralRules: O,
      missing: L === null ? void 0 : L,
      missingWarn: f,
      fallbackWarn: v,
      fallbackFormat: g,
      unresolving: !0,
      postTranslation: S === null ? void 0 : S,
      warnHtmlMessage: R,
      escapeParameter: M,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    h.datetimeFormats = u.value, h.numberFormats = s.value, h.__datetimeFormatters = G(C) ? C.__datetimeFormatters : void 0, h.__numberFormatters = G(C) ? C.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (h.__v_emitter = G(C) ? C.__v_emitter : void 0);
    const E = l_(h);
    return l && Rn(E), E;
  })(), Ia(C, c.value, m.value);
  function ne() {
    return [
      c.value,
      m.value,
      p.value,
      u.value,
      s.value
    ];
  }
  const ee = q({
    get: () => c.value,
    set: (h) => {
      c.value = h, C.locale = c.value;
    }
  }), ye = q({
    get: () => m.value,
    set: (h) => {
      m.value = h, C.fallbackLocale = m.value, Ia(C, c.value, h);
    }
  }), Pe = q(() => p.value), qe = /* @__PURE__ */ q(() => u.value), Ea = /* @__PURE__ */ q(() => s.value);
  function Ye() {
    return Q(S) ? S : null;
  }
  function Ze(h) {
    S = h, C.postTranslation = h;
  }
  function mt() {
    return k;
  }
  function Y(h) {
    h !== null && (L = qn(h)), k = h, C.missing = L;
  }
  function bt(h, E) {
    return h !== "translate" || !E.resolvedMessage;
  }
  const Re = (h, E, W, X, Le, ma) => {
    ne();
    let Ue;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, l || (C.fallbackContext = t ? n_() : void 0), Ue = h(C);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, l || (C.fallbackContext = void 0);
    }
    if (W !== "translate exists" && // for not `te` (e.g `t`)
    ue(Ue) && Ue === ut || W === "translate exists" && !Ue) {
      const [Oe, xt] = E();
      if (process.env.NODE_ENV !== "production" && t && A(Oe) && bt(W, xt) && (x && (pt(v, Oe) || ml(f, Oe)) && ya(rt(ve.FALLBACK_TO_ROOT, {
        key: Oe,
        type: W
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Ka } = C;
        Ka && x && Ka.emit("fallback", {
          type: W,
          key: Oe,
          to: "global",
          groupId: `${W}:${Oe}`
        });
      }
      return t && x ? X(t) : Le(Oe);
    } else {
      if (ma(Ue))
        return Ue;
      throw Da(le.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Ee(...h) {
    return Re((E) => Reflect.apply(jn, null, [E, ...h]), () => $t(...h), "translate", (E) => Reflect.apply(E.t, E, [...h]), (E) => E, (E) => A(E));
  }
  function Va(...h) {
    const [E, W, X] = h;
    if (X && !H(X))
      throw Da(le.INVALID_ARGUMENT);
    return Ee(E, W, pe({ resolvedMessage: !0 }, X || {}));
  }
  function $a(...h) {
    return Re((E) => Reflect.apply(Vn, null, [E, ...h]), () => Bt(...h), "datetime format", (E) => Reflect.apply(E.d, E, [...h]), () => ot, (E) => A(E));
  }
  function ft(...h) {
    return Re((E) => Reflect.apply(Bn, null, [E, ...h]), () => Ut(...h), "number format", (E) => Reflect.apply(E.n, E, [...h]), () => ot, (E) => A(E));
  }
  function gt(h) {
    return h.map((E) => A(E) || ue(E) || ie(E) ? Wn(String(E)) : E);
  }
  const ht = {
    normalize: gt,
    interpolate: (h) => h,
    type: "vnode"
  };
  function wt(...h) {
    return Re(
      (E) => {
        let W;
        const X = E;
        try {
          X.processor = ht, W = Reflect.apply(jn, null, [X, ...h]);
        } finally {
          X.processor = null;
        }
        return W;
      },
      () => $t(...h),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (E) => E[Wt](...h),
      (E) => [Wn(E)],
      (E) => oe(E)
    );
  }
  function Ba(...h) {
    return Re(
      (E) => Reflect.apply(Bn, null, [E, ...h]),
      () => Ut(...h),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (E) => E[Gt](...h),
      Gn,
      (E) => A(E) || oe(E)
    );
  }
  function vt(...h) {
    return Re(
      (E) => Reflect.apply(Vn, null, [E, ...h]),
      () => Bt(...h),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (E) => E[Ht](...h),
      Gn,
      (E) => A(E) || oe(E)
    );
  }
  function kt(h) {
    O = h, C.pluralRules = O;
  }
  function Ua(h, E) {
    return Re(() => {
      if (!h)
        return !1;
      const W = A(E) ? E : c.value, X = Ta(W), Le = C.messageResolver(X, h);
      return d ? Le != null : ka(Le) || Te(Le) || A(Le);
    }, () => [h], "translate exists", (W) => Reflect.apply(W.te, W, [h, E]), h_, (W) => ie(W));
  }
  function Wa(h) {
    let E = null;
    const W = _l(C, m.value, c.value);
    for (let X = 0; X < W.length; X++) {
      const Le = p.value[W[X]] || {}, ma = C.messageResolver(Le, h);
      if (ma != null) {
        E = ma;
        break;
      }
    }
    return E;
  }
  function xa(h) {
    const E = Wa(h);
    return E ?? (t ? t.tm(h) || {} : {});
  }
  function Ta(h) {
    return p.value[h] || {};
  }
  function yt(h, E) {
    if (o) {
      const W = { [h]: E };
      for (const X in W)
        lt(W, X) && za(W[X]);
      E = W[h];
    }
    p.value[h] = E, C.messages = p.value;
  }
  function Et(h, E) {
    p.value[h] = p.value[h] || {};
    const W = { [h]: E };
    if (o)
      for (const X in W)
        lt(W, X) && za(W[X]);
    E = W[h], at(E, p.value[h]), C.messages = p.value;
  }
  function pa(h) {
    return u.value[h] || {};
  }
  function Sa(h, E) {
    u.value[h] = E, C.datetimeFormats = u.value, $n(C, h, E);
  }
  function Ha(h, E) {
    u.value[h] = pe(u.value[h] || {}, E), C.datetimeFormats = u.value, $n(C, h, E);
  }
  function Ga(h) {
    return s.value[h] || {};
  }
  function Ne(h, E) {
    s.value[h] = E, C.numberFormats = s.value, Un(C, h, E);
  }
  function ca(h, E) {
    s.value[h] = pe(s.value[h] || {}, E), C.numberFormats = s.value, Un(C, h, E);
  }
  Kn++, t && $e && (Ma(t.locale, (h) => {
    r && (c.value = h, C.locale = h, Ia(C, c.value, m.value));
  }), Ma(t.fallbackLocale, (h) => {
    r && (m.value = h, C.fallbackLocale = h, Ia(C, c.value, m.value));
  }));
  const ae = {
    id: Kn,
    locale: ee,
    fallbackLocale: ye,
    get inheritLocale() {
      return r;
    },
    set inheritLocale(h) {
      r = h, h && t && (c.value = t.locale.value, m.value = t.fallbackLocale.value, Ia(C, c.value, m.value));
    },
    get availableLocales() {
      return Object.keys(p.value).sort();
    },
    messages: Pe,
    get modifiers() {
      return z;
    },
    get pluralRules() {
      return O || {};
    },
    get isGlobal() {
      return l;
    },
    get missingWarn() {
      return f;
    },
    set missingWarn(h) {
      f = h, C.missingWarn = f;
    },
    get fallbackWarn() {
      return v;
    },
    set fallbackWarn(h) {
      v = h, C.fallbackWarn = v;
    },
    get fallbackRoot() {
      return x;
    },
    set fallbackRoot(h) {
      x = h;
    },
    get fallbackFormat() {
      return g;
    },
    set fallbackFormat(h) {
      g = h, C.fallbackFormat = g;
    },
    get warnHtmlMessage() {
      return R;
    },
    set warnHtmlMessage(h) {
      R = h, C.warnHtmlMessage = h;
    },
    get escapeParameter() {
      return M;
    },
    set escapeParameter(h) {
      M = h, C.escapeParameter = h;
    },
    t: Ee,
    getLocaleMessage: Ta,
    setLocaleMessage: yt,
    mergeLocaleMessage: Et,
    getPostTranslationHandler: Ye,
    setPostTranslationHandler: Ze,
    getMissingHandler: mt,
    setMissingHandler: Y,
    [b_]: kt
  };
  return ae.datetimeFormats = qe, ae.numberFormats = Ea, ae.rt = Va, ae.te = Ua, ae.tm = xa, ae.d = $a, ae.n = ft, ae.getDateTimeFormat = pa, ae.setDateTimeFormat = Sa, ae.mergeDateTimeFormat = Ha, ae.getNumberFormat = Ga, ae.setNumberFormat = Ne, ae.mergeNumberFormat = ca, ae[f_] = n, ae[Wt] = wt, ae[Ht] = vt, ae[Gt] = Ba, process.env.NODE_ENV !== "production" && (ae[Kt] = (h) => {
    C.__v_emitter = h;
  }, ae[qt] = () => {
    C.__v_emitter = void 0;
  }), ae;
}
const tn = {
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
function k_({ slots: e }, a) {
  return a.length === 1 && a[0] === "default" ? (e.default ? e.default() : []).reduce((n, l) => [
    ...n,
    // prettier-ignore
    ...l.type === na ? l.children : [l]
  ], []) : a.reduce((t, n) => {
    const l = e[n];
    return l && (t[n] = l()), t;
  }, {});
}
function Tl(e) {
  return na;
}
pe({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validator: (e) => ue(e) || !isNaN(e)
  }
}, tn);
function y_(e) {
  return oe(e) && !A(e[0]);
}
function Sl(e, a, t, n) {
  const { slots: l, attrs: o } = a;
  return () => {
    const _ = { part: !0 };
    let d = {};
    e.locale && (_.locale = e.locale), A(e.format) ? _.key = e.format : H(e.format) && (A(e.format.key) && (_.key = e.format.key), d = Object.keys(e.format).reduce((u, s) => t.includes(s) ? pe({}, u, { [s]: e.format[s] }) : u, {}));
    const r = n(e.value, _, d);
    let c = [_.key];
    oe(r) ? c = r.map((u, s) => {
      const f = l[u.type], v = f ? f({ [u.type]: u.value, index: s, parts: r }) : [u.value];
      return y_(v) && (v[0].key = `${u.type}-${s}`), v;
    }) : A(r) && (c = [r]);
    const m = pe({}, o), p = A(e.tag) || H(e.tag) ? e.tag : Tl();
    return Zt(p, m, c);
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
}, tn);
pe({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, tn);
function Yn(e, a) {
}
const E_ = /* @__PURE__ */ Be("global-vue-i18n");
function ct(e = {}) {
  const a = Jt();
  if (a == null)
    throw Da(le.MUST_BE_CALL_SETUP_TOP);
  if (!a.isCE && a.appContext.app != null && !a.appContext.app.__VUE_I18N_SYMBOL__)
    throw Da(le.NOT_INSTALLED);
  const t = x_(a), n = S_(t), l = xl(a), o = T_(e, l);
  if (o === "global")
    return g_(n, e, l), n;
  if (o === "parent") {
    let r = C_(t, a, e.__useComponent);
    return r == null && (process.env.NODE_ENV !== "production" && ya(rt(ve.NOT_FOUND_PARENT_SCOPE)), r = n), r;
  }
  const _ = t;
  let d = _.__getInstance(a);
  if (d == null) {
    const r = pe({}, e);
    "__i18n" in l && (r.__i18n = l.__i18n), n && (r.__root = n), d = v_(r), _.__composerExtend && (d[Yt] = _.__composerExtend(d)), L_(_, a, d), _.__setInstance(a, d);
  }
  return d;
}
function x_(e) {
  {
    const a = Xn(e.isCE ? E_ : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!a)
      throw Da(e.isCE ? le.NOT_INSTALLED_WITH_PROVIDE : le.UNEXPECTED_ERROR);
    return a;
  }
}
function T_(e, a) {
  return _t(e) ? "__i18n" in a ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function S_(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function C_(e, a, t = !1) {
  let n = null;
  const l = a.root;
  let o = N_(a, t);
  for (; o != null; ) {
    const _ = e;
    if (e.mode === "composition" && (n = _.__getInstance(o)), n != null || l === o)
      break;
    o = o.parent;
  }
  return n;
}
function N_(e, a = !1) {
  return e == null ? null : a && e.vnode.ctx || e.parent;
}
function L_(e, a, t) {
  let n = null;
  st(() => {
    if (process.env.NODE_ENV !== "production" && a.vnode.el) {
      a.vnode.el.__VUE_I18N__ = t, n = hs();
      const l = t;
      l[Kt] && l[Kt](n), n.on("*", Yn);
    }
  }, a), Ai(() => {
    const l = t;
    process.env.NODE_ENV !== "production" && a.vnode.el && a.vnode.el.__VUE_I18N__ && (n && n.off("*", Yn), l[qt] && l[qt](), delete a.vnode.el.__VUE_I18N__), e.__deleteInstance(a);
    const o = l[Yt];
    o && (o(), delete l[Yt]);
  }, a);
}
p_();
Qs(As);
e_(_l);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Pa();
  e.__INTLIFY__ = !0, $s(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const O_ = {
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
    confirmation_text: "تم تحديث كلمة المرور الخاصة بك",
    current_password_label: "كلمة المرور الحالية",
    current_password_input_placeholder: "كلمة المرور الحالية",
    confirm_password_label: "تأكيد كلمة المرور الجديدة",
    confirm_password_input_placeholder: "أعد إدخال كلمة المرور الجديدة",
    password_mismatch: "كلمتا المرور غير متطابقتين"
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
}, I_ = {
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
    confirmation_text: "আপনার পাসওয়ার্ড আপডেট করা হয়েছে",
    current_password_label: "বর্তমান পাসওয়ার্ড",
    current_password_input_placeholder: "আপনার বর্তমান পাসওয়ার্ড",
    confirm_password_label: "নতুন পাসওয়ার্ড নিশ্চিত করুন",
    confirm_password_input_placeholder: "আপনার নতুন পাসওয়ার্ড আবার লিখুন",
    password_mismatch: "পাসওয়ার্ড মিলছে না"
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
}, A_ = {
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
    confirmation_text: "Vaše heslo bylo aktualizováno",
    current_password_label: "Současné heslo",
    current_password_input_placeholder: "Vaše současné heslo",
    confirm_password_label: "Potvrďte nové heslo",
    confirm_password_input_placeholder: "Zadejte znovu nové heslo",
    password_mismatch: "Hesla se neshodují"
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
}, M_ = {
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
    confirmation_text: "Ihr Passwort wurde aktualisiert",
    current_password_label: "Aktuelles Passwort",
    current_password_input_placeholder: "Ihr aktuelles Passwort",
    confirm_password_label: "Neues Passwort bestätigen",
    confirm_password_input_placeholder: "Neues Passwort erneut eingeben",
    password_mismatch: "Die Passwörter stimmen nicht überein"
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
}, P_ = {
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
    confirmation_text: "Ο κωδικός σας έχει ενημερωθεί",
    current_password_label: "Τρέχων κωδικός",
    current_password_input_placeholder: "Ο τρέχων κωδικός σας",
    confirm_password_label: "Επιβεβαίωση νέου κωδικού",
    confirm_password_input_placeholder: "Εισαγάγετε ξανά τον νέο κωδικό",
    password_mismatch: "Οι κωδικοί δεν ταιριάζουν"
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
}, R_ = {
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
    confirmation_text: "Your password has been updated",
    current_password_label: "Current password",
    current_password_input_placeholder: "Your current password",
    confirm_password_label: "Confirm new password",
    confirm_password_input_placeholder: "Re-enter your new password",
    password_mismatch: "Passwords do not match"
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
}, D_ = {
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
    confirmation_text: "Tu contraseña ha sido actualizada",
    current_password_label: "Contraseña actual",
    current_password_input_placeholder: "Tu contraseña actual",
    confirm_password_label: "Confirmar nueva contraseña",
    confirm_password_input_placeholder: "Vuelve a escribir tu nueva contraseña",
    password_mismatch: "Las contraseñas no coinciden"
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
}, z_ = {
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
    confirmation_text: "رمز عبور شما به‌روزرسانی شد",
    current_password_label: "رمز عبور فعلی",
    current_password_input_placeholder: "رمز عبور فعلی شما",
    confirm_password_label: "تأیید رمز عبور جدید",
    confirm_password_input_placeholder: "رمز عبور جدید را دوباره وارد کنید",
    password_mismatch: "رمزهای عبور مطابقت ندارند"
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
}, j_ = {
  password_show: "Näytä salasana",
  password_hide: "Piilota salasana",
  sign_up: {
    email_label: "Sähköposti",
    password_label: "Salasana",
    email_input_placeholder: "Sähköpostiosoitteesi",
    password_input_placeholder: "Salasanasi",
    button_label: "Rekisteröidy",
    loading_button_label: "Rekisteröidytään ...",
    social_provider_text: "Rekisteröidy palvelulla {{provider}}",
    link_text: "Eikö sinulla ole tiliä? Rekisteröidy",
    confirmation_text: "Tarkista sähköpostistasi vahvistuslinkki"
  },
  sign_in: {
    email_label: "Sähköposti",
    password_label: "Salasana",
    email_input_placeholder: "Sähköpostiosoitteesi",
    password_input_placeholder: "Salasanasi",
    button_label: "Kirjaudu sisään",
    loading_button_label: "Kirjaudutaan sisään ...",
    social_provider_text: "Kirjaudu sisään palvelulla {{provider}}",
    link_text: "Onko sinulla jo tili? Kirjaudu sisään"
  },
  magic_link: {
    email_input_label: "Sähköposti",
    email_input_placeholder: "Sähköpostiosoitteesi",
    button_label: "Lähetä taikalinkki",
    loading_button_label: "Lähetetään taikalinkkiä ...",
    link_text: "Lähetä sähköposti, joka sisältää taikalinkin",
    confirmation_text: "Tarkista sähköpostistasi taikalinkki"
  },
  forgotten_password: {
    email_label: "Sähköposti",
    password_label: "Salasana",
    email_input_placeholder: "Sähköpostiosoitteesi",
    button_label: "Lähetä salasanan palautusohjeet",
    loading_button_label: "Lähetetään ohjeita ...",
    link_text: "Unohditko salasanasi?",
    confirmation_text: "Tarkista sähköpostistasi salasanan palautuslinkki"
  },
  update_password: {
    password_label: "Uusi salasana",
    password_input_placeholder: "Uusi salasanasi",
    button_label: "Päivitä salasana",
    loading_button_label: "Päivitetään salasanaa ...",
    confirmation_text: "Salasanasi on päivitetty",
    current_password_label: "Nykyinen salasana",
    current_password_input_placeholder: "Nykyinen salasanasi",
    confirm_password_label: "Vahvista uusi salasana",
    confirm_password_input_placeholder: "Kirjoita uusi salasana uudelleen",
    password_mismatch: "Salasanat eivät täsmää"
  },
  verify_otp: {
    email_input_label: "Sähköposti",
    email_input_placeholder: "Sähköpostiosoitteesi",
    phone_input_label: "Puhelinnumero",
    phone_input_placeholder: "Puhelinnumerosi",
    token_input_label: "Koodi",
    token_input_placeholder: "Yksilöllinen koodisi",
    button_label: "Vahvista koodi",
    loading_button_label: "Kirjaudutaan sisään ..."
  }
}, F_ = {
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
    confirmation_text: "Na-update na ang iyong password",
    current_password_label: "Kasalukuyang password",
    current_password_input_placeholder: "Ang iyong kasalukuyang password",
    confirm_password_label: "Kumpirmahin ang bagong password",
    confirm_password_input_placeholder: "Ilagay muli ang iyong bagong password",
    password_mismatch: "Hindi magkatugma ang mga password"
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
}, V_ = {
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
    confirmation_text: "Votre mot de passe a été mis à jour",
    current_password_label: "Mot de passe actuel",
    current_password_input_placeholder: "Votre mot de passe actuel",
    confirm_password_label: "Confirmer le nouveau mot de passe",
    confirm_password_input_placeholder: "Saisissez à nouveau votre nouveau mot de passe",
    password_mismatch: "Les mots de passe ne correspondent pas"
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
}, $_ = {
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
    confirmation_text: "הסיסמה שלך עודכנה",
    current_password_label: "סיסמה נוכחית",
    current_password_input_placeholder: "הסיסמה הנוכחית שלך",
    confirm_password_label: "אימות סיסמה חדשה",
    confirm_password_input_placeholder: "הזן שוב את הסיסמה החדשה",
    password_mismatch: "הסיסמאות אינן תואמות"
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
}, B_ = {
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
    confirmation_text: "आपका पासवर्ड अपडेट हो गया है",
    current_password_label: "वर्तमान पासवर्ड",
    current_password_input_placeholder: "आपका वर्तमान पासवर्ड",
    confirm_password_label: "नए पासवर्ड की पुष्टि करें",
    confirm_password_input_placeholder: "अपना नया पासवर्ड फिर से दर्ज करें",
    password_mismatch: "पासवर्ड मेल नहीं खाते"
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
}, U_ = {
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
    confirmation_text: "A jelszavad frissítésre került",
    current_password_label: "Jelenlegi jelszó",
    current_password_input_placeholder: "A jelenlegi jelszavad",
    confirm_password_label: "Új jelszó megerősítése",
    confirm_password_input_placeholder: "Add meg újra az új jelszót",
    password_mismatch: "A jelszavak nem egyeznek"
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
}, W_ = {
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
    confirmation_text: "Kata sandi Anda telah diperbarui",
    current_password_label: "Kata sandi saat ini",
    current_password_input_placeholder: "Kata sandi Anda saat ini",
    confirm_password_label: "Konfirmasi kata sandi baru",
    confirm_password_input_placeholder: "Masukkan lagi kata sandi baru Anda",
    password_mismatch: "Kata sandi tidak cocok"
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
}, H_ = {
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
    confirmation_text: "La tua password è stata aggiornata",
    current_password_label: "Password attuale",
    current_password_input_placeholder: "La tua password attuale",
    confirm_password_label: "Conferma nuova password",
    confirm_password_input_placeholder: "Reinserisci la nuova password",
    password_mismatch: "Le password non corrispondono"
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
}, G_ = {
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
    confirmation_text: "パスワードが更新されました",
    current_password_label: "現在のパスワード",
    current_password_input_placeholder: "現在のパスワード",
    confirm_password_label: "新しいパスワード（確認）",
    confirm_password_input_placeholder: "新しいパスワードをもう一度入力",
    password_mismatch: "パスワードが一致しません"
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
}, K_ = {
  password_show: "បង្ហាញពាក្យសម្ងាត់",
  password_hide: "លាក់ពាក្យសម្ងាត់",
  sign_up: {
    email_label: "អ៊ីមែល",
    password_label: "ពាក្យសម្ងាត់",
    email_input_placeholder: "អ៊ីមែលរបស់អ្នក",
    password_input_placeholder: "ពាក្យសម្ងាត់របស់អ្នក",
    button_label: "ចុះឈ្មោះ",
    loading_button_label: "កំពុងចុះឈ្មោះ ...",
    social_provider_text: "ចុះឈ្មោះជាមួយ {{provider}}",
    link_text: "មិនមានគណនីទេ? ចុះឈ្មោះ",
    confirmation_text: "ពិនិត្យអ៊ីមែលរបស់អ្នកដើម្បីរកតំណបញ្ជាក់"
  },
  sign_in: {
    email_label: "អ៊ីមែល",
    password_label: "ពាក្យសម្ងាត់",
    email_input_placeholder: "អ៊ីមែលរបស់អ្នក",
    password_input_placeholder: "ពាក្យសម្ងាត់របស់អ្នក",
    button_label: "ចូល",
    loading_button_label: "កំពុងចូល ...",
    social_provider_text: "ចូលជាមួយ {{provider}}",
    link_text: "មានគណនីរួចហើយ? ចូល"
  },
  magic_link: {
    email_input_label: "អ៊ីមែល",
    email_input_placeholder: "អ៊ីមែលរបស់អ្នក",
    button_label: "ផ្ញើតំណវេទមន្ត",
    loading_button_label: "កំពុងផ្ញើតំណវេទមន្ត ...",
    link_text: "ផ្ញើអ៊ីមែលដែលមានតំណវេទមន្ត",
    confirmation_text: "ពិនិត្យអ៊ីមែលរបស់អ្នកដើម្បីរកតំណវេទមន្ត"
  },
  forgotten_password: {
    email_label: "អ៊ីមែល",
    password_label: "ពាក្យសម្ងាត់",
    email_input_placeholder: "អ៊ីមែលរបស់អ្នក",
    button_label: "ផ្ញើការណែនាំកំណត់ពាក្យសម្ងាត់ឡើងវិញ",
    loading_button_label: "កំពុងផ្ញើការណែនាំ ...",
    link_text: "ភ្លេចពាក្យសម្ងាត់របស់អ្នក?",
    confirmation_text: "ពិនិត្យអ៊ីមែលរបស់អ្នកដើម្បីរកតំណកំណត់ពាក្យសម្ងាត់ឡើងវិញ"
  },
  update_password: {
    password_label: "ពាក្យសម្ងាត់ថ្មី",
    password_input_placeholder: "ពាក្យសម្ងាត់ថ្មីរបស់អ្នក",
    button_label: "ធ្វើបច្ចុប្បន្នភាពពាក្យសម្ងាត់",
    loading_button_label: "កំពុងធ្វើបច្ចុប្បន្នភាពពាក្យសម្ងាត់ ...",
    confirmation_text: "ពាក្យសម្ងាត់របស់អ្នកត្រូវបានធ្វើបច្ចុប្បន្នភាព",
    current_password_label: "ពាក្យសម្ងាត់បច្ចុប្បន្ន",
    current_password_input_placeholder: "ពាក្យសម្ងាត់បច្ចុប្បន្នរបស់អ្នក",
    confirm_password_label: "បញ្ជាក់ពាក្យសម្ងាត់ថ្មី",
    confirm_password_input_placeholder: "បញ្ចូលពាក្យសម្ងាត់ថ្មីម្តងទៀត",
    password_mismatch: "ពាក្យសម្ងាត់មិនត្រូវគ្នា"
  },
  verify_otp: {
    email_input_label: "អ៊ីមែល",
    email_input_placeholder: "អ៊ីមែលរបស់អ្នក",
    phone_input_label: "លេខទូរស័ព្ទ",
    phone_input_placeholder: "លេខទូរស័ព្ទរបស់អ្នក",
    token_input_label: "កូដ",
    token_input_placeholder: "កូដតែមួយគត់របស់អ្នក",
    button_label: "ផ្ទៀងផ្ទាត់កូដ",
    loading_button_label: "កំពុងចូល ..."
  }
}, q_ = {
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
    confirmation_text: "비밀번호가 업데이트되었습니다",
    current_password_label: "현재 비밀번호",
    current_password_input_placeholder: "현재 비밀번호",
    confirm_password_label: "새 비밀번호 확인",
    confirm_password_input_placeholder: "새 비밀번호를 다시 입력하세요",
    password_mismatch: "비밀번호가 일치하지 않습니다"
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
}, Y_ = {
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
    confirmation_text: "Kata laluan anda telah dikemas kini",
    current_password_label: "Kata laluan semasa",
    current_password_input_placeholder: "Kata laluan semasa anda",
    confirm_password_label: "Sahkan kata laluan baharu",
    confirm_password_input_placeholder: "Masukkan semula kata laluan baharu anda",
    password_mismatch: "Kata laluan tidak sepadan"
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
}, Z_ = {
  password_show: "စကားဝှက်ကို ပြပါ",
  password_hide: "စကားဝှက်ကို ဖျောက်ပါ",
  sign_up: {
    email_label: "အီးမေးလ်",
    password_label: "စကားဝှက်",
    email_input_placeholder: "သင့်အီးမေးလ်",
    password_input_placeholder: "သင့်စကားဝှက်",
    button_label: "အကောင့်ဖွင့်ရန်",
    loading_button_label: "အကောင့်ဖွင့်နေသည် ...",
    social_provider_text: "{{provider}} ဖြင့် အကောင့်ဖွင့်ရန်",
    link_text: "အကောင့်မရှိသေးဘူးလား? အကောင့်ဖွင့်ရန်",
    confirmation_text: "အတည်ပြုလင့်ခ်အတွက် သင့်အီးမေးလ်ကို စစ်ဆေးပါ"
  },
  sign_in: {
    email_label: "အီးမေးလ်",
    password_label: "စကားဝှက်",
    email_input_placeholder: "သင့်အီးမေးလ်",
    password_input_placeholder: "သင့်စကားဝှက်",
    button_label: "အကောင့်ဝင်ရန်",
    loading_button_label: "အကောင့်ဝင်နေသည် ...",
    social_provider_text: "{{provider}} ဖြင့် အကောင့်ဝင်ရန်",
    link_text: "အကောင့်ရှိပြီးသားလား? အကောင့်ဝင်ရန်"
  },
  magic_link: {
    email_input_label: "အီးမေးလ်",
    email_input_placeholder: "သင့်အီးမေးလ်",
    button_label: "Magic link ပို့ရန်",
    loading_button_label: "Magic link ပို့နေသည် ...",
    link_text: "Magic link ပါဝင်သော အီးမေးလ်တစ်စောင် ပို့ရန်",
    confirmation_text: "Magic link အတွက် သင့်အီးမေးလ်ကို စစ်ဆေးပါ"
  },
  forgotten_password: {
    email_label: "အီးမေးလ်",
    password_label: "စကားဝှက်",
    email_input_placeholder: "သင့်အီးမေးလ်",
    button_label: "စကားဝှက်ပြန်လည်သတ်မှတ်ရန် ညွှန်ကြားချက်များ ပို့ရန်",
    loading_button_label: "ညွှန်ကြားချက်များ ပို့နေသည် ...",
    link_text: "စကားဝှက် မေ့နေပါသလား?",
    confirmation_text: "စကားဝှက်ပြန်လည်သတ်မှတ်ရန် လင့်ခ်အတွက် သင့်အီးမေးလ်ကို စစ်ဆေးပါ"
  },
  update_password: {
    password_label: "စကားဝှက်အသစ်",
    password_input_placeholder: "သင့်စကားဝှက်အသစ်",
    button_label: "စကားဝှက် အပ်ဒိတ်လုပ်ရန်",
    loading_button_label: "စကားဝှက် အပ်ဒိတ်လုပ်နေသည် ...",
    confirmation_text: "သင့်စကားဝှက်ကို အပ်ဒိတ်လုပ်ပြီးပါပြီ",
    current_password_label: "လက်ရှိစကားဝှက်",
    current_password_input_placeholder: "သင့်လက်ရှိစကားဝှက်",
    confirm_password_label: "စကားဝှက်အသစ်ကို အတည်ပြုပါ",
    confirm_password_input_placeholder: "စကားဝှက်အသစ်ကို ထပ်မံထည့်ပါ",
    password_mismatch: "စကားဝှက်များ မကိုက်ညီပါ"
  },
  verify_otp: {
    email_input_label: "အီးမေးလ်",
    email_input_placeholder: "သင့်အီးမေးလ်",
    phone_input_label: "ဖုန်းနံပါတ်",
    phone_input_placeholder: "သင့်ဖုန်းနံပါတ်",
    token_input_label: "ကုဒ်",
    token_input_placeholder: "သင့်၏ သီးသန့်ကုဒ်",
    button_label: "ကုဒ်ကို အတည်ပြုရန်",
    loading_button_label: "အကောင့်ဝင်နေသည် ..."
  }
}, J_ = {
  password_show: "पासवर्ड देखाउनुहोस्",
  password_hide: "पासवर्ड लुकाउनुहोस्",
  sign_up: {
    email_label: "इमेल",
    password_label: "पासवर्ड",
    email_input_placeholder: "तपाईंको इमेल",
    password_input_placeholder: "तपाईंको पासवर्ड",
    button_label: "साइन अप गर्नुहोस्",
    loading_button_label: "साइन अप हुँदैछ ...",
    social_provider_text: "{{provider}} बाट साइन अप गर्नुहोस्",
    link_text: "खाता छैन? साइन अप गर्नुहोस्",
    confirmation_text: "पुष्टिकरण लिङ्कका लागि आफ्नो इमेल जाँच्नुहोस्"
  },
  sign_in: {
    email_label: "इमेल",
    password_label: "पासवर्ड",
    email_input_placeholder: "तपाईंको इमेल",
    password_input_placeholder: "तपाईंको पासवर्ड",
    button_label: "साइन इन गर्नुहोस्",
    loading_button_label: "साइन इन हुँदैछ ...",
    social_provider_text: "{{provider}} बाट साइन इन गर्नुहोस्",
    link_text: "पहिले नै खाता छ? साइन इन गर्नुहोस्"
  },
  magic_link: {
    email_input_label: "इमेल",
    email_input_placeholder: "तपाईंको इमेल",
    button_label: "म्याजिक लिङ्क पठाउनुहोस्",
    loading_button_label: "म्याजिक लिङ्क पठाइँदैछ ...",
    link_text: "म्याजिक लिङ्क भएको इमेल पठाउनुहोस्",
    confirmation_text: "म्याजिक लिङ्कका लागि आफ्नो इमेल जाँच्नुहोस्"
  },
  forgotten_password: {
    email_label: "इमेल",
    password_label: "पासवर्ड",
    email_input_placeholder: "तपाईंको इमेल",
    button_label: "पासवर्ड रिसेट निर्देशनहरू पठाउनुहोस्",
    loading_button_label: "निर्देशनहरू पठाइँदैछ ...",
    link_text: "पासवर्ड बिर्सनुभयो?",
    confirmation_text: "पासवर्ड रिसेट लिङ्कका लागि आफ्नो इमेल जाँच्नुहोस्"
  },
  update_password: {
    password_label: "नयाँ पासवर्ड",
    password_input_placeholder: "तपाईंको नयाँ पासवर्ड",
    button_label: "पासवर्ड अद्यावधिक गर्नुहोस्",
    loading_button_label: "पासवर्ड अद्यावधिक हुँदैछ ...",
    confirmation_text: "तपाईंको पासवर्ड अद्यावधिक गरिएको छ",
    current_password_label: "हालको पासवर्ड",
    current_password_input_placeholder: "तपाईंको हालको पासवर्ड",
    confirm_password_label: "नयाँ पासवर्ड पुष्टि गर्नुहोस्",
    confirm_password_input_placeholder: "आफ्नो नयाँ पासवर्ड फेरि लेख्नुहोस्",
    password_mismatch: "पासवर्डहरू मेल खाँदैनन्"
  },
  verify_otp: {
    email_input_label: "इमेल",
    email_input_placeholder: "तपाईंको इमेल",
    phone_input_label: "फोन नम्बर",
    phone_input_placeholder: "तपाईंको फोन नम्बर",
    token_input_label: "कोड",
    token_input_placeholder: "तपाईंको अद्वितीय कोड",
    button_label: "कोड प्रमाणित गर्नुहोस्",
    loading_button_label: "साइन इन हुँदैछ ..."
  }
}, X_ = {
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
    confirmation_text: "Je wachtwoord is bijgewerkt",
    current_password_label: "Huidig wachtwoord",
    current_password_input_placeholder: "Je huidige wachtwoord",
    confirm_password_label: "Bevestig nieuw wachtwoord",
    confirm_password_input_placeholder: "Voer je nieuwe wachtwoord opnieuw in",
    password_mismatch: "Wachtwoorden komen niet overeen"
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
}, Q_ = {
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
    confirmation_text: "Twoje hasło zostało zaktualizowane",
    current_password_label: "Obecne hasło",
    current_password_input_placeholder: "Twoje obecne hasło",
    confirm_password_label: "Potwierdź nowe hasło",
    confirm_password_input_placeholder: "Wpisz ponownie nowe hasło",
    password_mismatch: "Hasła nie są zgodne"
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
}, ed = {
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
    confirmation_text: "Sua senha foi atualizada",
    current_password_label: "Senha atual",
    current_password_input_placeholder: "Sua senha atual",
    confirm_password_label: "Confirmar nova senha",
    confirm_password_input_placeholder: "Digite novamente sua nova senha",
    password_mismatch: "As senhas não coincidem"
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
}, ad = {
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
    confirmation_text: "Parola ta a fost actualizată",
    current_password_label: "Parola curentă",
    current_password_input_placeholder: "Parola ta curentă",
    confirm_password_label: "Confirmă parola nouă",
    confirm_password_input_placeholder: "Introdu din nou parola nouă",
    password_mismatch: "Parolele nu se potrivesc"
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
}, td = {
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
    confirmation_text: "Ваш пароль обновлен",
    current_password_label: "Текущий пароль",
    current_password_input_placeholder: "Ваш текущий пароль",
    confirm_password_label: "Подтвердите новый пароль",
    confirm_password_input_placeholder: "Введите новый пароль ещё раз",
    password_mismatch: "Пароли не совпадают"
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
}, nd = {
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
    confirmation_text: "Ditt lösenord har uppdaterats",
    current_password_label: "Nuvarande lösenord",
    current_password_input_placeholder: "Ditt nuvarande lösenord",
    confirm_password_label: "Bekräfta nytt lösenord",
    confirm_password_input_placeholder: "Ange ditt nya lösenord igen",
    password_mismatch: "Lösenorden matchar inte"
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
}, ld = {
  password_show: "Onyesha nenosiri",
  password_hide: "Ficha nenosiri",
  sign_up: {
    email_label: "Barua pepe",
    password_label: "Nenosiri",
    email_input_placeholder: "Barua pepe yako",
    password_input_placeholder: "Nenosiri lako",
    button_label: "Jisajili",
    loading_button_label: "Inasajili ...",
    social_provider_text: "Jisajili kwa {{provider}}",
    link_text: "Huna akaunti? Jisajili",
    confirmation_text: "Angalia barua pepe yako kwa kiungo cha uthibitisho"
  },
  sign_in: {
    email_label: "Barua pepe",
    password_label: "Nenosiri",
    email_input_placeholder: "Barua pepe yako",
    password_input_placeholder: "Nenosiri lako",
    button_label: "Ingia",
    loading_button_label: "Inaingia ...",
    social_provider_text: "Ingia kwa {{provider}}",
    link_text: "Tayari una akaunti? Ingia"
  },
  magic_link: {
    email_input_label: "Barua pepe",
    email_input_placeholder: "Barua pepe yako",
    button_label: "Tuma kiungo cha kichawi",
    loading_button_label: "Inatuma kiungo cha kichawi ...",
    link_text: "Tuma barua pepe yenye kiungo cha kichawi",
    confirmation_text: "Angalia barua pepe yako kwa kiungo cha kichawi"
  },
  forgotten_password: {
    email_label: "Barua pepe",
    password_label: "Nenosiri",
    email_input_placeholder: "Barua pepe yako",
    button_label: "Tuma maagizo ya kuweka upya nenosiri",
    loading_button_label: "Inatuma maagizo ...",
    link_text: "Umesahau nenosiri lako?",
    confirmation_text: "Angalia barua pepe yako kwa kiungo cha kuweka upya nenosiri"
  },
  update_password: {
    password_label: "Nenosiri jipya",
    password_input_placeholder: "Nenosiri lako jipya",
    button_label: "Sasisha nenosiri",
    loading_button_label: "Inasasisha nenosiri ...",
    confirmation_text: "Nenosiri lako limesasishwa",
    current_password_label: "Nenosiri la sasa",
    current_password_input_placeholder: "Nenosiri lako la sasa",
    confirm_password_label: "Thibitisha nenosiri jipya",
    confirm_password_input_placeholder: "Weka tena nenosiri lako jipya",
    password_mismatch: "Manenosiri hayalingani"
  },
  verify_otp: {
    email_input_label: "Barua pepe",
    email_input_placeholder: "Barua pepe yako",
    phone_input_label: "Namba ya simu",
    phone_input_placeholder: "Namba yako ya simu",
    token_input_label: "Msimbo",
    token_input_placeholder: "Msimbo wako wa kipekee",
    button_label: "Thibitisha msimbo",
    loading_button_label: "Inaingia ..."
  }
}, id = {
  password_show: "கடவுச்சொல்லைக் காட்டு",
  password_hide: "கடவுச்சொல்லை மறை",
  sign_up: {
    email_label: "மின்னஞ்சல்",
    password_label: "கடவுச்சொல்",
    email_input_placeholder: "உங்கள் மின்னஞ்சல்",
    password_input_placeholder: "உங்கள் கடவுச்சொல்",
    button_label: "பதிவு செய்",
    loading_button_label: "பதிவு செய்கிறது ...",
    social_provider_text: "{{provider}} மூலம் பதிவு செய்",
    link_text: "கணக்கு இல்லையா? பதிவு செய்",
    confirmation_text: "உறுதிப்படுத்தல் இணைப்பிற்கு உங்கள் மின்னஞ்சலைப் பார்க்கவும்"
  },
  sign_in: {
    email_label: "மின்னஞ்சல்",
    password_label: "கடவுச்சொல்",
    email_input_placeholder: "உங்கள் மின்னஞ்சல்",
    password_input_placeholder: "உங்கள் கடவுச்சொல்",
    button_label: "உள்நுழை",
    loading_button_label: "உள்நுழைகிறது ...",
    social_provider_text: "{{provider}} மூலம் உள்நுழை",
    link_text: "ஏற்கனவே கணக்கு உள்ளதா? உள்நுழை"
  },
  magic_link: {
    email_input_label: "மின்னஞ்சல்",
    email_input_placeholder: "உங்கள் மின்னஞ்சல்",
    button_label: "மேஜிக் இணைப்பை அனுப்பு",
    loading_button_label: "மேஜிக் இணைப்பை அனுப்புகிறது ...",
    link_text: "மேஜிக் இணைப்பைக் கொண்ட மின்னஞ்சலை அனுப்பு",
    confirmation_text: "மேஜிக் இணைப்பிற்கு உங்கள் மின்னஞ்சலைப் பார்க்கவும்"
  },
  forgotten_password: {
    email_label: "மின்னஞ்சல்",
    password_label: "கடவுச்சொல்",
    email_input_placeholder: "உங்கள் மின்னஞ்சல்",
    button_label: "கடவுச்சொல் மீட்டமைப்பு வழிமுறைகளை அனுப்பு",
    loading_button_label: "வழிமுறைகளை அனுப்புகிறது ...",
    link_text: "உங்கள் கடவுச்சொல்லை மறந்துவிட்டீர்களா?",
    confirmation_text: "கடவுச்சொல் மீட்டமைப்பு இணைப்பிற்கு உங்கள் மின்னஞ்சலைப் பார்க்கவும்"
  },
  update_password: {
    password_label: "புதிய கடவுச்சொல்",
    password_input_placeholder: "உங்கள் புதிய கடவுச்சொல்",
    button_label: "கடவுச்சொல்லைப் புதுப்பி",
    loading_button_label: "கடவுச்சொல்லைப் புதுப்பிக்கிறது ...",
    confirmation_text: "உங்கள் கடவுச்சொல் புதுப்பிக்கப்பட்டது",
    current_password_label: "தற்போதைய கடவுச்சொல்",
    current_password_input_placeholder: "உங்கள் தற்போதைய கடவுச்சொல்",
    confirm_password_label: "புதிய கடவுச்சொல்லை உறுதிப்படுத்தவும்",
    confirm_password_input_placeholder: "புதிய கடவுச்சொல்லை மீண்டும் உள்ளிடவும்",
    password_mismatch: "கடவுச்சொற்கள் பொருந்தவில்லை"
  },
  verify_otp: {
    email_input_label: "மின்னஞ்சல்",
    email_input_placeholder: "உங்கள் மின்னஞ்சல்",
    phone_input_label: "தொலைபேசி எண்",
    phone_input_placeholder: "உங்கள் தொலைபேசி எண்",
    token_input_label: "குறியீடு",
    token_input_placeholder: "உங்கள் தனித்துவமான குறியீடு",
    button_label: "குறியீட்டைச் சரிபார்",
    loading_button_label: "உள்நுழைகிறது ..."
  }
}, od = {
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
    confirmation_text: "รหัสผ่านของคุณได้รับการอัปเดตแล้ว",
    current_password_label: "รหัสผ่านปัจจุบัน",
    current_password_input_placeholder: "รหัสผ่านปัจจุบันของคุณ",
    confirm_password_label: "ยืนยันรหัสผ่านใหม่",
    confirm_password_input_placeholder: "ป้อนรหัสผ่านใหม่อีกครั้ง",
    password_mismatch: "รหัสผ่านไม่ตรงกัน"
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
}, rd = {
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
    confirmation_text: "Şifreniz güncellendi",
    current_password_label: "Mevcut şifre",
    current_password_input_placeholder: "Mevcut şifreniz",
    confirm_password_label: "Yeni şifreyi onaylayın",
    confirm_password_input_placeholder: "Yeni şifrenizi tekrar girin",
    password_mismatch: "Şifreler eşleşmiyor"
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
}, sd = {
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
    confirmation_text: "Ваш пароль оновлено",
    current_password_label: "Поточний пароль",
    current_password_input_placeholder: "Ваш поточний пароль",
    confirm_password_label: "Підтвердіть новий пароль",
    confirm_password_input_placeholder: "Введіть новий пароль ще раз",
    password_mismatch: "Паролі не збігаються"
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
}, _d = {
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
    confirmation_text: "آپ کا پاس ورڈ اپ ڈیٹ ہو گیا ہے",
    current_password_label: "موجودہ پاس ورڈ",
    current_password_input_placeholder: "آپ کا موجودہ پاس ورڈ",
    confirm_password_label: "نئے پاس ورڈ کی تصدیق کریں",
    confirm_password_input_placeholder: "اپنا نیا پاس ورڈ دوبارہ درج کریں",
    password_mismatch: "پاس ورڈ مماثل نہیں ہیں"
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
}, dd = {
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
    confirmation_text: "Mật khẩu của bạn đã được cập nhật",
    current_password_label: "Mật khẩu hiện tại",
    current_password_input_placeholder: "Mật khẩu hiện tại của bạn",
    confirm_password_label: "Nhập lại mật khẩu mới",
    confirm_password_input_placeholder: "Nhập lại mật khẩu mới của bạn",
    password_mismatch: "Mật khẩu nhập lại không khớp"
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
}, ud = {
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
    confirmation_text: "您的密码已更新",
    current_password_label: "当前密码",
    current_password_input_placeholder: "您的当前密码",
    confirm_password_label: "确认新密码",
    confirm_password_input_placeholder: "再次输入新密码",
    password_mismatch: "两次输入的密码不一致"
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
}, Zn = {
  ar: O_,
  bn: I_,
  cs: A_,
  de: M_,
  el: P_,
  en: R_,
  es: D_,
  fa: z_,
  fi: j_,
  fil: F_,
  fr: V_,
  he: $_,
  hi: B_,
  hu: U_,
  id: W_,
  it: H_,
  ja: G_,
  km: K_,
  ko: q_,
  ms: Y_,
  my: Z_,
  ne: J_,
  nl: X_,
  pl: Q_,
  pt: ed,
  ro: ad,
  ru: td,
  sv: nd,
  sw: ld,
  ta: id,
  th: od,
  tr: rd,
  uk: sd,
  ur: _d,
  vi: dd,
  zh: ud
}, Jn = {
  en: {
    invalid_credentials: "Invalid login credentials",
    email_not_confirmed: "Email not confirmed",
    user_already_exists: "User already registered",
    email_exists: "This email is already registered",
    weak_password: "Password is too weak",
    over_email_send_rate_limit: "Too many emails sent. Please try again later",
    over_request_rate_limit: "Too many requests. Please try again later",
    validation_failed: "Invalid input",
    same_password: "New password must be different from the old one",
    otp_expired: "The code has expired or is invalid",
    signup_disabled: "Sign-ups are currently disabled",
    user_not_found: "User not found",
    current_password_required: "Please enter your current password",
    current_password_invalid: "Current password is incorrect"
  },
  ar: {
    invalid_credentials: "بيانات تسجيل الدخول غير صحيحة",
    email_not_confirmed: "لم يتم تأكيد البريد الإلكتروني",
    user_already_exists: "المستخدم مسجّل بالفعل",
    email_exists: "هذا البريد الإلكتروني مسجّل بالفعل",
    weak_password: "كلمة المرور ضعيفة جدًا",
    over_email_send_rate_limit: "تم إرسال عدد كبير جدًا من الرسائل. يرجى المحاولة لاحقًا",
    over_request_rate_limit: "عدد كبير جدًا من الطلبات. يرجى المحاولة لاحقًا",
    validation_failed: "إدخال غير صالح",
    same_password: "يجب أن تكون كلمة المرور الجديدة مختلفة عن القديمة",
    otp_expired: "انتهت صلاحية الرمز أو أنه غير صالح",
    signup_disabled: "التسجيل معطّل حاليًا",
    user_not_found: "المستخدم غير موجود",
    current_password_required: "يرجى إدخال كلمة المرور الحالية",
    current_password_invalid: "كلمة المرور الحالية غير صحيحة"
  },
  bn: {
    invalid_credentials: "লগইন তথ্য সঠিক নয়",
    email_not_confirmed: "ইমেল নিশ্চিত করা হয়নি",
    user_already_exists: "ব্যবহারকারী ইতিমধ্যে নিবন্ধিত",
    email_exists: "এই ইমেলটি ইতিমধ্যে নিবন্ধিত",
    weak_password: "পাসওয়ার্ডটি খুব দুর্বল",
    over_email_send_rate_limit: "অনেক বেশি ইমেল পাঠানো হয়েছে। পরে আবার চেষ্টা করুন",
    over_request_rate_limit: "অনেক বেশি অনুরোধ। পরে আবার চেষ্টা করুন",
    validation_failed: "অবৈধ ইনপুট",
    same_password: "নতুন পাসওয়ার্ড পুরোনোটির থেকে আলাদা হতে হবে",
    otp_expired: "কোডটির মেয়াদ শেষ হয়েছে বা এটি অবৈধ",
    signup_disabled: "সাইন-আপ এখন বন্ধ আছে",
    user_not_found: "ব্যবহারকারী পাওয়া যায়নি",
    current_password_required: "অনুগ্রহ করে আপনার বর্তমান পাসওয়ার্ড লিখুন",
    current_password_invalid: "বর্তমান পাসওয়ার্ডটি সঠিক নয়"
  },
  cs: {
    invalid_credentials: "Neplatné přihlašovací údaje",
    email_not_confirmed: "E-mail nebyl potvrzen",
    user_already_exists: "Uživatel je již zaregistrován",
    email_exists: "Tento e-mail je již zaregistrován",
    weak_password: "Heslo je příliš slabé",
    over_email_send_rate_limit: "Bylo odesláno příliš mnoho e-mailů. Zkuste to prosím později",
    over_request_rate_limit: "Příliš mnoho požadavků. Zkuste to prosím později",
    validation_failed: "Neplatný vstup",
    same_password: "Nové heslo se musí lišit od starého",
    otp_expired: "Kód vypršel nebo je neplatný",
    signup_disabled: "Registrace jsou momentálně zakázány",
    user_not_found: "Uživatel nenalezen",
    current_password_required: "Zadejte prosím své současné heslo",
    current_password_invalid: "Současné heslo není správné"
  },
  de: {
    invalid_credentials: "Ungültige Anmeldedaten",
    email_not_confirmed: "E-Mail nicht bestätigt",
    user_already_exists: "Benutzer ist bereits registriert",
    email_exists: "Diese E-Mail ist bereits registriert",
    weak_password: "Das Passwort ist zu schwach",
    over_email_send_rate_limit: "Zu viele E-Mails gesendet. Bitte versuchen Sie es später erneut",
    over_request_rate_limit: "Zu viele Anfragen. Bitte versuchen Sie es später erneut",
    validation_failed: "Ungültige Eingabe",
    same_password: "Das neue Passwort muss sich vom alten unterscheiden",
    otp_expired: "Der Code ist abgelaufen oder ungültig",
    signup_disabled: "Registrierungen sind derzeit deaktiviert",
    user_not_found: "Benutzer nicht gefunden",
    current_password_required: "Bitte geben Sie Ihr aktuelles Passwort ein",
    current_password_invalid: "Das aktuelle Passwort ist falsch"
  },
  el: {
    invalid_credentials: "Μη έγκυρα στοιχεία σύνδεσης",
    email_not_confirmed: "Το email δεν έχει επιβεβαιωθεί",
    user_already_exists: "Ο χρήστης είναι ήδη εγγεγραμμένος",
    email_exists: "Αυτό το email είναι ήδη εγγεγραμμένο",
    weak_password: "Ο κωδικός πρόσβασης είναι πολύ αδύναμος",
    over_email_send_rate_limit: "Στάλθηκαν πάρα πολλά email. Δοκιμάστε ξανά αργότερα",
    over_request_rate_limit: "Πάρα πολλά αιτήματα. Δοκιμάστε ξανά αργότερα",
    validation_failed: "Μη έγκυρη εισαγωγή",
    same_password: "Ο νέος κωδικός πρέπει να διαφέρει από τον παλιό",
    otp_expired: "Ο κωδικός έχει λήξει ή είναι μη έγκυρος",
    signup_disabled: "Οι εγγραφές είναι προς το παρόν απενεργοποιημένες",
    user_not_found: "Ο χρήστης δεν βρέθηκε",
    current_password_required: "Εισαγάγετε τον τρέχοντα κωδικό σας",
    current_password_invalid: "Ο τρέχων κωδικός είναι λανθασμένος"
  },
  es: {
    invalid_credentials: "Credenciales de inicio de sesión no válidas",
    email_not_confirmed: "Correo electrónico no confirmado",
    user_already_exists: "El usuario ya está registrado",
    email_exists: "Este correo electrónico ya está registrado",
    weak_password: "La contraseña es demasiado débil",
    over_email_send_rate_limit: "Se enviaron demasiados correos. Inténtalo de nuevo más tarde",
    over_request_rate_limit: "Demasiadas solicitudes. Inténtalo de nuevo más tarde",
    validation_failed: "Entrada no válida",
    same_password: "La nueva contraseña debe ser diferente de la anterior",
    otp_expired: "El código ha caducado o no es válido",
    signup_disabled: "Los registros están deshabilitados actualmente",
    user_not_found: "Usuario no encontrado",
    current_password_required: "Introduce tu contraseña actual",
    current_password_invalid: "La contraseña actual es incorrecta"
  },
  fa: {
    invalid_credentials: "اطلاعات ورود نامعتبر است",
    email_not_confirmed: "ایمیل تأیید نشده است",
    user_already_exists: "کاربر قبلاً ثبت‌نام کرده است",
    email_exists: "این ایمیل قبلاً ثبت شده است",
    weak_password: "رمز عبور بسیار ضعیف است",
    over_email_send_rate_limit: "تعداد زیادی ایمیل ارسال شده است. لطفاً بعداً دوباره تلاش کنید",
    over_request_rate_limit: "تعداد درخواست‌ها بیش از حد است. لطفاً بعداً دوباره تلاش کنید",
    validation_failed: "ورودی نامعتبر است",
    same_password: "رمز عبور جدید باید با رمز قبلی متفاوت باشد",
    otp_expired: "کد منقضی شده یا نامعتبر است",
    signup_disabled: "ثبت‌نام در حال حاضر غیرفعال است",
    user_not_found: "کاربر یافت نشد",
    current_password_required: "لطفاً رمز عبور فعلی خود را وارد کنید",
    current_password_invalid: "رمز عبور فعلی نادرست است"
  },
  fi: {
    invalid_credentials: "Virheelliset kirjautumistiedot",
    email_not_confirmed: "Sähköpostia ei ole vahvistettu",
    user_already_exists: "Käyttäjä on jo rekisteröity",
    email_exists: "Tämä sähköpostiosoite on jo rekisteröity",
    weak_password: "Salasana on liian heikko",
    over_email_send_rate_limit: "Liian monta sähköpostia lähetetty. Yritä myöhemmin uudelleen",
    over_request_rate_limit: "Liian monta pyyntöä. Yritä myöhemmin uudelleen",
    validation_failed: "Virheellinen syöte",
    same_password: "Uuden salasanan on erotuttava vanhasta",
    otp_expired: "Koodi on vanhentunut tai virheellinen",
    signup_disabled: "Rekisteröityminen on tällä hetkellä poistettu käytöstä",
    user_not_found: "Käyttäjää ei löytynyt",
    current_password_required: "Anna nykyinen salasanasi",
    current_password_invalid: "Nykyinen salasana on väärä"
  },
  fil: {
    invalid_credentials: "Hindi wastong mga kredensyal sa pag-login",
    email_not_confirmed: "Hindi pa nakumpirma ang email",
    user_already_exists: "Nakarehistro na ang user",
    email_exists: "Nakarehistro na ang email na ito",
    weak_password: "Masyadong mahina ang password",
    over_email_send_rate_limit: "Masyadong maraming email ang naipadala. Pakisubukang muli mamaya",
    over_request_rate_limit: "Masyadong maraming kahilingan. Pakisubukang muli mamaya",
    validation_failed: "Hindi wastong input",
    same_password: "Dapat magkaiba ang bagong password sa luma",
    otp_expired: "Nag-expire na o hindi wasto ang code",
    signup_disabled: "Nakadisable pansamantala ang pag-sign up",
    user_not_found: "Hindi natagpuan ang user",
    current_password_required: "Pakilagay ang iyong kasalukuyang password",
    current_password_invalid: "Mali ang kasalukuyang password"
  },
  fr: {
    invalid_credentials: "Identifiants de connexion invalides",
    email_not_confirmed: "E-mail non confirmé",
    user_already_exists: "L'utilisateur est déjà enregistré",
    email_exists: "Cet e-mail est déjà enregistré",
    weak_password: "Le mot de passe est trop faible",
    over_email_send_rate_limit: "Trop d'e-mails envoyés. Veuillez réessayer plus tard",
    over_request_rate_limit: "Trop de requêtes. Veuillez réessayer plus tard",
    validation_failed: "Entrée invalide",
    same_password: "Le nouveau mot de passe doit être différent de l'ancien",
    otp_expired: "Le code a expiré ou est invalide",
    signup_disabled: "Les inscriptions sont actuellement désactivées",
    user_not_found: "Utilisateur introuvable",
    current_password_required: "Veuillez saisir votre mot de passe actuel",
    current_password_invalid: "Le mot de passe actuel est incorrect"
  },
  he: {
    invalid_credentials: "פרטי ההתחברות שגויים",
    email_not_confirmed: "האימייל לא אומת",
    user_already_exists: "המשתמש כבר רשום",
    email_exists: "האימייל הזה כבר רשום",
    weak_password: "הסיסמה חלשה מדי",
    over_email_send_rate_limit: "נשלחו יותר מדי הודעות אימייל. נסה שוב מאוחר יותר",
    over_request_rate_limit: "יותר מדי בקשות. נסה שוב מאוחר יותר",
    validation_failed: "קלט לא חוקי",
    same_password: "הסיסמה החדשה חייבת להיות שונה מהישנה",
    otp_expired: "הקוד פג תוקף או שאינו חוקי",
    signup_disabled: "ההרשמה מושבתת כרגע",
    user_not_found: "המשתמש לא נמצא",
    current_password_required: "נא להזין את הסיסמה הנוכחית",
    current_password_invalid: "הסיסמה הנוכחית שגויה"
  },
  hi: {
    invalid_credentials: "अमान्य लॉगिन विवरण",
    email_not_confirmed: "ईमेल की पुष्टि नहीं हुई",
    user_already_exists: "उपयोगकर्ता पहले से पंजीकृत है",
    email_exists: "यह ईमेल पहले से पंजीकृत है",
    weak_password: "पासवर्ड बहुत कमज़ोर है",
    over_email_send_rate_limit: "बहुत अधिक ईमेल भेजे गए। कृपया बाद में पुनः प्रयास करें",
    over_request_rate_limit: "बहुत अधिक अनुरोध। कृपया बाद में पुनः प्रयास करें",
    validation_failed: "अमान्य इनपुट",
    same_password: "नया पासवर्ड पुराने से अलग होना चाहिए",
    otp_expired: "कोड समाप्त हो गया है या अमान्य है",
    signup_disabled: "साइन-अप फ़िलहाल अक्षम है",
    user_not_found: "उपयोगकर्ता नहीं मिला",
    current_password_required: "कृपया अपना वर्तमान पासवर्ड दर्ज करें",
    current_password_invalid: "वर्तमान पासवर्ड गलत है"
  },
  hu: {
    invalid_credentials: "Érvénytelen bejelentkezési adatok",
    email_not_confirmed: "Az e-mail nincs megerősítve",
    user_already_exists: "A felhasználó már regisztrálva van",
    email_exists: "Ez az e-mail már regisztrálva van",
    weak_password: "A jelszó túl gyenge",
    over_email_send_rate_limit: "Túl sok e-mailt küldtünk. Kérjük, próbálja újra később",
    over_request_rate_limit: "Túl sok kérés. Kérjük, próbálja újra később",
    validation_failed: "Érvénytelen bemenet",
    same_password: "Az új jelszónak különböznie kell a régitől",
    otp_expired: "A kód lejárt vagy érvénytelen",
    signup_disabled: "A regisztráció jelenleg le van tiltva",
    user_not_found: "A felhasználó nem található",
    current_password_required: "Add meg a jelenlegi jelszavad",
    current_password_invalid: "A jelenlegi jelszó hibás"
  },
  id: {
    invalid_credentials: "Kredensial login tidak valid",
    email_not_confirmed: "Email belum dikonfirmasi",
    user_already_exists: "Pengguna sudah terdaftar",
    email_exists: "Email ini sudah terdaftar",
    weak_password: "Kata sandi terlalu lemah",
    over_email_send_rate_limit: "Terlalu banyak email terkirim. Silakan coba lagi nanti",
    over_request_rate_limit: "Terlalu banyak permintaan. Silakan coba lagi nanti",
    validation_failed: "Masukan tidak valid",
    same_password: "Kata sandi baru harus berbeda dari yang lama",
    otp_expired: "Kode telah kedaluwarsa atau tidak valid",
    signup_disabled: "Pendaftaran saat ini dinonaktifkan",
    user_not_found: "Pengguna tidak ditemukan",
    current_password_required: "Masukkan kata sandi Anda saat ini",
    current_password_invalid: "Kata sandi saat ini salah"
  },
  it: {
    invalid_credentials: "Credenziali di accesso non valide",
    email_not_confirmed: "Email non confermata",
    user_already_exists: "L'utente è già registrato",
    email_exists: "Questa email è già registrata",
    weak_password: "La password è troppo debole",
    over_email_send_rate_limit: "Troppe email inviate. Riprova più tardi",
    over_request_rate_limit: "Troppe richieste. Riprova più tardi",
    validation_failed: "Input non valido",
    same_password: "La nuova password deve essere diversa dalla precedente",
    otp_expired: "Il codice è scaduto o non è valido",
    signup_disabled: "Le registrazioni sono attualmente disabilitate",
    user_not_found: "Utente non trovato",
    current_password_required: "Inserisci la password attuale",
    current_password_invalid: "La password attuale non è corretta"
  },
  ja: {
    invalid_credentials: "ログイン情報が正しくありません",
    email_not_confirmed: "メールアドレスが確認されていません",
    user_already_exists: "ユーザーは既に登録されています",
    email_exists: "このメールアドレスは既に登録されています",
    weak_password: "パスワードが脆弱すぎます",
    over_email_send_rate_limit: "メールの送信回数が多すぎます。しばらくしてからもう一度お試しください",
    over_request_rate_limit: "リクエストが多すぎます。しばらくしてからもう一度お試しください",
    validation_failed: "入力が無効です",
    same_password: "新しいパスワードは以前のものと異なる必要があります",
    otp_expired: "コードの有効期限が切れているか無効です",
    signup_disabled: "現在、新規登録は無効になっています",
    user_not_found: "ユーザーが見つかりません",
    current_password_required: "現在のパスワードを入力してください",
    current_password_invalid: "現在のパスワードが正しくありません"
  },
  km: {
    invalid_credentials: "ព័ត៌មានចូលមិនត្រឹមត្រូវ",
    email_not_confirmed: "អ៊ីមែលមិនទាន់បានបញ្ជាក់",
    user_already_exists: "អ្នកប្រើប្រាស់បានចុះឈ្មោះរួចហើយ",
    email_exists: "អ៊ីមែលនេះបានចុះឈ្មោះរួចហើយ",
    weak_password: "ពាក្យសម្ងាត់ខ្សោយពេក",
    over_email_send_rate_limit: "បានផ្ញើអ៊ីមែលច្រើនពេក។ សូមព្យាយាមម្ដងទៀតនៅពេលក្រោយ",
    over_request_rate_limit: "សំណើច្រើនពេក។ សូមព្យាយាមម្ដងទៀតនៅពេលក្រោយ",
    validation_failed: "ការបញ្ចូលមិនត្រឹមត្រូវ",
    same_password: "ពាក្យសម្ងាត់ថ្មីត្រូវតែខុសពីពាក្យសម្ងាត់ចាស់",
    otp_expired: "កូដបានផុតកំណត់ ឬមិនត្រឹមត្រូវ",
    signup_disabled: "ការចុះឈ្មោះត្រូវបានបិទនៅពេលនេះ",
    user_not_found: "រកមិនឃើញអ្នកប្រើប្រាស់",
    current_password_required: "សូមបញ្ចូលពាក្យសម្ងាត់បច្ចុប្បន្នរបស់អ្នក",
    current_password_invalid: "ពាក្យសម្ងាត់បច្ចុប្បន្នមិនត្រឹមត្រូវ"
  },
  ko: {
    invalid_credentials: "로그인 정보가 올바르지 않습니다",
    email_not_confirmed: "이메일이 확인되지 않았습니다",
    user_already_exists: "이미 등록된 사용자입니다",
    email_exists: "이미 등록된 이메일입니다",
    weak_password: "비밀번호가 너무 약합니다",
    over_email_send_rate_limit: "이메일을 너무 많이 보냈습니다. 나중에 다시 시도해 주세요",
    over_request_rate_limit: "요청이 너무 많습니다. 나중에 다시 시도해 주세요",
    validation_failed: "입력이 올바르지 않습니다",
    same_password: "새 비밀번호는 이전 비밀번호와 달라야 합니다",
    otp_expired: "코드가 만료되었거나 유효하지 않습니다",
    signup_disabled: "현재 회원가입이 비활성화되어 있습니다",
    user_not_found: "사용자를 찾을 수 없습니다",
    current_password_required: "현재 비밀번호를 입력하세요",
    current_password_invalid: "현재 비밀번호가 올바르지 않습니다"
  },
  ms: {
    invalid_credentials: "Butiran log masuk tidak sah",
    email_not_confirmed: "E-mel belum disahkan",
    user_already_exists: "Pengguna telah didaftarkan",
    email_exists: "E-mel ini telah didaftarkan",
    weak_password: "Kata laluan terlalu lemah",
    over_email_send_rate_limit: "Terlalu banyak e-mel dihantar. Sila cuba lagi kemudian",
    over_request_rate_limit: "Terlalu banyak permintaan. Sila cuba lagi kemudian",
    validation_failed: "Input tidak sah",
    same_password: "Kata laluan baharu mesti berbeza daripada yang lama",
    otp_expired: "Kod telah tamat tempoh atau tidak sah",
    signup_disabled: "Pendaftaran kini dilumpuhkan",
    user_not_found: "Pengguna tidak dijumpai",
    current_password_required: "Sila masukkan kata laluan semasa anda",
    current_password_invalid: "Kata laluan semasa tidak betul"
  },
  my: {
    invalid_credentials: "အကောင့်ဝင်ရောက်မှု အချက်အလက်များ မမှန်ကန်ပါ",
    email_not_confirmed: "အီးမေးလ်ကို အတည်မပြုရသေးပါ",
    user_already_exists: "အသုံးပြုသူကို မှတ်ပုံတင်ပြီးဖြစ်သည်",
    email_exists: "ဤအီးမေးလ်ကို မှတ်ပုံတင်ပြီးဖြစ်သည်",
    weak_password: "စကားဝှက်သည် အားနည်းလွန်းသည်",
    over_email_send_rate_limit: "အီးမေးလ်များ များလွန်းစွာ ပို့ခဲ့သည်။ နောက်မှ ထပ်စမ်းကြည့်ပါ",
    over_request_rate_limit: "တောင်းဆိုမှုများ များလွန်းသည်။ နောက်မှ ထပ်စမ်းကြည့်ပါ",
    validation_failed: "ထည့်သွင်းမှု မမှန်ကန်ပါ",
    same_password: "စကားဝှက်အသစ်သည် အဟောင်းနှင့် ကွဲပြားရမည်",
    otp_expired: "ကုဒ် သက်တမ်းကုန်သွားပြီ သို့မဟုတ် မမှန်ကန်ပါ",
    signup_disabled: "အကောင့်ဖွင့်ခြင်းကို လက်ရှိတွင် ပိတ်ထားသည်",
    user_not_found: "အသုံးပြုသူ ရှာမတွေ့ပါ",
    current_password_required: "သင့်လက်ရှိစကားဝှက်ကို ထည့်ပါ",
    current_password_invalid: "လက်ရှိစကားဝှက် မမှန်ကန်ပါ"
  },
  ne: {
    invalid_credentials: "लगइन विवरण अमान्य छ",
    email_not_confirmed: "इमेल पुष्टि गरिएको छैन",
    user_already_exists: "प्रयोगकर्ता पहिले नै दर्ता भइसकेको छ",
    email_exists: "यो इमेल पहिले नै दर्ता भइसकेको छ",
    weak_password: "पासवर्ड धेरै कमजोर छ",
    over_email_send_rate_limit: "धेरै इमेल पठाइयो। कृपया पछि पुनः प्रयास गर्नुहोस्",
    over_request_rate_limit: "धेरै अनुरोधहरू। कृपया पछि पुनः प्रयास गर्नुहोस्",
    validation_failed: "अमान्य इनपुट",
    same_password: "नयाँ पासवर्ड पुरानोभन्दा फरक हुनुपर्छ",
    otp_expired: "कोडको म्याद सकिएको छ वा अमान्य छ",
    signup_disabled: "साइन-अप हाल असक्षम पारिएको छ",
    user_not_found: "प्रयोगकर्ता फेला परेन",
    current_password_required: "कृपया आफ्नो हालको पासवर्ड लेख्नुहोस्",
    current_password_invalid: "हालको पासवर्ड गलत छ"
  },
  nl: {
    invalid_credentials: "Ongeldige inloggegevens",
    email_not_confirmed: "E-mail niet bevestigd",
    user_already_exists: "Gebruiker is al geregistreerd",
    email_exists: "Dit e-mailadres is al geregistreerd",
    weak_password: "Het wachtwoord is te zwak",
    over_email_send_rate_limit: "Te veel e-mails verzonden. Probeer het later opnieuw",
    over_request_rate_limit: "Te veel verzoeken. Probeer het later opnieuw",
    validation_failed: "Ongeldige invoer",
    same_password: "Het nieuwe wachtwoord moet verschillen van het oude",
    otp_expired: "De code is verlopen of ongeldig",
    signup_disabled: "Registraties zijn momenteel uitgeschakeld",
    user_not_found: "Gebruiker niet gevonden",
    current_password_required: "Voer je huidige wachtwoord in",
    current_password_invalid: "Huidig wachtwoord is onjuist"
  },
  pl: {
    invalid_credentials: "Nieprawidłowe dane logowania",
    email_not_confirmed: "E-mail nie został potwierdzony",
    user_already_exists: "Użytkownik jest już zarejestrowany",
    email_exists: "Ten e-mail jest już zarejestrowany",
    weak_password: "Hasło jest zbyt słabe",
    over_email_send_rate_limit: "Wysłano zbyt wiele e-maili. Spróbuj ponownie później",
    over_request_rate_limit: "Zbyt wiele żądań. Spróbuj ponownie później",
    validation_failed: "Nieprawidłowe dane",
    same_password: "Nowe hasło musi różnić się od starego",
    otp_expired: "Kod wygasł lub jest nieprawidłowy",
    signup_disabled: "Rejestracja jest obecnie wyłączona",
    user_not_found: "Nie znaleziono użytkownika",
    current_password_required: "Wpisz swoje obecne hasło",
    current_password_invalid: "Obecne hasło jest nieprawidłowe"
  },
  pt: {
    invalid_credentials: "Credenciais de login inválidas",
    email_not_confirmed: "E-mail não confirmado",
    user_already_exists: "O usuário já está registrado",
    email_exists: "Este e-mail já está registrado",
    weak_password: "A senha é muito fraca",
    over_email_send_rate_limit: "Muitos e-mails enviados. Tente novamente mais tarde",
    over_request_rate_limit: "Muitas solicitações. Tente novamente mais tarde",
    validation_failed: "Entrada inválida",
    same_password: "A nova senha deve ser diferente da anterior",
    otp_expired: "O código expirou ou é inválido",
    signup_disabled: "Os cadastros estão desativados no momento",
    user_not_found: "Usuário não encontrado",
    current_password_required: "Digite sua senha atual",
    current_password_invalid: "A senha atual está incorreta"
  },
  ro: {
    invalid_credentials: "Date de autentificare nevalide",
    email_not_confirmed: "E-mailul nu a fost confirmat",
    user_already_exists: "Utilizatorul este deja înregistrat",
    email_exists: "Acest e-mail este deja înregistrat",
    weak_password: "Parola este prea slabă",
    over_email_send_rate_limit: "Prea multe e-mailuri trimise. Încercați din nou mai târziu",
    over_request_rate_limit: "Prea multe solicitări. Încercați din nou mai târziu",
    validation_failed: "Intrare nevalidă",
    same_password: "Noua parolă trebuie să fie diferită de cea veche",
    otp_expired: "Codul a expirat sau este nevalid",
    signup_disabled: "Înregistrările sunt momentan dezactivate",
    user_not_found: "Utilizatorul nu a fost găsit",
    current_password_required: "Introdu parola curentă",
    current_password_invalid: "Parola curentă este incorectă"
  },
  ru: {
    invalid_credentials: "Неверные учётные данные",
    email_not_confirmed: "Электронная почта не подтверждена",
    user_already_exists: "Пользователь уже зарегистрирован",
    email_exists: "Эта электронная почта уже зарегистрирована",
    weak_password: "Пароль слишком слабый",
    over_email_send_rate_limit: "Отправлено слишком много писем. Повторите попытку позже",
    over_request_rate_limit: "Слишком много запросов. Повторите попытку позже",
    validation_failed: "Недопустимый ввод",
    same_password: "Новый пароль должен отличаться от старого",
    otp_expired: "Срок действия кода истёк или он недействителен",
    signup_disabled: "Регистрация в настоящее время отключена",
    user_not_found: "Пользователь не найден",
    current_password_required: "Введите текущий пароль",
    current_password_invalid: "Текущий пароль неверен"
  },
  sv: {
    invalid_credentials: "Ogiltiga inloggningsuppgifter",
    email_not_confirmed: "E-postadressen är inte bekräftad",
    user_already_exists: "Användaren är redan registrerad",
    email_exists: "Den här e-postadressen är redan registrerad",
    weak_password: "Lösenordet är för svagt",
    over_email_send_rate_limit: "För många e-postmeddelanden har skickats. Försök igen senare",
    over_request_rate_limit: "För många förfrågningar. Försök igen senare",
    validation_failed: "Ogiltig inmatning",
    same_password: "Det nya lösenordet måste skilja sig från det gamla",
    otp_expired: "Koden har upphört att gälla eller är ogiltig",
    signup_disabled: "Registreringar är för närvarande inaktiverade",
    user_not_found: "Användaren hittades inte",
    current_password_required: "Ange ditt nuvarande lösenord",
    current_password_invalid: "Nuvarande lösenord är felaktigt"
  },
  sw: {
    invalid_credentials: "Taarifa za kuingia si sahihi",
    email_not_confirmed: "Barua pepe haijathibitishwa",
    user_already_exists: "Mtumiaji tayari amesajiliwa",
    email_exists: "Barua pepe hii tayari imesajiliwa",
    weak_password: "Nenosiri ni dhaifu mno",
    over_email_send_rate_limit: "Barua pepe nyingi mno zimetumwa. Tafadhali jaribu tena baadaye",
    over_request_rate_limit: "Maombi mengi mno. Tafadhali jaribu tena baadaye",
    validation_failed: "Ingizo si sahihi",
    same_password: "Nenosiri jipya lazima litofautiane na la zamani",
    otp_expired: "Msimbo umeisha muda au si sahihi",
    signup_disabled: "Usajili umezimwa kwa sasa",
    user_not_found: "Mtumiaji hakupatikana",
    current_password_required: "Tafadhali weka nenosiri lako la sasa",
    current_password_invalid: "Nenosiri la sasa si sahihi"
  },
  ta: {
    invalid_credentials: "உள்நுழைவு விவரங்கள் தவறானவை",
    email_not_confirmed: "மின்னஞ்சல் உறுதிப்படுத்தப்படவில்லை",
    user_already_exists: "பயனர் ஏற்கனவே பதிவு செய்யப்பட்டுள்ளார்",
    email_exists: "இந்த மின்னஞ்சல் ஏற்கனவே பதிவு செய்யப்பட்டுள்ளது",
    weak_password: "கடவுச்சொல் மிகவும் பலவீனமானது",
    over_email_send_rate_limit: "அதிக மின்னஞ்சல்கள் அனுப்பப்பட்டன. பிறகு மீண்டும் முயற்சிக்கவும்",
    over_request_rate_limit: "அதிக கோரிக்கைகள். பிறகு மீண்டும் முயற்சிக்கவும்",
    validation_failed: "தவறான உள்ளீடு",
    same_password: "புதிய கடவுச்சொல் பழையதிலிருந்து வேறுபட்டதாக இருக்க வேண்டும்",
    otp_expired: "குறியீட்டின் காலம் முடிந்துவிட்டது அல்லது அது தவறானது",
    signup_disabled: "பதிவு தற்போது முடக்கப்பட்டுள்ளது",
    user_not_found: "பயனர் கண்டறியப்படவில்லை",
    current_password_required: "உங்கள் தற்போதைய கடவுச்சொல்லை உள்ளிடவும்",
    current_password_invalid: "தற்போதைய கடவுச்சொல் தவறானது"
  },
  th: {
    invalid_credentials: "ข้อมูลเข้าสู่ระบบไม่ถูกต้อง",
    email_not_confirmed: "อีเมลยังไม่ได้รับการยืนยัน",
    user_already_exists: "ผู้ใช้ลงทะเบียนแล้ว",
    email_exists: "อีเมลนี้ลงทะเบียนแล้ว",
    weak_password: "รหัสผ่านอ่อนเกินไป",
    over_email_send_rate_limit: "ส่งอีเมลมากเกินไป โปรดลองอีกครั้งในภายหลัง",
    over_request_rate_limit: "มีคำขอมากเกินไป โปรดลองอีกครั้งในภายหลัง",
    validation_failed: "ข้อมูลที่ป้อนไม่ถูกต้อง",
    same_password: "รหัสผ่านใหม่ต้องแตกต่างจากรหัสผ่านเดิม",
    otp_expired: "รหัสหมดอายุหรือไม่ถูกต้อง",
    signup_disabled: "ขณะนี้ปิดการลงทะเบียน",
    user_not_found: "ไม่พบผู้ใช้",
    current_password_required: "กรุณาป้อนรหัสผ่านปัจจุบันของคุณ",
    current_password_invalid: "รหัสผ่านปัจจุบันไม่ถูกต้อง"
  },
  tr: {
    invalid_credentials: "Geçersiz giriş bilgileri",
    email_not_confirmed: "E-posta onaylanmadı",
    user_already_exists: "Kullanıcı zaten kayıtlı",
    email_exists: "Bu e-posta zaten kayıtlı",
    weak_password: "Parola çok zayıf",
    over_email_send_rate_limit: "Çok fazla e-posta gönderildi. Lütfen daha sonra tekrar deneyin",
    over_request_rate_limit: "Çok fazla istek. Lütfen daha sonra tekrar deneyin",
    validation_failed: "Geçersiz giriş",
    same_password: "Yeni parola eskisinden farklı olmalıdır",
    otp_expired: "Kodun süresi doldu veya geçersiz",
    signup_disabled: "Kayıtlar şu anda devre dışı",
    user_not_found: "Kullanıcı bulunamadı",
    current_password_required: "Lütfen mevcut şifrenizi girin",
    current_password_invalid: "Mevcut şifre yanlış"
  },
  uk: {
    invalid_credentials: "Невірні облікові дані",
    email_not_confirmed: "Електронну пошту не підтверджено",
    user_already_exists: "Користувач уже зареєстрований",
    email_exists: "Ця електронна пошта вже зареєстрована",
    weak_password: "Пароль занадто слабкий",
    over_email_send_rate_limit: "Надіслано забагато листів. Спробуйте пізніше",
    over_request_rate_limit: "Забагато запитів. Спробуйте пізніше",
    validation_failed: "Недійсні дані",
    same_password: "Новий пароль має відрізнятися від старого",
    otp_expired: "Термін дії коду закінчився або він недійсний",
    signup_disabled: "Реєстрація наразі вимкнена",
    user_not_found: "Користувача не знайдено",
    current_password_required: "Введіть поточний пароль",
    current_password_invalid: "Поточний пароль неправильний"
  },
  ur: {
    invalid_credentials: "لاگ ان کی تفصیلات غلط ہیں",
    email_not_confirmed: "ای میل کی تصدیق نہیں ہوئی",
    user_already_exists: "صارف پہلے سے رجسٹرڈ ہے",
    email_exists: "یہ ای میل پہلے سے رجسٹرڈ ہے",
    weak_password: "پاس ورڈ بہت کمزور ہے",
    over_email_send_rate_limit: "بہت زیادہ ای میلز بھیجی گئیں۔ براہ کرم بعد میں دوبارہ کوشش کریں",
    over_request_rate_limit: "بہت زیادہ درخواستیں۔ براہ کرم بعد میں دوبارہ کوشش کریں",
    validation_failed: "غلط ان پٹ",
    same_password: "نیا پاس ورڈ پرانے سے مختلف ہونا چاہیے",
    otp_expired: "کوڈ کی میعاد ختم ہو گئی ہے یا یہ غلط ہے",
    signup_disabled: "سائن اپ فی الحال غیر فعال ہے",
    user_not_found: "صارف نہیں ملا",
    current_password_required: "براہ کرم اپنا موجودہ پاس ورڈ درج کریں",
    current_password_invalid: "موجودہ پاس ورڈ غلط ہے"
  },
  vi: {
    invalid_credentials: "Thông tin đăng nhập không chính xác",
    email_not_confirmed: "Email chưa được xác nhận",
    user_already_exists: "Người dùng đã được đăng ký",
    email_exists: "Email này đã được đăng ký",
    weak_password: "Mật khẩu quá yếu",
    over_email_send_rate_limit: "Đã gửi quá nhiều email. Vui lòng thử lại sau",
    over_request_rate_limit: "Quá nhiều yêu cầu. Vui lòng thử lại sau",
    validation_failed: "Dữ liệu nhập không hợp lệ",
    same_password: "Mật khẩu mới phải khác mật khẩu cũ",
    otp_expired: "Mã đã hết hạn hoặc không hợp lệ",
    signup_disabled: "Hiện không cho phép đăng ký",
    user_not_found: "Không tìm thấy người dùng",
    current_password_required: "Vui lòng nhập mật khẩu hiện tại",
    current_password_invalid: "Mật khẩu hiện tại không đúng"
  },
  zh: {
    invalid_credentials: "登录凭据无效",
    email_not_confirmed: "电子邮件未确认",
    user_already_exists: "用户已注册",
    email_exists: "该电子邮件已注册",
    weak_password: "密码强度太弱",
    over_email_send_rate_limit: "发送的邮件过多，请稍后再试",
    over_request_rate_limit: "请求过多，请稍后再试",
    validation_failed: "输入无效",
    same_password: "新密码必须与旧密码不同",
    otp_expired: "验证码已过期或无效",
    signup_disabled: "当前已禁用注册",
    user_not_found: "未找到用户",
    current_password_required: "请输入当前密码",
    current_password_invalid: "当前密码不正确"
  }
};
function Cl() {
  try {
    return ct().locale;
  } catch {
    return null;
  }
}
function pd() {
  const e = Cl();
  return q(() => {
    const a = ((e == null ? void 0 : e.value) ?? "en").toLowerCase();
    return Zn[a] ?? Zn.en;
  });
}
function cd() {
  const e = Cl();
  return q(() => {
    const a = ((e == null ? void 0 : e.value) ?? "en").toLowerCase();
    return Jn[a] ?? Jn.en;
  });
}
const md = /* @__PURE__ */ te({
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
    const t = e, n = a, l = $(t.view), o = (p) => {
      n("update:view", p), l.value = p;
    };
    Qn(Ge, {
      authView: l,
      setAuthView: o
    });
    const _ = pd(), d = cd(), r = q(() => {
      var s;
      const p = Oa(_.value);
      p.errors = Oa(d.value);
      const u = Oa((s = t == null ? void 0 : t.localization) == null ? void 0 : s.variables);
      return jt(p, u ?? {});
    }), c = q(() => l.value === "sign_in" || l.value === "sign_up" || l.value === "magic_link"), m = q(() => {
      var s, f;
      const p = Oa((s = t.appearance) == null ? void 0 : s.theme), u = Oa((f = t.appearance) == null ? void 0 : f.variables);
      return jt(
        (p == null ? void 0 : p.default) ?? {},
        (p == null ? void 0 : p[t.theme]) ?? {},
        (u == null ? void 0 : u.default) ?? {},
        (u == null ? void 0 : u[t == null ? void 0 : t.theme]) ?? {}
      );
    });
    return Vt({ theme: m.value }), Ma(
      () => [t.appearance, t.theme],
      () => {
        Vt({ theme: m.value });
      },
      { deep: !0 }
    ), Ma(
      () => t.view,
      (p) => {
        const { data: u } = t.supabaseClient.auth.onAuthStateChange(
          (s) => {
            s === "PASSWORD_RECOVERY" ? o("update_password") : s === "USER_UPDATED" && o("sign_in");
          }
        );
        return o(p), () => u.subscription.unsubscribe();
      },
      { deep: !0 }
    ), (p, u) => c.value ? (T(), V(fo, {
      key: 0,
      direction: "horizontal",
      gap: "small",
      theme: t.theme,
      appearance: p.appearance
    }, {
      default: P(() => [
        c.value ? (T(), V(Yr, {
          key: 0,
          supabaseClient: p.supabaseClient,
          appearance: p.appearance,
          providers: p.providers,
          providerScopes: p.providerScopes,
          queryParams: p.queryParams,
          socialLayout: p.socialLayout,
          redirectTo: p.redirectTo,
          useOAuthPopup: p.useOAuthPopup,
          popupWindowFeatures: p.popupWindowFeatures,
          onlyThirdPartyProviders: p.onlyThirdPartyProviders,
          i18n: r.value
        }, null, 8, ["supabaseClient", "appearance", "providers", "providerScopes", "queryParams", "socialLayout", "redirectTo", "useOAuthPopup", "popupWindowFeatures", "onlyThirdPartyProviders", "i18n"])) : K("", !0),
        p.onlyThirdPartyProviders ? K("", !0) : (T(), F(na, { key: 1 }, [
          l.value === "sign_in" || l.value === "sign_up" ? (T(), V(So, {
            key: 0,
            supabaseClient: p.supabaseClient,
            appearance: p.appearance,
            redirectTo: p.redirectTo,
            magicLink: p.magicLink,
            showLinks: p.showLinks,
            i18n: r.value,
            additionalData: p.additionalData,
            options: p.options,
            "onAuth:submit": u[0] || (u[0] = (s) => n("auth:submit", s)),
            "onAuth:error": u[1] || (u[1] = (s) => n("auth:error", s))
          }, null, 8, ["supabaseClient", "appearance", "redirectTo", "magicLink", "showLinks", "i18n", "additionalData", "options"])) : K("", !0),
          l.value === "magic_link" ? (T(), V(Jr, {
            key: 1,
            supabaseClient: p.supabaseClient,
            appearance: p.appearance,
            redirectTo: p.redirectTo,
            showLinks: p.showLinks,
            i18n: r.value
          }, null, 8, ["supabaseClient", "appearance", "redirectTo", "showLinks", "i18n"])) : K("", !0)
        ], 64))
      ]),
      _: 1
    }, 8, ["theme", "appearance"])) : (T(), F(na, { key: 1 }, [
      l.value === "forgotten_password" ? (T(), V(Qr, {
        key: 0,
        supabaseClient: p.supabaseClient,
        appearance: p.appearance,
        redirectTo: p.redirectTo,
        showLinks: p.showLinks,
        i18n: r.value,
        options: p.options
      }, null, 8, ["supabaseClient", "appearance", "redirectTo", "showLinks", "i18n", "options"])) : K("", !0),
      l.value === "update_password" ? (T(), V(ts, {
        key: 1,
        supabaseClient: p.supabaseClient,
        appearance: p.appearance,
        i18n: r.value
      }, null, 8, ["supabaseClient", "appearance", "i18n"])) : K("", !0),
      l.value === "verify_otp" ? (T(), V(os, {
        key: 2,
        supabaseClient: p.supabaseClient,
        appearance: p.appearance,
        otpType: p.otpType,
        i18n: r.value
      }, null, 8, ["supabaseClient", "appearance", "otpType", "i18n"])) : K("", !0),
      l.value === "anonymous_sign_in" ? (T(), V(ss, {
        key: 3,
        supabaseClient: p.supabaseClient,
        appearance: p.appearance,
        i18n: r.value,
        anonymouslyCredentials: p.anonymouslyCredentials
      }, null, 8, ["supabaseClient", "appearance", "i18n", "anonymouslyCredentials"])) : K("", !0)
    ], 64));
  }
}), gd = {
  install(e) {
    e.component("Auth", md);
  }
};
export {
  md as Auth,
  Qr as ForgottenPassword,
  Jr as MagicLink,
  ts as UpdatePassword,
  fd as UserContextProvider,
  bo as UserContextProviderKey,
  gd as default,
  ua as injectStrict,
  Qt as useSupabaseUser
};
