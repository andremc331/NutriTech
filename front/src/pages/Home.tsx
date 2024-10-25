import React, { useState } from "react";
import MealChart from "../components/MealChart";
import imgLogoSemFundo from "../logo/img-logo-semfundo.png";
import {
  ContainerMenu,
  Navbar,
  Sidebar,
  SidebarContent,
  Text,
  Icon,
  Item,
  Footer,
  ImgIcon,
} from "../styled/styled_Main";
import imcimg from "../logo/imcimg.png";
import waterimg from "../logo/waterimg.png";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import styled_Home from "../styled/styled_Home";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { AdmMenu } from "../components";
import { UserProvider } from "../contexts";

const {
  HomeContainer,
  InfoBoxContainer,
  InfoBox,
  WhiteBox,
  MealInfo,
  MealType,
  MealTime,
  MealItems,
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
    <ContainerMenu>
      <Navbar>
        <h1>Nome de usuário</h1>
        <UserProvider>
          <AdmMenu />
          {/* Conteúdo da página de administração */}
        </UserProvider>
      </Navbar>

      {/* Barra lateral */}
      <Sidebar>
        <SidebarContent>
          <Item onClick={() => navigate("/home")}>
            <Text>Home</Text>
            <Icon>
              <IonIcon icon={Icons.home} />
            </Icon>
          </Item>
          <Item onClick={() => navigate("/cardapio")}>
            <Text>Cardápio</Text>
            <Icon>
              <IonIcon icon={Icons.restaurant} />
            </Icon>
          </Item>
          <Item onClick={() => navigate("/historico")}>
            <Text>Histórico</Text>
            <Icon>
              <IonIcon icon={Icons.nutrition} />
            </Icon>
          </Item>
          <Item onClick={() => navigate("/metas")}>
            <Text>Progresso</Text>
            <Icon>
              <IonIcon icon={Icons.fitness} />
            </Icon>
          </Item>
        </SidebarContent>
      </Sidebar>

      {/* Conteúdo principal com os três contêineres */}
      <HomeContainer>
        <InfoBoxContainer>
          <InfoBox className="red-box">
            <img src={imcimg} />
            <div className="content">
              <div className="pair">
                <label>IMC: </label>
                <input type="text" placeholder="20,5" />
              </div>
              <div className="pair">
                <label>Grau de IMC: </label>
                <input type="text" placeholder="Peso ideal" />
              </div>
              <div className="pair">
                <label>Objetivo: </label>
                <input type="text" placeholder="Hipertrofia" />
              </div>
              <MealInfo>
                <label>Kcal indicada por dia: </label>
                {totalCalorias}
              </MealInfo>
            </div>
          </InfoBox>

          <InfoBox className="blue-box">
            <img src={waterimg} />
            <div className="content">
              <div className="pair">
                <label>Litros de água por dia: </label>
                <input type="text" placeholder="3 L" />
              </div>
            </div>
          </InfoBox>
        </InfoBoxContainer>

        <WhiteBox>
          <MealInfo>
            <MealType>Almoço</MealType>
            <MealTime> ⏰ Horário: 12:20</MealTime>
            <MealItems>
              {items.map((item, index) => (
                <p key={index}>- {item}</p>
              ))}
            </MealItems>
            <Icon>
              <IonIcon icon={Icons.create} />
            </Icon>
            <MealChart />
          </MealInfo>
        </WhiteBox>
      </HomeContainer>

      <Footer>
        <div>
          Copyright © 2024 / 2025 | HighTech
          <br />
          Todos os direitos reservados
        </div>
        {/* Contêiner da Imagem na parte inferior direita */}
        <ImgIcon>
          <img src={imgLogoSemFundo} alt="Logo Nutritech" />
        </ImgIcon>
      </Footer>
    </ContainerMenu>
  );
};

export default Home;