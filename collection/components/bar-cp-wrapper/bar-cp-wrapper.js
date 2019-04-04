export class BarCpWrapper {
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
    static get style() { return "/**style-placeholder:gannett-atoms-component-bar-cp-wrapper:**/"; }
}
