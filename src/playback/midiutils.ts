export class AudioPlayer {
  private ctx = new AudioContext();

  
  playFrequency(freq: number, durationMs: number) {

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