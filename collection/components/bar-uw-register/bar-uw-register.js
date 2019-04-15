/**
 * gannett-atoms-component-bar-uw-register is a component that does so-and-so
 */
export class BarUwRegister {
    render() {
        return (h("gannett-atoms-component-bar-uw-wrapper", null,
            h("span", { slot: "tag" }, "Create your account"),
            h("span", { slot: "expression" }, "Register for FREE"),
            h("span", { slot: "button" },
                h("gannett-atoms-component-ui-button", { url: this.linkRegister }, "Register"))));
    }
    static get is() { return "gannett-atoms-component-bar-uw-register"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "linkRegister": {
            "type": String,
            "attr": "link-register"
        }
    }; }
    static get style() { return "/**style-placeholder:gannett-atoms-component-bar-uw-register:**/"; }
}
