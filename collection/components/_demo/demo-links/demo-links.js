/**
 * gannett-atoms-component-demo-links builds demo links for the index page.
 */
export class DemoLinks {
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
    static get style() { return "/**style-placeholder:gannett-atoms-component-demo-links:**/"; }
}
