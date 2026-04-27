import { Staff } from "../model/staff.js";
import { AudioPlayer } from "./midiutils.js";
import { getDurationValue, beatsToMs, pitchToFrequency } from "../model/duration.js";
import { flattenScore } from "./playbackutils.js";
import { ScoreRenderer } from "../renderer/scorerenderer.js";
export class PlaybackEngine {
    constructor(renderer) {
        this.renderer = renderer;
        this.player = new AudioPlayer();
        this.isPlaying = false;
    }
    async play(staff, bpm) {
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
                    const freq = pitchToFrequency(event.element.pitch, event.element.octave);
                    this.player.playFrequency(freq, durationMs);
                }
            }, currentTime);
            currentTime += durationMs;
        }
    }
}
//# sourceMappingURL=playbackengine.js.map