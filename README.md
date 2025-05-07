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


#### Cenários cobertos:

- ✅ Login com credenciais válidas
- ❌ Login com username inválido
- ❌ Login com password inválido
- ❌ Login com ambos inválidos
- ⚠️ Login com campo de username em branco
- ⚠️ Login com campo de password em branco
- ⚠️ Login com ambos os campos em branco

Cada campo do formulário é validado com `should('be.visible')` antes de qualquer ação, garantindo maior robustez na automação.

---

## 🧰 Estrutura do Projeto


Meu-projeto-cypress/

├── cypress/

│ ├── e2e/

│ │ └── login.cy.js # Arquivo com os testes de login

│ ├── support/

│ │ └── e2e.js # Suporte padrão do Cypress

├── cypress.config.js # Configuração principal do Cypress

├── package.json # Dependências e scripts do projeto


---

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

