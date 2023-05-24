# Meu Time

Meu Time é uma aplicação [React](https://reactjs.org/), inicializada utilizando o [Vite](https://vitejs.dev/), criada para explorar os dados da [API-Football](https://www.api-football.com/).

## Pré-requisitos

Para rodar o projeto, você precisa ter o [Node.js](https://nodejs.org) e um gerenciador de pacotes como o [npm](https://www.npmjs.com/) instalado. Para acessar os dados da API-Football, é necessário [ter uma conta](https://dashboard.api-football.com/register).

## Instalação e execução em ambiente de desenvolvimento

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

O aplicativo será inicializado e você poderá acessá-lo no seu navegador através do endereço: [http://localhost:5173](http://localhost:5173). Note que, em mode de desenvolvimento, o a aplicação utilizará dados de teste para evitar a cobrança de requisições à Football-API. Para utilizar dados reais, monte a aplicação com as instruções abaixo.

## Execução em ambiente de produção

Primeiro, monte a aplicação com:

```
npm run build
```

Agora é possível rodar um servidor já com as configurações de produção com o comando:

```
vite preview
```

Nele, o aplicativo já está otimizado para produção. Serão feitas requisições reais à Football-API e os dados recebidos serão exibidos. Para mais informações sobre o processo, consulte a documentação do [Vitest](https://vitejs.dev/guide/build.html).

## Testes

Para executar os testes usando o `vitest`, inicie um servidor com `vite` na porta 3000:

```
vite --port 3000
```

Então, rode os testes com o comando:

```
npm run test
```
