import { Staff } from "./staff.js";
import { TimeSignature } from "./timesignature.js";
import { generateId } from "../utils/idgen.js"

export class Score {
  readonly id:string;
  staves: Staff[] = [];
  constructor( //defaults
    public title: string = "New Score",
    public tempo: number = 120,
    public keySignature: string = "C",
    public timeSignature: TimeSignature = new TimeSignature()
  ) {this.id = generateId();}
  addStaff(staff: Staff): void {
    this.staves.push(staff);
  }

}