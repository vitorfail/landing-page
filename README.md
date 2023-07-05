Essa é uma atividade front-end feita em [Next.js](https://nextjs.org/) para a empresa [Leadster](https://leadster.com.br/?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=CjwKCAjwqZSlBhBwEiwAfoZUIIbEbPAjmrVWGHHoodASwU1Sej524GdPB1kgv2mZ5WdfkWnQyDkaohoCSh8QAvD_BwE).
Seu Deploy foi feito na [`Vercel`](https://vercel.com/vitorfail) e o site em funcionamento pode ser visto por esse [link](https://landing-page-git-master-vitorfail.vercel.app/)

## Partindo o princípio

Se você não possuir um ambiente preparado para executar o sistema primeiramente você precisa fazer o dowload do [Node.js](https://nodejs.org/en). E após isso fazer o dowload do [Git](https://git-scm.com/downloads) no seu computador.

## Baixando e executando o projeto

Agora acesse o terminal e digite `git clone https://github.com/vitorfail/landing-page.git`. Com isso você irá clonar este repositório no seu computador. Ainda no terminal digite `cd landing-page` para entrar na pasta. No terminal digite `npm install`. Para intalar as dependências e módulos necessários para esta projeto rodar. Após isso ainda pode rodas o comando `npm install react@latest react-dom@latest next@latest` para suprir possíveis dependências. Agora é só executar um dos códigos abaixo

```bash
npm run dev
# Para usa yarn
yarn dev
# Para quem usa pnpm
pnpm dev
```

Agora o endereço [http://localhost:3000](http://localhost:3000) no seu navegador e veja sua página. :)

## Sobre o código

O Projeto possui uma única `page` mas nessa possuem `5 componentes`, são eles: `Header`, `Videos`,`Plano`, `Rodape`, `Popup`.

`Header`: É onde está o cabeçalho da página. Contado a chamada para ação e a logo da empresa.

`Videos`: O nome é bem intuitivo, é um componente onde fica os containers do vídeos dos cursos que serão oferecidos. Contém também os controles e números de páginas. Os links, titulos e descrições do videos que serão mostrados na página oficial estão em vários `JSON´s` armazenados em um Array. Esse array é jogado em uma função `map` que gera os elementos que compõe esse container.

`Plano`: É o componente onde fica a avalição e o botão para acessar os planos e serviços que a empresa tem a oferecer.

`Rodape`: Ficam as informações finais da empresa e os link para acessar outras páginas ou redes sociais da empresa.

`Popup`: É o Pop-Up que surge toda vez que se clica em um dos vídeos. As informçaões que preenche esse popup mudam de acordo com o video e o curso que você clica   
