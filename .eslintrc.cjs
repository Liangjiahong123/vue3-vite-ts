/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "prettier",
    "plugin:prettier/recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
    "./.eslintrc-auto-import.json"
  ],
  plugins: ["vue"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    requireConfigFile: false
  },
  rules: {
    "vue/multi-word-component-names": "off", // 关闭Vue组件名称必须使用多个单词的规则
    "no-return-assign": "off", // 关闭函数中允许使用赋值表达式的规则
    "no-param-reassign": "off", // 关闭函数参数不允许重新赋值的规则
    "guard-for-in": "off", // 关闭for-in循环中需要使用hasOwnProperty()的规则
    "vue/component-tags-order": ["warn", { order: ["script", "template", "style"] }], // 警告出现未使用过的变量
    "no-unused-vars": ["warn", { vars: "all", args: "none" }], // 警告出现未使用过的变量
    "no-var": "error", // 要求使用 let 或 const 而不是 var
    "no-new": "off",
    "eol-last": "off",
    "no-shadow": "off"
  },
};
