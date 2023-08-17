import { defineComponent as i, ref as f, openBlock as u, createElementBlock as d, Fragment as m, createElementVNode as t, toDisplayString as _, pushScopeId as g, popScopeId as v, createTextVNode as l, renderSlot as b } from "vue";
const r = (e) => (g("data-v-1d5be6d4"), e = e(), v(), e), h = { class: "card" }, y = /* @__PURE__ */ r(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ l(" Edit "),
  /* @__PURE__ */ t("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ l(" to test HMR ")
], -1)), k = /* @__PURE__ */ r(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ l(" Check out "),
  /* @__PURE__ */ t("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ l(", the official Vue + Vite starter ")
], -1)), S = /* @__PURE__ */ r(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ l(" Install "),
  /* @__PURE__ */ t("a", {
    href: "https://github.com/vuejs/language-tools",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ l(" in your IDE for a better DX ")
], -1)), j = /* @__PURE__ */ r(() => /* @__PURE__ */ t("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), V = /* @__PURE__ */ i({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(e) {
    const n = f(0);
    return (o, s) => (u(), d(m, null, [
      t("h1", null, _(o.msg), 1),
      t("div", h, [
        t("button", {
          type: "button",
          onClick: s[0] || (s[0] = (c) => n.value++)
        }, "count is " + _(n.value), 1),
        y
      ]),
      k,
      S,
      j
    ], 64));
  }
});
const p = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [s, c] of n)
    o[s] = c;
  return o;
}, $ = /* @__PURE__ */ p(V, [["__scopeId", "data-v-1d5be6d4"]]), H = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $
}, Symbol.toStringTag, { value: "Module" })), I = {
  name: "MyButton"
};
function M(e, n, o, s, c, B) {
  return u(), d("button", null, [
    b(e.$slots, "default", {}, () => [
      l("自定义按钮1")
    ])
  ]);
}
const O = /* @__PURE__ */ p(I, [["render", M]]), x = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: O
}, Symbol.toStringTag, { value: "Module" })), a = /* @__PURE__ */ Object.assign({ "./HelloWorld.vue": H, "./MyButton.vue": x }), C = {
  install(e) {
    for (let n in a) {
      let o = a[n].default;
      e.component(o.name, o);
    }
  }
};
export {
  C as default
};
