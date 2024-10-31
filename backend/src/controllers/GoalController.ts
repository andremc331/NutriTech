import { Request, Response } from "express";
import { pool } from "../database/connection";

// Função para criar uma nova meta
export const criarMeta = async (req: Request, res: Response) => {
  const { goals_user_id, goals } = req.body;

  try {
    const query = 'INSERT INTO "goals" (goals_user_id, goals) VALUES ($1, $2) RETURNING *';
    const values = [goals_user_id, goals];
    
    const { rows } = await pool.query(query, values);
    const novaMeta = rows[0];

    res.status(201).json(novaMeta);
  } catch (error) {
    console.error("Erro ao salvar a meta:", error);
    res.status(500).json({ error: "Erro ao salvar a meta." });
  }
};