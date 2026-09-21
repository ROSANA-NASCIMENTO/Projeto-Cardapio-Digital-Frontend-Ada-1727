import { Produto } from "./produtos.js";

 export class Cardapio {
  produtos: Produto[]= [];

  adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);

}

renderizar(): void { 
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
