import { Request, Response } from "express";
import { query } from "../database/connection";

class HistoricoController {
  // Busca todas as refeições no histórico com JOIN para incluir nome do alimento
  public async getHistoricoWithFoodName(req: Request, res: Response): Promise<void> {
    const { startDate, endDate, userId } = req.query; // Adiciona userId como parâmetro de consulta
    try {
      const result = await query(
        `SELECT ef.date, f.description AS food_name, ef.quantity
         FROM eat_foods ef
         JOIN foods f ON ef.food = f.id
         WHERE ef._user = $1 
           AND ef.date BETWEEN $2 AND $3
         ORDER BY ef.date DESC`,
        [userId, startDate, endDate]
      );
      res.json(result);
    } catch (error: any) {
      console.error("Erro ao buscar o histórico:", error);
      res.status(500).json({ error: "Erro ao buscar o histórico de refeições" });
    }
  }

  // Busca histórico por um intervalo de datas
  public async getHistoricoByDate(req: Request, res: Response): Promise<void> {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      res.status(400).json({ error: "Forneça as datas de início e fim" });
      return;
    }

    try {
      const result = await query(
        'SELECT * FROM eat_foods WHERE date BETWEEN $1 AND $2 ORDER BY date DESC',
        [startDate, endDate]
      );
      res.json(result);
    } catch (error: any) {
      console.error("Erro ao buscar histórico por data:", error);
      res.status(500).json({ error: 'Erro ao buscar histórico por data' });
    }
  }

  // Busca refeições específicas de um usuário
  public async getHistoricoByUser(req: Request, res: Response): Promise<void> {
    const { id: userId } = res.locals;

    try {
      const result = await query(
        'SELECT * FROM eat_foods WHERE _user = $1 ORDER BY date DESC',
        [userId]
      );
      res.json(result.rows);
    } catch (error: any) {
      console.error("Erro ao buscar histórico do usuário:", error);
      res.status(500).json({ error: 'Erro ao buscar histórico do usuário' });
    }
  }
}

const controller = new HistoricoController();
export default controller;