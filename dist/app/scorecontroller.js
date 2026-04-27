import { Score } from "../model/score.js";
import { Note } from "../model/note.js";
import { Staff } from "../model/staff.js";
import { AddElementCommand } from "../commands/addnote.js";
import { ScoreRenderer } from "../renderer/scorerenderer.js";
import { getDurationValue } from "../model/duration.js";
import { Measure } from "../model/measure.js";
import { BEATS_PER_MEASURE } from "../model/duration.js";
import { DeleteElementCommand } from "../commands/deletenote.js";
export class ScoreController {
    constructor(score, renderer) {
        this.score = score;
        this.renderer = renderer;
        this.commandHistory = [];
        this.redoStack = [];
    }
    addElement(staff, element) {
        const cmd = new AddElementCommand(staff, element);
        const lastMeasure = staff.measures[staff.measures.length - 1];
        if (!lastMeasure)
            throw new Error("No measure found");
        const value = getDurationValue(element.duration);
        const currentBeats = lastMeasure.getTotalBeats();
        cmd.execute();
        this.commandHistory.push(cmd);
        this.redoStack = [];
        this.renderer.render();
    }
    deleteElement(staff, elementId) {
        const cmd = new DeleteElementCommand(staff, elementId);
        cmd.execute();
        this.commandHistory.push(cmd);
        this.redoStack = [];
        this.renderer.render();
    }
    setScore(score) {
        this.score = score;
        this.renderer.render();
    }
    undo() {
        const cmd = this.commandHistory.pop();
        if (!cmd)
            return;
        cmd.undo();
        this.redoStack.push(cmd);
        this.renderer.render();
    }
    redo() {
        const cmd = this.redoStack.pop();
        if (!cmd)
            return;
        cmd.execute();
        this.commandHistory.push(cmd);
        this.renderer.render();
    }
}
//# sourceMappingURL=scorecontroller.js.map