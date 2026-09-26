import { Produto } from "./produtos.js";

export class Venda {

  private produtos: Produto[] = [];

  private fechada: boolean = false;

  static faturamentoTotal: number = 0;

  adicionar(produto: Produto): void {

  if (this.fechada) {
    return;
  }

  this.produtos.push(produto);
}

get total(): number {
  return this.produtos.reduce((soma, produto) => {
    return soma + produto.calcularPrecoFinal();
  }, 0);
}

finalizar(): void {

  if (this.fechada) {
    return;
  }

  Venda.faturamentoTotal += this.total;

  this.fechada = true;
}

}