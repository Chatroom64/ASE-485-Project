import { Score } from "../model/score";
import { Note } from "../model/note";
import { Staff } from "../model/staff";
import { AddNoteCommand } from "../commands/addnote";
import { ScoreRenderer } from "../renderer/scorerenderer";

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