import type { Command } from "./command.js";
import { Staff } from "../model/staff.js";
import { Note } from "../model/note.js";

export class AddNoteCommand implements Command {

  constructor(
    private staff: Staff,
    private note: Note
  ) {}

  execute(): void {

    // Temporary placeholder logic
    this.staff.addElement(this.note);

    console.log("AddNoteCommand executed");

  }

  undo(): void {

    // Placeholder undo
    const lastMeasure = this.staff.measures[this.staff.measures.length - 1];

    if (!lastMeasure) throw new Error("Measure not found");

    lastMeasure.elements.pop();


    console.log("AddNoteCommand undone");

  }

}