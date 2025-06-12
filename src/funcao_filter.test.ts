import { filtrarPares } from "./funcao_filter";

test("filtrarPares com [3,5,7,3,8,9,1]", () => {
  const entrada = [8, 3, 9, 5, 6, 12];
  const esperado = [8, 6, 12];
  expect(filtrarPares(entrada)).toEqual(esperado);
});