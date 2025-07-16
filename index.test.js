import { expect, test, describe } from "bun:test";
import { Yurandom } from ".";

describe("Yurandom", () => {
  test("should return consistent random number from same seed", () => {
    const r1 = new Yurandom("uwu");
    const r2 = new Yurandom("uwu");
    expect(r1.random()).toBeCloseTo(r2.random());
  });

  test("should pick from array", () => {
    const rng = new Yurandom("seed");
    const result = rng.pick(["a", "b", "c"]);
    expect(["a", "b", "c"]).toContain(result);
  });

  test("should return int in range", () => {
    const rng = new Yurandom("range");
    const value = rng.int(5, 10);
    expect(value >= 5 && value <= 10).toBe(true);
  });

  test("should return boolean", () => {
    const rng = new Yurandom("bool");
    const value = rng.bool();
    expect(typeof value).toBe("boolean");
  });

  test("should return valid pastel color", () => {
    const rng = new Yurandom("pastel");
    const color = rng.pastel();
    expect(color).toMatch(/^hsl\(\d+, 70%, 85%\)$/);
  });

  test("should shuffle array", () => {
    const rng = new Yurandom("shuffle");
    const original = [1, 2, 3, 4, 5];
    const shuffled = rng.shuffle(original);
    expect(shuffled.sort()).toEqual(original);
  });

  test("should generate number range", () => {
    const rng = new Yurandom("range");
    const values = rng.range(5, 1, 10);
    expect(values.length).toBe(5);
    for (const v of values) {
      expect(v >= 1 && v <= 10).toBe(true);
    }
  });

  test("should generate deterministic uuid", () => {
    const r1 = new Yurandom("uuid");
    const r2 = new Yurandom("uuid");
    expect(r1.uuid()).toBe(r2.uuid());
  });

  test("should return date in range", () => {
    const rng = new Yurandom("date");
    const start = new Date("2020-01-01");
    const end = new Date("2025-01-01");
    const result = rng.date(start, end);
    expect(result >= start && result <= end).toBe(true);
  });

  test("should pick based on weights", () => {
    const rng = new Yurandom("weighted");
    const result = rng.weighted([
      ["low", 1],
      ["mid", 0],
      ["high", 0],
    ]);
    expect(result).toBe("low");
  });

  test("should generate random string", () => {
    const rng = new Yurandom("string");
    const str = rng.string(8);
    expect(str).toHaveLength(8);
  });

  test("should generate hex string", () => {
    const rng = new Yurandom("hex");
    const hex = rng.hex(4);
    expect(hex).toMatch(/^[0-9a-f]{8}$/);
  });

  test("should generate color in hex", () => {
    const rng = new Yurandom("colorhex");
    const color = rng.color("hex");
    expect(color).toMatch(/^#[0-9a-f]{6}$/);
  });

  test("should generate color in rgb", () => {
    const rng = new Yurandom("colorrgb");
    const color = rng.color("rgb");
    expect(color).toMatch(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/);
  });

  test("should generate color in hsl", () => {
    const rng = new Yurandom("colorhsl");
    const color = rng.color("hsl");
    expect(color).toMatch(/^hsl\(\d+, \d+%, \d+%\)$/);
  });
});
