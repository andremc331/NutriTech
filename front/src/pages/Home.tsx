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
import { UserContext, EatContext, UserProvider } from "../contexts";
import { GoalProps, Meal, UserContextProps } from "../types";
import { formatDateTime } from "../components/Date";
import styled from "styled-components";

// Definindo o tipo MealItem com id opcional
type MealItem = {
  id?: number; // Tornando 'id' opcional
  nome: string;
  calorias: number;
};

const caloriasPorItem: Record<string, number> = {
  Arroz: 130,
  Feijão: 100,
  Frango: 200,
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
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // Estado para o modo escuro
  const { getHistoricoWithFoodName, getHistoricoByDate } =
    useContext(EatContext);
  const [historicoData, setHistoricoData] = useState<Meal[]>([]);
  const [pesoPessoa, setPesoPessoa] = useState<number>(0);
  const [alturaPessoa, setAlturaPessoa] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [goals, setGoals] = useState<GoalProps[]>([]);
  const { getGoals, currentUser } =
    useContext(UserContext) || ({} as UserContextProps); // Acessando currentUser aqui
  const [error, setError] = useState<string | null>(null);
  const { fetchWeightAndHeight = async () => ({ weight: 0, height: 0 }) } =
    useContext(UserContext) || ({} as UserContextProps);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Alterna o estado do modo escuro
  };

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

        // 3. Buscar histórico de refeições (somente com getHistoricoByDate)
        const endDate = new Date().toISOString().split("T")[0]; // Hoje
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 1); // Ontem
        const startDateFormatted = startDate.toISOString().split("T")[0];

        const meals = await getHistoricoByDate(startDateFormatted, endDate);
        console.log("Retorno de getHistoricoByDate:", meals);

        if (meals.length > 0) {
          // Ordena as refeições pela data (do mais recente para o mais antigo)
          // Caso a data seja igual, ordena pelo índice na lista (ou outro critério de sua escolha)
          const sortedMeals = meals.sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();

            // Se as datas forem iguais, ordena pela posição no array
            if (dateA === dateB) {
              return meals.indexOf(b) - meals.indexOf(a);
            }

            return dateB - dateA; // Ordem decrescente
          });
          setHistoricoData(sortedMeals);
        } else {
          setError("Nenhuma refeição encontrada para o intervalo.");
        }
      } catch (e: any) {
        setError("Erro ao carregar os dados.");
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [fetchWeightAndHeight, getGoals, getHistoricoByDate, setHistoricoData]);

  // Definir a última refeição, agora após a atualização de historicoData
  const lastMeal = historicoData.length > 0 ? historicoData[0] : null;
  console.log("Retorno de lastMeal:", lastMeal);

  // Função para calcular as calorias com base nos itens
  const calcularCalorias = (items: MealItem[]): number => {
    return items.reduce(
      (total, item) => total + (caloriasPorItem[item.nome] || 100), // Fallback para 100 calorias
      0
    );
  };

  // Função para calcular o consumo de água com base no peso
  const calcularConsumoAgua = (peso: number): string => {
    const consumo = peso * 35;
    const litros = consumo / 1000;
    return `${litros.toFixed(1).replace(".", ",")} L`;
  };

  const consumoAgua = calcularConsumoAgua(pesoPessoa);

  // Função para calcular o IMC
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

  const mealChartData = lastMeal
    ? {
      protein: lastMeal.protein || 0,
      lipids: lastMeal.lipids || 0,
      carbohydrates: lastMeal.carbohydrates || 0,
      fibers: lastMeal.fibers || 0,
    }
    : { protein: 0, lipids: 0, carbohydrates: 0, fibers: 0 };

  const totalCalorias = lastMeal
    ? calcularCalorias([{ nome: lastMeal.foodName, calorias: 0 }]) *
    lastMeal.quantity
    : 0;

  return (
    <>
      <ContainerMenu>
        <Navbar>
          <h1>{currentUser?.nome || "Nome de usuário"}</h1>{" "}
          {/* Exibindo o nome do usuário */}
          <Container>
            <ToggleButton onClick={toggleTheme}>
              <IonIcon icon={isDarkMode ? Icons.moon : Icons.sunny} />
            </ToggleButton>
            <UserProvider>
              <AdmMenu />
            </UserProvider>
          </Container>
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
                {lastMeal ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: "15px",
                    }}
                  >
                    <h3>Refeição do dia:</h3>


                    <h2>{lastMeal.food_name}</h2>
                    <h4>Quantidade: {lastMeal.quantity}kg</h4>
                    {/* <p>Total de Calorias: {totalCalorias} Kcal</p> */}
                    <div
                      style={{ display: "inline-flex", alignItems: "center" }}
                    >
                      <IonIcon
                        icon={Icons.time}
                        style={{ marginRight: "8px" }}
                      />
                      <label className="meal-time">
                        Horário: {formatDateTime(lastMeal.date)}
                      </label>
                    </div>
                  </div>
                ) : (
                  <div>Sem refeição registrada</div>
                )}
              </MealInfo>
              {/* <ChartContainer>
                <MealChart {...mealChartData} />
              </ChartContainer> */}
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
      </ContainerMenu>
    </>
  );
};

export default Home;

const ToggleButton = styled.button`
  background-color: transparent; /* Remove o fundo */
  color: ${({ theme }) => theme.buttonColor}; /* Mantém a cor do ícone */
  border: none; /* Remove a borda */
  font-size: 35px; /* Define o tamanho do ícone */
  padding: 0; /* Remove o padding */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  ion-icon {
    font-size: inherit;
    color: white;
  }

  margin-right: 25px;
`;

const Container = styled.div`
  display: flex;
  align-items: center; /* Alinha o conteúdo verticalmente no centro */
`;
