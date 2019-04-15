const h = window.GannettAtomsComponents.h;

/**
 * gannett-atoms-component-bar-cp-wrapper is a component that does so-and-so
 */
class BarCpWrapper {
    render() {
        return (h("div", { class: "container collapsed" },
            h("div", { class: "top" },
                h("slot", { name: "remainingViews" },
                    h("slot", { name: "remainingViewsNumber" }, "X"),
                    " remaining views slot."),
                h("div", { class: "right" },
                    h("div", { class: "arrow" })))));
    }
    static get is() { return "gannett-atoms-component-bar-cp-wrapper"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ":host{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Rg.woff2\") format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Sbd.woff2\") format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Bd.woff2\") format(\"woff2\");font-style:normal;font-weight:900}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Rg.woff2\") format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Sbd.woff2\") format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Bd.woff2\") format(\"woff2\");font-style:normal;font-weight:900}.container{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;background-color:#404040;position:relative;width:400px}.top{-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;padding-left:25px}.right{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;text-align:end;cursor:pointer;height:62px;position:absolute;right:0;top:0;width:65px}.right:before{background-color:#fff;content:\"\";height:24px;left:0;position:absolute;top:19px;width:2px}.arrow{border:solid #fff;border-width:0 2px 2px 0;padding:5px;position:absolute;right:25px;top:23px;transform:rotate(45deg);-webkit-transform:rotate(45deg)}.collapsed .arrow{top:28px;transform:rotate(-135deg);-webkit-transform:rotate(-135deg)}slot[name=\"remainingViews\"]{color:#fff;font:14px/62px 'Unify Sans';margin-left:25px}slot[name=\"remainingViewsNumber\"]{font-weight:900}"; }
}

export { BarCpWrapper as GannettAtomsComponentBarCpWrapper };
