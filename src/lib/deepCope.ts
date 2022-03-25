/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function deepCope<T>(data: T): T {
    return JSON.parse(JSON.stringify(data));
}