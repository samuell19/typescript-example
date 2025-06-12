import { ordenarArray } from "./funcao_sort";

test("ordenarArray com ['carro', 'boneco', 'ave', 'lapis']", () => {
  const entrada = ['carro', 'boneco', 'ave', 'lapis'];
  const esperado = ['ave', 'boneco', 'carro', 'lapis'];
  expect(ordenarArray(entrada)).toEqual(esperado);
});