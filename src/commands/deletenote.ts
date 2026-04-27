import { Staff } from "../model/staff.js";
import type { MeasureElement } from "../model/measure.js";

export class DeleteElementCommand {

  private measureIndex: number;
  private elementIndex: number;

  constructor(
    private staff: Staff,
    private element: MeasureElement
  ) {
    const result = this.findElement();

    if (!result) {
      throw new Error("Element not found");
    }

    this.measureIndex = result.measureIndex;
    this.elementIndex = result.elementIndex;
  }

  private findElement() {
    for (let m = 0; m < this.staff.measures.length; m++) {
      const measure = this.staff.measures[m];
      if(!measure) throw new Error("Measure not found");

      const index = measure.elements.indexOf(this.element);

      if (index !== -1) {
        return {
          measureIndex: m,
          elementIndex: index
        };
      }
    }

    return null;
  }

  execute(): void {
    const measure = this.staff.measures[this.measureIndex];
    if(!measure) throw new Error("Measure not found");
    measure.elements.splice(this.elementIndex, 1);
  }

  undo(): void {
    const measure = this.staff.measures[this.measureIndex];
    if(!measure) throw new Error("Measure not found");
    measure.elements.splice(this.elementIndex, 0, this.element);
  }
}