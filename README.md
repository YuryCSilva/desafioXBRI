# DesafioXBRI

Este projeto tem como objetivo desafiar as minhas habilidades através da construção de uma aplicação web para realizar o cadastro de itens.

## Funcionalidades/telas
Este projeto irá possuir todas as funcionalidades de um C.R.U.D (Criar, Ler, Atualizar e Deletar), desta forma, o projeto irá possuir duas telas, que terão como título "Listagem" e "Cadastro/Edição/Visualização", abaixo está um breve resumo sobre cada uma delas:
- A Listagem será responsável por adicionar um novo item e listar todos eles. Em cada um desses itens, será possível deletar e ser direcionado para a visualização e edição dos mesmos;
- A tela de Cadastro/Edição/Visualização como o próprio nome já diz, será responsável por cadastrar, editar e visualizar um item. Todas as vezes que um usuário realizar alguma ação dessa, ele posteriormente será direcionado novamente para a listagem;

## Requisitos do sistema
Certifique-se que sua máquina possua as seguintes dependências:
- [NodeJS e NPM](https://nodejs.org/en/download/package-manager/current);
- [Angular CLI](https://angular.dev/tools/cli/setup-local);
- [Git](https://git-scm.com/downloads);

## Bibliotecas externas presentes no projeto
1. NG-ZORRO;


## Arquitetura

- Camada de Apresentação (View/UI) 

- Camada de Lógica de Negócio (Classes e Services) 

- Camada de Comunicação (API Services) 

- Camada de Utilitários e Serviços Comuns 

A camada de UI apenas exibe dados que vêm da camada da lógica de negócio, que por sua vez a lógica de negócio e a camada de serviços de API lidam com a obtenção de dados e pôr fim a camada de comunicação (API Services) é responsável por interagir com o localstorage (simulação à requisição de uma API externa) e fornecer os dados necessários para a camada lógica. A camada de utilitários pode ser acessada por todas as outras camadas. 

## Estruturação de pastas

A estruturação de pastas foi pensada para ser de forma que atendesse uma aplicação escalável sem que houvesse mudanças drásticas na sua composição. Pode ser que nem todas as pastas estejam presentes nesse projeto, segue abaixo a estruturação proposta:

```estrutura
src/
|__ components/
|      |__ templates/
|      |__ UI/
|__ features/
|      |__ produtos/
|      |     |__ pages/
|      |     |__ repositorys/
|      |     |__ services/
|      |     |__ class/
|      |     |__ interfaces/
|      |     |__ routes/
|__ services
|__ classes
|__ repository
|__ routes
|      |__ app.routing.ts
|__ utils
|      |__ validations.ts 
|__ styles
```
