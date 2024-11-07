import React, { useContext, useEffect, useState } from "react";
import MealChart from "../components/MealChart";
import imgLogoSemFundo from "../assets/img-logo-semfundo.png";
import {
  ContainerBody,
  ContainerMenu,
  Navbar,
  Sidebar,
  SidebarContent,
  Icon,
  Item,
  Footer,
  ImgIcon,
} from "../styled/styled_Main";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import styled_Home from "../styled/styled_Home";
import { useNavigate } from "react-router-dom";
import { AdmMenu } from "../components";
import { UserContext, UserProvider, EatContext } from "../contexts";
import { GoalProps, UserContextProps } from "../types";

interface Meal {
  date: string;
  foodName: string;
  quantity: number;
  food_name: string;
}

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
  const { getHistoricoWithFoodName, getHistoricoByDate } = useContext(EatContext);
  const [historicoData, setHistoricoData] = useState<Meal[]>([]);
  const [pesoPessoa, setPesoPessoa] = useState<number>(0);
  const [alturaPessoa, setAlturaPessoa] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [goals, setGoals] = useState<GoalProps[]>([]);
  const { getGoals } = useContext(UserContext) || ({} as UserContextProps);
  const [error, setError] = useState<string | null>(null);
  const { fetchWeightAndHeight = async () => ({ weight: 0, height: 0 }) } =
    useContext(UserContext) || ({} as UserContextProps);

  const [showLastMeal, setShowLastMeal] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        // 1. Buscar peso e altura do usuário
        const data = await fetchWeightAndHeight();
        if ("weight" in data && "height" in data) {
          setPesoPessoa(data.weight);
          setAlturaPessoa(data.height);
        }
  
        // 2. Buscar metas do usuário
        const userGoals = await getGoals();
        setGoals(userGoals);
  
        // 3. Buscar histórico de refeições e ordená-las pela data
        const historico = await getHistoricoWithFoodName();
        if (Array.isArray(historico)) {
          // Ordena as refeições por data (do mais recente para o mais antigo)
          const sortedHistorico = historico.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB.getTime() - dateA.getTime(); // Ordem decrescente
          });
          setHistoricoData(sortedHistorico);
        } else {
          setError("Dados do histórico são inválidos.");
        }
      } catch (e: any) {
        setError("Erro ao carregar os dados.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchInitialData();
  }, [fetchWeightAndHeight, getGoals, getHistoricoWithFoodName]);

  const calcularCalorias = (items: MealItem[]): number => {
    return items.reduce(
      (total, item) => total + (caloriasPorItem[item] || 0),
      0
    );
  };

  const calcularConsumoAgua = (peso: number): string => {
    const consumo = peso * 35;
    const litros = consumo / 1000;
    return `${litros.toFixed(1).replace(".", ",")} L`;
  };

  const consumoAgua = calcularConsumoAgua(pesoPessoa);

  const calcularIMC = (
    peso: number,
    altura: number
  ): { imc: string; grau: string } => {
    const imc = peso / (altura * altura);
    let grau = "";
    if (imc < 16) grau = "Magreza grave";
    else if (imc < 16.9) grau = "Magreza moderada";
    else if (imc < 18.5) grau = "Magreza leve";
    else if (imc < 24.9) grau = "Peso ideal";
    else if (imc < 29.9) grau = "Sobrepeso";
    else if (imc < 34.9) grau = "Obesidade grau I";
    else if (imc < 39.9) grau = "Obesidade grau II";
    else grau = "Obesidade grau III ou superior";
    return { imc: imc.toFixed(1).replace(".", ","), grau };
  };

  const resultadoIMC = calcularIMC(pesoPessoa, alturaPessoa);

  if (loading) {
    return <div>Carregando...</div>;
  }

  const handleShowLastMeal = async () => {
    const endDate = new Date().toISOString().split("T")[0]; // Hoje
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 1); // Ontem
    const startDateFormatted = startDate.toISOString().split("T")[0];

    const meals = await getHistoricoByDate(startDateFormatted, endDate);

    if (meals.length > 0) {
      setHistoricoData(meals);
    } else {
      setError("Nenhuma refeição encontrada para o intervalo.");
    }
  };

  const lastMeal = historicoData.length > 0 ? historicoData[0] : null; // Agora a refeição mais recente é a primeira da lista ordenada

    const totalCalorias = lastMeal
    ? calcularCalorias([lastMeal.foodName as MealItem]) * lastMeal.quantity
    : 0;

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
                  {goals.length > 0
                    ? goals.map((goal) => goal.goals).join(", ")
                    : "Sem objetivo definido"}
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
              <button onClick={handleShowLastMeal}>Mostrar última refeição</button>
              {lastMeal ? (
                <div>
                  <h2>Refeição</h2>
                  <p>Dia: {lastMeal.date}</p>
                  <p>{lastMeal.food_name}</p>
                  <p>
                    Quantidade ({lastMeal.quantity}kg)
                  </p>
                  <p>{totalCalorias} calorias</p>
                </div>
              ) : (
                <p>...</p>
              )}
            </MealInfo>
          </FoodBox>
        </FoodBoxContainer>
      </ContainerBody>
    </>
  );
};

export default Home;