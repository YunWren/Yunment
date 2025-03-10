import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

import prettierConfig from "eslint-config-prettier";



/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  prettierConfig, // 禁用与 Prettier 冲突的规则
  {
    plugins: {
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      "no-console": "warn", // 禁止使用 console，警告级别
      "indent": ["error", 2], // 缩进为 2 个空格
      "quotes": ["error", "single"], // 使用单引号
      "vue/multi-word-component-names": "off", // 关闭 Vue 多单词组件名检查
    },
  },
];