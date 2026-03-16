import { Duration, Accidental, PitchLetter } from "./types";
export class Note{
    readonly type = "note";
    constructor(  // each note has a pitch, octave, duration and accidental
        public pitch: PitchLetter,
        public octave: number,
        public duration: Duration,
        public accidental: Accidental = null
      ) {}
    getBeats(): number {
        const durationMap: Record <Duration, number> = {
            whole: 4,
            half: 2,
            quarter: 1,
            eighth: 0.5
        };
        return durationMap[this.duration];
    }
}