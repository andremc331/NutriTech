import { Request, Response } from "express";
import { query } from "../database/connection";

class HistoricoController {
  // Busca todas as refeições no histórico
  public async getHistorico(req: Request, res: Response): Promise<void> {
    try {
      const result = await query('SELECT * FROM eat_foods ORDER BY date DESC'); // Mudança para eat_foods
      res.json(result.rows);
    } catch (error: any) {
      console.error("Erro ao buscar histórico:", error);
      res.status(500).json({ error: 'Erro ao buscar histórico' });
    }
  }

  // Filtra histórico por um intervalo de datas
  public async getHistoricoByDate(req: Request, res: Response): Promise<void> {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      res.status(400).json({ error: "Forneça as datas de início e fim" });
      return;
    }

    try {
      const result = await query(
        'SELECT * FROM eat_foods WHERE date BETWEEN $1 AND $2 ORDER BY date DESC', // Mudança para eat_foods
        [startDate, endDate]
      );
      res.json(result.rows);
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
        'SELECT * FROM eat_foods WHERE _user = $1 ORDER BY date DESC', // Mudança para eat_foods e o nome correto da coluna
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