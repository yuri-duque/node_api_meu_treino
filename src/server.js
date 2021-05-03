import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { routes } from "./routes";
import MongooseConnection from "./infrastructure/database/config";

const app = express();

console.log("starting...");

// pegandos os arquivos .env e utilizando as variaveis de ambiente
dotenv.config();

// define como será feita a comunicação default do express
app.use(express.json());

// abilita a utilização do cors
app.use(cors());

app.use(routes);

MongooseConnection.Connection();

// pegando a porta do arquivo env
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running: ${process.env.APP_URL}:${port}`);
});
