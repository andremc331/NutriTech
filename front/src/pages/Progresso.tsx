import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import eat from "../services/Eat";
import { UserContext } from "../contexts";
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
import styled_Progresso from "../styled/styled_Progresso";
import imgLogoSemFundo from "../assets/img-logo-semfundo.png";
import { IonIcon } from "@ionic/react";
import { Icons } from "../components/icons";
import ConsumeChart from "../components/ConsumeChart";
import WeightChart from "../components/WeightChart";
import { UserProvider } from "../contexts";
import { AdmMenu } from "../components";
import {
  EatFoodProps,
  ErrorProps,
  HistoricoData,
  UserContextProps,
} from "../types";
import { useUser } from "../hooks";

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
  const navigate = useNavigate();
  const { fetchWeightAndHeight = async () => ({ weight: 0, height: 0 }) } =
    useContext(UserContext) || ({} as UserContextProps);

  const [historicoData, setHistoricoData] = useState<HistoricoData[]>([]);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [pesoInicial, setPesoInicial] = useState<number>(0);
  const [pesoAtual, setPesoAtual] = useState<number>(0);
  const [pesoAnterior, setPesoAnterior] = useState<number>(0); // Novo estado para o peso anterior
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newWeight, setNewWeight] = useState<number | "">("");
  const { saveProfile, updateWeight } = useUser();
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    if (!startDate || !endDate) {
      console.log("Por favor, insira as datas para buscar os dados.");
      return;
    }

    try {
      const foodData: EatFoodProps[] | ErrorProps = await eat.listFoods(
        startDate
      );

      if ("error" in foodData) {
        console.error("Erro ao buscar alimentos:", foodData.error);
        return;
      }

      const mappedData: HistoricoData[] = foodData.map((food) => ({
        id: food.id,
        foodName: food.description,
        foodGroup: food.foodGroup,
        quantity: food.quantity,
        date: food.date,
      }));

      setHistoricoData(mappedData);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  const calculateAverage = (arr: number[]): number => {
    const total = arr.reduce((acc, weight) => acc + weight, 0);
    return total / arr.length;
  };

  const mediaTotal =
    pesoInicial && pesoAtual ? calculateAverage([pesoInicial, pesoAtual]) : 0;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchPeso = async () => {
    try {
      const data = await fetchWeightAndHeight();
      if (data) {
        setPesoInicial(data.weight);
        setPesoAtual(data.weight);
        setPesoAnterior(data.weight); // Armazena o peso inicial como o "anterior"
      }
    } catch (error) {
      console.error("Erro ao buscar dados de peso:", error);
    }
  };

  const saveNewWeight = async () => {
    if (!newWeight) return;

    try {
      // Chama a função updateWeight para enviar a atualização do peso ao backend
      const success = await updateWeight(newWeight);

      if (success) {
        console.log("Novo peso salvo com sucesso:", newWeight);
        setPesoAnterior(pesoAtual); // Atualiza o peso anterior com o peso atual antes de atualizar
        setPesoAtual(newWeight);
        setIsModalOpen(false); // Fecha o modal
      } else {
        setError("Falha ao salvar o peso."); // Define um erro no estado
      }
    } catch (error) {
      console.error("Erro ao tentar salvar o peso:", error);
      setError("Erro ao tentar salvar o peso."); // Define um erro no estado
    }
  };

  useEffect(() => {
    fetchPeso();
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      fetchData();
    }
  }, [startDate, endDate]);

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
        <Container>
          <title>Progresso</title>
          <Label>
            Data Inicial:
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Label>
          <Label>
            Data Final:
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Label>
        </Container>
        <ChartContainer>
        <PesoChart>
            <div className="content">
              {/* O gráfico de peso pode agora utilizar pesoAnterior e pesoAtual */}
              <WeightChart 
                pesoAnterior={pesoAnterior} // Passa o peso anterior para o gráfico
                pesoAtual={pesoAtual} 
              />
            </div>
          </PesoChart>
        </ChartContainer>

        <VerticalContainer>
          <FoodChart>
            <div className="content">
              <ConsumeChart data={historicoData} />
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
              <Button onClick={saveNewWeight}>Salvar</Button>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}

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

export default Metas;
