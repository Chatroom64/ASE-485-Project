import type { PitchLetter } from "../model/types.js";
export declare class PitchMapper {
    private staffTop;
    private lineSpacing;
    constructor(staffTop: number, lineSpacing: number);
    getPitchFromY(y: number): {
        pitch: PitchLetter;
        octave: number;
    };
}
//# sourceMappingURL=pitchmapper.d.ts.map