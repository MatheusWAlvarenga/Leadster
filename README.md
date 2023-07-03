<h1 align="center">Projeto de Listagem de Vídeos da Leadster</h1>

 <div align="center">
   <img width="500" alt="" src="">
</div>

Bem-vindo(a) ao projeto de frontend proposto pela Leadster! Este projeto consiste em uma landing page responsiva desenvolvida com o framework Next.js, utilizando TypeScript. O objetivo é exibir uma lista de vídeos e permitir a reprodução dos mesmos em um modal. A listagem de vídeos é configurada através de um arquivo JSON, permitindo uma fácil modificação das URLs dos vídeos.

## Requisitos

- Desenvolvimento da landing page utilizando o framework Next.js com TypeScript.
- Utilização do arquivo de configuração JSON para alterar as URLs dos vídeos exibidos.
- Fidelidade ao layout fornecido no material "conteúdo test front".
- Utilização de HTML5 escrito de maneira semântica.
- Implementação de padrões e código simples e autoexplicativo.
- Garantir que o layout seja responsivo e se adapte a diferentes dispositivos.

## Sugestão de melhoria no projeto

Utilizar o Tailwind CSS no projeto traz várias vantagens significativas:

- Produtividade aprimorada: O Tailwind CSS é uma ferramenta que agiliza o desenvolvimento, pois os estilos podem ser aplicados rapidamente com apenas algumas classes.

- Flexibilidade e personalização: O Tailwind CSS permite uma alta flexibilidade e personalização. Com suas classes utilitárias, é possível criar estilos únicos para cada elemento da página de maneira fácil e rápida. Além disso, o Tailwind fornece uma abordagem de configuração, permitindo que você personalize as classes, crie temas personalizados e defina suas próprias variações de estilo.

- Design consistente: O Tailwind CSS segue uma abordagem consistente de design, fornecendo um conjunto coeso de classes utilitárias. Isso garante que o estilo aplicado em diferentes partes da página seja consistente, resultando em uma experiência visual uniforme. Além disso, o Tailwind facilita a manutenção do código, pois a lógica de estilo está centralizada nas classes utilitárias, tornando mais fácil fazer alterações ou atualizações.

- Tamanho do arquivo reduzido: Uma das vantagens do Tailwind CSS é a sua abordagem de construção de estilos sob demanda. Isso significa que apenas as classes utilizadas no projeto são incluídas no arquivo final CSS. Isso resulta em um tamanho de arquivo CSS reduzido em comparação com outros frameworks de estilização, o que leva a tempos de carregamento mais rápidos para os usuários.

- Compatibilidade com outros frameworks: O Tailwind CSS é altamente compatível com outros frameworks e bibliotecas, como o Next.js utilizado neste projeto. Ele pode ser facilmente integrado a projetos existentes, permitindo a criação de componentes personalizados e estilização flexível em conjunto com outros recursos e funcionalidades do framework.

- Responsividade simplificada: O Tailwind CSS possui classes responsivas embutidas que facilitam a criação de layouts responsivos. Com o uso dessas classes, é possível definir estilos específicos para diferentes tamanhos de tela, tornando a página adaptável a dispositivos móveis e proporcionando uma experiência consistente em diferentes dispositivos.

No geral, o uso do Tailwind CSS oferece uma abordagem rápida, flexível e consistente para a estilização de projetos frontend, resultando em maior produtividade e um código mais limpo e organizado.

## Tecnologias Utilizadas

- Next.js: framework de desenvolvimento web utilizado para criar a landing page.
- TypeScript: linguagem de programação tipada utilizada para desenvolver a aplicação.
- HTML5: linguagem de marcação para estruturação do conteúdo semântico da página.
- Tailwind CSS: framework de estilização utilizado para criar a aparência visual da página.
- JavaScript: utilizado para interação com a página e manipulação dos vídeos.
- Arquivo de configuração JSON: utilizado para definir as URLs dos vídeos exibidos na página.

## Instalação e Uso

1. Faça o download ou clone este repositório.
2. Navegue até o diretório do projeto.
3. Execute o comando `npm install` para instalar as dependências.
4. Execute o comando `npm run dev` para iniciar o servidor de desenvolvimento.
5. Acesse a página no seu navegador através do endereço `http://localhost:3000`.

## Estrutura de Arquivos

```
├── components/
│   ├── VideoList.tsx
│   └── ...
├── pages/
│   ├── index.tsx
│   └── ...
├── styles/
│   ├── GlobalStyles.ts
│   └── ...
├── public/
│   ├── videos.json
│   └── ...
├── ...
├── package.json
└── README.md
```

- `components/`: diretório que contém os componentes reutilizáveis da aplicação.
- `pages/`: diretório que contém as páginas do projeto, sendo `index.tsx` a página principal.
- `styles/`: diretório que contém os estilos globais e componentes estilizados.
- `public/`: diretório que contém arquivos estáticos, como o arquivo de configuração JSON (`videos.json`).
- `package.json`: arquivo que contém as dependências e scripts do projeto.
- `README.md`: arquivo que você está lendo atualmente, contendo informações sobre o projeto.

## Figma

- [Acesse a reconstrução do projeto no Figma](https://www.figma.com/file/J7N7xok9Yaqg6leEJbMPoV/leadster?type=design&node-id=0-1&mode=design&t=FCwJWzEvdHZhn2Qc-0)

## Contribuição

Este projeto foi desenvolvido para apresentação na Leadster como um teste de frontend. Portanto, não é permitido contribuições externas no momento. No entanto, agradeço o seu interesse.

##

![NEXT.JS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Type Script](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
