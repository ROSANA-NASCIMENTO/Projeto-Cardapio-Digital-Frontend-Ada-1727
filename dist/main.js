import { Produto } from "./produtos.js";
import { Cardapio } from "./cardapio.js";
const cardapio = new Cardapio();
const macarronada = new Produto("Macarronada", "Macarronada com molho de tomate e queijo", 24.90, "macarronada.jpg");
cardapio.adicionarProduto(macarronada);
cardapio.renderizar();
console.log(cardapio.produtos);
