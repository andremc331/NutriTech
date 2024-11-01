import { ContainerMenu, Navbar, Sidebar, SidebarContent, Text, Icon, Item, Footer, ImgIcon,} from "../styled/styled_Main";
import styled_Progresso from "../styled/styled_Progresso";
import imgLogoSemFundo from "../assets/img-logo-semfundo.png";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import ConsumeChart from "../components/ConsumeChart";
import WeightChart from "../components/WeightChart";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { UserProvider } from "../contexts";
import { AdmMenu } from "../components";
import { useState } from "react";

const {
  Body,
  Charts,
  Content,
  Dashboard,
  FoodChart,
  GoalInfo,
  Header,
  Tab,
  Tabs,
  WeightLossChart,
  PeriodoSelector,
  PeriodoButton,
} = styled_Progresso();

const Metas: React.FC = () => {
  const navigate = useNavigate(); // Inicializar o hook useNavigate
  const [periodo, setPeriodo] = useState<"dia" | "semana" | "mes">("dia");
  // const [historico, setHistorico] = useState<Meal[]>([]); // Estado para armazenar o histórico


  return (
    <Body>
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
      <Dashboard>
        <Content>
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

        {/* {periodo === "dia" && (
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
        )} */}

          <Charts>
            <WeightLossChart>
              <h2>Gráfico de Perda de Peso</h2>
              <WeightChart />
            </WeightLossChart>
            <FoodChart>
              <h2>Gráfico de Consumo Alimentar</h2>
              <ConsumeChart />
            </FoodChart>
          </Charts>

          <GoalInfo>
            <div>
              <span>Objetivo:</span>
              <span>75.0 KG</span>
            </div>
            <div>
              <span>Distância do Objetivo:</span>
              <span>3.0 KG</span>
            </div>
            <div>
              <span>Atual:</span>
              <span>72.0 KG</span>
            </div>
            <div>
              <span>Variação Total:</span>
              <span>-5.0 KG</span>
            </div>
          </GoalInfo>
        </Content>
      </Dashboard>

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
      
    </Body>
  );
};

export default Metas;