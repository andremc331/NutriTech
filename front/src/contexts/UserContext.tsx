import { createContext, useContext, useEffect, useState } from "react";
import user from "../services/User"; // Importando o serviço
import { TokenProps, UserProps, ErrorProps, ProviderProps, UserResponse } from "../types";
import { saveToLocalStorage, removeFromLocalStorage } from "../utils/localStorage";
import { isErrorProps } from "../utils/isError";

const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
};

export interface UserContextType {
  currentUser: UserProps | null;
  login: (mail: string, password: string) => Promise<void>;
  createUser: (alias: string, mail: string, password: string) => Promise<void>;
  logout: () => void;
  updateAlias: (alias: string) => Promise<void>;
  updateMail: (mail: string) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
  token: () => string | null;
}

export function UserProvider({ children }: ProviderProps) {
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<ErrorProps | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");
    if (storedToken) {
      setCurrentUser(JSON.parse(storedToken).user);
    }
  }, []);

  const login = async (mail: string, password: string) => {
    try {
      const data: UserResponse = await user.login(mail, password);
      if (data && data.token) {
        saveToLocalStorage("userToken", data); // Salva o token completo
        setCurrentUser(data.user);
      } else {
        throw new Error("Erro inesperado no login: Token ou usuário inválido.");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      setError(error as ErrorProps); // Define o erro
    }
  };

  const createUser = async (alias: string, mail: string, password: string) => {
    try {
      const data: UserResponse = await user.create(alias, mail, password);
      if (data && data.token) {
        saveToLocalStorage("userToken", data);
        setCurrentUser(data.user);
      } else {
        throw new Error("Erro na criação do usuário: Token ou usuário inválido.");
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      setError(error as ErrorProps); // Define o erro
    }
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    setCurrentUser(null);
  };

  const updateAlias = async (alias: string) => {
    try {
      const updatedUser = await user.updateAlias(alias);
      if (updatedUser && 'id' in updatedUser) {
        setCurrentUser(updatedUser);
      } else {
        throw new Error("Erro ao atualizar o alias");
      }
    } catch (error) {
      console.error("Erro ao atualizar o alias:", error);
      setError(error as ErrorProps); // Define o erro
    }
  };

  const updateMail = async (mail: string) => {
    try {
      const updatedUser = await user.updateMail(mail);
      if (updatedUser && 'id' in updatedUser) {
        setCurrentUser(updatedUser);
      } else {
        throw new Error(updatedUser.error || "Erro ao atualizar o email");
      }
    } catch (error) {
      console.error("Erro ao atualizar o email:", error);
      setError(error as ErrorProps); // Define o erro
    }
  };

  const updatePassword = async (password: string) => {
    try {
      const updatedUser = await user.updatePassword(password);
      if (updatedUser && 'id' in updatedUser) {
        setCurrentUser(updatedUser);
      } else {
        throw new Error(updatedUser.error || "Erro ao atualizar a senha");
      }
    } catch (error) {
      console.error("Erro ao atualizar a senha:", error);
      setError(error as ErrorProps); // Define o erro
    }
  };

  // Função para obter o token
  const token = (): string | null => {
    const storedToken = localStorage.getItem("userToken");
    return storedToken ? JSON.parse(storedToken).token : null; // Certifique-se de que o valor é uma string ou `null`
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        login,
        createUser,
        logout,
        updateAlias,
        updateMail,
        updatePassword,
        token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}