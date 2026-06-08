# 🎬 Consulta de Filmes com OMDb API

Projeto desenvolvido para a disciplina de Curricularização da Extensão do curso de Análise e Desenvolvimento de Sistemas da Fatec Taubaté.

## 📖 Sobre o Projeto

Esta aplicação permite realizar consultas de filmes utilizando uma API pública. O usuário pode pesquisar pelo nome de um filme e visualizar diversas informações relevantes de forma rápida e intuitiva.

Entre os dados exibidos estão:

* 🎥 Título do filme
* 📅 Ano de lançamento
* 🎭 Gênero
* ⭐ Avaliação
* 📝 Sinopse
* 🖼️ Pôster oficial

O objetivo do projeto é demonstrar na prática o consumo de APIs REST utilizando JavaScript, promovendo a integração entre frontend e backend e aplicando conceitos estudados ao longo do curso.

---

## 🚀 Tecnologias Utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* CORS

### Ferramentas

* Git
* GitHub
* Nodemon

---

## 🔑 Configuração da API

Este projeto utiliza a OMDb API para obtenção das informações dos filmes.

### 1. Solicitar uma chave de acesso

Acesse o site oficial:

https://www.omdbapi.com/

Clique em **API Key** e informe um endereço de e-mail válido.

### 2. Ativar a chave

Você receberá um e-mail contendo um código de ativação.

Após ativar a chave, será disponibilizada sua API Key.

### 3. Configurar no projeto

Localize o local onde a chave é utilizada e substitua pelo valor recebido:

```javascript
const API_KEY = "SUA_CHAVE_AQUI";
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/APIFilme.git
```

Acesse a pasta do projeto:

```bash
cd APIFilme
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando o Projeto

Inicie o servidor:

```bash
npm start
```

ou, caso utilize Nodemon:

```bash
npm run dev
```

Após iniciar o servidor, abra a aplicação em seu navegador.

---

## 📂 Estrutura do Projeto

```text
APIFilme/
│
├── backend/
│   ├── server.js
│   └── routes/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 🎓 Projeto Acadêmico

Projeto desenvolvido como atividade extensionista do curso de Análise e Desenvolvimento de Sistemas da Fatec Taubaté, com o objetivo de aplicar conhecimentos relacionados ao desenvolvimento web, integração de sistemas e consumo de APIs.

---

## 👨‍💻 Integrantes

* Gabriel Alencar
* João Alencar
* Cauã Souza

### Curso

Análise e Desenvolvimento de Sistemas – Fatec Taubaté
