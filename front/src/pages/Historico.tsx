import React, { useState, useEffect } from "react";
import {ContainerMenu, Navbar, Sidebar, SidebarContent, Text, Icon, Item, Footer, ImgIcon,} from "../styled/styled_Main";
import styled_Historico from "../styled/styled_Historico";
import imgLogoSemFundo from "../logo/img-logo-semfundo.png";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { AdmMenu } from "../components";
import { UserProvider } from "../contexts";

const {
  ContainerHistorico,
  PeriodoSelector,
  PeriodoButton,
  WhiteBox,
  MealInfo,
  HomeContainer,
} = styled_Historico();

interface Meal {
  type: string;
  time: string;
  items: string[];
}

const Historico: React.FC = () => {
  const [periodo, setPeriodo] = useState<"dia" | "semana" | "mes">("dia");
  const [historico, setHistorico] = useState<Meal[]>([]); // Estado para armazenar o histórico
  const navigate = useNavigate(); // Inicializar o hook useNavigate

  // Função para adicionar um histórico de refeição
  const adicionarHistorico = (meal: Meal) => {
    setHistorico([...historico, meal]);
  };

  // Exemplo de como você poderia adicionar um histórico
  useEffect(() => {
    // Adiciona um histórico inicial
    const mealData: Meal = {
      type: "Almoço",
      time: "12:20",
      items: [
        "150g de frango grelhado",
        "1 colher de arroz integral",
        "25g de brócolis",
        "Salada verde com azeite de oliva",
      ],
    };
    adicionarHistorico(mealData);
  }, []);

  return (
    <ContainerHistorico>
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
      </ContainerMenu>

      <HomeContainer>
        <PeriodoSelector>
          <PeriodoButton
            className={periodo === "dia" ? "active" : ""}
            onClick={() => setPeriodo("dia")}
          >
            Dia
          </PeriodoButton>
          <span className="separador"></span>
          <PeriodoButton
            className={periodo === "semana" ? "active" : ""}
            onClick={() => setPeriodo("semana")}
          >
            Semana
          </PeriodoButton>
          <span className="separador"></span>
          <PeriodoButton
            className={periodo === "mes" ? "active" : ""}
            onClick={() => setPeriodo("mes")}
          >
            Mês
          </PeriodoButton>
        </PeriodoSelector>

        {periodo === "dia" && (
          <div className="historico-container">
            {historico.map((meal, index) => (
              <WhiteBox key={index}>
                <MealInfo>
                  <span className="meal-type">{meal.type}</span>
                  <span className="meal-time">Horário: {meal.time}</span>
                  <span className="meal-items">
                    {meal.items.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  </span>
                </MealInfo>
              </WhiteBox>
            ))}
          </div>
        )}

        {periodo === "semana" && (
          <WhiteBox>
            <MealInfo>
              <p>Histórico da semana será exibido aqui...</p>
            </MealInfo>
          </WhiteBox>
        )}

        {periodo === "mes" && (
          <WhiteBox>
            <MealInfo>
              <p>Histórico do mês será exibido aqui...</p>
            </MealInfo>
          </WhiteBox>
        )}
      </HomeContainer>

      {/* <Footer>
        <div>
          Copyright © 2024 / 2025 | HighTech
          <br />
          Todos os direitos reservados
        </div>
        
        <ImgIcon>
          <img src={imgLogoSemFundo} alt="Logo Nutritech" />
        </ImgIcon>
      </Footer> */}

    </ContainerHistorico>
  );
};

export default Historico;