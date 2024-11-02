import { Router, Request, Response } from "express";
import { HistoricoController as controller } from "../controllers"; // Ajuste o caminho conforme necessário
import { validadeAcess } from "../middlewares";

const routes = Router();

// Rota para buscar todas as refeições no histórico
routes.get("/", validadeAcess, controller.getHistorico.bind(controller));

// Rota para filtrar histórico por um intervalo de datas
routes.get("/by-date", validadeAcess, controller.getHistoricoByDate.bind(controller));

// Rota para buscar refeições específicas de um usuário
routes.get("/by-user", validadeAcess, controller.getHistoricoByUser.bind(controller));

// Tratamento para rotas desconhecidas
routes.use((req: Request, res: Response) => {
    res.status(404).json({ error: "Operação desconhecida com o histórico." });
});

export default routes;