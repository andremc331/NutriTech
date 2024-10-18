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
  // Função para tratar erros
  private handleError(error: any): ErrorProps {
    return error.response?.data || { error: 'Erro inesperado' };
  }

  // Função para login do usuário
  async login(mail: string, password: string): Promise<TokenProps | ErrorProps> {
    try {
      const response = await api.post('/login', { mail, password });
      return response.data; // Retorna diretamente o TokenProps
    } catch (error) {
      return this.handleError(error); // Chama a função de tratamento de erro
    }
  }

  // Função para criar um usuário
  async create(alias: string, mail: string, password: string): Promise<TokenProps | ErrorProps> {
    try {
      const response = await api.post('/createUser', { alias, mail, password });
      return response.data; // Retorna diretamente o TokenProps
    } catch (error) {
      return this.handleError(error); // Chama a função de tratamento de erro
    }
  }

  // Função para atualizar o alias do usuário
  async updateAlias(alias: string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.put("/api/user/alias", { alias }); // Ajuste na rota
      return data;
    } catch (error) {
      return this.handleError(error); // Chama a função de tratamento de erro
    }
  }

  // Função para atualizar o email do usuário
  async updateMail(mail: string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.put("/api/user/mail", { mail }); // Ajuste na rota
      return data;
    } catch (error) {
      return this.handleError(error); // Chama a função de tratamento de erro
    }
  }

  // Função para atualizar a senha do usuário
  async updatePassword(password: string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.put("/api/user/password", { password }); // Ajuste na rota
      return data;
    } catch (error) {
      return this.handleError(error); // Chama a função de tratamento de erro
    }
  }

  // Função para listar os usuários
  async list(): Promise<UserProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/api/user"); // Ajuste na rota
      return data;
    } catch (error) {
      return this.handleError(error); // Chama a função de tratamento de erro
    }
  }

  // Função para atualizar a role de um usuário
  async updateRole(id: string, role: string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.put("/api/user/role", { id, role }); // Ajuste na rota
      return data;
    } catch (error) {
      return this.handleError(error); // Chama a função de tratamento de erro
    }
  }
}

const user = new User();
export default user;