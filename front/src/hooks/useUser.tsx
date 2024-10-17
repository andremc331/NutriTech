import { useState, useContext, createContext, ReactNode } from "react";
import user from "../services/User"; // Importando o serviço
import { TokenProps, UserProps, ErrorProps, ProviderProps, UserResponse } from "../types/index";
import { saveToLocalStorage } from "../utils/localStorage";

// Definindo o contexto do usuário
const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
};

// Tipo para o contexto do usuário
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

// Provider para envolver a aplicação e fornecer o contexto do usuário
export function UserProvider({ children }: ProviderProps) {
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null);

  
const login = async (mail: string, password: string) => {
  try {
    const data: UserResponse = await user.login(mail, password);

    if (data && 'token' in data && data.token && data.user) {
      // Certifique-se de que 'role' está presente no objeto user
      const tokenData: TokenProps = {
        token: data.token,
        user: {
          id: data.user.id,
          alias: data.user.alias,
          mail: data.user.mail,
          role: data.user.role || "defaultRole", // Adiciona uma role padrão se não estiver definida
        },
      };

      // Salvando no localStorage
      saveToLocalStorage("userToken", tokenData);

      setCurrentUser(tokenData.user); // Define o usuário completo com 'role'
    } else {
      throw new Error("Erro inesperado no login: Token ou usuário inválido.");
    }
  } catch (error) {
    console.error("Erro no login:", error);
  }
};

const createUser = async (alias: string, mail: string, password: string) => {
  try {
    const data = await user.create(alias, mail, password);

    if (data && 'token' in data && data.token && data.user) {
      const tokenData: TokenProps = {
        token: data.token,
        user: {
          id: data.user.id,
          alias: data.user.alias,
          mail: data.user.mail,
          role: data.user.role || "defaultRole",
        },
      };

      // Salvando no localStorage
      saveToLocalStorage("userToken", tokenData);

      setCurrentUser(tokenData.user); // Define o usuário completo com 'role'
    } else {
      throw new Error("Erro na criação do usuário: Token ou usuário inválido.");
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
      
      // Verifique se updatedUser está definido antes de tentar definir o estado
      if (updatedUser && 'id' in updatedUser) {
        setCurrentUser(updatedUser);  // Somente define se o usuário está definido
      } else {
        throw new Error("Erro ao atualizar o alias");
      }
    } catch (error) {
      console.error("Erro ao atualizar o alias:", error);
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
    }
  };

  // Função para obter o token
  const token = (): string | null => {
    const storedToken = localStorage.getItem("token");
    return storedToken ? storedToken : null;  // Certifique-se de que o valor é uma string ou `null`
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