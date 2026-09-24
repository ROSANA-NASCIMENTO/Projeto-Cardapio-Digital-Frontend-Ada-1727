import { Produto } from "./produtos.js";
import { Cardapio } from "./cardapio.js";

const cardapio = new Cardapio();

const macarronada = new Produto(
  "Macarronada", 
  "Macarronada com molho de tomate e queijo",
  24.90, 
 "macarronada.jpg");

 const batataFrita = new Produto(
  "Batata Frita", 
  "Batata frita crocante com sal",
  9.90, 
 "batata-frita.jpg");

 cardapio.adicionarProduto(macarronada);

 cardapio.adicionarProduto(batataFrita);

 cardapio.renderizar();
 console.log(cardapio.produtos);