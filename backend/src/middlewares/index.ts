import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.JWT_SECRET || "secret_key";

// Função para gerar o token JWT
export const tokenize = (user: { id: string; alias: string; mail: string; role: string }) => {
  return jwt.sign(user, secret, { expiresIn: "1h" }); // Expira em 1 hora
};

// Middleware para validar o token JWT
export const validadeAcess = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authorization: string | undefined = req.headers.authorization;
  
  if (!authorization) {
    // Apenas envia a resposta sem retornar explicitamente
    res.status(401).json({ error: "Efetue o login para continuar" });
    return; // Certifique-se de parar a execução
  }
  
  try {
    const [, token] = authorization.split(" ");
    const decoded = <any>jwt.verify(token, secret);
    
    if (decoded) {
      res.locals = decoded; // Armazena os dados decodificados
      next(); // Chama o próximo middleware
    } else {
      res.status(403).json({ error: "Não autorizado" });
    }
  } catch (e: any) {
    if (e.message === "jwt malformed") {
      res.status(401).json({ error: "Token inválido" });
    } else {
      res.status(500).json({ error: e.message });
    }
  }
};

// Middleware para validar se o usuário é administrador
export const checkAdm = (_: Request, res: Response, next: NextFunction) => {
  const { role } = res.locals;
  
  if (role === "adm") {
    next(); // Se o usuário for administrador, continua o fluxo
  } else {
    res.status(403).json({ error: "Acesso restrito a administrador" });
  }
};