# Closeer Blog

### Como executar

- Clonar o repositório e na raiz do projeto executar `yarn` para instalar as dependências.
- Executar o ambiente de desenvolvimento usando `yarn dev` e acessar em [localhost:3000](http://localhost:3000/)
- Para executar o build e simular o ambiente de produção (necessário pois algumas funções serverRendering vão se comportar de formas diferente dependendo do ambiente), basta executar `yarn build` para criar o build local e logo em seguida subir o servidor usando `yarn start`

### Variáveis de ambiente

```
NEXTAUTH_URL= url da própria aplicação (em desenvolvimento = http://localhost:3000/ e em produção o domínio base)
NEXT_PUBLIC_STRAPI= url base para o backend
```
