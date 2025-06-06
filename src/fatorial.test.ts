import { fatorial } from "./fatorial";

test("fatorial de 8 é 40320", () => {
  expect(fatorial(8)).toBe(40320);
});

test("fatorial de 0 é 1", () => {
  expect(fatorial(0)).toBe(1);
});