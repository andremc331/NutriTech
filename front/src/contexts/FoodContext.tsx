import { createContext, useEffect, useState } from "react";
import {
  FoodContextProps,
  ProviderProps,
  PageProps,
  FoodNutrientsProps,
  ErrorProps,
  RefeicaoProps, // Importando o tipo para as refeições
} from "../types";
import { Food } from "../services";
import historico from "../services/Historico"; // Ajuste o caminho conforme necessário
import { isErrorProps } from "../utils";

export const FoodContext = createContext({} as FoodContextProps);

export function FoodProvider({ children }: ProviderProps) {
  const [pageFoods, setPageFoods] = useState<PageProps | null>(null);
  const [error, setError] = useState<ErrorProps | null>(null);
  const [food, setFood] = useState<FoodNutrientsProps | null>(null);
  const [historicoData, setHistoricoData] = useState<RefeicaoProps[] | null>(null); // Estado para o histórico

  useEffect(() => {
    getFoodsByPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getFoodsByPage(page: number): Promise<void> {
    try {
      const response = await Food.list(page);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        setPageFoods(response);
        setError(null);
      }
    } catch (e: any) {
      setError(e.message);
    }
  }

  async function search(term: string) {
    try {
      const response = await Food.search(term);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        setPageFoods(response);
        setError(null);
      }
    } catch (e: any) {
      setError(e.message);
    }
  }

  async function getById(id: string): Promise<void> {
    try {
      const response = await Food.getById(id);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        setFood(response);
        setError(null);
      }
    } catch (e: any) {
      setError(e.message);
    }
  }

  // Novas funções para gerenciar o histórico
  async function getHistorico(): Promise<void> {
    try {
      const response = await historico.getHistorico();
      if (isErrorProps(response)) {
        setError(response);
      } else {
        setHistoricoData(response);
        setError(null);
      }
    } catch (e: any) {
      setError(e.message);
    }
  }

  async function getHistoricoByDate(startDate: string, endDate: string): Promise<void> {
    try {
      const response = await historico.getHistoricoByDate(startDate, endDate);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        setHistoricoData(response);
        setError(null);
      }
    } catch (e: any) {
      setError(e.message);
    }
  }

  async function getHistoricoByUser(userId: string): Promise<void> {
    try {
      const response = await historico.getHistoricoByUser(userId);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        setHistoricoData(response);
        setError(null);
      }
    } catch (e: any) {
      setError(e.message);
    }
  }

  return (
    <FoodContext.Provider
      value={{
        pageFoods,
        food,
        error,
        historicoData, // Adicionando dados do histórico ao contexto
        getFoodsByPage,
        search,
        getById,
        getHistorico, // Passando as funções do histórico
        getHistoricoByDate,
        getHistoricoByUser,
        setError,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}