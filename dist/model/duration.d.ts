export type Duration = "whole" | "half" | "quarter" | "eighth";
export declare const BEATS_PER_MEASURE = 4;
export declare const BPM = 120;
export declare function getDurationValue(duration: Duration): number;
export declare function beatsToMs(beats: number, bpm: number): number;
export declare function pitchToFrequency(pitch: string, octave: number): number;
//# sourceMappingURL=duration.d.ts.map