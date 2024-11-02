import React, { useState, useEffect } from "react";
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
import { UserProvider } from "../contexts";
import axios from "axios";

const { Title, HistoryboxContainer, HistoryBox, MealInfo, Input, Label } = styled_Historico();

interface Meal {
  type: string;
  time: string;
  items: string[];
}

const Historico: React.FC = () => {
  const [historico, setHistorico] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistorico = async () => {
      setLoading(true); // Define que estamos carregando
      try {
        const response = await axios.get('http://localhost:3011/historico');
        setHistorico(response.data);
      } catch (error) {
        console.error("Erro ao carregar o histórico:", error);
      } finally {
        setLoading(false); // Define que o carregamento terminou
      }
    };
    fetchHistorico();
  }, []);

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
        <Title>Histórico</Title>
        <Label>
          Data Inicial:
          <Input type="date" />
        </Label>
        <Label>
          Data Final:
          <Input type="date" />
        </Label>
        <HistoryboxContainer>
          <HistoryBox>
            <MealInfo>
              {loading ? ( // Exibir loading enquanto carrega
                <p>Carregando...</p>
              ) : historico.length > 0 ? ( // Verifica se há histórico
                historico.map((meal, index) => (
                  <div key={index}>
                    <h4>
                      {meal.type} - {meal.time}
                    </h4>
                    <ul>
                      {meal.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <p>Nenhum histórico encontrado.</p> // Mensagem quando não há histórico
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