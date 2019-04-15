import '../../stencil.core';
/**
 * gannett-atoms-component-bar-uw-meter is a component that does so-and-so
 */
export declare class BarUwMeter {
    /**
     * campaign expression
     */
    expression: string;
    /**
     * subscribe link
     */
    linkSubscribe: string;
    /**
     * current user view count
     */
    viewCount: number;
    /**
     * current user view threshold
     */
    viewThreshold: number;
    /**
     * current user views remaining
     */
    viewRemaining: number;
    _getTag(): string;
    render(): JSX.Element;
}
