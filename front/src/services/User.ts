import { ErrorProps, TokenProps, UserProps } from "../types";
import { api } from "./api";

class User {
  async login(email: string, senha: string ): Promise<TokenProps | ErrorProps> {
    try {
      const { data } = await api.post("/login", { email, senha });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async create(nome:string, email: string, senha: string): Promise<TokenProps | ErrorProps> {
    try {
      const { data } = await api.post("/user", { nome, email, senha });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async updateAlias(nome:string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.put("/user/nome", { nome });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async updateMail(email:string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.put("/user/email", { email });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async updatePassword(senha:string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.put("/user/senha", { senha });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async list(): Promise<UserProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/user");
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async updateRole(id: string,role: string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.put("/user/role", { id, role });
      return data;
    } catch (error: any) {
      return error;
    }
  }

}

const user = new User();
export default user;