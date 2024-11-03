import { createContext, useEffect, useState } from "react";
import { saveToLocalStorage, removeFromLocalStorage } from "../utils";
import {
  UserContextProps,
  ProviderProps,
  ErrorProps,
  UserProps,
  TokenProps,
  ProfileProps,
  GoalProps,
} from "../types";
import { Profile, User } from "../services";
import { useNavigate } from "react-router-dom";
import { loadFromLocalStorage } from "../utils/localStorage";
import { isErrorProps } from "../utils";
import Goal from "../services/Goal";

// Create the context
export const UserContext = createContext<UserContextProps | undefined>(undefined);

export function UserProvider({ children }: ProviderProps) {
  const [error, setError] = useState<ErrorProps | null>(null);
  const [users, setUsers] = useState<UserProps[] | null>(null);
  const [token, setToken] = useState<TokenProps | null>(null);
  const [profile, setProfile] = useState<ProfileProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [goals, setGoals] = useState<GoalProps[]>([]); 
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null); // Estado do usuário
  const navigate = useNavigate();

  useEffect(() => {
    // Load user data from localStorage
    const data = loadFromLocalStorage("user");
    if (data) {
      setToken(data);
    }
    getProfile().finally(() => setLoading(false)); // Ensure loading state is managed
  }, [navigate]);

  const login = async (email: string, senha: string) => {
    const response = await User.login(email, senha);
    if (isErrorProps(response)) {
      setError(response);
    } else {
      setError(null);
      setToken(response);
      saveToLocalStorage("user", response);
      navigate("/"); // Navigate to home after login
    }
  };

  const create = async (nome: string, email: string, senha: string) => {
    const response = await User.create(nome, email, senha);
    if (isErrorProps(response)) {
      setError(response);
    } else {
      setError(null);
      setToken(response);
      saveToLocalStorage("user", response);
      navigate("/"); // Navigate to home after creating user
    }
  };

  const logout = () => {
    setError(null);
    setToken(null);
    removeFromLocalStorage("user");
    navigate("/"); // Navigate to login page after logout
  };

  const updateAlias = async (nome: string): Promise<boolean> => {
    const response = await User.updateAlias(nome);
    if (isErrorProps(response)) {
      setError(response);
      return false;
    } else {
      setError(null);
      if (token) {
        const updatedToken = { ...token, nome };
        setToken(updatedToken);
        saveToLocalStorage("user", updatedToken);
      }
      return true;
    }
  };

  const updateMail = async (email: string): Promise<boolean> => {
    const response = await User.updateMail(email);
    if (isErrorProps(response)) {
      setError(response);
      return false;
    } else {
      setError(null);
      if (token) {
        const updatedToken = { ...token, email };
        setToken(updatedToken);
        saveToLocalStorage("user", updatedToken);
      }
      return true;
    }
  };

  const updatePassword = async (senha: string): Promise<boolean> => {
    const response = await User.updatePassword(senha);
    if (isErrorProps(response)) {
      setError(response);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const saveProfile = async (birth_date: string, weight: number | null, sex: string, height:number|null): Promise<boolean> => {
    const weightToSend:any = weight !== null ? weight : 0; 
    const heightToSend:any = height !== null ? height : 0;
    const response = await Profile.save(birth_date, weightToSend, sex, heightToSend);
    if (isErrorProps(response)) {
        setError(response);
        return false;
    } else {
        setError(null);
        setProfile(response);
        return true;
    }
};


  const getProfile = async (): Promise<void> => {
    const response = await Profile.list();
    setProfile(null);
    if (!isErrorProps(response) && response.length === 1) {
      setProfile(response[0]);
    }
  };

  const deleteProfile = async (): Promise<boolean> => {
    const response = await Profile.delete();
    if (isErrorProps(response)) {
      setError(response);
      return false;
    } else {
      setError(null);
      setProfile(null);
      return true;
    }
  };

  const getUsers = async () => {
    const response = await User.list();
    if (isErrorProps(response)) {
      setError(response);
    } else {
      setError(null);
      setUsers(response);
    }
  };

  const updateRole = async (id: string, role: string): Promise<boolean> => {
    const response = await User.updateRole(id, role);
    if (!isErrorProps(response)) {
      await getUsers(); // Awaiting to ensure users are updated
      return true;
    } else {
      setError(response);
      return false;
    }
  };

  const saveGoal = async (goals: string): Promise<boolean> => {
    try {
      const response = await Goal.saveGoal(goals); // Chame o serviço para salvar a meta
      if (isErrorProps(response)) {
        setError(response); // Defina o erro se a resposta indicar um erro
        return false; // Retorne false em caso de erro
      }
      setError(null); // Limpe o erro em caso de sucesso
      return true; // Retorne true em caso de sucesso
    } catch (error) {
      setError({ error: "Erro ao salvar a meta." });
      return false; // Retorna false em caso de exceção
    }
  };
  
  // Obtém as metas
  const getGoals = async (): Promise<void> => {
    try {
      const response = await Goal.getGoals();
      if (!isErrorProps(response)) {
        // Atualize o estado com as metas recebidas
        // Supondo que você tenha um estado para as metas
        setGoals(response); // Assumindo que você tenha um estado chamado setGoals
      } else {
        setError(response);
      }
    } catch (error) {
      setError({ error: "Erro ao obter as metas." });
    }
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        loading,
        token,
        profile,
        setToken,
        users,
        login,
        logout,
        create,
        getUsers,
        updateRole,
        error,
        setError,
        updateAlias,
        updateMail,
        updatePassword,
        saveProfile,
        deleteProfile,
        saveGoal, // Função para salvar meta
        getGoals, // Função para obter metas
      }}
    >
      {children}
    </UserContext.Provider>
  );
}