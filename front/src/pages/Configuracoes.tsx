import React, { useState } from "react";
import "../CSS/Configuracoes.css";
import styled_Configuracoes from "../styled/styled_Configuracoes";
const{ ContainerMenu,BarraNavegacao,NavLinks,NavButton,Sidebar,SidebarContent,Item,Text,ContainerConfiguracoes,ContainerPerfil,ContainerNotificacoes,ContainerSeguranca,ContainerSobre}=styled_Configuracoes();

interface MenuPrincipalProps {
  setPage: (
    page:
      | "bem-vindo"
      | "cadastro"
      | "info-pessoal"
      | "definicao-metas"
      | "termosdeuso"
      | "home"
      | "cardapio"
      | "historico"
      | "metas"
      | "configuracoes"
  ) => void;
}

const Configuracoes: React.FC<MenuPrincipalProps> = ({ setPage }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Alterna a expansão
  };

  return (
    <ContainerMenu>
      <BarraNavegacao>
        <h1>Nome do usuário</h1>
        <NavLinks>
          <NavButton>Link 1</NavButton>
          <NavButton>Link 2</NavButton>
        </NavLinks>
      </BarraNavegacao>
      <Sidebar>
        <SidebarContent>
          <Item onClick={() => setPage("home")}>
            <div className="icon">🏠</div>
            <Text>Home</Text>
          </Item>
          <Item onClick={() => setPage("historico")}>
            <div className="icon">🔍</div>
            <Text>Histórico</Text>
          </Item>
          <Item onClick={() => setPage("cardapio")}>
            <div className="icon">⚙️</div>
            <Text>Cardápio</Text>
          </Item>
          <Item onClick={() => setPage("metas")}>
            <div className="icon">⚙️</div>
            <Text>Metas</Text>
          </Item>
          <Item onClick={() => setPage("configuracoes")}>
            <div className="icon">⚙️</div>
            <Text>Configurações</Text>
          </Item>
        </SidebarContent>
      </Sidebar>
      <ContainerConfiguracoes>
        <ContainerPerfil>Perfil</ContainerPerfil>
        <ContainerNotificacoes>Notificações</ContainerNotificacoes>
        <ContainerSeguranca>Segurança</ContainerSeguranca>
        <ContainerSobre>Sobre</ContainerSobre>
      </ContainerConfiguracoes>
    </ContainerMenu>
  );
};

export default Configuracoes;
