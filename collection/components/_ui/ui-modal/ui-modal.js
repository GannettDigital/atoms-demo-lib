/**
 * gannett-atoms-component-ui-modal is a component that does so-and-so
 */
export class UiModal {
    constructor() {
        /**
         * Passes an attribute to the component and sets a default value if not present
         */
        this.text = 'default text';
    }
    render() {
        return (h("div", null, this.text));
    }
    static get is() { return "gannett-atoms-component-ui-modal"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "text": {
            "type": String,
            "attr": "text"
        }
    }; }
    static get style() { return "/**style-placeholder:gannett-atoms-component-ui-modal:**/"; }
}
