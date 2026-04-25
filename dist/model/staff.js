import { Measure } from "./measure.js";
import { TimeSignature } from "./timesignature.js";
import { generateId } from "../utils/idgen.js";
export class Staff {
    constructor(clef = "treble", timesignature = new TimeSignature()) {
        this.clef = clef;
        this.measures = [];
        this.id = generateId();
        this.measures.push(new Measure(timesignature));
    }
    addElement(element) {
        let currentMeasure = this.measures[this.measures.length - 1];
        if (!currentMeasure)
            throw new Error("Measure not found");
        if (!currentMeasure.canAdd(element)) { // if no next measure, create new measure. Many music notation softwares lack this
            const newMeasure = new Measure(currentMeasure.timesignature);
            this.measures.push(newMeasure);
            currentMeasure = newMeasure;
        }
        currentMeasure.addElement(element);
    }
}
//# sourceMappingURL=staff.js.map