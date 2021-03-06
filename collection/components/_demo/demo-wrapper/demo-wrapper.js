/**
 * gannett-atoms-component-demo-wrapper is a body wrapper for the demo page.
 */
export class DemoWrapper {
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
    static get style() { return "/**style-placeholder:gannett-atoms-component-demo-wrapper:**/"; }
}
