import { Router, Request, Response } from "express";
import { UserController } from "../controllers";
import { validadeAcess } from "../middlewares";
import field from "./field";
import category from "./category";
import food from "./food";
import profile from "./profile";
import user from "./user";
import product from "./product";
import eatProduct from "./eatProduct";
import eatFood from "./eatFood";
// routes/index.ts
import express from "express";
import goalRoutes from "./Goal"; // ou meta.ts
// src/index.ts
import {
  criarUsuario,
  buscarUsuarios,
  atualizarUsuario,
  deletarUsuario,
} from "../services/usuarioService";
import prisma from "../prisma/prismaClient";

async function main() {
  // Criando um novo usuário
  const novoUsuario = await criarUsuario(
    "João Silva",
    "joao.silva@example.com",
    "joao123"
  );
  console.log("Usuário criado:", novoUsuario);

  // Buscando todos os usuários
  const usuarios = await buscarUsuarios();
  console.log("Lista de usuários:", usuarios);

  // Atualizando um usuário
  const usuarioAtualizado = await atualizarUsuario(1, "João Silva Atualizado");
  console.log("Usuário atualizado:", usuarioAtualizado);

  // Deletando um usuário
  await deletarUsuario(1);
  console.log("Usuário deletado");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
// Outros imports de rotas

const router = express.Router();

router.use(goalRoutes); // Usa a nova rota de metas

const routes = Router();

// Endpoint de login
routes.post("/login", UserController.login);

// Endpoints para recursos
routes.use("/food", food);
routes.use("/category", category);
routes.use("/eat/food", validadeAcess, eatFood);
routes.use("/eat/product", validadeAcess, eatProduct);
routes.use("/field", field);
routes.use("/product", validadeAcess, product);
routes.use("/profile", validadeAcess, profile);
routes.use("/user", user);

// Novo endpoint
routes.get("/seu-endpoint", (req: Request, res: Response) => {
  // Processa a requisição e envia uma resposta
  res.json({ message: "Dados retornados com sucesso!" });
});

// Aceita qualquer método HTTP ou URL
routes.use((req: Request, res: Response) => {
  res
    .status(404)
    .json({ error: "Operação desconhecida com o consumo de alimentos" });
});

export default routes;
