import { ReactNode } from "react";
 
export interface UserContextProps {
  fetchWeightAndHeight: () => Promise<{ weight: number; height: number }>;
  currentUser: UserProps | null;
  loading: boolean;
  token: TokenProps | null;
  profile: ProfileProps | null;
  setToken: React.Dispatch<React.SetStateAction<TokenProps | null>>;
  users: UserProps[] | null;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => void;
  create: (nome: string, email: string, senha: string) => Promise<void>;
  getUsers: () => Promise<void>;
  updateRole: (id: string, role: string) => Promise<boolean>;
  error: ErrorProps | null;
  setError: React.Dispatch<React.SetStateAction<ErrorProps | null>>;
  updateAlias: (nome: string) => Promise<boolean>;
  updateMail: (email: string) => Promise<boolean>;
  updatePassword: (senha: string) => Promise<boolean>;
  saveProfile: (birth_date: string, weight: number | null, sex: string, height: number | null) => Promise<boolean>;
  deleteProfile: () => Promise<boolean>;
  saveGoal: (goals: string) => Promise<boolean>;
  getGoals: () => Promise<GoalProps[]>;
  getCurrentUserName: () => void;  // Adicionando a função aqui
  updateWeight: (weight: number) => Promise<boolean>;
}
 
export interface ConsumeChartProps {
  data: HistoricoData[];
}
 
export interface FoodContextProps {
  pageFoods: PageProps | null;
  food: FoodNutrientsProps | null;
  error: ErrorProps | null;
  getFoodsByPage: (page: number) => Promise<void>;
  search: (term: string) => Promise<void>;
  getById: (id: string) => Promise<void>;
  setError: (error: ErrorProps | null) => void;
}
 
 
export interface FoodProps {
  id: string;
  description: string;
}
 
export interface Meal {
  id: string;
  foodName: string;
  quantity: number;
  date: string;
  userId: string;
  food_name: string;
  foodGroup:string;
}
 
export interface RefeicaoProps {
  id: string;
  foodName: string;
  quantity: number;
  date: string;
  userId: string;
  food_name: string;
}
 
// export interface userGoal {
//   userGoal: GoalProps[]
// }
 
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
 
export interface ProductContextProps {
  products: ProductNutrientsProps[];
  error: ErrorProps | null;
  setError: (value: ErrorProps | null) => void;
  create: (
    description: string,
    serving_size: number,
    serving_size_unit: string,
    quantity_per_serving: number,
    quantity_per_serving_unit: string,
    energy: number | null,
    protein: number | null,
    carbohydrate: number | null,
    sugar: number | null,
    dietary_fiber: number | null,
    total_fat: number | null,
    saturated_fat: number | null,
    trans_fat: number | null,
    calcium: number | null,
    sodium: number | null
  ) => Promise<boolean>;
  update: (
    id: string,
    description: string,
    serving_size: number,
    serving_size_unit: string,
    quantity_per_serving: number,
    quantity_per_serving_unit: string,
    energy: number | null,
    protein: number | null,
    carbohydrate: number | null,
    sugar: number | null,
    dietary_fiber: number | null,
    total_fat: number | null,
    saturated_fat: number | null,
    trans_fat: number | null,
    calcium: number | null,
    sodium: number | null
  ) => Promise<boolean>;
  remove: (id:string) => Promise<boolean>;
  search: (term:string) => Promise<ProductNutrientsProps[]>;
}
 
export interface EatContextProps {
  eatProducts: EatProductProps[];
  eatFoods: EatFoodProps[];
  products: ProductNutrientsProps[];
  foods: FoodProps[];
  error: ErrorProps | null;
  setError: (value: ErrorProps | null) => void;
  createProduct: (product:string, date:string, quantity:number) => Promise<boolean>;
  createFood: (food:string, date:string, quantity:number) => Promise<boolean>;
  removeProduct: (id:string) => Promise<boolean>;
  removeFood: (id:string) => Promise<boolean>;
  date: Date | null;
  setDate: (value:Date | null) => void;
  searchFood: (term:string) => Promise<boolean>;
  searchProduct: (term:string) => Promise<boolean>;
  getHistoricoWithFoodName: () => Promise<Meal[]>; // Altere para retornar Meal[]
  getHistoricoByDate: (startDate: string, endDate: string) => Promise<Meal[]>;
  getHistoricoByUser: (userId: string) => Promise<Meal[]>;
  historicoData: Meal[] | null; // Atualize aqui para usar Meal[]
}
 
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
 
export interface Food {
  id: string;
  description: string;
  foodGroup: string;
  quantity: number;
  date: string;
  food_name: string
}

export interface PageProps {
  items: Food[];
  total: number;
  page: number;
  pagesize: number;
  map: any;
}
 
export interface CategoryProps {
  id: string;
  name: string;
}
 
export interface ValueProps {
  label: string;
  value: number | null;
  unit: string;
}
 
export interface ErrorProps {
  error: string;
}
 
export interface ProviderProps {
  children: ReactNode;
}
 
export interface UserProps {
  id: string;
  nome: string;
  email: string;
  role: string;
}
 
export interface GoalProps {
  id: number;
  goals: string;
}
 
export interface TokenProps extends UserProps {
  token: string;
}
 
export interface ProfileProps {
  birth_date: string;
  weight: number;
  sex: string;
  height: number;
}
 
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
  category:string;
  foodGroup:string;
}
export interface HistoricoData {
  id: string;
  food_name: string;
  quantity: number;
  date: string;
  foodGroup:string
}
export interface HistoricoData {
  id: string;
  food_name: string;
  foodGroup:string;
  quantity: number;
  date: string;
}
export interface ErrorProps {
  error: string;
}
 
// Defina o tipo MealItem
export type MealItem = {
  id: number;
  nome: string;
  calorias: number; // ou 'kcal', dependendo da sua estrutura
};
 