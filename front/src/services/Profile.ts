import { ErrorProps, ProfileProps } from "../types";
import { api } from "./api";

class Profile {
  async list(): Promise<ProfileProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/profile");
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async save(birth_date:string, weight:number|null, sex:string, height:number|null): Promise<ProfileProps | ErrorProps> {
    try {
      const { data } = await api.post("/profile", { birth_date, weight, sex, height });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async delete(): Promise<ProfileProps | ErrorProps> {
    try {
      const { data } = await api.delete("/profile");
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async updateWeight(weight: number): Promise<ProfileProps | ErrorProps> {
    try {
      const { data } = await api.put("/profile/weight", { weight }); // Chama o endpoint adequado para atualizar o peso
      return data;
    } catch (error: any) {
      return error; // Retorna o erro caso haja falha na requisição
    }
  }

}

const profile = new Profile();
export default profile;
