import { ErrorProps, RefeicaoProps } from "../types"; // Ajuste o caminho e os tipos conforme necessário
import { api } from "./api";

class Historico {
  getHistoricoPeso(startDate: string, endDate: string) {
    throw new Error("Method not implemented.");
  }
  // Método para buscar todas as refeições no histórico
  async getHistoricoWithFoodName(): Promise<RefeicaoProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/historico"); // Confere se está correto no backend
      return data;
    } catch (error: any) {
      return error.response?.data || { error: "Erro desconhecido" };
    }
  }
  
  async getHistoricoByDate(startDate: string, endDate: string): Promise<RefeicaoProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/historico/data", { // Confere a rota
        params: { startDate, endDate },
      });
      return data;
    } catch (error: any) {
      return error.response?.data || { error: "Erro desconhecido" };
    }
  }
  
  async getHistoricoByUser(userId: string): Promise<RefeicaoProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/historico/user", { // Confere a rota
        params: { id: userId },
      });
      return data;
    } catch (error: any) {
      return error.response?.data || { error: "Erro desconhecido" };
    }
  }
}

const historico = new Historico();
export default historico;