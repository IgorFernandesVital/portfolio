# portfolio
Estou no penúltimo ano de Ciência da Computação e trilhando meu caminho como Desenvolvedor de Software. Acredito que a engenharia de verdade vai além de escrever código; trata-se de resolver problemas reais com arquiteturas inteligentes.  Criei este portfólio para centralizar meus projetos e documentar minha evolução técnica em um único lugar.

## 📂 Arquitetura do Projeto

O projeto adota uma estrutura modular focada em escalabilidade e manutenção (Clean Architecture):

- **Modularização de CSS:** Organização baseada em categorias (Layout vs Components) para isolamento de estilos e facilidade de manutenção.
- **Componentes Reutilizáveis:** Estrutura pronta para injeção dinâmica de fragmentos HTML, reduzindo redundância.
- **Diretório de Scripts Centralizado:** Gerenciamento de comportamentos assíncronos e orquestração do DOM através de um ponto de entrada único (`main.js`).
- **Asset Semantics:** Divisão lógica de recursos visuais entre ícones de interface e evidências de portfólio.

```
├─ 📂 assets/
│   ├─ 📂 css/
│   │   ├─ 📂 components/     # (css: header, footer, projetos)
│   │   ├─ 📂 layout/         # (grid, responsividade/media-queries)
│   │   └─ 📜main.css         # (arquivo central)
│   └─ 📂 img/
│       ├─ 📂 icons/          # (svgs do github, linkedin)
│       └─ 📂 projects/       # (screenshots dos projetos)
├─ 📂 components/ 
├─ 📂 scripts/                # (html: header, footer, projetos)
│   └─ 📜 main.js             # (arquivo central)
├─ 📜 index.html
├─ 📜 LICENSE
└─ 📜 README.md
```

## 🛠️ Melhorias de Arquitetura Front-end

Neste projeto, apliquei conceitos de engenharia de software para garantir performance e organização:

- **Modularização (ES6 Modules):** Organização do código em módulos independentes (`menu`, `model-3d`) para facilitar a manutenção.
- **Componentização Dinâmica:** Injeção de componentes HTML via Fetch API, permitindo a reutilização de elementos como Header e Hero.
- **Orquestração Assíncrona:** Utilização de `async/await` para garantir que a lógica de interação (DOM) só seja executada após o carregamento completo dos ativos.
- **Performance & Clean Code:** Implementação de SVGs inline para reduzir requisições HTTP e tratamento de erros com "Guard Clauses" para evitar falhas de execução no console.