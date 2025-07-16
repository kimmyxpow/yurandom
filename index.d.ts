export declare class Yurandom {
  constructor(seed: string);

  random(): number;
  int(min: number, max: number): number;
  bool(): boolean;
  pick<T>(arr: T[]): T;
  shuffle<T>(arr: T[]): T[];
  pastel(): string;
  range(count: number, min: number, max: number): number[];
  uuid(): string;
  date(start: Date, end: Date): Date;
  weighted<T>(items: [T, number][]): T;
  string(length: number, charset?: string): string;
  hex(bytes: number): string;
  color(format?: "hex" | "rgb" | "hsl"): string;
}
