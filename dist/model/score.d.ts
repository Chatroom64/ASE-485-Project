import { Staff } from "./staff.js";
import { TimeSignature } from "./timesignature.js";
export declare class Score {
    title: string;
    tempo: number;
    keySignature: string;
    timeSignature: TimeSignature;
    readonly id: string;
    staves: Staff[];
    constructor(//defaults
    title?: string, tempo?: number, keySignature?: string, timeSignature?: TimeSignature);
    addStaff(staff: Staff): void;
}
//# sourceMappingURL=score.d.ts.map