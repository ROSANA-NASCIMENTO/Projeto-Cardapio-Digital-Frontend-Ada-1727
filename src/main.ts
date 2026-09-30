import { Cardapio } from "./cardapio.js";
import { Bebida } from "./bebida.js";
import { Lanche } from "./lanche.js";
import { Prato } from "./prato.js";
import { Venda } from "./venda.js";
import { Produto } from "./produtos.js";

const cardapio = new Cardapio();


// POLIMORFISMO
// A lista é do tipo Produto,
// mas recebe objetos das classes filhas Prato, Lanche e Bebida.
const produtos: Produto[] = [

  new Prato(
    "Macarronada",
    "Macarronada com molho de tomate e queijo",
    24.90,
    "macarronada.jpg"
  ),

  new Prato(
    "Lasanha",
    "Lasanha à bolonhesa com queijo",
    32.90,
    "lasanha.jpg"
  ),

  new Prato(
    "Strogonoff de Frango",
    "Strogonoff de frango com creme de leite",
    28.90,
    "strogonoff-de-frango.jpg"
  ),

  new Lanche(
    "Batata Frita",
    "Batata frita crocante com sal",
    9.90,
    "batata-frita.jpg"
  ),

  new Lanche(
    "X-Burguer",
    "Hambúrguer com queijo, alface e tomate",
    18.90,
    "x-burguer.jpg"
  ),

  new Lanche(
    "Sanduíche Natural",
    "Sanduíche com peito de peru, alface e tomate",
    14.90,
    "sanduiche-natural.jpg"
  ),

  new Bebida(
    "Refrigerante",
    "Refrigerante gelado de 350ml",
    5.90,
    "refrigerante.jpg"
  ),

  new Bebida(
    "Suco de Laranja",
    "Suco de laranja natural de 350ml",
    8.90,
    "suco-de-laranja.jpg"
  ),

  new Bebida(
    "Água Mineral",
    "Água mineral sem gás de 500ml",
    4.50,
    "agua-mineral.jpg"
  )

];


// POLIMORFISMO APLICADO AO CÁLCULO DO PREÇO
produtos.forEach(produto => {
  produto.calcularPrecoFinal();
});


if (cardapio.produtos.length === 0) {

  produtos.forEach(produto => {
    cardapio.adicionarProduto(produto);
  });

}


cardapio.renderizar();

console.log(cardapio.produtos);


let venda1 = new Venda();

const totalVenda =
  document.getElementById("total-venda");

const botoesAdicionar =
  document.querySelectorAll(".adicionar-produto");


botoesAdicionar.forEach(botao => {

  botao.addEventListener("click", () => {

    const id = Number(
      botao.getAttribute("data-id")
    );

    const produto = cardapio.produtos.find(
      produto => produto.id === id
    );

    if (produto) {

      venda1.adicionar(produto);

      if (totalVenda) {

        totalVenda.textContent =
          venda1.total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          });

      }

    }

  });

});


const botaoRegistrar =
  document.getElementById("registrar-venda");

const faturamento =
  document.getElementById("faturamento");


botaoRegistrar?.addEventListener("click", () => {

  if (venda1.total === 0) {

    alert("Adicione pelo menos um produto à venda!");

    return;

  }

  venda1.finalizar();

  if (faturamento) {

    faturamento.textContent =
      Venda.faturamentoTotal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      });

  }

  venda1 = new Venda();

  if (totalVenda) {
    totalVenda.textContent = "R$ 0,00";
  }

});