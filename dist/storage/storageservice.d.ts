import { Score } from "../model/score.js";
export declare class StorageService {
    static saveScore(score: Score): void;
    static loadAllScores(): Score[];
    static saveCurrentScore(score: Score): void;
    static loadCurrentScore(): Score | null;
}
//# sourceMappingURL=storageservice.d.ts.map