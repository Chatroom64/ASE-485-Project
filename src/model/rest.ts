import type { Duration } from "./types.js";
import { generateId } from "../utils/idgen.js"


export class Rest{
    readonly type = "rest";
    readonly id: string;
    constructor( // constructor only contains one attribute because a rest has no pitch, octave or accidental tied to it
        public duration: Duration // public [var]: [type]
    ){this.id = generateId();}
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