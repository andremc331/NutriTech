import React, { useState } from "react";
import styled from "styled-components"; // Importando styled
// import styled_Configuracoes from '../styled/styled_Configuracoes';
import { useNavigate } from "react-router-dom"; // Importa o useNavigate
import { AdmMenu } from "../components";
import { UserProvider } from "../contexts";

const ContainerMenu = styled.div`
display: flex;
flex-direction: column; /* Organiza os elementos em coluna */
`;

const BarraNavegacao = styled.div`
width: 100%; /* Largura total */
height: 80px; /* Altura da barra */
background-color: #c9b7e6; /* Cor de fundo */
color: #ffffff; /* Cor do texto */
display: flex; /* Usar flexbox */
justify-content: space-between; /* Alinhar itens nas extremidades */
align-items: center; /* Centraliza verticalmente */
padding: 0 20px; /* Espaçamento interno */
position: fixed; /* Fixa na parte superior */
top: 0; /* Alinha ao topo */
left: 0; /* Alinha à esquerda */
z-index: 1000; /* Garante que fique acima de outros elementos */
`;

const Sidebar = styled.div`
width: 100px; /* Largura inicial */
height: calc(100% - 60px); /* Ajusta a altura da sidebar */
background-color: #714d95;
color: #ffffff;
position: fixed; /* Fixa à esquerda */
top: 60px; /* Alinha abaixo da barra de navegação */
left: 0; /* Alinha à esquerda da tela */
transition: width 0.3s;
overflow: hidden;
border-bottom-right-radius: 15px; /* Arredonda o canto inferior direito */

&:hover {
  width: 270px; /* Largura ao expandir */
}
`;

const SidebarContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start; /* Alinha à esquerda */
justify-content: flex-start; /* Alinha ao topo */
height: 100%; /* Para ocupar toda a altura */
padding: 10px; /* Espaçamento interno */
`;

const Item = styled.button`
display: flex;
align-items: center; /* Alinha verticalmente */
width: 100%; /* Para ocupar toda a largura */
margin: 15px 0; /* Espaçamento entre itens */
padding: 10px; /* Ajustado para aumentar a área clicável */
position: relative; /* Para posicionar o pseudo-elemento */
transition: background-color 0.3s; /* Transição suave para a cor de fundo */
border-radius: 5px; /* Bordas arredondadas nos itens */
background: transparent; /* Fundo transparente */
border: none; /* Remove borda padrão de botões */
color: white; /* Cor do texto */
cursor: pointer; /* Cursor em forma de ponteiro */

&:hover {
  background-color: #947cc7; /* Cor de fundo ao passar o mouse */

  &::after {
    content: ""; /* Necessário para o pseudo-elemento */
    position: absolute;
    right: 0; /* Posiciona à direita do item */
    top: 0; /* Começa no topo do item */
    width: 5px; /* Largura da barra */
    height: 100%; /* Altura igual à do item */
    background-color: #21d29d; /* Cor da barra */
    font-size: 90px;

  }
}
`;

const Text = styled.div`
font-size: 20px;
overflow: hidden;
`;

const Icon = styled.div`
font-size: 24px; /* Tamanho fixo para os ícones */
margin-left: 10px; /* Espaçamento entre texto e ícone */
margin-right: 20px;
`;

const ContainerConfiguracoes = styled.div`
  flex: 2;
  padding: 100px;
  margin-top: 10%;
`;

const ContainerPerfil = styled.div`
  margin-bottom: 20px;
  background: #fff;
  padding: 15px;
  border: 1px solid #ccc;
`;

const ContainerNotificacoes = styled.div`
  margin-bottom: 20px;
  background: #fff;
  padding: 15px;
  border: 1px solid #ccc;
`;

const ContainerSeguranca = styled.div`
  margin-bottom: 20px;
  background: #fff;
  padding: 15px;
  border: 1px solid #ccc;
`;

const ContainerSobre = styled.div`
  margin-bottom: 20px;
  background: #fff;
  padding: 15px;
  border: 1px solid #ccc;
`;

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
        <UserProvider>
            <AdmMenu />
            {/* Conteúdo da página de administração */}
          </UserProvider>
      </BarraNavegacao>
      <Sidebar>
        <SidebarContent>
        <Item onClick={() => navigate("/home")}>
              <Text>Home</Text>
              <Icon>🏠</Icon>
            </Item>
            <Item onClick={() => navigate("/cardapio")}>
              <Text>Cardápio</Text>
              <Icon>⚙️</Icon>
            </Item>
            <Item onClick={() => navigate("/historico")}>
              <Text>Histórico</Text>
              <Icon>🔍</Icon>
            </Item>
            <Item onClick={() => navigate("/metas")}>
              <Text>Progresso</Text>
              <Icon>⚙️</Icon>
            </Item>
            <Item onClick={() => navigate("/configuracoes")}>
              <Text>Configurações</Text>
              <Icon>⚙️</Icon>
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
