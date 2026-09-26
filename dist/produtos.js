export class Produto {
    constructor(nome, descricao, preco, imagem) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.imagem = imagem;
        this.id = Produto.proximoId++;
    }
    gerarHTML() {
        return `
    <div class="produto">
      <img src="img/${this.imagem}" alt="${this.nome}">
      <h3>${this.nome}</h3>
      <p>${this.descricao}</p>
      <p>${this.calcularPrecoFinal().toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}</p>

    <button class="adicionar-produto" data-id="${this.id}">
    Adicionar à venda
    </button>  
    
    </div>
  `;
    }
}
Produto.proximoId = 1;
