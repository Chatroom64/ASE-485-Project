import { Score } from "../model/score.js";
import { Note } from "../model/note.js";

export class SelectionManager {

  private selectedId: string | null = null;

  constructor(private score: Score) {}

  selectNote(noteId: string): void {
    this.selectedId = noteId;
    console.log("Selected note:", noteId);
  }

  clearSelection(): void {
    this.selectedId = null;
  }

  getSelectedNote(): Note | null {

    if (!this.selectedId) return null;

    for (const staff of this.score.staves) {
      for (const measure of staff.measures) {
        for (const el of measure.elements) {
          if (el.type === "note" && el.id === this.selectedId) {
            return el;
          }
        }
      }
    }
    return null;
  }
}