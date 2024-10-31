import { Router, Request, Response } from "express"; 
import controller from "../controllers/GoalController"; // Importa o GoalController diretamente

const routes = Router();

// Rota para criar uma nova meta
routes.post("/goals", controller.criarMeta);
// Rota para obter todas as metas
routes.get("/goals", controller.listarMetas);

// Tratamento para operações desconhecidas na rota de metas
routes.use((req: Request, res: Response) => {
    res.status(404).json({ error: "Operação desconhecida na rota de metas. Use /goals para POST ou GET." });
});

export default routes;