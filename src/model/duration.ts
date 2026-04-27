export type Duration = "whole" | "half" | "quarter" | "eighth";
export const BEATS_PER_MEASURE = 4;

export function getDurationValue(duration: Duration): number {
  switch (duration) {
    case "whole": return 4;
    case "half": return 2;
    case "quarter": return 1;
    case "eighth": return 0.5;
    default: throw new Error("Unknown duration");
  }
}