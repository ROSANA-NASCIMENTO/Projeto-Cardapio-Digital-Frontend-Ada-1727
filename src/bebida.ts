import { Produto } from "./produtos.js";

export class Bebida extends Produto {

  override calcularPrecoFinal(): number {
    return this.preco * 1.05;
  }

}