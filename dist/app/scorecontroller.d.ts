import { Score } from "../model/score.js";
import { Staff } from "../model/staff.js";
import { ScoreRenderer } from "../renderer/scorerenderer.js";
import type { MeasureElement } from "../model/measure.js";
export declare class ScoreController {
    private score;
    private renderer;
    private commandHistory;
    private redoStack;
    constructor(score: Score, renderer: ScoreRenderer);
    addElement(staff: Staff, element: MeasureElement): void;
    deleteElement(staff: Staff, elementId: MeasureElement): void;
    undo(): void;
    redo(): void;
}
//# sourceMappingURL=scorecontroller.d.ts.map