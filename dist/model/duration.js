export const BEATS_PER_MEASURE = 4;
export const BPM = 120;
export function getDurationValue(duration) {
    switch (duration) {
        case "whole": return 4;
        case "half": return 2;
        case "quarter": return 1;
        case "eighth": return 0.5;
        default: throw new Error("Unknown duration");
    }
}
export function beatsToMs(beats, bpm) {
    return (60000 / bpm) * beats;
}
export function pitchToFrequency(pitch, octave) {
    const A4 = 440;
    const noteMap = {
        C: -9, D: -7, E: -5, F: -4,
        G: -2, A: -0, B: 2
    };
    if (noteMap[pitch] === undefined)
        throw new Error("Notes not found");
    const semitoneOffset = noteMap[pitch] + (octave - 4) * 12;
    return A4 * Math.pow(2, semitoneOffset / 12);
}
//# sourceMappingURL=duration.js.map