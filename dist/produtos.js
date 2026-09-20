"use strict";
class Produto {
    constructor(nome, descricao, preco, imagem) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.imagem = imagem;
    }
    gerarHTML() {
        return `
    <div class="produto">
      <img src="img/${this.imagem}" alt="${this.nome}">
      <h3>${this.nome}</h3>
      <p>${this.descricao}</p>
      <p>${this.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}</p>
    </div>
  `;
    }
}
const macarronada = new Produto("Macarronada", "Macarronada com molho de tomate e queijo", 24.90, "macarronada.jpg");
const listaProdutos = document.getElementById("lista-produtos");
if (listaProdutos) {
    listaProdutos.innerHTML = macarronada.gerarHTML();
}
