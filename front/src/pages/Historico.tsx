import React, { useState, useEffect } from "react";
import {
  ContainerBody,
  ContainerMenu,
  Navbar,
  Sidebar,
  SidebarContent,
  Icon,
  Ico,
  Item,
  Footer,
  ImgIcon,
} from "../styled/styled_Main";
import styled_Historico from "../styled/styled_Historico";
import imgLogoSemFundo from "../logo/img-logo-semfundo.png";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { AdmMenu } from "../components";
import { UserProvider } from "../contexts";

const { HistoryboxContainer, HistoryBox, MealInfo, Input, Label } =
  styled_Historico();

interface Meal {
  type: string;
  time: string;
  items: string[];
}

const Historico: React.FC = () => {
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
    <>
      {/* Barra de navegação da aplicação */}
      <ContainerMenu>
        <Navbar>
          <h1>Nome de usuário</h1>
          <UserProvider>
            <AdmMenu />
            {/* Conteúdo da página de administração */}
          </UserProvider>
        </Navbar>

        {/* Barra lateral da aplicação */}
        <Sidebar>
          <SidebarContent>
            <Item onClick={() => navigate("/home")} title="Home">
              <Icon>
                <IonIcon icon={Icons.home} />
              </Icon>
            </Item>
            <Item onClick={() => navigate("/cardapio")} title="Cardapio">
              <Icon>
                <IonIcon icon={Icons.restaurant} />
              </Icon>
            </Item>
            <Item onClick={() => navigate("/historico")} title="Histórico">
              <Icon>
                <IonIcon icon={Icons.nutrition} />
              </Icon>
            </Item>
            <Item onClick={() => navigate("/metas")} title="Progresso">
              <Icon>
                <IonIcon icon={Icons.fitness} />
              </Icon>
            </Item>
          </SidebarContent>
        </Sidebar>
      </ContainerMenu>
      {/* Corpo da aplicação */}
      <ContainerBody>
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
              {historico.map((meal, index) => (
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
              ))}
            </MealInfo>
          </HistoryBox>
        </HistoryboxContainer>
      </ContainerBody>
      {/* Rodapé da aplicação */}
      <Footer>
        <div>
          Copyright © 2024 / 2025 | HighTech
          <br />
          Todos os direitos reservados
          <br />
          <Ico>
            <IonIcon icon={Icons.logoGithub} /> github.com/andremc331/NutriTech
          </Ico>
        </div>
        <ImgIcon>
          <img src={imgLogoSemFundo} alt="Logo Nutritech" />
        </ImgIcon>
      </Footer>
    </>
  );
};

export default Historico;
