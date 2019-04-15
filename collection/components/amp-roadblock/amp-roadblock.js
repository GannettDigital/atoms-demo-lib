/**
 * gannett-atoms-component-amp-roadblock is a component that does so-and-so
 */
export class AmpRoadblock {
    constructor() {
        /**
         * Passes an attribute to the component and sets a default value if not present
         */
        this.text = 'default text';
        this.threshold = 5;
    }
    render() {
        return (h("div", { class: "roadblock-container", "amp-access": "NOT gup.hasAssetAccess" },
            h("p", { class: "roadblock-message", "amp-access-template": "" },
                "You've reached your limit of ",
                this.threshold,
                " free articles."),
            h("p", { class: "sign-in-cta", "amp-access": "NOT gup.loggedIn" },
                "Already a subscriber? ",
                h("a", { class: "login-link" }, "Sign In"),
                " ",
                h("svg", { id: "iconSVG", viewBox: "0 0 24 24" },
                    h("g", { id: "icon-arrow-right_24" },
                        h("polygon", { id: "path-1", points: "17.0857864 13 3 13 3 11 17.0857864 11 13.7928932 7.70710678 15.2071068 6.29289322 20.9142136 12 15.2071068 17.7071068 13.7928932 16.2928932 17.0857864 13" })))),
            h("p", { class: "subscribe-cta-text" }, "Subscribe now to read the full story"),
            h("a", { class: "subscription-link" }, "Subscribe"),
            h("div", { class: "subscription-includes" },
                "Your subscription includes:",
                h("ul", null,
                    h("li", null,
                        h("svg", { id: "iconSVG", viewBox: "0 0 16 16" },
                            " ",
                            h("g", { id: "icon-check_16" },
                                h("polygon", { id: "path-1", points: "3.51297475 7.0572118 2.48702525 8.15148216 6.62263643 12.0288861 13.5138858 5.54627956 12.4861142 4.45372044 6.6209218 9.97111391" }))),
                        "Award-winning local (and national) news"),
                    h("li", null,
                        h("svg", { id: "iconSVG", viewBox: "0 0 16 16" },
                            " ",
                            h("g", { id: "icon-check_16" },
                                h("polygon", { id: "path-1", points: "3.51297475 7.0572118 2.48702525 8.15148216 6.62263643 12.0288861 13.5138858 5.54627956 12.4861142 4.45372044 6.6209218 9.97111391" }))),
                        "Mobile news alerts"),
                    h("li", null,
                        h("svg", { id: "iconSVG", viewBox: "0 0 16 16" },
                            " ",
                            h("g", { id: "icon-check_16" },
                                h("polygon", { id: "path-1", points: "3.51297475 7.0572118 2.48702525 8.15148216 6.62263643 12.0288861 13.5138858 5.54627956 12.4861142 4.45372044 6.6209218 9.97111391" }))),
                        "Unlimited access to apps"),
                    h("li", null,
                        h("svg", { id: "iconSVG", viewBox: "0 0 16 16" },
                            " ",
                            h("g", { id: "icon-check_16" },
                                h("polygon", { id: "path-1", points: "3.51297475 7.0572118 2.48702525 8.15148216 6.62263643 12.0288861 13.5138858 5.54627956 12.4861142 4.45372044 6.6209218 9.97111391" }))),
                        "VIP discounts and perks as an Insider")))));
    }
    static get is() { return "gannett-atoms-component-amp-roadblock"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "text": {
            "type": String,
            "attr": "text"
        },
        "threshold": {
            "type": Number,
            "attr": "threshold"
        }
    }; }
    static get style() { return "/**style-placeholder:gannett-atoms-component-amp-roadblock:**/"; }
}
