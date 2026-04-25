import { Staff } from "../model/staff.js";
import { Note } from "../model/note.js";
export class AddNoteCommand {
    constructor(staff, note) {
        this.staff = staff;
        this.note = note;
    }
    execute() {
        // Temporary placeholder logic
        this.staff.addElement(this.note);
        console.log("AddNoteCommand executed");
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