import { ProdutoRenderizavel } from "./ProdutoRenderizavel.js";
export abstract class Produto implements ProdutoRenderizavel {
   private static proximoId = 1;
  readonly id: number;
  constructor(
    
    public nome: string, 
    public descricao: string, 
    public preco: number, 
    public imagem: string) {
      this.id = Produto.proximoId++;
  
  }

  abstract calcularPrecoFinal(): number;

  
gerarHTML(): string {
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





