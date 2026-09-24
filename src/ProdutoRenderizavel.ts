export interface ProdutoRenderizavel {
    readonly id: number;
    nome: string;

    calcularPrecoFinal(): number;
    gerarHTML(): string;
}