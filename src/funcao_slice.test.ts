import { pegarDoisPrimeirosNumeros } from "./funcao_slice";

test("pegarDoisPrimeirosNumeros com [3,5,7,3,8,9,1]", () => {
  const entrada = [2,4,6,2,8,9,5];
  const esperado = [2, 4];
  expect(pegarDoisPrimeirosNumeros(entrada)).toEqual(esperado);
});