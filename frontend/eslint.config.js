import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    rules: {
      "no-unused-vars": "warn",
      "vue/multi-word-component-names": "off",
    }
  }
];