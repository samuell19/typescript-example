//for
export function quadradoComFor(array: number[]): number[] {
  const resultado: number[] = [];
  for (let i = 0; i < array.length; i++) {
    resultado.push(array[i] ** 2);
  }
  return resultado;
}
//foreach
export function quadradoComForEach(array: number[]): number[] {
  const resultado: number[] = [];
  array.forEach((numero) => {
    resultado.push(numero ** 2);
  });
  return resultado;
}