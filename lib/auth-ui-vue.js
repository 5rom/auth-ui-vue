import { defineComponent as ae, useAttrs as lt, computed as X, openBlock as T, createBlock as F, resolveDynamicComponent as ot, mergeProps as it, unref as k, withCtx as L, renderSlot as Ue, createElementBlock as j, normalizeClass as So, normalizeStyle as No, inject as Yn, ref as W, watch as Lt, withModifiers as we, createVNode as U, createElementVNode as $, createTextVNode as z, toDisplayString as B, createCommentVNode as K, createStaticVNode as Dt, onMounted as Ka, provide as Zn, h as Ya, Fragment as et, renderList as Oo, getCurrentInstance as Za, onUnmounted as Io, shallowRef as xo, Text as Lo } from "vue";
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
function rt(e, t, a) {
  var n, l;
  const i = [], s = Mo[e];
  return i.push(
    a != null && a.prependedClassName ? (a == null ? void 0 : a.prependedClassName) + "_" + s : Ao + "_" + s
  ), (n = a == null ? void 0 : a.className) != null && n[e] && i.push((l = a == null ? void 0 : a.className) == null ? void 0 : l[e]), ((a == null ? void 0 : a.extend) === void 0 || (a == null ? void 0 : a.extend) === !0) && i.push(t), i;
}
function Pa(e, t) {
  let a;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (Array.isArray(t))
      for (a = 0; a < t.length; a++)
        e[a] = Pa(e[a], t[a]);
    else
      for (a in t)
        e[a] = Pa(e[a], t[a]);
    return e;
  }
  return t;
}
function Ra(e, ...t) {
  let a = t.length;
  for (let n = 0; n < a; n++)
    e = Pa(e, t[n]);
  return e;
}
function Po(e, t) {
  return e.replace(
    /{{(\w+)}}/g,
    (a, n) => t.hasOwnProperty(n) ? t[n] : a
  );
}
var bn, Z = "colors", me = "sizes", O = "space", Ro = { gap: O, gridGap: O, columnGap: O, gridColumnGap: O, rowGap: O, gridRowGap: O, inset: O, insetBlock: O, insetBlockEnd: O, insetBlockStart: O, insetInline: O, insetInlineEnd: O, insetInlineStart: O, margin: O, marginTop: O, marginRight: O, marginBottom: O, marginLeft: O, marginBlock: O, marginBlockEnd: O, marginBlockStart: O, marginInline: O, marginInlineEnd: O, marginInlineStart: O, padding: O, paddingTop: O, paddingRight: O, paddingBottom: O, paddingLeft: O, paddingBlock: O, paddingBlockEnd: O, paddingBlockStart: O, paddingInline: O, paddingInlineEnd: O, paddingInlineStart: O, top: O, right: O, bottom: O, left: O, scrollMargin: O, scrollMarginTop: O, scrollMarginRight: O, scrollMarginBottom: O, scrollMarginLeft: O, scrollMarginX: O, scrollMarginY: O, scrollMarginBlock: O, scrollMarginBlockEnd: O, scrollMarginBlockStart: O, scrollMarginInline: O, scrollMarginInlineEnd: O, scrollMarginInlineStart: O, scrollPadding: O, scrollPaddingTop: O, scrollPaddingRight: O, scrollPaddingBottom: O, scrollPaddingLeft: O, scrollPaddingX: O, scrollPaddingY: O, scrollPaddingBlock: O, scrollPaddingBlockEnd: O, scrollPaddingBlockStart: O, scrollPaddingInline: O, scrollPaddingInlineEnd: O, scrollPaddingInlineStart: O, fontSize: "fontSizes", background: Z, backgroundColor: Z, backgroundImage: Z, borderImage: Z, border: Z, borderBlock: Z, borderBlockEnd: Z, borderBlockStart: Z, borderBottom: Z, borderBottomColor: Z, borderColor: Z, borderInline: Z, borderInlineEnd: Z, borderInlineStart: Z, borderLeft: Z, borderLeftColor: Z, borderRight: Z, borderRightColor: Z, borderTop: Z, borderTopColor: Z, caretColor: Z, color: Z, columnRuleColor: Z, fill: Z, outline: Z, outlineColor: Z, stroke: Z, textDecorationColor: Z, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: me, minBlockSize: me, maxBlockSize: me, inlineSize: me, minInlineSize: me, maxInlineSize: me, width: me, minWidth: me, maxWidth: me, height: me, minHeight: me, maxHeight: me, flexBasis: me, gridTemplateColumns: me, gridTemplateRows: me, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, Do = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, Ft = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, a, ...n) => {
    const l = ((i) => JSON.stringify(i, Do))(t);
    return l in e ? e[l] : e[l] = a(t, ...n);
  };
}, Qt = Symbol.for("sxs.internal"), Ja = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), gn = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: Fo } = Object.prototype, Da = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), $o = /\s+(?![^()]*\))/, ht = (e) => (t) => e(...typeof t == "string" ? String(t).split($o) : [t]), hn = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: ht((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: ht((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: ht((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: ht((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: ht((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: ht((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, Aa = /([\d.]+)([^]*)/, Vo = (e, t) => e.length ? e.reduce((a, n) => (a.push(...t.map((l) => l.includes("&") ? l.replace(/&/g, /[ +>|~]/.test(n) && /&.*&/.test(l) ? `:is(${n})` : n) : n + " " + l)), a), []) : t, zo = (e, t) => e in Bo && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (a, n, l, i) => n + (l === "stretch" ? `-moz-available${i};${Da(e)}:${n}-webkit-fill-available` : `-moz-fit-content${i};${Da(e)}:${n}fit-content`) + i) : String(t), Bo = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, De = (e) => e ? e + "-" : "", Jn = (e, t, a) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (n, l, i, s, u) => s == "$" == !!i ? n : (l || s == "--" ? "calc(" : "") + "var(--" + (s === "$" ? De(t) + (u.includes("$") ? "" : De(a)) + u.replace(/\$/g, "-") : u) + ")" + (l || s == "--" ? "*" + (l || "") + (i || "1") + ")" : "")), Uo = /\s*,\s*(?![^()]*\))/, jo = Object.prototype.toString, vt = (e, t, a, n, l) => {
  let i, s, u;
  const r = (d, c, m) => {
    let _, p;
    const b = (w) => {
      for (_ in w) {
        const C = _.charCodeAt(0) === 64, M = C && Array.isArray(w[_]) ? w[_] : [w[_]];
        for (p of M) {
          const N = /[A-Z]/.test(h = _) ? h : h.replace(/-[^]/g, (A) => A[1].toUpperCase()), P = typeof p == "object" && p && p.toString === jo && (!n.utils[N] || !c.length);
          if (N in n.utils && !P) {
            const A = n.utils[N];
            if (A !== s) {
              s = A, b(A(p)), s = null;
              continue;
            }
          } else if (N in hn) {
            const A = hn[N];
            if (A !== u) {
              u = A, b(A(p)), u = null;
              continue;
            }
          }
          if (C && (y = _.slice(1) in n.media ? "@media " + n.media[_.slice(1)] : _, _ = y.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (A, D, R, S, J, ne) => {
            const ee = Aa.test(D), ke = 0.0625 * (ee ? -1 : 1), [Le, Ge] = ee ? [S, D] : [D, S];
            return "(" + (R[0] === "=" ? "" : R[0] === ">" === ee ? "max-" : "min-") + Le + ":" + (R[0] !== "=" && R.length === 1 ? Ge.replace(Aa, (kt, He, Ke) => Number(He) + ke * (R === ">" ? 1 : -1) + Ke) : Ge) + (J ? ") and (" + (J[0] === ">" ? "min-" : "max-") + Le + ":" + (J.length === 1 ? ne.replace(Aa, (kt, He, Ke) => Number(He) + ke * (J === ">" ? -1 : 1) + Ke) : ne) : "") + ")";
          })), P) {
            const A = C ? m.concat(_) : [...m], D = C ? [...c] : Vo(c, _.split(Uo));
            i !== void 0 && l(vn(...i)), i = void 0, r(p, D, A);
          } else
            i === void 0 && (i = [[], c, m]), _ = C || _.charCodeAt(0) !== 36 ? _ : `--${De(n.prefix)}${_.slice(1).replace(/\$/g, "-")}`, p = P ? p : typeof p == "number" ? p && N in Wo ? String(p) + "px" : String(p) : Jn(zo(N, p ?? ""), n.prefix, n.themeMap[N]), i[0].push(`${C ? `${_} ` : `${Da(_)}:`}${p}`);
        }
      }
      var y, h;
    };
    b(d), i !== void 0 && l(vn(...i)), i = void 0;
  };
  r(e, t, a);
}, vn = (e, t, a) => `${a.map((n) => `${n}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(a.length ? a.length + 1 : 0).join("}")}`, Wo = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, wn = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), tt = (e) => ((t) => {
  let a, n = "";
  for (a = Math.abs(t); a > 52; a = a / 52 | 0)
    n = wn(a % 52) + n;
  return wn(a % 52) + n;
})(((t, a) => {
  let n = a.length;
  for (; n; )
    t = 33 * t ^ a.charCodeAt(--n);
  return t;
})(5381, JSON.stringify(e)) >>> 0), xt = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], Go = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, Ho = (e) => {
  let t;
  const a = () => {
    const { cssRules: l } = t.sheet;
    return [].map.call(l, (i, s) => {
      const { cssText: u } = i;
      let r = "";
      if (u.startsWith("--sxs"))
        return "";
      if (l[s - 1] && (r = l[s - 1].cssText).startsWith("--sxs")) {
        if (!i.cssRules.length)
          return "";
        for (const d in t.rules)
          if (t.rules[d].group === i)
            return `--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${u}`;
        return i.cssRules.length ? `${r}${u}` : "";
      }
      return u;
    }).join("");
  }, n = () => {
    if (t) {
      const { rules: u, sheet: r } = t;
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
          const c = Object(d[r]);
          if (c.type !== 1)
            continue;
          const m = Object(d[r + 1]);
          if (m.type !== 4)
            continue;
          ++r;
          const { cssText: _ } = c;
          if (!_.startsWith("--sxs"))
            continue;
          const p = _.slice(14, -3).trim().split(/\s+/), b = xt[p[0]];
          b && (t || (t = { sheet: u, reset: n, rules: {}, toString: a }), t.rules[b] = { group: m, index: r, cache: new Set(p) });
        }
        if (t)
          break;
      }
    if (!t) {
      const u = (r, d) => ({ type: d, cssRules: [], insertRule(c, m) {
        this.cssRules.splice(m, 0, u(c, { import: 3, undefined: 1 }[(c.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return r === "@media{}" ? `@media{${[].map.call(this.cssRules, (c) => c.cssText).join("")}}` : r;
      } });
      t = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : u("", "text/css"), rules: {}, reset: n, toString: a };
    }
    const { sheet: i, rules: s } = t;
    for (let u = xt.length - 1; u >= 0; --u) {
      const r = xt[u];
      if (!s[r]) {
        const d = xt[u + 1], c = s[d] ? s[d].index : i.cssRules.length;
        i.insertRule("@media{}", c), i.insertRule(`--sxs{--sxs:${u}}`, c), s[r] = { group: i.cssRules[c + 1], index: c, cache: /* @__PURE__ */ new Set([u]) };
      }
      Ko(s[r]);
    }
  };
  return n(), t;
}, Ko = (e) => {
  const t = e.group;
  let a = t.cssRules.length;
  e.apply = (n) => {
    try {
      t.insertRule(n, a), ++a;
    } catch {
    }
  };
}, Ot = Symbol(), Yo = Ft(), Zo = (e, t) => Yo(e, () => (...a) => {
  let n = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const l of a)
    if (l != null)
      if (l[Qt]) {
        n.type == null && (n.type = l[Qt].type);
        for (const i of l[Qt].composers)
          n.composers.add(i);
      } else
        l.constructor !== Object || l.$$typeof ? n.type == null && (n.type = l) : n.composers.add(Jo(l, e));
  return n.type == null && (n.type = "span"), n.composers.size || n.composers.add(["PJLV", {}, [], [], {}, []]), Xo(e, n, t);
}), Jo = ({ variants: e, compoundVariants: t, defaultVariants: a, ...n }, l) => {
  const i = `${De(l.prefix)}c-${tt(n)}`, s = [], u = [], r = /* @__PURE__ */ Object.create(null), d = [];
  for (const _ in a)
    r[_] = String(a[_]);
  if (typeof e == "object" && e)
    for (const _ in e) {
      c = r, m = _, Fo.call(c, m) || (r[_] = "undefined");
      const p = e[_];
      for (const b in p) {
        const w = { [_]: String(b) };
        String(b) === "undefined" && d.push(_);
        const y = p[b], h = [w, y, !gn(y)];
        s.push(h);
      }
    }
  var c, m;
  if (typeof t == "object" && t)
    for (const _ of t) {
      let { css: p, ...b } = _;
      p = typeof p == "object" && p || {};
      for (const y in b)
        b[y] = String(b[y]);
      const w = [b, p, !gn(p)];
      u.push(w);
    }
  return [i, n, s, u, r, d];
}, Xo = (e, t, a) => {
  const [n, l, i, s] = qo(t.composers), u = typeof t.type == "function" || t.type.$$typeof ? ((m) => {
    function _() {
      for (let p = 0; p < _[Ot].length; p++) {
        const [b, w] = _[Ot][p];
        m.rules[b].apply(w);
      }
      return _[Ot] = [], null;
    }
    return _[Ot] = [], _.rules = {}, xt.forEach((p) => _.rules[p] = { apply: (b) => _[Ot].push([p, b]) }), _;
  })(a) : null, r = (u || a).rules, d = `.${n}${l.length > 1 ? `:where(.${l.slice(1).join(".")})` : ""}`, c = (m) => {
    m = typeof m == "object" && m || Qo;
    const { css: _, ...p } = m, b = {};
    for (const h in i)
      if (delete p[h], h in m) {
        let C = m[h];
        typeof C == "object" && C ? b[h] = { "@initial": i[h], ...C } : (C = String(C), b[h] = C !== "undefined" || s.has(h) ? C : i[h]);
      } else
        b[h] = i[h];
    const w = /* @__PURE__ */ new Set([...l]);
    for (const [h, C, M, N] of t.composers) {
      a.rules.styled.cache.has(h) || (a.rules.styled.cache.add(h), vt(C, [`.${h}`], [], e, (D) => {
        r.styled.apply(D);
      }));
      const P = En(M, b, e.media), A = En(N, b, e.media, !0);
      for (const D of P)
        if (D !== void 0)
          for (const [R, S, J] of D) {
            const ne = `${h}-${tt(S)}-${R}`;
            w.add(ne);
            const ee = (J ? a.rules.resonevar : a.rules.onevar).cache, ke = J ? r.resonevar : r.onevar;
            ee.has(ne) || (ee.add(ne), vt(S, [`.${ne}`], [], e, (Le) => {
              ke.apply(Le);
            }));
          }
      for (const D of A)
        if (D !== void 0)
          for (const [R, S] of D) {
            const J = `${h}-${tt(S)}-${R}`;
            w.add(J), a.rules.allvar.cache.has(J) || (a.rules.allvar.cache.add(J), vt(S, [`.${J}`], [], e, (ne) => {
              r.allvar.apply(ne);
            }));
          }
    }
    if (typeof _ == "object" && _) {
      const h = `${n}-i${tt(_)}-css`;
      w.add(h), a.rules.inline.cache.has(h) || (a.rules.inline.cache.add(h), vt(_, [`.${h}`], [], e, (C) => {
        r.inline.apply(C);
      }));
    }
    for (const h of String(m.className || "").trim().split(/\s+/))
      h && w.add(h);
    const y = p.className = [...w].join(" ");
    return { type: t.type, className: y, selector: d, props: p, toString: () => y, deferredInjector: u };
  };
  return Ja(c, { className: n, selector: d, [Qt]: t, toString: () => (a.rules.styled.cache.has(n) || c(), n) });
}, qo = (e) => {
  let t = "";
  const a = [], n = {}, l = [];
  for (const [i, , , , s, u] of e) {
    t === "" && (t = i), a.push(i), l.push(...u);
    for (const r in s) {
      const d = s[r];
      (n[r] === void 0 || d !== "undefined" || u.includes(d)) && (n[r] = d);
    }
  }
  return [t, a, n, new Set(l)];
}, En = (e, t, a, n) => {
  const l = [];
  e:
    for (let [i, s, u] of e) {
      if (u)
        continue;
      let r, d = 0, c = !1;
      for (r in i) {
        const m = i[r];
        let _ = t[r];
        if (_ !== m) {
          if (typeof _ != "object" || !_)
            continue e;
          {
            let p, b, w = 0;
            for (const y in _) {
              if (m === String(_[y])) {
                if (y !== "@initial") {
                  const h = y.slice(1);
                  (b = b || []).push(h in a ? a[h] : y.replace(/^@media ?/, "")), c = !0;
                }
                d += w, p = !0;
              }
              ++w;
            }
            if (b && b.length && (s = { ["@media " + b.join(", ")]: s }), !p)
              continue e;
          }
        }
      }
      (l[d] = l[d] || []).push([n ? "cv" : `${r}-${i[r]}`, s, c]);
    }
  return l;
}, Qo = {}, ei = Ft(), ti = (e, t) => ei(e, () => (...a) => {
  const n = () => {
    for (let l of a) {
      l = typeof l == "object" && l || {};
      let i = tt(l);
      if (!t.rules.global.cache.has(i)) {
        if (t.rules.global.cache.add(i), "@import" in l) {
          let s = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let u of [].concat(l["@import"]))
            u = u.includes('"') || u.includes("'") ? u : `"${u}"`, t.sheet.insertRule(`@import ${u};`, s++);
          delete l["@import"];
        }
        vt(l, [], [], e, (s) => {
          t.rules.global.apply(s);
        });
      }
    }
    return "";
  };
  return Ja(n, { toString: n });
}), ai = Ft(), ni = (e, t) => ai(e, () => (a) => {
  const n = `${De(e.prefix)}k-${tt(a)}`, l = () => {
    if (!t.rules.global.cache.has(n)) {
      t.rules.global.cache.add(n);
      const i = [];
      vt(a, [], [], e, (u) => i.push(u));
      const s = `@keyframes ${n}{${i.join("")}}`;
      t.rules.global.apply(s);
    }
    return n;
  };
  return Ja(l, { get name() {
    return l();
  }, toString: l });
}), li = class {
  constructor(e, t, a, n) {
    this.token = e == null ? "" : String(e), this.value = t == null ? "" : String(t), this.scale = a == null ? "" : String(a), this.prefix = n == null ? "" : String(n);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + De(this.prefix) + De(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, oi = Ft(), ii = (e, t) => oi(e, () => (a, n) => {
  n = typeof a == "object" && a || Object(n);
  const l = `.${a = (a = typeof a == "string" ? a : "") || `${De(e.prefix)}t-${tt(n)}`}`, i = {}, s = [];
  for (const r in n) {
    i[r] = {};
    for (const d in n[r]) {
      const c = `--${De(e.prefix)}${r}-${d}`, m = Jn(String(n[r][d]), e.prefix, r);
      i[r][d] = new li(d, m, r, e.prefix), s.push(`${c}:${m}`);
    }
  }
  const u = () => {
    if (s.length && !t.rules.themed.cache.has(a)) {
      t.rules.themed.cache.add(a);
      const r = `${n === e.theme ? ":root," : ""}.${a}{${s.join(";")}}`;
      t.rules.themed.apply(r);
    }
    return a;
  };
  return { ...i, get className() {
    return u();
  }, selector: l, toString: u };
}), ri = Ft(), Fa = (e) => {
  let t = !1;
  const a = ri(e, (n) => {
    t = !0;
    const l = "prefix" in (n = typeof n == "object" && n || {}) ? String(n.prefix) : "", i = typeof n.media == "object" && n.media || {}, s = typeof n.root == "object" ? n.root || null : globalThis.document || null, u = typeof n.theme == "object" && n.theme || {}, r = { prefix: l, media: i, theme: u, themeMap: typeof n.themeMap == "object" && n.themeMap || { ...Ro }, utils: typeof n.utils == "object" && n.utils || {} }, d = Ho(s), c = { css: Zo(r, d), globalCss: ti(r, d), keyframes: ni(r, d), createTheme: ii(r, d), reset() {
      d.reset(), c.theme.toString();
    }, theme: {}, sheet: d, config: r, prefix: l, getCssText: d.toString, toString: d.toString };
    return String(c.theme = c.createTheme(u)), c;
  });
  return t || a.reset(), a;
}, Xn = () => bn || (bn = Fa()), si = (...e) => Xn().createTheme(...e), st = (...e) => Xn().css(...e), Jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ui(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ta = { exports: {} };
ta.exports;
(function(e, t) {
  var a = 200, n = "__lodash_hash_undefined__", l = 9007199254740991, i = "[object Arguments]", s = "[object Array]", u = "[object Boolean]", r = "[object Date]", d = "[object Error]", c = "[object Function]", m = "[object GeneratorFunction]", _ = "[object Map]", p = "[object Number]", b = "[object Object]", w = "[object Promise]", y = "[object RegExp]", h = "[object Set]", C = "[object String]", M = "[object Symbol]", N = "[object WeakMap]", P = "[object ArrayBuffer]", A = "[object DataView]", D = "[object Float32Array]", R = "[object Float64Array]", S = "[object Int8Array]", J = "[object Int16Array]", ne = "[object Int32Array]", ee = "[object Uint8Array]", ke = "[object Uint8ClampedArray]", Le = "[object Uint16Array]", Ge = "[object Uint32Array]", kt = /[\\^$.*+?()[\]{}|]/g, He = /\w*$/, Ke = /^\[object .+?Constructor\]$/, pa = /^(?:0|[1-9]\d*)$/, Y = {};
  Y[i] = Y[s] = Y[P] = Y[A] = Y[u] = Y[r] = Y[D] = Y[R] = Y[S] = Y[J] = Y[ne] = Y[_] = Y[p] = Y[b] = Y[y] = Y[h] = Y[C] = Y[M] = Y[ee] = Y[ke] = Y[Le] = Y[Ge] = !0, Y[d] = Y[c] = Y[N] = !1;
  var da = typeof Jt == "object" && Jt && Jt.Object === Object && Jt, Ae = typeof self == "object" && self && self.Object === Object && self, ye = da || Ae || Function("return this")(), $t = t && !t.nodeType && t, Vt = $t && !0 && e && !e.nodeType && e, ma = Vt && Vt.exports === $t;
  function fa(o, f) {
    return o.set(f[0], f[1]), o;
  }
  function tn(o, f) {
    return o.add(f), o;
  }
  function ba(o, f) {
    for (var v = -1, I = o ? o.length : 0; ++v < I && f(o[v], v, o) !== !1; )
      ;
    return o;
  }
  function ga(o, f) {
    for (var v = -1, I = f.length, se = o.length; ++v < I; )
      o[se + v] = f[v];
    return o;
  }
  function zt(o, f, v, I) {
    var se = -1, de = o ? o.length : 0;
    for (I && de && (v = o[++se]); ++se < de; )
      v = f(v, o[se], se, o);
    return v;
  }
  function ha(o, f) {
    for (var v = -1, I = Array(o); ++v < o; )
      I[v] = f(v);
    return I;
  }
  function va(o, f) {
    return o == null ? void 0 : o[f];
  }
  function Bt(o) {
    var f = !1;
    if (o != null && typeof o.toString != "function")
      try {
        f = !!(o + "");
      } catch {
      }
    return f;
  }
  function Ut(o) {
    var f = -1, v = Array(o.size);
    return o.forEach(function(I, se) {
      v[++f] = [se, I];
    }), v;
  }
  function yt(o, f) {
    return function(v) {
      return o(f(v));
    };
  }
  function Ct(o) {
    var f = -1, v = Array(o.size);
    return o.forEach(function(I) {
      v[++f] = I;
    }), v;
  }
  var wa = Array.prototype, Ea = Function.prototype, _t = Object.prototype, Tt = ye["__core-js_shared__"], jt = function() {
    var o = /[^.]+$/.exec(Tt && Tt.keys && Tt.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), Wt = Ea.toString, Oe = _t.hasOwnProperty, pt = _t.toString, te = RegExp(
    "^" + Wt.call(Oe).replace(kt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), g = ma ? ye.Buffer : void 0, E = ye.Symbol, V = ye.Uint8Array, q = yt(Object.getPrototypeOf, Object), Ie = Object.create, dt = _t.propertyIsEnumerable, Ve = wa.splice, xe = Object.getOwnPropertySymbols, ka = g ? g.isBuffer : void 0, Gt = yt(Object.keys, Object), ya = bt(ye, "DataView"), St = bt(ye, "Map"), Ca = bt(ye, "Promise"), Ta = bt(ye, "Set"), Sa = bt(ye, "WeakMap"), Nt = bt(Object, "create"), yl = Je(ya), Cl = Je(St), Tl = Je(Ca), Sl = Je(Ta), Nl = Je(Sa), an = E ? E.prototype : void 0, nn = an ? an.valueOf : void 0;
  function Ye(o) {
    var f = -1, v = o ? o.length : 0;
    for (this.clear(); ++f < v; ) {
      var I = o[f];
      this.set(I[0], I[1]);
    }
  }
  function Ol() {
    this.__data__ = Nt ? Nt(null) : {};
  }
  function Il(o) {
    return this.has(o) && delete this.__data__[o];
  }
  function xl(o) {
    var f = this.__data__;
    if (Nt) {
      var v = f[o];
      return v === n ? void 0 : v;
    }
    return Oe.call(f, o) ? f[o] : void 0;
  }
  function Ll(o) {
    var f = this.__data__;
    return Nt ? f[o] !== void 0 : Oe.call(f, o);
  }
  function Al(o, f) {
    var v = this.__data__;
    return v[o] = Nt && f === void 0 ? n : f, this;
  }
  Ye.prototype.clear = Ol, Ye.prototype.delete = Il, Ye.prototype.get = xl, Ye.prototype.has = Ll, Ye.prototype.set = Al;
  function Me(o) {
    var f = -1, v = o ? o.length : 0;
    for (this.clear(); ++f < v; ) {
      var I = o[f];
      this.set(I[0], I[1]);
    }
  }
  function Ml() {
    this.__data__ = [];
  }
  function Pl(o) {
    var f = this.__data__, v = Ht(f, o);
    if (v < 0)
      return !1;
    var I = f.length - 1;
    return v == I ? f.pop() : Ve.call(f, v, 1), !0;
  }
  function Rl(o) {
    var f = this.__data__, v = Ht(f, o);
    return v < 0 ? void 0 : f[v][1];
  }
  function Dl(o) {
    return Ht(this.__data__, o) > -1;
  }
  function Fl(o, f) {
    var v = this.__data__, I = Ht(v, o);
    return I < 0 ? v.push([o, f]) : v[I][1] = f, this;
  }
  Me.prototype.clear = Ml, Me.prototype.delete = Pl, Me.prototype.get = Rl, Me.prototype.has = Dl, Me.prototype.set = Fl;
  function mt(o) {
    var f = -1, v = o ? o.length : 0;
    for (this.clear(); ++f < v; ) {
      var I = o[f];
      this.set(I[0], I[1]);
    }
  }
  function $l() {
    this.__data__ = {
      hash: new Ye(),
      map: new (St || Me)(),
      string: new Ye()
    };
  }
  function Vl(o) {
    return Kt(this, o).delete(o);
  }
  function zl(o) {
    return Kt(this, o).get(o);
  }
  function Bl(o) {
    return Kt(this, o).has(o);
  }
  function Ul(o, f) {
    return Kt(this, o).set(o, f), this;
  }
  mt.prototype.clear = $l, mt.prototype.delete = Vl, mt.prototype.get = zl, mt.prototype.has = Bl, mt.prototype.set = Ul;
  function ft(o) {
    this.__data__ = new Me(o);
  }
  function jl() {
    this.__data__ = new Me();
  }
  function Wl(o) {
    return this.__data__.delete(o);
  }
  function Gl(o) {
    return this.__data__.get(o);
  }
  function Hl(o) {
    return this.__data__.has(o);
  }
  function Kl(o, f) {
    var v = this.__data__;
    if (v instanceof Me) {
      var I = v.__data__;
      if (!St || I.length < a - 1)
        return I.push([o, f]), this;
      v = this.__data__ = new mt(I);
    }
    return v.set(o, f), this;
  }
  ft.prototype.clear = jl, ft.prototype.delete = Wl, ft.prototype.get = Gl, ft.prototype.has = Hl, ft.prototype.set = Kl;
  function Yl(o, f) {
    var v = Ia(o) || vo(o) ? ha(o.length, String) : [], I = v.length, se = !!I;
    for (var de in o)
      (f || Oe.call(o, de)) && !(se && (de == "length" || fo(de, I))) && v.push(de);
    return v;
  }
  function ln(o, f, v) {
    var I = o[f];
    (!(Oe.call(o, f) && un(I, v)) || v === void 0 && !(f in o)) && (o[f] = v);
  }
  function Ht(o, f) {
    for (var v = o.length; v--; )
      if (un(o[v][0], f))
        return v;
    return -1;
  }
  function Zl(o, f) {
    return o && on(f, xa(f), o);
  }
  function Na(o, f, v, I, se, de, Ce) {
    var ge;
    if (I && (ge = de ? I(o, se, de, Ce) : I(o)), ge !== void 0)
      return ge;
    if (!Yt(o))
      return o;
    var pn = Ia(o);
    if (pn) {
      if (ge = _o(o), !f)
        return so(o, ge);
    } else {
      var gt = Ze(o), dn = gt == c || gt == m;
      if (Eo(o))
        return to(o, f);
      if (gt == b || gt == i || dn && !de) {
        if (Bt(o))
          return de ? o : {};
        if (ge = po(dn ? {} : o), !f)
          return uo(o, Zl(ge, o));
      } else {
        if (!Y[gt])
          return de ? o : {};
        ge = mo(o, gt, Na, f);
      }
    }
    Ce || (Ce = new ft());
    var mn = Ce.get(o);
    if (mn)
      return mn;
    if (Ce.set(o, ge), !pn)
      var fn = v ? co(o) : xa(o);
    return ba(fn || o, function(La, Zt) {
      fn && (Zt = La, La = o[Zt]), ln(ge, Zt, Na(La, f, v, I, Zt, o, Ce));
    }), ge;
  }
  function Jl(o) {
    return Yt(o) ? Ie(o) : {};
  }
  function Xl(o, f, v) {
    var I = f(o);
    return Ia(o) ? I : ga(I, v(o));
  }
  function ql(o) {
    return pt.call(o);
  }
  function Ql(o) {
    if (!Yt(o) || go(o))
      return !1;
    var f = _n(o) || Bt(o) ? te : Ke;
    return f.test(Je(o));
  }
  function eo(o) {
    if (!sn(o))
      return Gt(o);
    var f = [];
    for (var v in Object(o))
      Oe.call(o, v) && v != "constructor" && f.push(v);
    return f;
  }
  function to(o, f) {
    if (f)
      return o.slice();
    var v = new o.constructor(o.length);
    return o.copy(v), v;
  }
  function Oa(o) {
    var f = new o.constructor(o.byteLength);
    return new V(f).set(new V(o)), f;
  }
  function ao(o, f) {
    var v = f ? Oa(o.buffer) : o.buffer;
    return new o.constructor(v, o.byteOffset, o.byteLength);
  }
  function no(o, f, v) {
    var I = f ? v(Ut(o), !0) : Ut(o);
    return zt(I, fa, new o.constructor());
  }
  function lo(o) {
    var f = new o.constructor(o.source, He.exec(o));
    return f.lastIndex = o.lastIndex, f;
  }
  function oo(o, f, v) {
    var I = f ? v(Ct(o), !0) : Ct(o);
    return zt(I, tn, new o.constructor());
  }
  function io(o) {
    return nn ? Object(nn.call(o)) : {};
  }
  function ro(o, f) {
    var v = f ? Oa(o.buffer) : o.buffer;
    return new o.constructor(v, o.byteOffset, o.length);
  }
  function so(o, f) {
    var v = -1, I = o.length;
    for (f || (f = Array(I)); ++v < I; )
      f[v] = o[v];
    return f;
  }
  function on(o, f, v, I) {
    v || (v = {});
    for (var se = -1, de = f.length; ++se < de; ) {
      var Ce = f[se], ge = I ? I(v[Ce], o[Ce], Ce, v, o) : void 0;
      ln(v, Ce, ge === void 0 ? o[Ce] : ge);
    }
    return v;
  }
  function uo(o, f) {
    return on(o, rn(o), f);
  }
  function co(o) {
    return Xl(o, xa, rn);
  }
  function Kt(o, f) {
    var v = o.__data__;
    return bo(f) ? v[typeof f == "string" ? "string" : "hash"] : v.map;
  }
  function bt(o, f) {
    var v = va(o, f);
    return Ql(v) ? v : void 0;
  }
  var rn = xe ? yt(xe, Object) : Co, Ze = ql;
  (ya && Ze(new ya(new ArrayBuffer(1))) != A || St && Ze(new St()) != _ || Ca && Ze(Ca.resolve()) != w || Ta && Ze(new Ta()) != h || Sa && Ze(new Sa()) != N) && (Ze = function(o) {
    var f = pt.call(o), v = f == b ? o.constructor : void 0, I = v ? Je(v) : void 0;
    if (I)
      switch (I) {
        case yl:
          return A;
        case Cl:
          return _;
        case Tl:
          return w;
        case Sl:
          return h;
        case Nl:
          return N;
      }
    return f;
  });
  function _o(o) {
    var f = o.length, v = o.constructor(f);
    return f && typeof o[0] == "string" && Oe.call(o, "index") && (v.index = o.index, v.input = o.input), v;
  }
  function po(o) {
    return typeof o.constructor == "function" && !sn(o) ? Jl(q(o)) : {};
  }
  function mo(o, f, v, I) {
    var se = o.constructor;
    switch (f) {
      case P:
        return Oa(o);
      case u:
      case r:
        return new se(+o);
      case A:
        return ao(o, I);
      case D:
      case R:
      case S:
      case J:
      case ne:
      case ee:
      case ke:
      case Le:
      case Ge:
        return ro(o, I);
      case _:
        return no(o, I, v);
      case p:
      case C:
        return new se(o);
      case y:
        return lo(o);
      case h:
        return oo(o, I, v);
      case M:
        return io(o);
    }
  }
  function fo(o, f) {
    return f = f ?? l, !!f && (typeof o == "number" || pa.test(o)) && o > -1 && o % 1 == 0 && o < f;
  }
  function bo(o) {
    var f = typeof o;
    return f == "string" || f == "number" || f == "symbol" || f == "boolean" ? o !== "__proto__" : o === null;
  }
  function go(o) {
    return !!jt && jt in o;
  }
  function sn(o) {
    var f = o && o.constructor, v = typeof f == "function" && f.prototype || _t;
    return o === v;
  }
  function Je(o) {
    if (o != null) {
      try {
        return Wt.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function ho(o) {
    return Na(o, !0, !0);
  }
  function un(o, f) {
    return o === f || o !== o && f !== f;
  }
  function vo(o) {
    return wo(o) && Oe.call(o, "callee") && (!dt.call(o, "callee") || pt.call(o) == i);
  }
  var Ia = Array.isArray;
  function cn(o) {
    return o != null && ko(o.length) && !_n(o);
  }
  function wo(o) {
    return yo(o) && cn(o);
  }
  var Eo = ka || To;
  function _n(o) {
    var f = Yt(o) ? pt.call(o) : "";
    return f == c || f == m;
  }
  function ko(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= l;
  }
  function Yt(o) {
    var f = typeof o;
    return !!o && (f == "object" || f == "function");
  }
  function yo(o) {
    return !!o && typeof o == "object";
  }
  function xa(o) {
    return cn(o) ? Yl(o) : eo(o);
  }
  function Co() {
    return [];
  }
  function To() {
    return !1;
  }
  e.exports = ho;
})(ta, ta.exports);
var ci = ta.exports;
const Xt = /* @__PURE__ */ ui(ci), je = Symbol("AuthView"), _i = Symbol("UserContextProvider"), pi = /* @__PURE__ */ ae({
  __name: "SocialAuthContainer",
  props: {
    theme: {},
    className: {},
    appearance: {}
  },
  setup(e) {
    const t = e, a = lt(), n = X(() => {
      var l, i, s, u;
      return t.theme !== "default" ? si(
        Ra(
          (i = (l = t.appearance) == null ? void 0 : l.theme) == null ? void 0 : i[t.theme],
          ((u = (s = t.appearance) == null ? void 0 : s.variables) == null ? void 0 : u[t.theme]) ?? {}
        )
      ).className : "";
    });
    return (l, i) => (T(), F(ot("div"), it(k(a), { class: n.value }), {
      default: L(() => [
        Ue(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qe = /* @__PURE__ */ ae({
  __name: "Anchor",
  props: {
    appearance: {}
  },
  setup(e) {
    const t = st({
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
    }), a = e, n = lt(), l = X(() => rt(
      "anchor",
      t(),
      a.appearance
    ).join(" "));
    return (i, s) => {
      var u, r;
      return T(), F(ot("a"), it(k(n), {
        class: l.value,
        style: (r = (u = i.appearance) == null ? void 0 : u.style) == null ? void 0 : r.anchor
      }), {
        default: L(() => [
          Ue(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
}), di = ["disabled"], ut = /* @__PURE__ */ ae({
  __name: "Button",
  props: {
    appearance: {},
    icon: {},
    color: { default: "default" },
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = st({
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
    }), a = e, n = lt(), l = X(() => rt(
      "button",
      t({ color: a.color }),
      a.appearance
    ).join(" "));
    return (i, s) => {
      var u, r;
      return T(), j("button", it(k(n), {
        class: l.value,
        style: (r = (u = i.appearance) == null ? void 0 : u.style) == null ? void 0 : r.button,
        disabled: i.loading
      }), [
        Ue(i.$slots, "icon"),
        Ue(i.$slots, "default")
      ], 16, di);
    };
  }
}), Ne = /* @__PURE__ */ ae({
  __name: "Container",
  props: {
    is: { default: "div" },
    direction: {},
    gap: {},
    appearance: {}
  },
  setup(e) {
    const t = st({
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
    }), a = e, n = X(() => rt(
      "container",
      t({
        direction: a.direction,
        gap: a.gap
      }),
      a.appearance
    ).join(" "));
    return (l, i) => {
      var s, u;
      return T(), F(ot(l.is), {
        class: So(n.value),
        style: No((u = (s = l.appearance) == null ? void 0 : s.style) == null ? void 0 : u.container)
      }, {
        default: L(() => [
          Ue(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
}), mi = /* @__PURE__ */ ae({
  __name: "Divider",
  props: {
    appearance: {}
  },
  setup(e) {
    const t = st({
      background: "$dividerBackground",
      display: "block",
      margin: "16px 0",
      height: "1px",
      width: "100%"
    }), a = e, n = lt(), l = X(() => rt(
      "divider",
      t(),
      a.appearance
    ).join(" "));
    return (i, s) => {
      var u, r;
      return T(), F(ot("div"), it(k(n), {
        class: l.value,
        style: (r = (u = i.appearance) == null ? void 0 : u.style) == null ? void 0 : r.divider
      }), {
        default: L(() => [
          Ue(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
}), fi = ["type", "value"], ze = /* @__PURE__ */ ae({
  __name: "Input",
  props: {
    type: {},
    appearance: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = st({
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
    }), a = e, n = lt(), l = X(() => rt(
      "input",
      t({
        type: a.type === "password" ? "password" : "default"
      }),
      a.appearance
    ).join(" "));
    return (i, s) => {
      var u, r;
      return T(), j("input", it(k(n), {
        type: i.type,
        class: l.value,
        style: (r = (u = i.appearance) == null ? void 0 : u.style) == null ? void 0 : r.input,
        value: i.modelValue,
        onInput: s[0] || (s[0] = (d) => i.$emit("update:modelValue", (d == null ? void 0 : d.target).value))
      }), null, 16, fi);
    };
  }
}), Be = /* @__PURE__ */ ae({
  __name: "Label",
  props: {
    appearance: {}
  },
  setup(e) {
    const t = st({
      fontFamily: "$labelFontFamily",
      fontSize: "$baseLabelSize",
      marginBottom: "$labelBottomMargin",
      color: "$inputLabelText",
      display: "block"
    }), a = e, n = lt(), l = X(() => rt(
      "label",
      t(),
      a.appearance
    ).join(" "));
    return (i, s) => {
      var u, r;
      return T(), F(ot("label"), it(k(n), {
        class: l.value,
        style: (r = (u = i.appearance) == null ? void 0 : u.style) == null ? void 0 : r.label
      }), {
        default: L(() => [
          Ue(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
}), Se = /* @__PURE__ */ ae({
  __name: "Message",
  props: {
    color: { default: "default" },
    appearance: {}
  },
  setup(e) {
    const t = st({
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
    }), a = e, n = lt(), l = X(() => rt(
      "message",
      t({ color: a.color }),
      a.appearance
    ).join(" "));
    return (i, s) => {
      var u, r;
      return T(), F(ot("span"), it(k(n), {
        class: l.value,
        style: (r = (u = i.appearance) == null ? void 0 : u.style) == null ? void 0 : r.message
      }), {
        default: L(() => [
          Ue(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
});
function ct(e, t) {
  const a = Yn(e, t);
  if (!a)
    throw new Error(`Could not resolve ${e.description}`);
  return a;
}
const bi = ["id"], gi = /* @__PURE__ */ ae({
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
  setup(e, { emit: t }) {
    const a = e, n = W(""), l = W(""), i = W(""), s = W(""), u = W(!1), { authView: r, setAuthView: d } = ct(je), c = X(
      () => {
        var p;
        return (p = a.i18n) == null ? void 0 : p[r.value];
      }
    ), m = t, _ = async (p) => {
      var b, w;
      switch (i.value = "", s.value = "", u.value = !0, m("auth:submit", {
        email: n.value,
        password: l.value,
        view: r.value
      }), r.value) {
        case "sign_in":
          const {
            // data: { user: signInUser, session: signInSession },
            error: y
          } = await a.supabaseClient.auth.signInWithPassword({
            email: n.value,
            password: l.value,
            options: a.options
          });
          y && (i.value = y.message, m("auth:error", y)), u.value = !1;
          break;
        case "sign_up":
          let h = {
            emailRedirectTo: a.redirectTo
          };
          a.additionalData && (h.data = a.additionalData);
          const {
            data: { user: C, session: M },
            error: N
          } = await a.supabaseClient.auth.signUp({
            email: n.value,
            password: l.value,
            options: {
              ...a.options ?? {},
              ...h
            }
          });
          N ? (i.value = N.message, m("auth:error", N)) : C && !M && (s.value = (w = (b = a.i18n) == null ? void 0 : b.sign_up) == null ? void 0 : w.confirmation_text), u.value = !1;
      }
    };
    return Lt(
      () => r.value,
      () => {
        u.value = !1;
      }
    ), (p, b) => (T(), j("form", {
      id: `auth-${k(r)}`,
      onSubmit: we(_, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      U(k(Ne), {
        direction: "vertical",
        gap: "large",
        appearance: p.appearance
      }, {
        default: L(() => [
          U(k(Ne), {
            direction: "vertical",
            gap: "large",
            appearance: p.appearance
          }, {
            default: L(() => {
              var w, y;
              return [
                $("div", null, [
                  U(k(Be), {
                    htmlFor: "email",
                    appearance: p.appearance
                  }, {
                    default: L(() => {
                      var h;
                      return [
                        z(B((h = c.value) == null ? void 0 : h.email_label), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["appearance"]),
                  U(k(ze), {
                    id: "email",
                    type: "email",
                    name: "email",
                    modelValue: n.value,
                    "onUpdate:modelValue": b[0] || (b[0] = (h) => n.value = h),
                    placeholder: (w = c.value) == null ? void 0 : w.email_input_placeholder,
                    autoComplete: "email",
                    appearance: p.appearance
                  }, null, 8, ["modelValue", "placeholder", "appearance"])
                ]),
                $("div", null, [
                  U(k(Be), {
                    htmlFor: "password",
                    appearance: p.appearance
                  }, {
                    default: L(() => {
                      var h;
                      return [
                        z(B((h = c.value) == null ? void 0 : h.password_label), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["appearance"]),
                  U(k(ze), {
                    id: "password",
                    type: "password",
                    name: "password",
                    modelValue: l.value,
                    "onUpdate:modelValue": b[1] || (b[1] = (h) => l.value = h),
                    placeholder: (y = c.value) == null ? void 0 : y.password_input_placeholder,
                    autoComplete: k(r) === "sign_in" ? "current-password" : "new-password",
                    appearance: p.appearance
                  }, null, 8, ["modelValue", "placeholder", "autoComplete", "appearance"])
                ])
              ];
            }),
            _: 1
          }, 8, ["appearance"]),
          U(k(ut), {
            type: "submit",
            color: "primary",
            loading: u.value,
            appearance: p.appearance
          }, {
            default: L(() => {
              var w, y;
              return [
                z(B(u.value ? (w = c.value) == null ? void 0 : w.loading_button_label : (y = c.value) == null ? void 0 : y.button_label), 1)
              ];
            }),
            _: 1
          }, 8, ["loading", "appearance"]),
          p.showLinks ? (T(), F(k(Ne), {
            key: 0,
            direction: "vertical",
            gap: "small",
            appearance: p.appearance
          }, {
            default: L(() => [
              k(r) === k(fe).SIGN_IN && p.magicLink ? (T(), F(k(Qe), {
                key: 0,
                href: "#auth-magic-link",
                appearance: p.appearance,
                onClick: b[2] || (b[2] = we((w) => k(d)(k(fe).MAGIC_LINK), ["prevent"]))
              }, {
                default: L(() => {
                  var w, y;
                  return [
                    z(B((y = (w = p.i18n) == null ? void 0 : w.magic_link) == null ? void 0 : y.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"])) : K("", !0),
              k(r) === k(fe).SIGN_IN ? (T(), F(k(Qe), {
                key: 1,
                href: "#auth-forgot-password",
                appearance: p.appearance,
                onClick: b[3] || (b[3] = we((w) => k(d)(k(fe).FORGOTTEN_PASSWORD), ["prevent"]))
              }, {
                default: L(() => {
                  var w, y;
                  return [
                    z(B((y = (w = p.i18n) == null ? void 0 : w.forgotten_password) == null ? void 0 : y.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"])) : K("", !0),
              k(r) === k(fe).SIGN_IN ? (T(), F(k(Qe), {
                key: 2,
                href: "#auth-sign-up",
                appearance: p.appearance,
                onClick: b[4] || (b[4] = we((w) => k(d)(k(fe).SIGN_UP), ["prevent"]))
              }, {
                default: L(() => {
                  var w, y;
                  return [
                    z(B((y = (w = p.i18n) == null ? void 0 : w.sign_up) == null ? void 0 : y.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"])) : (T(), F(k(Qe), {
                key: 3,
                href: "#auth-sign-in",
                appearance: p.appearance,
                onClick: b[5] || (b[5] = we((w) => k(d)(k(fe).SIGN_IN), ["prevent"]))
              }, {
                default: L(() => {
                  var w, y;
                  return [
                    z(B((y = (w = p.i18n) == null ? void 0 : w.sign_in) == null ? void 0 : y.link_text), 1)
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
      s.value ? (T(), F(k(Se), {
        key: 0,
        appearance: p.appearance
      }, {
        default: L(() => [
          z(B(s.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0),
      i.value ? (T(), F(k(Se), {
        key: 1,
        color: "danger",
        appearance: p.appearance
      }, {
        default: L(() => [
          z(B(i.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0)
    ], 40, bi));
  }
}), re = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, l] of t)
    a[n] = l;
  return a;
}, hi = {}, vi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function wi(e, t) {
  return T(), j("svg", vi, t[0] || (t[0] = [
    $("path", {
      fill: "#FFC107",
      d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    }, null, -1),
    $("path", {
      fill: "#FF3D00",
      d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    }, null, -1),
    $("path", {
      fill: "#4CAF50",
      d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    }, null, -1),
    $("path", {
      fill: "#1976D2",
      d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    }, null, -1)
  ]));
}
const Ei = /* @__PURE__ */ re(hi, [["render", wi]]), ki = {}, yi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Ci(e, t) {
  return T(), j("svg", yi, t[0] || (t[0] = [
    $("path", {
      fill: "#039be5",
      d: "M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
    }, null, -1),
    $("path", {
      fill: "#fff",
      d: "M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
    }, null, -1)
  ]));
}
const Ti = /* @__PURE__ */ re(ki, [["render", Ci]]), Si = {}, Ni = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Oi(e, t) {
  return T(), j("svg", Ni, t[0] || (t[0] = [
    $("path", {
      fill: "#03A9F4",
      d: "M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
    }, null, -1)
  ]));
}
const Ii = /* @__PURE__ */ re(Si, [["render", Oi]]), xi = {}, Li = {
  fill: "gray",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "21px",
  height: "21px"
};
function Ai(e, t) {
  return T(), j("svg", Li, t[0] || (t[0] = [
    $("path", { d: "M 15.904297 1.078125 C 15.843359 1.06875 15.774219 1.0746094 15.699219 1.0996094 C 14.699219 1.2996094 13.600391 1.8996094 12.900391 2.5996094 C 12.300391 3.1996094 11.800781 4.1996094 11.800781 5.0996094 C 11.800781 5.2996094 11.999219 5.5 12.199219 5.5 C 13.299219 5.4 14.399609 4.7996094 15.099609 4.0996094 C 15.699609 3.2996094 16.199219 2.4 16.199219 1.5 C 16.199219 1.275 16.087109 1.10625 15.904297 1.078125 z M 16.199219 5.4003906 C 14.399219 5.4003906 13.600391 6.5 12.400391 6.5 C 11.100391 6.5 9.9003906 5.5 8.4003906 5.5 C 6.3003906 5.5 3.0996094 7.4996094 3.0996094 12.099609 C 2.9996094 16.299609 6.8 21 9 21 C 10.3 21 10.600391 20.199219 12.400391 20.199219 C 14.200391 20.199219 14.600391 21 15.900391 21 C 17.400391 21 18.500391 19.399609 19.400391 18.099609 C 19.800391 17.399609 20.100391 17.000391 20.400391 16.400391 C 20.600391 16.000391 20.4 15.600391 20 15.400391 C 17.4 14.100391 16.900781 9.9003906 19.800781 8.4003906 C 20.300781 8.1003906 20.4 7.4992188 20 7.1992188 C 18.9 6.1992187 17.299219 5.4003906 16.199219 5.4003906 z" }, null, -1)
  ]));
}
const Mi = /* @__PURE__ */ re(xi, [["render", Ai]]), Pi = {}, Ri = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21.34",
  height: "21",
  viewBox: "0 0 256 384"
};
function Di(e, t) {
  return T(), j("svg", Ri, t[0] || (t[0] = [
    Dt('<path fill="#0ACF83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z"></path><path fill="#A259FF" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z"></path><path fill="#F24E1E" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z"></path><path fill="#FF7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z"></path><path fill="#1ABCFE" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64Z"></path>', 5)
  ]));
}
const Fi = /* @__PURE__ */ re(Pi, [["render", Di]]), $i = {}, Vi = {
  fill: "gray",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 30 30",
  width: "21px",
  height: "21px"
};
function zi(e, t) {
  return T(), j("svg", Vi, t[0] || (t[0] = [
    $("path", { d: "M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" }, null, -1)
  ]));
}
const Bi = /* @__PURE__ */ re($i, [["render", zi]]), Ui = {}, ji = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Wi(e, t) {
  return T(), j("svg", ji, t[0] || (t[0] = [
    Dt('<path fill="#e53935" d="M24 43L16 20 32 20z"></path><path fill="#ff7043" d="M24 43L42 20 32 20z"></path><path fill="#e53935" d="M37 5L42 20 32 20z"></path><path fill="#ffa726" d="M24 43L42 20 45 28z"></path><path fill="#ff7043" d="M24 43L6 20 16 20z"></path><path fill="#e53935" d="M11 5L6 20 16 20z"></path><path fill="#ffa726" d="M24 43L6 20 3 28z"></path>', 7)
  ]));
}
const Gi = /* @__PURE__ */ re(Ui, [["render", Wi]]), Hi = {}, Ki = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21",
  height: "21",
  viewBox: "0 0 62.42 62.42"
};
function Yi(e, t) {
  return T(), j("svg", Ki, t[0] || (t[0] = [
    Dt('<defs><linearGradient id="New_Gradient_Swatch_1" x1="64.01" y1="30.27" x2="32.99" y2="54.48" gradientUnits="userSpaceOnUse"><stop offset="0.18" stop-color="#0052cc"></stop><stop offset="1" stop-color="#2684ff"></stop></linearGradient></defs><title>Bitbucket-blue</title><g id="Layer_2" data-name="Layer 2"><g id="Blue" transform="translate(0 -3.13)"><path d="M2,6.26A2,2,0,0,0,0,8.58L8.49,60.12a2.72,2.72,0,0,0,2.66,2.27H51.88a2,2,0,0,0,2-1.68L62.37,8.59a2,2,0,0,0-2-2.32ZM37.75,43.51h-13L21.23,25.12H40.9Z" fill="#2684ff"></path><path d="M59.67,25.12H40.9L37.75,43.51h-13L9.4,61.73a2.71,2.71,0,0,0,1.75.66H51.89a2,2,0,0,0,2-1.68Z" fill="url(#New_Gradient_Swatch_1)"></path></g></g>', 3)
  ]));
}
const Zi = /* @__PURE__ */ re(Hi, [["render", Yi]]), Ji = {}, Xi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function qi(e, t) {
  return T(), j("svg", Xi, t[0] || (t[0] = [
    $("path", {
      fill: "#536dfe",
      d: "M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"
    }, null, -1)
  ]));
}
const Qi = /* @__PURE__ */ re(Ji, [["render", qi]]), er = {}, tr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function ar(e, t) {
  return T(), j("svg", tr, t[0] || (t[0] = [
    Dt('<linearGradient id="k8yl7~hDat~FaoWq8WjN6a" x1="-1254.397" x2="-1261.911" y1="877.268" y2="899.466" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#114a8b"></stop><stop offset="1" stop-color="#0669bc"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6a)" d="M17.634,6h11.305L17.203,40.773c-0.247,0.733-0.934,1.226-1.708,1.226H6.697 c-0.994,0-1.8-0.806-1.8-1.8c0-0.196,0.032-0.39,0.094-0.576L15.926,7.227C16.173,6.494,16.86,6,17.634,6L17.634,6z"></path><path fill="#0078d4" d="M34.062,29.324H16.135c-0.458-0.001-0.83,0.371-0.831,0.829c0,0.231,0.095,0.451,0.264,0.608 l11.52,10.752C27.423,41.826,27.865,42,28.324,42h10.151L34.062,29.324z"></path><linearGradient id="k8yl7~hDat~FaoWq8WjN6b" x1="-1252.05" x2="-1253.788" y1="887.612" y2="888.2" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity=".3"></stop><stop offset=".071" stop-opacity=".2"></stop><stop offset=".321" stop-opacity=".1"></stop><stop offset=".623" stop-opacity=".05"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6b)" d="M17.634,6c-0.783-0.003-1.476,0.504-1.712,1.25L5.005,39.595 c-0.335,0.934,0.151,1.964,1.085,2.299C6.286,41.964,6.493,42,6.702,42h9.026c0.684-0.122,1.25-0.603,1.481-1.259l2.177-6.416 l7.776,7.253c0.326,0.27,0.735,0.419,1.158,0.422h10.114l-4.436-12.676l-12.931,0.003L28.98,6H17.634z"></path><linearGradient id="k8yl7~hDat~FaoWq8WjN6c" x1="-1252.952" x2="-1244.704" y1="876.6" y2="898.575" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3ccbf4"></stop><stop offset="1" stop-color="#2892df"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6c)" d="M32.074,7.225C31.827,6.493,31.141,6,30.368,6h-12.6c0.772,0,1.459,0.493,1.705,1.224 l10.935,32.399c0.318,0.942-0.188,1.963-1.13,2.281C29.093,41.968,28.899,42,28.703,42h12.6c0.994,0,1.8-0.806,1.8-1.801 c0-0.196-0.032-0.39-0.095-0.575L32.074,7.225z"></path>', 7)
  ]));
}
const nr = /* @__PURE__ */ re(er, [["render", ar]]), lr = {}, or = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21",
  height: "21",
  viewBox: "0 0 256 256"
};
function ir(e, t) {
  return T(), j("svg", or, t[0] || (t[0] = [
    $("path", {
      fill: "#FFE812",
      d: "M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z"
    }, null, -1),
    $("path", { d: "M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z" }, null, -1),
    $("path", {
      fill: "#FFE812",
      d: "M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"
    }, null, -1)
  ]));
}
const rr = /* @__PURE__ */ re(lr, [["render", ir]]), sr = {}, ur = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function cr(e, t) {
  return T(), j("svg", ur, t[0] || (t[0] = [
    $("path", {
      d: "M472.136 163.959H408.584C407.401 163.959 406.218 163.327 405.666 162.3L354.651 73.6591C354.02 72.632 352.916 72 351.654 72H143.492C142.309 72 141.126 72.632 140.574 73.6591L87.5084 165.618L36.414 254.259C35.862 255.286 35.862 256.55 36.414 257.656L87.5084 346.297L140.495 438.335C141.047 439.362 142.23 440.073 143.413 439.994H351.654C352.837 439.994 354.02 439.362 354.651 438.335L405.745 349.694C406.297 348.667 407.48 347.956 408.663 348.035H472.215C474.344 348.035 476 346.297 476 344.243V167.83C475.921 165.697 474.186 163.959 472.136 163.959ZM228.728 349.694L212.721 377.345C212.485 377.74 212.091 378.135 211.696 378.372C211.223 378.609 210.75 378.767 210.198 378.767H178.422C177.318 378.767 176.293 378.214 175.82 377.187L128.431 294.787L123.779 286.65L106.748 257.498C106.511 257.103 106.353 256.629 106.432 256.076C106.432 255.602 106.59 255.049 106.827 254.654L123.937 224.949L175.899 134.886C176.451 133.938 177.476 133.306 178.501 133.306H210.198C210.75 133.306 211.302 133.464 211.854 133.701C212.248 133.938 212.643 134.254 212.879 134.728L228.886 162.537C229.359 163.485 229.28 164.67 228.728 165.539L177.397 254.654C177.16 255.049 177.081 255.523 177.081 255.918C177.081 256.392 177.239 256.787 177.397 257.182L228.728 346.218C229.438 347.403 229.359 348.667 228.728 349.694V349.694ZM388.083 257.498L371.051 286.65L366.399 294.787L319.011 377.187C318.459 378.135 317.512 378.767 316.409 378.767H284.632C284.08 378.767 283.607 378.609 283.134 378.372C282.74 378.135 282.346 377.819 282.109 377.345L266.103 349.694C265.393 348.667 265.393 347.403 266.024 346.376L317.355 257.34C317.591 256.945 317.67 256.471 317.67 256.076C317.67 255.602 317.513 255.207 317.355 254.812L266.024 165.697C265.472 164.749 265.393 163.643 265.866 162.695L281.873 134.886C282.109 134.491 282.503 134.096 282.898 133.859C283.371 133.543 283.923 133.464 284.553 133.464H316.409C317.512 133.464 318.538 134.017 319.011 135.044L370.972 225.107L388.083 254.812C388.319 255.286 388.477 255.76 388.477 256.234C388.477 256.55 388.319 257.024 388.083 257.498V257.498Z",
      fill: "#008AAA"
    }, null, -1)
  ]));
}
const _r = /* @__PURE__ */ re(sr, [["render", cr]]), pr = {}, dr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function mr(e, t) {
  return T(), j("svg", dr, t[0] || (t[0] = [
    $("path", {
      fill: "#0288D1",
      d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
    }, null, -1),
    $("path", {
      fill: "#FFF",
      d: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
    }, null, -1)
  ]));
}
const kn = /* @__PURE__ */ re(pr, [["render", mr]]), fr = {}, br = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px",
  "fill-rule": "evenodd",
  "clip-rule": "evenodd"
};
function gr(e, t) {
  return T(), j("svg", br, t[0] || (t[0] = [
    $("path", {
      fill: "#fff",
      "fill-rule": "evenodd",
      d: "M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z",
      "clip-rule": "evenodd"
    }, null, -1),
    $("path", {
      fill: "#fff",
      "fill-rule": "evenodd",
      d: "M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619 l23.971-1.387c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463 C13.171,14.718,12.862,15.181,12.862,16.182L12.862,16.182z",
      "clip-rule": "evenodd"
    }, null, -1),
    $("path", {
      fill: "#424242",
      "fill-rule": "evenodd",
      d: "M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619l23.971-1.387 c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463C13.171,14.718,12.862,15.181,12.862,16.182 L12.862,16.182z M36.526,17.413c0.154,0.694,0,1.387-0.695,1.465l-1.155,0.23v16.943c-1.003,0.539-1.928,0.847-2.698,0.847 c-1.234,0-1.543-0.385-2.467-1.54l-7.555-11.86v11.475l2.391,0.539c0,0,0,1.386-1.929,1.386l-5.317,0.308 c-0.154-0.308,0-1.078,0.539-1.232l1.388-0.385V20.418l-1.927-0.154c-0.155-0.694,0.23-1.694,1.31-1.772l5.704-0.385l7.862,12.015 V19.493l-2.005-0.23c-0.154-0.848,0.462-1.464,1.233-1.54L36.526,17.413z M7.389,5.862l21.968-1.618 c2.698-0.231,3.392-0.076,5.087,1.155l7.013,4.929C42.614,11.176,43,11.407,43,12.33v27.032c0,1.694-0.617,2.696-2.775,2.849 l-25.512,1.541c-1.62,0.077-2.391-0.154-3.239-1.232l-5.164-6.7C5.385,34.587,5,33.664,5,32.585V8.556 C5,7.171,5.617,6.015,7.389,5.862z",
      "clip-rule": "evenodd"
    }, null, -1)
  ]));
}
const hr = /* @__PURE__ */ re(fr, [["render", gr]]), vr = {}, wr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Er(e, t) {
  return T(), j("svg", wr, t[0] || (t[0] = [
    Dt('<path fill="#33d375" d="M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"></path><path fill="#33d375" d="M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"></path><path fill="#40c4ff" d="M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"></path><path fill="#40c4ff" d="M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"></path><path fill="#e91e63" d="M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"></path><path fill="#e91e63" d="M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"></path><path fill="#ffc107" d="M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"></path><path fill="#ffc107" d="M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"></path>', 8)
  ]));
}
const kr = /* @__PURE__ */ re(vr, [["render", Er]]), yr = {}, Cr = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Tr(e, t) {
  return T(), j("svg", Cr, t[0] || (t[0] = [
    $("path", {
      d: "M255.498 31.0034C131.513 31.0034 31 131.515 31 255.502C31 379.492 131.513 480 255.498 480C379.497 480 480 379.495 480 255.502C480 131.522 379.497 31.0135 255.495 31.0135L255.498 31V31.0034ZM358.453 354.798C354.432 361.391 345.801 363.486 339.204 359.435C286.496 327.237 220.139 319.947 141.993 337.801C134.463 339.516 126.957 334.798 125.24 327.264C123.516 319.731 128.217 312.225 135.767 310.511C221.284 290.972 294.639 299.384 353.816 335.549C360.413 339.596 362.504 348.2 358.453 354.798ZM385.932 293.67C380.864 301.903 370.088 304.503 361.858 299.438C301.512 262.345 209.528 251.602 138.151 273.272C128.893 276.067 119.118 270.851 116.309 261.61C113.521 252.353 118.74 242.597 127.981 239.782C209.512 215.044 310.87 227.026 380.17 269.612C388.4 274.68 391 285.456 385.935 293.676V293.673L385.932 293.67ZM388.293 230.016C315.935 187.039 196.56 183.089 127.479 204.055C116.387 207.42 104.654 201.159 101.293 190.063C97.9326 178.964 104.189 167.241 115.289 163.87C194.59 139.796 326.418 144.446 409.723 193.902C419.722 199.826 422.995 212.71 417.068 222.675C411.168 232.653 398.247 235.943 388.303 230.016H388.293V230.016Z",
      fill: "#1ED760"
    }, null, -1)
  ]));
}
const Sr = /* @__PURE__ */ re(yr, [["render", Tr]]), Nr = {}, Or = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Ir(e, t) {
  return T(), j("svg", Or, t[0] || (t[0] = [
    $("path", {
      d: "M416 240L352 304H288L232 360V304H160V64H416V240Z",
      fill: "white"
    }, null, -1),
    $("path", {
      d: "M144 32L64 112V400H160V480L240 400H304L448 256V32H144ZM416 240L352 304H288L232 360V304H160V64H416V240Z",
      fill: "#9146FF"
    }, null, -1),
    $("path", {
      d: "M368 120H336V216H368V120Z",
      fill: "#9146FF"
    }, null, -1),
    $("path", {
      d: "M280 120H248V216H280V120Z",
      fill: "#9146FF"
    }, null, -1)
  ]));
}
const xr = /* @__PURE__ */ re(Nr, [["render", Ir]]), Lr = {}, Ar = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Mr(e, t) {
  return T(), j("svg", Ar, t[0] || (t[0] = [
    $("path", {
      d: "M33 256.043C33 264.556 35.3159 273.069 39.4845 280.202L117.993 415.493C126.098 429.298 138.373 440.572 153.657 445.634C183.764 455.528 214.797 442.873 229.618 417.333L248.609 384.661L173.806 256.043L252.777 119.831L271.768 87.1591C277.557 77.2654 284.968 69.4424 294 63H285.894H172.185C150.878 63 131.193 74.2742 120.54 92.6812L39.7161 231.884C35.3159 239.016 33 247.53 33 256.043Z",
      fill: "#6363F1"
    }, null, -1),
    $("path", {
      d: "M480 256.058C480 247.539 477.684 239.021 473.516 231.883L393.849 94.6596C379.028 69.3331 347.995 56.4396 317.888 66.34C302.603 71.4053 290.329 82.6871 282.224 96.5015L264.391 127.354L339.194 256.058L260.223 392.131L241.232 424.825C235.443 434.495 228.032 442.553 219 449H227.106H340.815C362.122 449 381.807 437.718 392.46 419.299L473.284 280.003C477.684 272.866 480 264.577 480 256.058Z",
      fill: "#6363F1"
    }, null, -1)
  ]));
}
const Pr = /* @__PURE__ */ re(Lr, [["render", Mr]]), Rr = {}, Dr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21",
  height: "21"
};
function Fr(e, t) {
  return T(), j("svg", Dr, t[0] || (t[0] = [
    $("circle", {
      cx: "24",
      cy: "24",
      r: "20",
      fill: "#2196f3"
    }, null, -1),
    $("path", {
      fill: "#fff",
      d: "M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z"
    }, null, -1),
    $("polygon", {
      fill: "#fff",
      points: "37,31 31,27 31,21 37,17"
    }, null, -1)
  ]));
}
const $r = /* @__PURE__ */ re(Rr, [["render", Fr]]), Vr = /* @__PURE__ */ ae({
  __name: "Icons",
  props: {
    name: {}
  },
  setup(e) {
    const t = {
      apple: Mi,
      azure: nr,
      bitbucket: Zi,
      discord: Qi,
      facebook: Ti,
      figma: Fi,
      google: Ei,
      github: Bi,
      gitlab: Gi,
      kakao: rr,
      keycloak: _r,
      linkedin: kn,
      linkedin_oidc: kn,
      notion: hr,
      slack: kr,
      spotify: Sr,
      twitch: xr,
      twitter: Ii,
      workos: Pr,
      zoom: $r
    };
    return (a, n) => (T(), F(ot(t[a.name])));
  }
}), Qu = ae({
  name: "UserContextProvider",
  props: {
    supabaseClient: {
      type: Object,
      required: !0
    }
  },
  setup({ supabaseClient: e }, { slots: t }) {
    const a = W(null), n = W(null);
    return Ka(async () => {
      var s;
      const { data: l } = await e.auth.getSession();
      a.value = l.session, n.value = ((s = l.session) == null ? void 0 : s.user) ?? null;
      const { data: i } = e.auth.onAuthStateChange(
        async (u, r) => {
          a.value = r, n.value = (r == null ? void 0 : r.user) ?? null;
        }
      );
      return () => {
        i == null || i.subscription.unsubscribe();
      };
    }), Zn(_i, {
      session: a,
      user: n
    }), () => {
      var l;
      return Ya("div", null, (l = t == null ? void 0 : t.default) == null ? void 0 : l.call(t));
    };
  }
}), Xa = (e) => {
  const t = W(null), a = (n) => {
    n ? JSON.stringify(t.value) !== JSON.stringify(n.user) && (t.value = n.user) : t.value = null;
  };
  return e == null || e.auth.getSession().then(({ data: { session: n } }) => {
    n && a(n);
  }), Ka(async () => {
    const { data: n } = e.auth.onAuthStateChange(
      async (l, i) => {
        i && a(i);
      }
    );
    return () => {
      n == null || n.subscription.unsubscribe();
    };
  }), {
    supabaseUser: t
  };
}, zr = /* @__PURE__ */ ae({
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
    const t = e, { supabaseUser: a } = Xa(t.supabaseClient), n = W(""), l = W(!1), { authView: i } = ct(je), s = X(() => t.socialLayout === "vertical"), u = X(() => i.value === "magic_link" ? "sign_in" : i.value), r = X(
      () => {
        var m;
        return (m = t.i18n) == null ? void 0 : m[u.value];
      }
    ), d = async (m) => {
      var w, y;
      n.value = "", l.value = !0;
      const _ = (w = a.value) == null ? void 0 : w.is_anonymous, p = {
        redirectTo: t.redirectTo,
        scopes: (y = t.providerScopes) == null ? void 0 : y[m],
        queryParams: t.queryParams
      };
      let b = null;
      if (_) {
        const { data: h, error: C } = await t.supabaseClient.auth.linkIdentity({
          provider: m,
          options: p
        });
        b = C;
      } else if (t.useOAuthPopup) {
        const { data: h, error: C } = await t.supabaseClient.auth.signInWithOAuth({
          provider: m,
          options: { ...p, skipBrowserRedirect: !0 }
        });
        if (b = C, !C && (h != null && h.url)) {
          const M = window.open(
            h.url,
            "supabase-oauth",
            t.popupWindowFeatures ?? "width=500,height=650"
          ), { data: N } = t.supabaseClient.auth.onAuthStateChange(
            (A) => {
              A === "SIGNED_IN" && (M == null || M.close(), N.subscription.unsubscribe(), clearInterval(P), l.value = !1);
            }
          ), P = setInterval(() => {
            M != null && M.closed && (clearInterval(P), N.subscription.unsubscribe(), l.value = !1);
          }, 500);
          return;
        }
      } else {
        const { data: h, error: C } = await t.supabaseClient.auth.signInWithOAuth({
          provider: m,
          options: p
        });
        b = C;
      }
      b && (n.value = b.message), l.value = !1;
    };
    function c(m) {
      const _ = m.toLowerCase();
      return m.charAt(0).toUpperCase() + _.slice(1);
    }
    return (m, _) => m.providers && m.providers.length > 0 ? (T(), j(et, { key: 0 }, [
      U(k(Ne), {
        gap: "large",
        direction: "vertical",
        appearance: m.appearance
      }, {
        default: L(() => [
          U(k(Ne), {
            direction: s.value ? "vertical" : "horizontal",
            gap: s.value ? "small" : "medium",
            appearance: m.appearance
          }, {
            default: L(() => [
              (T(!0), j(et, null, Oo(m.providers, (p) => (T(), F(k(ut), {
                key: p,
                color: "default",
                loading: l.value,
                onClick: we(() => d(p), ["prevent"]),
                appearance: m.appearance
              }, {
                icon: L(() => [
                  U(k(Vr), { name: p }, null, 8, ["name"])
                ]),
                default: L(() => {
                  var b, w;
                  return [
                    s.value ? (T(), j(et, { key: 0 }, [
                      z(B(k(Po)(
                        (w = (b = r.value) == null ? void 0 : b.social_provider_text) == null ? void 0 : w.replace("_oidc", ""),
                        {
                          provider: c(p.replace("_oidc", ""))
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
      m.onlyThirdPartyProviders ? K("", !0) : (T(), F(k(mi), {
        key: 0,
        appearance: m.appearance
      }, null, 8, ["appearance"]))
    ], 64)) : K("", !0);
  }
}), Br = ["id"], Ur = /* @__PURE__ */ ae({
  __name: "MagicLink",
  props: {
    appearance: {},
    supabaseClient: {},
    redirectTo: {},
    showLinks: { type: Boolean },
    i18n: {}
  },
  setup(e) {
    const t = e, { supabaseUser: a } = Xa(t.supabaseClient), n = W(""), l = W(""), i = W(""), s = W(!1), { authView: u, setAuthView: r } = ct(je), d = X(
      () => {
        var m;
        return (m = t.i18n) == null ? void 0 : m[u.value];
      }
    ), c = async (m) => {
      var b, w, y;
      l.value = "", i.value = "", s.value = !0;
      const _ = (b = a.value) == null ? void 0 : b.is_anonymous;
      let p = null;
      if (_) {
        const { error: h } = await t.supabaseClient.auth.updateUser(
          {
            email: n.value
          },
          {
            emailRedirectTo: t.redirectTo
          }
        );
        p = h;
      } else {
        const { error: h } = await t.supabaseClient.auth.signInWithOtp({
          email: n.value,
          options: { emailRedirectTo: t.redirectTo }
        });
        p = h;
      }
      p ? l.value = p.message : i.value = (y = (w = t.i18n) == null ? void 0 : w.magic_link) == null ? void 0 : y.confirmation_text, s.value = !1;
    };
    return (m, _) => (T(), j("form", {
      id: `auth-${k(u)}`,
      onSubmit: we(c, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      U(k(Ne), {
        direction: "vertical",
        gap: "large",
        appearance: m.appearance
      }, {
        default: L(() => [
          U(k(Ne), {
            direction: "vertical",
            gap: "large",
            appearance: m.appearance
          }, {
            default: L(() => {
              var p;
              return [
                $("div", null, [
                  U(k(Be), {
                    htmlFor: "email",
                    appearance: m.appearance
                  }, {
                    default: L(() => {
                      var b;
                      return [
                        z(B((b = d.value) == null ? void 0 : b.email_input_label), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["appearance"]),
                  U(k(ze), {
                    id: "email",
                    type: "email",
                    name: "email",
                    autoComplete: "email",
                    autofocus: "",
                    placeholder: (p = d.value) == null ? void 0 : p.email_input_placeholder,
                    appearance: m.appearance,
                    modelValue: n.value,
                    "onUpdate:modelValue": _[0] || (_[0] = (b) => n.value = b)
                  }, null, 8, ["placeholder", "appearance", "modelValue"])
                ])
              ];
            }),
            _: 1
          }, 8, ["appearance"]),
          U(k(ut), {
            type: "submit",
            color: "primary",
            loading: s.value,
            appearance: m.appearance
          }, {
            default: L(() => {
              var p, b;
              return [
                z(B(s.value ? (p = d.value) == null ? void 0 : p.loading_button_label : (b = d.value) == null ? void 0 : b.button_label), 1)
              ];
            }),
            _: 1
          }, 8, ["loading", "appearance"]),
          m.showLinks ? (T(), F(k(Qe), {
            key: 0,
            href: "#auth-sign-in",
            appearance: m.appearance,
            onClick: _[1] || (_[1] = we((p) => k(r)(k(fe).SIGN_IN), ["prevent"]))
          }, {
            default: L(() => {
              var p, b;
              return [
                z(B((b = (p = m.i18n) == null ? void 0 : p.sign_in) == null ? void 0 : b.link_text), 1)
              ];
            }),
            _: 1
          }, 8, ["appearance"])) : K("", !0)
        ]),
        _: 1
      }, 8, ["appearance"]),
      i.value ? (T(), F(k(Se), {
        key: 0,
        appearance: m.appearance
      }, {
        default: L(() => [
          z(B(i.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0),
      l.value ? (T(), F(k(Se), {
        key: 1,
        color: "danger",
        appearance: m.appearance
      }, {
        default: L(() => [
          z(B(l.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0)
    ], 40, Br));
  }
}), jr = ["id"], Wr = /* @__PURE__ */ ae({
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
    const t = e, a = W(""), n = W(""), l = W(""), i = W(!1), { authView: s, setAuthView: u } = ct(je), r = X(
      () => {
        var c;
        return (c = t.i18n) == null ? void 0 : c[s.value];
      }
    ), d = async (c) => {
      var _, p, b;
      n.value = "", l.value = "", i.value = !0;
      const { error: m } = await t.supabaseClient.auth.resetPasswordForEmail(a.value, {
        redirectTo: t.redirectTo,
        captchaToken: (_ = t.options) == null ? void 0 : _.captchaToken
      });
      m ? n.value = m.message : l.value = (b = (p = t.i18n) == null ? void 0 : p.forgotten_password) == null ? void 0 : b.confirmation_text, i.value = !1;
    };
    return (c, m) => (T(), j("form", {
      id: `auth-${k(s)}`,
      onSubmit: we(d, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      U(k(Ne), {
        direction: "vertical",
        gap: "large",
        appearance: c.appearance
      }, {
        default: L(() => {
          var _;
          return [
            $("div", null, [
              U(k(Be), {
                htmlFor: "email",
                appearance: c.appearance
              }, {
                default: L(() => {
                  var p;
                  return [
                    z(B((p = r.value) == null ? void 0 : p.email_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              U(k(ze), {
                id: "email",
                type: "email",
                name: "email",
                autoComplete: "email",
                autofocus: "",
                placeholder: (_ = r.value) == null ? void 0 : _.email_input_placeholder,
                appearance: c.appearance,
                modelValue: a.value,
                "onUpdate:modelValue": m[0] || (m[0] = (p) => a.value = p)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ]),
            U(k(ut), {
              type: "submit",
              color: "primary",
              loading: i.value,
              appearance: c.appearance
            }, {
              default: L(() => {
                var p, b;
                return [
                  z(B(i.value ? (p = r.value) == null ? void 0 : p.loading_button_label : (b = r.value) == null ? void 0 : b.button_label), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "appearance"]),
            c.showLinks ? (T(), F(k(Qe), {
              key: 0,
              href: "#auth-sign-in",
              appearance: c.appearance,
              onClick: m[1] || (m[1] = we((p) => k(u)(k(fe).SIGN_IN), ["prevent"]))
            }, {
              default: L(() => {
                var p, b;
                return [
                  z(B((b = (p = c.i18n) == null ? void 0 : p.sign_in) == null ? void 0 : b.link_text), 1)
                ];
              }),
              _: 1
            }, 8, ["appearance"])) : K("", !0)
          ];
        }),
        _: 1
      }, 8, ["appearance"]),
      l.value ? (T(), F(k(Se), {
        key: 0,
        appearance: c.appearance
      }, {
        default: L(() => [
          z(B(l.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0),
      n.value ? (T(), F(k(Se), {
        key: 1,
        color: "danger",
        appearance: c.appearance
      }, {
        default: L(() => [
          z(B(n.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0)
    ], 40, jr));
  }
}), Gr = ["id"], Hr = /* @__PURE__ */ ae({
  __name: "UpdatePassword",
  props: {
    appearance: {},
    supabaseClient: {},
    i18n: {}
  },
  setup(e) {
    const t = e, a = W(""), n = W(""), l = W(""), i = W(!1), { authView: s } = ct(je), u = X(
      () => {
        var d;
        return (d = t.i18n) == null ? void 0 : d[s.value];
      }
    ), r = async (d) => {
      var m, _;
      n.value = "", l.value = "", i.value = !0;
      const { error: c } = await t.supabaseClient.auth.updateUser({
        password: a.value
      });
      c ? n.value = c.message : l.value = (_ = (m = t.i18n) == null ? void 0 : m.update_password) == null ? void 0 : _.confirmation_text, i.value = !1;
    };
    return (d, c) => (T(), j("form", {
      id: `auth-${k(s)}`,
      onSubmit: we(r, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      U(k(Ne), {
        direction: "vertical",
        gap: "large",
        appearance: d.appearance
      }, {
        default: L(() => {
          var m;
          return [
            $("div", null, [
              U(k(Be), {
                htmlFor: "password_label",
                appearance: d.appearance
              }, {
                default: L(() => {
                  var _;
                  return [
                    z(B((_ = u.value) == null ? void 0 : _.password_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              U(k(ze), {
                id: "password",
                type: "password",
                name: "password",
                autofocus: "",
                placeholder: (m = u.value) == null ? void 0 : m.password_input_placeholder,
                appearance: d.appearance,
                modelValue: a.value,
                "onUpdate:modelValue": c[0] || (c[0] = (_) => a.value = _)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ]),
            U(k(ut), {
              type: "submit",
              color: "primary",
              loading: i.value,
              appearance: d.appearance
            }, {
              default: L(() => {
                var _, p;
                return [
                  z(B(i.value ? (_ = u.value) == null ? void 0 : _.loading_button_label : (p = u.value) == null ? void 0 : p.button_label), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "appearance"])
          ];
        }),
        _: 1
      }, 8, ["appearance"]),
      l.value ? (T(), F(k(Se), {
        key: 0,
        appearance: d.appearance
      }, {
        default: L(() => [
          z(B(l.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0),
      n.value ? (T(), F(k(Se), {
        key: 1,
        color: "danger",
        appearance: d.appearance
      }, {
        default: L(() => [
          z(B(n.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0)
    ], 40, Gr));
  }
}), Kr = ["id"], Yr = { key: 0 }, Zr = { key: 1 }, Jr = /* @__PURE__ */ ae({
  __name: "VerifyOtp",
  props: {
    appearance: {},
    supabaseClient: {},
    otpType: { default: "email" },
    showLinks: { type: Boolean, default: !1 },
    i18n: {}
  },
  setup(e) {
    const t = e, a = W(""), n = W(""), l = W(""), i = W(""), s = W(""), u = W(!1), { authView: r, setAuthView: d } = ct(je), c = X(
      () => {
        var _;
        return (_ = t.i18n) == null ? void 0 : _[r.value];
      }
    ), m = async (_) => {
      var w, y;
      i.value = "", s.value = "", u.value = !0;
      let p = {
        email: a.value,
        token: l.value,
        type: t.otpType
      };
      ["sms", "phone_change"].includes(t.otpType) && (p = {
        phone: n.value,
        token: l.value,
        type: t.otpType
      });
      const { error: b } = await t.supabaseClient.auth.verifyOtp(
        p
      );
      b ? i.value = b.message : s.value = (y = (w = t.i18n) == null ? void 0 : w.magic_link) == null ? void 0 : y.confirmation_text, u.value = !1;
    };
    return (_, p) => (T(), j("form", {
      id: `auth-${k(r)}`,
      onSubmit: we(m, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      U(k(Ne), {
        direction: "vertical",
        gap: "large",
        appearance: _.appearance
      }, {
        default: L(() => {
          var b, w, y;
          return [
            ["sms", "phone_change"].includes(_.otpType) ? (T(), j("div", Yr, [
              U(k(Be), {
                htmlFor: "phone",
                appearance: _.appearance
              }, {
                default: L(() => {
                  var h;
                  return [
                    z(B((h = c.value) == null ? void 0 : h.phone_input_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              U(k(ze), {
                id: "phone",
                name: "phone",
                type: "text",
                autofocus: "",
                placeholder: (b = c.value) == null ? void 0 : b.phone_input_placeholder,
                appearance: _.appearance,
                modelValue: n.value,
                "onUpdate:modelValue": p[0] || (p[0] = (h) => n.value = h)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ])) : (T(), j("div", Zr, [
              U(k(Be), {
                htmlFor: "email",
                appearance: _.appearance
              }, {
                default: L(() => {
                  var h;
                  return [
                    z(B((h = c.value) == null ? void 0 : h.email_input_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              U(k(ze), {
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                autofocus: "",
                placeholder: (w = c.value) == null ? void 0 : w.email_input_placeholder,
                appearance: _.appearance,
                modelValue: a.value,
                "onUpdate:modelValue": p[1] || (p[1] = (h) => a.value = h)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ])),
            $("div", null, [
              U(k(Be), {
                htmlFor: "token",
                appearance: _.appearance
              }, {
                default: L(() => {
                  var h;
                  return [
                    z(B((h = c.value) == null ? void 0 : h.token_input_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              U(k(ze), {
                id: "token",
                name: "token",
                type: "text",
                autofocus: "",
                placeholder: (y = c.value) == null ? void 0 : y.token_input_placeholder,
                appearance: _.appearance,
                modelValue: l.value,
                "onUpdate:modelValue": p[2] || (p[2] = (h) => l.value = h)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ]),
            U(k(ut), {
              type: "submit",
              color: "primary",
              loading: u.value,
              appearance: _.appearance
            }, {
              default: L(() => {
                var h, C;
                return [
                  z(B(u.value ? (h = c.value) == null ? void 0 : h.loading_button_label : (C = c.value) == null ? void 0 : C.button_label), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "appearance"]),
            _.showLinks ? (T(), F(k(Qe), {
              key: 2,
              href: "#auth-sign-in",
              appearance: _.appearance,
              onClick: p[3] || (p[3] = we((h) => k(d)(k(fe).SIGN_IN), ["prevent"]))
            }, {
              default: L(() => {
                var h, C;
                return [
                  z(B((C = (h = _.i18n) == null ? void 0 : h.sign_in) == null ? void 0 : C.link_text), 1)
                ];
              }),
              _: 1
            }, 8, ["appearance"])) : K("", !0)
          ];
        }),
        _: 1
      }, 8, ["appearance"]),
      s.value ? (T(), F(k(Se), {
        key: 0,
        appearance: _.appearance
      }, {
        default: L(() => [
          z(B(s.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0),
      i.value ? (T(), F(k(Se), {
        key: 1,
        color: "danger",
        appearance: _.appearance
      }, {
        default: L(() => [
          z(B(i.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0)
    ], 40, Kr));
  }
}), Xr = ["id"], qr = /* @__PURE__ */ ae({
  __name: "AnonymousAuth",
  props: {
    appearance: {},
    supabaseClient: {},
    redirectTo: {},
    i18n: {},
    anonymouslyCredentials: {}
  },
  setup(e) {
    const t = e;
    Xa(t.supabaseClient);
    const a = W(""), n = W(""), l = W(!1), { authView: i, setAuthView: s } = ct(je), u = X(
      () => {
        var d;
        return (d = t.i18n) == null ? void 0 : d[i.value];
      }
    ), r = async (d) => {
      a.value = "", n.value = "", l.value = !0;
      let c = null;
      const { data: m, error: _ } = await t.supabaseClient.auth.signInAnonymously(
        t.anonymouslyCredentials
      );
      c = _, c && (a.value = c.message), l.value = !1;
    };
    return (d, c) => (T(), j("form", {
      id: `auth-${k(i)}`,
      onSubmit: we(r, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      U(k(Ne), {
        direction: "vertical",
        gap: "large",
        appearance: d.appearance
      }, {
        default: L(() => [
          U(k(ut), {
            type: "submit",
            color: "primary",
            loading: l.value,
            appearance: d.appearance
          }, {
            default: L(() => {
              var m, _;
              return [
                z(B(l.value ? (m = u.value) == null ? void 0 : m.loading_button_label : (_ = u.value) == null ? void 0 : _.button_label), 1)
              ];
            }),
            _: 1
          }, 8, ["loading", "appearance"])
        ]),
        _: 1
      }, 8, ["appearance"]),
      n.value ? (T(), F(k(Se), {
        key: 0,
        appearance: d.appearance
      }, {
        default: L(() => [
          z(B(n.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0),
      a.value ? (T(), F(k(Se), {
        key: 1,
        color: "danger",
        appearance: d.appearance
      }, {
        default: L(() => [
          z(B(a.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : K("", !0)
    ], 40, Xr));
  }
});
/*!
  * shared v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Fe = typeof window < "u";
let Ee, at;
if (process.env.NODE_ENV !== "production") {
  const e = Fe && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (Ee = (t) => {
    e.mark(t);
  }, at = (t, a, n) => {
    e.measure(t, a, n), e.clearMarks(a), e.clearMarks(n);
  });
}
const Qr = /\{([0-9a-zA-Z]+)\}/g;
function qn(e, ...t) {
  return t.length === 1 && G(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Qr, (a, n) => t.hasOwnProperty(n) ? t[n] : "");
}
const $e = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), es = (e, t, a) => ts({ l: e, k: t, s: a }), ts = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), _e = (e) => typeof e == "number" && isFinite(e), as = (e) => el(e) === "[object Date]", aa = (e) => el(e) === "[object RegExp]", ra = (e) => H(e) && Object.keys(e).length === 0, pe = Object.assign;
let yn;
const At = () => yn || (yn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Cn(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const ns = Object.prototype.hasOwnProperty;
function na(e, t) {
  return ns.call(e, t);
}
const ie = Array.isArray, Q = (e) => typeof e == "function", x = (e) => typeof e == "string", oe = (e) => typeof e == "boolean", G = (e) => e !== null && typeof e == "object", ls = (e) => G(e) && Q(e.then) && Q(e.catch), Qn = Object.prototype.toString, el = (e) => Qn.call(e), H = (e) => {
  if (!G(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, os = (e) => e == null ? "" : ie(e) || H(e) && e.toString === Qn ? JSON.stringify(e, null, 2) : String(e);
function is(e, t = "") {
  return e.reduce((a, n, l) => l === 0 ? a + n : a + t + n, "");
}
const Tn = 2;
function rs(e, t = 0, a = e.length) {
  const n = e.split(/\r?\n/);
  let l = 0;
  const i = [];
  for (let s = 0; s < n.length; s++)
    if (l += n[s].length + 1, l >= t) {
      for (let u = s - Tn; u <= s + Tn || a > l; u++) {
        if (u < 0 || u >= n.length)
          continue;
        const r = u + 1;
        i.push(`${r}${" ".repeat(3 - String(r).length)}|  ${n[u]}`);
        const d = n[u].length;
        if (u === s) {
          const c = t - (l - d) + 1, m = Math.max(1, a > l ? d - c : a - t);
          i.push("   |  " + " ".repeat(c) + "^".repeat(m));
        } else if (u > s) {
          if (a > l) {
            const c = Math.max(Math.min(a - l, d), 1);
            i.push("   |  " + "^".repeat(c));
          }
          l += d + 1;
        }
      }
      break;
    }
  return i.join(`
`);
}
function sa(e) {
  let t = e;
  return () => ++t;
}
function Et(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Sn = {};
function tl(e) {
  Sn[e] || (Sn[e] = !0, Et(e));
}
function ss() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(a, n) {
      const l = e.get(a);
      l && l.push(n) || e.set(a, [n]);
    },
    off(a, n) {
      const l = e.get(a);
      l && l.splice(l.indexOf(n) >>> 0, 1);
    },
    emit(a, n) {
      (e.get(a) || []).slice().map((l) => l(n)), (e.get("*") || []).slice().map((l) => l(a, n));
    }
  };
}
const qt = (e) => !G(e) || ie(e);
function ea(e, t) {
  if (qt(e) || qt(t))
    throw new Error("Invalid value");
  const a = [{ src: e, des: t }];
  for (; a.length; ) {
    const { src: n, des: l } = a.pop();
    Object.keys(n).forEach((i) => {
      G(n[i]) && !G(l[i]) && (l[i] = Array.isArray(n[i]) ? [] : {}), qt(l[i]) || qt(n[i]) ? l[i] = n[i] : a.push({ src: n[i], des: l[i] });
    });
  }
}
/*!
  * message-compiler v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const us = /\{([0-9a-zA-Z]+)\}/g;
function cs(e, ...t) {
  return t.length === 1 && _s(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(us, (a, n) => t.hasOwnProperty(n) ? t[n] : "");
}
const _s = (e) => e !== null && typeof e == "object", ps = {
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
}, ds = {
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
function al(e, t, a = {}) {
  const { domain: n, messages: l, args: i } = a, s = cs((l || ds)[e] || "", ...i || []), u = new SyntaxError(String(s));
  return u.code = e, t && (u.location = t), u.domain = n, u;
}
/*!
  * core-base v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function ms() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (At().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (At().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const We = [];
We[
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
We[
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
We[
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
We[
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
We[
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
We[
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
We[
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
const fs = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function bs(e) {
  return fs.test(e);
}
function gs(e) {
  const t = e.charCodeAt(0), a = e.charCodeAt(e.length - 1);
  return t === a && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function hs(e) {
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
function vs(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : bs(t) ? gs(t) : "*" + t;
}
function ws(e) {
  const t = [];
  let a = -1, n = 0, l = 0, i, s, u, r, d, c, m;
  const _ = [];
  _[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = u : s += u;
  }, _[
    1
    /* Actions.PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
  }, _[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    _[
      0
      /* Actions.APPEND */
    ](), l++;
  }, _[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (l > 0)
      l--, n = 4, _[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (l = 0, s === void 0 || (s = vs(s), s === !1))
        return !1;
      _[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function p() {
    const b = e[a + 1];
    if (n === 5 && b === "'" || n === 6 && b === '"')
      return a++, u = "\\" + b, _[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; n !== null; )
    if (a++, i = e[a], !(i === "\\" && p())) {
      if (r = hs(i), m = We[n], d = m[r] || m.l || 8, d === 8 || (n = d[0], d[1] !== void 0 && (c = _[d[1]], c && (u = i, c() === !1))))
        return;
      if (n === 7)
        return t;
    }
}
const Nn = /* @__PURE__ */ new Map();
function Es(e, t) {
  return G(e) ? e[t] : null;
}
function ks(e, t) {
  if (!G(e))
    return null;
  let a = Nn.get(t);
  if (a || (a = ws(t), a && Nn.set(t, a)), !a)
    return null;
  const n = a.length;
  let l = e, i = 0;
  for (; i < n; ) {
    const s = l[a[i]];
    if (s === void 0 || Q(l))
      return null;
    l = s, i++;
  }
  return l;
}
const ys = (e) => e, Cs = (e) => "", Ts = "text", Ss = (e) => e.length === 0 ? "" : is(e), Ns = os;
function On(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Os(e) {
  const t = _e(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (_e(e.named.count) || _e(e.named.n)) ? _e(e.named.count) ? e.named.count : _e(e.named.n) ? e.named.n : t : t;
}
function Is(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function xs(e = {}) {
  const t = e.locale, a = Os(e), n = G(e.pluralRules) && x(t) && Q(e.pluralRules[t]) ? e.pluralRules[t] : On, l = G(e.pluralRules) && x(t) && Q(e.pluralRules[t]) ? On : void 0, i = (h) => h[n(a, h.length, l)], s = e.list || [], u = (h) => s[h], r = e.named || {};
  _e(e.pluralIndex) && Is(a, r);
  const d = (h) => r[h];
  function c(h) {
    const C = Q(e.messages) ? e.messages(h) : G(e.messages) ? e.messages[h] : !1;
    return C || (e.parent ? e.parent.message(h) : Cs);
  }
  const m = (h) => e.modifiers ? e.modifiers[h] : ys, _ = H(e.processor) && Q(e.processor.normalize) ? e.processor.normalize : Ss, p = H(e.processor) && Q(e.processor.interpolate) ? e.processor.interpolate : Ns, b = H(e.processor) && x(e.processor.type) ? e.processor.type : Ts, y = {
    list: u,
    named: d,
    plural: i,
    linked: (h, ...C) => {
      const [M, N] = C;
      let P = "text", A = "";
      C.length === 1 ? G(M) ? (A = M.modifier || A, P = M.type || P) : x(M) && (A = M || A) : C.length === 2 && (x(M) && (A = M || A), x(N) && (P = N || P));
      const D = c(h)(y), R = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        P === "vnode" && ie(D) && A ? D[0] : D
      );
      return A ? m(A)(R, P) : R;
    },
    message: c,
    type: b,
    interpolate: p,
    normalize: _,
    values: pe({}, s, r)
  };
  return y;
}
let Mt = null;
function Ls(e) {
  Mt = e;
}
function As(e, t, a) {
  Mt && Mt.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: a
  });
}
const Ms = /* @__PURE__ */ Ps(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function Ps(e) {
  return (t) => Mt && Mt.emit(e, t);
}
const nl = ps.__EXTEND_POINT__, Xe = sa(nl), be = {
  NOT_FOUND_KEY: nl,
  // 2
  FALLBACK_TO_TRANSLATE: Xe(),
  // 3
  CANNOT_FORMAT_NUMBER: Xe(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: Xe(),
  // 5
  CANNOT_FORMAT_DATE: Xe(),
  // 6
  FALLBACK_TO_DATE_FORMAT: Xe(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: Xe(),
  // 8
  __EXTEND_POINT__: Xe()
  // 9
}, Rs = {
  [be.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [be.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [be.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [be.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [be.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [be.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [be.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function nt(e, ...t) {
  return qn(Rs[e], ...t);
}
const ll = ue.__EXTEND_POINT__, qe = sa(ll), ce = {
  INVALID_ARGUMENT: ll,
  // 17
  INVALID_DATE_ARGUMENT: qe(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: qe(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: qe(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: qe(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: qe(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: qe(),
  // 23
  __EXTEND_POINT__: qe()
  // 24
};
function Re(e) {
  return al(e, null, process.env.NODE_ENV !== "production" ? { messages: Ds } : void 0);
}
const Ds = {
  [ce.INVALID_ARGUMENT]: "Invalid arguments",
  [ce.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [ce.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [ce.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [ce.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [ce.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [ce.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function qa(e, t) {
  return t.locale != null ? In(t.locale) : In(e.locale);
}
let Ma;
function In(e) {
  if (x(e))
    return e;
  if (Q(e)) {
    if (e.resolvedOnce && Ma != null)
      return Ma;
    if (e.constructor.name === "Function") {
      const t = e();
      if (ls(t))
        throw Re(ce.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Ma = t;
    } else
      throw Re(ce.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Re(ce.NOT_SUPPORT_LOCALE_TYPE);
}
function Fs(e, t, a) {
  return [.../* @__PURE__ */ new Set([
    a,
    ...ie(t) ? t : G(t) ? Object.keys(t) : x(t) ? [t] : [a]
  ])];
}
function ol(e, t, a) {
  const n = x(a) ? a : la, l = e;
  l.__localeChainCache || (l.__localeChainCache = /* @__PURE__ */ new Map());
  let i = l.__localeChainCache.get(n);
  if (!i) {
    i = [];
    let s = [a];
    for (; ie(s); )
      s = xn(i, s, t);
    const u = ie(t) || !H(t) ? t : t.default ? t.default : null;
    s = x(u) ? [u] : u, ie(s) && xn(i, s, !1), l.__localeChainCache.set(n, i);
  }
  return i;
}
function xn(e, t, a) {
  let n = !0;
  for (let l = 0; l < t.length && oe(n); l++) {
    const i = t[l];
    x(i) && (n = $s(e, t[l], a));
  }
  return n;
}
function $s(e, t, a) {
  let n;
  const l = t.split("-");
  do {
    const i = l.join("-");
    n = Vs(e, i, a), l.splice(-1, 1);
  } while (l.length && n === !0);
  return n;
}
function Vs(e, t, a) {
  let n = !1;
  if (!e.includes(t) && (n = !0, t)) {
    n = t[t.length - 1] !== "!";
    const l = t.replace(/!/g, "");
    e.push(l), (ie(a) || H(a)) && a[l] && (n = a[l]);
  }
  return n;
}
const zs = "9.14.1", ua = -1, la = "en-US", oa = "", Ln = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Bs() {
  return {
    upper: (e, t) => t === "text" && x(e) ? e.toUpperCase() : t === "vnode" && G(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && x(e) ? e.toLowerCase() : t === "vnode" && G(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && x(e) ? Ln(e) : t === "vnode" && G(e) && "__v_isVNode" in e ? Ln(e.children) : e
  };
}
let Us, il;
function js(e) {
  il = e;
}
let rl;
function Ws(e) {
  rl = e;
}
let sl = null;
const Gs = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  sl = e;
}, Hs = /* @__NO_SIDE_EFFECTS__ */ () => sl;
let ul = null;
const An = (e) => {
  ul = e;
}, Ks = () => ul;
let Mn = 0;
function Ys(e = {}) {
  const t = Q(e.onWarn) ? e.onWarn : Et, a = x(e.version) ? e.version : zs, n = x(e.locale) || Q(e.locale) ? e.locale : la, l = Q(n) ? la : n, i = ie(e.fallbackLocale) || H(e.fallbackLocale) || x(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l, s = H(e.messages) ? e.messages : { [l]: {} }, u = H(e.datetimeFormats) ? e.datetimeFormats : { [l]: {} }, r = H(e.numberFormats) ? e.numberFormats : { [l]: {} }, d = pe({}, e.modifiers || {}, Bs()), c = e.pluralRules || {}, m = Q(e.missing) ? e.missing : null, _ = oe(e.missingWarn) || aa(e.missingWarn) ? e.missingWarn : !0, p = oe(e.fallbackWarn) || aa(e.fallbackWarn) ? e.fallbackWarn : !0, b = !!e.fallbackFormat, w = !!e.unresolving, y = Q(e.postTranslation) ? e.postTranslation : null, h = H(e.processor) ? e.processor : null, C = oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, M = !!e.escapeParameter, N = Q(e.messageCompiler) ? e.messageCompiler : Us;
  process.env.NODE_ENV !== "production" && Q(e.messageCompiler) && tl(nt(be.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const P = Q(e.messageResolver) ? e.messageResolver : il || Es, A = Q(e.localeFallbacker) ? e.localeFallbacker : rl || Fs, D = G(e.fallbackContext) ? e.fallbackContext : void 0, R = e, S = G(R.__datetimeFormatters) ? R.__datetimeFormatters : /* @__PURE__ */ new Map(), J = G(R.__numberFormatters) ? R.__numberFormatters : /* @__PURE__ */ new Map(), ne = G(R.__meta) ? R.__meta : {};
  Mn++;
  const ee = {
    version: a,
    cid: Mn,
    locale: n,
    fallbackLocale: i,
    messages: s,
    modifiers: d,
    pluralRules: c,
    missing: m,
    missingWarn: _,
    fallbackWarn: p,
    fallbackFormat: b,
    unresolving: w,
    postTranslation: y,
    processor: h,
    warnHtmlMessage: C,
    escapeParameter: M,
    messageCompiler: N,
    messageResolver: P,
    localeFallbacker: A,
    fallbackContext: D,
    onWarn: t,
    __meta: ne
  };
  return ee.datetimeFormats = u, ee.numberFormats = r, ee.__datetimeFormatters = S, ee.__numberFormatters = J, process.env.NODE_ENV !== "production" && (ee.__v_emitter = R.__v_emitter != null ? R.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && As(ee, a, ne), ee;
}
function ca(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function cl(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Qa(e, t, a, n, l) {
  const { missing: i, onWarn: s } = e;
  if (process.env.NODE_ENV !== "production") {
    const u = e.__v_emitter;
    u && u.emit("missing", {
      locale: a,
      key: t,
      type: l,
      groupId: `${l}:${t}`
    });
  }
  if (i !== null) {
    const u = i(e, a, t, l);
    return x(u) ? u : t;
  } else
    return process.env.NODE_ENV !== "production" && cl(n, t) && s(nt(be.NOT_FOUND_KEY, { key: t, locale: a })), t;
}
function It(e, t, a) {
  const n = e;
  n.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, a, t);
}
function _l(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Zs(e, t) {
  const a = t.indexOf(e);
  if (a === -1)
    return !1;
  for (let n = a + 1; n < t.length; n++)
    if (_l(e, t[n]))
      return !0;
  return !1;
}
const wt = (e) => G(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e), Pn = () => "", Te = (e) => Q(e);
function Rn(e, ...t) {
  const { fallbackFormat: a, postTranslation: n, unresolving: l, messageCompiler: i, fallbackLocale: s, messages: u } = e, [r, d] = $a(...t), c = oe(d.missingWarn) ? d.missingWarn : e.missingWarn, m = oe(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, _ = oe(d.escapeParameter) ? d.escapeParameter : e.escapeParameter, p = !!d.resolvedMessage, b = x(d.default) || oe(d.default) ? oe(d.default) ? i ? r : () => r : d.default : a ? i ? r : () => r : "", w = a || b !== "", y = qa(e, d);
  _ && Js(d);
  let [h, C, M] = p ? [
    r,
    y,
    u[y] || {}
  ] : pl(e, r, y, s, m, c), N = h, P = r;
  if (!p && !(x(N) || wt(N) || Te(N)) && w && (N = b, P = N), !p && (!(x(N) || wt(N) || Te(N)) || !x(C)))
    return l ? ua : r;
  if (process.env.NODE_ENV !== "production" && x(N) && e.messageCompiler == null)
    return Et(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${r}'.`), r;
  let A = !1;
  const D = () => {
    A = !0;
  }, R = Te(N) ? N : dl(e, r, C, N, P, D);
  if (A)
    return N;
  const S = eu(e, C, M, d), J = xs(S), ne = Xs(e, R, J), ee = n ? n(ne, r) : ne;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const ke = {
      timestamp: Date.now(),
      key: x(r) ? r : Te(N) ? N.key : "",
      locale: C || (Te(N) ? N.locale : ""),
      format: x(N) ? N : Te(N) ? N.source : "",
      message: ee
    };
    ke.meta = pe({}, e.__meta, /* @__PURE__ */ Hs() || {}), Ms(ke);
  }
  return ee;
}
function Js(e) {
  ie(e.list) ? e.list = e.list.map((t) => x(t) ? Cn(t) : t) : G(e.named) && Object.keys(e.named).forEach((t) => {
    x(e.named[t]) && (e.named[t] = Cn(e.named[t]));
  });
}
function pl(e, t, a, n, l, i) {
  const { messages: s, onWarn: u, messageResolver: r, localeFallbacker: d } = e, c = d(e, n, a);
  let m = {}, _, p = null, b = a, w = null;
  const y = "translate";
  for (let h = 0; h < c.length; h++) {
    if (_ = w = c[h], process.env.NODE_ENV !== "production" && a !== _ && !_l(a, _) && ca(l, t) && u(nt(be.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: _
    })), process.env.NODE_ENV !== "production" && a !== _) {
      const P = e.__v_emitter;
      P && P.emit("fallback", {
        type: y,
        key: t,
        from: b,
        to: w,
        groupId: `${y}:${t}`
      });
    }
    m = s[_] || {};
    let C = null, M, N;
    if (process.env.NODE_ENV !== "production" && Fe && (C = window.performance.now(), M = "intlify-message-resolve-start", N = "intlify-message-resolve-end", Ee && Ee(M)), (p = r(m, t)) === null && (p = m[t]), process.env.NODE_ENV !== "production" && Fe) {
      const P = window.performance.now(), A = e.__v_emitter;
      A && C && p && A.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: p,
        time: P - C,
        groupId: `${y}:${t}`
      }), M && N && Ee && at && (Ee(N), at("intlify message resolve", M, N));
    }
    if (x(p) || wt(p) || Te(p))
      break;
    if (!Zs(_, c)) {
      const P = Qa(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        _,
        i,
        y
      );
      P !== t && (p = P);
    }
    b = w;
  }
  return [p, _, m];
}
function dl(e, t, a, n, l, i) {
  const { messageCompiler: s, warnHtmlMessage: u } = e;
  if (Te(n)) {
    const _ = n;
    return _.locale = _.locale || a, _.key = _.key || t, _;
  }
  if (s == null) {
    const _ = () => n;
    return _.locale = a, _.key = t, _;
  }
  let r = null, d, c;
  process.env.NODE_ENV !== "production" && Fe && (r = window.performance.now(), d = "intlify-message-compilation-start", c = "intlify-message-compilation-end", Ee && Ee(d));
  const m = s(n, qs(e, a, l, n, u, i));
  if (process.env.NODE_ENV !== "production" && Fe) {
    const _ = window.performance.now(), p = e.__v_emitter;
    p && r && p.emit("message-compilation", {
      type: "message-compilation",
      message: n,
      time: _ - r,
      groupId: `translate:${t}`
    }), d && c && Ee && at && (Ee(c), at("intlify message compilation", d, c));
  }
  return m.locale = a, m.key = t, m.source = n, m;
}
function Xs(e, t, a) {
  let n = null, l, i;
  process.env.NODE_ENV !== "production" && Fe && (n = window.performance.now(), l = "intlify-message-evaluation-start", i = "intlify-message-evaluation-end", Ee && Ee(l));
  const s = t(a);
  if (process.env.NODE_ENV !== "production" && Fe) {
    const u = window.performance.now(), r = e.__v_emitter;
    r && n && r.emit("message-evaluation", {
      type: "message-evaluation",
      value: s,
      time: u - n,
      groupId: `translate:${t.key}`
    }), l && i && Ee && at && (Ee(i), at("intlify message evaluation", l, i));
  }
  return s;
}
function $a(...e) {
  const [t, a, n] = e, l = {};
  if (!x(t) && !_e(t) && !Te(t) && !wt(t))
    throw Re(ce.INVALID_ARGUMENT);
  const i = _e(t) ? String(t) : (Te(t), t);
  return _e(a) ? l.plural = a : x(a) ? l.default = a : H(a) && !ra(a) ? l.named = a : ie(a) && (l.list = a), _e(n) ? l.plural = n : x(n) ? l.default = n : H(n) && pe(l, n), [i, l];
}
function qs(e, t, a, n, l, i) {
  return {
    locale: t,
    key: a,
    warnHtmlMessage: l,
    onError: (s) => {
      if (i && i(s), process.env.NODE_ENV !== "production") {
        const u = Qs(n), r = `Message compilation error: ${s.message}`, d = s.location && u && rs(u, s.location.start.offset, s.location.end.offset), c = e.__v_emitter;
        c && u && c.emit("compile-error", {
          message: u,
          error: s.message,
          start: s.location && s.location.start.offset,
          end: s.location && s.location.end.offset,
          groupId: `translate:${a}`
        }), console.error(d ? `${r}
${d}` : r);
      } else
        throw s;
    },
    onCacheKey: (s) => es(t, a, s)
  };
}
function Qs(e) {
  if (x(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function eu(e, t, a, n) {
  const { modifiers: l, pluralRules: i, messageResolver: s, fallbackLocale: u, fallbackWarn: r, missingWarn: d, fallbackContext: c } = e, _ = {
    locale: t,
    modifiers: l,
    pluralRules: i,
    messages: (p) => {
      let b = s(a, p);
      if (b == null && c) {
        const [, , w] = pl(c, p, t, u, r, d);
        b = s(w, p);
      }
      if (x(b) || wt(b)) {
        let w = !1;
        const h = dl(e, p, t, b, p, () => {
          w = !0;
        });
        return w ? Pn : h;
      } else
        return Te(b) ? b : Pn;
    }
  };
  return e.processor && (_.processor = e.processor), n.list && (_.list = n.list), n.named && (_.named = n.named), _e(n.plural) && (_.pluralIndex = n.plural), _;
}
const Dn = typeof Intl < "u", ml = {
  dateTimeFormat: Dn && typeof Intl.DateTimeFormat < "u",
  numberFormat: Dn && typeof Intl.NumberFormat < "u"
};
function Fn(e, ...t) {
  const { datetimeFormats: a, unresolving: n, fallbackLocale: l, onWarn: i, localeFallbacker: s } = e, { __datetimeFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !ml.dateTimeFormat)
    return i(nt(be.CANNOT_FORMAT_DATE)), oa;
  const [r, d, c, m] = Va(...t), _ = oe(c.missingWarn) ? c.missingWarn : e.missingWarn, p = oe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, b = !!c.part, w = qa(e, c), y = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    l,
    w
  );
  if (!x(r) || r === "")
    return new Intl.DateTimeFormat(w, m).format(d);
  let h = {}, C, M = null, N = w, P = null;
  const A = "datetime format";
  for (let S = 0; S < y.length; S++) {
    if (C = P = y[S], process.env.NODE_ENV !== "production" && w !== C && ca(p, r) && i(nt(be.FALLBACK_TO_DATE_FORMAT, {
      key: r,
      target: C
    })), process.env.NODE_ENV !== "production" && w !== C) {
      const J = e.__v_emitter;
      J && J.emit("fallback", {
        type: A,
        key: r,
        from: N,
        to: P,
        groupId: `${A}:${r}`
      });
    }
    if (h = a[C] || {}, M = h[r], H(M))
      break;
    Qa(e, r, C, _, A), N = P;
  }
  if (!H(M) || !x(C))
    return n ? ua : r;
  let D = `${C}__${r}`;
  ra(m) || (D = `${D}__${JSON.stringify(m)}`);
  let R = u.get(D);
  return R || (R = new Intl.DateTimeFormat(C, pe({}, M, m)), u.set(D, R)), b ? R.formatToParts(d) : R.format(d);
}
const fl = [
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
function Va(...e) {
  const [t, a, n, l] = e, i = {};
  let s = {}, u;
  if (x(t)) {
    const r = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!r)
      throw Re(ce.INVALID_ISO_DATE_ARGUMENT);
    const d = r[3] ? r[3].trim().startsWith("T") ? `${r[1].trim()}${r[3].trim()}` : `${r[1].trim()}T${r[3].trim()}` : r[1].trim();
    u = new Date(d);
    try {
      u.toISOString();
    } catch {
      throw Re(ce.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (as(t)) {
    if (isNaN(t.getTime()))
      throw Re(ce.INVALID_DATE_ARGUMENT);
    u = t;
  } else if (_e(t))
    u = t;
  else
    throw Re(ce.INVALID_ARGUMENT);
  return x(a) ? i.key = a : H(a) && Object.keys(a).forEach((r) => {
    fl.includes(r) ? s[r] = a[r] : i[r] = a[r];
  }), x(n) ? i.locale = n : H(n) && (s = n), H(l) && (s = l), [i.key || "", u, i, s];
}
function $n(e, t, a) {
  const n = e;
  for (const l in a) {
    const i = `${t}__${l}`;
    n.__datetimeFormatters.has(i) && n.__datetimeFormatters.delete(i);
  }
}
function Vn(e, ...t) {
  const { numberFormats: a, unresolving: n, fallbackLocale: l, onWarn: i, localeFallbacker: s } = e, { __numberFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !ml.numberFormat)
    return i(nt(be.CANNOT_FORMAT_NUMBER)), oa;
  const [r, d, c, m] = za(...t), _ = oe(c.missingWarn) ? c.missingWarn : e.missingWarn, p = oe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, b = !!c.part, w = qa(e, c), y = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    l,
    w
  );
  if (!x(r) || r === "")
    return new Intl.NumberFormat(w, m).format(d);
  let h = {}, C, M = null, N = w, P = null;
  const A = "number format";
  for (let S = 0; S < y.length; S++) {
    if (C = P = y[S], process.env.NODE_ENV !== "production" && w !== C && ca(p, r) && i(nt(be.FALLBACK_TO_NUMBER_FORMAT, {
      key: r,
      target: C
    })), process.env.NODE_ENV !== "production" && w !== C) {
      const J = e.__v_emitter;
      J && J.emit("fallback", {
        type: A,
        key: r,
        from: N,
        to: P,
        groupId: `${A}:${r}`
      });
    }
    if (h = a[C] || {}, M = h[r], H(M))
      break;
    Qa(e, r, C, _, A), N = P;
  }
  if (!H(M) || !x(C))
    return n ? ua : r;
  let D = `${C}__${r}`;
  ra(m) || (D = `${D}__${JSON.stringify(m)}`);
  let R = u.get(D);
  return R || (R = new Intl.NumberFormat(C, pe({}, M, m)), u.set(D, R)), b ? R.formatToParts(d) : R.format(d);
}
const bl = [
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
function za(...e) {
  const [t, a, n, l] = e, i = {};
  let s = {};
  if (!_e(t))
    throw Re(ce.INVALID_ARGUMENT);
  const u = t;
  return x(a) ? i.key = a : H(a) && Object.keys(a).forEach((r) => {
    bl.includes(r) ? s[r] = a[r] : i[r] = a[r];
  }), x(n) ? i.locale = n : H(n) && (s = n), H(l) && (s = l), [i.key || "", u, i, s];
}
function zn(e, t, a) {
  const n = e;
  for (const l in a) {
    const i = `${t}__${l}`;
    n.__numberFormatters.has(i) && n.__numberFormatters.delete(i);
  }
}
ms();
/*!
  * vue-i18n v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const tu = "9.14.1";
function au() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (At().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (At().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const gl = be.__EXTEND_POINT__, Pe = sa(gl), ve = {
  FALLBACK_TO_ROOT: gl,
  // 9
  NOT_SUPPORTED_PRESERVE: Pe(),
  // 10
  NOT_SUPPORTED_FORMATTER: Pe(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: Pe(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: Pe(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: Pe(),
  // 14
  NOT_FOUND_PARENT_SCOPE: Pe(),
  // 15
  IGNORE_OBJ_FLATTEN: Pe(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: Pe(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: Pe()
  // 18
}, nu = {
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
function ia(e, ...t) {
  return qn(nu[e], ...t);
}
const hl = ce.__EXTEND_POINT__, he = sa(hl), le = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: hl,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: he(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: he(),
  // 26
  NOT_INSTALLED: he(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: he(),
  // 28
  // directive module errors
  REQUIRED_VALUE: he(),
  // 29
  INVALID_VALUE: he(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: he(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: he(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: he(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: he(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: he(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: he(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: he(),
  // 37
  // for enhancement
  __EXTEND_POINT__: he()
  // 38
};
function Pt(e, ...t) {
  return al(e, null, process.env.NODE_ENV !== "production" ? { messages: lu, args: t } : void 0);
}
const lu = {
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
}, Ba = /* @__PURE__ */ $e("__translateVNode"), Ua = /* @__PURE__ */ $e("__datetimeParts"), ja = /* @__PURE__ */ $e("__numberParts"), Wa = /* @__PURE__ */ $e("__enableEmitter"), Ga = /* @__PURE__ */ $e("__disableEmitter"), ou = $e("__setPluralRules"), iu = /* @__PURE__ */ $e("__injectWithOption"), Ha = /* @__PURE__ */ $e("__dispose");
function Rt(e) {
  if (!G(e))
    return e;
  for (const t in e)
    if (na(e, t))
      if (!t.includes("."))
        G(e[t]) && Rt(e[t]);
      else {
        const a = t.split("."), n = a.length - 1;
        let l = e, i = !1;
        for (let s = 0; s < n; s++) {
          if (a[s] in l || (l[a[s]] = {}), !G(l[a[s]])) {
            process.env.NODE_ENV !== "production" && Et(ia(ve.IGNORE_OBJ_FLATTEN, {
              key: a[s]
            })), i = !0;
            break;
          }
          l = l[a[s]];
        }
        i || (l[a[n]] = e[t], delete e[t]), G(l[a[n]]) && Rt(l[a[n]]);
      }
  return e;
}
function vl(e, t) {
  const { messages: a, __i18n: n, messageResolver: l, flatJson: i } = t, s = H(a) ? a : ie(n) ? {} : { [e]: {} };
  if (ie(n) && n.forEach((u) => {
    if ("locale" in u && "resource" in u) {
      const { locale: r, resource: d } = u;
      r ? (s[r] = s[r] || {}, ea(d, s[r])) : ea(d, s);
    } else
      x(u) && ea(JSON.parse(u), s);
  }), l == null && i)
    for (const u in s)
      na(s, u) && Rt(s[u]);
  return s;
}
function wl(e) {
  return e.type;
}
function ru(e, t, a) {
  let n = G(t.messages) ? t.messages : {};
  "__i18nGlobal" in a && (n = vl(e.locale.value, {
    messages: n,
    __i18n: a.__i18nGlobal
  }));
  const l = Object.keys(n);
  l.length && l.forEach((i) => {
    e.mergeLocaleMessage(i, n[i]);
  });
  {
    if (G(t.datetimeFormats)) {
      const i = Object.keys(t.datetimeFormats);
      i.length && i.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (G(t.numberFormats)) {
      const i = Object.keys(t.numberFormats);
      i.length && i.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function Bn(e) {
  return U(Lo, null, e, 0);
}
const Un = "__INTLIFY_META__", jn = () => [], su = () => !1;
let Wn = 0;
function Gn(e) {
  return (t, a, n, l) => e(a, n, Za() || void 0, l);
}
const uu = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Za();
  let t = null;
  return e && (t = wl(e)[Un]) ? { [Un]: t } : null;
};
function cu(e = {}, t) {
  const { __root: a, __injectWithOption: n } = e, l = a === void 0, i = e.flatJson, s = Fe ? W : xo, u = !!e.translateExistCompatible;
  process.env.NODE_ENV !== "production" && u && tl(ia(ve.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  let r = oe(e.inheritLocale) ? e.inheritLocale : !0;
  const d = s(
    // prettier-ignore
    a && r ? a.locale.value : x(e.locale) ? e.locale : la
  ), c = s(
    // prettier-ignore
    a && r ? a.fallbackLocale.value : x(e.fallbackLocale) || ie(e.fallbackLocale) || H(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : d.value
  ), m = s(vl(d.value, e)), _ = s(H(e.datetimeFormats) ? e.datetimeFormats : { [d.value]: {} }), p = s(H(e.numberFormats) ? e.numberFormats : { [d.value]: {} });
  let b = a ? a.missingWarn : oe(e.missingWarn) || aa(e.missingWarn) ? e.missingWarn : !0, w = a ? a.fallbackWarn : oe(e.fallbackWarn) || aa(e.fallbackWarn) ? e.fallbackWarn : !0, y = a ? a.fallbackRoot : oe(e.fallbackRoot) ? e.fallbackRoot : !0, h = !!e.fallbackFormat, C = Q(e.missing) ? e.missing : null, M = Q(e.missing) ? Gn(e.missing) : null, N = Q(e.postTranslation) ? e.postTranslation : null, P = a ? a.warnHtmlMessage : oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, A = !!e.escapeParameter;
  const D = a ? a.modifiers : H(e.modifiers) ? e.modifiers : {};
  let R = e.pluralRules || a && a.pluralRules, S;
  S = (() => {
    l && An(null);
    const g = {
      version: tu,
      locale: d.value,
      fallbackLocale: c.value,
      messages: m.value,
      modifiers: D,
      pluralRules: R,
      missing: M === null ? void 0 : M,
      missingWarn: b,
      fallbackWarn: w,
      fallbackFormat: h,
      unresolving: !0,
      postTranslation: N === null ? void 0 : N,
      warnHtmlMessage: P,
      escapeParameter: A,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    g.datetimeFormats = _.value, g.numberFormats = p.value, g.__datetimeFormatters = H(S) ? S.__datetimeFormatters : void 0, g.__numberFormatters = H(S) ? S.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (g.__v_emitter = H(S) ? S.__v_emitter : void 0);
    const E = Ys(g);
    return l && An(E), E;
  })(), It(S, d.value, c.value);
  function ne() {
    return [
      d.value,
      c.value,
      m.value,
      _.value,
      p.value
    ];
  }
  const ee = X({
    get: () => d.value,
    set: (g) => {
      d.value = g, S.locale = d.value;
    }
  }), ke = X({
    get: () => c.value,
    set: (g) => {
      c.value = g, S.fallbackLocale = c.value, It(S, d.value, g);
    }
  }), Le = X(() => m.value), Ge = /* @__PURE__ */ X(() => _.value), kt = /* @__PURE__ */ X(() => p.value);
  function He() {
    return Q(N) ? N : null;
  }
  function Ke(g) {
    N = g, S.postTranslation = g;
  }
  function pa() {
    return C;
  }
  function Y(g) {
    g !== null && (M = Gn(g)), C = g, S.missing = M;
  }
  function da(g, E) {
    return g !== "translate" || !E.resolvedMessage;
  }
  const Ae = (g, E, V, q, Ie, dt) => {
    ne();
    let Ve;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, l || (S.fallbackContext = a ? Ks() : void 0), Ve = g(S);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, l || (S.fallbackContext = void 0);
    }
    if (V !== "translate exists" && // for not `te` (e.g `t`)
    _e(Ve) && Ve === ua || V === "translate exists" && !Ve) {
      const [xe, ka] = E();
      if (process.env.NODE_ENV !== "production" && a && x(xe) && da(V, ka) && (y && (ca(w, xe) || cl(b, xe)) && Et(ia(ve.FALLBACK_TO_ROOT, {
        key: xe,
        type: V
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Gt } = S;
        Gt && y && Gt.emit("fallback", {
          type: V,
          key: xe,
          to: "global",
          groupId: `${V}:${xe}`
        });
      }
      return a && y ? q(a) : Ie(xe);
    } else {
      if (dt(Ve))
        return Ve;
      throw Pt(le.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ye(...g) {
    return Ae((E) => Reflect.apply(Rn, null, [E, ...g]), () => $a(...g), "translate", (E) => Reflect.apply(E.t, E, [...g]), (E) => E, (E) => x(E));
  }
  function $t(...g) {
    const [E, V, q] = g;
    if (q && !G(q))
      throw Pt(le.INVALID_ARGUMENT);
    return ye(E, V, pe({ resolvedMessage: !0 }, q || {}));
  }
  function Vt(...g) {
    return Ae((E) => Reflect.apply(Fn, null, [E, ...g]), () => Va(...g), "datetime format", (E) => Reflect.apply(E.d, E, [...g]), () => oa, (E) => x(E));
  }
  function ma(...g) {
    return Ae((E) => Reflect.apply(Vn, null, [E, ...g]), () => za(...g), "number format", (E) => Reflect.apply(E.n, E, [...g]), () => oa, (E) => x(E));
  }
  function fa(g) {
    return g.map((E) => x(E) || _e(E) || oe(E) ? Bn(String(E)) : E);
  }
  const ba = {
    normalize: fa,
    interpolate: (g) => g,
    type: "vnode"
  };
  function ga(...g) {
    return Ae(
      (E) => {
        let V;
        const q = E;
        try {
          q.processor = ba, V = Reflect.apply(Rn, null, [q, ...g]);
        } finally {
          q.processor = null;
        }
        return V;
      },
      () => $a(...g),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (E) => E[Ba](...g),
      (E) => [Bn(E)],
      (E) => ie(E)
    );
  }
  function zt(...g) {
    return Ae(
      (E) => Reflect.apply(Vn, null, [E, ...g]),
      () => za(...g),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (E) => E[ja](...g),
      jn,
      (E) => x(E) || ie(E)
    );
  }
  function ha(...g) {
    return Ae(
      (E) => Reflect.apply(Fn, null, [E, ...g]),
      () => Va(...g),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (E) => E[Ua](...g),
      jn,
      (E) => x(E) || ie(E)
    );
  }
  function va(g) {
    R = g, S.pluralRules = R;
  }
  function Bt(g, E) {
    return Ae(() => {
      if (!g)
        return !1;
      const V = x(E) ? E : d.value, q = Ct(V), Ie = S.messageResolver(q, g);
      return u ? Ie != null : wt(Ie) || Te(Ie) || x(Ie);
    }, () => [g], "translate exists", (V) => Reflect.apply(V.te, V, [g, E]), su, (V) => oe(V));
  }
  function Ut(g) {
    let E = null;
    const V = ol(S, c.value, d.value);
    for (let q = 0; q < V.length; q++) {
      const Ie = m.value[V[q]] || {}, dt = S.messageResolver(Ie, g);
      if (dt != null) {
        E = dt;
        break;
      }
    }
    return E;
  }
  function yt(g) {
    const E = Ut(g);
    return E ?? (a ? a.tm(g) || {} : {});
  }
  function Ct(g) {
    return m.value[g] || {};
  }
  function wa(g, E) {
    if (i) {
      const V = { [g]: E };
      for (const q in V)
        na(V, q) && Rt(V[q]);
      E = V[g];
    }
    m.value[g] = E, S.messages = m.value;
  }
  function Ea(g, E) {
    m.value[g] = m.value[g] || {};
    const V = { [g]: E };
    if (i)
      for (const q in V)
        na(V, q) && Rt(V[q]);
    E = V[g], ea(E, m.value[g]), S.messages = m.value;
  }
  function _t(g) {
    return _.value[g] || {};
  }
  function Tt(g, E) {
    _.value[g] = E, S.datetimeFormats = _.value, $n(S, g, E);
  }
  function jt(g, E) {
    _.value[g] = pe(_.value[g] || {}, E), S.datetimeFormats = _.value, $n(S, g, E);
  }
  function Wt(g) {
    return p.value[g] || {};
  }
  function Oe(g, E) {
    p.value[g] = E, S.numberFormats = p.value, zn(S, g, E);
  }
  function pt(g, E) {
    p.value[g] = pe(p.value[g] || {}, E), S.numberFormats = p.value, zn(S, g, E);
  }
  Wn++, a && Fe && (Lt(a.locale, (g) => {
    r && (d.value = g, S.locale = g, It(S, d.value, c.value));
  }), Lt(a.fallbackLocale, (g) => {
    r && (c.value = g, S.fallbackLocale = g, It(S, d.value, c.value));
  }));
  const te = {
    id: Wn,
    locale: ee,
    fallbackLocale: ke,
    get inheritLocale() {
      return r;
    },
    set inheritLocale(g) {
      r = g, g && a && (d.value = a.locale.value, c.value = a.fallbackLocale.value, It(S, d.value, c.value));
    },
    get availableLocales() {
      return Object.keys(m.value).sort();
    },
    messages: Le,
    get modifiers() {
      return D;
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
      return w;
    },
    set fallbackWarn(g) {
      w = g, S.fallbackWarn = w;
    },
    get fallbackRoot() {
      return y;
    },
    set fallbackRoot(g) {
      y = g;
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
      return A;
    },
    set escapeParameter(g) {
      A = g, S.escapeParameter = g;
    },
    t: ye,
    getLocaleMessage: Ct,
    setLocaleMessage: wa,
    mergeLocaleMessage: Ea,
    getPostTranslationHandler: He,
    setPostTranslationHandler: Ke,
    getMissingHandler: pa,
    setMissingHandler: Y,
    [ou]: va
  };
  return te.datetimeFormats = Ge, te.numberFormats = kt, te.rt = $t, te.te = Bt, te.tm = yt, te.d = Vt, te.n = ma, te.getDateTimeFormat = _t, te.setDateTimeFormat = Tt, te.mergeDateTimeFormat = jt, te.getNumberFormat = Wt, te.setNumberFormat = Oe, te.mergeNumberFormat = pt, te[iu] = n, te[Ba] = ga, te[Ua] = ha, te[ja] = zt, process.env.NODE_ENV !== "production" && (te[Wa] = (g) => {
    S.__v_emitter = g;
  }, te[Ga] = () => {
    S.__v_emitter = void 0;
  }), te;
}
const en = {
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
function _u({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, l) => [
    ...n,
    // prettier-ignore
    ...l.type === et ? l.children : [l]
  ], []) : t.reduce((a, n) => {
    const l = e[n];
    return l && (a[n] = l()), a;
  }, {});
}
function El(e) {
  return et;
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
}, en);
function pu(e) {
  return ie(e) && !x(e[0]);
}
function kl(e, t, a, n) {
  const { slots: l, attrs: i } = t;
  return () => {
    const s = { part: !0 };
    let u = {};
    e.locale && (s.locale = e.locale), x(e.format) ? s.key = e.format : G(e.format) && (x(e.format.key) && (s.key = e.format.key), u = Object.keys(e.format).reduce((_, p) => a.includes(p) ? pe({}, _, { [p]: e.format[p] }) : _, {}));
    const r = n(e.value, s, u);
    let d = [s.key];
    ie(r) ? d = r.map((_, p) => {
      const b = l[_.type], w = b ? b({ [_.type]: _.value, index: p, parts: r }) : [_.value];
      return pu(w) && (w[0].key = `${_.type}-${p}`), w;
    }) : x(r) && (d = [r]);
    const c = pe({}, i), m = x(e.tag) || G(e.tag) ? e.tag : El();
    return Ya(m, c, d);
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
}, en);
pe({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, en);
function Hn(e, t) {
}
const du = /* @__PURE__ */ $e("global-vue-i18n");
function _a(e = {}) {
  const t = Za();
  if (t == null)
    throw Pt(le.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Pt(le.NOT_INSTALLED);
  const a = mu(t), n = bu(a), l = wl(t), i = fu(e, l);
  if (i === "global")
    return ru(n, e, l), n;
  if (i === "parent") {
    let r = gu(a, t, e.__useComponent);
    return r == null && (process.env.NODE_ENV !== "production" && Et(ia(ve.NOT_FOUND_PARENT_SCOPE)), r = n), r;
  }
  const s = a;
  let u = s.__getInstance(t);
  if (u == null) {
    const r = pe({}, e);
    "__i18n" in l && (r.__i18n = l.__i18n), n && (r.__root = n), u = cu(r), s.__composerExtend && (u[Ha] = s.__composerExtend(u)), vu(s, t, u), s.__setInstance(t, u);
  }
  return u;
}
function mu(e) {
  {
    const t = Yn(e.isCE ? du : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Pt(e.isCE ? le.NOT_INSTALLED_WITH_PROVIDE : le.UNEXPECTED_ERROR);
    return t;
  }
}
function fu(e, t) {
  return ra(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function bu(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function gu(e, t, a = !1) {
  let n = null;
  const l = t.root;
  let i = hu(t, a);
  for (; i != null; ) {
    const s = e;
    if (e.mode === "composition" && (n = s.__getInstance(i)), n != null || l === i)
      break;
    i = i.parent;
  }
  return n;
}
function hu(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function vu(e, t, a) {
  let n = null;
  Ka(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = a, n = ss();
      const l = a;
      l[Wa] && l[Wa](n), n.on("*", Hn);
    }
  }, t), Io(() => {
    const l = a;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (n && n.off("*", Hn), l[Ga] && l[Ga](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const i = l[Ha];
    i && (i(), delete l[Ha]);
  }, t);
}
au();
js(ks);
Ws(ol);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = At();
  e.__INTLIFY__ = !0, Ls(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const wu = {
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
}, Eu = {
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
}, ku = {
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
}, yu = {
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
}, Cu = {
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
}, Tu = {
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
}, Su = {
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
}, Nu = {
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
}, Ou = {
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
}, Iu = {
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
}, xu = {
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
}, Lu = {
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
}, Au = {
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
}, Mu = {
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
}, Pu = {
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
}, Ru = {
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
}, Du = {
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
}, Fu = {
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
}, $u = {
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
}, Vu = {
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
}, zu = {
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
}, Bu = {
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
}, Uu = {
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
}, ju = {
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
}, Wu = {
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
}, Gu = {
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
}, Hu = {
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
}, Ku = {
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
}, Yu = {
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
}, Zu = {
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
}, Kn = {
  ar: wu,
  bn: Eu,
  cs: ku,
  de: yu,
  el: Cu,
  en: Tu,
  es: Su,
  fa: Nu,
  fil: Ou,
  fr: Iu,
  he: xu,
  hi: Lu,
  hu: Au,
  id: Mu,
  it: Pu,
  ja: Ru,
  ko: Du,
  ms: Fu,
  nl: $u,
  pl: Vu,
  pt: zu,
  ro: Bu,
  ru: Uu,
  sv: ju,
  th: Wu,
  tr: Gu,
  uk: Hu,
  ur: Ku,
  vi: Yu,
  zh: Zu
};
function Ju() {
  let e = null;
  try {
    e = _a().locale;
  } catch {
    e = null;
  }
  return X(() => {
    const t = ((e == null ? void 0 : e.value) ?? "en").toLowerCase();
    return Kn[t] ?? Kn.en;
  });
}
const Xu = /* @__PURE__ */ ae({
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
  setup(e, { emit: t }) {
    const a = e, n = t, l = W(a.view), i = (c) => {
      n("update:view", c), l.value = c;
    };
    Zn(je, {
      authView: l,
      setAuthView: i
    });
    const s = Ju(), u = X(() => {
      var _;
      const c = Xt(s.value), m = Xt((_ = a == null ? void 0 : a.localization) == null ? void 0 : _.variables);
      return Ra(c, m ?? {});
    }), r = X(() => l.value === "sign_in" || l.value === "sign_up" || l.value === "magic_link"), d = X(() => {
      var _, p;
      const c = Xt((_ = a.appearance) == null ? void 0 : _.theme), m = Xt((p = a.appearance) == null ? void 0 : p.variables);
      return Ra(
        (c == null ? void 0 : c.default) ?? {},
        (c == null ? void 0 : c[a.theme]) ?? {},
        (m == null ? void 0 : m.default) ?? {},
        (m == null ? void 0 : m[a == null ? void 0 : a.theme]) ?? {}
      );
    });
    return Fa({ theme: d.value }), Lt(
      () => [a.appearance, a.theme],
      () => {
        Fa({ theme: d.value });
      },
      { deep: !0 }
    ), Lt(
      () => a.view,
      (c) => {
        const { data: m } = a.supabaseClient.auth.onAuthStateChange(
          (_) => {
            _ === "PASSWORD_RECOVERY" ? i("update_password") : _ === "USER_UPDATED" && i("sign_in");
          }
        );
        return i(c), () => m.subscription.unsubscribe();
      },
      { deep: !0 }
    ), (c, m) => r.value ? (T(), F(pi, {
      key: 0,
      direction: "horizontal",
      gap: "small",
      theme: a.theme,
      appearance: c.appearance
    }, {
      default: L(() => [
        r.value ? (T(), F(zr, {
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
          i18n: u.value
        }, null, 8, ["supabaseClient", "appearance", "providers", "providerScopes", "queryParams", "socialLayout", "redirectTo", "useOAuthPopup", "popupWindowFeatures", "onlyThirdPartyProviders", "i18n"])) : K("", !0),
        c.onlyThirdPartyProviders ? K("", !0) : (T(), j(et, { key: 1 }, [
          l.value === "sign_in" || l.value === "sign_up" ? (T(), F(gi, {
            key: 0,
            supabaseClient: c.supabaseClient,
            appearance: c.appearance,
            redirectTo: c.redirectTo,
            magicLink: c.magicLink,
            showLinks: c.showLinks,
            i18n: u.value,
            additionalData: c.additionalData,
            options: c.options,
            "onAuth:submit": m[0] || (m[0] = (_) => n("auth:submit", _)),
            "onAuth:error": m[1] || (m[1] = (_) => n("auth:error", _))
          }, null, 8, ["supabaseClient", "appearance", "redirectTo", "magicLink", "showLinks", "i18n", "additionalData", "options"])) : K("", !0),
          l.value === "magic_link" ? (T(), F(Ur, {
            key: 1,
            supabaseClient: c.supabaseClient,
            appearance: c.appearance,
            redirectTo: c.redirectTo,
            showLinks: c.showLinks,
            i18n: u.value
          }, null, 8, ["supabaseClient", "appearance", "redirectTo", "showLinks", "i18n"])) : K("", !0)
        ], 64))
      ]),
      _: 1
    }, 8, ["theme", "appearance"])) : (T(), j(et, { key: 1 }, [
      l.value === "forgotten_password" ? (T(), F(Wr, {
        key: 0,
        supabaseClient: c.supabaseClient,
        appearance: c.appearance,
        redirectTo: c.redirectTo,
        showLinks: c.showLinks,
        i18n: u.value,
        options: c.options
      }, null, 8, ["supabaseClient", "appearance", "redirectTo", "showLinks", "i18n", "options"])) : K("", !0),
      l.value === "update_password" ? (T(), F(Hr, {
        key: 1,
        supabaseClient: c.supabaseClient,
        appearance: c.appearance,
        i18n: u.value
      }, null, 8, ["supabaseClient", "appearance", "i18n"])) : K("", !0),
      l.value === "verify_otp" ? (T(), F(Jr, {
        key: 2,
        supabaseClient: c.supabaseClient,
        appearance: c.appearance,
        otpType: c.otpType,
        i18n: u.value
      }, null, 8, ["supabaseClient", "appearance", "otpType", "i18n"])) : K("", !0),
      l.value === "anonymous_sign_in" ? (T(), F(qr, {
        key: 3,
        supabaseClient: c.supabaseClient,
        appearance: c.appearance,
        i18n: u.value,
        anonymouslyCredentials: c.anonymouslyCredentials
      }, null, 8, ["supabaseClient", "appearance", "i18n", "anonymouslyCredentials"])) : K("", !0)
    ], 64));
  }
}), ec = {
  install(e) {
    e.component("Auth", Xu);
  }
};
export {
  Xu as Auth,
  Wr as ForgottenPassword,
  Ur as MagicLink,
  Hr as UpdatePassword,
  Qu as UserContextProvider,
  _i as UserContextProviderKey,
  ec as default,
  ct as injectStrict,
  Xa as useSupabaseUser
};
