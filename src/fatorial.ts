export function fatorial(n: number): number {
  if (n < 0) {
    throw new Error("Não é possível calcular o fatorial de um número negativo");	
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fatorial(n - 1);
}