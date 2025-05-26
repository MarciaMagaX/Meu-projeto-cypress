# 🧪 Meu Projeto Cypress - Testes Automatizados de Login

Este repositório contém testes automatizados utilizando [Cypress](https://www.cypress.io/) aplicados na página de login do site [SauceDemo](https://www.saucedemo.com/). O objetivo é validar diferentes cenários de autenticação de forma prática, automatizada e organizada.

---

## 📌 Tecnologias utilizadas

- [Cypress](https://docs.cypress.io/) - Framework de testes de front-end
- Node.js - Ambiente de execução JavaScript
- Git e GitHub - Controle de versão

---

## 🧪 Funcionalidade testada

### 🔐 Login - SauceDemo

Todos os testes estão no arquivo:

cypress/e2e/login.cy.js


### 🔐 Login
- ✅ Login com credenciais válidas  
- ❌ Login com username inválido  
- ❌ Login com password inválido  
- ❌ Login com ambos inválidos  
- ⚠️ Login com campo de username em branco  
- ⚠️ Login com campo de password em branco  
- ⚠️ Login com ambos os campos em branco  

### 🛍️ Produtos
- ✅ Verificação de nome, descrição e valor dos produtos  
- ✅ Visibilidade dos botões de adicionar/remover do carrinho  
- ✅ Validação de redirecionamento da listagem para a tela de detalhes  
- ✅ Verificação da persistência do estado do botão (adicionado vs removido)  

### 🛒 Carrinho de Compras
- ✅ Adição e remoção de produtos  
- ✅ Validação do conteúdo do carrinho  
- ✅ Redirecionamento para checkout  

### 💳 Checkout
- ✅ Preenchimento dos dados obrigatórios  
- ⚠️ Validação de mensagens de erro em campos vazios  
- ✅ Conclusão de compra com sucesso  

### 🔃 Filtros de Produtos
- ✅ Ordenação por nome (A-Z / Z-A)  
- ✅ Ordenação por preço (menor/maior)  

---
---

## 🧰 Estrutura do Projeto


meu-projeto-cypress/
│
├── downloads/                        # Pasta para downloads, se usar algo assim nos testes
│
├── e2e/                             # Testes end-to-end
│   ├── filtro_produtos.cy.js
│   ├── login.cy.js
│   ├── produtos_checkout.cy.js
│   ├── produtos_pagina_inicial.cy.js
│   ├── tela_de_checkout.cy.js
│   └── tela_do_carrinho.cy.js
│   └── tela_do_produto.cy.js
│
├── fixtures/                        # Dados estáticos, mocks
│   └── example.json
│
├── reports/                        # Relatórios gerados pelos testes
│
├── screenshots/                    # Capturas de tela (ex: falhas)
│
├── support/                       # Arquivos de suporte e comandos customizados
│   ├── commands.js
│   └── e2e.js
│
├── pages/                        # Page Objects (separação por tela/página)
│   ├── cartPage.js
│   ├── checkoutPage.js
│   ├── filterPage.js
│   ├── inventoryPage.js
│   ├── loginPage.js
│   ├── orderPage.js
│   └── produtosPage.js
│
├── node_modules/                # Dependências do projeto (gerado pelo npm)
│
├── .gitignore                  # Ignorar arquivos no git (node_modules, reports etc)
├── cypress.config.js           # Configuração do Cypress
├── package-lock.json           # Trava das versões de pacotes
├── package.json                # Dependências e scripts npm
└── README.md                   # Documentação do projeto


## ▶️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/MarciaMagaX/Meu-projeto-cypress.git
cd Meu-projeto-cypress

2. Instalar as dependências

npm install
3. Executar os testes
🔵 Modo interativo (abre a interface do Cypress)

npx cypress open
⚫ Modo headless (linha de comando)

npx cypress run
📸 Evidências dos testes
Asserções utilizadas para garantir a validação dos testes:

✅ Visibilidade dos campos antes de digitar
cy.get(...).should('be.visible')

✅ Verificação dos valores digitados
cy.get(...).should('have.value', ...)

✅ Exibição de mensagens de erro
cy.get(...).should('contain.text', ...)

✅ Redirecionamento após login bem-sucedido
cy.url().should('eq', ...)

🤝 Contribuição
Este projeto é de estudo e prática pessoal.
Sinta-se à vontade para clonar, melhorar e adaptar conforme suas necessidades!

📄 Licença
Este repositório é livre para fins educacionais e de aprendizado.

