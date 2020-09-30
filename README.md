</p>
<h1 align="center">Delivery Much Challenge</h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-autor">Autor</a> •
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

 Delivery Much Challenge - é uma forma de buscar receitas nas APIs públicas da [RecipePuppy](http://www.recipepuppy.com/about/api/) e [Giphy](https://developers.giphy.com/docs/), para obter os dados necessários basta apenas passar os ingredientes na rota da aplicação.


Este projeto foi desenvolvido como desafio para a empresa [Delivery Much](https://www.deliverymuch.com.br/).

---

## ⚙️ Funcionalidades

- [x] Criar endpoint que recebe os ingredientes através de parâmetros para:
  - [x] Fazer a busca de receitas na API RecipePuppy passando o ingrediente
  - [x] Fazer a busca de Gifs na API Giphy passando o título do ingrediente
  - [x] Retornar os dados buscados formatados

---

## 🚀 Como executar o projeto

💡 O projeto tem apenas uma rota e precisa que passe os nomes do ingredientes para funcionar no seguinte formato:

```bash
GET /recipes?i=<ingredient_1>,<ingredient_2>

# Exemplo http://localhost:3333/recipes?i=orange
```

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Docker](https://docs.docker.com/get-docker/) e [Docker Compose](https://docs.docker.com/compose/install/). Além disto é necessário adicionar sua chave da API [Giphy](https://developers.giphy.com/docs/) no arquivo `.env`:

```bash
GIPHY_API_KEY=chave
```

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/wendhio/delivery-much.git

# Acesse a pasta do projeto no terminal/cmd
$ cd delivery-much

# Execute a aplicação em modo de desenvolvimento
$ docker-compose up

# O servidor inciará na porta:3333 - acesse http://localhost:3333

```

#### 🎲 Rodando os Testes

Para garantir qualidade da API o projeto foi desenvoldido utilizando testes automatizados [Jest](https://jestjs.io/) e o hook [Husky](https://github.com/typicode/husky/tree/master) que a cada commit executa os testes e verifica se
existe algum erro de código ou sintaxe com o *Lint*.

```bash
yarn test
```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server**  ([NodeJS](https://nodejs.org/en/))

- **[Express](https://expressjs.com/)**
- **[dotENV](https://github.com/motdotla/dotenv)**
- **[Axios](https://github.com/axios/axios)**


> Veja o arquivo  [package.json](https://github.com/wendhio/delivery-much/blob/master/package.json)


#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**

- StyleGuides: **[Airbnb](https://github.com/airbnb/javascript)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  → Extensions:  **[Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)** **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**
-   Commit Conventional:  **[Commitlint](https://github.com/conventional-changelog/commitlint)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**

---

## 🦸 Autor

<a href="https://github.com/wendhio">
 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/22245493?s=460&u=6e1fa09db0705b37e52d3626ec5d913ea497e503&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Wendhio Thalison</b></sub></a> <a href="https://github.com/wendhio" title="GitHub">🚀</a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Wendhio-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/wendhio/)](https://www.linkedin.com/in/wendhio/)
[![Gmail Badge](https://img.shields.io/badge/-wendhio.wendhio@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:wendhio.wendhio@gmail.com)](mailto:wendhio.wendhio@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Wendhio Thalison 👋🏽 [Entre em contato!](https://www.linkedin.com/in/wendhio/)

