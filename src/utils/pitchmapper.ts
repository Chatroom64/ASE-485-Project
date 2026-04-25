import type { PitchLetter } from "../model/types.js";

type PitchData = {
    pitch: PitchLetter,
    octave: number
}

const TREBLE_NOTES: PitchData[] = [
    {pitch:"C" , octave:4},
    {pitch:"D" , octave:4},
    {pitch:"E" , octave:4},
    {pitch:"F" , octave:4},
    {pitch:"G" , octave:4},
    {pitch:"A" , octave:4},
    {pitch:"B" , octave:4},
    {pitch:"C" , octave:5},
    {pitch:"D" , octave:5},
    {pitch:"E" , octave:5},
    {pitch:"F" , octave:5},
    {pitch:"G" , octave:5},
    {pitch:"A" , octave:5},
    {pitch:"B" , octave:5},
    {pitch:"C" , octave:6}
]

export class PitchMapper {
    constructor(
        private staffTop: number,
        private lineSpacing: number
    ){}
    getPitchFromY(y: number):{pitch:PitchLetter, octave: number}{
        const bottomLineY = this.staffTop + 4 * this.lineSpacing;
        const stepSize = this.lineSpacing/2 // dividing by 2 allows the notes to go from line >> space rather than line >> line
        const offset = Math.round((bottomLineY - y)/stepSize);
        const index = Math.max(0, Math.min(TREBLE_NOTES.length - 1, offset));
        const note = TREBLE_NOTES[index];
        if (!note) throw new Error("No note");
        return note;
    }
}
