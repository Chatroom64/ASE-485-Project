import { Staff } from "./staff.js";
import { TimeSignature } from "./timesignature.js";
import { generateId } from "../utils/idgen.js";
export class Score {
    constructor(//defaults
    title = "New Score", tempo = 120, keySignature = "C", timeSignature = new TimeSignature()) {
        this.title = title;
        this.tempo = tempo;
        this.keySignature = keySignature;
        this.timeSignature = timeSignature;
        this.staves = [];
        this.id = generateId();
    }
    addStaff(staff) {
        this.staves.push(staff);
    }
}
//# sourceMappingURL=score.js.map