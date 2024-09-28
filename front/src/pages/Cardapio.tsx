import React, { useState } from 'react';
import '../CSS/Cardapio.css';
import styled from 'styled-components';

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

const Cardapio: React.FC<MenuPrincipalProps> = ({ setPage }) => {

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex (expandedIndex === index ? null : index); // Alterna a expansão
    };

    return (
        <ContainerMenu>
      <BarraNavegacao>
        <h1>Nome de usuário</h1>
      </BarraNavegacao>
      <Sidebar>
        <SidebarContent>
          <Item onClick={() => setPage("home")}>
            <Text>Home</Text>
            <Icon>🏠</Icon>
          </Item>
          <Item onClick={() => setPage("historico")}>
            <Text>Histórico</Text>
            <Icon>🔍</Icon>
          </Item>
          <Item onClick={() => setPage("cardapio")}>
            <Text>Cardápio</Text>
            <Icon>⚙️</Icon>
          </Item>
          <Item onClick={() => setPage("metas")}>
            <Text>Metas</Text>
            <Icon>⚙️</Icon>
          </Item>
          <Item onClick={() => setPage("configuracoes")}>
            <Text>Configurações</Text>
            <Icon>⚙️</Icon>
          </Item>
        </SidebarContent>
      </Sidebar>
      <CentralContent>
        {['Café da manhã', 'Lanche da manhã', 'Almoço', 'Lanche da tarde', 'Jantar', 'Ceia', 'Pré-treino', 'Pós-treino'].map((item, index) => (
          <WhiteBox key={index} onClick={() => toggleExpand(index)}>
            <ItemContainer>
              <span>{item}</span>
              <SimboloMais>+</SimboloMais>
            </ItemContainer>
            <ExpandedContent className={expandedIndex === index ? 'expanded' : ''}>
              {expandedIndex === index && <p>Conteúdo expandido para {item}</p>}
            </ExpandedContent>
          </WhiteBox>
        ))}
      </CentralContent>
    </ContainerMenu>

    );
};
export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column; /* Organiza os elementos em coluna */
`;

export const BarraNavegacao = styled.div`
  width: 100%; /* Largura total */
  height: 80px; /* Altura da barra */
  background-color: #C9B7E6; /* Cor de fundo */
  color: #fff; /* Cor do texto */
  display: flex; /* Usar flexbox */
  justify-content: space-between; /* Alinhar itens nas extremidades */
  align-items: center; /* Centraliza verticalmente */
  padding: 0 20px; /* Espaçamento interno */
  position: fixed; /* Fixa na parte superior */
  top: 0; /* Alinha ao topo */
  left: 0; /* Alinha à esquerda */
  z-index: 1000; /* Garante que fique acima de outros elementos */
`;

export const NavLinks = styled.div`
  display: flex; /* Usar flexbox para os botões */
`;

export const NavButton = styled.button`
  background: transparent; /* Fundo transparente */
  border: none; /* Remove borda padrão */
  color: white; /* Cor do texto */
  cursor: pointer; /* Cursor em forma de ponteiro */
  margin-left: 15px; /* Espaçamento entre botões */
`;

export const Sidebar = styled.div`
  width: 100px; /* Largura inicial */
  height: calc(100% - 60px); /* Ajusta a altura da sidebar */
  background-color: #714D95;
  color: #fff;
  position: fixed; /* Fixa à esquerda */
  top: 60px; /* Alinha abaixo da barra de navegação */
  left: 0; /* Alinha à esquerda da tela */
  transition: width 0.3s;
  overflow: hidden;
  border-bottom-right-radius: 15px; /* Arredonda o canto inferior direito */

  &:hover {
    width: 200px; /* Largura ao expandir */
  }
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha à esquerda */
  justify-content: flex-start; /* Alinha ao topo */
  height: 100%; /* Para ocupar toda a altura */
  padding: 10px; /* Espaçamento interno */
`;

export const Item = styled.button`
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
  }

  &:hover::after {
    content: ''; /* Necessário para o pseudo-elemento */
    position: absolute;
    right: 0; /* Posiciona à direita do item */
    top: 0; /* Começa no topo do item */
    width: 5px; /* Largura da barra */
    height: 100%; /* Altura igual à do item */
    background-color: #21D29D; /* Cor da barra */
  }
`;

export const Icon = styled.span`
  font-size: 24px; /* Tamanho fixo para os ícones */
  margin-left: 10px; /* Espaçamento entre texto e ícone */
`;

export const Text = styled.span`
  display: none; /* Inicialmente escondido */

  ${Sidebar}:hover & {
    display: block; /* Exibe o texto ao passar o mouse */
    margin-right: 10px; /* Espaçamento entre texto e ícone */
  }
`;

export const CentralContent = styled.div`
  display: flex;
  flex-direction: column; /* Organiza em coluna */
  align-items: center; /* Centraliza horizontalmente */
  justify-content: center; /* Centraliza verticalmente */
  height: calc(100vh - 140px); /* Altura da tela menos a altura da barra de navegação e sidebar */
  margin-top: 60px; /* Espaço abaixo da barra de navegação */
`;

export const ItemContainer = styled.div`
  display: flex; /* Usar flexbox para alinhar itens */
  justify-content: space-between; /* Espaça o conteúdo */
  align-items: center; /* Centraliza verticalmente */
  width: 100%; /* Ocupa toda a largura disponível */
`;

export const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 1000px;
  overflow: hidden; /* Esconde o conteúdo que ultrapassa */
`;

export const ExpandedContent = styled.div`
  max-height: 0; /* Altura inicial (escondido) */
  overflow: hidden; /* Esconde o conteúdo que ultrapassa */
  background-color: #fff; /* Cor de fundo */
  padding: 0; /* Inicialmente sem padding */
  border-radius: 5px; /* Bordas arredondadas */
  transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out; /* Transições suaves */

  &.expanded {
    max-height: 150px; /* Ajuste para a altura máxima quando expandido */
    padding: 10px; /* Espaçamento interno quando expandido */
  }
`;

export const SimboloMais = styled.span`
  font-size: 24px; /* Tamanho do símbolo */
  margin-left: 10px; /* Espaçamento entre o texto e o símbolo */
`;

export default Cardapio;
