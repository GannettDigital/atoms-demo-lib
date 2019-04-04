export class DemoHead {
    constructor() {
        this.text = 'default text';
    }
    static get is() { return "gannett-atoms-component-demo-head"; }
    static get properties() { return {
        "text": {
            "type": String,
            "attr": "text"
        }
    }; }
    static get style() { return "/**style-placeholder:gannett-atoms-component-demo-head:**/"; }
}
