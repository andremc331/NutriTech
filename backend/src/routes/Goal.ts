import { Router, Request, Response } from "express";
import { criarMeta } from "../controllers/GoalController"; // Importa o controller

const routes = Router();

// Definindo as rotas relacionadas a metas
routes.post("/goals", criarMeta); // Rota para criar uma nova meta

// Tratamento para operações desconhecidas na rota de metas
routes.use((req: Request, res: Response) => {
    res.status(404).json({ error: "Operação desconhecida com metas" });
});

export default routes;