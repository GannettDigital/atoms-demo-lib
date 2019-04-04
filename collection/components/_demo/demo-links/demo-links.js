export class DemoLinks {
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
    static get style() { return "/**style-placeholder:gannett-atoms-component-demo-links:**/"; }
}
