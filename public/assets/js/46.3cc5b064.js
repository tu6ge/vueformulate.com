(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1106:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"customizing-classes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customizing-classes"}},[t._v("#")]),t._v(" Customizing classes")]),t._v(" "),e("ArticleCard",{attrs:{href:"https://dev.to/justinschroeder/tailwind-vue-formulate-24k1",badge:"Article",headline:"Using Tailwind with Vue Formulate 2.4",copy:"Using the newly customizable classes in Vue Formulate, learn how to leverage the Tailwind CSS utility framework to quickly add custom styling to your forms.",sidebar:!0}}),t._v(" "),e("p",[t._v("There are 4 ways to change the classes applied to DOM elements inside a\n"),e("code",[t._v("FormulateInput")]),t._v(":")]),t._v(" "),e("ol",[e("li",[t._v("Use props on a "),e("code",[t._v("FormulateInput")]),t._v(".")]),t._v(" "),e("li",[t._v("Globally via the "),e("code",[t._v("classes")]),t._v(" option.")]),t._v(" "),e("li",[t._v("Globally via the "),e("code",[t._v("baseClasses")]),t._v(" option.")]),t._v(" "),e("li",[t._v("Manually override the DOM using "),e("RouterLink",{attrs:{to:"/zh/guide/inputs/slots/"}},[t._v("slots")]),t._v(".")],1)]),t._v(" "),e("p",[t._v("In the first two cases, you can use a "),e("code",[t._v("string")]),t._v(", "),e("code",[t._v("array")]),t._v(", or "),e("code",[t._v("function")]),t._v(" to define\nwhich classes should be applied to a given element (e.g., "),e("code",[t._v("label")]),t._v(") in a given\nstate (e.g., field has validation errors). Each element and state is identified\nby "),e("a",{attrs:{href:"#class-keys"}},[t._v("class key")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"changing-classes-with-props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changing-classes-with-props"}},[t._v("#")]),t._v(" Changing classes with props")]),t._v(" "),e("p",[t._v("Changing classes on a given input is easy. Simply target the "),e("a",{attrs:{href:"#class-keys"}},[t._v("class key")]),t._v("\nyou’d like to change with a prop named "),e("code",[t._v("[element class key]-class")]),t._v(". To target a\nstate use "),e("code",[t._v("[element class key]-[state class key]-class")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"strings-to-replace-base-classes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#strings-to-replace-base-classes"}},[t._v("#")]),t._v(" Strings (to replace base classes)")]),t._v(" "),e("p",[t._v("Use "),e("code",[t._v("string")]),t._v(" values in your class prop to "),e("strong",[t._v("replace")]),t._v(" any base classes.")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("The label is using its own class"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label-class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("my-label-class"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- <label class="my-label-class"> --\x3e')]),t._v("\n")])])]),e("h3",{attrs:{id:"arrays-to-append-to-base-classes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arrays-to-append-to-base-classes"}},[t._v("#")]),t._v(" Arrays (to append to base classes)")]),t._v(" "),e("p",[t._v("To "),e("strong",[t._v("append")]),t._v(" classes to the base classes, use an "),e("code",[t._v("array")]),t._v(" in your class prop.")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("The input wrapping div is using its own class"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":wrapper-class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("["),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("my-wrapper-class"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("]"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- <div class="formulate-input-wrapper my-wrapper-class" /> --\x3e')]),t._v("\n")])])]),e("h3",{attrs:{id:"functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),e("p",[t._v("For fine grained control you can use a "),e("code",[t._v("function")]),t._v(". The function will\nreceive 2 arguments, a "),e("a",{attrs:{href:"#class-context"}},[t._v("class context object")]),t._v(" and an array\nof base classes generated using the global options.")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("The element div is using its own class"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":element-class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(context, classes) => ["),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("my-element-class"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("].concat(classes)"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- <div class="my-element-class formulate-input-element formulate-input-element--text" /> --\x3e')]),t._v("\n")])])]),e("h2",{attrs:{id:"changing-classes-globally"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changing-classes-globally"}},[t._v("#")]),t._v(" Changing classes globally")]),t._v(" "),e("p",[t._v("To globally update which classes are applied to "),e("em",[t._v("every")]),t._v(" "),e("code",[t._v("FormulateInput")]),t._v(" by default\nyou can update the "),e("code",[t._v("classes")]),t._v(" option with an "),e("code",[t._v("object")]),t._v(" of "),e("a",{attrs:{href:"#class-keys"}},[t._v("class keys")]),t._v(".")]),t._v(" "),e("p",[t._v("Similar to modifying classes with props the values in the "),e("code",[t._v("classes")]),t._v(" option can\nbe a "),e("code",[t._v("string")]),t._v(", "),e("code",[t._v("array")]),t._v(", or "),e("code",[t._v("function")]),t._v(". Strings "),e("em",[t._v("overwrite")]),t._v(" any base classes,\narrays "),e("em",[t._v("are appended")]),t._v(" to the base classes, and functions allow for fine grained\ncontrol and can accept a "),e("code",[t._v("context")]),t._v(" and "),e("code",[t._v("baseClasses")]),t._v(" arguments respectively.")]),t._v(" "),e("h3",{attrs:{id:"string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VueFormulate "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-formulate'")]),t._v("\n\nVue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueFormulate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  classes"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    outer"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mytheme-wrapper'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// All <FormulateInput> will output:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// <div class="mytheme-wrapper">...')]),t._v("\n")])])]),e("h3",{attrs:{id:"array"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#array"}},[t._v("#")]),t._v(" Array")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\nVue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueFormulate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  classes"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    outer"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mytheme-wrapper'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// All <FormulateInput> will output:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// <div class="formulate-input mytheme-wrapper">...')]),t._v("\n")])])]),e("h3",{attrs:{id:"function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[t._v("#")]),t._v(" Function")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\nVue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueFormulate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  classes"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("outer")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" classes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" classes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mytheme-wrapper'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("mytheme-wrapper--")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// All <FormulateInput> will output:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// <div class="formulate-input mytheme-wrapper mytheme-wrapper--[type]">...')]),t._v("\n")])])]),e("h2",{attrs:{id:"a-custom-baseclasses-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-custom-baseclasses-function"}},[t._v("#")]),t._v(" A custom "),e("code",[t._v("baseClasses")]),t._v(" function")]),t._v(" "),e("p",[t._v("For advanced use cases, you can also choose to override the base classes\nby setting "),e("code",[t._v("options.baseClasses")]),t._v(" to your own function. This function will be\napplied to every "),e("a",{attrs:{href:"#class-keys"}},[t._v("class key")]),t._v(" on every "),e("code",[t._v("<FormulateInput>")]),t._v(". For\nexample, if you wanted to perform a reset of all classes in Vue Formulate you\ncould return an empty array:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("Vue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueFormulate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("baseClasses")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("baseClasses"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"class-keys"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#class-keys"}},[t._v("#")]),t._v(" Class keys")]),t._v(" "),e("p",[t._v("Manipulating classes on DOM elements requires targeting "),e("em",[t._v("which")]),t._v(" element you want\nto add/remove classes on. To allow for precise class targeting, every DOM element\nis assigned an “element key” which can be used to "),e("a",{attrs:{href:"#customizing-classes"}},[t._v("customize classes")]),t._v(".")]),t._v(" "),e("p",[t._v("In addition to “element keys”, Vue Formulate also includes\n“state keys” that are used to describe a specific state of the input. For\nexample "),e("code",[t._v("hasErrors")]),t._v(" is the state key for an input that is currently\ndisplaying an error. Classes defined with “state keys” are "),e("em",[t._v("additive")]),t._v(",\nthey do not replace any base classes.")]),t._v(" "),e("h3",{attrs:{id:"element-keys"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#element-keys"}},[t._v("#")]),t._v(" Element keys")]),t._v(" "),e("h4",{attrs:{id:"for-inputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-inputs"}},[t._v("#")]),t._v(" For inputs")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Key")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("outer")])]),t._v(" "),e("td",[e("code",[t._v(".formulate-input")])]),t._v(" "),e("td",[t._v("The outermost div wrapper.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("wrapper")])]),t._v(" "),e("td",[e("code",[t._v(".formulate-input-wrapper")])]),t._v(" "),e("td",[t._v("A wrapper around the label + interior element.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("label")])]),t._v(" "),e("td",[e("code",[t._v(".formulate-input-label")]),e("br"),e("code",[t._v(".formulate-input-label--[position]")])]),t._v(" "),e("td",[t._v("The label wrapper and its position (before/after).")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("element")])]),t._v(" "),e("td",[e("code",[t._v(".formulate-input-element")]),e("br"),e("code",[t._v(".formulate-input-element--[type]")])]),t._v(" "),e("td",[t._v("The wrapper around the actual "),e("code",[t._v("<input>")]),t._v(" element(s).")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("input")])]),t._v(" "),e("td",[t._v("n/a")]),t._v(" "),e("td",[t._v("Applied directly to the input DOM element. Not used by default to allow for more flexible cascading.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("help")])]),t._v(" "),e("td",[e("code",[t._v(".formulate-input-help")]),e("br"),e("code",[t._v(".formulate-input-help--[position]")])]),t._v(" "),e("td",[t._v("Wrapper around the help text.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("errors")])]),t._v(" "),e("td",[e("code",[t._v(".formulate-input-errors")])]),t._v(" "),e("td",[t._v("Wrapper around the list of errors.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("error")])]),t._v(" "),e("td",[e("code",[t._v(".formulate-input-error")])]),t._v(" "),e("td",[t._v("Wrapper around a single error message.")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:a(858),alt:"Chart of element class keys"}})]),t._v(" "),e("p",[t._v("Some input types have additional class keys that are detailed on their own\npages:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/guide/inputs/types/box/#custom-class-keys"}},[t._v("Boxes")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/guide/inputs/types/sliders/#custom-class-keys"}},[t._v("Sliders")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/guide/inputs/types/file/#custom-class-keys"}},[t._v("Files")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/guide/inputs/types/group/#custom-class-keys"}},[t._v("Groups")])],1)]),t._v(" "),e("h4",{attrs:{id:"for-forms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-forms"}},[t._v("#")]),t._v(" For Forms")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Key")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("form")])]),t._v(" "),e("td",[e("code",[t._v(".formulate-form")])]),t._v(" "),e("td",[t._v("The "),e("code",[t._v("form")]),t._v(" element of a "),e("code",[t._v("FormulateForm")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("form-errors")])]),t._v(" "),e("td",[e("code",[t._v(".formulate-form-errors")])]),t._v(" "),e("td",[t._v("The list ("),e("code",[t._v("ul")]),t._v(") of the "),e("code",[t._v("FormulateErrors")]),t._v(" component.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("form-error")])]),t._v(" "),e("td",[e("code",[t._v(".formulate-form-error")])]),t._v(" "),e("td",[t._v("A list item ("),e("code",[t._v("li")]),t._v(") of the "),e("code",[t._v("FormulateErrors")]),t._v(" component.")])])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Important")]),t._v(" "),e("p",[t._v("When using props to change classes for form errors, the props must be placed on the\n"),e("code",[t._v("FormulateForm")]),t._v(" component. Never use class keys directly on the "),e("code",[t._v("FormulateErrors")]),t._v("\ncomponent.")])]),t._v(" "),e("h3",{attrs:{id:"state-keys"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state-keys"}},[t._v("#")]),t._v(" State keys")]),t._v(" "),e("p",[t._v("State keys make it easy to add a class for a given input state like when a field\nhas a value. "),e("strong",[t._v("State keys must always be combined with an element key.")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Key")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("hasErrors")])]),t._v(" "),e("td",[t._v("For inputs, when the input is visibly "),e("em",[t._v("showing")]),t._v(" errors (if the "),e("code",[t._v("error-behavior")]),t._v(" is not "),e("code",[t._v("live")]),t._v(" this will be "),e("code",[t._v("false")]),t._v(" until the errors are shown). For forms, "),e("code",[t._v("hasErrors")]),t._v(" is true if any of it’s inputs are not valid irregardless of their visibility.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hasValue")])]),t._v(" "),e("td",[t._v("The input has a value.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("isValid")])]),t._v(" "),e("td",[t._v("The input has "),e("em",[t._v("no errors")]),t._v(" regardless of the visibility.")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("You can achieve the same result as a state key by using a function for an\nelement key and appending some values based on state provided in the "),e("code",[t._v("context")]),t._v(".\nThese state keys are a helpful shortcut to the same result.")])]),t._v(" "),e("h4",{attrs:{id:"globally"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#globally"}},[t._v("#")]),t._v(" Globally")]),t._v(" "),e("p",[t._v("To define a state key globally, combine it camel-case style with an element key.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("Vue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueFormulate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  classes"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    labelHasValue"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'has-value'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h4",{attrs:{id:"via-props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#via-props"}},[t._v("#")]),t._v(" Via props")]),t._v(" "),e("p",[t._v("To use a state class key via props, you combine it with a element key (kebab\ncase) "),e("code",[t._v("[element key]-[state-key]-class")]),t._v(". For example, to add a check mark to the\nlabel of a field that is valid:")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Social Security Number"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("placeholder")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx-xx-xxx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("help")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Please enter your social security number: XXX-XX-XXXX"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("332-22-9982"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":validation")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[\n    ["),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("required"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("],\n    ["),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("matches"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", /^\\d{3}\\-\\d{2}\\-\\d{4}$/]\n  ]"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label-is-valid-class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("my-valid-class"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("demo-state-class-key"),t._v(" "),e("h2",{attrs:{id:"class-context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#class-context"}},[t._v("#")]),t._v(" Class context")]),t._v(" "),e("p",[t._v("Global class functions and prop class functions both receive a “class context”\nwith the following values:")]),t._v(" "),e("h4",{attrs:{id:"for-inputs-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-inputs-2"}},[t._v("#")]),t._v(" For inputs")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("attrs")])]),t._v(" "),e("td",[t._v("Attributes that are applied to the input (ex. "),e("code",[t._v("disabled")]),t._v(")")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("classification")])]),t._v(" "),e("td",[t._v("The classification of the input ("),e("code",[t._v("text")]),t._v(", "),e("code",[t._v("group")]),t._v(", "),e("code",[t._v("select")]),t._v(", etc.)")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hasErrors")])]),t._v(" "),e("td",[e("code",[t._v("Boolean")]),t._v(" indicating "),e("em",[t._v("visible")]),t._v(" errors.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hasValue")])]),t._v(" "),e("td",[e("code",[t._v("Boolean")]),t._v(" whether or not the field has a value.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("helpPosition")])]),t._v(" "),e("td",[e("code",[t._v("String")]),t._v(" describing the position of the help text. "),e("code",[t._v("before")]),t._v(" or "),e("code",[t._v("after")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("isValid")])]),t._v(" "),e("td",[e("code",[t._v("Boolean")]),t._v(" indicating if the field is error free, regardless of error visibility.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("labelPosition")])]),t._v(" "),e("td",[e("code",[t._v("String")]),t._v(" describing the position of the label. "),e("code",[t._v("before")]),t._v(" or "),e("code",[t._v("after")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("type")])]),t._v(" "),e("td",[t._v("The "),e("code",[t._v("type")]),t._v(" of input.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("value")])]),t._v(" "),e("td",[t._v("The value of the input.")])])])]),t._v(" "),e("h4",{attrs:{id:"for-forms-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-forms-2"}},[t._v("#")]),t._v(" For forms")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("attrs")])]),t._v(" "),e("td",[t._v("Attributes that are applied to the form")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("classification")])]),t._v(" "),e("td",[t._v("Always "),e("code",[t._v("form")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("errors")])]),t._v(" "),e("td",[t._v("Form errors from error handling or "),e("code",[t._v("invalid-message")]),t._v(" prop.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hasErrors")])]),t._v(" "),e("td",[e("code",[t._v("Boolean")]),t._v(" indicating not all fields are valid (does "),e("em",[t._v("not")]),t._v(" account for visibility like the input’s class context).")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("isLoading")])]),t._v(" "),e("td",[t._v("The loading state of the form (set with a "),e("code",[t._v("Promise")]),t._v(" from the "),e("code",[t._v("@submit")]),t._v(" handler)")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("isValid")])]),t._v(" "),e("td",[t._v("Inverse of "),e("code",[t._v("hasErrors")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("type")])]),t._v(" "),e("td",[t._v("Always "),e("code",[t._v("form")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("value")])]),t._v(" "),e("td",[t._v("The value of the form model")])])])])],1)}),[],!1,null,null,null);s.default=n.exports},858:function(t,s,a){t.exports=a.p+"assets/img/class-keys.682a29e2.svg"}}]);