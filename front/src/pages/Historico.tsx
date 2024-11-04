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
import { UserProvider, FoodContext } from "../contexts";

const { Title, HistoryboxContainer, HistoryBox, MealInfo, Input, Label } = styled_Historico();

interface Meal {
  date: string;
  food_name: string;
  quantity: number;
}

const Historico: React.FC = () => {
  const { getHistoricoWithFoodName, getHistoricoByDate } = useContext(FoodContext);
  const [historicoData, setHistoricoData] = useState<Meal[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    // Carrega o histórico inicial
    const fetchInitialHistorico = async () => {
      setLoading(true);
      await getHistoricoWithFoodName();
      setLoading(false);
    };

    fetchInitialHistorico();
  }, [getHistoricoWithFoodName]);

  const handleFilter = async () => {
    if (!startDate || !endDate) {
      alert("Por favor, selecione ambas as datas para filtrar.");
      return;
    }
    setLoading(true);
    await getHistoricoByDate(startDate, endDate);
    setLoading(false);
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
              ) : historicoData && historicoData.length > 0 ? (
                historicoData.map((meal, index) => (
                  <div key={index}>
                    <h4>{meal.date}</h4>
                    <p>{meal.food_name} - {meal.quantity} kg</p>
                  </div>
                ))
              ) : (
                <p>Nenhum histórico encontrado.</p>
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