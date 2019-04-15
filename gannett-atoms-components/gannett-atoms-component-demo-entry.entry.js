const h = window.GannettAtomsComponents.h;

/**
 * gannett-atoms-component-demo-entry is used as a wrapper for individual demo entries.
 * The actual element demo should be slotted into this component.
 */
class DemoEntry {
    constructor() {
        /**
         * Description for the current demo entry
         */
        this.description = 'demo description goes here';
    }
    render() {
        return (h("div", { class: "wrapper" },
            h("div", { class: "description" },
                "Description: ",
                this.description),
            h("slot", null)));
    }
    static get is() { return "gannett-atoms-component-demo-entry"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "description": {
            "type": String,
            "attr": "description"
        }
    }; }
    static get style() { return ":host{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Rg.woff2\") format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Sbd.woff2\") format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Bd.woff2\") format(\"woff2\");font-style:normal;font-weight:900}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Rg.woff2\") format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Sbd.woff2\") format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Bd.woff2\") format(\"woff2\");font-style:normal;font-weight:900}.wrapper{margin:0 0 20px}.description{color:#444;font-family:\"Unify Sans\",Helvetica,Arial,sans-serif,sans-serif;font-size:calc(14px + (16 - 14) * ((100vw - 320px) / (1200 - 320)));font-weight:400;line-height:1.15;margin-bottom:5px;color:#7A7A7A}\@media all and (min-width: 1200px){.description{font-size:16px}}:host>div{color:#444;font-family:\"Unify Sans\",Helvetica,Arial,sans-serif,sans-serif;font-size:calc(14px + (16 - 14) * ((100vw - 320px) / (1200 - 320)));font-weight:400;line-height:1.15}\@media all and (min-width: 1200px){:host>div{font-size:16px}}"; }
}

export { DemoEntry as GannettAtomsComponentDemoEntry };
