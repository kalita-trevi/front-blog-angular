# Blog Monster High

Este é o **Blog Monster High**, uma aplicação em Angular que utiliza o JSON Server para simular uma API com dados sobre as personagens de Monster High.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js
- Angular CLI
- JSON Server

### Passos

1. Clone o repositório e instale as dependências:
2. Inicie o Angular:

   ```bash
   ng serve
   ```

3. Em outro terminal, inicie o JSON Server:

   ```bash
   json-server --watch db.json --port 3000
   ```

4. Acesse:

   - Frontend: [http://localhost:4200](http://localhost:4200)
   - API: [http://localhost:3000](http://localhost:3000)

## Estrutura da API

### Escritoras

`GET /escritoras` - Lista de escritoras.

### Menus

`GET /menus` - Lista de menus.

### Posts

`GET /posts` - Lista de posts.
