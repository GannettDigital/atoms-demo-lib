const h = window.GannettAtomsComponents.h;

/**
 * gannett-atoms-component-ui-input-text is a component that does so-and-so
 */
class UiInput {
    constructor() {
        /**
         * Value of the input
         */
        this.inputValue = '';
        /**
         * The type of input. "text" & "email" are valid types.
         */
        this.type = 'text';
        /**
         * The placeholder label.
         */
        this.label = 'Label';
        /**
         * The error message to be displayed if input is invalid.
         */
        this.errorMessage = 'An error has occurred';
        /**
         * Determines if the form input, regardless of current input styling, is valid.
         * Used by consuming components on form submission.
         */
        this.valid = false;
    }
    componentDidLoad() {
        if (this.inputValue) {
            this.textInput.value = this.inputValue;
            this.populated = true;
            this._invalidHandler();
            this._validateInput();
        }
    }
    componentWillLoad() {
        this._validateType();
    }
    _validateType() {
        const whitelist = ['text', 'email'];
        this.type = whitelist.includes(this.type) ? this.type : 'text';
    }
    _validateInput() {
        this.valid = this.textInput.validity.valid;
    }
    _blurHandler() {
        this.focused = false;
        this._invalidHandler();
    }
    _inputHandler() {
        this.inputValue = this.textInput.value;
        this.populated = !!this.textInput.value.length;
        this.invalid = false;
        this._validateInput();
    }
    _invalidHandler() {
        if (!this.textInput.validity.valid && this.populated)
            this.invalid = true;
    }
    _focusHandler() {
        this.focused = true;
    }
    render() {
        return (h("div", { class: "container" },
            h("div", { class: {
                    'input-container': true,
                    'invalid': this.invalid,
                    'progress': this.progress,
                    'populated': this.populated,
                    'focused': this.focused
                } },
                h("input", { type: this.type, name: this.name, onInput: this._inputHandler.bind(this), onBlur: this._blurHandler.bind(this), onFocus: this._focusHandler.bind(this), ref: (el) => this.textInput = el, autocomplete: "autocomplete_off_hack_xfr4!k", autocapitalize: "none", autocorrect: "off", required: true }),
                h("slot", { name: "suffix" }),
                h("label", null, this.label)),
            h("div", { id: "bar" },
                h("div", { class: "highlight" }),
                h("div", { class: "progress-primary" }),
                h("div", { class: "progress-secondary" })),
            h("div", { class: "errorMessage", hidden: true }, this.errorMessage)));
    }
    static get is() { return "gannett-atoms-component-ui-input"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "errorMessage": {
            "type": String,
            "attr": "error-message"
        },
        "focused": {
            "type": Boolean,
            "attr": "focused",
            "reflectToAttr": true,
            "mutable": true
        },
        "inputValue": {
            "type": String,
            "attr": "input-value",
            "reflectToAttr": true,
            "mutable": true
        },
        "invalid": {
            "type": Boolean,
            "attr": "invalid",
            "reflectToAttr": true,
            "mutable": true
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "populated": {
            "state": true
        },
        "progress": {
            "type": Boolean,
            "attr": "progress",
            "reflectToAttr": true,
            "mutable": true
        },
        "type": {
            "type": String,
            "attr": "type",
            "reflectToAttr": true,
            "mutable": true
        },
        "valid": {
            "type": Boolean,
            "attr": "valid",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get style() { return ":host{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Rg.woff2\") format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Sbd.woff2\") format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:'Unify Sans';src:url(\"/assets/fonts/UnifySans_W_Bd.woff2\") format(\"woff2\");font-style:normal;font-weight:900}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Rg.woff2\") format(\"woff2\");font-style:normal;font-weight:400}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Sbd.woff2\") format(\"woff2\");font-style:normal;font-weight:600}\@font-face{font-family:'Unify Serif';src:url(\"/assets/fonts/UnifySans_W_Bd.woff2\") format(\"woff2\");font-style:normal;font-weight:900}.container{position:relative;margin-top:15px;-webkit-box-sizing:border-box;box-sizing:border-box}.errorMessage{color:#444;font-family:\"Unify Sans\",Helvetica,Arial,sans-serif,sans-serif;font-size:calc(12px + (14 - 12) * ((100vw - 320px) / (1200 - 320)));font-weight:400;line-height:1.15;font-size:12px !important;color:#f03c4b;margin-top:4px;display:none}\@media all and (min-width: 1200px){.errorMessage{font-size:14px}}label{color:#444;font-family:\"Unify Sans\",Helvetica,Arial,sans-serif,sans-serif;font-size:calc(14px + (16 - 14) * ((100vw - 320px) / (1200 - 320)));font-weight:400;line-height:1.15;font-size:16px !important;color:#666;position:absolute;pointer-events:none;top:4px;transition:0.2s ease all;-moz-transition:0.2s ease all;-webkit-transition:0.2s ease all}\@media all and (min-width: 1200px){label{font-size:16px}}#bar{position:relative;height:5px;overflow-x:hidden;margin-top:-2px}#bar .highlight,#bar .progress-primary,#bar .progress-secondary{position:absolute;height:2px;width:0;background:#009bff}[slot=\"suffix\"]{display:-ms-flexbox;display:flex}.input-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;border-bottom:1px solid #222}.input-container input{color:#444;font-family:\"Unify Sans\",Helvetica,Arial,sans-serif,sans-serif;font-size:calc(14px + (16 - 14) * ((100vw - 320px) / (1200 - 320)));font-weight:400;line-height:1.15;font-size:16px !important;display:-ms-flexbox;display:flex;width:100%;border:none;padding:4px 0;outline:none}\@media all and (min-width: 1200px){.input-container input{font-size:16px}}.input-container.focused label,.input-container.populated label{color:#444;font-family:\"Unify Sans\",Helvetica,Arial,sans-serif,sans-serif;font-size:calc(12px + (14 - 12) * ((100vw - 320px) / (1200 - 320)));font-weight:400;line-height:1.15;font-size:12px !important;top:-1px;-webkit-transform:translateY(-100%) scale(1) !important;transform:translateY(-100%) scale(1) !important}\@media all and (min-width: 1200px){.input-container.focused label,.input-container.populated label{font-size:14px}}.input-container.focused ~ #bar .highlight{-webkit-animation:focus 0.2s linear;-moz-animation:focus 0.2s linear;animation:focus 0.2s linear;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.input-container.progress:not(.invalid) ~ #bar .progress-primary{-webkit-animation:progressPrimary 2s infinite;-moz-animation:progressPrimary 2s infinite;animation:progressPrimary 2s infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.input-container.progress:not(.invalid) ~ #bar .progress-secondary{-webkit-animation:progressSecondary 2s 0.5s infinite;-moz-animation:progressSecondary 2s 0.5s infinite;animation:progressSecondary 2s 0.5s infinite;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.input-container.invalid{color:#f03c4b}.input-container.invalid input{color:#f03c4b}.input-container.invalid ~ #bar .highlight{width:100%;background-color:#f03c4b;-webkit-animation:none;animation:none}.input-container.invalid ~ .errorMessage,.input-container.invalid label{color:#f03c4b !important}.input-container.invalid ~ .errorMessage{display:block}\@-webkit-keyframes focus{from{width:0;left:50%}to{width:100%;left:0}}\@-moz-keyframes focus{from{width:0;left:50%}to{width:100%;left:0}}\@keyframes focus{from{width:0;left:50%}to{width:100%;left:0}}\@-webkit-keyframes progressPrimary{from{left:-5%;width:5%}to{left:130%;width:100%}}\@-moz-keyframes progressPrimary{from{left:-5%;width:5%}to{left:130%;width:100%}}\@keyframes progressPrimary{from{left:-5%;width:5%}to{left:130%;width:100%}}\@-webkit-keyframes progressSecondary{from{left:-80%;width:80%}to{left:110%;width:10%}}\@-moz-keyframes progressSecondary{from{left:-80%;width:80%}to{left:110%;width:10%}}\@keyframes progressSecondary{from{left:-80%;width:80%}to{left:110%;width:10%}}"; }
}

export { UiInput as GannettAtomsComponentUiInput };
