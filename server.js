const express = require("express");
const axios = require("axios");

const app = express();

const cors = require("cors");

app.use(cors());

const API_KEY = "NUMERO_CHAVE_API_AQUI";

app.get("/filme/:nome", async (req, res) => {
  try {
    const { nome } = req.params;

    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(nome)}`
    );

    if (response.data.Response === "False") {
      return res.status(404).json({
        mensagem: "Filme não encontrado"
      });
    }

    res.json({
      titulo: response.data.Title,
      ano: response.data.Year,
      genero: response.data.Genre,
      diretor: response.data.Director,
      sinopse: response.data.Plot,
      poster: response.data.Poster
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensagem: "Erro ao consultar API"
    });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});