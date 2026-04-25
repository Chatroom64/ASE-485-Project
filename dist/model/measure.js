import { Note } from "./note.js";
import { Rest } from "./rest.js";
import { TimeSignature } from "./timesignature.js";
export class Measure {
    constructor(timesignature) {
        this.timesignature = timesignature;
        this.elements = [];
    }
    getTotalBeats() {
        return this.elements.reduce((sum, el) => sum + el.getBeats(), 0);
    }
    canAdd(element) {
        return (this.getTotalBeats() + element.getBeats()
            <= this.timesignature.beats);
    }
    addElement(element) {
        if (!this.canAdd(element)) {
            return false;
        }
        this.elements.push(element);
        return true;
    }
}
//# sourceMappingURL=measure.js.map