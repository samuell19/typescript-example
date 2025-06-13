import { Carro, Bicicleta, Autonomia } from './classes_abstract';

test('calcular autonomia de Carro', () => {
    const carro = new Carro(15, 50); 
    expect(carro.calcular_autonomia()).toBe(750); 
});

test('calcular autonomia de Bicicleta', () => {
    const bicicleta = new Bicicleta(30, 2); 
    expect(bicicleta.calcular_autonomia()).toBe(60); 
});

test('comparar autonomias de Carro e Bicicleta', () => {
    const carro = new Carro(15, 50);
    const bicicleta = new Bicicleta(30, 2);
    expect(Autonomia.compara_autonomia(carro, bicicleta)).toBe('Carro tem maior autonomia que Bicicleta');
});