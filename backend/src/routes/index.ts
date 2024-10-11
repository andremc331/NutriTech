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
routes.get('/seu-endpoint', (req: Request, res: Response) => {
  // Processa a requisição e envia uma resposta
  res.json({ message: 'Dados retornados com sucesso!' });
});

// Aceita qualquer método HTTP ou URL
routes.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Operação desconhecida com o consumo de alimentos" });
});

export default routes;