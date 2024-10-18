import { Router, Request, Response } from "express";
import { UserController as controller } from "../controllers";
import { checkAdm, validadeAcess } from "../middlewares";
import jwt from "jsonwebtoken"; // Supondo que você use JWT para autenticação

const routes = Router();

// Rota para criar um novo usuário
routes.post("/user", async (req: Request, res: Response) => {
    try {
        const newUser = await controller.create(req, res); // O método agora retorna o usuário
        if (newUser) {
            const token = jwt.sign(
                { alias: newUser.alias, id: newUser.id }, 
                process.env.JWT_SECRET || "secret-key", 
                { expiresIn: "1h" }
            );
            res.status(201).json({ token, alias: newUser.alias });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar usuário" });
    }
});

// Usuário logado - atualização do alias
routes.put("/alias", validadeAcess, async (req: Request, res: Response) => {
    try {
        const updatedUser = await controller.updateAlias(req, res);
        if (updatedUser) {
            res.status(200).json({ message: "Alias atualizado com sucesso", alias: updatedUser.alias });
        } else {
            res.status(404).json({ error: "Usuário não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar alias" });
    }
});

// Usuário logado - atualização de email
routes.put("/mail", validadeAcess, async (req: Request, res: Response) => {
    try {
        const updatedUser = await controller.updateMail(req, res);
        res.status(200).json({ message: "Email atualizado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar email" });
    }
});

// Usuário logado - atualização de senha
routes.put("/password", validadeAcess, async (req: Request, res: Response) => {
    try {
        const updatedUser = await controller.updatePassword(req, res);
        res.status(200).json({ message: "Senha atualizada com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar senha" });
    }
});

// Usuário logado com perfil de administrador - atualização de perfil
routes.put("/role", validadeAcess, checkAdm, async (req: Request, res: Response) => {
    try {
        const updatedUser = await controller.updateProfile(req, res);
        res.status(200).json({ message: "Perfil atualizado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar perfil" });
    }
});

// Usuário administrador - listagem de usuários
routes.get("/", validadeAcess, checkAdm, async (req: Request, res: Response) => {
    try {
        const users = await controller.list(req, res);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Erro ao listar usuários" });
    }
});

// Aceita qualquer método HTTP ou URL não reconhecida
routes.use((req: Request, res: Response) => {
    res.status(404).json({ error: "Operação desconhecida com o consumo de alimentos" });
});

export default routes;