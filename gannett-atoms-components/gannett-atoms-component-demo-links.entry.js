const h = window.GannettAtomsComponents.h;

/**
 * gannett-atoms-component-demo-links builds demo links for the index page.
 */
class DemoLinks {
    render() {
        const comps = document.head.querySelector('style[data-styles]').innerHTML.split('{')[0].split(',');
        let groups = [];
        comps.filter(k => !k.includes('demo')).map(k => {
            const name = k.replace('gannett-atoms-component-', '');
            let splitted = name.split('-');
            let group = '';
            // all "ui" elements in same group
            if (splitted[0].toLowerCase() === 'ui') {
                group = 'ui';
            }
            else if (splitted.length > 2) {
                group = splitted.slice(0, 2).join('-');
            }
            else if (splitted.length === 2) {
                group = splitted[0];
            }
            else {
                group = 'misc';
            }
            const match = groups.filter(k => k.name === group)[0];
            if (match) {
                match.components.push(name);
            }
            else {
                groups.push({ name: group, components: [name] });
            }
        });
        return (groups.map(k => {
            return (h("div", { class: "group" },
                h("div", { class: "title" }, k.name),
                k.components.map(c => h("gannett-atoms-component-ui-button", { url: `/demos/${c}.demo.html` }, c))));
        }));
    }
    static get is() { return "gannett-atoms-component-demo-links"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ":host{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Rg.woff2\") format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Sbd.woff2\") format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Bd.woff2\") format(\"woff2\");font-style:normal;font-weight:900}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Rg.woff2\") format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Sbd.woff2\") format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Bd.woff2\") format(\"woff2\");font-style:normal;font-weight:900}gannett-atoms-component-ui-button{margin:0 7px 7px 0}.group{margin-bottom:10px}.title{color:#444;font-family:\"Unify Sans\",Helvetica,Arial,sans-serif,sans-serif;font-size:calc(14px + (16 - 14) * ((100vw - 320px) / (1200 - 320)));font-weight:400;line-height:1.15;font-weight:900;color:#666;margin-bottom:3px;text-decoration:underline;-webkit-text-decoration-color:#cecece;text-decoration-color:#cecece}\@media all and (min-width: 1200px){.title{font-size:16px}}"; }
}

export { DemoLinks as GannettAtomsComponentDemoLinks };
