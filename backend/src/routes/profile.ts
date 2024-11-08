import { Router, Request, Response } from "express";
import {ProfileController as controller} from "../controllers";

const routes = Router();

routes.get("/", controller.list);
routes.post("/", controller.save);
routes.delete("/", controller.delete);
routes.get("/", controller.fetchWeightAndHeight);
routes.put("/weight", controller.updateWeight);

//aceita qualquer método HTTP ou URL
routes.use((req: Request, res: Response) => {
    res.status(404).json({ error: "Operação desconhecida com o consumo de alimentos" });
});

export default routes;