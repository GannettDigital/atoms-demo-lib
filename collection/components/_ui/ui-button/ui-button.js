/**
 * TODO: gannett-atoms-component-bar-uw-wrapper description here
 */
export class UiButton {
    constructor() {
        /**
         * The button href value
         */
        this.url = '#';
        /**
         * Target for opening the URL.
         */
        this.target = '_top';
        /**
         * Text color for the button.
         */
        this.textColor = '#ffffff';
        /**
         * Background color for the button.
         */
        this.bgColor = '#009bff';
    }
    render() {
        return (h("div", { class: "button", style: { backgroundColor: this.bgColor } },
            h("a", { href: this.url, target: this.target, style: { color: this.textColor } },
                h("slot", null, "Submit"))));
    }
    static get is() { return "gannett-atoms-component-ui-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "bgColor": {
            "type": String,
            "attr": "bg-color"
        },
        "target": {
            "type": String,
            "attr": "target"
        },
        "textColor": {
            "type": String,
            "attr": "text-color"
        },
        "url": {
            "type": String,
            "attr": "url"
        }
    }; }
    static get style() { return "/**style-placeholder:gannett-atoms-component-ui-button:**/"; }
}
