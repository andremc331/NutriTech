import { Router, Request, Response } from "express";
import { UserController } from "../controllers";
import { validadeAcess } from "../middlewares";
import field from "./field";
import category from "./category";
import food from "./food";
import profile from "./profile";
import user from "./user";
import goal from "./Goal";
import product from "./product";
import eatProduct from "./eatProduct";
import eatFood from "./eatFood";
import historico from "./historico";

const routes = Router();

// Rota de login
routes.post("/login", UserController.login);

// Rotas específicas, com validação de acesso onde necessário
routes.use("/food", food);
routes.use("/category", category);
routes.use("/eat/food", validadeAcess, eatFood);
routes.use("/eat/product", validadeAcess, eatProduct);
routes.use("/field", field);
routes.use("/goals", validadeAcess, goal); // Rotas de metas protegidas
routes.use("/historico", validadeAcess, historico); // Garantindo que a validação de acesso está aplicada aqui
routes.use("/product", validadeAcess, product);
routes.use("/profile", validadeAcess, profile);
routes.use("/user", user);

// Tratamento para rotas desconhecidas
routes.use((req: Request, res: Response) => {
    res.status(404).json({ error: "Operação desconhecida. Verifique a URL e o método HTTP." });
});

export default routes;