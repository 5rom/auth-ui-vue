import { defineComponent as te, useAttrs as ra, computed as K, openBlock as C, createBlock as F, resolveDynamicComponent as sa, mergeProps as Be, unref as y, withCtx as M, renderSlot as We, createElementBlock as $, normalizeClass as Rt, normalizeStyle as Oi, ref as W, createElementVNode as D, withModifiers as ge, inject as Jn, watch as Ma, createVNode as B, createTextVNode as j, toDisplayString as U, createCommentVNode as Y, createStaticVNode as Fa, onMounted as qt, provide as Xn, h as Zt, Fragment as na, renderList as Li, getCurrentInstance as Jt, onUnmounted as Ii, shallowRef as Ai, Text as Mi } from "vue";
var fe = {
  SIGN_IN: "sign_in",
  SIGN_UP: "sign_up",
  FORGOTTEN_PASSWORD: "forgotten_password",
  MAGIC_LINK: "magic_link",
  UPDATE_PASSWORD: "update_password",
  VERIFY_OTP: "verify_otp"
}, Pi = "supabase-auth-ui", Ri = {
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
function _a(e, a, t) {
  var n, l;
  const o = [], s = Ri[e];
  return o.push(
    t != null && t.prependedClassName ? (t == null ? void 0 : t.prependedClassName) + "_" + s : Pi + "_" + s
  ), (n = t == null ? void 0 : t.className) != null && n[e] && o.push((l = t == null ? void 0 : t.className) == null ? void 0 : l[e]), ((t == null ? void 0 : t.extend) === void 0 || (t == null ? void 0 : t.extend) === !0) && o.push(a), o;
}
function Dt(e, a) {
  let t;
  if (e && a && typeof e == "object" && typeof a == "object") {
    if (Array.isArray(a))
      for (t = 0; t < a.length; t++)
        e[t] = Dt(e[t], a[t]);
    else
      for (t in a)
        e[t] = Dt(e[t], a[t]);
    return e;
  }
  return a;
}
function zt(e, ...a) {
  let t = a.length;
  for (let n = 0; n < t; n++)
    e = Dt(e, a[n]);
  return e;
}
function Di(e, a) {
  return e.replace(
    /{{(\w+)}}/g,
    (t, n) => a.hasOwnProperty(n) ? a[n] : t
  );
}
var hn, Z = "colors", me = "sizes", N = "space", zi = { gap: N, gridGap: N, columnGap: N, gridColumnGap: N, rowGap: N, gridRowGap: N, inset: N, insetBlock: N, insetBlockEnd: N, insetBlockStart: N, insetInline: N, insetInlineEnd: N, insetInlineStart: N, margin: N, marginTop: N, marginRight: N, marginBottom: N, marginLeft: N, marginBlock: N, marginBlockEnd: N, marginBlockStart: N, marginInline: N, marginInlineEnd: N, marginInlineStart: N, padding: N, paddingTop: N, paddingRight: N, paddingBottom: N, paddingLeft: N, paddingBlock: N, paddingBlockEnd: N, paddingBlockStart: N, paddingInline: N, paddingInlineEnd: N, paddingInlineStart: N, top: N, right: N, bottom: N, left: N, scrollMargin: N, scrollMarginTop: N, scrollMarginRight: N, scrollMarginBottom: N, scrollMarginLeft: N, scrollMarginX: N, scrollMarginY: N, scrollMarginBlock: N, scrollMarginBlockEnd: N, scrollMarginBlockStart: N, scrollMarginInline: N, scrollMarginInlineEnd: N, scrollMarginInlineStart: N, scrollPadding: N, scrollPaddingTop: N, scrollPaddingRight: N, scrollPaddingBottom: N, scrollPaddingLeft: N, scrollPaddingX: N, scrollPaddingY: N, scrollPaddingBlock: N, scrollPaddingBlockEnd: N, scrollPaddingBlockStart: N, scrollPaddingInline: N, scrollPaddingInlineEnd: N, scrollPaddingInlineStart: N, fontSize: "fontSizes", background: Z, backgroundColor: Z, backgroundImage: Z, borderImage: Z, border: Z, borderBlock: Z, borderBlockEnd: Z, borderBlockStart: Z, borderBottom: Z, borderBottomColor: Z, borderColor: Z, borderInline: Z, borderInlineEnd: Z, borderInlineStart: Z, borderLeft: Z, borderLeftColor: Z, borderRight: Z, borderRightColor: Z, borderTop: Z, borderTopColor: Z, caretColor: Z, color: Z, columnRuleColor: Z, fill: Z, outline: Z, outlineColor: Z, stroke: Z, textDecorationColor: Z, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: me, minBlockSize: me, maxBlockSize: me, inlineSize: me, minInlineSize: me, maxInlineSize: me, width: me, minWidth: me, maxWidth: me, height: me, minHeight: me, maxHeight: me, flexBasis: me, gridTemplateColumns: me, gridTemplateRows: me, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, Fi = (e, a) => typeof a == "function" ? { "()": Function.prototype.toString.call(a) } : a, $a = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (a, t, ...n) => {
    const l = ((o) => JSON.stringify(o, Fi))(a);
    return l in e ? e[l] : e[l] = t(a, ...n);
  };
}, et = Symbol.for("sxs.internal"), Xt = (e, a) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)), vn = (e) => {
  for (const a in e)
    return !0;
  return !1;
}, { hasOwnProperty: $i } = Object.prototype, Ft = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (a) => "-" + a.toLowerCase()), Vi = /\s+(?![^()]*\))/, va = (e) => (a) => e(...typeof a == "string" ? String(a).split(Vi) : [a]), wn = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: va((e, a) => ({ marginBlockStart: e, marginBlockEnd: a || e })), marginInline: va((e, a) => ({ marginInlineStart: e, marginInlineEnd: a || e })), maxSize: va((e, a) => ({ maxBlockSize: e, maxInlineSize: a || e })), minSize: va((e, a) => ({ minBlockSize: e, minInlineSize: a || e })), paddingBlock: va((e, a) => ({ paddingBlockStart: e, paddingBlockEnd: a || e })), paddingInline: va((e, a) => ({ paddingInlineStart: e, paddingInlineEnd: a || e })) }, Mt = /([\d.]+)([^]*)/, ji = (e, a) => e.length ? e.reduce((t, n) => (t.push(...a.map((l) => l.includes("&") ? l.replace(/&/g, /[ +>|~]/.test(n) && /&.*&/.test(l) ? `:is(${n})` : n) : n + " " + l)), t), []) : a, Ui = (e, a) => e in Bi && typeof a == "string" ? a.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t, n, l, o) => n + (l === "stretch" ? `-moz-available${o};${Ft(e)}:${n}-webkit-fill-available` : `-moz-fit-content${o};${Ft(e)}:${n}fit-content`) + o) : String(a), Bi = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, ze = (e) => e ? e + "-" : "", Qn = (e, a, t) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (n, l, o, s, u) => s == "$" == !!o ? n : (l || s == "--" ? "calc(" : "") + "var(--" + (s === "$" ? ze(a) + (u.includes("$") ? "" : ze(t)) + u.replace(/\$/g, "-") : u) + ")" + (l || s == "--" ? "*" + (l || "") + (o || "1") + ")" : "")), Wi = /\s*,\s*(?![^()]*\))/, Hi = Object.prototype.toString, wa = (e, a, t, n, l) => {
  let o, s, u;
  const r = (p, m, c) => {
    let d, _;
    const b = (w) => {
      for (d in w) {
        const k = d.charCodeAt(0) === 64, I = k && Array.isArray(w[d]) ? w[d] : [w[d]];
        for (_ of I) {
          const S = /[A-Z]/.test(h = d) ? h : h.replace(/-[^]/g, (A) => A[1].toUpperCase()), P = typeof _ == "object" && _ && _.toString === Hi && (!n.utils[S] || !m.length);
          if (S in n.utils && !P) {
            const A = n.utils[S];
            if (A !== s) {
              s = A, b(A(_)), s = null;
              continue;
            }
          } else if (S in wn) {
            const A = wn[S];
            if (A !== u) {
              u = A, b(A(_)), u = null;
              continue;
            }
          }
          if (k && (T = d.slice(1) in n.media ? "@media " + n.media[d.slice(1)] : d, d = T.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (A, z, R, x, J, ne) => {
            const ee = Mt.test(z), Ee = 0.0625 * (ee ? -1 : 1), [Ae, Ye] = ee ? [x, z] : [z, x];
            return "(" + (R[0] === "=" ? "" : R[0] === ">" === ee ? "max-" : "min-") + Ae + ":" + (R[0] !== "=" && R.length === 1 ? Ye.replace(Mt, (ya, qe, Ze) => Number(qe) + Ee * (R === ">" ? 1 : -1) + Ze) : Ye) + (J ? ") and (" + (J[0] === ">" ? "min-" : "max-") + Ae + ":" + (J.length === 1 ? ne.replace(Mt, (ya, qe, Ze) => Number(qe) + Ee * (J === ">" ? -1 : 1) + Ze) : ne) : "") + ")";
          })), P) {
            const A = k ? c.concat(d) : [...c], z = k ? [...m] : ji(m, d.split(Wi));
            o !== void 0 && l(kn(...o)), o = void 0, r(_, z, A);
          } else
            o === void 0 && (o = [[], m, c]), d = k || d.charCodeAt(0) !== 36 ? d : `--${ze(n.prefix)}${d.slice(1).replace(/\$/g, "-")}`, _ = P ? _ : typeof _ == "number" ? _ && S in Gi ? String(_) + "px" : String(_) : Qn(Ui(S, _ ?? ""), n.prefix, n.themeMap[S]), o[0].push(`${k ? `${d} ` : `${Ft(d)}:`}${_}`);
        }
      }
      var T, h;
    };
    b(p), o !== void 0 && l(kn(...o)), o = void 0;
  };
  r(e, a, t);
}, kn = (e, a, t) => `${t.map((n) => `${n}{`).join("")}${a.length ? `${a.join(",")}{` : ""}${e.join(";")}${a.length ? "}" : ""}${Array(t.length ? t.length + 1 : 0).join("}")}`, Gi = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, En = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), la = (e) => ((a) => {
  let t, n = "";
  for (t = Math.abs(a); t > 52; t = t / 52 | 0)
    n = En(t % 52) + n;
  return En(t % 52) + n;
})(((a, t) => {
  let n = t.length;
  for (; n; )
    a = 33 * a ^ t.charCodeAt(--n);
  return a;
})(5381, JSON.stringify(e)) >>> 0), Aa = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], Ki = (e) => {
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
    return [].map.call(l, (o, s) => {
      const { cssText: u } = o;
      let r = "";
      if (u.startsWith("--sxs"))
        return "";
      if (l[s - 1] && (r = l[s - 1].cssText).startsWith("--sxs")) {
        if (!o.cssRules.length)
          return "";
        for (const p in a.rules)
          if (a.rules[p].group === o)
            return `--sxs{--sxs:${[...a.rules[p].cache].join(" ")}}${u}`;
        return o.cssRules.length ? `${r}${u}` : "";
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
      for (const p in u)
        delete u[p];
    }
    const l = Object(e).styleSheets || [];
    for (const u of l)
      if (Ki(u)) {
        for (let r = 0, p = u.cssRules; p[r]; ++r) {
          const m = Object(p[r]);
          if (m.type !== 1)
            continue;
          const c = Object(p[r + 1]);
          if (c.type !== 4)
            continue;
          ++r;
          const { cssText: d } = m;
          if (!d.startsWith("--sxs"))
            continue;
          const _ = d.slice(14, -3).trim().split(/\s+/), b = Aa[_[0]];
          b && (a || (a = { sheet: u, reset: n, rules: {}, toString: t }), a.rules[b] = { group: c, index: r, cache: new Set(_) });
        }
        if (a)
          break;
      }
    if (!a) {
      const u = (r, p) => ({ type: p, cssRules: [], insertRule(m, c) {
        this.cssRules.splice(c, 0, u(m, { import: 3, undefined: 1 }[(m.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return r === "@media{}" ? `@media{${[].map.call(this.cssRules, (m) => m.cssText).join("")}}` : r;
      } });
      a = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : u("", "text/css"), rules: {}, reset: n, toString: t };
    }
    const { sheet: o, rules: s } = a;
    for (let u = Aa.length - 1; u >= 0; --u) {
      const r = Aa[u];
      if (!s[r]) {
        const p = Aa[u + 1], m = s[p] ? s[p].index : o.cssRules.length;
        o.insertRule("@media{}", m), o.insertRule(`--sxs{--sxs:${u}}`, m), s[r] = { group: o.cssRules[m + 1], index: m, cache: /* @__PURE__ */ new Set([u]) };
      }
      qi(s[r]);
    }
  };
  return n(), a;
}, qi = (e) => {
  const a = e.group;
  let t = a.cssRules.length;
  e.apply = (n) => {
    try {
      a.insertRule(n, t), ++t;
    } catch {
    }
  };
}, Oa = Symbol(), Zi = $a(), Ji = (e, a) => Zi(e, () => (...t) => {
  let n = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const l of t)
    if (l != null)
      if (l[et]) {
        n.type == null && (n.type = l[et].type);
        for (const o of l[et].composers)
          n.composers.add(o);
      } else
        l.constructor !== Object || l.$$typeof ? n.type == null && (n.type = l) : n.composers.add(Xi(l, e));
  return n.type == null && (n.type = "span"), n.composers.size || n.composers.add(["PJLV", {}, [], [], {}, []]), Qi(e, n, a);
}), Xi = ({ variants: e, compoundVariants: a, defaultVariants: t, ...n }, l) => {
  const o = `${ze(l.prefix)}c-${la(n)}`, s = [], u = [], r = /* @__PURE__ */ Object.create(null), p = [];
  for (const d in t)
    r[d] = String(t[d]);
  if (typeof e == "object" && e)
    for (const d in e) {
      m = r, c = d, $i.call(m, c) || (r[d] = "undefined");
      const _ = e[d];
      for (const b in _) {
        const w = { [d]: String(b) };
        String(b) === "undefined" && p.push(d);
        const T = _[b], h = [w, T, !vn(T)];
        s.push(h);
      }
    }
  var m, c;
  if (typeof a == "object" && a)
    for (const d of a) {
      let { css: _, ...b } = d;
      _ = typeof _ == "object" && _ || {};
      for (const T in b)
        b[T] = String(b[T]);
      const w = [b, _, !vn(_)];
      u.push(w);
    }
  return [o, n, s, u, r, p];
}, Qi = (e, a, t) => {
  const [n, l, o, s] = eo(a.composers), u = typeof a.type == "function" || a.type.$$typeof ? ((c) => {
    function d() {
      for (let _ = 0; _ < d[Oa].length; _++) {
        const [b, w] = d[Oa][_];
        c.rules[b].apply(w);
      }
      return d[Oa] = [], null;
    }
    return d[Oa] = [], d.rules = {}, Aa.forEach((_) => d.rules[_] = { apply: (b) => d[Oa].push([_, b]) }), d;
  })(t) : null, r = (u || t).rules, p = `.${n}${l.length > 1 ? `:where(.${l.slice(1).join(".")})` : ""}`, m = (c) => {
    c = typeof c == "object" && c || ao;
    const { css: d, ..._ } = c, b = {};
    for (const h in o)
      if (delete _[h], h in c) {
        let k = c[h];
        typeof k == "object" && k ? b[h] = { "@initial": o[h], ...k } : (k = String(k), b[h] = k !== "undefined" || s.has(h) ? k : o[h]);
      } else
        b[h] = o[h];
    const w = /* @__PURE__ */ new Set([...l]);
    for (const [h, k, I, S] of a.composers) {
      t.rules.styled.cache.has(h) || (t.rules.styled.cache.add(h), wa(k, [`.${h}`], [], e, (z) => {
        r.styled.apply(z);
      }));
      const P = yn(I, b, e.media), A = yn(S, b, e.media, !0);
      for (const z of P)
        if (z !== void 0)
          for (const [R, x, J] of z) {
            const ne = `${h}-${la(x)}-${R}`;
            w.add(ne);
            const ee = (J ? t.rules.resonevar : t.rules.onevar).cache, Ee = J ? r.resonevar : r.onevar;
            ee.has(ne) || (ee.add(ne), wa(x, [`.${ne}`], [], e, (Ae) => {
              Ee.apply(Ae);
            }));
          }
      for (const z of A)
        if (z !== void 0)
          for (const [R, x] of z) {
            const J = `${h}-${la(x)}-${R}`;
            w.add(J), t.rules.allvar.cache.has(J) || (t.rules.allvar.cache.add(J), wa(x, [`.${J}`], [], e, (ne) => {
              r.allvar.apply(ne);
            }));
          }
    }
    if (typeof d == "object" && d) {
      const h = `${n}-i${la(d)}-css`;
      w.add(h), t.rules.inline.cache.has(h) || (t.rules.inline.cache.add(h), wa(d, [`.${h}`], [], e, (k) => {
        r.inline.apply(k);
      }));
    }
    for (const h of String(c.className || "").trim().split(/\s+/))
      h && w.add(h);
    const T = _.className = [...w].join(" ");
    return { type: a.type, className: T, selector: p, props: _, toString: () => T, deferredInjector: u };
  };
  return Xt(m, { className: n, selector: p, [et]: a, toString: () => (t.rules.styled.cache.has(n) || m(), n) });
}, eo = (e) => {
  let a = "";
  const t = [], n = {}, l = [];
  for (const [o, , , , s, u] of e) {
    a === "" && (a = o), t.push(o), l.push(...u);
    for (const r in s) {
      const p = s[r];
      (n[r] === void 0 || p !== "undefined" || u.includes(p)) && (n[r] = p);
    }
  }
  return [a, t, n, new Set(l)];
}, yn = (e, a, t, n) => {
  const l = [];
  e:
    for (let [o, s, u] of e) {
      if (u)
        continue;
      let r, p = 0, m = !1;
      for (r in o) {
        const c = o[r];
        let d = a[r];
        if (d !== c) {
          if (typeof d != "object" || !d)
            continue e;
          {
            let _, b, w = 0;
            for (const T in d) {
              if (c === String(d[T])) {
                if (T !== "@initial") {
                  const h = T.slice(1);
                  (b = b || []).push(h in t ? t[h] : T.replace(/^@media ?/, "")), m = !0;
                }
                p += w, _ = !0;
              }
              ++w;
            }
            if (b && b.length && (s = { ["@media " + b.join(", ")]: s }), !_)
              continue e;
          }
        }
      }
      (l[p] = l[p] || []).push([n ? "cv" : `${r}-${o[r]}`, s, m]);
    }
  return l;
}, ao = {}, to = $a(), no = (e, a) => to(e, () => (...t) => {
  const n = () => {
    for (let l of t) {
      l = typeof l == "object" && l || {};
      let o = la(l);
      if (!a.rules.global.cache.has(o)) {
        if (a.rules.global.cache.add(o), "@import" in l) {
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
}), lo = $a(), io = (e, a) => lo(e, () => (t) => {
  const n = `${ze(e.prefix)}k-${la(t)}`, l = () => {
    if (!a.rules.global.cache.has(n)) {
      a.rules.global.cache.add(n);
      const o = [];
      wa(t, [], [], e, (u) => o.push(u));
      const s = `@keyframes ${n}{${o.join("")}}`;
      a.rules.global.apply(s);
    }
    return n;
  };
  return Xt(l, { get name() {
    return l();
  }, toString: l });
}), oo = class {
  constructor(e, a, t, n) {
    this.token = e == null ? "" : String(e), this.value = a == null ? "" : String(a), this.scale = t == null ? "" : String(t), this.prefix = n == null ? "" : String(n);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + ze(this.prefix) + ze(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, ro = $a(), so = (e, a) => ro(e, () => (t, n) => {
  n = typeof t == "object" && t || Object(n);
  const l = `.${t = (t = typeof t == "string" ? t : "") || `${ze(e.prefix)}t-${la(n)}`}`, o = {}, s = [];
  for (const r in n) {
    o[r] = {};
    for (const p in n[r]) {
      const m = `--${ze(e.prefix)}${r}-${p}`, c = Qn(String(n[r][p]), e.prefix, r);
      o[r][p] = new oo(p, c, r, e.prefix), s.push(`${m}:${c}`);
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
  return { ...o, get className() {
    return u();
  }, selector: l, toString: u };
}), _o = $a(), $t = (e) => {
  let a = !1;
  const t = _o(e, (n) => {
    a = !0;
    const l = "prefix" in (n = typeof n == "object" && n || {}) ? String(n.prefix) : "", o = typeof n.media == "object" && n.media || {}, s = typeof n.root == "object" ? n.root || null : globalThis.document || null, u = typeof n.theme == "object" && n.theme || {}, r = { prefix: l, media: o, theme: u, themeMap: typeof n.themeMap == "object" && n.themeMap || { ...zi }, utils: typeof n.utils == "object" && n.utils || {} }, p = Yi(s), m = { css: Ji(r, p), globalCss: no(r, p), keyframes: io(r, p), createTheme: so(r, p), reset() {
      p.reset(), m.theme.toString();
    }, theme: {}, sheet: p, config: r, prefix: l, getCssText: p.toString, toString: p.toString };
    return String(m.theme = m.createTheme(u)), m;
  });
  return a || t.reset(), t;
}, el = () => hn || (hn = $t()), uo = (...e) => el().createTheme(...e), Ie = (...e) => el().css(...e), Xa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function co(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tt = { exports: {} };
tt.exports;
(function(e, a) {
  var t = 200, n = "__lodash_hash_undefined__", l = 9007199254740991, o = "[object Arguments]", s = "[object Array]", u = "[object Boolean]", r = "[object Date]", p = "[object Error]", m = "[object Function]", c = "[object GeneratorFunction]", d = "[object Map]", _ = "[object Number]", b = "[object Object]", w = "[object Promise]", T = "[object RegExp]", h = "[object Set]", k = "[object String]", I = "[object Symbol]", S = "[object WeakMap]", P = "[object ArrayBuffer]", A = "[object DataView]", z = "[object Float32Array]", R = "[object Float64Array]", x = "[object Int8Array]", J = "[object Int16Array]", ne = "[object Int32Array]", ee = "[object Uint8Array]", Ee = "[object Uint8ClampedArray]", Ae = "[object Uint16Array]", Ye = "[object Uint32Array]", ya = /[\\^$.*+?()[\]{}|]/g, qe = /\w*$/, Ze = /^\[object .+?Constructor\]$/, pt = /^(?:0|[1-9]\d*)$/, q = {};
  q[o] = q[s] = q[P] = q[A] = q[u] = q[r] = q[z] = q[R] = q[x] = q[J] = q[ne] = q[d] = q[_] = q[b] = q[T] = q[h] = q[k] = q[I] = q[ee] = q[Ee] = q[Ae] = q[Ye] = !0, q[p] = q[m] = q[S] = !1;
  var mt = typeof Xa == "object" && Xa && Xa.Object === Object && Xa, Me = typeof self == "object" && self && self.Object === Object && self, ye = mt || Me || Function("return this")(), Va = a && !a.nodeType && a, ja = Va && !0 && e && !e.nodeType && e, ft = ja && ja.exports === Va;
  function bt(i, f) {
    return i.set(f[0], f[1]), i;
  }
  function nn(i, f) {
    return i.add(f), i;
  }
  function gt(i, f) {
    for (var v = -1, O = i ? i.length : 0; ++v < O && f(i[v], v, i) !== !1; )
      ;
    return i;
  }
  function ht(i, f) {
    for (var v = -1, O = f.length, se = i.length; ++v < O; )
      i[se + v] = f[v];
    return i;
  }
  function Ua(i, f, v, O) {
    var se = -1, pe = i ? i.length : 0;
    for (O && pe && (v = i[++se]); ++se < pe; )
      v = f(v, i[se], se, i);
    return v;
  }
  function vt(i, f) {
    for (var v = -1, O = Array(i); ++v < i; )
      O[v] = f(v);
    return O;
  }
  function wt(i, f) {
    return i == null ? void 0 : i[f];
  }
  function Ba(i) {
    var f = !1;
    if (i != null && typeof i.toString != "function")
      try {
        f = !!(i + "");
      } catch {
      }
    return f;
  }
  function Wa(i) {
    var f = -1, v = Array(i.size);
    return i.forEach(function(O, se) {
      v[++f] = [se, O];
    }), v;
  }
  function Ta(i, f) {
    return function(v) {
      return i(f(v));
    };
  }
  function Ca(i) {
    var f = -1, v = Array(i.size);
    return i.forEach(function(O) {
      v[++f] = O;
    }), v;
  }
  var kt = Array.prototype, Et = Function.prototype, ca = Object.prototype, Sa = ye["__core-js_shared__"], Ha = function() {
    var i = /[^.]+$/.exec(Sa && Sa.keys && Sa.keys.IE_PROTO || "");
    return i ? "Symbol(src)_1." + i : "";
  }(), Ga = Et.toString, Ne = ca.hasOwnProperty, pa = ca.toString, ae = RegExp(
    "^" + Ga.call(Ne).replace(ya, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), g = ft ? ye.Buffer : void 0, E = ye.Symbol, V = ye.Uint8Array, X = Ta(Object.getPrototypeOf, Object), Oe = Object.create, ma = ca.propertyIsEnumerable, Ve = kt.splice, Le = Object.getOwnPropertySymbols, yt = g ? g.isBuffer : void 0, Ka = Ta(Object.keys, Object), Tt = ga(ye, "DataView"), xa = ga(ye, "Map"), Ct = ga(ye, "Promise"), St = ga(ye, "Set"), xt = ga(ye, "WeakMap"), Na = ga(Object, "create"), xl = Qe(Tt), Nl = Qe(xa), Ol = Qe(Ct), Ll = Qe(St), Il = Qe(xt), ln = E ? E.prototype : void 0, on = ln ? ln.valueOf : void 0;
  function Je(i) {
    var f = -1, v = i ? i.length : 0;
    for (this.clear(); ++f < v; ) {
      var O = i[f];
      this.set(O[0], O[1]);
    }
  }
  function Al() {
    this.__data__ = Na ? Na(null) : {};
  }
  function Ml(i) {
    return this.has(i) && delete this.__data__[i];
  }
  function Pl(i) {
    var f = this.__data__;
    if (Na) {
      var v = f[i];
      return v === n ? void 0 : v;
    }
    return Ne.call(f, i) ? f[i] : void 0;
  }
  function Rl(i) {
    var f = this.__data__;
    return Na ? f[i] !== void 0 : Ne.call(f, i);
  }
  function Dl(i, f) {
    var v = this.__data__;
    return v[i] = Na && f === void 0 ? n : f, this;
  }
  Je.prototype.clear = Al, Je.prototype.delete = Ml, Je.prototype.get = Pl, Je.prototype.has = Rl, Je.prototype.set = Dl;
  function Pe(i) {
    var f = -1, v = i ? i.length : 0;
    for (this.clear(); ++f < v; ) {
      var O = i[f];
      this.set(O[0], O[1]);
    }
  }
  function zl() {
    this.__data__ = [];
  }
  function Fl(i) {
    var f = this.__data__, v = Ya(f, i);
    if (v < 0)
      return !1;
    var O = f.length - 1;
    return v == O ? f.pop() : Ve.call(f, v, 1), !0;
  }
  function $l(i) {
    var f = this.__data__, v = Ya(f, i);
    return v < 0 ? void 0 : f[v][1];
  }
  function Vl(i) {
    return Ya(this.__data__, i) > -1;
  }
  function jl(i, f) {
    var v = this.__data__, O = Ya(v, i);
    return O < 0 ? v.push([i, f]) : v[O][1] = f, this;
  }
  Pe.prototype.clear = zl, Pe.prototype.delete = Fl, Pe.prototype.get = $l, Pe.prototype.has = Vl, Pe.prototype.set = jl;
  function fa(i) {
    var f = -1, v = i ? i.length : 0;
    for (this.clear(); ++f < v; ) {
      var O = i[f];
      this.set(O[0], O[1]);
    }
  }
  function Ul() {
    this.__data__ = {
      hash: new Je(),
      map: new (xa || Pe)(),
      string: new Je()
    };
  }
  function Bl(i) {
    return qa(this, i).delete(i);
  }
  function Wl(i) {
    return qa(this, i).get(i);
  }
  function Hl(i) {
    return qa(this, i).has(i);
  }
  function Gl(i, f) {
    return qa(this, i).set(i, f), this;
  }
  fa.prototype.clear = Ul, fa.prototype.delete = Bl, fa.prototype.get = Wl, fa.prototype.has = Hl, fa.prototype.set = Gl;
  function ba(i) {
    this.__data__ = new Pe(i);
  }
  function Kl() {
    this.__data__ = new Pe();
  }
  function Yl(i) {
    return this.__data__.delete(i);
  }
  function ql(i) {
    return this.__data__.get(i);
  }
  function Zl(i) {
    return this.__data__.has(i);
  }
  function Jl(i, f) {
    var v = this.__data__;
    if (v instanceof Pe) {
      var O = v.__data__;
      if (!xa || O.length < t - 1)
        return O.push([i, f]), this;
      v = this.__data__ = new fa(O);
    }
    return v.set(i, f), this;
  }
  ba.prototype.clear = Kl, ba.prototype.delete = Yl, ba.prototype.get = ql, ba.prototype.has = Zl, ba.prototype.set = Jl;
  function Xl(i, f) {
    var v = Lt(i) || Ei(i) ? vt(i.length, String) : [], O = v.length, se = !!O;
    for (var pe in i)
      (f || Ne.call(i, pe)) && !(se && (pe == "length" || hi(pe, O))) && v.push(pe);
    return v;
  }
  function rn(i, f, v) {
    var O = i[f];
    (!(Ne.call(i, f) && dn(O, v)) || v === void 0 && !(f in i)) && (i[f] = v);
  }
  function Ya(i, f) {
    for (var v = i.length; v--; )
      if (dn(i[v][0], f))
        return v;
    return -1;
  }
  function Ql(i, f) {
    return i && sn(f, It(f), i);
  }
  function Nt(i, f, v, O, se, pe, Te) {
    var he;
    if (O && (he = pe ? O(i, se, pe, Te) : O(i)), he !== void 0)
      return he;
    if (!Za(i))
      return i;
    var mn = Lt(i);
    if (mn) {
      if (he = fi(i), !f)
        return ci(i, he);
    } else {
      var ha = Xe(i), fn = ha == m || ha == c;
      if (Ti(i))
        return ii(i, f);
      if (ha == b || ha == o || fn && !pe) {
        if (Ba(i))
          return pe ? i : {};
        if (he = bi(fn ? {} : i), !f)
          return pi(i, Ql(he, i));
      } else {
        if (!q[ha])
          return pe ? i : {};
        he = gi(i, ha, Nt, f);
      }
    }
    Te || (Te = new ba());
    var bn = Te.get(i);
    if (bn)
      return bn;
    if (Te.set(i, he), !mn)
      var gn = v ? mi(i) : It(i);
    return gt(gn || i, function(At, Ja) {
      gn && (Ja = At, At = i[Ja]), rn(he, Ja, Nt(At, f, v, O, Ja, i, Te));
    }), he;
  }
  function ei(i) {
    return Za(i) ? Oe(i) : {};
  }
  function ai(i, f, v) {
    var O = f(i);
    return Lt(i) ? O : ht(O, v(i));
  }
  function ti(i) {
    return pa.call(i);
  }
  function ni(i) {
    if (!Za(i) || wi(i))
      return !1;
    var f = pn(i) || Ba(i) ? ae : Ze;
    return f.test(Qe(i));
  }
  function li(i) {
    if (!un(i))
      return Ka(i);
    var f = [];
    for (var v in Object(i))
      Ne.call(i, v) && v != "constructor" && f.push(v);
    return f;
  }
  function ii(i, f) {
    if (f)
      return i.slice();
    var v = new i.constructor(i.length);
    return i.copy(v), v;
  }
  function Ot(i) {
    var f = new i.constructor(i.byteLength);
    return new V(f).set(new V(i)), f;
  }
  function oi(i, f) {
    var v = f ? Ot(i.buffer) : i.buffer;
    return new i.constructor(v, i.byteOffset, i.byteLength);
  }
  function ri(i, f, v) {
    var O = f ? v(Wa(i), !0) : Wa(i);
    return Ua(O, bt, new i.constructor());
  }
  function si(i) {
    var f = new i.constructor(i.source, qe.exec(i));
    return f.lastIndex = i.lastIndex, f;
  }
  function _i(i, f, v) {
    var O = f ? v(Ca(i), !0) : Ca(i);
    return Ua(O, nn, new i.constructor());
  }
  function ui(i) {
    return on ? Object(on.call(i)) : {};
  }
  function di(i, f) {
    var v = f ? Ot(i.buffer) : i.buffer;
    return new i.constructor(v, i.byteOffset, i.length);
  }
  function ci(i, f) {
    var v = -1, O = i.length;
    for (f || (f = Array(O)); ++v < O; )
      f[v] = i[v];
    return f;
  }
  function sn(i, f, v, O) {
    v || (v = {});
    for (var se = -1, pe = f.length; ++se < pe; ) {
      var Te = f[se], he = O ? O(v[Te], i[Te], Te, v, i) : void 0;
      rn(v, Te, he === void 0 ? i[Te] : he);
    }
    return v;
  }
  function pi(i, f) {
    return sn(i, _n(i), f);
  }
  function mi(i) {
    return ai(i, It, _n);
  }
  function qa(i, f) {
    var v = i.__data__;
    return vi(f) ? v[typeof f == "string" ? "string" : "hash"] : v.map;
  }
  function ga(i, f) {
    var v = wt(i, f);
    return ni(v) ? v : void 0;
  }
  var _n = Le ? Ta(Le, Object) : xi, Xe = ti;
  (Tt && Xe(new Tt(new ArrayBuffer(1))) != A || xa && Xe(new xa()) != d || Ct && Xe(Ct.resolve()) != w || St && Xe(new St()) != h || xt && Xe(new xt()) != S) && (Xe = function(i) {
    var f = pa.call(i), v = f == b ? i.constructor : void 0, O = v ? Qe(v) : void 0;
    if (O)
      switch (O) {
        case xl:
          return A;
        case Nl:
          return d;
        case Ol:
          return w;
        case Ll:
          return h;
        case Il:
          return S;
      }
    return f;
  });
  function fi(i) {
    var f = i.length, v = i.constructor(f);
    return f && typeof i[0] == "string" && Ne.call(i, "index") && (v.index = i.index, v.input = i.input), v;
  }
  function bi(i) {
    return typeof i.constructor == "function" && !un(i) ? ei(X(i)) : {};
  }
  function gi(i, f, v, O) {
    var se = i.constructor;
    switch (f) {
      case P:
        return Ot(i);
      case u:
      case r:
        return new se(+i);
      case A:
        return oi(i, O);
      case z:
      case R:
      case x:
      case J:
      case ne:
      case ee:
      case Ee:
      case Ae:
      case Ye:
        return di(i, O);
      case d:
        return ri(i, O, v);
      case _:
      case k:
        return new se(i);
      case T:
        return si(i);
      case h:
        return _i(i, O, v);
      case I:
        return ui(i);
    }
  }
  function hi(i, f) {
    return f = f ?? l, !!f && (typeof i == "number" || pt.test(i)) && i > -1 && i % 1 == 0 && i < f;
  }
  function vi(i) {
    var f = typeof i;
    return f == "string" || f == "number" || f == "symbol" || f == "boolean" ? i !== "__proto__" : i === null;
  }
  function wi(i) {
    return !!Ha && Ha in i;
  }
  function un(i) {
    var f = i && i.constructor, v = typeof f == "function" && f.prototype || ca;
    return i === v;
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
  function ki(i) {
    return Nt(i, !0, !0);
  }
  function dn(i, f) {
    return i === f || i !== i && f !== f;
  }
  function Ei(i) {
    return yi(i) && Ne.call(i, "callee") && (!ma.call(i, "callee") || pa.call(i) == o);
  }
  var Lt = Array.isArray;
  function cn(i) {
    return i != null && Ci(i.length) && !pn(i);
  }
  function yi(i) {
    return Si(i) && cn(i);
  }
  var Ti = yt || Ni;
  function pn(i) {
    var f = Za(i) ? pa.call(i) : "";
    return f == m || f == c;
  }
  function Ci(i) {
    return typeof i == "number" && i > -1 && i % 1 == 0 && i <= l;
  }
  function Za(i) {
    var f = typeof i;
    return !!i && (f == "object" || f == "function");
  }
  function Si(i) {
    return !!i && typeof i == "object";
  }
  function It(i) {
    return cn(i) ? Xl(i) : li(i);
  }
  function xi() {
    return [];
  }
  function Ni() {
    return !1;
  }
  e.exports = ki;
})(tt, tt.exports);
var po = tt.exports;
const La = /* @__PURE__ */ co(po), Ge = Symbol("AuthView"), mo = Symbol("UserContextProvider"), fo = /* @__PURE__ */ te({
  __name: "SocialAuthContainer",
  props: {
    theme: {},
    className: {},
    appearance: {}
  },
  setup(e) {
    const a = e, t = ra(), n = K(() => {
      var l, o, s, u;
      return a.theme !== "default" ? uo(
        zt(
          (o = (l = a.appearance) == null ? void 0 : l.theme) == null ? void 0 : o[a.theme],
          ((u = (s = a.appearance) == null ? void 0 : s.variables) == null ? void 0 : u[a.theme]) ?? {}
        )
      ).className : "";
    });
    return (l, o) => (C(), F(sa("div"), Be(y(t), { class: n.value }), {
      default: M(() => [
        We(l.$slots, "default")
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
    }), t = e, n = ra(), l = K(() => _a(
      "anchor",
      a(),
      t.appearance
    ).join(" "));
    return (o, s) => {
      var u, r;
      return C(), F(sa("a"), Be(y(n), {
        class: l.value,
        style: (r = (u = o.appearance) == null ? void 0 : u.style) == null ? void 0 : r.anchor
      }), {
        default: M(() => [
          We(o.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
}), bo = ["disabled"], ua = /* @__PURE__ */ te({
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
    }), t = e, n = ra(), l = K(() => _a(
      "button",
      a({ color: t.color }),
      t.appearance
    ).join(" "));
    return (o, s) => {
      var u, r;
      return C(), $("button", Be(y(n), {
        class: l.value,
        style: (r = (u = o.appearance) == null ? void 0 : u.style) == null ? void 0 : r.button,
        disabled: o.loading
      }), [
        We(o.$slots, "icon"),
        We(o.$slots, "default")
      ], 16, bo);
    };
  }
}), xe = /* @__PURE__ */ te({
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
    }), t = e, n = K(() => _a(
      "container",
      a({
        direction: t.direction,
        gap: t.gap
      }),
      t.appearance
    ).join(" "));
    return (l, o) => {
      var s, u;
      return C(), F(sa(l.is), {
        class: Rt(n.value),
        style: Oi((u = (s = l.appearance) == null ? void 0 : s.style) == null ? void 0 : u.container)
      }, {
        default: M(() => [
          We(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
}), go = /* @__PURE__ */ te({
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
    }), t = e, n = ra(), l = K(() => _a(
      "divider",
      a(),
      t.appearance
    ).join(" "));
    return (o, s) => {
      var u, r;
      return C(), F(sa("div"), Be(y(n), {
        class: l.value,
        style: (r = (u = o.appearance) == null ? void 0 : u.style) == null ? void 0 : r.divider
      }), {
        default: M(() => [
          We(o.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
}), ho = ["type", "value"], vo = ["aria-label", "aria-pressed"], wo = {
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
}, ko = {
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
}, Eo = ["type", "value"], je = /* @__PURE__ */ te({
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
    }), o = e, s = ra(), u = W(!1), r = K(
      () => o.type === "password" ? u.value ? "text" : "password" : o.type
    ), p = K(() => {
      const d = _a(
        "input",
        a({
          // keep the wide masking spacing only while the value is masked
          type: r.value === "password" ? "password" : "default"
        }),
        o.appearance
      );
      return o.type === "password" && d.push(n().toString()), d.join(" ");
    }), m = K(() => t().toString()), c = K(() => l().toString());
    return (d, _) => {
      var b, w, T, h;
      return d.type === "password" ? (C(), $("div", {
        key: 0,
        class: Rt(m.value)
      }, [
        D("input", Be(y(s), {
          type: r.value,
          class: p.value,
          style: (w = (b = d.appearance) == null ? void 0 : b.style) == null ? void 0 : w.input,
          value: d.modelValue,
          onInput: _[0] || (_[0] = (k) => d.$emit("update:modelValue", (k == null ? void 0 : k.target).value))
        }), null, 16, ho),
        D("button", {
          type: "button",
          class: Rt(c.value),
          "aria-label": u.value ? d.hideLabel : d.showLabel,
          "aria-pressed": u.value,
          onClick: _[1] || (_[1] = ge((k) => u.value = !u.value, ["prevent"]))
        }, [
          u.value ? (C(), $("svg", wo, _[3] || (_[3] = [
            D("path", { d: "M9.88 9.88a3 3 0 0 0 4.24 4.24M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" }, null, -1),
            D("path", { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" }, null, -1),
            D("line", {
              x1: "2",
              y1: "2",
              x2: "22",
              y2: "22"
            }, null, -1)
          ]))) : (C(), $("svg", ko, _[4] || (_[4] = [
            D("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }, null, -1),
            D("circle", {
              cx: "12",
              cy: "12",
              r: "3"
            }, null, -1)
          ])))
        ], 10, vo)
      ], 2)) : (C(), $("input", Be({ key: 1 }, y(s), {
        type: d.type,
        class: p.value,
        style: (h = (T = d.appearance) == null ? void 0 : T.style) == null ? void 0 : h.input,
        value: d.modelValue,
        onInput: _[2] || (_[2] = (k) => d.$emit("update:modelValue", (k == null ? void 0 : k.target).value))
      }), null, 16, Eo));
    };
  }
}), Ue = /* @__PURE__ */ te({
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
    }), t = e, n = ra(), l = K(() => _a(
      "label",
      a(),
      t.appearance
    ).join(" "));
    return (o, s) => {
      var u, r;
      return C(), F(sa("label"), Be(y(n), {
        class: l.value,
        style: (r = (u = o.appearance) == null ? void 0 : u.style) == null ? void 0 : r.label
      }), {
        default: M(() => [
          We(o.$slots, "default")
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
    }), t = e, n = ra(), l = K(() => _a(
      "message",
      a({ color: t.color }),
      t.appearance
    ).join(" "));
    return (o, s) => {
      var u, r;
      return C(), F(sa("span"), Be(y(n), {
        class: l.value,
        style: (r = (u = o.appearance) == null ? void 0 : u.style) == null ? void 0 : r.message
      }), {
        default: M(() => [
          We(o.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
});
function da(e, a) {
  const t = Jn(e, a);
  if (!t)
    throw new Error(`Could not resolve ${e.description}`);
  return t;
}
const yo = {
  "invalid login credentials": "invalid_credentials",
  "email not confirmed": "email_not_confirmed",
  "user already registered": "user_already_exists",
  "password is too weak": "weak_password",
  "email rate limit exceeded": "over_email_send_rate_limit",
  "signups not allowed for this instance": "signup_disabled",
  "user not found": "user_not_found"
};
function He(e, a) {
  if (!e)
    return "";
  const t = e.message ?? "";
  if (a) {
    const n = e.code || yo[t.toLowerCase().trim()];
    if (n && a[n])
      return a[n];
  }
  return t;
}
const To = ["id"], Co = /* @__PURE__ */ te({
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
    const t = e, n = W(""), l = W(""), o = W(""), s = W(""), u = W(!1), { authView: r, setAuthView: p } = da(Ge), m = K(
      () => {
        var _;
        return (_ = t.i18n) == null ? void 0 : _[r.value];
      }
    ), c = a, d = async (_) => {
      var b, w, T, h;
      switch (o.value = "", s.value = "", u.value = !0, c("auth:submit", {
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
          k && (o.value = He(k, (b = t.i18n) == null ? void 0 : b.errors), c("auth:error", k)), u.value = !1;
          break;
        case "sign_up":
          let I = {
            emailRedirectTo: t.redirectTo
          };
          t.additionalData && (I.data = t.additionalData);
          const {
            data: { user: S, session: P },
            error: A
          } = await t.supabaseClient.auth.signUp({
            email: n.value,
            password: l.value,
            options: {
              ...t.options ?? {},
              ...I
            }
          });
          A ? (o.value = He(A, (w = t.i18n) == null ? void 0 : w.errors), c("auth:error", A)) : S && !P && (s.value = (h = (T = t.i18n) == null ? void 0 : T.sign_up) == null ? void 0 : h.confirmation_text), u.value = !1;
      }
    };
    return Ma(
      () => r.value,
      () => {
        u.value = !1;
      }
    ), (_, b) => (C(), $("form", {
      id: `auth-${y(r)}`,
      onSubmit: ge(d, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      B(y(xe), {
        direction: "vertical",
        gap: "large",
        appearance: _.appearance
      }, {
        default: M(() => [
          B(y(xe), {
            direction: "vertical",
            gap: "large",
            appearance: _.appearance
          }, {
            default: M(() => {
              var w, T, h, k;
              return [
                D("div", null, [
                  B(y(Ue), {
                    htmlFor: "email",
                    appearance: _.appearance
                  }, {
                    default: M(() => {
                      var I;
                      return [
                        j(U((I = m.value) == null ? void 0 : I.email_label), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["appearance"]),
                  B(y(je), {
                    id: "email",
                    type: "email",
                    name: "email",
                    modelValue: n.value,
                    "onUpdate:modelValue": b[0] || (b[0] = (I) => n.value = I),
                    placeholder: (w = m.value) == null ? void 0 : w.email_input_placeholder,
                    autoComplete: "email",
                    appearance: _.appearance
                  }, null, 8, ["modelValue", "placeholder", "appearance"])
                ]),
                D("div", null, [
                  B(y(Ue), {
                    htmlFor: "password",
                    appearance: _.appearance
                  }, {
                    default: M(() => {
                      var I;
                      return [
                        j(U((I = m.value) == null ? void 0 : I.password_label), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["appearance"]),
                  B(y(je), {
                    id: "password",
                    type: "password",
                    name: "password",
                    modelValue: l.value,
                    "onUpdate:modelValue": b[1] || (b[1] = (I) => l.value = I),
                    placeholder: (T = m.value) == null ? void 0 : T.password_input_placeholder,
                    autoComplete: y(r) === "sign_in" ? "current-password" : "new-password",
                    appearance: _.appearance,
                    showLabel: (h = _.i18n) == null ? void 0 : h.password_show,
                    hideLabel: (k = _.i18n) == null ? void 0 : k.password_hide
                  }, null, 8, ["modelValue", "placeholder", "autoComplete", "appearance", "showLabel", "hideLabel"])
                ])
              ];
            }),
            _: 1
          }, 8, ["appearance"]),
          B(y(ua), {
            type: "submit",
            color: "primary",
            loading: u.value,
            appearance: _.appearance
          }, {
            default: M(() => {
              var w, T;
              return [
                j(U(u.value ? (w = m.value) == null ? void 0 : w.loading_button_label : (T = m.value) == null ? void 0 : T.button_label), 1)
              ];
            }),
            _: 1
          }, 8, ["loading", "appearance"]),
          _.showLinks ? (C(), F(y(xe), {
            key: 0,
            direction: "vertical",
            gap: "small",
            appearance: _.appearance
          }, {
            default: M(() => [
              y(r) === y(fe).SIGN_IN && _.magicLink ? (C(), F(y(ta), {
                key: 0,
                href: "#auth-magic-link",
                appearance: _.appearance,
                onClick: b[2] || (b[2] = ge((w) => y(p)(y(fe).MAGIC_LINK), ["prevent"]))
              }, {
                default: M(() => {
                  var w, T;
                  return [
                    j(U((T = (w = _.i18n) == null ? void 0 : w.magic_link) == null ? void 0 : T.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"])) : Y("", !0),
              y(r) === y(fe).SIGN_IN ? (C(), F(y(ta), {
                key: 1,
                href: "#auth-forgot-password",
                appearance: _.appearance,
                onClick: b[3] || (b[3] = ge((w) => y(p)(y(fe).FORGOTTEN_PASSWORD), ["prevent"]))
              }, {
                default: M(() => {
                  var w, T;
                  return [
                    j(U((T = (w = _.i18n) == null ? void 0 : w.forgotten_password) == null ? void 0 : T.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"])) : Y("", !0),
              y(r) === y(fe).SIGN_IN ? (C(), F(y(ta), {
                key: 2,
                href: "#auth-sign-up",
                appearance: _.appearance,
                onClick: b[4] || (b[4] = ge((w) => y(p)(y(fe).SIGN_UP), ["prevent"]))
              }, {
                default: M(() => {
                  var w, T;
                  return [
                    j(U((T = (w = _.i18n) == null ? void 0 : w.sign_up) == null ? void 0 : T.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"])) : (C(), F(y(ta), {
                key: 3,
                href: "#auth-sign-in",
                appearance: _.appearance,
                onClick: b[5] || (b[5] = ge((w) => y(p)(y(fe).SIGN_IN), ["prevent"]))
              }, {
                default: M(() => {
                  var w, T;
                  return [
                    j(U((T = (w = _.i18n) == null ? void 0 : w.sign_in) == null ? void 0 : T.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]))
            ]),
            _: 1
          }, 8, ["appearance"])) : Y("", !0)
        ]),
        _: 1
      }, 8, ["appearance"]),
      s.value ? (C(), F(y(Se), {
        key: 0,
        appearance: _.appearance
      }, {
        default: M(() => [
          j(U(s.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0),
      o.value ? (C(), F(y(Se), {
        key: 1,
        color: "danger",
        appearance: _.appearance
      }, {
        default: M(() => [
          j(U(o.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0)
    ], 40, To));
  }
}), re = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [n, l] of a)
    t[n] = l;
  return t;
}, So = {}, xo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function No(e, a) {
  return C(), $("svg", xo, a[0] || (a[0] = [
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
const Oo = /* @__PURE__ */ re(So, [["render", No]]), Lo = {}, Io = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Ao(e, a) {
  return C(), $("svg", Io, a[0] || (a[0] = [
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
const Mo = /* @__PURE__ */ re(Lo, [["render", Ao]]), Po = {}, Ro = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Do(e, a) {
  return C(), $("svg", Ro, a[0] || (a[0] = [
    D("path", {
      fill: "#03A9F4",
      d: "M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
    }, null, -1)
  ]));
}
const zo = /* @__PURE__ */ re(Po, [["render", Do]]), Fo = {}, $o = {
  fill: "gray",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "21px",
  height: "21px"
};
function Vo(e, a) {
  return C(), $("svg", $o, a[0] || (a[0] = [
    D("path", { d: "M 15.904297 1.078125 C 15.843359 1.06875 15.774219 1.0746094 15.699219 1.0996094 C 14.699219 1.2996094 13.600391 1.8996094 12.900391 2.5996094 C 12.300391 3.1996094 11.800781 4.1996094 11.800781 5.0996094 C 11.800781 5.2996094 11.999219 5.5 12.199219 5.5 C 13.299219 5.4 14.399609 4.7996094 15.099609 4.0996094 C 15.699609 3.2996094 16.199219 2.4 16.199219 1.5 C 16.199219 1.275 16.087109 1.10625 15.904297 1.078125 z M 16.199219 5.4003906 C 14.399219 5.4003906 13.600391 6.5 12.400391 6.5 C 11.100391 6.5 9.9003906 5.5 8.4003906 5.5 C 6.3003906 5.5 3.0996094 7.4996094 3.0996094 12.099609 C 2.9996094 16.299609 6.8 21 9 21 C 10.3 21 10.600391 20.199219 12.400391 20.199219 C 14.200391 20.199219 14.600391 21 15.900391 21 C 17.400391 21 18.500391 19.399609 19.400391 18.099609 C 19.800391 17.399609 20.100391 17.000391 20.400391 16.400391 C 20.600391 16.000391 20.4 15.600391 20 15.400391 C 17.4 14.100391 16.900781 9.9003906 19.800781 8.4003906 C 20.300781 8.1003906 20.4 7.4992188 20 7.1992188 C 18.9 6.1992187 17.299219 5.4003906 16.199219 5.4003906 z" }, null, -1)
  ]));
}
const jo = /* @__PURE__ */ re(Fo, [["render", Vo]]), Uo = {}, Bo = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21.34",
  height: "21",
  viewBox: "0 0 256 384"
};
function Wo(e, a) {
  return C(), $("svg", Bo, a[0] || (a[0] = [
    Fa('<path fill="#0ACF83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z"></path><path fill="#A259FF" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z"></path><path fill="#F24E1E" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z"></path><path fill="#FF7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z"></path><path fill="#1ABCFE" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64Z"></path>', 5)
  ]));
}
const Ho = /* @__PURE__ */ re(Uo, [["render", Wo]]), Go = {}, Ko = {
  fill: "gray",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 30 30",
  width: "21px",
  height: "21px"
};
function Yo(e, a) {
  return C(), $("svg", Ko, a[0] || (a[0] = [
    D("path", { d: "M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" }, null, -1)
  ]));
}
const qo = /* @__PURE__ */ re(Go, [["render", Yo]]), Zo = {}, Jo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Xo(e, a) {
  return C(), $("svg", Jo, a[0] || (a[0] = [
    Fa('<path fill="#e53935" d="M24 43L16 20 32 20z"></path><path fill="#ff7043" d="M24 43L42 20 32 20z"></path><path fill="#e53935" d="M37 5L42 20 32 20z"></path><path fill="#ffa726" d="M24 43L42 20 45 28z"></path><path fill="#ff7043" d="M24 43L6 20 16 20z"></path><path fill="#e53935" d="M11 5L6 20 16 20z"></path><path fill="#ffa726" d="M24 43L6 20 3 28z"></path>', 7)
  ]));
}
const Qo = /* @__PURE__ */ re(Zo, [["render", Xo]]), er = {}, ar = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21",
  height: "21",
  viewBox: "0 0 62.42 62.42"
};
function tr(e, a) {
  return C(), $("svg", ar, a[0] || (a[0] = [
    Fa('<defs><linearGradient id="New_Gradient_Swatch_1" x1="64.01" y1="30.27" x2="32.99" y2="54.48" gradientUnits="userSpaceOnUse"><stop offset="0.18" stop-color="#0052cc"></stop><stop offset="1" stop-color="#2684ff"></stop></linearGradient></defs><title>Bitbucket-blue</title><g id="Layer_2" data-name="Layer 2"><g id="Blue" transform="translate(0 -3.13)"><path d="M2,6.26A2,2,0,0,0,0,8.58L8.49,60.12a2.72,2.72,0,0,0,2.66,2.27H51.88a2,2,0,0,0,2-1.68L62.37,8.59a2,2,0,0,0-2-2.32ZM37.75,43.51h-13L21.23,25.12H40.9Z" fill="#2684ff"></path><path d="M59.67,25.12H40.9L37.75,43.51h-13L9.4,61.73a2.71,2.71,0,0,0,1.75.66H51.89a2,2,0,0,0,2-1.68Z" fill="url(#New_Gradient_Swatch_1)"></path></g></g>', 3)
  ]));
}
const nr = /* @__PURE__ */ re(er, [["render", tr]]), lr = {}, ir = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function or(e, a) {
  return C(), $("svg", ir, a[0] || (a[0] = [
    D("path", {
      fill: "#536dfe",
      d: "M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"
    }, null, -1)
  ]));
}
const rr = /* @__PURE__ */ re(lr, [["render", or]]), sr = {}, _r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function ur(e, a) {
  return C(), $("svg", _r, a[0] || (a[0] = [
    Fa('<linearGradient id="k8yl7~hDat~FaoWq8WjN6a" x1="-1254.397" x2="-1261.911" y1="877.268" y2="899.466" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#114a8b"></stop><stop offset="1" stop-color="#0669bc"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6a)" d="M17.634,6h11.305L17.203,40.773c-0.247,0.733-0.934,1.226-1.708,1.226H6.697 c-0.994,0-1.8-0.806-1.8-1.8c0-0.196,0.032-0.39,0.094-0.576L15.926,7.227C16.173,6.494,16.86,6,17.634,6L17.634,6z"></path><path fill="#0078d4" d="M34.062,29.324H16.135c-0.458-0.001-0.83,0.371-0.831,0.829c0,0.231,0.095,0.451,0.264,0.608 l11.52,10.752C27.423,41.826,27.865,42,28.324,42h10.151L34.062,29.324z"></path><linearGradient id="k8yl7~hDat~FaoWq8WjN6b" x1="-1252.05" x2="-1253.788" y1="887.612" y2="888.2" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity=".3"></stop><stop offset=".071" stop-opacity=".2"></stop><stop offset=".321" stop-opacity=".1"></stop><stop offset=".623" stop-opacity=".05"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6b)" d="M17.634,6c-0.783-0.003-1.476,0.504-1.712,1.25L5.005,39.595 c-0.335,0.934,0.151,1.964,1.085,2.299C6.286,41.964,6.493,42,6.702,42h9.026c0.684-0.122,1.25-0.603,1.481-1.259l2.177-6.416 l7.776,7.253c0.326,0.27,0.735,0.419,1.158,0.422h10.114l-4.436-12.676l-12.931,0.003L28.98,6H17.634z"></path><linearGradient id="k8yl7~hDat~FaoWq8WjN6c" x1="-1252.952" x2="-1244.704" y1="876.6" y2="898.575" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3ccbf4"></stop><stop offset="1" stop-color="#2892df"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6c)" d="M32.074,7.225C31.827,6.493,31.141,6,30.368,6h-12.6c0.772,0,1.459,0.493,1.705,1.224 l10.935,32.399c0.318,0.942-0.188,1.963-1.13,2.281C29.093,41.968,28.899,42,28.703,42h12.6c0.994,0,1.8-0.806,1.8-1.801 c0-0.196-0.032-0.39-0.095-0.575L32.074,7.225z"></path>', 7)
  ]));
}
const dr = /* @__PURE__ */ re(sr, [["render", ur]]), cr = {}, pr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21",
  height: "21",
  viewBox: "0 0 256 256"
};
function mr(e, a) {
  return C(), $("svg", pr, a[0] || (a[0] = [
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
const fr = /* @__PURE__ */ re(cr, [["render", mr]]), br = {}, gr = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function hr(e, a) {
  return C(), $("svg", gr, a[0] || (a[0] = [
    D("path", {
      d: "M472.136 163.959H408.584C407.401 163.959 406.218 163.327 405.666 162.3L354.651 73.6591C354.02 72.632 352.916 72 351.654 72H143.492C142.309 72 141.126 72.632 140.574 73.6591L87.5084 165.618L36.414 254.259C35.862 255.286 35.862 256.55 36.414 257.656L87.5084 346.297L140.495 438.335C141.047 439.362 142.23 440.073 143.413 439.994H351.654C352.837 439.994 354.02 439.362 354.651 438.335L405.745 349.694C406.297 348.667 407.48 347.956 408.663 348.035H472.215C474.344 348.035 476 346.297 476 344.243V167.83C475.921 165.697 474.186 163.959 472.136 163.959ZM228.728 349.694L212.721 377.345C212.485 377.74 212.091 378.135 211.696 378.372C211.223 378.609 210.75 378.767 210.198 378.767H178.422C177.318 378.767 176.293 378.214 175.82 377.187L128.431 294.787L123.779 286.65L106.748 257.498C106.511 257.103 106.353 256.629 106.432 256.076C106.432 255.602 106.59 255.049 106.827 254.654L123.937 224.949L175.899 134.886C176.451 133.938 177.476 133.306 178.501 133.306H210.198C210.75 133.306 211.302 133.464 211.854 133.701C212.248 133.938 212.643 134.254 212.879 134.728L228.886 162.537C229.359 163.485 229.28 164.67 228.728 165.539L177.397 254.654C177.16 255.049 177.081 255.523 177.081 255.918C177.081 256.392 177.239 256.787 177.397 257.182L228.728 346.218C229.438 347.403 229.359 348.667 228.728 349.694V349.694ZM388.083 257.498L371.051 286.65L366.399 294.787L319.011 377.187C318.459 378.135 317.512 378.767 316.409 378.767H284.632C284.08 378.767 283.607 378.609 283.134 378.372C282.74 378.135 282.346 377.819 282.109 377.345L266.103 349.694C265.393 348.667 265.393 347.403 266.024 346.376L317.355 257.34C317.591 256.945 317.67 256.471 317.67 256.076C317.67 255.602 317.513 255.207 317.355 254.812L266.024 165.697C265.472 164.749 265.393 163.643 265.866 162.695L281.873 134.886C282.109 134.491 282.503 134.096 282.898 133.859C283.371 133.543 283.923 133.464 284.553 133.464H316.409C317.512 133.464 318.538 134.017 319.011 135.044L370.972 225.107L388.083 254.812C388.319 255.286 388.477 255.76 388.477 256.234C388.477 256.55 388.319 257.024 388.083 257.498V257.498Z",
      fill: "#008AAA"
    }, null, -1)
  ]));
}
const vr = /* @__PURE__ */ re(br, [["render", hr]]), wr = {}, kr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Er(e, a) {
  return C(), $("svg", kr, a[0] || (a[0] = [
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
const Tn = /* @__PURE__ */ re(wr, [["render", Er]]), yr = {}, Tr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px",
  "fill-rule": "evenodd",
  "clip-rule": "evenodd"
};
function Cr(e, a) {
  return C(), $("svg", Tr, a[0] || (a[0] = [
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
const Sr = /* @__PURE__ */ re(yr, [["render", Cr]]), xr = {}, Nr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Or(e, a) {
  return C(), $("svg", Nr, a[0] || (a[0] = [
    Fa('<path fill="#33d375" d="M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"></path><path fill="#33d375" d="M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"></path><path fill="#40c4ff" d="M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"></path><path fill="#40c4ff" d="M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"></path><path fill="#e91e63" d="M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"></path><path fill="#e91e63" d="M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"></path><path fill="#ffc107" d="M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"></path><path fill="#ffc107" d="M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"></path>', 8)
  ]));
}
const Lr = /* @__PURE__ */ re(xr, [["render", Or]]), Ir = {}, Ar = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Mr(e, a) {
  return C(), $("svg", Ar, a[0] || (a[0] = [
    D("path", {
      d: "M255.498 31.0034C131.513 31.0034 31 131.515 31 255.502C31 379.492 131.513 480 255.498 480C379.497 480 480 379.495 480 255.502C480 131.522 379.497 31.0135 255.495 31.0135L255.498 31V31.0034ZM358.453 354.798C354.432 361.391 345.801 363.486 339.204 359.435C286.496 327.237 220.139 319.947 141.993 337.801C134.463 339.516 126.957 334.798 125.24 327.264C123.516 319.731 128.217 312.225 135.767 310.511C221.284 290.972 294.639 299.384 353.816 335.549C360.413 339.596 362.504 348.2 358.453 354.798ZM385.932 293.67C380.864 301.903 370.088 304.503 361.858 299.438C301.512 262.345 209.528 251.602 138.151 273.272C128.893 276.067 119.118 270.851 116.309 261.61C113.521 252.353 118.74 242.597 127.981 239.782C209.512 215.044 310.87 227.026 380.17 269.612C388.4 274.68 391 285.456 385.935 293.676V293.673L385.932 293.67ZM388.293 230.016C315.935 187.039 196.56 183.089 127.479 204.055C116.387 207.42 104.654 201.159 101.293 190.063C97.9326 178.964 104.189 167.241 115.289 163.87C194.59 139.796 326.418 144.446 409.723 193.902C419.722 199.826 422.995 212.71 417.068 222.675C411.168 232.653 398.247 235.943 388.303 230.016H388.293V230.016Z",
      fill: "#1ED760"
    }, null, -1)
  ]));
}
const Pr = /* @__PURE__ */ re(Ir, [["render", Mr]]), Rr = {}, Dr = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function zr(e, a) {
  return C(), $("svg", Dr, a[0] || (a[0] = [
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
const Fr = /* @__PURE__ */ re(Rr, [["render", zr]]), $r = {}, Vr = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function jr(e, a) {
  return C(), $("svg", Vr, a[0] || (a[0] = [
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
const Ur = /* @__PURE__ */ re($r, [["render", jr]]), Br = {}, Wr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21",
  height: "21"
};
function Hr(e, a) {
  return C(), $("svg", Wr, a[0] || (a[0] = [
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
const Gr = /* @__PURE__ */ re(Br, [["render", Hr]]), Kr = /* @__PURE__ */ te({
  __name: "Icons",
  props: {
    name: {}
  },
  setup(e) {
    const a = {
      apple: jo,
      azure: dr,
      bitbucket: nr,
      discord: rr,
      facebook: Mo,
      figma: Ho,
      google: Oo,
      github: qo,
      gitlab: Qo,
      kakao: fr,
      keycloak: vr,
      linkedin: Tn,
      linkedin_oidc: Tn,
      notion: Sr,
      slack: Lr,
      spotify: Pr,
      twitch: Fr,
      twitter: zo,
      workos: Ur,
      zoom: Gr
    };
    return (t, n) => (C(), F(sa(a[t.name])));
  }
}), su = te({
  name: "UserContextProvider",
  props: {
    supabaseClient: {
      type: Object,
      required: !0
    }
  },
  setup({ supabaseClient: e }, { slots: a }) {
    const t = W(null), n = W(null);
    return qt(async () => {
      var s;
      const { data: l } = await e.auth.getSession();
      t.value = l.session, n.value = ((s = l.session) == null ? void 0 : s.user) ?? null;
      const { data: o } = e.auth.onAuthStateChange(
        async (u, r) => {
          t.value = r, n.value = (r == null ? void 0 : r.user) ?? null;
        }
      );
      return () => {
        o == null || o.subscription.unsubscribe();
      };
    }), Xn(mo, {
      session: t,
      user: n
    }), () => {
      var l;
      return Zt("div", null, (l = a == null ? void 0 : a.default) == null ? void 0 : l.call(a));
    };
  }
}), Qt = (e) => {
  const a = W(null), t = (n) => {
    n ? JSON.stringify(a.value) !== JSON.stringify(n.user) && (a.value = n.user) : a.value = null;
  };
  return e == null || e.auth.getSession().then(({ data: { session: n } }) => {
    n && t(n);
  }), qt(async () => {
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
    const a = e, { supabaseUser: t } = Qt(a.supabaseClient), n = W(""), l = W(!1), { authView: o } = da(Ge), s = K(() => a.socialLayout === "vertical"), u = K(() => o.value === "magic_link" ? "sign_in" : o.value), r = K(
      () => {
        var c;
        return (c = a.i18n) == null ? void 0 : c[u.value];
      }
    ), p = async (c) => {
      var w, T, h;
      n.value = "", l.value = !0;
      const d = (w = t.value) == null ? void 0 : w.is_anonymous, _ = {
        redirectTo: a.redirectTo,
        scopes: (T = a.providerScopes) == null ? void 0 : T[c],
        queryParams: a.queryParams
      };
      let b = null;
      if (d) {
        const { data: k, error: I } = await a.supabaseClient.auth.linkIdentity({
          provider: c,
          options: _
        });
        b = I;
      } else if (a.useOAuthPopup) {
        const { data: k, error: I } = await a.supabaseClient.auth.signInWithOAuth({
          provider: c,
          options: { ..._, skipBrowserRedirect: !0 }
        });
        if (b = I, !I && (k != null && k.url)) {
          const S = window.open(
            k.url,
            "supabase-oauth",
            a.popupWindowFeatures ?? "width=500,height=650"
          ), { data: P } = a.supabaseClient.auth.onAuthStateChange(
            (z) => {
              z === "SIGNED_IN" && (S == null || S.close(), P.subscription.unsubscribe(), clearInterval(A), l.value = !1);
            }
          ), A = setInterval(() => {
            S != null && S.closed && (clearInterval(A), P.subscription.unsubscribe(), l.value = !1);
          }, 500);
          return;
        }
      } else {
        const { data: k, error: I } = await a.supabaseClient.auth.signInWithOAuth({
          provider: c,
          options: _
        });
        b = I;
      }
      b && (n.value = He(b, (h = a.i18n) == null ? void 0 : h.errors)), l.value = !1;
    };
    function m(c) {
      const d = c.toLowerCase();
      return c.charAt(0).toUpperCase() + d.slice(1);
    }
    return (c, d) => c.providers && c.providers.length > 0 ? (C(), $(na, { key: 0 }, [
      B(y(xe), {
        gap: "large",
        direction: "vertical",
        appearance: c.appearance
      }, {
        default: M(() => [
          B(y(xe), {
            direction: s.value ? "vertical" : "horizontal",
            gap: s.value ? "small" : "medium",
            appearance: c.appearance
          }, {
            default: M(() => [
              (C(!0), $(na, null, Li(c.providers, (_) => (C(), F(y(ua), {
                key: _,
                color: "default",
                loading: l.value,
                onClick: ge(() => p(_), ["prevent"]),
                appearance: c.appearance
              }, {
                icon: M(() => [
                  B(y(Kr), { name: _ }, null, 8, ["name"])
                ]),
                default: M(() => {
                  var b, w;
                  return [
                    s.value ? (C(), $(na, { key: 0 }, [
                      j(U(y(Di)(
                        (w = (b = r.value) == null ? void 0 : b.social_provider_text) == null ? void 0 : w.replace("_oidc", ""),
                        {
                          provider: m(_.replace("_oidc", ""))
                        }
                      )), 1)
                    ], 64)) : Y("", !0)
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
      c.onlyThirdPartyProviders ? Y("", !0) : (C(), F(y(go), {
        key: 0,
        appearance: c.appearance
      }, null, 8, ["appearance"]))
    ], 64)) : Y("", !0);
  }
}), qr = ["id"], Zr = /* @__PURE__ */ te({
  __name: "MagicLink",
  props: {
    appearance: {},
    supabaseClient: {},
    redirectTo: {},
    showLinks: { type: Boolean },
    i18n: {}
  },
  setup(e) {
    const a = e, { supabaseUser: t } = Qt(a.supabaseClient), n = W(""), l = W(""), o = W(""), s = W(!1), { authView: u, setAuthView: r } = da(Ge), p = K(
      () => {
        var c;
        return (c = a.i18n) == null ? void 0 : c[u.value];
      }
    ), m = async (c) => {
      var b, w, T, h;
      l.value = "", o.value = "", s.value = !0;
      const d = (b = t.value) == null ? void 0 : b.is_anonymous;
      let _ = null;
      if (d) {
        const { error: k } = await a.supabaseClient.auth.updateUser(
          {
            email: n.value
          },
          {
            emailRedirectTo: a.redirectTo
          }
        );
        _ = k;
      } else {
        const { error: k } = await a.supabaseClient.auth.signInWithOtp({
          email: n.value,
          options: { emailRedirectTo: a.redirectTo }
        });
        _ = k;
      }
      _ ? l.value = He(_, (w = a.i18n) == null ? void 0 : w.errors) : o.value = (h = (T = a.i18n) == null ? void 0 : T.magic_link) == null ? void 0 : h.confirmation_text, s.value = !1;
    };
    return (c, d) => (C(), $("form", {
      id: `auth-${y(u)}`,
      onSubmit: ge(m, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      B(y(xe), {
        direction: "vertical",
        gap: "large",
        appearance: c.appearance
      }, {
        default: M(() => [
          B(y(xe), {
            direction: "vertical",
            gap: "large",
            appearance: c.appearance
          }, {
            default: M(() => {
              var _;
              return [
                D("div", null, [
                  B(y(Ue), {
                    htmlFor: "email",
                    appearance: c.appearance
                  }, {
                    default: M(() => {
                      var b;
                      return [
                        j(U((b = p.value) == null ? void 0 : b.email_input_label), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["appearance"]),
                  B(y(je), {
                    id: "email",
                    type: "email",
                    name: "email",
                    autoComplete: "email",
                    autofocus: "",
                    placeholder: (_ = p.value) == null ? void 0 : _.email_input_placeholder,
                    appearance: c.appearance,
                    modelValue: n.value,
                    "onUpdate:modelValue": d[0] || (d[0] = (b) => n.value = b)
                  }, null, 8, ["placeholder", "appearance", "modelValue"])
                ])
              ];
            }),
            _: 1
          }, 8, ["appearance"]),
          B(y(ua), {
            type: "submit",
            color: "primary",
            loading: s.value,
            appearance: c.appearance
          }, {
            default: M(() => {
              var _, b;
              return [
                j(U(s.value ? (_ = p.value) == null ? void 0 : _.loading_button_label : (b = p.value) == null ? void 0 : b.button_label), 1)
              ];
            }),
            _: 1
          }, 8, ["loading", "appearance"]),
          c.showLinks ? (C(), F(y(ta), {
            key: 0,
            href: "#auth-sign-in",
            appearance: c.appearance,
            onClick: d[1] || (d[1] = ge((_) => y(r)(y(fe).SIGN_IN), ["prevent"]))
          }, {
            default: M(() => {
              var _, b;
              return [
                j(U((b = (_ = c.i18n) == null ? void 0 : _.sign_in) == null ? void 0 : b.link_text), 1)
              ];
            }),
            _: 1
          }, 8, ["appearance"])) : Y("", !0)
        ]),
        _: 1
      }, 8, ["appearance"]),
      o.value ? (C(), F(y(Se), {
        key: 0,
        appearance: c.appearance
      }, {
        default: M(() => [
          j(U(o.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0),
      l.value ? (C(), F(y(Se), {
        key: 1,
        color: "danger",
        appearance: c.appearance
      }, {
        default: M(() => [
          j(U(l.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0)
    ], 40, qr));
  }
}), Jr = ["id"], Xr = /* @__PURE__ */ te({
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
    const a = e, t = W(""), n = W(""), l = W(""), o = W(!1), { authView: s, setAuthView: u } = da(Ge), r = K(
      () => {
        var m;
        return (m = a.i18n) == null ? void 0 : m[s.value];
      }
    ), p = async (m) => {
      var d, _, b, w;
      n.value = "", l.value = "", o.value = !0;
      const { error: c } = await a.supabaseClient.auth.resetPasswordForEmail(t.value, {
        redirectTo: a.redirectTo,
        captchaToken: (d = a.options) == null ? void 0 : d.captchaToken
      });
      c ? n.value = He(c, (_ = a.i18n) == null ? void 0 : _.errors) : l.value = (w = (b = a.i18n) == null ? void 0 : b.forgotten_password) == null ? void 0 : w.confirmation_text, o.value = !1;
    };
    return (m, c) => (C(), $("form", {
      id: `auth-${y(s)}`,
      onSubmit: ge(p, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      B(y(xe), {
        direction: "vertical",
        gap: "large",
        appearance: m.appearance
      }, {
        default: M(() => {
          var d;
          return [
            D("div", null, [
              B(y(Ue), {
                htmlFor: "email",
                appearance: m.appearance
              }, {
                default: M(() => {
                  var _;
                  return [
                    j(U((_ = r.value) == null ? void 0 : _.email_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              B(y(je), {
                id: "email",
                type: "email",
                name: "email",
                autoComplete: "email",
                autofocus: "",
                placeholder: (d = r.value) == null ? void 0 : d.email_input_placeholder,
                appearance: m.appearance,
                modelValue: t.value,
                "onUpdate:modelValue": c[0] || (c[0] = (_) => t.value = _)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ]),
            B(y(ua), {
              type: "submit",
              color: "primary",
              loading: o.value,
              appearance: m.appearance
            }, {
              default: M(() => {
                var _, b;
                return [
                  j(U(o.value ? (_ = r.value) == null ? void 0 : _.loading_button_label : (b = r.value) == null ? void 0 : b.button_label), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "appearance"]),
            m.showLinks ? (C(), F(y(ta), {
              key: 0,
              href: "#auth-sign-in",
              appearance: m.appearance,
              onClick: c[1] || (c[1] = ge((_) => y(u)(y(fe).SIGN_IN), ["prevent"]))
            }, {
              default: M(() => {
                var _, b;
                return [
                  j(U((b = (_ = m.i18n) == null ? void 0 : _.sign_in) == null ? void 0 : b.link_text), 1)
                ];
              }),
              _: 1
            }, 8, ["appearance"])) : Y("", !0)
          ];
        }),
        _: 1
      }, 8, ["appearance"]),
      l.value ? (C(), F(y(Se), {
        key: 0,
        appearance: m.appearance
      }, {
        default: M(() => [
          j(U(l.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0),
      n.value ? (C(), F(y(Se), {
        key: 1,
        color: "danger",
        appearance: m.appearance
      }, {
        default: M(() => [
          j(U(n.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0)
    ], 40, Jr));
  }
}), Qr = ["id"], es = /* @__PURE__ */ te({
  __name: "UpdatePassword",
  props: {
    appearance: {},
    supabaseClient: {},
    i18n: {}
  },
  setup(e) {
    const a = e, t = W(""), n = W(""), l = W(""), o = W(!1), { authView: s } = da(Ge), u = K(
      () => {
        var p;
        return (p = a.i18n) == null ? void 0 : p[s.value];
      }
    ), r = async (p) => {
      var c, d, _;
      n.value = "", l.value = "", o.value = !0;
      const { error: m } = await a.supabaseClient.auth.updateUser({
        password: t.value
      });
      m ? n.value = He(m, (c = a.i18n) == null ? void 0 : c.errors) : l.value = (_ = (d = a.i18n) == null ? void 0 : d.update_password) == null ? void 0 : _.confirmation_text, o.value = !1;
    };
    return (p, m) => (C(), $("form", {
      id: `auth-${y(s)}`,
      onSubmit: ge(r, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      B(y(xe), {
        direction: "vertical",
        gap: "large",
        appearance: p.appearance
      }, {
        default: M(() => {
          var c, d, _;
          return [
            D("div", null, [
              B(y(Ue), {
                htmlFor: "password_label",
                appearance: p.appearance
              }, {
                default: M(() => {
                  var b;
                  return [
                    j(U((b = u.value) == null ? void 0 : b.password_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              B(y(je), {
                id: "password",
                type: "password",
                name: "password",
                autofocus: "",
                placeholder: (c = u.value) == null ? void 0 : c.password_input_placeholder,
                appearance: p.appearance,
                modelValue: t.value,
                "onUpdate:modelValue": m[0] || (m[0] = (b) => t.value = b),
                showLabel: (d = p.i18n) == null ? void 0 : d.password_show,
                hideLabel: (_ = p.i18n) == null ? void 0 : _.password_hide
              }, null, 8, ["placeholder", "appearance", "modelValue", "showLabel", "hideLabel"])
            ]),
            B(y(ua), {
              type: "submit",
              color: "primary",
              loading: o.value,
              appearance: p.appearance
            }, {
              default: M(() => {
                var b, w;
                return [
                  j(U(o.value ? (b = u.value) == null ? void 0 : b.loading_button_label : (w = u.value) == null ? void 0 : w.button_label), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "appearance"])
          ];
        }),
        _: 1
      }, 8, ["appearance"]),
      l.value ? (C(), F(y(Se), {
        key: 0,
        appearance: p.appearance
      }, {
        default: M(() => [
          j(U(l.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0),
      n.value ? (C(), F(y(Se), {
        key: 1,
        color: "danger",
        appearance: p.appearance
      }, {
        default: M(() => [
          j(U(n.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0)
    ], 40, Qr));
  }
}), as = ["id"], ts = { key: 0 }, ns = { key: 1 }, ls = /* @__PURE__ */ te({
  __name: "VerifyOtp",
  props: {
    appearance: {},
    supabaseClient: {},
    otpType: { default: "email" },
    showLinks: { type: Boolean, default: !1 },
    i18n: {}
  },
  setup(e) {
    const a = e, t = W(""), n = W(""), l = W(""), o = W(""), s = W(""), u = W(!1), { authView: r, setAuthView: p } = da(Ge), m = K(
      () => {
        var d;
        return (d = a.i18n) == null ? void 0 : d[r.value];
      }
    ), c = async (d) => {
      var w, T, h;
      o.value = "", s.value = "", u.value = !0;
      let _ = {
        email: t.value,
        token: l.value,
        type: a.otpType
      };
      ["sms", "phone_change"].includes(a.otpType) && (_ = {
        phone: n.value,
        token: l.value,
        type: a.otpType
      });
      const { error: b } = await a.supabaseClient.auth.verifyOtp(
        _
      );
      b ? o.value = He(b, (w = a.i18n) == null ? void 0 : w.errors) : s.value = (h = (T = a.i18n) == null ? void 0 : T.magic_link) == null ? void 0 : h.confirmation_text, u.value = !1;
    };
    return (d, _) => (C(), $("form", {
      id: `auth-${y(r)}`,
      onSubmit: ge(c, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      B(y(xe), {
        direction: "vertical",
        gap: "large",
        appearance: d.appearance
      }, {
        default: M(() => {
          var b, w, T;
          return [
            ["sms", "phone_change"].includes(d.otpType) ? (C(), $("div", ts, [
              B(y(Ue), {
                htmlFor: "phone",
                appearance: d.appearance
              }, {
                default: M(() => {
                  var h;
                  return [
                    j(U((h = m.value) == null ? void 0 : h.phone_input_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              B(y(je), {
                id: "phone",
                name: "phone",
                type: "text",
                autofocus: "",
                placeholder: (b = m.value) == null ? void 0 : b.phone_input_placeholder,
                appearance: d.appearance,
                modelValue: n.value,
                "onUpdate:modelValue": _[0] || (_[0] = (h) => n.value = h)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ])) : (C(), $("div", ns, [
              B(y(Ue), {
                htmlFor: "email",
                appearance: d.appearance
              }, {
                default: M(() => {
                  var h;
                  return [
                    j(U((h = m.value) == null ? void 0 : h.email_input_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              B(y(je), {
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                autofocus: "",
                placeholder: (w = m.value) == null ? void 0 : w.email_input_placeholder,
                appearance: d.appearance,
                modelValue: t.value,
                "onUpdate:modelValue": _[1] || (_[1] = (h) => t.value = h)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ])),
            D("div", null, [
              B(y(Ue), {
                htmlFor: "token",
                appearance: d.appearance
              }, {
                default: M(() => {
                  var h;
                  return [
                    j(U((h = m.value) == null ? void 0 : h.token_input_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              B(y(je), {
                id: "token",
                name: "token",
                type: "text",
                autofocus: "",
                placeholder: (T = m.value) == null ? void 0 : T.token_input_placeholder,
                appearance: d.appearance,
                modelValue: l.value,
                "onUpdate:modelValue": _[2] || (_[2] = (h) => l.value = h)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ]),
            B(y(ua), {
              type: "submit",
              color: "primary",
              loading: u.value,
              appearance: d.appearance
            }, {
              default: M(() => {
                var h, k;
                return [
                  j(U(u.value ? (h = m.value) == null ? void 0 : h.loading_button_label : (k = m.value) == null ? void 0 : k.button_label), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "appearance"]),
            d.showLinks ? (C(), F(y(ta), {
              key: 2,
              href: "#auth-sign-in",
              appearance: d.appearance,
              onClick: _[3] || (_[3] = ge((h) => y(p)(y(fe).SIGN_IN), ["prevent"]))
            }, {
              default: M(() => {
                var h, k;
                return [
                  j(U((k = (h = d.i18n) == null ? void 0 : h.sign_in) == null ? void 0 : k.link_text), 1)
                ];
              }),
              _: 1
            }, 8, ["appearance"])) : Y("", !0)
          ];
        }),
        _: 1
      }, 8, ["appearance"]),
      s.value ? (C(), F(y(Se), {
        key: 0,
        appearance: d.appearance
      }, {
        default: M(() => [
          j(U(s.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0),
      o.value ? (C(), F(y(Se), {
        key: 1,
        color: "danger",
        appearance: d.appearance
      }, {
        default: M(() => [
          j(U(o.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0)
    ], 40, as));
  }
}), is = ["id"], os = /* @__PURE__ */ te({
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
    const t = W(""), n = W(""), l = W(!1), { authView: o, setAuthView: s } = da(Ge), u = K(
      () => {
        var p;
        return (p = a.i18n) == null ? void 0 : p[o.value];
      }
    ), r = async (p) => {
      var _;
      t.value = "", n.value = "", l.value = !0;
      let m = null;
      const { data: c, error: d } = await a.supabaseClient.auth.signInAnonymously(
        a.anonymouslyCredentials
      );
      m = d, m && (t.value = He(m, (_ = a.i18n) == null ? void 0 : _.errors)), l.value = !1;
    };
    return (p, m) => (C(), $("form", {
      id: `auth-${y(o)}`,
      onSubmit: ge(r, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      B(y(xe), {
        direction: "vertical",
        gap: "large",
        appearance: p.appearance
      }, {
        default: M(() => [
          B(y(ua), {
            type: "submit",
            color: "primary",
            loading: l.value,
            appearance: p.appearance
          }, {
            default: M(() => {
              var c, d;
              return [
                j(U(l.value ? (c = u.value) == null ? void 0 : c.loading_button_label : (d = u.value) == null ? void 0 : d.button_label), 1)
              ];
            }),
            _: 1
          }, 8, ["loading", "appearance"])
        ]),
        _: 1
      }, 8, ["appearance"]),
      n.value ? (C(), F(y(Se), {
        key: 0,
        appearance: p.appearance
      }, {
        default: M(() => [
          j(U(n.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0),
      t.value ? (C(), F(y(Se), {
        key: 1,
        color: "danger",
        appearance: p.appearance
      }, {
        default: M(() => [
          j(U(t.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0)
    ], 40, is));
  }
});
/*!
  * shared v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Fe = typeof window < "u";
let ke, ia;
if (process.env.NODE_ENV !== "production") {
  const e = Fe && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (ke = (a) => {
    e.mark(a);
  }, ia = (a, t, n) => {
    e.measure(a, t, n), e.clearMarks(t), e.clearMarks(n);
  });
}
const rs = /\{([0-9a-zA-Z]+)\}/g;
function al(e, ...a) {
  return a.length === 1 && H(a[0]) && (a = a[0]), (!a || !a.hasOwnProperty) && (a = {}), e.replace(rs, (t, n) => a.hasOwnProperty(n) ? a[n] : "");
}
const $e = (e, a = !1) => a ? Symbol.for(e) : Symbol(e), ss = (e, a, t) => _s({ l: e, k: a, s: t }), _s = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), de = (e) => typeof e == "number" && isFinite(e), us = (e) => nl(e) === "[object Date]", nt = (e) => nl(e) === "[object RegExp]", st = (e) => G(e) && Object.keys(e).length === 0, ce = Object.assign;
let Cn;
const Pa = () => Cn || (Cn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Sn(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const ds = Object.prototype.hasOwnProperty;
function lt(e, a) {
  return ds.call(e, a);
}
const oe = Array.isArray, Q = (e) => typeof e == "function", L = (e) => typeof e == "string", ie = (e) => typeof e == "boolean", H = (e) => e !== null && typeof e == "object", cs = (e) => H(e) && Q(e.then) && Q(e.catch), tl = Object.prototype.toString, nl = (e) => tl.call(e), G = (e) => {
  if (!H(e))
    return !1;
  const a = Object.getPrototypeOf(e);
  return a === null || a.constructor === Object;
}, ps = (e) => e == null ? "" : oe(e) || G(e) && e.toString === tl ? JSON.stringify(e, null, 2) : String(e);
function ms(e, a = "") {
  return e.reduce((t, n, l) => l === 0 ? t + n : t + a + n, "");
}
const xn = 2;
function fs(e, a = 0, t = e.length) {
  const n = e.split(/\r?\n/);
  let l = 0;
  const o = [];
  for (let s = 0; s < n.length; s++)
    if (l += n[s].length + 1, l >= a) {
      for (let u = s - xn; u <= s + xn || t > l; u++) {
        if (u < 0 || u >= n.length)
          continue;
        const r = u + 1;
        o.push(`${r}${" ".repeat(3 - String(r).length)}|  ${n[u]}`);
        const p = n[u].length;
        if (u === s) {
          const m = a - (l - p) + 1, c = Math.max(1, t > l ? p - m : t - a);
          o.push("   |  " + " ".repeat(m) + "^".repeat(c));
        } else if (u > s) {
          if (t > l) {
            const m = Math.max(Math.min(t - l, p), 1);
            o.push("   |  " + "^".repeat(m));
          }
          l += p + 1;
        }
      }
      break;
    }
  return o.join(`
`);
}
function _t(e) {
  let a = e;
  return () => ++a;
}
function Ea(e, a) {
  typeof console < "u" && (console.warn("[intlify] " + e), a && console.warn(a.stack));
}
const Nn = {};
function ll(e) {
  Nn[e] || (Nn[e] = !0, Ea(e));
}
function bs() {
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
const gs = /\{([0-9a-zA-Z]+)\}/g;
function hs(e, ...a) {
  return a.length === 1 && vs(a[0]) && (a = a[0]), (!a || !a.hasOwnProperty) && (a = {}), e.replace(gs, (t, n) => a.hasOwnProperty(n) ? a[n] : "");
}
const vs = (e) => e !== null && typeof e == "object", ws = {
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
}, ks = {
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
function il(e, a, t = {}) {
  const { domain: n, messages: l, args: o } = t, s = hs((l || ks)[e] || "", ...o || []), u = new SyntaxError(String(s));
  return u.code = e, a && (u.location = a), u.domain = n, u;
}
/*!
  * core-base v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Es() {
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
const ys = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Ts(e) {
  return ys.test(e);
}
function Cs(e) {
  const a = e.charCodeAt(0), t = e.charCodeAt(e.length - 1);
  return a === t && (a === 34 || a === 39) ? e.slice(1, -1) : e;
}
function Ss(e) {
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
function xs(e) {
  const a = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Ts(a) ? Cs(a) : "*" + a;
}
function Ns(e) {
  const a = [];
  let t = -1, n = 0, l = 0, o, s, u, r, p, m, c;
  const d = [];
  d[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = u : s += u;
  }, d[
    1
    /* Actions.PUSH */
  ] = () => {
    s !== void 0 && (a.push(s), s = void 0);
  }, d[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    d[
      0
      /* Actions.APPEND */
    ](), l++;
  }, d[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (l > 0)
      l--, n = 4, d[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (l = 0, s === void 0 || (s = xs(s), s === !1))
        return !1;
      d[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function _() {
    const b = e[t + 1];
    if (n === 5 && b === "'" || n === 6 && b === '"')
      return t++, u = "\\" + b, d[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; n !== null; )
    if (t++, o = e[t], !(o === "\\" && _())) {
      if (r = Ss(o), c = Ke[n], p = c[r] || c.l || 8, p === 8 || (n = p[0], p[1] !== void 0 && (m = d[p[1]], m && (u = o, m() === !1))))
        return;
      if (n === 7)
        return a;
    }
}
const On = /* @__PURE__ */ new Map();
function Os(e, a) {
  return H(e) ? e[a] : null;
}
function Ls(e, a) {
  if (!H(e))
    return null;
  let t = On.get(a);
  if (t || (t = Ns(a), t && On.set(a, t)), !t)
    return null;
  const n = t.length;
  let l = e, o = 0;
  for (; o < n; ) {
    const s = l[t[o]];
    if (s === void 0 || Q(l))
      return null;
    l = s, o++;
  }
  return l;
}
const Is = (e) => e, As = (e) => "", Ms = "text", Ps = (e) => e.length === 0 ? "" : ms(e), Rs = ps;
function Ln(e, a) {
  return e = Math.abs(e), a === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Ds(e) {
  const a = de(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (de(e.named.count) || de(e.named.n)) ? de(e.named.count) ? e.named.count : de(e.named.n) ? e.named.n : a : a;
}
function zs(e, a) {
  a.count || (a.count = e), a.n || (a.n = e);
}
function Fs(e = {}) {
  const a = e.locale, t = Ds(e), n = H(e.pluralRules) && L(a) && Q(e.pluralRules[a]) ? e.pluralRules[a] : Ln, l = H(e.pluralRules) && L(a) && Q(e.pluralRules[a]) ? Ln : void 0, o = (h) => h[n(t, h.length, l)], s = e.list || [], u = (h) => s[h], r = e.named || {};
  de(e.pluralIndex) && zs(t, r);
  const p = (h) => r[h];
  function m(h) {
    const k = Q(e.messages) ? e.messages(h) : H(e.messages) ? e.messages[h] : !1;
    return k || (e.parent ? e.parent.message(h) : As);
  }
  const c = (h) => e.modifiers ? e.modifiers[h] : Is, d = G(e.processor) && Q(e.processor.normalize) ? e.processor.normalize : Ps, _ = G(e.processor) && Q(e.processor.interpolate) ? e.processor.interpolate : Rs, b = G(e.processor) && L(e.processor.type) ? e.processor.type : Ms, T = {
    list: u,
    named: p,
    plural: o,
    linked: (h, ...k) => {
      const [I, S] = k;
      let P = "text", A = "";
      k.length === 1 ? H(I) ? (A = I.modifier || A, P = I.type || P) : L(I) && (A = I || A) : k.length === 2 && (L(I) && (A = I || A), L(S) && (P = S || P));
      const z = m(h)(T), R = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        P === "vnode" && oe(z) && A ? z[0] : z
      );
      return A ? c(A)(R, P) : R;
    },
    message: m,
    type: b,
    interpolate: _,
    normalize: d,
    values: ce({}, s, r)
  };
  return T;
}
let Ra = null;
function $s(e) {
  Ra = e;
}
function Vs(e, a, t) {
  Ra && Ra.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: a,
    meta: t
  });
}
const js = /* @__PURE__ */ Us(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function Us(e) {
  return (a) => Ra && Ra.emit(e, a);
}
const ol = ws.__EXTEND_POINT__, ea = _t(ol), be = {
  NOT_FOUND_KEY: ol,
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
}, Bs = {
  [be.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [be.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [be.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [be.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [be.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [be.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [be.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function oa(e, ...a) {
  return al(Bs[e], ...a);
}
const rl = _e.__EXTEND_POINT__, aa = _t(rl), ue = {
  INVALID_ARGUMENT: rl,
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
function De(e) {
  return il(e, null, process.env.NODE_ENV !== "production" ? { messages: Ws } : void 0);
}
const Ws = {
  [ue.INVALID_ARGUMENT]: "Invalid arguments",
  [ue.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [ue.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [ue.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [ue.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [ue.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [ue.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function en(e, a) {
  return a.locale != null ? In(a.locale) : In(e.locale);
}
let Pt;
function In(e) {
  if (L(e))
    return e;
  if (Q(e)) {
    if (e.resolvedOnce && Pt != null)
      return Pt;
    if (e.constructor.name === "Function") {
      const a = e();
      if (cs(a))
        throw De(ue.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Pt = a;
    } else
      throw De(ue.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw De(ue.NOT_SUPPORT_LOCALE_TYPE);
}
function Hs(e, a, t) {
  return [.../* @__PURE__ */ new Set([
    t,
    ...oe(a) ? a : H(a) ? Object.keys(a) : L(a) ? [a] : [t]
  ])];
}
function sl(e, a, t) {
  const n = L(t) ? t : it, l = e;
  l.__localeChainCache || (l.__localeChainCache = /* @__PURE__ */ new Map());
  let o = l.__localeChainCache.get(n);
  if (!o) {
    o = [];
    let s = [t];
    for (; oe(s); )
      s = An(o, s, a);
    const u = oe(a) || !G(a) ? a : a.default ? a.default : null;
    s = L(u) ? [u] : u, oe(s) && An(o, s, !1), l.__localeChainCache.set(n, o);
  }
  return o;
}
function An(e, a, t) {
  let n = !0;
  for (let l = 0; l < a.length && ie(n); l++) {
    const o = a[l];
    L(o) && (n = Gs(e, a[l], t));
  }
  return n;
}
function Gs(e, a, t) {
  let n;
  const l = a.split("-");
  do {
    const o = l.join("-");
    n = Ks(e, o, t), l.splice(-1, 1);
  } while (l.length && n === !0);
  return n;
}
function Ks(e, a, t) {
  let n = !1;
  if (!e.includes(a) && (n = !0, a)) {
    n = a[a.length - 1] !== "!";
    const l = a.replace(/!/g, "");
    e.push(l), (oe(t) || G(t)) && t[l] && (n = t[l]);
  }
  return n;
}
const Ys = "9.14.1", ut = -1, it = "en-US", ot = "", Mn = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function qs() {
  return {
    upper: (e, a) => a === "text" && L(e) ? e.toUpperCase() : a === "vnode" && H(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, a) => a === "text" && L(e) ? e.toLowerCase() : a === "vnode" && H(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, a) => a === "text" && L(e) ? Mn(e) : a === "vnode" && H(e) && "__v_isVNode" in e ? Mn(e.children) : e
  };
}
let Zs, _l;
function Js(e) {
  _l = e;
}
let ul;
function Xs(e) {
  ul = e;
}
let dl = null;
const Qs = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  dl = e;
}, e_ = /* @__NO_SIDE_EFFECTS__ */ () => dl;
let cl = null;
const Pn = (e) => {
  cl = e;
}, a_ = () => cl;
let Rn = 0;
function t_(e = {}) {
  const a = Q(e.onWarn) ? e.onWarn : Ea, t = L(e.version) ? e.version : Ys, n = L(e.locale) || Q(e.locale) ? e.locale : it, l = Q(n) ? it : n, o = oe(e.fallbackLocale) || G(e.fallbackLocale) || L(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l, s = G(e.messages) ? e.messages : { [l]: {} }, u = G(e.datetimeFormats) ? e.datetimeFormats : { [l]: {} }, r = G(e.numberFormats) ? e.numberFormats : { [l]: {} }, p = ce({}, e.modifiers || {}, qs()), m = e.pluralRules || {}, c = Q(e.missing) ? e.missing : null, d = ie(e.missingWarn) || nt(e.missingWarn) ? e.missingWarn : !0, _ = ie(e.fallbackWarn) || nt(e.fallbackWarn) ? e.fallbackWarn : !0, b = !!e.fallbackFormat, w = !!e.unresolving, T = Q(e.postTranslation) ? e.postTranslation : null, h = G(e.processor) ? e.processor : null, k = ie(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, I = !!e.escapeParameter, S = Q(e.messageCompiler) ? e.messageCompiler : Zs;
  process.env.NODE_ENV !== "production" && Q(e.messageCompiler) && ll(oa(be.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const P = Q(e.messageResolver) ? e.messageResolver : _l || Os, A = Q(e.localeFallbacker) ? e.localeFallbacker : ul || Hs, z = H(e.fallbackContext) ? e.fallbackContext : void 0, R = e, x = H(R.__datetimeFormatters) ? R.__datetimeFormatters : /* @__PURE__ */ new Map(), J = H(R.__numberFormatters) ? R.__numberFormatters : /* @__PURE__ */ new Map(), ne = H(R.__meta) ? R.__meta : {};
  Rn++;
  const ee = {
    version: t,
    cid: Rn,
    locale: n,
    fallbackLocale: o,
    messages: s,
    modifiers: p,
    pluralRules: m,
    missing: c,
    missingWarn: d,
    fallbackWarn: _,
    fallbackFormat: b,
    unresolving: w,
    postTranslation: T,
    processor: h,
    warnHtmlMessage: k,
    escapeParameter: I,
    messageCompiler: S,
    messageResolver: P,
    localeFallbacker: A,
    fallbackContext: z,
    onWarn: a,
    __meta: ne
  };
  return ee.datetimeFormats = u, ee.numberFormats = r, ee.__datetimeFormatters = x, ee.__numberFormatters = J, process.env.NODE_ENV !== "production" && (ee.__v_emitter = R.__v_emitter != null ? R.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Vs(ee, t, ne), ee;
}
function dt(e, a) {
  return e instanceof RegExp ? e.test(a) : e;
}
function pl(e, a) {
  return e instanceof RegExp ? e.test(a) : e;
}
function an(e, a, t, n, l) {
  const { missing: o, onWarn: s } = e;
  if (process.env.NODE_ENV !== "production") {
    const u = e.__v_emitter;
    u && u.emit("missing", {
      locale: t,
      key: a,
      type: l,
      groupId: `${l}:${a}`
    });
  }
  if (o !== null) {
    const u = o(e, t, a, l);
    return L(u) ? u : a;
  } else
    return process.env.NODE_ENV !== "production" && pl(n, a) && s(oa(be.NOT_FOUND_KEY, { key: a, locale: t })), a;
}
function Ia(e, a, t) {
  const n = e;
  n.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, t, a);
}
function ml(e, a) {
  return e === a ? !1 : e.split("-")[0] === a.split("-")[0];
}
function n_(e, a) {
  const t = a.indexOf(e);
  if (t === -1)
    return !1;
  for (let n = t + 1; n < a.length; n++)
    if (ml(e, a[n]))
      return !0;
  return !1;
}
const ka = (e) => H(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e), Dn = () => "", Ce = (e) => Q(e);
function zn(e, ...a) {
  const { fallbackFormat: t, postTranslation: n, unresolving: l, messageCompiler: o, fallbackLocale: s, messages: u } = e, [r, p] = Vt(...a), m = ie(p.missingWarn) ? p.missingWarn : e.missingWarn, c = ie(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, d = ie(p.escapeParameter) ? p.escapeParameter : e.escapeParameter, _ = !!p.resolvedMessage, b = L(p.default) || ie(p.default) ? ie(p.default) ? o ? r : () => r : p.default : t ? o ? r : () => r : "", w = t || b !== "", T = en(e, p);
  d && l_(p);
  let [h, k, I] = _ ? [
    r,
    T,
    u[T] || {}
  ] : fl(e, r, T, s, c, m), S = h, P = r;
  if (!_ && !(L(S) || ka(S) || Ce(S)) && w && (S = b, P = S), !_ && (!(L(S) || ka(S) || Ce(S)) || !L(k)))
    return l ? ut : r;
  if (process.env.NODE_ENV !== "production" && L(S) && e.messageCompiler == null)
    return Ea(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${r}'.`), r;
  let A = !1;
  const z = () => {
    A = !0;
  }, R = Ce(S) ? S : bl(e, r, k, S, P, z);
  if (A)
    return S;
  const x = s_(e, k, I, p), J = Fs(x), ne = i_(e, R, J), ee = n ? n(ne, r) : ne;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const Ee = {
      timestamp: Date.now(),
      key: L(r) ? r : Ce(S) ? S.key : "",
      locale: k || (Ce(S) ? S.locale : ""),
      format: L(S) ? S : Ce(S) ? S.source : "",
      message: ee
    };
    Ee.meta = ce({}, e.__meta, /* @__PURE__ */ e_() || {}), js(Ee);
  }
  return ee;
}
function l_(e) {
  oe(e.list) ? e.list = e.list.map((a) => L(a) ? Sn(a) : a) : H(e.named) && Object.keys(e.named).forEach((a) => {
    L(e.named[a]) && (e.named[a] = Sn(e.named[a]));
  });
}
function fl(e, a, t, n, l, o) {
  const { messages: s, onWarn: u, messageResolver: r, localeFallbacker: p } = e, m = p(e, n, t);
  let c = {}, d, _ = null, b = t, w = null;
  const T = "translate";
  for (let h = 0; h < m.length; h++) {
    if (d = w = m[h], process.env.NODE_ENV !== "production" && t !== d && !ml(t, d) && dt(l, a) && u(oa(be.FALLBACK_TO_TRANSLATE, {
      key: a,
      target: d
    })), process.env.NODE_ENV !== "production" && t !== d) {
      const P = e.__v_emitter;
      P && P.emit("fallback", {
        type: T,
        key: a,
        from: b,
        to: w,
        groupId: `${T}:${a}`
      });
    }
    c = s[d] || {};
    let k = null, I, S;
    if (process.env.NODE_ENV !== "production" && Fe && (k = window.performance.now(), I = "intlify-message-resolve-start", S = "intlify-message-resolve-end", ke && ke(I)), (_ = r(c, a)) === null && (_ = c[a]), process.env.NODE_ENV !== "production" && Fe) {
      const P = window.performance.now(), A = e.__v_emitter;
      A && k && _ && A.emit("message-resolve", {
        type: "message-resolve",
        key: a,
        message: _,
        time: P - k,
        groupId: `${T}:${a}`
      }), I && S && ke && ia && (ke(S), ia("intlify message resolve", I, S));
    }
    if (L(_) || ka(_) || Ce(_))
      break;
    if (!n_(d, m)) {
      const P = an(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        a,
        d,
        o,
        T
      );
      P !== a && (_ = P);
    }
    b = w;
  }
  return [_, d, c];
}
function bl(e, a, t, n, l, o) {
  const { messageCompiler: s, warnHtmlMessage: u } = e;
  if (Ce(n)) {
    const d = n;
    return d.locale = d.locale || t, d.key = d.key || a, d;
  }
  if (s == null) {
    const d = () => n;
    return d.locale = t, d.key = a, d;
  }
  let r = null, p, m;
  process.env.NODE_ENV !== "production" && Fe && (r = window.performance.now(), p = "intlify-message-compilation-start", m = "intlify-message-compilation-end", ke && ke(p));
  const c = s(n, o_(e, t, l, n, u, o));
  if (process.env.NODE_ENV !== "production" && Fe) {
    const d = window.performance.now(), _ = e.__v_emitter;
    _ && r && _.emit("message-compilation", {
      type: "message-compilation",
      message: n,
      time: d - r,
      groupId: `translate:${a}`
    }), p && m && ke && ia && (ke(m), ia("intlify message compilation", p, m));
  }
  return c.locale = t, c.key = a, c.source = n, c;
}
function i_(e, a, t) {
  let n = null, l, o;
  process.env.NODE_ENV !== "production" && Fe && (n = window.performance.now(), l = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", ke && ke(l));
  const s = a(t);
  if (process.env.NODE_ENV !== "production" && Fe) {
    const u = window.performance.now(), r = e.__v_emitter;
    r && n && r.emit("message-evaluation", {
      type: "message-evaluation",
      value: s,
      time: u - n,
      groupId: `translate:${a.key}`
    }), l && o && ke && ia && (ke(o), ia("intlify message evaluation", l, o));
  }
  return s;
}
function Vt(...e) {
  const [a, t, n] = e, l = {};
  if (!L(a) && !de(a) && !Ce(a) && !ka(a))
    throw De(ue.INVALID_ARGUMENT);
  const o = de(a) ? String(a) : (Ce(a), a);
  return de(t) ? l.plural = t : L(t) ? l.default = t : G(t) && !st(t) ? l.named = t : oe(t) && (l.list = t), de(n) ? l.plural = n : L(n) ? l.default = n : G(n) && ce(l, n), [o, l];
}
function o_(e, a, t, n, l, o) {
  return {
    locale: a,
    key: t,
    warnHtmlMessage: l,
    onError: (s) => {
      if (o && o(s), process.env.NODE_ENV !== "production") {
        const u = r_(n), r = `Message compilation error: ${s.message}`, p = s.location && u && fs(u, s.location.start.offset, s.location.end.offset), m = e.__v_emitter;
        m && u && m.emit("compile-error", {
          message: u,
          error: s.message,
          start: s.location && s.location.start.offset,
          end: s.location && s.location.end.offset,
          groupId: `translate:${t}`
        }), console.error(p ? `${r}
${p}` : r);
      } else
        throw s;
    },
    onCacheKey: (s) => ss(a, t, s)
  };
}
function r_(e) {
  if (L(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function s_(e, a, t, n) {
  const { modifiers: l, pluralRules: o, messageResolver: s, fallbackLocale: u, fallbackWarn: r, missingWarn: p, fallbackContext: m } = e, d = {
    locale: a,
    modifiers: l,
    pluralRules: o,
    messages: (_) => {
      let b = s(t, _);
      if (b == null && m) {
        const [, , w] = fl(m, _, a, u, r, p);
        b = s(w, _);
      }
      if (L(b) || ka(b)) {
        let w = !1;
        const h = bl(e, _, a, b, _, () => {
          w = !0;
        });
        return w ? Dn : h;
      } else
        return Ce(b) ? b : Dn;
    }
  };
  return e.processor && (d.processor = e.processor), n.list && (d.list = n.list), n.named && (d.named = n.named), de(n.plural) && (d.pluralIndex = n.plural), d;
}
const Fn = typeof Intl < "u", gl = {
  dateTimeFormat: Fn && typeof Intl.DateTimeFormat < "u",
  numberFormat: Fn && typeof Intl.NumberFormat < "u"
};
function $n(e, ...a) {
  const { datetimeFormats: t, unresolving: n, fallbackLocale: l, onWarn: o, localeFallbacker: s } = e, { __datetimeFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !gl.dateTimeFormat)
    return o(oa(be.CANNOT_FORMAT_DATE)), ot;
  const [r, p, m, c] = jt(...a), d = ie(m.missingWarn) ? m.missingWarn : e.missingWarn, _ = ie(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn, b = !!m.part, w = en(e, m), T = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    l,
    w
  );
  if (!L(r) || r === "")
    return new Intl.DateTimeFormat(w, c).format(p);
  let h = {}, k, I = null, S = w, P = null;
  const A = "datetime format";
  for (let x = 0; x < T.length; x++) {
    if (k = P = T[x], process.env.NODE_ENV !== "production" && w !== k && dt(_, r) && o(oa(be.FALLBACK_TO_DATE_FORMAT, {
      key: r,
      target: k
    })), process.env.NODE_ENV !== "production" && w !== k) {
      const J = e.__v_emitter;
      J && J.emit("fallback", {
        type: A,
        key: r,
        from: S,
        to: P,
        groupId: `${A}:${r}`
      });
    }
    if (h = t[k] || {}, I = h[r], G(I))
      break;
    an(e, r, k, d, A), S = P;
  }
  if (!G(I) || !L(k))
    return n ? ut : r;
  let z = `${k}__${r}`;
  st(c) || (z = `${z}__${JSON.stringify(c)}`);
  let R = u.get(z);
  return R || (R = new Intl.DateTimeFormat(k, ce({}, I, c)), u.set(z, R)), b ? R.formatToParts(p) : R.format(p);
}
const hl = [
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
function jt(...e) {
  const [a, t, n, l] = e, o = {};
  let s = {}, u;
  if (L(a)) {
    const r = a.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!r)
      throw De(ue.INVALID_ISO_DATE_ARGUMENT);
    const p = r[3] ? r[3].trim().startsWith("T") ? `${r[1].trim()}${r[3].trim()}` : `${r[1].trim()}T${r[3].trim()}` : r[1].trim();
    u = new Date(p);
    try {
      u.toISOString();
    } catch {
      throw De(ue.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (us(a)) {
    if (isNaN(a.getTime()))
      throw De(ue.INVALID_DATE_ARGUMENT);
    u = a;
  } else if (de(a))
    u = a;
  else
    throw De(ue.INVALID_ARGUMENT);
  return L(t) ? o.key = t : G(t) && Object.keys(t).forEach((r) => {
    hl.includes(r) ? s[r] = t[r] : o[r] = t[r];
  }), L(n) ? o.locale = n : G(n) && (s = n), G(l) && (s = l), [o.key || "", u, o, s];
}
function Vn(e, a, t) {
  const n = e;
  for (const l in t) {
    const o = `${a}__${l}`;
    n.__datetimeFormatters.has(o) && n.__datetimeFormatters.delete(o);
  }
}
function jn(e, ...a) {
  const { numberFormats: t, unresolving: n, fallbackLocale: l, onWarn: o, localeFallbacker: s } = e, { __numberFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !gl.numberFormat)
    return o(oa(be.CANNOT_FORMAT_NUMBER)), ot;
  const [r, p, m, c] = Ut(...a), d = ie(m.missingWarn) ? m.missingWarn : e.missingWarn, _ = ie(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn, b = !!m.part, w = en(e, m), T = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    l,
    w
  );
  if (!L(r) || r === "")
    return new Intl.NumberFormat(w, c).format(p);
  let h = {}, k, I = null, S = w, P = null;
  const A = "number format";
  for (let x = 0; x < T.length; x++) {
    if (k = P = T[x], process.env.NODE_ENV !== "production" && w !== k && dt(_, r) && o(oa(be.FALLBACK_TO_NUMBER_FORMAT, {
      key: r,
      target: k
    })), process.env.NODE_ENV !== "production" && w !== k) {
      const J = e.__v_emitter;
      J && J.emit("fallback", {
        type: A,
        key: r,
        from: S,
        to: P,
        groupId: `${A}:${r}`
      });
    }
    if (h = t[k] || {}, I = h[r], G(I))
      break;
    an(e, r, k, d, A), S = P;
  }
  if (!G(I) || !L(k))
    return n ? ut : r;
  let z = `${k}__${r}`;
  st(c) || (z = `${z}__${JSON.stringify(c)}`);
  let R = u.get(z);
  return R || (R = new Intl.NumberFormat(k, ce({}, I, c)), u.set(z, R)), b ? R.formatToParts(p) : R.format(p);
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
  let s = {};
  if (!de(a))
    throw De(ue.INVALID_ARGUMENT);
  const u = a;
  return L(t) ? o.key = t : G(t) && Object.keys(t).forEach((r) => {
    vl.includes(r) ? s[r] = t[r] : o[r] = t[r];
  }), L(n) ? o.locale = n : G(n) && (s = n), G(l) && (s = l), [o.key || "", u, o, s];
}
function Un(e, a, t) {
  const n = e;
  for (const l in t) {
    const o = `${a}__${l}`;
    n.__numberFormatters.has(o) && n.__numberFormatters.delete(o);
  }
}
Es();
/*!
  * vue-i18n v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const __ = "9.14.1";
function u_() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Pa().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Pa().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const wl = be.__EXTEND_POINT__, Re = _t(wl), we = {
  FALLBACK_TO_ROOT: wl,
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
}, d_ = {
  [we.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [we.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [we.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [we.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [we.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [we.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [we.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [we.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [we.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze",
  [we.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG]: "'translateExistCompatible' option will be dropped in the next major version."
};
function rt(e, ...a) {
  return al(d_[e], ...a);
}
const kl = ue.__EXTEND_POINT__, ve = _t(kl), le = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: kl,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: ve(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: ve(),
  // 26
  NOT_INSTALLED: ve(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: ve(),
  // 28
  // directive module errors
  REQUIRED_VALUE: ve(),
  // 29
  INVALID_VALUE: ve(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: ve(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: ve(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: ve(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: ve(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: ve(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: ve(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: ve(),
  // 37
  // for enhancement
  __EXTEND_POINT__: ve()
  // 38
};
function Da(e, ...a) {
  return il(e, null, process.env.NODE_ENV !== "production" ? { messages: c_, args: a } : void 0);
}
const c_ = {
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
}, Bt = /* @__PURE__ */ $e("__translateVNode"), Wt = /* @__PURE__ */ $e("__datetimeParts"), Ht = /* @__PURE__ */ $e("__numberParts"), Gt = /* @__PURE__ */ $e("__enableEmitter"), Kt = /* @__PURE__ */ $e("__disableEmitter"), p_ = $e("__setPluralRules"), m_ = /* @__PURE__ */ $e("__injectWithOption"), Yt = /* @__PURE__ */ $e("__dispose");
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
        for (let s = 0; s < n; s++) {
          if (t[s] in l || (l[t[s]] = {}), !H(l[t[s]])) {
            process.env.NODE_ENV !== "production" && Ea(rt(we.IGNORE_OBJ_FLATTEN, {
              key: t[s]
            })), o = !0;
            break;
          }
          l = l[t[s]];
        }
        o || (l[t[n]] = e[a], delete e[a]), H(l[t[n]]) && za(l[t[n]]);
      }
  return e;
}
function El(e, a) {
  const { messages: t, __i18n: n, messageResolver: l, flatJson: o } = a, s = G(t) ? t : oe(n) ? {} : { [e]: {} };
  if (oe(n) && n.forEach((u) => {
    if ("locale" in u && "resource" in u) {
      const { locale: r, resource: p } = u;
      r ? (s[r] = s[r] || {}, at(p, s[r])) : at(p, s);
    } else
      L(u) && at(JSON.parse(u), s);
  }), l == null && o)
    for (const u in s)
      lt(s, u) && za(s[u]);
  return s;
}
function yl(e) {
  return e.type;
}
function f_(e, a, t) {
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
      o.length && o.forEach((s) => {
        e.mergeDateTimeFormat(s, a.datetimeFormats[s]);
      });
    }
    if (H(a.numberFormats)) {
      const o = Object.keys(a.numberFormats);
      o.length && o.forEach((s) => {
        e.mergeNumberFormat(s, a.numberFormats[s]);
      });
    }
  }
}
function Bn(e) {
  return B(Mi, null, e, 0);
}
const Wn = "__INTLIFY_META__", Hn = () => [], b_ = () => !1;
let Gn = 0;
function Kn(e) {
  return (a, t, n, l) => e(t, n, Jt() || void 0, l);
}
const g_ = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Jt();
  let a = null;
  return e && (a = yl(e)[Wn]) ? { [Wn]: a } : null;
};
function h_(e = {}, a) {
  const { __root: t, __injectWithOption: n } = e, l = t === void 0, o = e.flatJson, s = Fe ? W : Ai, u = !!e.translateExistCompatible;
  process.env.NODE_ENV !== "production" && u && ll(rt(we.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  let r = ie(e.inheritLocale) ? e.inheritLocale : !0;
  const p = s(
    // prettier-ignore
    t && r ? t.locale.value : L(e.locale) ? e.locale : it
  ), m = s(
    // prettier-ignore
    t && r ? t.fallbackLocale.value : L(e.fallbackLocale) || oe(e.fallbackLocale) || G(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : p.value
  ), c = s(El(p.value, e)), d = s(G(e.datetimeFormats) ? e.datetimeFormats : { [p.value]: {} }), _ = s(G(e.numberFormats) ? e.numberFormats : { [p.value]: {} });
  let b = t ? t.missingWarn : ie(e.missingWarn) || nt(e.missingWarn) ? e.missingWarn : !0, w = t ? t.fallbackWarn : ie(e.fallbackWarn) || nt(e.fallbackWarn) ? e.fallbackWarn : !0, T = t ? t.fallbackRoot : ie(e.fallbackRoot) ? e.fallbackRoot : !0, h = !!e.fallbackFormat, k = Q(e.missing) ? e.missing : null, I = Q(e.missing) ? Kn(e.missing) : null, S = Q(e.postTranslation) ? e.postTranslation : null, P = t ? t.warnHtmlMessage : ie(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, A = !!e.escapeParameter;
  const z = t ? t.modifiers : G(e.modifiers) ? e.modifiers : {};
  let R = e.pluralRules || t && t.pluralRules, x;
  x = (() => {
    l && Pn(null);
    const g = {
      version: __,
      locale: p.value,
      fallbackLocale: m.value,
      messages: c.value,
      modifiers: z,
      pluralRules: R,
      missing: I === null ? void 0 : I,
      missingWarn: b,
      fallbackWarn: w,
      fallbackFormat: h,
      unresolving: !0,
      postTranslation: S === null ? void 0 : S,
      warnHtmlMessage: P,
      escapeParameter: A,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    g.datetimeFormats = d.value, g.numberFormats = _.value, g.__datetimeFormatters = G(x) ? x.__datetimeFormatters : void 0, g.__numberFormatters = G(x) ? x.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (g.__v_emitter = G(x) ? x.__v_emitter : void 0);
    const E = t_(g);
    return l && Pn(E), E;
  })(), Ia(x, p.value, m.value);
  function ne() {
    return [
      p.value,
      m.value,
      c.value,
      d.value,
      _.value
    ];
  }
  const ee = K({
    get: () => p.value,
    set: (g) => {
      p.value = g, x.locale = p.value;
    }
  }), Ee = K({
    get: () => m.value,
    set: (g) => {
      m.value = g, x.fallbackLocale = m.value, Ia(x, p.value, g);
    }
  }), Ae = K(() => c.value), Ye = /* @__PURE__ */ K(() => d.value), ya = /* @__PURE__ */ K(() => _.value);
  function qe() {
    return Q(S) ? S : null;
  }
  function Ze(g) {
    S = g, x.postTranslation = g;
  }
  function pt() {
    return k;
  }
  function q(g) {
    g !== null && (I = Kn(g)), k = g, x.missing = I;
  }
  function mt(g, E) {
    return g !== "translate" || !E.resolvedMessage;
  }
  const Me = (g, E, V, X, Oe, ma) => {
    ne();
    let Ve;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, l || (x.fallbackContext = t ? a_() : void 0), Ve = g(x);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, l || (x.fallbackContext = void 0);
    }
    if (V !== "translate exists" && // for not `te` (e.g `t`)
    de(Ve) && Ve === ut || V === "translate exists" && !Ve) {
      const [Le, yt] = E();
      if (process.env.NODE_ENV !== "production" && t && L(Le) && mt(V, yt) && (T && (dt(w, Le) || pl(b, Le)) && Ea(rt(we.FALLBACK_TO_ROOT, {
        key: Le,
        type: V
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Ka } = x;
        Ka && T && Ka.emit("fallback", {
          type: V,
          key: Le,
          to: "global",
          groupId: `${V}:${Le}`
        });
      }
      return t && T ? X(t) : Oe(Le);
    } else {
      if (ma(Ve))
        return Ve;
      throw Da(le.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ye(...g) {
    return Me((E) => Reflect.apply(zn, null, [E, ...g]), () => Vt(...g), "translate", (E) => Reflect.apply(E.t, E, [...g]), (E) => E, (E) => L(E));
  }
  function Va(...g) {
    const [E, V, X] = g;
    if (X && !H(X))
      throw Da(le.INVALID_ARGUMENT);
    return ye(E, V, ce({ resolvedMessage: !0 }, X || {}));
  }
  function ja(...g) {
    return Me((E) => Reflect.apply($n, null, [E, ...g]), () => jt(...g), "datetime format", (E) => Reflect.apply(E.d, E, [...g]), () => ot, (E) => L(E));
  }
  function ft(...g) {
    return Me((E) => Reflect.apply(jn, null, [E, ...g]), () => Ut(...g), "number format", (E) => Reflect.apply(E.n, E, [...g]), () => ot, (E) => L(E));
  }
  function bt(g) {
    return g.map((E) => L(E) || de(E) || ie(E) ? Bn(String(E)) : E);
  }
  const gt = {
    normalize: bt,
    interpolate: (g) => g,
    type: "vnode"
  };
  function ht(...g) {
    return Me(
      (E) => {
        let V;
        const X = E;
        try {
          X.processor = gt, V = Reflect.apply(zn, null, [X, ...g]);
        } finally {
          X.processor = null;
        }
        return V;
      },
      () => Vt(...g),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (E) => E[Bt](...g),
      (E) => [Bn(E)],
      (E) => oe(E)
    );
  }
  function Ua(...g) {
    return Me(
      (E) => Reflect.apply(jn, null, [E, ...g]),
      () => Ut(...g),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (E) => E[Ht](...g),
      Hn,
      (E) => L(E) || oe(E)
    );
  }
  function vt(...g) {
    return Me(
      (E) => Reflect.apply($n, null, [E, ...g]),
      () => jt(...g),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (E) => E[Wt](...g),
      Hn,
      (E) => L(E) || oe(E)
    );
  }
  function wt(g) {
    R = g, x.pluralRules = R;
  }
  function Ba(g, E) {
    return Me(() => {
      if (!g)
        return !1;
      const V = L(E) ? E : p.value, X = Ca(V), Oe = x.messageResolver(X, g);
      return u ? Oe != null : ka(Oe) || Ce(Oe) || L(Oe);
    }, () => [g], "translate exists", (V) => Reflect.apply(V.te, V, [g, E]), b_, (V) => ie(V));
  }
  function Wa(g) {
    let E = null;
    const V = sl(x, m.value, p.value);
    for (let X = 0; X < V.length; X++) {
      const Oe = c.value[V[X]] || {}, ma = x.messageResolver(Oe, g);
      if (ma != null) {
        E = ma;
        break;
      }
    }
    return E;
  }
  function Ta(g) {
    const E = Wa(g);
    return E ?? (t ? t.tm(g) || {} : {});
  }
  function Ca(g) {
    return c.value[g] || {};
  }
  function kt(g, E) {
    if (o) {
      const V = { [g]: E };
      for (const X in V)
        lt(V, X) && za(V[X]);
      E = V[g];
    }
    c.value[g] = E, x.messages = c.value;
  }
  function Et(g, E) {
    c.value[g] = c.value[g] || {};
    const V = { [g]: E };
    if (o)
      for (const X in V)
        lt(V, X) && za(V[X]);
    E = V[g], at(E, c.value[g]), x.messages = c.value;
  }
  function ca(g) {
    return d.value[g] || {};
  }
  function Sa(g, E) {
    d.value[g] = E, x.datetimeFormats = d.value, Vn(x, g, E);
  }
  function Ha(g, E) {
    d.value[g] = ce(d.value[g] || {}, E), x.datetimeFormats = d.value, Vn(x, g, E);
  }
  function Ga(g) {
    return _.value[g] || {};
  }
  function Ne(g, E) {
    _.value[g] = E, x.numberFormats = _.value, Un(x, g, E);
  }
  function pa(g, E) {
    _.value[g] = ce(_.value[g] || {}, E), x.numberFormats = _.value, Un(x, g, E);
  }
  Gn++, t && Fe && (Ma(t.locale, (g) => {
    r && (p.value = g, x.locale = g, Ia(x, p.value, m.value));
  }), Ma(t.fallbackLocale, (g) => {
    r && (m.value = g, x.fallbackLocale = g, Ia(x, p.value, m.value));
  }));
  const ae = {
    id: Gn,
    locale: ee,
    fallbackLocale: Ee,
    get inheritLocale() {
      return r;
    },
    set inheritLocale(g) {
      r = g, g && t && (p.value = t.locale.value, m.value = t.fallbackLocale.value, Ia(x, p.value, m.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: Ae,
    get modifiers() {
      return z;
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
      b = g, x.missingWarn = b;
    },
    get fallbackWarn() {
      return w;
    },
    set fallbackWarn(g) {
      w = g, x.fallbackWarn = w;
    },
    get fallbackRoot() {
      return T;
    },
    set fallbackRoot(g) {
      T = g;
    },
    get fallbackFormat() {
      return h;
    },
    set fallbackFormat(g) {
      h = g, x.fallbackFormat = h;
    },
    get warnHtmlMessage() {
      return P;
    },
    set warnHtmlMessage(g) {
      P = g, x.warnHtmlMessage = g;
    },
    get escapeParameter() {
      return A;
    },
    set escapeParameter(g) {
      A = g, x.escapeParameter = g;
    },
    t: ye,
    getLocaleMessage: Ca,
    setLocaleMessage: kt,
    mergeLocaleMessage: Et,
    getPostTranslationHandler: qe,
    setPostTranslationHandler: Ze,
    getMissingHandler: pt,
    setMissingHandler: q,
    [p_]: wt
  };
  return ae.datetimeFormats = Ye, ae.numberFormats = ya, ae.rt = Va, ae.te = Ba, ae.tm = Ta, ae.d = ja, ae.n = ft, ae.getDateTimeFormat = ca, ae.setDateTimeFormat = Sa, ae.mergeDateTimeFormat = Ha, ae.getNumberFormat = Ga, ae.setNumberFormat = Ne, ae.mergeNumberFormat = pa, ae[m_] = n, ae[Bt] = ht, ae[Wt] = vt, ae[Ht] = Ua, process.env.NODE_ENV !== "production" && (ae[Gt] = (g) => {
    x.__v_emitter = g;
  }, ae[Kt] = () => {
    x.__v_emitter = void 0;
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
function v_({ slots: e }, a) {
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
ce({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validator: (e) => de(e) || !isNaN(e)
  }
}, tn);
function w_(e) {
  return oe(e) && !L(e[0]);
}
function Cl(e, a, t, n) {
  const { slots: l, attrs: o } = a;
  return () => {
    const s = { part: !0 };
    let u = {};
    e.locale && (s.locale = e.locale), L(e.format) ? s.key = e.format : H(e.format) && (L(e.format.key) && (s.key = e.format.key), u = Object.keys(e.format).reduce((d, _) => t.includes(_) ? ce({}, d, { [_]: e.format[_] }) : d, {}));
    const r = n(e.value, s, u);
    let p = [s.key];
    oe(r) ? p = r.map((d, _) => {
      const b = l[d.type], w = b ? b({ [d.type]: d.value, index: _, parts: r }) : [d.value];
      return w_(w) && (w[0].key = `${d.type}-${_}`), w;
    }) : L(r) && (p = [r]);
    const m = ce({}, o), c = L(e.tag) || H(e.tag) ? e.tag : Tl();
    return Zt(c, m, p);
  };
}
ce({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, tn);
ce({
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
const k_ = /* @__PURE__ */ $e("global-vue-i18n");
function ct(e = {}) {
  const a = Jt();
  if (a == null)
    throw Da(le.MUST_BE_CALL_SETUP_TOP);
  if (!a.isCE && a.appContext.app != null && !a.appContext.app.__VUE_I18N_SYMBOL__)
    throw Da(le.NOT_INSTALLED);
  const t = E_(a), n = T_(t), l = yl(a), o = y_(e, l);
  if (o === "global")
    return f_(n, e, l), n;
  if (o === "parent") {
    let r = C_(t, a, e.__useComponent);
    return r == null && (process.env.NODE_ENV !== "production" && Ea(rt(we.NOT_FOUND_PARENT_SCOPE)), r = n), r;
  }
  const s = t;
  let u = s.__getInstance(a);
  if (u == null) {
    const r = ce({}, e);
    "__i18n" in l && (r.__i18n = l.__i18n), n && (r.__root = n), u = h_(r), s.__composerExtend && (u[Yt] = s.__composerExtend(u)), x_(s, a, u), s.__setInstance(a, u);
  }
  return u;
}
function E_(e) {
  {
    const a = Jn(e.isCE ? k_ : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!a)
      throw Da(e.isCE ? le.NOT_INSTALLED_WITH_PROVIDE : le.UNEXPECTED_ERROR);
    return a;
  }
}
function y_(e, a) {
  return st(e) ? "__i18n" in a ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function T_(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function C_(e, a, t = !1) {
  let n = null;
  const l = a.root;
  let o = S_(a, t);
  for (; o != null; ) {
    const s = e;
    if (e.mode === "composition" && (n = s.__getInstance(o)), n != null || l === o)
      break;
    o = o.parent;
  }
  return n;
}
function S_(e, a = !1) {
  return e == null ? null : a && e.vnode.ctx || e.parent;
}
function x_(e, a, t) {
  let n = null;
  qt(() => {
    if (process.env.NODE_ENV !== "production" && a.vnode.el) {
      a.vnode.el.__VUE_I18N__ = t, n = bs();
      const l = t;
      l[Gt] && l[Gt](n), n.on("*", Yn);
    }
  }, a), Ii(() => {
    const l = t;
    process.env.NODE_ENV !== "production" && a.vnode.el && a.vnode.el.__VUE_I18N__ && (n && n.off("*", Yn), l[Kt] && l[Kt](), delete a.vnode.el.__VUE_I18N__), e.__deleteInstance(a);
    const o = l[Yt];
    o && (o(), delete l[Yt]);
  }, a);
}
u_();
Js(Ls);
Xs(sl);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Pa();
  e.__INTLIFY__ = !0, $s(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const N_ = {
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
}, O_ = {
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
}, L_ = {
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
}, I_ = {
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
}, A_ = {
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
}, M_ = {
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
}, P_ = {
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
}, R_ = {
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
}, D_ = {
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
}, z_ = {
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
}, F_ = {
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
}, $_ = {
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
}, V_ = {
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
}, j_ = {
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
}, U_ = {
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
}, B_ = {
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
}, W_ = {
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
}, H_ = {
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
}, G_ = {
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
}, K_ = {
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
}, Y_ = {
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
}, q_ = {
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
}, Z_ = {
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
}, J_ = {
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
}, X_ = {
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
}, Q_ = {
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
}, eu = {
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
}, au = {
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
}, tu = {
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
}, nu = {
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
}, qn = {
  ar: N_,
  bn: O_,
  cs: L_,
  de: I_,
  el: A_,
  en: M_,
  es: P_,
  fa: R_,
  fil: D_,
  fr: z_,
  he: F_,
  hi: $_,
  hu: V_,
  id: j_,
  it: U_,
  ja: B_,
  ko: W_,
  ms: H_,
  nl: G_,
  pl: K_,
  pt: Y_,
  ro: q_,
  ru: Z_,
  sv: J_,
  th: X_,
  tr: Q_,
  uk: eu,
  ur: au,
  vi: tu,
  zh: nu
}, Zn = {
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
    user_not_found: "User not found"
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
    user_not_found: "المستخدم غير موجود"
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
    user_not_found: "ব্যবহারকারী পাওয়া যায়নি"
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
    user_not_found: "Uživatel nenalezen"
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
    user_not_found: "Benutzer nicht gefunden"
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
    user_not_found: "Ο χρήστης δεν βρέθηκε"
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
    user_not_found: "Usuario no encontrado"
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
    user_not_found: "کاربر یافت نشد"
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
    user_not_found: "Hindi natagpuan ang user"
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
    user_not_found: "Utilisateur introuvable"
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
    user_not_found: "המשתמש לא נמצא"
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
    user_not_found: "उपयोगकर्ता नहीं मिला"
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
    user_not_found: "A felhasználó nem található"
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
    user_not_found: "Pengguna tidak ditemukan"
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
    user_not_found: "Utente non trovato"
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
    user_not_found: "ユーザーが見つかりません"
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
    user_not_found: "사용자를 찾을 수 없습니다"
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
    user_not_found: "Pengguna tidak dijumpai"
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
    user_not_found: "Gebruiker niet gevonden"
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
    user_not_found: "Nie znaleziono użytkownika"
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
    user_not_found: "Usuário não encontrado"
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
    user_not_found: "Utilizatorul nu a fost găsit"
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
    user_not_found: "Пользователь не найден"
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
    user_not_found: "Användaren hittades inte"
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
    user_not_found: "ไม่พบผู้ใช้"
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
    user_not_found: "Kullanıcı bulunamadı"
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
    user_not_found: "Користувача не знайдено"
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
    user_not_found: "صارف نہیں ملا"
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
    user_not_found: "Không tìm thấy người dùng"
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
    user_not_found: "未找到用户"
  }
};
function Sl() {
  try {
    return ct().locale;
  } catch {
    return null;
  }
}
function lu() {
  const e = Sl();
  return K(() => {
    const a = ((e == null ? void 0 : e.value) ?? "en").toLowerCase();
    return qn[a] ?? qn.en;
  });
}
function iu() {
  const e = Sl();
  return K(() => {
    const a = ((e == null ? void 0 : e.value) ?? "en").toLowerCase();
    return Zn[a] ?? Zn.en;
  });
}
const ou = /* @__PURE__ */ te({
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
    const t = e, n = a, l = W(t.view), o = (c) => {
      n("update:view", c), l.value = c;
    };
    Xn(Ge, {
      authView: l,
      setAuthView: o
    });
    const s = lu(), u = iu(), r = K(() => {
      var _;
      const c = La(s.value);
      c.errors = La(u.value);
      const d = La((_ = t == null ? void 0 : t.localization) == null ? void 0 : _.variables);
      return zt(c, d ?? {});
    }), p = K(() => l.value === "sign_in" || l.value === "sign_up" || l.value === "magic_link"), m = K(() => {
      var _, b;
      const c = La((_ = t.appearance) == null ? void 0 : _.theme), d = La((b = t.appearance) == null ? void 0 : b.variables);
      return zt(
        (c == null ? void 0 : c.default) ?? {},
        (c == null ? void 0 : c[t.theme]) ?? {},
        (d == null ? void 0 : d.default) ?? {},
        (d == null ? void 0 : d[t == null ? void 0 : t.theme]) ?? {}
      );
    });
    return $t({ theme: m.value }), Ma(
      () => [t.appearance, t.theme],
      () => {
        $t({ theme: m.value });
      },
      { deep: !0 }
    ), Ma(
      () => t.view,
      (c) => {
        const { data: d } = t.supabaseClient.auth.onAuthStateChange(
          (_) => {
            _ === "PASSWORD_RECOVERY" ? o("update_password") : _ === "USER_UPDATED" && o("sign_in");
          }
        );
        return o(c), () => d.subscription.unsubscribe();
      },
      { deep: !0 }
    ), (c, d) => p.value ? (C(), F(fo, {
      key: 0,
      direction: "horizontal",
      gap: "small",
      theme: t.theme,
      appearance: c.appearance
    }, {
      default: M(() => [
        p.value ? (C(), F(Yr, {
          key: 0,
          supabaseClient: c.supabaseClient,
          appearance: c.appearance,
          providers: c.providers,
          providerScopes: c.providerScopes,
          queryParams: c.queryParams,
          socialLayout: c.socialLayout,
          redirectTo: c.redirectTo,
          useOAuthPopup: c.useOAuthPopup,
          popupWindowFeatures: c.popupWindowFeatures,
          onlyThirdPartyProviders: c.onlyThirdPartyProviders,
          i18n: r.value
        }, null, 8, ["supabaseClient", "appearance", "providers", "providerScopes", "queryParams", "socialLayout", "redirectTo", "useOAuthPopup", "popupWindowFeatures", "onlyThirdPartyProviders", "i18n"])) : Y("", !0),
        c.onlyThirdPartyProviders ? Y("", !0) : (C(), $(na, { key: 1 }, [
          l.value === "sign_in" || l.value === "sign_up" ? (C(), F(Co, {
            key: 0,
            supabaseClient: c.supabaseClient,
            appearance: c.appearance,
            redirectTo: c.redirectTo,
            magicLink: c.magicLink,
            showLinks: c.showLinks,
            i18n: r.value,
            additionalData: c.additionalData,
            options: c.options,
            "onAuth:submit": d[0] || (d[0] = (_) => n("auth:submit", _)),
            "onAuth:error": d[1] || (d[1] = (_) => n("auth:error", _))
          }, null, 8, ["supabaseClient", "appearance", "redirectTo", "magicLink", "showLinks", "i18n", "additionalData", "options"])) : Y("", !0),
          l.value === "magic_link" ? (C(), F(Zr, {
            key: 1,
            supabaseClient: c.supabaseClient,
            appearance: c.appearance,
            redirectTo: c.redirectTo,
            showLinks: c.showLinks,
            i18n: r.value
          }, null, 8, ["supabaseClient", "appearance", "redirectTo", "showLinks", "i18n"])) : Y("", !0)
        ], 64))
      ]),
      _: 1
    }, 8, ["theme", "appearance"])) : (C(), $(na, { key: 1 }, [
      l.value === "forgotten_password" ? (C(), F(Xr, {
        key: 0,
        supabaseClient: c.supabaseClient,
        appearance: c.appearance,
        redirectTo: c.redirectTo,
        showLinks: c.showLinks,
        i18n: r.value,
        options: c.options
      }, null, 8, ["supabaseClient", "appearance", "redirectTo", "showLinks", "i18n", "options"])) : Y("", !0),
      l.value === "update_password" ? (C(), F(es, {
        key: 1,
        supabaseClient: c.supabaseClient,
        appearance: c.appearance,
        i18n: r.value
      }, null, 8, ["supabaseClient", "appearance", "i18n"])) : Y("", !0),
      l.value === "verify_otp" ? (C(), F(ls, {
        key: 2,
        supabaseClient: c.supabaseClient,
        appearance: c.appearance,
        otpType: c.otpType,
        i18n: r.value
      }, null, 8, ["supabaseClient", "appearance", "otpType", "i18n"])) : Y("", !0),
      l.value === "anonymous_sign_in" ? (C(), F(os, {
        key: 3,
        supabaseClient: c.supabaseClient,
        appearance: c.appearance,
        i18n: r.value,
        anonymouslyCredentials: c.anonymouslyCredentials
      }, null, 8, ["supabaseClient", "appearance", "i18n", "anonymouslyCredentials"])) : Y("", !0)
    ], 64));
  }
}), _u = {
  install(e) {
    e.component("Auth", ou);
  }
};
export {
  ou as Auth,
  Xr as ForgottenPassword,
  Zr as MagicLink,
  es as UpdatePassword,
  su as UserContextProvider,
  mo as UserContextProviderKey,
  _u as default,
  da as injectStrict,
  Qt as useSupabaseUser
};
