import { Router, Request, Response } from "express"; 
import controller from "../controllers/GoalController"; // Importa o GoalController diretamente
import { validadeAcess } from "../middlewares";

const routes = Router();

// Rota para obter todas as metas
routes.get("/goals", validadeAcess, controller.getGoals);
// Rota para criar uma nova meta
routes.post("/goals", validadeAcess, controller.saveGoal);

// Tratamento para operações desconhecidas na rota de metas
routes.use((req: Request, res: Response) => {
    res.status(404).json({ error: "Operação desconhecida na rota de metas. Use /goals para POST ou GET." });
});

export default routes;