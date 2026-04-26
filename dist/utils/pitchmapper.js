export const TREBLE_NOTES = [
    { pitch: "C", octave: 4 },
    { pitch: "D", octave: 4 },
    { pitch: "E", octave: 4 },
    { pitch: "F", octave: 4 },
    { pitch: "G", octave: 4 },
    { pitch: "A", octave: 4 },
    { pitch: "B", octave: 4 },
    { pitch: "C", octave: 5 },
    { pitch: "D", octave: 5 },
    { pitch: "E", octave: 5 },
    { pitch: "F", octave: 5 },
    { pitch: "G", octave: 5 },
    { pitch: "A", octave: 5 },
    { pitch: "B", octave: 5 },
    { pitch: "C", octave: 6 }
];
export const MIDDLE_LINE_INDEX = 6;
export class PitchMapper {
    constructor(staffTop, lineSpacing) {
        this.staffTop = staffTop;
        this.lineSpacing = lineSpacing;
    }
    getPitchFromY(y) {
        const bottomLineY = this.staffTop + 4 * this.lineSpacing;
        const stepSize = this.lineSpacing / 2; // dividing by 2 allows the notes to go from line >> space rather than line >> line
        const E4_INDEX = 2;
        const offset = Math.round((bottomLineY - y) / stepSize) + E4_INDEX;
        const index = Math.max(0, Math.min(TREBLE_NOTES.length - 1, offset));
        const note = TREBLE_NOTES[index];
        if (!note)
            throw new Error("No note");
        return note;
    }
}
//# sourceMappingURL=pitchmapper.js.map