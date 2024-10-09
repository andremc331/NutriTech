import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import 'reflect-metadata';
import { AppDataSource } from "./database/data-source";  // Importe a configuração do banco de dados

dotenv.config();

// Será usada a porta 3000 se a variável de ambiente não tiver sido definida
const PORT = process.env.PORT || 3000;

const app = express(); // Cria o servidor e coloca na variável app

// Suportar parâmetros JSON no body da requisição
app.use(express.json());

// Configura o servidor para receber requisições de qualquer domínio
app.use(cors());

// Inicializa a conexão com o banco de dados e só então sobe o servidor
AppDataSource.initialize()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida!");

    // Define as rotas
    app.use(routes);

    // Inicializa o servidor na porta especificada
    app.listen(PORT, () => {
      console.log(`Rodando na porta ${PORT}...`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });