import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import eat from "../services/Eat"; // Importando o serviço da API
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
import { EatFoodProps, ErrorProps, HistoricoData } from "../types";

// Definindo os componentes do styled
const {
  FoodChart,
  GoalInfo,
  PesoChart,
  Label,
  Input,
  Container,
  ChartContainer,
  VerticalContainer,
} = styled_Progresso();

const Metas: React.FC = () => {
  const navigate = useNavigate(); // Inicializar o hook useNavigate
  const [historicoData, setHistoricoData] = useState<HistoricoData[]>([]); // Dados de alimentos
  const [startDate, setStartDate] = useState<string>(""); // Data inicial
  const [endDate, setEndDate] = useState<string>(""); // Data final

  // Função para buscar dados ao preencher as datas
  const fetchData = async () => {
    if (!startDate || !endDate) {
      console.log("Por favor, insira as datas para buscar os dados.");
      return;
    }

    try {
      // Chamada para pegar os dados de alimentos
      const foodData: EatFoodProps[] | ErrorProps = await eat.listFoods(startDate);

      // Verifica se o retorno é um erro
      if ('error' in foodData) {
        console.error("Erro ao buscar alimentos:", foodData.error);
        return;
      }

      console.log("Resposta da API:", foodData);  // Verificando a resposta da API

      // Se não for erro, mapeia os dados para o formato esperado
      const mappedData: HistoricoData[] = foodData.map((food) => ({
        id: food.id,
        foodName: food.description,  // Mapeia 'description' para 'foodName'
        foodGroup: food.foodGroup,  // Supondo que foodGroup existe nos dados
        quantity: food.quantity,
        date: food.date,
      }));

      console.log("Dados de alimentos mapeados:", mappedData);
      setHistoricoData(mappedData);  // Atualiza o estado com os dados mapeados

    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  // Calcular média de peso
  const weights = [90, 82, 74, 80, 86, 63, 62];
  const calculateAverage = (arr: number[]) => {
    const total = arr.reduce((acc, weight) => acc + weight, 0);
    return total / arr.length;
  };

  const pesoInicial = weights[0]; // Peso inicial
  const pesoAtual = weights[weights.length - 1]; // Peso atual
  const mediaTotal = calculateAverage(weights); // Média dos pesos

  // UseEffect para chamar a função de buscar dados quando as datas mudarem
  useEffect(() => {
    if (startDate && endDate) {
      fetchData();
    }
  }, [startDate, endDate]); // Dependendo de startDate e endDate, o fetchData será chamado

  return (
    <>
      {/* Barra de navegação da aplicação */}
      <ContainerMenu>
        <Navbar>
          <h1>Nome de usuário</h1>
          <UserProvider>
            <AdmMenu />
          </UserProvider>
        </Navbar>

        {/* Barra lateral da aplicação */}
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
          <button onClick={fetchData}>Buscar Dados</button>
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
              {/* Passando os dados para o ConsumeChart */}
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
              </div>
            </div>
          </GoalInfo>
        </VerticalContainer>
      </ContainerBody>

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
