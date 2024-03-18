module.exports = {
  root: true,
  // 继承的规则集
  extends: [
    "stylelint-config-standard", // 使用官方推荐的规则集
    "stylelint-config-recommended-less", // 针对less的规则集
    "stylelint-config-standard-vue" // 针对vue单文件组件的CSS规则集
  ], // 使用插件
  plugins: ["stylelint-order"], // 规定CSS书写属性顺序
  // 自定义CSS书写规则
  rules: {
    indentation: 2, // 缩进为2个空格
    "selector-class-pattern": null, // 不强制限制选择器类名的格式
    "keyframes-name-pattern": null, // 不强制限制动画关键帧名称的格式
    "no-empty-source": null, // 不可以使用空的CSS文件
    "alpha-value-notation": "number", // 强制要求alpha值使用数字表示
    "no-descending-specificity": null, // 不强制限制选择器的优先级
    "unicode-bom": "never", // 不强制使用UTF-8编码
    "font-family-no-missing-generic-family-keyword": null, // 不强制限制字体名称
    "declaration-colon-space-after": "always", // 在冒号之后必须有一个空格
    "declaration-colon-space-before": "never", // 在冒号之前不能有空白符
    "number-max-precision": 2, // 限制数字中允许的小数位数
    "unit-no-unknown": [true, { ignoreUnits: ["rpx"] }], // 禁止未知的单位,如rpx
    // 强制要求伪元素选择器使用正确的语法，并忽略 v-deep、v-global、v-slotted 选择器
    "selector-pseudo-element-no-unknown": [
      true,
      { ignorePseudoElements: ["v-deep", "v-global", "v-slotted"] }
    ],
    // 强制要求伪类选择器使用正确的语法,并忽略 v-deep、v-global 选择器
    "selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["deep", "global"] }],
    // 强制要求使用正确的 @ 规则,并忽略一些特殊的less指令
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "function", "if", "else", "else-if", "each", "include", "mixin"]
      }
    ],
    // 强制要求 @ 规则之前有空行
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless", "first-nested"],
        ignore: ["after-comment"],
        ignoreAtRules: ["else", "else-if"]
      }
    ],
    // 指定书写样式的排序
    "order/properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "display",
      "justify-content",
      "align-items",
      "flex-shrink",
      "float",
      "clear",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "font-size",
      "line-height",
      "font-family",
      "text-align",
      "text-justify",
      "text-indent",
      "text-overflow",
      "text-decoration",
      "white-space",
      "color",
      "background",
      "background-position",
      "background-repeat",
      "background-size",
      "background-color",
      "background-clip",
      "border",
      "border-style",
      "border-width",
      "border-color",
      "border-top-style",
      "border-top-width",
      "border-top-color",
      "border-right-style",
      "border-right-width",
      "border-right-color",
      "border-bottom-style",
      "border-bottom-width",
      "border-bottom-color",
      "border-left-style",
      "border-left-width",
      "border-left-color",
      "border-radius",
      "overflow",
      "overflow-x",
      "overflow-y",
      "opacity",
      "filter",
      "list-style",
      "outline",
      "visibility",
      "box-shadow",
      "text-shadow",
      "resize",
      "transition",
      "content"
    ]
  },
  // 为不同类型的文件或语法提供不同的配置和规则
  overrides: [
    {
      files: ["**/*.(less|css|vue|html)"],
      customSyntax: "postcss-less"
    },
    {
      files: ["**/*.(html|vue)"],
      customSyntax: "postcss-html"
    }
  ]
};
