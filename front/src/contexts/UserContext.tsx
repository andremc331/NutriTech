import { createContext, useEffect, useState } from "react";
import { saveToLocalStorage, removeFromLocalStorage } from "../utils";
import {
  UserContextProps,
  ProviderProps,
  ErrorProps,
  UserProps,
  TokenProps,
  ProfileProps,
} from "../types";
import { Profile, User } from "../services";
import { useNavigate } from "react-router-dom";
import { loadFromLocalStorage } from "../utils/localStorage";
import { isErrorProps } from "../utils";
import user from "../services/User";

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export function UserProvider({ children }: ProviderProps) {
  const [error, setError] = useState<ErrorProps | null>(null);
  const [users, setUsers] = useState<UserProps[] | null>(null);
  const [token, setToken] = useState<TokenProps | null>(null);
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null); // Estado do usuário
  const [profile, setProfile] = useState<ProfileProps | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const data = loadFromLocalStorage("user");
    if (data) {
      setToken(data);
      setLoading(false);
    } else {
      setLoading(false);
    }
    getProfile();
  }, [navigate]);

  const login = async (mail: string, password: string) => {
    try {
      const data = await user.login(mail, password);
      if (data.token && data.user) {
        localStorage.setItem("token", data.token);
  
        // Cria um objeto TokenProps corretamente
        const tokenData: TokenProps = {
          token: data.token,
          user: {
            id: data.user.id,
            alias: data.user.alias || "", // Proteção contra undefined no alias
            mail: data.user.mail || "",   // Proteção contra undefined no mail
            role: data.user.role || "",    // Proteção contra undefined no role
          },
        };
  
        setCurrentUser(data.user); // Mantenha currentUser se necessário
        setToken(tokenData); // Atualiza o token com o objeto correto
      } else {
        throw new Error("Erro no login: token ou usuário inválido");
      }
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };
  
  const createUser = async (alias: string, mail: string, password: string) => {
    try {
      const data = await user.create(alias, mail, password);
      if (data.token && data.user) {
        localStorage.setItem("token", data.token);
  
        // Cria um objeto TokenProps corretamente
        const tokenData: TokenProps = {
          token: data.token,
          user: {
            id: data.user.id,
            alias: data.user.alias || "",
            mail: data.user.mail || "",
            role: data.user.role || "",
          },
        };
  
        setCurrentUser(data.user); // Mantenha currentUser se necessário
        setToken(tokenData); // Atualiza o token com o objeto correto
      } else {
        throw new Error("Erro na criação do usuário: token ou usuário inválido");
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  const logout = () => {
    setError(null);
    setToken(null);
    setCurrentUser(null); // Limpa o estado do usuário
    removeFromLocalStorage("user");
    navigate("/"); 
  };

  const updateAlias = async (alias: string): Promise<boolean> => {
    const response = await User.updateAlias(alias);
    if (isErrorProps(response)) {
      setError(response);
      return false;
    } else {
      setError(null);
      if (token) {
        const temp = { ...token, alias }; // Atualiza alias no token
        setToken(temp);
        saveToLocalStorage("user", temp);
      }
      return true;
    }
  };

  const updateMail = async (mail: string): Promise<boolean> => {
    const response = await User.updateMail(mail);
    if (isErrorProps(response)) {
      setError(response);
      return false;
    } else {
      setError(null);
      if (token) {
        const temp = { ...token, mail }; // Atualiza email no token
        setToken(temp);
        saveToLocalStorage("user", temp);
      }
      return true;
    }
  };

  const updatePassword = async (password: string): Promise<boolean> => {
    const response = await User.updatePassword(password);
    if (isErrorProps(response)) {
      setError(response);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const saveProfile = async (birth_date: string, weight: string, sex: string): Promise<boolean> => {
    const response = await Profile.save(birth_date, weight, sex);
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
    if (!isErrorProps(response)) {
      if (response.length === 1) {
        setProfile(response[0]);
      }
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
      getUsers();
      return true;
    } else {
      setError(response);
      return false;
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        token,
        currentUser,
        profile,
        setToken,
        users,
        login,
        logout,
        createUser,
        getUsers,
        updateRole,
        error,
        setError,
        updateAlias,
        updateMail,
        updatePassword,
        saveProfile,
        deleteProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}