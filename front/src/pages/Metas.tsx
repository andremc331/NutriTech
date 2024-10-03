// import '../CSS/Metas.css'
import styled_Metas from '../styled/styled_Metas';
const{
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
  NavButton, 
  NavLinks, 
  Sidebar, 
  SidebarContent, 
  Tab, 
  Tabs, 
  WeightLossChart, 
  Text
}=styled_Metas();

interface MenuPrincipalProps {
  setPage: (
    page:
      | "bem-vindo"
      | "cadastro"
      | "info-pessoal"
      | "definicao-metas"
      | "termosdeuso"
      | "home"
      | "cardapio"
      | "historico"
      | "metas"
      | "configuracoes"
  ) => void;
}

const Metas: React.FC<MenuPrincipalProps> = ({ setPage }) => {
  return (
    <Body>
      <ContainerMenu>
        <BarraNavegacao>
          <h1>Nome do usuário</h1>
          <NavLinks>
            <NavButton>Link 1</NavButton>
            <NavButton>Link 2</NavButton>
          </NavLinks>
        </BarraNavegacao>
        <Dashboard>
          <Sidebar>
            <SidebarContent>
              <Item onClick={() => setPage("home")}>
                <Text>Home</Text>
                <Icon>🏠</Icon>
              </Item>
              <Item onClick={() => setPage("cardapio")}>
                <Text>Cardápio</Text>
                <Icon>⚙️</Icon>
              </Item>
              <Item onClick={() => setPage("historico")}>
                <Text>Histórico</Text>
                <Icon>🔍</Icon>
              </Item>
              <Item onClick={() => setPage("metas")}>
                <Text>Progresso</Text>
                <Icon>⚙️</Icon>
              </Item>
              <Item onClick={() => setPage("configuracoes")}>
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
              </WeightLossChart>
              <FoodChart>
                <h2>Gráfico de Consumo Alimentar</h2>
                <canvas id="foodChart"></canvas>
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
