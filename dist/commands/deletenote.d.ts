import { Staff } from "../model/staff.js";
import type { MeasureElement } from "../model/measure.js";
export declare class DeleteElementCommand {
    private staff;
    private element;
    private measureIndex;
    private elementIndex;
    constructor(staff: Staff, element: MeasureElement);
    private findElement;
    execute(): void;
    undo(): void;
}
//# sourceMappingURL=deletenote.d.ts.map