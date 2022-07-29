<p align='center'>
  <img src="./src/assets/logo-full.png" alt="Logo">
</p>
 
 # 💻 Projeto
 
MyOrders é uma aplicação de Comanda Online no qual permite ao usuário(funcionário) de um determinado estabelecimento realizar/anotar os pedidos de seus clientes através de uma aplicação web responsiva. A aplicação permite criar e atualizar uma comanda, finalizar um pedido e támbem possibilita ao usuário a acompanhar os status dos pedidos em aberto.
 
Além disso o MyOrders trás consigo um painel administrativo (dashboard) para que os funcionários da cozinha possam visualizar os pedidos ativos e gerencia-los da melhor forma possível, além de poderem cadastrar ou alterar os pratos disponíveis no menu do estabelecimento.

Este projeto foi desenvolvimento como Trabalho de Conclusão de Curso (TCC) do curso de Graduação em Ciências da Computação - 2022.

Link para o projeto online: [MyOrders](https://my-orders.vercel.app/).

 
 # 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:
- [React JS](https://pt-br.reactjs.org/);
- [Context API](https://pt-br.reactjs.org/docs/context.html);
- [FaunaDB](https://fauna.com/);
- [Styled Components](https://styled-components.com/).
- [Typescript](https://www.typescriptlang.org/).
- [Yup](https://github.com/jquense/yup);


# 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/rogerrm95/myorders.git
$ cd myorders
```
Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ yarn

# Iniciar o projeto
$ yarn start
```
O app estará disponível no seu browser pelo endereço http://localhost:3000.

Lembrando que será necessário criar uma conta no FaunaDB e configurar a seguinte variável ambiente no arquivo .env.local:
  ````bash
# API - AUTH
REACT_APP_AUTH_API_URL= Link da API
````

Além disso, é necessário clonar o back-end e realizar as suas devidas configurações para que seja possível testar esta aplicação em seu dispositivo.

Link para o back-end: [my-orders-API](https://github.com/rogerrm95/my-orders-api)


# 🔖 Layout
Você pode visualizar o layout do projeto através do link abaixo:
- [Layout Web](https://www.figma.com/file/m4Vmr8HKo6bYRkvR6TPwlY/TCC?node-id=0%3A1) (Lembrando que você precisa ter uma conta no Figma).


## 📃 License
[MIT](https://choosealicense.com/licenses/mit/)