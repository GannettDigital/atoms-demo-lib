import { h } from '../gannett-atoms-components.core.js';

class BarUwWrapper {
    render() {
        return (h("div", { class: "container" },
            h("div", { class: "left" },
                h("slot", { name: "tag" }, "Tag Slot"),
                h("slot", { name: "expression" }, "Expression Slot")),
            h("div", { class: "right" },
                h("slot", { name: "button" }, "Button Slot"))));
    }
    static get is() { return "gannett-atoms-component-bar-uw-wrapper"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ":host{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;z-index:501}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Rg.woff2) format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Sbd.woff2) format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Bd.woff2) format(\"woff2\");font-style:normal;font-weight:900}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Rg.woff2) format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Sbd.woff2) format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Bd.woff2) format(\"woff2\");font-style:normal;font-weight:900}.container,:host{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;width:100%}.container{color:#222;font-family:Unify Sans,Helvetica,Arial,sans-serif;font-size:calc(16px + (18 - 16) * ((100vw - 320px) / (1200 - 320)));font-weight:600;line-height:1.15;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:65px;padding:0 15px;background-color:#404040;color:#fff}\@media (min-width:1200px){.container{font-size:18px}}.left{-webkit-align-items:center;-ms-flex-align:center;align-items:center}slot[name=tag]{display:-ms-flexbox;display:flex;width:100%}"; }
}

export { BarUwWrapper as GannettAtomsComponentBarUwWrapper };
