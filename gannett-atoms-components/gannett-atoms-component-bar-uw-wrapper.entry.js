const h = window.GannettAtomsComponents.h;

/**
 * TODO: gannett-atoms-component-bar-uw-wrapper description here
 */
class BarUwWrapper {
    render() {
        return (h("div", { class: "container" },
            h("div", { class: "sub-container" },
                h("div", { class: "left" },
                    h("slot", { name: "tag" }, "Tag Slot"),
                    h("slot", { name: "expression" }, "Expression Slot")),
                h("div", { class: "right" },
                    h("slot", { name: "button" }, "Button Slot")))));
    }
    static get is() { return "gannett-atoms-component-bar-uw-wrapper"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ":host{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Rg.woff2\") format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Sbd.woff2\") format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Bd.woff2\") format(\"woff2\");font-style:normal;font-weight:900}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Rg.woff2\") format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Sbd.woff2\") format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Bd.woff2\") format(\"woff2\");font-style:normal;font-weight:900}:host{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;width:100%;z-index:501}.container{color:#222;font-family:\"Unify Sans\",Helvetica,Arial,sans-serif,sans-serif;font-size:calc(16px + (18 - 16) * ((100vw - 320px) / (1200 - 320)));font-weight:600;line-height:1.15;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;background-color:#404040;color:#fff}\@media all and (min-width: 1200px){.container{font-size:18px}}.sub-container{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:65px;-ms-flex-preferred-size:83.333%;flex-basis:83.333%}.left{-webkit-align-items:center;-ms-flex-align:center;align-items:center}slot[name=\"tag\"]{margin-bottom:4px}slot[name=\"expression\"]{font-weight:400}slot[name=\"tag\"],slot[name=\"expression\"]{display:-ms-flexbox;display:flex;width:100%}"; }
}

/**
 * TODO: gannett-atoms-component-bar-uw-wrapper description here
 */
class UiButton {
    constructor() {
        /**
         * The button href value
         */
        this.url = '#';
        /**
         * Target for opening the URL.
         */
        this.target = '_top';
        /**
         * Text color for the button.
         */
        this.textColor = '#ffffff';
        /**
         * Background color for the button.
         */
        this.bgColor = '#009bff';
    }
    render() {
        return (h("div", { class: "button", style: { backgroundColor: this.bgColor } },
            h("a", { href: this.url, target: this.target, style: { color: this.textColor } },
                h("slot", null, "Submit"))));
    }
    static get is() { return "gannett-atoms-component-ui-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "bgColor": {
            "type": String,
            "attr": "bg-color"
        },
        "target": {
            "type": String,
            "attr": "target"
        },
        "textColor": {
            "type": String,
            "attr": "text-color"
        },
        "url": {
            "type": String,
            "attr": "url"
        }
    }; }
    static get style() { return ":host{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Rg.woff2\") format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Sbd.woff2\") format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Bd.woff2\") format(\"woff2\");font-style:normal;font-weight:900}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Rg.woff2\") format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Sbd.woff2\") format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Bd.woff2\") format(\"woff2\");font-style:normal;font-weight:900}:host{display:inline-block}.button{cursor:pointer;outline:none;-webkit-highlight:none}.button a{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;color:#222;font-family:\"Unify Sans\",Helvetica,Arial,sans-serif,sans-serif;font-size:calc(18px + (22 - 18) * ((100vw - 320px) / (1200 - 320)));font-weight:600;line-height:1.15;color:#fff;font-size:14px !important;font-weight:600;font-style:normal;line-height:1.15;padding:12px 15px 13px 15px;text-decoration:none}\@media all and (min-width: 1200px){.button a{font-size:22px}}.button:hover a{background-color:rgba(0,0,0,0.15)}"; }
}

export { BarUwWrapper as GannettAtomsComponentBarUwWrapper, UiButton as GannettAtomsComponentUiButton };
