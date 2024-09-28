import React from "react";
import styled from "styled-components";
import imgLogoSemFundo from '../logo/img-logo-semfundo.png';

interface HomeProps {
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

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <ContainerMenu>
      <BarraNavegacao>
        <h1>Nome de usuário</h1>
      </BarraNavegacao>

      {/* Barra lateral */}
      <Sidebar>
        <SidebarContent>
          <Item onClick={() => setPage("home")}>
            <Text>Home</Text>
            <Icon>🏠</Icon>
          </Item>
          <Item onClick={() => setPage("cardapio")}>
            <Text>Cardápio</Text>
            <Icon>⚙️</Icon>
          </Item>
          <Item onClick={() => setPage("historico")}>
            <Text>Histórico</Text>
            <Icon>🔍</Icon>
          </Item>
          <Item onClick={() => setPage("metas")}>
            <Text>Progresso</Text>
            <Icon>⚙️</Icon>
          </Item>
          <Item onClick={() => setPage("configuracoes")}>
            <Text>Configurações</Text>
            <Icon>⚙️</Icon>
          </Item>
        </SidebarContent>
      </Sidebar>

      {/* Conteúdo principal com os três contêineres */}
      <HomeContainer>
        {/* Retângulo Vermelho */}
        <InfoBox className="red-box">
          <p>IMC: Grau de IMC</p>
          <p>Objetivo: Hipertrofia</p>
          <p>Kcal indicada por dia: 435 kcal</p>
        </InfoBox>

        {/* Retângulo Azul */}
        <InfoBox className="blue-box">
          <p>Litros de água por dia: 3L</p>
        </InfoBox>

        {/* Retângulo Branco */}
        <WhiteBox>
          <MealInfo>
            <MealType>Almoço</MealType>
            <MealTime> ⏰ Horário: 12:20</MealTime>
            <MealItems>
              <p>- 150g de frango grelhado</p>
              <p>- 1 colher de arroz integral</p>
              <p>- 25g de brócolis</p>
              <p>- salada verde com azeite de oliva</p>
            </MealItems>
          </MealInfo>
          <EditButton>
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6.99996H6C4.93913 6.99996 3.92172 7.42139 3.17157 8.17154C2.42143 8.92168 2 9.9391 2 11V39C2 40.0608 2.42143 41.0782 3.17157 41.8284C3.92172 42.5785 4.93913 43 6 43H34C35.0609 43 36.0783 42.5785 36.8284 41.8284C37.5786 41.0782 38 40.0608 38 39V25M35 3.99996C35.7956 3.20432 36.8748 2.75732 38 2.75732C39.1252 2.75732 40.2044 3.20432 41 3.99996C41.7956 4.79561 42.2426 5.87475 42.2426 6.99996C42.2426 8.12518 41.7956 9.20432 41 9.99996L22 29L14 31L16 23L35 3.99996Z"
                stroke="#ffae00"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </EditButton>
        </WhiteBox>
      </HomeContainer>

      {/* Contêiner da Imagem na parte inferior direita */}
      <ImageContainer>
      <img src={imgLogoSemFundo} alt="Descrição da Imagem" />      </ImageContainer>
    </ContainerMenu>
  );
};

const ImageContainer = styled.div`
  position: absolute; /* Posiciona de forma absoluta */
  bottom: 5px; /* Distância do fundo */
  right: 20px; /* Distância da direita */
  z-index: 999; /* Certifica-se de que a imagem fique acima de outros elementos */

  img {
    max-width: 150px; /* Ajusta o tamanho da imagem conforme necessário */
    height: auto; /* Mantém a proporção da imagem */
  }
`;

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
    }
  }
`;

const Text = styled.div`
  overflow: hidden;
`;

const Icon = styled.div`
  font-size: 24px; /* Tamanho fixo para os ícones */
  margin-left: 10px; /* Espaçamento entre texto e ícone */
  margin-right: 20px;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px; /* Adiciona espaçamento ao redor */
  margin-top: 80px; /* Espaçamento abaixo da barra de navegação */
  margin-left: 120px; /* Espaçamento para a sidebar */
`;

const InfoBox = styled.div`
  padding: 20px; /* Espaçamento interno */
  border-radius: 10px; /* Bordas arredondadas */
  color: white; /* Cor do texto */
  text-align: left; /* Alinhamento do texto à esquerda */
  width: 900px;
  height: 150px;
  font-size: 22px;

  &.red-box {
    background-color: #ff0000; /* Cor de fundo vermelha */
  }

  &.blue-box {
    background-color: #0000ff; /* Cor de fundo azul */
    padding: 20px; /* Espaçamento interno */
    display: flex;
    justify-content: flex-start; /* Alinha os itens à esquerda horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    width: 750px;
    font-size: 30px;
  }
`;

const WhiteBox = styled.div`
  padding: 20px; /* Espaçamento interno */
  border-radius: 10px; /* Bordas arredondadas */
  background-color: #fff; /* Fundo branco */
  color: black; /* Cor do texto */
  position: relative; /* Para posicionar o botão de editar */
  width: 750px;
  height: 280px;
  margin-top: 20px;
`;

const MealInfo = styled.div`
  margin-bottom: 20px; /* Espaçamento entre informações da refeição */
`;

const MealType = styled.h3`
  text-align: start;
  font-size: 27px;
  position: initial;
  margin-top: 0px;
`; // Adiciona estilo ao título da refeição

const MealTime = styled.p`
  font-family: Aldrich;
`; // Adiciona estilo ao horário

const MealItems = styled.div`
  font-family: Aldrich;
  font-size: 20px;
  line-height: 0.75;
`; // Adiciona estilo aos itens da refeição

const EditButton = styled.button`
  background: transparent; /* Fundo transparente */
  border: none; /* Remove borda padrão */
  cursor: pointer; /* Cursor em forma de ponteiro */
  position: start; /* Para posicionar no canto inferior direito */

  svg {
    fill: #000; /* Cor do ícone SVG */
  }
`;

export default Home;
