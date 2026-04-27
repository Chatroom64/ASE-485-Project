import { SelectionManager } from "./selectionmanager.js";
import { ScoreController } from "../app/scorecontroller.js";
import { Staff } from "../model/staff.js";
export declare class MouseHandler {
    private svg;
    private selectionManager;
    private controller;
    private staff;
    private currentDuration;
    private pitchMapper;
    constructor(svg: SVGSVGElement, selectionManager: SelectionManager, controller: ScoreController, staff: Staff, currentDuration?: "whole" | "half" | "quarter" | "eighth");
    private init;
    private currentTool;
    setDuration(duration: "whole" | "half" | "quarter" | "eighth"): void;
    setTool(tool: "note" | "rest"): void;
    private handleClick;
    private highlightSelection;
    private clearHighlights;
}
//# sourceMappingURL=mousehandler.d.ts.map