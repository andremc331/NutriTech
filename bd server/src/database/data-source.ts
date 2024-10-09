// src/database/data-source.ts
import { DataSource } from 'typeorm';
import 'reflect-metadata';
import { User } from '../entities/User'; // Exemplo de entidade

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,  // Use true em ambiente de desenvolvimento
  logging: true,
  entities: [User],    // Adicione todas as suas entidades aqui
  migrations: ['./src/migrations/*.ts'],  // Caminho para as migrations
});