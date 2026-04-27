import { Score } from "../model/score.js";
import type { ScoreFile } from "./scoreFileFormat.js";
export declare function exportScore(score: Score): ScoreFile;
export declare function downloadScore(score: Score): void;
export declare function importScore(data: ScoreFile): Score;
export declare function loadScoreFromFile(file: File): Promise<Score>;
//# sourceMappingURL=midiexporter.d.ts.map