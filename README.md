# ais-digital-challenge
 
Desafio para capturar e indexar dados de filmes vindo da api do The Movie Database.

## Endpoints

api/v1/movies/seed - recupera os dados de um filme (passa id pelo body) e alimenta o banco

api/v1/movies/{id} - indexa todas as traduções com os dados do filme.

### Execução

```
docker-compose up
```