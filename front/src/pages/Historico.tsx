import React, { useContext, useState, useEffect } from "react";
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
import styled_Historico from "../styled/styled_Historico";
import imgLogoSemFundo from "../assets/img-logo-semfundo.png";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import { useNavigate } from "react-router-dom";
import { AdmMenu, TableEatFood, TableEatProduct } from "../components";
import { UserProvider, EatContext, UserContext } from "../contexts";
import { formatDateTime } from "../components/Date";
import { UserContextProps } from "../types";
import { useEat } from "../hooks";

const {
  Title,
  DateboxContainer,
  HistoryboxContainer,
  HistoryBox,
  MealInfo,
  MealContainer,
  Input,
  Label,
  FilterButton,
  FilterContainer,
} = styled_Historico();

interface Meal {
  date: string;
  foodName: string;
  quantity: number;
  food_name: string;
  id: string;
}

const Historico: React.FC = () => {
  const { getHistoricoWithFoodName, getHistoricoByDate } =
    useContext(EatContext);
  const [historicoData, setHistoricoData] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // Estado de erro adicionado
  const navigate = useNavigate();
  const { getGoals, currentUser } = useContext(UserContext) || ({} as UserContextProps); // Acessando currentUser aqui
  const { products, foods, eatProducts, eatFoods, searchFood, searchProduct, createProduct, createFood, date, setDate } = useEat();
  const [selectedFood, setSelectedFood] = useState<{ food: any; quantity: number }[]>([]);


  useEffect(() => {
    const fetchInitialHistoricoWithFoodName = async () => {
      setLoading(true);
      setError(null);
      try {
        console.log("Buscando histórico com alimentos...");
        const data = await getHistoricoWithFoodName();
        console.log("Dados recebidos da rota getHistoricoWithFoodName:", data);

        // Formatar as datas para o formato desejado
        const formattedData = data.map((meal: Meal) => ({
          ...meal,
          date: formatDateTime(meal.date), // Aplica o formato correto de data
        }));

        setHistoricoData(formattedData);
      } catch (e: any) {
        console.error("Erro ao buscar histórico:", e);
        setError("Erro ao carregar o histórico.");
      } finally {
        setLoading(false);
      }
    };

    fetchInitialHistoricoWithFoodName();
  }, [getHistoricoWithFoodName]);

  const handleFilter = async () => {
    if (!startDate || !endDate) {
      alert("Por favor, selecione ambas as datas para filtrar.");
      return;
    }
    setLoading(true);
    setError(null); // Resetar o erro antes de tentar buscar os dados
    try {
      console.log(
        `Buscando histórico para o intervalo de datas: ${startDate} a ${endDate}`
      );
      const data = await getHistoricoByDate(startDate, endDate);
      console.log("Dados recebidos da rota getHistoricoByDate:", data);

      // Formatar as datas para o formato desejado
      const formattedData = data.map((meal: Meal) => ({
        ...meal,
        date: formatDateTime(meal.date), // Aplica o formato correto de data
      }));

      setHistoricoData(formattedData);
    } catch (e: any) {
      console.error("Erro ao aplicar o filtro:", e);
      setError("Erro ao aplicar o filtro.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ContainerMenu>
        <Navbar>
          <h1>{currentUser?.nome || "Nome de usuário"}</h1> {/* Exibindo o nome do usuário */}
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
        <Title>Histórico</Title>
        <DateboxContainer>
          <Label>
            Data Inicial:
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Label>
          <FilterContainer>
            <Label>
              Data Final:
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Label>
            <FilterButton onClick={handleFilter} title="Filtrar">
              <Icon>
                <IonIcon icon={Icons.filter} />
              </Icon>
            </FilterButton>
          </FilterContainer>
        </DateboxContainer>

        <HistoryboxContainer>
          <HistoryBox>
            {historicoData.length > 0 ? (
              historicoData.map((meal, index) => (
                <MealContainer key={index}>
                  <div>
                    <p>Refeição:</p>
                    <h3>{meal.food_name}</h3>
                    <h4>
                      {meal.foodName} Quantidade: {meal.quantity} kg
                    </h4>
                    <p>{meal.date}</p> {/* Exibe a data formatada */}

                    {/* Tabela de alimentos e produtos */}
                    <TableEatFood items={eatFoods} /> {/* Passando os alimentos do estado eatFoods */}
                  </div>
                </MealContainer>
              ))
            ) : (
              <p>Não há dados disponíveis.</p>
            )}
          </HistoryBox>
        </HistoryboxContainer>
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

export default Historico;
