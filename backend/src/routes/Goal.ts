import { Router } from "express";
import { criarMeta } from "../controllers/GoalController"; // Importa o controller

const router = Router();

router.post("/api/metas", criarMeta); // Usa o controller diretamente na rota

export default router;