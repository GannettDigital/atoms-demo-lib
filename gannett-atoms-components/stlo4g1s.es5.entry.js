GannettAtomsComponents.loadBundle("stlo4g1s",["exports"],function(t){var e=window.GannettAtomsComponents.h,n=function(){function t(){}return t.prototype.render=function(){return document.head.querySelector("style[data-styles]").innerHTML.split("{")[0].split(",").filter(function(t){return!t.includes("demo")}).map(function(t){var n=t.replace("gannett-atoms-component-","");return e("gannett-atoms-component-ui-button",{url:"/demos/"+n+".demo.html"},n)})},Object.defineProperty(t,"is",{get:function(){return"gannett-atoms-component-demo-links"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Rg.woff2) format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Sbd.woff2) format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Bd.woff2) format(\"woff2\");font-style:normal;font-weight:900}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Rg.woff2) format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Sbd.woff2) format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Bd.woff2) format(\"woff2\");font-style:normal;font-weight:900}gannett-atoms-component-ui-button{margin:0 10px 10px 0}"},enumerable:!0,configurable:!0}),t}(),o=function(){function t(){this.url="#",this.target="_top",this.textColor="#ffffff",this.bgColor="#009bff"}return t.prototype.render=function(){return e("div",{class:"button",style:{backgroundColor:this.bgColor}},e("a",{href:this.url,target:this.target,style:{color:this.textColor}},e("slot",null,"Submit")))},Object.defineProperty(t,"is",{get:function(){return"gannett-atoms-component-ui-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{bgColor:{type:String,attr:"bg-color"},target:{type:String,attr:"target"},textColor:{type:String,attr:"text-color"},url:{type:String,attr:"url"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Rg.woff2) format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Sbd.woff2) format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Bd.woff2) format(\"woff2\");font-style:normal;font-weight:900}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Rg.woff2) format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Sbd.woff2) format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Bd.woff2) format(\"woff2\");font-style:normal;font-weight:900}.button{display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;color:#222;font-family:Unify Sans,Helvetica,Arial,sans-serif;font-size:calc(18px + (22 - 18) * ((100vw - 320px) / (1200 - 320)));font-weight:600;line-height:1.15;cursor:pointer;outline:none;-webkit-highlight:none}\@media (min-width:1200px){.button{font-size:22px}}.button a{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;color:#fff;font-size:14px;font-weight:600;font-style:normal;line-height:1.15;padding:12px 15px 13px 15px;text-decoration:none}.button:hover a{background-color:rgba(0,0,0,.15)}"},enumerable:!0,configurable:!0}),t}();t.GannettAtomsComponentDemoLinks=n,t.GannettAtomsComponentUiButton=o,Object.defineProperty(t,"__esModule",{value:!0})});