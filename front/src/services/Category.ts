import { ErrorProps, Food, FoodProps, PageProps } from "../types";
import { api } from "./api";

class Category {
  async list(startDate: string, endDate: string): Promise<FoodProps | ErrorProps> {
    try {
      const { data } = await api.get("/category", {
        params: { startDate, endDate }, // Passando as datas para a API
      });
      return data;
    } catch (error: any) {
      return error;
    }
  }
}

const category = new Category();
export default category;
