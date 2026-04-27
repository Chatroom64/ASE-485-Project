export class AudioPlayer {
    constructor() {
        this.ctx = new AudioContext();
    }
    playFrequency(freq, durationMs) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.frequency.value = freq;
        osc.type = "sine";
        osc.start();
        osc.stop(this.ctx.currentTime + durationMs / 1000);
    }
}
//# sourceMappingURL=midiutils.js.map