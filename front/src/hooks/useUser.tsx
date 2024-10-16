import { useState, useContext, createContext, ReactNode } from "react";
import user from "../services/User"; // Importando o serviço
import { TokenProps, UserProps, ErrorProps, ProviderProps } from "../types/index";

// Definindo o contexto do usuário
const UserContext = createContext<UserContextType | null>(null);

// Tipo para o contexto do usuário
interface UserContextType {
  currentUser: UserProps | null;
  login: (mail: string, password: string) => Promise<void>;
  createUser: (alias: string, mail: string, password: string) => Promise<void>;
  logout: () => void;
  updateAlias: (alias: string) => Promise<void>;
  updateMail: (mail: string) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
}

// Hook para usar o contexto do usuário
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("O hook useUser deve ser usado dentro de UserProvider");
  }
  return context;
}

// Provider para envolver a aplicação e fornecer o contexto do usuário
export function UserProvider({ children }: ProviderProps) {
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null);

  const login = async (mail: string, password: string) => {
    try {
      const data: TokenProps = await user.login(mail, password);
      if ('token' in data && 'user' in data) {
        localStorage.setItem("token", data.token);
        setCurrentUser(data.user);
      } else {
        throw new Error("Erro no login");
      }
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  const createUser = async (alias: string, mail: string, password: string) => {
    try {
      const data = await user.create(alias, mail, password);
      if ('token' in data) {
        localStorage.setItem("token", data.token);
        setCurrentUser(data.user);
      } else {
        throw new Error("Erro na criação do usuário");
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
  };

  const updateAlias = async (alias: string) => {
    try {
      const updatedUser = await user.updateAlias(alias);
      if (!("error" in updatedUser)) {
        setCurrentUser(updatedUser);
      }
    } catch (error) {
      console.error("Erro ao atualizar o alias:", error);
    }
  };

  const updateMail = async (mail: string) => {
    try {
      const updatedUser = await user.updateMail(mail);
      if (!("error" in updatedUser)) {
        setCurrentUser(updatedUser);
      }
    } catch (error) {
      console.error("Erro ao atualizar o email:", error);
    }
  };

  const updatePassword = async (password: string) => {
    try {
      const updatedUser = await user.updatePassword(password);
      if (!("error" in updatedUser)) {
        setCurrentUser(updatedUser);
      }
    } catch (error) {
      console.error("Erro ao atualizar a senha:", error);
    }
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}