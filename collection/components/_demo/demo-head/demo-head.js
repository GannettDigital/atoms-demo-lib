/**
 * gannett-atoms-component-demo-head is an internal component used to populate the <head> of the
 * demo.html & index.html, mainly to add styling to the overall page.
 */
export class DemoHead {
    constructor() {
        /**
         * Passes an attribute to the component and sets a default value if not present
         */
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
