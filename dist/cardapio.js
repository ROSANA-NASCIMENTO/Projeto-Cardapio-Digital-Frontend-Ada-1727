import { Prato } from "./prato.js";
import { Lanche } from "./lanche.js";
import { Bebida } from "./bebida.js";
// exemplo polimorfismo
//const produtos: Produto[] = [
//new Bebida("refrigerante", "bebida",10, "imagem.jpg" ),
//new Bebida("refrigerante", "bebida",10, "imagem.jpg" )
export class Cardapio {
    constructor() {
        this.produtos = [];
        this.carregarDoLocalStorage();
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
        this.salvarNoLocalStorage();
    }
    salvarNoLocalStorage() {
        const produtosParaSalvar = this.produtos.map(produto => {
            return {
                tipo: produto.constructor.name,
                nome: produto.nome,
                descricao: produto.descricao,
                preco: produto.preco,
                imagem: produto.imagem
            };
        });
        const produtosJSON = JSON.stringify(produtosParaSalvar);
        localStorage.setItem("produtos", produtosJSON);
    }
    carregarDoLocalStorage() {
        const dadosSalvos = localStorage.getItem("produtos");
        if (!dadosSalvos) {
            return;
        }
        const produtosSalvos = JSON.parse(dadosSalvos);
        produtosSalvos.forEach((produto) => {
            if (produto.tipo === "Prato") {
                this.produtos.push(new Prato(produto.nome, produto.descricao, produto.preco, produto.imagem));
            }
            if (produto.tipo === "Lanche") {
                this.produtos.push(new Lanche(produto.nome, produto.descricao, produto.preco, produto.imagem));
            }
            if (produto.tipo === "Bebida") {
                this.produtos.push(new Bebida(produto.nome, produto.descricao, produto.preco, produto.imagem));
            }
        });
    }
    renderizar() {
        const listaProdutos = document.getElementById("lista-produtos");
        if (listaProdutos) {
            listaProdutos.innerHTML = "";
            this.produtos.forEach(produto => {
                listaProdutos.innerHTML += produto.gerarHTML();
            });
        }
    }
}
