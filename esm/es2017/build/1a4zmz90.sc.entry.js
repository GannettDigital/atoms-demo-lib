import { h } from '../gannett-atoms-components.core.js';

class DemoWrapper {
    constructor() {
        this.compName = 'index';
        this.isIndex = false;
    }
    render() {
        return (h("div", { class: "wrapper" },
            h("h3", null,
                "ATOMS demo: ",
                h("span", { class: "name" }, this.compName.replace('gannett-atoms-component-', ''))),
            this.isIndex
                ? h("div", { class: "sub" }, "Available demos below.")
                : h("div", { class: "sub" },
                    "Actual component tag: ",
                    h("span", { class: "name" }, this.compName)),
            h("slot", null)));
    }
    static get is() { return "gannett-atoms-component-demo-wrapper"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "compName": {
            "type": String,
            "attr": "comp-name"
        },
        "isIndex": {
            "type": Boolean,
            "attr": "is-index"
        }
    }; }
    static get style() { return ".sc-gannett-atoms-component-demo-wrapper-h{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Rg.woff2) format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Sbd.woff2) format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Bd.woff2) format(\"woff2\");font-style:normal;font-weight:900}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Rg.woff2) format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Sbd.woff2) format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Bd.woff2) format(\"woff2\");font-style:normal;font-weight:900}.wrapper.sc-gannett-atoms-component-demo-wrapper{max-width:1000px;width:100%;padding:30px}.name.sc-gannett-atoms-component-demo-wrapper{color:#009bff}h3.sc-gannett-atoms-component-demo-wrapper{margin:0;padding-bottom:10px}.sub.sc-gannett-atoms-component-demo-wrapper{color:#444;font-family:Unify Sans,Helvetica,Arial,sans-serif;font-size:calc(12px + (14 - 12) * ((100vw - 320px) / (1200 - 320)));font-weight:400;line-height:1.15;color:#7a7a7a;padding-bottom:5px;margin-bottom:20px;border-bottom:1px solid #ddd}\@media (min-width:1200px){.sub.sc-gannett-atoms-component-demo-wrapper{font-size:14px}}"; }
}

export { DemoWrapper as GannettAtomsComponentDemoWrapper };
