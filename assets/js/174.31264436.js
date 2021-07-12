(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{1108:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"box"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#box"}},[t._v("#")]),t._v(" box")]),t._v(" "),s("p",[t._v("box "),s("RouterLink",{attrs:{to:"/zh/guide/inputs/custom-inputs/#what-is-a-classification"}},[t._v("体系")]),t._v(" 给出了以下类型:")],1),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#checkbox"}},[t._v("复选框")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#radio"}},[t._v("单选框")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("就像原生复选框或单选框一样，box 分类使用 "),s("code",[t._v("checked")]),t._v(" prop 而不是 "),s("code",[t._v("value")]),t._v(" 设置它的初始状态。")]),t._v(" "),s("p",[t._v("这条规则的例外是当 "),s("code",[t._v("options")]),t._v(" 指定了 prop 时，它的行为更像是一个选择列表。在这种情况下，使用 "),s("code",[t._v("value")]),t._v(" 来设置初始状态。")]),t._v(" "),s("p",[t._v("你也可以在任何情况下使用 "),s("code",[t._v("v-model")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"复选框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复选框"}},[t._v("#")]),t._v(" 复选框")]),t._v(" "),s("div",{attrs:{id:"checkbox"}}),t._v(" "),s("h3",{attrs:{id:"简单的复选框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单的复选框"}},[t._v("#")]),t._v(" 简单的复选框")]),t._v(" "),s("p",[t._v("使用单个复选框，结果的值为一个 "),s("code",[t._v("boolean")]),t._v(" 类型。")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("checkbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("This is a single checkbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("demo-input-checkbox"),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("请注意，box 类型标签位与 "),s("code",[t._v("input")]),t._v(" 元素之后。您可以通过添加 "),s("code",[t._v('label-position="before"')]),t._v(" prop 来更改此行为。")])]),t._v(" "),s("h3",{attrs:{id:"多个复选框选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多个复选框选项"}},[t._v("#")]),t._v(" 多个复选框选项")]),t._v(" "),s("p",[t._v("通常使用多个复选框来提供一系列可选选项。这可以通过单个 "),s("code",[t._v("FormulateInput")]),t._v(" 和 "),s("code",[t._v("options")]),t._v(" prop 来完成。这些可选项代表了一个数组。")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":options")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{first: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("First"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", second: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", third: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Third"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", fourth: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Fourth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("checkbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("This is a label for all the options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("demo-input-checkbox-multi"),t._v(" "),s("h4",{attrs:{id:"数组选项的语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组选项的语法"}},[t._v("#")]),t._v(" 数组选项的语法")]),t._v(" "),s("p",[t._v("除了将键/值对的对象作为 "),s("code",[t._v("option")]),t._v(" prop 传递之外，您还可以传递具有 "),s("code",[t._v("value")]),t._v(" 和 "),s("code",[t._v("label")]),t._v(" 属性的对象数组。\n使用此语法，您可以在每个 input 元素上可选的定义 "),s("code",[t._v("id")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" label"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'First'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-first'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'second'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" label"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Second'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h4",{attrs:{"data-new":"",id:"数组字符串语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组字符串语法"}},[t._v("#")]),t._v(" 数组字符串语法 "),s("Badge",{attrs:{text:"2.5"}})],1),t._v(" "),s("p",[t._v("您还可以使用简单的字符串数组。在这种情况下，复选框的 "),s("code",[t._v("value")]),t._v(" 和 "),s("code",[t._v("label")]),t._v(" 值都是这个字符串。")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":options")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("["),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("First"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Third"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Fourth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("checkbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("This is a label for all the options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h2",{attrs:{id:"单选框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单选框"}},[t._v("#")]),t._v(" 单选框")]),t._v(" "),s("div",{attrs:{id:"radio"}}),t._v(" "),s("p",[t._v("单选框的语法跟复选框相同")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":options")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{first: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("First"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", second: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", third: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Third"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", fourth: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Fourth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("radio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("This is a label for all the options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("demo-input-radio"),t._v(" "),s("h2",{attrs:{id:"box-表单域的样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#box-表单域的样式"}},[t._v("#")]),t._v(" box 表单域的样式")]),t._v(" "),s("p",[t._v("众所周知，复选框和单选框的默认样式令人沮丧。为了提供帮助，Vue Formulate 会在 "),s("code",[t._v("<input>")]),t._v(" 标签之后\n立即放置一个 "),s("code",[t._v("<label>")]),t._v(" 标签。这允许使用 "),s("code",[t._v(":checked")]),t._v(" 伪类选择器轻松实现同级选择器 css 的规则。\n默认的 snow 主题使用这种技术来设置复选框的样式")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("input ~ label")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* style the label to look like a checkbox */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("input:checked ~ label")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* make the label look like a checked checkbox */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果你不想在你的项目中使用这种 “装饰” 的标签, 你可以通过设置全局选项 "),s("code",[t._v("useInputDecorators")]),t._v(" 为 "),s("code",[t._v("false")]),t._v(" 来禁用它 :")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 你注册 Vue Formulate 的地方")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueFormulate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  useInputDecorators"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"自定义-class-名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义-class-名"}},[t._v("#")]),t._v(" 自定义 class 名")]),t._v(" "),s("p",[t._v("除了所有 "),s("RouterLink",{attrs:{to:"/zh/guide/theming/#customizing-classes"}},[t._v("全局 class 名")]),t._v(" 之外， 还可以使用以下方法：")],1),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("decorator")])]),t._v(" "),s("td",[s("code",[t._v(".formulate-input-decorator")])]),t._v(" "),s("td",[t._v("用于美化紧跟在 "),s("code",[t._v("<input>")]),t._v(" 元素之后的 "),s("code",[t._v("<label>")]),t._v(" 元素")])])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("仅字符串值")]),t._v(" "),s("p",[t._v("尽管 Vue Formulate 支持非字符串值，但 HTML 的 radio 和 checkbox 表单域只支持字符串值，\n使用整数或布尔值作为键会导致意外行为。此规则的唯一例外是单个复选框（无 options），Vue 会自动为您转换为布尔值。")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);