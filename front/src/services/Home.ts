import { api } from "./api";  // Importa a instância do axios
import { ErrorProps } from "../types";  // Para lidar com erros

// Função para obter peso e altura
export const Home = async (): Promise<{ weight: number, height: number } | ErrorProps> => {
  try {
    const response = await api.get("/profile/weight-and-height");
    return response.data;  // Retorna os dados de peso e altura
  } catch (error: any) {
    console.error("Erro ao obter dados de peso e altura", error);
    return { error: error.message };  // Retorna o erro
  }
};

const home = new Home();
export default home;