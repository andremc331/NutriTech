import { Router, Request, Response } from "express"; 
import { GoalController as controller } from "../controllers"; 
import { validadeAcess } from "../middlewares";

const routes = Router();

// Rota para criar uma nova meta (POST)
routes.post("/", validadeAcess, controller.saveGoal);

// Rota para obter todas as metas (GET)
routes.get("/", validadeAcess, controller.getGoals);

// Tratamento para operações desconhecidas na rota de metas
routes.use((req: Request, res: Response) => {
    res.status(404).json({ error: "Operação desconhecida na rota de metas. Use /goals para POST ou GET." });
});

export default routes;