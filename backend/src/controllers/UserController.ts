import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { query } from "../database/connection";
import { tokenize } from "../middlewares";

class UserController {
  // Defina o número de saltos para o bcrypt
  private saltRounds = 10;

  public login = async (req: Request, res: Response): Promise<void> => {
    const { email, senha } = req.body;

    if (!email) {
      res.json({ error: "Forneça o e-mail" });
    } else if (!senha) {
      res.json({ error: "Forneça a senha" });
    } else {
      try {
        const result: any = await query(
          `SELECT id::varchar, nome, email, role, senha 
          FROM users 
          WHERE email=$1`,
          [email]
        );

        if (result.length === 0) {
          res.status(401).json({ error: "E-mail ou senha incorretos" });
          return;
        }

        const user = result[0];
        // Comparar a senha
        const isMatch = await bcrypt.compare(senha, user.senha);
        if (isMatch) {
          const object = {
            id: user.id,
            nome: user.nome,
            email: user.email,
            role: user.role,
          };
          res.json({ ...object, token: tokenize(object) });
        } else {
          res.status(401).json({ error: "E-mail ou senha incorretos" });
        }
      } catch (e: any) {
        res.status(502).json({ error: "Erro ao processar a solicitação" });
      }
    }
  };

  public create = async (req: Request, res: Response): Promise<void> => {
    const { nome, email,senha } = req.body;

    if (!nome) {
      res.json({ error: "Forneça o nome de usuário" });
    } else if (!email) {
      res.json({ error: "Forneça o e-mail" });
    } else if (!senha || senha.trim().length < 6) {
      res.json({ error: "Forneça a senha com o mínimo de 6 caracteres" });
    } else {
      const hashedPassword = await bcrypt.hash(senha, this.saltRounds);

      try {
        const result: any = await query(
          `INSERT INTO users(nome,email,senha) 
          VALUES($1,$2,$3)
          RETURNING id::varchar, nome, email, role`,
          [nome, email, hashedPassword]
        );

        res.json({ ...result, token: tokenize(result) });
      } catch (e: any) {
        if (e.message.includes("duplicate key")) {
          res.status(409).json({
            error:
              "O e-mail fornecido já está em uso. Por favor, forneça um e-mail diferente",
          });
        } else {
          res.status(502).json({ error: e.message });
        }
      }
    }
  };

  public async list(_: Request, res: Response): Promise<void> {
    try {
      const result: any = await query(
        "SELECT id::varchar,nome,email,role FROM users ORDER BY email"
      );
      res.json(result);
    } catch (e: any) {
      res.status(502).json({ error: e.message });
    }
  }

  public async updateAlias(req: Request, res: Response): Promise<void> {
    const { nome } = req.body;
    const { id } = res.locals;
    if (!nome) {
      res.json({ error: "Forneça o nome de usuário" });
    } else {
      try {
        const result: any = await query(
          "UPDATE users SET nome=$2 WHERE id=$1 RETURNING id::varchar, nome, email, role",
          [id, nome]
        );
        if (result.rowcount > 0) {
          res.json(result.rows);
        } else if (result.rowcount == 0) {
          res.json({ error: "Registro inexistente" });
        } else {
          res.json(result);
        }
      } catch (e: any) {
        res.status(502).json({ error: e.message });
      }
    }
  }

  public async updateMail(req: Request, res: Response): Promise<void> {
    const { email } = req.body;
    const { id } = res.locals;
    if (!email) {
      res.json({ error: "Forneça o e-mail" });
    } else {
      try {
        const result: any = await query(
          "UPDATE users SET email=$2 WHERE id=$1 RETURNING id::varchar, nome, email, role",
          [id, email]
        );
        if (result.rowcount > 0) {
          res.json(result.rows);
        } else if (result.rowcount == 0) {
          res.json({ error: "Registro inexistente" });
        } else {
          res.json(result);
        }
      } catch (e: any) {
        if (e.message.includes("duplicate key")) {
          res.status(409).json({
            error:
              "O e-mail fornecido já está em uso. Por favor, forneça um e-mail diferente",
          });
        } else {
          res.status(502).json({ error: e.message });
        }
      }
    }
  }

  public updatePassword = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { senha } = req.body;
    const { id } = res.locals;
    if (!senha || senha.trim().length < 6) {
      res.json({ error: "Forneça a senha com o mínimo de 6 caracteres" });
    } else {
      try {
        const hashedPassword = await bcrypt.hash(senha, this.saltRounds);
        const result: any = await query(
          "UPDATE users SET senha=$2 WHERE id=$1 RETURNING id::varchar, nome, email, role",
          [id, hashedPassword]
        );
        if (result.rowcount > 0) {
          res.json(result.rows);
        } else if (result.rowcount == 0) {
          res.json({ error: "Registro inexistente" });
        } else {
          res.json(result);
        }
      } catch (e: any) {
        res.status(502).json({ error: e.message });
      }
    }
  };

  public async updateProfile(req: Request, res: Response): Promise<void> {
    const { id, role } = req.body;
    if (role === "adm" || role === "user") {
      try {
        const r: any = await query(
          "UPDATE users SET role=$2 WHERE id=$1 RETURNING id::varchar, nome, email, role",
          [id, role]
        );
        if (r.rowcount > 0) {
          res.json(r.rows);
        } else if (r.rowcount == 0) {
          res.json({ error: "Registro inexistente" });
        } else {
          res.json(r);
        }
      } catch (e: any) {
        res.status(502).json({ error: e.message });
      }
    } else {
      res.json({ error: "Perfil inexistente" });
    }
  }
}

const controller = new UserController();
export default controller;