(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{1098:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("Vue Formulate is the easiest way to build forms using "),s("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("ArticleCard",{attrs:{href:"https://dev.to/justinschroeder/introducing-vue-formulate-truly-delightful-form-authoring-56f5",image:"/assets/img/og.jpg","image-alt":"Vue Formulate",badge:"Article",headline:"Introducing Vue Formulate — truly delightful form authoring.",copy:"An overview of Vue Formulate by the author. Why it exists, what it does, and where it is going.",sidebar:!0}}),t._v(" "),s("p",[t._v("Although forms are required in almost every project developers encounter they are\nsurprisingly tedious to create. Vue Formulate is built to increase developer happiness\nby anticipating pain points and exposing clean APIs — with sensible defaults — that\nmake implementing common features effortless. In fact, "),s("strong",[t._v("there are only 2\ncomponents that need to be learned")]),t._v(" to create nearly any type of form: "),s("code",[t._v("FormulateInput")]),t._v("\nand "),s("code",[t._v("FormulateForm")]),t._v(".")]),t._v(" "),s("p",[t._v("With Vue Formulate developers are empowered to:")]),t._v(" "),s("p",[t._v("✓ Create any input element with a single component"),s("br"),t._v("\n✓ Use native "),s("code",[t._v("v-model")]),t._v(" "),s("a",{attrs:{href:"#model-binding"}},[t._v("binding")]),t._v(" across all input types"),s("br"),t._v("\n✓ "),s("RouterLink",{attrs:{to:"/guide/forms/#setting-initial-values"}},[t._v("Re-populate an entire form")]),t._v(" from a single object"),s("br"),t._v("\n✓ "),s("RouterLink",{attrs:{to:"/guide/forms/#generating-forms"}},[t._v("Generate a form")]),t._v(" using JSON"),s("br"),t._v("\n✓ Easily add field labels"),s("br"),t._v("\n✓ Easily add help text"),s("br"),t._v("\n✓ "),s("RouterLink",{attrs:{to:"/guide/inputs/types/group/"}},[t._v("Group fields")]),t._v(" into custom data structures"),s("br"),t._v("\n✓ "),s("RouterLink",{attrs:{to:"/guide/inputs/types/group/#repeatable-groups"}},[t._v("Repeat grouped fields")]),t._v(" for complex UIs"),s("br"),t._v("\n✓ Perform robust "),s("a",{attrs:{href:"/guide/validation"}},[t._v("form validation")]),s("br"),t._v("\n✓ Create "),s("RouterLink",{attrs:{to:"/guide/validation/#custom-validation-rules"}},[t._v("custom validation")]),t._v(" rules"),s("br"),t._v("\n✓ Modify default "),s("RouterLink",{attrs:{to:"/guide/validation/#customize-validation-messages"}},[t._v("validation messages")]),s("br"),t._v("\n✓ Create and share "),s("a",{attrs:{href:"/guide/inputs/custom-inputs"}},[t._v("custom inputs")]),s("br"),t._v("\n✓ Override default component templates with "),s("a",{attrs:{href:"/guide/inputs/slots"}},[t._v("scoped slots")]),s("br"),t._v("\n✓ And "),s("a",{attrs:{href:"/changelog"}},[t._v("so much more")]),s("br")],1),t._v(" "),s("h2",{attrs:{id:"inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),s("p",[t._v("Every type of input in Vue Formulate is an instance of the "),s("code",[t._v("FormulateInput")]),t._v("\ncomponent. This component is used whether you need a text input, password,\nselect list, checkbox, or date picker. It doesn't get much easier\nto remember than that.")]),t._v(" "),s("h3",{attrs:{id:"a-simple-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-simple-example"}},[t._v("#")]),t._v(" A simple example")]),t._v(" "),s("p",[t._v("The simplest implementation of Vue Formulate is outputting a\nsingle "),s("code",[t._v("FormulateInput")]),t._v(" with no additional configuration:")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("Output")]),t._v(":")]),t._v(" "),s("demo-1-inputs"),t._v(" "),s("p",[t._v("Familiar right? This is essentially equivalent to the native HTML:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"outputting-different-input-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputting-different-input-types"}},[t._v("#")]),t._v(" Outputting different input types")]),t._v(" "),s("p",[s("strong",[t._v("All Vue Formulate inputs share this same syntax.")]),t._v(" Swap out the value of "),s("code",[t._v("type")]),t._v("\nto get the desired element, even if the internal HTML structure differs. For example\na "),s("code",[t._v("<textarea>")]),t._v(" is a completely different element than "),s("code",[t._v("<input>")]),t._v(" in HTML, but in\nVue Formulate you only need to remember to change the "),s("code",[t._v("type")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("textarea"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("Output")]),t._v(":")]),t._v(" "),s("demo-2-inputs"),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("With Vue Formulate you only need to use the supplied "),s("code",[t._v("FormulateInput")]),t._v(" element and\npass the appropriate "),s("code",[t._v("type")]),t._v(" to generate the input type that you need. No need to\nremember a variety of component names to handle different input types.")])]),t._v(" "),s("h2",{attrs:{id:"validation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[t._v("#")]),t._v(" Validation")]),t._v(" "),s("p",[t._v("Input and form validation are a core feature and easy to add.")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("validation")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("required|email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("demo-2-validation"),t._v(" "),s("p",[t._v("Read more about on the "),s("a",{attrs:{href:"/guide/validation"}},[t._v("validation documentation page")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"model-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-binding"}},[t._v("#")]),t._v(" Model binding")]),t._v(" "),s("p",[t._v("Vue Formulate uses model binding ("),s("code",[t._v("v-model")]),t._v(") to read/write values in and out of\ninputs. You can bind data on a "),s("code",[t._v("<FormulateInput>")]),t._v(", "),s("code",[t._v("<FormulateForm>")]),t._v(", or both (read\nthe "),s("a",{attrs:{href:"/guide/forms"}},[t._v("forms")]),t._v(" documentation for information on form binding).")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("What is your name?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("strong")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("em")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ value }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("em")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("!"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("strong")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My initial value'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("Output:")])]),t._v(" "),s("demo-1-binding"),t._v(" "),s("h3",{attrs:{id:"double-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#double-binding"}},[t._v("#")]),t._v(" Double binding")]),t._v(" "),s("p",[t._v("Because the input's value is bound to the model you can bind the\nmodel to multiple inputs, even triggering validation errors on those other\nelements.")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Favorite car brand?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("validation")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("not:Toyota"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("validation-name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("car brand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("error-behavior")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("live"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("brand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("radio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("brand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("error-behavior")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("live"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("validation")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("in:Toyota,Honda"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":options")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{Toyota: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("I like Toyota"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", Honda: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("I like Honda"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(" }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      brand"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Honda'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("Output:")]),t._v(" "),s("demo-2-binding")],1),t._v(" "),s("h3",{attrs:{id:"array-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array-binding"}},[t._v("#")]),t._v(" Array binding")]),t._v(" "),s("p",[t._v("Certain types of inputs set an "),s("code",[t._v("array")]),t._v(" of values on their model.")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("checkbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Which animals make good pets?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":options")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{dog: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Dogs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", alligators: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Alligators"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", cat: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Cats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("Output:")])]),t._v(" "),s("demo-3-binding"),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Read more...")]),t._v(" "),s("p",[t._v("Model binding isn't all you can do with a "),s("code",[t._v("FormulateInput")]),t._v(" element! There are\nlots of additional configuration options.")]),t._v(" "),s("p",[t._v("Read more on the "),s("a",{attrs:{href:"/guide/inputs"}},[t._v("inputs page →")])])]),t._v(" "),s("h3",{attrs:{id:"form-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#form-binding"}},[t._v("#")]),t._v(" Form binding")]),t._v(" "),s("p",[t._v("In addition to binding values to individual "),s("code",[t._v("FormulateInput")]),t._v(" fields, you can\nalso collect all the values from a collection of inputs by wrapping them in\na "),s("code",[t._v("FormulateForm")]),t._v(" and placing a "),s("code",[t._v("v-model")]),t._v(" on that element.")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateForm")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("formValues"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("What is your name?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("validation")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("required"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("How old are you?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("validation")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("required|number|max:120"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Sign up"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("FormulateForm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("demo-form"),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Read more...")]),t._v(" "),s("p",[t._v("That’s not all folks...the "),s("code",[t._v("FormulateForm")]),t._v(" element has several other really\nvaluable features like form submission, group validation, and file uploads.")]),t._v(" "),s("p",[t._v("Read more about "),s("a",{attrs:{href:"/guide/forms"}},[t._v("using forms →")])])]),t._v(" "),s("h2",{attrs:{id:"what-it-isn-t"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-it-isn-t"}},[t._v("#")]),t._v(" What it isn’t")]),t._v(" "),s("p",[t._v("While Vue Formulate is a powerful tool for building, validating, and handling errors\non forms — there are some things this package does not aim to do:")]),t._v(" "),s("ol",[s("li",[t._v("This is not a UI framework or a "),s("em",[t._v("layout")]),t._v(" tool. Want inputs next to each\nother? Cool! Wrap some inputs in a "),s("code",[t._v("<div>")]),t._v(" and sprinkle on some "),s("code",[t._v("flexbox")]),t._v(".\nThis package assumes you'll still be responsible for your form layout.")]),t._v(" "),s("li",[t._v("This package is BYOB — bring your own backend. Vue Formulate doesn't care\na lick about the backend you choose (the closest it gets to caring is when\nusing "),s("RouterLink",{attrs:{to:"/guide/inputs/types/file/"}},[t._v("file inputs")]),t._v(")")],1)]),t._v(" "),s("h2",{attrs:{id:"why-not"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-not"}},[t._v("#")]),t._v(" Why not...?")]),t._v(" "),s("h3",{attrs:{id:"vuetify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuetify"}},[t._v("#")]),t._v(" Vuetify")]),t._v(" "),s("p",[t._v("Vuetify is full UI framework while Vue Formulate is a focused tool for building\nforms. Some people prefer not to use large UI frameworks, don’t have them on a\npre-existing project, don’t want to learn a new framework, or just prefer\nwriting their own narrowly scoped styles. Also, we think composing forms in\nVue Formulate is second-to-none.")]),t._v(" "),s("h3",{attrs:{id:"buefy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#buefy"}},[t._v("#")]),t._v(" Buefy")]),t._v(" "),s("p",[t._v("Similar to Vuetify, Buefy is a full UI framework. If you’re already using Bulma\nor you're looking for a comprehensive UI solution it’s a solid choice.\nVue Formulate is happy to live in the context of any UI framework and still\noffers the benefits of slick form composition, validation, and error handling\nto name a few. Even still there are plenty of people who don’t want or need a\nfull UI framework that would benefit from Vue Formulate’s focused approach.")]),t._v(" "),s("h3",{attrs:{id:"vue-forms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-forms"}},[t._v("#")]),t._v(" vue-forms")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("vue-forms")]),t._v(" package is focused exclusively on form validation, while\nVue Formulate takes a more holistic and opinionated approach to forms and ships\nwith UI scaffolding, validation, and data modeling. We wanted to make form\ncomposition "),s("em",[t._v("a lot easier")]),t._v(" for developers while still increasing the overall\nquality — try it out.")]),t._v(" "),s("h3",{attrs:{id:"veevalidate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#veevalidate"}},[t._v("#")]),t._v(" VeeValidate")]),t._v(" "),s("p",[t._v("VeeValidate is another great option for Vue form validation, and thats it’s\nprimary mission — validation. Vue Formulate makes building high quality forms\neasier by including validation as a sub-feature of the field composition itself.\nBuilding forms with Vue Formulate is super easy and blazing fast — of course if\nyou need the extra validation power, you still have it. You can write any "),s("RouterLink",{attrs:{to:"/guide/validation/#custom-validation-rules"}},[t._v("custom\nvalidation logic")]),t._v(" you want, even on\nindividual fields.")],1),t._v(" "),s("h3",{attrs:{id:"vuelidate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuelidate"}},[t._v("#")]),t._v(" Vuelidate")]),t._v(" "),s("p",[t._v("Yet another great option for form validation, but focused solely on validation.\nVue Formulate provides additional scaffolding allowing developers to create complex\nforms with minimal friction with validation and error handling included.")]),t._v(" "),s("h3",{attrs:{id:"vue-form-generator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-form-generator"}},[t._v("#")]),t._v(" vue-form-generator")]),t._v(" "),s("p",[t._v("Generating forms from JSON is great, and also a sub-feature of Vue Formulate. Since\nVue Formulate uses a single element to create any input type form generation from\na JSON string or JavaScript module is as simple as using a "),s("code",[t._v("v-for")]),t._v(" directive.\n"),s("RouterLink",{attrs:{to:"/guide/forms/#generating-forms"}},[t._v("Checkout the documentation")]),t._v(".")],1)],1)}),[],!1,null,null,null);a.default=e.exports}}]);