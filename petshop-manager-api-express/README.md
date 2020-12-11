# Gerenciador de petshop

Uma simples CRUD API, desenvolvida com Node, que permite o gerenciamento dos fornecedores de um petshop.

### Índice

- [Tecnologias](#tecnologias)
- [Rotas](#rotas)
  - [Listar fornecedores](#listar-fornecedores)
  - [Retornar um fornecedor](#retornar-um-fornecedor)
  - [Criar fornecedor](#criar-fornecedor)
  - [Editar fornecedor](#editar-fornecedor)
  - [Excluir fornecedor](#editar-fornecedor)

## Tecnologias

A API foi desenvolvida utilizando Node.js e o framework express.

- Node.js
- Express
- Sequelize
- Yup
- PostgreSQL

**Obs**: Durante o desenvolvimento do projeto, foi utilizado um container Docker para instânciar o banco de dados.

## Rotas

#### Listar fornecedores

Retorna todos os fornecedores registrados no banco de dados.

- **URL** : `/providers`
- **Método** : `GET`
- **Resposta de sucesso**
  - **código** : `200`
  - **conteúdo** :
    ```json
    [
      {
        "id": 1,
        "company": "name",
        "category": "toy",
        "email": "test@email.com"
      }
    ]
    ```
- **Resposta de erro**

  - **código** : `500`
  - **conteúdo** :

    ```json
    { "error": "Error when trying to list providers." }
    ```

---

#### Retornar um fornecedor

Retorna um fornecedor registrado no banco de dados á partir do seu id.

- **URL** : `/providers/:id`
- **Método** : `GET`
- **Parâmetros** : `id[integer]`
- **Resposta de sucesso**
  - **código** : `200`
  - **conteúdo** :
    ```json
    {
      "id": 1,
      "company": "name",
      "category": "toy",
      "email": "test@email.com"
    }
    ```
- **Resposta de erro**

  - **código** : `400`
  - **conteúdo** :
    ```json
    { "error": "Provider not found." }
    ```

  OU

  - **código** : `500`
  - **conteúdo** :

    ```json
    { "error": "Error when trying to show provider." }
    ```

---

#### Criar fornecedor

Cria um novo fornecedor e retorna os dados do mesmo.

- **URL** : `/providers`
- **Método** : `POST`
- **Exemplo de corpo da requisição** :

  ```json
  {
    "company": "name",
    "category": "toy",
    "email": "test@email.com"
  }
  ```

  > Os campos acima são obrigatórios para a criação de um fornecedor.

- **Resposta de sucesso**
  - **código** : `201`
  - **conteúdo** :
    ```json
    {
      "id": 1,
      "company": "name",
      "category": "toy",
      "email": "test@email.com"
    }
    ```
- **Resposta de erro**

  - **código** : `400`
  - **conteúdo** :

    ```json
    { "error": "Validation fails." }
    ```

  OU

  - **código** : `500`
  - **conteúdo** :

    ```json
    { "error": "Error when trying to create provider." }
    ```

---

#### Editar fornecedor

Edita um fornecedor existente e retorna os dados editados do mesmo.

- **URL** : `/providers/:id`
- **Método** : `PUT`
- **Parâmetros** : `id[integer]`
- **Exemplo de corpo da requisição** :

  ```json
  { "company": "name", "category": "toy", "email": "test@email.com" }
  ```

  > É possível passar qualquer campo ou todos para a atualização de um fornecedor.

- **Resposta de sucesso**

  - **código** : `201`
  - **conteúdo** :

    ```json
    {
      "id": 1,
      "company": "name",
      "category": "toy",
      "email": "test@email.com"
    }
    ```

- **Resposta de erro**

  - **código** : `400`
  - **conteúdo** :

    ```json
    { "error": "Validation fails." }
    ```

    OU

  - **código** : `500`
  - **conteúdo** :
    ```json
    { "error": "Error when trying to update provider." }
    ```

---

#### Excluir fornecedor

Exclui um fornecedor existente.

- **URL** : `/providers/:id`
- **Método** : `DELETE `
- **Parâmetros** : `id[integer]`
- **Resposta de sucesso**
  - **código** : `204`
- **Resposta de erro**
  - **código** : `400`
  - **conteúdo** :
  ```json
  { "error": "Provider not found." }
  ```
  OU
  - **código** : `500`
  - **conteúdo** :
  ```json
  { "error": "Error when trying to delete provider." }
  ```
