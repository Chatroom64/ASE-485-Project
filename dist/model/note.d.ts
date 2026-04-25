import type { Duration, Accidental, PitchLetter } from "./types.js";
export declare class Note {
    pitch: PitchLetter;
    octave: number;
    duration: Duration;
    accidental: Accidental;
    readonly type = "note";
    readonly id: string;
    constructor(// each note has a pitch, octave, duration and accidental
    pitch: PitchLetter, octave: number, duration: Duration, accidental?: Accidental);
    getBeats(): number;
}
//# sourceMappingURL=note.d.ts.map