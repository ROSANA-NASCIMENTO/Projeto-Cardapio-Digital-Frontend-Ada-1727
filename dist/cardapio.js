export class Cardapio {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    renderizar() {
        const listaProdutos = document.getElementById("lista-produtos");
        if (listaProdutos) {
            listaProdutos.innerHTML = "";
            this.produtos.forEach(produto => {
                listaProdutos.innerHTML += produto.gerarHTML();
                // Lógica para renderizar cada produto
            });
        }
    }
}
