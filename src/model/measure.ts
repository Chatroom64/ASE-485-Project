import { Note } from "./note.js";
import { Rest } from "./rest.js";
import { TimeSignature } from "./timesignature.js";
import { getDurationValue } from "./duration.js";

export type MeasureElement = Note | Rest; // defined here because I have to import it here and likely won't need it anywhere else

export class Measure{
    elements: MeasureElement[] = [];
    constructor(
        public timesignature: TimeSignature
    ){}
    
    getTotalBeats(): number {
      return this.elements.reduce((sum, el) => {
        return sum + getDurationValue(el.duration);

      }, 0);
    }
    canAdd(element: MeasureElement): boolean {
      return this.getTotalBeats() + getDurationValue(element.duration)
        <= this.getMaxBeats();
    }
    addElement(element: MeasureElement): boolean {
      if (!this.canAdd(element)) {
        return false;
      }
      this.elements.push(element);
      return true;
    }
    getMaxBeats(): number {
      return this.timesignature.beats; // e.g., 4 in 4/4
    }
    
    
}

