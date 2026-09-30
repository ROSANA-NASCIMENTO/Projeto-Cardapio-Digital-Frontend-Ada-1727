import { Produto } from "./produtos.js";

export class Lanche extends Produto {

  override calcularPrecoFinal(): number {
    return this.preco * 1.15;
  }
}