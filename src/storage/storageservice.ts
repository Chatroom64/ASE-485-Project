import { Score } from "../model/score";
import { Serializer } from "./serializer";

const STORAGE_KEY = "music_scores";

export class StorageService {

  static saveScore(score: Score): void {

    const scores = this.loadAllScores();

    scores.push(score);

    const json = scores.map(s => Serializer.serializeScore(s));

    localStorage.setItem(STORAGE_KEY, JSON.stringify(json));

  }

  static loadAllScores(): Score[] {

    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) return [];

    const jsonArray: string[] = JSON.parse(data);

    return jsonArray.map(json =>
      Serializer.deserializeScore(json)
    );

  }

  static saveCurrentScore(score: Score): void {

    const json = Serializer.serializeScore(score);

    localStorage.setItem("current_score", json);

  }

  static loadCurrentScore(): Score | null {

    const json = localStorage.getItem("current_score");

    if (!json) return null;

    return Serializer.deserializeScore(json);

  }

}