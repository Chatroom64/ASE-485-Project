export type PitchLetter =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G";

export type Duration =
  | "whole"
  | "half"
  | "quarter"
  | "eighth";

export type Accidental =
  | "sharp"
  | "flat"
  | "natural"
  | null;

export type ClefType =
  | "treble"
  | "bass";

export type MeasureElementType =
  | "note"
  | "rest";