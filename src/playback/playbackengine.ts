import { Staff } from "../model/staff.js";
import { AudioPlayer } from "./midiutils.js";
import { getDurationValue, beatsToMs, pitchToFrequency } from "../model/duration.js";
import { flattenScore } from "./playbackutils.js";
import { ScoreRenderer } from "../renderer/scorerenderer.js";
import type { MeasureElement } from "../model/measure.js";
import type { PositionedElement } from "../model/measure.js";

export class PlaybackEngine {
    constructor(
        private renderer: ScoreRenderer
    ){}

  private player = new AudioPlayer();
  private isPlaying = false;
  

  async play(staff: Staff, bpm: number) {

  const events = this.renderer.getPositionedElements();

  let currentTime = 0;

  for (const event of events) {

    const beats = getDurationValue(event.element.duration);
    const durationMs = beatsToMs(beats, bpm);

    setTimeout(() => {

      // ✅ move playhead
      this.renderer.movePlayhead(event.x);

      // ✅ play sound
      if (event.element.type === "note") {
        const freq = pitchToFrequency(
          event.element.pitch,
          event.element.octave
        );

        this.player.playFrequency(freq, durationMs);
      }

    }, currentTime);

    currentTime += durationMs;
  }
}
}