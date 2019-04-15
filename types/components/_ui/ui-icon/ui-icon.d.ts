import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
/**
 * gannett-atoms-component-ui-icon is a component that does so-and-so
 */
export declare class UiIcon {
    /**
     * The icon name to be used
     */
    icon: string;
    /**
     * The size (height & width) of the icon.
     */
    size: number;
    /**
     * If true, uses a pointer when hovering and emits the "icon-clicked" event.
     * To detect the event in a parent component:
     *
     * @Listen('icon-clicked') yourHandlerFunc(ev) {
     *     <handler logic>
     *     ...
     *
     *     if (ev.path[0].id === '<id of targeted icon>') {
     *         ...
     *     }
     * }
     *
     */
    clickable: boolean;
    /**
     * Custom event for clicking an icon if "clickable" prop is true.
     */
    _iconClicked: EventEmitter;
    _iconClickedHandler(): void;
    render(): JSX.Element;
}
