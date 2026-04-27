import { SelectionManager } from "./selectionmanager.js";
import { PitchMapper } from "../utils/pitchmapper.js";
import { ScoreController } from "../app/scorecontroller.js";
import { Note } from "../model/note.js";
import { Rest } from "../model/rest.js";
import { Staff } from "../model/staff.js";
export class MouseHandler {
    constructor(svg, selectionManager, controller, staff, currentDuration = "quarter") {
        this.svg = svg;
        this.selectionManager = selectionManager;
        this.controller = controller;
        this.staff = staff;
        this.currentDuration = currentDuration;
        this.currentTool = "note";
        this.pitchMapper = new PitchMapper(100, 12);
        this.init();
    }
    init() {
        this.svg.addEventListener("click", (event) => {
            this.handleClick(event);
        });
    }
    setDuration(duration) {
        this.currentDuration = duration;
    }
    setTool(tool) {
        this.currentTool = tool;
    }
    handleClick(event) {
        const target = event.target;
        const noteId = target.getAttribute("data-id");
        if (noteId) {
            this.selectionManager.selectNote(noteId);
            this.highlightSelection(noteId);
        }
        const svgRect = this.svg.getBoundingClientRect();
        const y = event.clientY - svgRect.top;
        const { pitch, octave } = this.pitchMapper.getPitchFromY(y);
        if (this.currentTool === "note") {
            const newNote = new Note(pitch, octave, this.currentDuration);
            this.controller.addElement(this.staff, newNote);
        }
        else {
            const rest = new Rest(this.currentDuration);
            this.controller.addElement(this.staff, rest);
        }
    }
    highlightSelection(noteId) {
        this.clearHighlights();
        const el = this.svg.querySelector(`[data-id="${noteId}"]`);
        if (el)
            el.classList.add("selected");
    }
    clearHighlights() {
        const selected = this.svg.querySelectorAll(".selected");
        selected.forEach(el => el.classList.remove("selected"));
    }
}
//# sourceMappingURL=mousehandler.js.map