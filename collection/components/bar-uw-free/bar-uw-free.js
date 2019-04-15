/**
 * gannett-atoms-component-bar-uw-free is a component that does so-and-so
 */
export class BarUwFree {
    constructor() {
        /**
         * campaign expression
         */
        this.expression = 'Default campaign expression';
    }
    render() {
        return (h("gannett-atoms-component-bar-uw-wrapper", null,
            h("span", { slot: "tag" }, "Free Article"),
            h("span", { slot: "expression" }, this.expression),
            h("span", { slot: "button" },
                h("gannett-atoms-component-ui-button", { url: this.linkSubscribe }, "Subscribe"))));
    }
    static get is() { return "gannett-atoms-component-bar-uw-free"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "expression": {
            "type": String,
            "attr": "expression"
        },
        "linkSubscribe": {
            "type": String,
            "attr": "link-subscribe"
        }
    }; }
    static get style() { return "/**style-placeholder:gannett-atoms-component-bar-uw-free:**/"; }
}
