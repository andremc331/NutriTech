import { Request, Response } from "express";
import {pool, query} from "../database/connection";

// Função para criar uma nova meta
export const criarMeta = async (req: Request, res: Response) => {
  const { metas_usuario_id, metas } = req.body;

  try {
    const query = 'INSERT INTO "Meta" (metas_usuario_id, metas) VALUES ($1, $2) RETURNING *';
    const values = [metas_usuario_id, metas];
    
    const { rows } = await pool.query(query, values);
    const novaMeta = rows[0];

    res.status(201).json(novaMeta);
  } catch (error) {
    console.error("Erro ao salvar a meta:", error);
    res.status(500).json({ error: "Erro ao salvar a meta." });
  }
};