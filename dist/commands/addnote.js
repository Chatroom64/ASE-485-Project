import { Staff } from "../model/staff.js";
import { Note } from "../model/note.js";
import { Measure } from "../model/measure.js";
export class AddElementCommand {
    constructor(staff, element) {
        this.staff = staff;
        this.element = element;
    }
    execute() {
        let currentMeasure = this.staff.measures[this.staff.measures.length - 1];
        if (!currentMeasure) {
            throw new Error("No measure found");
        }
        if (!currentMeasure.canAdd(this.element)) {
            const newMeasure = new Measure(currentMeasure.timesignature);
            this.staff.measures.push(newMeasure);
            currentMeasure = newMeasure;
        }
        currentMeasure.addElement(this.element);
    }
    undo() {
        // Placeholder undo
        const lastMeasure = this.staff.measures[this.staff.measures.length - 1];
        if (!lastMeasure)
            throw new Error("Measure not found");
        lastMeasure.elements.pop();
        console.log("AddNoteCommand undone");
    }
}
//# sourceMappingURL=addnote.js.map