# Task Dashboard

## Instruções

É necessário possuir node e npm ou yarn instalado.

- Após o download, abrir o terminal/prompt de comando no diretório do projeto.

### Execução

- Para instalar as dependências, executar `npm install` ou `yarn`;
- Para iniciar, executar `npm start` ou `yarn start`.

O projeto será executado em [http://localhost:3000](http://localhost:3000).

#### Login

- **Usuário:** user
- **Senha:** 132

### Testes

Em uma nova instância do terminal/prompt:

- **TEST**: Executar `npm test` ou `yarn test`;
- **COVERAGE**: Executar `yarn coverage` (necessário **yarn** instalado).

![Coverage Table](https://github.com/camilaheinzmann/task-dashboard-react/blob/main/src/assets/img/coverage.png)

## Tecnologias utilizadas

- _React.js_: biblioteca de criação de interfaces;
- _Typescript_: linguagem com tipagem estática para maior segurança e manutenibilidade;
- _Context API_: gerenciamento de estado entre componentes;
- _React Router Dom_: roteamento de páginas no React;
- _Styled Components_: mais praticidade na estilização e redução de riscos de conflitos de classes;
- _Scrappy_: contornar problemas com CORS pois cabeçalho era desconhecido;
- _React Testing Library_: testes de componentes;
- _jest-environment-jsdom-sixteen_: configuração de ambiente de testes.

## Funcionalidades

- Fazer Login (estado de autenticação salvo no LocalStorage);
- Listar itens obtidos da API;
- Selecionar e arquivar itens;
- Selecionar entre temas Light ou Dark (salvo no LocalStorage);
- Selecionar idioma do sistema (salvo no LocalStorage).
