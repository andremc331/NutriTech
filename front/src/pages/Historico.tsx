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
import { AdmMenu } from "../components";
import { UserProvider, EatContext } from "../contexts";

const { Title, HistoryboxContainer, HistoryBox, MealInfo, MealContainer, Input, Label } = styled_Historico();

interface Meal {
  date: string;
  foodName: string;
  quantity: number;
  food_name: string;
}

const Historico: React.FC = () => {
  const { getHistoricoWithFoodName, getHistoricoByDate } = useContext(EatContext);
  const [historicoData, setHistoricoData] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // Estado de erro adicionado
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitialHistoricoWithFoodName = async () => {
      setLoading(true);
      setError(null); // Resetar o erro antes de tentar buscar os dados
      try {
        console.log("Buscando histórico com alimentos...");
        const data = await getHistoricoWithFoodName();
        console.log("Dados recebidos da rota getHistoricoWithFoodName:", data);
        setHistoricoData(data);
      } catch (e: any) {
        console.error("Erro ao buscar histórico:", e);
        setError("Erro ao carregar o histórico."); // Define uma mensagem de erro
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
      console.log(`Buscando histórico para o intervalo de datas: ${startDate} a ${endDate}`);
      const data = await getHistoricoByDate(startDate, endDate);
      console.log("Dados recebidos da rota getHistoricoByDate:", data);
      setHistoricoData(data);
    } catch (e: any) {
      console.error("Erro ao aplicar o filtro:", e);
      setError("Erro ao aplicar o filtro."); // Define uma mensagem de erro
    } finally {
      setLoading(false);
    }
  };

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
        <Title>Histórico</Title>
        <Label>
          Data Inicial: 
          <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </Label>
        <Label>
          Data Final: 
          <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </Label>
        <button onClick={handleFilter}>Filtrar</button>

        <HistoryboxContainer>
          <HistoryBox>
            <MealInfo>
              {loading ? (
                <p>Carregando...</p>
              ) : error ? (
                <p>{error}</p> // Exibe a mensagem de erro, se houver
              ) : historicoData.length > 0 ? (
                historicoData.map((meal, index) => (
                  <MealContainer key={index}> {/* Usando 'key' com o index */}
                    <div>
                      <h4>{meal.date}</h4>
                      <p>{meal.foodName} - {meal.quantity} kg</p>
                      <p>{meal.food_name}</p>
                    </div>
                  </MealContainer>
                ))
              ) : (
                <p>Clique em Filtrar para buscar.</p>
              )}
            </MealInfo>
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
