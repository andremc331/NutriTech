import { ErrorProps, UserProps } from "../types";
import { api } from "./api";

class Goal {
  async saveGoal(goal: string): Promise<UserProps | ErrorProps> {
    try {
      const { data } = await api.post("/goals", { goal });
      return data;
    } catch (error: any) {
      return error.response?.data || error; // Retorna detalhes específicos do erro
    }
  }

  async getGoals(): Promise<UserProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/goals");
      return data;
    } catch (error: any) {
      return error.response?.data || error; // Retorna detalhes específicos do erro
    }
  }
}

export default new Goal(); // Exporta uma instância da classe Goal