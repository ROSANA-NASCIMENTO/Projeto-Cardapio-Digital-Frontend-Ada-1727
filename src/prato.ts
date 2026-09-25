import { Produto } from "./produtos.js";

export class Prato extends Produto {

  calcularPrecoFinal(): number {
    return this.preco * 1.20;
  }
}