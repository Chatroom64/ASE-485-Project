import { Note } from "./note.js";
import { Rest } from "./rest.js";
import { TimeSignature } from "./timesignature.js";
import { getDurationValue } from "./duration.js";
export class Measure {
    constructor(timesignature) {
        this.timesignature = timesignature;
        this.elements = [];
    }
    getTotalBeats() {
        return this.elements.reduce((sum, el) => {
            return sum + getDurationValue(el.duration);
        }, 0);
    }
    canAdd(element) {
        return this.getTotalBeats() + getDurationValue(element.duration)
            <= this.getMaxBeats();
    }
    addElement(element) {
        if (!this.canAdd(element)) {
            return false;
        }
        this.elements.push(element);
        return true;
    }
    getMaxBeats() {
        return this.timesignature.beats; // e.g., 4 in 4/4
    }
}
//# sourceMappingURL=measure.js.map