import { ReactNode } from "react";

// ---------------------------------------
// Context Props Interfaces
// ---------------------------------------

// User Context
export interface UserContextProps {
  loading: boolean;
  users: UserProps[] | null;
  token: TokenProps | null;
  currentUser: UserProps | null; // Adicione esta linha
  profile: ProfileProps | null;
  setToken: (value: TokenProps | null) => void;
  login: (mail: string, password: string) => Promise<void>;
  logout: () => void;
  createUser: (alias: string, mail: string, password: string) => Promise<void>;
  getUsers: () => Promise<void>;
  updateRole: (id: string, role: string) => Promise<boolean>;
  error: ErrorProps | null;
  setError: (error: ErrorProps | null) => void;
  updateAlias: (alias: string) => Promise<boolean>;
  updateMail: (mail: string) => Promise<boolean>;
  updatePassword: (password: string) => Promise<boolean>;
  saveProfile: (birth_date: string, weight: string, sex: string) => Promise<boolean>;
  deleteProfile: () => Promise<boolean>;
}

// Food Context
export interface FoodContextProps {
  pageFoods: PageProps | null;
  food: FoodNutrientsProps | null;
  error: ErrorProps | null;
  getFoodsByPage: (page: number) => Promise<void>;
  search: (term: string) => Promise<void>;
  getById: (id: string) => Promise<void>;
  setError: (value: ErrorProps | null) => void;
}

// Product Context
export interface ProductContextProps {
  products: ProductNutrientsProps[];
  error: ErrorProps | null;
  setError: (value: ErrorProps | null) => void;
  create: (productData: ProductNutrientsProps) => Promise<boolean>;
  update: (id: string, productData: ProductNutrientsProps) => Promise<boolean>;
  remove: (id: string) => Promise<boolean>;
  search: (term: string) => Promise<ProductNutrientsProps[]>;
}

// Eat Context
export interface EatContextProps {
  eatProducts: EatProductProps[];
  eatFoods: EatFoodProps[];
  products: ProductNutrientsProps[];
  foods: FoodProps[];
  error: ErrorProps | null;
  setError: (value: ErrorProps | null) => void;
  createProduct: (product: string, date: string, quantity: number) => Promise<boolean>;
  createFood: (food: string, date: string, quantity: number) => Promise<boolean>;
  removeProduct: (id: string) => Promise<boolean>;
  removeFood: (id: string) => Promise<boolean>;
  date: Date | null;
  setDate: (value: Date | null) => void;
  searchFood: (term: string) => Promise<boolean>;
  searchProduct: (term: string) => Promise<boolean>;
}

// ---------------------------------------
// Data Interfaces
// ---------------------------------------

// User Properties
export interface UserProps {
  id: string;
  alias: string;
  mail: string;
  role: string;
}

// Token Properties
export interface TokenProps {
  token: string;
  user: UserProps; // Assumindo que UserProps tem as propriedades necessárias
  alias: string; // Adicionando a propriedade alias
  mail: string; // Adicionando a propriedade mail
}

// Profile Properties
export interface ProfileProps {
  birth_date: string;
  weight: string;
  sex: string;
}

// Food Properties
export interface FoodProps {
  id: string;
  description: string;
}

// Food Nutrients Properties
export interface FoodNutrientsProps {
  id: string;
  description: string;
  category: CategoryProps;
  moisture: ValueProps;
  energy: ValueProps;
  protein: ValueProps;
  lipids: ValueProps;
  cholesterol: ValueProps;
  carbohydrate: ValueProps;
  dietary_fiber: ValueProps;
  ash: ValueProps;
  calcium: ValueProps;
  magnesium: ValueProps;
  manganese: ValueProps;
  phosphorus: ValueProps;
  iron: ValueProps;
  sodium: ValueProps;
  potassium: ValueProps;
  copper: ValueProps;
  zinc: ValueProps;
  retinol: ValueProps;
  re: ValueProps;
  era: ValueProps;
  thiamin: ValueProps;
  riboflavin: ValueProps;
  pyridoxine: ValueProps;
  niacin: ValueProps;
  vitamin_c: ValueProps;
}

// Product Nutrients Properties
export interface ProductNutrientsProps {
  id: string;
  description: string;
  serving_size: number;
  serving_size_unit: string;
  quantity_per_serving: number;
  quantity_per_serving_unit: string;
  energy: number | null;
  protein: number | null;
  carbohydrate: number | null;
  sugar: number | null;
  dietary_fiber: number | null;
  total_fat: number | null;
  saturated_fat: number | null;
  trans_fat: number | null;
  calcium: number | null;
  sodium: number | null;
}

// Eat Product Properties
export interface EatProductProps {
  id: string;
  date: string;
  quantity: number; 
  description: string;
  serving_size: number; 
  serving_size_unit: string; 
  quantity_per_serving: number;
  quantity_per_serving_unit: string;
  energy: number | null;
  protein: number | null; 
  carbohydrate: number | null;
  sugar: number | null;
  dietary_fiber: number | null;
  total_fat: number | null;
  saturated_fat: number | null;
  trans_fat: number | null;
  calcium: number | null;
  sodium: number | null;
}

// Eat Food Properties
export interface EatFoodProps {
  id: string;
  date: string;
  quantity: number; 
  description: string;
  energy: number | null;
  protein: number | null; 
  carbohydrate: number | null;
  dietary_fiber: number | null;
  calcium: number | null;
  sodium: number | null;
}

// Page Properties
export interface PageProps {
  items: FoodProps[];
  total: number;
  page: number;
  pagesize: number;
}

// Category Properties
export interface CategoryProps {
  id: string;
  name: string;
}

// Value Properties
export interface ValueProps {
  label: string;
  value: number | null;
  unit: string;
}

// Error Properties
export interface ErrorProps {
  error: string;
  token: string;
  user: UserProps;
  alias: string;
  mail: string;
}

// Provider Properties
export interface ProviderProps {
  children: ReactNode;
}