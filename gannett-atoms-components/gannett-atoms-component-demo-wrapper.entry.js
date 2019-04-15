const h = window.GannettAtomsComponents.h;

/**
 * gannett-atoms-component-demo-wrapper is a body wrapper for the demo page.
 */
class DemoWrapper {
    constructor() {
        /**
         * The demo name for the component header.
         */
        this.compName = 'index';
        /**
         * Flag for the index page to disable sub header.
         */
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
    static get style() { return ":host{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Rg.woff2\") format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Sbd.woff2\") format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Bd.woff2\") format(\"woff2\");font-style:normal;font-weight:900}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Rg.woff2\") format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Sbd.woff2\") format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Bd.woff2\") format(\"woff2\");font-style:normal;font-weight:900}:host{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.wrapper{max-width:1000px;width:100%;padding:30px}.name{color:#009bff}h3{color:#222;font-family:\"Unify Sans\",Helvetica,Arial,sans-serif,sans-serif;font-size:calc(28px + (40 - 28) * ((100vw - 320px) / (1200 - 320)));font-weight:900;line-height:1.15;margin:0;padding-bottom:10px}\@media all and (min-width: 1200px){h3{font-size:40px}}.sub{color:#444;font-family:\"Unify Sans\",Helvetica,Arial,sans-serif,sans-serif;font-size:calc(12px + (14 - 12) * ((100vw - 320px) / (1200 - 320)));font-weight:400;line-height:1.15;color:#7A7A7A;padding-bottom:5px;margin-bottom:20px;border-bottom:1px solid #ddd}\@media all and (min-width: 1200px){.sub{font-size:14px}}"; }
}

export { DemoWrapper as GannettAtomsComponentDemoWrapper };
