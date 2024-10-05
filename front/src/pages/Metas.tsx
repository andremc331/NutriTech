import styled_Metas from '../styled/styled_Metas';
import ConsumeChart from '../components/ConsumeChart';
import WeightChart from "../components/WeightChart";
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const {
  BarraNavegacao, 
  Body, 
  Charts, 
  ContainerMenu, 
  Content, 
  Dashboard, 
  FoodChart, 
  GoalInfo, 
  Header, 
  Icon, 
  Item,  
  Sidebar, 
  SidebarContent, 
  Tab, 
  Tabs, 
  WeightLossChart, 
  Text
} = styled_Metas();

const Metas: React.FC = () => {
  const navigate = useNavigate(); // Inicializar o hook useNavigate

  return (
    <Body>
      <ContainerMenu>
        <BarraNavegacao>
          <h1>Nome do usuário</h1>
        </BarraNavegacao>
        <Dashboard>
          <Sidebar>
            <SidebarContent>
              <Item onClick={() => navigate("/home")}>
                <Text>Home</Text>
                <Icon>🏠</Icon>
              </Item>
              <Item onClick={() => navigate("/cardapio")}>
                <Text>Cardápio</Text>
                <Icon>⚙️</Icon>
              </Item>
              <Item onClick={() => navigate("/historico")}>
                <Text>Histórico</Text>
                <Icon>🔍</Icon>
              </Item>
              <Item onClick={() => navigate("/metas")}>
                <Text>Progresso</Text>
                <Icon>⚙️</Icon>
              </Item>
              <Item onClick={() => navigate("/configuracoes")}>
                <Text>Configurações</Text>
                <Icon>⚙️</Icon>
              </Item>
            </SidebarContent>
          </Sidebar>

          <Content>
            <Header>NOME DE USUÁRIO</Header>

            <Tabs>
              <Tab>Dia</Tab>
              <Tab className="active">Semana</Tab>
              <Tab>Mês</Tab>
            </Tabs>

            <Charts>
              <WeightLossChart>
                <h2>Gráfico de Perda de Peso</h2>
                <canvas id="weightChart"></canvas>
                <WeightChart />
              </WeightLossChart>
              <FoodChart>
                <h2>Gráfico de Consumo Alimentar</h2>
                <canvas id="foodChart"></canvas>
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
      </ContainerMenu>
    </Body>
  );
};

export default Metas;