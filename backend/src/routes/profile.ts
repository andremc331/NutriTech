import { Router, Request, Response } from "express";
import {ProfileController as controller} from "../controllers";

const routes = Router();

routes.get("/peso", controller.list);
routes.post("/peso", controller.save);
routes.delete("/peso", controller.delete);

//aceita qualquer método HTTP ou URL
routes.use((req: Request, res: Response) => {
    res.status(404).json({ error: "Operação desconhecida com o consumo de alimentos" });
});

export default routes;