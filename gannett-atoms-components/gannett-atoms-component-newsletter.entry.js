const h = window.GannettAtomsComponents.h;

/**
 * gannett-atoms-component-newsletter is a component that does so-and-so
 */
class Newsletter {
    constructor() {
        /**
         * Passes an attribute to the component and sets a default value if not present
         */
        this.text = 'default text';
    }
    componentWillLoad() {
        fetch('http://aimepublish.gmti.gbahn.net/User/v4/users/email/newsletters?businessUnitCode=1532IS-E')
            .then((response) => response.json())
            .then(response => {
            let ssts = [this.section, this.subsection, this.topic].filter(Boolean).join('/');
            console.log(ssts);
            let newsletter = response.subscribers[0].businessUnits[0].subscriptions.find(o => o.groupName === ssts);
            this.shortDescription = newsletter.shortDescription;
            this.name = newsletter.newsletterName;
        });
    }
    render() {
        return (h("div", null,
            h("div", null, this.name),
            h("div", null, this.shortDescription)));
    }
    static get is() { return "gannett-atoms-component-newsletter"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "name": {
            "state": true
        },
        "section": {
            "type": String,
            "attr": "section"
        },
        "shortDescription": {
            "state": true
        },
        "subsection": {
            "type": String,
            "attr": "subsection"
        },
        "text": {
            "type": String,
            "attr": "text"
        },
        "topic": {
            "type": String,
            "attr": "topic"
        }
    }; }
    static get style() { return ""; }
}

export { Newsletter as GannettAtomsComponentNewsletter };
