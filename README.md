
## Description

Trabalho da materia de Sistemas distribuidos 2024/2 para criar uma aplicação onde o objetivo do trabalho é completar o estudo das técnicas que vimos para
programação de sistemas distribuídos comerciais, programando o sistema CRUD inicial
utilizando a técnica de webservices. A ideia é que vocês mantenham o sistema e
funcionalidades, mas agora usando um webservice com a abordagem REST.

## Installation

```bash
$ npm install
```

## Running the app

```bash

# database up
$ docker-compose up

# development
$ npm run start

# watch mode
$ npm run start:dev

# serverless local
$ npm run build
$ sls offline

# production mode
$ npm run start:prod


```

# Proximos passos

- Melhorias no CRUD de usuários e veículos.
- Inclusão de funcionalidades no módulo de usuários para adicionar informações sobre CNH e realizar a verificação em bases de dados nacionais, com foco no histórico de multas e na situação da habilitação.
- No módulo de veículos, implementação de um controle mais rigoroso sobre as informações públicas, integrando com o Detran para garantir a precisão dos dados relacionados aos veículos.