import { concatenarComEspaco } from "./funcao_concatenar";

test("concatenarComEspaco com ['Arrays', 'com', 'TypeScript']", () => {
  const entrada = ['Arrays', 'com', 'TypeScript'];
  const esperado = 'Arrays com TypeScript';
  expect(concatenarComEspaco(entrada)).toBe(esperado);
});