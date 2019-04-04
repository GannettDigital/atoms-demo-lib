export class DemoEntry {
    constructor() {
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
