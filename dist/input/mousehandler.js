import { SelectionManager } from "./selectionmanager.js";
import { PitchMapper } from "../utils/pitchmapper.js";
import { ScoreController } from "../app/scorecontroller.js";
import { Note } from "../model/note.js";
import { Staff } from "../model/staff.js";
export class MouseHandler {
    constructor(svg, selectionManager, controller, staff) {
        this.svg = svg;
        this.selectionManager = selectionManager;
        this.controller = controller;
        this.staff = staff;
        this.pitchMapper = new PitchMapper(100, 12);
        this.init();
    }
    init() {
        this.svg.addEventListener("click", (event) => {
            this.handleClick(event);
        });
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
        const newNote = new Note(pitch, octave, "quarter");
        this.controller.addNote(this.staff, newNote);
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