import { Staff } from "../model/staff.js";
export function flattenScore(staff) {
    const result = [];
    for (const measure of staff.measures) {
        for (const el of measure.elements) {
            result.push(el);
        }
    }
    return result;
}
//# sourceMappingURL=playbackutils.js.map