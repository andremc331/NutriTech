import React, { useState } from "react";
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
import styled_Progresso from "../styled/styled_Progresso";
import imgLogoSemFundo from "../logo/img-logo-semfundo.png";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import ConsumeChart from "../components/ConsumeChart";
import WeightChart from "../components/WeightChart";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { UserProvider } from "../contexts";
import { AdmMenu } from "../components";

const {
  FoodChart,
  GoalInfo,
  PesoChart,
  Label,
  Input,
  Button,
  ButtonCancel,
  Container,
  ChartContainer,
  VerticalContainer,
  ModalOverlay,
  ModalContent,
  ModalButtons,
} = styled_Progresso();

const Metas: React.FC = () => {
  const navigate = useNavigate(); // Inicializar o hook useNavigate

  const weights = [90, 82, 74, 80, 86, 63, 62];

  const calculateAverage = (arr: number[]) => {
    const total = arr.reduce((acc, weight) => acc + weight, 0);
    return total / arr.length;
  };

  const pesoInicial = weights[0]; // Peso inicial
  const pesoAtual = weights[weights.length - 1]; // Peso atual
  const mediaTotal = calculateAverage(weights); // Média dos pesos

  //Função para o botão atualizar o peso
  // Estado para controlar a visibilidade do modal de atualização de peso
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newWeight, setNewWeight] = useState<number | "">(""); // Estado para o novo peso

  // Função para abrir o modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Função para salvar o novo peso
  const saveWeight = () => {
    // Aqui você pode atualizar o peso na sua lógica
    console.log("Novo peso salvo:", newWeight);
    setIsModalOpen(false); // Fecha o modal
  };

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
        <Container>
          <Label>
            Data Inicial:
            <Input type="date" />
          </Label>
          <Label>
            Data Final:
            <Input type="date" />
          </Label>
        </Container>
        <ChartContainer>
          <PesoChart>
            <div className="content">
              {/* Conteúdo do PesoChart aqui */}
              <WeightChart />
            </div>
          </PesoChart>
        </ChartContainer>
        <VerticalContainer>
          <FoodChart>
            <div className="content">
              {/* Conteúdo do FoodChart aqui */}
              <ConsumeChart />
            </div>
          </FoodChart>
          <GoalInfo>
            <div className="content">
              <label className="peso-label">Peso Atual:</label>
              <label className="peso">{pesoAtual.toFixed(1)} KG</label>
              <label className="peso-label">Peso Inicial:</label>
              <label className="peso">{pesoInicial.toFixed(1)} KG</label>
              <div className="objetivo-container">
                <label className="objetivo">Média Total:</label>
                <label className="objetivo">{mediaTotal.toFixed(1)} KG</label>
                <Button onClick={openModal}>
                  Atualizar
                  <Icon>
                    <IonIcon icon={Icons.create} />
                  </Icon>
                </Button>
              </div>
            </div>
          </GoalInfo>
        </VerticalContainer>
      </ContainerBody>

      {/* Modal de atualização de peso */}
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h3>Atualizar Peso</h3>
            <Input
              type="text"
              value={newWeight}
              onChange={(e) => setNewWeight(Number(e.target.value))}
            />
            <ModalButtons>
              <ButtonCancel onClick={closeModal}>Cancelar</ButtonCancel>
              <Button onClick={saveWeight}>Salvar</Button>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}

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

export default Metas;
