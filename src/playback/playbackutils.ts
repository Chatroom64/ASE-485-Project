import { Staff } from "../model/staff.js";
import type { MeasureElement } from "../model/measure.js";

export function flattenScore(staff: Staff): MeasureElement[] {
  const result: MeasureElement[] = [];

  for (const measure of staff.measures) {
    for (const el of measure.elements) {
      result.push(el);
    }
  }

  return result;
}