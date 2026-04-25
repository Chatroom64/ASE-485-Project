import { Score } from "../model/score.js";
import { Note } from "../model/note.js";
export class SelectionManager {
    constructor(score) {
        this.score = score;
        this.selectedNoteId = null;
    }
    selectNote(noteId) {
        this.selectedNoteId = noteId;
        console.log("Selected note:", noteId);
    }
    clearSelection() {
        this.selectedNoteId = null;
    }
    getSelectedNote() {
        if (!this.selectedNoteId)
            return null;
        for (const staff of this.score.staves) {
            for (const measure of staff.measures) {
                for (const el of measure.elements) {
                    if (el.type === "note" && el.id === this.selectedNoteId) {
                        return el;
                    }
                }
            }
        }
        return null;
    }
}
//# sourceMappingURL=selectionmanager.js.map