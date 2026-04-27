import { Measure } from "../model/measure.js";
import { Score } from "../model/score.js";
import { TimeSignature } from "../model/timesignature.js";
import { Note } from "../model/note.js";
import { Rest } from "../model/rest.js";
import { Staff } from "../model/staff.js";
export function exportScore(score) {
    const staffNum = score.staves[0];
    if (!staffNum)
        throw new Error("Staves not found");
    return {
        title: score.title,
        tempo: score.tempo,
        timeSignature: score.timeSignature,
        measures: staffNum.measures.map(measure => ({
            elements: measure.elements.map(el => {
                if (el.type === "note") {
                    return {
                        type: "note",
                        pitch: el.pitch,
                        octave: el.octave,
                        duration: el.duration
                    };
                }
                return {
                    type: "rest",
                    duration: el.duration
                };
            })
        }))
    };
}
export function downloadScore(score) {
    const data = exportScore(score);
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${data.title || "score"}.json`;
    a.click();
    URL.revokeObjectURL(url);
}
export function importScore(data) {
    const score = new Score(data.title, data.tempo, "C", data.timeSignature);
    const staff = new Staff("treble", data.timeSignature);
    score.staves.push(staff);
    for (const measureData of data.measures) {
        const measure = new Measure(data.timeSignature);
        for (const el of measureData.elements) {
            if (el.type === "note") {
                measure.addElement(new Note(el.pitch, el.octave, el.duration));
            }
            if (el.type === "rest") {
                measure.addElement(new Rest(el.duration));
            }
        }
        staff.measures.push(measure);
    }
    return score;
}
export function loadScoreFromFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const data = JSON.parse(reader.result);
                resolve(importScore(data));
            }
            catch (e) {
                reject(e);
            }
        };
        reader.onerror = reject;
        reader.readAsText(file);
    });
}
//# sourceMappingURL=midiexporter.js.map