import { Router, Request, Response } from "express";
import { UserController as controller } from "../controllers";
import { checkAdm, validadeAcess } from "../middlewares";

const routes = Router();

// Usuário sem login
routes.post("/user", controller.create);
// Usuário logado
routes.put("/nome", validadeAcess, controller.updateAlias);
routes.put("/email", validadeAcess, controller.updateMail);
routes.put("/senha", validadeAcess, controller.updatePassword);
// Usuário logado com perfil de administrador
routes.put("/role", validadeAcess, checkAdm, controller.updateProfile);
routes.get("/", validadeAcess, checkAdm, controller.list);

//aceita qualquer método HTTP ou URL
routes.use((req: Request, res: Response) => {
    res.status(404).json({ error: "Operação desconhecida com o usuário" });
});
export default routes;