import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useUser } from "../hooks";
import { Link } from "react-router-dom";
import { Icon } from "../styled/styled_Main";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";

export default function AdmMenu() {
  const { token, logout } = useUser();

  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Alterna entre claro e escuro
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Adiciona o listener para fechar o menu ao clicar fora
    document.addEventListener("mousedown", handleClickOutside);

    // Aplica o tema baseado no estado
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDarkMode]);  // O tema é alterado sempre que isDarkMode mudar

  const handleLogout = () => {
    setIsOpen(false);
    logout();
  };

  return (
    <Wrapper ref={menuRef}>
      <UserIcon onClick={toggleMenu}>
        {token?.nome ? token.nome.charAt(0).toUpperCase() : "?"}
      </UserIcon>
      {isOpen && (
        <DropdownMenu>
          <StyledLink to="#" onClick={() => { toggleTheme(); setIsOpen(false); }}>
            Tema: {isDarkMode ? "Escuro" : "Claro"}
            <Icon>
              <IonIcon icon={isDarkMode ? Icons.moon : Icons.sunny} />
            </Icon>
          </StyledLink>
          <StyledLink to="/atualizar" onClick={() => setIsOpen(false)}>
          Editar Informações de Usuário
            <Icon>
              <IonIcon icon={Icons.person} />
            </Icon>{" "}
            
          </StyledLink>
          <StyledLink to="/sobre" onClick={() => setIsOpen(false)}>
          Sobre
            <Icon>
              <IonIcon icon={Icons.informationCircle} />
            </Icon>
            
          </StyledLink>
          <MenuItemBorderTop onClick={handleLogout}>
          Sair
            <Icon>
              <IonIcon icon={Icons.logOut} />
            </Icon>
           
          </MenuItemBorderTop>
        </DropdownMenu>
      )}
    </Wrapper>
  );
}

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
  margin-right: 80px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 20px;
  top: 50px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  box-sizing: border-box;
  width: max-content; /* Ajusta a largura ao conteúdo */
  z-index: 10;
`;

const MenuItem = styled.div`
  display: flex;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  color: #551a8b;

  &:hover {
    background-color: #c0bfc2;
  }
`;

const MenuItemBorderTop = styled(MenuItem)`
  border-top: 1px solid #ccc;
`;

const StyledLink = styled(Link)`
  display: flex;
  padding: 10px 20px;
  text-decoration: none; /* Removes the underline */
  cursor: pointer;

  &:hover {
    background-color: #c0bfc2;
  }
`;