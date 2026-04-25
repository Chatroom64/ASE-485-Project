import { generateId } from "../utils/idgen.js";
export class Note {
    constructor(// each note has a pitch, octave, duration and accidental
    pitch, octave, duration, accidental = null) {
        this.pitch = pitch;
        this.octave = octave;
        this.duration = duration;
        this.accidental = accidental;
        this.type = "note";
        this.id = generateId();
    }
    getBeats() {
        const durationMap = {
            whole: 4,
            half: 2,
            quarter: 1,
            eighth: 0.5
        };
        return durationMap[this.duration];
    }
}
//# sourceMappingURL=note.js.map