import React, { useState } from "react";
import MealChart from "../components/MealChart";
import imgLogoSemFundo from "../logo/img-logo-semfundo.png";
import styled_Home from "../styled/styled_Home";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

const {
  ImageContainer,
  HomeBody,
  ContainerMenu,
  BarraNavegacao,
  Sidebar,
  SidebarContent,
  Item,
  Text,
  Icon,
  HomeContainer,
  InfoBox,
  WhiteBox,
  MealInfo,
  MealType,
  MealTime,
  MealItems,
  EditButton,
} = styled_Home();

type MealItem =
  | "150g de frango grelhado"
  | "1 colher de arroz integral"
  | "25g de brócolis"
  | "salada verde com azeite de oliva";

const caloriasPorItem: Record<MealItem, number> = {
  "150g de frango grelhado": 300,
  "1 colher de arroz integral": 80,
  "25g de brócolis": 10,
  "salada verde com azeite de oliva": 50,
};

const Home: React.FC = () => {
  const navigate = useNavigate(); // Inicializar o hook useNavigate

  const items: MealItem[] = Object.keys(caloriasPorItem) as MealItem[]; // Fazer a conversão

  // Função recursiva para calcular calorias
  const calcularCalorias = (items: MealItem[], index: number): number => {
    if (index < 0) return 0; // Caso base: se o índice é menor que 0, retorne 0
    return caloriasPorItem[items[index]] + calcularCalorias(items, index - 1); // Recursão
  };

  const totalCalorias = calcularCalorias(items, items.length - 1); // Total de calorias da refeição

  return (
    <HomeBody>
      <ContainerMenu>
        <BarraNavegacao>
          <h1>Nome de usuário</h1>
        </BarraNavegacao>

        {/* Barra lateral */}
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

        {/* Conteúdo principal com os três contêineres */}
        <HomeContainer>
          {/* Retângulo Vermelho */}
          <InfoBox className="red-box">
            <p>IMC: Grau de IMC</p>
            <p>Objetivo: Hipertrofia</p>
            <MealInfo>
              <p>Kcal indicada por dia: {totalCalorias} kcal</p>
            </MealInfo>
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
                {items.map((item, index) => (
                  <p key={index}>- {item}</p>
                ))}
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
            <div
              className="charts"
              style={{
                flex: "1",
                position: "relative",
                height: "300px",
                padding: "10px",
              }}
            >
              <MealChart />
            </div>
            <WhiteBox></WhiteBox>
          </WhiteBox>
        </HomeContainer>

        {/* Contêiner da Imagem na parte inferior direita */}
        <ImageContainer>
          <img src={imgLogoSemFundo} alt="Logo Nutritech" />
        </ImageContainer>
      </ContainerMenu>
    </HomeBody>
  );
};

export default Home;
