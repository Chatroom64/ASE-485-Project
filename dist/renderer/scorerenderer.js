import { Score } from "../model/score.js"; // Sprint 2 placeholder 
import { TREBLE_NOTES, MIDDLE_LINE_INDEX } from "../utils/pitchmapper.js";
const STAFF_TOP = 100;
const LINE_SPACING = 12;
const TOP_LINE_Y = STAFF_TOP;
const BOTTOM_LINE_Y = STAFF_TOP + 4 * LINE_SPACING;
const STEP_SIZE = LINE_SPACING / 2;
const BOTTOM_LINE_INDEX = 2; // E4
const TOP_LINE_INDEX = 9; // E5
export class ScoreRenderer {
    constructor(svg, score) {
        this.svg = svg;
        this.score = score;
        this.playhead = null;
    }
    createPlayhead() {
        // avoid duplicates
        if (this.playhead)
            return;
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("y1", STAFF_TOP.toString());
        line.setAttribute("y2", (STAFF_TOP + 4 * LINE_SPACING).toString());
        line.setAttribute("stroke", "red");
        line.setAttribute("stroke-width", "2");
        // start off-screen (or at beginning)
        line.setAttribute("x1", "0");
        line.setAttribute("x2", "0");
        this.svg.appendChild(line);
        this.playhead = line;
    }
    movePlayhead(x) {
        if (!this.playhead)
            return;
        this.playhead.setAttribute("x1", x.toString());
        this.playhead.setAttribute("x2", x.toString());
    }
    getPositionedElements() {
        const result = [];
        let x = 50;
        for (const staff of this.score.staves) {
            for (const measure of staff.measures) {
                for (const el of measure.elements) {
                    result.push({ element: el, x });
                    x += 30;
                }
                x += 10; // bar spacing
            }
        }
        return result;
    }
    render() {
        console.log("Rendering score...");
        this.svg.innerHTML = "";
        this.createPlayhead();
        let x = 50;
        for (let i = 0; i < 5; i++) {
            const y = STAFF_TOP + i * LINE_SPACING;
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", "20");
            line.setAttribute("x2", "1000");
            line.setAttribute("y1", y.toString());
            line.setAttribute("y2", y.toString());
            line.setAttribute("stroke", "black");
            this.svg.appendChild(line);
        }
        // a LOT of helper functions after this point
        function getYFromPitch(pitch, octave) {
            const index = getStepIndex(pitch, octave);
            if (index === -1)
                throw new Error("Pitch not found.");
            const stepSize = LINE_SPACING / 2;
            const E4_INDEX = 2;
            return BOTTOM_LINE_Y - (index - E4_INDEX) * stepSize;
        }
        function getStemDirection(index) {
            return index < MIDDLE_LINE_INDEX ? "up" : "down";
        }
        function drawLedgerLines(svg, x, y, index) {
            const ledgerWidth = 20;
            if (index < BOTTOM_LINE_INDEX) {
                for (let i = BOTTOM_LINE_INDEX - 2; i >= index; i -= 2) {
                    const ledgerY = BOTTOM_LINE_Y + (BOTTOM_LINE_INDEX - i) * STEP_SIZE;
                    drawLedger(svg, x, ledgerY, ledgerWidth);
                }
            }
            if (index > TOP_LINE_INDEX) {
                for (let i = TOP_LINE_INDEX + 2; i <= index; i += 2) {
                    const ledgerY = TOP_LINE_Y - (i - TOP_LINE_INDEX) * STEP_SIZE;
                    drawLedger(svg, x, ledgerY, ledgerWidth);
                }
            }
        }
        function drawLedger(svg, x, y, width) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", (x - width / 2).toString());
            line.setAttribute("x2", (x + width / 2).toString());
            line.setAttribute("y1", y.toString());
            line.setAttribute("y2", y.toString());
            line.setAttribute("stroke", "black");
            svg.appendChild(line);
        }
        function drawStem(svg, x, y, direction) {
            const stemLength = 35;
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            if (direction === "up") {
                line.setAttribute("x1", (x + 6).toString());
                line.setAttribute("x2", (x + 6).toString());
                line.setAttribute("y1", y.toString());
                line.setAttribute("y2", (y - stemLength).toString());
            }
            else {
                line.setAttribute("x1", (x - 6).toString());
                line.setAttribute("x2", (x - 6).toString());
                line.setAttribute("y1", y.toString());
                line.setAttribute("y2", (y + stemLength).toString());
            }
            line.setAttribute("stroke", "black");
            svg.appendChild(line);
        }
        function drawRest(svg, x, duration) {
            const y = STAFF_TOP + 2 * LINE_SPACING; // middle of staff
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            let symbol = "";
            switch (duration) {
                case "whole":
                    symbol = "𝄻";
                    break;
                case "half":
                    symbol = "𝄼";
                    break;
                case "quarter":
                    symbol = "𝄽";
                    break;
                case "eighth":
                    symbol = "𝄾";
                    break;
            }
            text.textContent = symbol;
            text.setAttribute("x", x.toString());
            text.setAttribute("y", y.toString());
            text.setAttribute("font-size", "20");
            svg.appendChild(text);
        }
        function getStepIndex(pitch, octave) {
            const index = TREBLE_NOTES.findIndex(n => n.pitch === pitch && n.octave === octave);
            if (index === -1)
                throw new Error(`Invalid pitch: ${pitch}${octave}`);
            return index;
        }
        function isFilled(duration) {
            return duration === "quarter" || duration === "eighth";
        }
        function hasStem(duration) {
            return duration !== "whole";
        }
        //end helper functions    
        for (const staff of this.score.staves) {
            for (const measure of staff.measures) {
                for (const el of measure.elements) {
                    if (el.type === "note") {
                        const index = getStepIndex(el.pitch, el.octave);
                        const direction = getStemDirection(index);
                        const y = getYFromPitch(el.pitch, el.octave);
                        const filled = isFilled(el.duration);
                        drawLedgerLines(this.svg, x, y, index); // ledger lines where necessary
                        const circle = document.createElementNS(// notehead
                        "http://www.w3.org/2000/svg", "circle");
                        circle.setAttribute("cx", x.toString());
                        circle.setAttribute("cy", y.toString());
                        circle.setAttribute("r", "6");
                        circle.setAttribute("fill", filled ? "black" : "white");
                        circle.setAttribute("stroke", "black");
                        circle.setAttribute("data-id", el.id);
                        circle.classList.add("note");
                        this.svg.appendChild(circle);
                        if (hasStem(el.duration))
                            drawStem(this.svg, x, y, direction);
                        x += 30;
                    }
                    if (el.type === "rest") {
                        drawRest(this.svg, x, el.duration);
                        x += 30;
                    }
                }
                drawBarLine(this.svg, x);
                x += 30;
            }
        }
        function drawBarLine(svg, x) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", x.toString());
            line.setAttribute("x2", x.toString());
            line.setAttribute("y1", STAFF_TOP.toString());
            line.setAttribute("y2", (STAFF_TOP + 4 * LINE_SPACING).toString());
            line.setAttribute("stroke", "black");
            svg.appendChild(line);
        }
    }
}
//# sourceMappingURL=scorerenderer.js.map