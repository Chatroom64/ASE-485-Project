import { Score } from "../model/score.js";
import { Note } from "../model/note.js";
import { Staff } from "../model/staff.js";
import { ScoreRenderer } from "../renderer/scorerenderer.js";
export declare class ScoreController {
    private score;
    private renderer;
    private commandHistory;
    private redoStack;
    constructor(score: Score, renderer: ScoreRenderer);
    addNote(staff: Staff, note: Note): void;
    undo(): void;
    redo(): void;
}
//# sourceMappingURL=scorecontroller.d.ts.map