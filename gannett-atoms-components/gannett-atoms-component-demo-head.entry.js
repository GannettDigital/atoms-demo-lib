const h = window.GannettAtomsComponents.h;

/**
 * gannett-atoms-component-demo-head is an internal component used to populate the <head> of the
 * demo.html & index.html, mainly to add styling to the overall page.
 */
class DemoHead {
    constructor() {
        /**
         * Passes an attribute to the component and sets a default value if not present
         */
        this.text = 'default text';
    }
    static get is() { return "gannett-atoms-component-demo-head"; }
    static get properties() { return {
        "text": {
            "type": String,
            "attr": "text"
        }
    }; }
    static get style() { return ":host{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Rg.woff2\") format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Sbd.woff2\") format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Bd.woff2\") format(\"woff2\");font-style:normal;font-weight:900}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Rg.woff2\") format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Sbd.woff2\") format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Bd.woff2\") format(\"woff2\");font-style:normal;font-weight:900}html,body{margin:0;padding:0}body{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:100vw;height:100vh}"; }
}

export { DemoHead as GannettAtomsComponentDemoHead };
