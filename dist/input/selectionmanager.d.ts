import { Score } from "../model/score.js";
import { Note } from "../model/note.js";
export declare class SelectionManager {
    private score;
    private selectedId;
    constructor(score: Score);
    selectNote(noteId: string): void;
    clearSelection(): void;
    getSelectedNote(): Note | null;
}
//# sourceMappingURL=selectionmanager.d.ts.map