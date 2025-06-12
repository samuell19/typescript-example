interface Valor_total{
    calcular_total(): number;
}

export class Produto implements Valor_total {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
  }

    calcular_total(): number {
        return this.preco * this.quantidade;
    }
}

export class Produto_online implements Valor_total {
    nome: string;
    preco: number;
    quantidade: number;
    frete: number;
    constructor(nome: string, preco: number, quantidade: number, frete: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.frete = frete;
  }

    calcular_total(): number {
        return (this.preco + this.frete) * this.quantidade;
    }
}