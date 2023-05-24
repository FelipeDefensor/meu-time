# Meu Time

Meu Time é uma aplicação [React](https://reactjs.org/), inicializada utilizando o [Vite](https://vitejs.dev/), criada para explorar os dados da [API-Football](https://www.api-football.com/).

## Pré-requisitos

Para rodar o projeto, você precisa ter o [Node.js](https://nodejs.org) e um gerenciador de pacotes como o [npm](https://www.npmjs.com/) instalado. Para acessar os dados da API-Football, é necessário [ter uma conta](https://dashboard.api-football.com/register).

## Instalação e execução

Navegue até a pasta do projeto:

```
cd meu-time
```

Instale as dependências:

```
npm install
```

Após instalar todas as dependências, execute o seguinte comando para iniciar a aplicação em um ambiente de desenvolvimento:

```
npm run dev
```

O aplicativo será inicializado e você poderá acessá-lo no seu navegador através do endereço: [http://localhost:5173](http://localhost:5173).

## Testes

Para executar os testes usando o `vitest`, inicie um servidor `vite` na porta 3000 com:

```
vite --port 3000
```

Então, rode os testes com o comando:

```
npm run test
```

## Build

Para criar uma versão otimizada do projeto para produção, execute o seguinte comando:

```
npm run build
```

Isso irá criar uma pasta "dist", que conterá os arquivos otimizados para serem servidos em um ambiente de produção. Para mais informações sobre o processo, consulte a documentação do [Vitest](https://vitejs.dev/guide/build.html).
