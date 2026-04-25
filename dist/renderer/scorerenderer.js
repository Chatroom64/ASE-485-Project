import { Score } from "../model/score.js"; // Sprint 2 placeholder 
export class ScoreRenderer {
    constructor(svg, score) {
        this.svg = svg;
        this.score = score;
    }
    render() {
        console.log("Rendering score...");
        this.svg.innerHTML = "";
        let x = 50;
        const y = 150;
        for (const staff of this.score.staves) {
            for (const measure of staff.measures) {
                for (const el of measure.elements) {
                    if (el.type === "note") {
                        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                        circle.setAttribute("cx", x.toString());
                        circle.setAttribute("cy", y.toString());
                        circle.setAttribute("r", "6");
                        circle.setAttribute("data-id", el.id);
                        circle.classList.add("note");
                        this.svg.appendChild(circle);
                        x += 30;
                    }
                }
            }
        }
    }
}
//# sourceMappingURL=scorerenderer.js.map