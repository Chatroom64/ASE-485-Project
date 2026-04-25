import { generateId } from "../utils/idgen.js";
export class Rest {
    constructor(// constructor only contains one attribute because a rest has no pitch, octave or accidental tied to it
    duration // public [var]: [type]
    ) {
        this.duration = duration;
        this.type = "rest";
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
//# sourceMappingURL=rest.js.map