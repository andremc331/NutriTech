import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import eat from "../services/Eat"; // Importando o serviço da API
import { UserContext } from "../contexts";  // Certifique-se de importar o contexto de usuário ou serviço que retorna os dados de peso
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
import { EatFoodProps, ErrorProps, HistoricoData, UserContextProps } from "../types";
import { useUser } from "../hooks";

// Definindo os componentes do styled
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
  FilterButton,
} = styled_Progresso();

const Metas: React.FC = () => {
  const navigate = useNavigate(); // Hook para navegação
  const { fetchWeightAndHeight = async () => ({ weight: 0, height: 0 }) } =
    useContext(UserContext) || ({} as UserContextProps);

  // Estado para dados de alimentos e peso
  const [historicoData, setHistoricoData] = useState<HistoricoData[]>([]);
  const [startDate, setStartDate] = useState<string>(""); // Data inicial
  const [endDate, setEndDate] = useState<string>(""); // Data final
  const [pesoInicial, setPesoInicial] = useState<number>(0); // Peso inicial
  const [pesoAtual, setPesoAtual] = useState<number>(0); // Peso atual
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newWeight, setNewWeight] = useState<number | "">(""); // Novo peso
  const { saveProfile } = useUser();

  // Função para buscar dados de peso
  const fetchPeso = async () => {
    try {
      const data = await fetchWeightAndHeight(); // Busca dados de peso
      if (data) {
        setPesoInicial(data.weight); // Assume que a resposta tem o campo weight
        setPesoAtual(data.weight); // Assume que a resposta tem o campo weight
      }
    } catch (error) {
      console.error("Erro ao buscar dados de peso:", error);
    }
  };

  // Função para buscar dados de alimentos
  const fetchData = async () => {
    if (!startDate || !endDate) {
      console.log("Por favor, insira as datas para buscar os dados.");
      return;
    }

    try {
      const foodData: EatFoodProps[] | ErrorProps = await eat.listFoods(startDate);

      // Verifica se o retorno é um erro
      if ('error' in foodData) {
        console.error("Erro ao buscar alimentos:", foodData.error);
        return;
      }

      // Mapeia os dados para o formato esperado
      const mappedData: HistoricoData[] = foodData.map((food) => ({
        id: food.id,
        foodName: food.description, // Mapeia 'description' para 'foodName'
        foodGroup: food.foodGroup, // Supondo que foodGroup existe nos dados
        quantity: food.quantity,
        date: food.date,
      }));

      setHistoricoData(mappedData); // Atualiza o estado com os dados mapeados
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  // Função para calcular a média de um array de números
  const calculateAverage = (arr: number[]): number => {
    const total = arr.reduce((acc, weight) => acc + weight, 0);
    return total / arr.length;
  };

  // Calcula a média de pesos (caso tenha um array de pesos)
  const mediaTotal = pesoInicial && pesoAtual ? calculateAverage([pesoInicial, pesoAtual]) : 0;

  // Função para abrir o modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Função para salvar o novo peso
  const saveNewWeight = async () => {
    const birth_date = "2000-01-01"; // Você pode obter essa data de algum lugar, como do perfil do usuário
    const sex = "Masculino"; // Supondo que você tenha esse dado em algum lugar
    const height = 0; // Caso o usuário tenha fornecido ou tenha no perfil
    const weight = 0;

    const success = await saveProfile(birth_date, weight, sex, height);

    if (success) {
      console.log("Novo peso salvo:", newWeight);
      setPesoAtual(weight); // Atualiza o peso na interface
      setIsModalOpen(false); // Fecha o modal após salvar
    } else {
      console.error("Falha ao salvar o peso");
    }
  };
  // Chama as funções de inicialização
  useEffect(() => {

    fetchPeso(); // Chama a função para buscar os dados de peso
  }, []);

  // UseEffect para chamar a função de buscar dados quando as datas mudarem
  useEffect(() => {
    if (startDate && endDate) {
      fetchData(); // Chama a função para buscar dados de alimentos
    }
  }, [startDate, endDate]);

  return (
    <>
      {/* Barra de navegação */}
      <ContainerMenu>
        <Navbar>
          <h1>Nome de usuário</h1>
          <UserProvider>
            <AdmMenu />
          </UserProvider>
        </Navbar>

        {/* Barra lateral */}
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

      {/* Corpo da aplicação */}
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
          {/* <FilterButton onClick={fetchData} title="Filtrar">
            <Icon>
              <IonIcon icon={Icons.filter} />
            </Icon>
          </FilterButton> */}
        </Container>
        <ChartContainer>
          <PesoChart>
            <div className="content">
              <WeightChart />
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
              <Button onClick={saveNewWeight}>Salvar</Button>
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
        </div>
        <ImgIcon>
          <img src={imgLogoSemFundo} alt="Logo Nutritech" />
        </ImgIcon>
      </Footer>
    </>
  );
};

export default Metas;