const h = window.GannettAtomsComponents.h;

/**
 * gannett-atoms-component-ui-icon is a component that does so-and-so
 */
class UiIcon {
    constructor() {
        /**
         * The icon name to be used
         */
        this.icon = 'arrow-right';
        /**
         * The size (height & width) of the icon.
         */
        this.size = 24;
    }
    _iconClickedHandler() {
        if (this.clickable)
            this._iconClicked.emit();
    }
    render() {
        const mapping = {
            'arrow-down': { size: 24, points: '13 17.0857864 13 3 11 3 11 17.0857864 7.70710678 13.7928932 6.29289322 15.2071068 12 20.9142136 17.7071068 15.2071068 16.2928932 13.7928932' },
            'arrow-up': { size: 24, points: '13 6.91421356 13 21 11 21 11 6.91421356 7.70710678 10.2071068 6.29289322 8.79289322 12 3.08578644 17.7071068 8.79289322 16.2928932 10.2071068 13 6.91421356' },
            'arrow-left': { size: 24, points: '6.91421356 13 21.0037293 13 21.0037293 11 6.91421356 11 10.2071068 7.70710678 8.79289322 6.29289322 3.08578644 12 8.79289322 17.7071068 10.2071068 16.2928932' },
            'arrow-right': { size: 24, points: '17.0857864 13 3 13 3 11 17.0857864 11 13.7928932 7.70710678 15.2071068 6.29289322 20.9142136 12 15.2071068 17.7071068 13.7928932 16.2928932 17.0857864 13' },
            'caret-down': { size: 16, points: '8 8.66204505 4.16436384 5.25259068 2.83563616 6.74740932 8 11.337955 13.1643638 6.74740932 11.8356362 5.25259068' },
            'caret-up': { size: 16, points: '11.8356362 10.7474093 13.1643638 9.25259068 8 4.66204505 2.83563616 9.25259068 4.16436384 10.7474093 8 7.33795495' },
            'check': { size: 16, points: '3.51297475 7.0572118 2.48702525 8.15148216 6.62263643 12.0288861 13.5138858 5.54627956 12.4861142 4.45372044 6.6209218 9.97111391' },
            'clear': { size: 24, points: '13.4142136 12 16.9497475 8.46446609 15.5355339 7.05025253 12 10.5857864 8.46446609 7.05025253 7.05025253 8.46446609 10.5857864 12 7.05025253 15.5355339 8.46446609 16.9497475 12 13.4142136 15.5355339 16.9497475 16.9497475 15.5355339' },
            'close': { size: 24, points: '12 10.5857864 6.70710678 5.29289322 5.29289322 6.70710678 10.5857864 12 5.29289322 17.2928932 6.70710678 18.7071068 12 13.4142136 17.2928932 18.7071068 18.7071068 17.2928932 13.4142136 12 18.7071068 6.70710678 17.2928932 5.29289322 12 10.5857864' },
            'drop-down': { size: 24, points: '6 9 12 15 18 9' }
        };
        const icon = mapping[this.icon] || mapping['arrow-right'];
        return (h("div", { class: { 'clickable': this.clickable }, style: { height: `${this.size}px`, width: `${this.size}px` }, onClick: this._iconClickedHandler.bind(this) },
            h("svg", { id: "iconSVG", viewBox: `0 0 ${icon.size} ${icon.size}` },
                h("g", { id: this.icon },
                    h("polygon", { points: icon.points })))));
    }
    static get is() { return "gannett-atoms-component-ui-icon"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "clickable": {
            "type": Boolean,
            "attr": "clickable"
        },
        "icon": {
            "type": String,
            "attr": "icon"
        },
        "size": {
            "type": Number,
            "attr": "size"
        }
    }; }
    static get events() { return [{
            "name": "icon-clicked",
            "method": "_iconClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ":host{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Rg.woff2\") format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Sbd.woff2\") format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Bd.woff2\") format(\"woff2\");font-style:normal;font-weight:900}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Rg.woff2\") format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Sbd.woff2\") format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Bd.woff2\") format(\"woff2\");font-style:normal;font-weight:900}.clickable{cursor:pointer}svg{display:block;height:inherit;width:inherit;fill:#444}"; }
}

export { UiIcon as GannettAtomsComponentUiIcon };
