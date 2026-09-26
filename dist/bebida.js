import { Produto } from "./produtos.js";
export class Bebida extends Produto {
    calcularPrecoFinal() {
        return this.preco * 1.05;
    }
}
