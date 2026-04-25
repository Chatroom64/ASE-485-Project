import { Measure } from "./measure.js";
import { TimeSignature } from "./timesignature.js";
import type { ClefType } from "./types.js";
import type { MeasureElement } from "./measure.js";
export declare class Staff {
    clef: ClefType;
    readonly id: string;
    measures: Measure[];
    constructor(clef?: ClefType, timesignature?: TimeSignature);
    addElement(element: MeasureElement): void;
}
//# sourceMappingURL=staff.d.ts.map