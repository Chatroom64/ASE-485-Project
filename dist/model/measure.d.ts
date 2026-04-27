import { Note } from "./note.js";
import { Rest } from "./rest.js";
import { TimeSignature } from "./timesignature.js";
export type MeasureElement = Note | Rest;
export declare class Measure {
    timesignature: TimeSignature;
    elements: MeasureElement[];
    constructor(timesignature: TimeSignature);
    getTotalBeats(): number;
    canAdd(element: MeasureElement): boolean;
    addElement(element: MeasureElement): boolean;
    getMaxBeats(): number;
}
//# sourceMappingURL=measure.d.ts.map