import { Request, Response } from "express";
import { query } from "../database/connection";

class CategoryController {
  public async list(req: Request, res: Response): Promise<void> {
    try {
      const { startDate, endDate } = req.query;

      // Verifica se as datas foram passadas
      if (!startDate || !endDate) {
        res.status(400).json({ error: "Por favor, forneça as datas de início e fim." });
        return;
      }

      // Consulta no banco de dados com o filtro de data, retornando apenas categorias de alimentos consumidos
      const result: any = await query(
        `SELECT DISTINCT c.id, c.name
         FROM eat_foods ef
         INNER JOIN foods f ON ef.food = f.id
         INNER JOIN categories c ON f.category = c.id
         WHERE ef.date BETWEEN $1 AND $2
         ORDER BY c.name`,
        [startDate, endDate]
      );

      res.json(result); // Envia a resposta com as categorias
    } catch (e: any) {
      res.status(502).json({ error: e.message });
    }
  }
}

const controller = new CategoryController();
export default controller;