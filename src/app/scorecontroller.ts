import { Score } from "../model/score.js";
import { Note } from "../model/note.js";
import { Staff } from "../model/staff.js";
import { AddNoteCommand } from "../commands/addnote.js";
import { ScoreRenderer } from "../renderer/scorerenderer.js";

export class ScoreController {

  private commandHistory: any[] = [];
  private redoStack: any[] = [];

  constructor(
    private score: Score,
    private renderer: ScoreRenderer
  ) {}

  addNote(staff: Staff, note: Note): void {

    const cmd = new AddNoteCommand(staff, note);

    cmd.execute();

    this.commandHistory.push(cmd);
    this.redoStack = [];

    this.renderer.render();

  }

  undo(): void {

    const cmd = this.commandHistory.pop();

    if (!cmd) return;

    cmd.undo();

    this.redoStack.push(cmd);

    this.renderer.render();

  }

  redo(): void {

    const cmd = this.redoStack.pop();

    if (!cmd) return;

    cmd.execute();

    this.commandHistory.push(cmd);

    this.renderer.render();

  }

}