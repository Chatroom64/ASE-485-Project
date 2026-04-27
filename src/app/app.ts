import { Score } from "../model/score.js";
import { Staff } from "../model/staff.js";
import { Note } from "../model/note.js";
import { StorageService } from "../storage/storageservice.js";
import { SelectionManager } from "../input/selectionmanager.js";
import { MouseHandler } from "../input/mousehandler.js"
import { ScoreController } from "./scorecontroller.js";
import { ScoreRenderer } from "../renderer/scorerenderer.js";

const svg = document.getElementById("score");

if (!(svg instanceof SVGSVGElement)) throw new Error("Element #score is not an SVG element");
const score = new Score("My Score");
const staff = new Staff();
const renderer = new ScoreRenderer(svg, score);
const controller = new ScoreController(score,renderer);
const selectionManager = new SelectionManager(score);
const ruleButtons = document.querySelectorAll("[data-duration]");
const toolButtons = document.querySelectorAll("[data-tool]");
const mouseHandler = new MouseHandler(
  svg, 
  selectionManager,
  controller,
  staff
);

toolButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const tool = btn.getAttribute("data-tool");
    if (!tool) return;

    mouseHandler.setTool(tool as "note" | "rest");
  });
});
ruleButtons.forEach (btn =>
  btn.addEventListener("click", ()=>{
    const duration = btn.getAttribute("data-duration");
    if (!duration) return;
    mouseHandler.setDuration(duration as any);
  })
)



score.addStaff(staff);

staff.addElement(
  new Note("C", 4, "quarter")
);


console.log(score);
StorageService.saveCurrentScore(score);