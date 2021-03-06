/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface GannettAtomsComponentDemoEntry {
    /**
    * Description for the current demo entry
    */
    'description': string;
  }
  interface GannettAtomsComponentDemoEntryAttributes extends StencilHTMLAttributes {
    /**
    * Description for the current demo entry
    */
    'description'?: string;
  }

  interface GannettAtomsComponentDemoHead {
    /**
    * Passes an attribute to the component and sets a default value if not present
    */
    'text': string;
  }
  interface GannettAtomsComponentDemoHeadAttributes extends StencilHTMLAttributes {
    /**
    * Passes an attribute to the component and sets a default value if not present
    */
    'text'?: string;
  }

  interface GannettAtomsComponentDemoLinks {}
  interface GannettAtomsComponentDemoLinksAttributes extends StencilHTMLAttributes {}

  interface GannettAtomsComponentDemoWrapper {
    /**
    * The demo name for the component header.
    */
    'compName': string;
    /**
    * Flag for the index page to disable sub header.
    */
    'isIndex': boolean;
  }
  interface GannettAtomsComponentDemoWrapperAttributes extends StencilHTMLAttributes {
    /**
    * The demo name for the component header.
    */
    'compName'?: string;
    /**
    * Flag for the index page to disable sub header.
    */
    'isIndex'?: boolean;
  }

  interface GannettAtomsComponentUiButton {
    /**
    * Background color for the button.
    */
    'bgColor': string;
    /**
    * Target for opening the URL.
    */
    'target': string;
    /**
    * Text color for the button.
    */
    'textColor': string;
    /**
    * The button href value
    */
    'url': string;
  }
  interface GannettAtomsComponentUiButtonAttributes extends StencilHTMLAttributes {
    /**
    * Background color for the button.
    */
    'bgColor'?: string;
    /**
    * Target for opening the URL.
    */
    'target'?: string;
    /**
    * Text color for the button.
    */
    'textColor'?: string;
    /**
    * The button href value
    */
    'url'?: string;
  }

  interface GannettAtomsComponentUiIcon {
    /**
    * If true, uses a pointer when hovering and emits the "icon-clicked" event. To detect the event in a parent component:
    */
    'clickable': boolean;
    /**
    * The icon name to be used
    */
    'icon': string;
    /**
    * The size (height & width) of the icon.
    */
    'size': number;
  }
  interface GannettAtomsComponentUiIconAttributes extends StencilHTMLAttributes {
    /**
    * If true, uses a pointer when hovering and emits the "icon-clicked" event. To detect the event in a parent component:
    */
    'clickable'?: boolean;
    /**
    * The icon name to be used
    */
    'icon'?: string;
    /**
    * Custom event for clicking an icon if "clickable" prop is true.
    */
    'onIcon-clicked'?: (event: CustomEvent) => void;
    /**
    * The size (height & width) of the icon.
    */
    'size'?: number;
  }

  interface GannettAtomsComponentUiInput {
    /**
    * The error message to be displayed if input is invalid.
    */
    'errorMessage': string;
    /**
    * Handles whether or not the input element is focused.
    */
    'focused': boolean;
    /**
    * Value of the input
    */
    'inputValue': string;
    /**
    * Manual flag to set invalid state, used for styling. Should occur by consuming component if submission is attempted while input is empty.
    */
    'invalid': boolean;
    /**
    * The placeholder label.
    */
    'label': string;
    /**
    * The name attribute of the input element.
    */
    'name': string;
    /**
    * Manual flag to set progress bar state, used for styling. Should occur by consuming component on submit & removed after submission has completed.
    */
    'progress': boolean;
    /**
    * The type of input. "text" & "email" are valid types.
    */
    'type': string;
    /**
    * Determines if the form input, regardless of current input styling, is valid. Used by consuming components on form submission.
    */
    'valid': boolean;
  }
  interface GannettAtomsComponentUiInputAttributes extends StencilHTMLAttributes {
    /**
    * The error message to be displayed if input is invalid.
    */
    'errorMessage'?: string;
    /**
    * Handles whether or not the input element is focused.
    */
    'focused'?: boolean;
    /**
    * Value of the input
    */
    'inputValue'?: string;
    /**
    * Manual flag to set invalid state, used for styling. Should occur by consuming component if submission is attempted while input is empty.
    */
    'invalid'?: boolean;
    /**
    * The placeholder label.
    */
    'label'?: string;
    /**
    * The name attribute of the input element.
    */
    'name'?: string;
    /**
    * Manual flag to set progress bar state, used for styling. Should occur by consuming component on submit & removed after submission has completed.
    */
    'progress'?: boolean;
    /**
    * The type of input. "text" & "email" are valid types.
    */
    'type'?: string;
    /**
    * Determines if the form input, regardless of current input styling, is valid. Used by consuming components on form submission.
    */
    'valid'?: boolean;
  }

  interface GannettAtomsComponentUiModal {
    /**
    * Passes an attribute to the component and sets a default value if not present
    */
    'text': string;
  }
  interface GannettAtomsComponentUiModalAttributes extends StencilHTMLAttributes {
    /**
    * Passes an attribute to the component and sets a default value if not present
    */
    'text'?: string;
  }

  interface GannettAtomsComponentAmpRoadblock {
    /**
    * Passes an attribute to the component and sets a default value if not present
    */
    'text': string;
    'threshold': number;
  }
  interface GannettAtomsComponentAmpRoadblockAttributes extends StencilHTMLAttributes {
    /**
    * Passes an attribute to the component and sets a default value if not present
    */
    'text'?: string;
    'threshold'?: number;
  }

  interface GannettAtomsComponentBarCpWrapper {}
  interface GannettAtomsComponentBarCpWrapperAttributes extends StencilHTMLAttributes {}

  interface GannettAtomsComponentBarUwFree {
    /**
    * campaign expression
    */
    'expression': string;
    /**
    * subscribe link
    */
    'linkSubscribe': string;
  }
  interface GannettAtomsComponentBarUwFreeAttributes extends StencilHTMLAttributes {
    /**
    * campaign expression
    */
    'expression'?: string;
    /**
    * subscribe link
    */
    'linkSubscribe'?: string;
  }

  interface GannettAtomsComponentBarUwMeter {
    '_getTag': () => string;
    /**
    * campaign expression
    */
    'expression': string;
    /**
    * subscribe link
    */
    'linkSubscribe': string;
    /**
    * current user view count
    */
    'viewCount': number;
    /**
    * current user views remaining
    */
    'viewRemaining': number;
    /**
    * current user view threshold
    */
    'viewThreshold': number;
  }
  interface GannettAtomsComponentBarUwMeterAttributes extends StencilHTMLAttributes {
    /**
    * campaign expression
    */
    'expression'?: string;
    /**
    * subscribe link
    */
    'linkSubscribe'?: string;
    /**
    * current user view count
    */
    'viewCount'?: number;
    /**
    * current user views remaining
    */
    'viewRemaining'?: number;
    /**
    * current user view threshold
    */
    'viewThreshold'?: number;
  }

  interface GannettAtomsComponentBarUwRegister {
    /**
    * subscribe link
    */
    'linkRegister': string;
  }
  interface GannettAtomsComponentBarUwRegisterAttributes extends StencilHTMLAttributes {
    /**
    * subscribe link
    */
    'linkRegister'?: string;
  }

  interface GannettAtomsComponentBarUwWrapper {}
  interface GannettAtomsComponentBarUwWrapperAttributes extends StencilHTMLAttributes {}

  interface GannettAtomsComponentNewsletter {
    'section': string;
    'subsection': string;
    /**
    * Passes an attribute to the component and sets a default value if not present
    */
    'text': string;
    'topic': string;
  }
  interface GannettAtomsComponentNewsletterAttributes extends StencilHTMLAttributes {
    'section'?: string;
    'subsection'?: string;
    /**
    * Passes an attribute to the component and sets a default value if not present
    */
    'text'?: string;
    'topic'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'GannettAtomsComponentDemoEntry': Components.GannettAtomsComponentDemoEntry;
    'GannettAtomsComponentDemoHead': Components.GannettAtomsComponentDemoHead;
    'GannettAtomsComponentDemoLinks': Components.GannettAtomsComponentDemoLinks;
    'GannettAtomsComponentDemoWrapper': Components.GannettAtomsComponentDemoWrapper;
    'GannettAtomsComponentUiButton': Components.GannettAtomsComponentUiButton;
    'GannettAtomsComponentUiIcon': Components.GannettAtomsComponentUiIcon;
    'GannettAtomsComponentUiInput': Components.GannettAtomsComponentUiInput;
    'GannettAtomsComponentUiModal': Components.GannettAtomsComponentUiModal;
    'GannettAtomsComponentAmpRoadblock': Components.GannettAtomsComponentAmpRoadblock;
    'GannettAtomsComponentBarCpWrapper': Components.GannettAtomsComponentBarCpWrapper;
    'GannettAtomsComponentBarUwFree': Components.GannettAtomsComponentBarUwFree;
    'GannettAtomsComponentBarUwMeter': Components.GannettAtomsComponentBarUwMeter;
    'GannettAtomsComponentBarUwRegister': Components.GannettAtomsComponentBarUwRegister;
    'GannettAtomsComponentBarUwWrapper': Components.GannettAtomsComponentBarUwWrapper;
    'GannettAtomsComponentNewsletter': Components.GannettAtomsComponentNewsletter;
  }

  interface StencilIntrinsicElements {
    'gannett-atoms-component-demo-entry': Components.GannettAtomsComponentDemoEntryAttributes;
    'gannett-atoms-component-demo-head': Components.GannettAtomsComponentDemoHeadAttributes;
    'gannett-atoms-component-demo-links': Components.GannettAtomsComponentDemoLinksAttributes;
    'gannett-atoms-component-demo-wrapper': Components.GannettAtomsComponentDemoWrapperAttributes;
    'gannett-atoms-component-ui-button': Components.GannettAtomsComponentUiButtonAttributes;
    'gannett-atoms-component-ui-icon': Components.GannettAtomsComponentUiIconAttributes;
    'gannett-atoms-component-ui-input': Components.GannettAtomsComponentUiInputAttributes;
    'gannett-atoms-component-ui-modal': Components.GannettAtomsComponentUiModalAttributes;
    'gannett-atoms-component-amp-roadblock': Components.GannettAtomsComponentAmpRoadblockAttributes;
    'gannett-atoms-component-bar-cp-wrapper': Components.GannettAtomsComponentBarCpWrapperAttributes;
    'gannett-atoms-component-bar-uw-free': Components.GannettAtomsComponentBarUwFreeAttributes;
    'gannett-atoms-component-bar-uw-meter': Components.GannettAtomsComponentBarUwMeterAttributes;
    'gannett-atoms-component-bar-uw-register': Components.GannettAtomsComponentBarUwRegisterAttributes;
    'gannett-atoms-component-bar-uw-wrapper': Components.GannettAtomsComponentBarUwWrapperAttributes;
    'gannett-atoms-component-newsletter': Components.GannettAtomsComponentNewsletterAttributes;
  }


  interface HTMLGannettAtomsComponentDemoEntryElement extends Components.GannettAtomsComponentDemoEntry, HTMLStencilElement {}
  var HTMLGannettAtomsComponentDemoEntryElement: {
    prototype: HTMLGannettAtomsComponentDemoEntryElement;
    new (): HTMLGannettAtomsComponentDemoEntryElement;
  };

  interface HTMLGannettAtomsComponentDemoHeadElement extends Components.GannettAtomsComponentDemoHead, HTMLStencilElement {}
  var HTMLGannettAtomsComponentDemoHeadElement: {
    prototype: HTMLGannettAtomsComponentDemoHeadElement;
    new (): HTMLGannettAtomsComponentDemoHeadElement;
  };

  interface HTMLGannettAtomsComponentDemoLinksElement extends Components.GannettAtomsComponentDemoLinks, HTMLStencilElement {}
  var HTMLGannettAtomsComponentDemoLinksElement: {
    prototype: HTMLGannettAtomsComponentDemoLinksElement;
    new (): HTMLGannettAtomsComponentDemoLinksElement;
  };

  interface HTMLGannettAtomsComponentDemoWrapperElement extends Components.GannettAtomsComponentDemoWrapper, HTMLStencilElement {}
  var HTMLGannettAtomsComponentDemoWrapperElement: {
    prototype: HTMLGannettAtomsComponentDemoWrapperElement;
    new (): HTMLGannettAtomsComponentDemoWrapperElement;
  };

  interface HTMLGannettAtomsComponentUiButtonElement extends Components.GannettAtomsComponentUiButton, HTMLStencilElement {}
  var HTMLGannettAtomsComponentUiButtonElement: {
    prototype: HTMLGannettAtomsComponentUiButtonElement;
    new (): HTMLGannettAtomsComponentUiButtonElement;
  };

  interface HTMLGannettAtomsComponentUiIconElement extends Components.GannettAtomsComponentUiIcon, HTMLStencilElement {}
  var HTMLGannettAtomsComponentUiIconElement: {
    prototype: HTMLGannettAtomsComponentUiIconElement;
    new (): HTMLGannettAtomsComponentUiIconElement;
  };

  interface HTMLGannettAtomsComponentUiInputElement extends Components.GannettAtomsComponentUiInput, HTMLStencilElement {}
  var HTMLGannettAtomsComponentUiInputElement: {
    prototype: HTMLGannettAtomsComponentUiInputElement;
    new (): HTMLGannettAtomsComponentUiInputElement;
  };

  interface HTMLGannettAtomsComponentUiModalElement extends Components.GannettAtomsComponentUiModal, HTMLStencilElement {}
  var HTMLGannettAtomsComponentUiModalElement: {
    prototype: HTMLGannettAtomsComponentUiModalElement;
    new (): HTMLGannettAtomsComponentUiModalElement;
  };

  interface HTMLGannettAtomsComponentAmpRoadblockElement extends Components.GannettAtomsComponentAmpRoadblock, HTMLStencilElement {}
  var HTMLGannettAtomsComponentAmpRoadblockElement: {
    prototype: HTMLGannettAtomsComponentAmpRoadblockElement;
    new (): HTMLGannettAtomsComponentAmpRoadblockElement;
  };

  interface HTMLGannettAtomsComponentBarCpWrapperElement extends Components.GannettAtomsComponentBarCpWrapper, HTMLStencilElement {}
  var HTMLGannettAtomsComponentBarCpWrapperElement: {
    prototype: HTMLGannettAtomsComponentBarCpWrapperElement;
    new (): HTMLGannettAtomsComponentBarCpWrapperElement;
  };

  interface HTMLGannettAtomsComponentBarUwFreeElement extends Components.GannettAtomsComponentBarUwFree, HTMLStencilElement {}
  var HTMLGannettAtomsComponentBarUwFreeElement: {
    prototype: HTMLGannettAtomsComponentBarUwFreeElement;
    new (): HTMLGannettAtomsComponentBarUwFreeElement;
  };

  interface HTMLGannettAtomsComponentBarUwMeterElement extends Components.GannettAtomsComponentBarUwMeter, HTMLStencilElement {}
  var HTMLGannettAtomsComponentBarUwMeterElement: {
    prototype: HTMLGannettAtomsComponentBarUwMeterElement;
    new (): HTMLGannettAtomsComponentBarUwMeterElement;
  };

  interface HTMLGannettAtomsComponentBarUwRegisterElement extends Components.GannettAtomsComponentBarUwRegister, HTMLStencilElement {}
  var HTMLGannettAtomsComponentBarUwRegisterElement: {
    prototype: HTMLGannettAtomsComponentBarUwRegisterElement;
    new (): HTMLGannettAtomsComponentBarUwRegisterElement;
  };

  interface HTMLGannettAtomsComponentBarUwWrapperElement extends Components.GannettAtomsComponentBarUwWrapper, HTMLStencilElement {}
  var HTMLGannettAtomsComponentBarUwWrapperElement: {
    prototype: HTMLGannettAtomsComponentBarUwWrapperElement;
    new (): HTMLGannettAtomsComponentBarUwWrapperElement;
  };

  interface HTMLGannettAtomsComponentNewsletterElement extends Components.GannettAtomsComponentNewsletter, HTMLStencilElement {}
  var HTMLGannettAtomsComponentNewsletterElement: {
    prototype: HTMLGannettAtomsComponentNewsletterElement;
    new (): HTMLGannettAtomsComponentNewsletterElement;
  };

  interface HTMLElementTagNameMap {
    'gannett-atoms-component-demo-entry': HTMLGannettAtomsComponentDemoEntryElement
    'gannett-atoms-component-demo-head': HTMLGannettAtomsComponentDemoHeadElement
    'gannett-atoms-component-demo-links': HTMLGannettAtomsComponentDemoLinksElement
    'gannett-atoms-component-demo-wrapper': HTMLGannettAtomsComponentDemoWrapperElement
    'gannett-atoms-component-ui-button': HTMLGannettAtomsComponentUiButtonElement
    'gannett-atoms-component-ui-icon': HTMLGannettAtomsComponentUiIconElement
    'gannett-atoms-component-ui-input': HTMLGannettAtomsComponentUiInputElement
    'gannett-atoms-component-ui-modal': HTMLGannettAtomsComponentUiModalElement
    'gannett-atoms-component-amp-roadblock': HTMLGannettAtomsComponentAmpRoadblockElement
    'gannett-atoms-component-bar-cp-wrapper': HTMLGannettAtomsComponentBarCpWrapperElement
    'gannett-atoms-component-bar-uw-free': HTMLGannettAtomsComponentBarUwFreeElement
    'gannett-atoms-component-bar-uw-meter': HTMLGannettAtomsComponentBarUwMeterElement
    'gannett-atoms-component-bar-uw-register': HTMLGannettAtomsComponentBarUwRegisterElement
    'gannett-atoms-component-bar-uw-wrapper': HTMLGannettAtomsComponentBarUwWrapperElement
    'gannett-atoms-component-newsletter': HTMLGannettAtomsComponentNewsletterElement
  }

  interface ElementTagNameMap {
    'gannett-atoms-component-demo-entry': HTMLGannettAtomsComponentDemoEntryElement;
    'gannett-atoms-component-demo-head': HTMLGannettAtomsComponentDemoHeadElement;
    'gannett-atoms-component-demo-links': HTMLGannettAtomsComponentDemoLinksElement;
    'gannett-atoms-component-demo-wrapper': HTMLGannettAtomsComponentDemoWrapperElement;
    'gannett-atoms-component-ui-button': HTMLGannettAtomsComponentUiButtonElement;
    'gannett-atoms-component-ui-icon': HTMLGannettAtomsComponentUiIconElement;
    'gannett-atoms-component-ui-input': HTMLGannettAtomsComponentUiInputElement;
    'gannett-atoms-component-ui-modal': HTMLGannettAtomsComponentUiModalElement;
    'gannett-atoms-component-amp-roadblock': HTMLGannettAtomsComponentAmpRoadblockElement;
    'gannett-atoms-component-bar-cp-wrapper': HTMLGannettAtomsComponentBarCpWrapperElement;
    'gannett-atoms-component-bar-uw-free': HTMLGannettAtomsComponentBarUwFreeElement;
    'gannett-atoms-component-bar-uw-meter': HTMLGannettAtomsComponentBarUwMeterElement;
    'gannett-atoms-component-bar-uw-register': HTMLGannettAtomsComponentBarUwRegisterElement;
    'gannett-atoms-component-bar-uw-wrapper': HTMLGannettAtomsComponentBarUwWrapperElement;
    'gannett-atoms-component-newsletter': HTMLGannettAtomsComponentNewsletterElement;
  }


}
