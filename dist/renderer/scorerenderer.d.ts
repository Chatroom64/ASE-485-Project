import { Score } from "../model/score.js";
import type { PositionedElement } from "../model/measure.js";
export declare class ScoreRenderer {
    private svg;
    private score;
    constructor(svg: SVGSVGElement, score: Score);
    private playhead;
    createPlayhead(): void;
    movePlayhead(x: number): void;
    getPositionedElements(): PositionedElement[];
    render(): void;
}
//# sourceMappingURL=scorerenderer.d.ts.map