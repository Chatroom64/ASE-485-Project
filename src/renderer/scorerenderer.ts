import { Score } from "../model/score"; // Sprint 2 placeholder 

export class ScoreRenderer {

  constructor(
    private svg: SVGSVGElement,
    private score: Score
  ) {}

  render(): void {

    console.log("Rendering score...");

    // Temporary placeholder
    this.svg.innerHTML = "";

  }

}