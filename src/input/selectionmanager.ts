import { Score } from "../model/score.js";
import { Note } from "../model/note.js";

export class SelectionManager {

  private selectedNoteId: string | null = null;

  constructor(private score: Score) {}

  selectNote(noteId: string): void {
    this.selectedNoteId = noteId;
    console.log("Selected note:", noteId);
  }

  clearSelection(): void {
    this.selectedNoteId = null;
  }

  getSelectedNote(): Note | null {

    if (!this.selectedNoteId) return null;

    for (const staff of this.score.staves) {
      for (const measure of staff.measures) {
        for (const el of measure.elements) {
          if (el.type === "note" && el.id === this.selectedNoteId) {
            return el;
          }
        }
      }
    }

    return null;
  }

}