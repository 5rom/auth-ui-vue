import { defineComponent as ne, useAttrs as rt, computed as q, openBlock as S, createBlock as $, resolveDynamicComponent as ot, mergeProps as lt, unref as C, withCtx as k, renderSlot as We, createElementBlock as j, normalizeClass as So, normalizeStyle as Oo, inject as Ya, ref as z, watch as kt, withModifiers as Ee, createVNode as W, createElementVNode as V, createTextVNode as U, toDisplayString as B, createCommentVNode as Y, createStaticVNode as Ft, onMounted as Kn, provide as Ka, h as Xn, Fragment as et, renderList as wo, getCurrentInstance as Zn, onUnmounted as Lo, shallowRef as Io, Text as Ao } from "vue";
var me = {
  SIGN_IN: "sign_in",
  SIGN_UP: "sign_up",
  FORGOTTEN_PASSWORD: "forgotten_password",
  MAGIC_LINK: "magic_link",
  UPDATE_PASSWORD: "update_password",
  VERIFY_OTP: "verify_otp"
}, ko = "supabase-auth-ui", Po = {
  // interfaces
  ROOT: "root",
  SIGN_IN: me.SIGN_IN,
  SIGN_UP: me.SIGN_UP,
  FORGOTTEN_PASSWORD: me.FORGOTTEN_PASSWORD,
  MAGIC_LINK: me.MAGIC_LINK,
  UPDATE_PASSWORD: me.UPDATE_PASSWORD,
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
function it(e, t, n) {
  var a, r;
  const l = [], s = Po[e];
  return l.push(
    n != null && n.prependedClassName ? (n == null ? void 0 : n.prependedClassName) + "_" + s : ko + "_" + s
  ), (a = n == null ? void 0 : n.className) != null && a[e] && l.push((r = n == null ? void 0 : n.className) == null ? void 0 : r[e]), ((n == null ? void 0 : n.extend) === void 0 || (n == null ? void 0 : n.extend) === !0) && l.push(t), l;
}
function Dn(e, t) {
  let n;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (Array.isArray(t))
      for (n = 0; n < t.length; n++)
        e[n] = Dn(e[n], t[n]);
    else
      for (n in t)
        e[n] = Dn(e[n], t[n]);
    return e;
  }
  return t;
}
function Fn(e, ...t) {
  let n = t.length;
  for (let a = 0; a < n; a++)
    e = Dn(e, t[a]);
  return e;
}
function Ro(e, t) {
  return e.replace(
    /{{(\w+)}}/g,
    (n, a) => t.hasOwnProperty(a) ? t[a] : n
  );
}
var Mo = {
  sign_up: {
    email_label: "Email address",
    password_label: "Create a Password",
    email_input_placeholder: "Your email address",
    password_input_placeholder: "Your password",
    button_label: "Sign up",
    loading_button_label: "Signing up ...",
    social_provider_text: "Sign in with {{provider}}",
    link_text: "Don't have an account? Sign up",
    confirmation_text: "Check your email for the confirmation link"
  },
  sign_in: {
    email_label: "Email address",
    password_label: "Your Password",
    email_input_placeholder: "Your email address",
    password_input_placeholder: "Your password",
    button_label: "Sign in",
    loading_button_label: "Signing in ...",
    social_provider_text: "Sign in with {{provider}}",
    link_text: "Already have an account? Sign in"
  },
  magic_link: {
    email_input_label: "Email address",
    email_input_placeholder: "Your email address",
    button_label: "Send Magic Link",
    loading_button_label: "Sending Magic Link ...",
    link_text: "Send a magic link email",
    confirmation_text: "Check your email for the magic link"
  },
  forgotten_password: {
    email_label: "Email address",
    password_label: "Your Password",
    email_input_placeholder: "Your email address",
    button_label: "Send reset password instructions",
    loading_button_label: "Sending reset instructions ...",
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
    email_input_label: "Email address",
    email_input_placeholder: "Your email address",
    phone_input_label: "Phone number",
    phone_input_placeholder: "Your phone number",
    token_input_label: "Token",
    token_input_placeholder: "Your Otp token",
    button_label: "Verify token",
    loading_button_label: "Signing in ..."
  }
}, ga, X = "colors", _e = "sizes", L = "space", Do = { gap: L, gridGap: L, columnGap: L, gridColumnGap: L, rowGap: L, gridRowGap: L, inset: L, insetBlock: L, insetBlockEnd: L, insetBlockStart: L, insetInline: L, insetInlineEnd: L, insetInlineStart: L, margin: L, marginTop: L, marginRight: L, marginBottom: L, marginLeft: L, marginBlock: L, marginBlockEnd: L, marginBlockStart: L, marginInline: L, marginInlineEnd: L, marginInlineStart: L, padding: L, paddingTop: L, paddingRight: L, paddingBottom: L, paddingLeft: L, paddingBlock: L, paddingBlockEnd: L, paddingBlockStart: L, paddingInline: L, paddingInlineEnd: L, paddingInlineStart: L, top: L, right: L, bottom: L, left: L, scrollMargin: L, scrollMarginTop: L, scrollMarginRight: L, scrollMarginBottom: L, scrollMarginLeft: L, scrollMarginX: L, scrollMarginY: L, scrollMarginBlock: L, scrollMarginBlockEnd: L, scrollMarginBlockStart: L, scrollMarginInline: L, scrollMarginInlineEnd: L, scrollMarginInlineStart: L, scrollPadding: L, scrollPaddingTop: L, scrollPaddingRight: L, scrollPaddingBottom: L, scrollPaddingLeft: L, scrollPaddingX: L, scrollPaddingY: L, scrollPaddingBlock: L, scrollPaddingBlockEnd: L, scrollPaddingBlockStart: L, scrollPaddingInline: L, scrollPaddingInlineEnd: L, scrollPaddingInlineStart: L, fontSize: "fontSizes", background: X, backgroundColor: X, backgroundImage: X, borderImage: X, border: X, borderBlock: X, borderBlockEnd: X, borderBlockStart: X, borderBottom: X, borderBottomColor: X, borderColor: X, borderInline: X, borderInlineEnd: X, borderInlineStart: X, borderLeft: X, borderLeftColor: X, borderRight: X, borderRightColor: X, borderTop: X, borderTopColor: X, caretColor: X, color: X, columnRuleColor: X, fill: X, outline: X, outlineColor: X, stroke: X, textDecorationColor: X, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: _e, minBlockSize: _e, maxBlockSize: _e, inlineSize: _e, minInlineSize: _e, maxInlineSize: _e, width: _e, minWidth: _e, maxWidth: _e, height: _e, minHeight: _e, maxHeight: _e, flexBasis: _e, gridTemplateColumns: _e, gridTemplateRows: _e, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, Fo = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, $t = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n, ...a) => {
    const r = ((l) => JSON.stringify(l, Fo))(t);
    return r in e ? e[r] : e[r] = n(t, ...a);
  };
}, Qt = Symbol.for("sxs.internal"), qn = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), ha = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: $o } = Object.prototype, $n = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), Vo = /\s+(?![^()]*\))/, bt = (e) => (t) => e(...typeof t == "string" ? String(t).split(Vo) : [t]), ba = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: bt((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: bt((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: bt((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: bt((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: bt((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: bt((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, Rn = /([\d.]+)([^]*)/, xo = (e, t) => e.length ? e.reduce((n, a) => (n.push(...t.map((r) => r.includes("&") ? r.replace(/&/g, /[ +>|~]/.test(a) && /&.*&/.test(r) ? `:is(${a})` : a) : a + " " + r)), n), []) : t, Uo = (e, t) => e in Bo && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (n, a, r, l) => a + (r === "stretch" ? `-moz-available${l};${$n(e)}:${a}-webkit-fill-available` : `-moz-fit-content${l};${$n(e)}:${a}fit-content`) + l) : String(t), Bo = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, Fe = (e) => e ? e + "-" : "", Xa = (e, t, n) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (a, r, l, s, c) => s == "$" == !!l ? a : (r || s == "--" ? "calc(" : "") + "var(--" + (s === "$" ? Fe(t) + (c.includes("$") ? "" : Fe(n)) + c.replace(/\$/g, "-") : c) + ")" + (r || s == "--" ? "*" + (r || "") + (l || "1") + ")" : "")), Wo = /\s*,\s*(?![^()]*\))/, jo = Object.prototype.toString, vt = (e, t, n, a, r) => {
  let l, s, c;
  const i = (f, u, _) => {
    let p, d;
    const g = (E) => {
      for (p in E) {
        const N = p.charCodeAt(0) === 64, R = N && Array.isArray(E[p]) ? E[p] : [E[p]];
        for (d of R) {
          const w = /[A-Z]/.test(b = p) ? b : b.replace(/-[^]/g, (P) => P[1].toUpperCase()), M = typeof d == "object" && d && d.toString === jo && (!a.utils[w] || !u.length);
          if (w in a.utils && !M) {
            const P = a.utils[w];
            if (P !== s) {
              s = P, g(P(d)), s = null;
              continue;
            }
          } else if (w in ba) {
            const P = ba[w];
            if (P !== c) {
              c = P, g(P(d)), c = null;
              continue;
            }
          }
          if (N && (T = p.slice(1) in a.media ? "@media " + a.media[p.slice(1)] : p, p = T.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (P, F, D, O, Z, ae) => {
            const ee = Rn.test(F), Ce = 0.0625 * (ee ? -1 : 1), [ke, Ge] = ee ? [O, F] : [F, O];
            return "(" + (D[0] === "=" ? "" : D[0] === ">" === ee ? "max-" : "min-") + ke + ":" + (D[0] !== "=" && D.length === 1 ? Ge.replace(Rn, (Ct, He, Ye) => Number(He) + Ce * (D === ">" ? 1 : -1) + Ye) : Ge) + (Z ? ") and (" + (Z[0] === ">" ? "min-" : "max-") + ke + ":" + (Z.length === 1 ? ae.replace(Rn, (Ct, He, Ye) => Number(He) + Ce * (Z === ">" ? -1 : 1) + Ye) : ae) : "") + ")";
          })), M) {
            const P = N ? _.concat(p) : [..._], F = N ? [...u] : xo(u, p.split(Wo));
            l !== void 0 && r(va(...l)), l = void 0, i(d, F, P);
          } else
            l === void 0 && (l = [[], u, _]), p = N || p.charCodeAt(0) !== 36 ? p : `--${Fe(a.prefix)}${p.slice(1).replace(/\$/g, "-")}`, d = M ? d : typeof d == "number" ? d && w in zo ? String(d) + "px" : String(d) : Xa(Uo(w, d ?? ""), a.prefix, a.themeMap[w]), l[0].push(`${N ? `${p} ` : `${$n(p)}:`}${d}`);
        }
      }
      var T, b;
    };
    g(f), l !== void 0 && r(va(...l)), l = void 0;
  };
  i(e, t, n);
}, va = (e, t, n) => `${n.map((a) => `${a}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, zo = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, Ea = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), tt = (e) => ((t) => {
  let n, a = "";
  for (n = Math.abs(t); n > 52; n = n / 52 | 0)
    a = Ea(n % 52) + a;
  return Ea(n % 52) + a;
})(((t, n) => {
  let a = n.length;
  for (; a; )
    t = 33 * t ^ n.charCodeAt(--a);
  return t;
})(5381, JSON.stringify(e)) >>> 0), At = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], Go = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, Ho = (e) => {
  let t;
  const n = () => {
    const { cssRules: r } = t.sheet;
    return [].map.call(r, (l, s) => {
      const { cssText: c } = l;
      let i = "";
      if (c.startsWith("--sxs"))
        return "";
      if (r[s - 1] && (i = r[s - 1].cssText).startsWith("--sxs")) {
        if (!l.cssRules.length)
          return "";
        for (const f in t.rules)
          if (t.rules[f].group === l)
            return `--sxs{--sxs:${[...t.rules[f].cache].join(" ")}}${c}`;
        return l.cssRules.length ? `${i}${c}` : "";
      }
      return c;
    }).join("");
  }, a = () => {
    if (t) {
      const { rules: c, sheet: i } = t;
      if (!i.deleteRule) {
        for (; Object(Object(i.cssRules)[0]).type === 3; )
          i.cssRules.splice(0, 1);
        i.cssRules = [];
      }
      for (const f in c)
        delete c[f];
    }
    const r = Object(e).styleSheets || [];
    for (const c of r)
      if (Go(c)) {
        for (let i = 0, f = c.cssRules; f[i]; ++i) {
          const u = Object(f[i]);
          if (u.type !== 1)
            continue;
          const _ = Object(f[i + 1]);
          if (_.type !== 4)
            continue;
          ++i;
          const { cssText: p } = u;
          if (!p.startsWith("--sxs"))
            continue;
          const d = p.slice(14, -3).trim().split(/\s+/), g = At[d[0]];
          g && (t || (t = { sheet: c, reset: a, rules: {}, toString: n }), t.rules[g] = { group: _, index: i, cache: new Set(d) });
        }
        if (t)
          break;
      }
    if (!t) {
      const c = (i, f) => ({ type: f, cssRules: [], insertRule(u, _) {
        this.cssRules.splice(_, 0, c(u, { import: 3, undefined: 1 }[(u.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return i === "@media{}" ? `@media{${[].map.call(this.cssRules, (u) => u.cssText).join("")}}` : i;
      } });
      t = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : c("", "text/css"), rules: {}, reset: a, toString: n };
    }
    const { sheet: l, rules: s } = t;
    for (let c = At.length - 1; c >= 0; --c) {
      const i = At[c];
      if (!s[i]) {
        const f = At[c + 1], u = s[f] ? s[f].index : l.cssRules.length;
        l.insertRule("@media{}", u), l.insertRule(`--sxs{--sxs:${c}}`, u), s[i] = { group: l.cssRules[u + 1], index: u, cache: /* @__PURE__ */ new Set([c]) };
      }
      Yo(s[i]);
    }
  };
  return a(), t;
}, Yo = (e) => {
  const t = e.group;
  let n = t.cssRules.length;
  e.apply = (a) => {
    try {
      t.insertRule(a, n), ++n;
    } catch {
    }
  };
}, Lt = Symbol(), Ko = $t(), Xo = (e, t) => Ko(e, () => (...n) => {
  let a = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const r of n)
    if (r != null)
      if (r[Qt]) {
        a.type == null && (a.type = r[Qt].type);
        for (const l of r[Qt].composers)
          a.composers.add(l);
      } else
        r.constructor !== Object || r.$$typeof ? a.type == null && (a.type = r) : a.composers.add(Zo(r, e));
  return a.type == null && (a.type = "span"), a.composers.size || a.composers.add(["PJLV", {}, [], [], {}, []]), qo(e, a, t);
}), Zo = ({ variants: e, compoundVariants: t, defaultVariants: n, ...a }, r) => {
  const l = `${Fe(r.prefix)}c-${tt(a)}`, s = [], c = [], i = /* @__PURE__ */ Object.create(null), f = [];
  for (const p in n)
    i[p] = String(n[p]);
  if (typeof e == "object" && e)
    for (const p in e) {
      u = i, _ = p, $o.call(u, _) || (i[p] = "undefined");
      const d = e[p];
      for (const g in d) {
        const E = { [p]: String(g) };
        String(g) === "undefined" && f.push(p);
        const T = d[g], b = [E, T, !ha(T)];
        s.push(b);
      }
    }
  var u, _;
  if (typeof t == "object" && t)
    for (const p of t) {
      let { css: d, ...g } = p;
      d = typeof d == "object" && d || {};
      for (const T in g)
        g[T] = String(g[T]);
      const E = [g, d, !ha(d)];
      c.push(E);
    }
  return [l, a, s, c, i, f];
}, qo = (e, t, n) => {
  const [a, r, l, s] = Jo(t.composers), c = typeof t.type == "function" || t.type.$$typeof ? ((_) => {
    function p() {
      for (let d = 0; d < p[Lt].length; d++) {
        const [g, E] = p[Lt][d];
        _.rules[g].apply(E);
      }
      return p[Lt] = [], null;
    }
    return p[Lt] = [], p.rules = {}, At.forEach((d) => p.rules[d] = { apply: (g) => p[Lt].push([d, g]) }), p;
  })(n) : null, i = (c || n).rules, f = `.${a}${r.length > 1 ? `:where(.${r.slice(1).join(".")})` : ""}`, u = (_) => {
    _ = typeof _ == "object" && _ || Qo;
    const { css: p, ...d } = _, g = {};
    for (const b in l)
      if (delete d[b], b in _) {
        let N = _[b];
        typeof N == "object" && N ? g[b] = { "@initial": l[b], ...N } : (N = String(N), g[b] = N !== "undefined" || s.has(b) ? N : l[b]);
      } else
        g[b] = l[b];
    const E = /* @__PURE__ */ new Set([...r]);
    for (const [b, N, R, w] of t.composers) {
      n.rules.styled.cache.has(b) || (n.rules.styled.cache.add(b), vt(N, [`.${b}`], [], e, (F) => {
        i.styled.apply(F);
      }));
      const M = ya(R, g, e.media), P = ya(w, g, e.media, !0);
      for (const F of M)
        if (F !== void 0)
          for (const [D, O, Z] of F) {
            const ae = `${b}-${tt(O)}-${D}`;
            E.add(ae);
            const ee = (Z ? n.rules.resonevar : n.rules.onevar).cache, Ce = Z ? i.resonevar : i.onevar;
            ee.has(ae) || (ee.add(ae), vt(O, [`.${ae}`], [], e, (ke) => {
              Ce.apply(ke);
            }));
          }
      for (const F of P)
        if (F !== void 0)
          for (const [D, O] of F) {
            const Z = `${b}-${tt(O)}-${D}`;
            E.add(Z), n.rules.allvar.cache.has(Z) || (n.rules.allvar.cache.add(Z), vt(O, [`.${Z}`], [], e, (ae) => {
              i.allvar.apply(ae);
            }));
          }
    }
    if (typeof p == "object" && p) {
      const b = `${a}-i${tt(p)}-css`;
      E.add(b), n.rules.inline.cache.has(b) || (n.rules.inline.cache.add(b), vt(p, [`.${b}`], [], e, (N) => {
        i.inline.apply(N);
      }));
    }
    for (const b of String(_.className || "").trim().split(/\s+/))
      b && E.add(b);
    const T = d.className = [...E].join(" ");
    return { type: t.type, className: T, selector: f, props: d, toString: () => T, deferredInjector: c };
  };
  return qn(u, { className: a, selector: f, [Qt]: t, toString: () => (n.rules.styled.cache.has(a) || u(), a) });
}, Jo = (e) => {
  let t = "";
  const n = [], a = {}, r = [];
  for (const [l, , , , s, c] of e) {
    t === "" && (t = l), n.push(l), r.push(...c);
    for (const i in s) {
      const f = s[i];
      (a[i] === void 0 || f !== "undefined" || c.includes(f)) && (a[i] = f);
    }
  }
  return [t, n, a, new Set(r)];
}, ya = (e, t, n, a) => {
  const r = [];
  e:
    for (let [l, s, c] of e) {
      if (c)
        continue;
      let i, f = 0, u = !1;
      for (i in l) {
        const _ = l[i];
        let p = t[i];
        if (p !== _) {
          if (typeof p != "object" || !p)
            continue e;
          {
            let d, g, E = 0;
            for (const T in p) {
              if (_ === String(p[T])) {
                if (T !== "@initial") {
                  const b = T.slice(1);
                  (g = g || []).push(b in n ? n[b] : T.replace(/^@media ?/, "")), u = !0;
                }
                f += E, d = !0;
              }
              ++E;
            }
            if (g && g.length && (s = { ["@media " + g.join(", ")]: s }), !d)
              continue e;
          }
        }
      }
      (r[f] = r[f] || []).push([a ? "cv" : `${i}-${l[i]}`, s, u]);
    }
  return r;
}, Qo = {}, el = $t(), tl = (e, t) => el(e, () => (...n) => {
  const a = () => {
    for (let r of n) {
      r = typeof r == "object" && r || {};
      let l = tt(r);
      if (!t.rules.global.cache.has(l)) {
        if (t.rules.global.cache.add(l), "@import" in r) {
          let s = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let c of [].concat(r["@import"]))
            c = c.includes('"') || c.includes("'") ? c : `"${c}"`, t.sheet.insertRule(`@import ${c};`, s++);
          delete r["@import"];
        }
        vt(r, [], [], e, (s) => {
          t.rules.global.apply(s);
        });
      }
    }
    return "";
  };
  return qn(a, { toString: a });
}), nl = $t(), al = (e, t) => nl(e, () => (n) => {
  const a = `${Fe(e.prefix)}k-${tt(n)}`, r = () => {
    if (!t.rules.global.cache.has(a)) {
      t.rules.global.cache.add(a);
      const l = [];
      vt(n, [], [], e, (c) => l.push(c));
      const s = `@keyframes ${a}{${l.join("")}}`;
      t.rules.global.apply(s);
    }
    return a;
  };
  return qn(r, { get name() {
    return r();
  }, toString: r });
}), rl = class {
  constructor(e, t, n, a) {
    this.token = e == null ? "" : String(e), this.value = t == null ? "" : String(t), this.scale = n == null ? "" : String(n), this.prefix = a == null ? "" : String(a);
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
}, ol = $t(), ll = (e, t) => ol(e, () => (n, a) => {
  a = typeof n == "object" && n || Object(a);
  const r = `.${n = (n = typeof n == "string" ? n : "") || `${Fe(e.prefix)}t-${tt(a)}`}`, l = {}, s = [];
  for (const i in a) {
    l[i] = {};
    for (const f in a[i]) {
      const u = `--${Fe(e.prefix)}${i}-${f}`, _ = Xa(String(a[i][f]), e.prefix, i);
      l[i][f] = new rl(f, _, i, e.prefix), s.push(`${u}:${_}`);
    }
  }
  const c = () => {
    if (s.length && !t.rules.themed.cache.has(n)) {
      t.rules.themed.cache.add(n);
      const i = `${a === e.theme ? ":root," : ""}.${n}{${s.join(";")}}`;
      t.rules.themed.apply(i);
    }
    return n;
  };
  return { ...l, get className() {
    return c();
  }, selector: r, toString: c };
}), il = $t(), Vn = (e) => {
  let t = !1;
  const n = il(e, (a) => {
    t = !0;
    const r = "prefix" in (a = typeof a == "object" && a || {}) ? String(a.prefix) : "", l = typeof a.media == "object" && a.media || {}, s = typeof a.root == "object" ? a.root || null : globalThis.document || null, c = typeof a.theme == "object" && a.theme || {}, i = { prefix: r, media: l, theme: c, themeMap: typeof a.themeMap == "object" && a.themeMap || { ...Do }, utils: typeof a.utils == "object" && a.utils || {} }, f = Ho(s), u = { css: Xo(i, f), globalCss: tl(i, f), keyframes: al(i, f), createTheme: ll(i, f), reset() {
      f.reset(), u.theme.toString();
    }, theme: {}, sheet: f, config: i, prefix: r, getCssText: f.toString, toString: f.toString };
    return String(u.theme = u.createTheme(c)), u;
  });
  return t || n.reset(), n;
}, Za = () => ga || (ga = Vn()), sl = (...e) => Za().createTheme(...e), st = (...e) => Za().css(...e), Zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tn = { exports: {} };
tn.exports;
(function(e, t) {
  var n = 200, a = "__lodash_hash_undefined__", r = 9007199254740991, l = "[object Arguments]", s = "[object Array]", c = "[object Boolean]", i = "[object Date]", f = "[object Error]", u = "[object Function]", _ = "[object GeneratorFunction]", p = "[object Map]", d = "[object Number]", g = "[object Object]", E = "[object Promise]", T = "[object RegExp]", b = "[object Set]", N = "[object String]", R = "[object Symbol]", w = "[object WeakMap]", M = "[object ArrayBuffer]", P = "[object DataView]", F = "[object Float32Array]", D = "[object Float64Array]", O = "[object Int8Array]", Z = "[object Int16Array]", ae = "[object Int32Array]", ee = "[object Uint8Array]", Ce = "[object Uint8ClampedArray]", ke = "[object Uint16Array]", Ge = "[object Uint32Array]", Ct = /[\\^$.*+?()[\]{}|]/g, He = /\w*$/, Ye = /^\[object .+?Constructor\]$/, fn = /^(?:0|[1-9]\d*)$/, K = {};
  K[l] = K[s] = K[M] = K[P] = K[c] = K[i] = K[F] = K[D] = K[O] = K[Z] = K[ae] = K[p] = K[d] = K[g] = K[T] = K[b] = K[N] = K[R] = K[ee] = K[Ce] = K[ke] = K[Ge] = !0, K[f] = K[u] = K[w] = !1;
  var _n = typeof Zt == "object" && Zt && Zt.Object === Object && Zt, Pe = typeof self == "object" && self && self.Object === Object && self, Te = _n || Pe || Function("return this")(), Vt = t && !t.nodeType && t, xt = Vt && !0 && e && !e.nodeType && e, mn = xt && xt.exports === Vt;
  function gn(o, m) {
    return o.set(m[0], m[1]), o;
  }
  function na(o, m) {
    return o.add(m), o;
  }
  function hn(o, m) {
    for (var v = -1, I = o ? o.length : 0; ++v < I && m(o[v], v, o) !== !1; )
      ;
    return o;
  }
  function bn(o, m) {
    for (var v = -1, I = m.length, se = o.length; ++v < I; )
      o[se + v] = m[v];
    return o;
  }
  function Ut(o, m, v, I) {
    var se = -1, fe = o ? o.length : 0;
    for (I && fe && (v = o[++se]); ++se < fe; )
      v = m(v, o[se], se, o);
    return v;
  }
  function vn(o, m) {
    for (var v = -1, I = Array(o); ++v < o; )
      I[v] = m(v);
    return I;
  }
  function En(o, m) {
    return o == null ? void 0 : o[m];
  }
  function Bt(o) {
    var m = !1;
    if (o != null && typeof o.toString != "function")
      try {
        m = !!(o + "");
      } catch {
      }
    return m;
  }
  function Wt(o) {
    var m = -1, v = Array(o.size);
    return o.forEach(function(I, se) {
      v[++m] = [se, I];
    }), v;
  }
  function Tt(o, m) {
    return function(v) {
      return o(m(v));
    };
  }
  function Nt(o) {
    var m = -1, v = Array(o.size);
    return o.forEach(function(I) {
      v[++m] = I;
    }), v;
  }
  var yn = Array.prototype, Cn = Function.prototype, pt = Object.prototype, St = Te["__core-js_shared__"], jt = function() {
    var o = /[^.]+$/.exec(St && St.keys && St.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), zt = Cn.toString, Le = pt.hasOwnProperty, dt = pt.toString, te = RegExp(
    "^" + zt.call(Le).replace(Ct, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), h = mn ? Te.Buffer : void 0, y = Te.Symbol, x = Te.Uint8Array, J = Tt(Object.getPrototypeOf, Object), Ie = Object.create, ft = pt.propertyIsEnumerable, xe = yn.splice, Ae = Object.getOwnPropertySymbols, Tn = h ? h.isBuffer : void 0, Gt = Tt(Object.keys, Object), Nn = gt(Te, "DataView"), Ot = gt(Te, "Map"), Sn = gt(Te, "Promise"), On = gt(Te, "Set"), wn = gt(Te, "WeakMap"), wt = gt(Object, "create"), Cr = Ze(Nn), Tr = Ze(Ot), Nr = Ze(Sn), Sr = Ze(On), Or = Ze(wn), aa = y ? y.prototype : void 0, ra = aa ? aa.valueOf : void 0;
  function Ke(o) {
    var m = -1, v = o ? o.length : 0;
    for (this.clear(); ++m < v; ) {
      var I = o[m];
      this.set(I[0], I[1]);
    }
  }
  function wr() {
    this.__data__ = wt ? wt(null) : {};
  }
  function Lr(o) {
    return this.has(o) && delete this.__data__[o];
  }
  function Ir(o) {
    var m = this.__data__;
    if (wt) {
      var v = m[o];
      return v === a ? void 0 : v;
    }
    return Le.call(m, o) ? m[o] : void 0;
  }
  function Ar(o) {
    var m = this.__data__;
    return wt ? m[o] !== void 0 : Le.call(m, o);
  }
  function kr(o, m) {
    var v = this.__data__;
    return v[o] = wt && m === void 0 ? a : m, this;
  }
  Ke.prototype.clear = wr, Ke.prototype.delete = Lr, Ke.prototype.get = Ir, Ke.prototype.has = Ar, Ke.prototype.set = kr;
  function Re(o) {
    var m = -1, v = o ? o.length : 0;
    for (this.clear(); ++m < v; ) {
      var I = o[m];
      this.set(I[0], I[1]);
    }
  }
  function Pr() {
    this.__data__ = [];
  }
  function Rr(o) {
    var m = this.__data__, v = Ht(m, o);
    if (v < 0)
      return !1;
    var I = m.length - 1;
    return v == I ? m.pop() : xe.call(m, v, 1), !0;
  }
  function Mr(o) {
    var m = this.__data__, v = Ht(m, o);
    return v < 0 ? void 0 : m[v][1];
  }
  function Dr(o) {
    return Ht(this.__data__, o) > -1;
  }
  function Fr(o, m) {
    var v = this.__data__, I = Ht(v, o);
    return I < 0 ? v.push([o, m]) : v[I][1] = m, this;
  }
  Re.prototype.clear = Pr, Re.prototype.delete = Rr, Re.prototype.get = Mr, Re.prototype.has = Dr, Re.prototype.set = Fr;
  function _t(o) {
    var m = -1, v = o ? o.length : 0;
    for (this.clear(); ++m < v; ) {
      var I = o[m];
      this.set(I[0], I[1]);
    }
  }
  function $r() {
    this.__data__ = {
      hash: new Ke(),
      map: new (Ot || Re)(),
      string: new Ke()
    };
  }
  function Vr(o) {
    return Yt(this, o).delete(o);
  }
  function xr(o) {
    return Yt(this, o).get(o);
  }
  function Ur(o) {
    return Yt(this, o).has(o);
  }
  function Br(o, m) {
    return Yt(this, o).set(o, m), this;
  }
  _t.prototype.clear = $r, _t.prototype.delete = Vr, _t.prototype.get = xr, _t.prototype.has = Ur, _t.prototype.set = Br;
  function mt(o) {
    this.__data__ = new Re(o);
  }
  function Wr() {
    this.__data__ = new Re();
  }
  function jr(o) {
    return this.__data__.delete(o);
  }
  function zr(o) {
    return this.__data__.get(o);
  }
  function Gr(o) {
    return this.__data__.has(o);
  }
  function Hr(o, m) {
    var v = this.__data__;
    if (v instanceof Re) {
      var I = v.__data__;
      if (!Ot || I.length < n - 1)
        return I.push([o, m]), this;
      v = this.__data__ = new _t(I);
    }
    return v.set(o, m), this;
  }
  mt.prototype.clear = Wr, mt.prototype.delete = jr, mt.prototype.get = zr, mt.prototype.has = Gr, mt.prototype.set = Hr;
  function Yr(o, m) {
    var v = An(o) || bo(o) ? vn(o.length, String) : [], I = v.length, se = !!I;
    for (var fe in o)
      (m || Le.call(o, fe)) && !(se && (fe == "length" || _o(fe, I))) && v.push(fe);
    return v;
  }
  function oa(o, m, v) {
    var I = o[m];
    (!(Le.call(o, m) && ca(I, v)) || v === void 0 && !(m in o)) && (o[m] = v);
  }
  function Ht(o, m) {
    for (var v = o.length; v--; )
      if (ca(o[v][0], m))
        return v;
    return -1;
  }
  function Kr(o, m) {
    return o && la(m, kn(m), o);
  }
  function Ln(o, m, v, I, se, fe, Ne) {
    var he;
    if (I && (he = fe ? I(o, se, fe, Ne) : I(o)), he !== void 0)
      return he;
    if (!Kt(o))
      return o;
    var da = An(o);
    if (da) {
      if (he = uo(o), !m)
        return io(o, he);
    } else {
      var ht = Xe(o), fa = ht == u || ht == _;
      if (Eo(o))
        return eo(o, m);
      if (ht == g || ht == l || fa && !fe) {
        if (Bt(o))
          return fe ? o : {};
        if (he = po(fa ? {} : o), !m)
          return so(o, Kr(he, o));
      } else {
        if (!K[ht])
          return fe ? o : {};
        he = fo(o, ht, Ln, m);
      }
    }
    Ne || (Ne = new mt());
    var _a = Ne.get(o);
    if (_a)
      return _a;
    if (Ne.set(o, he), !da)
      var ma = v ? co(o) : kn(o);
    return hn(ma || o, function(Pn, Xt) {
      ma && (Xt = Pn, Pn = o[Xt]), oa(he, Xt, Ln(Pn, m, v, I, Xt, o, Ne));
    }), he;
  }
  function Xr(o) {
    return Kt(o) ? Ie(o) : {};
  }
  function Zr(o, m, v) {
    var I = m(o);
    return An(o) ? I : bn(I, v(o));
  }
  function qr(o) {
    return dt.call(o);
  }
  function Jr(o) {
    if (!Kt(o) || go(o))
      return !1;
    var m = pa(o) || Bt(o) ? te : Ye;
    return m.test(Ze(o));
  }
  function Qr(o) {
    if (!sa(o))
      return Gt(o);
    var m = [];
    for (var v in Object(o))
      Le.call(o, v) && v != "constructor" && m.push(v);
    return m;
  }
  function eo(o, m) {
    if (m)
      return o.slice();
    var v = new o.constructor(o.length);
    return o.copy(v), v;
  }
  function In(o) {
    var m = new o.constructor(o.byteLength);
    return new x(m).set(new x(o)), m;
  }
  function to(o, m) {
    var v = m ? In(o.buffer) : o.buffer;
    return new o.constructor(v, o.byteOffset, o.byteLength);
  }
  function no(o, m, v) {
    var I = m ? v(Wt(o), !0) : Wt(o);
    return Ut(I, gn, new o.constructor());
  }
  function ao(o) {
    var m = new o.constructor(o.source, He.exec(o));
    return m.lastIndex = o.lastIndex, m;
  }
  function ro(o, m, v) {
    var I = m ? v(Nt(o), !0) : Nt(o);
    return Ut(I, na, new o.constructor());
  }
  function oo(o) {
    return ra ? Object(ra.call(o)) : {};
  }
  function lo(o, m) {
    var v = m ? In(o.buffer) : o.buffer;
    return new o.constructor(v, o.byteOffset, o.length);
  }
  function io(o, m) {
    var v = -1, I = o.length;
    for (m || (m = Array(I)); ++v < I; )
      m[v] = o[v];
    return m;
  }
  function la(o, m, v, I) {
    v || (v = {});
    for (var se = -1, fe = m.length; ++se < fe; ) {
      var Ne = m[se], he = I ? I(v[Ne], o[Ne], Ne, v, o) : void 0;
      oa(v, Ne, he === void 0 ? o[Ne] : he);
    }
    return v;
  }
  function so(o, m) {
    return la(o, ia(o), m);
  }
  function co(o) {
    return Zr(o, kn, ia);
  }
  function Yt(o, m) {
    var v = o.__data__;
    return mo(m) ? v[typeof m == "string" ? "string" : "hash"] : v.map;
  }
  function gt(o, m) {
    var v = En(o, m);
    return Jr(v) ? v : void 0;
  }
  var ia = Ae ? Tt(Ae, Object) : To, Xe = qr;
  (Nn && Xe(new Nn(new ArrayBuffer(1))) != P || Ot && Xe(new Ot()) != p || Sn && Xe(Sn.resolve()) != E || On && Xe(new On()) != b || wn && Xe(new wn()) != w) && (Xe = function(o) {
    var m = dt.call(o), v = m == g ? o.constructor : void 0, I = v ? Ze(v) : void 0;
    if (I)
      switch (I) {
        case Cr:
          return P;
        case Tr:
          return p;
        case Nr:
          return E;
        case Sr:
          return b;
        case Or:
          return w;
      }
    return m;
  });
  function uo(o) {
    var m = o.length, v = o.constructor(m);
    return m && typeof o[0] == "string" && Le.call(o, "index") && (v.index = o.index, v.input = o.input), v;
  }
  function po(o) {
    return typeof o.constructor == "function" && !sa(o) ? Xr(J(o)) : {};
  }
  function fo(o, m, v, I) {
    var se = o.constructor;
    switch (m) {
      case M:
        return In(o);
      case c:
      case i:
        return new se(+o);
      case P:
        return to(o, I);
      case F:
      case D:
      case O:
      case Z:
      case ae:
      case ee:
      case Ce:
      case ke:
      case Ge:
        return lo(o, I);
      case p:
        return no(o, I, v);
      case d:
      case N:
        return new se(o);
      case T:
        return ao(o);
      case b:
        return ro(o, I, v);
      case R:
        return oo(o);
    }
  }
  function _o(o, m) {
    return m = m ?? r, !!m && (typeof o == "number" || fn.test(o)) && o > -1 && o % 1 == 0 && o < m;
  }
  function mo(o) {
    var m = typeof o;
    return m == "string" || m == "number" || m == "symbol" || m == "boolean" ? o !== "__proto__" : o === null;
  }
  function go(o) {
    return !!jt && jt in o;
  }
  function sa(o) {
    var m = o && o.constructor, v = typeof m == "function" && m.prototype || pt;
    return o === v;
  }
  function Ze(o) {
    if (o != null) {
      try {
        return zt.call(o);
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
    return Ln(o, !0, !0);
  }
  function ca(o, m) {
    return o === m || o !== o && m !== m;
  }
  function bo(o) {
    return vo(o) && Le.call(o, "callee") && (!ft.call(o, "callee") || dt.call(o) == l);
  }
  var An = Array.isArray;
  function ua(o) {
    return o != null && yo(o.length) && !pa(o);
  }
  function vo(o) {
    return Co(o) && ua(o);
  }
  var Eo = Tn || No;
  function pa(o) {
    var m = Kt(o) ? dt.call(o) : "";
    return m == u || m == _;
  }
  function yo(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= r;
  }
  function Kt(o) {
    var m = typeof o;
    return !!o && (m == "object" || m == "function");
  }
  function Co(o) {
    return !!o && typeof o == "object";
  }
  function kn(o) {
    return ua(o) ? Yr(o) : Qr(o);
  }
  function To() {
    return [];
  }
  function No() {
    return !1;
  }
  e.exports = ho;
})(tn, tn.exports);
var ul = tn.exports;
const qt = /* @__PURE__ */ cl(ul), je = Symbol("AuthView"), pl = Symbol("UserContextProvider"), dl = /* @__PURE__ */ ne({
  __name: "SocialAuthContainer",
  props: {
    theme: {},
    className: {},
    appearance: {}
  },
  setup(e) {
    const t = e, n = rt(), a = q(() => {
      var r, l, s, c;
      return t.theme !== "default" ? sl(
        Fn(
          (l = (r = t.appearance) == null ? void 0 : r.theme) == null ? void 0 : l[t.theme],
          ((c = (s = t.appearance) == null ? void 0 : s.variables) == null ? void 0 : c[t.theme]) ?? {}
        )
      ).className : "";
    });
    return (r, l) => (S(), $(ot("div"), lt(C(n), { class: a.value }), {
      default: k(() => [
        We(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qe = /* @__PURE__ */ ne({
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
    }), n = e, a = rt(), r = q(() => it(
      "anchor",
      t(),
      n.appearance
    ).join(" "));
    return (l, s) => {
      var c, i;
      return S(), $(ot("a"), lt(C(a), {
        class: r.value,
        style: (i = (c = l.appearance) == null ? void 0 : c.style) == null ? void 0 : i.anchor
      }), {
        default: k(() => [
          We(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
}), fl = ["disabled"], ct = /* @__PURE__ */ ne({
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
    }), n = e, a = rt(), r = q(() => it(
      "button",
      t({ color: n.color }),
      n.appearance
    ).join(" "));
    return (l, s) => {
      var c, i;
      return S(), j("button", lt(C(a), {
        class: r.value,
        style: (i = (c = l.appearance) == null ? void 0 : c.style) == null ? void 0 : i.button,
        disabled: l.loading
      }), [
        We(l.$slots, "icon"),
        We(l.$slots, "default")
      ], 16, fl);
    };
  }
}), we = /* @__PURE__ */ ne({
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
    }), n = e, a = q(() => it(
      "container",
      t({
        direction: n.direction,
        gap: n.gap
      }),
      n.appearance
    ).join(" "));
    return (r, l) => {
      var s, c;
      return S(), $(ot(r.is), {
        class: So(a.value),
        style: Oo((c = (s = r.appearance) == null ? void 0 : s.style) == null ? void 0 : c.container)
      }, {
        default: k(() => [
          We(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
}), _l = /* @__PURE__ */ ne({
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
    }), n = e, a = rt(), r = q(() => it(
      "divider",
      t(),
      n.appearance
    ).join(" "));
    return (l, s) => {
      var c, i;
      return S(), $(ot("div"), lt(C(a), {
        class: r.value,
        style: (i = (c = l.appearance) == null ? void 0 : c.style) == null ? void 0 : i.divider
      }), {
        default: k(() => [
          We(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
}), ml = ["type", "value"], Ue = /* @__PURE__ */ ne({
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
    }), n = e, a = rt(), r = q(() => it(
      "input",
      t({
        type: n.type === "password" ? "password" : "default"
      }),
      n.appearance
    ).join(" "));
    return (l, s) => {
      var c, i;
      return S(), j("input", lt(C(a), {
        type: l.type,
        class: r.value,
        style: (i = (c = l.appearance) == null ? void 0 : c.style) == null ? void 0 : i.input,
        value: l.modelValue,
        onInput: s[0] || (s[0] = (f) => l.$emit("update:modelValue", (f == null ? void 0 : f.target).value))
      }), null, 16, ml);
    };
  }
}), Be = /* @__PURE__ */ ne({
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
    }), n = e, a = rt(), r = q(() => it(
      "label",
      t(),
      n.appearance
    ).join(" "));
    return (l, s) => {
      var c, i;
      return S(), $(ot("label"), lt(C(a), {
        class: r.value,
        style: (i = (c = l.appearance) == null ? void 0 : c.style) == null ? void 0 : i.label
      }), {
        default: k(() => [
          We(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
}), Oe = /* @__PURE__ */ ne({
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
    }), n = e, a = rt(), r = q(() => it(
      "message",
      t({ color: n.color }),
      n.appearance
    ).join(" "));
    return (l, s) => {
      var c, i;
      return S(), $(ot("span"), lt(C(a), {
        class: r.value,
        style: (i = (c = l.appearance) == null ? void 0 : c.style) == null ? void 0 : i.message
      }), {
        default: k(() => [
          We(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
});
function ut(e, t) {
  const n = Ya(e, t);
  if (!n)
    throw new Error(`Could not resolve ${e.description}`);
  return n;
}
const gl = ["id"], hl = /* @__PURE__ */ ne({
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
    const n = e, a = z(""), r = z(""), l = z(""), s = z(""), c = z(!1), { authView: i, setAuthView: f } = ut(je), u = q(
      () => {
        var d;
        return (d = n.i18n) == null ? void 0 : d[i.value];
      }
    ), _ = t, p = async (d) => {
      var g, E;
      switch (l.value = "", s.value = "", c.value = !0, _("auth:submit", {
        email: a.value,
        password: r.value,
        view: i.value
      }), i.value) {
        case "sign_in":
          const {
            // data: { user: signInUser, session: signInSession },
            error: T
          } = await n.supabaseClient.auth.signInWithPassword({
            email: a.value,
            password: r.value,
            options: n.options
          });
          T && (l.value = T.message, _("auth:error", T)), c.value = !1;
          break;
        case "sign_up":
          let b = {
            emailRedirectTo: n.redirectTo
          };
          n.additionalData && (b.data = n.additionalData);
          const {
            data: { user: N, session: R },
            error: w
          } = await n.supabaseClient.auth.signUp({
            email: a.value,
            password: r.value,
            options: {
              ...n.options ?? {},
              ...b
            }
          });
          w ? (l.value = w.message, _("auth:error", w)) : N && !R && (s.value = (E = (g = n.i18n) == null ? void 0 : g.sign_up) == null ? void 0 : E.confirmation_text), c.value = !1;
      }
    };
    return kt(
      () => i.value,
      () => {
        c.value = !1;
      }
    ), (d, g) => (S(), j("form", {
      id: `auth-${C(i)}`,
      onSubmit: Ee(p, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      W(C(we), {
        direction: "vertical",
        gap: "large",
        appearance: d.appearance
      }, {
        default: k(() => [
          W(C(we), {
            direction: "vertical",
            gap: "large",
            appearance: d.appearance
          }, {
            default: k(() => {
              var E, T;
              return [
                V("div", null, [
                  W(C(Be), {
                    htmlFor: "email",
                    appearance: d.appearance
                  }, {
                    default: k(() => {
                      var b;
                      return [
                        U(B((b = u.value) == null ? void 0 : b.email_label), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["appearance"]),
                  W(C(Ue), {
                    id: "email",
                    type: "email",
                    name: "email",
                    modelValue: a.value,
                    "onUpdate:modelValue": g[0] || (g[0] = (b) => a.value = b),
                    placeholder: (E = u.value) == null ? void 0 : E.email_input_placeholder,
                    autoComplete: "email",
                    appearance: d.appearance
                  }, null, 8, ["modelValue", "placeholder", "appearance"])
                ]),
                V("div", null, [
                  W(C(Be), {
                    htmlFor: "password",
                    appearance: d.appearance
                  }, {
                    default: k(() => {
                      var b;
                      return [
                        U(B((b = u.value) == null ? void 0 : b.password_label), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["appearance"]),
                  W(C(Ue), {
                    id: "password",
                    type: "password",
                    name: "password",
                    modelValue: r.value,
                    "onUpdate:modelValue": g[1] || (g[1] = (b) => r.value = b),
                    placeholder: (T = u.value) == null ? void 0 : T.password_input_placeholder,
                    autoComplete: C(i) === "sign_in" ? "current-password" : "new-password",
                    appearance: d.appearance
                  }, null, 8, ["modelValue", "placeholder", "autoComplete", "appearance"])
                ])
              ];
            }),
            _: 1
          }, 8, ["appearance"]),
          W(C(ct), {
            type: "submit",
            color: "primary",
            loading: c.value,
            appearance: d.appearance
          }, {
            default: k(() => {
              var E, T;
              return [
                U(B(c.value ? (E = u.value) == null ? void 0 : E.loading_button_label : (T = u.value) == null ? void 0 : T.button_label), 1)
              ];
            }),
            _: 1
          }, 8, ["loading", "appearance"]),
          d.showLinks ? (S(), $(C(we), {
            key: 0,
            direction: "vertical",
            gap: "small",
            appearance: d.appearance
          }, {
            default: k(() => [
              C(i) === C(me).SIGN_IN && d.magicLink ? (S(), $(C(Qe), {
                key: 0,
                href: "#auth-magic-link",
                appearance: d.appearance,
                onClick: g[2] || (g[2] = Ee((E) => C(f)(C(me).MAGIC_LINK), ["prevent"]))
              }, {
                default: k(() => {
                  var E, T;
                  return [
                    U(B((T = (E = d.i18n) == null ? void 0 : E.magic_link) == null ? void 0 : T.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"])) : Y("", !0),
              C(i) === C(me).SIGN_IN ? (S(), $(C(Qe), {
                key: 1,
                href: "#auth-forgot-password",
                appearance: d.appearance,
                onClick: g[3] || (g[3] = Ee((E) => C(f)(C(me).FORGOTTEN_PASSWORD), ["prevent"]))
              }, {
                default: k(() => {
                  var E, T;
                  return [
                    U(B((T = (E = d.i18n) == null ? void 0 : E.forgotten_password) == null ? void 0 : T.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"])) : Y("", !0),
              C(i) === C(me).SIGN_IN ? (S(), $(C(Qe), {
                key: 2,
                href: "#auth-sign-up",
                appearance: d.appearance,
                onClick: g[4] || (g[4] = Ee((E) => C(f)(C(me).SIGN_UP), ["prevent"]))
              }, {
                default: k(() => {
                  var E, T;
                  return [
                    U(B((T = (E = d.i18n) == null ? void 0 : E.sign_up) == null ? void 0 : T.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"])) : (S(), $(C(Qe), {
                key: 3,
                href: "#auth-sign-in",
                appearance: d.appearance,
                onClick: g[5] || (g[5] = Ee((E) => C(f)(C(me).SIGN_IN), ["prevent"]))
              }, {
                default: k(() => {
                  var E, T;
                  return [
                    U(B((T = (E = d.i18n) == null ? void 0 : E.sign_in) == null ? void 0 : T.link_text), 1)
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
      s.value ? (S(), $(C(Oe), {
        key: 0,
        appearance: d.appearance
      }, {
        default: k(() => [
          U(B(s.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0),
      l.value ? (S(), $(C(Oe), {
        key: 1,
        color: "danger",
        appearance: d.appearance
      }, {
        default: k(() => [
          U(B(l.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0)
    ], 40, gl));
  }
}), ie = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
}, bl = {}, vl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function El(e, t) {
  return S(), j("svg", vl, t[0] || (t[0] = [
    V("path", {
      fill: "#FFC107",
      d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    }, null, -1),
    V("path", {
      fill: "#FF3D00",
      d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    }, null, -1),
    V("path", {
      fill: "#4CAF50",
      d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    }, null, -1),
    V("path", {
      fill: "#1976D2",
      d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    }, null, -1)
  ]));
}
const yl = /* @__PURE__ */ ie(bl, [["render", El]]), Cl = {}, Tl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Nl(e, t) {
  return S(), j("svg", Tl, t[0] || (t[0] = [
    V("path", {
      fill: "#039be5",
      d: "M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
    }, null, -1),
    V("path", {
      fill: "#fff",
      d: "M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
    }, null, -1)
  ]));
}
const Sl = /* @__PURE__ */ ie(Cl, [["render", Nl]]), Ol = {}, wl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Ll(e, t) {
  return S(), j("svg", wl, t[0] || (t[0] = [
    V("path", {
      fill: "#03A9F4",
      d: "M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
    }, null, -1)
  ]));
}
const Il = /* @__PURE__ */ ie(Ol, [["render", Ll]]), Al = {}, kl = {
  fill: "gray",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "21px",
  height: "21px"
};
function Pl(e, t) {
  return S(), j("svg", kl, t[0] || (t[0] = [
    V("path", { d: "M 15.904297 1.078125 C 15.843359 1.06875 15.774219 1.0746094 15.699219 1.0996094 C 14.699219 1.2996094 13.600391 1.8996094 12.900391 2.5996094 C 12.300391 3.1996094 11.800781 4.1996094 11.800781 5.0996094 C 11.800781 5.2996094 11.999219 5.5 12.199219 5.5 C 13.299219 5.4 14.399609 4.7996094 15.099609 4.0996094 C 15.699609 3.2996094 16.199219 2.4 16.199219 1.5 C 16.199219 1.275 16.087109 1.10625 15.904297 1.078125 z M 16.199219 5.4003906 C 14.399219 5.4003906 13.600391 6.5 12.400391 6.5 C 11.100391 6.5 9.9003906 5.5 8.4003906 5.5 C 6.3003906 5.5 3.0996094 7.4996094 3.0996094 12.099609 C 2.9996094 16.299609 6.8 21 9 21 C 10.3 21 10.600391 20.199219 12.400391 20.199219 C 14.200391 20.199219 14.600391 21 15.900391 21 C 17.400391 21 18.500391 19.399609 19.400391 18.099609 C 19.800391 17.399609 20.100391 17.000391 20.400391 16.400391 C 20.600391 16.000391 20.4 15.600391 20 15.400391 C 17.4 14.100391 16.900781 9.9003906 19.800781 8.4003906 C 20.300781 8.1003906 20.4 7.4992188 20 7.1992188 C 18.9 6.1992187 17.299219 5.4003906 16.199219 5.4003906 z" }, null, -1)
  ]));
}
const Rl = /* @__PURE__ */ ie(Al, [["render", Pl]]), Ml = {}, Dl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21.34",
  height: "21",
  viewBox: "0 0 256 384"
};
function Fl(e, t) {
  return S(), j("svg", Dl, t[0] || (t[0] = [
    Ft('<path fill="#0ACF83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z"></path><path fill="#A259FF" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z"></path><path fill="#F24E1E" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z"></path><path fill="#FF7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z"></path><path fill="#1ABCFE" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64Z"></path>', 5)
  ]));
}
const $l = /* @__PURE__ */ ie(Ml, [["render", Fl]]), Vl = {}, xl = {
  fill: "gray",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 30 30",
  width: "21px",
  height: "21px"
};
function Ul(e, t) {
  return S(), j("svg", xl, t[0] || (t[0] = [
    V("path", { d: "M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" }, null, -1)
  ]));
}
const Bl = /* @__PURE__ */ ie(Vl, [["render", Ul]]), Wl = {}, jl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function zl(e, t) {
  return S(), j("svg", jl, t[0] || (t[0] = [
    Ft('<path fill="#e53935" d="M24 43L16 20 32 20z"></path><path fill="#ff7043" d="M24 43L42 20 32 20z"></path><path fill="#e53935" d="M37 5L42 20 32 20z"></path><path fill="#ffa726" d="M24 43L42 20 45 28z"></path><path fill="#ff7043" d="M24 43L6 20 16 20z"></path><path fill="#e53935" d="M11 5L6 20 16 20z"></path><path fill="#ffa726" d="M24 43L6 20 3 28z"></path>', 7)
  ]));
}
const Gl = /* @__PURE__ */ ie(Wl, [["render", zl]]), Hl = {}, Yl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21",
  height: "21",
  viewBox: "0 0 62.42 62.42"
};
function Kl(e, t) {
  return S(), j("svg", Yl, t[0] || (t[0] = [
    Ft('<defs><linearGradient id="New_Gradient_Swatch_1" x1="64.01" y1="30.27" x2="32.99" y2="54.48" gradientUnits="userSpaceOnUse"><stop offset="0.18" stop-color="#0052cc"></stop><stop offset="1" stop-color="#2684ff"></stop></linearGradient></defs><title>Bitbucket-blue</title><g id="Layer_2" data-name="Layer 2"><g id="Blue" transform="translate(0 -3.13)"><path d="M2,6.26A2,2,0,0,0,0,8.58L8.49,60.12a2.72,2.72,0,0,0,2.66,2.27H51.88a2,2,0,0,0,2-1.68L62.37,8.59a2,2,0,0,0-2-2.32ZM37.75,43.51h-13L21.23,25.12H40.9Z" fill="#2684ff"></path><path d="M59.67,25.12H40.9L37.75,43.51h-13L9.4,61.73a2.71,2.71,0,0,0,1.75.66H51.89a2,2,0,0,0,2-1.68Z" fill="url(#New_Gradient_Swatch_1)"></path></g></g>', 3)
  ]));
}
const Xl = /* @__PURE__ */ ie(Hl, [["render", Kl]]), Zl = {}, ql = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Jl(e, t) {
  return S(), j("svg", ql, t[0] || (t[0] = [
    V("path", {
      fill: "#536dfe",
      d: "M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"
    }, null, -1)
  ]));
}
const Ql = /* @__PURE__ */ ie(Zl, [["render", Jl]]), ei = {}, ti = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function ni(e, t) {
  return S(), j("svg", ti, t[0] || (t[0] = [
    Ft('<linearGradient id="k8yl7~hDat~FaoWq8WjN6a" x1="-1254.397" x2="-1261.911" y1="877.268" y2="899.466" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#114a8b"></stop><stop offset="1" stop-color="#0669bc"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6a)" d="M17.634,6h11.305L17.203,40.773c-0.247,0.733-0.934,1.226-1.708,1.226H6.697 c-0.994,0-1.8-0.806-1.8-1.8c0-0.196,0.032-0.39,0.094-0.576L15.926,7.227C16.173,6.494,16.86,6,17.634,6L17.634,6z"></path><path fill="#0078d4" d="M34.062,29.324H16.135c-0.458-0.001-0.83,0.371-0.831,0.829c0,0.231,0.095,0.451,0.264,0.608 l11.52,10.752C27.423,41.826,27.865,42,28.324,42h10.151L34.062,29.324z"></path><linearGradient id="k8yl7~hDat~FaoWq8WjN6b" x1="-1252.05" x2="-1253.788" y1="887.612" y2="888.2" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity=".3"></stop><stop offset=".071" stop-opacity=".2"></stop><stop offset=".321" stop-opacity=".1"></stop><stop offset=".623" stop-opacity=".05"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6b)" d="M17.634,6c-0.783-0.003-1.476,0.504-1.712,1.25L5.005,39.595 c-0.335,0.934,0.151,1.964,1.085,2.299C6.286,41.964,6.493,42,6.702,42h9.026c0.684-0.122,1.25-0.603,1.481-1.259l2.177-6.416 l7.776,7.253c0.326,0.27,0.735,0.419,1.158,0.422h10.114l-4.436-12.676l-12.931,0.003L28.98,6H17.634z"></path><linearGradient id="k8yl7~hDat~FaoWq8WjN6c" x1="-1252.952" x2="-1244.704" y1="876.6" y2="898.575" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3ccbf4"></stop><stop offset="1" stop-color="#2892df"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6c)" d="M32.074,7.225C31.827,6.493,31.141,6,30.368,6h-12.6c0.772,0,1.459,0.493,1.705,1.224 l10.935,32.399c0.318,0.942-0.188,1.963-1.13,2.281C29.093,41.968,28.899,42,28.703,42h12.6c0.994,0,1.8-0.806,1.8-1.801 c0-0.196-0.032-0.39-0.095-0.575L32.074,7.225z"></path>', 7)
  ]));
}
const ai = /* @__PURE__ */ ie(ei, [["render", ni]]), ri = {}, oi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21",
  height: "21",
  viewBox: "0 0 256 256"
};
function li(e, t) {
  return S(), j("svg", oi, t[0] || (t[0] = [
    V("path", {
      fill: "#FFE812",
      d: "M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z"
    }, null, -1),
    V("path", { d: "M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z" }, null, -1),
    V("path", {
      fill: "#FFE812",
      d: "M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"
    }, null, -1)
  ]));
}
const ii = /* @__PURE__ */ ie(ri, [["render", li]]), si = {}, ci = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function ui(e, t) {
  return S(), j("svg", ci, t[0] || (t[0] = [
    V("path", {
      d: "M472.136 163.959H408.584C407.401 163.959 406.218 163.327 405.666 162.3L354.651 73.6591C354.02 72.632 352.916 72 351.654 72H143.492C142.309 72 141.126 72.632 140.574 73.6591L87.5084 165.618L36.414 254.259C35.862 255.286 35.862 256.55 36.414 257.656L87.5084 346.297L140.495 438.335C141.047 439.362 142.23 440.073 143.413 439.994H351.654C352.837 439.994 354.02 439.362 354.651 438.335L405.745 349.694C406.297 348.667 407.48 347.956 408.663 348.035H472.215C474.344 348.035 476 346.297 476 344.243V167.83C475.921 165.697 474.186 163.959 472.136 163.959ZM228.728 349.694L212.721 377.345C212.485 377.74 212.091 378.135 211.696 378.372C211.223 378.609 210.75 378.767 210.198 378.767H178.422C177.318 378.767 176.293 378.214 175.82 377.187L128.431 294.787L123.779 286.65L106.748 257.498C106.511 257.103 106.353 256.629 106.432 256.076C106.432 255.602 106.59 255.049 106.827 254.654L123.937 224.949L175.899 134.886C176.451 133.938 177.476 133.306 178.501 133.306H210.198C210.75 133.306 211.302 133.464 211.854 133.701C212.248 133.938 212.643 134.254 212.879 134.728L228.886 162.537C229.359 163.485 229.28 164.67 228.728 165.539L177.397 254.654C177.16 255.049 177.081 255.523 177.081 255.918C177.081 256.392 177.239 256.787 177.397 257.182L228.728 346.218C229.438 347.403 229.359 348.667 228.728 349.694V349.694ZM388.083 257.498L371.051 286.65L366.399 294.787L319.011 377.187C318.459 378.135 317.512 378.767 316.409 378.767H284.632C284.08 378.767 283.607 378.609 283.134 378.372C282.74 378.135 282.346 377.819 282.109 377.345L266.103 349.694C265.393 348.667 265.393 347.403 266.024 346.376L317.355 257.34C317.591 256.945 317.67 256.471 317.67 256.076C317.67 255.602 317.513 255.207 317.355 254.812L266.024 165.697C265.472 164.749 265.393 163.643 265.866 162.695L281.873 134.886C282.109 134.491 282.503 134.096 282.898 133.859C283.371 133.543 283.923 133.464 284.553 133.464H316.409C317.512 133.464 318.538 134.017 319.011 135.044L370.972 225.107L388.083 254.812C388.319 255.286 388.477 255.76 388.477 256.234C388.477 256.55 388.319 257.024 388.083 257.498V257.498Z",
      fill: "#008AAA"
    }, null, -1)
  ]));
}
const pi = /* @__PURE__ */ ie(si, [["render", ui]]), di = {}, fi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function _i(e, t) {
  return S(), j("svg", fi, t[0] || (t[0] = [
    V("path", {
      fill: "#0288D1",
      d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
    }, null, -1),
    V("path", {
      fill: "#FFF",
      d: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
    }, null, -1)
  ]));
}
const Ca = /* @__PURE__ */ ie(di, [["render", _i]]), mi = {}, gi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px",
  "fill-rule": "evenodd",
  "clip-rule": "evenodd"
};
function hi(e, t) {
  return S(), j("svg", gi, t[0] || (t[0] = [
    V("path", {
      fill: "#fff",
      "fill-rule": "evenodd",
      d: "M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z",
      "clip-rule": "evenodd"
    }, null, -1),
    V("path", {
      fill: "#fff",
      "fill-rule": "evenodd",
      d: "M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619 l23.971-1.387c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463 C13.171,14.718,12.862,15.181,12.862,16.182L12.862,16.182z",
      "clip-rule": "evenodd"
    }, null, -1),
    V("path", {
      fill: "#424242",
      "fill-rule": "evenodd",
      d: "M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619l23.971-1.387 c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463C13.171,14.718,12.862,15.181,12.862,16.182 L12.862,16.182z M36.526,17.413c0.154,0.694,0,1.387-0.695,1.465l-1.155,0.23v16.943c-1.003,0.539-1.928,0.847-2.698,0.847 c-1.234,0-1.543-0.385-2.467-1.54l-7.555-11.86v11.475l2.391,0.539c0,0,0,1.386-1.929,1.386l-5.317,0.308 c-0.154-0.308,0-1.078,0.539-1.232l1.388-0.385V20.418l-1.927-0.154c-0.155-0.694,0.23-1.694,1.31-1.772l5.704-0.385l7.862,12.015 V19.493l-2.005-0.23c-0.154-0.848,0.462-1.464,1.233-1.54L36.526,17.413z M7.389,5.862l21.968-1.618 c2.698-0.231,3.392-0.076,5.087,1.155l7.013,4.929C42.614,11.176,43,11.407,43,12.33v27.032c0,1.694-0.617,2.696-2.775,2.849 l-25.512,1.541c-1.62,0.077-2.391-0.154-3.239-1.232l-5.164-6.7C5.385,34.587,5,33.664,5,32.585V8.556 C5,7.171,5.617,6.015,7.389,5.862z",
      "clip-rule": "evenodd"
    }, null, -1)
  ]));
}
const bi = /* @__PURE__ */ ie(mi, [["render", hi]]), vi = {}, Ei = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function yi(e, t) {
  return S(), j("svg", Ei, t[0] || (t[0] = [
    Ft('<path fill="#33d375" d="M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"></path><path fill="#33d375" d="M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"></path><path fill="#40c4ff" d="M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"></path><path fill="#40c4ff" d="M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"></path><path fill="#e91e63" d="M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"></path><path fill="#e91e63" d="M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"></path><path fill="#ffc107" d="M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"></path><path fill="#ffc107" d="M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"></path>', 8)
  ]));
}
const Ci = /* @__PURE__ */ ie(vi, [["render", yi]]), Ti = {}, Ni = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Si(e, t) {
  return S(), j("svg", Ni, t[0] || (t[0] = [
    V("path", {
      d: "M255.498 31.0034C131.513 31.0034 31 131.515 31 255.502C31 379.492 131.513 480 255.498 480C379.497 480 480 379.495 480 255.502C480 131.522 379.497 31.0135 255.495 31.0135L255.498 31V31.0034ZM358.453 354.798C354.432 361.391 345.801 363.486 339.204 359.435C286.496 327.237 220.139 319.947 141.993 337.801C134.463 339.516 126.957 334.798 125.24 327.264C123.516 319.731 128.217 312.225 135.767 310.511C221.284 290.972 294.639 299.384 353.816 335.549C360.413 339.596 362.504 348.2 358.453 354.798ZM385.932 293.67C380.864 301.903 370.088 304.503 361.858 299.438C301.512 262.345 209.528 251.602 138.151 273.272C128.893 276.067 119.118 270.851 116.309 261.61C113.521 252.353 118.74 242.597 127.981 239.782C209.512 215.044 310.87 227.026 380.17 269.612C388.4 274.68 391 285.456 385.935 293.676V293.673L385.932 293.67ZM388.293 230.016C315.935 187.039 196.56 183.089 127.479 204.055C116.387 207.42 104.654 201.159 101.293 190.063C97.9326 178.964 104.189 167.241 115.289 163.87C194.59 139.796 326.418 144.446 409.723 193.902C419.722 199.826 422.995 212.71 417.068 222.675C411.168 232.653 398.247 235.943 388.303 230.016H388.293V230.016Z",
      fill: "#1ED760"
    }, null, -1)
  ]));
}
const Oi = /* @__PURE__ */ ie(Ti, [["render", Si]]), wi = {}, Li = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Ii(e, t) {
  return S(), j("svg", Li, t[0] || (t[0] = [
    V("path", {
      d: "M416 240L352 304H288L232 360V304H160V64H416V240Z",
      fill: "white"
    }, null, -1),
    V("path", {
      d: "M144 32L64 112V400H160V480L240 400H304L448 256V32H144ZM416 240L352 304H288L232 360V304H160V64H416V240Z",
      fill: "#9146FF"
    }, null, -1),
    V("path", {
      d: "M368 120H336V216H368V120Z",
      fill: "#9146FF"
    }, null, -1),
    V("path", {
      d: "M280 120H248V216H280V120Z",
      fill: "#9146FF"
    }, null, -1)
  ]));
}
const Ai = /* @__PURE__ */ ie(wi, [["render", Ii]]), ki = {}, Pi = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Ri(e, t) {
  return S(), j("svg", Pi, t[0] || (t[0] = [
    V("path", {
      d: "M33 256.043C33 264.556 35.3159 273.069 39.4845 280.202L117.993 415.493C126.098 429.298 138.373 440.572 153.657 445.634C183.764 455.528 214.797 442.873 229.618 417.333L248.609 384.661L173.806 256.043L252.777 119.831L271.768 87.1591C277.557 77.2654 284.968 69.4424 294 63H285.894H172.185C150.878 63 131.193 74.2742 120.54 92.6812L39.7161 231.884C35.3159 239.016 33 247.53 33 256.043Z",
      fill: "#6363F1"
    }, null, -1),
    V("path", {
      d: "M480 256.058C480 247.539 477.684 239.021 473.516 231.883L393.849 94.6596C379.028 69.3331 347.995 56.4396 317.888 66.34C302.603 71.4053 290.329 82.6871 282.224 96.5015L264.391 127.354L339.194 256.058L260.223 392.131L241.232 424.825C235.443 434.495 228.032 442.553 219 449H227.106H340.815C362.122 449 381.807 437.718 392.46 419.299L473.284 280.003C477.684 272.866 480 264.577 480 256.058Z",
      fill: "#6363F1"
    }, null, -1)
  ]));
}
const Mi = /* @__PURE__ */ ie(ki, [["render", Ri]]), Di = {}, Fi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21",
  height: "21"
};
function $i(e, t) {
  return S(), j("svg", Fi, t[0] || (t[0] = [
    V("circle", {
      cx: "24",
      cy: "24",
      r: "20",
      fill: "#2196f3"
    }, null, -1),
    V("path", {
      fill: "#fff",
      d: "M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z"
    }, null, -1),
    V("polygon", {
      fill: "#fff",
      points: "37,31 31,27 31,21 37,17"
    }, null, -1)
  ]));
}
const Vi = /* @__PURE__ */ ie(Di, [["render", $i]]), xi = /* @__PURE__ */ ne({
  __name: "Icons",
  props: {
    name: {}
  },
  setup(e) {
    const t = {
      apple: Rl,
      azure: ai,
      bitbucket: Xl,
      discord: Ql,
      facebook: Sl,
      figma: $l,
      google: yl,
      github: Bl,
      gitlab: Gl,
      kakao: ii,
      keycloak: pi,
      linkedin: Ca,
      linkedin_oidc: Ca,
      notion: bi,
      slack: Ci,
      spotify: Oi,
      twitch: Ai,
      twitter: Il,
      workos: Mi,
      zoom: Vi
    };
    return (n, a) => (S(), $(ot(t[n.name])));
  }
}), Nc = ne({
  name: "UserContextProvider",
  props: {
    supabaseClient: {
      type: Object,
      required: !0
    }
  },
  setup({ supabaseClient: e }, { slots: t }) {
    const n = z(null), a = z(null);
    return Kn(async () => {
      var s;
      const { data: r } = await e.auth.getSession();
      n.value = r.session, a.value = ((s = r.session) == null ? void 0 : s.user) ?? null;
      const { data: l } = e.auth.onAuthStateChange(
        async (c, i) => {
          n.value = i, a.value = (i == null ? void 0 : i.user) ?? null;
        }
      );
      return () => {
        l == null || l.subscription.unsubscribe();
      };
    }), Ka(pl, {
      session: n,
      user: a
    }), () => {
      var r;
      return Xn("div", null, (r = t == null ? void 0 : t.default) == null ? void 0 : r.call(t));
    };
  }
}), Jn = (e) => {
  const t = z(null), n = (a) => {
    a ? JSON.stringify(t.value) !== JSON.stringify(a.user) && (t.value = a.user) : t.value = null;
  };
  return e == null || e.auth.getSession().then(({ data: { session: a } }) => {
    a && n(a);
  }), Kn(async () => {
    const { data: a } = e.auth.onAuthStateChange(
      async (r, l) => {
        l && n(l);
      }
    );
    return () => {
      a == null || a.subscription.unsubscribe();
    };
  }), {
    supabaseUser: t
  };
}, Ui = /* @__PURE__ */ ne({
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
    const t = e, { supabaseUser: n } = Jn(t.supabaseClient), a = z(""), r = z(!1), { authView: l } = ut(je), s = q(() => t.socialLayout === "vertical"), c = q(() => l.value === "magic_link" ? "sign_in" : l.value), i = q(
      () => {
        var _;
        return (_ = t.i18n) == null ? void 0 : _[c.value];
      }
    ), f = async (_) => {
      var E, T;
      a.value = "", r.value = !0;
      const p = (E = n.value) == null ? void 0 : E.is_anonymous, d = {
        redirectTo: t.redirectTo,
        scopes: (T = t.providerScopes) == null ? void 0 : T[_],
        queryParams: t.queryParams
      };
      let g = null;
      if (p) {
        const { data: b, error: N } = await t.supabaseClient.auth.linkIdentity({
          provider: _,
          options: d
        });
        g = N;
      } else if (t.useOAuthPopup) {
        const { data: b, error: N } = await t.supabaseClient.auth.signInWithOAuth({
          provider: _,
          options: { ...d, skipBrowserRedirect: !0 }
        });
        if (g = N, !N && (b != null && b.url)) {
          const R = window.open(
            b.url,
            "supabase-oauth",
            t.popupWindowFeatures ?? "width=500,height=650"
          ), { data: w } = t.supabaseClient.auth.onAuthStateChange(
            (P) => {
              P === "SIGNED_IN" && (R == null || R.close(), w.subscription.unsubscribe(), clearInterval(M), r.value = !1);
            }
          ), M = setInterval(() => {
            R != null && R.closed && (clearInterval(M), w.subscription.unsubscribe(), r.value = !1);
          }, 500);
          return;
        }
      } else {
        const { data: b, error: N } = await t.supabaseClient.auth.signInWithOAuth({
          provider: _,
          options: d
        });
        g = N;
      }
      g && (a.value = g.message), r.value = !1;
    };
    function u(_) {
      const p = _.toLowerCase();
      return _.charAt(0).toUpperCase() + p.slice(1);
    }
    return (_, p) => _.providers && _.providers.length > 0 ? (S(), j(et, { key: 0 }, [
      W(C(we), {
        gap: "large",
        direction: "vertical",
        appearance: _.appearance
      }, {
        default: k(() => [
          W(C(we), {
            direction: s.value ? "vertical" : "horizontal",
            gap: s.value ? "small" : "medium",
            appearance: _.appearance
          }, {
            default: k(() => [
              (S(!0), j(et, null, wo(_.providers, (d) => (S(), $(C(ct), {
                key: d,
                color: "default",
                loading: r.value,
                onClick: Ee(() => f(d), ["prevent"]),
                appearance: _.appearance
              }, {
                icon: k(() => [
                  W(C(xi), { name: d }, null, 8, ["name"])
                ]),
                default: k(() => {
                  var g, E;
                  return [
                    s.value ? (S(), j(et, { key: 0 }, [
                      U(B(C(Ro)(
                        (E = (g = i.value) == null ? void 0 : g.social_provider_text) == null ? void 0 : E.replace("_oidc", ""),
                        {
                          provider: u(d.replace("_oidc", ""))
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
      _.onlyThirdPartyProviders ? Y("", !0) : (S(), $(C(_l), {
        key: 0,
        appearance: _.appearance
      }, null, 8, ["appearance"]))
    ], 64)) : Y("", !0);
  }
}), Bi = ["id"], Wi = /* @__PURE__ */ ne({
  __name: "MagicLink",
  props: {
    appearance: {},
    supabaseClient: {},
    redirectTo: {},
    showLinks: { type: Boolean },
    i18n: {}
  },
  setup(e) {
    const t = e, { supabaseUser: n } = Jn(t.supabaseClient), a = z(""), r = z(""), l = z(""), s = z(!1), { authView: c, setAuthView: i } = ut(je), f = q(
      () => {
        var _;
        return (_ = t.i18n) == null ? void 0 : _[c.value];
      }
    ), u = async (_) => {
      var g, E, T;
      r.value = "", l.value = "", s.value = !0;
      const p = (g = n.value) == null ? void 0 : g.is_anonymous;
      let d = null;
      if (p) {
        const { error: b } = await t.supabaseClient.auth.updateUser(
          {
            email: a.value
          },
          {
            emailRedirectTo: t.redirectTo
          }
        );
        d = b;
      } else {
        const { error: b } = await t.supabaseClient.auth.signInWithOtp({
          email: a.value,
          options: { emailRedirectTo: t.redirectTo }
        });
        d = b;
      }
      d ? r.value = d.message : l.value = (T = (E = t.i18n) == null ? void 0 : E.magic_link) == null ? void 0 : T.confirmation_text, s.value = !1;
    };
    return (_, p) => (S(), j("form", {
      id: `auth-${C(c)}`,
      onSubmit: Ee(u, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      W(C(we), {
        direction: "vertical",
        gap: "large",
        appearance: _.appearance
      }, {
        default: k(() => [
          W(C(we), {
            direction: "vertical",
            gap: "large",
            appearance: _.appearance
          }, {
            default: k(() => {
              var d;
              return [
                V("div", null, [
                  W(C(Be), {
                    htmlFor: "email",
                    appearance: _.appearance
                  }, {
                    default: k(() => {
                      var g;
                      return [
                        U(B((g = f.value) == null ? void 0 : g.email_input_label), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["appearance"]),
                  W(C(Ue), {
                    id: "email",
                    type: "email",
                    name: "email",
                    autoComplete: "email",
                    autofocus: "",
                    placeholder: (d = f.value) == null ? void 0 : d.email_input_placeholder,
                    appearance: _.appearance,
                    modelValue: a.value,
                    "onUpdate:modelValue": p[0] || (p[0] = (g) => a.value = g)
                  }, null, 8, ["placeholder", "appearance", "modelValue"])
                ])
              ];
            }),
            _: 1
          }, 8, ["appearance"]),
          W(C(ct), {
            type: "submit",
            color: "primary",
            loading: s.value,
            appearance: _.appearance
          }, {
            default: k(() => {
              var d, g;
              return [
                U(B(s.value ? (d = f.value) == null ? void 0 : d.loading_button_label : (g = f.value) == null ? void 0 : g.button_label), 1)
              ];
            }),
            _: 1
          }, 8, ["loading", "appearance"]),
          _.showLinks ? (S(), $(C(Qe), {
            key: 0,
            href: "#auth-sign-in",
            appearance: _.appearance,
            onClick: p[1] || (p[1] = Ee((d) => C(i)(C(me).SIGN_IN), ["prevent"]))
          }, {
            default: k(() => {
              var d, g;
              return [
                U(B((g = (d = _.i18n) == null ? void 0 : d.sign_in) == null ? void 0 : g.link_text), 1)
              ];
            }),
            _: 1
          }, 8, ["appearance"])) : Y("", !0)
        ]),
        _: 1
      }, 8, ["appearance"]),
      l.value ? (S(), $(C(Oe), {
        key: 0,
        appearance: _.appearance
      }, {
        default: k(() => [
          U(B(l.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0),
      r.value ? (S(), $(C(Oe), {
        key: 1,
        color: "danger",
        appearance: _.appearance
      }, {
        default: k(() => [
          U(B(r.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0)
    ], 40, Bi));
  }
}), ji = ["id"], zi = /* @__PURE__ */ ne({
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
    const t = e, n = z(""), a = z(""), r = z(""), l = z(!1), { authView: s, setAuthView: c } = ut(je), i = q(
      () => {
        var u;
        return (u = t.i18n) == null ? void 0 : u[s.value];
      }
    ), f = async (u) => {
      var p, d, g;
      a.value = "", r.value = "", l.value = !0;
      const { error: _ } = await t.supabaseClient.auth.resetPasswordForEmail(n.value, {
        redirectTo: t.redirectTo,
        captchaToken: (p = t.options) == null ? void 0 : p.captchaToken
      });
      _ ? a.value = _.message : r.value = (g = (d = t.i18n) == null ? void 0 : d.forgotten_password) == null ? void 0 : g.confirmation_text, l.value = !1;
    };
    return (u, _) => (S(), j("form", {
      id: `auth-${C(s)}`,
      onSubmit: Ee(f, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      W(C(we), {
        direction: "vertical",
        gap: "large",
        appearance: u.appearance
      }, {
        default: k(() => {
          var p;
          return [
            V("div", null, [
              W(C(Be), {
                htmlFor: "email",
                appearance: u.appearance
              }, {
                default: k(() => {
                  var d;
                  return [
                    U(B((d = i.value) == null ? void 0 : d.email_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              W(C(Ue), {
                id: "email",
                type: "email",
                name: "email",
                autoComplete: "email",
                autofocus: "",
                placeholder: (p = i.value) == null ? void 0 : p.email_input_placeholder,
                appearance: u.appearance,
                modelValue: n.value,
                "onUpdate:modelValue": _[0] || (_[0] = (d) => n.value = d)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ]),
            W(C(ct), {
              type: "submit",
              color: "primary",
              loading: l.value,
              appearance: u.appearance
            }, {
              default: k(() => {
                var d, g;
                return [
                  U(B(l.value ? (d = i.value) == null ? void 0 : d.loading_button_label : (g = i.value) == null ? void 0 : g.button_label), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "appearance"]),
            u.showLinks ? (S(), $(C(Qe), {
              key: 0,
              href: "#auth-sign-in",
              appearance: u.appearance,
              onClick: _[1] || (_[1] = Ee((d) => C(c)(C(me).SIGN_IN), ["prevent"]))
            }, {
              default: k(() => {
                var d, g;
                return [
                  U(B((g = (d = u.i18n) == null ? void 0 : d.sign_in) == null ? void 0 : g.link_text), 1)
                ];
              }),
              _: 1
            }, 8, ["appearance"])) : Y("", !0)
          ];
        }),
        _: 1
      }, 8, ["appearance"]),
      r.value ? (S(), $(C(Oe), {
        key: 0,
        appearance: u.appearance
      }, {
        default: k(() => [
          U(B(r.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0),
      a.value ? (S(), $(C(Oe), {
        key: 1,
        color: "danger",
        appearance: u.appearance
      }, {
        default: k(() => [
          U(B(a.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0)
    ], 40, ji));
  }
}), Gi = ["id"], Hi = /* @__PURE__ */ ne({
  __name: "UpdatePassword",
  props: {
    appearance: {},
    supabaseClient: {},
    i18n: {}
  },
  setup(e) {
    const t = e, n = z(""), a = z(""), r = z(""), l = z(!1), { authView: s } = ut(je), c = q(
      () => {
        var f;
        return (f = t.i18n) == null ? void 0 : f[s.value];
      }
    ), i = async (f) => {
      var _, p;
      a.value = "", r.value = "", l.value = !0;
      const { error: u } = await t.supabaseClient.auth.updateUser({
        password: n.value
      });
      u ? a.value = u.message : r.value = (p = (_ = t.i18n) == null ? void 0 : _.update_password) == null ? void 0 : p.confirmation_text, l.value = !1;
    };
    return (f, u) => (S(), j("form", {
      id: `auth-${C(s)}`,
      onSubmit: Ee(i, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      W(C(we), {
        direction: "vertical",
        gap: "large",
        appearance: f.appearance
      }, {
        default: k(() => {
          var _;
          return [
            V("div", null, [
              W(C(Be), {
                htmlFor: "password_label",
                appearance: f.appearance
              }, {
                default: k(() => {
                  var p;
                  return [
                    U(B((p = c.value) == null ? void 0 : p.password_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              W(C(Ue), {
                id: "password",
                type: "password",
                name: "password",
                autofocus: "",
                placeholder: (_ = c.value) == null ? void 0 : _.password_input_placeholder,
                appearance: f.appearance,
                modelValue: n.value,
                "onUpdate:modelValue": u[0] || (u[0] = (p) => n.value = p)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ]),
            W(C(ct), {
              type: "submit",
              color: "primary",
              loading: l.value,
              appearance: f.appearance
            }, {
              default: k(() => {
                var p, d;
                return [
                  U(B(l.value ? (p = c.value) == null ? void 0 : p.loading_button_label : (d = c.value) == null ? void 0 : d.button_label), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "appearance"])
          ];
        }),
        _: 1
      }, 8, ["appearance"]),
      r.value ? (S(), $(C(Oe), {
        key: 0,
        appearance: f.appearance
      }, {
        default: k(() => [
          U(B(r.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0),
      a.value ? (S(), $(C(Oe), {
        key: 1,
        color: "danger",
        appearance: f.appearance
      }, {
        default: k(() => [
          U(B(a.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0)
    ], 40, Gi));
  }
}), Yi = ["id"], Ki = { key: 0 }, Xi = { key: 1 }, Zi = /* @__PURE__ */ ne({
  __name: "VerifyOtp",
  props: {
    appearance: {},
    supabaseClient: {},
    otpType: { default: "email" },
    showLinks: { type: Boolean, default: !1 },
    i18n: {}
  },
  setup(e) {
    const t = e, n = z(""), a = z(""), r = z(""), l = z(""), s = z(""), c = z(!1), { authView: i, setAuthView: f } = ut(je), u = q(
      () => {
        var p;
        return (p = t.i18n) == null ? void 0 : p[i.value];
      }
    ), _ = async (p) => {
      var E, T;
      l.value = "", s.value = "", c.value = !0;
      let d = {
        email: n.value,
        token: r.value,
        type: t.otpType
      };
      ["sms", "phone_change"].includes(t.otpType) && (d = {
        phone: a.value,
        token: r.value,
        type: t.otpType
      });
      const { error: g } = await t.supabaseClient.auth.verifyOtp(
        d
      );
      g ? l.value = g.message : s.value = (T = (E = t.i18n) == null ? void 0 : E.magic_link) == null ? void 0 : T.confirmation_text, c.value = !1;
    };
    return (p, d) => (S(), j("form", {
      id: `auth-${C(i)}`,
      onSubmit: Ee(_, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      W(C(we), {
        direction: "vertical",
        gap: "large",
        appearance: p.appearance
      }, {
        default: k(() => {
          var g, E, T;
          return [
            ["sms", "phone_change"].includes(p.otpType) ? (S(), j("div", Ki, [
              W(C(Be), {
                htmlFor: "phone",
                appearance: p.appearance
              }, {
                default: k(() => {
                  var b;
                  return [
                    U(B((b = u.value) == null ? void 0 : b.phone_input_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              W(C(Ue), {
                id: "phone",
                name: "phone",
                type: "text",
                autofocus: "",
                placeholder: (g = u.value) == null ? void 0 : g.phone_input_placeholder,
                appearance: p.appearance,
                modelValue: a.value,
                "onUpdate:modelValue": d[0] || (d[0] = (b) => a.value = b)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ])) : (S(), j("div", Xi, [
              W(C(Be), {
                htmlFor: "email",
                appearance: p.appearance
              }, {
                default: k(() => {
                  var b;
                  return [
                    U(B((b = u.value) == null ? void 0 : b.email_input_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              W(C(Ue), {
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                autofocus: "",
                placeholder: (E = u.value) == null ? void 0 : E.email_input_placeholder,
                appearance: p.appearance,
                modelValue: n.value,
                "onUpdate:modelValue": d[1] || (d[1] = (b) => n.value = b)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ])),
            V("div", null, [
              W(C(Be), {
                htmlFor: "token",
                appearance: p.appearance
              }, {
                default: k(() => {
                  var b;
                  return [
                    U(B((b = u.value) == null ? void 0 : b.token_input_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              W(C(Ue), {
                id: "token",
                name: "token",
                type: "text",
                autofocus: "",
                placeholder: (T = u.value) == null ? void 0 : T.token_input_placeholder,
                appearance: p.appearance,
                modelValue: r.value,
                "onUpdate:modelValue": d[2] || (d[2] = (b) => r.value = b)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ]),
            W(C(ct), {
              type: "submit",
              color: "primary",
              loading: c.value,
              appearance: p.appearance
            }, {
              default: k(() => {
                var b, N;
                return [
                  U(B(c.value ? (b = u.value) == null ? void 0 : b.loading_button_label : (N = u.value) == null ? void 0 : N.button_label), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "appearance"]),
            p.showLinks ? (S(), $(C(Qe), {
              key: 2,
              href: "#auth-sign-in",
              appearance: p.appearance,
              onClick: d[3] || (d[3] = Ee((b) => C(f)(C(me).SIGN_IN), ["prevent"]))
            }, {
              default: k(() => {
                var b, N;
                return [
                  U(B((N = (b = p.i18n) == null ? void 0 : b.sign_in) == null ? void 0 : N.link_text), 1)
                ];
              }),
              _: 1
            }, 8, ["appearance"])) : Y("", !0)
          ];
        }),
        _: 1
      }, 8, ["appearance"]),
      s.value ? (S(), $(C(Oe), {
        key: 0,
        appearance: p.appearance
      }, {
        default: k(() => [
          U(B(s.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0),
      l.value ? (S(), $(C(Oe), {
        key: 1,
        color: "danger",
        appearance: p.appearance
      }, {
        default: k(() => [
          U(B(l.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0)
    ], 40, Yi));
  }
}), qi = ["id"], Ji = /* @__PURE__ */ ne({
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
    Jn(t.supabaseClient);
    const n = z(""), a = z(""), r = z(!1), { authView: l, setAuthView: s } = ut(je), c = q(
      () => {
        var f;
        return (f = t.i18n) == null ? void 0 : f[l.value];
      }
    ), i = async (f) => {
      n.value = "", a.value = "", r.value = !0;
      let u = null;
      const { data: _, error: p } = await t.supabaseClient.auth.signInAnonymously(
        t.anonymouslyCredentials
      );
      u = p, u && (n.value = u.message), r.value = !1;
    };
    return (f, u) => (S(), j("form", {
      id: `auth-${C(l)}`,
      onSubmit: Ee(i, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      W(C(we), {
        direction: "vertical",
        gap: "large",
        appearance: f.appearance
      }, {
        default: k(() => [
          W(C(ct), {
            type: "submit",
            color: "primary",
            loading: r.value,
            appearance: f.appearance
          }, {
            default: k(() => {
              var _, p;
              return [
                U(B(r.value ? (_ = c.value) == null ? void 0 : _.loading_button_label : (p = c.value) == null ? void 0 : p.button_label), 1)
              ];
            }),
            _: 1
          }, 8, ["loading", "appearance"])
        ]),
        _: 1
      }, 8, ["appearance"]),
      a.value ? (S(), $(C(Oe), {
        key: 0,
        appearance: f.appearance
      }, {
        default: k(() => [
          U(B(a.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0),
      n.value ? (S(), $(C(Oe), {
        key: 1,
        color: "danger",
        appearance: f.appearance
      }, {
        default: k(() => [
          U(B(n.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : Y("", !0)
    ], 40, qi));
  }
});
/*!
  * shared v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const $e = typeof window < "u";
let ye, nt;
if (process.env.NODE_ENV !== "production") {
  const e = $e && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (ye = (t) => {
    e.mark(t);
  }, nt = (t, n, a) => {
    e.measure(t, n, a), e.clearMarks(n), e.clearMarks(a);
  });
}
const Qi = /\{([0-9a-zA-Z]+)\}/g;
function qa(e, ...t) {
  return t.length === 1 && G(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Qi, (n, a) => t.hasOwnProperty(a) ? t[a] : "");
}
const Ve = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), es = (e, t, n) => ts({ l: e, k: t, s: n }), ts = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), pe = (e) => typeof e == "number" && isFinite(e), ns = (e) => Qa(e) === "[object Date]", nn = (e) => Qa(e) === "[object RegExp]", sn = (e) => H(e) && Object.keys(e).length === 0, de = Object.assign;
let Ta;
const Pt = () => Ta || (Ta = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Na(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const as = Object.prototype.hasOwnProperty;
function an(e, t) {
  return as.call(e, t);
}
const le = Array.isArray, Q = (e) => typeof e == "function", A = (e) => typeof e == "string", oe = (e) => typeof e == "boolean", G = (e) => e !== null && typeof e == "object", rs = (e) => G(e) && Q(e.then) && Q(e.catch), Ja = Object.prototype.toString, Qa = (e) => Ja.call(e), H = (e) => {
  if (!G(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, os = (e) => e == null ? "" : le(e) || H(e) && e.toString === Ja ? JSON.stringify(e, null, 2) : String(e);
function ls(e, t = "") {
  return e.reduce((n, a, r) => r === 0 ? n + a : n + t + a, "");
}
const Sa = 2;
function is(e, t = 0, n = e.length) {
  const a = e.split(/\r?\n/);
  let r = 0;
  const l = [];
  for (let s = 0; s < a.length; s++)
    if (r += a[s].length + 1, r >= t) {
      for (let c = s - Sa; c <= s + Sa || n > r; c++) {
        if (c < 0 || c >= a.length)
          continue;
        const i = c + 1;
        l.push(`${i}${" ".repeat(3 - String(i).length)}|  ${a[c]}`);
        const f = a[c].length;
        if (c === s) {
          const u = t - (r - f) + 1, _ = Math.max(1, n > r ? f - u : n - t);
          l.push("   |  " + " ".repeat(u) + "^".repeat(_));
        } else if (c > s) {
          if (n > r) {
            const u = Math.max(Math.min(n - r, f), 1);
            l.push("   |  " + "^".repeat(u));
          }
          r += f + 1;
        }
      }
      break;
    }
  return l.join(`
`);
}
function cn(e) {
  let t = e;
  return () => ++t;
}
function yt(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Oa = {};
function er(e) {
  Oa[e] || (Oa[e] = !0, yt(e));
}
function ss() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, a) {
      const r = e.get(n);
      r && r.push(a) || e.set(n, [a]);
    },
    off(n, a) {
      const r = e.get(n);
      r && r.splice(r.indexOf(a) >>> 0, 1);
    },
    emit(n, a) {
      (e.get(n) || []).slice().map((r) => r(a)), (e.get("*") || []).slice().map((r) => r(n, a));
    }
  };
}
const Jt = (e) => !G(e) || le(e);
function en(e, t) {
  if (Jt(e) || Jt(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: a, des: r } = n.pop();
    Object.keys(a).forEach((l) => {
      G(a[l]) && !G(r[l]) && (r[l] = Array.isArray(a[l]) ? [] : {}), Jt(r[l]) || Jt(a[l]) ? r[l] = a[l] : n.push({ src: a[l], des: r[l] });
    });
  }
}
/*!
  * message-compiler v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const cs = /\{([0-9a-zA-Z]+)\}/g;
function us(e, ...t) {
  return t.length === 1 && ps(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(cs, (n, a) => t.hasOwnProperty(a) ? t[a] : "");
}
const ps = (e) => e !== null && typeof e == "object", ds = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, ce = {
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
}, fs = {
  // tokenizer error messages
  [ce.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [ce.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [ce.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [ce.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [ce.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [ce.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [ce.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [ce.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [ce.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [ce.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [ce.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [ce.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [ce.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [ce.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [ce.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [ce.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function tr(e, t, n = {}) {
  const { domain: a, messages: r, args: l } = n, s = us((r || fs)[e] || "", ...l || []), c = new SyntaxError(String(s));
  return c.code = e, t && (c.location = t), c.domain = a, c;
}
/*!
  * core-base v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function _s() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Pt().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Pt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const ze = [];
ze[
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
ze[
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
ze[
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
ze[
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
ze[
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
ze[
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
ze[
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
const ms = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function gs(e) {
  return ms.test(e);
}
function hs(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function bs(e) {
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
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : gs(t) ? hs(t) : "*" + t;
}
function Es(e) {
  const t = [];
  let n = -1, a = 0, r = 0, l, s, c, i, f, u, _;
  const p = [];
  p[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = c : s += c;
  }, p[
    1
    /* Actions.PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
  }, p[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    p[
      0
      /* Actions.APPEND */
    ](), r++;
  }, p[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (r > 0)
      r--, a = 4, p[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (r = 0, s === void 0 || (s = vs(s), s === !1))
        return !1;
      p[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function d() {
    const g = e[n + 1];
    if (a === 5 && g === "'" || a === 6 && g === '"')
      return n++, c = "\\" + g, p[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; a !== null; )
    if (n++, l = e[n], !(l === "\\" && d())) {
      if (i = bs(l), _ = ze[a], f = _[i] || _.l || 8, f === 8 || (a = f[0], f[1] !== void 0 && (u = p[f[1]], u && (c = l, u() === !1))))
        return;
      if (a === 7)
        return t;
    }
}
const wa = /* @__PURE__ */ new Map();
function ys(e, t) {
  return G(e) ? e[t] : null;
}
function Cs(e, t) {
  if (!G(e))
    return null;
  let n = wa.get(t);
  if (n || (n = Es(t), n && wa.set(t, n)), !n)
    return null;
  const a = n.length;
  let r = e, l = 0;
  for (; l < a; ) {
    const s = r[n[l]];
    if (s === void 0 || Q(r))
      return null;
    r = s, l++;
  }
  return r;
}
const Ts = (e) => e, Ns = (e) => "", Ss = "text", Os = (e) => e.length === 0 ? "" : ls(e), ws = os;
function La(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Ls(e) {
  const t = pe(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (pe(e.named.count) || pe(e.named.n)) ? pe(e.named.count) ? e.named.count : pe(e.named.n) ? e.named.n : t : t;
}
function Is(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function As(e = {}) {
  const t = e.locale, n = Ls(e), a = G(e.pluralRules) && A(t) && Q(e.pluralRules[t]) ? e.pluralRules[t] : La, r = G(e.pluralRules) && A(t) && Q(e.pluralRules[t]) ? La : void 0, l = (b) => b[a(n, b.length, r)], s = e.list || [], c = (b) => s[b], i = e.named || {};
  pe(e.pluralIndex) && Is(n, i);
  const f = (b) => i[b];
  function u(b) {
    const N = Q(e.messages) ? e.messages(b) : G(e.messages) ? e.messages[b] : !1;
    return N || (e.parent ? e.parent.message(b) : Ns);
  }
  const _ = (b) => e.modifiers ? e.modifiers[b] : Ts, p = H(e.processor) && Q(e.processor.normalize) ? e.processor.normalize : Os, d = H(e.processor) && Q(e.processor.interpolate) ? e.processor.interpolate : ws, g = H(e.processor) && A(e.processor.type) ? e.processor.type : Ss, T = {
    list: c,
    named: f,
    plural: l,
    linked: (b, ...N) => {
      const [R, w] = N;
      let M = "text", P = "";
      N.length === 1 ? G(R) ? (P = R.modifier || P, M = R.type || M) : A(R) && (P = R || P) : N.length === 2 && (A(R) && (P = R || P), A(w) && (M = w || M));
      const F = u(b)(T), D = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        M === "vnode" && le(F) && P ? F[0] : F
      );
      return P ? _(P)(D, M) : D;
    },
    message: u,
    type: g,
    interpolate: d,
    normalize: p,
    values: de({}, s, i)
  };
  return T;
}
let Rt = null;
function ks(e) {
  Rt = e;
}
function Ps(e, t, n) {
  Rt && Rt.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Rs = /* @__PURE__ */ Ms(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function Ms(e) {
  return (t) => Rt && Rt.emit(e, t);
}
const nr = ds.__EXTEND_POINT__, qe = cn(nr), ge = {
  NOT_FOUND_KEY: nr,
  // 2
  FALLBACK_TO_TRANSLATE: qe(),
  // 3
  CANNOT_FORMAT_NUMBER: qe(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: qe(),
  // 5
  CANNOT_FORMAT_DATE: qe(),
  // 6
  FALLBACK_TO_DATE_FORMAT: qe(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: qe(),
  // 8
  __EXTEND_POINT__: qe()
  // 9
}, Ds = {
  [ge.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [ge.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [ge.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [ge.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [ge.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [ge.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [ge.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function at(e, ...t) {
  return qa(Ds[e], ...t);
}
const ar = ce.__EXTEND_POINT__, Je = cn(ar), ue = {
  INVALID_ARGUMENT: ar,
  // 17
  INVALID_DATE_ARGUMENT: Je(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: Je(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: Je(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: Je(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Je(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: Je(),
  // 23
  __EXTEND_POINT__: Je()
  // 24
};
function De(e) {
  return tr(e, null, process.env.NODE_ENV !== "production" ? { messages: Fs } : void 0);
}
const Fs = {
  [ue.INVALID_ARGUMENT]: "Invalid arguments",
  [ue.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [ue.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [ue.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [ue.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [ue.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [ue.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Qn(e, t) {
  return t.locale != null ? Ia(t.locale) : Ia(e.locale);
}
let Mn;
function Ia(e) {
  if (A(e))
    return e;
  if (Q(e)) {
    if (e.resolvedOnce && Mn != null)
      return Mn;
    if (e.constructor.name === "Function") {
      const t = e();
      if (rs(t))
        throw De(ue.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Mn = t;
    } else
      throw De(ue.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw De(ue.NOT_SUPPORT_LOCALE_TYPE);
}
function $s(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...le(t) ? t : G(t) ? Object.keys(t) : A(t) ? [t] : [n]
  ])];
}
function rr(e, t, n) {
  const a = A(n) ? n : rn, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let l = r.__localeChainCache.get(a);
  if (!l) {
    l = [];
    let s = [n];
    for (; le(s); )
      s = Aa(l, s, t);
    const c = le(t) || !H(t) ? t : t.default ? t.default : null;
    s = A(c) ? [c] : c, le(s) && Aa(l, s, !1), r.__localeChainCache.set(a, l);
  }
  return l;
}
function Aa(e, t, n) {
  let a = !0;
  for (let r = 0; r < t.length && oe(a); r++) {
    const l = t[r];
    A(l) && (a = Vs(e, t[r], n));
  }
  return a;
}
function Vs(e, t, n) {
  let a;
  const r = t.split("-");
  do {
    const l = r.join("-");
    a = xs(e, l, n), r.splice(-1, 1);
  } while (r.length && a === !0);
  return a;
}
function xs(e, t, n) {
  let a = !1;
  if (!e.includes(t) && (a = !0, t)) {
    a = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (le(n) || H(n)) && n[r] && (a = n[r]);
  }
  return a;
}
const Us = "9.14.1", un = -1, rn = "en-US", on = "", ka = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Bs() {
  return {
    upper: (e, t) => t === "text" && A(e) ? e.toUpperCase() : t === "vnode" && G(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && A(e) ? e.toLowerCase() : t === "vnode" && G(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && A(e) ? ka(e) : t === "vnode" && G(e) && "__v_isVNode" in e ? ka(e.children) : e
  };
}
let Ws, or;
function js(e) {
  or = e;
}
let lr;
function zs(e) {
  lr = e;
}
let ir = null;
const Gs = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  ir = e;
}, Hs = /* @__NO_SIDE_EFFECTS__ */ () => ir;
let sr = null;
const Pa = (e) => {
  sr = e;
}, Ys = () => sr;
let Ra = 0;
function Ks(e = {}) {
  const t = Q(e.onWarn) ? e.onWarn : yt, n = A(e.version) ? e.version : Us, a = A(e.locale) || Q(e.locale) ? e.locale : rn, r = Q(a) ? rn : a, l = le(e.fallbackLocale) || H(e.fallbackLocale) || A(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, s = H(e.messages) ? e.messages : { [r]: {} }, c = H(e.datetimeFormats) ? e.datetimeFormats : { [r]: {} }, i = H(e.numberFormats) ? e.numberFormats : { [r]: {} }, f = de({}, e.modifiers || {}, Bs()), u = e.pluralRules || {}, _ = Q(e.missing) ? e.missing : null, p = oe(e.missingWarn) || nn(e.missingWarn) ? e.missingWarn : !0, d = oe(e.fallbackWarn) || nn(e.fallbackWarn) ? e.fallbackWarn : !0, g = !!e.fallbackFormat, E = !!e.unresolving, T = Q(e.postTranslation) ? e.postTranslation : null, b = H(e.processor) ? e.processor : null, N = oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, R = !!e.escapeParameter, w = Q(e.messageCompiler) ? e.messageCompiler : Ws;
  process.env.NODE_ENV !== "production" && Q(e.messageCompiler) && er(at(ge.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const M = Q(e.messageResolver) ? e.messageResolver : or || ys, P = Q(e.localeFallbacker) ? e.localeFallbacker : lr || $s, F = G(e.fallbackContext) ? e.fallbackContext : void 0, D = e, O = G(D.__datetimeFormatters) ? D.__datetimeFormatters : /* @__PURE__ */ new Map(), Z = G(D.__numberFormatters) ? D.__numberFormatters : /* @__PURE__ */ new Map(), ae = G(D.__meta) ? D.__meta : {};
  Ra++;
  const ee = {
    version: n,
    cid: Ra,
    locale: a,
    fallbackLocale: l,
    messages: s,
    modifiers: f,
    pluralRules: u,
    missing: _,
    missingWarn: p,
    fallbackWarn: d,
    fallbackFormat: g,
    unresolving: E,
    postTranslation: T,
    processor: b,
    warnHtmlMessage: N,
    escapeParameter: R,
    messageCompiler: w,
    messageResolver: M,
    localeFallbacker: P,
    fallbackContext: F,
    onWarn: t,
    __meta: ae
  };
  return ee.datetimeFormats = c, ee.numberFormats = i, ee.__datetimeFormatters = O, ee.__numberFormatters = Z, process.env.NODE_ENV !== "production" && (ee.__v_emitter = D.__v_emitter != null ? D.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Ps(ee, n, ae), ee;
}
function pn(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function cr(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function ea(e, t, n, a, r) {
  const { missing: l, onWarn: s } = e;
  if (process.env.NODE_ENV !== "production") {
    const c = e.__v_emitter;
    c && c.emit("missing", {
      locale: n,
      key: t,
      type: r,
      groupId: `${r}:${t}`
    });
  }
  if (l !== null) {
    const c = l(e, n, t, r);
    return A(c) ? c : t;
  } else
    return process.env.NODE_ENV !== "production" && cr(a, t) && s(at(ge.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function It(e, t, n) {
  const a = e;
  a.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function ur(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Xs(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let a = n + 1; a < t.length; a++)
    if (ur(e, t[a]))
      return !0;
  return !1;
}
const Et = (e) => G(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e), Ma = () => "", Se = (e) => Q(e);
function Da(e, ...t) {
  const { fallbackFormat: n, postTranslation: a, unresolving: r, messageCompiler: l, fallbackLocale: s, messages: c } = e, [i, f] = xn(...t), u = oe(f.missingWarn) ? f.missingWarn : e.missingWarn, _ = oe(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, p = oe(f.escapeParameter) ? f.escapeParameter : e.escapeParameter, d = !!f.resolvedMessage, g = A(f.default) || oe(f.default) ? oe(f.default) ? l ? i : () => i : f.default : n ? l ? i : () => i : "", E = n || g !== "", T = Qn(e, f);
  p && Zs(f);
  let [b, N, R] = d ? [
    i,
    T,
    c[T] || {}
  ] : pr(e, i, T, s, _, u), w = b, M = i;
  if (!d && !(A(w) || Et(w) || Se(w)) && E && (w = g, M = w), !d && (!(A(w) || Et(w) || Se(w)) || !A(N)))
    return r ? un : i;
  if (process.env.NODE_ENV !== "production" && A(w) && e.messageCompiler == null)
    return yt(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${i}'.`), i;
  let P = !1;
  const F = () => {
    P = !0;
  }, D = Se(w) ? w : dr(e, i, N, w, M, F);
  if (P)
    return w;
  const O = ec(e, N, R, f), Z = As(O), ae = qs(e, D, Z), ee = a ? a(ae, i) : ae;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const Ce = {
      timestamp: Date.now(),
      key: A(i) ? i : Se(w) ? w.key : "",
      locale: N || (Se(w) ? w.locale : ""),
      format: A(w) ? w : Se(w) ? w.source : "",
      message: ee
    };
    Ce.meta = de({}, e.__meta, /* @__PURE__ */ Hs() || {}), Rs(Ce);
  }
  return ee;
}
function Zs(e) {
  le(e.list) ? e.list = e.list.map((t) => A(t) ? Na(t) : t) : G(e.named) && Object.keys(e.named).forEach((t) => {
    A(e.named[t]) && (e.named[t] = Na(e.named[t]));
  });
}
function pr(e, t, n, a, r, l) {
  const { messages: s, onWarn: c, messageResolver: i, localeFallbacker: f } = e, u = f(e, a, n);
  let _ = {}, p, d = null, g = n, E = null;
  const T = "translate";
  for (let b = 0; b < u.length; b++) {
    if (p = E = u[b], process.env.NODE_ENV !== "production" && n !== p && !ur(n, p) && pn(r, t) && c(at(ge.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: p
    })), process.env.NODE_ENV !== "production" && n !== p) {
      const M = e.__v_emitter;
      M && M.emit("fallback", {
        type: T,
        key: t,
        from: g,
        to: E,
        groupId: `${T}:${t}`
      });
    }
    _ = s[p] || {};
    let N = null, R, w;
    if (process.env.NODE_ENV !== "production" && $e && (N = window.performance.now(), R = "intlify-message-resolve-start", w = "intlify-message-resolve-end", ye && ye(R)), (d = i(_, t)) === null && (d = _[t]), process.env.NODE_ENV !== "production" && $e) {
      const M = window.performance.now(), P = e.__v_emitter;
      P && N && d && P.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: d,
        time: M - N,
        groupId: `${T}:${t}`
      }), R && w && ye && nt && (ye(w), nt("intlify message resolve", R, w));
    }
    if (A(d) || Et(d) || Se(d))
      break;
    if (!Xs(p, u)) {
      const M = ea(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        p,
        l,
        T
      );
      M !== t && (d = M);
    }
    g = E;
  }
  return [d, p, _];
}
function dr(e, t, n, a, r, l) {
  const { messageCompiler: s, warnHtmlMessage: c } = e;
  if (Se(a)) {
    const p = a;
    return p.locale = p.locale || n, p.key = p.key || t, p;
  }
  if (s == null) {
    const p = () => a;
    return p.locale = n, p.key = t, p;
  }
  let i = null, f, u;
  process.env.NODE_ENV !== "production" && $e && (i = window.performance.now(), f = "intlify-message-compilation-start", u = "intlify-message-compilation-end", ye && ye(f));
  const _ = s(a, Js(e, n, r, a, c, l));
  if (process.env.NODE_ENV !== "production" && $e) {
    const p = window.performance.now(), d = e.__v_emitter;
    d && i && d.emit("message-compilation", {
      type: "message-compilation",
      message: a,
      time: p - i,
      groupId: `translate:${t}`
    }), f && u && ye && nt && (ye(u), nt("intlify message compilation", f, u));
  }
  return _.locale = n, _.key = t, _.source = a, _;
}
function qs(e, t, n) {
  let a = null, r, l;
  process.env.NODE_ENV !== "production" && $e && (a = window.performance.now(), r = "intlify-message-evaluation-start", l = "intlify-message-evaluation-end", ye && ye(r));
  const s = t(n);
  if (process.env.NODE_ENV !== "production" && $e) {
    const c = window.performance.now(), i = e.__v_emitter;
    i && a && i.emit("message-evaluation", {
      type: "message-evaluation",
      value: s,
      time: c - a,
      groupId: `translate:${t.key}`
    }), r && l && ye && nt && (ye(l), nt("intlify message evaluation", r, l));
  }
  return s;
}
function xn(...e) {
  const [t, n, a] = e, r = {};
  if (!A(t) && !pe(t) && !Se(t) && !Et(t))
    throw De(ue.INVALID_ARGUMENT);
  const l = pe(t) ? String(t) : (Se(t), t);
  return pe(n) ? r.plural = n : A(n) ? r.default = n : H(n) && !sn(n) ? r.named = n : le(n) && (r.list = n), pe(a) ? r.plural = a : A(a) ? r.default = a : H(a) && de(r, a), [l, r];
}
function Js(e, t, n, a, r, l) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (s) => {
      if (l && l(s), process.env.NODE_ENV !== "production") {
        const c = Qs(a), i = `Message compilation error: ${s.message}`, f = s.location && c && is(c, s.location.start.offset, s.location.end.offset), u = e.__v_emitter;
        u && c && u.emit("compile-error", {
          message: c,
          error: s.message,
          start: s.location && s.location.start.offset,
          end: s.location && s.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(f ? `${i}
${f}` : i);
      } else
        throw s;
    },
    onCacheKey: (s) => es(t, n, s)
  };
}
function Qs(e) {
  if (A(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function ec(e, t, n, a) {
  const { modifiers: r, pluralRules: l, messageResolver: s, fallbackLocale: c, fallbackWarn: i, missingWarn: f, fallbackContext: u } = e, p = {
    locale: t,
    modifiers: r,
    pluralRules: l,
    messages: (d) => {
      let g = s(n, d);
      if (g == null && u) {
        const [, , E] = pr(u, d, t, c, i, f);
        g = s(E, d);
      }
      if (A(g) || Et(g)) {
        let E = !1;
        const b = dr(e, d, t, g, d, () => {
          E = !0;
        });
        return E ? Ma : b;
      } else
        return Se(g) ? g : Ma;
    }
  };
  return e.processor && (p.processor = e.processor), a.list && (p.list = a.list), a.named && (p.named = a.named), pe(a.plural) && (p.pluralIndex = a.plural), p;
}
const Fa = typeof Intl < "u", fr = {
  dateTimeFormat: Fa && typeof Intl.DateTimeFormat < "u",
  numberFormat: Fa && typeof Intl.NumberFormat < "u"
};
function $a(e, ...t) {
  const { datetimeFormats: n, unresolving: a, fallbackLocale: r, onWarn: l, localeFallbacker: s } = e, { __datetimeFormatters: c } = e;
  if (process.env.NODE_ENV !== "production" && !fr.dateTimeFormat)
    return l(at(ge.CANNOT_FORMAT_DATE)), on;
  const [i, f, u, _] = Un(...t), p = oe(u.missingWarn) ? u.missingWarn : e.missingWarn, d = oe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, g = !!u.part, E = Qn(e, u), T = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    E
  );
  if (!A(i) || i === "")
    return new Intl.DateTimeFormat(E, _).format(f);
  let b = {}, N, R = null, w = E, M = null;
  const P = "datetime format";
  for (let O = 0; O < T.length; O++) {
    if (N = M = T[O], process.env.NODE_ENV !== "production" && E !== N && pn(d, i) && l(at(ge.FALLBACK_TO_DATE_FORMAT, {
      key: i,
      target: N
    })), process.env.NODE_ENV !== "production" && E !== N) {
      const Z = e.__v_emitter;
      Z && Z.emit("fallback", {
        type: P,
        key: i,
        from: w,
        to: M,
        groupId: `${P}:${i}`
      });
    }
    if (b = n[N] || {}, R = b[i], H(R))
      break;
    ea(e, i, N, p, P), w = M;
  }
  if (!H(R) || !A(N))
    return a ? un : i;
  let F = `${N}__${i}`;
  sn(_) || (F = `${F}__${JSON.stringify(_)}`);
  let D = c.get(F);
  return D || (D = new Intl.DateTimeFormat(N, de({}, R, _)), c.set(F, D)), g ? D.formatToParts(f) : D.format(f);
}
const _r = [
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
function Un(...e) {
  const [t, n, a, r] = e, l = {};
  let s = {}, c;
  if (A(t)) {
    const i = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!i)
      throw De(ue.INVALID_ISO_DATE_ARGUMENT);
    const f = i[3] ? i[3].trim().startsWith("T") ? `${i[1].trim()}${i[3].trim()}` : `${i[1].trim()}T${i[3].trim()}` : i[1].trim();
    c = new Date(f);
    try {
      c.toISOString();
    } catch {
      throw De(ue.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (ns(t)) {
    if (isNaN(t.getTime()))
      throw De(ue.INVALID_DATE_ARGUMENT);
    c = t;
  } else if (pe(t))
    c = t;
  else
    throw De(ue.INVALID_ARGUMENT);
  return A(n) ? l.key = n : H(n) && Object.keys(n).forEach((i) => {
    _r.includes(i) ? s[i] = n[i] : l[i] = n[i];
  }), A(a) ? l.locale = a : H(a) && (s = a), H(r) && (s = r), [l.key || "", c, l, s];
}
function Va(e, t, n) {
  const a = e;
  for (const r in n) {
    const l = `${t}__${r}`;
    a.__datetimeFormatters.has(l) && a.__datetimeFormatters.delete(l);
  }
}
function xa(e, ...t) {
  const { numberFormats: n, unresolving: a, fallbackLocale: r, onWarn: l, localeFallbacker: s } = e, { __numberFormatters: c } = e;
  if (process.env.NODE_ENV !== "production" && !fr.numberFormat)
    return l(at(ge.CANNOT_FORMAT_NUMBER)), on;
  const [i, f, u, _] = Bn(...t), p = oe(u.missingWarn) ? u.missingWarn : e.missingWarn, d = oe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, g = !!u.part, E = Qn(e, u), T = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    E
  );
  if (!A(i) || i === "")
    return new Intl.NumberFormat(E, _).format(f);
  let b = {}, N, R = null, w = E, M = null;
  const P = "number format";
  for (let O = 0; O < T.length; O++) {
    if (N = M = T[O], process.env.NODE_ENV !== "production" && E !== N && pn(d, i) && l(at(ge.FALLBACK_TO_NUMBER_FORMAT, {
      key: i,
      target: N
    })), process.env.NODE_ENV !== "production" && E !== N) {
      const Z = e.__v_emitter;
      Z && Z.emit("fallback", {
        type: P,
        key: i,
        from: w,
        to: M,
        groupId: `${P}:${i}`
      });
    }
    if (b = n[N] || {}, R = b[i], H(R))
      break;
    ea(e, i, N, p, P), w = M;
  }
  if (!H(R) || !A(N))
    return a ? un : i;
  let F = `${N}__${i}`;
  sn(_) || (F = `${F}__${JSON.stringify(_)}`);
  let D = c.get(F);
  return D || (D = new Intl.NumberFormat(N, de({}, R, _)), c.set(F, D)), g ? D.formatToParts(f) : D.format(f);
}
const mr = [
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
function Bn(...e) {
  const [t, n, a, r] = e, l = {};
  let s = {};
  if (!pe(t))
    throw De(ue.INVALID_ARGUMENT);
  const c = t;
  return A(n) ? l.key = n : H(n) && Object.keys(n).forEach((i) => {
    mr.includes(i) ? s[i] = n[i] : l[i] = n[i];
  }), A(a) ? l.locale = a : H(a) && (s = a), H(r) && (s = r), [l.key || "", c, l, s];
}
function Ua(e, t, n) {
  const a = e;
  for (const r in n) {
    const l = `${t}__${r}`;
    a.__numberFormatters.has(l) && a.__numberFormatters.delete(l);
  }
}
_s();
/*!
  * vue-i18n v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const tc = "9.14.1";
function nc() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Pt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Pt().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const gr = ge.__EXTEND_POINT__, Me = cn(gr), ve = {
  FALLBACK_TO_ROOT: gr,
  // 9
  NOT_SUPPORTED_PRESERVE: Me(),
  // 10
  NOT_SUPPORTED_FORMATTER: Me(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: Me(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: Me(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: Me(),
  // 14
  NOT_FOUND_PARENT_SCOPE: Me(),
  // 15
  IGNORE_OBJ_FLATTEN: Me(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: Me(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: Me()
  // 18
}, ac = {
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
function ln(e, ...t) {
  return qa(ac[e], ...t);
}
const hr = ue.__EXTEND_POINT__, be = cn(hr), re = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: hr,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: be(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: be(),
  // 26
  NOT_INSTALLED: be(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: be(),
  // 28
  // directive module errors
  REQUIRED_VALUE: be(),
  // 29
  INVALID_VALUE: be(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: be(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: be(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: be(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: be(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: be(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: be(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: be(),
  // 37
  // for enhancement
  __EXTEND_POINT__: be()
  // 38
};
function Mt(e, ...t) {
  return tr(e, null, process.env.NODE_ENV !== "production" ? { messages: rc, args: t } : void 0);
}
const rc = {
  [re.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [re.INVALID_ARGUMENT]: "Invalid argument",
  [re.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [re.NOT_INSTALLED]: "Need to install with `app.use` function",
  [re.UNEXPECTED_ERROR]: "Unexpected error",
  [re.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [re.REQUIRED_VALUE]: "Required in value: {0}",
  [re.INVALID_VALUE]: "Invalid value",
  [re.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [re.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [re.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [re.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [re.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [re.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Wn = /* @__PURE__ */ Ve("__translateVNode"), jn = /* @__PURE__ */ Ve("__datetimeParts"), zn = /* @__PURE__ */ Ve("__numberParts"), Gn = /* @__PURE__ */ Ve("__enableEmitter"), Hn = /* @__PURE__ */ Ve("__disableEmitter"), oc = Ve("__setPluralRules"), lc = /* @__PURE__ */ Ve("__injectWithOption"), Yn = /* @__PURE__ */ Ve("__dispose");
function Dt(e) {
  if (!G(e))
    return e;
  for (const t in e)
    if (an(e, t))
      if (!t.includes("."))
        G(e[t]) && Dt(e[t]);
      else {
        const n = t.split("."), a = n.length - 1;
        let r = e, l = !1;
        for (let s = 0; s < a; s++) {
          if (n[s] in r || (r[n[s]] = {}), !G(r[n[s]])) {
            process.env.NODE_ENV !== "production" && yt(ln(ve.IGNORE_OBJ_FLATTEN, {
              key: n[s]
            })), l = !0;
            break;
          }
          r = r[n[s]];
        }
        l || (r[n[a]] = e[t], delete e[t]), G(r[n[a]]) && Dt(r[n[a]]);
      }
  return e;
}
function br(e, t) {
  const { messages: n, __i18n: a, messageResolver: r, flatJson: l } = t, s = H(n) ? n : le(a) ? {} : { [e]: {} };
  if (le(a) && a.forEach((c) => {
    if ("locale" in c && "resource" in c) {
      const { locale: i, resource: f } = c;
      i ? (s[i] = s[i] || {}, en(f, s[i])) : en(f, s);
    } else
      A(c) && en(JSON.parse(c), s);
  }), r == null && l)
    for (const c in s)
      an(s, c) && Dt(s[c]);
  return s;
}
function vr(e) {
  return e.type;
}
function ic(e, t, n) {
  let a = G(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (a = br(e.locale.value, {
    messages: a,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(a);
  r.length && r.forEach((l) => {
    e.mergeLocaleMessage(l, a[l]);
  });
  {
    if (G(t.datetimeFormats)) {
      const l = Object.keys(t.datetimeFormats);
      l.length && l.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (G(t.numberFormats)) {
      const l = Object.keys(t.numberFormats);
      l.length && l.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function Ba(e) {
  return W(Ao, null, e, 0);
}
const Wa = "__INTLIFY_META__", ja = () => [], sc = () => !1;
let za = 0;
function Ga(e) {
  return (t, n, a, r) => e(n, a, Zn() || void 0, r);
}
const cc = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Zn();
  let t = null;
  return e && (t = vr(e)[Wa]) ? { [Wa]: t } : null;
};
function uc(e = {}, t) {
  const { __root: n, __injectWithOption: a } = e, r = n === void 0, l = e.flatJson, s = $e ? z : Io, c = !!e.translateExistCompatible;
  process.env.NODE_ENV !== "production" && c && er(ln(ve.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  let i = oe(e.inheritLocale) ? e.inheritLocale : !0;
  const f = s(
    // prettier-ignore
    n && i ? n.locale.value : A(e.locale) ? e.locale : rn
  ), u = s(
    // prettier-ignore
    n && i ? n.fallbackLocale.value : A(e.fallbackLocale) || le(e.fallbackLocale) || H(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : f.value
  ), _ = s(br(f.value, e)), p = s(H(e.datetimeFormats) ? e.datetimeFormats : { [f.value]: {} }), d = s(H(e.numberFormats) ? e.numberFormats : { [f.value]: {} });
  let g = n ? n.missingWarn : oe(e.missingWarn) || nn(e.missingWarn) ? e.missingWarn : !0, E = n ? n.fallbackWarn : oe(e.fallbackWarn) || nn(e.fallbackWarn) ? e.fallbackWarn : !0, T = n ? n.fallbackRoot : oe(e.fallbackRoot) ? e.fallbackRoot : !0, b = !!e.fallbackFormat, N = Q(e.missing) ? e.missing : null, R = Q(e.missing) ? Ga(e.missing) : null, w = Q(e.postTranslation) ? e.postTranslation : null, M = n ? n.warnHtmlMessage : oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, P = !!e.escapeParameter;
  const F = n ? n.modifiers : H(e.modifiers) ? e.modifiers : {};
  let D = e.pluralRules || n && n.pluralRules, O;
  O = (() => {
    r && Pa(null);
    const h = {
      version: tc,
      locale: f.value,
      fallbackLocale: u.value,
      messages: _.value,
      modifiers: F,
      pluralRules: D,
      missing: R === null ? void 0 : R,
      missingWarn: g,
      fallbackWarn: E,
      fallbackFormat: b,
      unresolving: !0,
      postTranslation: w === null ? void 0 : w,
      warnHtmlMessage: M,
      escapeParameter: P,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    h.datetimeFormats = p.value, h.numberFormats = d.value, h.__datetimeFormatters = H(O) ? O.__datetimeFormatters : void 0, h.__numberFormatters = H(O) ? O.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (h.__v_emitter = H(O) ? O.__v_emitter : void 0);
    const y = Ks(h);
    return r && Pa(y), y;
  })(), It(O, f.value, u.value);
  function ae() {
    return [
      f.value,
      u.value,
      _.value,
      p.value,
      d.value
    ];
  }
  const ee = q({
    get: () => f.value,
    set: (h) => {
      f.value = h, O.locale = f.value;
    }
  }), Ce = q({
    get: () => u.value,
    set: (h) => {
      u.value = h, O.fallbackLocale = u.value, It(O, f.value, h);
    }
  }), ke = q(() => _.value), Ge = /* @__PURE__ */ q(() => p.value), Ct = /* @__PURE__ */ q(() => d.value);
  function He() {
    return Q(w) ? w : null;
  }
  function Ye(h) {
    w = h, O.postTranslation = h;
  }
  function fn() {
    return N;
  }
  function K(h) {
    h !== null && (R = Ga(h)), N = h, O.missing = R;
  }
  function _n(h, y) {
    return h !== "translate" || !y.resolvedMessage;
  }
  const Pe = (h, y, x, J, Ie, ft) => {
    ae();
    let xe;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, r || (O.fallbackContext = n ? Ys() : void 0), xe = h(O);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, r || (O.fallbackContext = void 0);
    }
    if (x !== "translate exists" && // for not `te` (e.g `t`)
    pe(xe) && xe === un || x === "translate exists" && !xe) {
      const [Ae, Tn] = y();
      if (process.env.NODE_ENV !== "production" && n && A(Ae) && _n(x, Tn) && (T && (pn(E, Ae) || cr(g, Ae)) && yt(ln(ve.FALLBACK_TO_ROOT, {
        key: Ae,
        type: x
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Gt } = O;
        Gt && T && Gt.emit("fallback", {
          type: x,
          key: Ae,
          to: "global",
          groupId: `${x}:${Ae}`
        });
      }
      return n && T ? J(n) : Ie(Ae);
    } else {
      if (ft(xe))
        return xe;
      throw Mt(re.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Te(...h) {
    return Pe((y) => Reflect.apply(Da, null, [y, ...h]), () => xn(...h), "translate", (y) => Reflect.apply(y.t, y, [...h]), (y) => y, (y) => A(y));
  }
  function Vt(...h) {
    const [y, x, J] = h;
    if (J && !G(J))
      throw Mt(re.INVALID_ARGUMENT);
    return Te(y, x, de({ resolvedMessage: !0 }, J || {}));
  }
  function xt(...h) {
    return Pe((y) => Reflect.apply($a, null, [y, ...h]), () => Un(...h), "datetime format", (y) => Reflect.apply(y.d, y, [...h]), () => on, (y) => A(y));
  }
  function mn(...h) {
    return Pe((y) => Reflect.apply(xa, null, [y, ...h]), () => Bn(...h), "number format", (y) => Reflect.apply(y.n, y, [...h]), () => on, (y) => A(y));
  }
  function gn(h) {
    return h.map((y) => A(y) || pe(y) || oe(y) ? Ba(String(y)) : y);
  }
  const hn = {
    normalize: gn,
    interpolate: (h) => h,
    type: "vnode"
  };
  function bn(...h) {
    return Pe(
      (y) => {
        let x;
        const J = y;
        try {
          J.processor = hn, x = Reflect.apply(Da, null, [J, ...h]);
        } finally {
          J.processor = null;
        }
        return x;
      },
      () => xn(...h),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (y) => y[Wn](...h),
      (y) => [Ba(y)],
      (y) => le(y)
    );
  }
  function Ut(...h) {
    return Pe(
      (y) => Reflect.apply(xa, null, [y, ...h]),
      () => Bn(...h),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (y) => y[zn](...h),
      ja,
      (y) => A(y) || le(y)
    );
  }
  function vn(...h) {
    return Pe(
      (y) => Reflect.apply($a, null, [y, ...h]),
      () => Un(...h),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (y) => y[jn](...h),
      ja,
      (y) => A(y) || le(y)
    );
  }
  function En(h) {
    D = h, O.pluralRules = D;
  }
  function Bt(h, y) {
    return Pe(() => {
      if (!h)
        return !1;
      const x = A(y) ? y : f.value, J = Nt(x), Ie = O.messageResolver(J, h);
      return c ? Ie != null : Et(Ie) || Se(Ie) || A(Ie);
    }, () => [h], "translate exists", (x) => Reflect.apply(x.te, x, [h, y]), sc, (x) => oe(x));
  }
  function Wt(h) {
    let y = null;
    const x = rr(O, u.value, f.value);
    for (let J = 0; J < x.length; J++) {
      const Ie = _.value[x[J]] || {}, ft = O.messageResolver(Ie, h);
      if (ft != null) {
        y = ft;
        break;
      }
    }
    return y;
  }
  function Tt(h) {
    const y = Wt(h);
    return y ?? (n ? n.tm(h) || {} : {});
  }
  function Nt(h) {
    return _.value[h] || {};
  }
  function yn(h, y) {
    if (l) {
      const x = { [h]: y };
      for (const J in x)
        an(x, J) && Dt(x[J]);
      y = x[h];
    }
    _.value[h] = y, O.messages = _.value;
  }
  function Cn(h, y) {
    _.value[h] = _.value[h] || {};
    const x = { [h]: y };
    if (l)
      for (const J in x)
        an(x, J) && Dt(x[J]);
    y = x[h], en(y, _.value[h]), O.messages = _.value;
  }
  function pt(h) {
    return p.value[h] || {};
  }
  function St(h, y) {
    p.value[h] = y, O.datetimeFormats = p.value, Va(O, h, y);
  }
  function jt(h, y) {
    p.value[h] = de(p.value[h] || {}, y), O.datetimeFormats = p.value, Va(O, h, y);
  }
  function zt(h) {
    return d.value[h] || {};
  }
  function Le(h, y) {
    d.value[h] = y, O.numberFormats = d.value, Ua(O, h, y);
  }
  function dt(h, y) {
    d.value[h] = de(d.value[h] || {}, y), O.numberFormats = d.value, Ua(O, h, y);
  }
  za++, n && $e && (kt(n.locale, (h) => {
    i && (f.value = h, O.locale = h, It(O, f.value, u.value));
  }), kt(n.fallbackLocale, (h) => {
    i && (u.value = h, O.fallbackLocale = h, It(O, f.value, u.value));
  }));
  const te = {
    id: za,
    locale: ee,
    fallbackLocale: Ce,
    get inheritLocale() {
      return i;
    },
    set inheritLocale(h) {
      i = h, h && n && (f.value = n.locale.value, u.value = n.fallbackLocale.value, It(O, f.value, u.value));
    },
    get availableLocales() {
      return Object.keys(_.value).sort();
    },
    messages: ke,
    get modifiers() {
      return F;
    },
    get pluralRules() {
      return D || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return g;
    },
    set missingWarn(h) {
      g = h, O.missingWarn = g;
    },
    get fallbackWarn() {
      return E;
    },
    set fallbackWarn(h) {
      E = h, O.fallbackWarn = E;
    },
    get fallbackRoot() {
      return T;
    },
    set fallbackRoot(h) {
      T = h;
    },
    get fallbackFormat() {
      return b;
    },
    set fallbackFormat(h) {
      b = h, O.fallbackFormat = b;
    },
    get warnHtmlMessage() {
      return M;
    },
    set warnHtmlMessage(h) {
      M = h, O.warnHtmlMessage = h;
    },
    get escapeParameter() {
      return P;
    },
    set escapeParameter(h) {
      P = h, O.escapeParameter = h;
    },
    t: Te,
    getLocaleMessage: Nt,
    setLocaleMessage: yn,
    mergeLocaleMessage: Cn,
    getPostTranslationHandler: He,
    setPostTranslationHandler: Ye,
    getMissingHandler: fn,
    setMissingHandler: K,
    [oc]: En
  };
  return te.datetimeFormats = Ge, te.numberFormats = Ct, te.rt = Vt, te.te = Bt, te.tm = Tt, te.d = xt, te.n = mn, te.getDateTimeFormat = pt, te.setDateTimeFormat = St, te.mergeDateTimeFormat = jt, te.getNumberFormat = zt, te.setNumberFormat = Le, te.mergeNumberFormat = dt, te[lc] = a, te[Wn] = bn, te[jn] = vn, te[zn] = Ut, process.env.NODE_ENV !== "production" && (te[Gn] = (h) => {
    O.__v_emitter = h;
  }, te[Hn] = () => {
    O.__v_emitter = void 0;
  }), te;
}
const ta = {
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
function pc({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((a, r) => [
    ...a,
    // prettier-ignore
    ...r.type === et ? r.children : [r]
  ], []) : t.reduce((n, a) => {
    const r = e[a];
    return r && (n[a] = r()), n;
  }, {});
}
function Er(e) {
  return et;
}
de({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validator: (e) => pe(e) || !isNaN(e)
  }
}, ta);
function dc(e) {
  return le(e) && !A(e[0]);
}
function yr(e, t, n, a) {
  const { slots: r, attrs: l } = t;
  return () => {
    const s = { part: !0 };
    let c = {};
    e.locale && (s.locale = e.locale), A(e.format) ? s.key = e.format : G(e.format) && (A(e.format.key) && (s.key = e.format.key), c = Object.keys(e.format).reduce((p, d) => n.includes(d) ? de({}, p, { [d]: e.format[d] }) : p, {}));
    const i = a(e.value, s, c);
    let f = [s.key];
    le(i) ? f = i.map((p, d) => {
      const g = r[p.type], E = g ? g({ [p.type]: p.value, index: d, parts: i }) : [p.value];
      return dc(E) && (E[0].key = `${p.type}-${d}`), E;
    }) : A(i) && (f = [i]);
    const u = de({}, l), _ = A(e.tag) || G(e.tag) ? e.tag : Er();
    return Xn(_, u, f);
  };
}
de({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ta);
de({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, ta);
function Ha(e, t) {
}
const fc = /* @__PURE__ */ Ve("global-vue-i18n");
function dn(e = {}) {
  const t = Zn();
  if (t == null)
    throw Mt(re.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Mt(re.NOT_INSTALLED);
  const n = _c(t), a = gc(n), r = vr(t), l = mc(e, r);
  if (l === "global")
    return ic(a, e, r), a;
  if (l === "parent") {
    let i = hc(n, t, e.__useComponent);
    return i == null && (process.env.NODE_ENV !== "production" && yt(ln(ve.NOT_FOUND_PARENT_SCOPE)), i = a), i;
  }
  const s = n;
  let c = s.__getInstance(t);
  if (c == null) {
    const i = de({}, e);
    "__i18n" in r && (i.__i18n = r.__i18n), a && (i.__root = a), c = uc(i), s.__composerExtend && (c[Yn] = s.__composerExtend(c)), vc(s, t, c), s.__setInstance(t, c);
  }
  return c;
}
function _c(e) {
  {
    const t = Ya(e.isCE ? fc : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Mt(e.isCE ? re.NOT_INSTALLED_WITH_PROVIDE : re.UNEXPECTED_ERROR);
    return t;
  }
}
function mc(e, t) {
  return sn(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function gc(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function hc(e, t, n = !1) {
  let a = null;
  const r = t.root;
  let l = bc(t, n);
  for (; l != null; ) {
    const s = e;
    if (e.mode === "composition" && (a = s.__getInstance(l)), a != null || r === l)
      break;
    l = l.parent;
  }
  return a;
}
function bc(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function vc(e, t, n) {
  let a = null;
  Kn(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, a = ss();
      const r = n;
      r[Gn] && r[Gn](a), a.on("*", Ha);
    }
  }, t), Lo(() => {
    const r = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (a && a.off("*", Ha), r[Hn] && r[Hn](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const l = r[Yn];
    l && (l(), delete r[Yn]);
  }, t);
}
nc();
js(Cs);
zs(rr);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Pt();
  e.__INTLIFY__ = !0, ks(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Ec = "components.authentication";
function yc() {
  let e = null;
  try {
    const t = dn();
    e = (n, a) => t.t(n, a ?? {});
  } catch {
    e = null;
  }
  return q(() => {
    if (!e)
      return Mo;
    const t = (a, r) => e(`${Ec}.${a}`, r), n = { provider: "{{provider}}" };
    return {
      sign_up: {
        email_label: t("sign_up.email_label"),
        password_label: t("sign_up.password_label"),
        email_input_placeholder: t("sign_up.email_input_placeholder"),
        password_input_placeholder: t("sign_up.password_input_placeholder"),
        button_label: t("sign_up.button_label"),
        loading_button_label: t("sign_up.loading_button_label"),
        social_provider_text: t("sign_up.social_provider_text", n),
        link_text: t("sign_up.link_text"),
        confirmation_text: t("sign_up.confirmation_text")
      },
      sign_in: {
        email_label: t("sign_in.email_label"),
        password_label: t("sign_in.password_label"),
        email_input_placeholder: t("sign_in.email_input_placeholder"),
        password_input_placeholder: t("sign_in.password_input_placeholder"),
        button_label: t("sign_in.button_label"),
        loading_button_label: t("sign_in.loading_button_label"),
        social_provider_text: t("sign_in.social_provider_text", n),
        link_text: t("sign_in.link_text")
      },
      magic_link: {
        email_input_label: t("magic_link.email_input_label"),
        email_input_placeholder: t("magic_link.email_input_placeholder"),
        button_label: t("magic_link.button_label"),
        loading_button_label: t("magic_link.loading_button_label"),
        link_text: t("magic_link.link_text"),
        confirmation_text: t("magic_link.confirmation_text")
      },
      forgotten_password: {
        email_label: t("forgotten_password.email_label"),
        password_label: t("forgotten_password.password_label"),
        email_input_placeholder: t("forgotten_password.email_input_placeholder"),
        button_label: t("forgotten_password.button_label"),
        loading_button_label: t("forgotten_password.loading_button_label"),
        link_text: t("forgotten_password.link_text"),
        confirmation_text: t("forgotten_password.confirmation_text")
      },
      update_password: {
        password_label: t("update_password.password_label"),
        password_input_placeholder: t("update_password.password_input_placeholder"),
        button_label: t("update_password.button_label"),
        loading_button_label: t("update_password.loading_button_label"),
        confirmation_text: t("update_password.confirmation_text")
      },
      verify_otp: {
        email_input_label: t("verify_otp.email_input_label"),
        email_input_placeholder: t("verify_otp.email_input_placeholder"),
        phone_input_label: t("verify_otp.phone_input_label"),
        phone_input_placeholder: t("verify_otp.phone_input_placeholder"),
        token_input_label: t("verify_otp.token_input_label"),
        token_input_placeholder: t("verify_otp.token_input_placeholder"),
        button_label: t("verify_otp.button_label"),
        loading_button_label: t("verify_otp.loading_button_label")
      }
    };
  });
}
const Cc = /* @__PURE__ */ ne({
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
    const n = e, a = t, r = z(n.view), l = (u) => {
      a("update:view", u), r.value = u;
    };
    Ka(je, {
      authView: r,
      setAuthView: l
    });
    const s = yc(), c = q(() => {
      var p;
      const u = qt(s.value), _ = qt((p = n == null ? void 0 : n.localization) == null ? void 0 : p.variables);
      return Fn(u, _ ?? {});
    }), i = q(() => r.value === "sign_in" || r.value === "sign_up" || r.value === "magic_link"), f = q(() => {
      var p, d;
      const u = qt((p = n.appearance) == null ? void 0 : p.theme), _ = qt((d = n.appearance) == null ? void 0 : d.variables);
      return Fn(
        (u == null ? void 0 : u.default) ?? {},
        (u == null ? void 0 : u[n.theme]) ?? {},
        (_ == null ? void 0 : _.default) ?? {},
        (_ == null ? void 0 : _[n == null ? void 0 : n.theme]) ?? {}
      );
    });
    return Vn({ theme: f.value }), kt(
      () => [n.appearance, n.theme],
      () => {
        Vn({ theme: f.value });
      },
      { deep: !0 }
    ), kt(
      () => n.view,
      (u) => {
        const { data: _ } = n.supabaseClient.auth.onAuthStateChange(
          (p) => {
            p === "PASSWORD_RECOVERY" ? l("update_password") : p === "USER_UPDATED" && l("sign_in");
          }
        );
        return l(u), () => _.subscription.unsubscribe();
      },
      { deep: !0 }
    ), (u, _) => i.value ? (S(), $(dl, {
      key: 0,
      direction: "horizontal",
      gap: "small",
      theme: n.theme,
      appearance: u.appearance
    }, {
      default: k(() => [
        i.value ? (S(), $(Ui, {
          key: 0,
          supabaseClient: u.supabaseClient,
          appearance: u.appearance,
          providers: u.providers,
          providerScopes: u.providerScopes,
          queryParams: u.queryParams,
          socialLayout: u.socialLayout,
          redirectTo: u.redirectTo,
          useOAuthPopup: u.useOAuthPopup,
          popupWindowFeatures: u.popupWindowFeatures,
          onlyThirdPartyProviders: u.onlyThirdPartyProviders,
          i18n: c.value
        }, null, 8, ["supabaseClient", "appearance", "providers", "providerScopes", "queryParams", "socialLayout", "redirectTo", "useOAuthPopup", "popupWindowFeatures", "onlyThirdPartyProviders", "i18n"])) : Y("", !0),
        u.onlyThirdPartyProviders ? Y("", !0) : (S(), j(et, { key: 1 }, [
          r.value === "sign_in" || r.value === "sign_up" ? (S(), $(hl, {
            key: 0,
            supabaseClient: u.supabaseClient,
            appearance: u.appearance,
            redirectTo: u.redirectTo,
            magicLink: u.magicLink,
            showLinks: u.showLinks,
            i18n: c.value,
            additionalData: u.additionalData,
            options: u.options,
            "onAuth:submit": _[0] || (_[0] = (p) => a("auth:submit", p)),
            "onAuth:error": _[1] || (_[1] = (p) => a("auth:error", p))
          }, null, 8, ["supabaseClient", "appearance", "redirectTo", "magicLink", "showLinks", "i18n", "additionalData", "options"])) : Y("", !0),
          r.value === "magic_link" ? (S(), $(Wi, {
            key: 1,
            supabaseClient: u.supabaseClient,
            appearance: u.appearance,
            redirectTo: u.redirectTo,
            showLinks: u.showLinks,
            i18n: c.value
          }, null, 8, ["supabaseClient", "appearance", "redirectTo", "showLinks", "i18n"])) : Y("", !0)
        ], 64))
      ]),
      _: 1
    }, 8, ["theme", "appearance"])) : (S(), j(et, { key: 1 }, [
      r.value === "forgotten_password" ? (S(), $(zi, {
        key: 0,
        supabaseClient: u.supabaseClient,
        appearance: u.appearance,
        redirectTo: u.redirectTo,
        showLinks: u.showLinks,
        i18n: c.value,
        options: u.options
      }, null, 8, ["supabaseClient", "appearance", "redirectTo", "showLinks", "i18n", "options"])) : Y("", !0),
      r.value === "update_password" ? (S(), $(Hi, {
        key: 1,
        supabaseClient: u.supabaseClient,
        appearance: u.appearance,
        i18n: c.value
      }, null, 8, ["supabaseClient", "appearance", "i18n"])) : Y("", !0),
      r.value === "verify_otp" ? (S(), $(Zi, {
        key: 2,
        supabaseClient: u.supabaseClient,
        appearance: u.appearance,
        otpType: u.otpType,
        i18n: c.value
      }, null, 8, ["supabaseClient", "appearance", "otpType", "i18n"])) : Y("", !0),
      r.value === "anonymous_sign_in" ? (S(), $(Ji, {
        key: 3,
        supabaseClient: u.supabaseClient,
        appearance: u.appearance,
        i18n: c.value,
        anonymouslyCredentials: u.anonymouslyCredentials
      }, null, 8, ["supabaseClient", "appearance", "i18n", "anonymouslyCredentials"])) : Y("", !0)
    ], 64));
  }
}), Sc = {
  install(e) {
    e.component("Auth", Cc);
  }
};
export {
  Cc as Auth,
  zi as ForgottenPassword,
  Wi as MagicLink,
  Hi as UpdatePassword,
  Nc as UserContextProvider,
  pl as UserContextProviderKey,
  Sc as default,
  ut as injectStrict,
  Jn as useSupabaseUser
};
