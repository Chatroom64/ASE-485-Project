import { Score } from "../model/score.js";
import { Note } from "../model/note.js";
import { Staff } from "../model/staff.js";
import { AddNoteCommand } from "../commands/addnote.js";
import { ScoreRenderer } from "../renderer/scorerenderer.js";
export class ScoreController {
    constructor(score, renderer) {
        this.score = score;
        this.renderer = renderer;
        this.commandHistory = [];
        this.redoStack = [];
    }
    addNote(staff, note) {
        const cmd = new AddNoteCommand(staff, note);
        cmd.execute();
        this.commandHistory.push(cmd);
        this.redoStack = [];
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