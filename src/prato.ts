import { Produto } from "./produtos.js";

export class Prato extends Produto {

  override calcularPrecoFinal(): number {
    return this.preco * 1.20;
  }
}