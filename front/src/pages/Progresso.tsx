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
  Title,
  Label,
  Input,
  Container,
  ChartContainer,
  VerticalContainer,
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
          <Title>Progresso</Title>
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
