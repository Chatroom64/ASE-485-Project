import { Score } from "../model/score";
import { Staff } from "../model/staff";
import { Measure } from "../model/measure";
import { Note } from "../model/note";
import { Rest } from "../model/rest";
import { TimeSignature } from "../model/timesignature";

export class Serializer {

  static serializeScore(score: Score): string {

    return JSON.stringify(score);

  }

  static deserializeScore(json: string): Score {

    const data = JSON.parse(json);

    const score = new Score(
      data.title,
      data.tempo,
      data.keySignature,
      new TimeSignature(
        data.timeSignature.beats,
        data.timeSignature.beatValue
      )
    );

    score.staves = data.staves.map((staffData: any) => {

      const staff = new Staff(
        staffData.clef,
        new TimeSignature(
          data.timeSignature.beats,
          data.timeSignature.beatValue
        )
      );

      staff.measures = staffData.measures.map((measureData: any) => {

        const measure = new Measure(
          new TimeSignature(
            measureData.timeSignature.beats,
            measureData.timeSignature.beatValue
          )
        );

        measure.elements = measureData.elements.map((el: any) => {

          if (el.type === "note") {

            return new Note(
              el.pitch,
              el.octave,
              el.duration,
              el.accidental
            );

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