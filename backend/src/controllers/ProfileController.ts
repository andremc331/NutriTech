import { Request, Response } from "express";
import { query } from "../database/connection";

class ProfileController {
  // Rota para buscar peso e altura sem sobrescrever outras rotas
  public async fetchWeightAndHeight(req: Request, res: Response): Promise<void> {
    const { id } = res.locals; // Obtém o id do usuário a partir do token ou sessão
    try {
      // Realiza a consulta no banco de dados
      const result: any = await query(
        "SELECT weight, height FROM profiles WHERE _user=$1",
        [id]
      );

      if (result.length === 0) {
        // Caso o usuário não tenha perfil, retorna um erro
        res.status(404).json({ error: 'Perfil não encontrado' });
        return;
      }

      // Retorna os dados de peso e altura
      res.json({
        weight: result[0].weight,
        height: result[0].height
      });
    } catch (e: any) {
      res.status(502).json({ error: e.message });
    }
  }

  public async updateWeight(req: Request, res: Response): Promise<void> {
    const { weight } = req.body;
    const { id } = res.locals;

    if (weight == null) {
      res.json({ error: "Forneça o peso" });
      return;
    }

    try {
      const result: any = await query(
        `UPDATE profiles 
         SET weight = $1
         WHERE _user = $2
         RETURNING weight`,
        [weight, id]
      );

      if (result.rowCount === 0) {
        res.status(404).json({ error: "Perfil não encontrado" });
        return;
      }

      // Retorna o peso atualizado
      res.json({ weight: result[0].weight });
    } catch (e: any) {
      res.status(502).json({ error: e.message });
    }
  }

  // Outras rotas já existentes...

  public async list(_: Request, res: Response): Promise<void> {
    const { id } = res.locals;
    try {
      const result: any = await query(
        "SELECT TO_CHAR(birth_date, 'YYYY-MM-DD') AS birth_date, weight, sex, height FROM profiles WHERE _user=$1",
        [id]
      );
      res.json(result);
    } catch (e: any) {
      res.status(502).json({ error: e.message });
    }
  }

  public async save(req: Request, res: Response): Promise<void> {
    const { birth_date, weight, sex, height } = req.body;
    const { id } = res.locals;
    if (!birth_date) {
      res.json({ error: "Forneça a sua data de nascimento" });
    } else if (!weight) {
      res.json({ error: "Forneça o seu peso" });
    } else if (!sex || (sex !== "female" && sex !== "male")) {
      res.json({ error: "Forneça o sexo" });
    } else if (! height){
      res.json({error: "Forneça seu peso"});
    }
    else {
      try {
        const queryProfile: any = await query(
          "SELECT birth_date,weight,sex,height FROM profiles WHERE _user=$1",
          [id]
        );
        if (queryProfile.length === 0) {
          const result: any = await query(
            `INSERT INTO profiles(_user, birth_date, weight, sex, height) 
                VALUES($1,$2,$3,$4,$5)
                RETURNING TO_CHAR(birth_date, 'YYYY-MM-DD') AS birth_date, weight, sex, height`,
            [id, birth_date, weight, sex, height]
          );
          res.json(result);
        } else {
          const result: any = await query(
            `UPDATE profiles 
                SET birth_date=$1, weight=$2, sex=$3, height=$4
                WHERE _user=$5
                RETURNING TO_CHAR(birth_date, 'YYYY-MM-DD') AS birth_date, weight, sex, height`,
            [birth_date, weight, sex, height,id]
          );
          if (result.rows) {
            res.json(result.rows);
          } else {
            res.json(result);
          }
        }
      } catch (e: any) {
        res.status(502).json({ error: e.message });
      }
    }
  }

  public async delete(_: Request, res: Response): Promise<void> {
    const { id } = res.locals;

    try {
      const result: any = await query(
        `DELETE FROM profiles WHERE _user = $1 
        RETURNING TO_CHAR(birth_date, 'YYYY-MM-DD') AS birth_date, weight, sex, height`,
        [id]
      );
      if (result.rowcount > 0) {
        res.json(result.rows);
      } else if (result.rowcount === 0) {
        res.json({ error: "Não existe perfil cadastrado" });
      } else {
        res.json(result);
      }
    } catch (e: any) {
      res.status(502).json({ error: e.message });
    }
  }
}

const controller = new ProfileController();
export default controller;
