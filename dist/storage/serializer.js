import { Score } from "../model/score.js";
import { Staff } from "../model/staff.js";
import { Measure } from "../model/measure.js";
import { Note } from "../model/note.js";
import { Rest } from "../model/rest.js";
import { TimeSignature } from "../model/timesignature.js";
export class Serializer {
    static serializeScore(score) {
        return JSON.stringify(score);
    }
    static deserializeScore(json) {
        const data = JSON.parse(json);
        const score = new Score(data.title, data.tempo, data.keySignature, new TimeSignature(data.timeSignature.beats, data.timeSignature.beatValue));
        score.staves = data.staves.map((staffData) => {
            const staff = new Staff(staffData.clef, new TimeSignature(data.timeSignature.beats, data.timeSignature.beatValue));
            staff.measures = staffData.measures.map((measureData) => {
                const measure = new Measure(new TimeSignature(measureData.timeSignature.beats, measureData.timeSignature.beatValue));
                measure.elements = measureData.elements.map((el) => {
                    if (el.type === "note") {
                        return new Note(el.pitch, el.octave, el.duration, el.accidental);
                    }
                    return new Rest(el.duration);
                });
                return measure;
            });
            return staff;
        });
        return score;
    }
}
//# sourceMappingURL=serializer.js.map