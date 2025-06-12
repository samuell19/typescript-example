import { quadradoComFor, quadradoComForEach } from "./funcao_quadrado";

test("quadradoComFor com [3,5,7,3,8,9,1]", () => {
  const entrada = [3, 5, 7, 3, 8, 9, 1];
  const esperado = [9, 25, 49, 9, 64, 81, 1];
  expect(quadradoComFor(entrada)).toEqual(esperado);
});

test("quadradoComForEach com [3,5,7,3,8,9,1]", () => {
  const entrada = [3, 5, 7, 3, 8, 9, 1];
  const esperado = [9, 25, 49, 9, 64, 81, 1];
  expect(quadradoComForEach(entrada)).toEqual(esperado);
});