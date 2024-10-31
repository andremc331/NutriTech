import { ErrorProps, GoalProps } from "../types";
import { api } from "./api";

class Goal {
  // Ajuste para retornar `GoalProps` específico em vez de `UserProps`
  async saveGoal(goal: string): Promise<GoalProps | ErrorProps> {
    try {
      const { data } = await api.post("/goals", { goal });
      return data as GoalProps; // Retorno tipado
    } catch (error: any) {
      return error.response?.data || { error: "Erro desconhecido" }; // Retorna detalhes específicos do erro
    }
  }

  async getGoals(): Promise<GoalProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/goals");
      return data as GoalProps[]; // Retorno tipado
    } catch (error: any) {
      return error.response?.data || { error: "Erro desconhecido" }; // Retorna detalhes específicos do erro
    }
  }
}

export default new Goal();