export class Venda {
    constructor() {
        this.produtos = [];
        this.fechada = false;
    }
    adicionar(produto) {
        if (this.fechada) {
            return;
        }
        this.produtos.push(produto);
    }
    get total() {
        return this.produtos.reduce((soma, produto) => {
            return soma + produto.calcularPrecoFinal();
        }, 0);
    }
    finalizar() {
        if (this.fechada) {
            return;
        }
        Venda.faturamentoTotal += this.total;
        this.fechada = true;
    }
}
Venda.faturamentoTotal = 0;
