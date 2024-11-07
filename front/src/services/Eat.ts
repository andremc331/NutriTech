// services/Eat.ts

import { EatFoodProps, EatProductProps, ErrorProps } from "../types";  // Importando as tipagens necessárias
import { api } from "./api";  // Importando o Axios ou instância de API configurada

class Eat {
  // Método para listar produtos
  async listProducts(date: string): Promise<EatProductProps[] | ErrorProps> {
    try {
      const params = { date };
      const { data } = await api.get("/eat/product", { params });
      return data;
    } catch (error: any) {
      return { error: error.message } as ErrorProps; // Garantindo que o retorno de erro esteja tipado
    }
  }

  // Método para criar um novo produto
  async createProduct(product: string, date: string, quantity: number): Promise<EatProductProps[] | ErrorProps> {
    try {
      const { data } = await api.post("/eat/product", { product, date, quantity });
      return data;
    } catch (error: any) {
      return { error: error.message } as ErrorProps; // Tratando erro
    }
  }

  // Método para deletar um produto
  async deleteProduct(id: string): Promise<EatProductProps | ErrorProps> {
    try {
      const { data } = await api.delete(`/eat/product/${id}`);
      return data;
    } catch (error: any) {
      return { error: error.message } as ErrorProps; // Tratando erro
    }
  }

  // Método para listar alimentos (com base na data)
  async listFoods(date: string): Promise<EatFoodProps[] | ErrorProps> {
    try {
      const params = { date };
      const { data } = await api.get("/eat/food", { params });
      return data; // Retorna a lista de alimentos ou erro
    } catch (error: any) {
      return { error: error.message } as ErrorProps; // Tratando erro
    }
  }

  // Método para criar um novo alimento
  async createFood(food: string, date: string, quantity: number): Promise<EatFoodProps[] | ErrorProps> {
    try {
      const { data } = await api.post("/eat/food", { food, date, quantity });
      return data;
    } catch (error: any) {
      return { error: error.message } as ErrorProps; // Tratando erro
    }
  }

  // Método para deletar um alimento
  async deleteFood(id: string): Promise<EatFoodProps | ErrorProps> {
    try {
      const { data } = await api.delete(`/eat/food/${id}`);
      return data;
    } catch (error: any) {
      return { error: error.message } as ErrorProps; // Tratando erro
    }
  }
}

// Criando uma instância da classe Eat para ser exportada
const eat = new Eat();
export default eat;
