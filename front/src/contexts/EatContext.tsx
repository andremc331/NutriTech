import { createContext, useEffect, useState } from "react";
import {
  ProviderProps,
  ErrorProps,
  EatProductProps,
  EatContextProps,
  ProductNutrientsProps,
  FoodProps,
  EatFoodProps,
  Meal,
  RefeicaoProps,
} from "../types";
import { Eat, Food, Historico, Product } from "../services";
import { dateFormat, isErrorProps } from "../utils";
import historico from "../services/Historico";

export const EatContext = createContext({} as EatContextProps);

export function EatProvider({ children }: ProviderProps) {
  const [error, setError] = useState<ErrorProps | null>(null);
  const [date, setDate] = useState<Date | null>(new Date());
  const [eatProducts, setEatProducts] = useState<EatProductProps[]>([]);
  const [eatFoods, setEatFoods] = useState<EatFoodProps[]>([]);
  const [products, setProducts] = useState<ProductNutrientsProps[]>([]);
  const [foods, setFoods] = useState<FoodProps[]>([]);
  const [historicoData, setHistoricoData] = useState<Meal[] | null>(null);


  useEffect(() => {
    getEatProduct();
    getEatFood();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  async function getEatProduct(): Promise<void> {
    try {
      if (date) {
        const response = await Eat.listProducts(dateFormat(date));
        if (isErrorProps(response)) {
          setError(response);
        } else {
          setEatProducts(response);
          setError(null);
        }
      }
    } catch (e: any) {
      setError(e.message);
    }
  }

  async function getEatFood(): Promise<void> {
    try {
      if (date) {
        const response = await Eat.listFoods(dateFormat(date));
        if (isErrorProps(response)) {
          setError(response);
        } else {
          setEatFoods(response);
          setError(null);
        }
      }
    } catch (e: any) {
      setError(e.message);
    }
  }

  async function createProduct(
    product: string,
    date: string,
    quantity: number
  ): Promise<boolean> {
    try {
      const response = await Eat.createProduct(product, date, quantity);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        getEatProduct();
        setError(null);
        return true;
      }
    } catch (e: any) {
      setError(e.message);
    }
    return false;
  }

  async function createFood(
    food: string,
    date: string,
    quantity: number
  ): Promise<boolean> {
    try {
      console.log(food, date, quantity)
      const response = await Eat.createFood(food, date, quantity);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        getEatFood();
        setError(null);
        return true;
      }
    } catch (e: any) {
      setError(e.message);
    }
    return false;
  }

  async function searchProduct(term: string): Promise<boolean> {
    try {
      const response = await Product.search(term);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        setError(null);
        setProducts(response);
        return response.length === 0;
      }
    } catch (e: any) {
      setError(e.message);
    }
    return false;
  }

  async function searchFood(term: string): Promise<boolean> {
    try {
      const response = await Food.search(term);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        setFoods(response.items);
        setError(null);
      }
    } catch (e: any) {
      setError(e.message);
    }
    return false;
  }

  async function removeProduct(id: string): Promise<boolean> {
    try {
      const response = await Eat.deleteProduct(id);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        getEatProduct();
        setError(null);
        return true;
      }
    } catch (e: any) {
      setError(e.message);
    }
    return false;
  }

  async function removeFood(id: string): Promise<boolean> {
    try {
      const response = await Eat.deleteFood(id);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        getEatFood();
        setError(null);
        return true;
      }
    } catch (e: any) {
      setError(e.message);
    }
    return false;
  }

  // Novas funções para gerenciar o histórico
  async function getHistoricoWithFoodName(): Promise<Meal[]> {
    try {
      const response = await Historico.getHistoricoWithFoodName();
      if (isErrorProps(response)) {
        setError(response);
        return []; // Retorne um array vazio em caso de erro
      } else {
        const historicoItems = response as unknown as RefeicaoProps[];
  
        // Mapeia os itens para o formato Meal[]
        const mealData = historicoItems.map(item => ({
          id: item.id,
          foodName: item.foodName,
          quantity: item.quantity,
          date: item.date,
          userId: item.userId,
        })) as Meal[];
  
        setError(null);
        return mealData; // Retorne o array de refeições
      }
    } catch (e: any) {
      setError(e.message);
      return []; // Retorne um array vazio em caso de erro
    }
  }
  
  async function getHistoricoByDate(startDate: string, endDate: string): Promise<Meal[]> {
    try {
      const response = await Historico.getHistoricoByDate(startDate, endDate);
      if (isErrorProps(response)) {
        setError(response);
        return []; // Retorne um array vazio em caso de erro
      } else {
        const mealData = response as Meal[]; // Cast para Meal[]
        setError(null);
        return mealData; // Retorne o array de refeições
      }
    } catch (e: any) {
      setError(e.message);
      return []; // Retorne um array vazio em caso de erro
    }
  }
  
  async function getHistoricoByUser(userId: string): Promise<Meal[]> {
    try {
      const response = await Historico.getHistoricoByUser(userId);
      if (isErrorProps(response)) {
        setError(response);
        return []; // Retorne um array vazio em caso de erro
      } else {
        const mealData = response as Meal[]; // Cast para Meal[]
        setError(null);
        return mealData; // Retorne o array de refeições
      }
    } catch (e: any) {
      setError(e.message);
      return []; // Retorne um array vazio em caso de erro
    }
  }

  return (
    <EatContext.Provider
      value={{
        eatProducts,
        eatFoods,
        foods,
        products,
        searchFood,
        searchProduct,
        error,
        setError,
        createProduct,
        createFood,
        removeProduct,
        removeFood,
        date,
        setDate,
        getHistoricoWithFoodName, // Passando as funções do histórico
        getHistoricoByDate,
        getHistoricoByUser,
        historicoData, // Adicionando dados do histórico ao contexto
      }}
    >
      {children}
    </EatContext.Provider>
  );
}
