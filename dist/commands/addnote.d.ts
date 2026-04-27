import { Staff } from "../model/staff.js";
import type { MeasureElement } from "../model/measure.js";
export declare class AddElementCommand {
    private staff;
    private element;
    constructor(staff: Staff, element: MeasureElement);
    execute(): void;
    undo(): void;
}
//# sourceMappingURL=addnote.d.ts.map