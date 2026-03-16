import { Note } from "./note";
import { Rest } from "./rest";
import { TimeSignature } from "./timesignature";

export type MeasureElement = Note | Rest; // defined here because I have to import it here and likely won't need it anywhere else

export class Measure{
    elements: MeasureElement[] = [];
    constructor(
        public timesignature: TimeSignature
    ){}
    getTotalBeats(): number{
    return this.elements.reduce(
        (sum, el) => sum + el.getBeats(),
        0
        );
    }
    canAdd(element: MeasureElement): boolean {

    return (
      this.getTotalBeats() + element.getBeats()
      <= this.timesignature.beats
    );
    }
    addElement(element: MeasureElement): boolean {
      if (!this.canAdd(element)) {
        return false;
      }
      this.elements.push(element);
      return true;
    }
}

