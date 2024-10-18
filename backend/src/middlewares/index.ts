import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from 'cors';
import express from 'express';
import routes from '../routes'; // Certifique-se de que o caminho está correto

dotenv.config();

const app = express(); // Inicializa o express

const secret = process.env.JWT_SECRET || "";

// Configuração do CORS para permitir o frontend acessar o backend
app.use(cors({
  origin: 'http://localhost:3000', // Permite o frontend da porta 3000
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Authorization', 'Content-Type'], // Headers permitidos
}));

app.use(express.json()); // Permite receber JSON nas requisições

// Suas rotas e middleware continuam aqui
app.use('/api', routes); // Exemplo de como você usaria as rotas

app.listen(3011, () => {
  console.log('Backend rodando na porta 3011');
});

// Middleware para criar um token JWT
export const tokenize = (object: any) => jwt.sign(object, secret);

// Middleware para verificar a autorização do usuário
export const validadeAcess = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization: string | undefined = req.headers.authorization;
  
  if (!authorization) {
    res.send({ error: "Efetue o login para continuar" });
  } else {
    try {
      const [, token] = authorization.split(" ");
      const decoded = <any>jwt.verify(token, secret);
      if (decoded) {
        res.locals = decoded; // Salva o objeto decodificado em res.locals
        next(); // Continua para a próxima função
      } else {
        res.send({ error: "Não autorizado" });
      }
    } catch (e: any) {
      res.send({ error: e.message === "jwt malformed" ? "Token inválido" : e.message });
    }
  }
};

// Middleware para verificar se o usuário é administrador
export const checkAdm = (_: Request, res: Response, next: NextFunction) => {
  const { role } = res.locals;
  if (role === "adm") {
    next(); // Continua para a próxima função se o usuário for administrador
  } else {
    res.status(403).json({ error: "Acesso restrito a administrador" });
  }
};