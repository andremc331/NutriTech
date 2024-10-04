import React, { useState } from "react";
import styled_Configuracoes from "../styled/styled_Configuracoes";
import { useNavigate } from "react-router-dom"; // Importa o useNavigate

const {
  ContainerMenu,
  BarraNavegacao,
  Sidebar,
  SidebarContent,
  Item,
  Text,
  ContainerConfiguracoes,
  ContainerPerfil,
  ContainerNotificacoes,
  ContainerSeguranca,
  ContainerSobre,
} = styled_Configuracoes();

const Configuracoes: React.FC = () => {
  const navigate = useNavigate(); // Inicializa o useNavigate
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Alterna a expansão
  };

  return (
    <ContainerMenu>
      <BarraNavegacao>
        <h1>Nome do usuário</h1>
      </BarraNavegacao>
      <Sidebar>
        <SidebarContent>
          <Item onClick={() => navigate("/home")}>
            <div className="icon">🏠</div>
            <Text>Home</Text>
          </Item>
          <Item onClick={() => navigate("/historico")}>
            <div className="icon">🔍</div>
            <Text>Histórico</Text>
          </Item>
          <Item onClick={() => navigate("/cardapio")}>
            <div className="icon">⚙️</div>
            <Text>Cardápio</Text>
          </Item>
          <Item onClick={() => navigate("/metas")}>
            <div className="icon">⚙️</div>
            <Text>Metas</Text>
          </Item>
          <Item onClick={() => navigate("/configuracoes")}>
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