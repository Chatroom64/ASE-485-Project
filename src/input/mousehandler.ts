import { SelectionManager } from "./selectionmanager.js";
import { PitchMapper } from "../utils/pitchmapper.js";
import { ScoreController } from "../app/scorecontroller.js";
import { Note } from "../model/note.js";
import { Rest } from "../model/rest.js";
import { Staff } from "../model/staff.js";

export class MouseHandler{
    private pitchMapper: PitchMapper;
    
    constructor(
        private svg: SVGSVGElement,
        private selectionManager: SelectionManager,
        private controller: ScoreController,
        private staff: Staff,
        private currentDuration: "whole" | "half" | "quarter" | "eighth" = "quarter"
    )
    {
        this.pitchMapper = new PitchMapper(100,12);
        this.init();
    }
    private init(): void {
    this.svg.addEventListener("click", (event) => {
      this.handleClick(event);
    });
    }
    private currentTool: "note" | "rest" = "note";
    setDuration(duration: "whole" | "half" | "quarter" | "eighth"): void {
      this.currentDuration = duration;
    }
    setTool(tool: "note" | "rest") {
      this.currentTool = tool;
    }
    private handleClick(event:MouseEvent): void{
        const target = event.target as HTMLElement;
        const noteId = target.getAttribute("data-id");
        if (noteId){
            this.selectionManager.selectNote(noteId);
            this.highlightSelection(noteId);
        } 
        const svgRect = this.svg.getBoundingClientRect();
        const y = event.clientY - svgRect.top;
        const {pitch, octave} = this.pitchMapper.getPitchFromY(y);
        if(this.currentTool === "note"){
            const newNote = new Note(pitch, octave, this.currentDuration);
            this.controller.addElement(this.staff, newNote);
        } else {
            const rest = new Rest(this.currentDuration);
            this.controller.addElement(this.staff, rest);
        }
    }
    private highlightSelection(noteId: string): void{
        this.clearHighlights();
        const el = this.svg.querySelector(`[data-id="${noteId}"]`);
        if (el) el.classList.add("selected");
    }
    private clearHighlights(): void{
        const selected = this.svg.querySelectorAll(".selected");
        selected.forEach(el => el.classList.remove("selected"));
    }
}