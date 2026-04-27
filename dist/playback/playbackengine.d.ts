import { Staff } from "../model/staff.js";
import { ScoreRenderer } from "../renderer/scorerenderer.js";
export declare class PlaybackEngine {
    private renderer;
    constructor(renderer: ScoreRenderer);
    private player;
    private isPlaying;
    play(staff: Staff, bpm: number): Promise<void>;
}
//# sourceMappingURL=playbackengine.d.ts.map