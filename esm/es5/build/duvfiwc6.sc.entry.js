import{h}from"../gannett-atoms-components.core.js";var DemoEntry=function(){function e(){this.description="demo description goes here"}return e.prototype.render=function(){return h("div",{class:"wrapper"},h("div",{class:"description"},"Description: ",this.description),h("slot",null))},Object.defineProperty(e,"is",{get:function(){return"gannett-atoms-component-demo-entry"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{description:{type:String,attr:"description"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-gannett-atoms-component-demo-entry-h{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Rg.woff2) format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Sbd.woff2) format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Bd.woff2) format(\"woff2\");font-style:normal;font-weight:900}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Rg.woff2) format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Sbd.woff2) format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Bd.woff2) format(\"woff2\");font-style:normal;font-weight:900}.wrapper.sc-gannett-atoms-component-demo-entry{margin:0 0 20px}.description.sc-gannett-atoms-component-demo-entry{color:#444;font-family:Unify Sans,Helvetica,Arial,sans-serif;font-size:calc(14px + (16 - 14) * ((100vw - 320px) / (1200 - 320)));font-weight:400;line-height:1.15;margin-bottom:5px;color:#7a7a7a}\@media (min-width:1200px){.description.sc-gannett-atoms-component-demo-entry{font-size:16px}}"},enumerable:!0,configurable:!0}),e}();export{DemoEntry as GannettAtomsComponentDemoEntry};