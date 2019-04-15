/**
 * gannett-atoms-component-demo-entry is used as a wrapper for individual demo entries.
 * The actual element demo should be slotted into this component.
 */
export class DemoEntry {
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
    static get style() { return "/**style-placeholder:gannett-atoms-component-demo-entry:**/"; }
}
