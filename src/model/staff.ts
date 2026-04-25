import { Measure } from "./measure.js";
import { TimeSignature } from "./timesignature.js";
import type { ClefType } from "./types.js";
import type { MeasureElement } from "./measure.js";
import { generateId } from "../utils/idgen.js";

export class Staff{
    readonly id: string;
    measures: Measure[] = [];
    constructor(
        public clef: ClefType = "treble",
        timesignature: TimeSignature = new TimeSignature()
    ){
        this.id = generateId();
        this.measures.push(new Measure(timesignature));
    }
    addElement(element:MeasureElement): void{
        let currentMeasure = this.measures[this.measures.length -1];
        if (!currentMeasure) throw new Error("Measure not found");
        if (!currentMeasure.canAdd(element)){ // if no next measure, create new measure. Many music notation softwares lack this
            const newMeasure = new Measure(currentMeasure.timesignature);
            this.measures.push(newMeasure);
            currentMeasure = newMeasure;
        }
        currentMeasure.addElement(element);
    }
}