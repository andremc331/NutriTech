// src/database/data-source.ts
import { DataSource } from 'typeorm';
import 'reflect-metadata';
import { User } from '../entities/User'; // Exemplo de entidade

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,  // Use true em ambiente de desenvolvimento
  logging: true,
  entities: [User],    // Adicione todas as suas entidades aqui
  migrations: ['../src/migrations/CreateUsersTable.ts'],  // Caminho para as migrations
});

console.log({
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
});