// routes/goal.ts
import { Router } from "express";
import prisma from "../prisma/prismaClient";  // Corrige a importação do prismaClient
import { criarMeta } from "../services/metaService";  // Importa o serviço para criar metas

const router = Router();

// Rota para salvar uma meta no banco de dados
router.post("/api/metas", async (req, res) => {
  const { meta, usuarioId } = req.body; // Recebe a meta e o ID do usuário do corpo da requisição

  try {
    // Chama o serviço para criar a nova meta
    const novaMeta = await criarMeta(meta, usuarioId);
    res.status(201).json(novaMeta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao salvar a meta." });
  }
});

export default router;