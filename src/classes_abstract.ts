export abstract class Autonomia {
    abstract calcular_autonomia(): number;
    
    static compara_autonomia(veiculo1: Autonomia, veiculo2: Autonomia): string {
        const autonomia1 = veiculo1.calcular_autonomia();
        const autonomia2 = veiculo2.calcular_autonomia();

        if (autonomia1 > autonomia2) {
            return `${veiculo1.constructor.name} tem maior autonomia que ${veiculo2.constructor.name}`;
        } else if (autonomia1 < autonomia2) {
            return `${veiculo2.constructor.name} tem maior autonomia que ${veiculo1.constructor.name}`;
        } else {
            return `${veiculo1.constructor.name} e ${veiculo2.constructor.name} têm a mesma autonomia`;
        }
}
}

export class Carro extends Autonomia {
    private consumo: number; 
    private tanque: number; 

    constructor(consumo: number, tanque: number) {
        super();
        this.consumo = consumo;
        this.tanque = tanque;
    }
    calcular_autonomia(): number {
        return this.consumo * this.tanque;
    }
}

export class Bicicleta extends Autonomia {
    private distancia: number
    private tempo: number
    
    constructor(distancia: number, tempo: number) {
        super();
        this.distancia = distancia;
        this.tempo = tempo;
    }
    calcular_autonomia(): number {
        return this.distancia / this.tempo;
    }
}
