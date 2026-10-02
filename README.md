Cardápio Digital

Projeto de um Cardápio Digital desenvolvido em TypeScript, utilizando conceitos de Programação Orientada a Objetos (POO).
O sistema permite visualizar produtos do cardápio, registrar vendas e acompanhar o faturamento através de uma área administrativa.

Funcionalidades

•	Exibição dinâmica dos produtos
•	Organização dos produtos em pratos, lanches e bebidas
•	Registro de vendas
•	Cálculo do valor total da venda
•	Controle do faturamento acumulado
•	Persistência de dados utilizando localStorage
•	Área administrativa para acompanhamento das vendas
Tecnologias utilizadas
•	HTML
•	CSS
•	TypeScript
•	JavaScript
•	LocalStorage


Estrutura do projeto

├── index.html
├── css/
│   └── style.css
├── src/
│   ├── ProdutoRenderizavel.ts
│   ├── produtos.ts
│   ├── prato.ts
│   ├── lanche.ts
│   ├── bebida.ts
│   ├── cardapio.ts
│   ├── venda.ts
│   └── main.ts
├── dist/
├── img/
├── tsconfig.json
└── package.json


A pasta src contém os arquivos TypeScript do projeto. A pasta dist contém os arquivos JavaScript gerados após a compilação.
Como executar

1.	Baixe ou clone o projeto.
2.	Compile os arquivos TypeScript.
3.	Abra o arquivo index.html no navegador.
O index.html utiliza o arquivo dist/main.js, gerado a partir do código TypeScript.


Sobre o projeto
Este projeto foi desenvolvido em dupla, como requisito para a conclusão do curso de Programação Orientada a Objetos (POO),
com o objetivo de aplicar, na prática, os conhecimentos adquiridos ao longo do curso, como conceitos de TypeScript, POO,
manipulação do DOM, persistência de dados e organização de código, simulando o funcionamento de um cardápio digital com controle de vendas.


Autores:
Rosana Nascimento da Silva e 
Alexandre

