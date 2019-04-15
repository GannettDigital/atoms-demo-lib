/**
 * TODO: gannett-atoms-component-bar-uw-wrapper description here
 */
export class BarUwWrapper {
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
    static get style() { return "/**style-placeholder:gannett-atoms-component-bar-uw-wrapper:**/"; }
}
