import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Definindo a interface User
interface User {
  id: string;
  alias: string;
  email: string;
}

// Definindo o tipo do token
interface Token {
  alias: string; // Supondo que o token tenha uma propriedade 'alias'
}

interface UserContextType {
  token: User | null;  // token será um objeto User ou null
}

// Exemplo de uso do useUser
const useUser = (): UserContextType => {
  const [token, setToken] = useState<User | null>(null);

  const logout = () => {
    // lógica de logout
  };

  return { token, logout };
};

// Componente User que integra criação de usuário e menu
export default function User() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [token, setToken] = useState<Token | null>(null); // Estado do token tipado corretamente
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Função para criação de usuário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3011/usuarios', {
        nome,
        email,
        senha,
      });
      console.log('Usuário criado:', response.data);
      setToken(response.data); // Supondo que o backend retorna um token com o alias do usuário
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  const handleLogout = () => {
    setIsOpen(false);
    setToken(null); // Limpa o token para simular o logout
  };

  // Renderiza o formulário de criação de usuário caso não haja um token (usuário não logado)
  if (!token) {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Criar Usuário</button>
      </form>
    );
  }

  // Renderiza o menu do usuário se o token existir (usuário logado)
  return (
    <Wrapper ref={menuRef}>
      <UserIcon onClick={toggleMenu}>{token.alias.charAt(0).toUpperCase() || nome.charAt(0).toUpperCase()}</UserIcon>
      {isOpen && (
        <DropdownMenu>
          <StyledLink to="/eat" onClick={() => setIsOpen(false)}>
            Consumos diários
          </StyledLink>
          <StyledLinkBorderTop to="/foods" onClick={() => setIsOpen(false)}>
            Alimentos
          </StyledLinkBorderTop>
          <StyledLink to="/products" onClick={() => setIsOpen(false)}>
            Produtos
          </StyledLink>
          <StyledLinkBorderTop to="/profile" onClick={() => setIsOpen(false)}>
            Perfil
          </StyledLinkBorderTop>
          <StyledLink to="/settings" onClick={() => setIsOpen(false)}>
            Configurações
          </StyledLink>
          <MenuItemBorderTop onClick={handleLogout}>
            Sair
          </MenuItemBorderTop>
        </DropdownMenu>
      )}
    </Wrapper>
  );
}

// Estilos (Styled Components)
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e48226;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 50px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  box-sizing: border-box;
  width: max-content;
  z-index: 10;
`;

const MenuItem = styled.div`
  display: flex;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const MenuItemBorderTop = styled(MenuItem)`
  border-top: 1px solid #ccc;
`;

const StyledLink = styled(Link)`
  display: flex;
  padding: 10px 20px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const StyledLinkBorderTop = styled(StyledLink)`
  border-top: 1px solid #ccc;
`;