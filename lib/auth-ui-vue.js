import { defineComponent as W, useAttrs as ye, computed as j, openBlock as y, createBlock as L, resolveDynamicComponent as we, mergeProps as Ce, unref as v, withCtx as $, renderSlot as ue, createElementBlock as x, normalizeClass as Sn, normalizeStyle as kn, inject as $n, ref as z, watch as dt, withModifiers as Y, createVNode as A, createElementVNode as B, createTextVNode as T, toDisplayString as M, createCommentVNode as P, createStaticVNode as Ne, onMounted as Jt, provide as Xt, h as Ln, Fragment as Fe, renderList as Bn } from "vue";
var Z = {
  SIGN_IN: "sign_in",
  SIGN_UP: "sign_up",
  FORGOTTEN_PASSWORD: "forgotten_password",
  MAGIC_LINK: "magic_link",
  UPDATE_PASSWORD: "update_password",
  VERIFY_OTP: "verify_otp"
}, Tn = "supabase-auth-ui", Mn = {
  // interfaces
  ROOT: "root",
  SIGN_IN: Z.SIGN_IN,
  SIGN_UP: Z.SIGN_UP,
  FORGOTTEN_PASSWORD: Z.FORGOTTEN_PASSWORD,
  MAGIC_LINK: Z.MAGIC_LINK,
  UPDATE_PASSWORD: Z.UPDATE_PASSWORD,
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
function Se(a, t, n) {
  var r, o;
  const l = [], m = Mn[a];
  return l.push(
    n != null && n.prependedClassName ? (n == null ? void 0 : n.prependedClassName) + "_" + m : Tn + "_" + m
  ), (r = n == null ? void 0 : n.className) != null && r[a] && l.push((o = n == null ? void 0 : n.className) == null ? void 0 : o[a]), ((n == null ? void 0 : n.extend) === void 0 || (n == null ? void 0 : n.extend) === !0) && l.push(t), l;
}
function ft(a, t) {
  let n;
  if (a && t && typeof a == "object" && typeof t == "object") {
    if (Array.isArray(t))
      for (n = 0; n < t.length; n++)
        a[n] = ft(a[n], t[n]);
    else
      for (n in t)
        a[n] = ft(a[n], t[n]);
    return a;
  }
  return t;
}
function ht(a, ...t) {
  let n = t.length;
  for (let r = 0; r < n; r++)
    a = ft(a, t[r]);
  return a;
}
function xn(a, t) {
  return a.replace(
    /{{(\w+)}}/g,
    (n, r) => t.hasOwnProperty(r) ? t[r] : n
  );
}
var In = {
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
}, Ht, E = "colors", G = "sizes", w = "space", An = { gap: w, gridGap: w, columnGap: w, gridColumnGap: w, rowGap: w, gridRowGap: w, inset: w, insetBlock: w, insetBlockEnd: w, insetBlockStart: w, insetInline: w, insetInlineEnd: w, insetInlineStart: w, margin: w, marginTop: w, marginRight: w, marginBottom: w, marginLeft: w, marginBlock: w, marginBlockEnd: w, marginBlockStart: w, marginInline: w, marginInlineEnd: w, marginInlineStart: w, padding: w, paddingTop: w, paddingRight: w, paddingBottom: w, paddingLeft: w, paddingBlock: w, paddingBlockEnd: w, paddingBlockStart: w, paddingInline: w, paddingInlineEnd: w, paddingInlineStart: w, top: w, right: w, bottom: w, left: w, scrollMargin: w, scrollMarginTop: w, scrollMarginRight: w, scrollMarginBottom: w, scrollMarginLeft: w, scrollMarginX: w, scrollMarginY: w, scrollMarginBlock: w, scrollMarginBlockEnd: w, scrollMarginBlockStart: w, scrollMarginInline: w, scrollMarginInlineEnd: w, scrollMarginInlineStart: w, scrollPadding: w, scrollPaddingTop: w, scrollPaddingRight: w, scrollPaddingBottom: w, scrollPaddingLeft: w, scrollPaddingX: w, scrollPaddingY: w, scrollPaddingBlock: w, scrollPaddingBlockEnd: w, scrollPaddingBlockStart: w, scrollPaddingInline: w, scrollPaddingInlineEnd: w, scrollPaddingInlineStart: w, fontSize: "fontSizes", background: E, backgroundColor: E, backgroundImage: E, borderImage: E, border: E, borderBlock: E, borderBlockEnd: E, borderBlockStart: E, borderBottom: E, borderBottomColor: E, borderColor: E, borderInline: E, borderInlineEnd: E, borderInlineStart: E, borderLeft: E, borderLeftColor: E, borderRight: E, borderRightColor: E, borderTop: E, borderTopColor: E, caretColor: E, color: E, columnRuleColor: E, fill: E, outline: E, outlineColor: E, stroke: E, textDecorationColor: E, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: G, minBlockSize: G, maxBlockSize: G, inlineSize: G, minInlineSize: G, maxInlineSize: G, width: G, minWidth: G, maxWidth: G, height: G, minHeight: G, maxHeight: G, flexBasis: G, gridTemplateColumns: G, gridTemplateRows: G, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, zn = (a, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, We = () => {
  const a = /* @__PURE__ */ Object.create(null);
  return (t, n, ...r) => {
    const o = ((l) => JSON.stringify(l, zn))(t);
    return o in a ? a[o] : a[o] = n(t, ...r);
  };
}, Je = Symbol.for("sxs.internal"), vt = (a, t) => Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)), Ut = (a) => {
  for (const t in a)
    return !0;
  return !1;
}, { hasOwnProperty: Pn } = Object.prototype, gt = (a) => a.includes("-") ? a : a.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), En = /\s+(?![^()]*\))/, Ie = (a) => (t) => a(...typeof t == "string" ? String(t).split(En) : [t]), Gt = { appearance: (a) => ({ WebkitAppearance: a, appearance: a }), backfaceVisibility: (a) => ({ WebkitBackfaceVisibility: a, backfaceVisibility: a }), backdropFilter: (a) => ({ WebkitBackdropFilter: a, backdropFilter: a }), backgroundClip: (a) => ({ WebkitBackgroundClip: a, backgroundClip: a }), boxDecorationBreak: (a) => ({ WebkitBoxDecorationBreak: a, boxDecorationBreak: a }), clipPath: (a) => ({ WebkitClipPath: a, clipPath: a }), content: (a) => ({ content: a.includes('"') || a.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(a) ? a : `"${a}"` }), hyphens: (a) => ({ WebkitHyphens: a, hyphens: a }), maskImage: (a) => ({ WebkitMaskImage: a, maskImage: a }), maskSize: (a) => ({ WebkitMaskSize: a, maskSize: a }), tabSize: (a) => ({ MozTabSize: a, tabSize: a }), textSizeAdjust: (a) => ({ WebkitTextSizeAdjust: a, textSizeAdjust: a }), userSelect: (a) => ({ WebkitUserSelect: a, userSelect: a }), marginBlock: Ie((a, t) => ({ marginBlockStart: a, marginBlockEnd: t || a })), marginInline: Ie((a, t) => ({ marginInlineStart: a, marginInlineEnd: t || a })), maxSize: Ie((a, t) => ({ maxBlockSize: a, maxInlineSize: t || a })), minSize: Ie((a, t) => ({ minBlockSize: a, minInlineSize: t || a })), paddingBlock: Ie((a, t) => ({ paddingBlockStart: a, paddingBlockEnd: t || a })), paddingInline: Ie((a, t) => ({ paddingInlineStart: a, paddingInlineEnd: t || a })) }, ut = /([\d.]+)([^]*)/, Vn = (a, t) => a.length ? a.reduce((n, r) => (n.push(...t.map((o) => o.includes("&") ? o.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(o) ? `:is(${r})` : r) : r + " " + o)), n), []) : t, jn = (a, t) => a in Rn && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (n, r, o, l) => r + (o === "stretch" ? `-moz-available${l};${gt(a)}:${r}-webkit-fill-available` : `-moz-fit-content${l};${gt(a)}:${r}fit-content`) + l) : String(t), Rn = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, oe = (a) => a ? a + "-" : "", Qt = (a, t, n) => a.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (r, o, l, m, d) => m == "$" == !!l ? r : (o || m == "--" ? "calc(" : "") + "var(--" + (m === "$" ? oe(t) + (d.includes("$") ? "" : oe(n)) + d.replace(/\$/g, "-") : d) + ")" + (o || m == "--" ? "*" + (o || "") + (l || "1") + ")" : "")), On = /\s*,\s*(?![^()]*\))/, Fn = Object.prototype.toString, Ae = (a, t, n, r, o) => {
  let l, m, d;
  const p = (s, g, h) => {
    let u, c;
    const b = (C) => {
      for (u in C) {
        const I = u.charCodeAt(0) === 64, ie = I && Array.isArray(C[u]) ? C[u] : [C[u]];
        for (c of ie) {
          const F = /[A-Z]/.test(_ = u) ? _ : _.replace(/-[^]/g, (R) => R[1].toUpperCase()), le = typeof c == "object" && c && c.toString === Fn && (!r.utils[F] || !g.length);
          if (F in r.utils && !le) {
            const R = r.utils[F];
            if (R !== m) {
              m = R, b(R(c)), m = null;
              continue;
            }
          } else if (F in Gt) {
            const R = Gt[F];
            if (R !== d) {
              d = R, b(R(c)), d = null;
              continue;
            }
          }
          if (I && (k = u.slice(1) in r.media ? "@media " + r.media[u.slice(1)] : u, u = k.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (R, D, K, ee, H, J) => {
            const ae = ut.test(D), fe = 0.0625 * (ae ? -1 : 1), [he, ze] = ae ? [ee, D] : [D, ee];
            return "(" + (K[0] === "=" ? "" : K[0] === ">" === ae ? "max-" : "min-") + he + ":" + (K[0] !== "=" && K.length === 1 ? ze.replace(ut, (Qe, Pe, Ee) => Number(Pe) + fe * (K === ">" ? 1 : -1) + Ee) : ze) + (H ? ") and (" + (H[0] === ">" ? "min-" : "max-") + he + ":" + (H.length === 1 ? J.replace(ut, (Qe, Pe, Ee) => Number(Pe) + fe * (H === ">" ? -1 : 1) + Ee) : J) : "") + ")";
          })), le) {
            const R = I ? h.concat(u) : [...h], D = I ? [...g] : Vn(g, u.split(On));
            l !== void 0 && o(Zt(...l)), l = void 0, p(c, D, R);
          } else
            l === void 0 && (l = [[], g, h]), u = I || u.charCodeAt(0) !== 36 ? u : `--${oe(r.prefix)}${u.slice(1).replace(/\$/g, "-")}`, c = le ? c : typeof c == "number" ? c && F in Nn ? String(c) + "px" : String(c) : Qt(jn(F, c ?? ""), r.prefix, r.themeMap[F]), l[0].push(`${I ? `${u} ` : `${gt(u)}:`}${c}`);
        }
      }
      var k, _;
    };
    b(s), l !== void 0 && o(Zt(...l)), l = void 0;
  };
  p(a, t, n);
}, Zt = (a, t, n) => `${n.map((r) => `${r}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${a.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, Nn = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, qt = (a) => String.fromCharCode(a + (a > 25 ? 39 : 97)), _e = (a) => ((t) => {
  let n, r = "";
  for (n = Math.abs(t); n > 52; n = n / 52 | 0)
    r = qt(n % 52) + r;
  return qt(n % 52) + r;
})(((t, n) => {
  let r = n.length;
  for (; r; )
    t = 33 * t ^ n.charCodeAt(--r);
  return t;
})(5381, JSON.stringify(a)) >>> 0), Oe = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], Wn = (a) => {
  if (a.href && !a.href.startsWith(location.origin))
    return !1;
  try {
    return !!a.cssRules;
  } catch {
    return !1;
  }
}, Dn = (a) => {
  let t;
  const n = () => {
    const { cssRules: o } = t.sheet;
    return [].map.call(o, (l, m) => {
      const { cssText: d } = l;
      let p = "";
      if (d.startsWith("--sxs"))
        return "";
      if (o[m - 1] && (p = o[m - 1].cssText).startsWith("--sxs")) {
        if (!l.cssRules.length)
          return "";
        for (const s in t.rules)
          if (t.rules[s].group === l)
            return `--sxs{--sxs:${[...t.rules[s].cache].join(" ")}}${d}`;
        return l.cssRules.length ? `${p}${d}` : "";
      }
      return d;
    }).join("");
  }, r = () => {
    if (t) {
      const { rules: d, sheet: p } = t;
      if (!p.deleteRule) {
        for (; Object(Object(p.cssRules)[0]).type === 3; )
          p.cssRules.splice(0, 1);
        p.cssRules = [];
      }
      for (const s in d)
        delete d[s];
    }
    const o = Object(a).styleSheets || [];
    for (const d of o)
      if (Wn(d)) {
        for (let p = 0, s = d.cssRules; s[p]; ++p) {
          const g = Object(s[p]);
          if (g.type !== 1)
            continue;
          const h = Object(s[p + 1]);
          if (h.type !== 4)
            continue;
          ++p;
          const { cssText: u } = g;
          if (!u.startsWith("--sxs"))
            continue;
          const c = u.slice(14, -3).trim().split(/\s+/), b = Oe[c[0]];
          b && (t || (t = { sheet: d, reset: r, rules: {}, toString: n }), t.rules[b] = { group: h, index: p, cache: new Set(c) });
        }
        if (t)
          break;
      }
    if (!t) {
      const d = (p, s) => ({ type: s, cssRules: [], insertRule(g, h) {
        this.cssRules.splice(h, 0, d(g, { import: 3, undefined: 1 }[(g.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return p === "@media{}" ? `@media{${[].map.call(this.cssRules, (g) => g.cssText).join("")}}` : p;
      } });
      t = { sheet: a ? (a.head || a).appendChild(document.createElement("style")).sheet : d("", "text/css"), rules: {}, reset: r, toString: n };
    }
    const { sheet: l, rules: m } = t;
    for (let d = Oe.length - 1; d >= 0; --d) {
      const p = Oe[d];
      if (!m[p]) {
        const s = Oe[d + 1], g = m[s] ? m[s].index : l.cssRules.length;
        l.insertRule("@media{}", g), l.insertRule(`--sxs{--sxs:${d}}`, g), m[p] = { group: l.cssRules[g + 1], index: g, cache: /* @__PURE__ */ new Set([d]) };
      }
      Hn(m[p]);
    }
  };
  return r(), t;
}, Hn = (a) => {
  const t = a.group;
  let n = t.cssRules.length;
  a.apply = (r) => {
    try {
      t.insertRule(r, n), ++n;
    } catch {
    }
  };
}, Re = Symbol(), Un = We(), Gn = (a, t) => Un(a, () => (...n) => {
  let r = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const o of n)
    if (o != null)
      if (o[Je]) {
        r.type == null && (r.type = o[Je].type);
        for (const l of o[Je].composers)
          r.composers.add(l);
      } else
        o.constructor !== Object || o.$$typeof ? r.type == null && (r.type = o) : r.composers.add(Zn(o, a));
  return r.type == null && (r.type = "span"), r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]), qn(a, r, t);
}), Zn = ({ variants: a, compoundVariants: t, defaultVariants: n, ...r }, o) => {
  const l = `${oe(o.prefix)}c-${_e(r)}`, m = [], d = [], p = /* @__PURE__ */ Object.create(null), s = [];
  for (const u in n)
    p[u] = String(n[u]);
  if (typeof a == "object" && a)
    for (const u in a) {
      g = p, h = u, Pn.call(g, h) || (p[u] = "undefined");
      const c = a[u];
      for (const b in c) {
        const C = { [u]: String(b) };
        String(b) === "undefined" && s.push(u);
        const k = c[b], _ = [C, k, !Ut(k)];
        m.push(_);
      }
    }
  var g, h;
  if (typeof t == "object" && t)
    for (const u of t) {
      let { css: c, ...b } = u;
      c = typeof c == "object" && c || {};
      for (const k in b)
        b[k] = String(b[k]);
      const C = [b, c, !Ut(c)];
      d.push(C);
    }
  return [l, r, m, d, p, s];
}, qn = (a, t, n) => {
  const [r, o, l, m] = Yn(t.composers), d = typeof t.type == "function" || t.type.$$typeof ? ((h) => {
    function u() {
      for (let c = 0; c < u[Re].length; c++) {
        const [b, C] = u[Re][c];
        h.rules[b].apply(C);
      }
      return u[Re] = [], null;
    }
    return u[Re] = [], u.rules = {}, Oe.forEach((c) => u.rules[c] = { apply: (b) => u[Re].push([c, b]) }), u;
  })(n) : null, p = (d || n).rules, s = `.${r}${o.length > 1 ? `:where(.${o.slice(1).join(".")})` : ""}`, g = (h) => {
    h = typeof h == "object" && h || Kn;
    const { css: u, ...c } = h, b = {};
    for (const _ in l)
      if (delete c[_], _ in h) {
        let I = h[_];
        typeof I == "object" && I ? b[_] = { "@initial": l[_], ...I } : (I = String(I), b[_] = I !== "undefined" || m.has(_) ? I : l[_]);
      } else
        b[_] = l[_];
    const C = /* @__PURE__ */ new Set([...o]);
    for (const [_, I, ie, F] of t.composers) {
      n.rules.styled.cache.has(_) || (n.rules.styled.cache.add(_), Ae(I, [`.${_}`], [], a, (D) => {
        p.styled.apply(D);
      }));
      const le = Yt(ie, b, a.media), R = Yt(F, b, a.media, !0);
      for (const D of le)
        if (D !== void 0)
          for (const [K, ee, H] of D) {
            const J = `${_}-${_e(ee)}-${K}`;
            C.add(J);
            const ae = (H ? n.rules.resonevar : n.rules.onevar).cache, fe = H ? p.resonevar : p.onevar;
            ae.has(J) || (ae.add(J), Ae(ee, [`.${J}`], [], a, (he) => {
              fe.apply(he);
            }));
          }
      for (const D of R)
        if (D !== void 0)
          for (const [K, ee] of D) {
            const H = `${_}-${_e(ee)}-${K}`;
            C.add(H), n.rules.allvar.cache.has(H) || (n.rules.allvar.cache.add(H), Ae(ee, [`.${H}`], [], a, (J) => {
              p.allvar.apply(J);
            }));
          }
    }
    if (typeof u == "object" && u) {
      const _ = `${r}-i${_e(u)}-css`;
      C.add(_), n.rules.inline.cache.has(_) || (n.rules.inline.cache.add(_), Ae(u, [`.${_}`], [], a, (I) => {
        p.inline.apply(I);
      }));
    }
    for (const _ of String(h.className || "").trim().split(/\s+/))
      _ && C.add(_);
    const k = c.className = [...C].join(" ");
    return { type: t.type, className: k, selector: s, props: c, toString: () => k, deferredInjector: d };
  };
  return vt(g, { className: r, selector: s, [Je]: t, toString: () => (n.rules.styled.cache.has(r) || g(), r) });
}, Yn = (a) => {
  let t = "";
  const n = [], r = {}, o = [];
  for (const [l, , , , m, d] of a) {
    t === "" && (t = l), n.push(l), o.push(...d);
    for (const p in m) {
      const s = m[p];
      (r[p] === void 0 || s !== "undefined" || d.includes(s)) && (r[p] = s);
    }
  }
  return [t, n, r, new Set(o)];
}, Yt = (a, t, n, r) => {
  const o = [];
  e:
    for (let [l, m, d] of a) {
      if (d)
        continue;
      let p, s = 0, g = !1;
      for (p in l) {
        const h = l[p];
        let u = t[p];
        if (u !== h) {
          if (typeof u != "object" || !u)
            continue e;
          {
            let c, b, C = 0;
            for (const k in u) {
              if (h === String(u[k])) {
                if (k !== "@initial") {
                  const _ = k.slice(1);
                  (b = b || []).push(_ in n ? n[_] : k.replace(/^@media ?/, "")), g = !0;
                }
                s += C, c = !0;
              }
              ++C;
            }
            if (b && b.length && (m = { ["@media " + b.join(", ")]: m }), !c)
              continue e;
          }
        }
      }
      (o[s] = o[s] || []).push([r ? "cv" : `${p}-${l[p]}`, m, g]);
    }
  return o;
}, Kn = {}, Jn = We(), Xn = (a, t) => Jn(a, () => (...n) => {
  const r = () => {
    for (let o of n) {
      o = typeof o == "object" && o || {};
      let l = _e(o);
      if (!t.rules.global.cache.has(l)) {
        if (t.rules.global.cache.add(l), "@import" in o) {
          let m = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let d of [].concat(o["@import"]))
            d = d.includes('"') || d.includes("'") ? d : `"${d}"`, t.sheet.insertRule(`@import ${d};`, m++);
          delete o["@import"];
        }
        Ae(o, [], [], a, (m) => {
          t.rules.global.apply(m);
        });
      }
    }
    return "";
  };
  return vt(r, { toString: r });
}), Qn = We(), er = (a, t) => Qn(a, () => (n) => {
  const r = `${oe(a.prefix)}k-${_e(n)}`, o = () => {
    if (!t.rules.global.cache.has(r)) {
      t.rules.global.cache.add(r);
      const l = [];
      Ae(n, [], [], a, (d) => l.push(d));
      const m = `@keyframes ${r}{${l.join("")}}`;
      t.rules.global.apply(m);
    }
    return r;
  };
  return vt(o, { get name() {
    return o();
  }, toString: o });
}), tr = class {
  constructor(a, t, n, r) {
    this.token = a == null ? "" : String(a), this.value = t == null ? "" : String(t), this.scale = n == null ? "" : String(n), this.prefix = r == null ? "" : String(r);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + oe(this.prefix) + oe(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, ar = We(), nr = (a, t) => ar(a, () => (n, r) => {
  r = typeof n == "object" && n || Object(r);
  const o = `.${n = (n = typeof n == "string" ? n : "") || `${oe(a.prefix)}t-${_e(r)}`}`, l = {}, m = [];
  for (const p in r) {
    l[p] = {};
    for (const s in r[p]) {
      const g = `--${oe(a.prefix)}${p}-${s}`, h = Qt(String(r[p][s]), a.prefix, p);
      l[p][s] = new tr(s, h, p, a.prefix), m.push(`${g}:${h}`);
    }
  }
  const d = () => {
    if (m.length && !t.rules.themed.cache.has(n)) {
      t.rules.themed.cache.add(n);
      const p = `${r === a.theme ? ":root," : ""}.${n}{${m.join(";")}}`;
      t.rules.themed.apply(p);
    }
    return n;
  };
  return { ...l, get className() {
    return d();
  }, selector: o, toString: d };
}), rr = We(), mt = (a) => {
  let t = !1;
  const n = rr(a, (r) => {
    t = !0;
    const o = "prefix" in (r = typeof r == "object" && r || {}) ? String(r.prefix) : "", l = typeof r.media == "object" && r.media || {}, m = typeof r.root == "object" ? r.root || null : globalThis.document || null, d = typeof r.theme == "object" && r.theme || {}, p = { prefix: o, media: l, theme: d, themeMap: typeof r.themeMap == "object" && r.themeMap || { ...An }, utils: typeof r.utils == "object" && r.utils || {} }, s = Dn(m), g = { css: Gn(p, s), globalCss: Xn(p, s), keyframes: er(p, s), createTheme: nr(p, s), reset() {
      s.reset(), g.theme.toString();
    }, theme: {}, sheet: s, config: p, prefix: o, getCssText: s.toString, toString: s.toString };
    return String(g.theme = g.createTheme(d)), g;
  });
  return t || n.reset(), n;
}, ea = () => Ht || (Ht = mt()), or = (...a) => ea().createTheme(...a), ke = (...a) => ea().css(...a), Ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ir(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Xe = { exports: {} };
Xe.exports;
(function(a, t) {
  var n = 200, r = "__lodash_hash_undefined__", o = 9007199254740991, l = "[object Arguments]", m = "[object Array]", d = "[object Boolean]", p = "[object Date]", s = "[object Error]", g = "[object Function]", h = "[object GeneratorFunction]", u = "[object Map]", c = "[object Number]", b = "[object Object]", C = "[object Promise]", k = "[object RegExp]", _ = "[object Set]", I = "[object String]", ie = "[object Symbol]", F = "[object WeakMap]", le = "[object ArrayBuffer]", R = "[object DataView]", D = "[object Float32Array]", K = "[object Float64Array]", ee = "[object Int8Array]", H = "[object Int16Array]", J = "[object Int32Array]", ae = "[object Uint8Array]", fe = "[object Uint8ClampedArray]", he = "[object Uint16Array]", ze = "[object Uint32Array]", Qe = /[\\^$.*+?()[\]{}|]/g, Pe = /\w*$/, Ee = /^\[object .+?Constructor\]$/, ta = /^(?:0|[1-9]\d*)$/, V = {};
  V[l] = V[m] = V[le] = V[R] = V[d] = V[p] = V[D] = V[K] = V[ee] = V[H] = V[J] = V[u] = V[c] = V[b] = V[k] = V[_] = V[I] = V[ie] = V[ae] = V[fe] = V[he] = V[ze] = !0, V[s] = V[g] = V[F] = !1;
  var aa = typeof Ye == "object" && Ye && Ye.Object === Object && Ye, na = typeof self == "object" && self && self.Object === Object && self, ne = aa || na || Function("return this")(), _t = t && !t.nodeType && t, yt = _t && !0 && a && !a.nodeType && a, ra = yt && yt.exports === _t;
  function oa(e, i) {
    return e.set(i[0], i[1]), e;
  }
  function ia(e, i) {
    return e.add(i), e;
  }
  function la(e, i) {
    for (var f = -1, S = e ? e.length : 0; ++f < S && i(e[f], f, e) !== !1; )
      ;
    return e;
  }
  function sa(e, i) {
    for (var f = -1, S = i.length, N = e.length; ++f < S; )
      e[N + f] = i[f];
    return e;
  }
  function wt(e, i, f, S) {
    var N = -1, U = e ? e.length : 0;
    for (S && U && (f = e[++N]); ++N < U; )
      f = i(f, e[N], N, e);
    return f;
  }
  function ca(e, i) {
    for (var f = -1, S = Array(e); ++f < e; )
      S[f] = i(f);
    return S;
  }
  function pa(e, i) {
    return e == null ? void 0 : e[i];
  }
  function Ct(e) {
    var i = !1;
    if (e != null && typeof e.toString != "function")
      try {
        i = !!(e + "");
      } catch {
      }
    return i;
  }
  function St(e) {
    var i = -1, f = Array(e.size);
    return e.forEach(function(S, N) {
      f[++i] = [N, S];
    }), f;
  }
  function et(e, i) {
    return function(f) {
      return e(i(f));
    };
  }
  function kt(e) {
    var i = -1, f = Array(e.size);
    return e.forEach(function(S) {
      f[++i] = S;
    }), f;
  }
  var ua = Array.prototype, da = Function.prototype, De = Object.prototype, tt = ne["__core-js_shared__"], $t = function() {
    var e = /[^.]+$/.exec(tt && tt.keys && tt.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }(), Lt = da.toString, se = De.hasOwnProperty, He = De.toString, fa = RegExp(
    "^" + Lt.call(se).replace(Qe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Bt = ra ? ne.Buffer : void 0, Tt = ne.Symbol, Mt = ne.Uint8Array, ha = et(Object.getPrototypeOf, Object), ga = Object.create, ma = De.propertyIsEnumerable, va = ua.splice, xt = Object.getOwnPropertySymbols, ba = Bt ? Bt.isBuffer : void 0, _a = et(Object.keys, Object), at = Me(ne, "DataView"), Ve = Me(ne, "Map"), nt = Me(ne, "Promise"), rt = Me(ne, "Set"), ot = Me(ne, "WeakMap"), je = Me(Object, "create"), ya = ve(at), wa = ve(Ve), Ca = ve(nt), Sa = ve(rt), ka = ve(ot), It = Tt ? Tt.prototype : void 0, At = It ? It.valueOf : void 0;
  function ge(e) {
    var i = -1, f = e ? e.length : 0;
    for (this.clear(); ++i < f; ) {
      var S = e[i];
      this.set(S[0], S[1]);
    }
  }
  function $a() {
    this.__data__ = je ? je(null) : {};
  }
  function La(e) {
    return this.has(e) && delete this.__data__[e];
  }
  function Ba(e) {
    var i = this.__data__;
    if (je) {
      var f = i[e];
      return f === r ? void 0 : f;
    }
    return se.call(i, e) ? i[e] : void 0;
  }
  function Ta(e) {
    var i = this.__data__;
    return je ? i[e] !== void 0 : se.call(i, e);
  }
  function Ma(e, i) {
    var f = this.__data__;
    return f[e] = je && i === void 0 ? r : i, this;
  }
  ge.prototype.clear = $a, ge.prototype.delete = La, ge.prototype.get = Ba, ge.prototype.has = Ta, ge.prototype.set = Ma;
  function re(e) {
    var i = -1, f = e ? e.length : 0;
    for (this.clear(); ++i < f; ) {
      var S = e[i];
      this.set(S[0], S[1]);
    }
  }
  function xa() {
    this.__data__ = [];
  }
  function Ia(e) {
    var i = this.__data__, f = Ue(i, e);
    if (f < 0)
      return !1;
    var S = i.length - 1;
    return f == S ? i.pop() : va.call(i, f, 1), !0;
  }
  function Aa(e) {
    var i = this.__data__, f = Ue(i, e);
    return f < 0 ? void 0 : i[f][1];
  }
  function za(e) {
    return Ue(this.__data__, e) > -1;
  }
  function Pa(e, i) {
    var f = this.__data__, S = Ue(f, e);
    return S < 0 ? f.push([e, i]) : f[S][1] = i, this;
  }
  re.prototype.clear = xa, re.prototype.delete = Ia, re.prototype.get = Aa, re.prototype.has = za, re.prototype.set = Pa;
  function Be(e) {
    var i = -1, f = e ? e.length : 0;
    for (this.clear(); ++i < f; ) {
      var S = e[i];
      this.set(S[0], S[1]);
    }
  }
  function Ea() {
    this.__data__ = {
      hash: new ge(),
      map: new (Ve || re)(),
      string: new ge()
    };
  }
  function Va(e) {
    return Ge(this, e).delete(e);
  }
  function ja(e) {
    return Ge(this, e).get(e);
  }
  function Ra(e) {
    return Ge(this, e).has(e);
  }
  function Oa(e, i) {
    return Ge(this, e).set(e, i), this;
  }
  Be.prototype.clear = Ea, Be.prototype.delete = Va, Be.prototype.get = ja, Be.prototype.has = Ra, Be.prototype.set = Oa;
  function Te(e) {
    this.__data__ = new re(e);
  }
  function Fa() {
    this.__data__ = new re();
  }
  function Na(e) {
    return this.__data__.delete(e);
  }
  function Wa(e) {
    return this.__data__.get(e);
  }
  function Da(e) {
    return this.__data__.has(e);
  }
  function Ha(e, i) {
    var f = this.__data__;
    if (f instanceof re) {
      var S = f.__data__;
      if (!Ve || S.length < n - 1)
        return S.push([e, i]), this;
      f = this.__data__ = new Be(S);
    }
    return f.set(e, i), this;
  }
  Te.prototype.clear = Fa, Te.prototype.delete = Na, Te.prototype.get = Wa, Te.prototype.has = Da, Te.prototype.set = Ha;
  function Ua(e, i) {
    var f = st(e) || mn(e) ? ca(e.length, String) : [], S = f.length, N = !!S;
    for (var U in e)
      (i || se.call(e, U)) && !(N && (U == "length" || dn(U, S))) && f.push(U);
    return f;
  }
  function zt(e, i, f) {
    var S = e[i];
    (!(se.call(e, i) && jt(S, f)) || f === void 0 && !(i in e)) && (e[i] = f);
  }
  function Ue(e, i) {
    for (var f = e.length; f--; )
      if (jt(e[f][0], i))
        return f;
    return -1;
  }
  function Ga(e, i) {
    return e && Pt(i, ct(i), e);
  }
  function it(e, i, f, S, N, U, X) {
    var q;
    if (S && (q = U ? S(e, N, U, X) : S(e)), q !== void 0)
      return q;
    if (!Ze(e))
      return e;
    var Ft = st(e);
    if (Ft) {
      if (q = cn(e), !i)
        return on(e, q);
    } else {
      var xe = me(e), Nt = xe == g || xe == h;
      if (bn(e))
        return Xa(e, i);
      if (xe == b || xe == l || Nt && !U) {
        if (Ct(e))
          return U ? e : {};
        if (q = pn(Nt ? {} : e), !i)
          return ln(e, Ga(q, e));
      } else {
        if (!V[xe])
          return U ? e : {};
        q = un(e, xe, it, i);
      }
    }
    X || (X = new Te());
    var Wt = X.get(e);
    if (Wt)
      return Wt;
    if (X.set(e, q), !Ft)
      var Dt = f ? sn(e) : ct(e);
    return la(Dt || e, function(pt, qe) {
      Dt && (qe = pt, pt = e[qe]), zt(q, qe, it(pt, i, f, S, qe, e, X));
    }), q;
  }
  function Za(e) {
    return Ze(e) ? ga(e) : {};
  }
  function qa(e, i, f) {
    var S = i(e);
    return st(e) ? S : sa(S, f(e));
  }
  function Ya(e) {
    return He.call(e);
  }
  function Ka(e) {
    if (!Ze(e) || hn(e))
      return !1;
    var i = Ot(e) || Ct(e) ? fa : Ee;
    return i.test(ve(e));
  }
  function Ja(e) {
    if (!Vt(e))
      return _a(e);
    var i = [];
    for (var f in Object(e))
      se.call(e, f) && f != "constructor" && i.push(f);
    return i;
  }
  function Xa(e, i) {
    if (i)
      return e.slice();
    var f = new e.constructor(e.length);
    return e.copy(f), f;
  }
  function lt(e) {
    var i = new e.constructor(e.byteLength);
    return new Mt(i).set(new Mt(e)), i;
  }
  function Qa(e, i) {
    var f = i ? lt(e.buffer) : e.buffer;
    return new e.constructor(f, e.byteOffset, e.byteLength);
  }
  function en(e, i, f) {
    var S = i ? f(St(e), !0) : St(e);
    return wt(S, oa, new e.constructor());
  }
  function tn(e) {
    var i = new e.constructor(e.source, Pe.exec(e));
    return i.lastIndex = e.lastIndex, i;
  }
  function an(e, i, f) {
    var S = i ? f(kt(e), !0) : kt(e);
    return wt(S, ia, new e.constructor());
  }
  function nn(e) {
    return At ? Object(At.call(e)) : {};
  }
  function rn(e, i) {
    var f = i ? lt(e.buffer) : e.buffer;
    return new e.constructor(f, e.byteOffset, e.length);
  }
  function on(e, i) {
    var f = -1, S = e.length;
    for (i || (i = Array(S)); ++f < S; )
      i[f] = e[f];
    return i;
  }
  function Pt(e, i, f, S) {
    f || (f = {});
    for (var N = -1, U = i.length; ++N < U; ) {
      var X = i[N], q = S ? S(f[X], e[X], X, f, e) : void 0;
      zt(f, X, q === void 0 ? e[X] : q);
    }
    return f;
  }
  function ln(e, i) {
    return Pt(e, Et(e), i);
  }
  function sn(e) {
    return qa(e, ct, Et);
  }
  function Ge(e, i) {
    var f = e.__data__;
    return fn(i) ? f[typeof i == "string" ? "string" : "hash"] : f.map;
  }
  function Me(e, i) {
    var f = pa(e, i);
    return Ka(f) ? f : void 0;
  }
  var Et = xt ? et(xt, Object) : wn, me = Ya;
  (at && me(new at(new ArrayBuffer(1))) != R || Ve && me(new Ve()) != u || nt && me(nt.resolve()) != C || rt && me(new rt()) != _ || ot && me(new ot()) != F) && (me = function(e) {
    var i = He.call(e), f = i == b ? e.constructor : void 0, S = f ? ve(f) : void 0;
    if (S)
      switch (S) {
        case ya:
          return R;
        case wa:
          return u;
        case Ca:
          return C;
        case Sa:
          return _;
        case ka:
          return F;
      }
    return i;
  });
  function cn(e) {
    var i = e.length, f = e.constructor(i);
    return i && typeof e[0] == "string" && se.call(e, "index") && (f.index = e.index, f.input = e.input), f;
  }
  function pn(e) {
    return typeof e.constructor == "function" && !Vt(e) ? Za(ha(e)) : {};
  }
  function un(e, i, f, S) {
    var N = e.constructor;
    switch (i) {
      case le:
        return lt(e);
      case d:
      case p:
        return new N(+e);
      case R:
        return Qa(e, S);
      case D:
      case K:
      case ee:
      case H:
      case J:
      case ae:
      case fe:
      case he:
      case ze:
        return rn(e, S);
      case u:
        return en(e, S, f);
      case c:
      case I:
        return new N(e);
      case k:
        return tn(e);
      case _:
        return an(e, S, f);
      case ie:
        return nn(e);
    }
  }
  function dn(e, i) {
    return i = i ?? o, !!i && (typeof e == "number" || ta.test(e)) && e > -1 && e % 1 == 0 && e < i;
  }
  function fn(e) {
    var i = typeof e;
    return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? e !== "__proto__" : e === null;
  }
  function hn(e) {
    return !!$t && $t in e;
  }
  function Vt(e) {
    var i = e && e.constructor, f = typeof i == "function" && i.prototype || De;
    return e === f;
  }
  function ve(e) {
    if (e != null) {
      try {
        return Lt.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  function gn(e) {
    return it(e, !0, !0);
  }
  function jt(e, i) {
    return e === i || e !== e && i !== i;
  }
  function mn(e) {
    return vn(e) && se.call(e, "callee") && (!ma.call(e, "callee") || He.call(e) == l);
  }
  var st = Array.isArray;
  function Rt(e) {
    return e != null && _n(e.length) && !Ot(e);
  }
  function vn(e) {
    return yn(e) && Rt(e);
  }
  var bn = ba || Cn;
  function Ot(e) {
    var i = Ze(e) ? He.call(e) : "";
    return i == g || i == h;
  }
  function _n(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= o;
  }
  function Ze(e) {
    var i = typeof e;
    return !!e && (i == "object" || i == "function");
  }
  function yn(e) {
    return !!e && typeof e == "object";
  }
  function ct(e) {
    return Rt(e) ? Ua(e) : Ja(e);
  }
  function wn() {
    return [];
  }
  function Cn() {
    return !1;
  }
  a.exports = gn;
})(Xe, Xe.exports);
var lr = Xe.exports;
const Ke = /* @__PURE__ */ ir(lr), de = Symbol("AuthView"), sr = Symbol("UserContextProvider"), cr = /* @__PURE__ */ W({
  __name: "SocialAuthContainer",
  props: {
    theme: {},
    className: {},
    appearance: {}
  },
  setup(a) {
    const t = a, n = ye(), r = j(() => {
      var o, l, m, d;
      return t.theme !== "default" ? or(
        ht(
          (l = (o = t.appearance) == null ? void 0 : o.theme) == null ? void 0 : l[t.theme],
          ((d = (m = t.appearance) == null ? void 0 : m.variables) == null ? void 0 : d[t.theme]) ?? {}
        )
      ).className : "";
    });
    return (o, l) => (y(), L(we("div"), Ce(v(n), { class: r.value }), {
      default: $(() => [
        ue(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), be = /* @__PURE__ */ W({
  __name: "Anchor",
  props: {
    appearance: {}
  },
  setup(a) {
    const t = ke({
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
    }), n = a, r = ye(), o = j(() => Se(
      "anchor",
      t(),
      n.appearance
    ).join(" "));
    return (l, m) => {
      var d, p;
      return y(), L(we("a"), Ce(v(r), {
        class: o.value,
        style: (p = (d = l.appearance) == null ? void 0 : d.style) == null ? void 0 : p.anchor
      }), {
        default: $(() => [
          ue(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
}), pr = ["disabled"], $e = /* @__PURE__ */ W({
  __name: "Button",
  props: {
    appearance: {},
    icon: {},
    color: { default: "default" },
    loading: { type: Boolean, default: !1 }
  },
  setup(a) {
    const t = ke({
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
    }), n = a, r = ye(), o = j(() => Se(
      "button",
      t({ color: n.color }),
      n.appearance
    ).join(" "));
    return (l, m) => {
      var d, p;
      return y(), x("button", Ce(v(r), {
        class: o.value,
        style: (p = (d = l.appearance) == null ? void 0 : d.style) == null ? void 0 : p.button,
        disabled: l.loading
      }), [
        ue(l.$slots, "icon"),
        ue(l.$slots, "default")
      ], 16, pr);
    };
  }
}), te = /* @__PURE__ */ W({
  __name: "Container",
  props: {
    is: { default: "div" },
    direction: {},
    gap: {},
    appearance: {}
  },
  setup(a) {
    const t = ke({
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
    }), n = a, r = j(() => Se(
      "container",
      t({
        direction: n.direction,
        gap: n.gap
      }),
      n.appearance
    ).join(" "));
    return (o, l) => {
      var m, d;
      return y(), L(we(o.is), {
        class: Sn(r.value),
        style: kn((d = (m = o.appearance) == null ? void 0 : m.style) == null ? void 0 : d.container)
      }, {
        default: $(() => [
          ue(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
}), ur = /* @__PURE__ */ W({
  __name: "Divider",
  props: {
    appearance: {}
  },
  setup(a) {
    const t = ke({
      background: "$dividerBackground",
      display: "block",
      margin: "16px 0",
      height: "1px",
      width: "100%"
    }), n = a, r = ye(), o = j(() => Se(
      "divider",
      t(),
      n.appearance
    ).join(" "));
    return (l, m) => {
      var d, p;
      return y(), L(we("div"), Ce(v(r), {
        class: o.value,
        style: (p = (d = l.appearance) == null ? void 0 : d.style) == null ? void 0 : p.divider
      }), {
        default: $(() => [
          ue(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
}), dr = ["type", "value"], ce = /* @__PURE__ */ W({
  __name: "Input",
  props: {
    type: {},
    appearance: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(a) {
    const t = ke({
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
    }), n = a, r = ye(), o = j(() => Se(
      "input",
      t({
        type: n.type === "password" ? "password" : "default"
      }),
      n.appearance
    ).join(" "));
    return (l, m) => {
      var d, p;
      return y(), x("input", Ce(v(r), {
        type: l.type,
        class: o.value,
        style: (p = (d = l.appearance) == null ? void 0 : d.style) == null ? void 0 : p.input,
        value: l.modelValue,
        onInput: m[0] || (m[0] = (s) => l.$emit("update:modelValue", (s == null ? void 0 : s.target).value))
      }), null, 16, dr);
    };
  }
}), pe = /* @__PURE__ */ W({
  __name: "Label",
  props: {
    appearance: {}
  },
  setup(a) {
    const t = ke({
      fontFamily: "$labelFontFamily",
      fontSize: "$baseLabelSize",
      marginBottom: "$labelBottomMargin",
      color: "$inputLabelText",
      display: "block"
    }), n = a, r = ye(), o = j(() => Se(
      "label",
      t(),
      n.appearance
    ).join(" "));
    return (l, m) => {
      var d, p;
      return y(), L(we("label"), Ce(v(r), {
        class: o.value,
        style: (p = (d = l.appearance) == null ? void 0 : d.style) == null ? void 0 : p.label
      }), {
        default: $(() => [
          ue(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
}), Q = /* @__PURE__ */ W({
  __name: "Message",
  props: {
    color: { default: "default" },
    appearance: {}
  },
  setup(a) {
    const t = ke({
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
    }), n = a, r = ye(), o = j(() => Se(
      "message",
      t({ color: n.color }),
      n.appearance
    ).join(" "));
    return (l, m) => {
      var d, p;
      return y(), L(we("span"), Ce(v(r), {
        class: o.value,
        style: (p = (d = l.appearance) == null ? void 0 : d.style) == null ? void 0 : p.message
      }), {
        default: $(() => [
          ue(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
});
function Le(a, t) {
  const n = $n(a, t);
  if (!n)
    throw new Error(`Could not resolve ${a.description}`);
  return n;
}
const fr = ["id"], hr = /* @__PURE__ */ W({
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
  setup(a, { emit: t }) {
    const n = a, r = z(""), o = z(""), l = z(""), m = z(""), d = z(!1), { authView: p, setAuthView: s } = Le(de), g = j(
      () => {
        var c;
        return (c = n.i18n) == null ? void 0 : c[p.value];
      }
    ), h = t, u = async (c) => {
      var b, C;
      switch (l.value = "", m.value = "", d.value = !0, h("auth:submit", {
        email: r.value,
        password: o.value,
        view: p.value
      }), p.value) {
        case "sign_in":
          const {
            // data: { user: signInUser, session: signInSession },
            error: k
          } = await n.supabaseClient.auth.signInWithPassword({
            email: r.value,
            password: o.value,
            options: n.options
          });
          k && (l.value = k.message, h("auth:error", k)), d.value = !1;
          break;
        case "sign_up":
          let _ = {
            emailRedirectTo: n.redirectTo
          };
          n.additionalData && (_.data = n.additionalData);
          const {
            data: { user: I, session: ie },
            error: F
          } = await n.supabaseClient.auth.signUp({
            email: r.value,
            password: o.value,
            options: {
              ...n.options ?? {},
              ..._
            }
          });
          F ? (l.value = F.message, h("auth:error", F)) : I && !ie && (m.value = (C = (b = n.i18n) == null ? void 0 : b.sign_up) == null ? void 0 : C.confirmation_text), d.value = !1;
      }
    };
    return dt(
      () => p.value,
      () => {
        d.value = !1;
      }
    ), (c, b) => (y(), x("form", {
      id: `auth-${v(p)}`,
      onSubmit: Y(u, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      A(v(te), {
        direction: "vertical",
        gap: "large",
        appearance: c.appearance
      }, {
        default: $(() => [
          A(v(te), {
            direction: "vertical",
            gap: "large",
            appearance: c.appearance
          }, {
            default: $(() => {
              var C, k;
              return [
                B("div", null, [
                  A(v(pe), {
                    htmlFor: "email",
                    appearance: c.appearance
                  }, {
                    default: $(() => {
                      var _;
                      return [
                        T(M((_ = g.value) == null ? void 0 : _.email_label), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["appearance"]),
                  A(v(ce), {
                    id: "email",
                    type: "email",
                    name: "email",
                    modelValue: r.value,
                    "onUpdate:modelValue": b[0] || (b[0] = (_) => r.value = _),
                    placeholder: (C = g.value) == null ? void 0 : C.email_input_placeholder,
                    autoComplete: "email",
                    appearance: c.appearance
                  }, null, 8, ["modelValue", "placeholder", "appearance"])
                ]),
                B("div", null, [
                  A(v(pe), {
                    htmlFor: "password",
                    appearance: c.appearance
                  }, {
                    default: $(() => {
                      var _;
                      return [
                        T(M((_ = g.value) == null ? void 0 : _.password_label), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["appearance"]),
                  A(v(ce), {
                    id: "password",
                    type: "password",
                    name: "password",
                    modelValue: o.value,
                    "onUpdate:modelValue": b[1] || (b[1] = (_) => o.value = _),
                    placeholder: (k = g.value) == null ? void 0 : k.password_input_placeholder,
                    autoComplete: v(p) === "sign_in" ? "current-password" : "new-password",
                    appearance: c.appearance
                  }, null, 8, ["modelValue", "placeholder", "autoComplete", "appearance"])
                ])
              ];
            }),
            _: 1
          }, 8, ["appearance"]),
          A(v($e), {
            type: "submit",
            color: "primary",
            loading: d.value,
            appearance: c.appearance
          }, {
            default: $(() => {
              var C, k;
              return [
                T(M(d.value ? (C = g.value) == null ? void 0 : C.loading_button_label : (k = g.value) == null ? void 0 : k.button_label), 1)
              ];
            }),
            _: 1
          }, 8, ["loading", "appearance"]),
          c.showLinks ? (y(), L(v(te), {
            key: 0,
            direction: "vertical",
            gap: "small",
            appearance: c.appearance
          }, {
            default: $(() => [
              v(p) === v(Z).SIGN_IN && c.magicLink ? (y(), L(v(be), {
                key: 0,
                href: "#auth-magic-link",
                appearance: c.appearance,
                onClick: b[2] || (b[2] = Y((C) => v(s)(v(Z).MAGIC_LINK), ["prevent"]))
              }, {
                default: $(() => {
                  var C, k;
                  return [
                    T(M((k = (C = c.i18n) == null ? void 0 : C.magic_link) == null ? void 0 : k.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"])) : P("", !0),
              v(p) === v(Z).SIGN_IN ? (y(), L(v(be), {
                key: 1,
                href: "#auth-forgot-password",
                appearance: c.appearance,
                onClick: b[3] || (b[3] = Y((C) => v(s)(v(Z).FORGOTTEN_PASSWORD), ["prevent"]))
              }, {
                default: $(() => {
                  var C, k;
                  return [
                    T(M((k = (C = c.i18n) == null ? void 0 : C.forgotten_password) == null ? void 0 : k.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"])) : P("", !0),
              v(p) === v(Z).SIGN_IN ? (y(), L(v(be), {
                key: 2,
                href: "#auth-sign-up",
                appearance: c.appearance,
                onClick: b[4] || (b[4] = Y((C) => v(s)(v(Z).SIGN_UP), ["prevent"]))
              }, {
                default: $(() => {
                  var C, k;
                  return [
                    T(M((k = (C = c.i18n) == null ? void 0 : C.sign_up) == null ? void 0 : k.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"])) : (y(), L(v(be), {
                key: 3,
                href: "#auth-sign-in",
                appearance: c.appearance,
                onClick: b[5] || (b[5] = Y((C) => v(s)(v(Z).SIGN_IN), ["prevent"]))
              }, {
                default: $(() => {
                  var C, k;
                  return [
                    T(M((k = (C = c.i18n) == null ? void 0 : C.sign_in) == null ? void 0 : k.link_text), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]))
            ]),
            _: 1
          }, 8, ["appearance"])) : P("", !0)
        ]),
        _: 1
      }, 8, ["appearance"]),
      m.value ? (y(), L(v(Q), {
        key: 0,
        appearance: c.appearance
      }, {
        default: $(() => [
          T(M(m.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : P("", !0),
      l.value ? (y(), L(v(Q), {
        key: 1,
        color: "danger",
        appearance: c.appearance
      }, {
        default: $(() => [
          T(M(l.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : P("", !0)
    ], 40, fr));
  }
}), O = (a, t) => {
  const n = a.__vccOpts || a;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, gr = {}, mr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function vr(a, t) {
  return y(), x("svg", mr, t[0] || (t[0] = [
    B("path", {
      fill: "#FFC107",
      d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    }, null, -1),
    B("path", {
      fill: "#FF3D00",
      d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    }, null, -1),
    B("path", {
      fill: "#4CAF50",
      d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    }, null, -1),
    B("path", {
      fill: "#1976D2",
      d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    }, null, -1)
  ]));
}
const br = /* @__PURE__ */ O(gr, [["render", vr]]), _r = {}, yr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function wr(a, t) {
  return y(), x("svg", yr, t[0] || (t[0] = [
    B("path", {
      fill: "#039be5",
      d: "M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
    }, null, -1),
    B("path", {
      fill: "#fff",
      d: "M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
    }, null, -1)
  ]));
}
const Cr = /* @__PURE__ */ O(_r, [["render", wr]]), Sr = {}, kr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function $r(a, t) {
  return y(), x("svg", kr, t[0] || (t[0] = [
    B("path", {
      fill: "#03A9F4",
      d: "M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
    }, null, -1)
  ]));
}
const Lr = /* @__PURE__ */ O(Sr, [["render", $r]]), Br = {}, Tr = {
  fill: "gray",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "21px",
  height: "21px"
};
function Mr(a, t) {
  return y(), x("svg", Tr, t[0] || (t[0] = [
    B("path", { d: "M 15.904297 1.078125 C 15.843359 1.06875 15.774219 1.0746094 15.699219 1.0996094 C 14.699219 1.2996094 13.600391 1.8996094 12.900391 2.5996094 C 12.300391 3.1996094 11.800781 4.1996094 11.800781 5.0996094 C 11.800781 5.2996094 11.999219 5.5 12.199219 5.5 C 13.299219 5.4 14.399609 4.7996094 15.099609 4.0996094 C 15.699609 3.2996094 16.199219 2.4 16.199219 1.5 C 16.199219 1.275 16.087109 1.10625 15.904297 1.078125 z M 16.199219 5.4003906 C 14.399219 5.4003906 13.600391 6.5 12.400391 6.5 C 11.100391 6.5 9.9003906 5.5 8.4003906 5.5 C 6.3003906 5.5 3.0996094 7.4996094 3.0996094 12.099609 C 2.9996094 16.299609 6.8 21 9 21 C 10.3 21 10.600391 20.199219 12.400391 20.199219 C 14.200391 20.199219 14.600391 21 15.900391 21 C 17.400391 21 18.500391 19.399609 19.400391 18.099609 C 19.800391 17.399609 20.100391 17.000391 20.400391 16.400391 C 20.600391 16.000391 20.4 15.600391 20 15.400391 C 17.4 14.100391 16.900781 9.9003906 19.800781 8.4003906 C 20.300781 8.1003906 20.4 7.4992188 20 7.1992188 C 18.9 6.1992187 17.299219 5.4003906 16.199219 5.4003906 z" }, null, -1)
  ]));
}
const xr = /* @__PURE__ */ O(Br, [["render", Mr]]), Ir = {}, Ar = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21.34",
  height: "21",
  viewBox: "0 0 256 384"
};
function zr(a, t) {
  return y(), x("svg", Ar, t[0] || (t[0] = [
    Ne('<path fill="#0ACF83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z"></path><path fill="#A259FF" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z"></path><path fill="#F24E1E" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z"></path><path fill="#FF7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z"></path><path fill="#1ABCFE" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64Z"></path>', 5)
  ]));
}
const Pr = /* @__PURE__ */ O(Ir, [["render", zr]]), Er = {}, Vr = {
  fill: "gray",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 30 30",
  width: "21px",
  height: "21px"
};
function jr(a, t) {
  return y(), x("svg", Vr, t[0] || (t[0] = [
    B("path", { d: "M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" }, null, -1)
  ]));
}
const Rr = /* @__PURE__ */ O(Er, [["render", jr]]), Or = {}, Fr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Nr(a, t) {
  return y(), x("svg", Fr, t[0] || (t[0] = [
    Ne('<path fill="#e53935" d="M24 43L16 20 32 20z"></path><path fill="#ff7043" d="M24 43L42 20 32 20z"></path><path fill="#e53935" d="M37 5L42 20 32 20z"></path><path fill="#ffa726" d="M24 43L42 20 45 28z"></path><path fill="#ff7043" d="M24 43L6 20 16 20z"></path><path fill="#e53935" d="M11 5L6 20 16 20z"></path><path fill="#ffa726" d="M24 43L6 20 3 28z"></path>', 7)
  ]));
}
const Wr = /* @__PURE__ */ O(Or, [["render", Nr]]), Dr = {}, Hr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21",
  height: "21",
  viewBox: "0 0 62.42 62.42"
};
function Ur(a, t) {
  return y(), x("svg", Hr, t[0] || (t[0] = [
    Ne('<defs><linearGradient id="New_Gradient_Swatch_1" x1="64.01" y1="30.27" x2="32.99" y2="54.48" gradientUnits="userSpaceOnUse"><stop offset="0.18" stop-color="#0052cc"></stop><stop offset="1" stop-color="#2684ff"></stop></linearGradient></defs><title>Bitbucket-blue</title><g id="Layer_2" data-name="Layer 2"><g id="Blue" transform="translate(0 -3.13)"><path d="M2,6.26A2,2,0,0,0,0,8.58L8.49,60.12a2.72,2.72,0,0,0,2.66,2.27H51.88a2,2,0,0,0,2-1.68L62.37,8.59a2,2,0,0,0-2-2.32ZM37.75,43.51h-13L21.23,25.12H40.9Z" fill="#2684ff"></path><path d="M59.67,25.12H40.9L37.75,43.51h-13L9.4,61.73a2.71,2.71,0,0,0,1.75.66H51.89a2,2,0,0,0,2-1.68Z" fill="url(#New_Gradient_Swatch_1)"></path></g></g>', 3)
  ]));
}
const Gr = /* @__PURE__ */ O(Dr, [["render", Ur]]), Zr = {}, qr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Yr(a, t) {
  return y(), x("svg", qr, t[0] || (t[0] = [
    B("path", {
      fill: "#536dfe",
      d: "M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"
    }, null, -1)
  ]));
}
const Kr = /* @__PURE__ */ O(Zr, [["render", Yr]]), Jr = {}, Xr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function Qr(a, t) {
  return y(), x("svg", Xr, t[0] || (t[0] = [
    Ne('<linearGradient id="k8yl7~hDat~FaoWq8WjN6a" x1="-1254.397" x2="-1261.911" y1="877.268" y2="899.466" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#114a8b"></stop><stop offset="1" stop-color="#0669bc"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6a)" d="M17.634,6h11.305L17.203,40.773c-0.247,0.733-0.934,1.226-1.708,1.226H6.697 c-0.994,0-1.8-0.806-1.8-1.8c0-0.196,0.032-0.39,0.094-0.576L15.926,7.227C16.173,6.494,16.86,6,17.634,6L17.634,6z"></path><path fill="#0078d4" d="M34.062,29.324H16.135c-0.458-0.001-0.83,0.371-0.831,0.829c0,0.231,0.095,0.451,0.264,0.608 l11.52,10.752C27.423,41.826,27.865,42,28.324,42h10.151L34.062,29.324z"></path><linearGradient id="k8yl7~hDat~FaoWq8WjN6b" x1="-1252.05" x2="-1253.788" y1="887.612" y2="888.2" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity=".3"></stop><stop offset=".071" stop-opacity=".2"></stop><stop offset=".321" stop-opacity=".1"></stop><stop offset=".623" stop-opacity=".05"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6b)" d="M17.634,6c-0.783-0.003-1.476,0.504-1.712,1.25L5.005,39.595 c-0.335,0.934,0.151,1.964,1.085,2.299C6.286,41.964,6.493,42,6.702,42h9.026c0.684-0.122,1.25-0.603,1.481-1.259l2.177-6.416 l7.776,7.253c0.326,0.27,0.735,0.419,1.158,0.422h10.114l-4.436-12.676l-12.931,0.003L28.98,6H17.634z"></path><linearGradient id="k8yl7~hDat~FaoWq8WjN6c" x1="-1252.952" x2="-1244.704" y1="876.6" y2="898.575" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3ccbf4"></stop><stop offset="1" stop-color="#2892df"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6c)" d="M32.074,7.225C31.827,6.493,31.141,6,30.368,6h-12.6c0.772,0,1.459,0.493,1.705,1.224 l10.935,32.399c0.318,0.942-0.188,1.963-1.13,2.281C29.093,41.968,28.899,42,28.703,42h12.6c0.994,0,1.8-0.806,1.8-1.801 c0-0.196-0.032-0.39-0.095-0.575L32.074,7.225z"></path>', 7)
  ]));
}
const eo = /* @__PURE__ */ O(Jr, [["render", Qr]]), to = {}, ao = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21",
  height: "21",
  viewBox: "0 0 256 256"
};
function no(a, t) {
  return y(), x("svg", ao, t[0] || (t[0] = [
    B("path", {
      fill: "#FFE812",
      d: "M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z"
    }, null, -1),
    B("path", { d: "M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z" }, null, -1),
    B("path", {
      fill: "#FFE812",
      d: "M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"
    }, null, -1)
  ]));
}
const ro = /* @__PURE__ */ O(to, [["render", no]]), oo = {}, io = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function lo(a, t) {
  return y(), x("svg", io, t[0] || (t[0] = [
    B("path", {
      d: "M472.136 163.959H408.584C407.401 163.959 406.218 163.327 405.666 162.3L354.651 73.6591C354.02 72.632 352.916 72 351.654 72H143.492C142.309 72 141.126 72.632 140.574 73.6591L87.5084 165.618L36.414 254.259C35.862 255.286 35.862 256.55 36.414 257.656L87.5084 346.297L140.495 438.335C141.047 439.362 142.23 440.073 143.413 439.994H351.654C352.837 439.994 354.02 439.362 354.651 438.335L405.745 349.694C406.297 348.667 407.48 347.956 408.663 348.035H472.215C474.344 348.035 476 346.297 476 344.243V167.83C475.921 165.697 474.186 163.959 472.136 163.959ZM228.728 349.694L212.721 377.345C212.485 377.74 212.091 378.135 211.696 378.372C211.223 378.609 210.75 378.767 210.198 378.767H178.422C177.318 378.767 176.293 378.214 175.82 377.187L128.431 294.787L123.779 286.65L106.748 257.498C106.511 257.103 106.353 256.629 106.432 256.076C106.432 255.602 106.59 255.049 106.827 254.654L123.937 224.949L175.899 134.886C176.451 133.938 177.476 133.306 178.501 133.306H210.198C210.75 133.306 211.302 133.464 211.854 133.701C212.248 133.938 212.643 134.254 212.879 134.728L228.886 162.537C229.359 163.485 229.28 164.67 228.728 165.539L177.397 254.654C177.16 255.049 177.081 255.523 177.081 255.918C177.081 256.392 177.239 256.787 177.397 257.182L228.728 346.218C229.438 347.403 229.359 348.667 228.728 349.694V349.694ZM388.083 257.498L371.051 286.65L366.399 294.787L319.011 377.187C318.459 378.135 317.512 378.767 316.409 378.767H284.632C284.08 378.767 283.607 378.609 283.134 378.372C282.74 378.135 282.346 377.819 282.109 377.345L266.103 349.694C265.393 348.667 265.393 347.403 266.024 346.376L317.355 257.34C317.591 256.945 317.67 256.471 317.67 256.076C317.67 255.602 317.513 255.207 317.355 254.812L266.024 165.697C265.472 164.749 265.393 163.643 265.866 162.695L281.873 134.886C282.109 134.491 282.503 134.096 282.898 133.859C283.371 133.543 283.923 133.464 284.553 133.464H316.409C317.512 133.464 318.538 134.017 319.011 135.044L370.972 225.107L388.083 254.812C388.319 255.286 388.477 255.76 388.477 256.234C388.477 256.55 388.319 257.024 388.083 257.498V257.498Z",
      fill: "#008AAA"
    }, null, -1)
  ]));
}
const so = /* @__PURE__ */ O(oo, [["render", lo]]), co = {}, po = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function uo(a, t) {
  return y(), x("svg", po, t[0] || (t[0] = [
    B("path", {
      fill: "#0288D1",
      d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
    }, null, -1),
    B("path", {
      fill: "#FFF",
      d: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
    }, null, -1)
  ]));
}
const Kt = /* @__PURE__ */ O(co, [["render", uo]]), fo = {}, ho = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px",
  "fill-rule": "evenodd",
  "clip-rule": "evenodd"
};
function go(a, t) {
  return y(), x("svg", ho, t[0] || (t[0] = [
    B("path", {
      fill: "#fff",
      "fill-rule": "evenodd",
      d: "M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z",
      "clip-rule": "evenodd"
    }, null, -1),
    B("path", {
      fill: "#fff",
      "fill-rule": "evenodd",
      d: "M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619 l23.971-1.387c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463 C13.171,14.718,12.862,15.181,12.862,16.182L12.862,16.182z",
      "clip-rule": "evenodd"
    }, null, -1),
    B("path", {
      fill: "#424242",
      "fill-rule": "evenodd",
      d: "M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619l23.971-1.387 c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463C13.171,14.718,12.862,15.181,12.862,16.182 L12.862,16.182z M36.526,17.413c0.154,0.694,0,1.387-0.695,1.465l-1.155,0.23v16.943c-1.003,0.539-1.928,0.847-2.698,0.847 c-1.234,0-1.543-0.385-2.467-1.54l-7.555-11.86v11.475l2.391,0.539c0,0,0,1.386-1.929,1.386l-5.317,0.308 c-0.154-0.308,0-1.078,0.539-1.232l1.388-0.385V20.418l-1.927-0.154c-0.155-0.694,0.23-1.694,1.31-1.772l5.704-0.385l7.862,12.015 V19.493l-2.005-0.23c-0.154-0.848,0.462-1.464,1.233-1.54L36.526,17.413z M7.389,5.862l21.968-1.618 c2.698-0.231,3.392-0.076,5.087,1.155l7.013,4.929C42.614,11.176,43,11.407,43,12.33v27.032c0,1.694-0.617,2.696-2.775,2.849 l-25.512,1.541c-1.62,0.077-2.391-0.154-3.239-1.232l-5.164-6.7C5.385,34.587,5,33.664,5,32.585V8.556 C5,7.171,5.617,6.015,7.389,5.862z",
      "clip-rule": "evenodd"
    }, null, -1)
  ]));
}
const mo = /* @__PURE__ */ O(fo, [["render", go]]), vo = {}, bo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21px",
  height: "21px"
};
function _o(a, t) {
  return y(), x("svg", bo, t[0] || (t[0] = [
    Ne('<path fill="#33d375" d="M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"></path><path fill="#33d375" d="M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"></path><path fill="#40c4ff" d="M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"></path><path fill="#40c4ff" d="M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"></path><path fill="#e91e63" d="M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"></path><path fill="#e91e63" d="M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"></path><path fill="#ffc107" d="M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"></path><path fill="#ffc107" d="M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"></path>', 8)
  ]));
}
const yo = /* @__PURE__ */ O(vo, [["render", _o]]), wo = {}, Co = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function So(a, t) {
  return y(), x("svg", Co, t[0] || (t[0] = [
    B("path", {
      d: "M255.498 31.0034C131.513 31.0034 31 131.515 31 255.502C31 379.492 131.513 480 255.498 480C379.497 480 480 379.495 480 255.502C480 131.522 379.497 31.0135 255.495 31.0135L255.498 31V31.0034ZM358.453 354.798C354.432 361.391 345.801 363.486 339.204 359.435C286.496 327.237 220.139 319.947 141.993 337.801C134.463 339.516 126.957 334.798 125.24 327.264C123.516 319.731 128.217 312.225 135.767 310.511C221.284 290.972 294.639 299.384 353.816 335.549C360.413 339.596 362.504 348.2 358.453 354.798ZM385.932 293.67C380.864 301.903 370.088 304.503 361.858 299.438C301.512 262.345 209.528 251.602 138.151 273.272C128.893 276.067 119.118 270.851 116.309 261.61C113.521 252.353 118.74 242.597 127.981 239.782C209.512 215.044 310.87 227.026 380.17 269.612C388.4 274.68 391 285.456 385.935 293.676V293.673L385.932 293.67ZM388.293 230.016C315.935 187.039 196.56 183.089 127.479 204.055C116.387 207.42 104.654 201.159 101.293 190.063C97.9326 178.964 104.189 167.241 115.289 163.87C194.59 139.796 326.418 144.446 409.723 193.902C419.722 199.826 422.995 212.71 417.068 222.675C411.168 232.653 398.247 235.943 388.303 230.016H388.293V230.016Z",
      fill: "#1ED760"
    }, null, -1)
  ]));
}
const ko = /* @__PURE__ */ O(wo, [["render", So]]), $o = {}, Lo = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Bo(a, t) {
  return y(), x("svg", Lo, t[0] || (t[0] = [
    B("path", {
      d: "M416 240L352 304H288L232 360V304H160V64H416V240Z",
      fill: "white"
    }, null, -1),
    B("path", {
      d: "M144 32L64 112V400H160V480L240 400H304L448 256V32H144ZM416 240L352 304H288L232 360V304H160V64H416V240Z",
      fill: "#9146FF"
    }, null, -1),
    B("path", {
      d: "M368 120H336V216H368V120Z",
      fill: "#9146FF"
    }, null, -1),
    B("path", {
      d: "M280 120H248V216H280V120Z",
      fill: "#9146FF"
    }, null, -1)
  ]));
}
const To = /* @__PURE__ */ O($o, [["render", Bo]]), Mo = {}, xo = {
  width: "21",
  height: "21",
  viewBox: "0 0 512 512",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function Io(a, t) {
  return y(), x("svg", xo, t[0] || (t[0] = [
    B("path", {
      d: "M33 256.043C33 264.556 35.3159 273.069 39.4845 280.202L117.993 415.493C126.098 429.298 138.373 440.572 153.657 445.634C183.764 455.528 214.797 442.873 229.618 417.333L248.609 384.661L173.806 256.043L252.777 119.831L271.768 87.1591C277.557 77.2654 284.968 69.4424 294 63H285.894H172.185C150.878 63 131.193 74.2742 120.54 92.6812L39.7161 231.884C35.3159 239.016 33 247.53 33 256.043Z",
      fill: "#6363F1"
    }, null, -1),
    B("path", {
      d: "M480 256.058C480 247.539 477.684 239.021 473.516 231.883L393.849 94.6596C379.028 69.3331 347.995 56.4396 317.888 66.34C302.603 71.4053 290.329 82.6871 282.224 96.5015L264.391 127.354L339.194 256.058L260.223 392.131L241.232 424.825C235.443 434.495 228.032 442.553 219 449H227.106H340.815C362.122 449 381.807 437.718 392.46 419.299L473.284 280.003C477.684 272.866 480 264.577 480 256.058Z",
      fill: "#6363F1"
    }, null, -1)
  ]));
}
const Ao = /* @__PURE__ */ O(Mo, [["render", Io]]), zo = {}, Po = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 48 48",
  width: "21",
  height: "21"
};
function Eo(a, t) {
  return y(), x("svg", Po, t[0] || (t[0] = [
    B("circle", {
      cx: "24",
      cy: "24",
      r: "20",
      fill: "#2196f3"
    }, null, -1),
    B("path", {
      fill: "#fff",
      d: "M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z"
    }, null, -1),
    B("polygon", {
      fill: "#fff",
      points: "37,31 31,27 31,21 37,17"
    }, null, -1)
  ]));
}
const Vo = /* @__PURE__ */ O(zo, [["render", Eo]]), jo = /* @__PURE__ */ W({
  __name: "Icons",
  props: {
    name: {}
  },
  setup(a) {
    const t = {
      apple: xr,
      azure: eo,
      bitbucket: Gr,
      discord: Kr,
      facebook: Cr,
      figma: Pr,
      google: br,
      github: Rr,
      gitlab: Wr,
      kakao: ro,
      keycloak: so,
      linkedin: Kt,
      linkedin_oidc: Kt,
      notion: mo,
      slack: yo,
      spotify: ko,
      twitch: To,
      twitter: Lr,
      workos: Ao,
      zoom: Vo
    };
    return (n, r) => (y(), L(we(t[n.name])));
  }
}), Qo = W({
  name: "UserContextProvider",
  props: {
    supabaseClient: {
      type: Object,
      required: !0
    }
  },
  setup({ supabaseClient: a }, { slots: t }) {
    const n = z(null), r = z(null);
    return Jt(async () => {
      var m;
      const { data: o } = await a.auth.getSession();
      n.value = o.session, r.value = ((m = o.session) == null ? void 0 : m.user) ?? null;
      const { data: l } = a.auth.onAuthStateChange(
        async (d, p) => {
          n.value = p, r.value = (p == null ? void 0 : p.user) ?? null;
        }
      );
      return () => {
        l == null || l.subscription.unsubscribe();
      };
    }), Xt(sr, {
      session: n,
      user: r
    }), () => {
      var o;
      return Ln("div", null, (o = t == null ? void 0 : t.default) == null ? void 0 : o.call(t));
    };
  }
}), bt = (a) => {
  const t = z(null), n = (r) => {
    r ? JSON.stringify(t.value) !== JSON.stringify(r.user) && (t.value = r.user) : t.value = null;
  };
  return a == null || a.auth.getSession().then(({ data: { session: r } }) => {
    r && n(r);
  }), Jt(async () => {
    const { data: r } = a.auth.onAuthStateChange(
      async (o, l) => {
        l && n(l);
      }
    );
    return () => {
      r == null || r.subscription.unsubscribe();
    };
  }), {
    supabaseUser: t
  };
}, Ro = /* @__PURE__ */ W({
  __name: "SocialAuth",
  props: {
    supabaseClient: {},
    socialLayout: { default: "vertical" },
    providers: { default: () => ["github", "google", "azure"] },
    providerScopes: {},
    queryParams: {},
    redirectTo: {},
    onlyThirdPartyProviders: { type: Boolean, default: !0 },
    view: { default: "sign_in" },
    i18n: {},
    appearance: {}
  },
  setup(a) {
    const t = a, { supabaseUser: n } = bt(t.supabaseClient), r = z(""), o = z(!1), { authView: l } = Le(de), m = j(() => t.socialLayout === "vertical"), d = j(() => l.value === "magic_link" ? "sign_in" : l.value), p = j(
      () => {
        var h;
        return (h = t.i18n) == null ? void 0 : h[d.value];
      }
    ), s = async (h) => {
      var C, k;
      r.value = "", o.value = !0;
      const u = (C = n.value) == null ? void 0 : C.is_anonymous, c = {
        redirectTo: t.redirectTo,
        scopes: (k = t.providerScopes) == null ? void 0 : k[h],
        queryParams: t.queryParams
      };
      let b = null;
      if (u) {
        const { data: _, error: I } = await t.supabaseClient.auth.linkIdentity({
          provider: h,
          options: c
        });
        b = I;
      } else {
        const { data: _, error: I } = await t.supabaseClient.auth.signInWithOAuth({
          provider: h,
          options: c
        });
        b = I;
      }
      b && (r.value = b.message), o.value = !1;
    };
    function g(h) {
      const u = h.toLowerCase();
      return h.charAt(0).toUpperCase() + u.slice(1);
    }
    return (h, u) => h.providers && h.providers.length > 0 ? (y(), x(Fe, { key: 0 }, [
      A(v(te), {
        gap: "large",
        direction: "vertical",
        appearance: h.appearance
      }, {
        default: $(() => [
          A(v(te), {
            direction: m.value ? "vertical" : "horizontal",
            gap: m.value ? "small" : "medium",
            appearance: h.appearance
          }, {
            default: $(() => [
              (y(!0), x(Fe, null, Bn(h.providers, (c) => (y(), L(v($e), {
                key: c,
                color: "default",
                loading: o.value,
                onClick: Y(() => s(c), ["prevent"]),
                appearance: h.appearance
              }, {
                icon: $(() => [
                  A(v(jo), { name: c }, null, 8, ["name"])
                ]),
                default: $(() => {
                  var b, C;
                  return [
                    m.value ? (y(), x(Fe, { key: 0 }, [
                      T(M(v(xn)(
                        (C = (b = p.value) == null ? void 0 : b.social_provider_text) == null ? void 0 : C.replace("_oidc", ""),
                        {
                          provider: g(c.replace("_oidc", ""))
                        }
                      )), 1)
                    ], 64)) : P("", !0)
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
      h.onlyThirdPartyProviders ? P("", !0) : (y(), L(v(ur), {
        key: 0,
        appearance: h.appearance
      }, null, 8, ["appearance"]))
    ], 64)) : P("", !0);
  }
}), Oo = ["id"], Fo = /* @__PURE__ */ W({
  __name: "MagicLink",
  props: {
    appearance: {},
    supabaseClient: {},
    redirectTo: {},
    showLinks: { type: Boolean },
    i18n: {}
  },
  setup(a) {
    const t = a, { supabaseUser: n } = bt(t.supabaseClient), r = z(""), o = z(""), l = z(""), m = z(!1), { authView: d, setAuthView: p } = Le(de), s = j(
      () => {
        var h;
        return (h = t.i18n) == null ? void 0 : h[d.value];
      }
    ), g = async (h) => {
      var b, C, k;
      o.value = "", l.value = "", m.value = !0;
      const u = (b = n.value) == null ? void 0 : b.is_anonymous;
      let c = null;
      if (u) {
        const { error: _ } = await t.supabaseClient.auth.updateUser(
          {
            email: r.value
          },
          {
            emailRedirectTo: t.redirectTo
          }
        );
        c = _;
      } else {
        const { error: _ } = await t.supabaseClient.auth.signInWithOtp({
          email: r.value,
          options: { emailRedirectTo: t.redirectTo }
        });
        c = _;
      }
      c ? o.value = c.message : l.value = (k = (C = t.i18n) == null ? void 0 : C.magic_link) == null ? void 0 : k.confirmation_text, m.value = !1;
    };
    return (h, u) => (y(), x("form", {
      id: `auth-${v(d)}`,
      onSubmit: Y(g, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      A(v(te), {
        direction: "vertical",
        gap: "large",
        appearance: h.appearance
      }, {
        default: $(() => [
          A(v(te), {
            direction: "vertical",
            gap: "large",
            appearance: h.appearance
          }, {
            default: $(() => {
              var c;
              return [
                B("div", null, [
                  A(v(pe), {
                    htmlFor: "email",
                    appearance: h.appearance
                  }, {
                    default: $(() => {
                      var b;
                      return [
                        T(M((b = s.value) == null ? void 0 : b.email_input_label), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["appearance"]),
                  A(v(ce), {
                    id: "email",
                    type: "email",
                    name: "email",
                    autoComplete: "email",
                    autofocus: "",
                    placeholder: (c = s.value) == null ? void 0 : c.email_input_placeholder,
                    appearance: h.appearance,
                    modelValue: r.value,
                    "onUpdate:modelValue": u[0] || (u[0] = (b) => r.value = b)
                  }, null, 8, ["placeholder", "appearance", "modelValue"])
                ])
              ];
            }),
            _: 1
          }, 8, ["appearance"]),
          A(v($e), {
            type: "submit",
            color: "primary",
            loading: m.value,
            appearance: h.appearance
          }, {
            default: $(() => {
              var c, b;
              return [
                T(M(m.value ? (c = s.value) == null ? void 0 : c.loading_button_label : (b = s.value) == null ? void 0 : b.button_label), 1)
              ];
            }),
            _: 1
          }, 8, ["loading", "appearance"]),
          h.showLinks ? (y(), L(v(be), {
            key: 0,
            href: "#auth-sign-in",
            appearance: h.appearance,
            onClick: u[1] || (u[1] = Y((c) => v(p)(v(Z).SIGN_IN), ["prevent"]))
          }, {
            default: $(() => {
              var c, b;
              return [
                T(M((b = (c = h.i18n) == null ? void 0 : c.sign_in) == null ? void 0 : b.link_text), 1)
              ];
            }),
            _: 1
          }, 8, ["appearance"])) : P("", !0)
        ]),
        _: 1
      }, 8, ["appearance"]),
      l.value ? (y(), L(v(Q), {
        key: 0,
        appearance: h.appearance
      }, {
        default: $(() => [
          T(M(l.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : P("", !0),
      o.value ? (y(), L(v(Q), {
        key: 1,
        color: "danger",
        appearance: h.appearance
      }, {
        default: $(() => [
          T(M(o.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : P("", !0)
    ], 40, Oo));
  }
}), No = ["id"], Wo = /* @__PURE__ */ W({
  __name: "ForgottenPassword",
  props: {
    appearance: {},
    supabaseClient: {},
    redirectTo: {},
    showLinks: { type: Boolean },
    i18n: {},
    options: {}
  },
  setup(a) {
    const t = a, n = z(""), r = z(""), o = z(""), l = z(!1), { authView: m, setAuthView: d } = Le(de), p = j(
      () => {
        var g;
        return (g = t.i18n) == null ? void 0 : g[m.value];
      }
    ), s = async (g) => {
      var u, c, b;
      r.value = "", o.value = "", l.value = !0;
      const { error: h } = await t.supabaseClient.auth.resetPasswordForEmail(n.value, {
        redirectTo: t.redirectTo,
        captchaToken: (u = t.options) == null ? void 0 : u.captchaToken
      });
      h ? r.value = h.message : o.value = (b = (c = t.i18n) == null ? void 0 : c.forgotten_password) == null ? void 0 : b.confirmation_text, l.value = !1;
    };
    return (g, h) => (y(), x("form", {
      id: `auth-${v(m)}`,
      onSubmit: Y(s, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      A(v(te), {
        direction: "vertical",
        gap: "large",
        appearance: g.appearance
      }, {
        default: $(() => {
          var u;
          return [
            B("div", null, [
              A(v(pe), {
                htmlFor: "email",
                appearance: g.appearance
              }, {
                default: $(() => {
                  var c;
                  return [
                    T(M((c = p.value) == null ? void 0 : c.email_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              A(v(ce), {
                id: "email",
                type: "email",
                name: "email",
                autoComplete: "email",
                autofocus: "",
                placeholder: (u = p.value) == null ? void 0 : u.email_input_placeholder,
                appearance: g.appearance,
                modelValue: n.value,
                "onUpdate:modelValue": h[0] || (h[0] = (c) => n.value = c)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ]),
            A(v($e), {
              type: "submit",
              color: "primary",
              loading: l.value,
              appearance: g.appearance
            }, {
              default: $(() => {
                var c, b;
                return [
                  T(M(l.value ? (c = p.value) == null ? void 0 : c.loading_button_label : (b = p.value) == null ? void 0 : b.button_label), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "appearance"]),
            g.showLinks ? (y(), L(v(be), {
              key: 0,
              href: "#auth-sign-in",
              appearance: g.appearance,
              onClick: h[1] || (h[1] = Y((c) => v(d)(v(Z).SIGN_IN), ["prevent"]))
            }, {
              default: $(() => {
                var c, b;
                return [
                  T(M((b = (c = g.i18n) == null ? void 0 : c.sign_in) == null ? void 0 : b.link_text), 1)
                ];
              }),
              _: 1
            }, 8, ["appearance"])) : P("", !0)
          ];
        }),
        _: 1
      }, 8, ["appearance"]),
      o.value ? (y(), L(v(Q), {
        key: 0,
        appearance: g.appearance
      }, {
        default: $(() => [
          T(M(o.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : P("", !0),
      r.value ? (y(), L(v(Q), {
        key: 1,
        color: "danger",
        appearance: g.appearance
      }, {
        default: $(() => [
          T(M(r.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : P("", !0)
    ], 40, No));
  }
}), Do = ["id"], Ho = /* @__PURE__ */ W({
  __name: "UpdatePassword",
  props: {
    appearance: {},
    supabaseClient: {},
    i18n: {}
  },
  setup(a) {
    const t = a, n = z(""), r = z(""), o = z(""), l = z(!1), { authView: m } = Le(de), d = j(
      () => {
        var s;
        return (s = t.i18n) == null ? void 0 : s[m.value];
      }
    ), p = async (s) => {
      var h, u;
      r.value = "", o.value = "", l.value = !0;
      const { error: g } = await t.supabaseClient.auth.updateUser({
        password: n.value
      });
      g ? r.value = g.message : o.value = (u = (h = t.i18n) == null ? void 0 : h.update_password) == null ? void 0 : u.confirmation_text, l.value = !1;
    };
    return (s, g) => (y(), x("form", {
      id: `auth-${v(m)}`,
      onSubmit: Y(p, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      A(v(te), {
        direction: "vertical",
        gap: "large",
        appearance: s.appearance
      }, {
        default: $(() => {
          var h;
          return [
            B("div", null, [
              A(v(pe), {
                htmlFor: "password_label",
                appearance: s.appearance
              }, {
                default: $(() => {
                  var u;
                  return [
                    T(M((u = d.value) == null ? void 0 : u.password_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              A(v(ce), {
                id: "password",
                type: "password",
                name: "password",
                autofocus: "",
                placeholder: (h = d.value) == null ? void 0 : h.password_input_placeholder,
                appearance: s.appearance,
                modelValue: n.value,
                "onUpdate:modelValue": g[0] || (g[0] = (u) => n.value = u)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ]),
            A(v($e), {
              type: "submit",
              color: "primary",
              loading: l.value,
              appearance: s.appearance
            }, {
              default: $(() => {
                var u, c;
                return [
                  T(M(l.value ? (u = d.value) == null ? void 0 : u.loading_button_label : (c = d.value) == null ? void 0 : c.button_label), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "appearance"])
          ];
        }),
        _: 1
      }, 8, ["appearance"]),
      o.value ? (y(), L(v(Q), {
        key: 0,
        appearance: s.appearance
      }, {
        default: $(() => [
          T(M(o.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : P("", !0),
      r.value ? (y(), L(v(Q), {
        key: 1,
        color: "danger",
        appearance: s.appearance
      }, {
        default: $(() => [
          T(M(r.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : P("", !0)
    ], 40, Do));
  }
}), Uo = ["id"], Go = { key: 0 }, Zo = { key: 1 }, qo = /* @__PURE__ */ W({
  __name: "VerifyOtp",
  props: {
    appearance: {},
    supabaseClient: {},
    otpType: { default: "email" },
    showLinks: { type: Boolean, default: !1 },
    i18n: {}
  },
  setup(a) {
    const t = a, n = z(""), r = z(""), o = z(""), l = z(""), m = z(""), d = z(!1), { authView: p, setAuthView: s } = Le(de), g = j(
      () => {
        var u;
        return (u = t.i18n) == null ? void 0 : u[p.value];
      }
    ), h = async (u) => {
      var C, k;
      l.value = "", m.value = "", d.value = !0;
      let c = {
        email: n.value,
        token: o.value,
        type: t.otpType
      };
      ["sms", "phone_change"].includes(t.otpType) && (c = {
        phone: r.value,
        token: o.value,
        type: t.otpType
      });
      const { error: b } = await t.supabaseClient.auth.verifyOtp(
        c
      );
      b ? l.value = b.message : m.value = (k = (C = t.i18n) == null ? void 0 : C.magic_link) == null ? void 0 : k.confirmation_text, d.value = !1;
    };
    return (u, c) => (y(), x("form", {
      id: `auth-${v(p)}`,
      onSubmit: Y(h, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      A(v(te), {
        direction: "vertical",
        gap: "large",
        appearance: u.appearance
      }, {
        default: $(() => {
          var b, C, k;
          return [
            ["sms", "phone_change"].includes(u.otpType) ? (y(), x("div", Go, [
              A(v(pe), {
                htmlFor: "phone",
                appearance: u.appearance
              }, {
                default: $(() => {
                  var _;
                  return [
                    T(M((_ = g.value) == null ? void 0 : _.phone_input_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              A(v(ce), {
                id: "phone",
                name: "phone",
                type: "text",
                autofocus: "",
                placeholder: (b = g.value) == null ? void 0 : b.phone_input_placeholder,
                appearance: u.appearance,
                modelValue: r.value,
                "onUpdate:modelValue": c[0] || (c[0] = (_) => r.value = _)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ])) : (y(), x("div", Zo, [
              A(v(pe), {
                htmlFor: "email",
                appearance: u.appearance
              }, {
                default: $(() => {
                  var _;
                  return [
                    T(M((_ = g.value) == null ? void 0 : _.email_input_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              A(v(ce), {
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                autofocus: "",
                placeholder: (C = g.value) == null ? void 0 : C.email_input_placeholder,
                appearance: u.appearance,
                modelValue: n.value,
                "onUpdate:modelValue": c[1] || (c[1] = (_) => n.value = _)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ])),
            B("div", null, [
              A(v(pe), {
                htmlFor: "token",
                appearance: u.appearance
              }, {
                default: $(() => {
                  var _;
                  return [
                    T(M((_ = g.value) == null ? void 0 : _.token_input_label), 1)
                  ];
                }),
                _: 1
              }, 8, ["appearance"]),
              A(v(ce), {
                id: "token",
                name: "token",
                type: "text",
                autofocus: "",
                placeholder: (k = g.value) == null ? void 0 : k.token_input_placeholder,
                appearance: u.appearance,
                modelValue: o.value,
                "onUpdate:modelValue": c[2] || (c[2] = (_) => o.value = _)
              }, null, 8, ["placeholder", "appearance", "modelValue"])
            ]),
            A(v($e), {
              type: "submit",
              color: "primary",
              loading: d.value,
              appearance: u.appearance
            }, {
              default: $(() => {
                var _, I;
                return [
                  T(M(d.value ? (_ = g.value) == null ? void 0 : _.loading_button_label : (I = g.value) == null ? void 0 : I.button_label), 1)
                ];
              }),
              _: 1
            }, 8, ["loading", "appearance"]),
            u.showLinks ? (y(), L(v(be), {
              key: 2,
              href: "#auth-sign-in",
              appearance: u.appearance,
              onClick: c[3] || (c[3] = Y((_) => v(s)(v(Z).SIGN_IN), ["prevent"]))
            }, {
              default: $(() => {
                var _, I;
                return [
                  T(M((I = (_ = u.i18n) == null ? void 0 : _.sign_in) == null ? void 0 : I.link_text), 1)
                ];
              }),
              _: 1
            }, 8, ["appearance"])) : P("", !0)
          ];
        }),
        _: 1
      }, 8, ["appearance"]),
      m.value ? (y(), L(v(Q), {
        key: 0,
        appearance: u.appearance
      }, {
        default: $(() => [
          T(M(m.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : P("", !0),
      l.value ? (y(), L(v(Q), {
        key: 1,
        color: "danger",
        appearance: u.appearance
      }, {
        default: $(() => [
          T(M(l.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : P("", !0)
    ], 40, Uo));
  }
}), Yo = ["id"], Ko = /* @__PURE__ */ W({
  __name: "AnonymousAuth",
  props: {
    appearance: {},
    supabaseClient: {},
    redirectTo: {},
    i18n: {},
    anonymouslyCredentials: {}
  },
  setup(a) {
    const t = a;
    bt(t.supabaseClient);
    const n = z(""), r = z(""), o = z(!1), { authView: l, setAuthView: m } = Le(de), d = j(
      () => {
        var s;
        return (s = t.i18n) == null ? void 0 : s[l.value];
      }
    ), p = async (s) => {
      n.value = "", r.value = "", o.value = !0;
      let g = null;
      const { data: h, error: u } = await t.supabaseClient.auth.signInAnonymously(
        t.anonymouslyCredentials
      );
      g = u, g && (n.value = g.message), o.value = !1;
    };
    return (s, g) => (y(), x("form", {
      id: `auth-${v(l)}`,
      onSubmit: Y(p, ["prevent"]),
      autoComplete: "on",
      style: {
        width: "100%"
      }
    }, [
      A(v(te), {
        direction: "vertical",
        gap: "large",
        appearance: s.appearance
      }, {
        default: $(() => [
          A(v($e), {
            type: "submit",
            color: "primary",
            loading: o.value,
            appearance: s.appearance
          }, {
            default: $(() => {
              var h, u;
              return [
                T(M(o.value ? (h = d.value) == null ? void 0 : h.loading_button_label : (u = d.value) == null ? void 0 : u.button_label), 1)
              ];
            }),
            _: 1
          }, 8, ["loading", "appearance"])
        ]),
        _: 1
      }, 8, ["appearance"]),
      r.value ? (y(), L(v(Q), {
        key: 0,
        appearance: s.appearance
      }, {
        default: $(() => [
          T(M(r.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : P("", !0),
      n.value ? (y(), L(v(Q), {
        key: 1,
        color: "danger",
        appearance: s.appearance
      }, {
        default: $(() => [
          T(M(n.value), 1)
        ]),
        _: 1
      }, 8, ["appearance"])) : P("", !0)
    ], 40, Yo));
  }
}), Jo = /* @__PURE__ */ W({
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
    onlyThirdPartyProviders: { type: Boolean, default: !1 },
    magicLink: { type: Boolean, default: !1 },
    showLinks: { type: Boolean, default: !0 },
    otpType: { default: "email" },
    additionalData: {},
    dark: { type: Boolean, default: !1 },
    theme: { default: "default" }
  },
  emits: ["update:view", "auth:submit", "auth:error"],
  setup(a, { emit: t }) {
    const n = a, r = t, o = z(n.view), l = (s) => {
      r("update:view", s), o.value = s;
    };
    Xt(de, {
      authView: o,
      setAuthView: l
    });
    const m = j(() => {
      var h;
      const s = Ke(In), g = Ke((h = n == null ? void 0 : n.localization) == null ? void 0 : h.variables);
      return ht(s, g ?? {});
    }), d = j(() => o.value === "sign_in" || o.value === "sign_up" || o.value === "magic_link"), p = j(() => {
      var h, u;
      const s = Ke((h = n.appearance) == null ? void 0 : h.theme), g = Ke((u = n.appearance) == null ? void 0 : u.variables);
      return ht(
        (s == null ? void 0 : s.default) ?? {},
        (s == null ? void 0 : s[n.theme]) ?? {},
        (g == null ? void 0 : g.default) ?? {},
        (g == null ? void 0 : g[n == null ? void 0 : n.theme]) ?? {}
      );
    });
    return mt({ theme: p.value }), dt(
      () => [n.appearance, n.theme],
      () => {
        mt({ theme: p.value });
      },
      { deep: !0 }
    ), dt(
      () => n.view,
      (s) => {
        const { data: g } = n.supabaseClient.auth.onAuthStateChange(
          (h) => {
            h === "PASSWORD_RECOVERY" ? l("update_password") : h === "USER_UPDATED" && l("sign_in");
          }
        );
        return l(s), () => g.subscription.unsubscribe();
      },
      { deep: !0 }
    ), (s, g) => d.value ? (y(), L(cr, {
      key: 0,
      direction: "horizontal",
      gap: "small",
      theme: n.theme,
      appearance: s.appearance
    }, {
      default: $(() => [
        d.value ? (y(), L(Ro, {
          key: 0,
          supabaseClient: s.supabaseClient,
          appearance: s.appearance,
          providers: s.providers,
          providerScopes: s.providerScopes,
          queryParams: s.queryParams,
          socialLayout: s.socialLayout,
          redirectTo: s.redirectTo,
          onlyThirdPartyProviders: s.onlyThirdPartyProviders,
          i18n: m.value
        }, null, 8, ["supabaseClient", "appearance", "providers", "providerScopes", "queryParams", "socialLayout", "redirectTo", "onlyThirdPartyProviders", "i18n"])) : P("", !0),
        s.onlyThirdPartyProviders ? P("", !0) : (y(), x(Fe, { key: 1 }, [
          o.value === "sign_in" || o.value === "sign_up" ? (y(), L(hr, {
            key: 0,
            supabaseClient: s.supabaseClient,
            appearance: s.appearance,
            redirectTo: s.redirectTo,
            magicLink: s.magicLink,
            showLinks: s.showLinks,
            i18n: m.value,
            additionalData: s.additionalData,
            options: s.options,
            "onAuth:submit": g[0] || (g[0] = (h) => r("auth:submit", h)),
            "onAuth:error": g[1] || (g[1] = (h) => r("auth:error", h))
          }, null, 8, ["supabaseClient", "appearance", "redirectTo", "magicLink", "showLinks", "i18n", "additionalData", "options"])) : P("", !0),
          o.value === "magic_link" ? (y(), L(Fo, {
            key: 1,
            supabaseClient: s.supabaseClient,
            appearance: s.appearance,
            redirectTo: s.redirectTo,
            showLinks: s.showLinks,
            i18n: m.value
          }, null, 8, ["supabaseClient", "appearance", "redirectTo", "showLinks", "i18n"])) : P("", !0)
        ], 64))
      ]),
      _: 1
    }, 8, ["theme", "appearance"])) : (y(), x(Fe, { key: 1 }, [
      o.value === "forgotten_password" ? (y(), L(Wo, {
        key: 0,
        supabaseClient: s.supabaseClient,
        appearance: s.appearance,
        redirectTo: s.redirectTo,
        showLinks: s.showLinks,
        i18n: m.value,
        options: s.options
      }, null, 8, ["supabaseClient", "appearance", "redirectTo", "showLinks", "i18n", "options"])) : P("", !0),
      o.value === "update_password" ? (y(), L(Ho, {
        key: 1,
        supabaseClient: s.supabaseClient,
        appearance: s.appearance,
        i18n: m.value
      }, null, 8, ["supabaseClient", "appearance", "i18n"])) : P("", !0),
      o.value === "verify_otp" ? (y(), L(qo, {
        key: 2,
        supabaseClient: s.supabaseClient,
        appearance: s.appearance,
        otpType: s.otpType,
        i18n: m.value
      }, null, 8, ["supabaseClient", "appearance", "otpType", "i18n"])) : P("", !0),
      o.value === "anonymous_sign_in" ? (y(), L(Ko, {
        key: 3,
        supabaseClient: s.supabaseClient,
        appearance: s.appearance,
        i18n: m.value,
        anonymouslyCredentials: s.anonymouslyCredentials
      }, null, 8, ["supabaseClient", "appearance", "i18n", "anonymouslyCredentials"])) : P("", !0)
    ], 64));
  }
}), ei = {
  install(a) {
    a.component("Auth", Jo);
  }
};
export {
  Jo as Auth,
  Wo as ForgottenPassword,
  Fo as MagicLink,
  Ho as UpdatePassword,
  Qo as UserContextProvider,
  sr as UserContextProviderKey,
  ei as default,
  Le as injectStrict,
  bt as useSupabaseUser
};
