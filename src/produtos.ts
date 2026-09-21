export class Produto {
  constructor(
    public nome: string, 
    public descricao: string, 
    public preco: number, 
    public imagem: string) {
  
  }
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





