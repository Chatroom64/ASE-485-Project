import { Staff } from "./staff";
import { TimeSignature } from "./timesignature";

export class Score {
  staves: Staff[] = [];
  constructor( //defaults
    public title: string = "New Score",
    public tempo: number = 120,
    public keySignature: string = "C",
    public timeSignature: TimeSignature = new TimeSignature()
  ) {}
  addStaff(staff: Staff): void {
    this.staves.push(staff);
  }

}