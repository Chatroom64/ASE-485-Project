import { Measure } from "./measure";
import { TimeSignature } from "./timesignature";
import { ClefType } from "./types";
import { MeasureElement } from "./measure";

export class Staff{
    measures: Measure[] = [];
    constructor(
        public clef: ClefType = "treble",
        timesignature: TimeSignature = new TimeSignature()
    ){
        this.measures.push(new Measure(timesignature));
    }
    addElement(element:MeasureElement): void{
        let currentMeasure = this.measures[this.measures.length -1];
        if (!currentMeasure.canAdd(element)){ // if no next measure, create new measure. Many music notation softwares lack this
            const newMeasure = new Measure(currentMeasure.timesignature);
            this.measures.push(newMeasure);
            currentMeasure = newMeasure;
        }
        currentMeasure.addElement(element);
    }
}