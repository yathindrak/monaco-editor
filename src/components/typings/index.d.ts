// Type definitions for prop-types 15.7
// Project: https://github.com/reactjs/prop-types, https://facebook.github.io/react
// Definitions by: DovydasNavickas <https://github.com/DovydasNavickas>
//                 Ferdy Budhidharma <https://github.com/ferdaber>
//                 Sebastian Silbermann <https://github.com/eps1lon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export type ReactComponentLike =
    | string
    | ((props: any, context?: any) => any)
    | (new (props: any, context?: any) => any);
/**
 * Only available if NODE_ENV=production
 */
export function resetWarningCache(): void;
export enum ABC {
    AQA,
    OLJ
}