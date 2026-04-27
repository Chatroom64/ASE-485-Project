import type { Duration, PitchLetter } from "../model/types";
export type ScoreFile = {
  title: string;
  tempo: number;
  timeSignature: {
    beats: number;
    beatValue: number;
  };

  measures: MeasureData[];
};

export type MeasureData = {
  elements: ElementData[];
};

export type ElementData =
  | {
      type: "note";
      pitch: PitchLetter;
      octave: number;
      duration: Duration;
    }
  | {
      type: "rest";
      duration: Duration;
    };