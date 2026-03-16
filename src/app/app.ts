import { Score } from "../model/score";
import { Staff } from "../model/staff";
import { Note } from "../model/note";
import { StorageService } from "../storage/storageservice";

const score = new Score("My Score");
const staff = new Staff();
score.addStaff(staff);

staff.addElement(
  new Note("C", 4, "quarter")
);

console.log(score);
StorageService.saveCurrentScore(score);