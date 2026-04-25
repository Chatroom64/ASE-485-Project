import type { Command } from "./command.js";
import { Staff } from "../model/staff.js";
import { Note } from "../model/note.js";
export declare class AddNoteCommand implements Command {
    private staff;
    private note;
    constructor(staff: Staff, note: Note);
    execute(): void;
    undo(): void;
}
//# sourceMappingURL=addnote.d.ts.map