import { Score } from "../model/score.js";
import { Serializer } from "./serializer.js";
const STORAGE_KEY = "music_scores";
export class StorageService {
    static saveScore(score) {
        const scores = this.loadAllScores();
        scores.push(score);
        const json = scores.map(s => Serializer.serializeScore(s));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(json));
    }
    static loadAllScores() {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data)
            return [];
        const jsonArray = JSON.parse(data);
        return jsonArray.map(json => Serializer.deserializeScore(json));
    }
    static saveCurrentScore(score) {
        const json = Serializer.serializeScore(score);
        localStorage.setItem("current_score", json);
    }
    static loadCurrentScore() {
        const json = localStorage.getItem("current_score");
        if (!json)
            return null;
        return Serializer.deserializeScore(json);
    }
}
//# sourceMappingURL=storageservice.js.map