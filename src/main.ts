
import { Cardapio } from "./cardapio.js";
import { Bebida} from "./bebida.js";
import { Lanche } from "./Lanche.js";
import { Prato } from "./Prato.js";

const cardapio = new Cardapio();

const macarronada = new Prato(
  "Macarronada", 
  "Macarronada com molho de tomate e queijo",
  24.90, 
 "macarronada.jpg");

 const batataFrita = new Lanche(
  "Batata Frita", 
  "Batata frita crocante com sal",
  9.90, 
 "batata-frita.jpg");

 const refrigerante = new Bebida(
  "Refrigerante", 
  "Refrigerante gelado de 350ml",
  5.90, 
 "refrigerante.jpg");

 cardapio.adicionarProduto(macarronada);

 cardapio.adicionarProduto(batataFrita);

 cardapio.adicionarProduto(refrigerante);

 cardapio.renderizar();
 console.log(cardapio.produtos);