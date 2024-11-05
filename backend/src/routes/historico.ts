import express, { Request, Response, Router } from "express"; // Importando Request e Response
import { HistoricoController as controller } from "../controllers";
import { validadeAcess } from "../middlewares";

const routes = Router();

// Rota para buscar todas as refeições com nome do alimento
routes.get("/", controller.getHistoricoWithFoodName);

// Rota para buscar histórico por um intervalo de datas
routes.get("/data", controller.getHistoricoByDate);

// Rota para buscar refeições específicas de um usuário
routes.get("/user", controller.getHistoricoByUser);

// Tratamento para rotas não encontradas
routes.use((req: Request, res: Response) => {
    res.status(404).json({ error: "Operação desconhecida na rota de historico. Verifique a URL e o método HTTP." });
});

export default routes;