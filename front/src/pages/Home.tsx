import React from "react";
import imgLogoSemFundo from '../logo/img-logo-semfundo.png';
import styled_Home from "../styled/styled_Home";
const{
  ImageContainer,
  ContainerMenu,
  BarraNavegacao,
  Sidebar,
  SidebarContent,
  Item,
  Text,
  Icon,
  HomeContainer,
  InfoBox,
  WhiteBox ,
  MealInfo,
  MealType,
  MealTime,
  MealItems,
  EditButton}=styled_Home()

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
export default Home;
