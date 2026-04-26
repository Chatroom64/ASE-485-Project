import type { PitchLetter } from "../model/types.js";
type PitchData = {
    pitch: PitchLetter;
    octave: number;
};
export declare const TREBLE_NOTES: PitchData[];
export declare const MIDDLE_LINE_INDEX = 6;
export declare class PitchMapper {
    private staffTop;
    private lineSpacing;
    constructor(staffTop: number, lineSpacing: number);
    getPitchFromY(y: number): {
        pitch: PitchLetter;
        octave: number;
    };
}
export {};
//# sourceMappingURL=pitchmapper.d.ts.map