import { createContext, useEffect, useState } from "react";
import {
  ProductContextProps,
  ProviderProps,
  ErrorProps,
  ProductNutrientsProps,
} from "../types";
import { Product } from "../services";
import { isErrorProps } from "../utils";

export const ProductContext = createContext({} as ProductContextProps);

export function ProductProvider({ children }: ProviderProps) {
  const [error, setError] = useState<ErrorProps | null>(null);
  const [products, setProducts] = useState<ProductNutrientsProps[]>([]);

  useEffect(() => {
    getUserProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getUserProducts(): Promise<void> {
    try {
      const response = await Product.listUserProducts();
      if (isErrorProps(response)) {
        setError(response);
      } else {
        setProducts(response);
        setError(null);
      }
    } catch (e: any) {
      setError(e.message);
    }
  }

  async function search(term:string): Promise<ProductNutrientsProps[]> {
    try {
      const response = await Product.search(term);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        setError(null);
        return response;
      }
    } catch (e: any) {
      setError(e.message);
    }
    return [];
  }

  async function create(productData: ProductNutrientsProps): Promise<boolean> {
    try {
      const response = await Product.create(
        productData.description,
        productData.serving_size,
        productData.serving_size_unit,
        productData.quantity_per_serving,
        productData.quantity_per_serving_unit,
        productData.energy,
        productData.protein,
        productData.carbohydrate,
        productData.sugar,
        productData.dietary_fiber,
        productData.total_fat,
        productData.saturated_fat,
        productData.trans_fat,
        productData.calcium,
        productData.sodium
      );
      if (isErrorProps(response)) {
        setError(response);
        return false;
      } else {
        await getUserProducts(); // Usar await para garantir que os produtos sejam recarregados antes de retornar
        setError(null);
        return true;
      }
    } catch (e: any) {
      setError(e.message);
      return false;
    }
  }
  
  async function update(id: string, productData: ProductNutrientsProps): Promise<boolean> {
    try {
      const response = await Product.update(
        id,
        productData.description,
        productData.serving_size,
        productData.serving_size_unit,
        productData.quantity_per_serving,
        productData.quantity_per_serving_unit,
        productData.energy,
        productData.protein,
        productData.carbohydrate,
        productData.sugar,
        productData.dietary_fiber,
        productData.total_fat,
        productData.saturated_fat,
        productData.trans_fat,
        productData.calcium,
        productData.sodium
      );
      if (isErrorProps(response)) {
        setError(response);
        return false;
      } else {
        await getUserProducts(); // Usar await para garantir que os produtos sejam recarregados antes de retornar
        setError(null);
        return true;
      }
    } catch (e: any) {
      setError(e.message);
      return false;
    }
  }

  async function remove(id:string): Promise<boolean> {
    try{
      const response = await Product.delete(id);
      if (isErrorProps(response)) {
        setError(response);
        return false;
      } else {
        getUserProducts();
        setError(null);
        return true;
      }
    } catch (e: any) {
      setError(e.message);
      return false;
    }
  }

  return (
    <ProductContext.Provider value={{ products, search, error, setError, create, update, remove }}>
      {children}
    </ProductContext.Provider>
  );
}
