import { Duration } from "./types";

export class Rest{
    readonly type = "rest";
    constructor( // constructor only contains one attribute because a rest has no pitch, octave or accidental tied to it
        public duration: Duration // public [var]: [type]
    ){}
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