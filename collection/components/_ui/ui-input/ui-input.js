/**
 * gannett-atoms-component-ui-input-text is a component that does so-and-so
 */
export class UiInput {
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
    static get style() { return "/**style-placeholder:gannett-atoms-component-ui-input:**/"; }
}
