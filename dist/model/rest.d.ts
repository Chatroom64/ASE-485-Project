import type { Duration } from "./types.js";
export declare class Rest {
    duration: Duration;
    readonly type = "rest";
    readonly id: string;
    constructor(// constructor only contains one attribute because a rest has no pitch, octave or accidental tied to it
    duration: Duration);
    getBeats(): number;
}
//# sourceMappingURL=rest.d.ts.map