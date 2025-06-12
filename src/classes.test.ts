import { Produto, Produto_online } from "./classes";

test("calcular total de Produto", () =>{
    const produto = new Produto("Notebook", 2000, 2);
    expect(produto.calcular_total()).toBe(4000);
})

test("calcular total de Produto_online", () =>{
    const produtoOnline = new Produto_online("Smartphone", 1500, 3, 50);
    produtoOnline.frete = 50;
    expect(produtoOnline.calcular_total()).toBe(4650);})