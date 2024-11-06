import { Request, Response } from "express";
import { query } from "../database/connection";

class GoalController {
  public async getGoals(req: Request, res: Response): Promise<void> {
    const { id } = res.locals;

    try {
      const result = await query(
        `SELECT id, goals FROM goals 
         WHERE goals_user_id = $1`,
        [id]
      );
      res.status(200).json(result.rows);
    } catch (error: any) {
      res.status(500).json({ error: "Erro ao obter metas." });
    }
  }

  public async saveGoal(req: Request, res: Response): Promise<void> {
    const { goal } = req.body;
    const { id } = res.locals; // Obtém o ID do usuário autenticado
    console.log("ID do usuário:", id);
    console.log("Meta recebida:", goal);

    if (!goal || !['Ganhar peso', 'Perder peso', 'Manter peso'].includes(goal)) {
      res.status(400).json({ error: "Meta inválida. Deve ser 'Ganhar peso', 'Perder peso' ou 'Manter peso'." });
      return;
    }

    try {
      const result = await query(
        `INSERT INTO goals (goals_user_id, goals) 
         VALUES ($1, $2) 
         RETURNING id, goals`,
        [id, goal]
      );
      res.status(201).json(result); // Envia diretamente o objeto result
    } catch (error: any) {
      console.error("Erro ao criar meta:", error);
      res.status(500).json({ error: "Erro ao criar meta." });
    }
  }
}

const controller = new GoalController();
export default controller;
