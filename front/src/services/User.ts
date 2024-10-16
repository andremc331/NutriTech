import { ErrorProps, TokenProps, UserProps } from "../types";
import axios from "axios";

// Criação da instância do axios com a URL base
export const api = axios.create({
  baseURL: "http://localhost:3011", // Substitua pela URL real do backend
});

// Interceptor para adicionar o token em cada requisição
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Recupera o token armazenado
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Adiciona o token ao header Authorization
  }
  return config;
});

class User {
  // Função para login do usuário
  async login(mail: string, password: string): Promise<TokenProps | ErrorProps> {
    try {
      const { data } = await api.post("/login", { mail, password });
      return data;
    } catch (error: any) {
      return error.response.data; // Retorna o erro da resposta do backend
    }
  }

  // Função para criar um novo usuário
  async create(alias: string, mail: string, password: string): Promise<TokenProps | ErrorProps> {
    try {
      const { data } = await api.post("/user", { alias, mail, password });
      return data;
    } catch (error: any) {
      return error.response.data; // Retorna o erro da resposta do backend
    }
  }

  // Função para atualizar o alias do usuário
  async updateAlias(alias: string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.put("/user/alias", { alias });
      return data;
    } catch (error: any) {
      return error.response.data; // Retorna o erro da resposta do backend
    }
  }

  // Função para atualizar o email do usuário
  async updateMail(mail: string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.put("/user/mail", { mail });
      return data;
    } catch (error: any) {
      return error.response.data; // Retorna o erro da resposta do backend
    }
  }

  // Função para atualizar a senha do usuário
  async updatePassword(password: string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.put("/user/password", { password });
      return data;
    } catch (error: any) {
      return error.response.data; // Retorna o erro da resposta do backend
    }
  }

  // Função para listar os usuários
  async list(): Promise<UserProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/user");
      return data;
    } catch (error: any) {
      return error.response.data; // Retorna o erro da resposta do backend
    }
  }

  // Função para atualizar a role de um usuário
  async updateRole(id: string, role: string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.put("/user/role", { id, role });
      return data;
    } catch (error: any) {
      return error.response.data; // Retorna o erro da resposta do backend
    }
  }
}

const user = new User();
export default user;