import { Command } from "./command"; // Sprint 2 placeholder
import { Staff } from "../model/staff";
import { Note } from "../model/note";

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

    lastMeasure.elements.pop();

    console.log("AddNoteCommand undone");

  }

}