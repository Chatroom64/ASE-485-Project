import { Score } from "../model/score.js";
import { Note } from "../model/note.js";
export class SelectionManager {
    constructor(score) {
        this.score = score;
        this.selectedId = null;
    }
    selectNote(noteId) {
        this.selectedId = noteId;
        console.log("Selected note:", noteId);
    }
    clearSelection() {
        this.selectedId = null;
    }
    getSelectedNote() {
        if (!this.selectedId)
            return null;
        for (const staff of this.score.staves) {
            for (const measure of staff.measures) {
                for (const el of measure.elements) {
                    if (el.type === "note" && el.id === this.selectedId) {
                        return el;
                    }
                }
            }
        }
        return null;
    }
}
//# sourceMappingURL=selectionmanager.js.map