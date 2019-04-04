
// GannettAtomsComponents: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './gannett-atoms-components.core.js';
import { COMPONENTS } from './gannett-atoms-components.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
