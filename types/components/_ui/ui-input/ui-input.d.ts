import '../../../stencil.core';
/**
 * gannett-atoms-component-ui-input-text is a component that does so-and-so
 */
export declare class UiInput {
    /**
     * Value of the input
     */
    inputValue: string;
    /**
     * The name attribute of the input element.
     */
    name: string;
    /**
     * The type of input. "text" & "email" are valid types.
     */
    type: string;
    /**
     * The placeholder label.
     */
    label: string;
    /**
     * The error message to be displayed if input is invalid.
     */
    errorMessage: string;
    /**
     * Determines if the form input, regardless of current input styling, is valid.
     * Used by consuming components on form submission.
     */
    valid: boolean;
    /**
     * Manual flag to set invalid state, used for styling.
     * Should occur by consuming component if submission is attempted while input is empty.
     */
    invalid: boolean;
    /**
     * Manual flag to set progress bar state, used for styling.
     * Should occur by consuming component on submit & removed after submission has completed.
     */
    progress: boolean;
    /**
     * Handles whether or not the input element is focused.
     */
    focused: boolean;
    /**
     * Whether or not the input has a value.
     */
    populated: boolean;
    textInput: HTMLInputElement;
    componentDidLoad(): void;
    componentWillLoad(): void;
    _validateType(): void;
    _validateInput(): void;
    _blurHandler(): void;
    _inputHandler(): void;
    _invalidHandler(): void;
    _focusHandler(): void;
    render(): JSX.Element;
}
