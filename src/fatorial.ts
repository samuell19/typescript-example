export function fatorial(n: number): number {
  if (n < 0) {
    throw new Error("Fatorial is not defined for negative numbers.");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fatorial(n - 1);
}