const h = window.GannettAtomsComponents.h;

/**
 * gannett-atoms-component-bar-uw-meter is a component that does so-and-so
 */
class BarUwMeter {
    constructor() {
        /**
         * campaign expression
         */
        this.expression = 'Default campaign expression';
        /**
         * current user view count
         */
        this.viewCount = 0;
        /**
         * current user view threshold
         */
        this.viewThreshold = 0;
        /**
         * current user views remaining
         */
        this.viewRemaining = 0;
    }
    _getTag() {
        const articles = this.viewRemaining > 1 ? 'articles' : 'article';
        if (this.viewCount === this.viewThreshold) {
            return 'Last FREE article';
        }
        else {
            return `${this.viewRemaining} free ${articles} left`;
        }
    }
    render() {
        return (h("gannett-atoms-component-bar-uw-wrapper", null,
            h("span", { slot: "tag" }, this._getTag()),
            h("span", { slot: "expression" }, this.expression),
            h("span", { slot: "button" },
                h("gannett-atoms-component-ui-button", { url: this.linkSubscribe }, "Subscribe"))));
    }
    static get is() { return "gannett-atoms-component-bar-uw-meter"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "_getTag": {
            "method": true
        },
        "expression": {
            "type": String,
            "attr": "expression"
        },
        "linkSubscribe": {
            "type": String,
            "attr": "link-subscribe"
        },
        "viewCount": {
            "type": Number,
            "attr": "view-count"
        },
        "viewRemaining": {
            "type": Number,
            "attr": "view-remaining"
        },
        "viewThreshold": {
            "type": Number,
            "attr": "view-threshold"
        }
    }; }
    static get style() { return ""; }
}

export { BarUwMeter as GannettAtomsComponentBarUwMeter };
