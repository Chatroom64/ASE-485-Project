import { Staff } from "../model/staff.js";
export class DeleteElementCommand {
    constructor(staff, element) {
        this.staff = staff;
        this.element = element;
        const result = this.findElement();
        if (!result) {
            throw new Error("Element not found");
        }
        this.measureIndex = result.measureIndex;
        this.elementIndex = result.elementIndex;
    }
    findElement() {
        for (let m = 0; m < this.staff.measures.length; m++) {
            const measure = this.staff.measures[m];
            if (!measure)
                throw new Error("Measure not found");
            const index = measure.elements.indexOf(this.element);
            if (index !== -1) {
                return {
                    measureIndex: m,
                    elementIndex: index
                };
            }
        }
        return null;
    }
    execute() {
        const measure = this.staff.measures[this.measureIndex];
        if (!measure)
            throw new Error("Measure not found");
        measure.elements.splice(this.elementIndex, 1);
    }
    undo() {
        const measure = this.staff.measures[this.measureIndex];
        if (!measure)
            throw new Error("Measure not found");
        measure.elements.splice(this.elementIndex, 0, this.element);
    }
}
//# sourceMappingURL=deletenote.js.map