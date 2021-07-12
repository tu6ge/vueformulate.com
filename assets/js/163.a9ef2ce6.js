(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{1117:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("A note on Vue 3")]),t._v(" "),s("p",[t._v("Vue Formulate is compatible with Vue 2. We're working hard on supporting Vue 3. To be notified when there are updates on Vue 3 compatibility "),s("a",{attrs:{href:"https://mailchi.mp/193f17457807/vue-formulate-newsletter",target:"_blank",rel:"noopener noreferrer"}},[t._v("subscribe to the Vue Formulate newsletter"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h1",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("The preferred way to use Vue Formulate is to install via your favorite JavaScript\npackage manager.")]),t._v(" "),s("h2",{attrs:{id:"npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[t._v("#")]),t._v(" NPM")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @braid/vue-formulate\n")])])]),s("h2",{attrs:{id:"yarn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[t._v("#")]),t._v(" Yarn")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @braid/vue-formulate\n")])])]),s("h2",{attrs:{id:"direct-download"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#direct-download"}},[t._v("#")]),t._v(" Direct download")]),t._v(" "),s("p",[t._v("Alternatively, if your project doesn't have a build process, you can\ndownload the repository and manually link to the minified version:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/vue-formulate/dist/formulate.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Due to DOM limitations, when mounting Vue Formulate in DOM templates\n(outside of single-file components) all the component names will need to be\n"),s("a",{attrs:{href:"https://vuejs.org/v2/style-guide/#Component-name-casing-in-templates-strongly-recommended",target:"_blank",rel:"noopener noreferrer"}},[t._v("lower-cased, hyphen separated and with a closing tag"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[s("code",[t._v("<FormulateInput />")]),t._v(" ⭢ "),s("code",[t._v("<formulate-input></formulate-input>")])])]),t._v(" "),s("h2",{attrs:{id:"cdn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[t._v("#")]),t._v(" CDN")]),t._v(" "),s("p",[t._v("Similar to a direct download, you can load Vue Formulate directly off of a\nCDN like "),s("a",{attrs:{href:"https://www.jsdelivr.com/package/npm/@braid/vue-formulate?path=dist",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSDeliver"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"add-to-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-to-vue"}},[t._v("#")]),t._v(" Add to Vue")]),t._v(" "),s("p",[t._v("Once Vue Formulate has been downloaded you need to install it with Vue.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VueFormulate "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@braid/vue-formulate'")]),t._v("\n\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueFormulate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("When loading Vue Formulate as a commonJS module (think "),s("code",[t._v("require()")]),t._v(") it may be\nnecessary to use "),s("code",[t._v("VueFormulate.default")]),t._v(" when registering with Vue:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" VueFormulate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@braid/vue-formulate'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueFormulate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("h3",{attrs:{id:"configuration-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[t._v("#")]),t._v(" Configuration options")]),t._v(" "),s("p",[t._v("If you need custom configuration options, you can pass a second argument with\nan object of configuration options.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueFormulate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{"data-new":"",id:"nuxt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuxt"}},[t._v("#")]),t._v(" Nuxt "),s("Badge",{attrs:{text:"2.5.1"}})],1),t._v(" "),s("p",[t._v("It's easy to use Vue Formulate on Nuxt too. The easiest way to get started with\nVue Formulate on a Nuxt project is to use the included Nuxt module.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nuxt.config.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  buildModules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@braid/vue-formulate/nuxt'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"nuxt-module-configuration-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-module-configuration-file"}},[t._v("#")]),t._v(" Nuxt module configuration file")]),t._v(" "),s("p",[t._v("To configure Vue Formulate with additional "),s("RouterLink",{attrs:{to:"/guide/plugins/"}},[t._v("plugins")]),t._v(",\n"),s("RouterLink",{attrs:{to:"/guide/internationalization/"}},[t._v("locales")]),t._v(", "),s("RouterLink",{attrs:{to:"/guide/validation/"}},[t._v("validation rules")]),t._v("\nand more you can create a "),s("code",[t._v("formulate.config.js")]),t._v(" file in the root of\nyour Nuxt project which will be imported and used by the Vue Formulate Nuxt module.\nIf you wish to place your configuration file somewhere besides the root of your Nuxt\nproject, just tell the Nuxt module where it can locate the configuration file using\nthe "),s("code",[t._v("configPath")]),t._v(" argument of the "),s("code",[t._v("formulate")]),t._v(" object in your "),s("code",[t._v("nuxt.config.js")]),t._v(" file.")],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nuxt.config.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  formulate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    configPath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~/different/location/of/formulate.config.js'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Your "),s("code",[t._v("formulate.config.js")]),t._v(" file should export an object which will be passed to the\nVue Formulate registration via "),s("code",[t._v("Vue.use()")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// formulate.config.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" de "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@braid/vue-formulate-i18n'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("de"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  locale"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'de'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("foobar")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"styling-theming"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#styling-theming"}},[t._v("#")]),t._v(" Styling/theming")]),t._v(" "),s("p",[t._v("If you’d like to use the default theme (the one used in these docs), you can\n"),s("RouterLink",{attrs:{to:"/guide/theming/#default-theme"}},[t._v("easily include that css on your page")]),t._v(". Vue\nFormulate is also extremely easy to "),s("RouterLink",{attrs:{to:"/guide/theming/#custom-theme"}},[t._v("theme on your own")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"ie11-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ie11-support"}},[t._v("#")]),t._v(" IE11 support")]),t._v(" "),s("p",[t._v("While Internet Explorer 11 is supported polyfills for ES2015 language features\nare not included in Vue Formulate. For those who do require IE11 support we\nrecommend using "),s("a",{attrs:{href:"https://polyfill.io/v3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("polyfill.io"),s("OutboundLink")],1),t._v(" or similar service to shim\nES2015 features.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://polyfill.io/v3/polyfill.min.js?features=es2015"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);