import React, { useContext, useEffect, useState } from "react";
import MealChart from "../components/MealChart";
import imgLogoSemFundo from "../assets/img-logo-semfundo.png";
import { ContainerBody, ContainerMenu, Navbar, Sidebar, SidebarContent, Icon, Item, Footer, ImgIcon } from "../styled/styled_Main";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import styled_Home from "../styled/styled_Home";
import { useNavigate } from "react-router-dom";
import { AdmMenu } from "../components";
import { UserContext, UserProvider, EatContext } from "../contexts";
import { GoalProps, Meal, UserContextProps } from "../types";

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

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { getHistoricoWithFoodName } = useContext(EatContext);
  const [historicoData, setHistoricoData] = useState<Meal[]>([]);
  const [pesoPessoa, setPesoPessoa] = useState<number>(0);
  const [alturaPessoa, setAlturaPessoa] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [goals, setGoals] = useState<GoalProps[]>([]);
  const { getGoals } = useContext(UserContext) || {} as UserContextProps;
  const { fetchWeightAndHeight = async () => ({ weight: 0, height: 0 }) } = useContext(UserContext) || {} as UserContextProps;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeightAndHeight();
      if ("weight" in data && "height" in data) {
        setPesoPessoa(data.weight);
        setAlturaPessoa(data.height);
      }

      const userGoal = await getGoals();
      setGoals(userGoal);

      // Buscar o histórico de refeições
      const historicoResponse = await getHistoricoWithFoodName(); // Renomeado aqui
      console.log("Resposta da API de histórico:", historicoResponse);
      setHistoricoData(historicoResponse); // Salva os dados do histórico

      setLoading(false);
    };

    fetchData();
  }, []);

  const calcularCalorias = (items: any[], index: number): number => {
    // Lógica para calcular calorias da refeição
    return 0;
  };

  const calcularConsumoAgua = (peso: number): string => {
    const consumo = peso * 35;
    const litros = consumo / 1000;
    return `${litros.toFixed(1).replace('.', ',')} L`;
  };

  const consumoAgua = calcularConsumoAgua(pesoPessoa);

  const calcularIMC = (peso: number, altura: number): { imc: string; grau: string } => {
    const imc = peso / (altura * altura);
    return { imc: imc.toFixed(1).replace('.', ','), grau: "" };
  };

  const resultadoIMC = calcularIMC(pesoPessoa, alturaPessoa);

  if (loading) {
    return <div>Carregando...</div>;
  }

  // Pegar a última refeição salva (último item do histórico)
  const lastMeal = historicoData.length > 0 ? historicoData[historicoData.length - 1] : null;

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
              <Icon><IonIcon icon={Icons.home} /></Icon>
            </Item>
            <Item onClick={() => navigate("/cardapio")}>
              <Icon><IonIcon icon={Icons.restaurant} /></Icon>
            </Item>
            <Item onClick={() => navigate("/historico")}>
              <Icon><IonIcon icon={Icons.nutrition} /></Icon>
            </Item>
            <Item onClick={() => navigate("/metas")}>
              <Icon><IonIcon icon={Icons.fitness} /></Icon>
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
                  {goals.length > 0 ? goals.map((goal) => goal.goals).join(', ') : 'Sem objetivo definido'}
                </label>
              </div>
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

              {lastMeal ? (
                <div>
                  <MealTypeContainer>
                    <MealType>Última Refeição</MealType>
                    <Icon><IonIcon icon={Icons.create} /></Icon>
                  </MealTypeContainer>
                  <MealTimeContainer>
                    <Icon><IonIcon icon={Icons.time} /></Icon>
                    <Mealtime>{lastMeal.date}</Mealtime>
                  </MealTimeContainer>
                  <MealItems>
                    <p>{lastMeal.foodName || lastMeal.food_name} - {lastMeal.quantity} kg</p>
                  </MealItems>
                </div>
              ) : (
                <p>Sem refeição registrada.</p>
              )}
              <MealKcal>
                <label>Total Kcal: </label> 0
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