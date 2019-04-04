import { h } from '../gannett-atoms-components.core.js';

class DemoLinks {
    render() {
        const comps = document.head.querySelector('style[data-styles]').innerHTML.split('{')[0].split(',');
        return (comps.filter(k => !k.includes('demo')).map(k => {
            const name = k.replace('gannett-atoms-component-', '');
            const path = `/demos/${name}.demo.html`;
            return (h("gannett-atoms-component-ui-button", { url: path }, name));
        }));
    }
    static get is() { return "gannett-atoms-component-demo-links"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".sc-gannett-atoms-component-demo-links-h{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Rg.woff2) format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Sbd.woff2) format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Bd.woff2) format(\"woff2\");font-style:normal;font-weight:900}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Rg.woff2) format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Sbd.woff2) format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Bd.woff2) format(\"woff2\");font-style:normal;font-weight:900}gannett-atoms-component-ui-button.sc-gannett-atoms-component-demo-links{margin:0 10px 10px 0}"; }
}

class UiButton {
    constructor() {
        this.url = '#';
        this.target = '_top';
        this.textColor = '#ffffff';
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
    static get style() { return ".sc-gannett-atoms-component-ui-button-h{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Rg.woff2) format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Sbd.woff2) format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:Unify Sans;src:url(/assets/fonts/UnifySans_W_Bd.woff2) format(\"woff2\");font-style:normal;font-weight:900}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Rg.woff2) format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Sbd.woff2) format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:\"Unify Serif\";src:url(/assets/fonts/UnifySans_W_Bd.woff2) format(\"woff2\");font-style:normal;font-weight:900}.button.sc-gannett-atoms-component-ui-button{display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;color:#222;font-family:Unify Sans,Helvetica,Arial,sans-serif;font-size:calc(18px + (22 - 18) * ((100vw - 320px) / (1200 - 320)));font-weight:600;line-height:1.15;cursor:pointer;outline:none;-webkit-highlight:none}\@media (min-width:1200px){.button.sc-gannett-atoms-component-ui-button{font-size:22px}}.button.sc-gannett-atoms-component-ui-button   a.sc-gannett-atoms-component-ui-button{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;color:#fff;font-size:14px;font-weight:600;font-style:normal;line-height:1.15;padding:12px 15px 13px 15px;text-decoration:none}.button.sc-gannett-atoms-component-ui-button:hover   a.sc-gannett-atoms-component-ui-button{background-color:rgba(0,0,0,.15)}"; }
}

export { DemoLinks as GannettAtomsComponentDemoLinks, UiButton as GannettAtomsComponentUiButton };
