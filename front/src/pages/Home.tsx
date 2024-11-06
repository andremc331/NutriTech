import React, { useContext, useEffect, useState } from "react";
import MealChart from "../components/MealChart";
import imgLogoSemFundo from "../assets/img-logo-semfundo.png";
import { ContainerBody, ContainerMenu, Navbar, Sidebar, SidebarContent, Icon, Item, Footer, ImgIcon } from "../styled/styled_Main";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import styled_Home from "../styled/styled_Home";
import { useNavigate } from "react-router-dom";
import { AdmMenu } from "../components";
import { UserContext, UserProvider } from "../contexts";
import { GoalProps, UserContextProps } from "../types";

const {
  InfoBox1,
  InfoBox2,
  FoodBox,
  MealInfo,
  MealKcal,
  MealType,
  Mealtime,
  MealItems,
  ChartContainer,
  FoodBoxContainer,
  MealTimeContainer,
  MealTypeContainer,
  InfoBoxContainer,
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
  const navigate = useNavigate();
  const items: MealItem[] = Object.keys(caloriasPorItem) as MealItem[];

  const [pesoPessoa, setPesoPessoa] = useState<number>(0);
  const [alturaPessoa, setAlturaPessoa] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [goals, setGoals] = useState<GoalProps[]>([]); 
  const { getGoals } = useContext(UserContext) || {} as UserContextProps;
  const { fetchWeightAndHeight = async () => ({ weight: 0, height: 0 }) } = useContext(UserContext) || {} as UserContextProps;

  useEffect(() => {
    // Chama o serviço para obter peso, altura e objetivo
    const fetchData = async () => {
      const data = await fetchWeightAndHeight();
      if ("weight" in data && "height" in data) {
        setPesoPessoa(data.weight);
        setAlturaPessoa(data.height);
      }

      const userGoal = await getGoals(); // Chama a função para obter o objetivo do usuário
      setGoals(userGoal);

      setLoading(false);
    };

    fetchData();
  }, []);

  const calcularCalorias = (items: MealItem[], index: number): number => {
    if (index < 0) return 0;
    return caloriasPorItem[items[index]] + calcularCalorias(items, index - 1);
  };
  const totalCalorias = calcularCalorias(items, items.length - 1);

  const calcularConsumoAgua = (peso: number): string => {
    const consumo = peso * 35;
    const litros = consumo / 1000;
    return `${litros.toFixed(1).replace('.', ',')} L`;
  };

  const consumoAgua = calcularConsumoAgua(pesoPessoa);

  const calcularIMC = (peso: number, altura: number): { imc: string; grau: string } => {
    const imc = peso / (altura * altura);
    let grau = '';
    if (imc < 16) grau = 'Magreza grave';
    else if (imc < 16.9) grau = 'Magreza moderada';
    else if (imc < 18.5) grau = 'Magreza leve';
    else if (imc < 24.9) grau = 'Peso ideal';
    else if (imc < 29.9) grau = 'Sobrepeso';
    else if (imc < 34.9) grau = 'Obesidade grau I';
    else if (imc < 39.9) grau = 'Obesidade grau II';
    else grau = 'Obesidade grau III ou superior';
    return { imc: imc.toFixed(1).replace('.', ','), grau };
  };

  const resultadoIMC = calcularIMC(pesoPessoa, alturaPessoa);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <ContainerMenu>
        <Navbar>
          <h1>Nome de usuário</h1>
          <UserProvider>
            <AdmMenu />
          </UserProvider>
        </Navbar>
        <Sidebar>
          <SidebarContent>
            <Item onClick={() => navigate("/home")}>
              <Icon>
                <IonIcon icon={Icons.home} />
              </Icon>
            </Item>
            <Item onClick={() => navigate("/cardapio")}>
              <Icon>
                <IonIcon icon={Icons.restaurant} />
              </Icon>
            </Item>
            <Item onClick={() => navigate("/historico")}>
              <Icon>
                <IonIcon icon={Icons.nutrition} />
              </Icon>
            </Item>
            <Item onClick={() => navigate("/metas")}>
              <Icon>
                <IonIcon icon={Icons.fitness} />
              </Icon>
            </Item>
          </SidebarContent>
        </Sidebar>
      </ContainerMenu>
      <ContainerBody>
        <InfoBoxContainer>
          <InfoBox1>
            <div className="content">
              <label className="imc-label">IMC</label>
              <label className="imc">{resultadoIMC.imc}</label>
              <label className="imc-label">Grau: {resultadoIMC.grau}</label>
              <div className="objetivo-container">
                <label className="objetivo">Objetivo: </label>
                <label className="objetivo">
                  {goals.length > 0 ? goals.map((goals) => goals.goals).join(', ') : 'Sem objetivo definido'}
                </label>              </div>
            </div>
          </InfoBox1>
          <InfoBox2>
            <div className="content">
              <label className="consumo-label">Consumo de água</label>
              <label className="consumo-agua">{consumoAgua}</label>
            </div>
          </InfoBox2>
        </InfoBoxContainer>
        <FoodBoxContainer>
          <FoodBox>
            <MealInfo>
              <MealTypeContainer>
                <MealType>Almoço</MealType>
                <Icon>
                  <IonIcon icon={Icons.create} />
                </Icon>
              </MealTypeContainer>
              <MealTimeContainer>
                <Icon>
                  <IonIcon icon={Icons.time} />
                </Icon>
                <Mealtime>12:20</Mealtime>
              </MealTimeContainer>
              <MealItems>
                {items.map((item, index) => (
                  <p key={index}>- {item}</p>
                ))}
              </MealItems>
              <MealKcal>
                <label>Total Kcal: </label>
                {totalCalorias}
              </MealKcal>
            </MealInfo>
            <ChartContainer>
              <MealChart />
            </ChartContainer>
          </FoodBox>
        </FoodBoxContainer>
      </ContainerBody>
      <Footer>
        <div>
          Copyright © 2024 / 2025 | HighTech
          <br />
          Todos os direitos reservados
        </div>
        <ImgIcon>
          <img src={imgLogoSemFundo} alt="Logo Nutritech" />
        </ImgIcon>
      </Footer>
    </>
  );
};

export default Home;  