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

//export const UserContext = createContext({} as UserContextProps);
export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export function UserProvider({ children }: ProviderProps) {
  const [error, setError] = useState<ErrorProps | null>(null);
  const [users, setUsers] = useState<UserProps[] | null>(null);
  const [token, setToken] = useState<TokenProps | null>(null);
  const [profile, setProfile] = useState<ProfileProps | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Carrega as propriedades se elas estiverem salvas no localStorage
    const data = loadFromLocalStorage("user");
    if (data) {
      setToken(data);
      setLoading(false);
    } else {
      setLoading(false);
    }
    getProfile();
  }, [navigate]); // Dependência vazia para garantir que seja executado apenas na montagem

  const login = async (mail: string, password: string) => {
    try {
      const data = await user.login(mail, password);
      if ('token' in data && 'user' in data) {  // Verifica se tanto o token quanto o user estão presentes
        localStorage.setItem("token", data.token); // Armazena o token localmente
        setCurrentUser(data.user); // Atualiza o estado com o usuário logado
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
      if ('token' in data && 'user' in data) {  // Verifica se tanto o token quanto o user estão presentes
        localStorage.setItem("token", data.token); // Armazena o token localmente
        setCurrentUser(data.user); // Atualiza o estado com o novo usuário
      } else {
        throw new Error("Erro na criação do usuário");
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  const logout = () => {
    setError(null);
    setToken(null);
    removeFromLocalStorage("user");
    navigate("/"); // Navega para a página de login após o logout
  };

  const updateAlias = async (alias: string): Promise<boolean> => {
    const response = await User.updateAlias(alias);

    if (isErrorProps(response)) {
      setError(response);
      return false;
    } else {
      setError(null);
      if (token) {
        const temp = { ...token };
        temp.alias = alias;
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
        const temp = { ...token };
        temp.mail = mail;
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

  const saveProfile = async (birth_date:string, weight:string, sex:string): Promise<boolean> => {
    const response = await Profile.save(birth_date,weight,sex);

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
      if( response.length === 1 ){
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
    /*
    perfil de administardor, para listar os usuários e trocar o perfil para adm/user
    */
    const response = await User.list();
    if (isErrorProps(response)) {
      setError(response);
    } else {
      setError(null);
      setUsers(response);
    }
  };

  const updateRole = async (id: string, role: string): Promise<boolean> => {
    /*
    perfil de administardor, para alterar usuário para adm/user
    */
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
function setCurrentUser(user: unknown) {
  throw new Error("Function not implemented.");
}

