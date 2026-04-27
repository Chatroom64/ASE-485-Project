import { Score } from "../model/score.js";
import { Note } from "../model/note.js";
import { Staff } from "../model/staff.js";
import { AddElementCommand } from "../commands/addnote.js";
import { ScoreRenderer } from "../renderer/scorerenderer.js";
import { getDurationValue } from "../model/duration.js";
import type { MeasureElement } from "../model/measure.js";
import { Measure } from "../model/measure.js";
import { BEATS_PER_MEASURE } from "../model/duration.js";
import type { MeasureElementType } from "../model/types.js";

export class ScoreController {

  private commandHistory: any[] = [];
  private redoStack: any[] = [];

  constructor(
    private score: Score,
    private renderer: ScoreRenderer
  ) {}

  addElement(staff: Staff, element: MeasureElement): void {

    const cmd = new AddElementCommand(staff, element);
    const lastMeasure = staff.measures[staff.measures.length - 1];

    if (!lastMeasure) throw new Error("No measure found");
    

    const value = getDurationValue(element.duration);
    const currentBeats = lastMeasure.getTotalBeats();

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