(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1126:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"box"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#box"}},[t._v("#")]),t._v(" Box")]),t._v(" "),s("p",[t._v("The box "),s("RouterLink",{attrs:{to:"/guide/inputs/custom-inputs/#what-is-a-classification"}},[t._v("classification")]),t._v(" is given to the following types:")],1),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#checkbox"}},[t._v("checkbox")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#radio"}},[t._v("radio")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Just like a native checkbox or radio, the "),s("code",[t._v("box")]),t._v(" classification uses the "),s("code",[t._v("checked")]),t._v("\nprop instead of "),s("code",[t._v("value")]),t._v(" to set it’s initial state.")]),t._v(" "),s("p",[t._v("The exception to this rule is when the "),s("code",[t._v("options")]),t._v(" prop is specified causing it to\nact more like a select list. In this case, use "),s("code",[t._v("value")]),t._v(" to set the initial state.")]),t._v(" "),s("p",[t._v("You can also use "),s("code",[t._v("v-model")]),t._v(" in either case.")])]),t._v(" "),s("h2",{attrs:{id:"checkbox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#checkbox"}},[t._v("#")]),t._v(" Checkbox")]),t._v(" "),s("h3",{attrs:{id:"single-checkbox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#single-checkbox"}},[t._v("#")]),t._v(" Single checkbox")]),t._v(" "),s("p",[t._v("With a single checkbox, the value of the result is a "),s("code",[t._v("boolean")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("checkbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("This is a single checkbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("demo-input-checkbox"),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Tip")]),t._v(" "),s("p",[t._v("Notice that the labels of "),s("code",[t._v("box")]),t._v(" types come after the input element. You can\nchange this behavior by adding "),s("code",[t._v('label-position="before"')]),t._v(" as a prop.")])]),t._v(" "),s("h3",{attrs:{id:"multiple-checkbox-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multiple-checkbox-options"}},[t._v("#")]),t._v(" Multiple checkbox options")]),t._v(" "),s("p",[t._v("Often multiple checkboxes are used to offer a range of selectable options. This\ncan be done with a single "),s("code",[t._v("FormulateInput")]),t._v(" and the "),s("code",[t._v("options")]),t._v(" prop. The\nselections are represented as an array.")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":options")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{first: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("First"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", second: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", third: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Third"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", fourth: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Fourth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("checkbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("This is a label for all the options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("demo-input-checkbox-multi"),t._v(" "),s("h4",{attrs:{id:"array-option-syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array-option-syntax"}},[t._v("#")]),t._v(" Array option syntax")]),t._v(" "),s("p",[t._v("In addition to passing an object of key/value pairs as the "),s("code",[t._v("option")]),t._v(" prop, you\ncan alternatively pass an array of objects with "),s("code",[t._v("value")]),t._v(" and "),s("code",[t._v("label")]),t._v(" properties.\nUsing this syntax you can optionally define an "),s("code",[t._v("id")]),t._v(" attribute to be applied to\neach "),s("code",[t._v("input")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" label"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'First'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-first'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'second'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" label"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Second'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h4",{attrs:{"data-new":"",id:"array-string-syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array-string-syntax"}},[t._v("#")]),t._v(" Array string syntax "),s("Badge",{attrs:{text:"2.5"}})],1),t._v(" "),s("p",[t._v("You can also use a simple array of strings. In this case both the "),s("code",[t._v("value")]),t._v(" and\nthe "),s("code",[t._v("label")]),t._v(" of the checkboxes will be the string value.")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":options")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("["),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("First"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Third"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Fourth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("checkbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("This is a label for all the options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h2",{attrs:{id:"radio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#radio"}},[t._v("#")]),t._v(" Radio")]),t._v(" "),s("p",[t._v("The syntax for radio inputs is identical to checkboxes.")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":options")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{first: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("First"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", second: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", third: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Third"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", fourth: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Fourth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("radio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("This is a label for all the options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("demo-input-radio"),t._v(" "),s("h2",{attrs:{id:"styling-box-inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#styling-box-inputs"}},[t._v("#")]),t._v(" Styling box inputs")]),t._v(" "),s("p",[t._v("Checkboxes and radio boxes are notoriously frustrating to style. To assist,\nVue Formulate places a "),s("code",[t._v("<label>")]),t._v(" element immediately after the "),s("code",[t._v("<input>")]),t._v(" tag.\nThis allows for easy sibling selector css rules using the "),s("code",[t._v(":checked")]),t._v(" psuedo-class\nselector. The default snow theme using this technique to style checkboxes and\ninputs.")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("input ~ label")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* style the label to look like a checkbox */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("input:checked ~ label")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* make the label look like a checked checkbox */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v('If you don\'t want to use this "decorator" label on your project, you can disable\nit by setting the global option '),s("code",[t._v("useInputDecorators")]),t._v(" to "),s("code",[t._v("false")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Wherever you register Vue Formulate")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueFormulate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  useInputDecorators"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"custom-class-keys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-class-keys"}},[t._v("#")]),t._v(" Custom class keys")]),t._v(" "),s("p",[t._v("In addition to all "),s("RouterLink",{attrs:{to:"/guide/theming/#customizing-classes"}},[t._v("global class keys")]),t._v("\nfollowing are available:")],1),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("decorator")])]),t._v(" "),s("td",[s("code",[t._v(".formulate-input-decorator")])]),t._v(" "),s("td",[t._v("A secondary "),s("code",[t._v("<label>")]),t._v(" element position immediately after the "),s("code",[t._v("<input>")]),t._v(" element for styling “pretty” checkboxes.")])])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("String values only")]),t._v(" "),s("p",[t._v("Although Vue Formulate supports non-string values, HTML "),s("code",[t._v("radio")]),t._v(" and "),s("code",[t._v("checkbox")]),t._v("\ninputs only support string values, using integers or booleans as keys will\nresult in unexpected behavior. The only exception to this rule is single\ncheckboxes (no "),s("code",[t._v("options")]),t._v("), which Vue will cast to booleans for you automatically.")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);