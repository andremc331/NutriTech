import { ErrorProps, RefeicaoProps } from "../types"; // Ajuste o caminho e os tipos conforme necessário
import { api } from "./api";

class Historico {
  // Método para buscar todas as refeições no histórico
  async getHistorico(): Promise<RefeicaoProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/historico");
      return data; // Retorno tipado
    } catch (error: any) {
      return error.response?.data || { error: "Erro desconhecido" }; // Retorna detalhes específicos do erro
    }
  }

  // Método para filtrar histórico por intervalo de datas
  async getHistoricoByDate(startDate: string, endDate: string): Promise<RefeicaoProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/historico/by-date", {
        params: { startDate, endDate },
      });
      return data; // Retorno tipado
    } catch (error: any) {
      return error.response?.data || { error: "Erro desconhecido" }; // Retorna detalhes específicos do erro
    }
  }

  // Método para buscar refeições específicas de um usuário
  async getHistoricoByUser(userId: string): Promise<RefeicaoProps[] | ErrorProps> {
    try {
      const { data } = await api.get(`/historico/by-user`, {
        params: { id: userId },
      });
      return data; // Retorno tipado
    } catch (error: any) {
      return error.response?.data || { error: "Erro desconhecido" }; // Retorna detalhes específicos do erro
    }
  }
}

const historico = new Historico();
export default historico;