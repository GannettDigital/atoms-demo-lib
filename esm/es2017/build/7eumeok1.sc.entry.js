import { h } from '../gannett-atoms-components.core.js';

class DemoHead {
    constructor() {
        this.text = 'default text';
    }
    static get is() { return "gannett-atoms-component-demo-head"; }
    static get properties() { return {
        "text": {
            "type": String,
            "attr": "text"
        }
    }; }
    static get style() { return ":host{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Rg.woff2) format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Sbd.woff2) format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Bd.woff2) format(\"woff2\");font-style:normal;font-weight:900}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Rg.woff2) format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Sbd.woff2) format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Bd.woff2) format(\"woff2\");font-style:normal;font-weight:900}body,html{margin:0;padding:0}body{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:100vw;height:100vh;color:#222;font-family:Unify Sans,Helvetica,Arial,sans-serif;font-size:calc(24px + (34 - 24) * ((100vw - 320px) / (1200 - 320)));font-weight:900;line-height:1.15}\@media (min-width:1200px){body{font-size:34px}}"; }
}

export { DemoHead as GannettAtomsComponentDemoHead };
